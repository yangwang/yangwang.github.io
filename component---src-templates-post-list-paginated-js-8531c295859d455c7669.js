(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{DVng:function(e,t,a){e.exports={pagination:"pagination-module--pagination--16LMZ"}},OZsj:function(e,t,a){e.exports={postlist:"postlist-module--postlist--2j0CY",item:"postlist-module--item--21vL1",postlist__item_wrapper:"postlist-module--postlist__item_wrapper--YdbhM",item__info__title:"postlist-module--item__info__title--2genc",item__info:"postlist-module--item__info--1NhvD",item__info__description:"postlist-module--item__info__description--3Q0xu",item__info__date:"postlist-module--item__info__date--gj-Dx",item__info_compact:"postlist-module--item__info_compact--qObi8",item__info_compact__title:"postlist-module--item__info_compact__title--3s1Sz",item__info_compact__date:"postlist-module--item__info_compact__date--2vYqp",item__image:"postlist-module--item__image--3h6N1"}},"RjI+":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("Wbzz"),n=a("q1tI"),o=a.n(n),_=a("DVng"),m=a.n(_),r=function(e){var t=e.prevText,a=e.prevLink,n=e.nextText,_=e.nextLink,r=e.currentText;return o.a.createElement("nav",{className:m.a.pagination},o.a.createElement("div",{className:m.a.pagination__prev},a&&o.a.createElement(i.Link,{to:a,rel:"prev"},t)),o.a.createElement("div",{className:m.a.pagination__current},r),o.a.createElement("div",{className:m.a.pagination__next},_&&o.a.createElement(i.Link,{to:_,rel:"next"},n)))};r.defaultProps={prevText:"← PREV",nextText:"NEXT →",currentText:""};var s=r},Uf8T:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("Wbzz"),n=a("q1tI"),o=a.n(n),_=a("OZsj"),m=a.n(_),r=function(e){var t=e.posts,a=e.compact;return o.a.createElement("div",{className:m.a.postlist},t.map((function(e){var t=e.node;return o.a.createElement("div",{className:m.a.postlist__item_wrapper,key:t.fields.slug},o.a.createElement(i.Link,{to:t.fields.slug,className:m.a.item},o.a.createElement("div",{className:a?m.a.item__info_compact:m.a.item__info},o.a.createElement("h2",{className:a?m.a.item__info_compact__title:m.a.item__info__title},t.frontmatter.title),!a&&o.a.createElement("div",{className:m.a.item__info__description},t.frontmatter.description||t.excerpt),o.a.createElement("div",{className:a?m.a.item__info_compact__date:m.a.item__info__date},t.fields.date)),!a&&t.frontmatter.image&&o.a.createElement("div",{className:m.a.item__image,style:{backgroundImage:"url("+t.frontmatter.image+")"}})))})))}},Vazz:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return l}));var i=a("I/Ru"),n=a("8b0t"),o=a("RjI+"),_=a("Uf8T"),m=a("q1tI"),r=a.n(m),s=a("sZJX");t.default=function(e){var t=e.data,a=e.pageContext,m=t.allMarkdownRemark.edges,l=a.totalPage,c=a.currentPage,p=c>1?"本站文章列表：第 "+c+" 页，共 "+l+" 页。":"";return r.a.createElement(i.a,{title:"Posts",description:p},r.a.createElement(s.a,null),r.a.createElement(n.a,null,r.a.createElement(_.a,{posts:m}),r.a.createElement(o.a,{prevLink:1!==c&&(2===c?"/":"/page/"+(c-1)),nextLink:c!==l&&"/page/"+(c+1),currentText:"Page "+c})))};var l="2108486285"}}]);
//# sourceMappingURL=component---src-templates-post-list-paginated-js-8531c295859d455c7669.js.map