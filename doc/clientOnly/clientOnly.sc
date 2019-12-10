// Generates the static content from the documentation as html + JS 
// in client only mode. The forms which requires the server will not
// be included in this version.

// Including js/schtml and servlet/options/globalScope for the static file version.  
// Without js/schtml we will use server pages which only works with a server.
// Without globalscope we don't generate the static files and would rely on the server

doc.clientOnly extends js.schtml, servlet.options.globalScope, doc.core {
}
