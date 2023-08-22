"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8275],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||l;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[p,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??p;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=a(2389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},b=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:d},o,{className:(0,l.Z)("tabs__item",T.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=y(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",T.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},3466:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:0},s="Brand",u={unversionedId:"cam/brand",id:"cam/brand",title:"Brand",description:"Definition",source:"@site/docs/cam/brand.md",sourceDirName:"cam",slug:"/cam/brand",permalink:"/docs/cam/brand",draft:!1,editUrl:"https://github.com/greenhn/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cam/brand.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Cam",permalink:"/docs/category/cam"},next:{title:"Cam",permalink:"/docs/cam/"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Get Brands",id:"get-brands",level:2},{value:"Get Brand",id:"get-brand",level:2},{value:"Apply Brand.ID",id:"apply-brandid",level:2},{value:"Create Brand",id:"create-brand",level:2},{value:"Update Brand",id:"update-brand",level:2},{value:"Update Brand Partial",id:"update-brand-partial",level:2},{value:"Destroy Brand",id:"destroy-brand",level:2}],d={toc:p},b="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"brand"},"Brand"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Brand Type"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="brand.json"',title:'"brand.json"'},'{\n  "id": 0,\n  "brandName": "",\n  "brandCode": "",\n  "brandDescription": "",\n  "createdAt": "",\n  "updatedAt": "",\n}\n'))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"}))),(0,r.kt)("h2",{id:"get-brands"},"Get Brands"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/brand/?\\$filter=&\\$orderBy=&\\$page=1&\\$pageSize=10" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"get-brand"},"Get Brand"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/brand/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"apply-brandid"},"Apply Brand.ID"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/apply/brand/id/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"create-brand"},"Create Brand"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/brand/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @brand.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="brand.json"',title:'"brand.json"'},'{\n  "brandName": "",\n  "brandCode": "",\n  "brandDescription": "",\n}\n'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"success status: 201"))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-brand"},"Update Brand"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/brand/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @brand.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="brand.json"',title:'"brand.json"'},'{\n  "brandName": "",\n  "brandCode": "",\n  "brandDescription": "",\n}\n')))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-brand-partial"},"Update Brand Partial"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/brand/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -H "Attrs: brandName,brandCode,brandDescription" \\\n   -d @brand.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="brand.json"',title:'"brand.json"'},'{\n  "brandName": "",\n  "brandCode": "",\n  "brandDescription": "",\n}\n')))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"destroy-brand"},"Destroy Brand"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/brand/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"\n'))),(0,r.kt)(o.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})))}m.isMDXComponent=!0}}]);