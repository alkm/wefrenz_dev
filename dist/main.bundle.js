webpackJsonp(["main"],{

/***/ "../../../../../libs/socket.io.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t,e){"object"===("undefined"==typeof t?"undefined":i(t))&&(e=t,t=void 0),e=e||{};var r,n=s(t),a=n.source,p=n.id,f=n.path,l=h[p]&&f in h[p].nsps,d=e.forceNew||e["force new connection"]||!1===e.multiplex||l;return d?(u("ignoring socket cache for %s",a),r=c(a,e)):(h[p]||(u("new io instance for %s",a),h[p]=c(a,e)),r=h[p]),n.query&&!e.query?e.query=n.query:e&&"object"===i(e.query)&&(e.query=o(e.query)),r.socket(n.path,e)}function o(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e.join("&")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=r(1),a=r(7),c=r(17),u=r(3)("socket.io-client");t.exports=e=n;var h=e.managers={};e.protocol=a.protocol,e.connect=n,e.Manager=r(17),e.Socket=r(44)},function(t,e,r){(function(e){"use strict";function n(t,r){var n=t;r=r||e.location,null==t&&(t=r.protocol+"//"+r.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?r.protocol+t:r.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof r?r.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var s=n.host.indexOf(":")!==-1,a=s?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+a+":"+n.port,n.href=n.protocol+"://"+a+(r&&r.port===n.port?"":":"+n.port),n}var o=r(2),i=r(3)("socket.io-client:url");t.exports=n}).call(e,function(){return this}())},function(t,e){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=r.exec(t||""),a={},c=14;c--;)a[n[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,r){(function(n){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof n&&"env"in n)return n.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=r(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,r(4))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(h===setTimeout)return setTimeout(t,0);if((h===r||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):g=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++g<e;)l&&l[g].run();g=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var h,p,f=t.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:r}catch(t){h=r}try{p="function"==typeof clearTimeout?clearTimeout:n}catch(t){p=n}}();var l,d=[],y=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=s[c];r=o.call(t,i),s.splice(c,1),c--}return r}),s=e.formatArgs.apply(t,s);var h=o.log||e.log||console.log.bind(console);h.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(6),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return r(t);if("number"===i&&isNaN(t)===!1)return e.long?o(t):n(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,r){function n(){}function o(t){var r="",n=!1;return r+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(r+=t.attachments,r+="-"),t.nsp&&"/"!=t.nsp&&(n=!0,r+=t.nsp),null!=t.id&&(n&&(r+=",",n=!1),r+=t.id),null!=t.data&&(n&&(r+=","),r+=f.stringify(t.data)),p("encoded %j as %s",t,r),r}function i(t,e){function r(t){var r=d.deconstructPacket(t),n=o(r.packet),i=r.buffers;i.unshift(n),e(i)}d.removeBlobs(t,r)}function s(){this.reconstructor=null}function a(t){var r={},n=0;if(r.type=Number(t.charAt(0)),null==e.types[r.type])return h();if(e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type){for(var o="";"-"!=t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!=t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"==t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","==i)break;if(r.nsp+=i,n==t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n==t.length)break}r.id=Number(r.id)}return t.charAt(++n)&&(r=c(r,t.substr(n))),p("decoded %s as %j",t,r),r}function c(t,e){try{t.data=f.parse(e)}catch(t){return h()}return t}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error"}}var p=r(8)("socket.io-parser"),f=r(11),l=r(13),d=r(14),y=r(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=n,e.Decoder=s,n.prototype.encode=function(t,r){if(p("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,r);else{var n=o(t);r([n])}},l(s.prototype),s.prototype.add=function(t){var r;if("string"==typeof t)r=a(t),e.BINARY_EVENT==r.type||e.BINARY_ACK==r.type?(this.reconstructor=new u(r),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",r)):this.emit("decoded",r);else{if(!y(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");r=this.reconstructor.takeBinaryData(t),r&&(this.reconstructor=null,this.emit("decoded",r))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return t;var n="color: "+this.color;t=[t[0],n,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,n),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function a(){var t;try{t=e.storage.debug}catch(t){}return t}function c(){try{return window.localStorage}catch(t){}}e=t.exports=r(9),e.log=i,e.formatArgs=o,e.save=s,e.load=a,e.useColors=n,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(a())},function(t,e,r){function n(){return e.colors[h++%e.colors.length]}function o(t){function r(){}function o(){var t=o,r=+new Date,i=r-(u||r);t.diff=i,t.prev=u,t.curr=r,u=r,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=n());var s=Array.prototype.slice.call(arguments);s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var a=0;s[0]=s[0].replace(/%([a-z%])/g,function(r,n){if("%%"===r)return r;a++;var o=e.formatters[n];if("function"==typeof o){var i=s[a];r=o.call(t,i),s.splice(a,1),a--}return r}),"function"==typeof e.formatArgs&&(s=e.formatArgs.apply(t,s));var c=o.log||e.log||console.log.bind(console);c.apply(t,s)}r.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:r;return i.namespace=t,i}function i(t){e.save(t);for(var r=(t||"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&(t=r[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=r(10),e.names=[],e.skips=[],e.formatters={};var u,h=0},function(t,e){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*c;case"minutes":case"minute":case"mins":case"min":case"m":return r*a;case"seconds":case"second":case"secs":case"sec":case"s":return r*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function n(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,h=365.25*u;t.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e.long?o(t):n(t)}},function(t,e,r){(function(t,r){var n=!1;(function(){function o(t,e){function r(t){if(r[t]!==g)return r[t];var o;if("bug-string-char-index"==t)o="a"!="a"[0];else if("json"==t)o=r("json-stringify")&&r("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var c=e.stringify,h="function"==typeof c&&b;if(h){(s=function(){return 1}).toJSON=s;try{h="0"===c(0)&&"0"===c(new n)&&'""'==c(new i)&&c(v)===g&&c(g)===g&&c()===g&&"1"===c(s)&&"[1]"==c([s])&&"[null]"==c([g])&&"null"==c(null)&&"[null,null,null]"==c([g,v,null])&&c({a:[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===c(null,s)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==c(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==c(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==c(new u(-1))}catch(t){h=!1}}o=h}if("json-parse"==t){var p=e.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){s=p(a);var f=5==s.a.length&&1===s.a[0];if(f){try{f=!p('"\t"')}catch(t){}if(f)try{f=1!==p("01")}catch(t){}if(f)try{f=1!==p("1.")}catch(t){}}}}catch(t){f=!1}o=f}}return r[t]=!!o}t||(t=c.Object()),e||(e=c.Object());var n=t.Number||c.Number,i=t.String||c.String,a=t.Object||c.Object,u=t.Date||c.Date,h=t.SyntaxError||c.SyntaxError,p=t.TypeError||c.TypeError,f=t.Math||c.Math,l=t.JSON||c.JSON;"object"==typeof l&&l&&(e.stringify=l.stringify,e.parse=l.parse);var d,y,g,m=a.prototype,v=m.toString,b=new u(-0xc782b5b800cec);try{b=b.getUTCFullYear()==-109252&&0===b.getUTCMonth()&&1===b.getUTCDate()&&10==b.getUTCHours()&&37==b.getUTCMinutes()&&6==b.getUTCSeconds()&&708==b.getUTCMilliseconds()}catch(t){}if(!r("json")){var w="[object Function]",k="[object Date]",x="[object Number]",A="[object String]",C="[object Array]",B="[object Boolean]",S=r("bug-string-char-index");if(!b)var T=f.floor,E=[0,31,59,90,120,151,181,212,243,273,304,334],_=function(t,e){return E[e]+365*(t-1970)+T((t-1969+(e=+(e>1)))/4)-T((t-1901+e)/100)+T((t-1601+e)/400)};if((d=m.hasOwnProperty)||(d=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=v?d=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,d=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,d.call(this,t)}),y=function(t,e){var r,n,o,i=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)d.call(n,o)&&i++;return r=n=null,i?y=2==i?function(t,e){var r,n={},o=v.call(t)==w;for(r in t)o&&"prototype"==r||d.call(n,r)||!(n[r]=1)||!d.call(t,r)||e(r)}:function(t,e){var r,n,o=v.call(t)==w;for(r in t)o&&"prototype"==r||!d.call(t,r)||(n="constructor"===r)||e(r);(n||d.call(t,r="constructor"))&&e(r)}:(n=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],y=function(t,e){var r,o,i=v.call(t)==w,a=!i&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||d;for(r in t)i&&"prototype"==r||!a.call(t,r)||e(r);for(o=n.length;r=n[--o];a.call(t,r)&&e(r));}),y(t,e)},!r("json-stringify")){var N={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},j="000000",O=function(t,e){return(j+(e||0)).slice(-t)},P="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!S||n>10,i=o&&(S?t.split(""):t);r<n;r++){var s=t.charCodeAt(r);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=N[s];break;default:if(s<32){e+=P+O(2,s.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},D=function(t,e,r,n,o,i,s){var a,c,u,h,f,l,m,b,w,S,E,N,j,P,q,U;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if(c=v.call(a),c!=k||d.call(a,"toJSON"))"function"==typeof a.toJSON&&(c!=x&&c!=A&&c!=C||d.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(_){for(f=T(a/864e5),u=T(f/365.2425)+1970-1;_(u+1,0)<=f;u++);for(h=T((f-_(u,0))/30.42);_(u,h+1)<=f;h++);f=1+f-_(u,h),l=(a%864e5+864e5)%864e5,m=T(l/36e5)%24,b=T(l/6e4)%60,w=T(l/1e3)%60,S=l%1e3}else u=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),m=a.getUTCHours(),b=a.getUTCMinutes(),w=a.getUTCSeconds(),S=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+O(6,u<0?-u:u):O(4,u))+"-"+O(2,h+1)+"-"+O(2,f)+"T"+O(2,m)+":"+O(2,b)+":"+O(2,w)+"."+O(3,S)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if(c=v.call(a),c==B)return""+a;if(c==x)return a>-1/0&&a<1/0?""+a:"null";if(c==A)return R(""+a);if("object"==typeof a){for(P=s.length;P--;)if(s[P]===a)throw p();if(s.push(a),E=[],q=i,i+=o,c==C){for(j=0,P=a.length;j<P;j++)N=D(j,a,r,n,o,i,s),E.push(N===g?"null":N);U=E.length?o?"[\n"+i+E.join(",\n"+i)+"\n"+q+"]":"["+E.join(",")+"]":"[]"}else y(n||a,function(t){var e=D(t,a,r,n,o,i,s);e!==g&&E.push(R(t)+":"+(o?" ":"")+e)}),U=E.length?o?"{\n"+i+E.join(",\n"+i)+"\n"+q+"}":"{"+E.join(",")+"}":"{}";return s.pop(),U}};e.stringify=function(t,e,r){var n,o,i,a;if(s[typeof e]&&e)if((a=v.call(e))==w)o=e;else if(a==C){i={};for(var c,u=0,h=e.length;u<h;c=e[u++],a=v.call(c),(a==A||a==x)&&(i[c]=1));}if(r)if((a=v.call(r))==x){if((r-=r%1)>0)for(n="",r>10&&(r=10);n.length<r;n+=" ");}else a==A&&(n=r.length<=10?r:r.slice(0,10));return D("",(c={},c[""]=t,c),o,i,n,"",[])}}if(!r("json-parse")){var q,U,M=i.fromCharCode,L={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw q=U=null,h()},H=function(){for(var t,e,r,n,o,i=U,s=i.length;q<s;)switch(o=i.charCodeAt(q)){case 9:case 10:case 13:case 32:q++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=S?i.charAt(q):i[q],q++,t;case 34:for(t="@",q++;q<s;)if(o=i.charCodeAt(q),o<32)I();else if(92==o)switch(o=i.charCodeAt(++q)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=L[o],q++;break;case 117:for(e=++q,r=q+4;q<r;q++)o=i.charCodeAt(q),o>=48&&o<=57||o>=97&&o<=102||o>=65&&o<=70||I();t+=M("0x"+i.slice(e,q));break;default:I()}else{if(34==o)break;for(o=i.charCodeAt(q),e=q;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++q);t+=i.slice(e,q)}if(34==i.charCodeAt(q))return q++,t;I();default:if(e=q,45==o&&(n=!0,o=i.charCodeAt(++q)),o>=48&&o<=57){for(48==o&&(o=i.charCodeAt(q+1),o>=48&&o<=57)&&I(),n=!1;q<s&&(o=i.charCodeAt(q),o>=48&&o<=57);q++);if(46==i.charCodeAt(q)){for(r=++q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}if(o=i.charCodeAt(q),101==o||69==o){for(o=i.charCodeAt(++q),43!=o&&45!=o||q++,r=q;r<s&&(o=i.charCodeAt(r),o>=48&&o<=57);r++);r==q&&I(),q=r}return+i.slice(e,q)}if(n&&I(),"true"==i.slice(q,q+4))return q+=4,!0;if("false"==i.slice(q,q+5))return q+=5,!1;if("null"==i.slice(q,q+4))return q+=4,null;I()}return"$"},z=function(t){var e,r;if("$"==t&&I(),"string"==typeof t){if("@"==(S?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=H(),"]"!=t;r||(r=!0))r&&(","==t?(t=H(),"]"==t&&I()):I()),","==t&&I(),e.push(z(t));return e}if("{"==t){for(e={};t=H(),"}"!=t;r||(r=!0))r&&(","==t?(t=H(),"}"==t&&I()):I()),","!=t&&"string"==typeof t&&"@"==(S?t.charAt(0):t[0])&&":"==H()||I(),e[t.slice(1)]=z(H());return e}I()}return t},J=function(t,e,r){var n=X(t,e,r);n===g?delete t[e]:t[e]=n},X=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(v.call(o)==C)for(n=o.length;n--;)J(o,n,r);else y(o,function(t){J(o,t,r)});return r.call(t,e,o)};e.parse=function(t,e){var r,n;return q=0,U=""+t,r=z(H()),"$"!=H()&&I(),q=U=null,e&&v.call(e)==w?X((n={},n[""]=r,n),"",e):r}}}return e.runInContext=o,e}var i="function"==typeof n&&n.amd,s={function:!0,object:!0},a=s[typeof e]&&e&&!e.nodeType&&e,c=s[typeof window]&&window||this,u=a&&s[typeof t]&&t&&!t.nodeType&&"object"==typeof r&&r;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(c=u),a&&!i)o(c,a);else{var h=c.JSON,p=c.JSON3,f=!1,l=o(c,c.JSON3={noConflict:function(){return f||(f=!0,c.JSON=h,c.JSON3=p,h=p=null),l}});c.JSON={parse:l.parse,stringify:l.stringify}}i&&n(function(){return l})}).call(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function r(t){if(t)return n(t)}function n(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function r(){n.off(t,r),e.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=e,this.on(t,r),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[t];if(!r)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks[t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,r){(function(t){var n=r(15),o=r(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:r.length};return r.push(t),i}if(n(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){var s={};for(var c in t)s[c]=e(t[c]);return s}return t}var r=[],i=t.data,s=t;return s.data=e(i),s.attachments=r.length,{packet:s,buffers:r}},e.reconstructPacket=function(t,e){function r(t){if(t&&t._placeholder){var o=e[t.num];return o}if(n(t)){for(var i=0;i<t.length;i++)t[i]=r(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=r(t[s]);return t}return t}return t.data=r(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,r){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var h=new FileReader;h.onload=function(){u?u[c]=this.result:a=this.result,--s||r(a)},h.readAsArrayBuffer(e)}else if(n(e))for(var p=0;p<e.length;p++)i(e[p],p,e);else if(e&&"object"==typeof e&&!o(e))for(var f in e)i(e[f],f,e)}var s=0,a=e;i(a),s||r(a)}}).call(e,function(){return this}())},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){(function(e){function r(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=r}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e){return this instanceof n?(t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new c.Encoder,this.decoder=new c.Decoder,this.autoConnect=e.autoConnect!==!1,void(this.autoConnect&&this.open())):new n(t,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=r(18),s=r(44),a=r(35),c=r(7),u=r(46),h=r(47),p=r(3)("socket.io-client:manager"),f=r(42),l=r(48),d=Object.prototype.hasOwnProperty;t.exports=n,n.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},n.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},a(n.prototype),n.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},n.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},n.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},n.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},n.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},n.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},n.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},n.prototype.open=n.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=i(this.uri,this.opts);var r=this.engine,n=this;this.readyState="opening",this.skipReconnect=!1;var o=u(r,"open",function(){n.onopen(),t&&t()}),s=u(r,"error",function(e){if(p("connect_error"),n.cleanup(),n.readyState="closed",n.emitAll("connect_error",e),t){var r=new Error("Connection error");r.data=e,t(r)}else n.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var c=setTimeout(function(){p("connect attempt timed out after %d",a),o.destroy(),r.close(),r.emit("error","timeout"),n.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},n.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(u(t,"data",h(this,"ondata"))),this.subs.push(u(t,"ping",h(this,"onping"))),this.subs.push(u(t,"pong",h(this,"onpong"))),this.subs.push(u(t,"error",h(this,"onerror"))),this.subs.push(u(t,"close",h(this,"onclose"))),this.subs.push(u(this.decoder,"decoded",h(this,"ondecoded")))},n.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},n.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},n.prototype.ondata=function(t){this.decoder.add(t)},n.prototype.ondecoded=function(t){this.emit("packet",t)},n.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},n.prototype.socket=function(t,e){function r(){~f(o.connecting,n)||o.connecting.push(n)}var n=this.nsps[t];if(!n){n=new s(this,t,e),this.nsps[t]=n;var o=this;n.on("connecting",r),n.on("connect",function(){n.id=o.engine.id}),this.autoConnect&&r()}return n},n.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},n.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(r){for(var n=0;n<r.length;n++)e.engine.write(r[n],t.options);e.encoding=!1,e.processPacketQueue()}))},n.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},n.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var r=this.subs.shift();r.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},n.prototype.close=n.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},n.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},n.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var r=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(r)}})}},n.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,r){t.exports=r(19)},function(t,e,r){t.exports=r(20),t.exports.parser=r(27)},function(t,e,r){(function(e){function n(t,r){if(!(this instanceof n))return new n(t,r);r=r||{},t&&"object"==typeof t&&(r=t,t=null),t?(t=h(t),r.hostname=t.host,r.secure="https"===t.protocol||"wss"===t.protocol,r.port=t.port,t.query&&(r.query=t.query)):r.host&&(r.hostname=h(r.host).host),
this.secure=null!=r.secure?r.secure:e.location&&"https:"===location.protocol,r.hostname&&!r.port&&(r.port=this.secure?"443":"80"),this.agent=r.agent||!1,this.hostname=r.hostname||(e.location?location.hostname:"localhost"),this.port=r.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=r.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==r.upgrade,this.path=(r.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!r.forceJSONP,this.jsonp=!1!==r.jsonp,this.forceBase64=!!r.forceBase64,this.enablesXDR=!!r.enablesXDR,this.timestampParam=r.timestampParam||"t",this.timestampRequests=r.timestampRequests,this.transports=r.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=r.policyPort||843,this.rememberUpgrade=r.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=r.onlyBinaryUpgrades,this.perMessageDeflate=!1!==r.perMessageDeflate&&(r.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=r.pfx||null,this.key=r.key||null,this.passphrase=r.passphrase||null,this.cert=r.cert||null,this.ca=r.ca||null,this.ciphers=r.ciphers||null,this.rejectUnauthorized=void 0===r.rejectUnauthorized?null:r.rejectUnauthorized,this.forceNode=!!r.forceNode;var o="object"==typeof e&&e;o.global===o&&(r.extraHeaders&&Object.keys(r.extraHeaders).length>0&&(this.extraHeaders=r.extraHeaders),r.localAddress&&(this.localAddress=r.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,this.open()}function o(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e}var i=r(21),s=r(35),a=r(3)("engine.io-client:socket"),c=r(42),u=r(27),h=r(2),p=r(43),f=r(36);t.exports=n,n.priorWebsocketSuccess=!1,s(n.prototype),n.protocol=u.protocol,n.Socket=n,n.Transport=r(26),n.transports=r(21),n.parser=r(27),n.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var r=new i[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return r},n.prototype.open=function(){var t;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},n.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},n.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;p=p||e}p||(a('probe transport "%s" opened',t),h.send([{type:"ping",data:"probe"}]),h.once("packet",function(e){if(!p)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",h),!h)return;n.priorWebsocketSuccess="websocket"===h.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){p||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),u(),f.setTransport(h),h.send([{type:"upgrade"}]),f.emit("upgrade",h),h=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var r=new Error("probe error");r.transport=h.name,f.emit("upgradeError",r)}}))}function r(){p||(p=!0,u(),h.close(),h=null)}function o(e){var n=new Error("probe error: "+e);n.transport=h.name,r(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",n)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){h&&t.name!==h.name&&(a('"%s" works - aborting "%s"',t.name,h.name),r())}function u(){h.removeListener("open",e),h.removeListener("error",o),h.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var h=this.createTransport(t,{probe:1}),p=!1,f=this;n.priorWebsocketSuccess=!1,h.once("open",e),h.once("error",o),h.once("close",i),this.once("close",s),this.once("upgrading",c),h.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},n.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(p(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},n.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},n.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(t,e,r){return this.sendPacket("message",t,e,r),this},n.prototype.sendPacket=function(t,e,r,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof r&&(n=r,r=null),"closing"!==this.readyState&&"closed"!==this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:t,data:e,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function t(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function e(){n.removeListener("upgrade",e),n.removeListener("upgradeError",e),t()}function r(){n.once("upgrade",e),n.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():t()}):this.upgrading?r():t()}return this},n.prototype.onError=function(t){a("socket error %j",t),n.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},n.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(t){for(var e=[],r=0,n=t.length;r<n;r++)~c(this.transports,t[r])&&e.push(t[r]);return e}}).call(e,function(){return this}())},function(t,e,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var u="https:"===location.protocol,h=location.port;h||(h=u?443:80),n=e.hostname!==location.hostname||h!==e.port,a=e.secure!==u}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new i(e);if(!c)throw new Error("JSONP disabled");return new s(e)}var o=r(22),i=r(24),s=r(39),a=r(40);e.polling=n,e.websocket=a}).call(e,function(){return this}())},function(t,e,r){(function(e){var n=r(23);t.exports=function(t){var r=t.xdomain,o=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!r||n))return new XMLHttpRequest}catch(t){}try{if("undefined"!=typeof XDomainRequest&&!o&&i)return new XDomainRequest}catch(t){}if(!r)try{return new(e[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}}).call(e,function(){return this}())},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},function(t,e,r){(function(e){function n(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,e.location){var r="https:"===location.protocol,n=location.port;n||(n=r?443:80),this.xd=t.hostname!==e.location.hostname||n!==t.port,this.xs=t.secure!==r}else this.extraHeaders=t.extraHeaders}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=r(22),c=r(25),u=r(35),h=r(37),p=r(3)("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=i,h(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var r="string"!=typeof t&&void 0!==t,n=this.request({method:"POST",data:t,isBinary:r}),o=this;n.on("success",e),n.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=n},o.prototype.doPoll=function(){p("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},u(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var r=this.xhr=new a(t),n=this;try{p("xhr open %s: %s",this.method,this.uri),r.open(this.method,this.uri,this.async);try{if(this.extraHeaders){r.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&r.setRequestHeader(o,this.extraHeaders[o])}}catch(t){}if(this.supportsBinary&&(r.responseType="arraybuffer"),"POST"===this.method)try{this.isBinary?r.setRequestHeader("Content-type","application/octet-stream"):r.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{r.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in r&&(r.withCredentials=!0),this.requestTimeout&&(r.timeout=this.requestTimeout),this.hasXDR()?(r.onload=function(){n.onLoad()},r.onerror=function(){n.onError(r.responseText)}):r.onreadystatechange=function(){4===r.readyState&&(200===r.status||1223===r.status?n.onLoad():setTimeout(function(){n.onError(r.status)},0))},p("xhr data %s",this.data),r.send(this.data)}catch(t){return void setTimeout(function(){n.onError(t)},0)}e.document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,t)try{this.xhr.abort()}catch(t){}e.document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(t){}if("application/octet-stream"===e)t=this.xhr.response||this.xhr.responseText;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){for(var r=new Uint8Array(this.xhr.response),n=[],o=0,i=r.length;o<i;o++)n.push(r[o]);t=String.fromCharCode.apply(null,n)}else t=this.xhr.responseText}catch(t){this.onError(t)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},e.document&&(e.attachEvent?e.attachEvent("onunload",s):e.addEventListener&&e.addEventListener("beforeunload",s,!1))}).call(e,function(){return this}())},function(t,e,r){function n(t){var e=t&&t.forceBase64;h&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=r(26),i=r(36),s=r(27),a=r(37),c=r(38),u=r(3)("engine.io-client:polling");t.exports=n;var h=function(){var t=r(22),e=new t({xdomain:!1});return null!=e.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(t){function e(){u("paused"),r.readyState="paused",t()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(u("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){u("pre-pause polling complete"),--n||e()})),this.writable||(u("we are currently writing - waiting to pause"),n++,this.once("drain",function(){u("pre-pause writing complete"),--n||e()}))}else e()},n.prototype.poll=function(){u("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(t){var e=this;u("polling got data %s",t);var r=function(t,r,n){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,r),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():u('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function t(){u("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(u("transport open - closing"),t()):(u("transport not open - deferring close"),this.once("open",t))},n.prototype.write=function(t){var e=this;this.writable=!1;var r=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,r)})},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(r=":"+this.port),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t}},function(t,e,r){function n(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=r(27),i=r(35);t.exports=n,i(n.prototype),n.prototype.onError=function(t,e){var r=new Error(t);return r.type="TransportError",r.description=e,this.emit("error",r),this},n.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},n.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},n.prototype.onPacket=function(t){this.emit("packet",t)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,r){(function(t){function n(t,r){var n="b"+e.packets[t.type]+t.data.data;return r(n)}function o(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return n(s.buffer)}function i(t,r,n){if(!r)return e.encodeBase64Packet(t,n);var o=new FileReader;return o.onload=function(){t.data=o.result,e.encodePacket(t,r,!0,n)},o.readAsArrayBuffer(t.data)}function s(t,r,n){if(!r)return e.encodeBase64Packet(t,n);if(m)return i(t,r,n);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return n(s)}function a(t){try{t=d.decode(t)}catch(t){return!1}return t}function c(t,e,r){for(var n=new Array(t.length),o=l(t.length,r),i=function(t,r,o){e(r,function(e,r){n[t]=r,o(e,n)})},s=0;s<t.length;s++)i(s,t[s],o)}var u,h=r(28),p=r(29),f=r(30),l=r(31),d=r(32);t&&t.ArrayBuffer&&(u=r(33));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),g="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),m=y||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=h(v),w={type:"error",data:"parser error"},k=r(34);e.encodePacket=function(e,r,i,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof i&&(a=i,i=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(k&&c instanceof t.Blob)return s(e,r,a);if(c&&c.base64)return n(e,a);var u=v[e.type];return void 0!==e.data&&(u+=i?d.encode(String(e.data)):String(e.data)),a(""+u)},e.encodeBase64Packet=function(r,n){var o="b"+e.packets[r.type];if(k&&r.data instanceof t.Blob){var i=new FileReader;return i.onload=function(){var t=i.result.split(",")[1];n(o+t)},i.readAsDataURL(r.data)}var s;try{s=String.fromCharCode.apply(null,new Uint8Array(r.data))}catch(t){for(var a=new Uint8Array(r.data),c=new Array(a.length),u=0;u<a.length;u++)c[u]=a[u];s=String.fromCharCode.apply(null,c)}return o+=t.btoa(s),n(o)},e.decodePacket=function(t,r,n){if(void 0===t)return w;if("string"==typeof t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),r);if(n&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===r&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var r=b[t.charAt(0)];if(!u)return{type:r,data:{base64:!0,data:t.substr(1)}};var n=u.decode(t.substr(1));return"blob"===e&&k&&(n=new k([n])),{type:r,data:n}},e.encodePayload=function(t,r,n){function o(t){return t.length+":"+t}function i(t,n){e.encodePacket(t,!!s&&r,!0,function(t){n(null,o(t))})}"function"==typeof r&&(n=r,r=null);var s=p(t);return r&&s?k&&!m?e.encodePayloadAsBlob(t,n):e.encodePayloadAsArrayBuffer(t,n):t.length?void c(t,i,function(t,e){return n(e.join(""))}):n("0:")},e.decodePayload=function(t,r,n){if("string"!=typeof t)return e.decodePayloadAsBinary(t,r,n);"function"==typeof r&&(n=r,r=null);var o;if(""==t)return n(w,0,1);for(var i,s,a="",c=0,u=t.length;c<u;c++){var h=t.charAt(c);if(":"!=h)a+=h;else{if(""==a||a!=(i=Number(a)))return n(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return n(w,0,1);if(s.length){if(o=e.decodePacket(s,r,!0),w.type==o.type&&w.data==o.data)return n(w,0,1);var p=n(o,c+i,u);if(!1===p)return}c+=i,a=""}}return""!=a?n(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){return r(null,t)})}return t.length?void c(t,n,function(t,e){var n=e.reduce(function(t,e){var r;return r="string"==typeof e?e.length:e.byteLength,t+r.toString().length+r+2},0),o=new Uint8Array(n),i=0;return e.forEach(function(t){var e="string"==typeof t,r=t;if(e){for(var n=new Uint8Array(t.length),s=0;s<t.length;s++)n[s]=t.charCodeAt(s);r=n.buffer}e?o[i++]=0:o[i++]=1;for(var a=r.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var n=new Uint8Array(r),s=0;s<n.length;s++)o[i++]=n[s]}),r(o.buffer)}):r(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,r){function n(t,r){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);t=n.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);r(null,c)}})}c(t,n,function(t,e){return r(new k(e))})},e.decodePayloadAsBinary=function(t,r,n){"function"==typeof r&&(n=r,r=null);for(var o=t,i=[],s=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],u="",h=1;255!=a[h];h++){if(u.length>310){s=!0;break}u+=a[h]}if(s)return n(w,0,1);o=f(o,2+u.length),u=parseInt(u);var p=f(o,0,u);if(c)try{p=String.fromCharCode.apply(null,new Uint8Array(p))}catch(t){var l=new Uint8Array(p);p="";for(var h=0;h<l.length;h++)p+=String.fromCharCode(l[h])}i.push(p),o=f(o,u)}var d=i.length;i.forEach(function(t,o){n(e.decodePacket(t,r,!0),o,d)})}}).call(e,function(){return this}())},function(t,e){t.exports=Object.keys||function(t){var e=[],r=Object.prototype.hasOwnProperty;for(var n in t)r.call(t,n)&&e.push(n);return e}},function(t,e,r){(function(e){function n(t){function r(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var n=0;n<t.length;n++)if(r(t[n]))return!0}else if(t&&"object"==typeof t){t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON());for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0}return!1}return r(t)}var o=r(15);t.exports=n}).call(e,function(){return this}())},function(t,e){t.exports=function(t,e,r){var n=t.byteLength;if(e=e||0,r=r||n,t.slice)return t.slice(e,r);if(e<0&&(e+=n),r<0&&(r+=n),r>n&&(r=n),e>=n||e>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(r-e),s=e,a=0;s<r;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function r(t,e,r){function o(t,n){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=r):0!==o.count||i||e(null,n)}var i=!1;return r=r||n,o.count=t,0===t?e():o}function n(){}t.exports=r},function(t,e,r){var n;(function(t,o){!function(i){function s(t){for(var e,r,n=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function a(t){for(var e,r=t.length,n=-1,o="";++n<r;)e=t[n],e>65535&&(e-=65536,o+=b(e>>>10&1023|55296),e=56320|1023&e),o+=b(e);return o}function c(t,e){return b(t>>e&63|128)}function u(t){if(0==(4294967168&t))return b(t);var e="";return 0==(4294965248&t)?e=b(t>>6&31|192):0==(4294901760&t)?(e=b(t>>12&15|224),e+=c(t,6)):0==(4292870144&t)&&(e=b(t>>18&7|240),e+=c(t,12),e+=c(t,6)),e+=b(63&t|128)}function h(t){for(var e,r=s(t),n=r.length,o=-1,i="";++o<n;)e=r[o],i+=u(e);return i}function p(){if(v>=m)throw Error("Invalid byte index");var t=255&g[v];if(v++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function f(){var t,e,r,n,o;if(v>m)throw Error("Invalid byte index");if(v==m)return!1;if(t=255&g[v],v++,0==(128&t))return t;if(192==(224&t)){var e=p();if(o=(31&t)<<6|e,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=p(),r=p(),o=(15&t)<<12|e<<6|r,o>=2048)return o;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=p(),r=p(),n=p(),o=(15&t)<<18|e<<12|r<<6|n,o>=65536&&o<=1114111))return o;throw Error("Invalid WTF-8 detected")}function l(t){g=s(t),m=g.length,v=0;for(var e,r=[];(e=f())!==!1;)r.push(e);return a(r)}var d="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==d&&t,"object"==typeof o&&o);y.global!==y&&y.window!==y||(i=y);var g,m,v,b=String.fromCharCode,w={version:"1.0.0",encode:h,decode:l};n=function(){return w}.call(e,r,e,t),!(void 0!==n&&(t.exports=n))}(this)}).call(e,r(12)(t),function(){return this}())},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=new Uint8Array(256),n=0;n<t.length;n++)r[t.charCodeAt(n)]=n;e.encode=function(e){var r,n=new Uint8Array(e),o=n.length,i="";for(r=0;r<o;r+=3)i+=t[n[r]>>2],i+=t[(3&n[r])<<4|n[r+1]>>4],i+=t[(15&n[r+1])<<2|n[r+2]>>6],i+=t[63&n[r+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,n,o,i,s,a=.75*t.length,c=t.length,u=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var h=new ArrayBuffer(a),p=new Uint8Array(h);for(e=0;e<c;e+=4)n=r[t.charCodeAt(e)],o=r[t.charCodeAt(e+1)],i=r[t.charCodeAt(e+2)],s=r[t.charCodeAt(e+3)],p[u++]=n<<2|o>>4,p[u++]=(15&o)<<4|i>>2,p[u++]=(3&i)<<6|63&s;return h}}()},function(t,e){(function(e){function r(t){for(var e=0;e<t.length;e++){var r=t[e];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}t[e]=n}}}function n(t,e){e=e||{};var n=new i;r(t);for(var o=0;o<t.length;o++)n.append(t[o]);return e.type?n.getBlob(e.type):n.getBlob()}function o(t,e){return r(t),new Blob(t,e||{})}var i=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(t){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(t){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;t.exports=function(){return s?a?e.Blob:o:c?n:void 0}()}).call(e,function(){return this}())},function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){e.encode=function(t){var e="";for(var r in t)t.hasOwnProperty(r)&&(e.length&&(e+="&"),e+=encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return e},e.decode=function(t){for(var e={},r=t.split("&"),n=0,o=r.length;n<o;n++){var i=r[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e){"use strict";function r(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function n(t){var e=0;for(h=0;h<t.length;h++)e=e*a+c[t.charAt(h)];return e}function o(){var t=r(+new Date);return t!==i?(u=0,i=t):t+"."+r(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,h=0;h<a;h++)c[s[h]]=h;o.encode=r,o.decode=n,t.exports=o},function(t,e,r){(function(e){function n(){}function o(t){i.call(this,t),this.query=this.query||{},a||(e.___eio||(e.___eio=[]),a=e.___eio),this.index=a.length;var r=this;a.push(function(t){r.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){r.script&&(r.script.onerror=n)},!1)}var i=r(25),s=r(37);t.exports=o;var a,c=/\n/g,u=/\\n/g;s(o,i),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),i.prototype.doClose.call(this)},o.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(e,r):(document.head||document.body).appendChild(e),this.script=e;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},o.prototype.doWrite=function(t,e){function r(){n(),e()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(t)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),h=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=h,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),n(),t=t.replace(u,"\\\n"),this.area.value=t.replace(c,"\\n");try{this.form.submit()}catch(t){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&r();
}:this.iframe.onload=r}}).call(e,function(){return this}())},function(t,e,r){(function(e){function n(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=p&&!t.forceNode,this.usingBrowserWebSocket||(f=o),i.call(this,t)}var o,i=r(26),s=r(27),a=r(36),c=r(37),u=r(38),h=r(3)("engine.io-client:websocket"),p=e.WebSocket||e.MozWebSocket;if("undefined"==typeof window)try{o=r(41)}catch(t){}var f=p;f||"undefined"!=typeof window||(f=o),t.exports=n,c(n,i),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.localAddress&&(r.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket?new f(t):new f(t,e,r)}catch(t){return this.emit("error",t)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},n.prototype.write=function(t){function r(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=t.length,i=0,a=o;i<a;i++)!function(t){s.encodePacket(t,n.supportsBinary,function(i){if(!n.usingBrowserWebSocket){var s={};if(t.options&&(s.compress=t.options.compress),n.perMessageDeflate){var a="string"==typeof i?e.Buffer.byteLength(i):i.length;a<n.perMessageDeflate.threshold&&(s.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(i):n.ws.send(i,s)}catch(t){h("websocket closed before onclose event")}--o||r()})}(t[i])},n.prototype.onClose=function(){i.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",r="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(r=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var n=this.hostname.indexOf(":")!==-1;return e+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+t},n.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===n.prototype.name)}}).call(e,function(){return this}())},function(t,e){},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,i=/(?:^|:|,)(?:\s*\[)+/g,s=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(s,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(i,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},function(t,e,r){"use strict";function n(t,e,r){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,r&&r.query&&(this.query=r.query),this.io.autoConnect&&this.open()}var o=r(7),i=r(35),s=r(45),a=r(46),c=r(47),u=r(3)("socket.io-client:socket"),h=r(29);t.exports=e=n;var p={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},f=i.prototype.emit;i(n.prototype),n.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},n.prototype.open=n.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},n.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},n.prototype.emit=function(t){if(p.hasOwnProperty(t))return f.apply(this,arguments),this;var e=s(arguments),r=o.EVENT;h(e)&&(r=o.BINARY_EVENT);var n={type:r,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),delete this.flags,this},n.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},n.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},n.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},n.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},n.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?f.apply(this,e):this.receiveBuffer.push(e)},n.prototype.ack=function(t){var e=this,r=!1;return function(){if(!r){r=!0;var n=s(arguments);u("sending ack %j",n);var i=h(n)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:n})}}},n.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},n.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},n.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)f.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},n.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},n.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},n.prototype.close=n.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},n.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e){function r(t,e){var r=[];e=e||0;for(var n=e||0;n<t.length;n++)r[n-e]=t[n];return r}t.exports=r},function(t,e){"use strict";function r(t,e,r){return t.on(e,r),{destroy:function(){t.removeListener(e,r)}}}t.exports=r},function(t,e){var r=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var n=r.call(arguments,2);return function(){return e.apply(t,n.concat(r.call(arguments)))}}},function(t,e){function r(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=r,r.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),r=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-r:t+r}return 0|Math.min(t,this.max)},r.prototype.reset=function(){this.attempts=0},r.prototype.setMin=function(t){this.ms=t},r.prototype.setMax=function(t){this.max=t},r.prototype.setJitter=function(t){this.jitter=t}}])});

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ad-panel{\n\tpadding: 5px;\n\tdisplay: block.\n}\n\n.ad-panel img{\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ad-panel\">\n<img src=\"assets/images/add.jpg\"/>\n<div class=\"text-center blue-fonts cursor-pointer\">Create your ad.</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ad/ad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdComponent = (function () {
    function AdComponent() {
    }
    AdComponent.prototype.ngOnInit = function () {
    };
    return AdComponent;
}());
AdComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ad',
        template: __webpack_require__("../../../../../src/app/ad/ad.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ad/ad.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdComponent);

//# sourceMappingURL=ad.component.js.map

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input{\n\tborder-radius: 0px;\n    background: none;\n    border: 1px solid #2b90d9;\n}\n\n.mock-img{\n\tbackground: #fff;\n    height: 200px;\n    padding: 75px;\n}\n\n.mock-img i{\n\tfont-size: 50px;\n    vertical-align: middle;\n    margin: auto;\n    width: 55px;\n    display: block;\n}\n.cropped-preview-img{\n    display: none;\n}\n.file-input-container{\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-item-content\">\n\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left\">\n\t\t<div *ngIf=\"isItemImg;then itemImg else mockImg\"></div>\n    \t<ng-template #itemImg>\n\t    \t<div class=\"preview-profile-pic\">\n\t    \t\t<!--<img id=\"previewProfilePic\" src=\"{{encodedImage}}\"/>-->\n\t\t\t    <app-image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [resizeToWidth]=\"150\" format=\"jpeg\" \n\t\t\t    (imageCropped)=\"imageCropped($event)\"></app-image-cropper>\n\t    \t</div>\n\t    \t<img class=\"cropped-item-img\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" (load)=\"computeCroppedImage()\"/>\n\t\t</ng-template>\n\t\t<ng-template #mockImg>\n\t\t\t<div class=\"mock-img\">\n\t\t\t\t<i class=\"fa fa-picture-o fa-5x\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12 pull-left\">\n\t\t<form [formGroup]=\"addItemForm\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"radio\" value=\"women\" formControlName=\"for\"> Women\n\t\t        <input type=\"radio\" value=\"men\" formControlName=\"for\"> Men\n\t\t        <input type=\"radio\" value=\"kids\" formControlName=\"for\"> Kids\n\t\t\t\t<!--<app-control-messages [control]=\"addItemForm.controls.name\"></app-control-messages>-->\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"fullName\">\n\t\t\t\t<!--<app-control-messages [control]=\"addItemForm.controls.fullName\"></app-control-messages>-->\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t\t\t<app-control-messages [control]=\"addItemForm.controls.email\"></app-control-messages>\n\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Price\" formControlName=\"price\">\n\t\t\t\t<!--<app-control-messages [control]=\"addItemForm.controls.fullName\"></app-control-messages>-->\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<div class=\"file-input-container\">\n\t\t\t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"upload-icon blue-fonts\"><span>Upload Image&nbsp;</span><i class=\"fa fa-upload white-fonts hand-cursor\" aria-hidden=\"true\" \n\t\t\t\t(click)=\"fileInput.value = ''; fileInput.click()\"></i></div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<textarea #desc class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" \t\tplaceholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"itemDesc\">\n\t\t\t\t</textarea>\n\t\t\t</div>\n\t\t\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!addItemForm.valid\" (click)=\"addItem()\">\n\t\t\t\t\t<span>Add</span>\n\t\t\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t\t\t\t<div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-item/add-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddItemComponent = (function () {
    function AddItemComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.isItemImg = false;
        this.addItemForm = this.formBuilder.group({
            'for': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'fullName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'price': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].emailValidator]]
        });
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    AddItemComponent.prototype.computeCroppedImage = function () {
        var elem = document.querySelector('#croppedImg');
    };
    AddItemComponent.prototype.fileChangeEvent = function (event) {
        this.isItemImg = true;
        this.imageChangedEvent = event;
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.encodedImage = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
          console.log('sent');
        });*/
    };
    AddItemComponent.prototype.uploadEncodedItemPic = function (encodedImage) {
        var postObj = { 'imagebuffer': encodedImage, 'userid': this.userId };
        //   this.uploadService.uploadEncodedProfilePic(postObj).subscribe(data => this.afterItemPicUploaded(data));
    };
    AddItemComponent.prototype.afterItemPicUploaded = function (result) {
        //alert(result.message);
        if (result.status === 'success') {
            /*this.profilePic = result.info.profilepic.imageBuffer;
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.previewPicModal.close();*/
        }
    };
    AddItemComponent.prototype.ok = function () {
        //this.uploadEncodedProfilePic(this.croppedImage);
    };
    return AddItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('userId'),
    __metadata("design:type", Object)
], AddItemComponent.prototype, "userId", void 0);
AddItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-item',
        template: __webpack_require__("../../../../../src/app/add-item/add-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-item/add-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], AddItemComponent);

var _a;
//# sourceMappingURL=add-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chatControl{\n    position: fixed;\n    right: 10px;\n    bottom: 0px;\n    width: 250px;\n    border-radius: 0px;\n    padding: 0px;\n    border-bottom: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<app-public></app-public>-->\n<router-outlet></router-outlet>\n<div id=\"chatControl\" class=\"opaque-bg\">\n\t<div *ngIf=\"isLoggedIn;then chatPanel\"></div>\n\t<ng-template #chatPanel>\n\t\t<app-chat></app-chat>\n\t</ng-template>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_app_app_service__ = __webpack_require__("../../../../../src/app/services/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.isLoggedIn = false;
        var lat = __WEBPACK_IMPORTED_MODULE_2_app_services_app_app_service__["a" /* AppService */].getGeoCode();
        var loc = window.location.href;
        var subStr1 = 'http://www.wefrenz.com/';
        var subStr2 = 'http://wefrenz.com/';
        var newLoc = '';
        if (loc.indexOf(subStr1) > -1) {
            newLoc = loc.replace(subStr1, "https://wefrenz.com/");
            window.location.href = newLoc;
            return;
        }
        if (loc.indexOf(subStr2) > -1) {
            newLoc = loc.replace(subStr2, "https://wefrenz.com/");
            window.location.href = newLoc;
            return;
        }
        //router.navigate(['public']);
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            else {
                this.router.navigate(['public']);
            }
        }
        else {
            this.router.navigate(['public']);
        }
        var self = this;
        route.params.subscribe(function (val) {
            window.addEventListener('onAppLoggedOut', function (e) {
                // e.target matches elem
                self.isLoggedIn = false;
            }, false);
            window.addEventListener('onAppLoggedIn', function (e) {
                // e.target matches elem
                self.isLoggedIn = true;
            }, false);
        });
        // not logged in so redirect to login page with the return url and return false
        //this.router.navigate(['/public'], { queryParams: { returnUrl: state.url }});
        //return false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__public_public_component__ = __webpack_require__("../../../../../src/app/public/public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__control_messages_control_messages_component__ = __webpack_require__("../../../../../src/app/control-messages/control-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__public_nav_public_nav_component__ = __webpack_require__("../../../../../src/app/public-nav/public-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__private_nav_private_nav_component__ = __webpack_require__("../../../../../src/app/private-nav/private-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_area_profile_area_component__ = __webpack_require__("../../../../../src/app/profile-area/profile-area.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tile_menu_tile_menu_component__ = __webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__info_panel_info_panel_component__ = __webpack_require__("../../../../../src/app/info-panel/info-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_result_list_item_search_result_list_item_component__ = __webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__coverpic_coverpic_component__ = __webpack_require__("../../../../../src/app/coverpic/coverpic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__image_cropper_image_cropper_component__ = __webpack_require__("../../../../../src/app/image-cropper/image-cropper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__capture_pic_capture_pic_component__ = __webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__friend_request_pending_list_friend_request_pending_list_component__ = __webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__chat_item_chat_item_component__ = __webpack_require__("../../../../../src/app/chat-item/chat-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_chat_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/chat-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__video_video_component__ = __webpack_require__("../../../../../src/app/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__avchat_avchat_component__ = __webpack_require__("../../../../../src/app/avchat/avchat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__entertainment_entertainment_component__ = __webpack_require__("../../../../../src/app/entertainment/entertainment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__video_player_video_player_component__ = __webpack_require__("../../../../../src/app/video-player/video-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ad_ad_component__ = __webpack_require__("../../../../../src/app/ad/ad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__video_album_icon_video_album_icon_component__ = __webpack_require__("../../../../../src/app/video-album-icon/video-album-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_album_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/album-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__video_icon_video_icon_component__ = __webpack_require__("../../../../../src/app/video-icon/video-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pipes_video_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/video-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__music_player_music_player_component__ = __webpack_require__("../../../../../src/app/music-player/music-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__audio_icon_audio_icon_component__ = __webpack_require__("../../../../../src/app/audio-icon/audio-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__audio_album_icon_audio_album_icon_component__ = __webpack_require__("../../../../../src/app/audio-album-icon/audio-album-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pipes_audio_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/audio-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__photos_photos_component__ = __webpack_require__("../../../../../src/app/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__photos_icon_photos_icon_component__ = __webpack_require__("../../../../../src/app/photos-icon/photos-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__photos_album_icon_photos_album_icon_component__ = __webpack_require__("../../../../../src/app/photos-album-icon/photos-album-icon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pipes_photos_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/photos-search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__photos_carousel_photos_carousel_component__ = __webpack_require__("../../../../../src/app/photos-carousel/photos-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angular4_color_picker__ = __webpack_require__("../../../../angular4-color-picker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_angular4_color_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_angular4_color_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__music_list_music_list_component__ = __webpack_require__("../../../../../src/app/music-list/music-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__stories_stories_component__ = __webpack_require__("../../../../../src/app/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__story_box_story_box_component__ = __webpack_require__("../../../../../src/app/story-box/story-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__feeditem_feeditem_component__ = __webpack_require__("../../../../../src/app/feeditem/feeditem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__checkin_checkin_component__ = __webpack_require__("../../../../../src/app/checkin/checkin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__comment_box_comment_box_component__ = __webpack_require__("../../../../../src/app/comment-box/comment-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__commentitem_commentitem_component__ = __webpack_require__("../../../../../src/app/commentitem/commentitem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__market_market_component__ = __webpack_require__("../../../../../src/app/market/market.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__add_item_add_item_component__ = __webpack_require__("../../../../../src/app/add-item/add-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { ChatPanelComponent } from './chat-panel/chat-panel.component';


















