(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(2),o=t.n(i),c=(t(12),t(3)),l=t(4),s=t(6),u=t(5),d=function(e){var n=e.name,t=e.email,a=e.profile;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"Anime Friend",src:"https://princ09.github.io/".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},h=function(e){var n=e.animeFriends;return r.a.createElement("div",null,n.map((function(e,t){return r.a.createElement(d,{key:t,id:n[t].id,profile:n[t].profile,name:n[t].name,email:n[t].email})})))},f=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:n}))},m=function(e){return r.a.createElement("div",{style:{border:"5px solid black"}},e.children)},g=(t(13),function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={animeFriends:[],searchfield:""},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://princ09.github.io/json_server/anime.json").then((function(e){return e.json()})).then((function(n){e.setState({animeFriends:n})}))}},{key:"render",value:function(){var e=this.state,n=e.animeFriends,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Anime Friends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(m,null,r.a.createElement(h,{animeFriends:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);o.a.render(r.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");v?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.57339aed.chunk.js.map