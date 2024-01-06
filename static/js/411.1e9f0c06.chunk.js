"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[411],{3411:function(n,e,r){r.r(e),r.d(e,{default:function(){return un}});var t,o,i,a,d,c,s,l,p,u,x,f,b,h,g,m,j,Z,k,v,y,w=r(2791),C=r(4420),z=r(168),$=r(7686),_=$.Z.div(t||(t=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),F=($.Z.div(o||(o=(0,z.Z)(["\n  background-color: #7ad9f7;\n  padding: 12px 80px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 50px;\n"]))),$.Z.p(i||(i=(0,z.Z)(["\n  font-size: 20px;\n  color: #000000;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),$.Z.button(a||(a=(0,z.Z)(["\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),$.Z.ul(d||(d=(0,z.Z)(["\n  background-color: #7ad9f7;\n  padding: 32px;\n  border-radius: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n"])))),P=$.Z.li(c||(c=(0,z.Z)(["\n  width: 360px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background-color: #e9af3d;\n"]))),S=$.Z.p(s||(s=(0,z.Z)(["\n  font-size: 20px;\n  color: #000000;\n  margin-bottom: 4px;\n"]))),E=$.Z.button(l||(l=(0,z.Z)(["\n  background-color: transparent;\n"]))),I=r(9439),L=r(1686),N=r.n(L),W=function(n){return n.contacts.contacts},q=function(n){return n.contacts.error},A=function(n){return n.contacts.isLoading},O=function(n){return n.filter.filter},T=function(n){return n.filter.status},U=r(6052),D=$.Z.form(p||(p=(0,z.Z)(["\n  width: 400px;\n  background-color: #7ad9f7;\n  padding: 12px;\n  border-radius: 8px;\n"]))),G=$.Z.label(u||(u=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #000000;\n  font-size: 20px;\n  margin-bottom: 12px;\n"]))),J=$.Z.input(x||(x=(0,z.Z)(["\n  font-size: 18px;\n  padding: 4px;\n  margin-top: 4px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  outline: transparent;\n\n  &: focus {\n    border-color: #e9af3d;\n  }\n\n  &: hover {\n    border-color: #e9af3d;\n  }\n"]))),K=$.Z.button(f||(f=(0,z.Z)(["\n  padding: 8px 24px;\n  font-size: 16px;\n  color: #000000;\n  background-color: #e9af3d;\n"]))),B=$.Z.p(b||(b=(0,z.Z)(["\n  color: #000000;\n  font-size: 18px;\n  margin-bottom: 4px;\n"]))),H=$.Z.div(h||(h=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n"]))),M=($.Z.div(g||(g=(0,z.Z)(["\n  position: relative;\n  padding: 0px 0px 0px 26px;\n  margin-bottom: 20px;\n  line-height: 24px;\n\n  &:before {\n    position: absolute;\n    content: '';\n    width: 20px;\n    height: 20px;\n    left: 0;\n    top: 0;\n    background-color: #ffffff;\n    border-radius: 50%;\n  }\n\n  &:after {\n    position: absolute;\n    content: '';\n    width: 14px;\n    height: 14px;\n    left: 3px;\n    top: 3px;\n    background-color: #78a1bb;\n    border-radius: 50%;\n  }\n"]))),$.Z.input(m||(m=(0,z.Z)(["\n  margin-left: 6px;\n"])))),Q=r(184),R=function(){var n=(0,w.useState)(""),e=(0,I.Z)(n,2),r=e[0],t=e[1],o=(0,w.useState)(""),i=(0,I.Z)(o,2),a=i[0],d=i[1],c=(0,w.useState)("others"),s=(0,I.Z)(c,2),l=s[0],p=s[1],u=(0,C.v9)(W),x=(0,C.I0)(),f=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":d(o);break;case"group":p(o)}};return(0,Q.jsxs)(D,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;x((0,U.mu)({name:r,number:a,group:l})),u.some((function(n){return n.name===r}))?N().Notify.warning("".concat(r," is already in your phonebook")):e.reset()},children:[(0,Q.jsxs)(G,{children:["Name",(0,Q.jsx)(J,{type:"text",name:"name",required:!0,placeholder:"Enter name",onChange:f})]}),(0,Q.jsxs)(G,{children:["Number",(0,Q.jsx)(J,{type:"tel",name:"number",required:!0,placeholder:"Enter number",onChange:f})]}),(0,Q.jsx)(B,{children:"Group"}),(0,Q.jsxs)(H,{children:[(0,Q.jsxs)("label",{children:["Family",(0,Q.jsx)(M,{type:"radio",name:"group",value:"family",onChange:f,checked:"family"===l})]}),(0,Q.jsxs)("label",{children:["Friends",(0,Q.jsx)(M,{type:"radio",name:"group",value:"friends",onChange:f,checked:"friends"===l})]}),(0,Q.jsxs)("label",{children:["Work",(0,Q.jsx)(M,{type:"radio",name:"group",value:"work",onChange:f,checked:"work"===l})]}),(0,Q.jsxs)("label",{children:["Others",(0,Q.jsx)(M,{type:"radio",name:"group",value:"others",onChange:f,checked:"others"===l})]})]}),(0,Q.jsx)(K,{type:"submit",children:"Add contact"})]})},V=r(1634),X=$.Z.div(j||(j=(0,z.Z)(["\n  width: 400px;\n  background-color: #7ad9f7;\n  padding: 12px;\n  border-radius: 8px;\n"]))),Y=$.Z.label(Z||(Z=(0,z.Z)(["\n  color: #000000;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  margin-bottom: 10px;\n"]))),nn=$.Z.input(k||(k=(0,z.Z)(["\n  font-size: 18px;\n  padding: 4px;\n  margin-top: 4px;\n  border-radius: 4px;\n  border: 2px solid transparent;\n  outline: transparent;\n  &: focus {\n    border-color: #e9af3d;\n  }\n  &: hover {\n    border-color: #e9af3d;\n  }\n"]))),en=$.Z.div(v||(v=(0,z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 6px;\n"]))),rn=$.Z.button(y||(y=(0,z.Z)(["\n  padding: 8px 12px;\n  font-size: 16px;\n  color: #000000;\n  background-color: #e9af3d;\n"]))),tn=r(9244),on=r(9313),an=function(){var n=(0,C.I0)(),e=(0,C.v9)(O).filter,r=(0,C.v9)(T),t=function(e){return n((0,on.J)(e))};return(0,Q.jsxs)(X,{children:[(0,Q.jsxs)(Y,{children:["Find contact",(0,Q.jsx)(nn,{type:"text",name:"search",placeholder:"Search...",value:e,onChange:function(e){n((0,V.k)(e.target.value))}})]}),(0,Q.jsxs)(en,{children:[(0,Q.jsx)(rn,{type:"button",selected:r===tn.$.all,onClick:function(){return t(tn.$.all)},children:"All"}),(0,Q.jsx)(rn,{type:"button",selected:r===tn.$.family,onClick:function(){return t(tn.$.family)},children:"Family"}),(0,Q.jsx)(rn,{type:"button",selected:r===tn.$.friends,onClick:function(){return t(tn.$.friends)},children:"Friends"}),(0,Q.jsx)(rn,{type:"button",selected:r===tn.$.work,onClick:function(){return t(tn.$.work)},children:"Work"}),(0,Q.jsx)(rn,{type:"button",selected:r===tn.$.others,onClick:function(){return t(tn.$.others)},children:"Oters"})]})]})},dn=r(6856),cn=r(4373),sn=r(9983),ln=r(2940),pn=function(){var n=(0,C.v9)(W),e=(0,C.v9)(O),r=(0,C.v9)(A),t=(0,C.v9)(q),o=(0,C.I0)();(0,w.useEffect)((function(){o((0,U.Pr)())}),[o]);var i=function(){if(""!==e.filter){var r=e.toLowerCase().trim();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))}}();return(0,Q.jsxs)(Q.Fragment,{children:[t&&(0,Q.jsx)("p",{children:"Something went wrong!. Try again later"}),i.length>0&&(0,Q.jsx)(F,{children:i.map((function(n){var e=n.id,r=n.name,t=n.number,i=n.group;return(0,Q.jsxs)(P,{children:[(0,Q.jsx)(sn.Pd.Provider,{value:{color:"#283044",size:40},children:(0,Q.jsx)(cn.ZKC,{})}),(0,Q.jsxs)(_,{children:[(0,Q.jsx)(S,{children:r}),(0,Q.jsx)(S,{children:t}),(0,Q.jsx)(S,{children:i})]}),(0,Q.jsx)(E,{type:"button",onClick:function(){o((0,U.nt)(e))},children:(0,Q.jsx)(sn.Pd.Provider,{value:{color:"#283044",size:40},children:(0,Q.jsx)(dn.ZkW,{})})})]},e)}))}),r&&(0,Q.jsx)(ln.U,{})]})},un=function(){var n=(0,C.I0)(),e=(0,C.v9)(A);return(0,w.useEffect)((function(){n((0,U.Pr)())}),[n]),(0,Q.jsxs)(_,{children:[e&&(0,Q.jsx)(ln.U,{}),(0,Q.jsx)(R,{}),(0,Q.jsx)(an,{}),(0,Q.jsx)(pn,{})]})}}}]);
//# sourceMappingURL=411.1e9f0c06.chunk.js.map