;

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__public_public_component__["a" /* PublicComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_14__control_messages_control_messages_component__["a" /* ControlMessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__public_nav_public_nav_component__["a" /* PublicNavComponent */],
            __WEBPACK_IMPORTED_MODULE_17__private_nav_private_nav_component__["a" /* PrivateNavComponent */],
            __WEBPACK_IMPORTED_MODULE_18__profile_area_profile_area_component__["a" /* ProfileAreaComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tile_menu_tile_menu_component__["a" /* TileMenuComponent */],
            //ChatPanelComponent,
            __WEBPACK_IMPORTED_MODULE_20__info_panel_info_panel_component__["a" /* InfoPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_21__search_result_list_item_search_result_list_item_component__["a" /* SearchResultListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__coverpic_coverpic_component__["a" /* CoverpicComponent */],
            __WEBPACK_IMPORTED_MODULE_24__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_27__image_cropper_image_cropper_component__["a" /* ImageCropperComponent */],
            __WEBPACK_IMPORTED_MODULE_28__capture_pic_capture_pic_component__["a" /* CapturePicComponent */],
            __WEBPACK_IMPORTED_MODULE_29__friend_request_pending_list_friend_request_pending_list_component__["a" /* FriendRequestPendingListComponent */],
            __WEBPACK_IMPORTED_MODULE_30__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_31__chat_item_chat_item_component__["a" /* ChatItemComponent */],
            __WEBPACK_IMPORTED_MODULE_33__pipes_chat_search_pipe__["a" /* ChatSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_32__chat_window_chat_window_component__["a" /* ChatWindowComponent */],
            __WEBPACK_IMPORTED_MODULE_34__video_video_component__["a" /* VideoComponent */],
            __WEBPACK_IMPORTED_MODULE_35__avchat_avchat_component__["a" /* AvchatComponent */],
            __WEBPACK_IMPORTED_MODULE_36__entertainment_entertainment_component__["a" /* EntertainmentComponent */],
            __WEBPACK_IMPORTED_MODULE_37__video_player_video_player_component__["a" /* VideoPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_38__ad_ad_component__["a" /* AdComponent */],
            __WEBPACK_IMPORTED_MODULE_39__video_album_icon_video_album_icon_component__["a" /* VideoAlbumIconComponent */],
            __WEBPACK_IMPORTED_MODULE_40__pipes_album_search_pipe__["a" /* AlbumSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_41__video_icon_video_icon_component__["a" /* VideoIconComponent */],
            __WEBPACK_IMPORTED_MODULE_42__pipes_video_search_pipe__["a" /* VideoSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_43__music_player_music_player_component__["a" /* MusicPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_44__audio_icon_audio_icon_component__["a" /* AudioIconComponent */],
            __WEBPACK_IMPORTED_MODULE_45__audio_album_icon_audio_album_icon_component__["a" /* AudioAlbumIconComponent */],
            __WEBPACK_IMPORTED_MODULE_46__pipes_audio_search_pipe__["a" /* AudioSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_47__photos_photos_component__["a" /* PhotosComponent */],
            __WEBPACK_IMPORTED_MODULE_48__photos_icon_photos_icon_component__["a" /* PhotosIconComponent */],
            __WEBPACK_IMPORTED_MODULE_49__photos_album_icon_photos_album_icon_component__["a" /* PhotosAlbumIconComponent */],
            __WEBPACK_IMPORTED_MODULE_50__pipes_photos_search_pipe__["a" /* PhotosSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_51__photos_carousel_photos_carousel_component__["a" /* PhotosCarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_53__music_list_music_list_component__["a" /* MusicListComponent */],
            __WEBPACK_IMPORTED_MODULE_54__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_55__stories_stories_component__["a" /* StoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_56__story_box_story_box_component__["a" /* StoryBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_57__feeditem_feeditem_component__["a" /* FeeditemComponent */],
            __WEBPACK_IMPORTED_MODULE_58__checkin_checkin_component__["a" /* CheckinComponent */],
            __WEBPACK_IMPORTED_MODULE_59__comment_box_comment_box_component__["a" /* CommentBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_60__commentitem_commentitem_component__["a" /* CommentitemComponent */],
            __WEBPACK_IMPORTED_MODULE_61__market_market_component__["a" /* MarketComponent */],
            __WEBPACK_IMPORTED_MODULE_62__add_item_add_item_component__["a" /* AddItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyAyu8WfrIIx0RTy0DQ3pP78FuCdtDl7l9Y",
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_25_ngx_image_cropper__["a" /* ImageCropperModule */],
            __WEBPACK_IMPORTED_MODULE_26_angular4_carousel__["b" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_52_angular4_color_picker__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */].forRoot([
                {
                    path: 'public',
                    component: __WEBPACK_IMPORTED_MODULE_11__public_public_component__["a" /* PublicComponent */]
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'profile/:id',
                    component: __WEBPACK_IMPORTED_MODULE_22__profile_profile_component__["a" /* ProfileComponent */]
                },
                {
                    path: 'entertainment/:id',
                    component: __WEBPACK_IMPORTED_MODULE_36__entertainment_entertainment_component__["a" /* EntertainmentComponent */]
                },
                {
                    path: 'stories/:id',
                    component: __WEBPACK_IMPORTED_MODULE_55__stories_stories_component__["a" /* StoriesComponent */]
                },
                {
                    path: 'market/:id',
                    component: __WEBPACK_IMPORTED_MODULE_61__market_market_component__["a" /* MarketComponent */]
                }
            ], { useHash: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */], __WEBPACK_IMPORTED_MODULE_9_app_modal_modal_service__["a" /* ModalService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_51__photos_carousel_photos_carousel_component__["a" /* PhotosCarouselComponent */], __WEBPACK_IMPORTED_MODULE_53__music_list_music_list_component__["a" /* MusicListComponent */], __WEBPACK_IMPORTED_MODULE_54__video_list_video_list_component__["a" /* VideoListComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/audio-album-icon/audio-album-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".audio-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.audio-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}\n.audio-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}\n.audio-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio-album-icon/audio-album-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-icon-container\">\n\t<div class=\"colw100 audio-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editAudioAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showAudioList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.audiosList.length}}</span><span> music</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/audio-album-icon/audio-album-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioAlbumIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioAlbumIconComponent = (function () {
    function AudioAlbumIconComponent() {
        this.onEditAudioAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onShowAudioList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    AudioAlbumIconComponent.prototype.ngOnInit = function () {
    };
    AudioAlbumIconComponent.prototype.editAudioAlbum = function (event) {
        this.onEditAudioAlbum.emit({ data: this.item });
    };
    AudioAlbumIconComponent.prototype.showAudioList = function (event) {
        this.onShowAudioList.emit({ data: this.item });
    };
    return AudioAlbumIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AudioAlbumIconComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], AudioAlbumIconComponent.prototype, "onEditAudioAlbum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], AudioAlbumIconComponent.prototype, "onShowAudioList", void 0);
AudioAlbumIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-audio-album-icon',
        template: __webpack_require__("../../../../../src/app/audio-album-icon/audio-album-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/audio-album-icon/audio-album-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AudioAlbumIconComponent);

var _a, _b;
//# sourceMappingURL=audio-album-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/audio-icon/audio-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".audio-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n    background-color: #000 !important;\n}\n.audio-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.audio-icon:hover{\n\tborder: 1px solid #fff;\n}\n.audio-icon:hover i{\n\tcolor: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio-icon/audio-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/audio-icon/audio-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioIconComponent = (function () {
    function AudioIconComponent() {
    }
    AudioIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.poster;
    };
    return AudioIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AudioIconComponent.prototype, "item", void 0);
AudioIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-audio-icon',
        template: __webpack_require__("../../../../../src/app/audio-icon/audio-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/audio-icon/audio-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AudioIconComponent);

//# sourceMappingURL=audio-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/avchat/avchat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#connectControls, #audioSinkButtons, #acceptCallBox{\n\tdisplay: none;\n}\n#callControls{\n    width: 50px;\n    margin: 50px auto;\n    position: absolute;\n    left: 295px;\n    top: 200px;\n    z-index: 1003;\n}\n.easyrtcMirror{\n\twidth: 628px;\n    position: absolute;\n    top: 40px;\n}\n#callerVideo{\n\tdisplay: none;\n}\n\n#hangupButton{\n    display: none;\n}\n#callButton{\n    display: none;\n}\n#acceptCallBox{\n    position: absolute;\n    z-index: 10000;\n    width: 100%;\n    top: 100px;\n}\n#acceptCallLabel, #callStatusMessage{\n    /*width: 280px;\n    margin: 50px auto; \n    background: rgba(0, 0, 0, 0.6);\n    padding: 9px;\n    border-radius: 5px;\n    border: 1px solid #ff0000;  */\n}\n\n.host-img{\n    width: 100px;\n    margin: auto;\n}\n#acceptCallBtn{\n    width: 100px;\n    margin: 10px auto;  \n}\n#callAcceptButton{\n    margin-right: 30px;\n    width: 25px;\n    float: left;\n}\n#buddyImg{\n    height: 200px;\n    width: 200px;\n    /* position: absolute; */\n    /* z-index: 200000; */\n    background-size: cover;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    margin: 50px auto;\n}\n#callStatusMessage{\n    position: absolute;\n    z-index: 1005;\n    margin: -140px auto;\n    display: inline-block;\n    width: 100%;\n    top: 240px;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/avchat/avchat.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"demoContainer\">\n\t<div id=\"connectControls\">\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"shareAudio\" />Share audio\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"shareVideo\" />Share video<br />\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"expectAudio\" />Expect audio\n\t\t<input type=\"checkbox\" checked=\"checked\" id=\"expectVideo\" />Expect video<br />\n\n\t\t<!--<input type=\"checkbox\" id=\"useFreshIce\" onclick=\"easyrtc.setUseFreshIceEachPeerConnection(this.value);\"/>Fresh Ice<br />\n\t\t<button id=\"connectButton\" onclick=\"connect()\">Connect</button>\n\t\t<button id=\"disconnectButton\" onclick=\"disconnect()\">Disconnect</button>\n\t\t<button id=\"hangupButton\" disabled=\"disabled\" onclick=\"hangup()\">Hangup</button>\n\t\t<div id=\"iam\">Not yet connected...</div>\n\t\t<br />\n\t\t<strong>Connected users:</strong>\n\t\t<div id=\"otherClients\"></div>-->\n\t</div>\n \n\t<div id=\"videos\">\n\t\t<div id=\"buddyImg\" [ngStyle]=\"{ 'background-image': 'url(' + buddyImg + ')'}\">\n\t\t</div>\n\t\t<video autoplay=\"autoplay\" id=\"selfVideo\"  class=\"easyrtcMirror\" muted=\"muted\" volume=\"0\" onclick = \"changeVideoSize(false)\"></video>\n\t\t<video autoplay=\"autoplay\" id=\"callerVideo\"  onclick = \"changeVideoSize(true)\"></video>\n\t\t<div id=\"callControls\">\n\t\t\t<i id=\"hangupButton\" disabled=\"disabled\" class=\"fa fa-phone-square fa-3x red-fonts\" aria-hidden=\"true\" onclick=\"hangup()\"></i>\n\t\t\t<i id=\"callButton\" disabled=\"disabled\" class=\"fa fa-phone-square fa-3x green-fonts\" aria-hidden=\"true\" onclick=\"callbuddy()\"></i>\n\t\t</div>\n\t\t<div id=\"acceptCallBox\"> <!-- Should be initially hidden using CSS -->\n\t\t\t<div id=\"acceptCallLabel\"></div>\n\t\t\t<div id=\"acceptCallBtn\">\n\t\t\t\t<div><i id=\"callAcceptButton\" class=\"fa fa-phone-square fa-3x green-fonts pull-left\" aria-hidden=\"true\"></i></div>\n\t\t\t\t<div><i id=\"callRejectButton\" class=\"fa fa-phone-square fa-3x red-fonts pull-left\" aria-hidden=\"true\"></i></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"callStatusMessage\"></div>\n\t</div>\n\t<div id=\"audioSinkButtons\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/avchat/avchat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvchatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../libs/easyrtc.d.ts" />

var AvchatComponent = (function () {
    function AvchatComponent() {
        this.selfEasyrtcid = "";
        this.haveSelfVideo = false;
        this.onceOnly = true;
        this.callerPending = null;
        this.buddyImg = '';
        this.buddyImgWidth = '200px';
    }
    AvchatComponent.prototype.ngOnInit = function () {
        this.buddyImg = this.loginData.profilepic.imageBuffer;
    };
    return AvchatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('selfVideo'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "selfVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('callerVideo'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "callerVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shareAudio'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "shareAudio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('shareVideo'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "shareVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('expectVideo'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "expectVideo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('expectAudio'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "expectAudio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('connectButton'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "connectButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('disconnectButton'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "disconnectButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('hangupButton'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "hangupButton", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('iam'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "iam", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('otherClients'),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "otherClients", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AvchatComponent.prototype, "loginData", void 0);
AvchatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-avchat',
        template: __webpack_require__("../../../../../src/app/avchat/avchat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/avchat/avchat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AvchatComponent);

//# sourceMappingURL=avchat.component.js.map

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profilePicVideo{\n\twidth: 100%;\n}\n#profilePicCanvas{\n\tdisplay: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-margin crop-contents auto-margin\" ng-show=\"isProfilePicCamShow\">\n\t<video id=\"profilePicVideo\" autoplay></video>\n\t<canvas id=\"profilePicCanvas\"></canvas>\n\t<div>\t\t\t\n\t\t<button type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"capture()\">\n\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/capture-pic/capture-pic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapturePicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapturePicComponent = (function () {
    function CapturePicComponent() {
        this.onCapturePic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onCamRender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    CapturePicComponent.prototype.ngOnInit = function () {
    };
    CapturePicComponent.prototype.ngAfterViewInit = function () {
        this.onCamRender.emit('rendered');
    };
    CapturePicComponent.prototype.ngAfterContentInit = function () {
    };
    CapturePicComponent.prototype.ngAfterContentChecked = function () {
    };
    CapturePicComponent.prototype.capture = function () {
        this.onCapturePic.emit('captured');
    };
    return CapturePicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CapturePicComponent.prototype, "onCapturePic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CapturePicComponent.prototype, "onCamRender", void 0);
CapturePicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-capture-pic',
        template: __webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/capture-pic/capture-pic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CapturePicComponent);

var _a, _b;
//# sourceMappingURL=capture-pic.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-name{\n\tline-height: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row hand-cursor\" >\n\t<div class=\"profile-pic-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left\">{{item.fullname}}</div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-item/chat-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatItemComponent = (function () {
    function ChatItemComponent() {
    }
    ChatItemComponent.prototype.ngOnInit = function () {
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.friendId = this.item.username;
        //this.userId = localStorage.getItem('currentUser');
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    return ChatItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ChatItemComponent.prototype, "item", void 0);
ChatItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-item',
        template: __webpack_require__("../../../../../src/app/chat-item/chat-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-item/chat-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatItemComponent);

//# sourceMappingURL=chat-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-window-header{\n    height: 23px;\n    background: #2b90d9;\n    width: 251px;\n    margin-left: -1px;\n    margin-right: -1px;\n    margin-top: -1px;\n    padding: 0px 3px;\n    line-height: 23px;\n}\n\n.chat-window-header .full-name{\n\twidth: 100px !important;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\t\n}\n.chat-window-header i{\n\tmargin: 3px;\n}\n\n\n.chat-window-header i:hover{\n\tcolor: #e9ebee;\n}\n.chat-window-body{\n    height: 181px;\n    overflow-y: auto;\n    max-width: 249px;\n    padding: 5px 0px;\n}\n.chat-window textarea{\n    width: 249px;\n    border: navajowhite;\n    background: none;\n    outline: none;\n    border-top: 1px solid #e6e6e6;\n    resize: none;\n    height: 46px;\n}\n.msg-row{\n    line-height: 30px;\n    display: inline-block;\n}\n.msg-img{\n    width: 30px;\n}\n.msg-field{\n    width: 180px;\n}\n#videos{\n    display: none;\n}\n.smiley-icon img{\n    border: 1px solid #fff;\n    border-radius: 50%;\n    height: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"chat-panel\" id=\"{{info._id || info.id}}\">-->\n<div class=\"chat-window\">\n\t<div class=\"chat-window-header white-fonts\">\n\t\t<!--<div class=\"pull-left white-font use-handcursor small-padding\">{{info.fullname | limitTo : chatNameLimit || info.name | limitTo : chatNameLimit}}</div>-->\n\t\t<div class=\"pull-left white-font use-handcursor small-padding full-name\">{{chatObj.fullname}}</div>\n\t\t<div class=\"pull-left white-font use-handcursor small-padding\"></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-times cursor-pointer\" (click)=\"closeChatWindow(chatObj.username)\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-location-arrow cursor-pointer\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-cog cursor-pointer\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-headphones cursor-pointer\"></i></div>\n\t\t<!--<div class=\"pull-right\"><i class=\"fa fa-video-camera\" data=\"{{info}}\" ng-click=\"connectEasyRTCVideo($event);\"></i></div>-->\n\t\t<div class=\"pull-right\"><i class=\"fa fa-video-camera cursor-pointer\" (click)=\"startVideoCall()\"></i></div>\n\t\t<div class=\"pull-right\"><i class=\"fa fa-desktop cursor-pointer\"></i></div>\n\t</div>\n\t<div class=\"chat-window-body chat-body-height mCustomScrollbar\" #chatWindowBody>\n\t</div>\n\t<div class=\"chat-input gray-bg\">\n\t\t<textarea (keydown)=\"onEnterPressed($event)\" [(ngModel)]=\"msgInput\"></textarea>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatWindowComponent = (function () {
    function ChatWindowComponent() {
        this.chatWindowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.chatWindowReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.startVideoChat = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.sendMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.msgInput = '';
        this.chatWindowId = '';
        var self = this;
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        window.addEventListener('onMessageDisplay', function (e) {
            try {
                self.displayServerMsg(e.detail.msgObj);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
    };
    ChatWindowComponent.prototype.ngAfterViewInit = function () {
        this.chatWindowReady.emit({ data: this.chatObj, chatwindow: this });
    };
    ChatWindowComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatWindowComponent.prototype.scrollToBottom = function () {
        try {
            this.chatWindowBody.nativeElement.scrollTop = this.chatWindowBody.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatWindowComponent.prototype.closeChatWindow = function (chatId) {
        this.chatWindowClose.emit({ data: chatId });
    };
    ChatWindowComponent.prototype.startVideoCall = function () {
        this.startVideoChat.emit({ data: this.chatObj, chatwindow: this });
    };
    ChatWindowComponent.prototype.onEnterPressed = function (event) {
        if (event.keyCode === 13 && !event.shiftKey) {
            event.preventDefault();
            var msgObj = { 'chatid': this.chatObj.username, 'msg': this.msgInput, 'info': this.loginData };
            this.displayClientMsg(msgObj);
            this.sendMsg.emit(msgObj);
            this.msgInput = '';
            return false;
        }
    };
    /*
      private displayClientMsg(msgObj){
        let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
    
        let validID = "";
    
        if(obj.receiverInfo._id !== undefined){
          validID = msgObj.receiverInfo._id;
        }
        //$("chat-window").find("#"+validID).find('.chat-panel-body').empty();
        $("chat-window").find("#"+validID).find('.chat-panel-body').append(html);
        try{
          scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
        //$(".chat-body-height").mCustomScrollbar();
        }catch(err){
          console.log(err);
        }
    
      }*/
    ChatWindowComponent.prototype.displayClientMsg = function (msgObj) {
        //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        var msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-right no-padding'><img class='profile-pic-small pull-right' src='" + msgObj.info.profilepic.imageBuffer + "'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #2b90d9; color: #fff; border-radius: 10px; border-bottom-right-radius: 0px;' class='pull-right text-right msg-field'>" + __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].setSmileys(msgObj.msg) + "</div></div>";
        //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
        this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
        /* try{
           scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
         //$(".chat-body-height").mCustomScrollbar();
         }catch(err){
           console.log(err);
         }*/
    };
    ChatWindowComponent.prototype.displayServerMsg = function (msgObj) {
        if (msgObj.item.username === this.chatObj.username) {
            //let html = "<div class='row no-margin msg-row'><div class='msg pull-right col-md-2 no-padding'><img class='profile-pic-icon pull-right' src='"+JSON.parse(obj.senderInfo).profilepic.imageBuffer+"'></div><div style='word-break: break-all; padding-top: 2px;' class='pull-right col-md-10 no-padding text-right msg-field'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
            var msgItem = "<div class='client-msg msg-row' style='display: inline-block; width: 100%; max-width: 245px;'><div class='msg-img pull-left no-padding'><img class='profile-pic-small pull-left' src='" + msgObj.item.profilepic.imageBuffer + "'></div><div style='word-break: break-all; padding: 4px 8px; line-height: 20px; max-width: 200px; background: #e9ebee; color: #000; border-radius: 10px; border-bottom-left-radius: 0px;' class='pull-left text-right msg-field'>" + __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].setSmileys(msgObj.msg) + "</div></div>";
            //var html = "<div class='row no-margin msg-row'><div class='msg pull-left col-md-2'><img class='profile-pic-icon' src=''></div><div style='word-break: break-all; padding-top: 2px;' class='pull-left col-md-10'>"+CreateSmileys.setSmileys(obj.msg)+"</div></div>";
            this.chatWindowBody.nativeElement.insertAdjacentHTML('beforeend', msgItem);
            /* try{
               scrollToBottom($("chat-window").find("#"+validID).find('.chat-panel-body'), $("chat-window").find("#"+validID).find('.chat-panel-body').scrollHeight);
             //$(".chat-body-height").mCustomScrollbar();
             }catch(err){
               console.log(err);
             }*/
        }
    };
    return ChatWindowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ChatWindowComponent.prototype, "chatObj", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ChatWindowComponent.prototype, "chatWindowClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ChatWindowComponent.prototype, "chatWindowReady", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], ChatWindowComponent.prototype, "startVideoChat", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], ChatWindowComponent.prototype, "sendMsg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('chatWindowBody'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object)
], ChatWindowComponent.prototype, "chatWindowBody", void 0);
ChatWindowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat-window',
        template: __webpack_require__("../../../../../src/app/chat-window/chat-window.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat-window/chat-window.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatWindowComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat-window.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-panel-header{\n\theight: 23px;\n    background: #2b90d9;\n    width: 250px;\n    margin-left: -1px;\n    margin-top: -1px;\n    padding: 0px 3px;\n    line-height: 23px;\n}\n.chat-panel-header i:hover{\n    color: #e9ebee;\n}\napp-chat-item:hover{\n\tbackground: #e9ebee;\n\tcursor: pointer;\n\twidth: 100%;\n}\n.chat-search-box input[type=\"text\"]{\n\tline-height: 25px;\n    height: 25px;\n    display: block;\n    width: 225px;\n    border: none;\n    outline: none;\n    margin-left: 2px;\n    background: none;\n}\n\n.chat-search-box i{\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 25px;\n    padding: 0px 2px;\n}\n.chat-search-box{\n\tdisplay: inline-block;\n    border-top: 1px solid #e6e6e6;\n    width: 249px;\n}\n.chat-panel-settings-btn i{\n    padding: 2px;\n}\n.chat-window-container{\n    position: fixed;\n    right: 260px;\n    bottom: 0px;\n    height: 250px;\n}\napp-chat-window {\n    border-radius: 0px;\n    border-bottom: none;\n    height: 250px;\n    margin-right: 10px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window-container\">\n\t<app-modal [modalTitle]=\"'Video Chat'\" [blocking]='false' [modalId]='modalId' #avChatModal>\n    \t<app-avchat [loginData]=\"loginData\"></app-avchat>\n    </app-modal>\n\t<app-chat-window #appChatWindow class=\"pull-left opaque-bg\" *ngFor=\"let chatObj of chatWindowList\" [chatObj] = \"chatObj\" (chatWindowClose)=\"chatWindowClose($event)\" (sendMsg)=\"sendMsg($event)\" (chatWindowReady) = \"chatWindowReady($event)\" [attr.id]=\"'chatWindow_' + chatObj.username\" (startVideoChat) = \"startVideoChat($event)\"></app-chat-window>\n</div>\n<div class=\"chat-panel-container\">\n\t<div class=\"chat-panel-header\">\n\t\t<div class=\"white-fonts pull-left\">Messaging</div>\n\t\t<div class=\"chat-panel-settings-btn pull-right\">\n\t\t<span class=\"white-fonts\"><i class=\"fa fa-cog cursor-pointer\" aria-hidden=\"true\"></i></span>\n\t\t<span class=\"white-fonts\"><i class=\"fa fa-external-link cursor-pointer\" aria-hidden=\"true\"></i></span>\n\t    </div>\n\t</div>\n\t<app-chat-item class=\"pull-left colw100\" *ngFor=\"let item of chatBuddyList | chatSearch : searchText\" [item]=\"item\" (click)=\"searchChat.value=''; searchText = ''; openChatWindow(item);\"></app-chat-item>\n\t<div class=\"chat-search-box pull-left\">\n\t\t<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n\t\t<div class=\"pull-left\">\n\t\t\t<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"searchText\" #searchChat/>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_socket_io__ = __webpack_require__("../../../../../libs/socket.io.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__libs_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__libs_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_chat_service__ = __webpack_require__("../../../../../src/app/services/data/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(router, chatService, cdr, modalService, ngZone) {
        this.router = router;
        this.chatService = chatService;
        this.cdr = cdr;
        this.modalService = modalService;
        this.ngZone = ngZone;
        this.userId = '';
        this.windowReady = true;
        this.selfEasyrtcid = "";
        this.modalId = 'avModal';
        this.myId = '';
        this.connectedClientsList = [];
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = this.loginData.username;
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.chatWindowList = [];
        //this.openChatSocket();
        this.connect();
    }
    ChatComponent.prototype.ngOnInit = function () {
        window.app = window.app || {};
        window.app.namespace = window.app.namespace || {};
        window.app.namespace.callFromExternalInterface = this.callFromExternalInterface.bind(this);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        window.app.namespace.callFromExternalInterface = null;
    };
    ChatComponent.prototype.callFromExternalInterface = function (easyrtcId) {
        var _this = this;
        return this.ngZone.run(function () { return _this.syncUserInfoWithEasyRTCId(easyrtcId); });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.pullChatBuddyList();
        this.subscribeToChatBuddyList();
    };
    ChatComponent.prototype.connect = function () {
        this.triggerWindowEvent('onConnect', { 'event': 'onConnect', 'msgObj': {} });
        var self = this;
        window.addEventListener('onEasyRTCIDCreated', function (e) {
            try {
                var easyRTCId = e.detail.eventObj;
                self.openChatSocket(easyRTCId);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
        //easyrtc.setVideoDims(1280,720);
        //easyrtc.enableDebug(false);
        //rtc.easyrtc.setRoomOccupantListener(convertListToButtons);
        //rtc.easyrtc.easyApp("easyrtc.videoChatHd", "selfVideo", ["callerVideo"], loginSuccess, loginFailure);
    };
    ChatComponent.prototype.subscribeToChatBuddyList = function () {
        var _this = this;
        this.intervalId = setInterval(function () { _this.pullChatBuddyList(); }, 1000 * 10);
    };
    ChatComponent.prototype.pullChatBuddyList = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.chatService.getChatBuddyList(postObj).subscribe(function (data) { return _this.afterChatBuddyList(data); });
    };
    ChatComponent.prototype.afterChatBuddyList = function (data) {
        this.chatBuddyList = data;
        var self = this;
        window.addEventListener('onCallBuddy', function (e) {
            try {
                self.syncChatBuddiesWithVideoCall(e.detail.callbuddy);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    };
    ChatComponent.prototype.openChatWindow = function (item) {
        var match = false;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === item.username) {
                match = true;
            }
        }
        if (!match) {
            this.chatWindowList.push(item);
        }
    };
    ChatComponent.prototype.startVideoChat = function (event) {
        var self = this;
        self.modalService.open(self.modalId);
        self.syncChatBuddiesWithVideoCall(event.data.username);
        window.addEventListener('closeAVModal', function (e) {
            try {
                self.modalService.close(self.modalId);
            }
            catch (err) {
                console.log(err);
            }
        }, false);
    };
    ChatComponent.prototype.syncChatBuddiesWithVideoCall = function (matchBuddy) {
        var chatBuddyList = this.chatBuddyList;
        for (var obj in chatBuddyList) {
            if (chatBuddyList[obj].username === matchBuddy) {
                var callBuddy = chatBuddyList[obj].username;
                var easyrtcId = chatBuddyList[obj].easyrtcid;
                if (easyrtcId !== '') {
                    this.triggerWindowEvent('startVideoChat', { 'event': 'startVideoChat', 'easyrtcid': easyrtcId, 'callbuddy': callBuddy });
                }
            }
        }
    };
    ChatComponent.prototype.syncEasyrtcIdWithVideoCall = function (easyrtcId) {
        var chatBuddyList = this.chatBuddyList;
        for (var obj in chatBuddyList) {
            if (chatBuddyList[obj].easyrtcid === easyrtcId) {
                var callBuddy = chatBuddyList[obj].username;
                window["callBuddy"] = callBuddy;
            }
        }
    };
    ChatComponent.prototype.syncUserInfoWithEasyRTCId = function (easyrtcId) {
        var chatBuddyList = this.chatBuddyList;
        for (var i in chatBuddyList) {
            if (chatBuddyList[i].easyrtcid === easyrtcId) {
                var obj = { 'fullname': chatBuddyList[i].fullname, 'profilepic': chatBuddyList[i].profilepic };
                return obj;
            }
        }
    };
    ChatComponent.prototype.chatWindowClose = function (event) {
        var chatId = event.data;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === chatId) {
                this.chatWindowList.splice(i, 1);
            }
        }
    };
    ChatComponent.prototype.chatWindowReady = function (event) {
        var chatWindow = event.chatwindow;
        if (!this.windowReady) {
            var data = event.data;
            var chatId = data.username;
            if (chatId === this.cachedChatData.item.username) {
                this.windowReady = true;
                try {
                    chatWindow.displayServerMsg(this.cachedChatData);
                    delete this.cachedChatData;
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    };
    ChatComponent.prototype.openChatSocket = function (easyrtcId) {
        var self = this;
        var chatObj = { 'userid': this.userId, 'easyrtcid': easyrtcId };
        //require(['socket-io'], function(io) {
        //this.socket = io('https://192.168.1.3:3000/');
        //this.socket = io('http://wefrenz.com/');
        //this.socket = io("'"+ AppSettingsService.API_ENDPOINT("local") +"'");
        this.socket = __WEBPACK_IMPORTED_MODULE_2__libs_socket_io__('http://localhost:3000');
        //this.socket = io('https://13.127.194.58:3000/');
        //this.socket = io('https://192.168.225.177:3000/');
        this.socket.emit('ON_SOCKET_INIT', chatObj);
        /*socket.on("UPDATE_CHAT_LIST", function(data){
            //alert('update chat list');
            updateChatList();
        });*/
        //Getting the new msg from server
        this.socket.on('ON_NEW_MSG', function (data) {
            self.openChatWindowOnNewMessage(data);
            //console.log('new msg'+ data.chatid+'///'+ data.msg);
        });
        window.addEventListener('onAppLoggedOut', function (e) {
            self.closeSocket();
            self.triggerWindowEvent('onDisConnect', { 'event': 'onConnect', 'msgObj': {} });
        }, false);
        window.addEventListener('onCallAcceptChecker', function (e) {
            self.syncEasyrtcIdWithVideoCall(e.detail.easyrtcid);
            self.checkCallAcceptor();
        }, false);
    };
    ChatComponent.prototype.checkCallAcceptor = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    ChatComponent.prototype.closeSocket = function () {
        this.socket.disconnect();
    };
    //Sending message to the other user connected through socket
    ChatComponent.prototype.sendMsg = function (event) {
        console.log(event.chatid + '///' + event.msg);
        var chatObj = { 'chatid': event.chatid, 'msg': event.msg, 'item': this.loginData };
        this.socket.emit('ON_SEND_MSG', chatObj);
    };
    ChatComponent.prototype.openChatWindowOnNewMessage = function (data) {
        this.cachedChatData = {};
        var match = false;
        for (var i in this.chatWindowList) {
            if (this.chatWindowList[i].username === data.item.username) {
                match = true;
            }
        }
        if (!match) {
            this.windowReady = false;
            this.cachedChatData = data;
            this.chatWindowList.push(data.item);
        }
        else {
            this.windowReady = true;
            delete this.cachedChatData;
            //this.appChatWindow.displayServerMsg(data);
            this.triggerWindowEvent('onMessageDisplay', { 'event': 'onMessageDisplay', 'msgObj': data });
        }
    };
    ChatComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('appChatWindow'),
    __metadata("design:type", Object)
], ChatComponent.prototype, "appChatWindow", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_chat_service__["a" /* ChatService */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _e || Object])
], ChatComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "    agm-map {\n      height: 300px;\n    }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container no-padding\">\n  \t<div class=\"pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding map-content\">\n\t  \t<agm-map id=\"mapItem\" [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n\t    \t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t  \t</agm-map>\n  \t</div>\n  \t<div class=\"pull-left col-lg-6 col-md-6 col-sm-6 col-xs-12 no-padding loc-content\">\n\t  \t<div class=\"form-group\">\n\t    \t<input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\" [(ngModel)]=\"postCheckIn\">\n\t  \t</div>\n\t  \t<div class=\"form-group\">\n\t\t\t<textarea #desc class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t\t</textarea>\n\t\t</div>\n\t  \t<div class=\"colw100 inline-block\">\t\t\t\n\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"checkIn($event)\" [disabled]=\"isProgress\">\n\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckinComponent = (function () {
    function CheckinComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.checkInItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        //this.setCurrentPosition();
    }
    CheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 12;
        // this.latitude = 39.8282;
        // this.longitude = -98.5795;
        //set current position
        this.setCurrentPosition();
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: []
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    CheckinComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
        });
    };
    CheckinComponent.prototype.checkIn = function () {
        this.mapData = 'https://maps.googleapis.com/maps/api/staticmap?center=' + this.latitude + ',' + this.longitude + '&markers=color:red%7Clabel:C%7C' + this.latitude + ',' + this.longitude + '&zoom=' + this.zoom + '&size=600x400&key=AIzaSyD92tk4K4diBMwwDA0l8qxsBnSWgJQIl2A';
        var data = { 'postCheckIn': this.postCheckIn, 'postDesc': this.postDesc, 'mapData': this.mapData };
        this.checkInItem.emit({ data: data });
        this.postCheckIn = '';
        this.postDesc = '';
        this.latitude = null;
        this.longitude = null;
        this.setCurrentPosition();
    };
    CheckinComponent.prototype.resetCheckin = function () {
        //alert('reset');
    };
    return CheckinComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CheckinComponent.prototype, "checkInItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], CheckinComponent.prototype, "searchElementRef", void 0);
CheckinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-checkin',
        template: __webpack_require__("../../../../../src/app/checkin/checkin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/checkin/checkin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object])
], CheckinComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=checkin.component.js.map

/***/ }),

/***/ "../../../../../src/app/comment-box/comment-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-box{\n\theight: 60px;\n\tpadding: 3px;\n\tborder: 1px solid #2b90d9;\t\n\twidth: 280px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment-box/comment-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div name=\"story\" #commentBox class=\"comment-box colw100 inline-block no-outline auto-overflow pull-left\" contenteditable=\"true\" spellcheck=\"true\" role=\"textbox\" aria-multiline=\"true\" data-placeholder-default=\"Add Comment\" aria-autocomplete=\"list\" aria-expanded=\"false\" [style.color]=\"color\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.text-decoration]=\"txtDeco\" [style.font-style]=\"fontStyle\"  [innerHTML]=\"storyContent\" \n\t(keyup)=\"onStoryContentChange($event)\" (keydown)=\"onStoryContentChanged($event.keyCode)\"></div>\n<div class=\"control-bar inline-block\">\n\t<div class=\"pull-left color-picker-icon\">\n\t\t<input [colorPicker]=\"color\" (colorPickerChange)=\"color=$event; colorPickerChange($event);\" [style.background]=\"color\" class=\"cursor-pointer\"/>\n\t</div>\n\t<div class=\"pull-left font-family-btn\" (click)=\"toggleFontFamily($event); clickedInside($event);\">\n\t\t<div>\n\t\t\t<i class=\"fa fa-font fa-2x blue-fonts cursor-pointer\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isShowFontFamily; then fontFamilies\"></div>\n\t\t<ng-template #fontFamilies>\n\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Arial')\">Arial</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Times New Roman')\">Times New Roman</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Courier New')\">Courier New</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left font-size-btn\" (click)=\"clickedInside($event)\">\n\t\t<div class=\"blue-fonts cursor-pointer text-center\" (click)=\"toggleFontSize($event)\"><span>{{fontSize}}</span></div>\n\t\t<div *ngIf=\"isShowFontSize; then fontSizes\"></div>\n\t\t<ng-template #fontSizes>\n\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 9)\">9</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 10)\">10</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 11)\">11</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 12)\">12</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 13)\">13</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 14)\">14</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 15)\">15</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 16)\">16</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 17)\">17</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 18)\">18</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 19)\">19</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 20)\">20</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 21)\">21</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 22)\">22</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 23)\">23</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 24)\">24</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 25)\">25</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left font-bold-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isBoldBtnHighLight\" (click)=\"applyBold($event)\">\n\t\t<span>B</span>\n\t</div>\n\t<div class=\"pull-left font-ul-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isULBtnHighLight\" (click)=\"applyUnderline($event)\">\n\t\t<span>U</span>\n\t</div>\n\t<div class=\"pull-left font-italic-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isIBtnHighLight\"  (click)=\"applyItalic($event)\">\n\t\t<span>I</span>\n\t</div>\n\t<div class=\"pull-left smiley-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isEmotionsHighLight\"  (click)=\"showEmotions($event);clickedInside($event);\">\n\t\t<div>\n\t\t\t<i class=\"fa fa-smile-o\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isEmotionsHighLight; then emotions\"></div>\n\t\t<ng-template #emotions>\n\t\t\t<div class=\"list-items font-items pull-left emo-list\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion0-smile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion1-sadsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':D')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion2-bigsmile.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '8=)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion3-cool.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':o')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion4-surprised.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion5-wink.gif\"/></span>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion6-crying.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '(:|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion7-sweating.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':|')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion8-speechless.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':*')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion9-kiss.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, 'emotion10-tongueout')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion10-tongueout.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':$')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion11-blush.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':^)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion12-wondering.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|-)')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion13-sleepy.gif\"/></span>\n\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|(')\">\n\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion14-dull.gif\"/></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left up-img-btn blue-fonts cursor-pointer text-center\" (click)= \"imageInput.value = ''; imageInput.click();\">\n\t\t<i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left up-mus-btn blue-fonts cursor-pointer text-center\" (click)= \"musicInput.value = ''; musicInput.click();\">\n\t\t<i class=\"fa fa-music\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)= \"videoInput.value = ''; videoInput.click();\">\n\t\t<i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"checkin-btn pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)=\"checkIn($event)\">\n\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t</div>\n\t<div class=\"pull-left post-btn blue-fonts cursor-pointer text-center\">\n\t\t<div *ngIf=\"isAddPost; then addPost else updatePost\"></div>\n\t\t<ng-template #addPost>\n\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t<span>Post</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t\t<ng-template #updatePost>\n\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t<span>Update</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment-box/comment-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentBoxComponent = (function () {
    function CommentBoxComponent() {
    }
    CommentBoxComponent.prototype.ngOnInit = function () {
    };
    return CommentBoxComponent;
}());
CommentBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment-box',
        template: __webpack_require__("../../../../../src/app/comment-box/comment-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comment-box/comment-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CommentBoxComponent);

//# sourceMappingURL=comment-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/commentitem/commentitem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-controls .fa-thumbs-up, .comment-controls .fa-heart, .comment-controls .fa-comment{\n    margin: 0px 3px 0px 0px;\n}\n .comment-controls .fa-heart, .comment-controls .fa-comment{\n \tmargin: 0px 3px;\n }\n .comment-edit-items{\n \tposition: absolute;\n \tleft: 245px;\n \tmargin-top: 15px;\n }\n .comment-profile-pic{\n \theight: 26px;\n \twidth: 26px;\n \tborder-radius: 50%;\n }\n.full-name{\n\tpadding-left: 3px;\n}\n .feed-item{\n    word-wrap: break-word;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/commentitem/commentitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEditCommentItem; then editCommentItemControls\"></div>\n<ng-template #editCommentItemControls>\n\t<div class=\"list-items comment-edit-items font-items pull-right\">\n\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t<div *ngIf=\"isMyComment; then editThisCommentItem else reportThisCommentItem\"></div>\n\t\t<ng-template #editThisCommentItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"editCommentItem($event)\">Edit</div>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"deleteCommentItem();\"><span>Delete</span></div>\n\t\t</ng-template>\n\t\t<ng-template #reportThisCommentItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Report</div>\n\t\t</ng-template>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Hide</div>\n\t\t<!--<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Tag</div>-->\n\t</div>\n</ng-template>\n<div class=\"comment-profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + commentItem.profilepic + ')'}\">\n</div>\n<div class=\"full-name blue-fonts bold-fonts pull-left med-line-height\">{{commentItem.fullname}}</div>\n<div class=\"pull-left blue-fonts time-ago med-line-height\"><span>&nbsp;commented&nbsp;</span>{{commentMoment}}</div>\n<div class=\"pull-right edit-feed hand-cursor\">\n\t<i aria-hidden=\"true\" class=\"fa fa-pencil-square-o blue-fonts\" id=\"editItem\" (click)=\"clickedInside($event);\"></i>\n</div>\n<div *ngIf=\"commentItem.commenttype === 'text'; then textComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'image'; then imageComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'music'; then musicComment\"></div>\n<div *ngIf=\"commentItem.commenttype === 'checkin'; then checkinComment\"></div>\n<ng-template #textComment>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.commenttext\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #imageComment>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + commentItem.filePath+ ')'}\"></div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #checkinComment>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + commentItem.filePath+ ')'}\"></div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #musicComment>\n\t<audio #musicPlayer  preload=\"none\" controls class=\"comment-music-player\">\n        <source src=\"{{commentItem.filePath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n\t<div class=\"comment-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"commentItem.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ commentItem.fontWeight +'', \n\t\t\t\t'font-size':' '+ commentItem.fontSize +'', 'font-family':' '+ commentItem.fontFamily +'', 'font-style': ' '+ commentItem.fontStyle +' ', 'text-decoration': ' '+ commentItem.textDecoration +' ',\n\t\t\t\t'color':' '+ commentItem.colorInfo +''}\" >\n\t</div>\n</ng-template>\n\n<div class=\"colw100 comment-controls\">\n\t<div class=\"pull-left blue-fonts inline-block cursor-pointer\" (click)=\"likeClick($event)\"> \n\t\t<div *ngIf=\"alreadyLiked === true; then thumbsDown else thumbsUp\"></div>\n\t\t<ng-template #thumbsUp>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<ng-template #thumbsDown>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<div *ngIf=\"likeCount > 0; then  likeItemsCount else likeItemCount\">\n  \t\t</div>\n  \t\t<ng-template #likeItemsCount>\n  \t\t\t<span>{{likeCount}}</span>\n  \t\t\t<span>Like</span>\n\t\t</ng-template>\n  \t\t<ng-template #likeItemCount>\n  \t\t\t<span>Like</span>\n\t\t</ng-template>\n\t</div>\t\n\t<div class=\"pull-left blue-fonts cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t<div *ngIf=\"alreadyLoved === true; then lovedSymbol else loveSymbol\"></div>\n\t\t<ng-template #lovedSymbol>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-heart red-fonts\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<ng-template #loveSymbol>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-heart blue-fonts\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<div *ngIf=\"loveCount > 0; then  loveItemsCount else loveItemCount\">\n  \t\t</div>\n  \t\t<ng-template #loveItemsCount>\n  \t\t\t<span>{{loveCount}}</span>\n  \t\t\t<span>Love</span>\n\t\t</ng-template>\n  \t\t<ng-template #loveItemCount>\n  \t\t\t<span>Love</span>\n\t\t</ng-template>\n\t</div>\n\t<!-- This feature is on hold for now -->\n\t<!--<div class=\"pull-left cursor-pointer blue-fonts\" (click)=\"commentClick($event)\"><i class=\"fa fa-comment\"></i><span>Reply</span>-\n\t</div>-->\n</div>\n<div class=\"pull-left colw100 inline-block\">\n\t<ng-template [ngIf]=\"addComment || editComment\">\n\t\t<app-story-box [action]=\"action\" [replyCommentItem]=\"commentItem\" [operation] = 'operation' \n\t\t(refreshCommentItem)=\"refreshCommentItem($event)\"></app-story-box>\n\t</ng-template>\t\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/commentitem/commentitem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentitemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_comment_service__ = __webpack_require__("../../../../../src/app/services/data/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timeago_js__ = __webpack_require__("../../../../timeago.js/dist/timeago.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_timeago_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as moment from 'moment';


var CommentitemComponent = (function () {
    function CommentitemComponent(commentService) {
        this.commentService = commentService;
        this.refreshFeed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.refreshUpdatedComment = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.editCurrentCommentItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isEditCommentItem = false;
        this.isMyComment = false;
        this.likeCount = 0;
        this.loveCount = 0;
        this.alreadyLiked = false;
        this.alreadyLoved = false;
        this.addComment = false;
        this.operation = 'add';
        this.editComment = false;
        this.action = 'comment';
        this.isCommentsAdded = false;
        //private userId: string = '';
        //private feedMoment: moment.Moment;
        this.feedItemCommentArr = [];
        this.containerHeight = 0;
        this.scrollHeight = 0;
    }
    CommentitemComponent.prototype.ngOnInit = function () {
        if (this.commentItem.commentfrom === this.userId) {
            this.isMyComment = true;
        }
        this.commentActionCheck();
        var timeagoInstance = __WEBPACK_IMPORTED_MODULE_2_timeago_js___default()();
        this.commentMoment = timeagoInstance.format(this.commentItem.created);
        //this.feedMoment = moment(this.commentItem.created);
        this.likeCount = this.commentItem.likeArr.length;
        this.loveCount = this.commentItem.loveArr.length;
        //this.fetchCommentsForCurrentCommentItem();
    };
    CommentitemComponent.prototype.clickedOutside = function ($event) {
        this.isEditCommentItem = false;
    };
    CommentitemComponent.prototype.commentActionCheck = function () {
        var i = this.commentItem.likeArr.indexOf(this.userId);
        if (i === -1) {
            this.alreadyLiked = false;
        }
        else {
            this.alreadyLiked = true;
        }
        var j = this.commentItem.loveArr.indexOf(this.userId);
        if (j === -1) {
            this.alreadyLoved = false;
        }
        else {
            this.alreadyLoved = true;
        }
    };
    CommentitemComponent.prototype.clickedInside = function ($event) {
        if (this.isEditCommentItem) {
            this.isEditCommentItem = false;
        }
        else {
            this.isEditCommentItem = true;
        }
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    CommentitemComponent.prototype.editCommentItem = function (event) {
        this.editCurrentCommentItem.emit({ commentItem: this.commentItem });
        this.editComment = true;
        this.operation = 'edit';
    };
    CommentitemComponent.prototype.deleteCommentItem = function () {
        var _this = this;
        var postObj = { 'id': this.commentItem._id };
        this.commentService.deleteCommentItem(postObj).subscribe(function (data) { return _this.afterCommentItemDeleted(data); });
    };
    CommentitemComponent.prototype.afterCommentItemDeleted = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            //this.refreshFeed.emit('refresh');
            this.refreshUpdatedComment.emit({ item: this.item._id });
        }
    };
    CommentitemComponent.prototype.likeClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var likeArr = this.commentItem.likeArr;
        var i = likeArr.indexOf(id);
        if (i === -1) {
            likeArr.push(id);
            this.alreadyLiked = true;
        }
        else {
            likeArr.splice(i, 1);
            this.alreadyLiked = false;
        }
        this.likeCount = likeArr.length;
        var postObj = { 'id': this.commentItem._id, 'likearr': likeArr };
        this.commentService.updateLikeCommentChannel(postObj).subscribe(function (data) { return _this.afterUpdateLikeCommentChannel(data); });
    };
    CommentitemComponent.prototype.loveClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var loveArr = this.commentItem.loveArr;
        var i = loveArr.indexOf(id);
        if (i === -1) {
            loveArr.push(id);
            this.alreadyLoved = true;
        }
        else {
            loveArr.splice(i, 1);
            this.alreadyLoved = false;
        }
        this.loveCount = loveArr.length;
        var postObj = { 'id': this.commentItem._id, 'lovearr': loveArr };
        this.commentService.updateLoveCommentChannel(postObj).subscribe(function (data) { return _this.afterUpdateLoveCommentChannel(data); });
    };
    CommentitemComponent.prototype.commentClick = function ($event) {
        if (this.addComment || this.editComment) {
            this.addComment = false;
            this.editComment = false;
        }
        else {
            this.addComment = true;
            this.editComment = true;
            this.operation = 'add';
        }
    };
    CommentitemComponent.prototype.afterUpdateLikeCommentChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    CommentitemComponent.prototype.afterUpdateLoveCommentChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    CommentitemComponent.prototype.fetchCommentsForCurrentCommentItem = function () {
        var postObj = { 'feeditemid': this.commentItem._id };
        //  this.commentService.fetchCommentsForCurrentCommentItem(postObj).subscribe(data => this.afterFetchedCommentsForCurrentFeedItem(data));
    };
    CommentitemComponent.prototype.refreshCommentItem = function (event) {
        this.refreshUpdatedComment.emit({ item: event.data });
    };
    CommentitemComponent.prototype.afterFetchedCommentsForCurrentFeedItem = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            if (result.length > 0) {
                this.isCommentsAdded = true;
                this.feedItemCommentArr = result;
            }
        }
    };
    return CommentitemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('item'),
    __metadata("design:type", Object)
], CommentitemComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('commentItem'),
    __metadata("design:type", Object)
], CommentitemComponent.prototype, "commentItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('userId'),
    __metadata("design:type", Object)
], CommentitemComponent.prototype, "userId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CommentitemComponent.prototype, "refreshFeed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], CommentitemComponent.prototype, "refreshUpdatedComment", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], CommentitemComponent.prototype, "editCurrentCommentItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentitemComponent.prototype, "clickedOutside", null);
CommentitemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-commentitem',
        template: __webpack_require__("../../../../../src/app/commentitem/commentitem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/commentitem/commentitem.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_data_comment_service__["a" /* CommentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_comment_service__["a" /* CommentService */]) === "function" && _d || Object])
], CommentitemComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=commentitem.component.js.map

