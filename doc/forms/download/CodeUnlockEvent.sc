class CodeUnlockEvent extends SessionEvent {
   String code;
   int flags;

   CodeUnlockEvent() {
   }

   CodeUnlockEvent(String c, int flags) {
      code = c;
      this.flags = flags;
   }

   String getEventName() {
      return "code unlock";
   }

   String getEventDetail() {
      return code + ":" + flags;
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
