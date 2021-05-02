(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(13),a=n.n(c),i=(n(22),n(3)),s=n(14),o=n(17),l=n(16),d=(n(23),n(0));var h=function(){return Object(d.jsxs)("div",{className:"page-title",children:[Object(d.jsx)("h1",{children:"Employee Directory"}),Object(d.jsx)("h4",{children:"Click on carrots to filter by heading or use the search box to narrow your results"})]})};n(25);var m=function(e){return Object(d.jsx)("div",{className:"search",children:Object(d.jsx)("input",{type:"text",placeholder:"Search",className:"search-input",onChange:e.handleSearch})})};n(26),n(27);var j=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("img",{alt:e.name,src:e.image,style:{height:60,width:60}})}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.dob})]})};var u=function(e){var t;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{className:"table table-striped",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Image"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"DOB"})]})}),Object(d.jsx)("tbody",{children:(t=e.employees,null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsx)(j,{id:e.id,image:e.image,name:e.name,phone:e.phone,email:e.email,dob:e.dob},e.id)})))})]})})},p=(n(28),n(15)),b=n.n(p),f={getRandomEmployees:function(){return b.a.get("https://randomuser.me/api?results=25")}},y=function e(){Object(i.a)(this,e)},O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],filteredEmployees:[]},e.componentDidMount=function(){e.fetchRandomEmployees()},e.fetchRandomEmployees=function(){return f.getRandomEmployees().then((function(t){var n=t.data.results.map((function(e){var t=new y;return t.id=e.login.uuid,t.name="".concat(e.name.first," ").concat(e.name.last),t.image=e.picture.large,t.email=e.email,t.phone=e.phone,t.dob=e.dob.date,t}));e.setState({employees:n})}))},e.removeEmployee=function(t){var n=e.state.employees.filter((function(e){return e.id!==t}));e.setState({employees:n})},e.handleEmployeeSearch=function(t){var n=t.target.value;if(0!==n.length){var r=e.state.employees.filter((function(e){return e.name.includes(n)}));e.setState({filteredEmployees:r})}else e.setState({filteredEmployees:[]})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(m,{handleSearch:this.handleEmployeeSearch}),Object(d.jsx)(u,{employees:this.state.filteredEmployees.length>0?this.state.filteredEmployees:this.state.employees,removeEmployee:this.removeEmployee})]})}}]),n}(r.Component);n(47);a.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.50fe7169.chunk.js.map