/***/ }),

/***/ "../../../../../src/app/control-messages/control-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-message{color: red;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/control-messages/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    ControlMessagesComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]) === "function" && _a || Object)
], ControlMessagesComponent.prototype, "control", void 0);
ControlMessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-control-messages',
        template: '<div class="error-message" *ngIf="errorMessage !== null">{{errorMessage}}</div>',
        styles: [__webpack_require__("../../../../../src/app/control-messages/control-messages.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ControlMessagesComponent);

var _a;
//# sourceMappingURL=control-messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover-pic{\n\tbackground-size: cover !important;\n}\n.edit-cover-pic{\n\tposition: absolute;\n    margin: -275px 0px 0px 20px;\n}\n.edit-cover-pic i{\n\tbackground: #fff;\n    padding: 1px 1px 0px 2px;\n    border-radius: 3px;\n    border: 1px solid #2b90d9;\n}\n\n.edit-cover-pic i:hover{\n\tborder: 1px solid #007bff;\n\tbackground: rgba(255, 255, 255, 0.5);\n}\n\n.edit-cover-pic-items{\n\twidth: 100px;\n}\n.add-friend-controls, .save-coverpic-controls{\n\tfloat: right;\n    margin: -45px 15px;\t\n}\n.save-btn{\n\tmargin-right: 6px;\n    float: left;\n    line-height: 16px;\n    padding-left: 15px !important;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n\n.preview-cover-pic img{\n\twidth: 100%;\n}\n.pending-btn{\n\tpadding-left: 15px !important;\n}\n.msg-btn{\n\tpadding-left: 15px !important;\n}\n.add-btn{\n\tpadding-left: 17px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"coverPic\" #coverPic class=\"cover-pic\" (mousedown)=\"canvasMouseDown()\"\n[ngStyle]=\"{'background': 'url(' + coverPicURL+ ')', \n\t\t\t'cursor':' '+ mouseCursor +'', \n\t\t\t'background-repeat': 'no-repeat', 'height':' '+ coverPicHeight +'px', 'width':' '+ coverPicWidth +'px', 'background-size': ' '+ bgSize +' ',\n\t\t\t'background-position-x':' '+ posX +'px', \n\t\t\t'background-position-y':' '+ posY +'px'}\" \n(mouseup)=\"canvasMouseUp()\"></div>\n<div *ngIf=\"isMyProfile === 'true'; then editCoverPicControls\"></div>\n<ng-template #editCoverPicControls>\n    <app-modal [modalTitle]=\"'Cover Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal>\n    \t<div class=\"preview-cover-pic\"><img *ngIf=\"encodedImage\" [src]=\"encodedImage\"/></div>\n      \t<div>\t\t\t\n    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<form [formGroup]=\"coverPicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"coverPicGroup\">\n\t  \t\t\t<input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"edit-cover-pic\" (click)=\"clickedInside($event)\">\n\t\t<i class=\"fa fa-pencil-square-o fa-2x blue-fonts cursor-pointer\" aria-hidden=\"true\"  (click)=\"editCoverPicClick($event)\">\n\t\t</i>\n\t\t<div *ngIf=\"isEditCoverPic; then editCoverPicItems\"></div>\n\t\t<ng-template #editCoverPicItems>\n\t\t\t<div class=\"list-items font-items\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Move</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"changeClick(); fileInput.value = ''; fileInput.click()\"><span>Change</span></div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Select</div>\n\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Default</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</ng-template>\n\n<div *ngIf=\"isSaveCoverPic; then saveCoverPicControls\"></div>\n<ng-template #saveCoverPicControls>\n\t<div class=\"save-coverpic-controls\">\n\t\t<div class=\"row no-margin\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"save()\">\n\t\t\t\t<span class=\"pull-left\">Save</span>\n\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"cancel()\">\n\t\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"pull-left\">Cancel</span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</ng-template>\t\n\n\n\n<div class=\"add-friend-controls\">\n\t<div class=\"row no-margin\">\n\t\t<div *ngIf=\"isAddFriend; then addFriendControls\"></div>\n\t\t<ng-template #addFriendControls>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center add-btn\" (click)=\"addFriend()\">\n\t\t\t\t<span class=\"pull-left\">Add</span>\n\t\t\t\t<i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isRequestPending; then pendingControls\"></div>\n\t\t<ng-template #pendingControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary large-btn pending-btn\">\n\t\t\t\t\t<span class=\"pull-left\">Request Pending</span>\n\t\t\t\t\t<i class=\"fa fa-user-secret\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isRequestConfirmed; then confirmedControls\"></div>\n\t\t<ng-template #confirmedControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary med-btn pending-btn\">\n\t\t\t\t\t<span class=\"pull-left\">Freind</span>\n\t\t\t\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isConfirmFriend; then confirmFriendControls\"></div>\n\t\t<ng-template #confirmFriendControls>\n\t\t\t<div class=\"pull-left btn-div\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary large-btn pending-btn\" (click)=\"confirm()\">\n\t\t\t\t\t<span class=\"pull-left\">Confirm Freind</span>\n\t\t\t\t\t<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"isMyProfile === 'false'; then sendMsgBtn\"></div>\n\t\t<ng-template #sendMsgBtn>\n\t\t\t<button type=\"button\" class=\"btn btn-primary text-center med-btn msg-btn\" (click)=\"sendMEssage()\">\n\t\t\t\t<span class=\"pull-left\">Message</span>\n\t\t\t\t<i class=\"fa fa-commenting\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</ng-template>\n\t</div>\n</div>\n\t\n\t\t\t\t<!--<div class=\"row btn-div-container\" ng-show=\"isProfileBtnShow\" id=\"friendsBtnContainer\">\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"addFriendBtn\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onAddBtnClick($event)\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Add\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"pendingFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Request Pending\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"respondFriendBtn\" style=\"display : none;\" data=\"{{profileIdOnAddBtn}}\" ng-click=\"onConfirmFriendBtnClick($event);\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Respond Request\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"confirmedFriendBtn\" style=\"display : none;\" data=\"{{profileID}}\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Friend\"><i class=\"fa fa-plus-square-o\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"pull-left btn-div\" id=\"msgBtn\">\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Message\"><i class=\"fa fa-pencil-square-o\"></i></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t-->\n\n<div class=\"profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': profilePicHeight, 'width': profilePicWidth}\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/coverpic/coverpic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverpicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__ = __webpack_require__("../../../../../src/app/services/data/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__ = __webpack_require__("../../../../../src/app/services/data/configuration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CoverpicComponent = (function () {
    function CoverpicComponent(formBuilder, elementRef, route, modalService, uploadService, configurationService, friendsService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.elementRef = elementRef;
        this.route = route;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.configurationService = configurationService;
        this.friendsService = friendsService;
        this.onFriendConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.modalId = 'appModal';
        this.bgSize = 'cover';
        this.posX = 0;
        this.posY = 0;
        this.coverPicHeight = 300;
        this.coverPicWidth = 756;
        this.isMyProfile = 'false';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = false;
        this.isUploadCoverPic = false;
        this.isAddFriend = false;
        this.isRequestPending = false;
        this.isRequestConfirmed = false;
        this.isConfirmFriend = false;
        this.mouseCursor = 'default';
        this.coverPicURL = '';
        this.userId = '';
        this.friendId = '';
        //private scene: Scene;
        this.mouseDown = false;
        var self = this;
        this.route.params.subscribe(function (val) {
            _this.isMyProfile = localStorage.getItem('isMyProfile');
            if (_this.isMyProfile === 'true') {
                //this.mouseCursor = 'move';
            }
            else {
                //this.mouseCursor = 'default';
                //let postObj = {'userid': (this.posX+'x'+this.posY, )};
                //this.configurationService.saveCoverPicPos(postObj).subscribe(data => this.afterCoverPicPosSaved(data));
            }
        });
        this.coverPicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.coverPicGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        //this.coverPicURL = AppSettingsService.API_ENDPOINT("local")+'/'+JSON.parse(localStorage.getItem('loginData')).wallpicpath;
        this.self = this;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
    }
    CoverpicComponent.prototype.onMouseup = function (event) {
        this.mouseDown = false;
    };
    CoverpicComponent.prototype.onMousemove = function (event) {
        if (this.mouseDown) {
            if (this.mouseCursor === 'move') {
                this.differenceX = this.startX - event.pageX;
                this.differenceY = this.startY - event.pageY;
                this.posX = 0;
                var diff = this.initialY - this.differenceY;
                if (diff < 0) {
                    this.posY = diff;
                }
                else {
                    this.posY = 0;
                }
                console.log(this.posY);
                var scalableDiff = this.coverPicHeight - this.scalableHeight;
                if (this.posY <= scalableDiff) {
                    this.posY = scalableDiff;
                }
                var styles = getComputedStyle(this.coverPic.nativeElement);
            }
        }
    };
    CoverpicComponent.prototype.onMousedown = function (event) {
        this.mouseDown = true;
        this.startX = event.pageX;
        this.startY = event.pageY;
        this.initialX = this.posX;
        this.initialY = this.posY;
    };
    CoverpicComponent.prototype.ngOnInit = function () {
    };
    CoverpicComponent.prototype.ngAfterViewInit = function () {
        //this.drawImage(0, 0);
    };
    CoverpicComponent.prototype.updateCoverPicSettings = function (coverPicSettings) {
        var self = this;
        var actualImage = new Image();
        var styles = getComputedStyle(this.coverPic.nativeElement);
        actualImage.src = this.coverPicURL.replace(/"/g, "").replace(/url\(|\)$/ig, "");
        actualImage.onload = function () {
            console.log(actualImage.width + ',' + actualImage.height);
            self.scalableHeight = (self.coverPicWidth / actualImage.width) * actualImage.height;
        };
        this.posX = __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__["a" /* UtilityService */].getPicPosition(coverPicSettings.wallpicpos).position.x;
        this.posY = __WEBPACK_IMPORTED_MODULE_8_app_services_utility_utility_service__["a" /* UtilityService */].getPicPosition(coverPicSettings.wallpicpos).position.y;
    };
    CoverpicComponent.prototype.canvasMouseDown = function () {
        //this.mousePressed = true;
    };
    CoverpicComponent.prototype.canvasMouseUp = function () {
        //this.mousePressed = false;
        //this.dragging = false;
    };
    CoverpicComponent.prototype.triggerFalseFileClick = function () {
        this.coverPicFileInput.nativeElement.click();
        //el.click();
    };
    CoverpicComponent.prototype.editCoverPicClick = function (event) {
        if (!this.isEditCoverPic) {
            this.isEditCoverPic = true;
        }
        else {
            this.isEditCoverPic = false;
        }
    };
    CoverpicComponent.prototype.clickedOutside = function ($event) {
        this.isEditCoverPic = false;
        //this.searchValue = '';
    };
    CoverpicComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    CoverpicComponent.prototype.moveClick = function (event) {
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.changeClick = function () {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        //let element: HTMLElement = document.getElementsByClassName('file-input')[0] as HTMLElement;
        //element.click();
        //fileInput.click();
    };
    CoverpicComponent.prototype.selectClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.defaultClick = function (event) {
        this.mouseCursor = 'default';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
    };
    CoverpicComponent.prototype.cancel = function (event) {
        this.mouseCursor = 'default';
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.save = function () {
        if (this.isUploadCoverPic) {
            this.uploadCoverPic();
            this.mouseCursor = 'default';
        }
        if (this.mouseCursor == 'move') {
            this.saveCoverPicPos();
            this.mouseCursor = 'default';
        }
        this.isUploadCoverPic = false;
        this.isSaveCoverPic = false;
    };
    CoverpicComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    CoverpicComponent.prototype.ok = function () {
        this.coverPicURL = this.encodedImage;
        this.bgSize = 'cover';
        this.mouseCursor = 'move';
        this.isEditCoverPic = false;
        this.isSaveCoverPic = true;
        this.isUploadCoverPic = true;
        this.previewPicModal.close();
    };
    CoverpicComponent.prototype.fileChangeEvent = function (event) {
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#preview').attr('src', e.target.result);
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    CoverpicComponent.prototype.saveCoverPicPos = function () {
        var _this = this;
        var postObj = { 'coverpicpos': (this.posX + 'x' + this.posY), 'userid': this.userId };
        this.configurationService.saveCoverPicPos(postObj).subscribe(function (data) { return _this.afterCoverPicPosSaved(data); });
    };
    CoverpicComponent.prototype.afterCoverPicPosSaved = function (result) {
        alert(result.message);
    };
    //Confirming the friend
    CoverpicComponent.prototype.confirm = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.confirmFriendReq(postObj).subscribe(function (data) { return _this.afterConfirmFriendReq(data); });
    };
    CoverpicComponent.prototype.afterConfirmFriendReq = function (data) {
        if (data.status === 'confirmed') {
            this.isRequestConfirmed = true;
            this.isConfirmFriend = false;
            this.onFriendConfirmed.emit({ data: data });
            //Updating controls after friend is confirmed
            this.updateFriendsControlsSettings(data);
        }
    };
    CoverpicComponent.prototype.updateFriendsControlsSettings = function (data) {
        switch (data.status) {
            case '!friend':
                this.isAddFriend = true;
                this.isRequestPending = false;
                this.isRequestConfirmed = false;
                this.isConfirmFriend = false;
                break;
            case 'displayed':
                if (data.agent === 'responder') {
                    this.isConfirmFriend = true;
                    this.isRequestPending = false;
                }
                else if (data.agent === 'requester') {
                    this.isConfirmFriend = false;
                    this.isRequestPending = true;
                }
                this.isAddFriend = false;
                this.isRequestConfirmed = false;
                break;
            case 'pending':
                if (data.agent === 'responder') {
                    this.isConfirmFriend = true;
                    this.isRequestPending = false;
                }
                else if (data.agent === 'requester') {
                    this.isConfirmFriend = false;
                    this.isRequestPending = true;
                }
                this.isAddFriend = false;
                this.isRequestConfirmed = false;
                break;
            case 'confirmed':
                this.updateConfirmedControls();
                break;
            default:
        }
    };
    CoverpicComponent.prototype.updateConfirmedControls = function () {
        this.isRequestConfirmed = true;
        this.isAddFriend = false;
        this.isRequestPending = false;
        this.isConfirmFriend = false;
    };
    CoverpicComponent.prototype.addFriend = function () {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.setFriendInfo(postObj).subscribe(function (data) { return _this.afterSetFriendInfo(data); });
    };
    CoverpicComponent.prototype.afterSetFriendInfo = function (result) {
        if (result.status === "sent") {
            this.isAddFriend = false;
            this.isRequestPending = true;
            this.isRequestConfirmed = false;
        }
    };
    CoverpicComponent.prototype.uploadCoverPic = function () {
        //FILL FormData WITH FILE DETAILS.
        var formData = new FormData();
        var file = this.files;
        formData.append('uploadfile', file);
        var coverPicPos = this.posX + 'x' + this.posY;
        formData.append('coverpicpos', coverPicPos);
        formData.append('userid', this.userId);
        var xhr = new XMLHttpRequest();
        xhr.open('post', __WEBPACK_IMPORTED_MODULE_5_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadCoverPic', true);
        xhr.upload.onprogress = function (e) {
            if (e.lengthComputable) {
                var percentage = (e.loaded / e.total) * 100;
                console.log(percentage);
                //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                //$('div.progress div').html(percentage.toFixed(0) + '%');
            }
        };
        xhr.onerror = function (e) {
            alert('An error occurred while submitting the form. Maybe your file is too big');
        };
        xhr.onload = function () {
            /*let file = xhr.responseText;
            $('div.progress div').css('width','0%');
            $('div.progress').hide();
            showMsg("alert alert-success", "File uploaded successfully!");
            $('#myFile').val('');*/
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText); // Another callback here
            }
        };
        function callback(responseText) {
            if (JSON.parse(responseText).status === 'sessionExpired') {
                alert('Session Expired, Please Login Again');
            }
            var loginData = JSON.parse(localStorage.getItem('loginData'));
            loginData.wallpicpath = JSON.parse(responseText).wallpicpath;
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        xhr.send(formData);
        return false;
    };
    // UPDATE PROGRESS BAR.
    CoverpicComponent.prototype.updateProgress = function (e) {
        if (e.lengthComputable) {
            document.getElementById('pro').setAttribute('value', e.loaded);
            document.getElementById('pro').setAttribute('max', e.total);
        }
    };
    // CONFIRMATION.
    CoverpicComponent.prototype.transferComplete = function (e) {
        alert("Files uploaded successfully.");
    };
    return CoverpicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('coverPic'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], CoverpicComponent.prototype, "coverPic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('coverPicFileInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], CoverpicComponent.prototype, "coverPicFileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('previewPicModal'),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "previewPicModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "fileInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CoverpicComponent.prototype, "sharedList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], CoverpicComponent.prototype, "onFriendConfirmed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMouseup", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMousemove", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "onMousedown", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CoverpicComponent.prototype, "clickedOutside", null);
CoverpicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-coverpic',
        template: __webpack_require__("../../../../../src/app/coverpic/coverpic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/coverpic/coverpic.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_upload_service__["a" /* UploadService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_data_configuration_service__["a" /* ConfigurationService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _k || Object])
], CoverpicComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=coverpic.component.js.map

/***/ }),

/***/ "../../../../../src/app/entertainment/entertainment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-content{\n\tpadding: 5px;\n}\n@media only screen and (max-width: 575px) {\n\t.mobile-padding{padding:15px !important;}\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entertainment/entertainment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightVideos ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-file-video-o blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Videos</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-music blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Music</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightPhotos ? 'highlight-nav' : '')\" (click)=\"switchPhotos($event)\"><i class=\"fa fa-file-image-o blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Photos</span> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-list-alt blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Play List</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Album</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding mobile-padding\">\n\t\t\t<div class=\"opaque-bg video-content\">\n\t\t\t\t<ng-template [ngIf]=\"isVideo\">\n\t\t\t\t\t<app-video-player></app-video-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isMusic\">\n\t\t\t\t\t<app-music-player></app-music-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isPhotos\">\n\t\t\t\t\t<app-photos></app-photos>\n\t\t\t\t</ng-template>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/entertainment/entertainment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntertainmentComponent = (function () {
    function EntertainmentComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.onAppLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAppLoggedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.isVideo = true;
        this.isMusic = false;
        this.isPhotos = false;
        this.isHighLightVideos = true;
        this.isHighLightMusic = false;
        this.isHighLightPhotos = false;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'entertainment/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    EntertainmentComponent.prototype.ngOnInit = function () {
    };
    EntertainmentComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    EntertainmentComponent.prototype.switchVideo = function (event) {
        this.isVideo = true;
        this.isPhotos = false;
        this.isMusic = false;
        this.isHighLightVideos = true;
        this.isHighLightMusic = false;
        this.isHighLightPhotos = false;
    };
    EntertainmentComponent.prototype.switchMusic = function (event) {
        this.isVideo = false;
        this.isPhotos = false;
        this.isMusic = true;
        this.isHighLightVideos = false;
        this.isHighLightPhotos = false;
        this.isHighLightMusic = true;
    };
    EntertainmentComponent.prototype.switchPhotos = function (event) {
        this.isVideo = false;
        this.isMusic = false;
        this.isPhotos = true;
        this.isHighLightVideos = false;
        this.isHighLightPhotos = true;
        this.isHighLightMusic = false;
    };
    return EntertainmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], EntertainmentComponent.prototype, "onAppLoggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], EntertainmentComponent.prototype, "onAppLoggedOut", void 0);
EntertainmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-entertainment',
        template: __webpack_require__("../../../../../src/app/entertainment/entertainment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/entertainment/entertainment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], EntertainmentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=entertainment.component.js.map

/***/ }),

/***/ "../../../../../src/app/feeditem/feeditem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-pic{\n    margin: -3px 2px;\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    left: 5px;\n    border-radius: 50%;  \t\n}\n.feed-controls .fa-thumbs-up, .feed-controls .fa-heart, .feed-controls .fa-comment{\n    margin: 0px 3px 0px 0px;\n}\n .feed-controls .fa-heart, .feed-controls .fa-comment{\n \tmargin: 0px 3px;\n }\n .feed-edit-items .arrow-up{\n \tmargin-left: 75px !important;\n }\n .feed-edit-items{\n    position: absolute !important;\n    right: 18px !important;\n    margin-top: 16px;\n    z-index: 1000;\n }\n .edit-feed:hover{\n \tcolor: red;\n }\n .posted-pic, .feed-music-player{\n    display: inline-block;\n    background-size: cover !important;\n    min-height: 300px;\n    width: 100%;\n    margin: 5px 0px;\n    background: #000;\n }\n .feed-music-player{\n\n }\n .feed-controls .pull-left{\n    margin-right: 10px;\n }\n.comment-box{\n    width: 100%;\n    display: inline-block;\n}\n.comment-box-items{\n    border: 1px solid #2b90d9;\n    width: 280px;\n    border-radius: 3px;\n    padding: 3px;\n    /*max-height: 220px;*/\n    overflow-y: auto;\n    overflow-x: hidden;\n    display: block;\n}\n.view-more{\n    width: 60px;\n    padding: 3px 0px;\n    margin: auto;\n}\n app-commentitem{\n    display: inline-block;\n    width: 100%;\n }\n .feed-item{\n    word-wrap: break-word;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feeditem/feeditem.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEditFeedItem; then editFeedItemControls\"></div>\n<ng-template #editFeedItemControls>\n\t<div class=\"list-items feed-edit-items font-items pull-right\">\n\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t<div *ngIf=\"isMyFeed; then editThisFeedItem else reportThisFeedItem\"></div>\n\t\t<ng-template #editThisFeedItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"editFeedItem($event)\">Edit</div>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"deleteFeedItem();\"><span>Delete</span></div>\n\t\t</ng-template>\n\t\t<ng-template #reportThisFeedItem>\n\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"moveClick($event)\">Report</div>\n\t\t</ng-template>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"selectClick($event)\">Hide</div>\n\t\t<div class=\"cursor-pointer list-item\" (click)=\"defaultClick($event)\">Tag</div>\n\t</div>\n</ng-template>\n<div class=\"profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + item.profilepic + ')'}\">\n</div>\n<div class=\"full-name blue-fonts bold-fonts pull-left\">{{item.fullname}}</div>\n<div class=\"pull-left blue-fonts time-ago\"><span>&nbsp;posted&nbsp;</span>{{feedMoment}}</div>\n<div class=\"pull-right edit-feed hand-cursor\">\n\t<i aria-hidden=\"true\" class=\"fa fa-pencil-square-o blue-fonts\" id=\"editItem\" (click)=\"clickedInside($event);\"></i>\n</div>\n<div *ngIf=\"item.type === 'text'; then textFeed\"></div>\n<div *ngIf=\"item.type === 'image'; then imageFeed\"></div>\n<div *ngIf=\"item.type === 'music'; then musicFeed\"></div>\n<div *ngIf=\"item.type === 'checkin'; then checkinFeed\"></div>\n<ng-template #textFeed>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.post\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #imageFeed>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + item.filePath+ ')'}\"></div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #checkinFeed>\n\t<div class=\"posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + item.filePath+ ')'}\"></div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n<ng-template #musicFeed>\n\t<audio #musicPlayer  preload=\"none\" controls class=\"feed-music-player\">\n        <source src=\"{{item.filePath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.title\" [ngStyle]=\"{\n\t\t\t\t'font-weight':'bold', \n\t\t\t\t'font-size':'12px', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n\t<div class=\"feed-item colw100 inline-block no-outline auto-overflow pull-left\" [innerHTML]=\"item.description\" [ngStyle]=\"{\n\t\t\t\t'font-weight':' '+ item.fontWeight +'', \n\t\t\t\t'font-size':' '+ item.fontSize +'', 'font-family':' '+ item.fontFamily +'', 'font-style': ' '+ item.fontStyle +' ', 'text-decoration': ' '+ item.textDecoration +' ',\n\t\t\t\t'color':' '+ item.colorInfo +''}\" >\n\t</div>\n</ng-template>\n\n<div class=\"colw100 feed-controls\">\n\t<div class=\"pull-left blue-fonts inline-block cursor-pointer\" (click)=\"likeClick($event)\"> \n\t\t<div *ngIf=\"alreadyLiked === true; then thumbsDown else thumbsUp\"></div>\n\t\t<ng-template #thumbsUp>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<ng-template #thumbsDown>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<div *ngIf=\"likeCount > 0; then  likeItemsCount else likeItemCount\">\n  \t\t</div>\n  \t\t<ng-template #likeItemsCount>\n  \t\t\t<span>{{likeCount}}</span>\n  \t\t\t<span>Like</span>\n\t\t</ng-template>\n  \t\t<ng-template #likeItemCount>\n  \t\t\t<span>Like</span>\n\t\t</ng-template>\n\t</div>\t\n\t<div class=\"pull-left blue-fonts cursor-pointer\" (click)=\"loveClick($event)\">\n\t\t<div *ngIf=\"alreadyLoved === true; then lovedSymbol else loveSymbol\"></div>\n\t\t<ng-template #lovedSymbol>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-heart red-fonts\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<ng-template #loveSymbol>\n\t\t\t<span>\n\t\t\t\t<i class=\"fa fa-heart blue-fonts\"></i>\n\t\t\t</span>\n\t\t</ng-template>\n\t\t<div *ngIf=\"loveCount > 0; then  loveItemsCount else loveItemCount\">\n  \t\t</div>\n  \t\t<ng-template #loveItemsCount>\n  \t\t\t<span>{{loveCount}}</span>\n  \t\t\t<span>Love</span>\n\t\t</ng-template>\n  \t\t<ng-template #loveItemCount>\n  \t\t\t<span>Love</span>\n\t\t</ng-template>\n\t</div>\n\t<div class=\"pull-left cursor-pointer blue-fonts\" (click)=\"commentClick($event)\"><i class=\"fa fa-comment\"></i><span>Comment</span>\n\t</div>\n\t<ng-template [ngIf]=\"(isCommentsAdded && (feedItemCommentArr.length > 0))\">\n\t\t<div class=\"comment-box\">\n\t\t\t<div class=\"comment-box-items\" #commentBoxItems>\n\t\t\t\t<!--<div class=\"inline-block colw100\" *ngFor=\"let commentItem of feedItemCommentArr\">\n\t\t\t\t\t{{commentItem.commenttext}}\n\t\t\t\t</div>-->\n\t\t\t\t<app-commentitem *ngFor=\"let commentItem of feedItemCommentArr\" \n\t\t\t\t(refreshUpdatedComment)=\"refreshCommentItem($event)\" [item]=\"item\" [commentItem]=\"commentItem\" [userId]=\"userId\"  (refreshFeed)=\"refreshFeedItem($event)\" (editCurrentCommentItem)= \"editCurrentCommentItem($event)\">\n\t\t\t\t</app-commentitem>\n\n\t\t\t\t<ng-template [ngIf]=\"isViewMore\">\n\t\t\t\t\t<div class=\"colw100 inline-block\">\n\t\t\t\t\t\t<div class=\"view-more text-center hand-cursor blue-fonts\" (click)=\"viewMore($event)\">View More</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t\t\t<ng-template #loading>\n\t\t\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<div *ngIf=\"(!isViewMore && (total > limit)) then endResult\"></div>\n\t\t\t\t<ng-template #endResult>\n\t\t\t\t\t<div class=\"end-result blue-fonts text-center colw100 inline-block\">--- End Of Result ---</div>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n</div>\n<div class=\"pull-left colw100 inline-block\">\n\t<ng-template [ngIf]=\"addComment\">\n\t\t<app-story-box [action]=\"action\" [feedCommentItem]=\"item\" (refreshCommentItem)=\"refreshCommentItem($event)\"></app-story-box>\n\t</ng-template>\t\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/feeditem/feeditem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeditemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_data_feed_service__ = __webpack_require__("../../../../../src/app/services/data/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_comment_service__ = __webpack_require__("../../../../../src/app/services/data/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timeago_js__ = __webpack_require__("../../../../timeago.js/dist/timeago.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_timeago_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_timeago_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as moment from 'moment';



var FeeditemComponent = (function () {
    function FeeditemComponent(feedService, commentService) {
        this.feedService = feedService;
        this.commentService = commentService;
        this.refreshFeed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.editCurrentFeedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isEditFeedItem = false;
        this.isMyFeed = false;
        this.likeCount = 0;
        this.loveCount = 0;
        this.alreadyLiked = false;
        this.alreadyLoved = false;
        this.addComment = false;
        this.action = 'comment';
        this.isCommentsAdded = false;
        //private feedMoment: moment.Moment;
        this.feedItemCommentArr = [];
        this.skip = 0;
        this.limit = 3;
        this.total = 0;
        this.isLoading = false;
        this.isViewMore = false;
        this.containerHeight = 0;
        this.scrollHeight = 0;
    }
    FeeditemComponent.prototype.ngOnInit = function () {
        if (this.item.userid === this.userId) {
            this.isMyFeed = true;
        }
        this.feedActionCheck();
        var timeagoInstance = __WEBPACK_IMPORTED_MODULE_3_timeago_js___default()();
        this.feedMoment = timeagoInstance.format(this.item.created);
        //this.feedMoment = moment(this.item.created);
        this.likeCount = this.item.likeArr.length;
        this.loveCount = this.item.loveArr.length;
        this.fetchCommentsForCurrentFeedItem(this.item._id);
    };
    FeeditemComponent.prototype.clickedOutside = function ($event) {
        this.isEditFeedItem = false;
    };
    FeeditemComponent.prototype.ngAfterViewInit = function () {
    };
    FeeditemComponent.prototype.resetCommentParam = function () {
        this.skip = 0;
        this.limit = 3;
        this.total = 0;
        this.feedItemCommentArr = [];
    };
    FeeditemComponent.prototype.feedActionCheck = function () {
        var i = this.item.likeArr.indexOf(this.userId);
        if (i === -1) {
            this.alreadyLiked = false;
        }
        else {
            this.alreadyLiked = true;
        }
        var j = this.item.loveArr.indexOf(this.userId);
        if (j === -1) {
            this.alreadyLoved = false;
        }
        else {
            this.alreadyLoved = true;
        }
    };
    FeeditemComponent.prototype.editFeedItem = function (event) {
        this.editCurrentFeedItem.emit({ item: this.item });
    };
    FeeditemComponent.prototype.editCurrentCommentItem = function (event) {
        /*let self = this;
        self.postId = event.commentItem._id;
        self.commentType = event.commentItem.commenttype;
        self.commentText = event.commentItem.commenttext;
  
        if(self.commentType === 'text'){
          self.isAddPost = false;
          self.color = event.item.colorInfo;
          self.fontFamily = event.item.fontFamily;
          self.fontSize = event.item.fontSize;
          self.fontStyle = event.item.fontStyle;
          self.txtDeco = event.item.textDecoration;
          self.fontWeight = event.item.fontWeight;
          self.storyContent = event.item.post;
          }
        else if(self.fileType === 'image'){
          self.isPostImage = false;
            self.encodedImage = event.item.filePath;
            self.openAppModal();
          }else{
            self.postedMusicPath = event.item.filePath;
            self.musicPlayer.nativeElement.load();
            self.openAppModal();
          }*/
    };
    FeeditemComponent.prototype.clickedInside = function ($event) {
        if (this.isEditFeedItem) {
            this.isEditFeedItem = false;
        }
        else {
            this.isEditFeedItem = true;
        }
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    FeeditemComponent.prototype.deleteFeedItem = function () {
        var _this = this;
        var postObj = { 'id': this.item._id };
        this.feedService.deleteFeedItem(postObj).subscribe(function (data) { return _this.afterFeedItemDeleted(data); });
    };
    FeeditemComponent.prototype.afterFeedItemDeleted = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshFeed.emit('refresh');
        }
    };
    FeeditemComponent.prototype.refreshFeedItem = function ($event) {
        this.refreshFeed.emit('refresh');
    };
    FeeditemComponent.prototype.likeClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var likeArr = this.item.likeArr;
        var i = likeArr.indexOf(id);
        if (i === -1) {
            likeArr.push(id);
            this.alreadyLiked = true;
        }
        else {
            likeArr.splice(i, 1);
            this.alreadyLiked = false;
        }
        this.likeCount = likeArr.length;
        var postObj = { 'id': this.item._id, 'likearr': likeArr };
        this.feedService.updateLikeFeedChannel(postObj).subscribe(function (data) { return _this.afterUpdateLikeFeedChannel(data); });
    };
    FeeditemComponent.prototype.loveClick = function ($event) {
        var _this = this;
        var id = this.userId;
        var loveArr = this.item.loveArr;
        var i = loveArr.indexOf(id);
        if (i === -1) {
            loveArr.push(id);
            this.alreadyLoved = true;
        }
        else {
            loveArr.splice(i, 1);
            this.alreadyLoved = false;
        }
        this.loveCount = loveArr.length;
        var postObj = { 'id': this.item._id, 'lovearr': loveArr };
        this.feedService.updateLoveFeedChannel(postObj).subscribe(function (data) { return _this.afterUpdateLoveFeedChannel(data); });
    };
    FeeditemComponent.prototype.commentClick = function ($event) {
        if (this.addComment) {
            this.addComment = false;
        }
        else {
            this.addComment = true;
        }
    };
    FeeditemComponent.prototype.afterUpdateLikeFeedChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    FeeditemComponent.prototype.afterUpdateLoveFeedChannel = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            alert(result.message);
        }
    };
    FeeditemComponent.prototype.fetchCommentsForCurrentFeedItem = function (commentId) {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'feeditemid': commentId, 'skip': this.skip, 'limit': this.limit };
        this.commentService.fetchCommentsForCurrentFeedItem(postObj).subscribe(function (data) { return _this.afterFetchedCommentsForCurrentFeedItem(data); });
    };
    FeeditemComponent.prototype.afterFetchedCommentsForCurrentFeedItem = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            var data = result.infos;
            this.total = result.total;
            if (this.total > 0) {
                this.isCommentsAdded = true;
            }
            else {
                this.isCommentsAdded = false;
            }
            for (var i in data) {
                this.feedItemCommentArr.push(data[i]);
            }
            if (this.feedItemCommentArr.length < this.total) {
                this.isViewMore = true;
                /* this.containerHeight = this.commentBoxItems.nativeElement.offsetHeight;
                 this.scrollHeight = this.commentBoxItems.nativeElement.scrollHeight;
                 console.log(this.containerHeight+">>><<<<"+this.scrollHeight);*/
            }
            else {
                this.isViewMore = false;
            }
        }
        this.isLoading = false;
    };
    FeeditemComponent.prototype.refreshCommentItem = function (event) {
        this.resetCommentParam();
        if (event.data !== undefined) {
            this.fetchCommentsForCurrentFeedItem(event.data);
        }
        else {
            this.fetchCommentsForCurrentFeedItem(event.item);
        }
        this.addComment = false;
    };
    FeeditemComponent.prototype.viewMore = function (event) {
        this.skip = this.skip + this.limit;
        if (this.skip < this.total) {
            this.fetchCommentsForCurrentFeedItem(this.item._id);
            this.isViewMore = true;
        }
        else {
            this.isViewMore = false;
        }
    };
    return FeeditemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('item'),
    __metadata("design:type", Object)
], FeeditemComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('userId'),
    __metadata("design:type", Object)
], FeeditemComponent.prototype, "userId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FeeditemComponent.prototype, "refreshFeed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], FeeditemComponent.prototype, "editCurrentFeedItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('commentBoxItems'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], FeeditemComponent.prototype, "commentBoxItems", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FeeditemComponent.prototype, "clickedOutside", null);
FeeditemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-feeditem',
        template: __webpack_require__("../../../../../src/app/feeditem/feeditem.component.html"),
        styles: [__webpack_require__("../../../../../src/app/feeditem/feeditem.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_data_comment_service__["a" /* CommentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_data_feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_data_feed_service__["a" /* FeedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_comment_service__["a" /* CommentService */]) === "function" && _e || Object])
], FeeditemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=feeditem.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-row{\n\twidth: 300px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n.btn-group{\n\tmargin-top: 5px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\">\n\t<div class=\"profile-pic-medium pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-left\">{{fullName}}</div> \n\t<div class=\"row no-margin pull-right btn-group\">\n\t\t<button type=\"button\" class=\"btn btn-primary text-center save-btn\" (click)=\"confirm()\">\n\t\t\t<span class=\"pull-left\">Confirm</span>\n\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary text-center\" (click)=\"ignore()\">\n\t\t\t<i class=\"fa fa-times pull-left\" aria-hidden=\"true\"></i>\n\t\t\t<span class=\"pull-left\">Ignore</span>\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestPendingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendRequestPendingListComponent = (function () {
    function FriendRequestPendingListComponent(friendsService) {
        this.friendsService = friendsService;
        this.onFriendConfirmed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FriendRequestPendingListComponent.prototype.ngOnInit = function () {
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.friendId = this.item.username;
        this.userId = localStorage.getItem('currentUser');
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_1_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    FriendRequestPendingListComponent.prototype.confirm = function (event) {
        var _this = this;
        var postObj = { 'userid': this.userId, 'friendid': this.friendId };
        this.friendsService.confirmFriendReq(postObj).subscribe(function (data) { return _this.afterConfirmFriendReq(data); });
    };
    FriendRequestPendingListComponent.prototype.afterConfirmFriendReq = function (data) {
        if (data.status === 'confirmed') {
            this.onFriendConfirmed.emit({ data: data });
        }
    };
    return FriendRequestPendingListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FriendRequestPendingListComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FriendRequestPendingListComponent.prototype, "onFriendConfirmed", void 0);
FriendRequestPendingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friend-request-pending-list',
        template: __webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friend-request-pending-list/friend-request-pending-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _b || Object])
], FriendRequestPendingListComponent);

var _a, _b;
//# sourceMappingURL=friend-request-pending-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 575px) {\n\t.tile-menu-container{\n\t\tpadding: 15px !important;\n\t}\n\t.info-panel{\n\t\tmargin-bottom: 15px;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding tile-menu-container\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-tile-menu></app-tile-menu>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--<app-video></app-video>-->\n<!--<app-avchat></app-avchat>-->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    /*get loginData(): any {
        return this.routeinfoService.routeData;
    }
    set loginData(value: any) {
        this.routeinfoService.routeData = value;
    }*/
    function HomeComponent(router, route, routeinfoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.routeinfoService = routeinfoService;
        //@Output() onAppLoggedIn: EventEmitter<any> = new EventEmitter();
        //@Output() onAppLoggedOut: EventEmitter<any> = new EventEmitter();
        this.info = undefined;
        this.routeInfo = undefined;
        route.params.subscribe(function (val) {
            if (!localStorage.getItem('currentUser')) {
                //this.onAppLoggedOut.emit('logged Out');
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.router.navigate(['public']);
            }
            else {
                //this.onAppLoggedIn.emit('logged In');
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                localStorage.setItem('currentRoute', 'home');
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        /*if(localStorage.getItem('loginData')) {
            this.loginData = localStorage.getItem('loginData');
        }else{
            localStorage.setItem('loginData', this.loginData);
        }*/
    };
    HomeComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-cropper/image-cropper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCropperComponent = (function () {
    function ImageCropperComponent(elementRef) {
        this.elementRef = elementRef;
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 1000,
            y2: 1000
        };
        this.imageVisible = false;
        this.format = 'png';
        this.maintainAspectRatio = true;
        this.resizeToWidth = 128;
        this.imageCropped = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.imageLoaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loadImageFailed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ImageCropperComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: function (event) {
            if (event && event.target && event.target.files) {
                this.loadImage(event);
            }
        },
        enumerable: true,
        configurable: true
    });
    ImageCropperComponent.prototype.loadImage = function (event) {
        var _this = this;
        this.imageVisible = false;
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
        };
        var fileReader = new FileReader();
        var blank = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
        fileReader.onload = function (ev) {
            if (event.target.files[0].type === 'image/jpeg' ||
                event.target.files[0].type === 'image/jpg' ||
                event.target.files[0].type === 'image/png' ||
                event.target.files[0].type === 'image/gif') {
                _this.imgDataUrl = ev.target.result;
                _this.originalImage.src = ev.target.result;
                _this.imageLoaded.emit();
                setTimeout(function () {
                    var displayedImage = _this.elementRef.nativeElement.querySelector('.source-image');
                    var maxSize = displayedImage.offsetHeight > displayedImage.offsetWidth ? displayedImage.offsetWidth : displayedImage.offsetHeight;
                    _this.cropper.x1 = Math.floor(displayedImage.offsetWidth / 2 - maxSize / 2);
                    _this.cropper.y1 = Math.floor(displayedImage.offsetHeight / 2 - maxSize / 2);
                    _this.cropper.x2 = _this.cropper.x1 + maxSize;
                    _this.cropper.y2 = _this.cropper.y1 + maxSize;
                    _this.crop();
                    _this.imageVisible = true;
                }, 0);
            }
            else {
                _this.imgDataUrl = blank;
                _this.originalImage.src = blank;
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(event.target.files[0]);
    };
    ImageCropperComponent.prototype.startMove = function (event, moveType, position) {
        if (position === void 0) { position = null; }
        this.moveStart.active = true;
        this.moveStart.type = moveType;
        this.moveStart.position = position;
        this.moveStart.clientX = event.clientX;
        this.moveStart.clientY = event.clientY;
        this.moveStart.x1 = this.cropper.x1;
        this.moveStart.y1 = this.cropper.y1;
        this.moveStart.x2 = this.cropper.x2;
        this.moveStart.y2 = this.cropper.y2;
    };
    ImageCropperComponent.prototype.moveImg = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (this.moveStart.active) {
            var el = this.elementRef.nativeElement.querySelector('.source-image');
            this.maxSize.width = el.offsetWidth;
            this.maxSize.height = el.offsetHeight;
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCoordinates(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCoordinates(false);
            }
        }
    };
    ImageCropperComponent.prototype.checkCoordinates = function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    ImageCropperComponent.prototype.moveStop = function () {
        this.moveStart.active = false;
        this.crop();
    };
    ImageCropperComponent.prototype.move = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    ImageCropperComponent.prototype.resize = function (event) {
        var diffX = (event.clientX - this.moveStart.clientX);
        var diffY = (event.clientY - this.moveStart.clientY);
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    ImageCropperComponent.prototype.checkAspectRatio = function () {
        var overflowX = 0;
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y1 += overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1);
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += overflowY > overflowX ? overflowY : overflowX;
                    this.cropper.y2 -= overflowY > overflowX ? overflowY : overflowX;
                }
                break;
        }
    };
    ImageCropperComponent.prototype.crop = function () {
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage) {
            var ratio = this.originalSize.width / displayedImage.offsetWidth;
            var left = Math.round(this.cropper.x1 * ratio);
            var top = Math.round(this.cropper.y1 * ratio);
            var width = Math.round((this.cropper.x2 - this.cropper.x1) * ratio);
            var height = Math.round((this.cropper.y2 - this.cropper.y1) * ratio);
            var resizeRatio = this.resizeToWidth / width;
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = width * resizeRatio;
            cropCanvas.height = height * resizeRatio;
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, left, top, width, height, 0, 0, width * resizeRatio, height * resizeRatio);
                this.croppedImage = cropCanvas.toDataURL('image/' + this.format);
                if (this.croppedImage.length > 10) {
                    this.imageCropped.emit(this.croppedImage);
                }
            }
        }
    };
    return ImageCropperComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ImageCropperComponent.prototype, "imageChangedEvent", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "format", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "maintainAspectRatio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "resizeToWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "imageCropped", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "imageLoaded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ImageCropperComponent.prototype, "loadImageFailed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:mousemove', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touchmove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ImageCropperComponent.prototype, "moveImg", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:mouseup', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:touchend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ImageCropperComponent.prototype, "moveStop", null);
ImageCropperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-cropper',
        template: "\n    <div>\n    <img\n        *ngIf=\"imgDataUrl\"\n        [src]=\"imgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        class=\"source-image\"\n        style=\"width: 100%\"\n    />\n    <div class=\"cropper\"\n        [style.top.px]=\"cropper.y1\"\n        [style.left.px]=\"cropper.x1\"\n        [style.width.px]=\"cropper.x2 - cropper.x1\"\n        [style.height.px]=\"cropper.y2 - cropper.y1\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\">\n        <div\n            (mousedown)=\"startMove($event, 'move')\"\n            class=\"move\"\n        >&nbsp;</div>\n        <span\n            class=\"resize topleft\"\n            (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n        ></span>\n        <span\n            class=\"resize top\"\n        ></span>\n        <span\n            class=\"resize topright\"\n            (mousedown)=\"startMove($event, 'resize', 'topright')\"\n        ></span>\n        <span\n            class=\"resize right\"\n        ></span>\n        <span\n            class=\"resize bottomright\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n        ></span>\n        <span\n            class=\"resize bottom\"\n        ></span>\n        <span\n            class=\"resize bottomleft\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n        ></span>\n        <span\n            class=\"resize left\"\n        ></span>\n        <span\n            class=\"resize-bar top\"\n            (mousedown)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n            class=\"resize-bar right\"\n            (mousedown)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n            class=\"resize-bar bottom\"\n            (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n            class=\"resize-bar left\"\n            (mousedown)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
        styles: ["\n    :host {\n  display: block;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n:host > div {\n  position: relative;\n}\n:host .cropper {\n  position: absolute;\n  display: flex;\n  color: #53535C !important;\n  background: transparent !important;\n  outline-color: rgba(255, 255, 255, 0.3);\n  outline-width: 1000px;\n  outline-style: solid;\n}\n:host .cropper img {\n  width: inherit;\n  height: inherit;\n  cursor: move;\n}\n:host .cropper:after {\n  position: absolute;\n  content: '';\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  border: dashed 1px;\n  opacity: .75;\n  color: inherit;\n  z-index: 1;\n}\n:host .cropper .move {\n  width: 100%;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n:host .cropper .resize {\n  position: absolute;\n  background: #53535C;\n}\n:host .cropper .resize.topleft {\n  top: -5px;\n  left: -5px;\n  cursor: nw-resize;\n}\n:host .cropper .resize.top {\n  top: -5px;\n  left: calc(50% - 5px);\n  cursor: n-resize;\n}\n:host .cropper .resize.topright {\n  top: -5px;\n  right: 5px;\n  cursor: ne-resize;\n}\n:host .cropper .resize.right {\n  top: calc(50% - 5px);\n  right: 5px;\n  cursor: e-resize;\n}\n:host .cropper .resize.bottomright {\n  bottom: 5px;\n  right: 5px;\n  cursor: se-resize;\n}\n:host .cropper .resize.bottom {\n  bottom: 5px;\n  left: calc(50% - 5px);\n  cursor: s-resize;\n}\n:host .cropper .resize.bottomleft {\n  bottom: 5px;\n  left: -5px;\n  cursor: sw-resize;\n}\n:host .cropper .resize.left {\n  top: calc(50% - 5px);\n  left: -5px;\n  cursor: w-resize;\n}\n:host .cropper .resize:after {\n  position: absolute;\n  background: inherit;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  content: '';\n  width: 8px;\n  height: 8px;\n  margin: auto;\n  opacity: .85;\n  z-index: 1;\n}\n:host .cropper .resize-bar {\n  position: absolute;\n  z-index: 1;\n}\n:host .cropper .resize-bar.top {\n  top: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: n-resize;\n}\n:host .cropper .resize-bar.right {\n  top: 5px;\n  right: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: e-resize;\n}\n:host .cropper .resize-bar.bottom {\n  bottom: -5px;\n  left: 5px;\n  width: calc(100% - 10px);\n  height: 10px;\n  cursor: s-resize;\n}\n:host .cropper .resize-bar.left {\n  top: 5px;\n  left: -5px;\n  height: calc(100% - 10px);\n  width: 10px;\n  cursor: w-resize;\n}\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ImageCropperComponent);

var _a;
//# sourceMappingURL=image-cropper.component.js.map

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ad></app-ad>"

/***/ }),

/***/ "../../../../../src/app/info-panel/info-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoPanelComponent = (function () {
    function InfoPanelComponent() {
    }
    InfoPanelComponent.prototype.ngOnInit = function () {
    };
    return InfoPanelComponent;
}());
InfoPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info-panel',
        template: __webpack_require__("../../../../../src/app/info-panel/info-panel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/info-panel/info-panel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], InfoPanelComponent);

//# sourceMappingURL=info-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Login</h4></div>\n<form [formGroup]=\"loginForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"loginForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"loginForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showSignUp()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\">\n\t\t\t</i><span>Sign Up</span>\n\t\t</button>\n\t\t<button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" (click)=\"logIn()\">\n\t\t\t<span>Log in</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n\t\t<div class=\"server-msg text-center\">{{serverMessage}}</div>\n\t</div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__ = __webpack_require__("../../../../../src/app/services/shareobject/routeinfo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__ = __webpack_require__("../../../../../src/app/services/data/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    /* get loginData(): any {
       return this.routeinfoService.routeData;
     }
     set loginData(value: any) {
       this.routeinfoService.routeData = value;
     }*/
    function LoginComponent(formBuilder, registrationService, routeinfoService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.routeinfoService = routeinfoService;
        this.renderSignUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goHome = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.loginForm = this.formBuilder.group({
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3_app_services_validators_validation_service__["a" /* ValidationService */].emailValidator]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.ngAfterContentInit = function () {
    };
    LoginComponent.prototype.ngAfterContentChecked = function () {
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'email': this.loginForm.value.email,
                'password': this.loginForm.value.password };
            this.registrationService.logIn(postObj).subscribe(function (data) { return _this.afterLogIn(data); });
        }
    };
    LoginComponent.prototype.afterLogIn = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + '. Redirecting to Home.';
            localStorage.setItem('currentUser', result.info.username);
            //setTimeout(()=>{ this.goHome.emit(result.status);}, 4000)
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.goHome.emit(result);
        }
    };
    LoginComponent.prototype.showSignUp = function () {
        this.renderSignUp.emit('complete');
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "renderSignUp", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_registration_service__["a" /* RegistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_routeinfo_service__["a" /* RouteinfoService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/market/market.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".market-content{\n    padding: 5px !important;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;    \n}\n\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\n.market-controlbar{\n    border: 1px solid #2b90d9;\n    box-sizing: border-box;\n    display: inline-block;\n}\n\n.market-controlbar > div{\n    padding: 0px 6px;\n    font-size: 12px;\n    border-right: 1px solid #2b90d9;\n    line-height: 17px;\n    color: #2b90d9;\n}\n\n.total-count, .sort-params{\n    padding: 4px 6px !important;\n}\n.market-sort-items{\n    position: absolute;\n    width: 117px !important;\n    margin-left: 135px;\n    margin-top: 36px !important;\n    padding: 0px !important;\n}\n.market-sort-items .arrow-up{\n    left: 40px;\n    margin-top: -11px;\n}\n.sort-params{\n    min-width: 117px;\n}\n.sort-params:hover, .grid-icon:hover, .list-icon:hover, .sort-toggle:hover, .add-item:hover{\n    background: #2b90d9;\n    color: #fff !important;\n    cursor: pointer;\n}\n.add-item{\n    color: #2b90d9;\n    padding: 0px 6px;\n    border: 1px solid #2b90d9;\n    color: #2b90d9;\n    height: 25px;\n    margin-left: 5px;\n    border-radius: 2px;\n    font-size: 14px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/market/market.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #marketContent class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9 no-padding opaque-bg market-content\" \n\t\t[ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" \n\t\t(marketScrollEnd)=\"onMarketScrollEnd($event)\" #scrollMe>\n\t\t\t<div class=\"market-controlbar colw100\">\n\t\t\t\t<div class=\"total-count pull-left\">0 Results</div>\n\t\t\t\t<div class=\"grid-icon pull-left\"><i class=\"fa fa-th-large fa-2x\"></i></div>\n\t\t\t\t<div class=\"list-icon pull-left\"><i class=\"fa fa-list-ul fa-2x\"></i></div>\n\t\t\t\t<div class=\"sort-params pull-left\" (click)=\"clickedInside($event);\">\n\t\t\t\t\t<span>Sort By:&nbsp;{{sortSelection}}</span>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"isMarketSortItems; then marketSortItemControls\"></div>\n\t\t\t\t\t\t<ng-template #marketSortItemControls>\n\t\t\t\t\t\t\t<div class=\"list-items market-sort-items pull-right\">\n\t\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Price</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Name</div>\n\t\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"sortItemClick($event)\">Popularity</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t<div class=\"sort-toggle pull-left\"><i class=\"fa fa-random fa-2x\"></i></div>\n\t\t\t</div>\n\t\t\t<div class=\"market-searchbar colw100\">\n\t\t\t\t<div class=\"market-search-box pull-left\">\n\t                <div class=\"pull-left\">\n\t                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n\t                </div>\n\t                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n\t            </div>\n\t            <div class=\"pull-left add-item\" (click)=\"addItemToMarket($event)\">\n\t            \t<i class=\"fa fa-plus\"></i>\n\t            </div>\n\t\t\t</div>\n\t\t\t<div class=\"market-content\">\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<app-modal [modalTitle]=\"'Add Product'\" [blocking]='false' [modalId]='modalId' #addProductModal id=\"productModal\" [userId]=\"userId\">\n\t<div class=\"add-product-content\">\n\t\t<div class=\"colw100 inline-block\">\n\t\t\t<app-add-item></app-add-item>\n\t\t</div>\n\t</div>\n</app-modal>"

/***/ }),

