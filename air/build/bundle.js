var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(){return f("")}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n,e,r){null==e?t.style.removeProperty(n):t.style.setProperty(n,e,r?"important":"")}function $(t,n){return new t(n)}let b;function y(t){b=t}function v(){if(!b)throw new Error("Function called outside component initialization");return b}function _(){const t=v();return(n,e,{cancelable:r=!1}={})=>{const o=t.$$.callbacks[n];if(o){const s=function(t,n,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,r,n),o}(n,e,{cancelable:r});return o.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const x=[],E=[];let k=[];const j=[],O=Promise.resolve();let S=!1;function A(){S||(S=!0,O.then(T))}function C(t){k.push(t)}const q=new Set;let L=0;function T(){if(0!==L)return;const t=b;do{try{for(;L<x.length;){const t=x[L];L++,y(t),N(t.$$)}}catch(t){throw x.length=0,L=0,t}for(y(null),x.length=0,L=0;E.length;)E.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];q.has(n)||(q.add(n),n())}k.length=0}while(x.length);for(;j.length;)j.pop()();S=!1,q.clear(),y(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const P=new Set;let R;function z(){R={r:0,c:[],p:R}}function M(){R.r||o(R.c),R=R.p}function D(t,n){t&&t.i&&(P.delete(t),t.i(n))}function H(t,n,e,r){if(t&&t.o){if(P.has(t))return;P.add(t),R.c.push((()=>{P.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}else r&&r()}function I(t,n){const e={},r={},o={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(r[t]=1);for(const t in c)o[t]||(e[t]=c[t],o[t]=1);t[s]=c}else for(const t in i)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}function B(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function U(t,n,r,i){const{fragment:c,after_update:l}=t.$$;c&&c.m(n,r),i||C((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(C)}function W(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];k.forEach((r=>-1===t.indexOf(r)?n.push(r):e.push(r))),e.forEach((t=>t())),k=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function X(n,e,s,i,c,l,a,f=[-1]){const d=b;y(n);const p=n.$$={fragment:null,ctx:[],props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};a&&a(p.root);let h=!1;if(p.ctx=s?s(n,e.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&function(t,n){-1===t.$$.dirty[0]&&(x.push(t),A(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(u)}else p.fragment&&p.fragment.c();e.intro&&D(n.$$.fragment),U(n,e.target,e.anchor,e.customElement),T()}y(d)}class Y{$destroy(){W(this,1),this.$destroy=t}$on(n,e){if(!s(e))return t;const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=[];function J(t,n){return{subscribe:K(t,n).subscribe}}function K(n,e=t){let r;const o=new Set;function s(t){if(i(n,t)&&(n=t,r)){const t=!G.length;for(const t of o)t[1](),G.push(t,n);if(t){for(let t=0;t<G.length;t+=2)G[t][0](G[t+1]);G.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const l=[i,c];return o.add(l),1===o.size&&(r=e(s)||t),i(n),()=>{o.delete(l),0===o.size&&r&&(r(),r=null)}}}}function Q(n,e,r){const i=!Array.isArray(n),c=i?[n]:n,l=e.length<2;return J(r,(n=>{let r=!1;const u=[];let a=0,f=t;const d=()=>{if(a)return;f();const r=e(i?u[0]:u,n);l?n(r):f=s(r)?r:t},p=c.map(((n,e)=>function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(n,(t=>{u[e]=t,a&=~(1<<e),r&&d()}),(()=>{a|=1<<e}))));return r=!0,d(),function(){o(p),f(),r=!1}}))}function V(t){let e,r,o;const s=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=$(i,c()),e.$on("routeEvent",t[7])),{c(){e&&F(e.$$.fragment),r=p()},m(t,n){e&&U(e,t,n),l(t,r,n),o=!0},p(t,n){const o=4&n?I(s,[B(t[2])]):{};if(1&n&&i!==(i=t[0])){if(e){z();const t=e;H(t.$$.fragment,1,0,(()=>{W(t,1)})),M()}i?(e=$(i,c()),e.$on("routeEvent",t[7]),F(e.$$.fragment),D(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else i&&e.$set(o)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&H(e.$$.fragment,t),o=!1},d(t){t&&u(r),e&&W(e,t)}}}function Z(t){let e,r,o;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=$(i,c()),e.$on("routeEvent",t[6])),{c(){e&&F(e.$$.fragment),r=p()},m(t,n){e&&U(e,t,n),l(t,r,n),o=!0},p(t,n){const o=6&n?I(s,[2&n&&{params:t[1]},4&n&&B(t[2])]):{};if(1&n&&i!==(i=t[0])){if(e){z();const t=e;H(t.$$.fragment,1,0,(()=>{W(t,1)})),M()}i?(e=$(i,c()),e.$on("routeEvent",t[6]),F(e.$$.fragment),D(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else i&&e.$set(o)},i(t){o||(e&&D(e.$$.fragment,t),o=!0)},o(t){e&&H(e.$$.fragment,t),o=!1},d(t){t&&u(r),e&&W(e,t)}}}function tt(t){let n,e,r,o;const s=[Z,V],i=[];function c(t,n){return t[1]?0:1}return n=c(t),e=i[n]=s[n](t),{c(){e.c(),r=p()},m(t,e){i[n].m(t,e),l(t,r,e),o=!0},p(t,[o]){let l=n;n=c(t),n===l?i[n].p(t,o):(z(),H(i[l],1,1,(()=>{i[l]=null})),M(),e=i[n],e?e.p(t,o):(e=i[n]=s[n](t),e.c()),D(e,1),e.m(r.parentNode,r))},i(t){o||(D(e),o=!0)},o(t){H(e),o=!1},d(t){i[n].d(t),t&&u(r)}}}function nt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const et=J(null,(function(t){t(nt());const n=()=>{t(nt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));Q(et,(t=>t.location)),Q(et,(t=>t.querystring));const rt=K(void 0);function ot(t,n,e){let{routes:r={}}=n,{prefix:o=""}=n,{restoreScrollState:s=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:r}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,s,i=[],c="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(i.push("wild"),c+="/(.*)"):":"===e?(r=o.indexOf("?",1),s=o.indexOf(".",1),i.push(o.substring(1,~r?r:~s?s:o.length)),c+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~r?"?":"")+"\\"+o.substring(s))):c+="/"+o;return{keys:i,pattern:new RegExp("^"+c+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=r}match(t){if(o)if("string"==typeof o){if(!t.startsWith(o))return null;t=t.substr(o.length)||"/"}else if(o instanceof RegExp){const n=t.match(o);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;){try{e[this._keys[r]]=decodeURIComponent(n[r+1]||"")||null}catch(t){e[this._keys[r]]=null}r++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const c=[];r instanceof Map?r.forEach(((t,n)=>{c.push(new i(n,t))})):Object.keys(r).forEach((t=>{c.push(new i(t,r[t]))}));let l=null,u=null,a={};const f=_();async function d(t,n){await(A(),O),f(t,n)}let p=null,h=null;var m;s&&(h=t=>{p=t.state&&(t.state.__svelte_spa_router_scrollY||t.state.__svelte_spa_router_scrollX)?t.state:null},window.addEventListener("popstate",h),m=()=>{var t;(t=p)?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)},v().$$.after_update.push(m));let g=null,$=null;const b=et.subscribe((async t=>{g=t;let n=0;for(;n<c.length;){const r=c[n].match(t.location);if(!r){n++;continue}const o={route:c[n].path,location:t.location,querystring:t.querystring,userData:c[n].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await c[n].checkConditions(o))return e(0,l=null),$=null,void d("conditionsFailed",o);d("routeLoading",Object.assign({},o));const s=c[n].component;if($!=s){s.loading?(e(0,l=s.loading),$=s,e(1,u=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},o,{component:l,name:l.name,params:u}))):(e(0,l=null),$=null);const n=await s();if(t!=g)return;e(0,l=n&&n.default||n),$=s}return r&&"object"==typeof r&&Object.keys(r).length?e(1,u=r):e(1,u=null),e(2,a=c[n].props),void d("routeLoaded",Object.assign({},o,{component:l,name:l.name,params:u})).then((()=>{rt.set(u)}))}e(0,l=null),$=null,rt.set(void 0)}));return function(t){v().$$.on_destroy.push(t)}((()=>{b(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,r=t.routes),"prefix"in t&&e(4,o=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,u,a,r,o,s,function(n){w.call(this,t,n)},function(n){w.call(this,t,n)}]}class st extends Y{constructor(t){super(),X(this,t,ot,tt,i,{routes:3,prefix:4,restoreScrollState:5})}}function it(n){let e;return{c(){e=a("nav"),e.innerHTML='<a href="/" class="svelte-64i9gr"><p class="name svelte-64i9gr">MESSP</p></a>',h(e,"class","svelte-64i9gr")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class ct extends Y{constructor(t){super(),X(this,t,null,it,i,{})}}function lt(n){let e;return{c(){e=a("div"),e.innerHTML='<a href="/" class="svelte-9ufqsl"><p class="svelte-9ufqsl">Back Home</p></a>',h(e,"class","svelte-9ufqsl")},m(t,n){l(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}class ut extends Y{constructor(t){super(),X(this,t,null,lt,i,{})}}function at(n){let e,r;return{c(){e=a("p"),r=f(n[0]),h(e,"class","svelte-6yez5t")},m(t,n){l(t,e,n),c(e,r)},p(t,[n]){1&n&&m(r,t[0])},i:t,o:t,d(t){t&&u(e)}}}function ft(t,n,e){let{name:r}=n;return t.$$set=t=>{"name"in t&&e(0,r=t.name)},[r]}class dt extends Y{constructor(t){super(),X(this,t,ft,at,i,{name:0})}}function pt(n){let e,r;return{c(){e=a("p"),r=f(n[0]),h(e,"class","svelte-16fyp0a")},m(t,n){l(t,e,n),c(e,r)},p(t,[n]){1&n&&m(r,t[0])},i:t,o:t,d(t){t&&u(e)}}}function ht(t,n,e){let{descript:r}=n;return t.$$set=t=>{"descript"in t&&e(0,r=t.descript)},[r]}class mt extends Y{constructor(t){super(),X(this,t,ht,pt,i,{descript:0})}}function gt(t,n,e){const r=t.slice();return r[1]=n[e],r}function $t(t){let n,e,r,o,s,i,p=t[1].title+"";return{c(){n=a("div"),e=a("div"),r=d(),o=a("p"),s=f(p),i=d(),g(e,"background-image","url("+t[1].address+")"),h(e,"class","image svelte-u5wdin"),h(o,"class","img_title svelte-u5wdin"),h(n,"class","pic svelte-u5wdin")},m(t,u){l(t,n,u),c(n,e),c(n,r),c(n,o),c(o,s),c(n,i)},p(t,n){1&n&&g(e,"background-image","url("+t[1].address+")"),1&n&&p!==(p=t[1].title+"")&&m(s,p)},d(t){t&&u(n)}}}function bt(n){let e,r=n[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=$t(gt(n,r,t));return{c(){e=a("div");for(let t=0;t<o.length;t+=1)o[t].c();h(e,"class","pics_container svelte-u5wdin")},m(t,n){l(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,[n]){if(1&n){let s;for(r=t[0],s=0;s<r.length;s+=1){const i=gt(t,r,s);o[s]?o[s].p(i,n):(o[s]=$t(i),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=r.length}},i:t,o:t,d(t){t&&u(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function yt(t,n,e){let{images:r=[]}=n;return t.$$set=t=>{"images"in t&&e(0,r=t.images)},[r]}class vt extends Y{constructor(t){super(),X(this,t,yt,bt,i,{images:0})}}function _t(n){let e,r,o,s,i,f,p,m,g,$,b;return r=new ct({}),s=new ut({}),f=new dt({props:{name:"Air Condition Trading"}}),m=new mt({props:{descript:"Stay cool and comfortable with top-quality, energy-efficient air conditioning units from trusted brands. Whether for your home or business, enjoy seamless installation, reliable maintenance, and exceptional performance tailored to your cooling needs. Upgrade your climate control today with solutions designed for comfort and sustainability."}}),$=new vt({props:{images:n[0]}}),{c(){e=a("div"),F(r.$$.fragment),o=d(),F(s.$$.fragment),i=d(),F(f.$$.fragment),p=d(),F(m.$$.fragment),g=d(),F($.$$.fragment),h(e,"id","container"),h(e,"class","svelte-1lxivbz")},m(t,n){l(t,e,n),U(r,e,null),c(e,o),U(s,e,null),c(e,i),U(f,e,null),c(e,p),U(m,e,null),c(e,g),U($,e,null),b=!0},p:t,i(t){b||(D(r.$$.fragment,t),D(s.$$.fragment,t),D(f.$$.fragment,t),D(m.$$.fragment,t),D($.$$.fragment,t),b=!0)},o(t){H(r.$$.fragment,t),H(s.$$.fragment,t),H(f.$$.fragment,t),H(m.$$.fragment,t),H($.$$.fragment,t),b=!1},d(t){t&&u(e),W(r),W(s),W(f),W(m),W($)}}}function wt(t){return[[{title:"Air Condition Trading 1",address:"../images/air/air1.webp"},{title:"Air Condition Trading 2",address:"../images/air/air2.webp"},{title:"Air Condition Trading 3",address:"../images/air/air3.webp"}]]}class xt extends Y{constructor(t){super(),X(this,t,wt,_t,i,{})}}function Et(n){let e,r;return e=new st({props:{routes:{"/":xt}}}),{c(){F(e.$$.fragment)},m(t,n){U(e,t,n),r=!0},p:t,i(t){r||(D(e.$$.fragment,t),r=!0)},o(t){H(e.$$.fragment,t),r=!1},d(t){W(e,t)}}}return new class extends Y{constructor(t){super(),X(this,t,null,Et,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
