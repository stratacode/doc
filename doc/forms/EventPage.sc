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
      int wid;
      boolean close; // true when the window is closing
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
               session.addPageEvent(event.u);
               windowId = Window.window.windowId;
            }
            else {
               if (event.sid != null) {
                  if (!session.userMarker.equals(event.sid)) {
                     System.err.println("*** mismatched userMarker in userSession");
                  }
               }
               if (event.close) {
                  userView.windowClosed(event.wid, false);
                  windowId = event.wid;
               }
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