/***/ "../../../../../src/app/market/market.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketComponent = (function () {
    function MarketComponent(route, router, modalService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.onAppLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAppLoggedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.marketScrollEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.overFlowY = 'visible';
        this.isMarketSortItems = false;
        this.sortSelection = "Relevance";
        this.modalId = 'marketModal';
        this.screenHeight = window.screen.height - 175;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'market/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    MarketComponent.prototype.ngOnInit = function () {
        /*if(localStorage.getItem('loginData')) {
            this.loginData = localStorage.getItem('loginData');
        }else{
            localStorage.setItem('loginData', this.loginData);
        }*/
    };
    MarketComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    MarketComponent.prototype.onScroll = function (event) {
        var element = this.myScrollContainer.nativeElement;
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            //this.feedScrollEnd.emit('scroll end');
            // this.storyBoxComponent.onFeedScrollEnd();
        }
    };
    MarketComponent.prototype.clickedOutside = function ($event) {
        this.isMarketSortItems = false;
    };
    MarketComponent.prototype.clickedInside = function (event) {
        event.preventDefault();
        event.stopPropagation(); // <- that will stop propagation on lower layers
        if (this.isMarketSortItems) {
            this.isMarketSortItems = false;
        }
        else {
            this.isMarketSortItems = true;
        }
    };
    MarketComponent.prototype.sortItemClick = function (event) {
        this.sortSelection = event.target.innerText;
        this.isMarketSortItems = false;
    };
    MarketComponent.prototype.addItemToMarket = function (event) {
        this.openAppModal();
    };
    MarketComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
    };
    return MarketComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MarketComponent.prototype, "myScrollContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], MarketComponent.prototype, "onAppLoggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], MarketComponent.prototype, "onAppLoggedOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], MarketComponent.prototype, "marketScrollEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MarketComponent.prototype, "onScroll", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MarketComponent.prototype, "clickedOutside", null);
MarketComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-market',
        template: __webpack_require__("../../../../../src/app/market/market.component.html"),
        styles: [__webpack_require__("../../../../../src/app/market/market.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */]) === "function" && _g || Object])
], MarketComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=market.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-overlay { background-color: rgba(0, 0, 0, 0.4); bottom: 0; left: 0; position: fixed; right: 0; top: 0; z-index: 1000; } .closed .modal { top: -100%; display: none;} .closed .modal-overlay { display: none; } .modal {  padding: 5px; display: block; box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12); left: calc(50% - 300px); max-height: calc(100% - 10em); overflow-y: auto; position: fixed; top: 5em; width: 640px; z-index: 1100; transition: all .5s ease; } .modal .title { background-color: #2b90d9; text-align: center; color: white; line-height: 30px; } .modal .title .right-align { position: absolute; right: 9px; } .modal .title .right-align, .modal .title .right-align i { line-height: 30px; } .modal .title .right-align:hover { cursor: pointer; -webkit-transform: scale(1.1); transform: scale(1.1); } .modal .body { padding: 0em; } \n@media only screen and (max-width: 768px) {\n\t.modal[_ngcontent-c11] {width:90%;left: 5%;}\n\t}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'closed': !isOpen}\">\n\t<div class=\"modal-overlay\" (click)=\"close(true)\"></div>\n\t<div class=\"modal opaque-bg\">\n\t  <div class=\"title\" *ngIf=\"modalTitle\">\n\t    <span class=\"title-text\">{{ modalTitle }}</span>\n\t    <span class=\"right-align\" (click)=\"close(true)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></span>\n\t  </div>\n\t  <div class=\"body\">\n\t    <ng-content></ng-content>\n\t  </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.onModalClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.blocking = false;
        this.isOpen = false;
    }
    ModalComponent.prototype.onMouseEnter = function (event) {
        this.keyup(event);
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.modalService.registerModal(this);
    };
    ModalComponent.prototype.close = function (checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        this.onModalClose.emit('close');
        this.modalService.close(this.modalId, checkBlocking);
    };
    ModalComponent.prototype.keyup = function (event) {
        if (event.keyCode === 27) {
            this.modalService.close(this.modalId, true);
        }
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ModalComponent.prototype, "onModalClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "blocking", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keyup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ModalComponent.prototype, "onMouseEnter", null);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")],
        template: __webpack_require__("../../../../../src/app/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_service__["a" /* ModalService */]) === "function" && _b || Object])
], ModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.registerModal = function (newModal) {
        var modal = this.findModal(newModal.modalId);
        // Delete existing to replace the modal
        if (modal) {
            this.modals.splice(this.modals.indexOf(modal));
        }
        this.modals.push(newModal);
    };
    ModalService.prototype.open = function (modalId) {
        var modal = this.findModal(modalId);
        if (modal) {
            modal.isOpen = true;
        }
    };
    ModalService.prototype.close = function (modalId, checkBlocking) {
        if (checkBlocking === void 0) { checkBlocking = false; }
        var modal = this.findModal(modalId);
        if (modal) {
            if (checkBlocking && modal.blocking) {
                return;
            }
            modal.isOpen = false;
        }
        switch (modalId) {
            case 'avModal':
                this.triggerWindowEvent('onAVModalClose', { 'event': 'onAVModalClose', 'msgObj': {} });
                break;
            default:
                console.log('all good');
        }
    };
    ModalService.prototype.findModal = function (modalId) {
        for (var _i = 0, _a = this.modals; _i < _a.length; _i++) {
            var modal = _a[_i];
            if (modal.modalId === modalId) {
                return modal;
            }
        }
        return null;
    };
    ModalService.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    return ModalService;
}());
ModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ModalService);

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/music-list/music-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music-list/music-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isShow\">\n    <div class=\"show-controls hand-cursor\" title=\"show playlist\" (click)=\"showControls($event)\">\n        <i class=\"fa fa-eye \"></i>\n    </div>\n</ng-container>\n<ng-container *ngIf=\"isShow\">\n    <div class=\"hide-controls hand-cursor\" title=\"hide playlist\" (click)=\"hideControls($event)\">\n        <i class=\"fa fa-eye-slash\"></i>\n    </div>\n    <div class=\"player-controls\" \n    \tstyle=\"position: absolute;\n        right: 10px;\n        top: 10px;\n        width: 150px;\">\n        <div class=\"pull-left control-item\" (click)=\"replayMusiic($event)\">\n            <i class=\"fa fa-repeat\"></i>\n        </div>\n    \t<div class=\"pull-left control-item\" (click)=\"playPreviousItem($event)\">\n    \t\t<i class=\"fa fa-step-backward\"></i>\n    \t</div>\n        <div *ngIf=\"isPlaying ; then pauseBtn\"></div>\n        <ng-template #pauseBtn>\n            <div class=\"pull-left control-item\" (click)=\"pauseMusiic($event)\">\n                <i class=\"fa fa-stop\"></i>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isPause; then playBtn\"></div>\n        <ng-template #playBtn>\n    \t   <div class=\"pull-left control-item\" (click)=\"resumeMusiic($event)\">\n                <i class=\"fa fa-play\"></i>\n            </div>\n        </ng-template>\n    \t<div class=\"pull-left control-item\" (click)=\"playNextItem($event)\"><i class=\"fa fa-step-forward\"></i></div>\n    </div>\n    <div #musicPlayList classs=\"music-play-list\" \n    \tstyle=\"background-color: rgba(43, 144, 217, 0);\n        \tdisplay: inline-block;\n        \tbox-sizing: border-box;\n        \twidth: 150px;\n            max-height: 245px;\n        \ttext-overflow: ellipsis;\n        \toverflow-y: auto;\n        \ttext-align: left;\n        \tborder-bottom: none;\n        \tposition: absolute;\n        \tborder-bottom: 1px solid #fff;\n        \ttop: 40px;\n        \tright: 15px;\">\n    \t<div class=\"music-list\"  *ngFor=\"let item of musicSource; let indx = index\">\n    \t\t<div class=\"row no-margin pull-left inline-block hand-cursor red-highlight item-row music-item\" (click)=\"musicListItemClick($event, item, indx)\" [attr.id]=\"item.actualAudio\" [class.item-highlight]=\"item.actualAudio === actualAudio\"\n    \t\t\tstyle=\"border: 1px solid #fff; border-bottom: none;\">\n    \t\t\t<div class=\"row no-margin white-fonts music-name pull-right\">\n                    <span style=\"width: 12px; margin-left: 2px; margin-right: 4px;\">{{indx+1}}&nbsp;<span>-</span></span>\n    \t\t\t\t<span style=\"white-space: nowrap;\n        \t\t\t\ttext-overflow: ellipsis;\n        \t\t\t\toverflow: hidden;\n        \t\t\t\tdisplay: block;\n        \t\t\t\tpadding: 0px 4px;\n        \t\t\t\twidth: 110px;\n                        margin-left: 3px;\">\n        \t\t\t\t{{item.actualAudio}}\n    \t    \t\t</span>\n                    <span style=\"width: 12px; margin-left: 3px; margin-right: 2px;\"><i aria-hidden=\"true\" class=\"fa fa-music white-fonts\"></i></span>\n\n    \t    \t</div> \n    \t\t</div>\n    \t</div>\n    </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/music-list/music-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicListComponent = (function () {
    function MusicListComponent(el) {
        this.playMusic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pauseMusic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resumeMusic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.replayMusic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isPlaying = true;
        this.isPause = false;
        this.itemCount = 0;
        this.musicListClick = false;
        this.isShow = true;
        this.el = el;
    }
    MusicListComponent.prototype.ngOnInit = function () {
    };
    MusicListComponent.prototype.ngAfterViewInit = function () {
        var cutOffHeight = 100;
        var playListHeight = this.musicPlayList.nativeElement.offsetHeight;
        var hostElem = this.el.nativeElement;
        var playListContentHeight = hostElem.parentNode.offsetHeight;
        if (playListHeight >= (playListContentHeight - cutOffHeight)) {
            playListHeight = playListContentHeight - cutOffHeight;
            this.musicPlayList.nativeElement.style.height = playListHeight + 'px';
        }
        //this.actualAudio = this.musicSource[0].actualAudio;
        this.addEventListeners();
    };
    MusicListComponent.prototype.removeEventListeners = function () {
        //let self = this;
        if (document.removeEventListener) {
            //document.removeEventListener('playNext', this.playNextItem);
            //document.removeEventListener('onPauseAudio', this.onPauseAudio);
            //document.removeEventListener('onPlayAudio', this.onPlayAudio);
        }
    };
    MusicListComponent.prototype.addEventListeners = function () {
        //document.addEventListener('playNext', this.playNextItem);
        //document.addEventListener('onPauseAudio', this.onPauseAudio);
        //document.addEventListener('onPlayAudio', this.onPlayAudio);
    };
    MusicListComponent.prototype.onPlayAudio = function (event) {
        //if(this.musicListClick === false){
        //}
        this.isPlaying = true;
        this.isPause = false;
        this.musicListClick = false;
    };
    MusicListComponent.prototype.onPauseAudio = function (event) {
        this.musicListClick = false;
        this.isPlaying = false;
        this.isPause = true;
    };
    MusicListComponent.prototype.musicListItemClick = function (event, item, indx) {
        this.musicListClick = true;
        this.playMusic.emit(item);
        this.isPlaying = true;
        this.isPause = false;
        this.actualAudio = item.actualAudio;
        this.itemCount = Number(indx);
    };
    MusicListComponent.prototype.pauseMusiic = function (event) {
        this.musicListClick = false;
        this.pauseMusic.emit('pause');
        this.isPause = true;
        this.isPlaying = false;
    };
    MusicListComponent.prototype.resumeMusiic = function (event) {
        this.musicListClick = false;
        this.resumeMusic.emit('resume');
        this.isPause = false;
        this.isPlaying = true;
    };
    MusicListComponent.prototype.replayMusiic = function (event) {
        this.replayMusic.emit('replay');
    };
    MusicListComponent.prototype.playNextItem = function (event) {
        this.musicListClick = false;
        if (this.itemCount < (this.musicSource.length - 1)) {
            this.itemCount++;
        }
        else {
            this.itemCount = 0;
        }
        var item = this.musicSource[this.itemCount];
        this.musicListItemClick(null, item, this.itemCount);
        this.actualAudio = item.actualAudio;
        this.smoothItemScroll();
    };
    MusicListComponent.prototype.playPreviousItem = function (event) {
        this.musicListClick = false;
        if (this.itemCount >= 1) {
            this.itemCount--;
        }
        else {
            this.itemCount = this.musicSource.length - 1;
        }
        var item = this.musicSource[this.itemCount];
        this.musicListItemClick(null, item, this.itemCount);
        this.actualAudio = item.actualAudio;
        this.smoothItemScroll();
    };
    MusicListComponent.prototype.smoothItemScroll = function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.position = "fixed";
        var element = document.getElementById(this.actualAudio);
        element.scrollIntoView({ behavior: "smooth" });
        body.style.position = "relative";
    };
    MusicListComponent.prototype.hideControls = function (event) {
        this.isShow = false;
    };
    MusicListComponent.prototype.showControls = function (event) {
        this.isShow = true;
    };
    return MusicListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('musicPlayList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MusicListComponent.prototype, "musicPlayList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('musicSource'),
    __metadata("design:type", Object)
], MusicListComponent.prototype, "musicSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('actualAudio'),
    __metadata("design:type", Object)
], MusicListComponent.prototype, "actualAudio", void 0);
MusicListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-music-list',
        template: __webpack_require__("../../../../../src/app/music-list/music-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/music-list/music-list.component.css")],
        host: {
            '(document:playNext)': 'playNextItem($event)',
            '(document:onPlayAudio)': 'onPlayAudio($event)',
            '(document:onPauseAudio)': 'onPauseAudio($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], MusicListComponent);

var _a, _b;
//# sourceMappingURL=music-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/music-player/music-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#audio{\n\twidth: 100%;\n}\n.audio-content{\n\tpadding: 15px 0px;\n}\n\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n.file-input-container{\n\tdisplay: none;\n}\n#progressBar{\n\twidth: 250px;\n}\n.under-line{\n\ttext-decoration: underline;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\ntextarea.form-control{\n\theight: 100px !important;\n}\napp-audio-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n.music-play-list{\n    max-height: 314px;\n    width: 50px;\n    background: #ff0000;\n    display: inline-block;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 275px;\n    background-color: #2b90d9;\n}\n.audio-container, #canvas{\n    max-height: 314px;\n    width: 100%;\n    background: #000;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/music-player/music-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-container\">\n    <canvas id='canvas'></canvas>\n    <audio #audioPlayer id=\"audio\"  preload=\"none\" controls>\n        <source src=\"{{mp3AudioPath}}\" type=\"audio/mp3\">\n        <p>Your browser does not support the HTML5 Audio element.</p>\n    </audio>\n    <div #musicList></div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"audio-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-music blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Music</span>\n        </div>\n    </div>\n    <div *ngIf=\"isAudioAlbum ; then albumAudioUploader\"></div>\n    <ng-template #albumAudioUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"audioUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"audioGroup\">\n                            <input type=\"file\" accept=\"audio/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Music</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The music will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createAudioAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isAudioAlbum ; then audioAlbum\"></div>\n        <ng-template #audioAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div class=\"album-icons\">\n                <app-audio-album-icon class=\"pull-left\" *ngFor=\"let item of audioAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditAudioAlbum)=\"editAudioAlbum($event)\" \n                (onShowAudioList)=\"showAudioList($event)\"></app-audio-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumAudio ; then albumAudio\"></div>\n        <ng-template #albumAudio >\n            <div class=\"audio-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">\n                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n                    <span>{{albumTitle}}</span>\n                    </div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"audio-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"audioUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"audioGroup\">\n                            <input type=\"file\" accept=\"audio/*\" class=\"audio-input\" name=\"uploadfile\" #audioInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"audioInput.value = ''; audioInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Audios.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The audio will be uploaded to this album.</span>\n                </div>\n            </div>\n            <div class=\"album-icons\">\n                <app-audio-icon  class=\"pull-left\" *ngFor=\"let item of audioList | audioSearch : audioText;  let indx = index\" [item]=\"item\" (click)=\"playAudio(item, indx)\"></app-audio-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/music-player/music-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_audio_service__ = __webpack_require__("../../../../../src/app/services/data/audio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__music_list_music_list_component__ = __webpack_require__("../../../../../src/app/music-list/music-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MusicPlayerComponent = (function () {
    function MusicPlayerComponent(formBuilder, audioService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.audioService = audioService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isAudioAlbum = true;
        this.isAlbumAudio = false;
        this.mp3AudioPath = '';
        this.posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
        this.musicSource = [];
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.audioUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.audioGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]],
            'albumDesc': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]]
        });
        this.fetchAudioAlbumInfo();
    }
    MusicPlayerComponent.prototype.ngOnInit = function () {
        this.triggerWindowEvent('setSpectrum', { 'event': 'setSpectrum', 'msgObj': {} });
    };
    MusicPlayerComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        var userId = this.userId;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            uploadAudio();
        }
        function uploadAudio() {
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if (!directUpload) {
                formData.append('album', self.audioInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadAudio', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isAudioAlbum) {
                    self.fetchAudioAlbumInfo();
                }
                else {
                    self.fetchAlbumAudioInfo();
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    MusicPlayerComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.audioService.createAudioAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    MusicPlayerComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchAudioAlbumInfo();
        }
    };
    MusicPlayerComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.audioService.updateAudioAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    MusicPlayerComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchAudioAlbumInfo();
        }
    };
    MusicPlayerComponent.prototype.createAudioAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    MusicPlayerComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    MusicPlayerComponent.prototype.fetchAudioAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.audioService.fetchAudioAlbumInfo(postObj).subscribe(function (data) { return _this.afterAudioAbumInfo(data); });
    };
    MusicPlayerComponent.prototype.fetchAlbumAudioInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.audioService.fetchAlbumAudioInfo(postObj).subscribe(function (data) { return _this.afterAbumAudioInfo(data); });
    };
    MusicPlayerComponent.prototype.afterAudioAbumInfo = function (result) {
        this.audioAlbumList = result;
        this.musicSource = [];
        //for(var i in this.audioAlbumList[0].audiosList){
        this.musicSource = this.audioAlbumList[0].audiosList;
        //}
        this.createMusicList(this.musicSource);
        this.playAudio(this.audioAlbumList[0].audiosList[0], -1);
    };
    MusicPlayerComponent.prototype.afterAbumAudioInfo = function (result) {
        this.audioList = result[0].audiosList;
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    MusicPlayerComponent.prototype.editAudioAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of audios under a particular audio album
    MusicPlayerComponent.prototype.showAudioList = function (event) {
        this.audioInfo = event.data;
        this.isAudioAlbum = false;
        this.isAlbumAudio = true;
        this.audioList = this.audioInfo.audiosList;
        this.albumTitle = this.audioInfo.title;
        this.musicSource = [];
        //for(var i in this.audioList){
        this.musicSource = this.audioList;
        //}
        this.createMusicList(this.musicSource);
        //this.fetchAlbumAudioInfo();
        this.playAudio(this.audioList[0], -1);
    };
    MusicPlayerComponent.prototype.goToMyAlbum = function (event) {
        this.isAudioAlbum = true;
        this.isAlbumAudio = false;
        this.fetchAudioAlbumInfo();
    };
    MusicPlayerComponent.prototype.pauseAudio = function () {
        var _this = this;
        var playPromise = this.audioPlayer.nativeElement.play();
        if (playPromise !== undefined) {
            playPromise.then(function (_) {
                // Automatic playback started!
                // Show playing UI.
                // We can now safely pause video...
                var isPlaying = _this.audioPlayer.nativeElement.currentTime > 0 && !_this.audioPlayer.nativeElement.paused && !_this.audioPlayer.nativeElement.ended
                    && _this.audioPlayer.nativeElement.readyState > 2;
                if (isPlaying) {
                    //this.audioPlayer.nativeElement.pause();
                    _this.audioPlayer.nativeElement.pause();
                }
            })
                .catch(function (error) {
                // Auto-play was prevented
                // Show paused UI.
            });
        }
    };
    MusicPlayerComponent.prototype.playAudio = function (data, indx) {
        console.log(data);
        this.posterPath = data.poster;
        this.pauseAudio();
        this.mp3AudioPath = data.actualAudio;
        try {
            this.musicListRef.instance.actualAudio = this.mp3AudioPath;
            this.musicListRef.instance.itemCount = indx;
            if (indx === -1) {
                this.musicListRef.instance.itemCount = 0;
            }
            if (indx !== -1) {
                //this.smoothItemScroll(this.mp3AudioPath);
                this.musicListRef.instance.smoothItemScroll();
            }
            this.audioPlayer.nativeElement.load();
            this.audioPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
        //this.audioPlayer.nativeElement.play();
    };
    /*private smoothItemScroll(itemName){
        let element = document.getElementById(itemName);
        element.scrollIntoView({behavior:"smooth"});
    }*/
    MusicPlayerComponent.prototype.createMusicList = function (musicSource) {
        var _this = this;
        if (this.musicListRef) {
            this.musicListRef.instance.playMusic.unsubscribe(function (data) { return _this.playMusic(data); });
            this.musicListRef.instance.pauseMusic.unsubscribe(function (data) { return _this.pauseMusic(data); });
            this.musicListRef.instance.resumeMusic.unsubscribe(function (data) { return _this.resumeMusic(data); });
            //this.audioPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
            this.musicListRef.instance.replayMusic.unsubscribe(function (data) { return _this.replayMusic(data); });
            this.musicListRef.instance.removeEventListeners();
            this.musicListRef.instance.musicSource = [];
            this.musicListRef.instance.actualAudio = '';
            this.musicListRef.destroy();
        }
        this.musicListComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__music_list_music_list_component__["a" /* MusicListComponent */]);
        this.musicListRef = this.musicList.createComponent(this.musicListComponent);
        this.musicListRef.instance.musicSource = musicSource;
        this.musicListRef.instance.actualAudio = musicSource[0].actualAudio;
        this.musicListRef.instance.playMusic.subscribe(function (data) { return _this.playMusic(data); });
        this.musicListRef.instance.pauseMusic.subscribe(function (data) { return _this.pauseMusic(data); });
        this.musicListRef.instance.resumeMusic.subscribe(function (data) { return _this.resumeMusic(data); });
        this.musicListRef.instance.replayMusic.subscribe(function (data) { return _this.replayMusic(data); });
        //this.audioPlayer.nativeElement.addEventListener("ended", this.playNextItem());
    };
    MusicPlayerComponent.prototype.playNextItem = function () {
        alert('audio ended');
    };
    MusicPlayerComponent.prototype.replayMusic = function (data) {
        this.audioPlayer.nativeElement.currentTime = 0;
        //this.audioPlayer.nativeElement.play();	
    };
    MusicPlayerComponent.prototype.playMusic = function (data) {
        this.pauseAudio();
        this.mp3AudioPath = data.actualAudio;
        try {
            this.audioPlayer.nativeElement.load();
            this.audioPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    MusicPlayerComponent.prototype.pauseMusic = function (data) {
        this.pauseAudio();
    };
    MusicPlayerComponent.prototype.resumeMusic = function (data) {
        this.audioPlayer.nativeElement.play();
    };
    MusicPlayerComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    return MusicPlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('audioPlayer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MusicPlayerComponent.prototype, "audioPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('musicList', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _b || Object)
], MusicPlayerComponent.prototype, "musicList", void 0);
MusicPlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-music-player',
        template: __webpack_require__("../../../../../src/app/music-player/music-player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/music-player/music-player.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_audio_service__["a" /* AudioService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_audio_service__["a" /* AudioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_audio_service__["a" /* AudioService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _e || Object])
], MusicPlayerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=music-player.component.js.map

/***/ }),

/***/ "../../../../../src/app/photos-album-icon/photos-album-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photos-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.photos-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}\n.photos-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}\n.photos-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos-album-icon/photos-album-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-icon-container\">\n\t<div class=\"colw100 photos-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editPhotosAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showPhotosList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.photosList.length}}</span><span> photo</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/photos-album-icon/photos-album-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosAlbumIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosAlbumIconComponent = (function () {
    function PhotosAlbumIconComponent() {
        this.onEditPhotosAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onShowPhotosList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PhotosAlbumIconComponent.prototype.ngOnInit = function () {
    };
    PhotosAlbumIconComponent.prototype.editPhotosAlbum = function (event) {
        this.onEditPhotosAlbum.emit({ data: this.item });
    };
    PhotosAlbumIconComponent.prototype.showPhotosList = function (event) {
        this.onShowPhotosList.emit({ data: this.item });
    };
    return PhotosAlbumIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PhotosAlbumIconComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PhotosAlbumIconComponent.prototype, "onEditPhotosAlbum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], PhotosAlbumIconComponent.prototype, "onShowPhotosList", void 0);
PhotosAlbumIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos-album-icon',
        template: __webpack_require__("../../../../../src/app/photos-album-icon/photos-album-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos-album-icon/photos-album-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhotosAlbumIconComponent);

var _a, _b;
//# sourceMappingURL=photos-album-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/photos-carousel/photos-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos-carousel/photos-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel [sources]=\"imageSource\" [config]=\"config\"></carousel>"

/***/ }),

/***/ "../../../../../src/app/photos-carousel/photos-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_carouseldata_service__ = __webpack_require__("../../../../../src/app/services/shareobject/carouseldata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotosCarouselComponent = (function () {
    function PhotosCarouselComponent(carouseldataService) {
        //this.carouselImages = this.imageSources;
        this.carouseldataService = carouseldataService;
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__["a" /* AnimationConfig */].SLIDE,
            autoplay: true,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
    PhotosCarouselComponent.prototype.ngOnInit = function () {
        //this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
        //this.imageSource = ["photo/original/photo_1517345597409.png","photo/original/photo_1517346068877.png","photo/original/photo_1517346220159.png","photo/original/photo_1517346343644.png"];
    };
    return PhotosCarouselComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('imageSource'),
    __metadata("design:type", Object)
], PhotosCarouselComponent.prototype, "imageSource", void 0);
PhotosCarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos-carousel',
        template: __webpack_require__("../../../../../src/app/photos-carousel/photos-carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos-carousel/photos-carousel.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_carouseldata_service__["a" /* CarouseldataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_carouseldata_service__["a" /* CarouseldataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_shareobject_carouseldata_service__["a" /* CarouseldataService */]) === "function" && _a || Object])
], PhotosCarouselComponent);

var _a;
//# sourceMappingURL=photos-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/photos-icon/photos-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photos-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n    background-color: #000 !important;\n}\n.photos-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.photos-icon:hover{\n\tborder: 1px solid #fff;\n}\n.photos-icon:hover i{\n\tcolor: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos-icon/photos-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<!--i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/photos-icon/photos-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosIconComponent = (function () {
    function PhotosIconComponent() {
        this.posterURL = '';
    }
    PhotosIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.actualPhoto;
    };
    return PhotosIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PhotosIconComponent.prototype, "item", void 0);
PhotosIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos-icon',
        template: __webpack_require__("../../../../../src/app/photos-icon/photos-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos-icon/photos-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhotosIconComponent);

//# sourceMappingURL=photos-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photos-content{\n\tpadding: 15px 0px;\n}\n\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n.file-input-container{\n\tdisplay: none;\n}\n#progressBar{\n\twidth: 250px;\n}\n.under-line{\n\ttext-decoration: underline;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\ntextarea.form-control{\n\theight: 100px !important;\n}\napp-photos-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n.photos-container{\n    max-height: 314px;\n    width: 100%;\n    background: #000;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photos-container\">\n    <div style=\"width: 100%; height: 314px\">\n        <div #photosCarousel></div>\n\t</div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"photos-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-music blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Photos</span>\n        </div>\n    </div>\n    <div *ngIf=\"isPhotosAlbum ; then albumPhotosUploader\"></div>\n    <ng-template #albumPhotosUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"photosUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"photosGroup\">\n                            <input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"imageFileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Photo</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The music will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createPhotosAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isPhotosAlbum ; then photosAlbum\"></div>\n        <ng-template #photosAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div class=\"album-icons\">\n                <app-photos-album-icon class=\"pull-left\" *ngFor=\"let item of photosAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditPhotosAlbum)=\"editPhotosAlbum($event)\" \n                (onShowPhotosList)=\"showPhotosList($event)\"></app-photos-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumPhotos ; then albumPhotos\"></div>\n        <ng-template #albumPhotos >\n            <div class=\"photos-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">{{albumTitle}}</div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"photos-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"photosUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"photosGroup\">\n                            <input type=\"file\" accept=\"image/*\" class=\"photos-input\" name=\"uploadfile\" #photosInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"photosInput.value = ''; photosInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Photos.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The photo will be uploaded to this album.</span>\n                </div>\n            </div>\n            <div class=\"album-icons\">\n                <app-photos-icon (click)=\"playAudio(item)\" class=\"pull-left\" *ngFor=\"let item of photosList | photosSearch : photosText\" [item]=\"item\"></app-photos-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_photos_service__ = __webpack_require__("../../../../../src/app/services/data/photos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photos_carousel_photos_carousel_component__ = __webpack_require__("../../../../../src/app/photos-carousel/photos-carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotosComponent = (function () {
    function PhotosComponent(formBuilder, photosService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.photosService = photosService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isPhotosAlbum = true;
        this.isAlbumPhotos = false;
        this.imageSource = [];
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.photosUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.photosGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]],
            'albumDesc': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]]
        });
        this.fetchPhotosAlbumInfo();
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent.prototype.ngAfterContentInit = function () {
    };
    PhotosComponent.prototype.createCarouselItems = function (imageSource) {
        if (this.carouselRef) {
            this.carouselRef.destroy();
        }
        this.photosCarouselComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__photos_carousel_photos_carousel_component__["a" /* PhotosCarouselComponent */]);
        this.carouselRef = this.photosCarousel.createComponent(this.photosCarouselComponent);
        this.carouselRef.instance.imageSource = imageSource;
    };
    PhotosComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        var userId = this.userId;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            uploadPhoto();
        }
        function uploadPhoto() {
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if (!directUpload) {
                formData.append('album', self.photosInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadPhotos', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isPhotosAlbum) {
                    self.fetchPhotosAlbumInfo();
                }
                else {
                    self.fetchAlbumPhotosInfo();
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    PhotosComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.photosService.createPhotosAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    PhotosComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchPhotosAlbumInfo();
        }
    };
    PhotosComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.photosService.updatePhotosAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    PhotosComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchPhotosAlbumInfo();
        }
    };
    PhotosComponent.prototype.createPhotosAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    PhotosComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    PhotosComponent.prototype.fetchPhotosAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.photosService.fetchPhotosAlbumInfo(postObj).subscribe(function (data) { return _this.afterPhotosAbumInfo(data); });
    };
    PhotosComponent.prototype.fetchAlbumPhotosInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.photosService.fetchAlbumPhotosInfo(postObj).subscribe(function (data) { return _this.afterAlbumPhotosInfo(data); });
    };
    PhotosComponent.prototype.afterPhotosAbumInfo = function (result) {
        var self = this;
        this.photosAlbumList = result;
        self.imageSource = [];
        for (var i in this.photosAlbumList[0].photosList) {
            self.imageSource.push(this.photosAlbumList[0].photosList[i].actualPhoto);
        }
        this.createCarouselItems(self.imageSource);
    };
    PhotosComponent.prototype.afterAlbumPhotosInfo = function (result) {
        this.photosList = result[0].photosList;
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    PhotosComponent.prototype.editPhotosAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of photos under a particular audio album
    PhotosComponent.prototype.showPhotosList = function (event) {
        var self = this;
        this.photosInfo = event.data;
        this.isPhotosAlbum = false;
        this.isAlbumPhotos = true;
        this.photosList = this.photosInfo.photosList;
        this.albumTitle = this.photosInfo.title;
        self.imageSource = [];
        for (var i in this.photosList) {
            self.imageSource.push(this.photosList[i].actualPhoto);
        }
        this.createCarouselItems(self.imageSource);
        //console.log('this.imageSources'+this.imageSources);
        //this.fetchAlbumPhotosInfo();
    };
    PhotosComponent.prototype.goToMyAlbum = function (event) {
        this.isPhotosAlbum = true;
        this.isAlbumPhotos = false;
        this.fetchPhotosAlbumInfo();
    };
    PhotosComponent.prototype.triggerWindowEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        window.dispatchEvent(evt);
    };
    return PhotosComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('photosCarousel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object)
], PhotosComponent.prototype, "photosCarousel", void 0);
PhotosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-photos',
        template: __webpack_require__("../../../../../src/app/photos/photos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photos/photos.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_photos_service__["a" /* PhotosService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_photos_service__["a" /* PhotosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_photos_service__["a" /* PhotosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _d || Object])
], PhotosComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/album-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlbumSearchPipe = (function () {
    function AlbumSearchPipe() {
    }
    AlbumSearchPipe.prototype.transform = function (items, albumText) {
        if (!items)
            return [];
        if (!albumText)
            return items;
        albumText = albumText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(albumText);
        });
    };
    return AlbumSearchPipe;
}());
AlbumSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'albumSearch'
    })
], AlbumSearchPipe);

//# sourceMappingURL=album-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/audio-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AudioSearchPipe = (function () {
    function AudioSearchPipe() {
    }
    AudioSearchPipe.prototype.transform = function (items, audioText) {
        if (!items)
            return [];
        if (!audioText)
            return items;
        audioText = audioText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(audioText);
        });
    };
    return AudioSearchPipe;
}());
AudioSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'audioSearch'
    })
], AudioSearchPipe);

//# sourceMappingURL=audio-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/chat-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatSearchPipe = (function () {
    function ChatSearchPipe() {
    }
    ChatSearchPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.fullname.toLowerCase().includes(searchText);
        });
    };
    return ChatSearchPipe;
}());
ChatSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'chatSearch'
    })
], ChatSearchPipe);

//# sourceMappingURL=chat-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/photos-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhotosSearchPipe = (function () {
    function PhotosSearchPipe() {
    }
    PhotosSearchPipe.prototype.transform = function (items, photosText) {
        if (!items)
            return [];
        if (!photosText)
            return items;
        photosText = photosText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(photosText);
        });
    };
    return PhotosSearchPipe;
}());
PhotosSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'photosSearch'
    })
], PhotosSearchPipe);

//# sourceMappingURL=photos-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/video-search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoSearchPipe = (function () {
    function VideoSearchPipe() {
    }
    VideoSearchPipe.prototype.transform = function (items, videoText) {
        if (!items)
            return [];
        if (!videoText)
            return items;
        videoText = videoText.toLowerCase();
        return items.filter(function (it) {
            var title = it.title;
            return title.toLowerCase().includes(videoText);
        });
    };
    return VideoSearchPipe;
}());
VideoSearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'videoSearch'
    })
], VideoSearchPipe);

