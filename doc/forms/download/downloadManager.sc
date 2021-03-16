import sc.servlet.Context;
import javax.servlet.http.HttpServletRequest;
import sc.util.FileUtil;
import java.io.File;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

import java.util.Map;
import java.util.HashMap;

@Component
scope<session> object downloadManager {
   static public int PROD_SCC = 1;
   static public int PROD_DEV = 2;
   static public int PROD_SRC = 4;
   static public int PROD_SC4IDEA = 8;

   SiteContext docSite;

   // Set this to zero for a restricted preview where a download code is required
   static int publicProductFlags = PROD_SCC | PROD_SC4IDEA;

   final boolean requireDownloadCode = false;
   int validProductFlags = publicProductFlags;
   String currentCode = "";
   Map<String,Integer> downloadCodes = new HashMap<String,Integer>();
   {
      downloadCodes.put("TEST-C1",PROD_SCC|PROD_SC4IDEA);
      downloadCodes.put("TEST-N1",PROD_SCC|PROD_SC4IDEA|PROD_SRC);
      downloadCodes.put("TEST-D1",PROD_SCC|PROD_DEV|PROD_SRC|PROD_SC4IDEA);
   }
   boolean agreementVisible = false;

   boolean acceptedLicense = false;
   boolean invalidCode = false;

   String emailErrorText = "";

   String emailAddress = "";
   ContactType contactType = ContactType.None;

   boolean showRegisterBox = true;

   static int numSurveyQuestions = 2;

   Map<String,String> questionAnswers = new sc.util.HashMap<String,String>();

   static final String docPathName = "doc";

   void init() {
      docSite = SiteContext.findBySitePathName(docPathName);
      if (docSite == null) {
         System.out.println("Creating initial SiteContext for stratacode documentation");

         MediaManager mediaMgr = MediaManager.findByManagerPathName(docPathName);
         if (mediaMgr == null) {
            mediaMgr = new MediaManager();
            mediaMgr.managerPathName = docPathName;
            mediaMgr.mediaBaseUrl = "/images/" + docPathName + "/";
            mediaMgr.genBaseUrl = "/images/gen/" + docPathName + "/";

            mediaMgr.dbInsert(false);
         }

         Userbase userbase = Userbase.findByAppName(Userbase.defaultAppName);
         if (userbase == null) {
            userbase = new Userbase();
            userbase.initUserbase();
            userbase.appName = Userbase.defaultAppName;
            userbase.dbInsert(false);
            userbase.trackAnonIp = false;
         }

         docSite = new SiteContext();
         docSite.siteName = "StrataCode documentation";
         docSite.sitePathName = docPathName;
         docSite.mediaManager = mediaMgr;
         docSite.userbase = userbase;

         docSite.dbInsert(false);
      }
   }

   class DownloadProduct {
      String name;
      String title;
      String details;
      List<FileInfo> downloadFiles = new ArrayList<FileInfo>();

      DownloadProduct(String n, String t) {
         name = n;
         title = t;
      }

      void addFile(FileInfo f) {
         f.product = this;
         downloadFiles.add(f);
      }
   }

   class FileInfo {
      DownloadProduct product;
      String subDir;
      String fileName;
      String tag;
      String version;
      String ext;

      FileInfo(DownloadProduct p, String f, String t, String v, String subDir, String ext) {
         this.product = p;
         if (f == null)
            f = p.name;
         this.fileName = f;
         this.tag = t;
         this.version = v;
         this.subDir = subDir;
         this.ext = ext;
      }

      String getVersionInfo() {
         String versionFileName = getBuildFilePath(product.name, product.name, tag, version, subDir, "version");
         try {
            return FileUtil.getFileAsString(versionFileName).trim();
         }
         catch (IllegalArgumentException exc) {
            return "no version file: " + versionFileName;
         }
      }

      long getSize() {
         String downloadFileName = getBuildFilePath(product.name, fileName, tag, version, subDir, ext);
         return new File(downloadFileName).length();
      }
   }

   public String getBuildFilePath(String productName, String fileName, String tag, String version, String subDir, String ext) {
      if (subDir == null && ext.equals("version"))
         subDir = "build";
      // Only the zip file is in the main directory - the version file at least is in build
      return FileUtil.concat(rootDirectory, productName, "builds", tag, version, subDir, FileUtil.addExtension(fileName, ext));
   }

   @Bindable(manual=true)
   public List<DownloadProduct> getDownloadProducts() {
      ArrayList<DownloadProduct> res = new ArrayList<DownloadProduct>();
      if ((validProductFlags & PROD_SCC) != 0) {
         DownloadProduct sccProd = new DownloadProduct("scc", "StrataCode cmd (scc)");
         sccProd.addFile(new FileInfo(sccProd, "scc", "release", "latest", null, "zip"));
         if ((validProductFlags & PROD_SRC) != 0) {
            sccProd.addFile(new FileInfo(sccProd, "scc-src", "release", "latest", null, "zip"));
         }
         if ((validProductFlags & PROD_DEV) != 0) {
            sccProd.addFile(new FileInfo(sccProd, "scc", "dev", "latest", null, "zip"));
         }
         res.add(sccProd);

         if ((validProductFlags & PROD_SC4IDEA) != 0) {
            DownloadProduct sc4ideaProd = new DownloadProduct("sc4idea", "IntelliJ plugin");
            sc4ideaProd.addFile(new FileInfo(sc4ideaProd, "sc4idea", "release", "latest", "build", "zip"));
            if ((validProductFlags & PROD_DEV) != 0) {
               sc4ideaProd.addFile(new FileInfo(sc4ideaProd, "sc4idea", "dev", "latest", "build", "zip"));
            }
            res.add(sc4ideaProd);
         }
      }
      return res;
   }

   @Bindable(manual=true)
   public boolean getNeedsDownloadCode() {
      if ((validProductFlags & PROD_SRC) == 0) {
         return true;
      }

      if ((validProductFlags & PROD_SC4IDEA) == 0) {
         return true;
      }
      return false;
   }

   String rootDirectory = "/usr/local";

   void changeValidStatus(int flags) {
      validProductFlags = flags;
      Bind.sendChangedEvent(this, "downloadProducts");
      Bind.sendChangedEvent(this, "needsDownloadCode");
   }

   void validateCode() {
      if (currentCode == null || currentCode.length() == 0) {
         validProductFlags = 0;
         invalidCode = false;
         return;
      }
      UserSession session = currentUserView.getUserSession(docSite);
      Integer flags = downloadCodes.get(currentCode);
      if (flags == null) {
         flags = publicProductFlags;
         if (session != null)
            session.addSessionEvent(new InvalidCodeEvent(currentCode));
         invalidCode = true;
      }
      else {
         invalidCode = false;
         if (session != null)
            session.addSessionEvent(new CodeUnlockEvent(currentCode, flags));
         else
            System.err.println("*** No userSession for code unlock: " + currentCode);
      }

      changeValidStatus(flags);
   }

   void licenseAccepted() {
      acceptedLicense = true;
      agreementVisible = false;
      saveUser(true, false, false);

      UserSession session = currentUserView.getUserSession(docSite);
      if (session != null)
         session.addSessionEvent(new LicenseAcceptEvent());
      else
         System.err.println("*** No userSession for license accept"); 
   }

   String emailRegex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
   Pattern pattern = Pattern.compile(emailRegex);

   // TODO: this should use a 'User' layer that defines contact types with an enum
   void updateEmail(String emailAddress, ContactType contactType) {
      Matcher matcher = pattern.matcher(emailAddress);
      this.emailAddress = emailAddress;
      this.contactType = contactType;
      if (!matcher.matches()) {
         emailErrorText = "Please enter a valid email address";
         System.out.println("*** Invalid email address: " + emailAddress);
      }
      else {
         emailErrorText = "";
         saveUser(false, true, true);
         showRegisterBox = false;
         UserSession session = currentUserView.getUserSession(docSite);
         if (session != null)
            session.addSessionEvent(new UpdateEmailAndContact(emailAddress,contactType));
         else
            System.out.println("*** No userSession for updateContactInfo");
      }
   }

   void saveUser(boolean updateLicense, boolean updateEmail, boolean updateContact) {
      UserView userView = currentUserView;

      UserProfile user;
      if ((updateContact || updateEmail) && emailAddress != null && pattern.matcher(emailAddress).matches()) {
         user = userView.initUserForUserName(emailAddress);
         if (updateContact)
            user.contactType = contactType;
      }
      else if (updateLicense) {
         if (userView.user == null)
            userView.initNewUser();
         user = userView.user;
         if (user != null)
            user.acceptedLicense = acceptedLicense;
      }

      ArrayList<String> props = new ArrayList<String>();
      if (updateLicense)
         props.add(" acceptedLicense=" + acceptedLicense);
      if (updateEmail)
         props.add(" emailAddress=" + emailAddress);
      if (updateContact)
         props.add(" contactType=" + contactType);
      Context ctx = Context.getCurrentContext();
      ctx.log("Save user:" + props + ": " + ctx.requestDetail);
   }

   void pageEvent(String evName) {
      UserSession session = currentUserView.getUserSession(docSite);
      if (session != null)
         session.addPageEvent(evName, 0);
   }

   void stop() {
      validProductFlags = 0;
      acceptedLicense = false;
      agreementVisible = true;
      invalidCode = false;
      emailErrorText = "";
      emailAddress = "";
      contactType = ContactType.None;
      showRegisterBox = true;
   }

   void recordSurveyAnswer(String questionName, String answerCode, int answerIx, boolean val) {
      if (val) {
         SurveyResponse sr = new SurveyResponse();
         sr.userSession = currentUserView.getUserSession(docSite);
         sr.user = currentUserView.user;
         sr.questionCode = questionName;
         sr.answerCode = answerCode;
         sr.answerIndex = answerIx;
         sr.dbInsert(true);
         questionAnswers.put(questionName, answerCode);
      }
      System.out.println("*** Question: " + questionName + ": " + answerCode + " val: " + val);
   }

}
