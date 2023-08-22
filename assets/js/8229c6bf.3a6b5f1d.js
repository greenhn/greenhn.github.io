"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),d=l,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),p=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=b({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,r]),tabValues:r}}var f=a(2389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",T.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=y(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",T.tabList)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,f.Z)();return l.createElement(h,(0,n.Z)({key:String(t)},e))}},5615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),i=a(5162);const o={sidebar_position:0},s="Email",u={unversionedId:"auth/email",id:"auth/email",title:"Email",description:"Definition",source:"@site/docs/auth/email.md",sourceDirName:"auth",slug:"/auth/email",permalink:"/docs/auth/email",draft:!1,editUrl:"https://github.com/greenhn/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/auth/email.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Application",permalink:"/docs/auth/application"},next:{title:"Phone",permalink:"/docs/auth/phone"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"Get Emails",id:"get-emails",level:2},{value:"Get Email",id:"get-email",level:2},{value:"Apply Email.ID",id:"apply-emailid",level:2},{value:"Create Email",id:"create-email",level:2},{value:"Update Email",id:"update-email",level:2},{value:"Update Email Partial",id:"update-email-partial",level:2},{value:"Update Email Status",id:"update-email-status",level:2},{value:"Destroy Email",id:"destroy-email",level:2}],m={toc:c},d="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"email"},"Email"),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Email Type"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="email.json"',title:'"email.json"'},'{\n  "id": 0,\n  "userID": 0,\n  "emailAddress": "",\n  "emailVerifiedAt": "",\n  "status": 0,\n  "createdAt": "",\n  "updatedAt": "",\n}\n'))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"}))),(0,l.kt)("h2",{id:"get-emails"},"Get Emails"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/email/?\\$filter=&\\$orderBy=&\\$page=1&\\$pageSize=10" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"get-email"},"Get Email"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/email/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"apply-emailid"},"Apply Email.ID"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/apply/email/id/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"create-email"},"Create Email"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/email/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @email.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="email.json"',title:'"email.json"'},'{\n  "userID": 0,\n  "emailAddress": "",\n  "emailVerifiedAt": "",\n  "status": 0,\n}\n'))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"success status: 201"))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-email"},"Update Email"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/email/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @email.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="email.json"',title:'"email.json"'},'{\n  "userID": 0,\n  "emailAddress": "",\n  "emailVerifiedAt": "",\n  "status": 0,\n}\n')))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-email-partial"},"Update Email Partial"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/email/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -H "Attrs: userID,emailAddress,emailVerifiedAt,status" \\\n   -d @email.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="email.json"',title:'"email.json"'},'{\n  "userID": 0,\n  "emailAddress": "",\n  "emailVerifiedAt": "",\n  "status": 0,\n}\n')))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-email-status"},"Update Email Status"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/email/${id}/status/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @email.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="email.json"',title:'"email.json"'},'{\n  "status": 0\n}\n')))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"destroy-email"},"Destroy Email"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/email/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"\n'))),(0,l.kt)(i.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})))}b.isMDXComponent=!0}}]);