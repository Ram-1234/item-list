(this.webpackJsonptalinode=this.webpackJsonptalinode||[]).push([[0],{12:function(t,e,c){},25:function(t,e,c){},26:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),s=c(8),o=c.n(s),a=(c(25),c(26),c(19)),j=c(10),l=c(13),r=c.n(l),d=c(15),u=c.n(d),b=(c(12),c(1)),x=function(t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"todo_style",children:[Object(b.jsx)(r.a,{onClick:function(){t.onSelect(t.id)}}),Object(b.jsx)("button",{type:"checkbox",className:"inputbox"}),Object(b.jsx)("li",{style:{color:"".concat(t.textColor)},className:"listeItems",contentEditable:t.edit,autoFocus:t.edit,children:t.text}),Object(b.jsx)(u.a,{onClick:function(){t.onSelectItem(t.id)}})]})})},O=c(18),h=c.n(O),f=c(17),m=c.n(f),v=c(16),p=c.n(v);var k=function(){var t=Object(n.useState)(""),e=Object(j.a)(t,2),c=e[0],i=e[1],s=Object(n.useState)([]),o=Object(j.a)(s,2),l=o[0],r=o[1],d=Object(n.useState)(!1),u=Object(j.a)(d,2),O=u[0],f=u[1],v=function(t){r((function(e){return e.filter((function(e,c){return c!==t}))}))},k=function(t){f(!0)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"main_div",children:[Object(b.jsxs)("div",{className:"buttonsdiv",children:[Object(b.jsxs)("div",{className:"hashtagdiv",onClick:function(){var t=l.filter((function(t){return"#"===t[0]}));r(t)},children:[Object(b.jsx)(p.a,{}),"hashtag items"]}),Object(b.jsxs)("div",{className:"resetdiv",onClick:function(){r([])},children:[Object(b.jsx)(m.a,{})," reset all items"]})]}),Object(b.jsxs)("div",{className:"center_div",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"To do list"})}),Object(b.jsx)("input",{type:"text",placeholder:"+Add a task",onChange:function(t){i(t.target.value)},value:c}),Object(b.jsx)("button",{onClick:function(){r((function(t){return[].concat(Object(a.a)(t),[c])})),i("")},children:Object(b.jsx)(h.a,{})}),Object(b.jsx)("ul",{children:l.map((function(t,e){if(t.length>1)return"#"===t[0]?Object(b.jsx)(x,{textColor:"#ff006e",id:e,onSelect:v,onSelectItem:k,text:t,edit:O},e):Object(b.jsx)(x,{textColor:"black",id:e,onSelect:v,onSelectItem:k,text:t,edit:O},e)}))})]})]})})};var S=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(k,{})})};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e5fe3d10.chunk.js.map