(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],b=0,p=[];b<c.length;b++)o=c[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);i&&i(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(u.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},u=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var i=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"417e":function(e,t,n){"use strict";n("51b1")},"51b1":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={key:0,class:"view login"},u={class:"form-inner"},o=Object(r["d"])("h1",null,"Login to FireChat",-1),c=Object(r["d"])("label",{for:"username"},"Username",-1),s=Object(r["d"])("input",{type:"submit",value:"Login"},null,-1),l={key:1,class:"view chat"},i={class:"chat-box"},b={class:"message-inner"},p={class:"username"},d={class:"content"},f=Object(r["d"])("input",{type:"submit",value:"Send"},null,-1);function m(e,t,n,m,j,O){return""===m.state.username||null===m.state.username?(Object(r["f"])(),Object(r["c"])("div",a,[Object(r["d"])("form",{class:"login-form",onSubmit:t[2]||(t[2]=Object(r["m"])((function(){return m.Login&&m.Login.apply(m,arguments)}),["prevent"]))},[Object(r["d"])("div",u,[o,c,Object(r["l"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return m.inputUsername=e}),placeholder:"Please enter your username..."},null,512),[[r["k"],m.inputUsername]]),s])],32)])):(Object(r["f"])(),Object(r["c"])("div",l,[Object(r["d"])("header",null,[Object(r["d"])("button",{class:"logout",onClick:t[3]||(t[3]=function(){return m.Logout&&m.Logout.apply(m,arguments)})},"Logout"),Object(r["d"])("h1",null,"Welcome, "+Object(r["j"])(m.state.username),1)]),Object(r["d"])("section",i,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(m.state.messages,(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e.key,class:e.username==m.state.username?"message current-user":"message"},[Object(r["d"])("div",b,[Object(r["d"])("div",p,Object(r["j"])(e.username),1),Object(r["d"])("div",d,Object(r["j"])(e.content),1)])],2)})),128))]),Object(r["d"])("footer",null,[Object(r["d"])("form",{onSubmit:t[5]||(t[5]=Object(r["m"])((function(){return m.SendMessage&&m.SendMessage.apply(m,arguments)}),["prevent"]))},[Object(r["l"])(Object(r["d"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return m.inputMessage=e}),placeholder:"Write a message..."},null,512),[[r["k"],m.inputMessage]]),f],32)])]))}n("4160"),n("b64b"),n("159b");var j=n("260b"),O=(n("66ce"),{apiKey:"AIzaSyAdbsM6dzLgqiA8s5t6JY1zlq6FPstCn7Q",authDomain:"chartroom-8344b.firebaseapp.com",projectId:"chartroom-8344b",storageBucket:"chartroom-8344b.appspot.com",messagingSenderId:"42455989755",appId:"1:42455989755:web:c3cfbd5b9b2bae1486df5e"}),v=j["a"].initializeApp(O),g=v,h={setup:function(){var e=Object(r["h"])(""),t=Object(r["h"])(""),n=Object(r["h"])(!1),a=Object(r["g"])({username:"",messages:[]}),u=function(){""===e.value&&null===e.value||(a.username=e.value,e.value="")},o=function(){a.username=""},c=function(){var e=g.database().ref("messages");if(""!==t.value&&null!==t.value){var n={username:a.username,content:t.value};e.push(n),t.value=""}};return Object(r["e"])((function(){var e=g.database().ref("messages");e.on("value",(function(e){var t=e.val(),n=[];Object.keys(t).forEach((function(e){n.push({id:e,username:t[e].username,content:t[e].content})})),a.messages=n}))})),{inputUsername:e,Login:u,state:a,inputMessage:t,SendMessage:c,Logout:o,isopen:n}}},y=(n("417e"),n("d959")),w=n.n(y);const S=w()(h,[["render",m]]);var k=S;Object(r["b"])(k).mount("#app")}});
//# sourceMappingURL=app.3bf49d01.js.map