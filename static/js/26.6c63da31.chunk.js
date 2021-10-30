(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[26],{278:function(e,t,n){"use strict";var a=n(10),o=n(465),r=Object(a.a)(o.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=r},327:function(e,t,n){"use strict";var a=n(10),o=Object(a.a)("img")({width:"100%",height:"auto"});t.a=o},370:function(e,t,n){"use strict";var a=n(7),o=n(9),r=n(2),i=n(1),c=(n(4),n(8)),s=n(110),l=n(93),d=n(10),j=n(12),u=n(13),h=n(268),b=n(94),m=n(111);function O(e){return Object(b.a)("MuiAlert",e)}var p,x=Object(m.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),f=n(273),g=n(69),v=n(0),y=Object(g.a)(Object(v.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),w=Object(g.a)(Object(v.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(g.a)(Object(v.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=Object(g.a)(Object(v.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),S=Object(g.a)(Object(v.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),k=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],A=Object(d.a)(h.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat(Object(u.a)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,o="light"===t.palette.mode?l.b:l.e,i="light"===t.palette.mode?l.e:l.b,c=n.color||n.severity;return Object(r.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"},c&&"standard"===n.variant&&Object(a.a)({color:o(t.palette[c].light,.6),backgroundColor:i(t.palette[c].light,.9)},"& .".concat(x.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"outlined"===n.variant&&Object(a.a)({color:o(t.palette[c].light,.6),border:"1px solid ".concat(t.palette[c].light)},"& .".concat(x.icon),{color:"dark"===t.palette.mode?t.palette[c].main:t.palette[c].light}),c&&"filled"===n.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[c].dark:t.palette[c].main})})),R=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),z=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),B=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),D={success:Object(v.jsx)(y,{fontSize:"inherit"}),warning:Object(v.jsx)(w,{fontSize:"inherit"}),error:Object(v.jsx)(C,{fontSize:"inherit"}),info:Object(v.jsx)(M,{fontSize:"inherit"})},N=i.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiAlert"}),a=n.action,i=n.children,l=n.className,d=n.closeText,h=void 0===d?"Close":d,b=n.color,m=n.icon,x=n.iconMapping,g=void 0===x?D:x,y=n.onClose,w=n.role,C=void 0===w?"alert":w,M=n.severity,N=void 0===M?"success":M,G=n.variant,L=void 0===G?"standard":G,I=Object(o.a)(n,k),T=Object(r.a)({},n,{color:b,severity:N,variant:L}),H=function(e){var t=e.variant,n=e.color,a=e.severity,o=e.classes,r={root:["root","".concat(t).concat(Object(u.a)(n||a)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(s.a)(r,O,o)}(T);return Object(v.jsxs)(A,Object(r.a)({role:C,square:!0,elevation:0,ownerState:T,className:Object(c.a)(H.root,l),ref:t},I,{children:[!1!==m?Object(v.jsx)(R,{ownerState:T,className:H.icon,children:m||g[N]||D[N]}):null,Object(v.jsx)(z,{ownerState:T,className:H.message,children:i}),null!=a?Object(v.jsx)(B,{className:H.action,children:a}):null,null==a&&y?Object(v.jsx)(B,{ownerState:T,className:H.action,children:Object(v.jsx)(f.a,{size:"small","aria-label":h,title:h,color:"inherit",onClick:y,children:p||(p=Object(v.jsx)(S,{fontSize:"small"}))})}):null]}))}));t.a=N},465:function(e,t,n){"use strict";var a=n(2),o=n(9),r=n(1),i=(n(4),n(8)),c=n(110),s=n(10),l=n(12),d=n(268),j=n(94),u=n(111);function h(e){return Object(j.a)("MuiCard",e)}Object(u.a)("MuiCard",["root"]);var b=n(0),m=["className","raised"],O=Object(s.a)(d.a,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),p=r.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCard"}),r=n.className,s=n.raised,d=void 0!==s&&s,j=Object(o.a)(n,m),u=Object(a.a)({},n,{raised:d}),p=function(e){var t=e.classes;return Object(c.a)({root:["root"]},h,t)}(u);return Object(b.jsx)(O,Object(a.a)({className:Object(i.a)(p.root,r),elevation:d?8:void 0,ref:t,ownerState:u},j))}));t.a=p},466:function(e,t,n){"use strict";var a=n(2),o=n(9),r=n(1),i=(n(4),n(8)),c=n(110),s=n(10),l=n(12),d=n(94),j=n(111);function u(e){return Object(d.a)("MuiCardContent",e)}Object(j.a)("MuiCardContent",["root"]);var h=n(0),b=["className","component"],m=Object(s.a)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),O=r.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCardContent"}),r=n.className,s=n.component,d=void 0===s?"div":s,j=Object(o.a)(n,b),O=Object(a.a)({},n,{component:d}),p=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(O);return Object(h.jsx)(m,Object(a.a)({as:d,className:Object(i.a)(p.root,r),ownerState:O,ref:t},j))}));t.a=O},467:function(e,t,n){"use strict";var a=n(3),o=n(7),r=n(9),i=n(2),c=n(1),s=(n(4),n(8)),l=n(110),d=n(6),j=n(93),u=n(13),h=n(10),b=n(12),m=n(144),O=n(34),p=n(79),x=n(94),f=n(111);function g(e){return Object(x.a)("MuiLink",e)}var v=Object(f.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=n(0),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},M=Object(h.a)(p.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(u.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return C[e]||e}(n.color)))||n.color;return Object(i.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(j.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(o.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(v.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(e,t){var n=Object(b.a)({props:e,name:"MuiLink"}),o=n.className,d=n.color,j=void 0===d?"primary":d,h=n.component,p=void 0===h?"a":h,x=n.onBlur,f=n.onFocus,v=n.TypographyClasses,C=n.underline,S=void 0===C?"always":C,k=n.variant,A=void 0===k?"inherit":k,R=Object(r.a)(n,w),z=Object(m.a)(),B=z.isFocusVisibleRef,D=z.onBlur,N=z.onFocus,G=z.ref,L=c.useState(!1),I=Object(a.a)(L,2),T=I[0],H=I[1],V=Object(O.a)(t,G),W=Object(i.a)({},n,{color:j,component:p,focusVisible:T,underline:S,variant:A}),_=function(e){var t=e.classes,n=e.component,a=e.focusVisible,o=e.underline,r={root:["root","underline".concat(Object(u.a)(o)),"button"===n&&"button",a&&"focusVisible"]};return Object(l.a)(r,g,t)}(W);return Object(y.jsx)(M,Object(i.a)({className:Object(s.a)(_.root,o),classes:v,color:j,component:p,onBlur:function(e){D(e),!1===B.current&&H(!1),x&&x(e)},onFocus:function(e){N(e),!0===B.current&&H(!0),f&&f(e)},ref:V,ownerState:W,variant:A},R))}));t.a=S},999:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var a=n(103),o=n(51),r=n(17),i=n(221),c=n(466),s=n(79),l=n(467),d=n(265),j=n(272),u=n(370),h=n(84),b=n(131),m=n(95),O=n(58),p=n(278),x=n(327),f=n.p+"static/media/Amenoma.a6d26d59.png",g=n.p+"static/media/cocogoat.ac8a8c1e.png",v=n.p+"static/media/GIScanner.243ff846.png",y=n(0);function w(e){var t=Object(b.a)("page_scanner").t;return h.a.pageview("/scanner"),Object(y.jsxs)(i.a,{sx:{mt:1,"> div":{mb:1}},children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(c.a,{children:Object(y.jsxs)(m.a,{t:t,i18nKey:"intro",children:[Object(y.jsx)(s.a,{variant:"h5",children:"Automatic Scanners"}),Object(y.jsxs)(s.a,{gutterBottom:!0,children:["Automatic Scanners are Genshin tools that can automatically scan in-game data by manipulating your mouse movements, taking screenshots of the game, and then scanning information from those screenshots. These are low-risk tools that can help you automate a lot of manual process with scanning artifacts for GO. As any tools that indirectly interact with the game, althought their usage is virtually undetectable, ",Object(y.jsx)(l.a,{href:"https://genshin.mihoyo.com/en/news/detail/5763",target:"_blank",rel:"noreferrer",children:"there could still be risk with using them."})," Users discretion is advised."]}),Object(y.jsx)(s.a,{children:"The most important aspect of using these Scanners with GO is the output format:"}),Object(y.jsx)(s.a,{gutterBottom:!0,component:"div",children:Object(y.jsxs)("ul",{children:[Object(y.jsxs)("li",{children:["As of ",Object(y.jsx)("code",{children:"v5.21.0"}),", GO can import artifact data in the ",Object(y.jsx)("code",{children:"mona-uranai"})," format. "]}),Object(y.jsxs)("li",{children:["As of ",Object(y.jsx)("code",{children:"v6.0.0"}),", GO can import data in the ",Object(y.jsx)("code",{children:"Genshin Open Object Description (GOOD)"})," format."]})]})}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"Below are several scanners that have been tested with GO."}),Object(y.jsxs)(s.a,{children:["To upload the exported file, go to ",Object(y.jsx)(l.a,{component:O.b,to:"/database",children:"Database"})," page, and upload your file in the ",Object(y.jsx)("strong",{children:"Database Upload"})," section."]})]})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(c.a,{children:Object(y.jsxs)(d.a,{container:!0,spacing:2,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(x.a,{src:v})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:8,children:Object(y.jsxs)(m.a,{t:t,i18nKey:"gis",children:[Object(y.jsx)(s.a,{variant:"h5",children:"Genshin Impact Scanner"}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"This light-weight app will scan all your characters + weapons + artifacts in your inventory. Follow the instrutions in the app to set it up. This scanner only scans in english. "}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"The app exports to GOOD format by default."}),Object(y.jsx)(j.a,{href:"https://github.com/Andrewthe13th/Genshin_Scanner/releases",target:"_blank",startIcon:Object(y.jsx)(r.a,{icon:o.l}),children:"Download link"})]})})]})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(c.a,{children:Object(y.jsxs)(d.a,{container:!0,spacing:2,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:8,children:Object(y.jsxs)(m.a,{t:t,i18nKey:"amenoma",children:[Object(y.jsx)(s.a,{variant:"h5",children:"\u300c\u5929\u76ee\u300d-- Amenoma"}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"Scans all you artifacts in your inventory. Follow the instruction to capture the window and scan."}),Object(y.jsxs)(s.a,{gutterBottom:!0,children:["Has both Chinese and English version. (Download the ",Object(y.jsx)("code",{children:"_EN.exe"})," version to scan in english)"]}),Object(y.jsxs)(s.a,{gutterBottom:!0,children:["Both the ",Object(y.jsx)("code",{children:"mona-uranai"})," and ",Object(y.jsx)("code",{children:"GOOD"})," format is accepted in GO. the ",Object(y.jsx)("code",{children:"GOOD"})," format is recommended."]}),Object(y.jsx)(j.a,{sx:{mb:2},href:"https://github.com/daydreaming666/Amenoma/releases/",target:"_blank",startIcon:Object(y.jsx)(r.a,{icon:o.l}),children:"Download link"}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"Please feel free to join their discord if you find any bugs. They are in need of more english testers."}),Object(y.jsx)(j.a,{href:"https://discord.gg/S3B9NB7Bk2",target:"_blank",startIcon:Object(y.jsx)(r.a,{icon:a.a}),children:"Discord Invite"})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(x.a,{src:f})})]})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(c.a,{children:Object(y.jsxs)(d.a,{container:!0,spacing:2,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:4,children:Object(y.jsx)(x.a,{src:g})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:8,children:Object(y.jsxs)(m.a,{t:t,i18nKey:"cocogoat",children:[Object(y.jsx)(s.a,{variant:"h5",children:"cocogoat"}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"Originally Chinese scanner that was ported to English. Has an overlay to scan individual artifacts. "}),Object(y.jsx)(s.a,{gutterBottom:!0,children:"Cocogoat also retains your scanned artifacts, where you can edit them individually, and you can use them in its built-in mona-uranai optimizer.(Currently a Chinese-only optimizer)"}),Object(y.jsx)(s.a,{gutterBottom:!0,children:'It is recommended to export in its "Mona\'s Divination Shop" format.'}),Object(y.jsx)(j.a,{sx:{mb:2},href:"https://github.com/YuehaiTeam/cocogoat/releases",target:"_blank",startIcon:Object(y.jsx)(r.a,{icon:o.l}),children:"Download link"}),Object(y.jsxs)(u.a,{variant:"outlined",severity:"warning",children:['WARNING: Do not use the "Genshin Optimizer" export format. importing it will delete your character ',"&"," weapon data."]})]})})]})})}),Object(y.jsx)(p.a,{children:Object(y.jsx)(c.a,{children:Object(y.jsx)(j.a,{component:O.b,to:"/",startIcon:Object(y.jsx)(r.a,{icon:o.q}),children:Object(y.jsx)(m.a,{t:t,i18nKey:"backHome",children:"Go back to home page"})})})})]})}}}]);
//# sourceMappingURL=26.6c63da31.chunk.js.map