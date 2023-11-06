import{shallowRef as at,unref as q,shallowReactive as lt,defineComponent as ze,inject as Y,computed as L,provide as ae,ref as ut,watch as ft,h as De,nextTick as dt,reactive as ht,openBlock as Ge,createElementBlock as Ke,createVNode as Se,createStaticVNode as pt,createApp as mt}from"vue";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const V=typeof window<"u";function gt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function le(e,t){const n={};for(const r in t){const o=t[r];n[r]=I(o)?o.map(e):e(o)}return n}const F=()=>{},I=Array.isArray,vt=/\/$/,yt=e=>e.replace(vt,"");function ue(e,t,n="/"){let r,o={},c="",d="";const m=t.indexOf("#");let a=t.indexOf("?");return m<a&&m>=0&&(a=-1),a>-1&&(r=t.slice(0,a),c=t.slice(a+1,m>-1?m:t.length),o=e(c)),m>-1&&(r=r||t.slice(0,m),d=t.slice(m,t.length)),r=wt(r??t,n),{fullPath:r+(c&&"?")+c+d,path:r,query:o,hash:d}}function Et(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function be(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&z(t.matched[r],n.matched[o])&&Ue(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ue(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_t(e[n],t[n]))return!1;return!0}function _t(e,t){return I(e)?ke(e,t):I(t)?ke(t,e):e===t}function ke(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function wt(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let c=n.length-1,d,m;for(d=0;d<r.length;d++)if(m=r[d],m!==".")if(m==="..")c>1&&c--;else break;return n.slice(0,c).join("/")+"/"+r.slice(d-(d===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var Q;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Q||(Q={}));function Pt(e){if(!e)if(V){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),yt(e)}const St=/^[^#]+#/;function bt(e,t){return e.replace(St,"#")+t}function kt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ne=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ct(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=kt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Ot(e,t){de.set(e,t)}function At(e){const t=de.get(e);return de.delete(e),t}let xt=()=>location.protocol+"//"+location.host;function We(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let m=o.includes(e.slice(c))?e.slice(c).length:1,a=o.slice(m);return a[0]!=="/"&&(a="/"+a),be(a,"")}return be(n,e)+r+o}function Mt(e,t,n,r){let o=[],c=[],d=null;const m=({state:f})=>{const g=We(e,location),E=n.value,k=t.value;let b=0;if(f){if(n.value=g,t.value=f,d&&d===E){d=null;return}b=k?f.position-k.position:0}else r(g);o.forEach(R=>{R(n.value,E,{delta:b,type:X.pop,direction:b?b>0?Q.forward:Q.back:Q.unknown})})};function a(){d=n.value}function u(f){o.push(f);const g=()=>{const E=o.indexOf(f);E>-1&&o.splice(E,1)};return c.push(g),g}function s(){const{history:f}=window;f.state&&f.replaceState(P({},f.state,{scroll:ne()}),"")}function l(){for(const f of c)f();c=[],window.removeEventListener("popstate",m),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",m),window.addEventListener("beforeunload",s,{passive:!0}),{pauseListeners:a,listen:u,destroy:l}}function Oe(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?ne():null}}function It(e){const{history:t,location:n}=window,r={value:We(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(a,u,s){const l=e.indexOf("#"),f=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+a:xt()+e+a;try{t[s?"replaceState":"pushState"](u,"",f),o.value=u}catch(g){console.error(g),n[s?"replace":"assign"](f)}}function d(a,u){const s=P({},t.state,Oe(o.value.back,a,o.value.forward,!0),u,{position:o.value.position});c(a,s,!0),r.value=a}function m(a,u){const s=P({},o.value,t.state,{forward:a,scroll:ne()});c(s.current,s,!0);const l=P({},Oe(r.value,a,null),{position:s.position+1},u);c(a,l,!1),r.value=a}return{location:r,state:o,push:m,replace:d}}function Lt(e){e=Pt(e);const t=It(e),n=Mt(e,t.state,t.location,t.replace);function r(c,d=!0){d||n.pauseListeners(),history.go(c)}const o=P({location:"",base:e,go:r,createHref:bt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function $t(e){return typeof e=="string"||e&&typeof e=="object"}function Fe(e){return typeof e=="string"||typeof e=="symbol"}const T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qe=Symbol("");var Ae;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ae||(Ae={}));function D(e,t){return P(new Error,{type:e,[Qe]:!0},t)}function N(e,t){return e instanceof Error&&Qe in e&&(t==null||!!(e.type&t))}const xe="[^/]+?",Nt={sensitive:!1,strict:!1,start:!0,end:!0},Tt=/[.+*?^${}()[\]/\\]/g;function Bt(e,t){const n=P({},Nt,t),r=[];let o=n.start?"^":"";const c=[];for(const u of e){const s=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let l=0;l<u.length;l++){const f=u[l];let g=40+(n.sensitive?.25:0);if(f.type===0)l||(o+="/"),o+=f.value.replace(Tt,"\\$&"),g+=40;else if(f.type===1){const{value:E,repeatable:k,optional:b,regexp:R}=f;c.push({name:E,repeatable:k,optional:b});const w=R||xe;if(w!==xe){g+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${E}" (${w}): `+M.message)}}let A=k?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;l||(A=b&&u.length<2?`(?:/${A})`:"/"+A),b&&(A+="?"),o+=A,g+=20,b&&(g+=-8),k&&(g+=-20),w===".*"&&(g+=-50)}s.push(g)}r.push(s)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function m(u){const s=u.match(d),l={};if(!s)return null;for(let f=1;f<s.length;f++){const g=s[f]||"",E=c[f-1];l[E.name]=g&&E.repeatable?g.split("/"):g}return l}function a(u){let s="",l=!1;for(const f of e){(!l||!s.endsWith("/"))&&(s+="/"),l=!1;for(const g of f)if(g.type===0)s+=g.value;else if(g.type===1){const{value:E,repeatable:k,optional:b}=g,R=E in u?u[E]:"";if(I(R)&&!k)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const w=I(R)?R.join("/"):R;if(!w)if(b)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):l=!0);else throw new Error(`Missing required param "${E}"`);s+=w}}return s||"/"}return{re:d,score:r,keys:c,parse:m,stringify:a}}function jt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ht(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=jt(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(Me(r))return 1;if(Me(o))return-1}return o.length-r.length}function Me(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Vt={type:0,value:""},qt=/[a-zA-Z0-9_]/;function zt(e){if(!e)return[[]];if(e==="/")return[[Vt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const o=[];let c;function d(){c&&o.push(c),c=[]}let m=0,a,u="",s="";function l(){u&&(n===0?c.push({type:0,value:u}):n===1||n===2||n===3?(c.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:u,regexp:s,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}for(;m<e.length;){if(a=e[m++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&l(),d()):a===":"?(l(),n=1):f();break;case 4:f(),n=r;break;case 1:a==="("?n=2:qt.test(a)?f():(l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--);break;case 2:a===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+a:n=3:s+=a;break;case 3:l(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&m--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),l(),d(),o}function Dt(e,t,n){const r=Bt(zt(e.path),n),o=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Gt(e,t){const n=[],r=new Map;t=$e({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function c(s,l,f){const g=!f,E=Kt(s);E.aliasOf=f&&f.record;const k=$e(t,s),b=[E];if("alias"in s){const A=typeof s.alias=="string"?[s.alias]:s.alias;for(const M of A)b.push(P({},E,{components:f?f.record.components:E.components,path:M,aliasOf:f?f.record:E}))}let R,w;for(const A of b){const{path:M}=A;if(l&&M[0]!=="/"){const j=l.record.path,$=j[j.length-1]==="/"?"":"/";A.path=l.record.path+(M&&$+M)}if(R=Dt(A,l,k),f?f.alias.push(R):(w=w||R,w!==R&&w.alias.push(R),g&&s.name&&!Le(R)&&d(s.name)),E.children){const j=E.children;for(let $=0;$<j.length;$++)c(j[$],R,f&&f.children[$])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&a(R)}return w?()=>{d(w)}:F}function d(s){if(Fe(s)){const l=r.get(s);l&&(r.delete(s),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(s);l>-1&&(n.splice(l,1),s.record.name&&r.delete(s.record.name),s.children.forEach(d),s.alias.forEach(d))}}function m(){return n}function a(s){let l=0;for(;l<n.length&&Ht(s,n[l])>=0&&(s.record.path!==n[l].record.path||!Ye(s,n[l]));)l++;n.splice(l,0,s),s.record.name&&!Le(s)&&r.set(s.record.name,s)}function u(s,l){let f,g={},E,k;if("name"in s&&s.name){if(f=r.get(s.name),!f)throw D(1,{location:s});k=f.record.name,g=P(Ie(l.params,f.keys.filter(w=>!w.optional).map(w=>w.name)),s.params&&Ie(s.params,f.keys.map(w=>w.name))),E=f.stringify(g)}else if("path"in s)E=s.path,f=n.find(w=>w.re.test(E)),f&&(g=f.parse(E),k=f.record.name);else{if(f=l.name?r.get(l.name):n.find(w=>w.re.test(l.path)),!f)throw D(1,{location:s,currentLocation:l});k=f.record.name,g=P({},l.params,s.params),E=f.stringify(g)}const b=[];let R=f;for(;R;)b.unshift(R.record),R=R.parent;return{name:k,path:E,params:g,matched:b,meta:Wt(b)}}return e.forEach(s=>c(s)),{addRoute:c,resolve:u,removeRoute:d,getRoutes:m,getRecordMatcher:o}}function Ie(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Kt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ut(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ut(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Le(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wt(e){return e.reduce((t,n)=>P(t,n.meta),{})}function $e(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ye(e,t){return t.children.some(n=>n===e||Ye(e,n))}const Xe=/#/g,Ft=/&/g,Qt=/\//g,Yt=/=/g,Xt=/\?/g,Ze=/\+/g,Zt=/%5B/g,Jt=/%5D/g,Je=/%5E/g,en=/%60/g,et=/%7B/g,tn=/%7C/g,tt=/%7D/g,nn=/%20/g;function me(e){return encodeURI(""+e).replace(tn,"|").replace(Zt,"[").replace(Jt,"]")}function rn(e){return me(e).replace(et,"{").replace(tt,"}").replace(Je,"^")}function he(e){return me(e).replace(Ze,"%2B").replace(nn,"+").replace(Xe,"%23").replace(Ft,"%26").replace(en,"`").replace(et,"{").replace(tt,"}").replace(Je,"^")}function on(e){return he(e).replace(Yt,"%3D")}function sn(e){return me(e).replace(Xe,"%23").replace(Xt,"%3F")}function cn(e){return e==null?"":sn(e).replace(Qt,"%2F")}function te(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function an(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(Ze," "),d=c.indexOf("="),m=te(d<0?c:c.slice(0,d)),a=d<0?null:te(c.slice(d+1));if(m in t){let u=t[m];I(u)||(u=t[m]=[u]),u.push(a)}else t[m]=a}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=on(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(c=>c&&he(c)):[r&&he(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function ln(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const un=Symbol(""),Te=Symbol(""),ge=Symbol(""),nt=Symbol(""),pe=Symbol("");function W(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((d,m)=>{const a=l=>{l===!1?m(D(4,{from:n,to:t})):l instanceof Error?m(l):$t(l)?m(D(2,{from:t,to:l})):(c&&r.enterCallbacks[o]===c&&typeof l=="function"&&c.push(l),d())},u=e.call(r&&r.instances[o],t,n,a);let s=Promise.resolve(u);e.length<3&&(s=s.then(a)),s.catch(l=>m(l))})}function fe(e,t,n,r){const o=[];for(const c of e)for(const d in c.components){let m=c.components[d];if(!(t!=="beforeRouteEnter"&&!c.instances[d]))if(fn(m)){const u=(m.__vccOpts||m)[t];u&&o.push(B(u,n,r,c,d))}else{let a=m();o.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${c.path}"`));const s=gt(u)?u.default:u;c.components[d]=s;const f=(s.__vccOpts||s)[t];return f&&B(f,n,r,c,d)()}))}}return o}function fn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Be(e){const t=Y(ge),n=Y(nt),r=L(()=>t.resolve(q(e.to))),o=L(()=>{const{matched:a}=r.value,{length:u}=a,s=a[u-1],l=n.matched;if(!s||!l.length)return-1;const f=l.findIndex(z.bind(null,s));if(f>-1)return f;const g=je(a[u-2]);return u>1&&je(s)===g&&l[l.length-1].path!==g?l.findIndex(z.bind(null,a[u-2])):f}),c=L(()=>o.value>-1&&mn(n.params,r.value.params)),d=L(()=>o.value>-1&&o.value===n.matched.length-1&&Ue(n.params,r.value.params));function m(a={}){return pn(a)?t[q(e.replace)?"replace":"push"](q(e.to)).catch(F):Promise.resolve()}return{route:r,href:L(()=>r.value.href),isActive:c,isExactActive:d,navigate:m}}const dn=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Be,setup(e,{slots:t}){const n=ht(Be(e)),{options:r}=Y(ge),o=L(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:De("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),hn=dn;function pn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!I(o)||o.length!==r.length||r.some((c,d)=>c!==o[d]))return!1}return!0}function je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e??t??n,gn=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(pe),o=L(()=>e.route||r.value),c=Y(Te,0),d=L(()=>{let u=q(c);const{matched:s}=o.value;let l;for(;(l=s[u])&&!l.components;)u++;return u}),m=L(()=>o.value.matched[d.value]);ae(Te,L(()=>d.value+1)),ae(un,m),ae(pe,o);const a=ut();return ft(()=>[a.value,m.value,e.name],([u,s,l],[f,g,E])=>{s&&(s.instances[l]=u,g&&g!==s&&u&&u===f&&(s.leaveGuards.size||(s.leaveGuards=g.leaveGuards),s.updateGuards.size||(s.updateGuards=g.updateGuards))),u&&s&&(!g||!z(s,g)||!f)&&(s.enterCallbacks[l]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=o.value,s=e.name,l=m.value,f=l&&l.components[s];if(!f)return Ve(n.default,{Component:f,route:u});const g=l.props[s],E=g?g===!0?u.params:typeof g=="function"?g(u):g:null,b=De(f,P({},E,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(l.instances[s]=null)},ref:a}));return Ve(n.default,{Component:b,route:u})||b}}});function Ve(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const rt=gn;function vn(e){const t=Gt(e.routes,e),n=e.parseQuery||an,r=e.stringifyQuery||Ne,o=e.history,c=W(),d=W(),m=W(),a=at(T);let u=T;V&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=le.bind(null,i=>""+i),l=le.bind(null,cn),f=le.bind(null,te);function g(i,p){let h,v;return Fe(i)?(h=t.getRecordMatcher(i),v=p):v=i,t.addRoute(v,h)}function E(i){const p=t.getRecordMatcher(i);p&&t.removeRoute(p)}function k(){return t.getRoutes().map(i=>i.record)}function b(i){return!!t.getRecordMatcher(i)}function R(i,p){if(p=P({},p||a.value),typeof i=="string"){const y=ue(n,i,p.path),O=t.resolve({path:y.path},p),U=o.createHref(y.fullPath);return P(y,O,{params:f(O.params),hash:te(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in i)h=P({},i,{path:ue(n,i.path,p.path).path});else{const y=P({},i.params);for(const O in y)y[O]==null&&delete y[O];h=P({},i,{params:l(y)}),p.params=l(p.params)}const v=t.resolve(h,p),S=i.hash||"";v.params=s(f(v.params));const C=Et(r,P({},i,{hash:rn(S),path:v.path})),_=o.createHref(C);return P({fullPath:C,hash:S,query:r===Ne?ln(i.query):i.query||{}},v,{redirectedFrom:void 0,href:_})}function w(i){return typeof i=="string"?ue(n,i,a.value.path):P({},i)}function A(i,p){if(u!==i)return D(8,{from:p,to:i})}function M(i){return G(i)}function j(i){return M(P(w(i),{replace:!0}))}function $(i){const p=i.matched[i.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(i):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),P({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function G(i,p){const h=u=R(i),v=a.value,S=i.state,C=i.force,_=i.replace===!0,y=$(h);if(y)return G(P(w(y),{state:typeof y=="object"?P({},S,y.state):S,force:C,replace:_}),p||h);const O=h;O.redirectedFrom=p;let U;return!C&&Rt(r,v,h)&&(U=D(16,{to:O,from:v}),we(v,v,!0,!1)),(U?Promise.resolve(U):ye(O,v)).catch(x=>N(x)?N(x,2)?x:se(x):oe(x,O,v)).then(x=>{if(x){if(N(x,2))return G(P({replace:_},w(x.to),{state:typeof x.to=="object"?P({},S,x.to.state):S,force:C}),p||O)}else x=Re(O,v,!0,_,S);return Ee(O,v,x),x})}function st(i,p){const h=A(i,p);return h?Promise.reject(h):Promise.resolve()}function ve(i){const p=J.values().next().value;return p&&typeof p.runWithContext=="function"?p.runWithContext(i):i()}function ye(i,p){let h;const[v,S,C]=yn(i,p);h=fe(v.reverse(),"beforeRouteLeave",i,p);for(const y of v)y.leaveGuards.forEach(O=>{h.push(B(O,i,p))});const _=st.bind(null,i,p);return h.push(_),H(h).then(()=>{h=[];for(const y of c.list())h.push(B(y,i,p));return h.push(_),H(h)}).then(()=>{h=fe(S,"beforeRouteUpdate",i,p);for(const y of S)y.updateGuards.forEach(O=>{h.push(B(O,i,p))});return h.push(_),H(h)}).then(()=>{h=[];for(const y of C)if(y.beforeEnter)if(I(y.beforeEnter))for(const O of y.beforeEnter)h.push(B(O,i,p));else h.push(B(y.beforeEnter,i,p));return h.push(_),H(h)}).then(()=>(i.matched.forEach(y=>y.enterCallbacks={}),h=fe(C,"beforeRouteEnter",i,p),h.push(_),H(h))).then(()=>{h=[];for(const y of d.list())h.push(B(y,i,p));return h.push(_),H(h)}).catch(y=>N(y,8)?y:Promise.reject(y))}function Ee(i,p,h){m.list().forEach(v=>ve(()=>v(i,p,h)))}function Re(i,p,h,v,S){const C=A(i,p);if(C)return C;const _=p===T,y=V?history.state:{};h&&(v||_?o.replace(i.fullPath,P({scroll:_&&y&&y.scroll},S)):o.push(i.fullPath,S)),a.value=i,we(i,p,h,_),se()}let K;function it(){K||(K=o.listen((i,p,h)=>{if(!Pe.listening)return;const v=R(i),S=$(v);if(S){G(P(S,{replace:!0}),v).catch(F);return}u=v;const C=a.value;V&&Ot(Ce(C.fullPath,h.delta),ne()),ye(v,C).catch(_=>N(_,12)?_:N(_,2)?(G(_.to,v).then(y=>{N(y,20)&&!h.delta&&h.type===X.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&o.go(-h.delta,!1),oe(_,v,C))).then(_=>{_=_||Re(v,C,!1),_&&(h.delta&&!N(_,8)?o.go(-h.delta,!1):h.type===X.pop&&N(_,20)&&o.go(-1,!1)),Ee(v,C,_)}).catch(F)}))}let re=W(),_e=W(),Z;function oe(i,p,h){se(i);const v=_e.list();return v.length?v.forEach(S=>S(i,p,h)):console.error(i),Promise.reject(i)}function ct(){return Z&&a.value!==T?Promise.resolve():new Promise((i,p)=>{re.add([i,p])})}function se(i){return Z||(Z=!i,it(),re.list().forEach(([p,h])=>i?h(i):p()),re.reset()),i}function we(i,p,h,v){const{scrollBehavior:S}=e;if(!V||!S)return Promise.resolve();const C=!h&&At(Ce(i.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return dt().then(()=>S(i,p,C)).then(_=>_&&Ct(_)).catch(_=>oe(_,i,p))}const ie=i=>o.go(i);let ce;const J=new Set,Pe={currentRoute:a,listening:!0,addRoute:g,removeRoute:E,hasRoute:b,getRoutes:k,resolve:R,options:e,push:M,replace:j,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:c.add,beforeResolve:d.add,afterEach:m.add,onError:_e.add,isReady:ct,install(i){const p=this;i.component("RouterLink",hn),i.component("RouterView",rt),i.config.globalProperties.$router=p,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>q(a)}),V&&!ce&&a.value===T&&(ce=!0,M(o.location).catch(S=>{}));const h={};for(const S in T)Object.defineProperty(h,S,{get:()=>a.value[S],enumerable:!0});i.provide(ge,p),i.provide(nt,lt(h)),i.provide(pe,a);const v=i.unmount;J.add(i),i.unmount=function(){J.delete(i),J.size<1&&(u=T,K&&K(),K=null,a.value=T,ce=!1,Z=!1),v()}}};function H(i){return i.reduce((p,h)=>p.then(()=>ve(h)),Promise.resolve())}return Pe}function yn(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let d=0;d<c;d++){const m=t.matched[d];m&&(e.matched.find(u=>z(u,m))?r.push(m):n.push(m));const a=e.matched[d];a&&(t.matched.find(u=>z(u,a))||o.push(a))}return[n,r,o]}const En=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},Rn={name:"Stars",data:function(){return{renderImg:!0,wH:window.innerHeight,wW:window.innerWidth}},methods:{generateStars:function(e){for(let t=0;t<e;t++){const n=document.createElement("div");n.className=t%20==0?"bkg_star star--big":t%9==0?"bkg_star star--medium":"bkg_star star--small",n.setAttribute("style",`top: ${Math.round(Math.random()*this.wH)}px;
                                        left: ${Math.round(Math.random()*this.wW)}px;
                                        animation-duration: ${Math.round(Math.random()*3e3)+3e3}ms;
                                        animation-delay: ${Math.round(Math.random()*3e3)}ms;`),document.getElementById("overlay").appendChild(n)}},async forceRender(){this.renderImg=!1,await this.$nextTick(),this.renderImg=!0,this.generateStars(140)}},beforeMount(){this.generateStars()},mounted(){setTimeout(()=>{this.forceRender()})}},_n=["v-if"];function wn(e,t,n,r,o,c){return Ge(),Ke("div",{"v-if":e.renderImg,id:"overlay"},null,8,_n)}const Pn=En(Rn,[["render",wn]]),Sn=pt('<header><nav id="navbar"><ul id="ctnNavLinks"><li><a href="#inicio">Inicio</a></li><li><a href="/portfolio/#proyectos">Proyectos</a></li><li><a href="#contacto">Contacto</a></li></ul></nav></header>',1),bn={__name:"App",setup(e){window.onscroll=function(){n()};let t=window.screen.height*window.devicePixelRatio;function n(){document.body.scrollTop>t||document.documentElement.scrollTop>t?(document.getElementById("navbar").style.opacity="1",document.getElementById("navbar").style.top="0"):(document.getElementById("navbar").style.top="-50px",document.getElementById("navbar").style.opacity="0")}return(r,o)=>(Ge(),Ke("section",null,[Se(Pn,{class:"focus-in"}),Sn,Se(q(rt))]))}},kn="modulepreload",Cn=function(e){return"/portfolio/"+e},qe={},ee=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Cn(c),c in qe)return;qe[c]=!0;const d=c.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(!!r)for(let s=o.length-1;s>=0;s--){const l=o[s];if(l.href===c&&(!d||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":kn,d||(u.as="script",u.crossOrigin=""),u.href=c,document.head.appendChild(u),d)return new Promise((s,l)=>{u.addEventListener("load",s),u.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t()).catch(c=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c})},On=vn({history:Lt("/portfolio/"),routes:[{path:"/",name:"portfolio",component:()=>ee(()=>import("./Portfolio-b1e5bff9.js"),["assets/Portfolio-b1e5bff9.js","assets/projectsData-39545d6a.js","assets/projectsData-f4c1ff08.css","assets/Portfolio-fdaff788.css"]),children:[{path:"/project/:projectName",name:"project",component:()=>ee(()=>import("./Project-8157dbe3.js"),["assets/Project-8157dbe3.js","assets/projectsData-39545d6a.js","assets/projectsData-f4c1ff08.css","assets/Project-0f7aed51.css"])},{path:"/surprise",name:"Surprise",component:()=>ee(()=>import("./Surprise-bb833e10.js"),["assets/Surprise-bb833e10.js","assets/Surprise-131abd26.css"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>ee(()=>import("./NotFound-d5a1a5b4.js"),["assets/NotFound-d5a1a5b4.js","assets/NotFound-f26499ab.css"])}]}]}),ot=mt(bn);ot.use(On);ot.mount("#app");export{En as _};