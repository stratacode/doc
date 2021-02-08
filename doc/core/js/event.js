var sc_sid = null;
var sc_wid = null;
var sc_scrollDepth = 0;
var sc_maxScrollDepth = 0;
var sc_se = null;
var sc_lastSendTime = null;
var sc_maxSendInterval = 15000;
var sc_maxBackoffInterval = 5*60*1000;
var sc_sendPending = false;
var sc_numRequests = 0;
var sc_maxNumRequests = 20;

function sc_updateScrollDepth() {
   var sh = sc_se.scrollHeight;
   //var wh = sc_se.clientHeight;
   var wh = window.innerHeight;
   var st = sc_se.scrollTop;
   sc_scrollDepth = Math.floor(100 * (st + wh) / sh);
   if (sc_scrollDepth > 100)
      sc_scrollDepth = 100;
   if (sc_scrollDepth > sc_maxScrollDepth)
      sc_maxScrollDepth = sc_scrollDepth;
   var now = new Date().getTime();
   if (sc_sid != null && !sc_sendPending && sc_lastSendTime != null &&
       (now - sc_lastSendTime) > sc_maxSendInterval && sc_numRequests < sc_maxNumRequests) {
      sc_sendUpdate();
   }
}

function sc_newRequest() {
   var initReq = new XMLHttpRequest();
   initReq.open("POST", "/form/event", true);
   initReq.setRequestHeader("Content-type", "application/json");
   sc_numRequests++;
   return initReq;
}

window.addEventListener("load", function() {
   sc_se = document.scrollingElement;
   if (!sc_se)
     sc_se = document.body;
   sc_updateScrollDepth();

   document.addEventListener("scroll", sc_updateScrollDepth);
   window.addEventListener("resize", sc_updateScrollDepth);

   var initReq = sc_newRequest();
   initReq.onload = function(evt) {
      var stat = initReq.status;
      if (stat == 200) {
         var resp = JSON.parse(initReq.responseText);
         sc_sid = resp.sid;
         sc_wid = resp.wid;

         sc_lastSendTime = new Date().getTime();
      }
      else {
         console.error("Event tracking request returned status: " + stat);
      }
   };
   initReq.onreadystatechange = function (evt) {
      if (initReq.readyState == 4) {
         var stat = initReq.status;
         if (stat != 200)
            console.error("Error response from tracking event request");
      }
   };
   var event = {
         u:window.location.pathname,
         rf:document.referrer,
         sw:window.screen.width,
         sd:sc_maxScrollDepth,
         sh:window.screen.height
      };
   // If the page is using either stags.js or the full runtime use the page's id - otherwise, this event creates a new one
   if (typeof sc_windowId !== "undefined") {
      event.wid = sc_windowId;
      sc_wid = sc_windowId;
   }
   initReq.send(JSON.stringify(event, null, 3));
});

function sc_sendUpdate() {
   sc_sendPending = true;
   var initReq = sc_newRequest();
   initReq.onload = function(evt) {
      sc_sendPending = false;
      var stat = initReq.status;
      if (stat == 200) {
         var resp = JSON.parse(initReq.responseText);
         sc_lastSendTime = new Date().getTime();
         if ((sc_numRequests % 4) == 0) {
            sc_maxSendInterval *= 2;
            if (sc_maxSendInterval > sc_maxBackoffInterval)
               sc_maxSendInterval = sc_maxBackoffInterval;
         }
      }
      else {
         console.error("Event tracking request returned status: " + stat);
      }
   };
   initReq.onreadystatechange = function (evt) {
      if (initReq.readyState == 4) {
         var stat = initReq.status;
         if (stat != 200)
            console.error("Error response from tracking event request");
         sc_sendPending = false;
      }
   };
   initReq.send(JSON.stringify({
         u:window.location.pathname,
         sid:sc_sid,
         wid:sc_wid,
         sw:window.screen.width,
         sh:window.screen.height,
         sd:sc_maxScrollDepth
      }, null, 3));
}

window.addEventListener("unload", function() {
   if (sc_sid) {
      navigator.sendBeacon("/form/event", JSON.stringify({
         u:window.location.pathname,
         sid:sc_sid,
         wid:sc_wid,
         sw:window.screen.width,
         sh:window.screen.height,
         sd:sc_maxScrollDepth,
         close:true}));
   }
});
