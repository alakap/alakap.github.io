(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4045:(e,t,r)=>{e.exports=r(4116)},1118:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2586)}])},6101:(e,t)=>{"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_HMR_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return o},ACTION_RESTORE:function(){return l},ACTION_SERVER_ACTION:function(){return c},ACTION_SERVER_PATCH:function(){return a},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r}});let o="refresh",u="navigate",l="restore",a="server-patch",f="prefetch",i="hmr-refresh",c="server-action";!function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary"}(r||(r={})),function(e){e.fresh="fresh",e.reusable="reusable",e.expired="expired",e.stale="stale"}(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7670:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(1297),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(8754),o=r(5893),u=n._(r(7294)),l=r(9975),a=r(2712),f=r(8547),i=r(4350),c=r(8109),s=r(4494),d=r(5716),p=r(388),_=r(7670),h=r(6220),b=r(6101),y=r(6881),m=new Set;function v(e,t,r,n,o,u){if(u||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck&&!u){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>u?e.prefetch(t,o):e.prefetch(t,r,n))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let j=u.default.forwardRef(function(e,t){let r,n;let{href:f,as:m,children:j,prefetch:O=null,passHref:E,replace:P,shallow:C,scroll:M,locale:x,onClick:R,onMouseEnter:T,onTouchStart:k,legacyBehavior:A=!1,...N}=e;r=j,A&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=u.default.useContext(s.RouterContext),L=u.default.useContext(d.AppRouterContext),S=null!=I?I:L,w=!I,U=!1!==O,F=null===O?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:H,as:K}=u.default.useMemo(()=>{if(!I){let e=g(f);return{href:e,as:m?g(m):e}}let[e,t]=(0,l.resolveHref)(I,f,!0);return{href:e,as:m?(0,l.resolveHref)(I,m):t||e}},[I,f,m]),q=u.default.useRef(H),D=u.default.useRef(K);A&&(n=u.default.Children.only(r));let V=A?n&&"object"==typeof n&&n.ref:t,[W,X,z]=(0,p.useIntersection)({rootMargin:"200px"}),B=u.default.useCallback(e=>{(D.current!==K||q.current!==H)&&(z(),D.current=K,q.current=H),W(e)},[K,H,z,W]),G=(0,y.useMergedRef)(B,V);u.default.useEffect(()=>{S&&X&&U&&v(S,H,K,{locale:x},{kind:F},w)},[K,H,X,x,U,null==I?void 0:I.locale,S,w,F]);let Y={ref:G,onClick(e){A||"function"!=typeof R||R(e),A&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,o,l,f,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==f||f;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:i,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};c?u.default.startTransition(d):d()}(e,S,H,K,P,C,M,x,w)},onMouseEnter(e){A||"function"!=typeof T||T(e),A&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(U||!w)&&v(S,H,K,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:F},w)},onTouchStart:function(e){A||"function"!=typeof k||k(e),A&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(U||!w)&&v(S,H,K,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:F},w)}};if((0,i.isAbsoluteUrl)(K))Y.href=K;else if(!A||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,_.getDomainLocale)(K,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);Y.href=t||(0,h.addBasePath)((0,c.addLocale)(K,e,null==I?void 0:I.defaultLocale))}return A?u.default.cloneElement(n,Y):(0,o.jsx)("a",{...N,...Y,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},388:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let n=r(7294),o=r(460),u="function"==typeof IntersectionObserver,l=new Map,a=[];function f(e){let{rootRef:t,rootMargin:r,disabled:f}=e,i=f||!u,[c,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:u}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},a.push(r),l.set(r,t),t}(r);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6881:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(7294);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=u(e,n),o.current=u(t,n))}:e||t,[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2586:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(5893),o=r(6355);function u(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(o.default,{children:(0,n.jsx)(t,{...r})})}},6355:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(5893);r(4132),r(6047);var o=r(9367),u=r.n(o),l=r(4045),a=r.n(l);function f(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("header",{className:u().header,children:[(0,n.jsx)("span",{className:u().sitename,children:"alaka.in"}),(0,n.jsx)(a(),{href:"/",children:"About"}),(0,n.jsx)(a(),{href:"/blog",children:"Blog"})]}),t,(0,n.jsxs)("footer",{className:u().footer,children:[(0,n.jsx)("hr",{}),"\xa9 2024, Alakananda Patra"]})]})}},6047:()=>{},4132:()=>{},9367:e=>{e.exports={page:"home_page__V4Hxu",header:"home_header__qtop3",footer:"home_footer__sjmUT",sitename:"home_sitename__l4_my",sidebar:"home_sidebar__r5t7f",main:"home_main__WfE9M",blogsidebar:"home_blogsidebar__8_wKr",photo:"home_photo__qtxW3",primary:"home_primary__9SZ6W",secondary:"home_secondary__ozOqF",ctas:"home_ctas__lL5G8",logo:"home_logo__cNFXS"}}},e=>{var t=t=>e(e.s=t);e.O(0,[774,179],()=>(t(1118),t(6036))),_N_E=e.O()}]);