//# sourceMappingURL=video-search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box:hover, .setting-btn:hover, .logout-btn:hover{\n\tborder: none;\n}\n.setting-btn, .logout-btn{\n\twidth: 15px;\n    margin: 0px 5px;\n\n}\n.search-box{\n    background-color: #f5f8fa;\n    border-radius: 2px;\n    box-sizing: border-box;\n    color: #14171a;\n    display: block;\n    font-size: 12px;\n    height: 25px;\n    line-height: 16px;\n    width: 180px;\n    margin-top: 15px;\n}\n@-moz-document url-prefix() { \n    .search-box{\n        margin-top: 2px !important;\n    }\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    margin-left: 2px;\n}\n\n.fa-search{\n\tfloat: right;\n\tcolor: #2b90d9 !important;\n\tfont-size: 15px;\n\tline-height: 25px;\n}\n.fa-search:hover{\n\tcolor: #1da1f2;\n}\n.search-result-contents{\n    position: absolute;\n    width: 180px;\n    top: 34px;\n    z-index: 1000;\n    background: #fff;\n\n}\n\n.friend-request-pending-list{\n    position: absolute;\n    width: 301px;\n    top: 34px;\n    z-index: 1000;\n    background: #fff;\n}\n\napp-search-result-list-item{\n    width: 179px;\n    line-height: 30px;\n}\napp-friend-request-pending-list{\n    width: 300px;\n    line-height: 40px;\n}\n\n.add-border{\n    border: 1px solid #e6e6e6;\n    border-bottom: none;\n}\n.request-count{\n    position: absolute;\n    height: 15px;\n    width: auto;\n    background: red;\n    margin-top: 0px;\n    margin-left: 12px;\n    border: 1px solid white;\n    color: white;\n    padding: 0px 3px 1px 1px;\n}\n.request-count:hover{\n    background: #E74C3C;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\">\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#/home\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i><span>Home</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\">\n          <i class=\"fa fa-users\" aria-hidden=\"true\">\n            <ng-container *ngIf=\"isFriendRequestPendingDisplay\">\n              <div class=\"request-count cursor-pointer\" (click)='requestCountClick($event)'>{{friendRequestCount}}</div>\n            </ng-container>\n          </i><span>Friends</span></a>\n          <div class='friend-request-pending-list' [ngClass]=\"(isFriendReuestBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n            <app-friend-request-pending-list (onFriendConfirmed)='onFriendConfirmed($event)'  class=\"in-line\" *ngFor=\"let item of friendRequestPendingList\" [item]=\"item\" >\n            </app-friend-request-pending-list>\n          </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>Messages</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-bell\" aria-hidden=\"true\"></i><span>Notifications</span></a>\n      </li>\n      <li class=\"nav-item search-box\">\n        <div>\n          <input class=\"search-input pull-left blue-fonts\" type=\"text\" id=\"search-query\" placeholder=\"Search Wefrenz\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [value]=\"searchValue\" (input)=\"querySearch($event.target.value)\"/>\n          <i class=\"fa fa-search pull-right cursor-pointer\" aria-hidden=\"true\"></i>\n        </div>\n        <div class='search-result-contents' [ngClass]=\"(isBorder ? 'add-border' : '')\" (click)=\"clickedInside($event)\">\n          <app-search-result-list-item  class=\"in-line\" *ngFor=\"let item of searchResultList\" [item]=\"item\">\n          </app-search-result-list-item>\n        </div>\n      </li>\n      <li class=\"nav-item setting-btn\">\n        <span class=\"nav-link\"><i class=\"fa fa-cog cursor-pointer\" aria-hidden=\"true\"></i></span>\n      </li>\n      <li class=\"nav-item logout-btn\" >\n        <span class=\"nav-link\">\n          <i class=\"fa fa-sign-out cursor-pointer\" aria-hidden=\"true\" (click)=\"logOut()\"></i>\n        </span>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/private-nav/private-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_search_service__ = __webpack_require__("../../../../../src/app/services/data/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrivateNavComponent = (function () {
    function PrivateNavComponent(router, searchService, friendsService) {
        this.router = router;
        this.searchService = searchService;
        this.friendsService = friendsService;
        this.active = false;
        this.innerWidth = 0;
        this.searchResultList = undefined;
        this.friendRequestPendingList = undefined;
        this.reqArr = undefined;
        this.isBorder = false;
        this.isFriendReuestBorder = false;
        this.searchValue = '';
        this.friendRequestCount = 0;
        this.isFriendRequestPendingDisplay = false;
        this.userId = '';
        this.onFriendConfirmedFromNotification = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.userId = localStorage.getItem('currentUser');
        var self = this;
        this.router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]; }).pairwise().subscribe(function (e) {
            clearInterval(self.intervalId);
        });
    }
    PrivateNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
        //this.instance.removeSearchResult.subscribe((data) => this.removeSearchResult(data));
    };
    PrivateNavComponent.prototype.ngAfterViewInit = function () {
        this.pullNotifications();
        this.subscribeToNotifications();
    };
    PrivateNavComponent.prototype.removeSearchResult = function (event) {
        alert('removeSearchResult plz');
    };
    PrivateNavComponent.prototype.logOut = function () {
        this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginData');
        this.router.navigate(['public']);
    };
    PrivateNavComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    PrivateNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PrivateNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PrivateNavComponent.prototype.querySearch = function (searchQuery) {
        var _this = this;
        var postObj = { 'searchparam': searchQuery };
        this.searchService.querySearch(postObj).subscribe(function (data) { return _this.afterSearch(data); });
    };
    PrivateNavComponent.prototype.afterSearch = function (data) {
        this.searchResultList = data;
        if (this.searchResultList.length > 0) {
            this.isBorder = true;
        }
        else {
            this.isBorder = false;
        }
    };
    PrivateNavComponent.prototype.clickedOutside = function ($event) {
        this.searchResultList = [];
        this.friendRequestPendingList = [];
        this.isFriendReuestBorder = false;
    };
    PrivateNavComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
        this.searchResultList = [];
        //this.friendRequestPendingList = [];
    };
    PrivateNavComponent.prototype.requestCountClick = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopPropagation();
        this.isFriendRequestPendingDisplay = false;
        this.friendRequestCount = 0;
        var postObj = { 'reqarr': this.reqArr };
        this.friendsService.getRequestDetails(postObj).subscribe(function (data) { return _this.afterGetRequestDetails(data); });
    };
    PrivateNavComponent.prototype.afterGetRequestDetails = function (data) {
        if (data.length > 0) {
            this.isFriendReuestBorder = true;
            this.friendRequestPendingList = data;
        }
        else {
            this.isFriendReuestBorder = false;
        }
    };
    PrivateNavComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.intervalId = setInterval(function () { _this.pullNotifications(); }, 1000 * 10);
    };
    //Pulling notifications in every 5 seconds
    PrivateNavComponent.prototype.pullNotifications = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getFriendReq(postObj).subscribe(function (data) { return _this.afterGetFriendReq(data); });
    };
    //Keeping the requester userid in array to query from userinfo collection
    PrivateNavComponent.prototype.afterGetFriendReq = function (data) {
        this.friendRequestCount = data.length;
        this.reqArr = [];
        if (this.friendRequestCount > 0) {
            this.isFriendRequestPendingDisplay = true;
            for (var obj in data) {
                this.reqArr.push(data[obj].requester);
            }
        }
        else {
            this.isFriendRequestPendingDisplay = false;
            ;
        }
    };
    //Removing the confirmed friend from the list
    PrivateNavComponent.prototype.onFriendConfirmed = function (event) {
        for (var i in this.friendRequestPendingList) {
            if (event.data.requester === this.friendRequestPendingList[i].username) {
                this.friendRequestPendingList.splice(i, 1);
                //This is will be listened at coverpic component to change the friend's controls
                this.onFriendConfirmedFromNotification.emit({ data: event.data });
                if (this.friendRequestPendingList.length === 0) {
                    this.isFriendReuestBorder = false;
                    this.isFriendRequestPendingDisplay = false;
                }
            }
        }
    };
    return PrivateNavComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], PrivateNavComponent.prototype, "onFriendConfirmedFromNotification", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PrivateNavComponent.prototype, "clickedOutside", null);
PrivateNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-private-nav',
        template: __webpack_require__("../../../../../src/app/private-nav/private-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/private-nav/private-nav.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_search_service__["a" /* SearchService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _d || Object])
], PrivateNavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=private-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-pic{\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder: 1px solid #e6e6e6;\n}\n.user-info .full-name, .user-info .email-id{\n\tword-break: break-all;\n\tpadding-left: 5px;\n}\n.profile-card{\n\tmargin: 5px;\n}\n\n.email-id:hover a, .full-name:hover{\n\tcolor:  #1da1f2 !important;\n}\n.profile-card .title-bar{\n    background: rgba(0,0,0, 0.6);\n    margin-top: 57px;\n    height: 15px;\n    width: 100%;\n    height: 18px;\n}\n.title-bar .cam-icon{\n\tmargin: 0px 5px 0px 2px;\n}\n.title-bar .cam-icon i:hover, .title-bar .upload-icon i:hover{\n\tcolor: #1da1f2;\n}\n.file-input-container{\n\tdisplay: none;\n\theight: 0px;\n\twidth: 0px;\n}\n\n.preview-profile-pic img{\n\twidth: 100%;\n}\napp-image-cropper {\n  max-width: 640px;\n  margin-bottom: 25px;\n}\n.cropped-preview-img{\n\tdisplay: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row profile-card\">\n    <app-modal [modalTitle]=\"'Profile Pic Preview'\" [blocking]='false' [modalId]='modalId' #previewPicModal \n    (onModalClose)=\"onModalClosed()\">\n    \t<div *ngIf=\"isProfilePicControls;then profilePicControls else profilePicCam\"></div>\n    \t<ng-template #profilePicControls>\n\t    \t<div class=\"preview-profile-pic\">\n\t    \t\t<!--<img id=\"previewProfilePic\" src=\"{{encodedImage}}\"/>-->\n\t\t\t    <app-image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [resizeToWidth]=\"150\" format=\"jpeg\" \n\t\t\t    (imageCropped)=\"imageCropped($event)\"></app-image-cropper>\n\t    \t</div>\n\t    \t<img class=\"cropped-preview-img\" *ngIf=\"croppedImage\" [src]=\"croppedImage\" (load)=\"computeCroppedImage()\"/>\n\t      \t<div>\t\t\t\n\t    \t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"ok()\">\n\t\t\t\t\t<span class=\"pull-left\">Ok</span>\n\t\t\t\t\t<i class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #profilePicCam >\n\t\t\t<app-capture-pic (onCapturePic)=\"onPicCaptured()\" (onCamRender)=\"onCamRendered()\"></app-capture-pic>\n\t\t</ng-template>\n    </app-modal>\n\t<div class=\"file-input-container\">\n\t\t<!--<form [formGroup]=\"profilePicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\t\t\t<div class=\"form-group\" [formGroup]=\"profilePicGroup\">\n\t  \t\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t  \t\t</div>\n\t\t</form>-->\n\t\t<input type=\"file\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event)\"/>\n\t</div>\n\t<div class=\"profile-pic col-xs-12 col-sm-4 col-md-12 col-lg-4 col-xl-4 no-padding\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')', 'height': 'auto', 'width': profilePicWidth}\">\n\t\t<div class=\"title-bar\">\n\t\t\t<div class=\"pull-left cam-icon\">\n\t\t\t\t<i class=\"fa fa-camera white-fonts hand-cursor\" aria-hidden=\"true\" (click)=\"camInputClick()\"></i>\n\t\t\t</div>\n\t\t\t<div class=\"upload-icon\"><i class=\"fa fa-upload white-fonts hand-cursor\" aria-hidden=\"true\" \n\t\t\t(click)=\"fileInput.value = ''; fileInput.click()\"></i></div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-xs-12 col-sm-8 col-md-12 col-lg-8 col-xl-8 no-padding user-info\">\n\t\t<div class=\"row no-margin blue-fonts full-name hand-cursor\" (click)=\"navigateToMyProfile($event);\">{{fullName}}</div>\n\t\t<div class=\"row no-margin email-id\"><a href=\"mailto:\" class=\"no-text-decoration blue-fonts\">{{userId}}</a></div>\n\t<div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile-area/profile-area.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileAreaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__ = __webpack_require__("../../../../../src/app/services/data/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileAreaComponent = (function () {
    function ProfileAreaComponent(router, formBuilder, modalService, uploadService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.uploadService = uploadService;
        this.modalId = 'appModal';
        this.loginData = undefined;
        this.isProfilePicControls = true;
        this.localStream = null;
        this.isCamRendered = false;
        this.profilePicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.profilePicGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
    }
    ProfileAreaComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.fullName = this.loginData.fullname;
        this.userId = this.loginData.username;
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
    };
    ProfileAreaComponent.prototype.navigateToMyProfile = function (event) {
        this.router.navigate(['profile', this.userId]);
    };
    ProfileAreaComponent.prototype.openAppModal = function () {
        var self = this;
        self.modalService.open(self.modalId);
    };
    /*fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }*/
    ProfileAreaComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    ProfileAreaComponent.prototype.computeCroppedImage = function () {
        var elem = document.querySelector('#croppedPreviewImg');
    };
    ProfileAreaComponent.prototype.fileChangeEvent = function (event) {
        this.isProfilePicControls = true;
        this.imageChangedEvent = event;
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.encodedImage = e.target.result;
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
          console.log('sent');
        });*/
    };
    ProfileAreaComponent.prototype.camInputClick = function () {
        this.isProfilePicControls = false;
        this.openAppModal();
        if (this.isCamRendered) {
            this.onCamRendered();
        }
    };
    ProfileAreaComponent.prototype.uploadEncodedProfilePic = function (encodedImage) {
        var _this = this;
        var postObj = { 'previewpicdimension': (150 + 'x' + 150), 'profilepicdimension': (75 + 'x' + 75), 'imagebuffer': encodedImage, 'userid': this.userId };
        this.uploadService.uploadEncodedProfilePic(postObj).subscribe(function (data) { return _this.afterProfilePicUploaded(data); });
    };
    ProfileAreaComponent.prototype.ok = function () {
        this.uploadEncodedProfilePic(this.croppedImage);
    };
    ProfileAreaComponent.prototype.capture = function () {
        var canvas = document.getElementById('profilePicCanvas');
        var dataURI = canvas.toDataURL('image/jpeg', 1.0);
        this.uploadEncodedProfilePic(dataURI);
    };
    ProfileAreaComponent.prototype.onPicCaptured = function () {
        this.capture();
    };
    ProfileAreaComponent.prototype.onCamRendered = function () {
        this.isCamRendered = true;
        if (!this.isProfilePicControls) {
            var _self_1 = this;
            var video_1 = document.getElementById('profilePicVideo');
            var canvas_1 = document.getElementById('profilePicCanvas');
            var ctx_1 = canvas_1.getContext('2d');
            navigator.getUserMedia = navigator.getUserMedia;
            var errorCallback = function (e) {
                console.log('Rejected!', e);
            };
            video_1.addEventListener('play', function () {
                canvas_1.width = video_1.videoWidth;
                canvas_1.height = video_1.videoHeight;
                var self = this; //cache
                (function loop() {
                    if (!self.paused && !self.ended) {
                        ctx_1.drawImage(self, 0, 0, canvas_1.width, canvas_1.height);
                        setTimeout(loop, 1000 / 30); // drawing at 30fps
                    }
                })();
            }, false);
            if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: false, video: true }, function (stream) {
                    //this._self.localStream = stream;
                    _self_1.localStream = stream;
                    video_1.src = window.URL.createObjectURL(stream);
                }, errorCallback);
            }
            else {
                alert("Your Browser does not support Camera");
                //video.src = 'somevideo.webm'; // fallback.
            }
        }
    };
    ProfileAreaComponent.prototype.afterProfilePicUploaded = function (result) {
        //alert(result.message);
        if (result.status === 'success') {
            this.profilePic = result.info.profilepic.imageBuffer;
            localStorage.setItem('loginData', JSON.stringify(result.info));
            this.previewPicModal.close();
        }
    };
    ProfileAreaComponent.prototype.onModalClosed = function () {
        if (this.localStream != null) {
            //localStream.stop();
            var track = this.localStream.getTracks()[0]; // if only one media track
            track.stop();
        }
    };
    return ProfileAreaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('croppedPreviewImg'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ProfileAreaComponent.prototype, "croppedPreviewImg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('previewPicModal'),
    __metadata("design:type", Object)
], ProfileAreaComponent.prototype, "previewPicModal", void 0);
ProfileAreaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile-area',
        template: __webpack_require__("../../../../../src/app/profile-area/profile-area.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-area/profile-area.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_upload_service__["a" /* UploadService */]) === "function" && _e || Object])
], ProfileAreaComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile-area.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover-pic-area{\n\tpadding: 5px !important;\n\twidth: 768px;\n}\n.cover-profile-pic{\n\tbackground-size: cover;\n    margin: -125px 0px 0px 20px;\n    height: 150px;\n    width: 150px;\n    position: absolute;\n    border: 3px solid rgba(255, 255, 255, 0.8);\n}\n\n.cover-profile-pic .title-bar{\n\tposition: absolute;\n    bottom: 0px;\n    background: rgba(0,0,0, 0.6);\n    width: 144px;\n    margin-left: 0px !important;\n    padding: 5px;\n}\n.default-link{\n    text-decoration: none;\n    color: #fff;\n}\n.default-link:hover{\n    color: #2b90d9;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav (onFriendConfirmedFromNotification)= \"onFriendConfirmedFromNotification($event)\"></app-private-nav>\n<div class=\"container\" >\n\t<div class=\"opaque-bg cover-pic-area top-margin\">\n\t\t<app-coverpic #appCoverPic ></app-coverpic>\n\t</div>\n\t<div class=\"cover-profile-pic\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t\t<ng-container *ngIf=\"isMyProfile\">\n\t\t\t<div class='title-bar row no-margin white-fonts full-name'><a href=\"/#/home\" class=\"default-link\">{{fullName}}</a></div>\n\t\t</ng-container>\n\t\t<ng-container *ngIf=\"!isMyProfile\">\n\t\t\t<div class='title-bar row no-margin white-fonts full-name'>{{fullName}}</div>\n\t\t</ng-container>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__ = __webpack_require__("../../../../../src/app/services/data/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(route, router, profileService, friendsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.profileService = profileService;
        this.friendsService = friendsService;
        this.routeSwitch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAppLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAppLoggedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.profilePic = '';
        this.profilePicHeight = '';
        this.profilePicWidth = '';
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            var obj = { 'userid': currentUser, 'friendid': id };
            _this.sharedList = obj;
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'profile/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                _this.friendsService.getFriendInfo(postObj).subscribe(function (data) { return _this.afterFriendInfo(data); });
            }
            //this.routeSwitch.emit(this.isMyProfile);
            _this.getProfileInfo(id);
        });
    }
    ProfileComponent.prototype.onPopState = function (event) {
        localStorage.removeItem('currentRoute');
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    ProfileComponent.prototype.afterFriendInfo = function (result) {
        this.appCoverPic.updateFriendsControlsSettings(result);
    };
    ProfileComponent.prototype.getProfileInfo = function (profileId) {
        var _this = this;
        var postObj = JSON.stringify({ profileid: profileId });
        this.profileService.profileInfo(postObj).subscribe(function (data) { return _this.afterProfileInfo(data); });
    };
    ProfileComponent.prototype.afterProfileInfo = function (result) {
        if (this.isMyProfile) {
            this.appCoverPic.isAddFriend = false;
            this.appCoverPic.isRequestPending = false;
            this.appCoverPic.isRequestConfirmed = false;
            this.appCoverPic.isMyProfile = 'true';
        }
        else {
            this.appCoverPic.userId = this.userId;
            this.appCoverPic.friendId = this.friendId;
        }
        if (result.status === 'failure') {
            alert('Error fetching profile info');
        }
        else {
            this.profilePic = result.profilepic.imageBuffer;
            this.appCoverPic.coverPicURL = __WEBPACK_IMPORTED_MODULE_4_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/' + result.wallpicpath;
            this.appCoverPic.updateCoverPicSettings(result);
            //this.profilePicWidth = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.width + 'px';
            //this.profilePicHeight = UtilityService.getPicDimension(result.profilepic.profilePicDimension).dimension.height + 'px';
            this.fullName = result.fullname;
        }
    };
    ProfileComponent.prototype.onFriendConfirmedFromNotification = function (event) {
        if (event.data.requester === this.friendId) {
            this.appCoverPic.updateConfirmedControls();
        }
    };
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('appCoverPic'),
    __metadata("design:type", Object)
], ProfileComponent.prototype, "appCoverPic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], ProfileComponent.prototype, "routeSwitch", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ProfileComponent.prototype, "onAppLoggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], ProfileComponent.prototype, "onAppLoggedOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:popstate', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfileComponent.prototype, "onPopState", null);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_profile_service__["a" /* ProfileService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _g || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" (window:resize)=\"onResize($event)\" >\n  <button (click)=\"toggleNav()\" class=\"navbar-toggler navbar-toggler-right fa fa-bars\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  </button>\n  <div [ngClass]=\"('navbar-collapse ' + (active ? 'collapse' : ''))\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i><span>Services</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i><span>Testimonials</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i><span>Blog</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-cc-discover\" aria-hidden=\"true\"></i><span>About</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"\"><i class=\"fa fa-address-book-o\" aria-hidden=\"true\"></i><span>Contact</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/public-nav/public-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublicNavComponent = (function () {
    function PublicNavComponent() {
        this.active = false;
        this.innerWidth = 0;
    }
    PublicNavComponent.prototype.ngOnInit = function () {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.onResize = function (event) {
        this.checkInnerWidth();
    };
    PublicNavComponent.prototype.checkInnerWidth = function () {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    PublicNavComponent.prototype.toggleNav = function (event) {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    return PublicNavComponent;
}());
PublicNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public-nav',
        template: __webpack_require__("../../../../../src/app/public-nav/public-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/public-nav/public-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PublicNavComponent);

//# sourceMappingURL=public-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/public/public.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.search-form{\n\twidth: 300px;\n\tfloat: left;\n}*/\n.login-signup{\n    width: 280px;\n    margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public/public.component.html":
/***/ (function(module, exports) {

module.exports = "<app-public-nav></app-public-nav>\n<div class=\"container h-100 login-signup opaque-bg\">\n  <div class=\"row no-margin h-100 justify-content-center align-items-center\">\n    <!--<app-login></app-login>\n    <app-signup></app-signup>-->\n    <div #loginSignUp></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/public/public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_pairwise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicComponent = (function () {
    function PublicComponent(componentFactoryResolver, router) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        if (localStorage.getItem('currentUser')) {
            if (localStorage.getItem('currentRoute')) {
                var routePath = localStorage.getItem('currentRoute');
                this.router.navigate([routePath]);
            }
            /*this.router.events.pairwise().subscribe((e) => {
                console.log("eeeeeee"+e);
            });*/
        }
    }
    PublicComponent.prototype.ngAfterContentInit = function () {
        this.createLoginPanel();
    };
    PublicComponent.prototype.ngAfterContentChecked = function () {
    };
    PublicComponent.prototype.ngOnInit = function () {
    };
    PublicComponent.prototype.createLoginPanel = function () {
        var _this = this;
        if (this.signupRef) {
            this.signupRef.instance.renderLogin.unsubscribe(function (data) { return _this.callLogin(data); });
            this.signupRef.instance.accountCreated.unsubscribe(function (data) { return _this.accountCreated(data); });
            this.signupRef.destroy();
        }
        this.loginComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]);
        this.loginRef = this.loginSignUp.createComponent(this.loginComponent);
        this.loginRef.instance.renderSignUp.subscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.subscribe(function (data) { return _this.goHome(data); });
    };
    PublicComponent.prototype.createSignupPanel = function () {
        var _this = this;
        this.signupComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */]);
        this.loginRef.instance.renderSignUp.unsubscribe(function (data) { return _this.callSignUp(data); });
        this.loginRef.instance.goHome.unsubscribe(function (data) { return _this.goHome(data); });
        this.loginRef.destroy();
        this.signupRef = this.loginSignUp.createComponent(this.signupComponent);
        this.signupRef.instance.renderLogin.subscribe(function (data) { return _this.callLogin(data); });
        this.signupRef.instance.accountCreated.subscribe(function (data) { return _this.accountCreated(data); });
    };
    PublicComponent.prototype.ngAfterViewInit = function () {
        //this.createLoginPanel();
    };
    PublicComponent.prototype.callSignUp = function (data) {
        this.createSignupPanel();
    };
    PublicComponent.prototype.goHome = function (data) {
        this.router.navigate(['home']);
    };
    PublicComponent.prototype.callLogin = function (data) {
        this.createLoginPanel();
    };
    PublicComponent.prototype.accountCreated = function (data) {
        if (data === 'success') {
            this.createLoginPanel();
        }
    };
    return PublicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginSignUp', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object)
], PublicComponent.prototype, "loginSignUp", void 0);
PublicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-public',
        template: __webpack_require__("../../../../../src/app/public/public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/public/public.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PublicComponent);

var _a, _b, _c;
//# sourceMappingURL=public.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-row{\n\twidth: 178px;\n\tpadding-right: 5px;\n\tborder-bottom: 1px solid #e6e6e6;\n}\n\n.item-row:hover{\n\tbackground: #f5f8fa;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin pull-left inline-block hand-cursor item-row\" (click)=\"searchListItemClick($event)\">\n\t<div class=\"profile-pic-small pull-left\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\"></div>\n\t<div class=\"row no-margin blue-fonts full-name pull-right\">{{fullName}}</div> \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-result-list-item/search-result-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchResultListItemComponent = (function () {
    function SearchResultListItemComponent(router) {
        this.router = router;
        this.isSearchResult = false;
    }
    SearchResultListItemComponent.prototype.ngOnInit = function () {
        //this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.item.profilepic.imageBuffer;
        this.fullName = this.item.fullname;
        this.email = this.item.username;
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.item.profilepic.profilePicDimension).dimension.height + 'px';
    };
    SearchResultListItemComponent.prototype.searchListItemClick = function (event) {
        //if(this.router.url === '/home'){
        this.router.navigate(['profile', this.email]);
        //}else{
        //}
    };
    return SearchResultListItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SearchResultListItemComponent.prototype, "item", void 0);
SearchResultListItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result-list-item',
        template: __webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-result-list-item/search-result-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SearchResultListItemComponent);

var _a;
//# sourceMappingURL=search-result-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var AppService = (function () {
    function AppService() {
    }
    AppService.getGeoCode = function () {
        var latitude;
        var longitude;
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            return { 'location': { 'latitude': latitude, 'longitude': longitude } };
        });
    };
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/audio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudioService = (function () {
    function AudioService(http) {
        this.http = http;
    }
    AudioService.prototype.createAudioAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/createAudioAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    AudioService.prototype.updateAudioAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateAudioAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    AudioService.prototype.fetchAudioAlbumInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchAudioAlbumInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    AudioService.prototype.fetchAlbumAudioInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchAlbumAudioInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return AudioService;
}());
AudioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AudioService);

var _a;
//# sourceMappingURL=audio.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getChatBuddyList = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getChatBuddyList", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.saveComment = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/saveComment", postObj, options)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.updateComment = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/saveComment", postObj, options)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.fetchCommentsForCurrentFeedItem = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchCommentsForCurrentFeedItem", postObj, options)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.deleteCommentItem = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/deleteCommentItem", postObj, options)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.updateLikeCommentChannel = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateLikeCommentChannel", postObj, options)
            .map(function (res) { return res.json(); });
    };
    CommentService.prototype.updateLoveCommentChannel = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateLoveCommentChannel", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/configuration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigurationService = (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.saveCoverPicPos = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/saveCoverPicPos", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigurationService);

var _a;
//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/feed.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.savePost = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/savePost", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FeedService.prototype.refreshFeed = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/refreshFeed", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FeedService.prototype.deleteFeedItem = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/deleteFeedItem", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FeedService.prototype.updateLikeFeedChannel = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateLikeFeedChannel", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FeedService.prototype.updateLoveFeedChannel = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateLoveFeedChannel", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FeedService);

var _a;
//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/friends.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendsService = (function () {
    function FriendsService(http) {
        this.http = http;
    }
    FriendsService.prototype.setFriendInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/setFriendInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getFriendInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getFriendInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getAllFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getAllFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getRequestDetails = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getRequestDetails", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.confirmFriendReq = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/confirmFriendReq", postObj, options)
            .map(function (res) { return res.json(); });
    };
    FriendsService.prototype.getAllConfirmedFriends = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/getAllConfirmedFriends", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return FriendsService;
}());
FriendsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FriendsService);

var _a;
//# sourceMappingURL=friends.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/photos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhotosService = (function () {
    function PhotosService(http) {
        this.http = http;
    }
    PhotosService.prototype.createPhotosAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/createPhotosAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.updatePhotosAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updatePhotosAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.fetchPhotosAlbumInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchPhotosAlbumInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    PhotosService.prototype.fetchAlbumPhotosInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchAlbumPhotosInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return PhotosService;
}());
PhotosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PhotosService);

var _a;
//# sourceMappingURL=photos.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.profileInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/profileInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.signUp = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/signUp", postObj, options)
            .map(function (res) { return res.json(); });
    };
    RegistrationService.prototype.logIn = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/logIn", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.querySearch = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/querySearch", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Observable } from 'rxjs/Rx';
var UploadService = (function () {
    function UploadService(http) {
        this.http = http;
        /*this.progress = Observable.create(observer => {
            this.progressObserver = observer
        }).share();*/
    }
    /*public makeFileRequest (url: string, params: string[], files: File[]): Observable<any> {
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };

            xhr.upload.onprogress = (event) => {
                this.progress = Math.round(event.loaded / event.total * 100);

                //this.progressObserver.next(this.progress);
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }*/
    UploadService.prototype.uploadEncodedProfilePic = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/uploadEncodedProfilePic", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return UploadService;
}());
UploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.createVideoAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/createVideoAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.updateVideoAlbum = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/updateVideoAlbum", postObj, options)
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.fetchVideoAlbumInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchVideoAlbumInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    VideoService.prototype.fetchAlbumVideoInfo = function (postObj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + "/api/fetchAlbumVideoInfo", postObj, options)
            .map(function (res) { return res.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings/app-settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsService; });
var port = 3000;
var AppSettingsService = (function () {
    function AppSettingsService() {
    }
    AppSettingsService.API_ENDPOINT = function (environment) {
        switch (environment) {
            case "local":
                return "";
            //return "https://localhost:"+port;
            //return "https://10.20.17.49:"+port;
            //return "https://192.168.225.177:"+port;
            case "dev":
                return "https://www.dev-wefrenz.com:" + port;
            case "prod":
                return "https://www.wefrenz.com" + port;
        }
    };
    return AppSettingsService;
}());

//# sourceMappingURL=app-settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shareobject/carouseldata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouseldataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouseldataService = (function () {
    function CarouseldataService() {
        this.carouselSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]("default message");
        this.currentCarouselSource = this.carouselSource.asObservable();
    }
    CarouseldataService.prototype.changeCarouselSource = function (msg) {
        this.carouselSource.next(msg);
    };
    return CarouseldataService;
}());
CarouseldataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CarouseldataService);

//# sourceMappingURL=carouseldata.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shareobject/routeinfo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteinfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RouteinfoService = (function () {
    function RouteinfoService() {
    }
    return RouteinfoService;
}());
RouteinfoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RouteinfoService);

//# sourceMappingURL=routeinfo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utility/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
var UtilityService = (function () {
    function UtilityService() {
    }
    UtilityService.getPicDimension = function (dimension) {
        var width = dimension.split('x')[0];
        var height = dimension.split('x')[1];
        return { 'dimension': { 'width': width, 'height': height } };
    };
    UtilityService.getPicPosition = function (position) {
        var x = position.split('x')[0];
        var y = position.split('x')[1];
        return { 'position': { 'x': x, 'y': y } };
    };
    UtilityService.setSmileys = function (msg) {
        return msg
            .replace(/:\)/gi, "<span><img src='/assets/images/smileys/socialutility-emotion0-smile.gif'></img></span>")
            .replace(/:\(/gi, "<span><img src='/assets/images/smileys/socialutility-emotion1-sadsmile.gif'></img></span>")
            .replace(/B=\)/gi, "<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
            .replace(/:\D/, "<span><img src='/assets/images/smileys/socialutility-emotion2-bigsmile.gif'></img></span>")
            .replace(/B=\)/, "<span><img src='/assets/images/smileys/socialutility-emotion3-cool.gif'></img></span>")
            .replace(/:\=\O/, "<span><img src='/assets/images/smileys/socialutility-emotion4-surprised.gif'></img></span>")
            .replace(/;\)/, "<span><img src='/assets/images/smileys/socialutility-emotion5-wink.gif'></img></span>")
            .replace(/;\(/, "<span><img src='/assets/images/smileys/socialutility-emotion6-crying.gif'></img></span>");
    };
    return UtilityService;
}());

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validators/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'blankValidator': 'Enter Some Value',
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 8 characters long, and contain a number.',
            'minlength': 'Minimum length ' + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    ValidationService.blankDataValidator = function (control) {
        // {8,100}           - Assert password is between 8 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value !== '') {
            return null;
        }
        else {
            return { 'blankValidator': true };
        }
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blue-fonts\"><h4 class=\"text-center\">Please Sign Up</h4></div>\n<form [formGroup]=\"signupForm\">\n\t<div class=\"form-group\">\n\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" formControlName=\"fullName\" id=\"fullName\">\n\t\t<app-control-messages [control]=\"signupForm.controls.fullName\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"email\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Email\" formControlName=\"email\" id=\"email\">\n\t\t<app-control-messages [control]=\"signupForm.controls.email\"></app-control-messages>\n\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t</div>\n\t<div class=\"form-group\">\n\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" id=\"password\">\n\t\t<app-control-messages [control]=\"signupForm.controls.password\"></app-control-messages>\n\t</div>\n\t<div class=\"form-group row justify-content-center align-items-center no-margin\">\n\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"showLogin()\">\n\t\t\t<i class=\"fa fa-sign-in rotate-left\" aria-hidden=\"true\"></i>\n\t\t\t<span>Login</span>\n\t\t</button>\n\t\t<button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!signupForm.valid\" (click)=\"signUp()\">\n\t\t\t<span>Sign Up</span>\n\t\t\t<i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>\n\t\t</button>\n\t</div>\n\t<div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\"><div class=\"server-msg text-center\">{{serverMessage}}</div></div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__ = __webpack_require__("../../../../../src/app/services/data/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(formBuilder, registrationService) {
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.renderLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.accountCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.serverMessage = '';
        this.isError = false;
        this.isStatus = false;
        this.signupForm = this.formBuilder.group({
            'fullName': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].emailValidator]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(8)]]
        });
    }
    SignupComponent.prototype.ngAfterViewInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        if (this.signupForm.dirty && this.signupForm.valid) {
            var postObj = { 'fullname': this.signupForm.value.fullName,
                'email': this.signupForm.value.email,
                'password': this.signupForm.value.password };
            this.registrationService.signUp(postObj).subscribe(function (data) { return _this.afterSignUp(data); });
            ;
        }
    };
    SignupComponent.prototype.afterSignUp = function (result) {
        if (result.status === 'failure') {
            this.isError = true;
            this.isStatus = false;
            this.serverMessage = result.message;
        }
        else {
            this.isError = false;
            this.isStatus = true;
            this.serverMessage = result.message + ' Redirecting to Login.';
            //setTimeout(()=>{ this.accountCreated.emit(result.status);}, 4000)
            this.accountCreated.emit(result.status);
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.showLogin = function () {
        this.renderLogin.emit('complete');
    };
    return SignupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SignupComponent.prototype, "renderLogin", void 0);
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_data_registration_service__["a" /* RegistrationService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".feed-content{\n\toverflow-y: auto;\n}\n@media only screen and (max-width: 768px) {\n\t.profile-pic[_ngcontent-c5] {display:none;}\n\t.feed-content[_ngcontent-c2] {margin: 3%;}\n\t.story-feed[_ngcontent-c5] {padding: 6px 6px;}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<app-private-nav></app-private-nav>\n<div class=\"container top-margin bottom-margin\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\t\t\t<div class=\"opaque-bg no-padding\">\n\t\t\t\t<app-profile-area></app-profile-area>\n\t\t\t\t<div class=\"left-nav\">\n\t\t\t\t\t<div class=\"nav-item\" (click)=\"switchVideo($event)\" [ngClass]=\"(isHighLightStories ? 'highlight-nav' : '')\">\n\t\t\t\t\t\t<i class=\"fa fa-book blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Stories</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\" [ngClass]=\"(isHighLightMusic ? 'highlight-nav' : '')\" (click)=\"switchMusic($event)\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Blog</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"nav-item\">\n\t\t\t\t\t\t<i class=\"fa fa-plane blue-fonts\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<span class=\"blue-fonts\">Travel</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #feedContent class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 no-padding opaque-bg feed-content\" \n\t\t[ngStyle]=\"{ 'max-height': ' ' + screenHeight + 'px'}\" (scroll)=\"onScroll($event)\" \n\t\t(feedScrollEnd)=\"onFeedScrollEnd($event)\" #scrollMe>\n\t\t\t<div class=\"story-content\">\n\t\t\t\t<ng-template [ngIf]=\"isStories\">\n\t\t\t\t\t<app-story-box [action]=\"action\" #storyBoxComponent></app-story-box>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isBlog\">\n\t\t\t\t\t<app-music-player></app-music-player>\n\t\t\t\t</ng-template>\t\n\t\t\t\t<ng-template [ngIf]=\"isActivity\">\n\t\t\t\t\t<app-photos></app-photos>\n\t\t\t\t</ng-template>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3 info-panel\">\n\t\t\t<div class=\"opaque-bg\">\n\t\t\t\t<app-info-panel></app-info-panel>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_box_story_box_component__ = __webpack_require__("../../../../../src/app/story-box/story-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoriesComponent = (function () {
    function StoriesComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.onAppLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onAppLoggedOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.feedScrollEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isMyProfile = false;
        this.userId = '';
        this.friendId = '';
        this.isStories = true;
        this.overFlowY = 'visible';
        this.action = 'post';
        this.screenHeight = window.screen.height - 175;
        route.params.subscribe(function (val) {
            var currentUser = localStorage.getItem('currentUser');
            var id = _this.route.snapshot.paramMap.get('id');
            if (!currentUser) {
                _this.triggerLoggedInCheck('onAppLoggedOut', { event: 'onAppLoggedOut', message: 'logged out' });
                _this.onAppLoggedOut.emit('logged Out');
                _this.router.navigate(['public']);
                return;
            }
            else {
                _this.triggerLoggedInCheck('onAppLoggedIn', { event: 'onAppLoggedIn', message: 'logged in' });
                _this.onAppLoggedIn.emit('logged In');
                localStorage.setItem('currentRoute', 'stories/' + id);
            }
            if (currentUser === id) {
                _this.isMyProfile = true;
                localStorage.setItem("isMyProfile", 'true');
            }
            else {
                _this.isMyProfile = false;
                localStorage.setItem("isMyProfile", 'false');
                var postObj = { 'userid': currentUser, 'friendid': id };
                _this.userId = currentUser;
                _this.friendId = id;
                //this.friendsService.getFriendInfo(postObj).subscribe(data => this.afterFriendInfo(data));
            }
            //this.routeSwitch.emit(this.isMyProfile);
            //this.getProfileInfo(id);
        });
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent.prototype.triggerLoggedInCheck = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, evtObj);
        window.dispatchEvent(evt);
    };
    StoriesComponent.prototype.onScroll = function (event) {
        var element = this.myScrollContainer.nativeElement;
        var atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (atBottom) {
            //this.feedScrollEnd.emit('scroll end');
            this.storyBoxComponent.onFeedScrollEnd();
        }
    };
    return StoriesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], StoriesComponent.prototype, "myScrollContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('storyBoxComponent'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__story_box_story_box_component__["a" /* StoryBoxComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__story_box_story_box_component__["a" /* StoryBoxComponent */]) === "function" && _b || Object)
], StoriesComponent.prototype, "storyBoxComponent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], StoriesComponent.prototype, "onAppLoggedIn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], StoriesComponent.prototype, "onAppLoggedOut", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _e || Object)
], StoriesComponent.prototype, "feedScrollEnd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoriesComponent.prototype, "onScroll", null);
StoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stories',
        template: __webpack_require__("../../../../../src/app/stories/stories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stories/stories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _g || Object])
], StoriesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=stories.component.js.map

