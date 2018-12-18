package sc.html.tag;

/** 
 * This layer customizes the 'head' tag class by modifying the "Head.schtml" template.   We provide a page title
 * and other application-wide features here.
 */
public doc.tag extends html.schtml, servlet.schtml {
   compiledOnly = true;
   void init() {
      // If the JS runtime is present, we'll include this layer in it as well.  But if not, we'll run only on the server.
      // because we extend 'server' which extends just jetty.schtml to tie it to the server, we want to open the the possibility
      // of this layer also running on the client in a different configuration.  It depends on what other layers are included
      includeRuntimes("js", "java");
   }
}
