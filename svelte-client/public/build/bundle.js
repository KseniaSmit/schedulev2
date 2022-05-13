var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function s(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function i(t){return null==t?"":t}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const f=new Set;function $(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&d($)}function p(t){let e;return 0===f.size&&d($),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function h(t){const e=w("style");return function(t,e){m(t.head||t,e)}(g(t),e),e.sheet}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function k(){return b("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function j(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}const N=new Map;let M,S=0;function B(t,e,n,o,s,r,c,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*r(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,f=g(t),{stylesheet:$,rules:p}=N.get(f)||function(t,e){const n={stylesheet:h(e),rules:{}};return N.set(t,n),n}(f,t);p[d]||(p[d]=!0,$.insertRule(`@keyframes ${d} ${u}`,$.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${s}ms 1 both`,S+=1,d}function F(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),S-=s,S||d((()=>{S||(N.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),N.clear())})))}function T(t){M=t}function A(){if(!M)throw new Error("Function called outside component initialization");return M}function L(t){A().$$.on_mount.push(t)}function O(){const t=A();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=C(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}function D(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const R=[],z=[],P=[],q=[],W=Promise.resolve();let J=!1;function G(t){P.push(t)}const H=new Set;let I,K=0;function Q(){const t=M;do{for(;K<R.length;){const t=R[K];K++,T(t),U(t.$$)}for(T(null),R.length=0,K=0;z.length;)z.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];H.has(e)||(H.add(e),e())}P.length=0}while(R.length);for(;q.length;)q.pop()();J=!1,H.clear(),T(t)}function U(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}function V(){return I||(I=Promise.resolve(),I.then((()=>{I=null}))),I}function X(t,e,n){t.dispatchEvent(C(`${e?"intro":"outro"}${n}`))}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||s(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const st={duration:0};function rt(n,o,c,l){let i=o(n,c),a=l?0:1,d=null,f=null,$=null;function m(){$&&F(n,$)}function g(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function h(o){const{delay:r=0,duration:c=300,easing:l=e,tick:h=t,css:y}=i||st,v={start:u()+r,b:o};o||(v.group=Z,Z.r+=1),d||f?f=v:(y&&(m(),$=B(n,a,o,c,r,l,y)),o&&h(0,1),d=g(v,c),G((()=>X(n,o,"start"))),p((t=>{if(f&&t>f.start&&(d=g(f,c),f=null,X(n,d.b,"start"),y&&(m(),$=B(n,a,d.b,d.duration,0,l,i.css))),d)if(t>=d.end)h(a=d.b,1-a),X(n,d.b,"end"),f||(d.b?m():--d.group.r||s(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;a=d.a+d.d*l(e/d.duration),h(a,1-a)}return!(!d&&!f)})))}return{run(t){r(i)?V().then((()=>{i=i(),h(t)})):h(t)},end(){m(),d=f=null}}}function ct(t,e){ot(t,1,1,(()=>{e.delete(t.key)}))}function lt(t,e,n,o,s,r,c,l,i,a,u,d){let f=t.length,$=r.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const g=[],h=new Map,y=new Map;for(p=$;p--;){const t=d(s,r,p),l=n(t);let i=c.get(l);i?o&&i.p(t,e):(i=a(l,t),i.c()),h.set(l,g[p]=i),l in m&&y.set(l,Math.abs(p-m[l]))}const v=new Set,w=new Set;function b(t){nt(t,1),t.m(l,u),c.set(t.key,t),u=t.first,$--}for(;f&&$;){const e=g[$-1],n=t[f-1],o=e.key,s=n.key;e===n?(u=e.first,f--,$--):h.has(s)?!c.has(o)||v.has(o)?b(e):w.has(s)?f--:y.get(o)>y.get(s)?(w.add(o),b(e)):(v.add(s),f--):(i(n,c),f--)}for(;f--;){const e=t[f];h.has(e.key)||i(e,c)}for(;$;)b(g[$-1]);return g}function it(t){t&&t.c()}function at(t,e,o,c){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,o),c||G((()=>{const e=i.map(n).filter(r);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(G)}function ut(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(R.push(t),J||(J=!0,W.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,r,c,l,i,a,u=[-1]){const d=M;T(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(f.root);let $=!1;if(f.ctx=r?r(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),$&&dt(e,t)),n})):[],f.update(),$=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),at(e,n.target,n.anchor,n.customElement),Q()}T(d)}class $t{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pt(t){return 1-Math.sqrt(1-t*t)}function mt(t){const e=t-1;return e*e*e+1}function gt(t){return--t*t*t*t*t+1}function ht(t,{delay:e=0,duration:n=400,easing:o=mt}={}){const s=getComputedStyle(t),r=+s.opacity,c=parseFloat(s.height),l=parseFloat(s.paddingTop),i=parseFloat(s.paddingBottom),a=parseFloat(s.marginTop),u=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),f=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*r};height: ${t*c}px;padding-top: ${t*l}px;padding-bottom: ${t*i}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*f}px;`}}function yt(t,{delay:e=0,duration:n=400,easing:o=mt,start:s=0,opacity:r=0}={}){const c=getComputedStyle(t),l=+c.opacity,i="none"===c.transform?"":c.transform,a=1-s,u=l*(1-r);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${i} scale(${1-a*e});\n\t\t\topacity: ${l-u*e}\n\t\t`}}function vt(n){let o,s,c,l,i,a,d,f,$;return{c(){o=w("div"),s=w("div"),c=w("span"),c.textContent="✕",l=x(),i=w("h4"),a=b(n[0]),E(c,"class","error-close svelte-8xcs72"),E(s,"class","error svelte-8xcs72"),E(o,"class","container svelte-8xcs72")},m(t,e){y(t,o,e),m(o,s),m(s,c),m(s,l),m(s,i),m(i,a),f||($=_(c,"click",n[2]),f=!0)},p(t,e){n=t,1&e&&j(a,n[0])},i(n){d||G((()=>{d=function(n,o,s){let c,l,i=o(n,s),a=!1,d=0;function f(){c&&F(n,c)}function $(){const{delay:o=0,duration:s=300,easing:r=e,tick:$=t,css:m}=i||st;m&&(c=B(n,0,1,s,o,r,m,d++)),$(0,1);const g=u()+o,h=g+s;l&&l.abort(),a=!0,G((()=>X(n,!0,"start"))),l=p((t=>{if(a){if(t>=h)return $(1,0),X(n,!0,"end"),f(),a=!1;if(t>=g){const e=r((t-g)/s);$(e,1-e)}}return a}))}let m=!1;return{start(){m||(m=!0,F(n),r(i)?(i=i(),V().then($)):$())},invalidate(){m=!1},end(){a&&(f(),a=!1)}}}(o,ht,{delay:100,duration:300,easing:pt}),d.start()}))},o:t,d(t){t&&v(o),f=!1,$()}}}function wt(e){let n,o=e[1]&&vt(e);return{c(){o&&o.c(),n=k()},m(t,e){o&&o.m(t,e),y(t,n,e)},p(t,[e]){t[1]?o?(o.p(t,e),2&e&&nt(o,1)):(o=vt(t),o.c(),nt(o,1),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i(t){nt(o)},o:t,d(t){o&&o.d(t),t&&v(n)}}}function bt(t,e,n){const o=O();let{message:s}=e,{show:r}=e;return t.$$set=t=>{"message"in t&&n(0,s=t.message),"show"in t&&n(1,r=t.show)},[s,r,function(){o("close-error")}]}class xt extends $t{constructor(t){super(),ft(this,t,bt,wt,c,{message:0,show:1})}}async function kt(t){const e=await fetch(t);return await e.json()}async function _t(t,e){const n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)});return await n.json()}function Et(t){let e,n,o,s,r;const c=t[3].default,a=function(t,e,n,o){if(t){const s=l(t,e,n,o);return t[0](s)}}(c,t,t[2],null);return{c(){e=w("button"),a&&a.c(),E(e,"class",n=i(t[0])+" svelte-201vca"),E(e,"type",t[1])},m(n,c){var l;y(n,e,c),a&&a.m(e,null),o=!0,s||(r=_(e,"click",(l=t[4],function(t){return t.preventDefault(),l.call(this,t)})),s=!0)},p(t,[s]){a&&a.p&&(!o||4&s)&&function(t,e,n,o,s,r){if(s){const c=l(e,n,o,r);t.p(c,s)}}(a,c,t,t[2],o?function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(c,t[2],s,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),(!o||1&s&&n!==(n=i(t[0])+" svelte-201vca"))&&E(e,"class",n),(!o||2&s)&&E(e,"type",t[1])},i(t){o||(nt(a,t),o=!0)},o(t){ot(a,t),o=!1},d(t){t&&v(e),a&&a.d(t),s=!1,r()}}}function jt(t,e,n){let{$$slots:o={},$$scope:s}=e,{classes:r=""}=e,{type:c="button"}=e;return t.$$set=t=>{"classes"in t&&n(0,r=t.classes),"type"in t&&n(1,c=t.type),"$$scope"in t&&n(2,s=t.$$scope)},[r,c,s,o,function(e){D.call(this,t,e)}]}class Ct extends $t{constructor(t){super(),ft(this,t,jt,Et,c,{classes:0,type:1})}}function Nt(e){let n,o,s,r;return{c(){n=w("input"),E(n,"class",o=i(e[3])+" svelte-zpp6lo"),E(n,"type",e[0]),E(n,"placeholder",e[1]),n.value=e[2]},m(t,o){y(t,n,o),s||(r=_(n,"input",e[4]),s=!0)},p(t,[e]){8&e&&o!==(o=i(t[3])+" svelte-zpp6lo")&&E(n,"class",o),1&e&&E(n,"type",t[0]),2&e&&E(n,"placeholder",t[1]),4&e&&n.value!==t[2]&&(n.value=t[2])},i:t,o:t,d(t){t&&v(n),s=!1,r()}}}function Mt(t,e,n){let{type:o="text"}=e,{placeholder:s=""}=e,{value:r=""}=e,{classes:c=""}=e;return t.$$set=t=>{"type"in t&&n(0,o=t.type),"placeholder"in t&&n(1,s=t.placeholder),"value"in t&&n(2,r=t.value),"classes"in t&&n(3,c=t.classes)},[o,s,r,c,function(e){D.call(this,t,e)}]}class St extends $t{constructor(t){super(),ft(this,t,Mt,Nt,c,{type:0,placeholder:1,value:2,classes:3})}}function Bt(t){let e;return{c(){e=w("h1"),e.textContent="Регистрация",E(e,"class","svelte-1tv0igr")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Ft(t){let e;return{c(){e=w("h1"),e.textContent="Авторизация",E(e,"class","svelte-1tv0igr")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Tt(t){let e,n;return e=new Ct({props:{type:"submit",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),e.$on("click",t[4]),{c(){it(e.$$.fragment)},m(t,o){at(e,t,o),n=!0},p(t,n){const o={};2048&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function At(t){let e,n,o,s,r,c,l,i;return r=new St({props:{classes:"longer",type:"password",placeholder:"Введите пароль снова",value:t[2]}}),r.$on("input",t[8]),l=new Ct({props:{classes:"c",type:"submit",$$slots:{default:[Ot]},$$scope:{ctx:t}}}),l.$on("click",t[5]),{c(){e=w("label"),n=b("Подтверждение пароля"),o=w("br"),s=x(),it(r.$$.fragment),c=x(),it(l.$$.fragment),E(e,"class","svelte-1tv0igr")},m(t,a){y(t,e,a),m(e,n),m(e,o),m(e,s),at(r,e,null),y(t,c,a),at(l,t,a),i=!0},p(t,e){const n={};4&e&&(n.value=t[2]),r.$set(n);const o={};2048&e&&(o.$$scope={dirty:e,ctx:t}),l.$set(o)},i(t){i||(nt(r.$$.fragment,t),nt(l.$$.fragment,t),i=!0)},o(t){ot(r.$$.fragment,t),ot(l.$$.fragment,t),i=!1},d(t){t&&v(e),ut(r),t&&v(c),ut(l,t)}}}function Lt(t){let e;return{c(){e=b("Авторизация")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Ot(t){let e;return{c(){e=b("Регистрация")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Dt(t){let e,n,o,s,r,c,l,i,a,u,d,f,$,p,g,h,k,j,C,N,M,S,B,F,T,A,L,O;function D(t,e){return t[3]?Ft:Bt}let R=D(t),z=R(t);f=new St({props:{classes:"longer",type:"email",placeholder:"Введите свой e-mail",value:t[0]}}),f.$on("input",t[6]),j=new St({props:{classes:"longer",type:"password",placeholder:"Введите пароль",value:t[1]}}),j.$on("input",t[7]);const P=[At,Tt],q=[];function W(t,e){return t[3]?1:0}return N=W(t),M=q[N]=P[N](t),{c(){e=w("div"),n=w("div"),z.c(),o=x(),s=w("hr"),r=x(),c=w("div"),l=w("form"),i=w("label"),a=b("E-mail"),u=w("br"),d=x(),it(f.$$.fragment),$=x(),p=w("label"),g=b("Пароль"),h=w("br"),k=x(),it(j.$$.fragment),C=x(),M.c(),S=x(),B=w("label"),F=b("Авторизация\r\n    "),T=w("input"),E(n,"class","header"),E(i,"class","svelte-1tv0igr"),E(p,"class","svelte-1tv0igr"),E(T,"type","checkbox"),E(T,"name","login"),E(B,"class","svelte-1tv0igr"),E(c,"class","form svelte-1tv0igr"),E(e,"id","card"),E(e,"class","svelte-1tv0igr")},m(v,w){y(v,e,w),m(e,n),z.m(n,null),m(e,o),m(e,s),m(e,r),m(e,c),m(c,l),m(l,i),m(i,a),m(i,u),m(i,d),at(f,i,null),m(l,$),m(l,p),m(p,g),m(p,h),m(p,k),at(j,p,null),m(l,C),q[N].m(l,null),m(l,S),m(l,B),m(B,F),m(B,T),T.checked=t[3],A=!0,L||(O=_(T,"change",t[9]),L=!0)},p(t,[e]){R!==(R=D(t))&&(z.d(1),z=R(t),z&&(z.c(),z.m(n,null)));const o={};1&e&&(o.value=t[0]),f.$set(o);const s={};2&e&&(s.value=t[1]),j.$set(s);let r=N;N=W(t),N===r?q[N].p(t,e):(tt(),ot(q[r],1,1,(()=>{q[r]=null})),et(),M=q[N],M?M.p(t,e):(M=q[N]=P[N](t),M.c()),nt(M,1),M.m(l,S)),8&e&&(T.checked=t[3])},i(t){A||(nt(f.$$.fragment,t),nt(j.$$.fragment,t),nt(M),A=!0)},o(t){ot(f.$$.fragment,t),ot(j.$$.fragment,t),ot(M),A=!1},d(t){t&&v(e),z.d(),ut(f),ut(j),q[N].d(),L=!1,O()}}}function Rt(t,e,n){const o=O();let s="",r="",c="",l=!0;return[s,r,c,l,async function(){const t=await _t("/login",{email:s,password:r});if(!t.success)return o("display-error",t.message),!1;o("login-user",t)},async function(){if(r!==c)return o("display-error","Пароли не совпадают"),!1;const t=await _t("/signup",{email:s,password:r});if(!t.success)return o("display-error",t.message),!1;errorShow=!1,o("login-user",t)},t=>n(0,s=t.target.value),t=>n(1,r=t.target.value),t=>n(2,c=t.target.value),function(){l=this.checked,n(3,l)}]}class zt extends $t{constructor(t){super(),ft(this,t,Rt,Dt,c,{})}}function Pt(t){let e;return{c(){e=b("Сохранить")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function qt(t){let e;return{c(){e=b("Удалить")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Wt(t){let e,n,o,r,c,l,i,a,u,d,f,$,p,g,h;return d=new Ct({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),d.$on("click",t[4]),$=new Ct({props:{$$slots:{default:[qt]},$$scope:{ctx:t}}}),$.$on("click",t[5]),{c(){e=w("div"),n=x(),o=w("div"),r=w("span"),r.textContent="✕",c=x(),l=w("textarea"),i=x(),a=w("br"),u=x(),it(d.$$.fragment),f=x(),it($.$$.fragment),E(e,"class","backdrop svelte-1iac17"),E(r,"class","close-modal svelte-1iac17"),E(l,"rows","10"),l.value=t[0],E(l,"class","svelte-1iac17"),E(o,"class","modal svelte-1iac17")},m(s,v){y(s,e,v),y(s,n,v),y(s,o,v),m(o,r),m(o,c),m(o,l),m(o,i),m(o,a),m(o,u),at(d,o,null),m(o,f),at($,o,null),p=!0,g||(h=[_(e,"click",t[2]),_(r,"click",t[2]),_(l,"input",t[3])],g=!0)},p(t,[e]){(!p||1&e)&&(l.value=t[0]);const n={};64&e&&(n.$$scope={dirty:e,ctx:t}),d.$set(n);const o={};64&e&&(o.$$scope={dirty:e,ctx:t}),$.$set(o)},i(t){p||(nt(d.$$.fragment,t),nt($.$$.fragment,t),p=!0)},o(t){ot(d.$$.fragment,t),ot($.$$.fragment,t),p=!1},d(t){t&&v(e),t&&v(n),t&&v(o),ut(d),ut($),g=!1,s(h)}}}function Jt(t,e,n){const o=O();let{note:s}=e;return t.$$set=t=>{"note"in t&&n(0,s=t.note)},[s,o,()=>{o("cancel-modal")},t=>n(0,s=t.target.value),()=>o("save-edit-note",s),()=>o("delete-note",s)]}class Gt extends $t{constructor(t){super(),ft(this,t,Jt,Wt,c,{note:0})}}function Ht(t){let e,n;return e=new Gt({props:{note:t[0]}}),e.$on("cancel-modal",t[5]),e.$on("save-edit-note",t[3]),e.$on("delete-note",t[2]),{c(){it(e.$$.fragment)},m(t,o){at(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.note=t[0]),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function It(t){let e,n,o,s,r,c,l,i,a,u,d,f=t[1]&&Ht(t);return{c(){e=w("div"),f&&f.c(),n=x(),o=w("div"),s=b(t[0]),r=x(),c=w("div"),l=w("button"),l.textContent="✎",E(o,"class","note-body svelte-10we4hg"),E(l,"class","svelte-10we4hg"),E(c,"class","edit-button svelte-10we4hg"),E(e,"id","note"),E(e,"class","svelte-10we4hg")},m(i,$){y(i,e,$),f&&f.m(e,null),m(e,n),m(e,o),m(o,s),m(e,r),m(e,c),m(c,l),a=!0,u||(d=_(l,"click",t[6]),u=!0)},p(o,[r]){(t=o)[1]?f?(f.p(t,r),2&r&&nt(f,1)):(f=Ht(t),f.c(),nt(f,1),f.m(e,n)):f&&(tt(),ot(f,1,1,(()=>{f=null})),et()),(!a||1&r)&&j(s,t[0])},i(t){a||(nt(f),G((()=>{i||(i=rt(e,yt,{duration:250,delay:10,opacity:.5,start:.5,easing:gt},!0)),i.run(1)})),a=!0)},o(t){ot(f),i||(i=rt(e,yt,{duration:250,delay:10,opacity:.5,start:.5,easing:gt},!1)),i.run(0),a=!1},d(t){t&&v(e),f&&f.d(),t&&i&&i.end(),u=!1,d()}}}function Kt(t,e,n){let o=O(),{noteBody:s}=e,{id:r}=e,c=!1;return t.$$set=t=>{"noteBody"in t&&n(0,s=t.noteBody),"id"in t&&n(4,r=t.id)},[s,c,function(){o("delete-note",r)},async function(t){const e=await _t(`/editNote/${r}`,{body:t.detail.trim()});if(!e.success)return o("display-error",e.message),!1;n(0,s=t.detail),n(1,c=!1)},r,()=>n(1,c=!1),()=>n(1,c=!0)]}class Qt extends $t{constructor(t){super(),ft(this,t,Kt,It,c,{noteBody:0,id:4})}}function Ut(t,e,n){const o=t.slice();return o[11]=e[n],o}function Vt(t){let e,n,o=[],s=new Map,r=t[1];const c=t=>t[11].id;for(let e=0;e<r.length;e+=1){let n=Ut(t,r,e),l=c(n);s.set(l,o[e]=Xt(l,n))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=k()},m(t,s){for(let e=0;e<o.length;e+=1)o[e].m(t,s);y(t,e,s),n=!0},p(t,n){42&n&&(r=t[1],tt(),o=lt(o,n,c,1,t,r,s,e.parentNode,ct,Xt,e,Ut),et())},i(t){if(!n){for(let t=0;t<r.length;t+=1)nt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)ot(o[t]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&v(e)}}}function Xt(t,e){let n,o,s;return o=new Qt({props:{noteBody:e[11].body,id:e[11].id}}),o.$on("delete-note",e[5]),o.$on("display-error",e[8]),{key:t,first:null,c(){n=k(),it(o.$$.fragment),this.first=n},m(t,e){y(t,n,e),at(o,t,e),s=!0},p(t,n){e=t;const s={};2&n&&(s.noteBody=e[11].body),2&n&&(s.id=e[11].id),o.$set(s)},i(t){s||(nt(o.$$.fragment,t),s=!0)},o(t){ot(o.$$.fragment,t),s=!1},d(t){t&&v(n),ut(o,t)}}}function Yt(t){let e;return{c(){e=b("Добавить запись")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function Zt(t){let e,n,o,s,r,c,l,i,a,u,d,f,$,p,g,h,k,C,N,M=t[1]&&Vt(t);return $=new St({props:{classes:"margin-left",placeholder:"Enter card title",value:t[2]}}),$.$on("input",t[9]),g=new Ct({props:{type:"submit",$$slots:{default:[Yt]},$$scope:{ctx:t}}}),g.$on("click",t[4]),{c(){e=w("section"),n=w("div"),o=w("div"),s=w("div"),r=w("span"),c=b(t[0]),l=x(),i=w("span"),i.textContent="✕",a=x(),M&&M.c(),u=x(),d=w("div"),f=w("form"),it($.$$.fragment),p=x(),it(g.$$.fragment),E(r,"class","list-name svelte-as1fmv"),E(i,"class","delete-list svelte-as1fmv"),E(s,"class","name svelte-as1fmv"),E(d,"class","new-note svelte-as1fmv"),E(n,"class","list svelte-as1fmv")},m(h,v){y(h,e,v),m(e,n),m(n,o),m(o,s),m(s,r),m(r,c),m(s,l),m(s,i),m(n,a),M&&M.m(n,null),m(n,u),m(n,d),m(d,f),at($,f,null),m(f,p),at(g,f,null),k=!0,C||(N=_(i,"click",t[6]),C=!0)},p(e,[o]){t=e,(!k||1&o)&&j(c,t[0]),t[1]?M?(M.p(t,o),2&o&&nt(M,1)):(M=Vt(t),M.c(),nt(M,1),M.m(n,u)):M&&(tt(),ot(M,1,1,(()=>{M=null})),et());const s={};4&o&&(s.value=t[2]),$.$set(s);const r={};16384&o&&(r.$$scope={dirty:o,ctx:t}),g.$set(r)},i(t){k||(nt(M),nt($.$$.fragment,t),nt(g.$$.fragment,t),G((()=>{h||(h=rt(e,ht,{delay:50,duration:185,easing:gt},!0)),h.run(1)})),k=!0)},o(t){ot(M),ot($.$$.fragment,t),ot(g.$$.fragment,t),h||(h=rt(e,ht,{delay:50,duration:185,easing:gt},!1)),h.run(0),k=!1},d(t){t&&v(e),M&&M.d(),ut($),ut(g),t&&h&&h.end(),C=!1,N()}}}function te(t,e,n){const o=O();let{id:s}=e,{name:r}=e,c=[],l="";L((()=>{!async function(){const t=await kt(`/list/${s}/notes`);if(!t.success)return o("display-error",t.message),!1;n(1,c=t.notes)}()}));return t.$$set=t=>{"id"in t&&n(7,s=t.id),"name"in t&&n(0,r=t.name)},[r,c,l,o,async function(){const t=await _t("/addNote",{body:l,list_id:s});if(!t.success)return o("display-list-error",t.message),!1;n(1,c=[...c,t.note]),n(2,l="")},async function(t){const e=t.detail;await fetch(`/${s}/deleteNote/${e}`,{method:"DELETE"});const o=c.filter((t=>t.id!==e));n(1,c=o)},function(){o("delete-list",s)},s,t=>o("display-list-error",t.detail),t=>n(2,l=t.target.value)]}class ee extends $t{constructor(t){super(),ft(this,t,te,Zt,c,{id:7,name:0})}}function ne(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function oe(t){let e;return{c(){e=b("Выход")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function se(t){let e,n,o=[],s=new Map,r=t[0];const c=t=>t[9].id;for(let e=0;e<r.length;e+=1){let n=ne(t,r,e),l=c(n);s.set(l,o[e]=re(l,n))}return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=k()},m(t,s){for(let e=0;e<o.length;e+=1)o[e].m(t,s);y(t,e,s),n=!0},p(t,n){21&n&&(r=t[0],tt(),o=lt(o,n,c,1,t,r,s,e.parentNode,ct,re,e,ne),et())},i(t){if(!n){for(let t=0;t<r.length;t+=1)nt(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)ot(o[t]);n=!1},d(t){for(let e=0;e<o.length;e+=1)o[e].d(t);t&&v(e)}}}function re(t,e){let n,o,s;return o=new ee({props:{name:e[9].name,id:e[9].id}}),o.$on("delete-list",e[4]),o.$on("display-list-error",e[6]),{key:t,first:null,c(){n=k(),it(o.$$.fragment),this.first=n},m(t,e){y(t,n,e),at(o,t,e),s=!0},p(t,n){e=t;const s={};1&n&&(s.name=e[9].name),1&n&&(s.id=e[9].id),o.$set(s)},i(t){s||(nt(o.$$.fragment,t),s=!0)},o(t){ot(o.$$.fragment,t),s=!1},d(t){t&&v(n),ut(o,t)}}}function ce(t){let e;return{c(){e=b("Добавить Список")},m(t,n){y(t,e,n)},d(t){t&&v(e)}}}function le(t){let e,n,o,s,r,c,l,i,a,u,d,f,$,p,g,h,b,k;r=new Ct({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),r.$on("click",t[5]);let _=t[0]&&se(t);return d=new St({props:{classes:"margin-left inline longer",placeholder:"Введите название списка",value:t[1]}}),d.$on("input",t[7]),b=new Ct({props:{type:"submit",classes:"inline",$$slots:{default:[ce]},$$scope:{ctx:t}}}),b.$on("click",t[3]),{c(){e=w("div"),n=w("span"),n.textContent="Schedule app",o=x(),s=w("div"),it(r.$$.fragment),c=x(),l=w("div"),_&&_.c(),i=x(),a=w("div"),u=w("form"),it(d.$$.fragment),f=x(),$=w("br"),p=x(),g=w("br"),h=x(),it(b.$$.fragment),E(n,"class","headline svelte-jgdewi"),E(s,"class","logout-button svelte-jgdewi"),E(e,"class","header svelte-jgdewi"),E($,"class","svelte-jgdewi"),E(g,"class","svelte-jgdewi"),E(u,"class","svelte-jgdewi"),E(a,"class","new-list svelte-jgdewi"),E(l,"class","column svelte-jgdewi")},m(t,v){y(t,e,v),m(e,n),m(e,o),m(e,s),at(r,s,null),y(t,c,v),y(t,l,v),_&&_.m(l,null),m(l,i),m(l,a),m(a,u),at(d,u,null),m(u,f),m(u,$),m(u,p),m(u,g),m(u,h),at(b,u,null),k=!0},p(t,[e]){const n={};4096&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n),t[0]?_?(_.p(t,e),1&e&&nt(_,1)):(_=se(t),_.c(),nt(_,1),_.m(l,i)):_&&(tt(),ot(_,1,1,(()=>{_=null})),et());const o={};2&e&&(o.value=t[1]),d.$set(o);const s={};4096&e&&(s.$$scope={dirty:e,ctx:t}),b.$set(s)},i(t){k||(nt(r.$$.fragment,t),nt(_),nt(d.$$.fragment,t),nt(b.$$.fragment,t),k=!0)},o(t){ot(r.$$.fragment,t),ot(_),ot(d.$$.fragment,t),ot(b.$$.fragment,t),k=!1},d(t){t&&v(e),ut(r),t&&v(c),t&&v(l),_&&_.d(),ut(d),ut(b)}}}function ie(t,e,n){const o=O();L((()=>{!async function(){const t=await kt("/lists");n(0,s=t.lists)}()}));let s=[],r="";return[s,r,o,async function(){const t=await _t("/addList",{name:r});if(!t.success)return o("display-error",t.message),!1;n(0,s=[...s,t.list]),n(1,r="")},async function(t){const e=t.detail,r=await fetch(`/deleteList/${e}`,{method:"DELETE"}),c=await r.json();if(!c.success)return o("display-error",c.message),!1;const l=s.filter((t=>t.id!==e));n(0,s=l)},async function(){o("logout-user");const t=await fetch("/logout");await t.json()},t=>{o("display-error",t.detail)},t=>n(1,r=t.target.value)]}class ae extends $t{constructor(t){super(),ft(this,t,ie,le,c,{})}}function ue(e){let n;return{c(){n=w("div")},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}function de(e){let n,o;return n=new ae({}),n.$on("logout-user",e[3]),n.$on("display-error",e[4]),{c(){it(n.$$.fragment)},m(t,e){at(n,t,e),o=!0},p:t,i(t){o||(nt(n.$$.fragment,t),o=!0)},o(t){ot(n.$$.fragment,t),o=!1},d(t){ut(n,t)}}}function fe(e){let n,o;return n=new zt({}),n.$on("login-user",e[5]),n.$on("display-error",e[4]),{c(){it(n.$$.fragment)},m(t,e){at(n,t,e),o=!0},p:t,i(t){o||(nt(n.$$.fragment,t),o=!0)},o(t){ot(n.$$.fragment,t),o=!1},d(t){ut(n,t)}}}function $e(t){let e,n,o,s,r;const c=[fe,de,ue],l=[];function i(t,e){return 0==t[2]?0:t[2]?1:2}return e=i(t),n=l[e]=c[e](t),s=new xt({props:{show:t[1],message:t[0]}}),s.$on("close-error",t[6]),{c(){n.c(),o=x(),it(s.$$.fragment)},m(t,n){l[e].m(t,n),y(t,o,n),at(s,t,n),r=!0},p(t,[r]){let a=e;e=i(t),e===a?l[e].p(t,r):(tt(),ot(l[a],1,1,(()=>{l[a]=null})),et(),n=l[e],n?n.p(t,r):(n=l[e]=c[e](t),n.c()),nt(n,1),n.m(o.parentNode,o));const u={};2&r&&(u.show=t[1]),1&r&&(u.message=t[0]),s.$set(u)},i(t){r||(nt(n),nt(s.$$.fragment,t),r=!0)},o(t){ot(n),ot(s.$$.fragment,t),r=!1},d(t){l[e].d(t),t&&v(o),ut(s,t)}}}function pe(t,e,n){let o,s,r;L((async()=>{const t=await fetch("/checkLogin");(await t.json()).logged_in?n(2,r=!0):n(2,r=!1)}));return[o,s,r,async function(){n(2,r=!1);const t=await fetch("/logout");await t.json()},function(t){n(0,o=t.detail),n(1,s=!0)},t=>n(2,r=t.detail.success),()=>n(1,s=!1)]}return new class extends $t{constructor(t){super(),ft(this,t,pe,$e,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map