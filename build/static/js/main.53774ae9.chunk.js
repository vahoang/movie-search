(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),s=(a(27),a(11)),m=a(3),o=(a(9),function(e){return c.a.createElement("header",{className:"App-header"},c.a.createElement("h2",null,e.text))}),i=function(e){var t=e.movie,a="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return c.a.createElement("div",{className:"movie"},c.a.createElement("h2",null,t.Title),c.a.createElement("div",null,c.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:a})),c.a.createElement("p",null,"(",t.Year,")"))},p=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement("form",{className:"search"},c.a.createElement("input",{value:r,onChange:function(e){l(e.target.value)},type:"text"}),c.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(r),l("")},type:"submit",value:"SEARCH"}))},u=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),u=Object(s.a)(l,2),E=u[0],g=u[1],h=Object(n.useState)(null),d=Object(s.a)(h,2),v=d[0],f=d[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=c20e5c15").then((function(e){return e.json()})).then((function(e){g(e.Search),r(!1)}))}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Main Page")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"My Movie"}),c.a.createElement(p,{search:function(e){r(!0),f(null),fetch("https://www.omdbapi.com/?s=".concat(e,"&page=10&apikey=c20e5c15")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?(g(e.Search),r(!1)):(f(e.Error),r(!1))}))}}),c.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),c.a.createElement("div",{className:"movies"},a&&!v?c.a.createElement("span",null,"loading..."):v?c.a.createElement("div",{className:"errorMessage"},v):E.map((function(e,t){return c.a.createElement(i,{key:"".concat(t,"-").concat(e.Title),movie:e})})))),c.a.createElement("script",{src:"/assets/js/a1.js"}),c.a.createElement("script",{src:"/assets/js/a2.js"}),c.a.createElement("script",{src:"/assets/js/a3.js"}),c.a.createElement("script",{src:"/assets/css/a1.css"}),c.a.createElement("script",{src:"/assets/css/a2.css"}),c.a.createElement("script",{src:"/assets/css/a3.css"}),c.a.createElement("img",{src:"/assets/images/img1.png",alt:""}),c.a.createElement("img",{src:"/wrongpath/sth/error.png",alt:""}))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Need Include")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"Test Need Include"})),c.a.createElement("img",{src:"/assets/images/img1.png",alt:""}),c.a.createElement("script",{src:"/assets/js/a1.js"}),c.a.createElement("script",{src:"/assets/js/a2.js"}),c.a.createElement("script",{src:"/assets/js/a3.js"}),c.a.createElement("script",{src:"/assets/css/a1.css"}),c.a.createElement("script",{src:"/assets/css/a2.css"}),c.a.createElement("script",{src:"/assets/css/a3.css"}))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Need Upload")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"Test Need Upload"})),c.a.createElement("img",{src:"/assets/images/img1.png",alt:""}),c.a.createElement("img",{src:"/wrongpath/sth/error.png",alt:""}))},h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Wrong Extension")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"Test Wrong Extension"})),c.a.createElement("img",{src:"/assets/images/img1.jpeg",alt:""}),c.a.createElement("img",{src:"/wrongpath/sth/error.png",alt:""}))},d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Wrong Name")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"Test Wrong Name"})),c.a.createElement("img",{src:"/wrongname/wrongname/wrongname.png",alt:""}))},v=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.Helmet,null,c.a.createElement("title",null,"Wrong Path")),c.a.createElement("div",{className:"App"},c.a.createElement(o,{text:"Test Wrong Path"})),c.a.createElement("img",{src:"/assets/images/img1.png",alt:""}),";",c.a.createElement("img",{src:"/assets/imagu/img1.png",alt:""}),";",c.a.createElement("img",{src:"/assets/ima/img1.png",alt:""}),";")},f=a(7),w=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page"},"Home")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page/need-include"},"Need Include")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page/need-upload"},"Need Upload")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page/wrong-name"},"Wrong Name")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page/wrong-path"},"Wrong Path")),c.a.createElement("li",null,c.a.createElement(f.b,{to:"/page/wrong-extension"},"Wrong Extension"))),c.a.createElement(w.a,{exact:!0,path:"/page",component:u}),c.a.createElement(w.a,{exact:!0,path:"/page/need-include",component:E}),c.a.createElement(w.a,{exact:!0,path:"/page/need-upload",component:g}),c.a.createElement(w.a,{exact:!0,path:"/page/wrong-name",component:d}),c.a.createElement(w.a,{exact:!0,path:"/page/wrong-path",component:v}),c.a.createElement(w.a,{exact:!0,path:"/page/wrong-extension",component:h})));l.a.hydrate(j,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.53774ae9.chunk.js.map