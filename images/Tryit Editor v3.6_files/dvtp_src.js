(function(m,u,n){if("object"===typeof n&&"string"!==typeof n.nodeName)u(m,n);else{var v=function(c){for(var h in c)c.hasOwnProperty(h)&&(c[h]=v(c[h]));return Object.freeze(c)};n={};u(m,n);for(var p in n)!n.hasOwnProperty(p)||null!=Object.getOwnPropertyDescriptor(m,p)&&null!=Object.getOwnPropertyDescriptor(m[p],"1.2.6-iab634")||(null==Object.getOwnPropertyDescriptor(m,p)&&Object.defineProperty(m,p,{value:{}}),Object.defineProperty(m[p],"1.2.6-iab634",{get:function(){return v(n[p])},enumerable:!0}))}})("undefined"===
typeof global?this:global,function(m,u){function n(a,b){return a&&(a[b]||(a[b]={}))}function v(a,b){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==typeof console&&console&&console.error&&b()}function p(a,b){return b.reduce(function(a,b){return a&&a[b]},a)}var c=c||{};c.scope={};c.inherits=function(a,b){function e(){}e.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new e;a.prototype.constructor=a;for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,
c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]};c.ASSUME_ES5=!1;c.ASSUME_NO_NATIVE_MAP=!1;c.ASSUME_NO_NATIVE_SET=!1;c.defineProperty=c.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)};c.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};c.global=c.getGlobal(this);c.SYMBOL_PREFIX="jscomp_symbol_";c.initSymbol=function(){c.initSymbol=
function(){};c.global.Symbol||(c.global.Symbol=c.Symbol)};c.symbolCounter_=0;c.Symbol=function(a){return c.SYMBOL_PREFIX+(a||"")+c.symbolCounter_++};c.initSymbolIterator=function(){c.initSymbol();var a=c.global.Symbol.iterator;a||(a=c.global.Symbol.iterator=c.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&c.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return c.arrayIterator(this)}});c.initSymbolIterator=function(){}};c.arrayIterator=function(a){var b=
0;return c.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};c.iteratorPrototype=function(a){c.initSymbolIterator();a={next:a};a[c.global.Symbol.iterator]=function(){return this};return a};c.makeIterator=function(a){c.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):c.arrayIterator(a)};c.arrayFromIterator=function(a){for(var b,e=[];!(b=a.next()).done;)e.push(b.value);return e};c.arrayFromIterable=function(a){return a instanceof Array?a:c.arrayFromIterator(c.makeIterator(a))};
var h={assertTruthyString:function(a,b){if(!b)throw Error("Value for "+a+" is undefined, null or blank.");if("string"!==typeof b&&!(b instanceof String))throw Error("Value for "+a+" is not a string.");if(""===b.trim())throw Error("Value for "+a+" is empty string.");},assertNotNullObject:function(a,b){if(null==b)throw Error("Value for "+a+" is undefined or null");},assertNumber:function(a,b){if(null==b)throw Error(a+" must not be null or undefined.");if("number"!==typeof b||isNaN(b))throw Error("Value for "+
a+" is not a number");},assertNumberBetween:function(a,b,e,c){(0,h.assertNumber)(a,b);if(b<e||b>c)throw Error("Value for "+a+" is outside the range ["+e+","+c+"]");},assertFunction:function(a,b){if(!b)throw Error(a+" must not be truthy.");},assertPositiveNumber:function(a,b){(0,h.assertNumber)(a,b);if(0>b)throw Error(a+" must be a positive number.");}};var d=function(a){return/\d+\.\d+\.\d+(-.*)?/.test(a)};var g=function(a,b){a=a.split("-")[0].split(".");b=b.split("-")[0].split(".");for(var e=0;3>
e;e++){var c=parseInt(a[e],10),d=parseInt(b[e],10);if(c>d)break;else if(c<d)return!1}return!0};var f=function(a,b){return(0,d)(a)&&(0,g)(a,"1.0.3")?b:JSON.stringify(b)};var w=function(a,b){return(0,d)(a)&&(0,g)(a,"1.0.3")?b?b:[]:b&&"string"===typeof b?JSON.parse(b):[]};var t=function(a,b,c,d){this.guid=a;this.method=b;this.version=c;this.args=d};t.isValidSerializedMessage=function(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===
typeof a.omid_message_guid&&"string"===typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===a.omid_message_args||void 0!==a.omid_message_args)};t.deserialize=function(a){return new t(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)};t.prototype.serialize=function(){var a={};a=(a.omid_message_guid=this.guid,a.omid_message_method=this.method,a.omid_message_version=this.version,a);void 0!==this.args&&(a.omid_message_args=this.args);return a};
var r=function(a){this.to=a;this.communicationType_="NONE"};r.prototype.sendMessage=function(a,b){};r.prototype.handleMessage=function(a,b){if(this.onMessage)this.onMessage(a,b)};r.prototype.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return a="y"===a?(b&3|8).toString(16):b.toString(16)})};r.prototype.serialize=function(a){return JSON.stringify(a)};r.prototype.deserialize=function(a){return JSON.parse(a)};r.prototype.isDirectCommunication=
function(){return"DIRECT"===this.communicationType_};var q={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(a){try{return a.frames?!!a.frames[q.OMID_PRESENT_FRAME_NAME]:!1}catch(b){return!1}},declareOmidPresence:function(a){a.frames&&a.document&&(q.OMID_PRESENT_FRAME_NAME in a.frames||(null==a.document.body&&q.isMutationObserverAvailable_(a)?q.registerMutationObserver_(a):a.document.body?q.appendPresenceIframe_(a):a.document.write('<iframe style="display:none" '+('id="'+q.OMID_PRESENT_FRAME_NAME+
'"')+(' name="'+q.OMID_PRESENT_FRAME_NAME+'">')+"</iframe>")))},appendPresenceIframe_:function(a){var b=a.document.createElement("iframe");b.id=q.OMID_PRESENT_FRAME_NAME;b.name=q.OMID_PRESENT_FRAME_NAME;b.style.display="none";a.document.body.appendChild(b)},isMutationObserverAvailable_:function(a){return"MutationObserver"in a},registerMutationObserver_:function(a){var b=new MutationObserver(function(c){c.forEach(function(c){"BODY"===c.addedNodes[0].nodeName&&(q.appendPresenceIframe_(a),b.disconnect())})});
b.observe(a.document.documentElement,{childList:!0})}},x=function(a){r.call(this,a);this.communicationType_="DIRECT";this.handleExportedMessage=x.prototype.handleExportedMessage.bind(this)};c.inherits(x,r);x.prototype.sendMessage=function(a,b){b=void 0===b?this.to:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.handleExportedMessage(a.serialize(),this)};x.prototype.handleExportedMessage=function(a,b){t.isValidSerializedMessage(a)&&this.handleMessage(t.deserialize(a),
b)};var z={error:function(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];v(function(){throw new (Function.prototype.bind.apply(Error,[null].concat(["Could not complete the test successfully - "],c.arrayFromIterable(b))));},function(){return console.error.apply(console,[].concat(c.arrayFromIterable(b)))})},debug:function(a){for(var b=[],e=0;e<arguments.length;++e)b[e-0]=arguments[e];v(function(){},function(){return console.error.apply(console,[].concat(c.arrayFromIterable(b)))})}},
A=eval("this");var l=function(){if("undefined"!==typeof m&&m)return m;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&window)return window;if("undefined"!==typeof A&&A)return A;throw Error("Could not determine global object context.");}();var y=function(a,b){b=void 0===b?l:b;r.call(this,b);var c=this;this.communicationType_="POST_MESSAGE";a.addEventListener("message",function(a){if("object"===typeof a.data){var b=a.data;t.isValidSerializedMessage(b)&&(b=t.deserialize(b),
a.source&&c.handleMessage(b,a.source))}})};c.inherits(y,r);y.isCompatibleContext=function(a){return!!(a&&a.addEventListener&&a.postMessage)};y.prototype.sendMessage=function(a,b){b=void 0===b?this.to:b;if(!b)throw Error("Message destination must be defined at construction time or when sending the message.");b.postMessage(a.serialize(),"*")};var B=function(a){"undefined"===typeof a&&"undefined"!==typeof window&&window&&(a=window);if("undefined"===typeof a||!a||"undefined"===typeof a.top||!a.top)return l;
if(a===a.top)return a;try{return"undefined"===typeof a.top.location.hostname?a:a.top}catch(b){return a}};var C=function(a,b,c){c=void 0===c?q.isOmidPresent:c;return(b=p(a,b))?new x(b):a.top&&c(a.top)?new y(a,a.top):null};var k=function(a){if(this.communication=void 0===a?(0,C)((0,B)(),["omid","v1_VerificationServiceCommunication"]):a)this.communication.onMessage=this.handleMessage_.bind(this);else if(a=(a=l.omid3p)&&"function"===typeof a.registerSessionObserver&&"function"===typeof a.addEventListener?
a:null)this.omid3p=a;this.remoteIntervals_=this.remoteTimeouts_=0;this.callbackMap_={};this.imgCache_=[]};k.prototype.isSupported=function(){return!!this.communication};k.prototype.registerSessionObserver=function(a,b){(0,h.assertFunction)("functionToExecute",a);this.omid3p?this.omid3p.registerSessionObserver(a,b):this.sendMessage_("addSessionListener",a,b)};k.prototype.addEventListener=function(a,b){(0,h.assertTruthyString)("eventType",a);(0,h.assertFunction)("functionToExecute",b);this.omid3p?this.omid3p.addEventListener(a,
b):this.sendMessage_("addEventListener",b,a)};k.prototype.sendUrl=function(a,b,c){(0,h.assertTruthyString)("url",a);l.document&&l.document.createElement?this.sendUrlWithImg_(a,b,c):this.sendMessage_("sendUrl",function(a){a&&b?b():!a&&c&&c()},a)};k.prototype.sendUrlWithImg_=function(a,b,c){var e=this,d=l.document.createElement("img");this.imgCache_.push(d);var g=function(a){var b=e.imgCache_.indexOf(d);0<=b&&e.imgCache_.splice(b,1);a&&a()};d.addEventListener("load",g.bind(this,b));d.addEventListener("error",
g.bind(this,c));d.src=a};k.prototype.injectJavaScriptResource=function(a,b,c){var e=this;(0,h.assertTruthyString)("url",a);l.document?this.injectJavascriptResourceUrlInDom_(a,b,c):this.sendMessage_("injectJavaScriptResource",function(d,g){d?(e.evaluateJavaScript_(g,a),b()):(z.error("Service failed to load JavaScript resource."),c())},a)};k.prototype.injectJavascriptResourceUrlInDom_=function(a,b,c){var d=l.document,e=d.body;d=d.createElement("script");d.onload=b;d.onerror=c;d.src=a;d.type="application/javascript";
e.appendChild(d)};k.prototype.evaluateJavaScript_=function(a,b){try{eval(a)}catch(e){z.error('Error evaluating the JavaScript resource from "'+b+'".')}};k.prototype.setTimeout=function(a,b){(0,h.assertFunction)("functionToExecute",a);(0,h.assertPositiveNumber)("timeInMillis",b);if(this.hasTimeoutMethods_())return l.setTimeout(a,b);var c=this.remoteTimeouts_++;this.sendMessage_("setTimeout",a,c,b);return c};k.prototype.clearTimeout=function(a){(0,h.assertPositiveNumber)("timeoutId",a);this.hasTimeoutMethods_()?
l.clearTimeout(a):this.sendOneWayMessage_("clearTimeout",a)};k.prototype.setInterval=function(a,b){(0,h.assertFunction)("functionToExecute",a);(0,h.assertPositiveNumber)("timeInMillis",b);if(this.hasIntervalMethods_())return l.setInterval(a,b);var c=this.remoteIntervals_++;this.sendMessage_("setInterval",a,c,b);return c};k.prototype.clearInterval=function(a){(0,h.assertPositiveNumber)("intervalId",a);this.hasIntervalMethods_()?l.clearInterval(a):this.sendOneWayMessage_("clearInterval",a)};k.prototype.hasTimeoutMethods_=
function(){return"function"===typeof l.setTimeout&&"function"===typeof l.clearTimeout};k.prototype.hasIntervalMethods_=function(){return"function"===typeof l.setInterval&&"function"===typeof l.clearInterval};k.prototype.handleMessage_=function(a,b){b=a.method;var c=a.guid;a=a.args;if("response"===b&&this.callbackMap_[c]){var d=(0,w)("1.2.6-iab634",a);this.callbackMap_[c].apply(this,d)}"error"===b&&window.console&&z.error(a)};k.prototype.sendOneWayMessage_=function(a,b){for(var d=[],g=1;g<arguments.length;++g)d[g-
1]=arguments[g];this.sendMessage_.apply(this,[].concat([a,null],c.arrayFromIterable(d)))};k.prototype.sendMessage_=function(a,b,c){for(var d=[],g=2;g<arguments.length;++g)d[g-2]=arguments[g];this.communication&&(g=this.communication.generateGuid(),b&&(this.callbackMap_[g]=b),d=new t(g,"VerificationService."+a,"1.2.6-iab634",(0,f)("1.2.6-iab634",d)),this.communication.sendMessage(d))};(0,function(a,b,c){if(c=void 0===c?"undefined"===typeof u?null:u:c)a=a.split("."),a.slice(0,a.length-1).reduce(n,c)[a[a.length-
1]]=b})("OmidVerificationClient",k)},"undefined"===typeof exports?void 0:exports);
(function(){function m(){var c={location:{protocol:"https:"}};c.parent=c;c.top=c;c.document={getElementById:function(){},createElement:function(){},body:{insertBefore:function(){}},querySelectorAll:function(){return[]}};return c}function u(c){var d={src:"dv-measurements",main:274},f=d.eval&&d.rate&&100*Math.random()<d.rate?d.eval:d.main;if(f)return c+"//cdn.doubleverify.com/"+d.src+f+".js"}function n(){window.$dv=window.parent.$dv;window.$dv.isFrameSupported=!0;window.$frmId=Math.random().toString(36)+
Math.random().toString(36);window.dv_flow=2}function v(c,g){if(c){var d=document.createElement("script");d.src=c;d.onerror=function(){(new Image).src=g+"scriptLoading"};document.body.appendChild(d)}}function p(c){var d=Math.floor(1E12*(Math.random()+"")),f=document.createElement("iframe");f.name=f.id="iframe_"+d;f.setAttribute("data-dv-frm",d);f.width="0";f.height="0";f.style.display="none";f.src="about:blank";document.currentScript?document.currentScript.parentNode.insertBefore(f,document.currentScript):
document.body?document.body.insertBefore(f,document.body.firstChild):(d=document.getElementsByTagName("head")[0],d.insertBefore(f,d.firstChild));d=f&&(f.contentDocument||f.contentWindow&&f.contentWindow.document||frames&&frames[f.name]&&frames[f.name].document);c='<html><head><script type="text/javascript">('+n.toString()+')();\x3c/script></head><body><script type="text/javascript">('+v.toString()+')("'+c+'", "https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=");\x3c/script></body></html>';
d?(d.open(),d.write(c),d.close()):(c=encodeURIComponent(c.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,"")),f.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+c+"');})()")}dv_flow=2;var c={omidObject:{},isSupported:function(){try{return this.omidObject=new OmidVerificationClient["1.2.6-iab634"],this.omidObject.isSupported()}catch(d){return!1}},execute:function(){var c=this.omidObject;"undefined"!=typeof $dv?($dv.tagsCounter=$dv.tagsCounter||
0,$dv.tagsCounter++,$dv.omidJsClient=c):$dv={omidJsClient:c,tags:{},tagsCounter:1};"undefined"==typeof window&&($dv.isDomlessEnvironment=!0,window=m());c.registerSessionObserver(function(d){try{switch(d.type){case "sessionStart":$dv.omidSessionData=d;$dv.omidAccessMode=d&&d.data&&d.data.context&&d.data.context.accessMode;try{$dv.omidSessionStartTime=Date.now?Date.now():(new Date).getTime()}catch(w){}var f=u("https:");if($dv.isDomlessEnvironment)$frmId=Math.random().toString(36)+Math.random().toString(36),
c.injectJavaScriptResource(f,function(){},function(){c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidScriptInj")});else try{p(f)}catch(w){$frmId=Math.random().toString(36)+Math.random().toString(36),c.injectJavaScriptResource(f,function(){},function(){c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidScriptInj")})}break;case "sessionError":c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidSession"+
(d.data&&d.data.message||""))}}catch(w){c.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidCallback"+w.message)}},"doubleverify.com-omid")}},h={execute:function(){try{window.$dv=window.$dv||{tags:{}};var c=document.currentScript&&0==document.currentScript.src.indexOf("http:")?"http:":"https:",g=u(c);p(g)}catch(f){(new Image).src="https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=visitLoading"+
f.message}}};try{c.isSupported()?c.execute():h.execute()}catch(d){}})();
