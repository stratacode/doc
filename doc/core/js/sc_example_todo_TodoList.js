
// Generated JS from Java: sc.html.tag.HtmlPage -----
function sc_html_tag_HtmlPage() {   this.head = null;
   this.body = null;
   this.script_Repeat = null;

   js_HtmlPage.call(this);
   this._sc_html_tag_HtmlPageInit();
}

var sc_html_tag_HtmlPage_c = sc_newClass("sc.html.tag.HtmlPage", sc_html_tag_HtmlPage, js_HtmlPage, null);

sc_html_tag_HtmlPage_c._A_URL = {page: true, subTypesOnly: true};
sc_html_tag_HtmlPage_c._A_Scope = {name: "appSession"};

sc_html_tag_HtmlPage_c._PT = {head:{TypeSettings: {objectType: true}}};
sc_html_tag_HtmlPage_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getHead(), this.getBody(), this.getScript_Repeat() ];
   }
   else {
      return[ (this.head), (this.body), (this.script_Repeat) ];
   }
};
sc_html_tag_HtmlPage_c.outputStartTag = function (out)  {
   out.append("<!DOCTYPE html>");
   out.append("<html>");
};
sc_html_tag_HtmlPage_c.outputBody = function (out)  {
   out.append("\n   ");
   this.getHead().outputTag(out);
   out.append("\n   ");
   this.getBody().outputTag(out);
   out.append("\n   ");
   this.getScript_Repeat().outputTag(out);
   out.append(" \n");
};
sc_html_tag_HtmlPage_c.getHead = function ()  {
   if (this.head === null) {
      var _head = new sc_html_tag_HtmlPage_head(this);
      this.head = _head;
      sc_DynUtil_c.addDynInnerObject("sc.html.tag.HtmlPage.head", _head, this);
      return _head;
   }
   else
      return this.head;
};
sc_html_tag_HtmlPage_c.getBody = function ()  {
   if (this.body === null) {
      var _body = new sc_html_tag_HtmlPage_body(this);
      this.body = _body;
      sc_DynUtil_c.addDynInnerObject("sc.html.tag.HtmlPage.body", _body, this);
      return _body;
   }
   else
      return this.body;
};
sc_html_tag_HtmlPage_c.getScript_Repeat = function ()  {
   if (this.script_Repeat === null) {
      var _script_Repeat = new sc_html_tag_HtmlPage_script_Repeat(this);
      this.script_Repeat = _script_Repeat;
      sc_DynUtil_c.addDynInnerObject("sc.html.tag.HtmlPage.script_Repeat", _script_Repeat, this);
      return _script_Repeat;
   }
   else
      return this.script_Repeat;
};

sc_html_tag_HtmlPage_c._sc_html_tag_HtmlPageInit = function() {
};

// Generated JS from Java: sc.html.tag.Head -----
function sc_html_tag_Head() {
   js_Head.call(this);
}

var sc_html_tag_Head_c = sc_newClass("sc.html.tag.Head", sc_html_tag_Head, js_Head, null);

sc_html_tag_Head_c.outputStartTag = function (out)  {
   out.append("<head>");
};
sc_html_tag_Head_c.outputBody = function (out)  {
   out.append("\n");
};


// Generated JS from Java: sc.html.tag.HtmlPage.head -----
function sc_html_tag_HtmlPage_head(_outer) {
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.headStartTagTxt0 = null;

   sc_html_tag_Head.call(this);
   this._sc_html_tag_HtmlPage_headInit();
}

var sc_html_tag_HtmlPage_head_c = sc_newInnerObj("sc.html.tag.HtmlPage.head", sc_html_tag_HtmlPage_head, sc_html_tag_HtmlPage, sc_html_tag_Head, null);

sc_html_tag_HtmlPage_head_c._A_TypeSettings = {objectType: true};

sc_html_tag_HtmlPage_head_c._PT = {headStartTagTxt0:{Bindable: {manual: true}}};
sc_html_tag_HtmlPage_head_c.outputStartTag = function (out)  {
   out.append(this.getHeadStartTagTxt0());
};
sc_html_tag_HtmlPage_head_c.outputBody = function (out)  {
   sc_html_tag_Head_c.outputBody.call(this, out);
   out.append("\n      <script type='text/javascript'>\n         var sc_windowId = ");
   out.append(sc_PTypeUtil_c.getWindowId());
   out.append(";\n         var sc_testMode = ");
   out.append(sc_clInit(sc_PTypeUtil_c).testMode);
   out.append(";\n      </script>\n   ");
};
sc_html_tag_HtmlPage_head_c.getHeadStartTagTxt0 = function ()  {
   return this.headStartTagTxt0;
};
sc_html_tag_HtmlPage_head_c.setHeadStartTagTxt0 = function (_headStartTagTxt0)  {
   this.headStartTagTxt0 = _headStartTagTxt0;
   sc_Bind_c.sendChange(this, "headStartTagTxt0", _headStartTagTxt0);
};

