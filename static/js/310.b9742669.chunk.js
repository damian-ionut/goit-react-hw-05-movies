"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{47:function(n,r,e){e.d(r,{Z:function(){return x}});e(791);var t,a,c,u=e(696),o=e(168),i=e(924),s=e(87),p=i.ZP.ul(t||(t=(0,o.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),f=i.ZP.li(a||(a=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),d=(0,i.ZP)(s.rU)(c||(c=(0,o.Z)(["\n  margin-left: 5px;\n  text-decoration: none;\n  color: #333;\n"]))),l=e(184),x=function(n){var r=n.data,e=n.url,t=void 0===e?"":e,a=n.location;return(0,l.jsx)(p,{children:Array.isArray(r)&&r.map((function(n){var r=n.id,e=n.title;return(0,l.jsxs)(f,{children:[(0,l.jsx)(u.mz0,{}),(0,l.jsx)(d,{to:"".concat(t).concat(r),state:{from:a},children:e})]},r)}))})}},310:function(n,r,e){e.r(r),e.d(r,{default:function(){return w}});var t,a,c,u=e(433),o=e(861),i=e(439),s=e(757),p=e.n(s),f=e(791),d=e(87),l=e(689),x=e(170),v=e(168),m=e(924),h=m.ZP.form(t||(t=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),g=m.ZP.input(a||(a=(0,v.Z)(["\n  width: 150px;\n  padding: 6px;\n  font-size: 14px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-right: 10px;\n"]))),Z=m.ZP.button(c||(c=(0,v.Z)(["\n  padding: 6px 12px;\n  font-size: 14px;\n  background-color: #999;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n"]))),b=e(47),y=e(184),w=function(){var n,r=(0,f.useState)([]),e=(0,i.Z)(r,2),t=e[0],a=e[1],c=(0,f.useState)(""),s=(0,i.Z)(c,2),v=s[0],m=s[1],w=(0,d.lr)(),k=(0,i.Z)(w,2),j=k[0],P=k[1],q=null!==(n=j.get("query"))&&void 0!==n?n:"",S=(0,l.TH)();(0,f.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var r,e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x.Wf(q);case 3:if(r=n.sent,e=r.results,a((0,u.Z)(e)),!(e.length>0)){n.next=9;break}return m("resolved"),n.abrupt("return");case 9:m("empty"),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0.message),m("rejected");case 16:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}""!==q&&(m("pending"),function(){n.apply(this,arguments)}())}),[q]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;P({query:r.elements.query.value}),r.reset(),a([])},children:[(0,y.jsx)(g,{type:"text",name:"query"}),(0,y.jsx)(Z,{type:"submit",children:"Search"})]}),"empty"===v&&(0,y.jsx)("p",{children:"No matches for your query.."}),t&&(0,y.jsx)(b.Z,{data:t,url:"",location:S})]})}},170:function(n,r,e){e.d(r,{HI:function(){return i},Ku:function(){return p},Pg:function(){return s},Wf:function(){return d},lV:function(){return f}});var t=e(861),a=e(757),c=e.n(a),u=e(340),o=new URLSearchParams({api_key:"79ab7c2fa96297d0e92f5ad0dcb9443d"});u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,t.Z)(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(o));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?").concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?").concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews?").concat(o));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(r));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.b9742669.chunk.js.map