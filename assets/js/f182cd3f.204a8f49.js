"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[1277],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},992:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r,a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=n(5108),p=["components"],u={id:"groups",title:"Groups",description:"Interact with Microsoft 365 groups.",slug:"/usingcipp/identitymanagement/groups"},l=void 0,c={unversionedId:"usingcipp/identitymanagement/groups",id:"usingcipp/identitymanagement/groups",title:"Groups",description:"Interact with Microsoft 365 groups.",source:"@site/docs/user/usingcipp/identitymanagement/groups.mdx",sourceDirName:"usingcipp/identitymanagement",slug:"/usingcipp/identitymanagement/groups",permalink:"/docs/user/usingcipp/identitymanagement/groups",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/identitymanagement/groups.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647613189,formattedLastUpdatedAt:"18/03/2022",frontMatter:{id:"groups",title:"Groups",description:"Interact with Microsoft 365 groups.",slug:"/usingcipp/identitymanagement/groups"},sidebar:"userSidebar",previous:{title:"Users",permalink:"/docs/user/usingcipp/identitymanagement/users"},next:{title:"Roles",permalink:"/docs/user/usingcipp/identitymanagement/roles"}},d={},m=[{value:"Details",id:"details",level:2},{value:"Actions",id:"actions",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(r="OtherIssues",function(e){return s.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),f={toc:m};function y(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using the groups pages you can edit groups and add users to groups, you can also create new groups. You are also able to see the type of group, whether it's Teams enabled and whether it's synced from a on-premise directory."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Fields"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the group.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Type"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of the group, for example Microsoft 365.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dynamic Group"),(0,o.kt)("td",{parentName:"tr",align:null},"Does the group use dynamic membership rules?")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Teams Enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Is the group enabled for Microsoft Teams?")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On-Prem Sync"),(0,o.kt)("td",{parentName:"tr",align:null},"Is the group enabled for on-prem syncronisation?")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"E-Mail"),(0,o.kt)("td",{parentName:"tr",align:null},"The primary e-mail attached to the group.")))),(0,o.kt)("h2",{id:"actions"},"Actions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Edit Group")),(0,o.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,o.kt)("p",null,"Groups currently don't return all data such as external senders, and not all settings are available to set using the Graph API by partners. Microsoft is aware and planning to fix this in a future release of the Graph API.\nDistribution groups currently cannot be edited due to a limit in the Graph API."),(0,o.kt)(g,{mdxType:"OtherIssues"}))}y.isMDXComponent=!0}}]);