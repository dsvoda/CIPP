"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[9486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(7462),i=n(3366),s=(n(7294),n(3905)),a=n(5108),o=["components"],l={id:"reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",slug:"/usingcipp/emailexchange/reports"},c=void 0,p={unversionedId:"usingcipp/emailexchange/reports",id:"usingcipp/emailexchange/reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",source:"@site/docs/user/usingcipp/emailexchange/reports.mdx",sourceDirName:"usingcipp/emailexchange",slug:"/usingcipp/emailexchange/reports",permalink:"/docs/user/usingcipp/emailexchange/reports",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/emailexchange/reports.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1647613189,formattedLastUpdatedAt:"18/03/2022",frontMatter:{id:"reports",title:"Reports",description:"Reports available within CIPP - E-mail & Exchange",slug:"/usingcipp/emailexchange/reports"},sidebar:"userSidebar",previous:{title:"Contacts",permalink:"/docs/user/usingcipp/emailexchange/contacts"},next:{title:"Settings",permalink:"/docs/user/usingcipp/settings"}},u={},d=[{value:"Mailbox Statistics",id:"mailbox-statistics",level:2},{value:"Mailbox Client Access Settings",id:"mailbox-client-access-settings",level:2},{value:"Message Trace",id:"message-trace",level:2},{value:"Phishing Policies",id:"phishing-policies",level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",level:2}],h=function(e){return function(t){return a.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},g=h("PseudonymisedData"),m=h("OtherIssues"),f={toc:d};function b(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Many Exchange reports exist in CIPP, More reports can be generated using the Graph Explorer see below for further details:"),(0,s.kt)(g,{mdxType:"PseudonymisedData"}),(0,s.kt)("p",null,"All reports feature filtering and the ability to export to a PDF or CSV file."),(0,s.kt)("h2",{id:"mailbox-statistics"},"Mailbox Statistics"),(0,s.kt)("p",null,"This report lists all mailboxes and pulls activity date, total space used, number of items in the mailbox and, the status of archiving."),(0,s.kt)("p",null,"Mailboxes using 80% to 90% of their quota show with an orange highlight.\nMailboxes using 90% to 100% of their quota show with a red highlight."),(0,s.kt)("h2",{id:"mailbox-client-access-settings"},"Mailbox Client Access Settings"),(0,s.kt)("p",null,"This report lists all users and the status of various Client Access Settings on their mailbox, such as IMAP / OWA / POP."),(0,s.kt)("h2",{id:"message-trace"},"Message Trace"),(0,s.kt)("p",null,"Message Trace provides the ability for you to trace an e-mail instantly from to any recipient, or any sender over the last 10 days (max)."),(0,s.kt)("h2",{id:"phishing-policies"},"Phishing Policies"),(0,s.kt)("p",null,"This report provides the ability for you to view Phishing Policies for the selected tenant and whether they're enabled, have excluded senders or domains and the last amended date."),(0,s.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,s.kt)(m,{mdxType:"OtherIssues"}))}b.isMDXComponent=!0}}]);