class LicenseAcceptEvent extends SessionEvent {
   LicenseAcceptEvent() {
   }

   String getEventName() {
      return "license accept";
   }

   String getEventDetail() {
      return "";
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