sc_html_tag_HtmlPage_head_c._sc_html_tag_HtmlPage_headInit = function() {
   this.setParentNode(this._outer1);
   this.setId(this.allocUniqueId("head"));
   this.serverContent = true;
   this.setHeadStartTagTxt0((sc_Bind_c.arith(this, "headStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<head id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "headStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.html.tag.HtmlPage.body -----
function sc_html_tag_HtmlPage_body(_outer) {
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.bodyStartTagTxt0 = null;

   js_Body.call(this);
   this._sc_html_tag_HtmlPage_bodyInit();
}

var sc_html_tag_HtmlPage_body_c = sc_newInnerObj("sc.html.tag.HtmlPage.body", sc_html_tag_HtmlPage_body, sc_html_tag_HtmlPage, js_Body, null);

sc_html_tag_HtmlPage_body_c._A_TypeSettings = {objectType: true};

sc_html_tag_HtmlPage_body_c._PT = {bodyStartTagTxt0:{Bindable: {manual: true}}};
sc_html_tag_HtmlPage_body_c.outputStartTag = function (out)  {
   out.append(this.getBodyStartTagTxt0());
};
sc_html_tag_HtmlPage_body_c.outputBody = function (out)  {
   out.append("\n   ");
};
sc_html_tag_HtmlPage_body_c.getBodyStartTagTxt0 = function ()  {
   return this.bodyStartTagTxt0;
};
sc_html_tag_HtmlPage_body_c.setBodyStartTagTxt0 = function (_bodyStartTagTxt0)  {
   this.bodyStartTagTxt0 = _bodyStartTagTxt0;
   sc_Bind_c.sendChange(this, "bodyStartTagTxt0", _bodyStartTagTxt0);
};

sc_html_tag_HtmlPage_body_c._sc_html_tag_HtmlPage_bodyInit = function() {
   this.setParentNode(this._outer1);
   this.setId(this.allocUniqueId("body"));
   this.setBodyStartTagTxt0((sc_Bind_c.arith(this, "bodyStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<body id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "bodyStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.html.tag.HtmlPage.script_Repeat -----
function sc_html_tag_HtmlPage_script_Repeat(_outer) {
   sc_clInit(js_IRepeatWrapper_c);
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;

   js_HTMLElement.call(this);
   this._sc_html_tag_HtmlPage_script_RepeatInit();
}

var sc_html_tag_HtmlPage_script_Repeat_c = sc_newInnerObj("sc.html.tag.HtmlPage.script_Repeat", sc_html_tag_HtmlPage_script_Repeat, sc_html_tag_HtmlPage, js_HTMLElement, [js_IRepeatWrapper]);

sc_html_tag_HtmlPage_script_Repeat_c._A_TypeSettings = {objectType: true};

sc_html_tag_HtmlPage_script_Repeat_c.createElement = function (val, ix, oldTag)  {
   if (oldTag !== null)
      return oldTag;
   var elem = new sc_html_tag_HtmlPage_script_Repeat_script(this);
   elem.setRepeatVar(val);
   elem.setRepeatIndex(ix);
   return elem;
};

sc_html_tag_HtmlPage_script_Repeat_c._sc_html_tag_HtmlPage_script_RepeatInit = function() {
   this.setParentNode(this._outer1);
   this.setRepeat(this.getJSFiles());
};

// Generated JS from Java: sc.html.tag.HtmlPage.script_Repeat.script -----
function sc_html_tag_HtmlPage_script_Repeat_script(_outer) {
   this._outer2 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.scriptStartTagTxt0 = null;

   js_HTMLElement.call(this);
   this._sc_html_tag_HtmlPage_script_Repeat_scriptInit();
}

var sc_html_tag_HtmlPage_script_Repeat_script_c = sc_newInnerClass("sc.html.tag.HtmlPage.script_Repeat.script", sc_html_tag_HtmlPage_script_Repeat_script, sc_html_tag_HtmlPage_script_Repeat, js_HTMLElement, null);

sc_html_tag_HtmlPage_script_Repeat_script_c._PT = {scriptStartTagTxt0:{Bindable: {manual: true}}};
sc_html_tag_HtmlPage_script_Repeat_script_c.outputStartTag = function (out)  {
   out.append(this.getScriptStartTagTxt0());
};
sc_html_tag_HtmlPage_script_Repeat_script_c.getScriptStartTagTxt0 = function ()  {
   return this.scriptStartTagTxt0;
};
sc_html_tag_HtmlPage_script_Repeat_script_c.setScriptStartTagTxt0 = function (_scriptStartTagTxt0)  {
   this.scriptStartTagTxt0 = _scriptStartTagTxt0;
   sc_Bind_c.sendChange(this, "scriptStartTagTxt0", _scriptStartTagTxt0);
};

sc_html_tag_HtmlPage_script_Repeat_script_c._sc_html_tag_HtmlPage_script_Repeat_scriptInit = function() {
   this.setParentNode(this._outer2);
   this.setId(this.allocUniqueId("script"));
   this.tagName = "script";
   this.setScriptStartTagTxt0((sc_Bind_c.arith(this, "scriptStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<script type='text/javascript' src=\""), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "escAtt", String_c, "Ljava/lang/CharSequence;"), [ sc_Bind_c.bindP(this, [ "repeatVar" ]) ]) ]), new sc_ConstantBinding("\" id='") ]), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "scriptStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList -----
function sc_example_todo_TodoList() {
   sc_example_todo_TodoList_c._clInit();
   this.todos = null;
   this.todoText = null;

   sc_html_tag_HtmlPage.call(this);
   this._sc_example_todo_TodoListInit();
}

var sc_example_todo_TodoList_c = sc_newClass("sc.example.todo.TodoList", sc_example_todo_TodoList, sc_html_tag_HtmlPage, null);

sc_example_todo_TodoList_c._PT = {todos:{Bindable: {manual: true}}, head:{TypeSettings: {objectType: true}}};
sc_example_todo_TodoList_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getHead(), this.getBody(), this.getScript_Repeat() ];
   }
   else {
      return[ (this.head), (this.body), (this.script_Repeat) ];
   }
};
sc_example_todo_TodoList_c.outputStartTag = function (out)  {
   out.append("<!DOCTYPE html>");
   out.append("<html>");
};
sc_example_todo_TodoList_c.outputBody = function (out)  {
   sc_html_tag_HtmlPage_c.outputBody.call(this, out);
   out.append("\n   \n  \n");
};
sc_example_todo_TodoList_c.getTodos = function ()  {
   return this.todos;
};
sc_example_todo_TodoList_c.setTodos = function (_todos)  {
   this.todos = _todos;
   sc_Bind_c.sendChange(this, "todos", _todos);
};
sc_example_todo_TodoList_c.getTodoText = function ()  {
   return this.todoText;
};
sc_example_todo_TodoList_c.setTodoText = function (_todoText)  {
   this.todoText = _todoText;
   sc_Bind_c.sendChange(this, "todoText", _todoText);
};
sc_example_todo_TodoList_c.addTodoEntry = function ()  {
   this.getTodos().add(this.newTodoItem(this.getTodoText(), false));
   this.setTodoText("");
};
sc_example_todo_TodoList_c.getRemaining = function (todoList)  {
   if (arguments.length == 0) return;
   var count = 0;
   if (todoList === null) {
      jv_System_c.out.println("*** no list");
      return 0;
   }
   for (var _i = todoList.iterator(); _i.hasNext();) {
      var todo = _i.next();
      if (!todo.getComplete())
         count++;
   }
   return count;
};
sc_example_todo_TodoList_c.getSize = function (list)  {
   if (arguments.length == 0) return;
   return list === null ? 0 : list.size();
};
sc_example_todo_TodoList_c.removeComplete = function ()  {
   for (var i = 0; i < this.getTodos().size(); i++) {
      var todo = this.getTodos().get(i);
      if (todo.getComplete()) {
         this.getTodos().remove(i);
         sc_DynUtil_c.dispose(todo);
         i--;
      }
   }
};
sc_example_todo_TodoList_c.newTodoItem = function () /* overloaded */ {
   if (arguments.length == 3) {
      var doInit = arguments[0];
      var t = arguments[1];
      var c = arguments[2];
      var todoItem = new sc_example_todo_TodoList_TodoItem(this, t, c);
      todoItem.preInit();
      sc_DynUtil_c.addDynInnerInstance("sc.example.todo.TodoList.TodoItem", todoItem, this);
      if (doInit) {
         todoItem.init();
         todoItem.start();
      }
      return todoItem;
   }
   else if (arguments.length == 2) {
      var t = arguments[0];
      var c = arguments[1];
      return this.newTodoItem(true, t, c);
   }
   else sc_noMeth("newTodoItem");
};
sc_example_todo_TodoList_c.getHead = function ()  {
   if (this.head === null) {
      var _head = new sc_example_todo_TodoList_head(this);
      this.head = _head;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.head", _head, this);
      return _head;
   }
   else
      return(this.head);
};
sc_example_todo_TodoList_c.getBody = function ()  {
   if (this.body === null) {
      var _body = new sc_example_todo_TodoList_body(this);
      this.body = _body;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body", _body, this);
      return _body;
   }
   else
      return(this.body);
};

sc_example_todo_TodoList_c._sc_example_todo_TodoListInit = function() {
   this.setTodos(new sc_ArrayList(jv_Arrays_c.asList([ this.newTodoItem("Run StrataCode todo sample", true), this.newTodoItem("Check me and see it stay in sync", false), this.newTodoItem("Add a new entry and press 'remove completed'", false) ])));
   this.setTodoText("");
   this.needsRefresh = true;
};
sc_example_todo_TodoList_c._clInit = function() {
   if (sc_example_todo_TodoList_c.hasOwnProperty("_clInited")) return;
   sc_example_todo_TodoList_c._clInited = true;
   
   js_PageInfo_c.addPage("sc.example.todo.TodoList", "/TodoList.html", sc_example_todo_TodoList_c, null);
};


// Generated JS from Java: sc.example.todo.TodoList.TodoItem -----
function sc_example_todo_TodoList_TodoItem(_outer, t, c) {
   sc_clInit(sc_IComponent_c);
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.text = null;
   this.complete = false;
   this._initState = 0;


   jv_Object.call(this);
   this._sc_example_todo_TodoList_TodoItemInit();
   this.setText(t);
   this.setComplete(c);
}

var sc_example_todo_TodoList_TodoItem_c = sc_newInnerClass("sc.example.todo.TodoList.TodoItem", sc_example_todo_TodoList_TodoItem, sc_example_todo_TodoList, jv_Object, [sc_IComponent]);

sc_example_todo_TodoList_TodoItem_c._A_Component = null;

sc_example_todo_TodoList_TodoItem_c._PT = {text:{Bindable: {manual: true}}};
sc_example_todo_TodoList_TodoItem_c.getText = function ()  {
   return this.text;
};
sc_example_todo_TodoList_TodoItem_c.setText = function (_text)  {
   this.text = _text;
   sc_Bind_c.sendChange(this, "text", _text);
};
sc_example_todo_TodoList_TodoItem_c.getComplete = function ()  {
   return this.complete;
};
sc_example_todo_TodoList_TodoItem_c.setComplete = function (_complete)  {
   this.complete = _complete;
   sc_Bind_c.sendChange(this, "complete", _complete);
};
sc_example_todo_TodoList_TodoItem_c.getInitState = function ()  {
   return this._initState;
};
sc_example_todo_TodoList_TodoItem_c.preInit = function ()  {
   if (this._initState > 0)
      return;
   this._initState = 1;
};
sc_example_todo_TodoList_TodoItem_c.init = function ()  {
   if (this._initState > 1)
      return;
   this._initState = 2;
};
sc_example_todo_TodoList_TodoItem_c.start = function ()  {
   if (this._initState > 2)
      return;
   this._initState = 3;
};
sc_example_todo_TodoList_TodoItem_c.stop = function ()  {
   if (this._initState > 3)
      return;
   this._initState = 4;
};

sc_example_todo_TodoList_TodoItem_c._sc_example_todo_TodoList_TodoItemInit = function() {
};

// Generated JS from Java: sc.example.todo.TodoList.head -----
function sc_example_todo_TodoList_head(_outer) {
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;

   sc_html_tag_HtmlPage_head.call(this, this._outer1);
   this._sc_example_todo_TodoList_headInit();
}

var sc_example_todo_TodoList_head_c = sc_newInnerObj("sc.example.todo.TodoList.head", sc_example_todo_TodoList_head, sc_example_todo_TodoList, sc_html_tag_HtmlPage_head, null);

sc_example_todo_TodoList_head_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_head_c.outputStartTag = function (out)  {
   out.append(this.getHeadStartTagTxt0());
};
sc_example_todo_TodoList_head_c.outputBody = function (out)  {
   sc_html_tag_HtmlPage_head_c.outputBody.call(this, out);
   out.append("\n      <link rel='stylesheet' type='text/css' href='todoStyle.css'>\n   ");
};

sc_example_todo_TodoList_head_c._sc_example_todo_TodoList_headInit = function() {
   this.setParentNode(this._outer1);
   this.setHeadStartTagTxt0((sc_Bind_c.arith(this, "headStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<head id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
};

// Generated JS from Java: sc.example.todo.TodoList.body -----
function sc_example_todo_TodoList_body(_outer) {
   this._outer1 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.div = null;

   sc_html_tag_HtmlPage_body.call(this, this._outer1);
   this._sc_example_todo_TodoList_bodyInit();
}

var sc_example_todo_TodoList_body_c = sc_newInnerObj("sc.example.todo.TodoList.body", sc_example_todo_TodoList_body, sc_example_todo_TodoList, sc_html_tag_HtmlPage_body, null);

sc_example_todo_TodoList_body_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_c._PT = {div:{TypeSettings: {objectType: true}}};
sc_example_todo_TodoList_body_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getDiv() ];
   }
   else {
      return[ (this.div) ];
   }
};
sc_example_todo_TodoList_body_c.outputStartTag = function (out)  {
   out.append(this.getBodyStartTagTxt0());
};
sc_example_todo_TodoList_body_c.outputBody = function (out)  {
   sc_html_tag_HtmlPage_body_c.outputBody.call(this, out);
   out.append("\n     ");
   this.getDiv().outputTag(out);
   out.append("\n   ");
};
sc_example_todo_TodoList_body_c.getDiv = function ()  {
   if (this.div === null) {
      var _div = new sc_example_todo_TodoList_body_div(this);
      this.div = _div;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div", _div, this);
      return _div;
   }
   else
      return this.div;
};

sc_example_todo_TodoList_body_c._sc_example_todo_TodoList_bodyInit = function() {
   this.setParentNode(this._outer1);
   this.setBodyStartTagTxt0((sc_Bind_c.arith(this, "bodyStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<body id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
};

// Generated JS from Java: sc.example.todo.TodoList.body.div -----
function sc_example_todo_TodoList_body_div(_outer) {
   this._outer2 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.divStartTagTxt0 = null;
   this.todoControl = null;

   js_Div.call(this);
   this._sc_example_todo_TodoList_body_divInit();
}

var sc_example_todo_TodoList_body_div_c = sc_newInnerObj("sc.example.todo.TodoList.body.div", sc_example_todo_TodoList_body_div, sc_example_todo_TodoList_body, js_Div, null);

sc_example_todo_TodoList_body_div_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_c._PT = {todoControl:{TypeSettings: {objectType: true}}, divStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getTodoControl() ];
   }
   else {
      return[ (this.todoControl) ];
   }
};
sc_example_todo_TodoList_body_div_c.outputStartTag = function (out)  {
   out.append(this.getDivStartTagTxt0());
};
sc_example_todo_TodoList_body_div_c.outputBody = function (out)  {
   out.append("\n        ");
   out.append("<h2>Todo List</h2>\n        ");
   this.getTodoControl().outputTag(out);
   out.append("\n     ");
};
sc_example_todo_TodoList_body_div_c.getDivStartTagTxt0 = function ()  {
   return this.divStartTagTxt0;
};
sc_example_todo_TodoList_body_div_c.setDivStartTagTxt0 = function (_divStartTagTxt0)  {
   this.divStartTagTxt0 = _divStartTagTxt0;
   sc_Bind_c.sendChange(this, "divStartTagTxt0", _divStartTagTxt0);
};
sc_example_todo_TodoList_body_div_c.getTodoControl = function ()  {
   if (this.todoControl === null) {
      var _todoControl = new sc_example_todo_TodoList_body_div_todoControl(this);
      this.todoControl = _todoControl;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl", _todoControl, this);
      return _todoControl;
   }
   else
      return this.todoControl;
};

sc_example_todo_TodoList_body_div_c._sc_example_todo_TodoList_body_divInit = function() {
   this.setParentNode(this._outer2);
   this.setId(this.allocUniqueId("div"));
   this.setHTMLClass("appFrame");
   this.setDivStartTagTxt0((sc_Bind_c.arith(this, "divStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<div class='appFrame' id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "divStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl -----
function sc_example_todo_TodoList_body_div_todoControl(_outer) {
   this._outer3 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.todoControlStartTagTxt0 = null;
   this.span = null;
   this.a = null;
   this.ulli_Repeat = null;
   this.form = null;

   js_Div.call(this);
   this._sc_example_todo_TodoList_body_div_todoControlInit();
}

var sc_example_todo_TodoList_body_div_todoControl_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl", sc_example_todo_TodoList_body_div_todoControl, sc_example_todo_TodoList_body_div, js_Div, null);

sc_example_todo_TodoList_body_div_todoControl_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_c._PT = {span:{TypeSettings: {objectType: true}}, todoControlStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getSpan(), this.getA(), this.getUlli_Repeat(), this.getForm() ];
   }
   else {
      return[ (this.span), (this.a), (this.ulli_Repeat), (this.form) ];
   }
};
sc_example_todo_TodoList_body_div_todoControl_c.outputStartTag = function (out)  {
   out.append(this.getTodoControlStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_c.outputBody = function (out)  {
   out.append("\n           ");
   out.append("\n           ");
   this.getSpan().outputTag(out);
   out.append("\n           \n           [ ");
   this.getA().outputTag(out);
   out.append(" ]\n           <ul>\n              \n              ");
   this.getUlli_Repeat().outputTag(out);
   out.append("\n           </ul>\n           ");
   this.getForm().outputTag(out);
   out.append("\n        ");
};
sc_example_todo_TodoList_body_div_todoControl_c.getTodoControlStartTagTxt0 = function ()  {
   return this.todoControlStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_c.setTodoControlStartTagTxt0 = function (_todoControlStartTagTxt0)  {
   this.todoControlStartTagTxt0 = _todoControlStartTagTxt0;
   sc_Bind_c.sendChange(this, "todoControlStartTagTxt0", _todoControlStartTagTxt0);
};
sc_example_todo_TodoList_body_div_todoControl_c.getSpan = function ()  {
   if (this.span === null) {
      var _span = new sc_example_todo_TodoList_body_div_todoControl_span(this);
      this.span = _span;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.span", _span, this);
      return _span;
   }
   else
      return this.span;
};
sc_example_todo_TodoList_body_div_todoControl_c.getA = function ()  {
   if (this.a === null) {
      var _a = new sc_example_todo_TodoList_body_div_todoControl_a(this);
      this.a = _a;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.a", _a, this);
      return _a;
   }
   else
      return this.a;
};
sc_example_todo_TodoList_body_div_todoControl_c.getUlli_Repeat = function ()  {
   if (this.ulli_Repeat === null) {
      var _ulli_Repeat = new sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat(this);
      this.ulli_Repeat = _ulli_Repeat;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat", _ulli_Repeat, this);
      return _ulli_Repeat;
   }
   else
      return this.ulli_Repeat;
};
sc_example_todo_TodoList_body_div_todoControl_c.getForm = function ()  {
   if (this.form === null) {
      var _form = new sc_example_todo_TodoList_body_div_todoControl_form(this);
      this.form = _form;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.form", _form, this);
      return _form;
   }
   else
      return this.form;
};

sc_example_todo_TodoList_body_div_todoControl_c._sc_example_todo_TodoList_body_div_todoControlInit = function() {
   this.setParentNode(this._outer3);
   this.setId(this.allocUniqueId("todoControl"));
   this.setTodoControlStartTagTxt0((sc_Bind_c.arith(this, "todoControlStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<div id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "todoControlStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.span -----
function sc_example_todo_TodoList_body_div_todoControl_span(_outer) {
   this._outer4 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.spanStartTagTxt0 = null;
   this.spanBody1 = null;
   this.spanBody2 = null;

   js_Span.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_spanInit();
}

var sc_example_todo_TodoList_body_div_todoControl_span_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.span", sc_example_todo_TodoList_body_div_todoControl_span, sc_example_todo_TodoList_body_div_todoControl, js_Span, null);

sc_example_todo_TodoList_body_div_todoControl_span_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_span_c._PT = {spanStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_span_c.outputStartTag = function (out)  {
   out.append(this.getSpanStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_span_c.outputBody = function (out)  {
   out.append(this.getSpanBody1());
   out.append(" of ");
   out.append(this.getSpanBody2());
   out.append(" to do");
};
sc_example_todo_TodoList_body_div_todoControl_span_c.getSpanStartTagTxt0 = function ()  {
   return this.spanStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_span_c.setSpanStartTagTxt0 = function (_spanStartTagTxt0)  {
   this.spanStartTagTxt0 = _spanStartTagTxt0;
   sc_Bind_c.sendChange(this, "spanStartTagTxt0", _spanStartTagTxt0);
};
sc_example_todo_TodoList_body_div_todoControl_span_c.getSpanBody1 = function ()  {
   return this.spanBody1;
};
sc_example_todo_TodoList_body_div_todoControl_span_c.setSpanBody1 = function (_spanBody1)  {
   this.spanBody1 = _spanBody1;
   sc_Bind_c.sendChange(this, "spanBody1", _spanBody1);
};
sc_example_todo_TodoList_body_div_todoControl_span_c.getSpanBody2 = function ()  {
   return this.spanBody2;
};
sc_example_todo_TodoList_body_div_todoControl_span_c.setSpanBody2 = function (_spanBody2)  {
   this.spanBody2 = _spanBody2;
   sc_Bind_c.sendChange(this, "spanBody2", _spanBody2);
};

sc_example_todo_TodoList_body_div_todoControl_span_c._sc_example_todo_TodoList_body_div_todoControl_spanInit = function() {
   this.setParentNode(this._outer4);
   this.setId(this.allocUniqueId("span"));
   this.setSpanStartTagTxt0((sc_Bind_c.arith(this, "spanStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<span id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "spanStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
   this.setSpanBody1((sc_Bind_c.method(this, "spanBody1", sc_DynUtil_c.resolveStaticMethod(String_c, "_valueOf", String_c, "I"), [ sc_Bind_c.methodP(this._outer4._outer3._outer2._outer1, sc_DynUtil_c.resolveMethod(this._outer4._outer3._outer2._outer1.getClass(), "getRemaining", Number_c, "Ljava/util/List;"), [ sc_Bind_c.bindP(this._outer4._outer3._outer2._outer1, [ "todos" ]) ]) ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "spanBody1", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateBody", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
   this.setSpanBody2((sc_Bind_c.method(this, "spanBody2", sc_DynUtil_c.resolveStaticMethod(String_c, "_valueOf", String_c, "I"), [ sc_Bind_c.methodP(this._outer4._outer3._outer2._outer1, sc_DynUtil_c.resolveMethod(this._outer4._outer3._outer2._outer1.getClass(), "getSize", Number_c, "Ljava/util/List;"), [ sc_Bind_c.bindP(this._outer4._outer3._outer2._outer1, [ "todos" ]) ]) ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "spanBody2", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateBody", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.a -----
function sc_example_todo_TodoList_body_div_todoControl_a(_outer) {
   this._outer4 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.aStartTagTxt0 = null;

   js_A.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_aInit();
}

var sc_example_todo_TodoList_body_div_todoControl_a_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.a", sc_example_todo_TodoList_body_div_todoControl_a, sc_example_todo_TodoList_body_div_todoControl, js_A, null);

sc_example_todo_TodoList_body_div_todoControl_a_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_a_c._PT = {aStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_a_c.outputStartTag = function (out)  {
   out.append(this.getaStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_a_c.outputBody = function (out)  {
   out.append("remove completed");
};
sc_example_todo_TodoList_body_div_todoControl_a_c.getaStartTagTxt0 = function ()  {
   return this.aStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_a_c.setaStartTagTxt0 = function (_aStartTagTxt0)  {
   this.aStartTagTxt0 = _aStartTagTxt0;
   sc_Bind_c.sendChange(this, "aStartTagTxt0", _aStartTagTxt0);
};

sc_example_todo_TodoList_body_div_todoControl_a_c._sc_example_todo_TodoList_body_div_todoControl_aInit = function() {
   this.setParentNode(this._outer4);
   this.setId(this.allocUniqueId("a"));
   sc_Bind_c.method(this, "clickEvent", this._outer4._outer3._outer2._outer1, sc_DynUtil_c.resolveMethod(this._outer4._outer3._outer2._outer1.getClass(), "removeComplete", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
   this.setaStartTagTxt0((sc_Bind_c.arith(this, "aStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<a href='#' onclick=\"return false;\" id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "aStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat -----
function sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat(_outer) {
   sc_clInit(js_IRepeatWrapper_c);
   this._outer4 = _outer;
   if (this.outer === undefined) this.outer = _outer;

   js_HTMLElement.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_ulli_RepeatInit();
}

var sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat", sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat, sc_example_todo_TodoList_body_div_todoControl, js_HTMLElement, [js_IRepeatWrapper]);

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_c.createElement = function (val, ix, oldTag)  {
   if (oldTag !== null)
      return oldTag;
   var elem = new sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli(this);
   elem.setRepeatVar(val);
   elem.setRepeatIndex(ix);
   return elem;
};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_c._sc_example_todo_TodoList_body_div_todoControl_ulli_RepeatInit = function() {
   this.setParentNode(this._outer4);
   this.setRepeat((sc_Bind_c.bind(this, "repeat", this._outer4._outer3._outer2._outer1, [ "todos" ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli -----
function sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli(_outer) {
   this._outer5 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.todo = null;
   this.ulliStartTagTxt0 = null;
   this.input = null;
   this.span1 = null;

   js_HTMLElement.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulliInit();
}

var sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c = sc_newInnerClass("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli", sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli, sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat, js_HTMLElement, null);

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c._PT = {todo:{Bindable: {manual: true}}, input:{TypeSettings: {objectType: true}}};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getInput(), this.getSpan1() ];
   }
   else {
      return[ (this.input), (this.span1) ];
   }
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.outputStartTag = function (out)  {
   out.append(this.getUlliStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.outputBody = function (out)  {
   out.append("\n                 ");
   out.append("\n                 ");
   this.getInput().outputTag(out);
   out.append("\n                 \n                 ");
   this.getSpan1().outputTag(out);
   out.append("\n              ");
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.getTodo = function ()  {
   return this.todo;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.setTodo = function (_todo)  {
   this.todo = _todo;
   sc_Bind_c.sendChange(this, "todo", _todo);
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.getUlliStartTagTxt0 = function ()  {
   return this.ulliStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.setUlliStartTagTxt0 = function (_ulliStartTagTxt0)  {
   this.ulliStartTagTxt0 = _ulliStartTagTxt0;
   sc_Bind_c.sendChange(this, "ulliStartTagTxt0", _ulliStartTagTxt0);
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.getInput = function ()  {
   if (this.input === null) {
      var _input = new sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input(this);
      this.input = _input;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.input", _input, this);
      return _input;
   }
   else
      return this.input;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c.getSpan1 = function ()  {
   if (this.span1 === null) {
      var _span1 = new sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1(this);
      this.span1 = _span1;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.span1", _span1, this);
      return _span1;
   }
   else
      return this.span1;
};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_c._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulliInit = function() {
   this.setParentNode(this._outer5);
   this.setId(this.allocUniqueId("ulli"));
   this.tagName = "li";
   this.setRepeatVarName("todo");
   this.setTodo((sc_Bind_c.cast(this, "todo", sc_example_todo_TodoList_TodoItem_c, sc_Bind_c.bindP(this, [ "repeatVar" ]), sc_clInit(sc_BindingDirection_c).BIDIRECTIONAL, 0, null)));
   this.setUlliStartTagTxt0((sc_Bind_c.arith(this, "ulliStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<li id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "ulliStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.input -----
function sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input(_outer) {
   this._outer6 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.inputStartTagTxt0 = null;

   js_Input.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_inputInit();
}

var sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.input", sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input, sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli, js_Input, null);

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c._PT = {inputStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c.outputStartTag = function (out)  {
   out.append(this.getInputStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c.getInputStartTagTxt0 = function ()  {
   return this.inputStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c.setInputStartTagTxt0 = function (_inputStartTagTxt0)  {
   this.inputStartTagTxt0 = _inputStartTagTxt0;
   sc_Bind_c.sendChange(this, "inputStartTagTxt0", _inputStartTagTxt0);
};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_input_c._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_inputInit = function() {
   this.setParentNode(this._outer6);
   this.setId(this.allocUniqueId("input"));
   this.type = "checkbox";
   this.setChecked(sc_DynUtil_c.booleanValue(sc_Bind_c.bind(this, "checked", this._outer6, [ "todo", "complete" ], sc_clInit(sc_BindingDirection_c).BIDIRECTIONAL, 0, null)));
   this.setInputStartTagTxt0((sc_Bind_c.arith(this, "inputStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<input type='checkbox'"), (sc_Bind_c.ternaryP([ sc_Bind_c.bindP(this._outer6, [ "todo", "complete" ]), new sc_ConstantBinding(" checked"), new sc_ConstantBinding("") ])) ]), new sc_ConstantBinding(" id='") ]), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "inputStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.span1 -----
function sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1(_outer) {
   this._outer6 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.span1StartTagTxt0 = null;
   this.span1Body1 = null;

   js_Span.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1Init();
}

var sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.ulli_Repeat.ulli.span1", sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1, sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli, js_Span, null);

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c._PT = {span1StartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.outputStartTag = function (out)  {
   out.append(this.getSpan1StartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.outputBody = function (out)  {
   out.append(this.getSpan1Body1());
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.getSpan1StartTagTxt0 = function ()  {
   return this.span1StartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.setSpan1StartTagTxt0 = function (_span1StartTagTxt0)  {
   this.span1StartTagTxt0 = _span1StartTagTxt0;
   sc_Bind_c.sendChange(this, "span1StartTagTxt0", _span1StartTagTxt0);
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.getSpan1Body1 = function ()  {
   return this.span1Body1;
};
sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c.setSpan1Body1 = function (_span1Body1)  {
   this.span1Body1 = _span1Body1;
   sc_Bind_c.sendChange(this, "span1Body1", _span1Body1);
};

sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1_c._sc_example_todo_TodoList_body_div_todoControl_ulli_Repeat_ulli_span1Init = function() {
   this.setParentNode(this._outer6);
   this.setId(this.allocUniqueId("span1"));
   this.setHTMLClass((sc_Bind_c.arith(this, "HTMLClass", "+", [ new sc_ConstantBinding("complete-"), sc_Bind_c.bindP(this._outer6, [ "todo", "complete" ]) ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   this.setSpan1StartTagTxt0((sc_Bind_c.arith(this, "span1StartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<span class=\""), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "escAtt", String_c, "Ljava/lang/CharSequence;"), [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("complete-"), sc_Bind_c.bindP(this._outer6, [ "todo", "complete" ]) ]) ]) ]), new sc_ConstantBinding("\" id='") ]), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "span1StartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
   this.setSpan1Body1((sc_Bind_c.method(this, "span1Body1", this, sc_DynUtil_c.resolveMethod(this.getClass(), "escBody", String_c, "Ljava/lang/Object;"), [ sc_Bind_c.bindP(this._outer6, [ "todo", "text" ]) ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "span1Body1", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateBody", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.form -----
function sc_example_todo_TodoList_body_div_todoControl_form(_outer) {
   this._outer4 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.formStartTagTxt0 = null;
   this.input0 = null;
   this.input1 = null;

   js_Form.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_formInit();
}

var sc_example_todo_TodoList_body_div_todoControl_form_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.form", sc_example_todo_TodoList_body_div_todoControl_form, sc_example_todo_TodoList_body_div_todoControl, js_Form, null);

sc_example_todo_TodoList_body_div_todoControl_form_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_form_c._PT = {input0:{TypeSettings: {objectType: true}}, formStartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_form_c.getObjChildren = function (create)  {
   if (arguments.length == 0) return;
   if (create) {
      return[ this.getInput0(), this.getInput1() ];
   }
   else {
      return[ (this.input0), (this.input1) ];
   }
};
sc_example_todo_TodoList_body_div_todoControl_form_c.outputStartTag = function (out)  {
   out.append(this.getFormStartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_form_c.outputBody = function (out)  {
   out.append("\n              ");
   this.getInput0().outputTag(out);
   out.append("\n              ");
   this.getInput1().outputTag(out);
   out.append("\n           ");
};
sc_example_todo_TodoList_body_div_todoControl_form_c.getFormStartTagTxt0 = function ()  {
   return this.formStartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_form_c.setFormStartTagTxt0 = function (_formStartTagTxt0)  {
   this.formStartTagTxt0 = _formStartTagTxt0;
   sc_Bind_c.sendChange(this, "formStartTagTxt0", _formStartTagTxt0);
};
sc_example_todo_TodoList_body_div_todoControl_form_c.getInput0 = function ()  {
   if (this.input0 === null) {
      var _input0 = new sc_example_todo_TodoList_body_div_todoControl_form_input0(this);
      this.input0 = _input0;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.form.input0", _input0, this);
      return _input0;
   }
   else
      return this.input0;
};
sc_example_todo_TodoList_body_div_todoControl_form_c.getInput1 = function ()  {
   if (this.input1 === null) {
      var _input1 = new sc_example_todo_TodoList_body_div_todoControl_form_input1(this);
      this.input1 = _input1;
      sc_DynUtil_c.addDynInnerObject("sc.example.todo.TodoList.body.div.todoControl.form.input1", _input1, this);
      return _input1;
   }
   else
      return this.input1;
};

sc_example_todo_TodoList_body_div_todoControl_form_c._sc_example_todo_TodoList_body_div_todoControl_formInit = function() {
   this.setParentNode(this._outer4);
   this.setId(this.allocUniqueId("form"));
   sc_Bind_c.method(this, "submitEvent", this._outer4._outer3._outer2._outer1, sc_DynUtil_c.resolveMethod(this._outer4._outer3._outer2._outer1.getClass(), "addTodoEntry", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
   this.setFormStartTagTxt0((sc_Bind_c.arith(this, "formStartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<form onsubmit=\"return false;\" id='"), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "formStartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.form.input0 -----
function sc_example_todo_TodoList_body_div_todoControl_form_input0(_outer) {
   this._outer5 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.input0StartTagTxt0 = null;

   js_Input.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_form_input0Init();
}

var sc_example_todo_TodoList_body_div_todoControl_form_input0_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.form.input0", sc_example_todo_TodoList_body_div_todoControl_form_input0, sc_example_todo_TodoList_body_div_todoControl_form, js_Input, null);

sc_example_todo_TodoList_body_div_todoControl_form_input0_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_form_input0_c._PT = {input0StartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_form_input0_c.outputStartTag = function (out)  {
   out.append(this.getInput0StartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_form_input0_c.getInput0StartTagTxt0 = function ()  {
   return this.input0StartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_form_input0_c.setInput0StartTagTxt0 = function (_input0StartTagTxt0)  {
   this.input0StartTagTxt0 = _input0StartTagTxt0;
   sc_Bind_c.sendChange(this, "input0StartTagTxt0", _input0StartTagTxt0);
};

sc_example_todo_TodoList_body_div_todoControl_form_input0_c._sc_example_todo_TodoList_body_div_todoControl_form_input0Init = function() {
   this.setParentNode(this._outer5);
   this.setId(this.allocUniqueId("input0"));
   this.type = "text";
   this.setValue((sc_Bind_c.bind(this, "value", this._outer5._outer4._outer3._outer2._outer1, [ "todoText" ], sc_clInit(sc_BindingDirection_c).BIDIRECTIONAL, 0, null)));
   this.size = 45;
   this.setInput0StartTagTxt0((sc_Bind_c.arith(this, "input0StartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<input type='text' value=\""), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "escAtt", String_c, "Ljava/lang/CharSequence;"), [ sc_Bind_c.bindP(this._outer5._outer4._outer3._outer2._outer1, [ "todoText" ]) ]) ]), new sc_ConstantBinding("\" size=\"") ]), new sc_ConstantBinding(45) ]), new sc_ConstantBinding("\" placeholder='enter todo entry here' id='") ]), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "input0StartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};

// Generated JS from Java: sc.example.todo.TodoList.body.div.todoControl.form.input1 -----
function sc_example_todo_TodoList_body_div_todoControl_form_input1(_outer) {
   this._outer5 = _outer;
   if (this.outer === undefined) this.outer = _outer;
   this.input1StartTagTxt0 = null;

   js_Input.call(this);
   this._sc_example_todo_TodoList_body_div_todoControl_form_input1Init();
}

var sc_example_todo_TodoList_body_div_todoControl_form_input1_c = sc_newInnerObj("sc.example.todo.TodoList.body.div.todoControl.form.input1", sc_example_todo_TodoList_body_div_todoControl_form_input1, sc_example_todo_TodoList_body_div_todoControl_form, js_Input, null);

sc_example_todo_TodoList_body_div_todoControl_form_input1_c._A_TypeSettings = {objectType: true};

sc_example_todo_TodoList_body_div_todoControl_form_input1_c._PT = {input1StartTagTxt0:{Bindable: {manual: true}}};
sc_example_todo_TodoList_body_div_todoControl_form_input1_c.outputStartTag = function (out)  {
   out.append(this.getInput1StartTagTxt0());
};
sc_example_todo_TodoList_body_div_todoControl_form_input1_c.getInput1StartTagTxt0 = function ()  {
   return this.input1StartTagTxt0;
};
sc_example_todo_TodoList_body_div_todoControl_form_input1_c.setInput1StartTagTxt0 = function (_input1StartTagTxt0)  {
   this.input1StartTagTxt0 = _input1StartTagTxt0;
   sc_Bind_c.sendChange(this, "input1StartTagTxt0", _input1StartTagTxt0);
};

sc_example_todo_TodoList_body_div_todoControl_form_input1_c._sc_example_todo_TodoList_body_div_todoControl_form_input1Init = function() {
   this.setParentNode(this._outer5);
   this.setId(this.allocUniqueId("input1"));
   this.type = "submit";
   this.setValue("Add");
   this.setDisabled(sc_DynUtil_c.booleanValue(sc_Bind_c.condition(this, "disabled", "==", [ sc_Bind_c.methodP(sc_DynUtil_c.resolveStaticMethod(sc_TextUtil_c, "length", Number_c, "Ljava/lang/String;"), [ sc_Bind_c.bindP(this._outer5._outer4._outer3._outer2._outer1, [ "todoText" ]) ]), new sc_ConstantBinding(0) ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   this.setInput1StartTagTxt0((sc_Bind_c.arith(this, "input1StartTagTxt0", "+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ sc_Bind_c.arithP("+", [ new sc_ConstantBinding("<input type='submit' value='Add'"), (sc_Bind_c.ternaryP([ sc_Bind_c.conditionP("==", [ sc_Bind_c.methodP(sc_DynUtil_c.resolveStaticMethod(sc_TextUtil_c, "length", Number_c, "Ljava/lang/String;"), [ sc_Bind_c.bindP(this._outer5._outer4._outer3._outer2._outer1, [ "todoText" ]) ]), new sc_ConstantBinding(0) ]), new sc_ConstantBinding(" disabled"), new sc_ConstantBinding("") ])) ]), new sc_ConstantBinding(" id='") ]), sc_Bind_c.methodP(this, sc_DynUtil_c.resolveMethod(this.getClass(), "getId", String_c, ""), [  ]) ]), new sc_ConstantBinding("'>") ], sc_clInit(sc_BindingDirection_c).FORWARD, 0, null)));
   sc_Bind_c.method(this, "input1StartTagTxt0", this, sc_DynUtil_c.resolveMethod(this.getClass(), "invalidateStartTag", null, ""), [  ], sc_clInit(sc_BindingDirection_c).REVERSE, 0, null);
};
var _inst;
sc_DynUtil_c.addDynObject("sc.example.todo.TodoList", _inst = new sc_example_todo_TodoList());


//# sourceMappingURL=sc_example_todo_TodoList.js.map
