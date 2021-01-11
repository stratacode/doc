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
   public int PROD_SCC = 1;
   public int PROD_DEV = 2;
   public int PROD_SRC = 4;
   public int PROD_SC4IDEA = 8;

   SiteContext docSite;

   final boolean requireDownloadCode = true;
   int validProductFlags = 0;
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

   String rootDirectory = "/usr/local";

   void changeValidStatus(int flags) {
      validProductFlags = flags;
      invalidCode = validProductFlags == 0;
      Bind.sendChangedEvent(this, "downloadProducts");
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
         flags = 0;
         if (session != null)
            session.addSessionEvent(new InvalidCodeEvent(currentCode));
      }
      else {
         if (session != null)
            session.addSessionEvent(new CodeUnlockEvent(currentCode, flags));
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
   }

   String emailRegex = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$";
   Pattern pattern = Pattern.compile(emailRegex);

   // TODO: this should use a 'User' layer that defines contact types with an enum
   void updateEmail(String emailAddress, ContactType contactType) {
      Matcher matcher = pattern.matcher(emailAddress);
      this.emailAddress = emailAddress;
      this.contactType = contactType;
      if (!matcher.matches())
         emailErrorText = "Please enter a valid email address";
      else {
         emailErrorText = "";
         saveUser(false, true, true);
         showRegisterBox = false;
      }
   }

   void saveUser(boolean updateLicense, boolean updateEmail, boolean updateContact) {
      UserView userView = currentUserView;

      if ((updateContact || updateEmail) && emailAddress != null && pattern.matcher(emailAddress).matches()) {
         UserProfile user = userView.initUserForUserName(emailAddress);
         if (updateContact)
            user.contactType = contactType;
         if (updateLicense)
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
         session.addPageEvent(evName);
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
}
