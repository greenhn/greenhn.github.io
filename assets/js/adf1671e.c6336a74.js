"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=b({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(T,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},5740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:0},s="NodeSwitch",c={unversionedId:"farm/node_switch",id:"farm/node_switch",title:"NodeSwitch",description:"Definition",source:"@site/docs/farm/node_switch.md",sourceDirName:"farm",slug:"/farm/node_switch",permalink:"/docs/farm/node_switch",draft:!1,editUrl:"https://github.com/greenhn/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/farm/node_switch.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"NodeDataLog",permalink:"/docs/farm/node_data_log"},next:{title:"NodeSwitchLog",permalink:"/docs/farm/node_switch_log"}},u={},p=[{value:"Definition",id:"definition",level:2},{value:"Get NodeSwitches",id:"get-nodeswitches",level:2},{value:"Get NodeSwitch",id:"get-nodeswitch",level:2},{value:"Apply NodeSwitch.ID",id:"apply-nodeswitchid",level:2},{value:"Create NodeSwitch",id:"create-nodeswitch",level:2},{value:"Update NodeSwitch",id:"update-nodeswitch",level:2},{value:"Update NodeSwitch Partial",id:"update-nodeswitch-partial",level:2},{value:"Update NodeSwitch Status",id:"update-nodeswitch-status",level:2},{value:"Destroy NodeSwitch",id:"destroy-nodeswitch",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodeswitch"},"NodeSwitch"),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"NodeSwitch Type"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nodeSwitch.json"',title:'"nodeSwitch.json"'},'{\n  "id": 0,\n  "ref": 0,\n  "key": 0,\n  "nodeID": 0,\n  "switchName": "",\n  "ratio": 0,\n  "value": 0,\n  "minPressure": 0,\n  "maxPressure": 0,\n  "switchDescription": "",\n  "status": 0,\n  "openedBy": 0,\n  "closedBy": 0,\n  "openedByName": "",\n  "closedByName": "",\n  "openedAt": "",\n  "closedAt": "",\n  "createdAt": "",\n  "updatedAt": "",\n}\n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"}))),(0,r.kt)("h2",{id:"get-nodeswitches"},"Get NodeSwitches"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/node-switch/?\\$filter=&\\$orderBy=&\\$page=1&\\$pageSize=10" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"get-nodeswitch"},"Get NodeSwitch"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://${baseUrl}/node-switch/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"apply-nodeswitchid"},"Apply NodeSwitch.ID"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/apply/node-switch/id/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"  \n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"create-nodeswitch"},"Create NodeSwitch"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://${baseUrl}/node-switch/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @nodeSwitch.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nodeSwitch.json"',title:'"nodeSwitch.json"'},'{\n  "ref": 0,\n  "key": 0,\n  "nodeID": 0,\n  "switchName": "",\n  "ratio": 0,\n  "value": 0,\n  "minPressure": 0,\n  "maxPressure": 0,\n  "switchDescription": "",\n  "status": 0,\n  "openedBy": 0,\n  "closedBy": 0,\n  "openedByName": "",\n  "closedByName": "",\n  "openedAt": "",\n  "closedAt": "",\n}\n'))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"success status: 201"))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-nodeswitch"},"Update NodeSwitch"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "https://${baseUrl}/node-switch/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @nodeSwitch.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nodeSwitch.json"',title:'"nodeSwitch.json"'},'{\n  "ref": 0,\n  "key": 0,\n  "nodeID": 0,\n  "switchName": "",\n  "ratio": 0,\n  "value": 0,\n  "minPressure": 0,\n  "maxPressure": 0,\n  "switchDescription": "",\n  "status": 0,\n  "openedBy": 0,\n  "closedBy": 0,\n  "openedByName": "",\n  "closedByName": "",\n  "openedAt": "",\n  "closedAt": "",\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-nodeswitch-partial"},"Update NodeSwitch Partial"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/node-switch/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -H "Attrs: ref,key,nodeID,switchName,ratio,value,minPressure,maxPressure,switchDescription,status,openedBy,closedBy,openedByName,closedByName,openedAt,closedAt" \\\n   -d @nodeSwitch.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nodeSwitch.json"',title:'"nodeSwitch.json"'},'{\n  "ref": 0,\n  "key": 0,\n  "nodeID": 0,\n  "switchName": "",\n  "ratio": 0,\n  "value": 0,\n  "minPressure": 0,\n  "maxPressure": 0,\n  "switchDescription": "",\n  "status": 0,\n  "openedBy": 0,\n  "closedBy": 0,\n  "openedByName": "",\n  "closedByName": "",\n  "openedAt": "",\n  "closedAt": "",\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"update-nodeswitch-status"},"Update NodeSwitch Status"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "https://${baseUrl}/node-switch/${id}/status/" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json" \\\n   -d @nodeSwitch.json\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="nodeSwitch.json"',title:'"nodeSwitch.json"'},'{\n  "status": 0\n}\n')))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})),(0,r.kt)("h2",{id:"destroy-nodeswitch"},"Destroy NodeSwitch"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X DELETE "https://${baseUrl}/node-switch/${id}" \\\n   -H "Authorization: Bearer ${accessToken}" \\\n   -H "Content-Type: application/json" \\\n   -H "Accept: application/json"\n'))),(0,r.kt)(l.Z,{value:"typescript",label:"Typescript",mdxType:"TabItem"}),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"})))}b.isMDXComponent=!0}}]);