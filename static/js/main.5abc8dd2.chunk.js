(this.webpackJsonptalinode=this.webpackJsonptalinode||[]).push([[0],{12:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(8),j=c.n(s),a=(c(26),c(27),c(20)),l=c(10),r=c(13),o=c.n(r),d=c(15),b=c.n(d),u=(c(12),c(1)),x=function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"todo_style",children:[Object(u.jsx)(o.a,{onClick:function(){e.onSelect(e.id)}}),Object(u.jsx)("li",{style:{color:"".concat(e.textColor)},className:"listeItems",contentEditable:e.edit,autoFocus:e.edit,children:e.text}),Object(u.jsx)(b.a,{onClick:function(){e.onSelectItem(e.id)}})]})})},O=c(19),h=c.n(O),f=c(17),m=c.n(f),v=c(16),p=c.n(v),C=c(18),S=c.n(C);var k=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),j=Object(l.a)(s,2),r=j[0],o=j[1],d=Object(n.useState)(!1),b=Object(l.a)(d,2),O=b[0],f=b[1],v=function(e){o((function(t){return t.filter((function(t,c){return c!==e}))}))},C=function(e){f(!0)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"main_div",children:[Object(u.jsx)("div",{className:"buttonsdiv",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"refreshdiv",onClick:function(){o(r)},children:[Object(u.jsx)(p.a,{})," ",Object(u.jsx)("span",{children:"refresh items"})]}),Object(u.jsxs)("div",{className:"resetdiv",onClick:function(){i(r)},children:[Object(u.jsx)(m.a,{})," ",Object(u.jsx)("span",{children:"reset all items"})]}),Object(u.jsxs)("div",{className:"hashtagdiv",onClick:function(){var e=r.filter((function(e){return"#"===e[0]}));o(e)},children:[Object(u.jsx)(S.a,{}),Object(u.jsx)("span",{children:"hashtag items"})]})]})}),Object(u.jsxs)("div",{className:"center_div",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"To do List"})}),Object(u.jsx)("input",{type:"text",placeholder:"add a item",onChange:function(e){i(e.target.value)},value:c}),Object(u.jsx)("button",{onClick:function(){o((function(e){return[].concat(Object(a.a)(e),[c])})),i("")},children:Object(u.jsx)(h.a,{})}),Object(u.jsx)("ul",{children:r.map((function(e,t){if(e.length>1)return"#"===e[0]?Object(u.jsx)(x,{textColor:"#ff006e",id:t,onSelect:v,onSelectItem:C,text:e,edit:O},t):Object(u.jsx)(x,{textColor:"black",id:t,onSelect:v,onSelectItem:C,text:e,edit:O},t)}))})]})]})})};var N=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(k,{})})};j.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5abc8dd2.chunk.js.map