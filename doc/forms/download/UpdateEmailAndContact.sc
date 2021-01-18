class UpdateEmailAndContact extends SessionEvent {
   String emailAddress;
   ContactType contactType;

   UpdateEmailAndContact() {
   }

   UpdateEmailAndContact(String email, ContactType contactType) {
      this.emailAddress = email;
      this.contactType = contactType;
   }

   String getEventName() {
      return "email and contact";
   }

   String getEventDetail() {
      return emailAddress + ":" + contactType;
   }

   boolean getHasLink() {
      return false;
   }

   String getEventTarget(SiteContext site) {
      return null;
   }
}