/***/ }),

/***/ "../../../../../src/app/story-box/story-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".story-feed{\n\tpadding: 6px 6px 0px 57px;\n}\n.story-box{\n\theight: 100px;\n\tpadding: 3px ;\n\tborder: 1px solid #2b90d9;\n}\n.profile-pic{\n    margin: 0px 2px;\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    left: 5px;\n    border-radius: 50%;\n}\n.control-bar{\n\tmargin: 6px 0px 1px 0px;\n\tfont-size: 9px;\n}\n.post-button{\n    margin-left: 5px;\n}\n.post-btn{\n    width: auto;\n    height: 17px;\n    border-radius: 0px;\n    padding: 0px 3px !important;\n    line-height: 12px;\n    font-size: 12px !important;\n    background-color: #fff !important;\n    border: 1px solid #2b90d9 !important;\n    color: #2b90d9 !important;\n    background: #d9e1e8 !important;\n}\n.post-btn:hover *{\n    color: red;\n}\n.post-btn:hover{\n    border: 1px solid red !important;\n}\n.file-input-container{\n    display: none;\n}\n.modal{\n    width: 500px !important;\n    height: 500px !important;  \n}\n#previewMusicPlayer{\n    height: 189px;\n    background: #000;\n}\napp-feeditem{\n    float: left;\n    width: 100%;\n    min-height: 60px;\n    border: 1px solid #e6e6e6;\n    margin: 3px 0px;\n    border-radius: 3px;\n    padding: 3px;\n}\n.preview-posted-pic{\n    width: 300px;\n    height: 300px;\n    background-size: cover !important;\n}\n.post-desc-content{\n    margin-top: 5px;\n}\n.action-bar{\n    margin-left: -5px;\n}\n.fa-map-marker{\n    font-size: 14px;\n}\n.text-styles{\n    margin: 25px 15px;\n    position: absolute;\n    width: 73px;\n}\n.comment-box{\n    height: 60px;\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.comment-box .story-box{\n    height: 60px;\n    width: 260px;\n}\n.comment-box .control-bar{\n    width: 100%;\n}\n.font-sizes{\n    height: 100px;\n    overflow: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story-box/story-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inline-block colw100 story-feed\" [ngClass]=\"{'comment-box': isComment === true}\" id=\"feedTop\">\n\t<div *ngIf=\"!isComment; then profilePicBox\"></div>\n\t<ng-template #profilePicBox>\n\t\t<div class=\"profile-pic no-padding pull-left contain-bg\" [ngStyle]=\"{ 'background-image': 'url(' + profilePic + ')'}\">\n\t\t</div>\n\t</ng-template>\n\t<div name=\"story\" #storyBox class=\"story-box colw100 inline-block no-outline auto-overflow pull-left\" contenteditable=\"true\" spellcheck=\"true\" role=\"textbox\" aria-multiline=\"true\" data-placeholder-default=\"What’s happening?\" aria-autocomplete=\"list\" aria-expanded=\"false\" [style.color]=\"color\" [style.font-family]=\"fontFamily\" [style.font-size]=\"fontSize\" [style.font-weight]=\"fontWeight\" [style.text-decoration]=\"txtDeco\" [style.font-style]=\"fontStyle\"  [innerHTML]=\"storyContent\" \n\t(keyup)=\"onStoryContentChange($event)\" (keydown)=\"onStoryContentChanged($event.keyCode)\">\n\t</div>\n\t<div class=\"control-bar inline-block\">\n\t\t<div class=\"pull-left color-picker-icon\">\n\t\t\t<input [colorPicker]=\"color\" (colorPickerChange)=\"color=$event; colorPickerChange($event);\" [style.background]=\"color\" class=\"cursor-pointer\"/>\n\t\t</div>\n\t\t<div class=\"pull-left text-style-btn blue-fonts cursor-pointer\" (click)=\"toggleTextStyling($event); clickedInside($event);\">\n\t\t\t<i class=\"fa fa-edit\"></i>\n\t\t</div>\n\t\t<div *ngIf=\"isShowTextStyling; then textStyling\"></div>\n\t\t<ng-template #textStyling>\n\t\t\t<div class=\"list-items pull-left text-styles\">\n\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t<div class=\"pull-left font-bold-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isBoldBtnHighLight\" (click)=\"applyBold($event); clickedInside($event);\">\n\t\t\t\t\t<span>B</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-ul-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isULBtnHighLight\" (click)=\"applyUnderline($event); clickedInside($event);\">\n\t\t\t\t\t<span>U</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-italic-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isIBtnHighLight\"  (click)=\"applyItalic($event);clickedInside($event);\">\n\t\t\t\t\t<span>I</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-family-btn\" (click)=\"toggleFontFamily($event); clickedInside($event);\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"fa fa-font blue-fonts cursor-pointer\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"isShowFontFamily; then fontFamilies\"></div>\n\t\t\t\t\t<ng-template #fontFamilies>\n\t\t\t\t\t\t<div class=\"list-items font-items pull-left\">\n\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Arial')\">Arial</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Times New Roman')\">Times New Roman</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontFamily($event, 'Courier New')\">Courier New</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-left font-size-btn\" (click)=\"clickedInside($event)\">\n\t\t\t\t\t<div class=\"blue-fonts cursor-pointer text-center\" (click)=\"toggleFontSize($event)\"><span>{{fontSize}}</span></div>\n\t\t\t\t\t<div *ngIf=\"isShowFontSize; then fontSizes\"></div>\n\t\t\t\t\t<ng-template #fontSizes>\n\t\t\t\t\t\t<div class=\"list-items font-sizes pull-left\">\n\t\t\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 9)\">9</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 10)\">10</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 11)\">11</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 12)\">12</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 13)\">13</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 14)\">14</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 15)\">15</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 16)\">16</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 17)\">17</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 18)\">18</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 19)\">19</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 20)\">20</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 21)\">21</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 22)\">22</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 23)\">23</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 24)\">24</div>\n\t\t\t\t\t\t\t<div class=\"cursor-pointer list-item\" (click)=\"applyFontSize($event, 25)\">25</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div class=\"pull-left smiley-btn blue-fonts cursor-pointer text-center\" [class.high-light]=\"isEmotionsHighLight\"  (click)=\"showEmotions($event);clickedInside($event);\">\n\t\t\t<div>\n\t\t\t\t<i class=\"fa fa-smile-o\"></i>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"isEmotionsHighLight; then emotions\"></div>\n\t\t\t<ng-template #emotions>\n\t\t\t\t<div class=\"list-items font-items pull-left emo-list\">\n\t\t\t\t\t<div class=\"arrow-up white-bg\"></div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':)')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion0-smile.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':(')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion1-sadsmile.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':D')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion2-bigsmile.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '8=)')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion3-cool.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':o')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion4-surprised.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';)')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion5-wink.gif\"/></span>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ';(')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion6-crying.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '(:|')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion7-sweating.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':|')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion8-speechless.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':*')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion9-kiss.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, 'emotion10-tongueout')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion10-tongueout.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':$')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion11-blush.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, ':^)')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion12-wondering.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|-)')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion13-sleepy.gif\"/></span>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t\t<div class=\"cursor-pointer list-item pull-left\" (click)=\"addEmotion($event, '|(')\">\n\t\t\t\t\t\t<span><img src=\"assets/images/smileys/socialutility-emotion14-dull.gif\"/></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t</div>\n\t\t<div class=\"pull-left up-img-btn blue-fonts cursor-pointer text-center\" (click)= \"imageInput.value = ''; imageInput.click();\">\n\t\t\t<i class=\"fa fa-picture-o\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div class=\"pull-left up-mus-btn blue-fonts cursor-pointer text-center\" (click)= \"musicInput.value = ''; musicInput.click();\">\n\t\t\t<i class=\"fa fa-music\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div class=\"pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)= \"videoInput.value = ''; videoInput.click();\">\n\t\t\t<i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n\t\t</div>\n\t\t<div  *ngIf=\"!isComment; then checkIn\"></div>\n\t\t<ng-template #checkIn>\n\t\t\t<div class=\"checkin-btn pull-left up-vid-btn blue-fonts cursor-pointer text-center\" (click)=\"doCheckIn($event)\">\n\t\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"!isComment; then postBtn  else addBtn\"></div>\n\t\t<ng-template #postBtn>\n\t\t\t<div class=\"pull-left post-button blue-fonts cursor-pointer text-center\">\n\t\t\t\t<div *ngIf=\"isAddPost; then addPost else updatePost\"></div>\n\t\t\t\t<ng-template #addPost>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Post</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updatePost>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Update</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<ng-template #addBtn>\n\t\t\t<div class=\"pull-left post-button blue-fonts cursor-pointer text-center\">\n\t\t\t\t<div *ngIf=\"isAddComment; then addComment else updateComment\"></div>\n\t\t\t\t<ng-template #addComment>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"postStory($event)\" [disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Add</span>\n\t\t\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updateComment>\n\t\t\t\t\t<button class=\"btn btn-primary\" class=\"post-btn\" type=\"button\" (click)=\"updateCommentItem($event)\" \n\t\t\t\t\t\t[disabled]=\"(storyBox.innerText.trim().length === 0) && (!isSmileyAdded)\">\n\t\t\t\t\t\t<span>Update</span>\n\t\t\t\t\t\t<i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n\t<!--<div class=\"action-bar\">\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"checkIn($event)\">\n\t\t\t\t<span>Check In</span>\n\t\t\t\t<i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Go Live</span>\n\t\t\t\t<i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Activity</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t\t<div class=\"pull-left\">\n\t\t\t<button class=\"btn btn-primary\" id=\"postBtn\" type=\"button\" (click)=\"updateStory($event)\">\n\t\t\t\t<span>Event</span>\n\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t</button>\n\t\t</div>\n\t</div> -->\n    <div class=\"file-input-container\">\n        <form [formGroup]=\"imageUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"imageGroup\">\n                <input type=\"file\" accept=\"image/*\" class=\"file-input\" name=\"uploadimage\" #imageInput (change)=\"fileChangeEvent($event, 'image')\"/>\n            </div>\n        </form>\n        <form [formGroup]=\"musicUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"musicGroup\">\n                <input type=\"file\" accept=\"audio/*\" class=\"file-input\" name=\"uploadmusic\" #musicInput (change)=\"fileChangeEvent($event, 'music')\"/>\n            </div>\n        </form>\n        <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                <input type=\"file\" accept=\"video/*\" class=\"file-input\" name=\"uploadvideo\" #videoInput (change)=\"fileChangeEvent($event, 'video')\"/>\n            </div>\n        </form>\n    </div>\n</div>\n\n<div *ngIf=\"!isComment then storyFeedItem\"></div>\n<ng-template #storyFeedItem>\n\t<div class=\"inline-block colw100 story-feed\" #storyFeed>\n\t\t<app-feeditem *ngFor=\"let item of feedItem\" [item]=\"item\" [userId]=\"userId\" (refreshFeed)=\"refreshFeedItem($event)\" \n\t\t(editCurrentFeedItem)= \"editCurrentFeedItem($event)\"></app-feeditem>\n\t\t<div *ngIf=\"isLoading then loading\"></div>\n\t\t<ng-template #loading>\n\t\t\t<div class=\"spinner-bg\">\n\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t<i class=\"fa fa-2x fa-spin fa-spinner blue-fonts\"></i>\n\t\t\t\t\t<span class=\"blue-fonts\">&nbsp;Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<div *ngIf=\"(!isLoading && (feedItem.length > limit)) then endResult\"></div>\n\t\t<ng-template #endResult>\n\t\t\t<div class=\"end-result blue-fonts text-center\">--- End Of Result ---</div>\n\t\t</ng-template>\n\t</div>\n</ng-template>\n\n\n<app-modal [modalTitle]=\"'Post Preview'\" [blocking]='false' [modalId]='modalId' #postedPicModal id=\"storyModal\">\n\t<div class=\"post-desc-content\">\n\t\t<div class=\"colw100 inline-block\">\n\t\t\t<div *ngIf=\"fileType === 'image' then previewPic\"></div>\n\t\t\t<div *ngIf=\"fileType === 'music' then previewMusic\"></div>\n\t\t\t<div *ngIf=\"fileType === 'checkin' then previewCheckIn\"></div>\n\t\t\t<ng-template #previewPic>\n\t\t\t\t<div class=\"preview-posted-pic pull-left\" [ngStyle]=\"{'background': 'url(' + encodedImage+ ')'}\"></div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t            <div>\n\t\t                <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"title\" id=\"postTitle\" [(ngModel)]=\"postTitle\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t                </textarea>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div *ngIf=\"isPostImage; then addImagePost else updateImagePost\"></div>\n\t\t        <ng-template #addImagePost>\n\t\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"postImage($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template #updateImagePost>\n\t\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"updateImage($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t\t<span class=\"pull-left\">Update</span>\n\t\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ng-template>\n\t\t\t<ng-template #previewMusic>\n\t\t\t\t<div class=\"preview-posted-music pull-left\">\n\t\t\t\t\t<audio #musicPlayer  preload=\"none\" controls id=\"previewMusicPlayer\">\n\t\t\t\t        <source src=\"{{postedMusicPath}}\" type=\"audio/mp3\">\n\t\t\t\t        <p>Your browser does not support the HTML5 Audio element.</p>\n\t\t\t\t    </audio>\n\t\t\t\t    <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>  \n\t\t\t\t</div>\n\t\t\t\t<div class=\"pull-right\">\n\t\t            <div>\n\t\t                <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" placeholder=\"title\" id=\"postTitle\" [(ngModel)]=\"postTitle\">\n\t\t            </div>\n\t\t            <div class=\"form-group\">\n\t\t                <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" id=\"postDesc\" [(ngModel)]=\"postDesc\">\n\t\t                </textarea>\n\t\t            </div>\n\t\t        </div>\n\t\t        <div class=\"colw100 inline-block\">\t\t\t\n\t\t\t\t\t<button id=\"okBtn\" type=\"button\" class=\"btn btn-primary text-center small-btn ok-btn\" (click)=\"postMusic($event)\" [disabled]=\"isProgress\">\n\t\t\t\t\t\t<span class=\"pull-left\">Post</span>\n\t\t\t\t\t\t<i class=\"fa fa-share-square-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template #previewCheckIn>\n\t\t\t\t<app-checkin (checkInItem)=\"onCheckIn($event)\"></app-checkin>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</app-modal>"

/***/ }),

