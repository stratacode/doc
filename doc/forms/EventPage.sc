import java.util.Map;

import sc.servlet.UploadResult;
import sc.util.FileUtil;

import java.io.File;

@URL(pattern="/form/event", testScripts={"none"})
scope<request>
class EventPage extends JSONPage {

   static class EventPageRequest {
      String u; // location.pathname of the window
      String n; // not used yet
      String rf; // referrer
      int sw; // screen width
      int sh; // screen height
      int sd = -1; // scroll depth (%)
      String sid; // set to the window id for second and subsequent events on the same window
      int wid = -1;
      boolean close; // true when the window is closing

      String toString() {
         return "event: " + u + " " + sw + "x" + sh + " sessionId: " + sid + (close ? "(close)" : "");
      }
   }

   static class EventPageResult {
      String sid;
      int wid;
      int n;
   }

   EventPage() {
      super(EventPageRequest.class, EventPageResult.class);
   }

   Object processInput(Object input) {
      EventPageRequest event = (EventPageRequest) input;
      Context ctx = Context.getCurrentContext();
      ctx.referrer = event.rf;

      SiteContext site = SiteContext.findBySitePathName(sc.doc.forms.download.downloadManager.docPathName);
      UserView userView = currentUserView;
      UserProfile user = userView.user;
      UserSession session = null;
      ctx.addResponseCookies();
      int windowId = -1;
      if (user != null && site != null) {
         session = userView.getUserSession(site);
         if (session != null) {
            if (event.sid == null && event.u != null) {
               windowId = event.wid != -1 ? event.wid : Window.window.windowId;
               session.addPageEvent(event.u, windowId);
            }
            else {
               if (event.u != null) {
                  PageEvent pe = session.getPageEvent(event.u, event.wid);
                  if (pe == null) {
                     session.addPageEvent(event.u, event.wid); // When we fail over or the session is expired
                  }
               }
               if (event.sid != null) {
                  if (session.userMarker == null) {
                     System.out.println("No session userMarker in userSession - new session: " + session.id + " with marker: " + session.userMarker + " old marker: " + event.sid + " for: " + event + " remote-ip: " + ctx.remoteIp + " ua: " + ctx.userAgent);
                  }
                  else if (!session.userMarker.equals(event.sid)) {
                     System.out.println("Warning: mismatched userMarker in userSession - new session: " + session.id + " with marker: " + session.userMarker + " old marker: " + event.sid + " for: " + event + " remote-ip: " + ctx.remoteIp + " ua: " + ctx.userAgent);
                  }
               }
               if (event.close) {
                  userView.windowClosed(event.wid, false);
               }
               windowId = event.wid;
            }

            // else - TODO: add other events to the api here

            if (event.sd != 0) {
               session.updateScrollDepth(windowId, event.sd);
            }

            if (event.sw != 0) 
               session.screenWidth = event.sw;
            if (event.sh != 0) 
               session.screenHeight = event.sh;
         }
      }

      EventPageResult res = new EventPageResult();
      if (session != null) {
         res.sid = session.userMarker;
         res.wid = windowId;
         res.n = session.sessionEvents == null ? 0 : session.sessionEvents.size();
      }
      return res;
   }

}
