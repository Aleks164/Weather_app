!function(){var t={757:function(t,e,n){t.exports=n(666)},666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===l)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=l;var u=p(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",l="executing",d="completed",m={};function y(){}function v(){}function g(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(T([])));x&&x!==n&&r.call(x,i)&&(w=x);var L=g.prototype=y.prototype=Object.create(w);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(o,i,a,c){var u=p(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=p(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:_}}function _(){return{value:e,done:!0}}return v.prototype=g,u(L,"constructor",g),u(g,"constructor",v),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},S(I.prototype),u(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new I(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},359:function(t,e,n){"use strict";t.exports=n.p+"./images/0474d806027772c6e6ae.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))}}var r=n(757),o=n.n(r);function i(){return a.apply(this,arguments)}function a(){return(a=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.localStorage.getItem("inputs"),t.abrupt("return",null===e?[]:JSON.parse(e));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return u.apply(this,arguments)}function u(){return(u=e(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=window.localStorage.getItem("coord"),t.abrupt("return",null===e?[]:JSON.parse(e));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){var e=JSON.stringify(t);window.localStorage.setItem("inputs",e)}function p(t){var e=JSON.stringify(t);window.localStorage.setItem("coord",e)}function f(t,e){return h.apply(this,arguments)}function h(){return(h=e(o().mark((function t(e,n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.length>10&&n.pop(),e.innerHTML='<ol id = "olList">'.concat(n.map((function(t){return'<li onclick="cityInList(this.innerHTML);" class = "listItem">'.concat(t,"</li>")})).join(""),"</ol>");case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l="208564fc52a377799242a74d74f824e0",d=!1;function m(t){return y.apply(this,arguments)}function y(){return(y=e(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=8;break}return t.next=4,window.fetch("https://get.geojs.io/v1/ip/geo.json");case 4:return n=t.sent,t.next=7,n.json();case 7:e=t.sent;case 8:return t.abrupt("return",e);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return","Failed to fetch of geo");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function v(){return g.apply(this,arguments)}function g(){return(g=e(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:if(e=t.sent,t.prev=3,"Failed to fetch of geo"!==e){t.next=6;break}throw new Error("Failed to fetch of geo");case 6:return t.next=8,window.fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e.city,"&appid=").concat(l));case 8:return n=t.sent,t.next=11,n.json();case 11:return d=t.sent,t.abrupt("return",d);case 15:return t.prev=15,t.t0=t.catch(3),t.abrupt("return","".concat(t.t0.message));case 18:case"end":return t.stop()}}),t,null,[[3,15]])})))).apply(this,arguments)}function w(t){return b.apply(this,arguments)}function b(){return(b=e(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:"string"==typeof(n=t.sent)?(e.innerHTML='<p id = "curCity">'.concat(n,'</p><p id = "curTemp">Viewing the weather in your city is currently unavailable</p>'),setTimeout((function(){e.style.display="unset"}),1e3)):n.main.temp&&(e.innerHTML='<p id = "curCity">'.concat(n.name,'</p><img id="imgWind" src="http://openweathermap.org/img/wn/').concat(n.weather[0].icon,'.png" alt="weathericon"</img><hr><p id = "curTemp">Current temperature in your city is  <b id="tempColor"> ').concat(n.main.temp,"&deg;С</b></p>"),setTimeout((function(){e.style.display="unset"}),1e3));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x,L=n(359);(new Image).src=L;var S,I=[];function j(t){for(var e=t,n=localStorage.getItem("inputs"),r=function(t){if(JSON.parse(n)[t]===e){var r=localStorage.getItem("coord");setTimeout((function(){var e=JSON.parse(r)[t];void 0!==r[0]&&(x.geoObjects.remove(S),S=new ymaps.Placemark(e,{hintContent:"".concat(e[0],", ").concat(e[1])},{iconLayout:"default#image",iconImageHref:L,iconImageSize:[45,45],iconImageOffset:[-47,5]}),x.geoObjects.add(S),x.setCenter(e))}),200)}},o=0;o<11;o++)r(o)}function O(t){var e=t.coord.lat,n=t.coord.lon;x.geoObjects.remove(S),S=new ymaps.Placemark([e,n],{hintContent:[e,n]},{iconLayout:"default#image",iconImageHref:L,iconImageSize:[45,45],iconImageOffset:[-47,5]}),x.geoObjects.add(S),x.setCenter([e,n])}function k(){var t=localStorage.getItem("coord");return null===t?[]:JSON.parse(t)}function E(t){return T.apply(this,arguments)}function T(){return(T=e(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()[0];case 2:if(t.t0=t.sent,t.t0){t.next=5;break}t.t0=e;case 5:I=t.t0;case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}ymaps.ready(e(o().mark((function t(){var e,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return e=t.sent,n=[e.latitude,e.longitude],t.next=6,E(n);case 6:x=new ymaps.Map("map",{center:[I[0],I[1]],zoom:8,controls:["zoomControl"],behaviors:["drag"]}),S=new ymaps.Placemark([I[0],I[1]],{hintContent:"".concat(I[0],", ").concat(I[1])},{iconLayout:"default#image",iconImageHref:L,iconImageSize:[45,45],iconImageOffset:[-47,5]}),x.geoObjects.add(S);case 9:case"end":return t.stop()}}),t)}))));var _="208564fc52a377799242a74d74f824e0";function N(t){return P.apply(this,arguments)}function P(){return(P=e(o().mark((function t(e){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&appid=").concat(_));case 3:return n=t.sent,t.next=6,n.json();case 6:return O(r=t.sent),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t.catch(0),t.abrupt("return",e);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function q(t){return"object"===C(t)?t.name:'"'.concat(t,'" was not found')}function H(t){return"object"===C(t)?[t.coord.lat,t.coord.lon]:[]}function F(t,e){var n="object"===C(t);e.innerHTML=n?'</div><p id= "p_img">Current temperature in '.concat(t.name," is  ").concat(t.main.temp,'&deg;С</p>\n        <img id="imgW" src="http://openweathermap.org/img/wn/').concat(t.weather[0].icon,'.png" alt="alternatetext"></div>'):'"'.concat(t,'" was not found')}function M(){return M=e(o().mark((function t(n){var r,a,u,h,l,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.innerHTML='<h1 class="title">Weather</h1>\n  <hr id="hr1">\n<div id="maindiv">\n<div id="textdiv">\n<p id= "info">\n     User can enter data in the input field, and see the list of entered data below. When the page is refreshed (or the browser is closed), the list is saved.\n   The window below displays the weather in your city.\n  </p>\n  <div id="form">\n  <form>\n    <input\n      id="userInput"\n      placeholder="Type city and press enter"\n      required\n      autofocus\n    />\n    <button id="button">Get weather</button>\n  </form>\n  </div>\n  </div>\n  <hr id="hr2">\n  <div id="weatherInfocont">\n  <div id="weatherInfo"></div>\n  <div id="map"></div>\n  </div>\n  <div  class="animate__fadeInLeft" id="weatherInfoWindow"></div>\n  </div>\n  <div class="animate__fadeInDown" id="weatherInfoWindowRiht"><p id= "p_before">Enter name of the city to find out temperature in this city or select a city from the list on the bottom left if the city you are interested is in it</p></div>    \n',r=document.querySelector("form"),a=document.querySelector("#weatherInfo"),u=document.querySelector("#weatherInfoWindowRiht"),h=document.querySelector("#weatherInfoWindow"),t.next=7,i();case 7:return l=t.sent,t.next=10,c();case 10:return d=t.sent,f(a,l),t.next=14,w(h);case 14:r.addEventListener("submit",function(){var t=e(o().mark((function t(e){var n,r,i,c,h,m;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),n=e.target,r=n.querySelector("input"),i=r.value,r.value="",t.next=7,N(i);case 7:c=t.sent,h=q(c),m=H(c),l.unshift(h),d.unshift(m),s(l),p(d),F(c,u),f(a,l);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 15:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}var W="208564fc52a377799242a74d74f824e0";function G(){return G=e(o().mark((function t(e,n){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(e),t.next=4,window.fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(e,"&appid=").concat(W));case 4:return r=t.sent,t.next=7,r.json();case 7:i=t.sent,n.innerHTML='<div><p id= "p_img">Current temperature in '.concat(i.name," is  ").concat(i.main.temp,'&deg;С</p>\n<img id="imgW" src="http://openweathermap.org/img/wn/').concat(i.weather[0].icon,'.png" alt="weathericon"></div>'),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n.innerHTML='<div><p id= "p_img">City with name '.concat(e,"</p></div>");case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),G.apply(this,arguments)}!function(t){M.apply(this,arguments)}(document.querySelector("#container"));var J=document.querySelector("#weatherInfoWindowRiht");window.cityInList=function(t){!function(t,e){G.apply(this,arguments)}(t,J)}}()}();