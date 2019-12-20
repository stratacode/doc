import sc.servlet.Context;
import javax.servlet.http.HttpServletRequest;
import sc.util.FileUtil;
import java.io.File;

import java.util.regex.Pattern;
import java.util.regex.Matcher;

scope<session> object downloadManager {
   final boolean requireDownloadCode = true;
   boolean validCode = false;
   String currentCode = "";
   String[] downloadCodes = {"dbtgrbp"};
   boolean agreementVisible = false;

   boolean acceptedLicense = false;
   boolean invalidCode = false;

   String emailErrorText = "";

   String emailAddress = "";
   ContactType contactType = ContactType.None;

   boolean showRegisterBox = true;

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

   List<DownloadProduct> downloadProducts = new ArrayList<DownloadProduct>();
   {
      DownloadProduct sccProd = new DownloadProduct("scc", "StrataCode cmd (scc)");
      sccProd.addFile(new FileInfo(sccProd, "scc", "release", "latest", null, "zip"));
      sccProd.addFile(new FileInfo(sccProd, "scc-src", "release", "latest", null, "zip"));
      sccProd.addFile(new FileInfo(sccProd, "scc", "dev", "latest", null, "zip"));
      sccProd.addFile(new FileInfo(sccProd, "scc-src", "dev", "latest", null, "zip"));
      downloadProducts.add(sccProd);

      DownloadProduct sc4ideaProd = new DownloadProduct("sc4idea", "IntelliJ plugin");
      sc4ideaProd.addFile(new FileInfo(sc4ideaProd, "sc4idea", "release", "latest", "build", "zip"));
      sc4ideaProd.addFile(new FileInfo(sc4ideaProd, "sc4idea", "dev", "latest", "build", "zip"));
      downloadProducts.add(sc4ideaProd);
   }

   String rootDirectory = "/usr/local";

   void changeValidStatus(boolean valid) {
      validCode = valid;
      invalidCode = !valid;
   }

   void validateCode() {
      if (currentCode == null || currentCode.length() == 0) {
         validCode = false;
         invalidCode = false;
         return;
      }
      for (String downloadCode:downloadCodes) {
         if (currentCode.equals(downloadCode)) {
            changeValidStatus(true);
            return;
         }
      }
      changeValidStatus(false);
   }

   void licenseAccepted() {
      acceptedLicense = true;
      agreementVisible = false;
      saveUser(true, false, false);
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
      UserSession session = UserSession;
      if ((updateContact || updateEmail) && emailAddress != null && pattern.matcher(emailAddress).matches()) {
         UserContactType uct = new UserContactType(session, emailAddress, contactType);
         uct.save();
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
}
