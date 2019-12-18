class UserContactType {
   int id;
   int sessionId;
   UserSession userSession;
   String email;
   ContactType contactType;
   Date createDate;
   Date lastUpdate;

   UserContactType(UserSession session, String email, ContactType contactType) {
      this.userSession = session;
      this.sessionId = session.id;
      this.email = email;
      this.contactType = contactType;
   }

   void save() {
      Connection conn = SQLUtil.newConnection();
      try {
         PreparedStatement st = conn.prepareStatement(
            "INSERT INTO user_contact_type(session_id, email, contact_type, last_update) VALUES (?, ?, ?, ?) ON CONFLICT(email) DO UPDATE set contact_type = EXCLUDED.contact_type, last_update = EXCLUDED.last_update RETURNING id");
         st.setInt(1, sessionId);
         st.setString(2, email);
         st.setInt(3, contactType.ordinal());
         st.setTimestamp(4, new java.sql.Timestamp(System.currentTimeMillis()));

         st.execute();
         ResultSet idRes = st.getResultSet();
         if (idRes.next()) {
            id = idRes.getInt(1);
         }
      }
      catch (SQLException exc) {
         Context.getCurrentContext().log("Error saving user contact type: " + exc + " sessionId: " + sessionId + " email: " + email + " contactType: " + contactType);
      }
      finally {
         SQLUtil.close(conn);
      }
   }
}
