"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[6103],{1201:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(1217),l=a(6200),i=a(1916),o=a(7462),s=a(5999),m=a(1750);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(m.Z,(0,o.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(m.Z,(0,o.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))},u=a(5450),d=a(1575);function p(e){var t,a=e.content,o=e.sidebar,s=a.assets,m=a.metadata,p=m.title,g=m.description,v=m.nextItem,h=m.prevItem,f=m.date,E=m.tags,b=m.authors,N=m.frontMatter,Z=N.hide_table_of_contents,_=N.keywords,k=N.toc_min_heading_level,y=N.toc_max_heading_level,P=null!=(t=s.image)?t:N.image;return n.createElement(l.Z,{wrapperClassName:u.kM.wrapper.blogPages,pageClassName:u.kM.page.blogPostPage,sidebar:o,toc:!Z&&a.toc&&a.toc.length>0?n.createElement(d.Z,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:y}):void 0},n.createElement(r.Z,{title:p,description:g,keywords:_,image:P},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:f}),b.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:b.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:N,assets:s,metadata:m,isBlogPostPage:!0},n.createElement(a,null)),(v||h)&&n.createElement(c,{nextItem:v,prevItem:h}))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(7462),i=a(3366),o=a(6010),s="iconEdit_dcUD",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(5450);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(c,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(9960);function l(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(r.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),r=a(3366),l=a(7294),i=a(6010),o=a(5002),s="tableOfContents_cNA8",m=["className"];function c(e){var t=e.className,a=(0,r.Z)(e,m);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),r=a(3366),l=a(7294),i=a(5450),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,p=void 0===d?void 0:d,g=e.minHeadingLevel,v=e.maxHeadingLevel,h=(0,r.Z)(e,o),f=(0,i.LU)(),E=null!=g?g:f.tableOfContents.minHeadingLevel,b=null!=v?v:f.tableOfContents.maxHeadingLevel,N=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:b}),Z=(0,l.useMemo)((function(){if(u&&p)return{linkClassName:u,linkActiveClassName:p,minHeadingLevel:E,maxHeadingLevel:b}}),[u,p,E,b]);return(0,i.Si)(Z),l.createElement(s,(0,n.Z)({toc:N,className:m,linkClassName:u},h))}},6200:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(3366),r=a(7294),l=a(6010),i=a(2115),o=a(9960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",p="sidebarItemLinkActive_RRTD",g=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var h=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},m&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col","releases-list",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},r.createElement("div",{className:(0,l.Z)("row")},o)),a&&r.createElement("div",{className:"col col--2"},a))))}},1916:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),r=a(6010),l=a(3905),i=a(5999),o=a(9960),s=a(4996),m=a(5450),c=a(8780),u=a(4781),d=a(6753),p="blogPostTitle_uMeh",g="blogPostData_Vfxe",v="blogPostDetailsFull_enUA",h=a(4678),f="image_o0gy";function E(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL,o=t.email,s=l||o&&"mailto:"+o||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement("span",{className:"avatar__photo-link avatar__photo"},n.createElement(E,{href:s},n.createElement("img",{className:f,src:i,alt:a}))),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(E,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var N="authorCol_FlmR",Z="imageOnlyAuthorRow_trpF",_="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",l?Z:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,r.Z)(!l&&"col col--6",l?_:N),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}var y=function(e){var t,a,f,E=(f=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,s.C)().withBaseUrl,N=e.children,Z=e.frontMatter,_=e.assets,y=e.metadata,P=e.truncated,T=e.isBlogPostPage,C=void 0!==T&&T,w=y.date,L=y.formattedDate,x=y.permalink,I=y.tags,A=y.readingTime,M=y.title,R=y.editUrl,D=y.authors,H=null!=(t=_.image)?t:Z.image,U=!C&&P,B=I.length>0,O=C?"h1":"h2";return n.createElement("article",{className:(0,r.Z)(C?void 0:"release-item"),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("div",{className:(0,r.Z)("blogPostContent")},n.createElement("div",{className:(0,r.Z)(C?void 0:"card__header")},n.createElement("header",null,n.createElement(O,{className:p,itemProp:"headline"},C?M:n.createElement(o.Z,{itemProp:"url",to:x},M)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},L),void 0!==A&&n.createElement(n.Fragment,null," \xb7 ",E(A))),n.createElement(k,{authors:D,assets:_})),H&&n.createElement("meta",{itemProp:"image",content:b(H,{absolute:!0})}),n.createElement("div",{id:C?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:u.Z},N))),(B||P)&&n.createElement("footer",{className:(0,r.Z)("row",C?"ddocusaurus-md-lg":"card__footer",(a={},a[v]=C,a))},B&&n.createElement("div",{className:(0,r.Z)("col",{"col--7":U})},n.createElement(h.Z,{tags:I})),C&&R&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:R})),U&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--5":B})},n.createElement(o.Z,{to:y.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},4781:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(7462),r=a(3366),l=a(7294),i=a(5742),o=a(9960),s=a(1736),m=a(9649),c=a(7488),u=a(3905),d=["components"],p={toc:[]};function g(e){var t=e.components,a=(0,r.Z)(e,d);return(0,u.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"No known issues exist for this page. If you have any issues, then ",(0,u.kt)("a",{parentName:"em",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),".")))}g.isMDXComponent=!0;var v=["components"],h={toc:[]};function f(e){var t=e.components,a=(0,r.Z)(e,v);return(0,u.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"If you have any other issues, then ",(0,u.kt)("a",{parentName:"em",href:"https://github.com/KelvinTegelaar/CIPP/issues/new?assignees=&labels=&template=bug_report.md&title=BUG%3A+"},"please report a bug"),".")))}f.isMDXComponent=!0;var E=["components"],b={toc:[]};function N(e){var t=e.components,a=(0,r.Z)(e,E);return(0,u.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Pseudonymised Data in Reports")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"The data returned in these reports might appear pseudonymised. Run the ",(0,u.kt)("a",{parentName:"p",href:"../../tenantadministration/standards/"},'standard "Enable Usernames instead of pseudo anonymised names in reports"')," to prevent this on the selected tenant."))))}N.isMDXComponent=!0;var Z=["mdxType","originalType"];var _={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,a;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(a=e.props)&&a.originalType){var n=e.props,i=(n.mdxType,n.originalType,(0,r.Z)(n,Z));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(s.Z,e)},a:function(e){return l.createElement(o.Z,e)},pre:function(e){var t;return l.createElement(s.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),a=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=l.createElement(l.Fragment,null,t.filter((function(e){return e!==a})));return l.createElement(c.Z,(0,n.Z)({},e,{summary:a}),r)},h1:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h1"},e))},h2:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h2"},e))},h3:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h3"},e))},h4:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h4"},e))},h5:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h5"},e))},h6:function(e){return l.createElement(m.Z,(0,n.Z)({as:"h6"},e))},NoKnownIssues:function(){return l.createElement(g,null)},OtherIssues:function(){return l.createElement(f,null)},PseudonymisedData:function(){return l.createElement(N,null)}}},9567:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),i="tag_d0Lz",o="tagRegular_bmnp",s="tagWithCount_vddX";var m=function(e){var t,a=e.permalink,m=e.name,c=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[o]=!c,t[s]=c,t))},m,c&&n.createElement("span",null,c))}},4678:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(5999),i=a(9567),o="tags_ysAR",s="tag_DyE2";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);