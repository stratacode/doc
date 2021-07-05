class CodeConvertEvent extends SessionEvent {
   int numFiles, numLines, numErrors;
   boolean useModules;

   CodeConvertEvent(int numFiles, int numLines, int numErrors, boolean useModules) {
      this.numFiles = numFiles;
      this.numLines = numLines;
      this.numErrors = numErrors;
      this.useModules = useModules;
   }

   CodeConvertEvent() {
   }

   String getEventName() {
      return "code convert";
   }

   String getEventDetail() {
      return numFiles + ":" + numLines + ":" + numErrors;
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
