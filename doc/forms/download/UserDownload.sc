class UserDownload {
   int id;
   int sessionId;
   UserSession userSession;
   String downloadFile;
   String downloadVersion;
   Date downloadDate;
   int licenseVersion;

   UserDownload(UserSession session, String downloadFile, String downloadVersion, int licenseVersion) {
      this.userSession = session;
      this.sessionId = session.id;
      this.downloadFile = downloadFile;
      this.downloadVersion = downloadVersion;
      this.licenseVersion = licenseVersion;
   }

   void save() {
      Connection conn = SQLUtil.newConnection();
      try {
         PreparedStatement st = conn.prepareStatement("INSERT INTO user_download(session_id, download_file, download_version, license_version) VALUES (?, ?, ?, ?) RETURNING id");
         st.setInt(1, sessionId);
         st.setString(2, downloadFile);
         st.setString(3, downloadVersion);
         st.setInt(4, licenseVersion);

         st.execute();
         ResultSet idRes = st.getResultSet();
         if (idRes.next()) {
            id = idRes.getInt(1);
         }
      }
      catch (SQLException exc) {
         Context.getCurrentContext().log("Error saving user download: " + exc + " sessionId: " + sessionId + " downloadFile: " + downloadFile);
      }
      finally {
         SQLUtil.close(conn);
      }
   }
}
