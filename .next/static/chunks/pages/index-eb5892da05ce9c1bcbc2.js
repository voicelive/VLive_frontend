(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5318:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.default=n.exports,n.exports.__esModule=!0},917:function(n,e,t){"use strict";t.r(e),t.d(e,{CacheProvider:function(){return o.C},ThemeContext:function(){return o.T},ThemeProvider:function(){return o.a},__unsafe_useEmotionCache:function(){return o._},useTheme:function(){return o.u},withEmotionCache:function(){return o.w},withTheme:function(){return o.b},ClassNames:function(){return m},Global:function(){return c},createElement:function(){return u},css:function(){return l},jsx:function(){return u},keyframes:function(){return f}});var r=t(7294),o=(t(7861),t(8135)),a=(t(8679),t(444)),i=t(4199),s=t(1526),u=function(n,e){var t=arguments;if(null==e||!o.h.call(e,"css"))return r.createElement.apply(void 0,t);var a=t.length,i=new Array(a);i[0]=o.E,i[1]=(0,o.c)(n,e);for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)},c=(0,o.w)((function(n,e){var t=n.styles,u=(0,i.O)([t],void 0,(0,r.useContext)(o.T)),c=(0,r.useRef)();return(0,r.useLayoutEffect)((function(){var n=e.key+"-global",t=new s.m({key:n,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),r=!1,o=document.querySelector('style[data-emotion="'+n+" "+u.name+'"]');return e.sheet.tags.length&&(t.before=e.sheet.tags[0]),null!==o&&(r=!0,o.setAttribute("data-emotion",n),t.hydrate([o])),c.current=[t,r],function(){t.flush()}}),[e]),(0,r.useLayoutEffect)((function(){var n=c.current,t=n[0];if(n[1])n[1]=!1;else{if(void 0!==u.next&&(0,a.M)(e,u.next,!0),t.tags.length){var r=t.tags[t.tags.length-1].nextElementSibling;t.before=r,t.flush()}e.insert("",u,t,!1)}}),[e,u.name]),null}));function l(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,i.O)(e)}var f=function(){var n=l.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},h=function n(e){for(var t=e.length,r=0,o="";r<t;r++){var a=e[r];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=n(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o};function d(n,e,t){var r=[],o=(0,a.f)(n,r,t);return r.length<2?t:o+e(r)}var m=(0,o.w)((function(n,e){var t=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var o=(0,i.O)(t,e.registered);return(0,a.M)(e,o,!1),e.key+"-"+o.name},s={css:t,cx:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return d(e.registered,t,h(r))},theme:(0,r.useContext)(o.T)},u=n.children(s);return!0,u}))},4349:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var r,o=t(168),a=(t(7294),t(1664)),i=t(4524),s=t(9254),u=t(418),c=t(3239),l=t(2511),f=t(5893);function h(n){var e=n.channel,t=e.name,r=e.episode;return(0,f.jsxs)(p,{children:[(0,f.jsx)("span",{className:"channel-name",children:t}),(0,f.jsx)("span",{className:"episode-title",children:r.title})]})}var d,m,p=i.Z.div(r||(r=(0,o.default)(["\n  width: 90%;\n  height: 70px;\n  margin: 10px auto;\n  cursor: pointer;\n  border-bottom: 1px solid #575757;\n  color: ",";\n\n  &:hover {\n    border-bottom: 2px solid ",";\n    color: ",";\n  }\n\n  .channel-name {\n    display: block;\n    font-size: 1.2em;\n    font-weight: 500;\n    margin-bottom: 7px;\n  }\n\n  .episode-title {\n    font-weight: 100;\n    font-size: 1em;\n  }\n"])),(function(n){return n.theme.white}),s.Z.white,(function(n){return n.theme.pink})),v=t(694),x=t(3172);function b(){var n=(0,c.Z)(),e=n.historyChannels,t=n.error;return t?(0,f.jsx)(x.Z,{message:t.message}):(0,f.jsxs)(g,{children:[(0,f.jsx)(l.Z,{}),(0,f.jsxs)(y,{bounce:u.bounce,children:[(0,f.jsx)("h2",{className:"history-title",children:"RECENT LIVE"}),(0,f.jsx)("div",{className:"history-list",children:null===e||void 0===e?void 0:e.map((function(n){return(0,f.jsx)(a.default,{href:"/history/".concat(n._id),passHref:!0,children:(0,f.jsx)("a",{children:(0,f.jsx)(h,{channel:n})})},n._id)}))}),(0,f.jsx)("div",{className:"button-wrapper",children:(0,f.jsx)(a.default,{href:"/main",passHref:!0,children:(0,f.jsx)(v.Z,{className:"start-button",width:"200px",color:s.Z.white,bgColor:s.Z.pink,hoverBgColor:s.Z.white,children:"\uac8c\uc784\ud558\ub7ec\uac00\uae30"})})})]})]})}var g=i.Z.div(d||(d=(0,o.default)(["\n  position: relative;\n  text-align: center;\n  height: 100vh;\n  background-image: linear-gradient(\n      rgba(5, 3, 19, 0.801),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.568),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.801)\n    ),\n    url('/images/background.jpg');\n"]))),y=i.Z.div(m||(m=(0,o.default)(["\n  position: absolute;\n  top: 54%;\n  left: 50%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 480px;\n  transform: translate(-50%, -50%);\n\n  .history-title {\n    font-size: 1.5em;\n    color: ",";\n    animation: "," 1.2s ease-in infinite;\n  }\n\n  .history-list {\n    display: flex;\n    flex-direction: column;\n    min-width: 600px;\n    height: 400px;\n    overflow-y: auto;\n    border-radius: 20px;\n    background: ","95;\n    box-shadow: ",";\n\n    &::-webkit-scrollbar {\n      width: 13px;\n      background-color: ",";\n    }\n\n    &::-webkit-scrollbar-thumb {\n      border-radius: 30px;\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n        border: none;\n      }\n    }\n  }\n\n  .button-wrapper {\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .start-button {\n      font-size: 18px;\n    }\n  }\n"])),(function(n){return n.theme.pink}),u.bounce,(function(n){return n.theme.darkNavy}),(function(n){return n.theme.whiteShadow}),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.pink}),(function(n){return n.theme.white}));function w(){return(0,f.jsx)(b,{})}},3239:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5861),o=t(7757),a=t.n(o),i=t(2503),s=t(3486);function u(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(s.b.URL,"/channel"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return t=n.sent,r=t.data,n.abrupt("return",r);case 11:return n.prev=11,n.t0=n.catch(0),n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}function l(){var n=(0,i.ZP)("/channel",u),e=n.data,t=n.error,r=n.mutate,o=[],a=[];return null===e||void 0===e||e.forEach((function(n){n.isActive?a.push(n):o.push(n)})),{historyChannels:o,activeChannels:a,error:t,mutate:r}}},418:function(n,e,t){"use strict";var r,o=t(5318)(t(168)),a=(0,t(917).keyframes)(r||(r=(0,o.default)(["\n  from, 20%, 53%, 80%, to {\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    transform: translate3d(0, -20px, 0);\n  }\n\n  70% {\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0,-4px,0);\n  }\n"])));n.exports={bounce:a}},8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4349)}])}},function(n){n.O(0,[160,511,774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);