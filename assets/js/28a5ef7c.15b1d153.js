"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,b=c["".concat(o,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(b,s(s({ref:t},u),{},{components:a})):n.createElement(b,s({ref:t},u))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),l=a(7294),r=a(6010),s=a(2466),i=a(6550),o=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function T(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,p]=b({queryString:a,groupId:n}),[c,T]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=o??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),T(e)}),[p,T,r]),tabValues:r}}var k=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=T(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function g(e){const t=(0,k.Z)();return l.createElement(h,(0,n.Z)({key:String(t)},e))}},1144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),s=a(5162);const i={sidebar_position:0},o="User",p={unversionedId:"auth/user",id:"auth/user",title:"User",description:"Definition",source:"@site/docs/auth/user.md",sourceDirName:"auth",slug:"/auth/user",permalink:"/docs/auth/user",draft:!1,editUrl:"https://github.com/greenhn/greenhn.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/auth/user.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Token",permalink:"/docs/auth/token"},next:{title:"Cam",permalink:"/docs/category/cam"}},u={},c=[{value:"Definition",id:"definition",level:2},{value:"Get Users",id:"get-users",level:2},{value:"Get User",id:"get-user",level:2},{value:"Apply User.ID",id:"apply-userid",level:2},{value:"Create User",id:"create-user",level:2},{value:"Update User",id:"update-user",level:2},{value:"Update User Partial",id:"update-user-partial",level:2},{value:"Update User Status",id:"update-user-status",level:2},{value:"Destroy User",id:"destroy-user",level:2},{value:"Get Applications",id:"get-applications",level:2},{value:"Link Applications",id:"link-applications",level:2},{value:"UnLink Applications",id:"unlink-applications",level:2},{value:"Get ApplicationUser",id:"get-applicationuser",level:2},{value:"Update ApplicationUser",id:"update-applicationuser",level:2},{value:"Get Roles",id:"get-roles",level:2},{value:"Link Roles",id:"link-roles",level:2},{value:"UnLink Roles",id:"unlink-roles",level:2}],d={toc:c},m="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user"},"User"),(0,l.kt)("h2",{id:"definition"},"Definition"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"User Type"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="user.json"',title:'"user.json"'},'{\n  "id": 0,\n  "ref": 0,\n  "outKey": "",\n  "firstName": "",\n  "lastName": "",\n  "photoUrl": "",\n  "password": "",\n  "rememberToken": "",\n  "status": 0,\n  "createdAt": "",\n  "updatedAt": "",\n}\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"}))),(0,l.kt)("h2",{id:"get-users"},"Get Users"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/user/?\\$filter=&\\$orderBy=&\\$page=1&\\$pageSize=10" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"get-user"},"Get User"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/user/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"apply-userid"},"Apply User.ID"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/apply/user/id/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"create-user"},"Create User"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/user/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @user.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="user.json"',title:'"user.json"'},'{\n  "ref": 0,\n  "outKey": "",\n  "firstName": "",\n  "lastName": "",\n  "photoUrl": "",\n  "status": 0,\n}\n'))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"success status: 201"))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-user"},"Update User"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/user/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @user.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="user.json"',title:'"user.json"'},'{\n  "ref": 0,\n  "outKey": "",\n  "firstName": "",\n  "lastName": "",\n  "photoUrl": "",\n  "status": 0,\n}\n')))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-user-partial"},"Update User Partial"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/user/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -H "Attrs: ref,outKey,firstName,lastName,photoUrl,status" \\\n   -d @user.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="user.json"',title:'"user.json"'},'{\n  "ref": 0,\n  "outKey": "",\n  "firstName": "",\n  "lastName": "",\n  "photoUrl": "",\n  "status": 0,\n}\n')))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-user-status"},"Update User Status"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/user/${id}/status/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @user.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="user.json"',title:'"user.json"'},'{\n  "status": 0\n}\n')))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"destroy-user"},"Destroy User"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/user/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"get-applications"},"Get Applications"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/user/${id}/application/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"link-applications"},"Link Applications"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/user/${id}/application/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d "[1,2,3,4]"\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"unlink-applications"},"UnLink Applications"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/user/${id}/application/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d "[1,2,3,4]"\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"get-applicationuser"},"Get ApplicationUser"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/user/${id}/application/${applicationID}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"update-applicationuser"},"Update ApplicationUser"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/user/${id}/application/${applicationID}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @applicationUser.json\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="applicationUser.json"',title:'"applicationUser.json"'},'{\n  "right": 0,\n}\n')))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"get-roles"},"Get Roles"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/user/${id}/role/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"link-roles"},"Link Roles"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/user/${id}/role/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d "[1,2,3,4]"\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,l.kt)("h2",{id:"unlink-roles"},"UnLink Roles"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/user/${id}/role/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d "[1,2,3,4]"\n'))),(0,l.kt)(s.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})))}b.isMDXComponent=!0}}]);