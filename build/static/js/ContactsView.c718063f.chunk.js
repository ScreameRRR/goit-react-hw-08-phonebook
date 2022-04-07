"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[705],{3415:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,l,s=t(885),o=t(2791),i=t(168),c=t(5751),d=c.ZP.div(r||(r=(0,i.Z)(["\n  form {\n    border: 1px solid black;\n    padding: 20px;\n    width: fit-content;\n  }\n  label {\n    display: block;\n  }\n  input {\n    display: block;\n    margin-bottom: 20px;\n  }\n  }\n"]))),u=t(6030),m=t(1385),h=t(3027),x=t(3360),p=t(184),b=function(){var n=(0,o.useState)(""),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,o.useState)(""),l=(0,s.Z)(a,2),i=l[0],c=l[1],b=(0,u.I0)(),g=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a)}};return(0,p.jsx)(d,{children:(0,p.jsxs)(h.Z,{name:"contact",onSubmit:function(n){n.preventDefault(),b(m.mh.addContacts({name:t,number:i})),r(""),c("")},children:[(0,p.jsxs)(h.Z.Group,{className:"mb-3",controlId:"email",children:[(0,p.jsx)(h.Z.Label,{column:"lg",children:"Name"}),(0,p.jsx)(h.Z.Control,{size:"lg",value:t,onChange:g,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),(0,p.jsxs)(h.Z.Group,{className:"mb-3",controlId:"number",children:[(0,p.jsx)(h.Z.Label,{column:"lg",children:"Number"}),(0,p.jsx)(h.Z.Control,{size:"lg",value:i,onChange:g,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),(0,p.jsx)(x.Z,{type:"submit",children:"Add contact"})]})})},g=t(1398),j=function(n){var e=n.contact,t=e.id,r=e.name,a=e.number,l=(0,u.I0)();return(0,p.jsxs)(g.Z.Item,{as:"li",style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,p.jsxs)("span",{children:[r,": ",a]}),(0,p.jsx)(x.Z,{onClick:function(){return l(m.mh.deleteContacts(t))},type:"button",children:"Delete"})]})},f=function(){var n=(0,u.v9)(m.lP.getFilteredItems),e=(0,u.I0)();return(0,o.useEffect)((function(){e(m.mh.getContacts())}),[e]),(0,p.jsx)(g.Z,{as:"ol",children:n.map((function(n){return(0,p.jsx)(j,{contact:n},n.id)}))})},Z=t(871),v=c.ZP.div(a||(a=(0,i.Z)(["\n  label {\n    display: block;\n    margin-bottom: 10px;\n  }\n"]))),C=function(){var n=(0,u.I0)(),e=(0,u.v9)(Z.zK);return(0,p.jsx)(v,{children:(0,p.jsxs)(h.Z.Group,{className:"mb-3",controlId:"filter",children:[(0,p.jsx)(h.Z.Label,{column:"lg",children:"Find contacts by name"}),(0,p.jsx)(h.Z.Control,{size:"lg",type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,Z.M6)(t))},name:"filter"})]})})},k=c.ZP.section(l||(l=(0,i.Z)(["\n  padding-left: 50px;\n  margin-bottom: 30px;\n  padding-top: 20px;\n\n  h1 {\n    margin: 0;\n    margin-bottom: 20px;\n  }\n"]))),y=function(n){var e=n.title,t=n.children;return(0,p.jsxs)(k,{children:[e&&(0,p.jsx)("h1",{children:e}),t]})},I=t(4060),z=t(6871),_=t(854),w=function(){return(0,u.v9)(_.um.getIsLoggedIn)?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(y,{title:"Phonebook",children:(0,p.jsx)(b,{})}),(0,p.jsxs)(y,{title:"Contacts",children:[(0,p.jsx)(C,{}),(0,p.jsx)(f,{})]})]}):(0,p.jsx)(z.Fg,{to:I.Z.contacts.redirectTo})}}}]);
//# sourceMappingURL=ContactsView.c718063f.chunk.js.map