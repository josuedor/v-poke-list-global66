(function(e){function n(n){for(var r,o,u=n[0],i=n[1],l=n[2],f=0,s=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4d62533c":"ee06dc74","chunk-3187cb1e":"93e9a2ca","chunk-3403326b":"fc6d202e","chunk-490167aa":"fd719c80","chunk-c5e44116":"1fa09a0a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-4d62533c":1,"chunk-3187cb1e":1,"chunk-3403326b":1,"chunk-490167aa":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-4d62533c":"a66f241f","chunk-3187cb1e":"028eaa44","chunk-3403326b":"a89f606c","chunk-490167aa":"2ac424b3","chunk-c5e44116":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===a))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===a)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),t(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var p=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",{staticClass:"lato-font"},[t("v-main",{staticStyle:{"background-color":"#F9F9F9"}},[t("router-view",{key:e.$route.fullPath})],1)],1)},a=[],c={name:"App",components:{},data:function(){return{}}},u=c,i=(t("034f"),t("2877")),l=t("6544"),f=t.n(l),s=t("7496"),p=t("f6c4"),d=Object(i["a"])(u,o,a,!1,null,null,null),h=d.exports;f()(d,{VApp:s["a"],VMain:p["a"]});var m=t("f309");r["a"].use(m["a"]);var b=new m["a"]({}),v=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["a"].use(v["a"]);var g=[{path:"/",name:"welcome",component:function(){return Promise.all([t.e("chunk-4d62533c"),t.e("chunk-3403326b"),t.e("chunk-c5e44116")]).then(t.bind(null,"eec5"))}},{path:"/loading",name:"loading",component:function(){return Promise.all([t.e("chunk-4d62533c"),t.e("chunk-3187cb1e")]).then(t.bind(null,"45d6"))}},{path:"/pokemon-list",name:"pokemonList",component:function(){return Promise.all([t.e("chunk-4d62533c"),t.e("chunk-3403326b"),t.e("chunk-490167aa")]).then(t.bind(null,"5b08"))}}],k=new v["a"]({mode:"history",base:"/",routes:g}),y=k;r["a"].config.productionTip=!1,new r["a"]({vuetify:b,router:y,render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.9d01ac61.js.map