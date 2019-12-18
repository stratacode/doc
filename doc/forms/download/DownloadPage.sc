import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import sc.util.FileUtil;
import java.util.HashMap;
import java.io.PrintWriter;
import java.io.File;
import java.io.OutputStream;
import java.io.FileInputStream;
import sc.lang.html.BasePage;
import sc.lang.html.OutputCtx;
import sc.servlet.Context;

@URL(pattern="/download/getFile")
scope<request> class DownloadPage extends BasePage {
   @QueryParam(required=true)
   String fileName;
   @QueryParam(required=true)
   String tag;
   @QueryParam(required=true)
   String version;
   @QueryParam(required=true)
   String ext;
   @QueryParam
   String subDir;

   static int CURRENT_LICENSE = 1;

   HashMap<String,String> mimeTypes = new HashMap<String,String>();
   {
      mimeTypes.put("zip", "application/zip");
   }

   public StringBuilder output(OutputCtx octx) {
      Context ctx = Context.getCurrentContext();

      if (!downloadManager.acceptedLicense) {
         ctx.sendRedirect("/download/");
         return null;
      }

      if (ext == null) {
         ctx.sendError(404, "No suffix for download file");
         return null;
      }

      String mimeType = mimeTypes.get(ext);
      if (mimeType == null) {
         ctx.sendError(404, "Unrecognized suffix for download file: " + ext);
         return null;
      }

      String fullPath = downloadManager.getBuildFilePath(fileName, tag, version, subDir, ext);
      File file = new File(fullPath);
      if (!file.canRead()) {
         ctx.sendError(404, "No file found with fileName: " + fileName);
         return null;
      }

      UserSession session = UserSession;
      UserDownload uct = new UserDownload(session, fileName, version, CURRENT_LICENSE);
      uct.save();

      HttpServletResponse response = ctx.response;
      response.setContentType(mimeType);
      response.setContentLength((int)file.length());
      response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "." + ext + "\"");

      try {
         OutputStream out = response.getOutputStream();
         try (FileInputStream in = new FileInputStream(file)) {
            byte[] buffer = new byte[8192];
            int length;
            while ((length = in.read(buffer)) > 0) {
               out.write(buffer, 0, length);
            }
         }
         out.flush();
      }
      catch (IOException exc) {
         ctx.sendError(500, "Error writing response for download file: " + fileName);
      }
      ctx.requestComplete = true;
      return null;
   }
}