(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[982],{3205:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Cn}});var r=t(168),a=t(7294),i=t(4524),s=t(1163),c=t(3942),o=t(5785),u=t(5861),l=t(7757),d=t.n(l),p=(t(835),t(8853)),h=t.n(p),f=t(6388),m=t(7144),x=t(5893);function g(n){var e=n.peer,t=(0,a.useRef)();return(0,a.useEffect)((function(){e&&e.on("stream",(function(n){t.current.srcObject=n}))}),[e]),(0,x.jsx)("video",{ref:t,autoPlay:!0,width:"220px",height:"150px"})}var v,E,b=t(5675),N=t(1657),j=t(3486),y=t(3172);function w(n){var e=n.onShowResult,t=(0,s.useRouter)().query.channelId,r=(0,N.Z)(t),i=r.players,c=r.error,o=(0,a.useState)(""),l=o[0],p=o[1];if(c)return(0,x.jsx)(y.Z,{message:c.message});if(null==t||null==i)return null;function h(n){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)(d().mark((function n(e){var r,a,i,s,c,o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.currentTarget,p(r.id),n.prev=2,a=JSON.parse(sessionStorage.getItem("user")),n.next=6,fetch("".concat(j.b.URL,"/channel/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json",authorization:"bearer ".concat(null===a||void 0===a?void 0:a.token)},body:JSON.stringify({state:"voting",playerId:r.id})});case 6:return i=n.sent,n.next=9,i.json();case 9:if(s=n.sent,c=s.result,o=s.message,"error"!==c){n.next=14;break}throw new Error(o);case 14:n.next=19;break;case 16:return n.prev=16,n.t0=n.catch(2),n.abrupt("return",(0,x.jsx)(y.Z,{message:n.t0.message}));case 19:case"end":return n.stop()}}),n,null,[[2,16]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){var n=setTimeout((function(){e()}),6e3);return function(){return clearTimeout(n)}}),[]),(0,x.jsxs)(k,{children:[(0,x.jsx)("h1",{className:"vote-title",children:"\ucd5c\uace0\uc758 \uce90\ub9ad\ud130\uc5d0\uac8c \ud22c\ud45c\ud574\uc8fc\uc138\uc694"}),(0,x.jsx)("span",{className:"vote-subtitle",children:"\ud22c\ud45c\ub294 \ud55c \ubc88\ub9cc \ucc38\uc5ec \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,x.jsx)("div",{className:"characters",children:i.map((function(n){var e,t,r;return(0,x.jsxs)(T,{className:"character",id:n._id,onClick:h,children:[(0,x.jsx)("div",{className:"img ".concat(l===n._id&&"border"),children:(0,x.jsx)(b.default,{src:null===(e=n.character)||void 0===e?void 0:e.imgUrl,alt:"character-image",width:150,height:200})}),(0,x.jsx)("span",{className:"character-name ".concat(l===n._id&&"color"),children:null===(t=n.character)||void 0===t?void 0:t.name}),(0,x.jsx)("span",{className:"user-name",children:null===(r=n.user)||void 0===r?void 0:r.name})]},n._id)}))})]})}var S,_,k=i.Z.div(v||(v=(0,r.default)(["\n  width: 65%;\n  color: white;\n\n  .vote-title {\n    margin: 20px 0 0 0;\n    font-size: 2em;\n  }\n\n  .vote-subtitle {\n    padding: 20px 0 0 0;\n    font-weight: 200px;\n    font-size: 1.5em;\n    color: #898bf3;\n  }\n\n  .characters {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n  }\n"]))),T=i.Z.div(E||(E=(0,r.default)(["\n  margin: 0 20px;\n  cursor: pointer;\n  transition: all 100ms ease-out;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  .img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .character-name {\n    display: block;\n    margin-bottom: 20px;\n    font-size: 1.4em;\n  }\n\n  .user-name {\n    background-color: #898bf3;\n    padding: 0px 10px;\n    border-radius: 5px;\n    font-weight: 700;\n    font-size: 1.2em;\n    color: black;\n  }\n\n  .color {\n    color: ",";\n  }\n\n  .border {\n    border: ",";\n  }\n"])),(function(n){return n.theme.pink}),(function(n){return"3px solid"+n.theme.pink})),I=t(9389);function Z(){var n=(0,s.useRouter)().query.channelId,e=(0,s.useRouter)(),t=(0,N.Z)(n),r=t.players,i=t.error,c=(0,a.useState)(""),l=c[0],p=c[1];if(i)return(0,x.jsx)(y.Z,{message:i.message});function h(){return(h=(0,u.Z)(d().mark((function e(){var t,r,a,i,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(sessionStorage.getItem("user")),e.next=4,(0,I.GH)("".concat(j.b.URL,"/channel/").concat(n),t,JSON.stringify({state:"end",channelId:n}));case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,i=a.result,s=a.message,"error"!==i){e.next=12;break}throw new Error(s);case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",(0,x.jsx)(y.Z,{message:e.t0.message}));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){var t=setTimeout((function(){e.push("/main")}),6e3);return function(){clearTimeout(t),function(){h.apply(this,arguments)}(),f.UX.emit(m.EVENTS.END_CHANNEL,n),f.UX.off(m.EVENTS.LISTEN_ENTER_CHANNEL),f.UX.off(m.EVENTS.LISTEN_NEW_CHAT)}}),[]),(0,a.useEffect)((function(){var n=r.map((function(n){return n.voteCount})),e=[];r.forEach((function(t){t.voteCount===Math.max.apply(Math,(0,o.Z)(n))&&e.push(", ".concat(t.user.name,"\ub2d8"))})),p(e.join(" ").slice(2))}),[r]),(0,x.jsxs)(A,{children:[(0,x.jsx)("h1",{className:"result-title",children:"\ud22c\ud45c \uacb0\uacfc"}),(0,x.jsxs)("span",{className:"result-subtitle",children:[l&&l," \ucd95\ud558\ud569\ub2c8\ub2e4!"]}),(0,x.jsx)("div",{className:"characters",children:l&&r.map((function(n){var e,t,r,a;return(0,x.jsxs)(C,{id:n._id,iswinner:(a=n.user.name,null===l||void 0===l?void 0:l.includes(a)),children:[(0,x.jsx)("div",{className:"img",children:(0,x.jsx)(b.default,{src:null===(e=n.character)||void 0===e?void 0:e.imgUrl,alt:"character-image",width:150,height:200})}),(0,x.jsx)("span",{className:"character-name",children:null===(t=n.character)||void 0===t?void 0:t.name}),(0,x.jsx)("span",{className:"user-name",children:null===(r=n.user)||void 0===r?void 0:r.name}),(0,x.jsxs)("span",{className:"voting-result",children:[n.voteCount," \ud45c"]})]},n._id)}))})]})}var R,L,O,A=i.Z.div(S||(S=(0,r.default)(["\n  width: 65%;\n  height: 100%;\n  background-color: black;\n\n  .result-title {\n    margin: 0;\n    padding: 30px 0 10px 0;\n    font-size: 2em;\n    color: white;\n  }\n\n  .result-subtitle {\n    padding: 30px 0 30px 0;\n    font-weight: 200px;\n    font-size: 1.5em;\n    color: ",";\n  }\n\n  .characters {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10px;\n  }\n"])),(function(n){return n.theme.pink||"white"})),C=i.Z.div(_||(_=(0,r.default)(["\n  margin: 0 20px;\n  cursor: pointer;\n  transition: all 100ms ease-out;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n\n  .img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 153px;\n    height: 203px;\n    border: ",";\n  }\n\n  .character-name {\n    display: block;\n    padding: 10px 0;\n    font-size: 18px;\n    color: ",";\n  }\n\n  .user-name {\n    background-color: #898bf3;\n    padding: 1px 4px;\n    border-radius: 5px;\n    font-weight: 700;\n    font-size: 18px;\n    color: ",";\n  }\n\n  .voting-result {\n    display: block;\n    padding: 30px 0;\n    font-size: 24px;\n    color: ",";\n  }\n\n  .clicked {\n    color: ",";\n  }\n"])),(function(n){var e=n.iswinner,t=n.theme;return e?"3px solid"+t.pink:"none"}),(function(n){var e=n.iswinner,t=n.theme;return e?t.pink:"white"}),(function(n){return n.iswinner?"white":"black"}),(function(n){var e=n.iswinner,t=n.theme;return e?t.pink:"white"}),(function(n){return n.theme.pink}));function U(){var n=(0,s.useRouter)().query.channelId,e=(0,a.useState)([]),t=e[0],r=e[1],i=(0,a.useRef)([]),c=(0,a.useRef)(),l=(0,a.useRef)(),p=(0,a.useState)(!1),v=p[0],E=p[1],b=(0,a.useState)(!1),N=b[0],j=b[1],y=(0,a.useState)(!0),S=y[0],_=y[1];function k(n,e,t){var r=new(h())({initiator:!0,trickle:!1,stream:t});return r.on("signal",function(){var t=(0,u.Z)(d().mark((function t(r){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f.UX.emit(m.EVENTS.SENDING_SIGNAL,{userToSignal:n,callerId:e,signal:r});case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()),r}function T(n,e,t){var r=new(h())({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(n){f.UX.emit(m.EVENTS.RETURNING_SIGNAL,{signal:n,callerId:e})})),r.signal(n),r}return(0,f.sV)(m.EVENTS.LISTEN_READY_TO_START,(function(e){n===e&&l.current.play()})),(0,f.sV)(m.EVENTS.RECEIVING_RETURNED_SIGNAL,(function(n){var e=n.id,t=n.signal;i.current.find((function(n){return n.peerID===e})).peer.signal(t)})),(0,a.useEffect)((function(){return(0,u.Z)(d().mark((function e(){var t,a,s,u,l,p,h;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:t=e.sent,c.current.srcObject=t,a=JSON.parse(sessionStorage.getItem("user")),s=a._id,u=a.name,l=a.email,p=a.photoUrl,h={_id:s,name:u,email:l,photoUrl:p,channelId:n},f.UX.emit(m.EVENTS.ENTER_CHANNEL,h),f.UX.on(m.EVENTS.ALL_USER,(function(n){var e=[];n.forEach((function(n){var r=k(n,(0,f.cH)(),t);i.current.push({peerID:n,peer:r}),e.push(r)})),r(e)})),f.UX.on(m.EVENTS.USER_JOINED,(function(n){var e=n.signal,a=n.callerId,s=T(e,a,t);i.current.push({peerID:a,peer:s}),r((function(n){return[].concat((0,o.Z)(n),[s])}))}));case 9:case"end":return e.stop()}}),e)})))(),function(){f.UX.removeAllListeners(m.EVENTS.ALL_USER),f.UX.removeAllListeners(m.EVENTS.USER_JOINED),f.UX.removeAllListeners(m.EVENTS.RECEIVING_RETURNED_SIGNAL),f.UX.emit(m.EVENTS.END_CHANNEL,n),i.current=[],r((function(n){return n.forEach((function(n){n.destroy()})),[]}))}}),[]),(0,x.jsxs)(V,{children:[S&&(0,x.jsx)(P,{ref:l,playsInline:!0,src:"https://awwdwd.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4",onEnded:function(){j(!0),_(!1)},muted:!0}),N&&(0,x.jsx)(w,{onShowResult:function(){j(!1),_(!1),E(!0)}}),v&&(0,x.jsx)(Z,{}),(0,x.jsxs)(z,{children:[(0,x.jsx)("video",{playsInline:!0,autoPlay:!0,ref:c,width:"220px",height:"150px",muted:!0}),t.map((function(n,e){return(0,x.jsx)(g,{peer:n},e)}))]})]})}var D,V=i.Z.div(R||(R=(0,r.default)(["\n  display: flex;\n  align-items: center;\n  height: 62vh;\n  background-image: linear-gradient(\n      rgba(5, 3, 19, 0.801),\n      rgba(5, 3, 19, 0.87),\n      rgba(2, 0, 36, 0.747),\n      rgba(5, 3, 19, 0.87),\n      rgba(4, 0, 27, 0.801)\n    ),\n    url('/images/background.jpg');\n"]))),P=i.Z.video(L||(L=(0,r.default)(["\n  width: 65%;\n  height: 100%;\n  background-color: black;\n"]))),z=i.Z.div(O||(O=(0,r.default)(["\n  width: 35%;\n  height: 100%;\n"]))),H=t(4942);function G(n){var e=n.player,t=e.user,r=e.character;return(0,x.jsxs)(J,{children:[(0,x.jsx)("div",{className:"player-name",children:null===t||void 0===t?void 0:t.name}),(0,x.jsx)("div",{className:"character-name",children:null===r||void 0===r?void 0:r.name})]},null===t||void 0===t?void 0:t._id)}var X,J=i.Z.div(D||(D=(0,r.default)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 30%;\n  margin-top: 10px;\n  text-align: center;\n\n  .character-name {\n    width: 80px;\n    border-radius: 10px;\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.theme.pink}),(function(n){return n.theme.white}));function Y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(t),!0).forEach((function(e){(0,H.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function M(){var n=(0,s.useRouter)().query.channelId,e=(0,N.Z)(n),t=e.players,r=e.error,a=e.mutate;return(0,f.sV)(m.EVENTS.LISTEN_ENTER_CHANNEL,(function(n){a((function(e){return q(q({},e),{},{players:[].concat((0,o.Z)(e.players),[{user:n}])})}))})),(0,f.sV)(m.EVENTS.LISTEN_EXIT_CHANNEL,(function(n){var e=t.filter((function(e){return e.user._id!==n}));a((function(n){return q(q({},n),{},{newPlayers:e})}))})),(0,f.sV)(m.EVENTS.LISTEN_PLAYER_READY,(function(n){var e=t.map((function(e){return e.user._id===n._id&&(e.character=n.userRole.character),e}));a((function(n){return q(q({},n),{},{readyPlayers:e})}))})),null==n||null==t?null:r?(0,x.jsx)(y.Z,{message:r.message}):(0,x.jsx)(K,{children:t.map((function(n){return(0,x.jsx)(G,{player:n},n.user._id)}))})}var W,F,Q,B,K=i.Z.div(X||(X=(0,r.default)(["\n  width: 15%;\n  height: 100%;\n  padding-bottom: 30px;\n  color: white;\n"]))),$=t(9254),nn=t(4651),en=t(9536),tn=t(694);function rn(n){var e,t=n.isModalOpen,r=n.onClose,i=n.selectedCharacters,s=(0,a.useState)([]),o=s[0],l=s[1],p=(0,a.useState)(null),h=p[0],g=p[1],v=(0,a.useState)(null),E=v[0],N=v[1],w=(0,nn.useRouter)().query.channelId,S=(0,c.Z)(w),_=S.channel,k=S.error;if(null==w||null==_)return null;if(k||E)return k?(0,x.jsx)(y.Z,{message:k.message}):(0,x.jsx)(y.Z,{message:E.message});function T(){return(T=(0,u.Z)(d().mark((function n(e){var t,a,i,s,c;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),h){n.next=3;break}return n.abrupt("return",alert(en.f.SELECTION_REQUIRED));case 3:return t=JSON.parse(sessionStorage.getItem("user")),n.prev=4,n.next=7,(0,I.GH)("".concat(j.b.URL,"/channel/").concat(w),t,JSON.stringify({state:"character",userId:null===t||void 0===t?void 0:t._id,characterId:h}));case 7:return a=n.sent,n.next=10,a.json();case 10:if(i=n.sent,s=i.result,c=i.message,"error"!==s){n.next=15;break}throw new Error(c);case 15:f.UX.emit(m.EVENTS.PLAYER_READY,{userId:null===t||void 0===t?void 0:t._id,characterId:h,channelId:w,episode:o}),r(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(4),N(n.t0);case 22:case"end":return n.stop()}}),n,null,[[4,19]])})))).apply(this,arguments)}function Z(n){var e=n.currentTarget.id;if(i.includes(e))return alert(en.f.SELECTION_FAIL);g(e)}return(0,a.useEffect)((function(){(0,u.Z)(d().mark((function n(){var e,t,r,a,i,s;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(sessionStorage.getItem("user")),n.next=4,(0,I.A_)("".concat(j.b.URL,"/episode/").concat(_.episode._id),e);case 4:return t=n.sent,n.next=7,t.json();case 7:if(r=n.sent,a=r.result,i=r.data,s=r.message,"error"!==a){n.next=13;break}throw new Error(s);case 13:l(i),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),N(n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()}),[t]),(0,x.jsxs)(sn,{children:[(0,x.jsxs)("div",{className:"header",children:[(0,x.jsx)("span",{className:"title",children:"\uc5ed\ud560\uace0\ub974\uae30"}),(0,x.jsx)(tn.Z,{className:"exit-button",onClick:r,children:"\ub098\uac00\uae30"})]}),(0,x.jsxs)(cn,{onSubmit:function(n){return T.apply(this,arguments)},children:[(0,x.jsx)("span",{className:"description",children:"\uc5f0\uae30\ud560 \ubc30\uc5ed\uc744 \uc120\ud0dd\ud558\uc138\uc694"}),(0,x.jsx)("div",{className:"episode-title",children:o.title}),(0,x.jsx)(on,{children:(0,x.jsx)("ul",{className:"character-list",children:null===(e=o.characters)||void 0===e?void 0:e.map((function(n){return(0,x.jsxs)(un,{id:n._id,onClick:Z,children:[(0,x.jsx)("span",{className:"character-name",children:n.name}),(0,x.jsx)("div",{className:h===n._id?"select":null,children:(0,x.jsx)(b.default,{src:n.imgUrl,alt:"character-img",width:90,height:100,layout:"responsive"})})]},n._id)}))})}),(0,x.jsx)("div",{className:"button",children:(0,x.jsx)(tn.Z,{type:"submit",bgColor:$.Z.blue,color:$.Z.white,children:"\ubc30\uc5ed \uace0\ub974\uae30"})})]})]})}var an,sn=i.Z.div(W||(W=(0,r.default)(["\n  width: 100%;\n  height: 100%;\n  border: 1px solid white;\n  background-color: ","90;\n  color: ",";\n\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 10%;\n    margin-top: 25px;\n    padding: 0 50px;\n\n    .title {\n      font-size: 24px;\n      line-height: 24px;\n      color: ",";\n    }\n\n    .exit-button {\n      padding: 5px 10px;\n      border-radius: 10px;\n      background-color: transparent;\n      border: 1px solid white;\n      color: ",";\n      cursor: pointer;\n    }\n\n    :hover {\n      opacity: 0.7;\n    }\n  }\n"])),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.white}),(function(n){return n.theme.blue}),(function(n){return n.theme.white})),cn=i.Z.form(F||(F=(0,r.default)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  height: 90%;\n  padding: 30px 50px;\n  box-sizing: border-box;\n  text-align: left;\n\n  .channel-name {\n    display: block;\n  }\n\n  .button {\n    margin: 15px auto 0 auto;\n  }\n"]))),on=i.Z.div(Q||(Q=(0,r.default)(["\n  margin-top: 10px;\n\n  .description {\n    font-size: 16px;\n  }\n\n  .character-list {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(100px, 170px));\n    padding: 0;\n  }\n\n  .select {\n    border: 2px solid ",";\n  }\n\n  .image {\n    margin-top: 10px;\n  }\n"])),$.Z.pink),un=i.Z.li(B||(B=(0,r.default)(["\n  display: flex;\n  flex-direction: column;\n  height: 150px;\n  margin: 0 15px 20px 0;\n  font-size: 12px;\n  list-style: none;\n  cursor: pointer;\n\n  .character-name {\n    margin-bottom: 5px;\n    font-size: 1.2em;\n  }\n"]))),ln=t(4461);function dn(){var n=(0,a.useState)(!1),e=n[0],t=n[1],r=(0,a.useState)(null),i=r[0],l=r[1],p=(0,a.useState)(!1),h=p[0],g=p[1],v=(0,a.useState)([]),E=v[0],b=v[1],N=(0,s.useRouter)().query.channelId,w=(0,s.useRouter)(),S=(0,c.Z)(N).channel;function _(){t(!1)}function k(){return(k=(0,u.Z)(d().mark((function n(){var e,t,r,a;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(sessionStorage.getItem("user")),n.next=4,(0,I.GH)("".concat(j.b.URL,"/channel/").concat(N),e,JSON.stringify({state:"exit",userId:i}));case 4:if(t=n.sent,r=t.result,a=t.message,"error"!==r){n.next=8;break}throw new Error(a);case 8:f.UX.emit(m.EVENTS.EXIT_CHANNEL,{channelId:N,userId:i}),w.push("/main"),n.next=15;break;case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",(0,x.jsx)(y.Z,{message:n.t0.message}));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function T(){return(T=(0,u.Z)(d().mark((function n(){var e,t,r,a,i;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(sessionStorage.getItem("user")),n.next=4,(0,I.GH)("".concat(j.b.URL,"/channel/").concat(N),e,JSON.stringify({state:"start",channel:N}));case 4:return t=n.sent,n.next=7,t.json();case 7:if(r=n.sent,a=r.result,i=r.message,"error"!==a){n.next=12;break}throw new Error(i);case 12:f.UX.emit(m.EVENTS.READY_TO_START,N),n.next=18;break;case 15:return n.prev=15,n.t0=n.catch(0),n.abrupt("return",(0,x.jsx)(y.Z,{message:n.t0.message}));case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){var n=JSON.parse(sessionStorage.getItem("user"))._id;l(n)}),[]),(0,a.useEffect)((function(){S.players.forEach((function(n){b((function(e){return[].concat((0,o.Z)(e),[n.character])}))}))}),[]),(0,f.sV)(m.EVENTS.LISTEN_PLAYER_READY,(function(n){var e=n.characterId;b((function(n){return[].concat((0,o.Z)(n),[e])}))})),(0,f.sV)(m.EVENTS.LISTEN_GAME_START,(function(n){n&&i===(null===S||void 0===S?void 0:S.host._id)&&g(!0)})),(0,x.jsxs)(fn,{children:[h?(0,x.jsx)(tn.Z,{onClick:function(){return T.apply(this,arguments)},bgColor:$.Z.pink,fontsize:"18px",children:"Start"}):(0,x.jsx)(tn.Z,{onClick:function(){t(!0)},bgColor:$.Z.pink,fontsize:"18px",children:"Ready"}),(0,x.jsx)(tn.Z,{onClick:function(){return k.apply(this,arguments)},bgColor:$.Z.blue,fontsize:"18px",children:"\ub098\uac00\uae30"}),e&&(0,x.jsx)(ln.Z,{onClose:_,children:(0,x.jsx)(rn,{selectedCharacters:E,onClose:_,isModalOpen:e})})]})}var pn,hn,fn=i.Z.div(an||(an=(0,r.default)(["\n  width: 20%;\n  padding: 20px 0;\n\n  button {\n    margin: 20px;\n  }\n\n  .ready {\n    color: navy;\n  }\n"]))),mn=t(2503);function xn(){return(xn=(0,u.Z)(d().mark((function n(e){var t,r,a,i,s,c;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(sessionStorage.getItem("user")),n.next=4,(0,I.A_)("".concat(j.b.URL,"/chat/").concat(e),t);case 4:return r=n.sent,n.next=7,r.json();case 7:if(a=n.sent,i=a.result,s=a.data,c=a.message,"error"!==i){n.next=13;break}throw new Error(c);case 13:return n.abrupt("return",s);case 16:return n.prev=16,n.t0=n.catch(0),n.abrupt("return",n.t0);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))).apply(this,arguments)}function gn(n){var e=(0,mn.ZP)(n?"/chat/channelId":null,(function(){return function(n){return xn.apply(this,arguments)}(n)}));return{chatList:e.data,mutate:e.mutate}}function vn(){var n=(0,s.useRouter)().query.channelId,e=gn(n),t=e.chatList,r=e.error,i=e.mutate,c=(0,a.useRef)();return r?(0,x.jsx)(y.Z,{message:r.message}):((0,a.useEffect)((function(){null!=t&&(c.current.scrollTop=c.current.scrollHeight)}),[t]),(0,f.sV)(m.EVENTS.LISTEN_NEW_CHAT,(function(n){i([].concat((0,o.Z)(t),[n]))})),null==n||null==t?null:(0,x.jsx)(bn,{ref:c,children:(0,x.jsx)("ul",{className:"chat-list",children:t.map((function(n){return(0,x.jsxs)(Nn,{children:[(0,x.jsx)("span",{className:"author",children:n.author}),(0,x.jsx)("span",{children:n.chat})]},n._id)}))})}))}var En,bn=i.Z.div(pn||(pn=(0,r.default)(["\n  height: 85%;\n  padding: 10px 30px 0 30px;\n  box-sizing: border-box;\n  border-inline: 2px solid ",";\n  background-color: ","80;\n  overflow-y: auto;\n  color: white;\n\n  .chat-list {\n    padding: 10px 0 0 10px;\n    list-style: none;\n    text-align: left;\n  }\n\n  &::-webkit-scrollbar {\n    width: 13px;\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 30px;\n    background-color: ",";\n\n    &:hover {\n      background-color: ",";\n      border: none;\n    }\n  }\n"])),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.blue}),(function(n){return n.theme.white})),Nn=i.Z.li(hn||(hn=(0,r.default)(["\n  margin-top: 5px;\n\n  .author {\n    margin-right: 10px;\n    padding: 0 5px;\n    border-radius: 5px;\n    font-size: 14px;\n    line-height: 14px;\n    background-color: #d6d6d6;\n    color: ",";\n  }\n"])),(function(n){return n.theme.darkNavy}));function jn(){var n=(0,s.useRouter)().query.channelId,e=(0,a.useState)({author:"",chat:""}),t=e[0],r=e[1],i=(0,a.useState)(""),c=i[0],o=i[1];function l(){return(l=(0,u.Z)(d().mark((function e(a){var i,s,o,u,l;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,i=JSON.parse(sessionStorage.getItem("user")),e.next=5,(0,I.GH)("".concat(j.b.URL,"/chat"),i,JSON.stringify({channelId:n,input:t}));case 5:return s=e.sent,e.next=8,s.json();case 8:if(o=e.sent,u=o.result,l=o.message,"error"!==u){e.next=13;break}throw new Error(l);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",(0,x.jsx)(y.Z,{message:e.t0.message}));case 18:f.UX.emit(m.EVENTS.NEW_CHAT,{channelId:n,input:t}),r({author:null===c||void 0===c?void 0:c.replace(" ",""),chat:""});case 20:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}return(0,a.useEffect)((function(){var n=JSON.parse(sessionStorage.getItem("user")).name;o(n)}),[]),(0,x.jsxs)(wn,{onSubmit:function(n){return l.apply(this,arguments)},children:[(0,x.jsx)("input",{type:"text",value:t.chat,autoComplete:"off",onChange:function(n){var e=n.target.value.trim();""!==e&&r({author:c.replace(" ",""),chat:e})}}),(0,x.jsx)("button",{type:"submit",children:"Enter"})]})}var yn,wn=i.Z.form(En||(En=(0,r.default)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 30px;\n  background-color: ",";\n\n  input {\n    width: 80%;\n    height: 40px;\n    padding: 0px 20px;\n    border: none;\n    font-size: 16px;\n\n    &:focus {\n      outline: none;\n    }\n  }\n\n  button {\n    display: inline-block;\n    width: 15%;\n    height: 30px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    border-radius: 15px;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.blue}));function Sn(){return(0,x.jsxs)(kn,{children:[(0,x.jsx)(vn,{}),(0,x.jsx)(jn,{})]})}var _n,kn=i.Z.div(yn||(yn=(0,r.default)(["\n  width: 65%;\n  height: 100%;\n  background-size: cover;\n  background-image: linear-gradient(\n      rgba(5, 3, 19, 0.801),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.568),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.801)\n    ),\n    url('/images/11.jpg');\n"])));function Tn(){return(0,x.jsxs)(Rn,{children:[(0,x.jsx)(Sn,{}),(0,x.jsx)(M,{}),(0,x.jsx)(dn,{})]})}var In,Zn,Rn=i.Z.div(_n||(_n=(0,r.default)(["\n  display: flex;\n  width: 100%;\n  height: 30vh;\n  background-size: cover;\n"])));function Ln(){var n=(0,s.useRouter)().query.channelId,e=(0,c.Z)(n),t=e.channel,r=e.error;if(r)return(0,x.jsx)(y.Z,{message:r.message});if(null==n||null==t)return null;var a=t.name,i=t.episode;return(0,x.jsxs)(On,{children:[(0,x.jsxs)(An,{children:[(0,x.jsx)("h2",{className:"channel-name",children:a}),(0,x.jsx)("h3",{className:"episode-title",children:null===i||void 0===i?void 0:i.title})]}),(0,x.jsx)(U,{}),(0,x.jsx)(Tn,{})]})}var On=i.Z.div(In||(In=(0,r.default)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  background-size: cover;\n  background-image: linear-gradient(\n      rgba(5, 3, 19, 0.801),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.568),\n      rgba(5, 3, 19, 0.788),\n      rgba(5, 3, 19, 0.801)\n    ),\n    url('/images/11.jpg');\n"]))),An=i.Z.div(Zn||(Zn=(0,r.default)(["\n  height: 8vh;\n  padding: 10px 20px;\n  text-align: left;\n  color: ",";\n  background-color: ",";\n  box-shadow: ",";\n\n  .channel-name {\n    margin: 0px;\n    font-size: 1em;\n    font-weight: 200;\n  }\n\n  .episode-title {\n    margin: 0px;\n    font-size: 1.1em;\n    font-weight: 500;\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.darkNavy}),(function(n){return n.theme.whiteShadow}));function Cn(){return(0,x.jsx)(Ln,{})}},9389:function(n,e,t){"use strict";t.d(e,{A_:function(){return o},GH:function(){return u},j0:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a);function s(n,e,t,r){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(i().mark((function n(e,t,r,a){var s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,{method:e,headers:{"Content-Type":"application/json",authorization:r&&"bearer ".concat(null===r||void 0===r?void 0:r.token)},body:a});case 3:s=n.sent,n.next=9;break;case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0);case 9:return n.abrupt("return",s);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}function o(n,e,t){return s("GET",n,e,t)}function u(n,e,t){return s("PUT",n,e,t)}function l(n,e,t){return s("POST",n,e,t)}},694:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,a=t(168),i=t(4942),s=t(4925),c=(t(7294),t(4524)),o=t(5893),u=["children"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n){var e=n.children,t=(0,s.Z)(n,u);return(0,o.jsx)(h,d(d({},t),{},{children:e}))}p.defaultProps={type:"button"};var h=c.Z.button(r||(r=(0,a.default)(["\n  all: unset;\n  width: ",";\n  height: ",";\n  padding: 15px 20px;\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  text-align: center;\n  cursor: pointer;\n  border-radius: ",";\n  background-color: ",";\n  transition-property: scale, translateY;\n  transition: scale 300ms ease-in;\n  color: ",";\n\n  &:hover {\n    transform: scale(0.97);\n    opacity: 80%;\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(n){return n.width||"130px"}),(function(n){return n.height||"20px"}),(function(n){return n.fontSize||"15px"}),(function(n){return n.fontSize||"14px"}),(function(n){return n.fontWeight||"500"}),(function(n){return n.borderRadius||"20px"}),(function(n){var e=n.bgColor,t=n.theme;return e||t.gray}),(function(n){var e=n.color,t=n.theme;return e||t.black}),(function(n){var e=n.hoverBgColor,t=n.theme;return e||t.white}),(function(n){var e=n.hoverColor,t=n.theme;return e||t.darkNavy}))},3172:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});t(7294);var r=t(1664),a=t(694),i=t(5893);function s(n){var e=n.message;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:e}),(0,i.jsx)(r.default,{href:"/",passHref:!0,children:(0,i.jsx)("a",{children:(0,i.jsx)(a.Z,{color:"red",children:"\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})})})]})}},4461:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r,a,i,s=t(168),c=t(4524),o=t(5893);function u(n){var e=n.children,t=n.onClose;return(0,o.jsxs)(l,{children:[(0,o.jsx)(d,{"data-testid":"dimmed",onClick:t}),(0,o.jsx)(p,{children:e})]})}var l=c.Z.div(r||(r=(0,s.default)(["\n  width: 100%;\n  height: 100%;\n"]))),d=c.Z.div(a||(a=(0,s.default)(["\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ","85;\n"])),(function(n){return n.theme.darkNavy})),p=c.Z.div(i||(i=(0,s.default)(["\n  z-index: 999;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  height: 450px;\n  text-align: center;\n  transform: translate(-50%, -50%);\n  box-shadow: ",";\n"])),(function(n){return n.theme.whiteShadow}))},9536:function(n){n.exports.f={SELECTION_FAIL:"\uc774\ubbf8 \uc120\ud0dd\ub41c \uc5ed\ud560\uc785\ub2c8\ub2e4.",SELECTION_REQUIRED:"\ubc30\uc5ed\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."}},3486:function(n){n.exports.b={URL:"https://api.vlive.live"}},7144:function(n){n.exports.EVENTS={ENTER_CHANNEL:"enter channel",LISTEN_ENTER_CHANNEL:"listen enter channel",CREATE_CHANNEL:"create channel",LISTEN_CREATE_CHANNEL:"listen create channel",EXIT_CHANNEL:"exit channel",LISTEN_EXIT_CHANNEL:"listen exit channel",END_CHANNEL:"end channel",LISTEN_END_CHANNEL:"listen end channel",NEW_CHAT:"new chat",LISTEN_NEW_CHAT:"listen new chat",PLAYER_READY:"player ready",LISTEN_PLAYER_READY:"listen player ready",LISTEN_SEND_SIGNAL:"listen send signal",ALL_USER:"all user",SENDING_SIGNAL:"sending signal",RETURNING_SIGNAL:"returning signal",USER_JOINED:"user joined",RECEIVING_RETURNED_SIGNAL:"receiving returned signal",LISTEN_GAME_START:"listen game start",READY_TO_START:"start game",LISTEN_READY_TO_START:"listen start game"}},3942:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5861),a=t(7757),i=t.n(a),s=t(2503),c=t(3486),o=t(9389);function u(){return(u=(0,r.Z)(i().mark((function n(e){var t,r,a,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(sessionStorage.getItem("user")),n.next=4,(0,o.A_)("".concat(c.b.URL,"/channel/").concat(e),t);case 4:return r=n.sent,n.next=7,r.json();case 7:return a=n.sent,s=a.data,n.abrupt("return",s);case 12:n.prev=12,n.t0=n.catch(0),alert(n.t0.message);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function l(n){var e=(0,s.ZP)(n?"/channel/".concat(n):null,(function(){return function(n){return u.apply(this,arguments)}(n)}));return{channel:e.data,error:e.error,mutate:e.mutate}}},1657:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(3942);function a(n){var e=(0,r.Z)(n),t=e.channel,a=e.error,i=e.mutate;return{players:t?t.players:[],error:a,mutate:i}}},6388:function(n,e,t){"use strict";t.d(e,{cH:function(){return i},sV:function(){return s},UX:function(){return c}});var r=t(7294),a=(0,t(8594).ZP)(),i=function(){return a.id};function s(n,e){return(0,r.useEffect)((function(){return a.on(n,e),function(){a.off(n,e)}}),[n,e]),a}var c=a},4708:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/channel/[channelId]",function(){return t(3205)}])},2361:function(){},4616:function(){}},function(n){n.O(0,[160,595,774,888,179],(function(){return e=4708,n(n.s=e);var e}));var e=n.O();_N_E=e}]);