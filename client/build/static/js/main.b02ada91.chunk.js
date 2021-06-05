(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{186:function(e,t,s){},189:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(27),c=s.n(r),o=s(55),i=s(4),l=s(6),u=s(190),j=s(7),p=s(103),d=s(16),b=s.n(d),m=s(34),h=s(35),O=s.n(h),f="GET_MSG",g="CLEAR_MSG",x=function(e){return{type:f,payload:e}},v="SET_LOADING",y="CLEAR_LOADING",w=function(){return{type:v,payload:!0}},N=function(e){return{type:y,payload:!1}},S="REGISTER_SUCCESS",E="REGISTER_FAIL",C="LOGIN_SUCCESS",_="LOGIN_FAIL",k="RESET_SUCCESS",L="RESET_FAIL",A="LOGOUT_SUCCESS",R=s(1);var I=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).auth.user;return n.a.useEffect((function(){var e=document.querySelector(".hamburger"),t=document.querySelector(".menu");document.querySelectorAll(".menu-link").forEach((function(s){s.addEventListener("click",(function(){t.classList.remove("toogle-menu"),e.classList.remove("close")}))})),e.addEventListener("click",(function(){t.classList.toggle("toogle-menu"),this.classList.toggle("close")}))}),[]),Object(R.jsx)("header",{children:Object(R.jsx)(u.a,{children:Object(R.jsxs)("nav",{class:"nav",children:[Object(R.jsx)("div",{class:"branding",children:Object(R.jsx)("h2",{className:"m-0",children:Object(R.jsx)(j.b,{to:"/",class:"branding-logo",children:"Blogs."})})}),Object(R.jsx)("label",{for:"input-hamburger",class:"hamburger "}),Object(R.jsx)("input",{type:"checkbox",id:"input-hamburger",hidden:!0}),Object(R.jsxs)("ul",{class:"menu m-0 p-0",children:[Object(R.jsx)("li",{children:Object(R.jsx)(j.b,{to:"/private",class:"menu-link",children:"Get Private Page"})}),t?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("li",{children:Object(R.jsx)(j.b,{onClick:function(){e({type:A}),e(x("Logout Successful"))},to:"/",class:"menu-link",children:"Logout"})}),Object(R.jsx)("li",{className:"avatar-li",children:Object(R.jsx)(j.b,{to:"/user",class:"menu-link",children:Object(R.jsx)(p.a,{size:"40",round:!0,name:t.username})})})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("li",{children:Object(R.jsx)(j.b,{to:"/login",class:"menu-link",children:"Login"})}),Object(R.jsx)("li",{children:Object(R.jsx)(j.b,{to:"/register",class:"menu-link",children:"Register"})})]})]})]})})})};var P=function(){return Object(R.jsx)("h1",{children:"Home"})},T=s(18),F=s(5),G=s(19),D=s(99),Y=s.n(D);var U=function(){return Object(R.jsx)(Y.a,{type:"ThreeDots",color:"white",height:40,width:40,className:"loader"})};var q=function(e){var t=e.history,s=Object(i.b)(),n=Object(i.c)((function(e){return e})),r=n.auth.isAuthenticated,c=n.loading.loader,o=Object(a.useState)({email:"",password:""}),l=Object(G.a)(o,2),u=l[0],p=l[1],d=function(e){return p(Object(F.a)(Object(F.a)({},u),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){r&&t.replace("/")}),[t,r]),Object(R.jsx)("div",{className:"form_wrapper",children:Object(R.jsxs)("form",{className:"form",onSubmit:function(e){var t;e.preventDefault(),s((t=u,function(){var e=Object(m.a)(b.a.mark((function e(s){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(w()),a={headers:{"Content-Type":"application/json"}},e.next=5,O.a.post("http://localhost:5000/api/auth/login",t,a);case 5:n=e.sent,r=n.data,s({type:C,payload:r}),s(N()),s(x(r.message)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0.response?(c=e.t0.response.data.message,s(x(c))):s(x(e.t0.message)),s(N()),s({type:_});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(R.jsx)("h2",{className:"card-title",children:"Login."}),Object(R.jsxs)("div",{className:"input-groups",children:[Object(R.jsx)("input",{placeholder:"Enter Your Email Address",className:"form_input",name:"email",type:"email",onChange:d}),Object(R.jsx)("input",{placeholder:"Enter Your Password",className:"form_input",name:"password",type:"password",onChange:d}),Object(R.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(R.jsx)(j.b,{to:"/forgotpassword",children:"Forgot Password?"})})]}),Object(R.jsxs)("div",{className:"btn-grp",children:[Object(R.jsx)(j.b,{to:"/register",children:"Create Account"}),Object(R.jsx)("button",{type:"submit",className:"button button-primary",children:c?Object(R.jsx)(U,{}):"Login"})]})]})})};var B=function(e){var t=e.history,s=Object(i.b)(),n=Object(i.c)((function(e){return e})),r=n.auth.isAuthenticated,c=n.loading.loader,o=Object(a.useState)({username:"",email:"",password:"",confirmpassword:""}),l=Object(G.a)(o,2),u=l[0],p=l[1],d=function(e){return p(Object(F.a)(Object(F.a)({},u),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){r&&t.replace("/")}),[t,r]),Object(R.jsx)("div",{className:"form_wrapper ",children:Object(R.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u.password!==u.confirmpassword)return s(x("Passwords don't match"));var t;s((t=u,function(){var e=Object(m.a)(b.a.mark((function e(s){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(w()),a={headers:{"Content-Type":"application/json"}},e.next=5,O.a.post("http://localhost:5000/api/auth/register",t,a);case 5:n=e.sent,r=n.data,s({type:S,payload:r}),s(N()),s(x(r.message)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0.response?(c=e.t0.response.data.message,s(x(c))):s(x(e.t0.message)),s(N()),s({type:E});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()))},className:"form",children:[Object(R.jsx)("h2",{className:"card-title",children:"Register."}),Object(R.jsxs)("div",{className:"input-groups",children:[Object(R.jsx)("input",{placeholder:"Enter Your Name",className:"form_input",type:"text",name:"username",onChange:d}),Object(R.jsx)("input",{placeholder:"Enter Your Email Address",className:"form_input",type:"email",name:"email",onChange:d}),Object(R.jsx)("input",{placeholder:"Enter Your Password",className:"form_input",type:"password",name:"password",onChange:d}),Object(R.jsx)("input",{placeholder:"Confirm Your Password",className:"form_input",type:"password",name:"confirmpassword",onChange:d})]}),Object(R.jsxs)("div",{className:"btn-grp",children:[Object(R.jsx)(j.b,{type:"submit",to:"/login",children:"Login"}),Object(R.jsx)("button",{className:"button button-primary",children:c?Object(R.jsx)(U,{}):"Create Account"})]})]})})},M=function(e){var t=e.match,s=e.history,n=Object(i.b)(),r=Object(i.c)((function(e){return e})),c=r.auth.isReset,o=r.loading.loader,l=Object(a.useState)({password:"",confirmpassword:""}),u=Object(G.a)(l,2),p=u[0],d=u[1],h=function(e){return d(Object(F.a)(Object(F.a)({},p),{},Object(T.a)({},e.target.name,e.target.value)))};return Object(a.useEffect)((function(){c&&s.replace("/login")}),[s,c]),Object(R.jsx)("div",{className:"form_wrapper",children:Object(R.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var s=t.params.resetToken;if(p.password!==p.confirmpassword)return n(x("Passwords don't match"));n(function(e,t){return function(){var s=Object(m.a)(b.a.mark((function s(a){var n,r,c,o;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a(w()),n={headers:{"Content-type":"application/json"}},s.next=5,O.a.put("http://localhost:5000/api/auth/resetpassword/".concat(t),{password:e},n);case 5:r=s.sent,c=r.data,a({type:k,payload:!0}),a(N()),a(x(c.message)),s.next=17;break;case 12:s.prev=12,s.t0=s.catch(0),a({type:L,payload:!1}),s.t0.response?(o=s.t0.response.data.message,a(x(o))):a(x(s.t0.message)),a(N());case 17:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(e){return s.apply(this,arguments)}}()}(p.password,s))},children:[Object(R.jsx)("h2",{className:"card-title",children:"Forgot Password."}),Object(R.jsxs)("div",{className:"input-groups",children:[Object(R.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the email address you register your account with. We will send you reset password confirmation to this email"}),Object(R.jsx)("input",{placeholder:"Enter Your Password",className:"form_input",name:"password",type:"password",onChange:h}),Object(R.jsx)("input",{placeholder:"Confirm Your Password",className:"form_input",name:"confirmpassword",type:"password",onChange:h})]}),Object(R.jsxs)("div",{className:"btn-grp",children:[Object(R.jsx)(j.b,{to:"/register",children:"Create Account"}),Object(R.jsx)("button",{type:"submit",className:"button button-primary",children:o?Object(R.jsx)(U,{}):"Reset"})]})]})})},W=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).loading.loader,s=Object(a.useState)(""),n=Object(G.a)(s,2),r=n[0],c=n[1];return Object(R.jsx)("div",{className:"form_wrapper",children:Object(R.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e(function(e){return function(){var t=Object(m.a)(b.a.mark((function t(s){var a,n,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(w()),a={headers:{"Content-type":"application/json"}},t.next=5,O.a.post("http://localhost:5000/api/auth/forgotpassword",{email:e},a);case 5:n=t.sent,r=n.data,s(N()),s(x(r.message)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),t.t0.response?(c=t.t0.response.data.message,s(x(c))):s(x(t.t0.message)),s(N());case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}(r))},children:[Object(R.jsx)("h2",{className:"card-title",children:"Forgot Password."}),Object(R.jsxs)("div",{className:"input-groups",children:[Object(R.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the email address you register your account with. We will send you reset password confirmation to this email"}),Object(R.jsx)("input",{placeholder:"Enter Your Email Address",className:"form_input",name:"email",type:"email",onChange:function(e){return c(e.target.value)}})]}),Object(R.jsxs)("div",{className:"btn-grp",children:[Object(R.jsx)(j.b,{to:"/register",children:"Create Account"}),Object(R.jsx)("button",{type:"submit",className:"button button-primary",children:t?Object(R.jsx)(U,{}):"Forgot"})]})]})})};var H=function(){return Object(R.jsx)("h1",{children:"You have succesfull access this private route"})},J=s(104),z=["component"],K=function(e){var t=e.component,s=Object(J.a)(e,z);return Object(R.jsx)(l.b,Object(F.a)(Object(F.a)({},s),{},{render:function(e){return localStorage.getItem("access")?Object(R.jsx)(t,Object(F.a)({},e)):Object(R.jsx)(l.a,{to:"/login"})}}))};var Q=function(){var e=Object(i.c)((function(e){return e})).auth.user;return Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:e.username})})},V=function(){return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(I,{}),Object(R.jsxs)(u.a,{className:"padtop-4",children:[Object(R.jsx)(l.b,{exact:!0,path:"/",component:P}),Object(R.jsx)(l.b,{path:"/register",component:B}),Object(R.jsx)(l.b,{path:"/login",component:q}),Object(R.jsx)(l.b,{path:"/forgotpassword",component:W}),Object(R.jsx)(l.b,{path:"/passwordreset/:resetToken",component:M}),Object(R.jsx)(K,{path:"/user",component:Q}),Object(R.jsx)(K,{path:"/private",component:H})]})]})};var X=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.message.message}));return Object(a.useEffect)((function(){return t&&o.b.info(t),function(){e({type:g})}}),[t]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(o.a,{className:"notification",limit:1,position:"top-right",autoClose:2500,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1}),Object(R.jsx)(V,{})]})},Z=(s(186),s(187),s(188),s(28)),$=s(100),ee=s(101),te=s(102),se={access:null,loading:!1,isAuthenticated:!1,isReset:!1,user:null},ae=function(e){var t=Object(te.a)(e),s=new Date(1e3*t.exp);return new Date>s?(localStorage.removeItem("access"),null):t},ne=localStorage.getItem("access");if(ne){var re=ae(ne);if(re){se.access=ne;var ce=re.user;se.user=ce}}var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,s=t.type,a=t.payload;switch(s){case C:case S:localStorage.setItem("access",a.token);var n=ae(a.token),r=n.user;return Object(F.a)(Object(F.a)({},e),{},{isAuthenticated:!0,access:a.token,user:r});case k:return Object(F.a)(Object(F.a)({},e),{},{isReset:a});case _:case E:case A:return localStorage.removeItem("access"),Object(F.a)(Object(F.a)({},e),{},{isAuthenticated:!1,user:null,access:null});case L:return Object(F.a)(Object(F.a)({},e),{},{isReset:a});default:return e}},ie={message:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{message:t.payload};case g:return{message:null};default:return e}},ue={loader:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loader:!0};case y:return{loader:!1};default:return e}},pe=Object(Z.combineReducers)({auth:oe,message:le,loading:je}),de=[$.a],be=Object(Z.createStore)(pe,Object(ee.composeWithDevTools)(Z.applyMiddleware.apply(void 0,de)));c.a.render(Object(R.jsx)(j.a,{children:Object(R.jsx)(i.a,{store:be,children:Object(R.jsx)(X,{})})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.b02ada91.chunk.js.map