class DownloadFileEvent extends SessionEvent {
   String fileName;
   DownloadFileEvent(String fileName) {
      this.fileName = fileName;
   }

   String getEventName() {
      return "download";
   }

   String getEventDetail() {
      return fileName;
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
