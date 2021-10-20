(this["webpackJsonpuse-holderjs-example"]=this["webpackJsonpuse-holderjs-example"]||[]).push([[0],{33:function(e,t,a){e.exports=a(55)},34:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),l=a(15),o=a.n(l),i=a(1),s=a(6),c=a(23),m=a(24),d=a(7),p=a(5),h=Object(p.createUseStyles)((function(e){return{spacer:{height:100,"@media (max-width: 800px)":{height:0},"@media (max-width: 640px)":{height:0}},wrapper:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[0],bottom:0,left:0,right:0,height:400,"@media (max-width: 800px)":{height:0},"@media (max-width: 640px)":{height:0}},withNavbar:{paddingRight:2*e.spacing.md},inner:{paddingTop:2*e.spacing.xl,paddingBottom:2*e.spacing.xl,display:"flex",justifyContent:"space-between","@media (max-width: 800px)":{flexDirection:"column"},"@media (max-width: 640px)":{paddingBottom:e.spacing.md}},logoSection:{maxWidth:300,"@media (max-width: 800px)":{marginBottom:e.spacing.xl},"@media (max-width: 640px)":{marginBottom:0}},description:{marginTop:e.spacing.xs,color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]},afterFooter:{borderTop:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2]),paddingTop:e.spacing.md},afterFooterNote:{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],"& a":Object(d.a)(Object(d.a)({},Object(i.getFocusStyles)(e)),{},{color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6]})},groups:{display:"flex","@media (max-width: 640px)":{display:"none"}},feedback:{maxWidth:260,marginLeft:80,"@media (max-width: 1000px)":{marginLeft:40}},feedbackDescription:{color:"dark"===e.colorScheme?e.colors.dark[1]:e.colors.gray[6],marginBottom:e.spacing.sm},social:{display:"flex","@media (max-width: 640px)":{display:"block"}},socialButton:{"& + &":{marginLeft:e.spacing.md},"@media (max-width: 640px)":{flex:1,width:"100%","& + &":{marginLeft:0,marginTop:e.spacing.md}}}}}),{theming:i.theming});function u(e){var t=e.withNavbar,a=h();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:a.spacer}),n.a.createElement("div",{className:Object(c.a)(a.wrapper,Object(s.a)({},a.withNavbar,t))},n.a.createElement(i.Container,{size:1100},n.a.createElement("div",{className:a.inner},n.a.createElement("div",{className:a.logoSection},n.a.createElement(i.Text,{className:a.description,size:"sm"})),n.a.createElement("div",{className:a.groups},n.a.createElement("div",{className:a.feedback},n.a.createElement(i.Text,{size:"lg",weight:500,style:{marginBottom:12}},"Feedback"),n.a.createElement(i.Text,{className:a.feedbackDescription,size:"sm"},"Your feedback is most valuable contribution to the project."),n.a.createElement(i.Button,{component:"a",href:"https://github.com/yoieh/use-holderjs/discussions/new",variant:"outline",color:"gray",size:"sm",rightIcon:n.a.createElement(m.a,{width:10,height:10})},"Leave feedback")))),n.a.createElement("div",{className:a.afterFooter},n.a.createElement(i.Group,{position:"apart"},n.a.createElement(i.Text,{size:"xs",className:a.afterFooterNote},"Built by using"," ",n.a.createElement(i.Anchor,{size:"xs",href:"//mantine.dev"},"Mantine")),n.a.createElement("div",{className:a.social}))))))}var g=Object(p.createUseStyles)((function(e){return{header:{top:0,left:0,right:0,height:60,zIndex:6,position:"fixed",backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,borderBottom:"1px solid ".concat("dark"===e.colorScheme?e.colors.dark[8]:e.colors.gray[2]),display:"flex",alignItems:"center",justifyContent:"space-between"},logo:{paddingRight:e.spacing.md,paddingLeft:e.spacing.md,height:60,display:"flex",alignItems:"center"},mainSection:Object(s.a)({},"@media (max-width: ".concat(0,"px)"),{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}),logoWrapper:{display:"flex",alignItems:"center"},version:Object(d.a)(Object(d.a)({},Object(i.getFocusStyles)(e)),{},{fontWeight:700,textDecoration:"none"})}}),{theming:i.theming}),E=a(26),y=a.n(E),f=function(){var e=g();return n.a.createElement("div",{className:e.header},n.a.createElement(y.a,{href:"//github.com/yoieh/use-holderjs",target:"_blank",color:"green"},"Fork me on GitHub"),n.a.createElement("div",{className:e.mainSection},n.a.createElement("div",{className:e.logoWrapper},n.a.createElement("div",{className:e.logo},n.a.createElement(i.Title,{order:3},"useHolderjs()")))))},v=Object(p.createUseStyles)((function(e){return{main:{scrollMarginTop:60,flex:1,paddingTop:60+e.spacing.xl-2},content:{minHeight:"calc(100vh - 280px)"}}}),{theming:i.theming}),x=function(e){var t=e.children,a=v();return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement("main",{className:a.main},n.a.createElement("div",{className:a.content},t)),n.a.createElement(u,null))},j=function(e){var t=e.children;return n.a.createElement(i.MantineProvider,{theme:{colorScheme:"dark"}},n.a.createElement(i.GlobalStyles,null),n.a.createElement(i.NormalizeCSS,null),n.a.createElement(x,null,t))},b=a(11),w=a(27),k=a.n(w),S=function(){return Object(r.useEffect)((function(){k.a.run()}),[]),r.createElement("div",null,r.createElement("img",{"data-src":"holder.js/300x200",alt:"holderjs"}))},C=a(28);function N(e){var t=e.title,a=e.description,r=e.disableTitleTemplate,l=a||"React hook to run holderjs, useHolderjs()";return n.a.createElement(C.a,{defer:!1,htmlAttributes:{lang:"en"},title:t,titleTemplate:r?void 0:"%s | use-holderjs()",meta:[{name:"viewport",content:"width=device-width, user-scalable=no"},{name:"description",content:l},{property:"og:title",content:t},{property:"og:image:width",content:"1280"},{property:"og:image:height",content:"640"},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@yoieh"},{name:"twitter:title",content:t},{name:"twitter:description",content:l}]},n.a.createElement("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),n.a.createElement("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap",rel:"stylesheet"}))}var T=a(3),O=function(){return n.a.createElement(i.Group,{spacing:"xs"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.npmjs.com/package/use-holderjs"},n.a.createElement("img",{src:"https://img.shields.io/npm/v/use-holderjs.svg",alt:"npm version",height:"20"}))),n.a.createElement("div",null,n.a.createElement("a",{href:"https://app.travis-ci.com/github/yoieh/use-holderjs?branch=main"},n.a.createElement("img",{src:"https://app.travis-ci.com/yoieh/use-holderjs.svg?branch=main",alt:"build status",height:"20"}))),n.a.createElement("div",null,n.a.createElement(T.a.License,{user:"yoieh",repo:"use-holderjs"})),n.a.createElement("div",null,n.a.createElement(T.a.Version,{user:"yoieh",repo:"use-holderjs",type:"version-tag"})),n.a.createElement("div",null,n.a.createElement(T.a.Issues,{user:"yoieh",repo:"use-holderjs",type:"issues"})),n.a.createElement("div",null,n.a.createElement(T.a.Issues,{user:"yoieh",repo:"use-holderjs",type:"issues-closed"})),n.a.createElement("div",null,n.a.createElement(T.a.Issues,{user:"yoieh",repo:"use-holderjs",type:"issues-pr"})),n.a.createElement("div",null,n.a.createElement(T.a.Issues,{user:"yoieh",repo:"use-holderjs",type:"issues-pr-closed"})),n.a.createElement("div",null,n.a.createElement(T.a.Size,{user:"yoieh",repo:"use-holderjs"})),n.a.createElement("div",null,n.a.createElement(T.a.Size,{user:"yoieh",repo:"use-holderjs",type:"repo-size"})),n.a.createElement("div",null,n.a.createElement(T.a.Analysis,{user:"yoieh",repo:"use-holderjs",type:"languages-top"})),n.a.createElement("div",null,n.a.createElement(T.a.Analysis,{user:"yoieh",repo:"use-holderjs",type:"languages-count"})),n.a.createElement("div",null,n.a.createElement(T.a.Social,{user:"yoieh",repo:"use-holderjs",type:"forks"})),n.a.createElement("div",null,n.a.createElement(T.a.Social,{user:"yoieh",repo:"use-holderjs",type:"stars"})),n.a.createElement("div",null,n.a.createElement(T.a.Social,{user:"yoieh",repo:"use-holderjs",type:"watchers"})),n.a.createElement("div",null,n.a.createElement(T.a.Social,{user:"yoieh",repo:"use-holderjs",type:"followers"})))},z=function(){return n.a.createElement("div",null,n.a.createElement(N,{title:"useHolder()",disableTitleTemplate:!0}),n.a.createElement(i.Container,null,n.a.createElement(i.Paper,null,n.a.createElement(i.Grid,null,n.a.createElement(i.Col,{span:12},n.a.createElement(i.Title,{order:1},"useHolder()")),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Grid,null,n.a.createElement(i.Col,{span:12},n.a.createElement(i.Text,{size:"md"},"React hook to run holderjs")),n.a.createElement(i.Col,{span:12},n.a.createElement(O,null)))),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Divider,{variant:"solid"})),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Title,{order:2},"Code example")),n.a.createElement(i.Col,{span:12},n.a.createElement(b.Prism,{language:"tsx"},'import * as React from "react";\nimport { useHolderjs } from "use-holderjs";\n\nconst Example = () => {\n  useHolderjs();\n  return (\n    <div>\n      <img data-src=\'holder.js/300x200\' />\n    </div>\n  );\n};\n')),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Center,null,n.a.createElement(i.Col,{span:4},n.a.createElement(S,null)))),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Divider,{variant:"solid"})),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Title,{order:2},"Installation")),n.a.createElement(i.Col,{span:12},n.a.createElement(b.Prism,{language:"bash"},"npm i use-holderjs")),n.a.createElement(i.Col,{span:12},n.a.createElement(i.Text,null," or ")),n.a.createElement(i.Col,{span:12},n.a.createElement(b.Prism,{language:"bash"},"yarn add use-holderjs"))))))},I=function(){return n.a.createElement(j,null,n.a.createElement(z,null))};o.a.render(n.a.createElement(I,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.54e2b7a5.chunk.js.map