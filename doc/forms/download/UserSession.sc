scope<session>
object UserSession {
   int id;
   String remoteIp;
   Date createDate;
   String headers;

   UserSession() {
      Context ctx = Context.getCurrentContext();
      this.remoteIp = ctx.request.getRemoteAddr();
      this.headers = ctx.getRequestDetail();

      save();
   }

   void save() {
      Connection conn = SQLUtil.newConnection();
      try {
         PreparedStatement st = conn.prepareStatement("INSERT INTO user_session(remote_ip, headers) VALUES (?, ?) RETURNING id");
         st.setString(1, remoteIp);
         st.setString(2, headers);

         st.execute();
         ResultSet idRes = st.getResultSet();
         if (idRes.next()) {
            id = idRes.getInt(1);
         }
      }
      catch (SQLException exc) {
         Context.getCurrentContext().log("Error saving user session: " + exc + " remoteIp: " + remoteIp + " " + headers);
      }
      finally {
         SQLUtil.close(conn);
      }
   }
}
