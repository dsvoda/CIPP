"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[6054],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,g=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return c}});var r,a=n(7462),i=n(3366),s=(n(7294),n(3905)),o=n(5108),l=["components"],u={id:"users",title:"Users",description:"Interact with Microsoft 365 users.",slug:"/usingcipp/identitymanagement/users"},p=void 0,m={unversionedId:"usingcipp/identitymanagement/users",id:"usingcipp/identitymanagement/users",title:"Users",description:"Interact with Microsoft 365 users.",source:"@site/docs/user/usingcipp/identitymanagement/users.mdx",sourceDirName:"usingcipp/identitymanagement",slug:"/usingcipp/identitymanagement/users",permalink:"/docs/user/usingcipp/identitymanagement/users",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/identitymanagement/users.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647613189,formattedLastUpdatedAt:"18/03/2022",frontMatter:{id:"users",title:"Users",description:"Interact with Microsoft 365 users.",slug:"/usingcipp/identitymanagement/users"},sidebar:"userSidebar",previous:{title:"Identity Management",permalink:"/docs/user/usingcipp/identitymanagement"},next:{title:"Groups",permalink:"/docs/user/usingcipp/identitymanagement/groups"}},d={},c=[{value:"Details",id:"details",level:2},{value:"Actions",id:"actions",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],g=(r="NoKnownIssues",function(e){return o.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),f={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Using the users pages you can edit users, add users to groups or change their licenses, you can also create new users."),(0,s.kt)("h2",{id:"details"},"Details"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Created Date"),(0,s.kt)("td",{parentName:"tr",align:null},"The creation date of the user.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"User Principal Name"),(0,s.kt)("td",{parentName:"tr",align:null},"The User Principal Name (UPN) of the user.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Given Name"),(0,s.kt)("td",{parentName:"tr",align:null},'The "First Name" of the user.')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Surname"),(0,s.kt)("td",{parentName:"tr",align:null},'The "Last Name" of the user.')),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Job Title"),(0,s.kt)("td",{parentName:"tr",align:null},"The Job Title of the user, if entered.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Licences Assigned"),(0,s.kt)("td",{parentName:"tr",align:null},"All assigned licences.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Phone Number"),(0,s.kt)("td",{parentName:"tr",align:null},"Business Number / Mobile Number of the user.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Mail Address"),(0,s.kt)("td",{parentName:"tr",align:null},"Primary e-mail address of the user.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"City"),(0,s.kt)("td",{parentName:"tr",align:null},"Location of the user, if entered.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Department"),(0,s.kt)("td",{parentName:"tr",align:null},"Department of the user, if entered.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"On-Prem Sync Date/Time"),(0,s.kt)("td",{parentName:"tr",align:null},"If synced from on-prem, the last time sync occurred.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Unique ID"),(0,s.kt)("td",{parentName:"tr",align:null},"Unique ID of the selected user.")))),(0,s.kt)("h2",{id:"actions"},"Actions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Research Compromised Account"),(0,s.kt)("li",{parentName:"ul"},"Send Multi-Factor Authentication (MFA) Push"),(0,s.kt)("li",{parentName:"ul"},"Convert to Shared Mailbox"),(0,s.kt)("li",{parentName:"ul"},"Block Sign-In"),(0,s.kt)("li",{parentName:"ul"},"Reset Password (Must Change)"),(0,s.kt)("li",{parentName:"ul"},"Reset Password"),(0,s.kt)("li",{parentName:"ul"},"Delete User")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Note that clicking one of these actions will present a confirmation modal dialog."))),(0,s.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,s.kt)(g,{mdxType:"NoKnownIssues"}))}k.isMDXComponent=!0}}]);