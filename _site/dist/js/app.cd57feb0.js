(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],f=0,d=[];f<o.length;f++)s=o[f],a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cfb":function(e,t,n){},"284b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("a026"),a=n("e9a7"),i=n.n(a),s=n("2769"),o=n.n(s),c=n("9380"),l=n.n(c);function u(e){return e.split(" ").map(function(e){return i()(e)}).join(" ")}var f=[{range:[1,1e3],suffix:"",decimals:0},{range:[1e3,1e6],suffix:"k",decimals:1},{range:[1e6,1e9],suffix:"M",decimals:1},{range:[1e9,1/0],suffix:"B",decimals:1}];function d(e){if(0===e)return"0";var t=o()(f,function(t){return t.range[0]&&e<t.range[1]});return(e/t.range[0]).toFixed(t.decimals)+t.suffix}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";return e.length<t?e:e.substr(0,t-n.length)+n}var v={install:function(e){e.filter("capitalize",i.a),e.filter("titleCase",u),e.filter("filter",l.a),e.filter("shortNumber",d),e.filter("truncate",p)}},b=n("289d"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"top-nav"},[n("div",{staticClass:"banner"},[n("Parallax",{attrs:{"speed-factor":.45,"section-height":20,"container-class":"banner-container","section-class":"banner-section"}},[n("div",{staticClass:"banner-img"})])],1),n("div",{staticClass:"nav-section"},[n("div",{staticClass:"container"},[e._t("header")],2)])]),n("div",{staticClass:"main-container"},[e._t("default")],2),n("div",{staticClass:"footer-container"},[n("div",{staticClass:"container"},[n("div",{staticClass:"section"},[e._t("footer")],2)])])])},g=[],h=n("540a"),y=n.n(h),O={name:"app",components:{Parallax:y.a},created:function(){},methods:{}},x=O,C=(n("cf25"),n("2877")),w=Object(C["a"])(x,m,g,!1,null,null,null),j=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"responsive-embed-wrap",style:{maxWidth:e.maxWidth+"px"}},[n("div",{staticClass:"responsive-embed",style:{paddingTop:1/e.ratio*100+"%"}},[e._t("default")],2)])},P=[],S={name:"responsive-embed",props:{ratio:{type:Number,default:1},maxWidth:Number},data:function(){return{}},components:{},mounted:function(){},methods:{}},D=S,E=(n("be1e"),Object(C["a"])(D,_,P,!1,null,null,null)),k=E.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"latest-videos"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-image"},[n("b-loading",{attrs:{"is-full-page":!1,active:!e.isReady}}),n("responsive-embed",{attrs:{ratio:16/9,"max-width":720}},[n("youtube",{attrs:{"video-id":e.videos[e.current-1].videoId,"fit-parent":!0,resize:!0},on:{ready:function(t){e.isReady=!0}}})],1)],1),n("div",{staticClass:"card-content"},[n("div",{staticClass:"has-text-centered"},[e._v(e._s(e.videos[e.current-1].title))])]),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"card-footer-item"},[e.videos.length?n("b-pagination",{attrs:{total:e.videos.length,current:e.current,"per-page":1,"range-before":5,"range-after":5,order:"is-centered",size:"is-large","aria-next-label":"Next video","aria-previous-label":"Previous video","aria-page-label":"Video","aria-current-label":"Current Video"},on:{"update:current":function(t){e.current=t}}}):e._e()],1)])])])},T=[];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach(function(t){N(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R="AIzaSyDd-UD-gIX2GIOlE6YOQtk0S7KEmps1bTg",$="UUeiYXex_fwgYDonaTcSIk6w",U=5,W="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=".concat(U,"&playlistId=").concat($,"&key=").concat(R),Y={name:"latest-videos",props:{},data:function(){return{videos:[],current:1,isReady:!1}},components:{},mounted:function(){var e=this;fetch(W).then(function(e){return e.json()}).then(function(t){if(!t.items||!t.items.length)throw new Error("Could not find videos.");e.videos=t.items.map(function(e){return z({title:e.snippet.title},e.contentDetails)})}).catch(function(e){console.error(e)})},methods:{}},A=Y,J=(n("ebe9"),Object(C["a"])(A,I,T,!1,null,null,null)),V=J.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"media"},[n("figure",{staticClass:"media-left"},[n("p",{staticClass:"image is-128x128"},[n("img",{attrs:{src:e.image}})])]),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("h6",[n("strong",[e._t("name")],2)]),n("p",[e._t("bio")],2)])])])},B=[],F={name:"me-profile",props:{image:{type:String}},data:function(){return{}},components:{},mounted:function(){},methods:{}},G=F,K=(n("e528"),Object(C["a"])(G,X,B,!1,null,null,null)),Q=K.exports,q=n("e0ec"),H=n.n(q);n("fb98");r["a"].use(b["a"],{}),r["a"].use(H.a),r["a"].use(v),r["a"].component("responsive-embed",k),r["a"].component("latest-videos",V),r["a"].component("me-profile",Q),r["a"].config.productionTip=!1,new r["a"]({el:"#app",components:{App:j}})},b0f2:function(e,t,n){},be1e:function(e,t,n){"use strict";var r=n("cf32"),a=n.n(r);a.a},cf25:function(e,t,n){"use strict";var r=n("0cfb"),a=n.n(r);a.a},cf32:function(e,t,n){},e528:function(e,t,n){"use strict";var r=n("b0f2"),a=n.n(r);a.a},ebe9:function(e,t,n){"use strict";var r=n("284b"),a=n.n(r);a.a},fb98:function(e,t,n){}});
//# sourceMappingURL=app.cd57feb0.js.map