(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),l=t.n(c),u=(t(19),t(2)),o=function(e){var n=e.persons,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("ul",null,n.sort((function(e,n){return e.name>n.name?1:n.name>e.name?-1:0})).map((function(e,n){return r.a.createElement("li",{key:e.name,style:{listStyle:"none"}},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e.id)}},"Delete"))}))))},i=function(e){var n=e.addPerson,t=e.newName,a=e.handleNewName,c=e.newNumber,l=e.handleNewNumber;return r.a.createElement("div",null,r.a.createElement("form",{id:"nameForm",onSubmit:n},r.a.createElement("div",null,r.a.createElement("label",{style:{display:"block",marginLeft:"10px"}},"Name"),r.a.createElement("input",{value:t,onChange:a,style:{margin:"10px"}}),r.a.createElement("div",null,r.a.createElement("label",{style:{display:"block",marginLeft:"10px"}},"Number"),r.a.createElement("input",{type:"number",value:c,onChange:l,placeholder:"ex. 0441234567",style:{margin:"10px"}}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",style:{margin:"10px"}},"Add new contact"))))},m=function(e){var n=e.filt_name,t=e.handleFilter;return r.a.createElement("div",null,r.a.createElement("label",{style:{margin:"10px"}},"Find"),r.a.createElement("input",{value:n,onChange:t,style:{margin:"10px"}}))},d=t(3),s=t.n(d),f="/api/persons",b=function(){return s.a.get(f).then((function(e){return e.data}))},p=function(e){return s.a.post(f,e).then((function(e){return e.data}))},h=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return s.a.delete("".concat(f,"/").concat(e))},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)((function(){b().then((function(e){c(e)}))}),[]);var l=Object(a.useState)(""),d=Object(u.a)(l,2),s=d[0],f=d[1],g=Object(a.useState)(""),v=Object(u.a)(g,2),y=v[0],w=v[1],j=Object(a.useState)(!0),O=Object(u.a)(j,2),x=O[0],N=O[1],k=Object(a.useState)(""),S=Object(u.a)(k,2),C=S[0],D=S[1],F=Object(a.useState)(""),A=Object(u.a)(F,2),P=A[0],T=A[1],_=Object(a.useState)(!1),I=Object(u.a)(_,2),J=I[0],L=I[1],M={color:J?"green":"red",backgroundColor:"#c7dbc3",border:J?"solid 1px green":"solid 1px red"},U=x?t:t.filter((function(e){return e.name.toUpperCase().includes(C.toUpperCase())})),B=function(e){var n={name:s,number:y,id:e};h(e,n).then((function(a){c(t.map((function(n){return n.id!==e?n:a}))),L(!0),T("".concat(n.name," number was changed")),setTimeout((function(){T(null)}),2e3),f(""),w("")})).catch((function(a){L(!1),T("Information of ".concat(n.name," has already been removed from server")),c(t.filter((function(n){return n.id!==e})))}))},q=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{style:M},r.a.createElement("p",{style:{margin:"10px"}},n))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),P&&r.a.createElement(q,{message:P}),r.a.createElement(m,{filt_name:C,handleFilter:function(e){D(e.target.value),N(!1)}}),r.a.createElement("h3",{style:{margin:"10px"}},"Add a contact"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:s,number:y,id:"_"+Math.random().toString(36).substr(2,9)},a=t.map((function(e){return e.name}));if(""===s||""===y)alert("Type a name with number");else if(a.includes(s)){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var r=t.find((function(e){return e.name===s})).id;B(r,n)}}else p(n).then((function(e){c(t.concat(e)),L(!0),T("Added ".concat(n.name)),setTimeout((function(){T(null)}),2e3),f(""),w("")}))},newName:s,handleNewName:function(e){f(e.target.value)},newNumber:y,handleNewNumber:function(e){w(e.target.value)}}),r.a.createElement("h2",{style:{margin:"10px"}},"Contacts"),r.a.createElement(o,{persons:U,handleDelete:function(e){window.confirm("Delete  ".concat(t.find((function(n){return n.id===e})).name,"?"))&&(E(e).catch((function(e){return console.log(e.message)})),c(t.filter((function(n){return n.id!==e}))))}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.434be2cb.chunk.js.map