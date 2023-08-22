"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8788],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(b,l(l({ref:t},p),{},{components:a})):n.createElement(b,l({ref:t},p))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:r,l[1]=u;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),u=a(6550),i=a(1980),o=a(7392),p=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,o]=b({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),k=(()=>{const e=i??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),y(e)}),[o,y,s]),tabValues:s}}var k=a(2389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:u,selectValue:i,tabValues:o}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=o[a].value;n!==u&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,s.Z)("tabs__item",T.tabItem,l?.className,{"tabs__item--active":u===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=y(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",T.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,k.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},9173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),l=a(5162);const u={sidebar_position:0},i="Issue",o={unversionedId:"work/issue",id:"work/issue",title:"Issue",description:"Definition",source:"@site/docs/work/issue.md",sourceDirName:"work",slug:"/work/issue",permalink:"/docs/work/issue",draft:!1,editUrl:"https://github.com/greenhn/greenhn.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/work/issue.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Work",permalink:"/docs/category/work"},next:{title:"Plan",permalink:"/docs/work/plan"}},p={},c=[{value:"Definition",id:"definition",level:2},{value:"Get Issues",id:"get-issues",level:2},{value:"Get Issue",id:"get-issue",level:2},{value:"Apply Issue.ID",id:"apply-issueid",level:2},{value:"Create Issue",id:"create-issue",level:2},{value:"Update Issue",id:"update-issue",level:2},{value:"Update Issue Partial",id:"update-issue-partial",level:2},{value:"Update Issue Status",id:"update-issue-status",level:2},{value:"Destroy Issue",id:"destroy-issue",level:2}],d={toc:c},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"issue"},"Issue"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Issue Type"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="issue.json"',title:'"issue.json"'},'{\n  "id": 0,\n  "planTypeID": 0,\n  "userID": 0,\n  "bucketID": 0,\n  "issueName": "",\n  "issueDescription": "",\n  "weather": "",\n  "humidity": 0,\n  "temperature": 0,\n  "status": 0,\n  "issueUserID": 0,\n  "completedAt": "",\n  "createdAt": "",\n  "updatedAt": "",\n}\n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"}))),(0,r.kt)("h2",{id:"get-issues"},"Get Issues"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/issue/?\\$filter=&\\$orderBy=&\\$page=1&\\$pageSize=10" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"get-issue"},"Get Issue"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/issue/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"apply-issueid"},"Apply Issue.ID"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/apply/issue/id/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"create-issue"},"Create Issue"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/issue/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @issue.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="issue.json"',title:'"issue.json"'},'{\n  "planTypeID": 0,\n  "userID": 0,\n  "bucketID": 0,\n  "issueName": "",\n  "issueDescription": "",\n  "weather": "",\n  "humidity": 0,\n  "temperature": 0,\n  "status": 0,\n  "issueUserID": 0,\n  "completedAt": "",\n}\n'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"success status: 201"))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-issue"},"Update Issue"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/issue/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @issue.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="issue.json"',title:'"issue.json"'},'{\n  "planTypeID": 0,\n  "userID": 0,\n  "bucketID": 0,\n  "issueName": "",\n  "issueDescription": "",\n  "weather": "",\n  "humidity": 0,\n  "temperature": 0,\n  "status": 0,\n  "issueUserID": 0,\n  "completedAt": "",\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-issue-partial"},"Update Issue Partial"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/issue/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -H "Attrs: planTypeID,userID,bucketID,issueName,issueDescription,weather,humidity,temperature,status,issueUserID,completedAt" \\\n   -d @issue.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="issue.json"',title:'"issue.json"'},'{\n  "planTypeID": 0,\n  "userID": 0,\n  "bucketID": 0,\n  "issueName": "",\n  "issueDescription": "",\n  "weather": "",\n  "humidity": 0,\n  "temperature": 0,\n  "status": 0,\n  "issueUserID": 0,\n  "completedAt": "",\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-issue-status"},"Update Issue Status"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/issue/${id}/status/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @issue.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="issue.json"',title:'"issue.json"'},'{\n  "status": 0\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"destroy-issue"},"Destroy Issue"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/issue/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"\n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})))}b.isMDXComponent=!0}}]);