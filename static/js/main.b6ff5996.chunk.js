(this["webpackJsonpdtaylor6306.github.io"]=this["webpackJsonpdtaylor6306.github.io"]||[]).push([[0],{154:function(e){e.exports=JSON.parse('[{"name":"Database Design CSCI 460","time":"10:00 am - 10:50 am","days":"MWF","credithour":3},{"name":"Adv. Programming: JavaScript CSCI 310","time":"3:00 pm - 3:50 pm","days":"MWF","credithour":3},{"name":"Discrete Structures MATH 369","time":"12:00 pm - 12:50 pm","days":"MWF","credithour":3},{"name":"Essential Speech ESSL 200","time":"Online","days":"N/A","credithour":1},{"name":"Milestone: Death and Dying ESSL 290","time":"Online","days":"N/A","credithour":3},{"name":"Operating Systems Design CSCI 470","time":"11:00 am - 12:15 am","days":"TTR","credithour":3}]')},161:function(e,t,c){},162:function(e,t,c){},512:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),s=c.n(a),i=(c(161),c(27)),j=c(28),l=c(30),o=c(29),d=(c(162),c(11)),b=c(6),u=c(2),h=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"aboutme-header",children:" About Me"}),Object(u.jsx)(d.Grid,{className:"aboutme-grid",children:Object(u.jsx)(d.Cell,{col:12,children:Object(u.jsxs)("p",{children:["My name is Dylan Taylor, I am currently a student at Colorado Mesa University, aswell as a Tutor for the school.",Object(u.jsx)("br",{}),"I started my academic journey in 2017 and will graduate with a B.S. in Computer Science spring 2021."]})})})]})}}]),c}(n.Component),m=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"resume-page",children:[Object(u.jsx)("i",{children:"My Resume"}),Object(u.jsx)("iframe",{title:"resume",src:"/images/Resume 4.5.21.pdf",width:"100%",height:"700px"})]})}}]),c}(n.Component),O=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(u.jsx)(d.Grid,{className:"landing-grid",children:Object(u.jsxs)(d.Cell,{col:12,children:[Object(u.jsx)("img",{src:"/images/mesaSelfie.jpg",alt:"avatar",className:"avatar-img"}),Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)("h1",{children:"Dylan Taylor "}),Object(u.jsx)("hr",{})," ",Object(u.jsx)("p",{children:" C++ | C | JavaScript | SQL "}),Object(u.jsx)("div",{className:"social-links",children:Object(u.jsx)("a",{href:"https://github.com/dtaylor6306",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("i",{className:"fa fa-github",rel:"noopener noreferrer","aria-hidden":"true"})})})]})]})})})}}]),c}(n.Component),x=c(154),p=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(i.a)(this,c),e=t.call(this);var n=new Date,r=n.getMonth()+1+"-"+n.getDate()+"-"+n.getFullYear();return e.state={currentDate:r},e}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"schedule-page",children:[Object(u.jsxs)("h1",{className:"date-time",children:[" Today's Date: ",this.state.currentDate]}),Object(u.jsx)(d.Grid,{children:x.map((function(e){return Object(u.jsx)("div",{className:"schedule-grid",children:Object(u.jsx)(d.Cell,{col:12,children:Object(u.jsxs)("div",{className:"schedule-cell",children:["Course: "+e.name," ",Object(u.jsx)("br",{})," ","Time: "+e.time,"  ",Object(u.jsx)("br",{})," ","Days: "+e.days,Object(u.jsx)("br",{})," ","Credit Hours:"+e.credithour]})})})}))})]})}}]),c}(n.Component),g=function(){return Object(u.jsxs)(b.c,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",component:O}),Object(u.jsx)(b.a,{path:"/resume",component:m}),Object(u.jsx)(b.a,{path:"/aboutme",component:h}),Object(u.jsx)(b.a,{path:"/schedule",component:p})]})},y=c(18),f=(c(213),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"demo-big-content",children:Object(u.jsxs)(d.Layout,{children:[Object(u.jsx)(d.Header,{className:"header-color",title:"Menu",scroll:!0,children:Object(u.jsxs)(d.Navigation,{children:[Object(u.jsx)(y.b,{to:"/",children:"Home"}),Object(u.jsx)(y.b,{to:"/resume",children:"Resume"}),Object(u.jsx)(y.b,{to:"/aboutme",children:"About Me"}),Object(u.jsx)(y.b,{to:"/schedule",children:"Schedule"})]})}),Object(u.jsx)(d.Drawer,{title:"Menu",children:Object(u.jsxs)(d.Navigation,{children:[Object(u.jsx)(y.b,{to:"/",children:"Home"}),Object(u.jsx)(y.b,{to:"/resume",children:"Resume"}),Object(u.jsx)(y.b,{to:"/aboutme",children:"About Me"}),Object(u.jsx)(y.b,{to:"/schedule",children:"Schedule"})]})}),Object(u.jsxs)(d.Content,{className:"body-color",children:[Object(u.jsx)("div",{className:"page-content"}),Object(u.jsx)(g,{})]})]})})}}]),c}(n.Component)),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,513)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(510),c(511);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y.a,{children:Object(u.jsx)(f,{})})}),document.getElementById("root")),v()}},[[512,1,2]]]);
//# sourceMappingURL=main.b6ff5996.chunk.js.map