(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(3),o=t.n(i),c=(t(9),t(1)),l=function(e){var n=e.name,t=e.email,a=e.profile;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://princ09.github.io/".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},s=function(e){var n=e.animeFriends;return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(l,{key:t,id:n[t].id,profile:n[t].profile,name:n[t].name,email:n[t].email})})))},u=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search Friends",onChange:n}))},d=function(e){return r.a.createElement("div",{style:{border:"5px solid black"}},e.children)};t(10);var f=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),f=l[0],h=l[1];Object(a.useEffect)((function(){fetch("https://princ09.github.io/json_server/anime.json").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]);var m=t.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Anime Friends"),r.a.createElement(u,{searchChange:function(e){h(e.target.value)}}),r.a.createElement(d,null,r.a.createElement(s,{animeFriends:m})),r.a.createElement("a",{class:"nav-link",href:"https://github.com/princ09/anime_friends_react"},r.a.createElement("span",{class:"d-none d-sm-inline"},"View on GitHub "),r.a.createElement("svg",{version:"1.1",width:"16",height:"16",viewBox:"0 0 16 16",class:"octicon octicon-mark-github","aria-hidden":"true"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"})))):r.a.createElement("h1",null,"Loading")},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(11);o.a.render(r.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");h?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):m(e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.af177e42.chunk.js.map