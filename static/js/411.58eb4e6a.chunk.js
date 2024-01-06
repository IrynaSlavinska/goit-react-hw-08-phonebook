"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[411],{3411:function(n,e,r){r.r(e),r.d(e,{default:function(){return en}});var o,t,i,a,d,p,c,s,l,u,x,f,b,g,h,m,Z,v,j,k=r(2791),y=r(4420),w=r(168),z=r(7686),C=z.Z.div(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),_=(z.Z.div(t||(t=(0,w.Z)(["\n  background-color: #7ad9f7;\n  padding: 12px 80px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 50px;\n"]))),z.Z.p(i||(i=(0,w.Z)(["\n  font-size: 20px;\n  color: #000000;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),z.Z.button(a||(a=(0,w.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),z.Z.ul(d||(d=(0,w.Z)(["\n  background-color: #7ad9f7;\n  padding: 32px;\n  border-radius: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n"])))),P=z.Z.li(p||(p=(0,w.Z)(["\n  width: 360px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),S=z.Z.p(c||(c=(0,w.Z)(["\n  font-size: 20px;\n  color: #000000;\n  margin-bottom: 4px;\n"]))),E=z.Z.button(s||(s=(0,w.Z)(["\n  background-color: transparent;\n"]))),I=r(9439),L=r(1686),N=r.n(L),q=function(n){return n.contacts.contacts},F=function(n){return n.filter.filter},U=function(n){return n.contacts.error},A=function(n){return n.contacts.isLoading},D=r(6052),K=z.Z.form(l||(l=(0,w.Z)(["\n  width: 400px;\n  background-color: #7ad9f7;\n  padding: 12px;\n  border-radius: 8px;\n"]))),T=z.Z.label(u||(u=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #000000;\n  font-size: 20px;\n  margin-bottom: 12px;\n"]))),W=z.Z.input(x||(x=(0,w.Z)(["\n  font-size: 18px;\n  padding: 4px;\n  margin-top: 4px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  outline: transparent;\n\n  &: focus {\n    border-color: #e9af3d;\n  }\n\n  &: hover {\n    border-color: #e9af3d;\n  }\n"]))),B=z.Z.button(f||(f=(0,w.Z)(["\n  padding: 8px 24px;\n  font-size: 16px;\n  color: #000000;\n  background-color: #e9af3d;\n"]))),G=(z.Z.p(b||(b=(0,w.Z)(["\n  color: #000000;\n  font-size: 18px;\n  margin-bottom: 4px;\n"]))),z.Z.div(g||(g=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),z.Z.div(h||(h=(0,w.Z)(["\n  position: relative;\n  padding: 0px 0px 0px 26px;\n  margin-bottom: 20px;\n  line-height: 24px;\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 20px;\n    height: 20px;\n    left: 0;\n    top: 0;\n    background-color: #ffffff;\n    border-radius: 50%;\n  }\n\n  &:after {\n    position: absolute;\n    content: '';\n    width: 14px;\n    height: 14px;\n    left: 3px;\n    top: 3px;\n    background-color: #78a1bb;\n    border-radius: 50%;\n  }\n"]))),z.Z.input(m||(m=(0,w.Z)(["\n  display: none;\n"]))),r(184)),H=function(){var n=(0,k.useState)(""),e=(0,I.Z)(n,2),r=e[0],o=e[1],t=(0,k.useState)(""),i=(0,I.Z)(t,2),a=i[0],d=i[1],p=(0,y.v9)(q),c=(0,y.I0)(),s=function(n){var e=n.target,r=e.name,t=e.value;switch(r){case"name":o(t);break;case"number":d(t)}};return(0,G.jsxs)(K,{onSubmit:function(n){n.preventDefault(),p.some((function(n){return n.name===r}))?N().Notify.warning("".concat(r," is already in your phonebook")):(c((0,D.mu)({name:r,number:a})),o(""),d(""))},children:[(0,G.jsxs)(T,{children:["Name",(0,G.jsx)(W,{type:"text",name:"name",required:!0,placeholder:"Enter name",onChange:s})]}),(0,G.jsxs)(T,{children:["Number",(0,G.jsx)(W,{type:"tel",name:"number",required:!0,placeholder:"Enter number",onChange:s})]}),(0,G.jsx)(B,{type:"submit",children:"Add contact"})]})},J=r(1634),M=z.Z.div(Z||(Z=(0,w.Z)(["\n  width: 400px;\n  background-color: #7ad9f7;\n  padding: 12px;\n  border-radius: 8px;\n"]))),O=z.Z.label(v||(v=(0,w.Z)(["\n  color: #000000;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n"]))),Q=z.Z.input(j||(j=(0,w.Z)(["\n  font-size: 18px;\n  padding: 4px;\n  margin-top: 4px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  outline: transparent;\n  &: focus {\n    border-color: #e9af3d;\n  }\n  &: hover {\n    border-color: #e9af3d;\n  }\n"]))),R=function(){var n=(0,y.v9)(F).filter,e=(0,y.I0)();return(0,G.jsx)(M,{children:(0,G.jsxs)(O,{children:["Find contact",(0,G.jsx)(Q,{type:"text",name:"search",placeholder:"Search...",value:n,onChange:function(n){e((0,J.k)(n.target.value))}})]})})},V=r(6856),X=r(4373),Y=r(9983),$=r(2940),nn=function(){var n=(0,y.v9)(q),e=(0,y.v9)(F),r=(0,y.v9)(A),o=(0,y.v9)(U),t=(0,y.I0)();(0,k.useEffect)((function(){t((0,D.Pr)())}),[t]);var i=function(){if(""!==e.filter){var r=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}}();return(0,G.jsxs)(G.Fragment,{children:[o&&(0,G.jsx)("p",{children:"Something went wrong!. Try again later"}),i.length>0&&(0,G.jsx)(_,{children:i.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,G.jsxs)(P,{children:[(0,G.jsx)(Y.Pd.Provider,{value:{color:"#283044",size:40},children:(0,G.jsx)(X.ZKC,{})}),(0,G.jsxs)(C,{children:[(0,G.jsx)(S,{children:r}),(0,G.jsx)(S,{children:o})]}),(0,G.jsx)(E,{type:"button",onClick:function(){t((0,D.nt)(e))},children:(0,G.jsx)(Y.Pd.Provider,{value:{color:"#283044",size:40},children:(0,G.jsx)(V.ZkW,{})})})]},e)}))}),r&&(0,G.jsx)($.U,{})]})},en=function(){var n=(0,y.I0)(),e=(0,y.v9)(A);return(0,k.useEffect)((function(){n((0,D.Pr)())}),[n]),(0,G.jsxs)(C,{children:[e&&(0,G.jsx)($.U,{}),(0,G.jsx)(H,{}),(0,G.jsx)(R,{}),(0,G.jsx)(nn,{})]})}}}]);
//# sourceMappingURL=411.58eb4e6a.chunk.js.map