import javax.sql.ConnectionPoolDataSource;
import javax.sql.PooledConnection;

class SQLUtil {
   static Connection newConnection() {

      try {
         InitialContext ctx = new InitialContext();
         DataSource ds = (DataSource) ctx.lookup("java:comp/env/jdbc/scformsDB");
         return ds.getConnection();
      }
      catch (javax.naming.NamingException exc) {
         System.err.println("*** Naming error getting connection: " + exc);
         throw new IllegalArgumentException("SQL error getting DB connection");
      }
      catch (SQLException exc) {
         System.err.println("*** SQL error getting DB connection: " + exc);
         throw new IllegalArgumentException("SQL error getting DB connection");
      }
   }

   static void close(AutoCloseable c) {
      if (c != null) {
         try {
            c.close();
         }
         catch (Exception exc) {
            System.err.println("*** Error closing: " + c.getClass() + " error: " + exc);
            exc.printStackTrace();
         }
      }
   }
}
