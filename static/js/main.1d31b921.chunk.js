(this["webpackJsonpexpenses-project"]=this["webpackJsonpexpenses-project"]||[]).push([[0],{42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(34),c=n.n(a),s=(n(42),n(16)),l=n(0),r=n.n(l),i=n(23),o=n(3),u=n(10),j=n(12),b=(n(44),n(5));function d(e){return Object(b.jsx)("div",{className:"expenses-filter",children:Object(b.jsxs)("div",{className:"expenses-filter__control",children:[Object(b.jsx)("label",{children:"Filter by year"}),Object(b.jsxs)("select",{onChange:function(t){e.onChangeFilter(t.target.value)},value:e.selected,children:[Object(b.jsx)("option",{value:"2023",children:"2023"}),Object(b.jsx)("option",{value:"2022",children:"2022"}),Object(b.jsx)("option",{value:"2021",children:"2021"}),Object(b.jsx)("option",{value:"2020",children:"2020"}),Object(b.jsx)("option",{value:"2019",children:"2019"})]})]})})}n(46);function x(e){var t=e.date.seconds,n=new Date(1e3*t),a=n.toLocaleString("en-US",{month:"long"}),c=n.toLocaleString("en-US",{day:"2-digit"}),s=n.getFullYear();return Object(b.jsxs)("div",{className:"expense-date",children:[Object(b.jsx)("div",{className:"expense-date__month",children:a}),Object(b.jsx)("div",{className:"expense-date__day",children:c}),Object(b.jsx)("div",{className:"expense-date__year",children:s})]})}n(47);function p(e){var t="card "+e.className;return Object(b.jsx)("div",{className:t,children:e.children})}n(48);var O=n(35),v=n(37),h=n(36),m=n(28),f=Object(h.a)({apiKey:"AIzaSyAh9WtMDN0IB_ESGoUvXhBsO-cOK2ngsCk",authDomain:"espenses-simple.firebaseapp.com",projectId:"espenses-simple",storageBucket:"espenses-simple.appspot.com",messagingSenderId:"702775495453",appId:"1:702775495453:web:a33e7f0c90a8f350456ff4"}),_=Object(m.f)(f),g=n(18);function N(e){return Object(b.jsx)("li",{children:Object(b.jsxs)(p,{className:"expense-item",children:[Object(b.jsx)(x,{date:e.date}),Object(b.jsxs)("div",{className:"expense-item__description",children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(b.jsx)("div",{className:"expense-item__icons",children:Object(b.jsx)(O.a,{onClick:function(){console.log(e.amount)},icon:v.a,className:"fa-lg"})})]})})}n(53);function y(e){return 0===e.items.length?Object(b.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses"}):Object(b.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(b.jsx)(N,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}var S=n(4);n(54),n(55);function w(e){var t="0%";e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%");return Object(b.jsxs)("div",{className:"chart-bar",children:[Object(b.jsx)("div",{className:"chart-bar__inner",style:{borderColor:parseFloat(e.value.substring(1))>1e3?"#E41F7B80":"#0EF6BE"},children:Object(b.jsx)("div",{className:"chart-bar__fill",style:{height:t,backgroundColor:parseFloat(e.value.substring(1))>1e3?"#E41F7B":"#0EF6BE"}})}),Object(b.jsx)("div",{className:"chart-bar__label",children:e.label})]})}function C(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return Object(b.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(b.jsx)(w,{value:e.value,maxValue:n,label:e.label},e.label)}))})}var E=function(e){var t,n=[{label:"Jan",value:"0"},{label:"Feb",value:"0"},{label:"Mar",value:"0"},{label:"Apr",value:"0"},{label:"May",value:"0"},{label:"Jun",value:"0"},{label:"Jul",value:"0"},{label:"Aug",value:"0"},{label:"Sep",value:"0"},{label:"Oct",value:"0"},{label:"Nov",value:"0"},{label:"Dec",value:"0"}],a=Object(S.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value,s=c.date.seconds;n[new Date(1e3*s).getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(b.jsx)(C,{dataPoints:n})};n(56);function F(e){var t=Object(j.useState)("2021"),n=Object(u.a)(t,2),a=n[0],c=n[1],s=e.items.filter((function(e){var t=e.date.seconds;return new Date(1e3*t).getFullYear().toString()===a}));return Object(b.jsxs)(p,{className:"expenses",children:[Object(b.jsx)(d,{selected:a,onChangeFilter:function(e){c(e)}}),Object(b.jsx)(E,{expenses:s}),Object(b.jsx)(y,{items:s})]})}n(57),n(58);function k(e){var t=Object(j.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(j.useState)(""),l=Object(u.a)(s,2),i=l[0],d=l[1],x=Object(j.useState)(""),p=Object(u.a)(x,2),O=p[0],v=p[1],h=Object(g.b)(_,"expenses"),m=function(){var t=Object(o.a)(r.a.mark((function t(n){var s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),s={title:a,amount:+i,date:new Date(O)},t.next=4,Object(g.a)(h,s);case 4:console.log(s),e.onSaveExpenseData(s),c(""),d(""),v("");case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("form",{onSubmit:m,children:[Object(b.jsxs)("div",{className:"new-expense__controls",children:[Object(b.jsxs)("div",{className:"new-expense__control",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(b.jsxs)("div",{className:"new-expense__control",children:[Object(b.jsx)("label",{children:"Amount"}),Object(b.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:i,onChange:function(e){d(e.target.value)}})]}),Object(b.jsxs)("div",{className:"new-expense__control",children:[Object(b.jsx)("label",{children:"Date"}),Object(b.jsx)("input",{type:"date",min:"2019-01-01",max:"2023-12-31",value:O,onChange:function(e){v(e.target.value)}})]})]}),Object(b.jsxs)("div",{className:"new-expense__actions",children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}function D(e){var t=Object(j.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1];return Object(b.jsxs)(p,{className:"new-expense",children:[!a&&Object(b.jsx)("button",{className:"month-max-btn",children:"Set Months Max"}),!a&&Object(b.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expense"}),a&&Object(b.jsx)(k,{onSaveExpenseData:function(t){var n=Object(i.a)(Object(i.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),c(!1)},onCancel:function(){c(!1)}})]})}var M=function(){var e=Object(j.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(g.b)(_,"expenses");return Object(j.useEffect)((function(){var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.e)(c);case 2:t=e.sent,console.log(t),a(t.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{id:e.id})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{className:"app-h2",children:["expen",Object(b.jsx)("span",{className:"app-span",children:"$"}),"es"]}),Object(b.jsx)(D,{onAddExpense:function(e){a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(b.jsx)(F,{items:n}),Object(b.jsx)("span",{className:"app-span__control-version",children:"v 1.2"})]})};c.a.render(Object(b.jsx)(M,{}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.1d31b921.chunk.js.map