/***/ "../../../../../src/app/story-box/story-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_data_feed_service__ = __webpack_require__("../../../../../src/app/services/data/feed.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_data_comment_service__ = __webpack_require__("../../../../../src/app/services/data/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__ = __webpack_require__("../../../../../src/app/services/data/friends.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkin_checkin_component__ = __webpack_require__("../../../../../src/app/checkin/checkin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StoryBoxComponent = (function () {
    function StoryBoxComponent(checkinComponent, router, formBuilder, modalService, feedService, commentService, friendsService) {
        var _this = this;
        this.checkinComponent = checkinComponent;
        this.router = router;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.feedService = feedService;
        this.commentService = commentService;
        this.friendsService = friendsService;
        this.refreshCommentItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.profilePicWidth = 50;
        this.loginData = undefined;
        this.profilePic = '';
        this.color = "#000";
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.fontFamily = 'Open Sans, sans-serif';
        this.fontSize = 11 + 'px';
        this.isBoldBtnHighLight = false;
        this.isULBtnHighLight = false;
        this.isIBtnHighLight = false;
        this.isEmotionsHighLight = false;
        this.isAddPost = true;
        this.isPostImage = true;
        this.postTitle = '';
        this.postDesc = '';
        this.fontWeight = 'normal';
        this.txtDeco = 'none';
        this.fontStyle = 'normal';
        this.isSmileyAdded = false;
        this.isShowTextStyling = false;
        this.storyContent = '';
        this.modalId = 'storyModal';
        this.userId = '';
        this.fullName = '';
        this.email = '';
        this.friendIdArr = [];
        this.feedItem = [];
        this.fileType = '';
        this.postedMusicPath = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.postId = '';
        this.feedLength = 0;
        this.isComment = false;
        this.isAddComment = true;
        this.skip = 0;
        this.limit = 10;
        this.total = 0;
        this.isLoading = false;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.email = loginData.username;
        this.fullName = loginData.fullname;
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.imageUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.imageGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.musicUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.musicGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        this.videoUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.videoGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]()
        });
        router.events.forEach(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                clearInterval(_this.timer);
            }
        });
    }
    StoryBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.action) {
            if (this.action === 'comment') {
                this.isComment = true;
            }
            else {
                this.getAllConfirmedFriends();
            }
        }
        if (this.operation) {
            if (this.operation === 'add') {
                this.isAddComment = true;
            }
            else {
                this.isAddComment = false;
                this.storyContent = this.replyCommentItem.commenttext;
            }
        }
        this.timer = setInterval(function () {
            _this.resetFeedParam();
            _this.refreshFeed();
        }, 120000);
    };
    StoryBoxComponent.prototype.clickedOutside = function ($event) {
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.isEmotionsHighLight = false;
        this.isShowTextStyling = false;
    };
    StoryBoxComponent.prototype.clickedInside = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // <- that will stop propagation on lower layers
    };
    StoryBoxComponent.prototype.colorPickerChange = function (event) {
        console.log(this.color);
    };
    StoryBoxComponent.prototype.toggleFontFamily = function (event) {
        this.isShowFontSize = false;
        this.isEmotionsHighLight = false;
        if (!this.isShowFontFamily) {
            this.isShowFontFamily = true;
        }
        else {
            this.isShowFontFamily = false;
        }
    };
    StoryBoxComponent.prototype.toggleTextStyling = function (event) {
        this.isEmotionsHighLight = false;
        if (this.isShowTextStyling) {
            this.isShowTextStyling = false;
        }
        else {
            this.isShowTextStyling = true;
        }
    };
    StoryBoxComponent.prototype.applyFontFamily = function (event, fontFamily) {
        this.isShowFontFamily = false;
        this.fontFamily = fontFamily;
    };
    StoryBoxComponent.prototype.toggleFontSize = function (event) {
        this.isShowFontFamily = false;
        this.isEmotionsHighLight = false;
        if (!this.isShowFontSize) {
            this.isShowFontSize = true;
        }
        else {
            this.isShowFontSize = false;
        }
    };
    StoryBoxComponent.prototype.applyFontSize = function (event, fontSize) {
        this.isShowFontSize = false;
        this.fontSize = fontSize.toString() + 'px';
    };
    StoryBoxComponent.prototype.applyBold = function (event) {
        if (this.isBoldBtnHighLight) {
            this.fontWeight = 'normal';
            this.isBoldBtnHighLight = false;
        }
        else {
            this.fontWeight = 'bold';
            this.isBoldBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.applyUnderline = function (event) {
        if (this.isULBtnHighLight) {
            this.txtDeco = 'none';
            this.isULBtnHighLight = false;
        }
        else {
            this.txtDeco = 'underline';
            this.isULBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.applyItalic = function (event) {
        if (this.isIBtnHighLight) {
            this.fontStyle = 'normal';
            this.isIBtnHighLight = false;
        }
        else {
            this.fontStyle = 'italic';
            this.isIBtnHighLight = true;
        }
    };
    StoryBoxComponent.prototype.showEmotions = function (event) {
        this.isShowFontFamily = false;
        this.isShowFontSize = false;
        this.isShowTextStyling = false;
        if (this.isEmotionsHighLight) {
            this.isEmotionsHighLight = false;
        }
        else {
            this.isEmotionsHighLight = true;
        }
    };
    StoryBoxComponent.prototype.onStoryContentChange = function (event) {
        if (this.storyBox.nativeElement.innerText.trim().length === 0) {
            this.isSmileyAdded = false;
        }
        switch (event.keyCode) {
            case 8:
                break;
            case 13:
                this.syncEmotion('');
                break;
            case 16:
                break;
            case 18:
                break;
            case 32:
                break;
            case 37:
                break;
            case 38:
                break;
            case 39:
                break;
            case 40:
                break;
            default:
        }
    };
    StoryBoxComponent.prototype.onStoryContentChanged = function (keyCode) {
        //this.storyContentText = 
        /*if(keyCode === 32){
            let storyContents = this.storyBox.nativeElement.innerHTML;
            storyContents = UtilityService.setSmileys(storyContents);
            console.log('change'+storyContents);
            this.storyContent = storyContents;
            this.setEndOfContenteditable(this.storyBox.nativeElement);
        }*/
    };
    StoryBoxComponent.prototype.setEndOfContenteditable = function (contentEditableElement) {
        var range, selection;
        if (document.createRange) {
            range = document.createRange(); //Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
            range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection(); //get the selection object (allows you to change selection)
            selection.removeAllRanges(); //remove any selections already made
            try {
                selection.addRange(range); //make the range you have just created the visible selection
            }
            catch (err) {
                console.log(err);
            }
        }
        /*else if(document.selection)//IE 8 and lower
        {
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
        }*/
    };
    StoryBoxComponent.prototype.addEmotion = function (event, symbol) {
        this.syncEmotion(symbol);
    };
    StoryBoxComponent.prototype.syncEmotion = function (symbol) {
        var _this = this;
        this.isSmileyAdded = true;
        var storyContents = this.storyBox.nativeElement.innerHTML + symbol;
        storyContents = __WEBPACK_IMPORTED_MODULE_3_app_services_utility_utility_service__["a" /* UtilityService */].setSmileys(storyContents);
        console.log('change' + storyContents);
        this.storyContent = storyContents;
        setTimeout(function () {
            _this.setEndOfContenteditable(_this.storyBox.nativeElement);
        }, 0.0001);
    };
    StoryBoxComponent.prototype.openAppModal = function (modalType) {
        if (modalType === void 0) { modalType = null; }
        var self = this;
        self.modalService.open(self.modalId);
        if (modalType === 'checkin') {
            self.checkinComponent.resetCheckin();
        }
    };
    StoryBoxComponent.prototype.editCurrentFeedItem = function (event) {
        var self = this;
        self.postId = event.item._id;
        self.fileType = event.item.type;
        self.postTitle = event.item.title;
        self.postDesc = event.item.description;
        if (self.fileType === 'text') {
            self.isAddPost = false;
            self.color = event.item.colorInfo;
            self.fontFamily = event.item.fontFamily;
            self.fontSize = event.item.fontSize;
            self.fontStyle = event.item.fontStyle;
            self.txtDeco = event.item.textDecoration;
            self.fontWeight = event.item.fontWeight;
            self.storyContent = event.item.post;
            var element = document.querySelector("#feedTop");
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        else if (self.fileType === 'image') {
            self.isPostImage = false;
            self.encodedImage = event.item.filePath;
            self.openAppModal();
        }
        else {
            self.postedMusicPath = event.item.filePath;
            self.musicPlayer.nativeElement.load();
            self.openAppModal();
        }
    };
    StoryBoxComponent.prototype.fileChangeEvent = function (event, type) {
        this.fileType = type;
        //if(this.fileType === 'image'){
        this.files = event.target.files[0];
        //this.uploadCanvasPic();
        var self = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                //$('#preview').attr('src', e.target.result);
                if (type === 'image') {
                    self.encodedImage = e.target.result;
                }
                else {
                    self.postedMusicPath = e.target.result;
                    self.musicPlayer.nativeElement.load();
                    uploadMusic();
                }
                self.openAppModal();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        function uploadMusic() {
            var formData = new FormData();
            formData.append('uploadfile', self.files);
            formData.append('userid', self.userId);
            var xhr = new XMLHttpRequest();
            xhr.open('post', __WEBPACK_IMPORTED_MODULE_8_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadMusicFeed', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                self.postedMusicPath = JSON.parse(xhr.responseText).musicPath;
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                /*if(self.isAudioAlbum){
                    self.fetchAudioAlbumInfo();
                }else{
                    self.fetchAlbumAudioInfo();
                }*/
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //}
        /*
        let self = this;
        let userId = this.userId;
        let file: any;
        if (event.target.files && event.target.files[0]) {
          file = event.target.files[0];
          uploadPhoto();
        }
        function uploadPhoto() {
            let formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if(!directUpload){
                formData.append('album', self.photosInfo.title);
            }else{
                formData.append('album', 'untitled');
        }

        let xhr = new XMLHttpRequest();
        xhr.open('post', AppSettingsService.API_ENDPOINT("local")+'/api/uploadPhotos', true);
        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                let percentage = (e.loaded / e.total) * 100;
                console.log(percentage);
                if((percentage > 0) && (percentage < 100)){
                    self.isProgress = true;
                }else{
                    self.isProgress = false;
                }
            self.uploadProgress = percentage;

            //$('div.progress div').css('width', percentage.toFixed(0) + '%');
            //$('div.progress div').html(percentage.toFixed(0) + '%');
            }
        };

        xhr.onerror = function(e) {
            alert('An error occurred while submitting the form. Maybe your file is too big');
        };
        xhr.onload = function() {
            if(self.isPhotosAlbum){
              self.fetchPhotosAlbumInfo();
            }else{
              self.fetchAlbumPhotosInfo();
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200)
            {
                callback(xhr.responseText); // Another callback here
            }
        };

        function callback(responseText){
            if(JSON.parse(responseText).status === 'sessionExpired'){
                alert('Session Expired, Please Login Again');
            }
        }

        xhr.send(formData);
        return false;*/
    };
    StoryBoxComponent.prototype.postStory = function (event) {
        this.syncEmotion('');
        /*if(this.isComment){
            alert(this.feedCommentItem._id);
        }*/
        if (this.isComment) {
            this.saveComment(undefined, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
        }
        else {
            this.postItem(undefined, 'text', this.storyContent, '', '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
        }
    };
    StoryBoxComponent.prototype.updateStory = function (event) {
        this.syncEmotion('');
        this.postItem(this.postId, 'text', this.storyContent, '', '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
    };
    StoryBoxComponent.prototype.updateCommentItem = function (event) {
        this.syncEmotion('');
        this.updateComment(this.replyCommentItem._id, 'text', this.storyContent, '', '', '', this.color, this.fontFamily, this.fontSize, this.fontStyle, this.txtDeco, this.fontWeight);
    };
    StoryBoxComponent.prototype.postImage = function (event) {
        this.postItem(undefined, 'image', '', this.encodedImage, '', this.postTitle, this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        this.postedPicModal.close();
    };
    StoryBoxComponent.prototype.updateImage = function (event) {
        this.postItem(this.postId, 'image', '', this.encodedImage, this.postTitle, '', this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        this.postedPicModal.close();
    };
    StoryBoxComponent.prototype.postMusic = function (event) {
        this.postItem(undefined, 'music', '', this.postedMusicPath, this.postTitle, '', this.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        this.postedPicModal.close();
    };
    StoryBoxComponent.prototype.onCheckIn = function (event) {
        this.postItem(undefined, 'checkin', '', event.data.mapData, '', event.data.postCheckIn, event.data.postDesc, '#000000', 'Open Sans, sans-serif', '11px', 'normal', 'none', 'normal');
        this.postedPicModal.close();
    };
    StoryBoxComponent.prototype.postItem = function (postId, type, storyContent, filePath, poster, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': postId,
            'username': this.userId,
            'email': this.email,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'post': storyContent,
            'type': type,
            'title': title,
            'description': desc,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'poster': poster,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.feedService.savePost(postObj).subscribe(function (data) { return _this.afterPostSaved(data); });
    };
    StoryBoxComponent.prototype.saveComment = function (commentId, type, storyContent, filePath, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': commentId,
            'feeditemid': this.feedCommentItem._id || undefined,
            'commenttext': storyContent,
            'commentfrom': this.userId,
            'commentto': this.feedCommentItem.userid || undefined,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'commenttype': type,
            'filepath': filePath,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.commentService.saveComment(postObj).subscribe(function (data) { return _this.afterCommentSaved(data); });
    };
    StoryBoxComponent.prototype.updateComment = function (commentId, type, storyContent, filePath, title, desc, color, fontFamily, fontSize, fontStyle, txtDeco, fontWeight) {
        var _this = this;
        var postObj = { 'id': commentId,
            'commenttext': storyContent,
            'fullname': this.fullName,
            'profilepic': this.profilePic,
            'commenttype': type,
            'filepath': filePath,
            'isReady': true,
            'isNotified': false,
            'coolArr': [],
            'commentArr': [],
            'filePath': filePath,
            'colorInfo': color,
            'fontFamily': fontFamily,
            'fontSize': fontSize,
            'fontStyle': fontStyle,
            'textDecoration': txtDeco,
            'fontWeight': fontWeight,
            'addWatcherArr': []
        };
        this.commentService.updateComment(postObj).subscribe(function (data) { return _this.afterCommentUpdated(data); });
    };
    StoryBoxComponent.prototype.afterPostSaved = function (result) {
        this.isSmileyAdded = false;
        this.storyContent = '';
        this.postTitle = '';
        this.postDesc = '';
        this.isAddPost = true;
        this.isPostImage = true;
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.resetFeedParam();
            this.refreshFeed();
        }
    };
    StoryBoxComponent.prototype.resetFeedParam = function () {
        this.skip = 0;
        this.limit = 10;
        this.total = 0;
        //this.feedItem = [];
    };
    StoryBoxComponent.prototype.afterCommentSaved = function (result) {
        /*this.isSmileyAdded = false;
        this.storyContent = '';
        this.postTitle = '';
        this.postDesc = '';
        this.isAddPost = true;
        this.isPostImage = true;*/
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshCommentItem.emit({ data: this.feedCommentItem._id });
        }
    };
    StoryBoxComponent.prototype.afterCommentUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.refreshCommentItem.emit({ data: this.replyCommentItem.commentid });
        }
    };
    StoryBoxComponent.prototype.getAllConfirmedFriends = function () {
        var _this = this;
        var postObj = { 'userid': this.userId };
        this.friendsService.getAllConfirmedFriends(postObj).subscribe(function (data) { return _this.afterGetAllConfirmedFriends(data); });
    };
    StoryBoxComponent.prototype.afterGetAllConfirmedFriends = function (result) {
        this.friendIdArr.push(this.userId);
        for (var i in result) {
            if (this.userId !== result[i].friendid) {
                this.friendIdArr.push(result[i].friendid);
            }
            if (this.userId !== result[i].userid) {
                this.friendIdArr.push(result[i].userid);
            }
        }
        this.getFeed();
    };
    StoryBoxComponent.prototype.getFeed = function () {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'reqidarr': this.friendIdArr, 'skip': this.skip, 'limit': this.limit };
        this.feedService.refreshFeed(postObj).subscribe(function (data) { return _this.afterGetFeed(data); });
    };
    StoryBoxComponent.prototype.afterGetFeed = function (result) {
        var data = result.infos;
        this.total = result.total;
        for (var i in data) {
            this.feedItem.push(data[i]);
        }
        this.isLoading = false;
    };
    StoryBoxComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.isLoading = true;
        var postObj = { 'reqidarr': this.friendIdArr, 'skip': this.skip, 'limit': this.limit };
        this.feedService.refreshFeed(postObj).subscribe(function (data) { return _this.afterRefreshFeed(data); });
    };
    StoryBoxComponent.prototype.refreshFeedItem = function (event) {
        this.resetFeedParam();
        this.refreshFeed();
    };
    StoryBoxComponent.prototype.afterRefreshFeed = function (result) {
        //let scrollTop = this.storyBox.nativeElement.scrollTop();
        this.feedItem = [];
        var data = result.infos;
        this.total = result.total;
        for (var i in data) {
            this.feedItem.push(data[i]);
        }
        this.isLoading = false;
    };
    StoryBoxComponent.prototype.doCheckIn = function (event) {
        this.fileType = 'checkin';
        this.openAppModal('checkin');
    };
    StoryBoxComponent.prototype.onModalClosed = function (event) {
        alert('modal closed');
    };
    StoryBoxComponent.prototype.onFeedScrollEnd = function () {
        this.skip = this.skip + this.limit;
        if (this.skip < this.total) {
            this.getFeed();
        }
    };
    return StoryBoxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('action'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "action", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('feedCommentItem'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "feedCommentItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('operation'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "operation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('replyCommentItem'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "replyCommentItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('storyBox'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], StoryBoxComponent.prototype, "storyBox", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('storyFeed'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], StoryBoxComponent.prototype, "storyFeed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('postedPicModal'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "postedPicModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('musicInput'),
    __metadata("design:type", Object)
], StoryBoxComponent.prototype, "musicInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('musicPlayer'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], StoryBoxComponent.prototype, "musicPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _d || Object)
], StoryBoxComponent.prototype, "refreshCommentItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoryBoxComponent.prototype, "clickedOutside", null);
StoryBoxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-story-box',
        template: __webpack_require__("../../../../../src/app/story-box/story-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/story-box/story-box.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5_app_services_data_feed_service__["a" /* FeedService */], __WEBPACK_IMPORTED_MODULE_6_app_services_data_comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */], __WEBPACK_IMPORTED_MODULE_9__checkin_checkin_component__["a" /* CheckinComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__checkin_checkin_component__["a" /* CheckinComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__checkin_checkin_component__["a" /* CheckinComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modal_modal_service__["a" /* ModalService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_data_feed_service__["a" /* FeedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_data_feed_service__["a" /* FeedService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_data_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_data_comment_service__["a" /* CommentService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_data_friends_service__["a" /* FriendsService */]) === "function" && _l || Object])
], StoryBoxComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=story-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stories-tile{\n    margin: 5px;\n}\n.entertainment-tile{\n\tmargin: 5px 5px 0px 0px;\n}\n.people-tile{\n\tmargin: 0px 5px;\n}\n.market-tile{\n\tmargin: 0px 5px 0px 0px;\n}\n.tile-name{\n\tcolor: #2b90d9;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n}\n.tile-info{\n\tcolor: #2b90d9;\t\n}\n.tile-thumb:hover{\n\tborder: 1px solid #1da1f2;\n}\n.tile-thumb:hover .tile-name, .tile-thumb:hover .tile-info, .tile-thumb:hover i{\n\tcolor: #1da1f2;\n} \n.high-light-border{\n\tborder: 1px solid #1da1f2 !important;\n}\n\n.low-light-border{\n\tborder: 1px solid ##2b90d9 !important;\n}\n.tile-thumb, .tile-thumb *{\n\tcursor: pointer;\n}\n.tile-thumb{\n\tmin-height: 105px;\n}\n\n@media only screen and (max-width: 991px) {\n\t.tile-thumb{\n\t\tmin-height: 150px;\n\t}\n   .entertainment-tile{\n   \t\tmargin: 5px 5px 5px 0px;\n   \t} \n   \t.market-tile{\n   \t\tmargin: 0px 5px 0px 0px;\n   \t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.entertainment-tile{\n    \tmargin: 0px 5px 5px 5px;\n    }\n    .market-tile{\n    \tmargin: 5px 5px 0px 5px;\n\t}\n}\t", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb stories-tile\" (click)=\"navigateToStories($event)\">\n\t\t\t\t<i class=\"fa fa-book fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Stories</span>\n\t\t\t\t<div class=\"tile-info\">Check what stories, photos, music, videos people posted.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\"><div class=\"opaque-bg inner-padding tile-thumb entertainment-tile\" (click)=\"navigateToEntertainment($event)\">\n\t\t\t<i class=\"fa fa-television fa-3x\" aria-hidden=\"true\"></i><span class=\"tile-name\">Entertainment</span>\n\t\t\t<div class=\"tile-info\">View & upload photos, music, videos.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb people-tile\">\n\t\t\t\t<i class=\"fa fa-users fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">People</span>\n\t\t\t\t<div class=\"tile-info\">Find people from your locality or any where across the world.</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding\">\n\t\t\t<div class=\"opaque-bg inner-padding tile-thumb market-tile\" (click)=\"navigateToMarket($event)\">\n\t\t\t\t<i class=\"fa fa-shopping-bag fa-3x\" aria-hidden=\"true\"></i>\n\t\t\t\t<span class=\"tile-name\">Market</span>\n\t\t\t\t<div class=\"tile-info\">Buy, sale, advertise any item.</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tile-menu/tile-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__ = __webpack_require__("../../../../../src/app/services/utility/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TileMenuComponent = (function () {
    function TileMenuComponent(router) {
        this.router = router;
        this.activeHighLight = false;
        this.activeHighLightStories = false;
        this.loginData = undefined;
    }
    TileMenuComponent.prototype.ngOnInit = function () {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
        this.profilePic = this.loginData.profilepic.imageBuffer;
        this.fullName = this.loginData.fullname;
        this.userId = this.loginData.username;
        this.profilePicWidth = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.width + 'px';
        this.profilePicHeight = __WEBPACK_IMPORTED_MODULE_2_app_services_utility_utility_service__["a" /* UtilityService */].getPicDimension(this.loginData.profilepic.profilePicDimension).dimension.height + 'px';
    };
    TileMenuComponent.prototype.navigateToEntertainment = function (event) {
        this.router.navigate(['entertainment', this.userId]);
    };
    TileMenuComponent.prototype.navigateToStories = function (event) {
        this.router.navigate(['stories', this.userId]);
    };
    TileMenuComponent.prototype.navigateToMarket = function (event) {
        this.router.navigate(['market', this.userId]);
    };
    return TileMenuComponent;
}());
TileMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tile-menu',
        template: __webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tile-menu/tile-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], TileMenuComponent);

var _a;
//# sourceMappingURL=tile-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-album-icon/video-album-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-edit-icon{\n\tdisplay: inline-block;\n    background: #2b90d9;\n    /* margin-top: -2px; */\n    height: 16px\n}   \n.video-edit-icon .fa-pencil-square{\n\tmargin-right: 2px;\n\tfont-size: 15px;\n}\n.video-edit-icon .fa-pencil-square:hover{\n\tcolor: #e9ebee;\n\tcursor: pointer;\n}\n.video-icon-container .blue-fonts{\n\tpadding-left: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-album-icon/video-album-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-icon-container\">\n\t<div class=\"colw100 video-edit-icon\"><i class=\"fa fa-pencil-square white-fonts pull-right\" aria-hidden=\"true\" (click)=\"editVideoAlbum($event)\"></i></div>\n\t<div class=\"colw100 blue-fonts bold-fonts cursor-pointer\" (click)=\"showVideoList($event)\"><span>{{item.title}}</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.videosList.length}}</span><span> videos</span></div>\n\t<div class=\"colw100 blue-fonts\"><span>{{item.created | date: 'dd/MM/yyyy'}}</span></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/video-album-icon/video-album-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoAlbumIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoAlbumIconComponent = (function () {
    function VideoAlbumIconComponent() {
        this.onEditVideoAlbum = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onShowVideoList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VideoAlbumIconComponent.prototype.ngOnInit = function () {
    };
    VideoAlbumIconComponent.prototype.editVideoAlbum = function (event) {
        this.onEditVideoAlbum.emit({ data: this.item });
    };
    VideoAlbumIconComponent.prototype.showVideoList = function (event) {
        this.onShowVideoList.emit({ data: this.item });
    };
    return VideoAlbumIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], VideoAlbumIconComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], VideoAlbumIconComponent.prototype, "onEditVideoAlbum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], VideoAlbumIconComponent.prototype, "onShowVideoList", void 0);
VideoAlbumIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video-album-icon',
        template: __webpack_require__("../../../../../src/app/video-album-icon/video-album-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-album-icon/video-album-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VideoAlbumIconComponent);

var _a, _b;
//# sourceMappingURL=video-album-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-icon/video-icon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n    background-size: cover !important;\n}\n.video-icon i{\n\tcolor: #fff;\n    text-align: center;\n    margin: 33px 35px;\n}\n.video-icon:hover{\n\tborder: 1px solid #fff;\n}\n.video-icon:hover i{\n\tcolor: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-icon/video-icon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-icon cursor-pointer\" [ngStyle]=\"{'background': 'url(' + posterURL+ ')'}\">\n<i class=\"fa fa-play-circle-o fa-3x\" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/video-icon/video-icon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoIconComponent = (function () {
    function VideoIconComponent() {
    }
    VideoIconComponent.prototype.ngOnInit = function () {
        this.posterURL = this.item.poster;
    };
    return VideoIconComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], VideoIconComponent.prototype, "item", void 0);
VideoIconComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video-icon',
        template: __webpack_require__("../../../../../src/app/video-icon/video-icon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-icon/video-icon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VideoIconComponent);

//# sourceMappingURL=video-icon.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isShow\">\n\t<div class=\"show-controls hand-cursor\" title=\"show playlist\" (click)=\"showControls($event)\">\n\t\t<i class=\"fa fa-eye \"></i>\n\t</div>\n</ng-container>\n<ng-container *ngIf=\"isShow\">\n\t<div class=\"hide-controls hand-cursor\" title=\"hide playlist\" (click)=\"hideControls($event)\">\n\t\t<i class=\"fa fa-eye-slash \"></i>\n\t</div>\n\t<div class=\"player-controls\" \n\t\tstyle=\"position: absolute;\n\t    right: 10px;\n\t    top: 10px;\n\t    width: 150px;\">\n\t    <div class=\"pull-left control-item\" (click)=\"replayVideeo($event)\">\n\t        <i class=\"fa fa-repeat\"></i>\n\t    </div>\n\t\t<div class=\"pull-left control-item\" (click)=\"playPreviousItem($event)\">\n\t\t\t<i class=\"fa fa-step-backward\"></i>\n\t\t</div>\n\t    <div *ngIf=\"isPlaying ; then pauseBtn\"></div>\n\t    <ng-template #pauseBtn>\n\t        <div class=\"pull-left control-item\" (click)=\"pauseVideeo($event)\">\n\t            <i class=\"fa fa-stop\"></i>\n\t        </div>\n\t    </ng-template>\n\t    <div *ngIf=\"isPause; then playBtn\"></div>\n\t    <ng-template #playBtn>\n\t\t   <div class=\"pull-left control-item\" (click)=\"resumeVideeo($event)\">\n\t            <i class=\"fa fa-play\"></i>\n\t        </div>\n\t    </ng-template>\n\t\t<div class=\"pull-left control-item\" (click)=\"playNextItem($event)\"><i class=\"fa fa-step-forward\"></i></div>\n\t</div>\n\t<div #videoPlayList classs=\"music-play-list\" \n\t\tstyle=\"background-color: rgba(43, 144, 217, 0);\n\t    \tdisplay: inline-block;\n\t    \tbox-sizing: border-box;\n\t    \twidth: 150px;\n\t    \tmax-height: 245px;\n\t    \ttext-overflow: ellipsis;\n\t    \toverflow-y: auto;\n\t    \ttext-align: left;\n\t    \tborder-bottom: none;\n\t    \tposition: absolute;\n\t    \tborder-bottom: 1px solid #fff;\n\t    \ttop: 40px;\n\t    \tright: 15px;\">\n\t\t<div class=\"video-list\"  *ngFor=\"let item of videoSource; let indx = index\">\n\t\t\t<div class=\"row no-margin pull-left inline-block hand-cursor red-highlight item-row music-item\" (click)=\"videoListItemClick($event, item, indx)\" [attr.id]=\"item.mp4Video\" [class.item-highlight]=\"item.mp4Video === mp4Video\"\n\t\t\t\tstyle=\"border: 1px solid #fff; border-bottom: none;\">\n\t\t\t\t<div class=\"row no-margin white-fonts music-name pull-right\">\n\t                <span style=\"width: 12px; margin-left: 2px; margin-right: 4px;\">{{indx+1}}&nbsp;<span>-</span></span>\n\t\t\t\t\t<span style=\"white-space: nowrap;\n\t    \t\t\t\ttext-overflow: ellipsis;\n\t    \t\t\t\toverflow: hidden;\n\t    \t\t\t\tdisplay: block;\n\t    \t\t\t\tpadding: 0px 4px;\n\t    \t\t\t\twidth: 106px;\n\t                    margin-left: 3px;\">\n\t    \t\t\t\t{{item.mp4Video}}\n\t\t    \t\t</span>\n\t                <span >\n\t                \t<div class=\"vid-icon\" [ngStyle]=\"{'background': 'url(' + item.poster+ ')', \n\t\t\t\t'cursor':' '+ mouseCursor +'', \n\t\t\t\t'background-repeat': 'no-repeat',\n\t\t\t\t'background-size': ' '+ bgSize +' ',\n\t\t\t\t'width':' '+ iw +'px', \n\t\t\t\t'height':' '+ ih +'px',\n\t\t\t\t'margin':' '+ mr +'px '+ ml +'px'}\"></div>\n\t                </span>\n\n\t\t    \t</div> \n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = (function () {
    function VideoListComponent(el) {
        this.playVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.pauseVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.resumeVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.replayVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isPlaying = true;
        this.isPause = false;
        this.itemCount = 0;
        this.videoListClick = false;
        this.isShow = true;
        this.bgSize = 'cover';
        this.ml = 2;
        this.mr = 2;
        this.iw = 17;
        this.ih = 17;
        this.el = el;
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.ngAfterViewInit = function () {
        var cutOffHeight = 100;
        var playListHeight = this.videoPlayList.nativeElement.offsetHeight;
        var hostElem = this.el.nativeElement;
        var playListContentHeight = hostElem.parentNode.offsetHeight;
        if (playListHeight >= (playListContentHeight - cutOffHeight)) {
            playListHeight = playListContentHeight - cutOffHeight;
            this.videoPlayList.nativeElement.style.height = playListHeight + 'px';
        }
        //this.actualAudio = this.musicSource[0].actualAudio;
        this.addEventListeners();
    };
    VideoListComponent.prototype.removeEventListeners = function () {
        //let self = this;
        if (document.removeEventListener) {
            //document.removeEventListener('playNext', this.playNextItem);
            //document.removeEventListener('onPauseAudio', this.onPauseAudio);
            //document.removeEventListener('onPlayAudio', this.onPlayAudio);
        }
    };
    VideoListComponent.prototype.addEventListeners = function () {
        //document.addEventListener('playNext', this.playNextItem);
        //document.addEventListener('onPauseAudio', this.onPauseAudio);
        //document.addEventListener('onPlayAudio', this.onPlayAudio);
    };
    VideoListComponent.prototype.onPlayVideo = function (event) {
        //if(this.musicListClick === false){
        //}
        this.isPlaying = true;
        this.isPause = false;
        this.videoListClick = false;
    };
    VideoListComponent.prototype.onPauseVideo = function (event) {
        this.videoListClick = false;
        this.isPlaying = false;
        this.isPause = true;
    };
    VideoListComponent.prototype.videoListItemClick = function (event, item, indx) {
        this.videoListClick = true;
        this.playVideo.emit(item);
        this.isPlaying = true;
        this.isPause = false;
        this.mp4Video = item.mp4Video;
        this.itemCount = Number(indx);
    };
    VideoListComponent.prototype.pauseVideeo = function (event) {
        this.videoListClick = false;
        this.pauseVideo.emit('pause');
        this.isPause = true;
        this.isPlaying = false;
    };
    VideoListComponent.prototype.resumeVideeo = function (event) {
        this.videoListClick = false;
        this.resumeVideo.emit('resume');
        this.isPause = false;
        this.isPlaying = true;
    };
    VideoListComponent.prototype.replayVideeo = function (event) {
        this.replayVideo.emit('replay');
    };
    VideoListComponent.prototype.playNextItem = function (event) {
        this.videoListClick = false;
        if (this.itemCount < (this.videoSource.length - 1)) {
            this.itemCount++;
        }
        else {
            this.itemCount = 0;
        }
        var item = this.videoSource[this.itemCount];
        this.videoListItemClick(null, item, this.itemCount);
        this.mp4Video = item.mp4Video;
        this.smoothItemScroll();
    };
    VideoListComponent.prototype.playPreviousItem = function (event) {
        this.videoListClick = false;
        if (this.itemCount >= 1) {
            this.itemCount--;
        }
        else {
            this.itemCount = this.videoSource.length - 1;
        }
        var item = this.videoSource[this.itemCount];
        this.videoListItemClick(null, item, this.itemCount);
        this.mp4Video = item.mp4Video;
        this.smoothItemScroll();
    };
    VideoListComponent.prototype.smoothItemScroll = function () {
        var body = document.getElementsByTagName('body')[0];
        body.style.position = "fixed";
        var element = document.getElementById(this.mp4Video);
        element.scrollIntoView({ behavior: "smooth" });
        body.style.position = "relative";
    };
    VideoListComponent.prototype.hideControls = function (event) {
        this.isShow = false;
    };
    VideoListComponent.prototype.showControls = function (event) {
        this.isShow = true;
    };
    return VideoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('videoPlayList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], VideoListComponent.prototype, "videoPlayList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('videoSource'),
    __metadata("design:type", Object)
], VideoListComponent.prototype, "videoSource", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('mp4Video'),
    __metadata("design:type", Object)
], VideoListComponent.prototype, "mp4Video", void 0);
VideoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video-list',
        template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
        host: {
            '(document:playNextVideo)': 'playNextItem($event)',
            '(document:onPlayVideo)': 'onPlayVideo($event)',
            '(document:onPauseVideo)': 'onPauseVideo($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], VideoListComponent);

var _a, _b;
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#video{\n\twidth: 100%;\n}\n.video-content{\n\tpadding: 15px 0px;\n}\n\n.uplod-new:hover, .new-album:hover{\n\tcursor: pointer;\n}\n.uplod-new:hover span, .uplod-new:hover i, .new-album:hover span, .new-album:hover i {\n\tcolor: #fff !important;\n}\n.file-input-container{\n\tdisplay: none;\n}\n#progressBar{\n\twidth: 250px;\n}\n.under-line{\n\ttext-decoration: underline;\n}\n.search-input{\n    line-height: 25px;\n    height: 25px;\n    display: block;\n    width: 154px;\n    border: none;\n    outline: none;\n    border: 1px solid #2b90d9;\n    border-radius: 2px;\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n    background: none;\n}\n.fa-search{\n    float: right;\n    color: #2b90d9 !important;\n    font-size: 15px;\n    line-height: 23px;\n    background: #f5f8fa;\n    padding: 0px 3px;\n    border: 1px solid #2b90d9;\n    border-left: none;\n    border-radius: 2px;\n    border-top-left-radius: 0px;\n    border-bottom-left-radius: 0px;\n}\ntextarea.form-control{\n\theight: 100px !important;\n}\napp-video-album-icon{\n\twidth: 100px;\n    height: 100px;\n    border: 1px solid #2b90d9;\n    margin: 10px 5px 0px 0px;\n}\n.video-container, #video{\n    max-height: 314px;\n    background: #000;\n}\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #2b90d9;\n}\n::-moz-placeholder { /* Firefox 19+ */\n  color: #2b90d9;\n}\n:-ms-input-placeholder { /* IE 10+ */\n  color: #2b90d9;\n}\n:-moz-placeholder { /* Firefox 18- */\n  color: #2b90d9;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"video-container\">\n    <video #videoPlayer id='video'\n        controls \n        poster=\"{{posterPath}}\">\n   <!-- <video id='video'\n        poster=\"https://media.w3.org/2010/05/sintel/poster.png\">-->\n        <source id='mp4'\n            src=\"{{mp4VideoPath}}\" \n            type='video/mp4'>\n       <!-- <source id='webm'\n            src=\"{{webmVideoPath}}\" \n            type='video/webm'>-->\n       <!-- <source id='ogv'\n            src=\"https://media.w3.org/2010/05/sintel/trailer.ogv\"\n            type='video/ogg'>-->\n      <p>Your browser does not support the HTML5 Video element.</p>\n    </video>\n    <div #videoList></div>\n      <!-- Video Controls -->\n    <!--<div id=\"video-controls\">\n        <div><input type=\"range\" min=\"1\" max=\"100\" step=\"1\" value=\"15\" class=\"colw100 no-outline\" id=\"seek-bar\"></div>\n        <div>\n            <i id=\"play-pause\" class=\"fa fa-play-circle fa-2x blue-fonts\"></i>    \n            <button type=\"button\" id=\"mute\">Mute</button>\n            <input type=\"range\" id=\"volumeBar\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">\n            <button type=\"button\" id=\"full-screen\">Full-Screen</button>\n        </div>\n    </div>-->\n</div>\n<div class=\"video-content\">\n    <div class=\"title semi-transparent-bg\">\n        <div class=\"line-height-sixteen\">\n            <i class=\"fa fa-file-video-o blue-fonts fa-2x\" aria-hidden=\"true\"></i>\n            <span class=\"blue-fonts medium-fonts\">Videos</span>\n        </div>\n    </div>\n    <div *ngIf=\"isVideoAlbum ; then albumVideoUploader\"></div>\n    <ng-template #albumVideoUploader>\n        <div class=\"inline-block semi-transparent-bg colw100\">\n            <div class=\"pull-left\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                            <input type=\"file\" accept=\"video/*\" class=\"file-input\" name=\"uploadfile\" #fileInput (change)=\"fileChangeEvent($event, true)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"cancelAlbum(null); fileInput.value = ''; fileInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Upload New Videos</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The video will be uploaded to your untitled album.</span>\n                </div>\n                <div class=\"new-album\">\n                    <span class=\"blue-fonts\" (click)=\"createVideoAlbum($event)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                        <span>Create New Album</span>\n                    </span>\n                </div>\n                <div *ngIf=\"isCreateAlbum ; then createAlbum\"></div>\n                <ng-template #createAlbum >\n                    <form [formGroup]=\"albumForm\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" class=\"form-control no-bg no-brder-radius blue-fonts blue-border\" aria-describedby=\"emailHelp\" placeholder=\"title\" formControlName=\"albumTitle\" id=\"albumTitle\" [(ngModel)]=\"albumTitle\">\n                            <app-control-messages [control]=\"albumForm.controls.albumTitle\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control no-resize no-bg no-brder-radius blue-fonts blue-border\" rows=\"5\" cols=\"30\" placeholder=\"Add Description...\" formControlName=\"albumDesc\" id=\"albumDesc\" [(ngModel)]=\"albumDesc\">\n                            </textarea>\n                            <app-control-messages [control]=\"albumForm.controls.albumDesc\"></app-control-messages>\n                        </div>\n                        <div class=\"form-group row justify-content-center align-items-center no-margin\">\n                            <button id=\"loginBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"cancelAlbum()\" >\n                                <i class=\"fa fa-times no-margin\" aria-hidden=\"true\"></i>\n                                <span>Cancel</span>\n                            </button>\n                            <div *ngIf=\"isAddAlbum ; then addBtn\"></div>\n                            <ng-template #addBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"createAlbumInfo($event)\">\n                                    <span>Create</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                            <div *ngIf=\"isUpdateAlbum ; then updateBtn\"></div>\n                            <ng-template #updateBtn >\n                                <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!albumForm.valid\" (click)=\"updateAlbumInfo($event)\">\n                                    <span>Edit</span>\n                                    <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i>\n                                </button>\n                            </ng-template>\n                        </div>\n                        <div [ngClass]=\"{'error-message': isError, 'status-message': isStatus}\">\n                            <div class=\"server-msg text-center\">{{serverMessage}}</div>\n                        </div>\n                    </form>\n                </ng-template>\n                <progress value=\"0\" max=\"100\" id=\"progressBar\" [value]=\"uploadProgress\" [hidden]=\"!isProgress\"></progress>\n            </div>\n        </div>\n    </ng-template>\n    <div class=\"inline-block semi-transparent-bg colw100\">\n        <div *ngIf=\"isVideoAlbum ; then videoAlbum\"></div>\n        <ng-template #videoAlbum >\n            <div class=\"album-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"albumText\" #searchAlbum/>\n                </div>\n                <div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>\n            </div>\n            <div *ngIf=\"loadCount > 0 ; then videoLoader\"></div>\n            <ng-template #videoLoader>\n                <div class=\"red-fonts inline-block lineheight-25\">\n                    <div class=\"pull-left\">Processing your video, don't refresh.</div>\n                    <div class=\"pull-left\"><i class=\"fa fa-cog fa-spin fa-2x\"></i></div>\n                </div>\n            </ng-template>\n            <div class=\"album-icons\">\n                <app-video-album-icon class=\"pull-left\" *ngFor=\"let item of videoAlbumList | albumSearch : albumText\" [item]=\"item\" (click)=\"searchAlbum.value=''; albumText = '';\" (onEditVideoAlbum)=\"editVideoAlbum($event)\" \n                (onShowVideoList)=\"showVideoList($event)\"></app-video-album-icon>\n            </div>\n        </ng-template>\n        <div *ngIf=\"isAlbumVideo ; then albumVideo\"></div>\n        <ng-template #albumVideo >\n            <div class=\"video-search-box pull-left colw100\">\n                <div class=\"pull-left\">\n                    <!--<input class=\"search-input blue-fonts\" type=\"text\" placeholder=\"Search\"  autocomplete=\"off\" spellcheck=\"false\" aria-autocomplete=\"list\" aria-expanded=\"false\" [(ngModel)]=\"videoText\" #searchVideo/>-->\n                    <div class=\"cursor-pointer blue-fonts\" (click)=\"goToMyAlbum($event)\">\n                        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n                        <span>{{albumTitle}}</span>\n                    </div>\n                </div>\n                <!--<div class=\"pull-left\"><i class=\"fa fa-search cursor-pointer\" aria-hidden=\"true\"></i></div>-->\n            </div>\n            <div class=\"video-uploader\">\n                <div class=\"file-input-container\">\n                    <form [formGroup]=\"videoUploadForm\" action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                        <div class=\"form-group\" [formGroup]=\"videoGroup\">\n                            <input type=\"file\" accept=\"video/*\" class=\"video-input\" name=\"uploadfile\" #videoInput (change)=\"fileChangeEvent($event, false)\"/>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"uplod-new\" (click)= \"videoInput.value = ''; videoInput.click();\" >\n                    <i class=\"fa fa-upload blue-fonts\" aria-hidden=\"true\"></i>\n                    <span class=\"blue-fonts\">Add New Videos.</span>\n                </div>\n                <div class=\"title-div red-fonts\">\n                    <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\n                    <span>The video will be uploaded to this album.</span>\n                </div>\n                <div *ngIf=\"loadCount > 0 ; then videoLoader\"></div>\n                <ng-template #videoLoader>\n                    <div class=\"red-fonts inline-block lineheight-25\">\n                        <div class=\"pull-left\">Processing your video, don't refresh.</div>\n                        <div class=\"pull-left\"><i class=\"fa fa-cog fa-spin fa-2x\"></i></div>\n                    </div>\n                </ng-template>\n            </div>\n            <div class=\"album-icons\">\n                <app-video-icon (click)=\"playVideo(item)\" class=\"pull-left\" *ngFor=\"let item of videosList | videoSearch : videoText\" [item]=\"item\"></app-video-icon>\n            </div>\n        </ng-template>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-player/video-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__ = __webpack_require__("../../../../../src/app/services/validators/validation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__ = __webpack_require__("../../../../../src/app/services/settings/app-settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_data_video_service__ = __webpack_require__("../../../../../src/app/services/data/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VideoPlayerComponent = (function () {
    function VideoPlayerComponent(formBuilder, videoService, componentFactoryResolver) {
        this.formBuilder = formBuilder;
        this.videoService = videoService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.userId = '';
        this.uploadProgress = 0;
        this.isProgress = false;
        this.albumTitle = '';
        this.albumDesc = '';
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.isVideoAlbum = true;
        this.isAlbumVideo = false;
        this.loadCount = 0;
        this.mp4VideoPath = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
        this.webmVideoPath = 'https://media.w3.org/2010/05/sintel/trailer.webm';
        this.posterPath = 'https://media.w3.org/2010/05/sintel/poster.png';
        this.videoSource = [];
        this.loadCount = 0;
        var loginData = JSON.parse(localStorage.getItem('loginData'));
        this.userId = loginData.username;
        this.videoUploadForm = this.formBuilder.group({
            'file': ['']
        });
        this.videoGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        this.albumForm = this.formBuilder.group({
            'albumTitle': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]],
            'albumDesc': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2_app_services_validators_validation_service__["a" /* ValidationService */].blankDataValidator]]
        });
        this.fetchVideoAlbumInfo();
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
    };
    VideoPlayerComponent.prototype.ngAfterViewInit = function () {
        this.videoPlayer.nativeElement.addEventListener("ended", onPlayNextVideo);
        this.videoPlayer.nativeElement.addEventListener("pause", onPauseVideo);
        this.videoPlayer.nativeElement.addEventListener("play", onPlayVideo);
        var self = this;
        function onPlayNextVideo() {
            self.triggerDocumentEvent('playNextVideo', { 'event': 'playNextVideo', 'eventObj': '' });
        }
        function onPauseVideo() {
            self.triggerDocumentEvent('onPauseVideo', { 'event': 'onPauseVideo', 'eventObj': '' });
        }
        function onPlayVideo() {
            self.triggerDocumentEvent('onPlayVideo', { 'event': 'onPauseVideo', 'eventObj': '' });
        }
    };
    VideoPlayerComponent.prototype.fileChangeEvent = function (event, directUpload) {
        var self = this;
        if (self.loadCount > 0) {
            alert('Please wait while we are processing your previous video.');
            return;
        }
        var userId = this.userId;
        var file;
        if (event.target.files && event.target.files[0]) {
            file = event.target.files[0];
            uploadVideo();
        }
        function uploadVideo() {
            self.loadCount++;
            var formData = new FormData();
            formData.append('uploadfile', file);
            formData.append('userid', userId);
            if (!directUpload) {
                formData.append('album', self.videoInfo.title);
            }
            else {
                formData.append('album', 'untitled');
            }
            var xhr = new XMLHttpRequest();
            xhr.open('post', __WEBPACK_IMPORTED_MODULE_3_app_services_settings_app_settings_service__["a" /* AppSettingsService */].API_ENDPOINT("local") + '/api/uploadVideo', true);
            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    var percentage = (e.loaded / e.total) * 100;
                    console.log(percentage);
                    if ((percentage > 0) && (percentage < 100)) {
                        self.isProgress = true;
                    }
                    else {
                        self.isProgress = false;
                    }
                    self.uploadProgress = percentage;
                    //$('div.progress div').css('width', percentage.toFixed(0) + '%');
                    //$('div.progress div').html(percentage.toFixed(0) + '%');
                }
            };
            xhr.onerror = function (e) {
                if (self.loadCount > 0) {
                    self.loadCount--;
                }
                alert('An error occurred while submitting the form. Maybe your file is too big');
            };
            xhr.onload = function () {
                /*let file = xhr.responseText;
                $('div.progress div').css('width','0%');
                $('div.progress').hide();
                showMsg("alert alert-success", "File uploaded successfully!");
                $('#myFile').val('');*/
                if (self.isVideoAlbum) {
                    self.fetchVideoAlbumInfo();
                }
                else {
                    self.fetchAlbumVideoInfo();
                }
                if (self.loadCount > 0) {
                    self.loadCount--;
                }
            };
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    callback(xhr.responseText); // Another callback here
                }
            };
            function callback(responseText) {
                if (JSON.parse(responseText).status === 'sessionExpired') {
                    alert('Session Expired, Please Login Again');
                }
            }
            xhr.send(formData);
            return false;
        }
        //var files = fileInput.srcElement.files;
        //console.log(files);
        //this.uploadService.makeFileRequest('https://localhost:3000/api/uploadCoverPic', [], files).subscribe(() => {
        //  console.log('sent');
        //});
    };
    VideoPlayerComponent.prototype.createAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.videoService.createVideoAlbum(postObj).subscribe(function (data) { return _this.afterAlbumCreated(data); });
        }
    };
    VideoPlayerComponent.prototype.afterAlbumCreated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchVideoAlbumInfo();
        }
    };
    VideoPlayerComponent.prototype.updateAlbumInfo = function (event) {
        var _this = this;
        if (this.albumForm.dirty && this.albumForm.valid) {
            // alert('Name: ${this.loginForm.value.email} Email: ${this.loginForm.value.password}');
            var postObj = { 'id': this.albumInfo._id,
                'username': this.userId,
                'title': this.albumForm.value.albumTitle,
                'desc': this.albumForm.value.albumDesc };
            this.videoService.updateVideoAlbum(postObj).subscribe(function (data) { return _this.afterAlbumUpdated(data); });
        }
    };
    VideoPlayerComponent.prototype.afterAlbumUpdated = function (result) {
        if (result.status === 'failure') {
            alert(result.message);
        }
        else {
            this.cancelAlbum(null);
            //alert(result.message);
            this.fetchVideoAlbumInfo();
        }
    };
    VideoPlayerComponent.prototype.createVideoAlbum = function (event) {
        this.isCreateAlbum = true;
        this.isAddAlbum = true;
        this.isUpdateAlbum = false;
    };
    VideoPlayerComponent.prototype.cancelAlbum = function (event) {
        this.isCreateAlbum = false;
        this.isAddAlbum = false;
        this.isUpdateAlbum = false;
        this.albumForm.reset();
    };
    VideoPlayerComponent.prototype.fetchVideoAlbumInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId };
        this.videoService.fetchVideoAlbumInfo(postObj).subscribe(function (data) { return _this.afterVideoAbumInfo(data); });
    };
    VideoPlayerComponent.prototype.fetchAlbumVideoInfo = function () {
        var _this = this;
        var postObj = { 'username': this.userId, 'album': this.albumTitle };
        this.videoService.fetchAlbumVideoInfo(postObj).subscribe(function (data) { return _this.afterAbumVideoInfo(data); });
    };
    VideoPlayerComponent.prototype.afterVideoAbumInfo = function (result) {
        this.videoAlbumList = result;
        this.videoSource = [];
        this.videoSource = this.videoAlbumList[0].videosList;
        this.createVideoList(this.videoSource);
        this.playVideo(this.videoAlbumList[0].videosList[0], -1);
    };
    VideoPlayerComponent.prototype.afterAbumVideoInfo = function (result) {
        this.videosList = result[0].videosList;
    };
    //Need to activate/deactivate edit btn later based on changes in title field
    VideoPlayerComponent.prototype.editVideoAlbum = function (event) {
        this.albumInfo = event.data;
        this.isCreateAlbum = true;
        this.isAddAlbum = false;
        this.isUpdateAlbum = true;
        this.albumTitle = this.albumInfo.title;
        this.albumDesc = this.albumInfo.description;
    };
    //Diplaying the list of videos under a particular video album
    VideoPlayerComponent.prototype.showVideoList = function (event) {
        this.videoInfo = event.data;
        this.isVideoAlbum = false;
        this.isAlbumVideo = true;
        this.videosList = this.videoInfo.videosList;
        this.albumTitle = this.videoInfo.title;
    };
    VideoPlayerComponent.prototype.goToMyAlbum = function (event) {
        this.isVideoAlbum = true;
        this.isAlbumVideo = false;
        this.fetchVideoAlbumInfo();
    };
    VideoPlayerComponent.prototype.playVideo = function (data, indx) {
        console.log(data);
        this.videoPlayer.nativeElement.pause();
        this.posterPath = data.poster;
        this.mp4VideoPath = data.mp4Video;
        //this.webmVideoPath = data.webmVideo;
        try {
            this.videoListRef.instance.mp4Video = this.mp4VideoPath;
            this.videoListRef.instance.itemCount = indx;
            if (indx === -1) {
                this.videoListRef.instance.itemCount = 0;
            }
            if (indx !== -1) {
                //this.smoothItemScroll(this.mp3AudioPath);
                this.videoListRef.instance.smoothItemScroll();
            }
            this.videoPlayer.nativeElement.load();
            this.videoPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    VideoPlayerComponent.prototype.playVideeo = function (data) {
        this.videoPlayer.nativeElement.pause();
        this.posterPath = data.poster;
        this.mp4VideoPath = data.mp4Video;
        try {
            this.videoPlayer.nativeElement.load();
            this.videoPlayer.nativeElement.play();
        }
        catch (err) {
            console.log(err);
        }
    };
    VideoPlayerComponent.prototype.createVideoList = function (videoSource) {
        var _this = this;
        if (this.videoListRef) {
            this.videoListRef.instance.playVideo.unsubscribe(function (data) { return _this.playVideeo(data); });
            this.videoListRef.instance.pauseVideo.unsubscribe(function (data) { return _this.pauseVideo(data); });
            this.videoListRef.instance.resumeVideo.unsubscribe(function (data) { return _this.resumeVideo(data); });
            //this.videoPlayer.nativeElement.removeEventListener("ended", this.playNextItem());
            this.videoListRef.instance.replayVideo.unsubscribe(function (data) { return _this.replayVideo(data); });
            this.videoListRef.instance.removeEventListeners();
            this.videoListRef.instance.videoSource = [];
            this.videoListRef.instance.mp4Video = '';
            this.videoListRef.destroy();
        }
        this.videoListComponent = this.componentFactoryResolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_5__video_list_video_list_component__["a" /* VideoListComponent */]);
        this.videoListRef = this.videoList.createComponent(this.videoListComponent);
        this.videoListRef.instance.videoSource = videoSource;
        this.videoListRef.instance.mp4Video = videoSource[0].mp4Video;
        this.videoListRef.instance.playVideo.subscribe(function (data) { return _this.playVideeo(data); });
        this.videoListRef.instance.pauseVideo.subscribe(function (data) { return _this.pauseVideo(data); });
        this.videoListRef.instance.resumeVideo.subscribe(function (data) { return _this.resumeVideo(data); });
        this.videoListRef.instance.replayVideo.subscribe(function (data) { return _this.replayVideo(data); });
        //this.videoPlayer.nativeElement.addEventListener("ended", this.playNextItem());
    };
    VideoPlayerComponent.prototype.playNextItem = function () {
        alert('video ended');
    };
    VideoPlayerComponent.prototype.replayVideo = function (data) {
        this.videoPlayer.nativeElement.currentTime = 0;
        //this.videoPlayer.nativeElement.play();	
    };
    VideoPlayerComponent.prototype.pauseVideo = function (data) {
        this.videoPlayer.nativeElement.pause();
    };
    VideoPlayerComponent.prototype.resumeVideo = function (data) {
        this.videoPlayer.nativeElement.play();
    };
    VideoPlayerComponent.prototype.triggerDocumentEvent = function (eventType, evtObj) {
        var evt = new CustomEvent(eventType, { 'detail': evtObj });
        document.dispatchEvent(evt);
    };
    return VideoPlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('videoPlayer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], VideoPlayerComponent.prototype, "videoPlayer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('videoList', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _b || Object)
], VideoPlayerComponent.prototype, "videoList", void 0);
VideoPlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video-player',
        template: __webpack_require__("../../../../../src/app/video-player/video-player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-player/video-player.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_services_data_video_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_data_video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_data_video_service__["a" /* VideoService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ComponentFactoryResolver */]) === "function" && _e || Object])
], VideoPlayerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=video-player.component.js.map

/***/ }),

/***/ "../../../../../src/app/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.wrapper-app,\nfooter div {\n  max-width:80rem;\n  margin:0 auto;\n}\n\ndiv.wrapper-app {\n  border:0.1rem solid #000;\n  background-color:#fff;\n}\n\ndiv.wrapper-content {\n  min-height:40rem;\n  overflow: visible;\n  padding:2rem;\n}\n\n/** EasyRTC Styles **/\n\ndiv.connect-caller-buttons {\n  margin-bottom:1rem;\n}\n\ndiv.connect-caller-buttons > h3,\ndiv.connect-caller-buttons > div {\n  display:inline-block;\n}\n\ndiv.video-frames {\n  text-align:center;\n}\n\ndiv.video-self,\ndiv.video-caller {\n  width:32rem;\n  height:24rem;\n  display:inline-block;\n  overflow:hidden;\n  border:0.1rem solid #000;\n  background-color:#ddd;\n  margin:0 1.4rem;\n}\n\ndiv.video-caller {\n  position:relative; /* Required so that Close (X) button appears */\n}\n\nvideo {\n  width:32rem;\n  height:24rem;\n  -o-object-fit:cover;\n     object-fit:cover;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-content\">\n  <h2>Simple Audio/Video Demo</h2>\n  <div><strong>I am:</strong> {{myId}}</div>\n  <div class=\"connect-caller-buttons\">\n    <h3>Connected Clients:</h3>\n    <div id=\"otherClients\"><button *ngFor=\"let easyrtcId of (connectedClientsList)\" (click)=\"performCall(easyrtcId)\">{{easyrtcId}}</button></div>\n  </div>\n  <div class=\"video-frames\">\n    <div class=\"video-self\"><video id=\"videoSelf\" (click)=\"connectVideo();\" #selfVideo></video></div>\n    <div class=\"video-caller\"><video id=\"videoCaller\" #callerVideo></video></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/// <reference path="../../../libs/easyrtc.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent(cdr) {
        this.cdr = cdr;
        this.myId = '';
        this.connectedClientsList = [];
        //this.loadScript('http://localhost:3000/libs/socket.io/socket.io.js');
        //this.loadScript('http://localhost:3000/libs/easyrtc/easyrtc.js');
    }
    VideoComponent.prototype.clearConnectList = function () {
        this.connectedClientsList = [];
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.performCall = function (clientEasyrtcId) {
        var successCB = function (a, b) { };
        var failureCB = function (a, b) { };
        easyrtc.call(clientEasyrtcId, successCB, failureCB, undefined, undefined);
    };
    VideoComponent.prototype.buildCaller = function (easyrtcid) {
        var _this = this;
        return function () {
            _this.performCall(easyrtcid);
        };
    };
    VideoComponent.prototype.convertListToButtons = function (roomName, data, isPrimary) {
        this.clearConnectList();
        for (var easyrtcid in data) {
            this.connectedClientsList.push(easyrtc.idToName(easyrtcid));
        }
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.updateMyEasyRTCId = function (myEasyRTCId) {
        this.myId = myEasyRTCId;
        this.cdr.detectChanges();
    };
    VideoComponent.prototype.loginSuccess = function (easyrtcid) {
        this.updateMyEasyRTCId(easyrtc.cleanId(easyrtcid));
    };
    VideoComponent.prototype.loginFailure = function (errorCode, message) {
        this.updateMyEasyRTCId('Login failed. Reason: ' + message);
    };
    VideoComponent.prototype.connect = function () {
        var _this = this;
        easyrtc.setVideoDims(320, 240, undefined);
        var convertListToButtonShim = function (roomName, data, isPrimary) {
            _this.convertListToButtons(roomName, data, isPrimary);
        };
        easyrtc.setRoomOccupantListener(convertListToButtonShim);
        easyrtc.easyApp("easyrtc.audioVideoSimple", "videoSelf", ["videoCaller"], this.loginSuccess.bind(this), this.loginFailure.bind(this));
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
        // let socketServer = "http://localhost:3000/";
        //  easyrtc.setSocketUrl(socketServer, {});
        this.connect();
    };
    VideoComponent.prototype.loadScript = function (url) {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    VideoComponent.prototype.connectVideo = function () { };
    return VideoComponent;
}());
VideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__("../../../../../src/app/video/video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video/video.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object])
], VideoComponent);

var _a;
//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map