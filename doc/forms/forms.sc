package sc.doc.forms;

import java.util.List;
import java.util.Date;
import sc.util.ArrayList;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Connection;
import javax.sql.PooledConnection;

import java.io.Closeable;

import javax.naming.InitialContext;
import javax.sql.DataSource;

public doc.forms extends doc.core, user.html.serverMgr, user.survey.model, jetty.schtml {
   userDataSource {
      jndiName = "jdbc/scformsDB";
      dbName = "scforms";
      userName = "scserver";
      password = "ATr*15A";
      serverName = "localhost";
      port = 5432;
   }
   
   // Because doc.core extends doc.tag that is included in the js runtime
   // we inherit constraints from both the client and the server and so
   // by default would go in both even though this is a server only layer
   void init() {
      includeProcess("Server");
   }
}
