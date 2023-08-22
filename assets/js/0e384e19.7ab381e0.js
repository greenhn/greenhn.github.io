"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},s="\u6982\u8981",i={unversionedId:"intro",id:"intro",title:"\u6982\u8981",description:"\u7cfb\u7edf\u540e\u7aef\u91c7\u7528 golang + mysql \u8fdb\u884c\u5f00\u53d1\uff0c\u786c\u4ef6\u8bbe\u5907\u57fa\u4e8e stm32.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/greenhn/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Auth",permalink:"/docs/category/auth"}},c={},p=[{value:"Http",id:"http",level:2},{value:"Header",id:"header",level:3},{value:"Successful responses:",id:"successful-responses",level:3},{value:"Error Response:",id:"error-response",level:3}],l={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u8981"},"\u6982\u8981"),(0,o.kt)("p",null,"\u7cfb\u7edf\u540e\u7aef\u91c7\u7528 golang + mysql \u8fdb\u884c\u5f00\u53d1\uff0c\u786c\u4ef6\u8bbe\u5907\u57fa\u4e8e stm32."),(0,o.kt)("h2",{id:"http"},"Http"),(0,o.kt)("h3",{id:"header"},"Header"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Content-Type: application/json\nAuthorization: Bearer ${accessToken}\nAccept: application/json\n")),(0,o.kt)("h3",{id:"successful-responses"},"Successful responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Status Code: 2xx\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"200 OK, 201 Created, 202 Accepted, 204 No Content")),(0,o.kt)("h3",{id:"error-response"},"Error Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Status Code: 400\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"400 Bad Request, 401 Unauthorized , 403 Forbidden")))}d.isMDXComponent=!0}}]);