class InvalidCodeEvent extends SessionEvent {
   String code;

   InvalidCodeEvent(String c) {
      code = c;
   }

   String getEventName() {
      return "invalid code";
   }

   String getEventDetail() {
      return code;
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
