CvtForm {
   void sendConvertEvent(int numFiles, int numLines, int numErrors, boolean useModules) {
      SiteContext docSite = SiteContext.findBySitePathName("doc");
      UserSession session = currentUserView.getUserSession(docSite);
      if (session != null)
         session.addSessionEvent(new CodeConvertEvent(numFiles, numLines, numErrors, useModules));
      else
         logError("No user session for sendConvertEvent");
   }

   void logError(String error) {
      Context ctx = Context.getCurrentContext();
      ctx.error(error);
   }
}
