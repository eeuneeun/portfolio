(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6090)}])},8391:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(7294),l=n(902),c=n(1664),i=n.n(c);function s(e){return(0,o.useEffect)(()=>{},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{className:"gnb",children:[(0,r.jsxs)("div",{className:"inner flex-between pc",children:[(0,r.jsx)("h1",{className:"title",children:(0,r.jsx)(i(),{href:"/",children:"EUN"})}),(0,r.jsxs)("ul",{className:"flex-start",children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/"),children:"HOME"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#profile"),children:"PROFILE"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#portfolio"),children:"PORTFOLIO"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#sns"),children:"SNS"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#contact"),children:"CONTACT"})})]})]}),(0,r.jsxs)("div",{className:"inner flex-between mobile",children:[(0,r.jsx)("h1",{className:"title",children:(0,r.jsx)(i(),{href:"/",children:"EUN"})}),(0,r.jsxs)("div",{className:"ham-menu",children:[(0,r.jsx)("button",{className:"close",children:"닫기"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/"),children:"HOME"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#profile"),children:"PROFILE"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#portfolio"),children:"PORTFOLIO"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#sns"),children:"SNS"})}),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"".concat(l.O,"/#contact"),children:"CONTACT"})})]})]})]})]})})}n(3454).env.NEXT_PUBLIC_DOMAIN_URL},902:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});let r="http://eeuneeun.github.io/portfolio"},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),c=n(1003),i=n(4465),s=n(2692),u=n(8245),a=n(9246),f=n(227),d=n(3468);let h={};function p(e,t,n,r){if(!e||!c.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,r)).catch(e=>{});let o=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}let x=l.default.forwardRef(function(e,t){let n,r;let{href:x,as:v,children:j,prefetch:m,passHref:y,replace:b,shallow:g,scroll:_,locale:O,onClick:T,onMouseEnter:C,onTouchStart:E,legacyBehavior:L=!0!==Boolean(!0)}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,L&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==m,R=l.default.useContext(s.RouterContext),k=l.default.useContext(u.AppRouterContext);k&&(R=k);let{href:M,as:P}=l.default.useMemo(()=>{let[e,t]=c.resolveHref(R,x,!0);return{href:e,as:v?c.resolveHref(R,v):t||e}},[R,x,v]),U=l.default.useRef(M),I=l.default.useRef(P);L&&(r=l.default.Children.only(n));let A=L?r&&"object"==typeof r&&r.ref:t,[S,F,B]=a.useIntersection({rootMargin:"200px"}),H=l.default.useCallback(e=>{(I.current!==P||U.current!==M)&&(B(),I.current=P,U.current=M),S(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[P,A,M,B,S]);l.default.useEffect(()=>{let e=F&&w&&c.isLocalURL(M),t=void 0!==O?O:R&&R.locale,n=h[M+"%"+P+(t?"%"+t:"")];e&&!n&&p(R,M,P,{locale:t})},[P,M,F,O,w,R]);let D={ref:H,onClick(e){L||"function"!=typeof T||T(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,s,u,a,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};a?l.default.startTransition(p):p()}(e,R,M,P,b,g,_,O,Boolean(k),w)},onMouseEnter(e){L||"function"!=typeof C||C(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!w&&k)&&c.isLocalURL(M)&&p(R,M,P,{priority:!0})},onTouchStart(e){L||"function"!=typeof E||E(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!w&&k)&&c.isLocalURL(M)&&p(R,M,P,{priority:!0})}};if(!L||y||"a"===r.type&&!("href"in r.props)){let X=void 0!==O?O:R&&R.locale,Z=R&&R.isLocaleDomain&&f.getDomainLocale(P,X,R.locales,R.domainLocales);D.href=Z||d.addBasePath(i.addLocale(P,X,R&&R.defaultLocale))}return L?l.default.cloneElement(r,D):l.default.createElement("a",Object.assign({},N,D),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,u=s||!l,[a,f]=r.useState(!1),[d,h]=r.useState(null);r.useEffect(()=>{if(l){if(!u&&!a&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=c.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),c.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),c.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!a){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,u,n,t,a]);let p=r.useCallback(()=>{f(!1)},[]);return[h,a,p]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,c=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294));let o=r.default.createContext(null);t.AppRouterContext=o;let l=r.default.createContext(null);t.LayoutRouterContext=l;let c=r.default.createContext(null);t.GlobalLayoutRouterContext=c;let i=r.default.createContext(null);t.TemplateContext=i},6090:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893),o=n(7294),l=n(9008),c=n.n(l);let i=(0,o.createContext)(),s=i.Provider;i.Consumer;var u=n(902);n(7305),n(6141),n(9156),n(1163);var a=n(1664),f=n.n(a),d=n(3454);function h(e){return(0,o.useEffect)(()=>{},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"top-header flex-center",children:(0,r.jsx)(f(),{href:"/",children:"EUNEUN"})})})}d.env.NEXT_PUBLIC_API_URL,d.env.NEXT_PUBLIC_AUTH_URL;var p=n(8391);function x(e){let{Component:t,pageProps:n}=e;return(0,o.useEffect)(()=>{console.log("_app.js")},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s,{value:{prefix:u.O},children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"WONEUNJAE"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"#"}),(0,r.jsx)("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"})]}),(0,r.jsxs)("div",{id:"page",className:"wrap",children:[(0,r.jsx)(h,{...n}),(0,r.jsx)(p.Z,{...n}),(0,r.jsx)("div",{className:"container-wrap",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)(t,{...n})})})]})]})})}},7305:function(){},9156:function(){},6141:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function l(){throw Error("setTimeout has not been defined")}function c(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===l||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:l}catch(e){t=l}try{n="function"==typeof clearTimeout?clearTimeout:c}catch(r){n=c}}();var s=[],u=!1,a=-1;function f(){u&&r&&(u=!1,r.length?s=r.concat(s):a=-1,s.length&&d())}function d(){if(!u){var e=i(f);u=!0;for(var t=s.length;t;){for(r=s,s=[];++a<t;)r&&r[a].run();a=-1,t=s.length}r=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===c||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||u||i(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}},c=!0;try{t[e](l,l.exports,r),c=!1}finally{c&&delete n[e]}return l.exports}r.ab="//";var o=r(229);e.exports=o}()},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);