(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Banco_galicia_logo.be144abf.png"},,,,function(e,a,t){e.exports=t.p+"static/media/platziconf-logo.a1880fbf.svg"},function(e,a,t){e.exports=t.p+"static/media/astronauts.0d2ff286.svg"},,function(e,a,t){e.exports=t(37)},,,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/badge-header.ed7c58ea.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=(t(27),t(28),t(39)),s=t(41),m=t(40),i=t(10),u=t(11),p=t(3),h=t(4),d=t(6),f=t(5),b=t(7),v=(t(29),t(30),t(31),t(14)),E=t.n(v),g=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Button was clicked")},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement("img",{className:"Badge__avatar",src:this.props.avatarUrl,alt:"Avatar"}),r.a.createElement("h3",null," Crear\xe1s un acuerdo por: ",r.a.createElement("br",null),"$",this.props.amount)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,"Desde: ",this.props.startDate),r.a.createElement("h3",null,"Hasta: ",this.props.expirationDate)),r.a.createElement("div",{className:"Badge__footer"},"Sobre la cuenta: ",this.props.account),r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary float-right"},"Continuar"))}}]),a}(r.a.Component),N=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),console.log("Button was submited"),console.log(t.props.formValues)},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"space"},r.a.createElement("h1",null,"Cre\xe1 un Nuevo Acuerdo"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Monto"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"number",name:"amount",value:this.props.formValues.amount}),r.a.createElement("label",{htmlFor:""},"Fecha de inicio"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"date",name:"startDate",value:this.props.formValues.startDate}),r.a.createElement("label",{htmlFor:""},"Fecha de fin"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"date",name:"expirationDate",value:this.props.formValues.expirationDate}),r.a.createElement("label",{htmlFor:""},"Cuenta"),r.a.createElement("input",{onChange:this.props.onChange,className:"form-control",type:"number",name:"account",value:this.props.formValues.account}))))}}]),a}(r.a.Component),j=(n.Component,t(32),t(38)),O=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement(j.a,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:E.a,alt:"Logo"}))))}}]),a}(r.a.Component),C=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={form:{amount:null,startDate:null,expirationDate:null,account:null}},t.handleChange=function(e){t.setState({form:Object(u.a)({},t.state.form,Object(i.a)({},e.target.name,e.target.value))})},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(N,{onChange:this.handleChange,formValues:this.state.form})),r.a.createElement("div",{className:"col-6"},r.a.createElement(g,{amount:this.state.form.amount,startDate:this.state.form.startDate,expirationDate:this.state.form.expirationDate,account:this.state.form.account,avatarUrl:"https://www.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?d=identicon"})))))}}]),a}(r.a.Component);var y=function(e){return r.a.createElement(r.a.Fragment,null,e.children)};var w=function(){return r.a.createElement("h1",null,"404: Not Found")},D=(t(35),t(18)),_=t.n(D),x=t(19),k=t.n(x),B=function(e){function a(){return Object(p.a)(this,a),Object(d.a)(this,Object(f.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:_.a,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(j.a,{className:"btn btn-primary",to:"/agreements"},"Gener\xe1 tu Acuerdo")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:k.a,alt:"Astronauts",className:"img-fluid p-4"})))))}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(d.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={form:{amount:null,startDate:null,expirationDate:null,account:null}},t.handleChange=function(e){t.setState({form:Object(u.a)({},t.state.form,Object(i.a)({},e.target.name,e.target.value))})},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(N,{onChange:this.handleChange,formValues:this.state.form})),r.a.createElement("div",{className:"col-6"},r.a.createElement(g,{amount:this.state.form.amount,startDate:this.state.form.startDate,expirationDate:this.state.form.expirationDate,account:this.state.form.account,avatarUrl:"https://www.gravatar.com/avatar/cac13485edfc360b210a0a36152c3eed?d=identicon"})))))}}]),a}(r.a.Component);var A=function(){return r.a.createElement(o.a,null,r.a.createElement(y,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{exact:!0,path:"/agreements",component:F}),r.a.createElement(m.a,{exact:!0,path:"/badges/new",component:C}),r.a.createElement(m.a,{exact:!0,path:"/",component:B}),r.a.createElement(m.a,{component:w}))))},S=document.getElementById("app");l.a.render(r.a.createElement(A,null),S)}],[[21,1,2]]]);
//# sourceMappingURL=main.20fd0859.chunk.js.map