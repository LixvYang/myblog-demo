const F1="modulepreload",H1=function(e){return"/"+e},$s={},h=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(a=>{if(a=H1(a),a in $s)return;$s[a]=!0;const s=a.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===a&&(!s||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":F1,s||(u.as="script",u.crossOrigin=""),u.href=a,document.head.appendChild(u),s)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())};function Ba(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const we={},Tn=[],ht=()=>{},z1=()=>!1,G1=/^on[^a-z]/,Rr=e=>G1.test(e),Na=e=>e.startsWith("onUpdate:"),Oe=Object.assign,$a=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},j1=Object.prototype.hasOwnProperty,he=(e,t)=>j1.call(e,t),J=Array.isArray,In=e=>go(e)==="[object Map]",gi=e=>go(e)==="[object Set]",ne=e=>typeof e=="function",me=e=>typeof e=="string",Ma=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",_i=e=>Ae(e)&&ne(e.then)&&ne(e.catch),yi=Object.prototype.toString,go=e=>yi.call(e),U1=e=>go(e).slice(8,-1),Ei=e=>go(e)==="[object Object]",Va=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},K1=/-(\w)/g,lt=_o(e=>e.replace(K1,(t,n)=>n?n.toUpperCase():"")),Y1=/\B([A-Z])/g,fn=_o(e=>e.replace(Y1,"-$1").toLowerCase()),Ar=_o(e=>e.charAt(0).toUpperCase()+e.slice(1)),Bo=_o(e=>e?`on${Ar(e)}`:""),fr=(e,t)=>!Object.is(e,t),to=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ro=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},aa=e=>{const t=parseFloat(e);return isNaN(t)?e:t},q1=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let Ms;const sa=()=>Ms||(Ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fa(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=me(r)?J1(r):Fa(r);if(o)for(const a in o)t[a]=o[a]}return t}else{if(me(e))return e;if(Ae(e))return e}}const W1=/;(?![^(]*\))/g,X1=/:([^]+)/,Z1=/\/\*[^]*?\*\//g;function J1(e){const t={};return e.replace(Z1,"").split(W1).forEach(n=>{if(n){const r=n.split(X1);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ha(e){let t="";if(me(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const r=Ha(e[n]);r&&(t+=r+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Q1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ed=Ba(Q1);function bi(e){return!!e||e===""}const y5=e=>me(e)?e:e==null?"":J(e)||Ae(e)&&(e.toString===yi||!ne(e.toString))?JSON.stringify(e,Si,2):String(e),Si=(e,t)=>t&&t.__v_isRef?Si(e,t.value):In(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:gi(t)?{[`Set(${t.size})`]:[...t.values()]}:Ae(t)&&!J(t)&&!Ei(t)?String(t):t;let We;class td{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function nd(e,t=We){t&&t.active&&t.effects.push(e)}function Ri(){return We}function rd(e){We&&We.cleanups.push(e)}const za=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ai=e=>(e.w&Yt)>0,wi=e=>(e.n&Yt)>0,od=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Yt},ad=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Ai(o)&&!wi(o)?o.delete(e):t[n++]=o,o.w&=~Yt,o.n&=~Yt}t.length=n}},oo=new WeakMap;let rr=0,Yt=1;const la=30;let ft;const sn=Symbol(""),ia=Symbol("");class Ga{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nd(this,r)}run(){if(!this.active)return this.fn();let t=ft,n=Ut;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ft,ft=this,Ut=!0,Yt=1<<++rr,rr<=la?od(this):Vs(this),this.fn()}finally{rr<=la&&ad(this),Yt=1<<--rr,ft=this.parent,Ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Vs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ut=!0;const ki=[];function jn(){ki.push(Ut),Ut=!1}function Un(){const e=ki.pop();Ut=e===void 0?!0:e}function Ye(e,t,n){if(Ut&&ft){let r=oo.get(e);r||oo.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=za()),Ti(o)}}function Ti(e,t){let n=!1;rr<=la?wi(e)||(e.n|=Yt,n=!Ai(e)):n=!e.has(ft),n&&(e.add(ft),ft.deps.push(e))}function Ct(e,t,n,r,o,a){const s=oo.get(e);if(!s)return;let l=[];if(t==="clear")l=[...s.values()];else if(n==="length"&&J(e)){const c=Number(r);s.forEach((u,d)=>{(d==="length"||d>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(s.get(n)),t){case"add":J(e)?Va(n)&&l.push(s.get("length")):(l.push(s.get(sn)),In(e)&&l.push(s.get(ia)));break;case"delete":J(e)||(l.push(s.get(sn)),In(e)&&l.push(s.get(ia)));break;case"set":In(e)&&l.push(s.get(sn));break}if(l.length===1)l[0]&&ca(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);ca(za(c))}}function ca(e,t){const n=J(e)?e:[...e];for(const r of n)r.computed&&Fs(r);for(const r of n)r.computed||Fs(r)}function Fs(e,t){(e!==ft||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function sd(e,t){var n;return(n=oo.get(e))==null?void 0:n.get(t)}const ld=Ba("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ma)),id=ja(),cd=ja(!1,!0),ud=ja(!0),Hs=dd();function dd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ue(this);for(let a=0,s=this.length;a<s;a++)Ye(r,"get",a+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(ue)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){jn();const r=ue(this)[t].apply(this,n);return Un(),r}}),e}function pd(e){const t=ue(this);return Ye(t,"has",e),t.hasOwnProperty(e)}function ja(e=!1,t=!1){return function(r,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&a===(e?t?Id:Di:t?Ci:Li).get(r))return r;const s=J(r);if(!e){if(s&&he(Hs,o))return Reflect.get(Hs,o,a);if(o==="hasOwnProperty")return pd}const l=Reflect.get(r,o,a);return(Ma(o)?Ii.has(o):ld(o))||(e||Ye(r,"get",o),t)?l:Be(l)?s&&Va(o)?l:l.value:Ae(l)?e?vn(l):Kn(l):l}}const fd=Pi(),vd=Pi(!0);function Pi(e=!1){return function(n,r,o,a){let s=n[r];if(Nn(s)&&Be(s)&&!Be(o))return!1;if(!e&&(!ao(o)&&!Nn(o)&&(s=ue(s),o=ue(o)),!J(n)&&Be(s)&&!Be(o)))return s.value=o,!0;const l=J(n)&&Va(r)?Number(r)<n.length:he(n,r),c=Reflect.set(n,r,o,a);return n===ue(a)&&(l?fr(o,s)&&Ct(n,"set",r,o):Ct(n,"add",r,o)),c}}function hd(e,t){const n=he(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ct(e,"delete",t,void 0),r}function md(e,t){const n=Reflect.has(e,t);return(!Ma(t)||!Ii.has(t))&&Ye(e,"has",t),n}function gd(e){return Ye(e,"iterate",J(e)?"length":sn),Reflect.ownKeys(e)}const Oi={get:id,set:fd,deleteProperty:hd,has:md,ownKeys:gd},_d={get:ud,set(e,t){return!0},deleteProperty(e,t){return!0}},yd=Oe({},Oi,{get:cd,set:vd}),Ua=e=>e,yo=e=>Reflect.getPrototypeOf(e);function Fr(e,t,n=!1,r=!1){e=e.__v_raw;const o=ue(e),a=ue(t);n||(t!==a&&Ye(o,"get",t),Ye(o,"get",a));const{has:s}=yo(o),l=r?Ua:n?qa:vr;if(s.call(o,t))return l(e.get(t));if(s.call(o,a))return l(e.get(a));e!==o&&e.get(t)}function Hr(e,t=!1){const n=this.__v_raw,r=ue(n),o=ue(e);return t||(e!==o&&Ye(r,"has",e),Ye(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function zr(e,t=!1){return e=e.__v_raw,!t&&Ye(ue(e),"iterate",sn),Reflect.get(e,"size",e)}function zs(e){e=ue(e);const t=ue(this);return yo(t).has.call(t,e)||(t.add(e),Ct(t,"add",e,e)),this}function Gs(e,t){t=ue(t);const n=ue(this),{has:r,get:o}=yo(n);let a=r.call(n,e);a||(e=ue(e),a=r.call(n,e));const s=o.call(n,e);return n.set(e,t),a?fr(t,s)&&Ct(n,"set",e,t):Ct(n,"add",e,t),this}function js(e){const t=ue(this),{has:n,get:r}=yo(t);let o=n.call(t,e);o||(e=ue(e),o=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return o&&Ct(t,"delete",e,void 0),a}function Us(){const e=ue(this),t=e.size!==0,n=e.clear();return t&&Ct(e,"clear",void 0,void 0),n}function Gr(e,t){return function(r,o){const a=this,s=a.__v_raw,l=ue(s),c=t?Ua:e?qa:vr;return!e&&Ye(l,"iterate",sn),s.forEach((u,d)=>r.call(o,c(u),c(d),a))}}function jr(e,t,n){return function(...r){const o=this.__v_raw,a=ue(o),s=In(a),l=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=o[e](...r),d=n?Ua:t?qa:vr;return!t&&Ye(a,"iterate",c?ia:sn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:l?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:this}}function Ed(){const e={get(a){return Fr(this,a)},get size(){return zr(this)},has:Hr,add:zs,set:Gs,delete:js,clear:Us,forEach:Gr(!1,!1)},t={get(a){return Fr(this,a,!1,!0)},get size(){return zr(this)},has:Hr,add:zs,set:Gs,delete:js,clear:Us,forEach:Gr(!1,!0)},n={get(a){return Fr(this,a,!0)},get size(){return zr(this,!0)},has(a){return Hr.call(this,a,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Gr(!0,!1)},r={get(a){return Fr(this,a,!0,!0)},get size(){return zr(this,!0)},has(a){return Hr.call(this,a,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=jr(a,!1,!1),n[a]=jr(a,!0,!1),t[a]=jr(a,!1,!0),r[a]=jr(a,!0,!0)}),[e,n,t,r]}const[bd,Sd,Rd,Ad]=Ed();function Ka(e,t){const n=t?e?Ad:Rd:e?Sd:bd;return(r,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(he(n,o)&&o in r?n:r,o,a)}const wd={get:Ka(!1,!1)},kd={get:Ka(!1,!0)},Td={get:Ka(!0,!1)},Li=new WeakMap,Ci=new WeakMap,Di=new WeakMap,Id=new WeakMap;function Pd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Od(e){return e.__v_skip||!Object.isExtensible(e)?0:Pd(U1(e))}function Kn(e){return Nn(e)?e:Ya(e,!1,Oi,wd,Li)}function Ld(e){return Ya(e,!1,yd,kd,Ci)}function vn(e){return Ya(e,!0,_d,Td,Di)}function Ya(e,t,n,r,o){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const s=Od(e);if(s===0)return e;const l=new Proxy(e,s===2?r:n);return o.set(e,l),l}function Pn(e){return Nn(e)?Pn(e.__v_raw):!!(e&&e.__v_isReactive)}function Nn(e){return!!(e&&e.__v_isReadonly)}function ao(e){return!!(e&&e.__v_isShallow)}function xi(e){return Pn(e)||Nn(e)}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Bi(e){return ro(e,"__v_skip",!0),e}const vr=e=>Ae(e)?Kn(e):e,qa=e=>Ae(e)?vn(e):e;function Wa(e){Ut&&ft&&(e=ue(e),Ti(e.dep||(e.dep=za())))}function Xa(e,t){e=ue(e);const n=e.dep;n&&ca(n)}function Be(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Ni(e,!1)}function Le(e){return Ni(e,!0)}function Ni(e,t){return Be(e)?e:new Cd(e,t)}class Cd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ue(t),this._value=n?t:vr(t)}get value(){return Wa(this),this._value}set value(t){const n=this.__v_isShallow||ao(t)||Nn(t);t=n?t:ue(t),fr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vr(t),Xa(this))}}function ln(e){return Be(e)?e.value:e}const Dd={get:(e,t,n)=>ln(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Be(o)&&!Be(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function $i(e){return Pn(e)?e:new Proxy(e,Dd)}class xd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Wa(this),()=>Xa(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Bd(e){return new xd(e)}class Nd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return sd(ue(this._object),this._key)}}class $d{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Yn(e,t,n){return Be(e)?e:ne(e)?new $d(e):Ae(e)&&arguments.length>1?Md(e,t,n):H(e)}function Md(e,t,n){const r=e[t];return Be(r)?r:new Nd(e,t,n)}class Vd{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ga(t,()=>{this._dirty||(this._dirty=!0,Xa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=ue(this);return Wa(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Fd(e,t,n=!1){let r,o;const a=ne(e);return a?(r=e,o=ht):(r=e.get,o=e.set),new Vd(r,o,a||!o,n)}function Kt(e,t,n,r){let o;try{o=r?e(...r):e()}catch(a){wr(a,t,n)}return o}function st(e,t,n,r){if(ne(e)){const a=Kt(e,t,n,r);return a&&_i(a)&&a.catch(s=>{wr(s,t,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(st(e[a],t,n,r));return o}function wr(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,l=n;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,s,l)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){Kt(c,null,10,[e,s,l]);return}}Hd(e,n,o,r)}function Hd(e,t,n,r=!0){console.error(e)}let hr=!1,ua=!1;const Ve=[];let At=0;const On=[];let Lt=null,nn=0;const Mi=Promise.resolve();let Za=null;function hn(e){const t=Za||Mi;return e?t.then(this?e.bind(this):e):t}function zd(e){let t=At+1,n=Ve.length;for(;t<n;){const r=t+n>>>1;mr(Ve[r])<e?t=r+1:n=r}return t}function Eo(e){(!Ve.length||!Ve.includes(e,hr&&e.allowRecurse?At+1:At))&&(e.id==null?Ve.push(e):Ve.splice(zd(e.id),0,e),Vi())}function Vi(){!hr&&!ua&&(ua=!0,Za=Mi.then(Fi))}function Gd(e){const t=Ve.indexOf(e);t>At&&Ve.splice(t,1)}function jd(e){J(e)?On.push(...e):(!Lt||!Lt.includes(e,e.allowRecurse?nn+1:nn))&&On.push(e),Vi()}function Ks(e,t=hr?At+1:0){for(;t<Ve.length;t++){const n=Ve[t];n&&n.pre&&(Ve.splice(t,1),t--,n())}}function so(e){if(On.length){const t=[...new Set(On)];if(On.length=0,Lt){Lt.push(...t);return}for(Lt=t,Lt.sort((n,r)=>mr(n)-mr(r)),nn=0;nn<Lt.length;nn++)Lt[nn]();Lt=null,nn=0}}const mr=e=>e.id==null?1/0:e.id,Ud=(e,t)=>{const n=mr(e)-mr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Fi(e){ua=!1,hr=!0,Ve.sort(Ud);const t=ht;try{for(At=0;At<Ve.length;At++){const n=Ve[At];n&&n.active!==!1&&Kt(n,null,14)}}finally{At=0,Ve.length=0,so(),hr=!1,Za=null,(Ve.length||On.length)&&Fi()}}function Kd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||we;let o=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:p,trim:f}=r[d]||we;f&&(o=n.map(v=>me(v)?v.trim():v)),p&&(o=n.map(aa))}let l,c=r[l=Bo(t)]||r[l=Bo(lt(t))];!c&&a&&(c=r[l=Bo(fn(t))]),c&&st(c,e,6,o);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,st(u,e,6,o)}}function Hi(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const a=e.emits;let s={},l=!1;if(!ne(e)){const c=u=>{const d=Hi(u,t,!0);d&&(l=!0,Oe(s,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(Ae(e)&&r.set(e,null),null):(J(a)?a.forEach(c=>s[c]=null):Oe(s,a),Ae(e)&&r.set(e,s),s)}function bo(e,t){return!e||!Rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,fn(t))||he(e,t))}let $e=null,So=null;function lo(e){const t=$e;return $e=e,So=e&&e.type.__scopeId||null,t}function E5(e){So=e}function b5(){So=null}function Yd(e,t=$e,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&ol(-1);const a=lo(t);let s;try{s=e(...o)}finally{lo(a),r._d&&ol(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function No(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:a,propsOptions:[s],slots:l,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:v,ctx:y,inheritAttrs:R}=e;let A,g;const E=lo(e);try{if(n.shapeFlag&4){const x=o||r;A=pt(d.call(x,x,p,a,v,f,y)),g=c}else{const x=t;A=pt(x.length>1?x(a,{attrs:c,slots:l,emit:u}):x(a,null)),g=t.props?c:qd(c)}}catch(x){ir.length=0,wr(x,e,1),A=Ie(Je)}let D=A;if(g&&R!==!1){const x=Object.keys(g),{shapeFlag:U}=D;x.length&&U&7&&(s&&x.some(Na)&&(g=Wd(g,s)),D=qt(D,g))}return n.dirs&&(D=qt(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),A=D,lo(E),A}const qd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rr(n))&&((t||(t={}))[n]=e[n]);return t},Wd=(e,t)=>{const n={};for(const r in e)(!Na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Xd(e,t,n){const{props:r,children:o,component:a}=e,{props:s,children:l,patchFlag:c}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ys(r,s,u):!!s;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(s[f]!==r[f]&&!bo(u,f))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===s?!1:r?s?Ys(r,s,u):!0:!!s;return!1}function Ys(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const a=r[o];if(t[a]!==e[a]&&!bo(n,a))return!0}return!1}function Zd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Jd=e=>e.__isSuspense;function zi(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):jd(e)}function Qd(e,t){return Ja(e,null,t)}const Ur={};function ie(e,t,n){return Ja(e,t,n)}function Ja(e,t,{immediate:n,deep:r,flush:o,onTrack:a,onTrigger:s}=we){var l;const c=Ri()===((l=xe)==null?void 0:l.scope)?xe:null;let u,d=!1,p=!1;if(Be(e)?(u=()=>e.value,d=ao(e)):Pn(e)?(u=()=>e,r=!0):J(e)?(p=!0,d=e.some(x=>Pn(x)||ao(x)),u=()=>e.map(x=>{if(Be(x))return x.value;if(Pn(x))return an(x);if(ne(x))return Kt(x,c,2)})):ne(e)?t?u=()=>Kt(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return f&&f(),st(e,c,3,[v])}:u=ht,t&&r){const x=u;u=()=>an(x())}let f,v=x=>{f=E.onStop=()=>{Kt(x,c,4)}},y;if(Vn)if(v=ht,t?n&&st(t,c,3,[u(),p?[]:void 0,v]):u(),o==="sync"){const x=K0();y=x.__watcherHandles||(x.__watcherHandles=[])}else return ht;let R=p?new Array(e.length).fill(Ur):Ur;const A=()=>{if(E.active)if(t){const x=E.run();(r||d||(p?x.some((U,C)=>fr(U,R[C])):fr(x,R)))&&(f&&f(),st(t,c,3,[x,R===Ur?void 0:p&&R[0]===Ur?[]:R,v]),R=x)}else E.run()};A.allowRecurse=!!t;let g;o==="sync"?g=A:o==="post"?g=()=>Ue(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),g=()=>Eo(A));const E=new Ga(u,g);t?n?A():R=E.run():o==="post"?Ue(E.run.bind(E),c&&c.suspense):E.run();const D=()=>{E.stop(),c&&c.scope&&$a(c.scope.effects,E)};return y&&y.push(D),D}function e0(e,t,n){const r=this.proxy,o=me(e)?e.includes(".")?Gi(r,e):()=>r[e]:e.bind(r,r);let a;ne(t)?a=t:(a=t.handler,n=t);const s=xe;Mn(this);const l=Ja(o,a.bind(r),n);return s?Mn(s):cn(),l}function Gi(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function an(e,t){if(!Ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Be(e))an(e.value,t);else if(J(e))for(let n=0;n<e.length;n++)an(e[n],t);else if(gi(e)||In(e))e.forEach(n=>{an(n,t)});else if(Ei(e))for(const n in e)an(e[n],t);return e}function S5(e,t){const n=$e;if(n===null)return e;const r=wo(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[s,l,c,u=we]=t[a];s&&(ne(s)&&(s={mounted:s,updated:s}),s.deep&&an(l),o.push({dir:s,instance:r,value:l,oldValue:void 0,arg:c,modifiers:u}))}return e}function Rt(e,t,n,r){const o=e.dirs,a=t&&t.dirs;for(let s=0;s<o.length;s++){const l=o[s];a&&(l.oldValue=a[s].value);let c=l.dir[r];c&&(jn(),st(c,n,8,[e.el,l,e,t]),Un())}}function ji(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return pe(()=>{e.isMounted=!0}),es(()=>{e.isUnmounting=!0}),e}const rt=[Function,Array],Ui={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},t0={name:"BaseTransition",props:Ui,setup(e,{slots:t}){const n=Wn(),r=ji();let o;return()=>{const a=t.default&&Qa(t.default(),!0);if(!a||!a.length)return;let s=a[0];if(a.length>1){for(const R of a)if(R.type!==Je){s=R;break}}const l=ue(e),{mode:c}=l;if(r.isLeaving)return $o(s);const u=qs(s);if(!u)return $o(s);const d=gr(u,l,r,n);_r(u,d);const p=n.subTree,f=p&&qs(p);let v=!1;const{getTransitionKey:y}=u.type;if(y){const R=y();o===void 0?o=R:R!==o&&(o=R,v=!0)}if(f&&f.type!==Je&&(!rn(u,f)||v)){const R=gr(f,l,r,n);if(_r(f,R),c==="out-in")return r.isLeaving=!0,R.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},$o(s);c==="in-out"&&u.type!==Je&&(R.delayLeave=(A,g,E)=>{const D=Ki(r,f);D[String(f.key)]=f,A._leaveCb=()=>{g(),A._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=E})}return s}}},n0=t0;function Ki(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gr(e,t,n,r){const{appear:o,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:R,onAppear:A,onAfterAppear:g,onAppearCancelled:E}=t,D=String(e.key),x=Ki(n,e),U=(I,j)=>{I&&st(I,r,9,j)},C=(I,j)=>{const z=j[1];U(I,j),J(I)?I.every(re=>re.length<=1)&&z():I.length<=1&&z()},W={mode:a,persisted:s,beforeEnter(I){let j=l;if(!n.isMounted)if(o)j=R||l;else return;I._leaveCb&&I._leaveCb(!0);const z=x[D];z&&rn(e,z)&&z.el._leaveCb&&z.el._leaveCb(),U(j,[I])},enter(I){let j=c,z=u,re=d;if(!n.isMounted)if(o)j=A||c,z=g||u,re=E||d;else return;let G=!1;const Q=I._enterCb=K=>{G||(G=!0,K?U(re,[I]):U(z,[I]),W.delayedLeave&&W.delayedLeave(),I._enterCb=void 0)};j?C(j,[I,Q]):Q()},leave(I,j){const z=String(e.key);if(I._enterCb&&I._enterCb(!0),n.isUnmounting)return j();U(p,[I]);let re=!1;const G=I._leaveCb=Q=>{re||(re=!0,j(),Q?U(y,[I]):U(v,[I]),I._leaveCb=void 0,x[z]===e&&delete x[z])};x[z]=e,f?C(f,[I,G]):G()},clone(I){return gr(I,t,n,r)}};return W}function $o(e){if(kr(e))return e=qt(e),e.children=null,e}function qs(e){return kr(e)?e.children?e.children[0]:void 0:e}function _r(e,t){e.shapeFlag&6&&e.component?_r(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Qa(e,t=!1,n){let r=[],o=0;for(let a=0;a<e.length;a++){let s=e[a];const l=n==null?s.key:String(n)+String(s.key!=null?s.key:a);s.type===He?(s.patchFlag&128&&o++,r=r.concat(Qa(s.children,t,l))):(t||s.type!==Je)&&r.push(l!=null?qt(s,{key:l}):s)}if(o>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}function B(e,t){return ne(e)?(()=>Oe({name:e.name},t,{setup:e}))():e}const Ln=e=>!!e.type.__asyncLoader;function w(e){ne(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:o=200,timeout:a,suspensible:s=!0,onError:l}=e;let c=null,u,d=0;const p=()=>(d++,c=null,f()),f=()=>{let v;return c||(v=c=t().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),l)return new Promise((R,A)=>{l(y,()=>R(p()),()=>A(y),d+1)});throw y}).then(y=>v!==c&&c?c:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),u=y,y)))};return B({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return u},setup(){const v=xe;if(u)return()=>Mo(u,v);const y=E=>{c=null,wr(E,v,13,!r)};if(s&&v.suspense||Vn)return f().then(E=>()=>Mo(E,v)).catch(E=>(y(E),()=>r?Ie(r,{error:E}):null));const R=H(!1),A=H(),g=H(!!o);return o&&setTimeout(()=>{g.value=!1},o),a!=null&&setTimeout(()=>{if(!R.value&&!A.value){const E=new Error(`Async component timed out after ${a}ms.`);y(E),A.value=E}},a),f().then(()=>{R.value=!0,v.parent&&kr(v.parent.vnode)&&Eo(v.parent.update)}).catch(E=>{y(E),A.value=E}),()=>{if(R.value&&u)return Mo(u,v);if(A.value&&r)return Ie(r,{error:A.value});if(n&&!g.value)return Ie(n)}}})}function Mo(e,t){const{ref:n,props:r,children:o,ce:a}=t.vnode,s=Ie(e,r,o);return s.ref=n,s.ce=a,delete t.vnode.ce,s}const kr=e=>e.type.__isKeepAlive;function r0(e,t){Yi(e,"a",t)}function o0(e,t){Yi(e,"da",t)}function Yi(e,t,n=xe){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ro(t,r,n),n){let o=n.parent;for(;o&&o.parent;)kr(o.parent.vnode)&&a0(r,t,n,o),o=o.parent}}function a0(e,t,n,r){const o=Ro(t,e,r,!0);qn(()=>{$a(r[t],o)},n)}function Ro(e,t,n=xe,r=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;jn(),Mn(n);const l=st(t,n,e,s);return cn(),Un(),l});return r?o.unshift(a):o.push(a),a}}const Dt=e=>(t,n=xe)=>(!Vn||e==="sp")&&Ro(e,(...r)=>t(...r),n),s0=Dt("bm"),pe=Dt("m"),l0=Dt("bu"),qi=Dt("u"),es=Dt("bum"),qn=Dt("um"),i0=Dt("sp"),c0=Dt("rtg"),u0=Dt("rtc");function d0(e,t=xe){Ro("ec",e,t)}const Wi="components";function Ze(e,t){return f0(Wi,e,!0,t)||e}const p0=Symbol.for("v-ndc");function f0(e,t,n=!0,r=!1){const o=$e||xe;if(o){const a=o.type;if(e===Wi){const l=G0(a,!1);if(l&&(l===t||l===lt(t)||l===Ar(lt(t))))return a}const s=Ws(o[e]||a[e],t)||Ws(o.appContext[e],t);return!s&&r?a:s}}function Ws(e,t){return e&&(e[t]||e[lt(t)]||e[Ar(lt(t))])}function R5(e,t,n,r){let o;const a=n&&n[r];if(J(e)||me(e)){o=new Array(e.length);for(let s=0,l=e.length;s<l;s++)o[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,a&&a[s])}else if(Ae(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>t(s,l,void 0,a&&a[l]));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,c=s.length;l<c;l++){const u=s[l];o[l]=t(e[u],u,l,a&&a[l])}}else o=[];return n&&(n[r]=o),o}function A5(e,t,n={},r,o){if($e.isCE||$e.parent&&Ln($e.parent)&&$e.parent.isCE)return t!=="default"&&(n.name=t),Ie("slot",n,r&&r());let a=e[t];a&&a._c&&(a._d=!1),ac();const s=a&&Xi(a(n)),l=lc(He,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),a&&a._c&&(a._d=!0),l}function Xi(e){return e.some(t=>po(t)?!(t.type===Je||t.type===He&&!Xi(t.children)):!0)?e:null}const da=e=>e?dc(e)?wo(e)||e.proxy:da(e.parent):null,sr=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>da(e.parent),$root:e=>da(e.root),$emit:e=>e.emit,$options:e=>ts(e),$forceUpdate:e=>e.f||(e.f=()=>Eo(e.update)),$nextTick:e=>e.n||(e.n=hn.bind(e.proxy)),$watch:e=>e0.bind(e)}),Vo=(e,t)=>e!==we&&!e.__isScriptSetup&&he(e,t),v0={get({_:e},t){const{ctx:n,setupState:r,data:o,props:a,accessCache:s,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const v=s[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(Vo(r,t))return s[t]=1,r[t];if(o!==we&&he(o,t))return s[t]=2,o[t];if((u=e.propsOptions[0])&&he(u,t))return s[t]=3,a[t];if(n!==we&&he(n,t))return s[t]=4,n[t];pa&&(s[t]=0)}}const d=sr[t];let p,f;if(d)return t==="$attrs"&&Ye(e,"get",t),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==we&&he(n,t))return s[t]=4,n[t];if(f=c.config.globalProperties,he(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:a}=e;return Vo(o,t)?(o[t]=n,!0):r!==we&&he(r,t)?(r[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:a}},s){let l;return!!n[s]||e!==we&&he(e,s)||Vo(t,s)||(l=a[0])&&he(l,s)||he(r,s)||he(sr,s)||he(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xs(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let pa=!0;function h0(e){const t=ts(e),n=e.proxy,r=e.ctx;pa=!1,t.beforeCreate&&Zs(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:s,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:v,updated:y,activated:R,deactivated:A,beforeDestroy:g,beforeUnmount:E,destroyed:D,unmounted:x,render:U,renderTracked:C,renderTriggered:W,errorCaptured:I,serverPrefetch:j,expose:z,inheritAttrs:re,components:G,directives:Q,filters:K}=t;if(u&&m0(u,r,null),s)for(const _e in s){const te=s[_e];ne(te)&&(r[_e]=te.bind(n))}if(o){const _e=o.call(n,n);Ae(_e)&&(e.data=Kn(_e))}if(pa=!0,a)for(const _e in a){const te=a[_e],ct=ne(te)?te.bind(n,n):ne(te.get)?te.get.bind(n,n):ht,bt=!ne(te)&&ne(te.set)?te.set.bind(n):ht,je=S({get:ct,set:bt});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>je.value,set:Pe=>je.value=Pe})}if(l)for(const _e in l)Zi(l[_e],r,n,_e);if(c){const _e=ne(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(te=>{mt(te,_e[te])})}d&&Zs(d,e,"c");function oe(_e,te){J(te)?te.forEach(ct=>_e(ct.bind(n))):te&&_e(te.bind(n))}if(oe(s0,p),oe(pe,f),oe(l0,v),oe(qi,y),oe(r0,R),oe(o0,A),oe(d0,I),oe(u0,C),oe(c0,W),oe(es,E),oe(qn,x),oe(i0,j),J(z))if(z.length){const _e=e.exposed||(e.exposed={});z.forEach(te=>{Object.defineProperty(_e,te,{get:()=>n[te],set:ct=>n[te]=ct})})}else e.exposed||(e.exposed={});U&&e.render===ht&&(e.render=U),re!=null&&(e.inheritAttrs=re),G&&(e.components=G),Q&&(e.directives=Q)}function m0(e,t,n=ht){J(e)&&(e=fa(e));for(const r in e){const o=e[r];let a;Ae(o)?"default"in o?a=de(o.from||r,o.default,!0):a=de(o.from||r):a=de(o),Be(a)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:s=>a.value=s}):t[r]=a}}function Zs(e,t,n){st(J(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,r){const o=r.includes(".")?Gi(n,r):()=>n[r];if(me(e)){const a=t[e];ne(a)&&ie(o,a)}else if(ne(e))ie(o,e.bind(n));else if(Ae(e))if(J(e))e.forEach(a=>Zi(a,t,n,r));else{const a=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(a)&&ie(o,a,e)}}function ts(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,l=a.get(t);let c;return l?c=l:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(u=>io(c,u,s,!0)),io(c,t,s)),Ae(t)&&a.set(t,c),c}function io(e,t,n,r=!1){const{mixins:o,extends:a}=t;a&&io(e,a,n,!0),o&&o.forEach(s=>io(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const l=g0[s]||n&&n[s];e[s]=l?l(e[s],t[s]):t[s]}return e}const g0={data:Js,props:Qs,emits:Qs,methods:or,computed:or,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:or,directives:or,watch:y0,provide:Js,inject:_0};function Js(e,t){return t?e?function(){return Oe(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function _0(e,t){return or(fa(e),fa(t))}function fa(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Fe(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?Oe(Object.create(null),e,t):t}function Qs(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:Oe(Object.create(null),Xs(e),Xs(t??{})):t}function y0(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const r in t)n[r]=Fe(e[r],t[r]);return n}function Ji(){return{app:null,config:{isNativeTag:z1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E0=0;function b0(e,t){return function(r,o=null){ne(r)||(r=Oe({},r)),o!=null&&!Ae(o)&&(o=null);const a=Ji(),s=new Set;let l=!1;const c=a.app={_uid:E0++,_component:r,_props:o,_container:null,_context:a,_instance:null,version:Y0,get config(){return a.config},set config(u){},use(u,...d){return s.has(u)||(u&&ne(u.install)?(s.add(u),u.install(c,...d)):ne(u)&&(s.add(u),u(c,...d))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,d){return d?(a.components[u]=d,c):a.components[u]},directive(u,d){return d?(a.directives[u]=d,c):a.directives[u]},mount(u,d,p){if(!l){const f=Ie(r,o);return f.appContext=a,d&&t?t(f,u):e(f,u,p),l=!0,c._container=u,u.__vue_app__=c,wo(f.component)||f.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return a.provides[u]=d,c},runWithContext(u){co=c;try{return u()}finally{co=null}}};return c}}let co=null;function mt(e,t){if(xe){let n=xe.provides;const r=xe.parent&&xe.parent.provides;r===n&&(n=xe.provides=Object.create(r)),n[e]=t}}function de(e,t,n=!1){const r=xe||$e;if(r||co){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:co._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ne(t)?t.call(r&&r.proxy):t}}function S0(e,t,n,r=!1){const o={},a={};ro(a,Ao,1),e.propsDefaults=Object.create(null),Qi(e,t,o,a);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=r?o:Ld(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function R0(e,t,n,r){const{props:o,attrs:a,vnode:{patchFlag:s}}=e,l=ue(o),[c]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(bo(e.emitsOptions,f))continue;const v=t[f];if(c)if(he(a,f))v!==a[f]&&(a[f]=v,u=!0);else{const y=lt(f);o[y]=va(c,l,y,v,e,!1)}else v!==a[f]&&(a[f]=v,u=!0)}}}else{Qi(e,t,o,a)&&(u=!0);let d;for(const p in l)(!t||!he(t,p)&&((d=fn(p))===p||!he(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(o[p]=va(c,l,p,void 0,e,!0)):delete o[p]);if(a!==l)for(const p in a)(!t||!he(t,p))&&(delete a[p],u=!0)}u&&Ct(e,"set","$attrs")}function Qi(e,t,n,r){const[o,a]=e.propsOptions;let s=!1,l;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let d;o&&he(o,d=lt(c))?!a||!a.includes(d)?n[d]=u:(l||(l={}))[d]=u:bo(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,s=!0)}if(a){const c=ue(n),u=l||we;for(let d=0;d<a.length;d++){const p=a[d];n[p]=va(o,c,p,u[p],e,!he(u,p))}}return s}function va(e,t,n,r,o,a){const s=e[n];if(s!=null){const l=he(s,"default");if(l&&r===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&ne(c)){const{propsDefaults:u}=o;n in u?r=u[n]:(Mn(o),r=u[n]=c.call(null,t),cn())}else r=c}s[0]&&(a&&!l?r=!1:s[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function ec(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,s={},l=[];let c=!1;if(!ne(e)){const d=p=>{c=!0;const[f,v]=ec(p,t,!0);Oe(s,f),v&&l.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!c)return Ae(e)&&r.set(e,Tn),Tn;if(J(a))for(let d=0;d<a.length;d++){const p=lt(a[d]);el(p)&&(s[p]=we)}else if(a)for(const d in a){const p=lt(d);if(el(p)){const f=a[d],v=s[p]=J(f)||ne(f)?{type:f}:Oe({},f);if(v){const y=rl(Boolean,v.type),R=rl(String,v.type);v[0]=y>-1,v[1]=R<0||y<R,(y>-1||he(v,"default"))&&l.push(p)}}}const u=[s,l];return Ae(e)&&r.set(e,u),u}function el(e){return e[0]!=="$"}function tl(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function nl(e,t){return tl(e)===tl(t)}function rl(e,t){return J(t)?t.findIndex(n=>nl(n,e)):ne(t)&&nl(t,e)?0:-1}const tc=e=>e[0]==="_"||e==="$stable",ns=e=>J(e)?e.map(pt):[pt(e)],A0=(e,t,n)=>{if(t._n)return t;const r=Yd((...o)=>ns(t(...o)),n);return r._c=!1,r},nc=(e,t,n)=>{const r=e._ctx;for(const o in e){if(tc(o))continue;const a=e[o];if(ne(a))t[o]=A0(o,a,r);else if(a!=null){const s=ns(a);t[o]=()=>s}}},rc=(e,t)=>{const n=ns(t);e.slots.default=()=>n},w0=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ue(t),ro(t,"_",n)):nc(t,e.slots={})}else e.slots={},t&&rc(e,t);ro(e.slots,Ao,1)},k0=(e,t,n)=>{const{vnode:r,slots:o}=e;let a=!0,s=we;if(r.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:(Oe(o,t),!n&&l===1&&delete o._):(a=!t.$stable,nc(t,o)),s=t}else t&&(rc(e,t),s={default:1});if(a)for(const l in o)!tc(l)&&!(l in s)&&delete o[l]};function uo(e,t,n,r,o=!1){if(J(e)){e.forEach((f,v)=>uo(f,t&&(J(t)?t[v]:t),n,r,o));return}if(Ln(r)&&!o)return;const a=r.shapeFlag&4?wo(r.component)||r.component.proxy:r.el,s=o?null:a,{i:l,r:c}=e,u=t&&t.r,d=l.refs===we?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(me(u)?(d[u]=null,he(p,u)&&(p[u]=null)):Be(u)&&(u.value=null)),ne(c))Kt(c,l,12,[s,d]);else{const f=me(c),v=Be(c);if(f||v){const y=()=>{if(e.f){const R=f?he(p,c)?p[c]:d[c]:c.value;o?J(R)&&$a(R,a):J(R)?R.includes(a)||R.push(a):f?(d[c]=[a],he(p,c)&&(p[c]=d[c])):(c.value=[a],e.k&&(d[e.k]=c.value))}else f?(d[c]=s,he(p,c)&&(p[c]=s)):v&&(c.value=s,e.k&&(d[e.k]=s))};s?(y.id=-1,Ue(y,n)):y()}}}let $t=!1;const Kr=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",Yr=e=>e.nodeType===8;function T0(e){const{mt:t,p:n,o:{patchProp:r,createText:o,nextSibling:a,parentNode:s,remove:l,insert:c,createComment:u}}=e,d=(g,E)=>{if(!E.hasChildNodes()){n(null,g,E),so(),E._vnode=g;return}$t=!1,p(E.firstChild,g,null,null,null),so(),E._vnode=g,$t&&console.error("Hydration completed but contains mismatches.")},p=(g,E,D,x,U,C=!1)=>{const W=Yr(g)&&g.data==="[",I=()=>R(g,E,D,x,U,W),{type:j,ref:z,shapeFlag:re,patchFlag:G}=E;let Q=g.nodeType;E.el=g,G===-2&&(C=!1,E.dynamicChildren=null);let K=null;switch(j){case $n:Q!==3?E.children===""?(c(E.el=o(""),s(g),g),K=g):K=I():(g.data!==E.children&&($t=!0,g.data=E.children),K=a(g));break;case Je:Q!==8||W?K=I():K=a(g);break;case lr:if(W&&(g=a(g),Q=g.nodeType),Q===1||Q===3){K=g;const Te=!E.children.length;for(let oe=0;oe<E.staticCount;oe++)Te&&(E.children+=K.nodeType===1?K.outerHTML:K.data),oe===E.staticCount-1&&(E.anchor=K),K=a(K);return W?a(K):K}else I();break;case He:W?K=y(g,E,D,x,U,C):K=I();break;default:if(re&1)Q!==1||E.type.toLowerCase()!==g.tagName.toLowerCase()?K=I():K=f(g,E,D,x,U,C);else if(re&6){E.slotScopeIds=U;const Te=s(g);if(t(E,Te,null,D,x,Kr(Te),C),K=W?A(g):a(g),K&&Yr(K)&&K.data==="teleport end"&&(K=a(K)),Ln(E)){let oe;W?(oe=Ie(He),oe.anchor=K?K.previousSibling:Te.lastChild):oe=g.nodeType===3?uc(""):Ie("div"),oe.el=g,E.component.subTree=oe}}else re&64?Q!==8?K=I():K=E.type.hydrate(g,E,D,x,U,C,e,v):re&128&&(K=E.type.hydrate(g,E,D,x,Kr(s(g)),U,C,e,p))}return z!=null&&uo(z,null,x,E),K},f=(g,E,D,x,U,C)=>{C=C||!!E.dynamicChildren;const{type:W,props:I,patchFlag:j,shapeFlag:z,dirs:re}=E,G=W==="input"&&re||W==="option";if(G||j!==-1){if(re&&Rt(E,null,D,"created"),I)if(G||!C||j&48)for(const K in I)(G&&K.endsWith("value")||Rr(K)&&!ar(K))&&r(g,K,null,I[K],!1,void 0,D);else I.onClick&&r(g,"onClick",null,I.onClick,!1,void 0,D);let Q;if((Q=I&&I.onVnodeBeforeMount)&&ot(Q,D,E),re&&Rt(E,null,D,"beforeMount"),((Q=I&&I.onVnodeMounted)||re)&&zi(()=>{Q&&ot(Q,D,E),re&&Rt(E,null,D,"mounted")},x),z&16&&!(I&&(I.innerHTML||I.textContent))){let K=v(g.firstChild,E,g,D,x,U,C);for(;K;){$t=!0;const Te=K;K=K.nextSibling,l(Te)}}else z&8&&g.textContent!==E.children&&($t=!0,g.textContent=E.children)}return g.nextSibling},v=(g,E,D,x,U,C,W)=>{W=W||!!E.dynamicChildren;const I=E.children,j=I.length;for(let z=0;z<j;z++){const re=W?I[z]:I[z]=pt(I[z]);if(g)g=p(g,re,x,U,C,W);else{if(re.type===$n&&!re.children)continue;$t=!0,n(null,re,D,null,x,U,Kr(D),C)}}return g},y=(g,E,D,x,U,C)=>{const{slotScopeIds:W}=E;W&&(U=U?U.concat(W):W);const I=s(g),j=v(a(g),E,I,D,x,U,C);return j&&Yr(j)&&j.data==="]"?a(E.anchor=j):($t=!0,c(E.anchor=u("]"),I,j),j)},R=(g,E,D,x,U,C)=>{if($t=!0,E.el=null,C){const j=A(g);for(;;){const z=a(g);if(z&&z!==j)l(z);else break}}const W=a(g),I=s(g);return l(g),n(null,E,I,W,D,x,Kr(I),U),W},A=g=>{let E=0;for(;g;)if(g=a(g),g&&Yr(g)&&(g.data==="["&&E++,g.data==="]")){if(E===0)return a(g);E--}return g};return[d,p]}const Ue=zi;function I0(e){return P0(e,T0)}function P0(e,t){const n=sa();n.__VUE__=!0;const{insert:r,remove:o,patchProp:a,createElement:s,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:v=ht,insertStaticContent:y}=e,R=(m,_,b,k=null,P=null,O=null,V=!1,N=null,M=!!_.dynamicChildren)=>{if(m===_)return;m&&!rn(m,_)&&(k=T(m),Pe(m,P,O,!0),m=null),_.patchFlag===-2&&(M=!1,_.dynamicChildren=null);const{type:L,ref:X,shapeFlag:Y}=_;switch(L){case $n:A(m,_,b,k);break;case Je:g(m,_,b,k);break;case lr:m==null&&E(_,b,k,V);break;case He:G(m,_,b,k,P,O,V,N,M);break;default:Y&1?U(m,_,b,k,P,O,V,N,M):Y&6?Q(m,_,b,k,P,O,V,N,M):(Y&64||Y&128)&&L.process(m,_,b,k,P,O,V,N,M,$)}X!=null&&P&&uo(X,m&&m.ref,O,_||m,!_)},A=(m,_,b,k)=>{if(m==null)r(_.el=l(_.children),b,k);else{const P=_.el=m.el;_.children!==m.children&&u(P,_.children)}},g=(m,_,b,k)=>{m==null?r(_.el=c(_.children||""),b,k):_.el=m.el},E=(m,_,b,k)=>{[m.el,m.anchor]=y(m.children,_,b,k,m.el,m.anchor)},D=({el:m,anchor:_},b,k)=>{let P;for(;m&&m!==_;)P=f(m),r(m,b,k),m=P;r(_,b,k)},x=({el:m,anchor:_})=>{let b;for(;m&&m!==_;)b=f(m),o(m),m=b;o(_)},U=(m,_,b,k,P,O,V,N,M)=>{V=V||_.type==="svg",m==null?C(_,b,k,P,O,V,N,M):j(m,_,P,O,V,N,M)},C=(m,_,b,k,P,O,V,N)=>{let M,L;const{type:X,props:Y,shapeFlag:Z,transition:ee,dirs:ae}=m;if(M=m.el=s(m.type,O,Y&&Y.is,Y),Z&8?d(M,m.children):Z&16&&I(m.children,M,null,k,P,O&&X!=="foreignObject",V,N),ae&&Rt(m,null,k,"created"),W(M,m,m.scopeId,V,k),Y){for(const be in Y)be!=="value"&&!ar(be)&&a(M,be,null,Y[be],O,m.children,k,P,Ce);"value"in Y&&a(M,"value",null,Y.value),(L=Y.onVnodeBeforeMount)&&ot(L,k,m)}ae&&Rt(m,null,k,"beforeMount");const Re=(!P||P&&!P.pendingBranch)&&ee&&!ee.persisted;Re&&ee.beforeEnter(M),r(M,_,b),((L=Y&&Y.onVnodeMounted)||Re||ae)&&Ue(()=>{L&&ot(L,k,m),Re&&ee.enter(M),ae&&Rt(m,null,k,"mounted")},P)},W=(m,_,b,k,P)=>{if(b&&v(m,b),k)for(let O=0;O<k.length;O++)v(m,k[O]);if(P){let O=P.subTree;if(_===O){const V=P.vnode;W(m,V,V.scopeId,V.slotScopeIds,P.parent)}}},I=(m,_,b,k,P,O,V,N,M=0)=>{for(let L=M;L<m.length;L++){const X=m[L]=N?zt(m[L]):pt(m[L]);R(null,X,_,b,k,P,O,V,N)}},j=(m,_,b,k,P,O,V)=>{const N=_.el=m.el;let{patchFlag:M,dynamicChildren:L,dirs:X}=_;M|=m.patchFlag&16;const Y=m.props||we,Z=_.props||we;let ee;b&&en(b,!1),(ee=Z.onVnodeBeforeUpdate)&&ot(ee,b,_,m),X&&Rt(_,m,b,"beforeUpdate"),b&&en(b,!0);const ae=P&&_.type!=="foreignObject";if(L?z(m.dynamicChildren,L,N,b,k,ae,O):V||te(m,_,N,null,b,k,ae,O,!1),M>0){if(M&16)re(N,_,Y,Z,b,k,P);else if(M&2&&Y.class!==Z.class&&a(N,"class",null,Z.class,P),M&4&&a(N,"style",Y.style,Z.style,P),M&8){const Re=_.dynamicProps;for(let be=0;be<Re.length;be++){const De=Re[be],ut=Y[De],gn=Z[De];(gn!==ut||De==="value")&&a(N,De,ut,gn,P,m.children,b,k,Ce)}}M&1&&m.children!==_.children&&d(N,_.children)}else!V&&L==null&&re(N,_,Y,Z,b,k,P);((ee=Z.onVnodeUpdated)||X)&&Ue(()=>{ee&&ot(ee,b,_,m),X&&Rt(_,m,b,"updated")},k)},z=(m,_,b,k,P,O,V)=>{for(let N=0;N<_.length;N++){const M=m[N],L=_[N],X=M.el&&(M.type===He||!rn(M,L)||M.shapeFlag&70)?p(M.el):b;R(M,L,X,null,k,P,O,V,!0)}},re=(m,_,b,k,P,O,V)=>{if(b!==k){if(b!==we)for(const N in b)!ar(N)&&!(N in k)&&a(m,N,b[N],null,V,_.children,P,O,Ce);for(const N in k){if(ar(N))continue;const M=k[N],L=b[N];M!==L&&N!=="value"&&a(m,N,L,M,V,_.children,P,O,Ce)}"value"in k&&a(m,"value",b.value,k.value)}},G=(m,_,b,k,P,O,V,N,M)=>{const L=_.el=m?m.el:l(""),X=_.anchor=m?m.anchor:l("");let{patchFlag:Y,dynamicChildren:Z,slotScopeIds:ee}=_;ee&&(N=N?N.concat(ee):ee),m==null?(r(L,b,k),r(X,b,k),I(_.children,b,X,P,O,V,N,M)):Y>0&&Y&64&&Z&&m.dynamicChildren?(z(m.dynamicChildren,Z,b,P,O,V,N),(_.key!=null||P&&_===P.subTree)&&oc(m,_,!0)):te(m,_,b,X,P,O,V,N,M)},Q=(m,_,b,k,P,O,V,N,M)=>{_.slotScopeIds=N,m==null?_.shapeFlag&512?P.ctx.activate(_,b,k,V,M):K(_,b,k,P,O,V,M):Te(m,_,M)},K=(m,_,b,k,P,O,V)=>{const N=m.component=M0(m,k,P);if(kr(m)&&(N.ctx.renderer=$),V0(N),N.asyncDep){if(P&&P.registerDep(N,oe),!m.el){const M=N.subTree=Ie(Je);g(null,M,_,b)}return}oe(N,m,_,b,P,O,V)},Te=(m,_,b)=>{const k=_.component=m.component;if(Xd(m,_,b))if(k.asyncDep&&!k.asyncResolved){_e(k,_,b);return}else k.next=_,Gd(k.update),k.update();else _.el=m.el,k.vnode=_},oe=(m,_,b,k,P,O,V)=>{const N=()=>{if(m.isMounted){let{next:X,bu:Y,u:Z,parent:ee,vnode:ae}=m,Re=X,be;en(m,!1),X?(X.el=ae.el,_e(m,X,V)):X=ae,Y&&to(Y),(be=X.props&&X.props.onVnodeBeforeUpdate)&&ot(be,ee,X,ae),en(m,!0);const De=No(m),ut=m.subTree;m.subTree=De,R(ut,De,p(ut.el),T(ut),m,P,O),X.el=De.el,Re===null&&Zd(m,De.el),Z&&Ue(Z,P),(be=X.props&&X.props.onVnodeUpdated)&&Ue(()=>ot(be,ee,X,ae),P)}else{let X;const{el:Y,props:Z}=_,{bm:ee,m:ae,parent:Re}=m,be=Ln(_);if(en(m,!1),ee&&to(ee),!be&&(X=Z&&Z.onVnodeBeforeMount)&&ot(X,Re,_),en(m,!0),Y&&fe){const De=()=>{m.subTree=No(m),fe(Y,m.subTree,m,P,null)};be?_.type.__asyncLoader().then(()=>!m.isUnmounted&&De()):De()}else{const De=m.subTree=No(m);R(null,De,b,k,m,P,O),_.el=De.el}if(ae&&Ue(ae,P),!be&&(X=Z&&Z.onVnodeMounted)){const De=_;Ue(()=>ot(X,Re,De),P)}(_.shapeFlag&256||Re&&Ln(Re.vnode)&&Re.vnode.shapeFlag&256)&&m.a&&Ue(m.a,P),m.isMounted=!0,_=b=k=null}},M=m.effect=new Ga(N,()=>Eo(L),m.scope),L=m.update=()=>M.run();L.id=m.uid,en(m,!0),L()},_e=(m,_,b)=>{_.component=m;const k=m.vnode.props;m.vnode=_,m.next=null,R0(m,_.props,k,b),k0(m,_.children,b),jn(),Ks(),Un()},te=(m,_,b,k,P,O,V,N,M=!1)=>{const L=m&&m.children,X=m?m.shapeFlag:0,Y=_.children,{patchFlag:Z,shapeFlag:ee}=_;if(Z>0){if(Z&128){bt(L,Y,b,k,P,O,V,N,M);return}else if(Z&256){ct(L,Y,b,k,P,O,V,N,M);return}}ee&8?(X&16&&Ce(L,P,O),Y!==L&&d(b,Y)):X&16?ee&16?bt(L,Y,b,k,P,O,V,N,M):Ce(L,P,O,!0):(X&8&&d(b,""),ee&16&&I(Y,b,k,P,O,V,N,M))},ct=(m,_,b,k,P,O,V,N,M)=>{m=m||Tn,_=_||Tn;const L=m.length,X=_.length,Y=Math.min(L,X);let Z;for(Z=0;Z<Y;Z++){const ee=_[Z]=M?zt(_[Z]):pt(_[Z]);R(m[Z],ee,b,null,P,O,V,N,M)}L>X?Ce(m,P,O,!0,!1,Y):I(_,b,k,P,O,V,N,M,Y)},bt=(m,_,b,k,P,O,V,N,M)=>{let L=0;const X=_.length;let Y=m.length-1,Z=X-1;for(;L<=Y&&L<=Z;){const ee=m[L],ae=_[L]=M?zt(_[L]):pt(_[L]);if(rn(ee,ae))R(ee,ae,b,null,P,O,V,N,M);else break;L++}for(;L<=Y&&L<=Z;){const ee=m[Y],ae=_[Z]=M?zt(_[Z]):pt(_[Z]);if(rn(ee,ae))R(ee,ae,b,null,P,O,V,N,M);else break;Y--,Z--}if(L>Y){if(L<=Z){const ee=Z+1,ae=ee<X?_[ee].el:k;for(;L<=Z;)R(null,_[L]=M?zt(_[L]):pt(_[L]),b,ae,P,O,V,N,M),L++}}else if(L>Z)for(;L<=Y;)Pe(m[L],P,O,!0),L++;else{const ee=L,ae=L,Re=new Map;for(L=ae;L<=Z;L++){const qe=_[L]=M?zt(_[L]):pt(_[L]);qe.key!=null&&Re.set(qe.key,L)}let be,De=0;const ut=Z-ae+1;let gn=!1,xs=0;const Qn=new Array(ut);for(L=0;L<ut;L++)Qn[L]=0;for(L=ee;L<=Y;L++){const qe=m[L];if(De>=ut){Pe(qe,P,O,!0);continue}let St;if(qe.key!=null)St=Re.get(qe.key);else for(be=ae;be<=Z;be++)if(Qn[be-ae]===0&&rn(qe,_[be])){St=be;break}St===void 0?Pe(qe,P,O,!0):(Qn[St-ae]=L+1,St>=xs?xs=St:gn=!0,R(qe,_[St],b,null,P,O,V,N,M),De++)}const Bs=gn?O0(Qn):Tn;for(be=Bs.length-1,L=ut-1;L>=0;L--){const qe=ae+L,St=_[qe],Ns=qe+1<X?_[qe+1].el:k;Qn[L]===0?R(null,St,b,Ns,P,O,V,N,M):gn&&(be<0||L!==Bs[be]?je(St,b,Ns,2):be--)}}},je=(m,_,b,k,P=null)=>{const{el:O,type:V,transition:N,children:M,shapeFlag:L}=m;if(L&6){je(m.component.subTree,_,b,k);return}if(L&128){m.suspense.move(_,b,k);return}if(L&64){V.move(m,_,b,$);return}if(V===He){r(O,_,b);for(let Y=0;Y<M.length;Y++)je(M[Y],_,b,k);r(m.anchor,_,b);return}if(V===lr){D(m,_,b);return}if(k!==2&&L&1&&N)if(k===0)N.beforeEnter(O),r(O,_,b),Ue(()=>N.enter(O),P);else{const{leave:Y,delayLeave:Z,afterLeave:ee}=N,ae=()=>r(O,_,b),Re=()=>{Y(O,()=>{ae(),ee&&ee()})};Z?Z(O,ae,Re):Re()}else r(O,_,b)},Pe=(m,_,b,k=!1,P=!1)=>{const{type:O,props:V,ref:N,children:M,dynamicChildren:L,shapeFlag:X,patchFlag:Y,dirs:Z}=m;if(N!=null&&uo(N,null,b,m,!0),X&256){_.ctx.deactivate(m);return}const ee=X&1&&Z,ae=!Ln(m);let Re;if(ae&&(Re=V&&V.onVnodeBeforeUnmount)&&ot(Re,_,m),X&6)Bt(m.component,b,k);else{if(X&128){m.suspense.unmount(b,k);return}ee&&Rt(m,null,_,"beforeUnmount"),X&64?m.type.remove(m,_,b,P,$,k):L&&(O!==He||Y>0&&Y&64)?Ce(L,_,b,!1,!0):(O===He&&Y&384||!P&&X&16)&&Ce(M,_,b),k&&kt(m)}(ae&&(Re=V&&V.onVnodeUnmounted)||ee)&&Ue(()=>{Re&&ot(Re,_,m),ee&&Rt(m,null,_,"unmounted")},b)},kt=m=>{const{type:_,el:b,anchor:k,transition:P}=m;if(_===He){nt(b,k);return}if(_===lr){x(m);return}const O=()=>{o(b),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:V,delayLeave:N}=P,M=()=>V(b,O);N?N(m.el,O,M):M()}else O()},nt=(m,_)=>{let b;for(;m!==_;)b=f(m),o(m),m=b;o(_)},Bt=(m,_,b)=>{const{bum:k,scope:P,update:O,subTree:V,um:N}=m;k&&to(k),P.stop(),O&&(O.active=!1,Pe(V,m,_,b)),N&&Ue(N,_),Ue(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Ce=(m,_,b,k=!1,P=!1,O=0)=>{for(let V=O;V<m.length;V++)Pe(m[V],_,b,k,P)},T=m=>m.shapeFlag&6?T(m.component.subTree):m.shapeFlag&128?m.suspense.next():f(m.anchor||m.el),F=(m,_,b)=>{m==null?_._vnode&&Pe(_._vnode,null,null,!0):R(_._vnode||null,m,_,null,null,null,b),Ks(),so(),_._vnode=m},$={p:R,um:Pe,m:je,r:kt,mt:K,mc:I,pc:te,pbc:z,n:T,o:e};let q,fe;return t&&([q,fe]=t($)),{render:F,hydrate:q,createApp:b0(F,q)}}function en({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oc(e,t,n=!1){const r=e.children,o=t.children;if(J(r)&&J(o))for(let a=0;a<r.length;a++){const s=r[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=zt(o[a]),l.el=s.el),n||oc(s,l)),l.type===$n&&(l.el=s.el)}}function O0(e){const t=e.slice(),n=[0];let r,o,a,s,l;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(a=0,s=n.length-1;a<s;)l=a+s>>1,e[n[l]]<u?a=l+1:s=l;u<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}const L0=e=>e.__isTeleport,He=Symbol.for("v-fgt"),$n=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),lr=Symbol.for("v-stc"),ir=[];let vt=null;function ac(e=!1){ir.push(vt=e?null:[])}function C0(){ir.pop(),vt=ir[ir.length-1]||null}let yr=1;function ol(e){yr+=e}function sc(e){return e.dynamicChildren=yr>0?vt||Tn:null,C0(),yr>0&&vt&&vt.push(e),e}function w5(e,t,n,r,o,a){return sc(cc(e,t,n,r,o,a,!0))}function lc(e,t,n,r,o){return sc(Ie(e,t,n,r,o,!0))}function po(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Ao="__vInternal",ic=({key:e})=>e??null,no=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||Be(e)||ne(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function cc(e,t=null,n=null,r=0,o=null,a=e===He?0:1,s=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ic(t),ref:t&&no(t),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:$e};return l?(rs(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),yr>0&&!s&&vt&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&vt.push(c),c}const Ie=D0;function D0(e,t=null,n=null,r=0,o=null,a=!1){if((!e||e===p0)&&(e=Je),po(e)){const l=qt(e,t,!0);return n&&rs(l,n),yr>0&&!a&&vt&&(l.shapeFlag&6?vt[vt.indexOf(e)]=l:vt.push(l)),l.patchFlag|=-2,l}if(j0(e)&&(e=e.__vccOpts),t){t=x0(t);let{class:l,style:c}=t;l&&!me(l)&&(t.class=Ha(l)),Ae(c)&&(xi(c)&&!J(c)&&(c=Oe({},c)),t.style=Fa(c))}const s=me(e)?1:Jd(e)?128:L0(e)?64:Ae(e)?4:ne(e)?2:0;return cc(e,t,n,r,o,s,a,!0)}function x0(e){return e?xi(e)||Ao in e?Oe({},e):e:null}function qt(e,t,n=!1){const{props:r,ref:o,patchFlag:a,children:s}=e,l=t?B0(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ic(l),ref:t&&t.ref?n&&o?J(o)?o.concat(no(t)):[o,no(t)]:no(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function uc(e=" ",t=0){return Ie($n,null,e,t)}function k5(e,t){const n=Ie(lr,null,e);return n.staticCount=t,n}function T5(e="",t=!1){return t?(ac(),lc(Je,null,e)):Ie(Je,null,e)}function pt(e){return e==null||typeof e=="boolean"?Ie(Je):J(e)?Ie(He,null,e.slice()):typeof e=="object"?zt(e):Ie($n,null,String(e))}function zt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function rs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),rs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Ao in t)?t._ctx=$e:o===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[uc(t)]):n=8);e.children=t,e.shapeFlag|=n}function B0(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Ha([t.class,r.class]));else if(o==="style")t.style=Fa([t.style,r.style]);else if(Rr(o)){const a=t[o],s=r[o];s&&a!==s&&!(J(a)&&a.includes(s))&&(t[o]=a?[].concat(a,s):s)}else o!==""&&(t[o]=r[o])}return t}function ot(e,t,n,r=null){st(e,t,7,[n,r])}const N0=Ji();let $0=0;function M0(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||N0,a={uid:$0++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ec(r,o),emitsOptions:Hi(r,o),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Kd.bind(null,a),e.ce&&e.ce(a),a}let xe=null;const Wn=()=>xe||$e;let os,_n,al="__VUE_INSTANCE_SETTERS__";(_n=sa()[al])||(_n=sa()[al]=[]),_n.push(e=>xe=e),os=e=>{_n.length>1?_n.forEach(t=>t(e)):_n[0](e)};const Mn=e=>{os(e),e.scope.on()},cn=()=>{xe&&xe.scope.off(),os(null)};function dc(e){return e.vnode.shapeFlag&4}let Vn=!1;function V0(e,t=!1){Vn=t;const{props:n,children:r}=e.vnode,o=dc(e);S0(e,n,o,t),w0(e,r);const a=o?F0(e,t):void 0;return Vn=!1,a}function F0(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Bi(new Proxy(e.ctx,v0));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?z0(e):null;Mn(e),jn();const a=Kt(r,e,0,[e.props,o]);if(Un(),cn(),_i(a)){if(a.then(cn,cn),t)return a.then(s=>{sl(e,s,t)}).catch(s=>{wr(s,e,0)});e.asyncDep=a}else sl(e,a,t)}else pc(e,t)}function sl(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=$i(t)),pc(e,n)}let ll;function pc(e,t,n){const r=e.type;if(!e.render){if(!t&&ll&&!r.render){const o=r.template||ts(e).template;if(o){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,u=Oe(Oe({isCustomElement:a,delimiters:l},s),c);r.render=ll(o,u)}}e.render=r.render||ht}Mn(e),jn(),h0(e),Un(),cn()}function H0(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ye(e,"get","$attrs"),t[n]}}))}function z0(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return H0(e)},slots:e.slots,emit:e.emit,expose:t}}function wo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($i(Bi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in sr)return sr[n](e)},has(t,n){return n in t||n in sr}}))}function G0(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function j0(e){return ne(e)&&"__vccOpts"in e}const S=(e,t)=>Fd(e,t,Vn);function i(e,t,n){const r=arguments.length;return r===2?Ae(t)&&!J(t)?po(t)?Ie(e,null,[t]):Ie(e,t):Ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&po(n)&&(n=[n]),Ie(e,t,n))}const U0=Symbol.for("v-scx"),K0=()=>de(U0),Y0="3.3.4",q0="http://www.w3.org/2000/svg",on=typeof document<"u"?document:null,il=on&&on.createElement("template"),W0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?on.createElementNS(q0,e):on.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>on.createTextNode(e),createComment:e=>on.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>on.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,a){const s=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{il.innerHTML=r?`<svg>${e}</svg>`:e;const l=il.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function X0(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Z0(e,t,n){const r=e.style,o=me(n);if(n&&!o){if(t&&!me(t))for(const a in t)n[a]==null&&ha(r,a,"");for(const a in n)ha(r,a,n[a])}else{const a=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const cl=/\s*!important$/;function ha(e,t,n){if(J(n))n.forEach(r=>ha(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=J0(e,t);cl.test(n)?e.setProperty(fn(r),n.replace(cl,""),"important"):e[r]=n}}const ul=["Webkit","Moz","ms"],Fo={};function J0(e,t){const n=Fo[t];if(n)return n;let r=lt(t);if(r!=="filter"&&r in e)return Fo[t]=r;r=Ar(r);for(let o=0;o<ul.length;o++){const a=ul[o]+r;if(a in e)return Fo[t]=a}return t}const dl="http://www.w3.org/1999/xlink";function Q0(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(dl,t.slice(6,t.length)):e.setAttributeNS(dl,t,n);else{const a=ed(t);n==null||a&&!bi(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function e2(e,t,n,r,o,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,a),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=bi(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Sn(e,t,n,r){e.addEventListener(t,n,r)}function t2(e,t,n,r){e.removeEventListener(t,n,r)}function n2(e,t,n,r,o=null){const a=e._vei||(e._vei={}),s=a[t];if(r&&s)s.value=r;else{const[l,c]=r2(t);if(r){const u=a[t]=s2(r,o);Sn(e,l,u,c)}else s&&(t2(e,l,s,c),a[t]=void 0)}}const pl=/(?:Once|Passive|Capture)$/;function r2(e){let t;if(pl.test(e)){t={};let r;for(;r=e.match(pl);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let Ho=0;const o2=Promise.resolve(),a2=()=>Ho||(o2.then(()=>Ho=0),Ho=Date.now());function s2(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(l2(r,n.value),t,5,[r])};return n.value=e,n.attached=a2(),n}function l2(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const fl=/^on[a-z]/,i2=(e,t,n,r,o=!1,a,s,l,c)=>{t==="class"?X0(e,r,o):t==="style"?Z0(e,n,r):Rr(t)?Na(t)||n2(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):c2(e,t,r,o))?e2(e,t,r,a,s,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Q0(e,t,r,o))};function c2(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&fl.test(t)&&ne(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fl.test(t)&&me(n)?!1:t in e}const Mt="transition",er="animation",Wt=(e,{slots:t})=>i(n0,vc(e),t);Wt.displayName="Transition";const fc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},u2=Wt.props=Oe({},Ui,fc),tn=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},vl=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function vc(e){const t={};for(const G in e)G in fc||(t[G]=e[G]);if(e.css===!1)return t;const{name:n="v",type:r,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=s,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,y=d2(o),R=y&&y[0],A=y&&y[1],{onBeforeEnter:g,onEnter:E,onEnterCancelled:D,onLeave:x,onLeaveCancelled:U,onBeforeAppear:C=g,onAppear:W=E,onAppearCancelled:I=D}=t,j=(G,Q,K)=>{Ht(G,Q?d:l),Ht(G,Q?u:s),K&&K()},z=(G,Q)=>{G._isLeaving=!1,Ht(G,p),Ht(G,v),Ht(G,f),Q&&Q()},re=G=>(Q,K)=>{const Te=G?W:E,oe=()=>j(Q,G,K);tn(Te,[Q,oe]),hl(()=>{Ht(Q,G?c:a),It(Q,G?d:l),vl(Te)||ml(Q,r,R,oe)})};return Oe(t,{onBeforeEnter(G){tn(g,[G]),It(G,a),It(G,s)},onBeforeAppear(G){tn(C,[G]),It(G,c),It(G,u)},onEnter:re(!1),onAppear:re(!0),onLeave(G,Q){G._isLeaving=!0;const K=()=>z(G,Q);It(G,p),mc(),It(G,f),hl(()=>{G._isLeaving&&(Ht(G,p),It(G,v),vl(x)||ml(G,r,A,K))}),tn(x,[G,K])},onEnterCancelled(G){j(G,!1),tn(D,[G])},onAppearCancelled(G){j(G,!0),tn(I,[G])},onLeaveCancelled(G){z(G),tn(U,[G])}})}function d2(e){if(e==null)return null;if(Ae(e))return[zo(e.enter),zo(e.leave)];{const t=zo(e);return[t,t]}}function zo(e){return q1(e)}function It(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ht(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function hl(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let p2=0;function ml(e,t,n,r){const o=e._endId=++p2,a=()=>{o===e._endId&&r()};if(n)return setTimeout(a,n);const{type:s,timeout:l,propCount:c}=hc(e,t);if(!s)return r();const u=s+"end";let d=0;const p=()=>{e.removeEventListener(u,f),a()},f=v=>{v.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),e.addEventListener(u,f)}function hc(e,t){const n=window.getComputedStyle(e),r=y=>(n[y]||"").split(", "),o=r(`${Mt}Delay`),a=r(`${Mt}Duration`),s=gl(o,a),l=r(`${er}Delay`),c=r(`${er}Duration`),u=gl(l,c);let d=null,p=0,f=0;t===Mt?s>0&&(d=Mt,p=s,f=a.length):t===er?u>0&&(d=er,p=u,f=c.length):(p=Math.max(s,u),d=p>0?s>u?Mt:er:null,f=d?d===Mt?a.length:c.length:0);const v=d===Mt&&/\b(transform|all)(,|$)/.test(r(`${Mt}Property`).toString());return{type:d,timeout:p,propCount:f,hasTransform:v}}function gl(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>_l(n)+_l(e[r])))}function _l(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function mc(){return document.body.offsetHeight}const gc=new WeakMap,_c=new WeakMap,yc={name:"TransitionGroup",props:Oe({},u2,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Wn(),r=ji();let o,a;return qi(()=>{if(!o.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!_2(o[0].el,n.vnode.el,s))return;o.forEach(h2),o.forEach(m2);const l=o.filter(g2);mc(),l.forEach(c=>{const u=c.el,d=u.style;It(u,s),d.transform=d.webkitTransform=d.transitionDuration="";const p=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",p),u._moveCb=null,Ht(u,s))};u.addEventListener("transitionend",p)})}),()=>{const s=ue(e),l=vc(s);let c=s.tag||He;o=a,a=t.default?Qa(t.default()):[];for(let u=0;u<a.length;u++){const d=a[u];d.key!=null&&_r(d,gr(d,l,r,n))}if(o)for(let u=0;u<o.length;u++){const d=o[u];_r(d,gr(d,l,r,n)),gc.set(d,d.el.getBoundingClientRect())}return Ie(c,null,a)}}},f2=e=>delete e.mode;yc.props;const v2=yc;function h2(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function m2(e){_c.set(e,e.el.getBoundingClientRect())}function g2(e){const t=gc.get(e),n=_c.get(e),r=t.left-n.left,o=t.top-n.top;if(r||o){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${r}px,${o}px)`,a.transitionDuration="0s",e}}function _2(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:a}=hc(r);return o.removeChild(r),a}const yl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>to(t,n):t};function y2(e){e.target.composing=!0}function El(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const I5={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=yl(o);const a=r||o.props&&o.props.type==="number";Sn(e,t?"change":"input",s=>{if(s.target.composing)return;let l=e.value;n&&(l=l.trim()),a&&(l=aa(l)),e._assign(l)}),n&&Sn(e,"change",()=>{e.value=e.value.trim()}),t||(Sn(e,"compositionstart",y2),Sn(e,"compositionend",El),Sn(e,"change",El))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},a){if(e._assign=yl(a),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&aa(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},E2=["ctrl","shift","alt","meta"],b2={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>E2.some(n=>e[`${n}Key`]&&!t.includes(n))},P5=(e,t)=>(n,...r)=>{for(let o=0;o<t.length;o++){const a=b2[t[o]];if(a&&a(n,t))return}return e(n,...r)},S2={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},O5=(e,t)=>n=>{if(!("key"in n))return;const r=fn(n.key);if(t.some(o=>o===r||S2[o]===r))return e(n)},L5={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):tr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),tr(e,!0),r.enter(e)):r.leave(e,()=>{tr(e,!1)}):tr(e,t))},beforeUnmount(e,{value:t}){tr(e,t)}};function tr(e,t){e.style.display=t?e._vod:"none"}const R2=Oe({patchProp:i2},W0);let Go,bl=!1;function A2(){return Go=bl?Go:I0(R2),bl=!0,Go}const w2=(...e)=>{const t=A2().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=k2(r);if(o)return n(o,!0,o instanceof SVGElement)},t};function k2(e){return me(e)?document.querySelector(e):e}const T2={"v-8daa1a0e":()=>h(()=>import("./index.html-6076ba48.js"),[]).then(({data:e})=>e),"v-184f4da6":()=>h(()=>import("./intro.html-628ea06a.js"),[]).then(({data:e})=>e),"v-2e3eac9e":()=>h(()=>import("./slides.html-a343c87a.js"),[]).then(({data:e})=>e),"v-1473bf53":()=>h(()=>import("./index.html-bbde91e0.js"),[]).then(({data:e})=>e),"v-4e65ec78":()=>h(()=>import("./disable.html-5a93f9d0.js"),[]).then(({data:e})=>e),"v-c151bf32":()=>h(()=>import("./encrypt.html-a699c315.js"),[]).then(({data:e})=>e),"v-438ffe52":()=>h(()=>import("./markdown.html-ff8207d3.js"),[]).then(({data:e})=>e),"v-c9afc8f6":()=>h(()=>import("./index.html-15dc4b66.js"),[]).then(({data:e})=>e),"v-47a75f3e":()=>h(()=>import("./Perfect-competition.html-500d0249.js"),[]).then(({data:e})=>e),"v-f880e932":()=>h(()=>import("./2021-What-I-do.html-d3cadf2f.js"),[]).then(({data:e})=>e),"v-46d41fa4":()=>h(()=>import("./Absolutely-Correct.html-295a1e3c.js"),[]).then(({data:e})=>e),"v-537693e6":()=>h(()=>import("./Battle-Internet.html-de6bea0b.js"),[]).then(({data:e})=>e),"v-18d64577":()=>h(()=>import("./I-wrote-a-blockchain-in-160-lines-of-code.html-aa6933b8.js"),[]).then(({data:e})=>e),"v-32bb1c95":()=>h(()=>import("./I-wrote-a-new-App-that-could-help-me-in-immersed.html-20a71679.js"),[]).then(({data:e})=>e),"v-187a439e":()=>h(()=>import("./More-valuable-than-linear-algebra.html-462058b3.js"),[]).then(({data:e})=>e),"v-41dba8b2":()=>h(()=>import("./Protect-yourself.html-8dfc0f08.js"),[]).then(({data:e})=>e),"v-07aa4806":()=>h(()=>import("./be-friends-with-time.html-cb2697be.js"),[]).then(({data:e})=>e),"v-c3854da0":()=>h(()=>import("./cosmic-origin.html-0bb5bee3.js"),[]).then(({data:e})=>e),"v-39ad62d5":()=>h(()=>import("./get-away-wechat.html-5763d245.js"),[]).then(({data:e})=>e),"v-445d1c68":()=>h(()=>import("./learn-again.html-d9802584.js"),[]).then(({data:e})=>e),"v-4447c0de":()=>h(()=>import("./patient-with-develop.html-4cf43bbc.js"),[]).then(({data:e})=>e),"v-a8a9a750":()=>h(()=>import("./run.html-bcffdfb0.js"),[]).then(({data:e})=>e),"v-2b300ac6":()=>h(()=>import("./the-future-of-internet.html-2c484243.js"),[]).then(({data:e})=>e),"v-1f902b80":()=>h(()=>import("./betxin-rules.html-826a09af.js"),[]).then(({data:e})=>e),"v-51ce692c":()=>h(()=>import("./Docker-get-start.html-a1f3f856.js"),[]).then(({data:e})=>e),"v-5b6f1d36":()=>h(()=>import("./get-start-with-c-tcp-program.html-8d5b49d1.js"),[]).then(({data:e})=>e),"v-6e6d9123":()=>h(()=>import("./currency.html-46931cda.js"),[]).then(({data:e})=>e),"v-311bc9d1":()=>h(()=>import("./go-depth.html-a62d9db3.js"),[]).then(({data:e})=>e),"v-0f4688c6":()=>h(()=>import("./top10-sorting.html-9c062752.js"),[]).then(({data:e})=>e),"v-d18eaea2":()=>h(()=>import("./std-bufio.html-e3dc43d4.js"),[]).then(({data:e})=>e),"v-f8bc084e":()=>h(()=>import("./std-context.html-cf471fe9.js"),[]).then(({data:e})=>e),"v-1b84a3fe":()=>h(()=>import("./std-flag.html-9c8b9a4f.js"),[]).then(({data:e})=>e),"v-f68d818a":()=>h(()=>import("./std-fmt.html-f09c8783.js"),[]).then(({data:e})=>e),"v-479dc2e4":()=>h(()=>import("./std-log.html-153859be.js"),[]).then(({data:e})=>e),"v-ea6c58ea":()=>h(()=>import("./std-reflect.html-1464d784.js"),[]).then(({data:e})=>e),"v-3df5533a":()=>h(()=>import("./std-strconv.html-27e620c6.js"),[]).then(({data:e})=>e),"v-7700453d":()=>h(()=>import("./std-time.html-e261ce65.js"),[]).then(({data:e})=>e),"v-ed510016":()=>h(()=>import("./backtrack.html-9596eeba.js"),[]).then(({data:e})=>e),"v-6bd45cce":()=>h(()=>import("./dynamic-programming.html-f30b366c.js"),[]).then(({data:e})=>e),"v-655b0d80":()=>h(()=>import("./gomock-tuto.html-bbc2453e.js"),[]).then(({data:e})=>e),"v-1de1766a":()=>h(()=>import("./offer.html-cfeee7e2.js"),[]).then(({data:e})=>e),"v-56bd5e7e":()=>h(()=>import("./mysql-notes.html-656a1178.js"),[]).then(({data:e})=>e),"v-46709ae2":()=>h(()=>import("./cache-consistency.html-4dea4f24.js"),[]).then(({data:e})=>e),"v-f29e4144":()=>h(()=>import("./datastruct.html-f21acc3b.js"),[]).then(({data:e})=>e),"v-fead0b28":()=>h(()=>import("./redis-note.html-78fc6275.js"),[]).then(({data:e})=>e),"v-29af940e":()=>h(()=>import("./gin-framework-principle.html-fd8ca4a9.js"),[]).then(({data:e})=>e),"v-4427ea5b":()=>h(()=>import("./1.html-ede19e32.js"),[]).then(({data:e})=>e),"v-45dcc2fa":()=>h(()=>import("./2.html-c0125bb9.js"),[]).then(({data:e})=>e),"v-47919b99":()=>h(()=>import("./3.html-92fde2ce.js"),[]).then(({data:e})=>e),"v-49467438":()=>h(()=>import("./4.html-e47c0880.js"),[]).then(({data:e})=>e),"v-3706649a":()=>h(()=>import("./404.html-f04ced3e.js"),[]).then(({data:e})=>e),"v-69a86107":()=>h(()=>import("./index.html-28f6427f.js"),[]).then(({data:e})=>e),"v-e1e3da16":()=>h(()=>import("./index.html-533dd762.js"),[]).then(({data:e})=>e),"v-4ba4912a":()=>h(()=>import("./index.html-a6fa1b37.js"),[]).then(({data:e})=>e),"v-41ad8c23":()=>h(()=>import("./index.html-7d740e07.js"),[]).then(({data:e})=>e),"v-1aaf0020":()=>h(()=>import("./index.html-6bb79537.js"),[]).then(({data:e})=>e),"v-88d61c22":()=>h(()=>import("./index.html-b93f75ba.js"),[]).then(({data:e})=>e),"v-85603d8c":()=>h(()=>import("./index.html-b98900cc.js"),[]).then(({data:e})=>e),"v-2aef844c":()=>h(()=>import("./index.html-bdafc669.js"),[]).then(({data:e})=>e),"v-ec092336":()=>h(()=>import("./index.html-963e7caf.js"),[]).then(({data:e})=>e),"v-5ac20bf9":()=>h(()=>import("./index.html-bdf00eca.js"),[]).then(({data:e})=>e),"v-fb37af2c":()=>h(()=>import("./index.html-4b356d95.js"),[]).then(({data:e})=>e),"v-f9877410":()=>h(()=>import("./index.html-932ed3ab.js"),[]).then(({data:e})=>e),"v-5aa12436":()=>h(()=>import("./index.html-34e64b21.js"),[]).then(({data:e})=>e),"v-2897b160":()=>h(()=>import("./index.html-058c3214.js"),[]).then(({data:e})=>e),"v-368344da":()=>h(()=>import("./index.html-0dfb58c1.js"),[]).then(({data:e})=>e),"v-f96b5d84":()=>h(()=>import("./index.html-147389e1.js"),[]).then(({data:e})=>e),"v-01742aa6":()=>h(()=>import("./index.html-8d71de80.js"),[]).then(({data:e})=>e),"v-7dc9dfbb":()=>h(()=>import("./index.html-c2f746d4.js"),[]).then(({data:e})=>e),"v-7915bbed":()=>h(()=>import("./index.html-65ed4305.js"),[]).then(({data:e})=>e),"v-2d1aaa94":()=>h(()=>import("./index.html-0caf566d.js"),[]).then(({data:e})=>e),"v-ff059b98":()=>h(()=>import("./index.html-0ce04f18.js"),[]).then(({data:e})=>e),"v-561f115c":()=>h(()=>import("./index.html-6f31e80c.js"),[]).then(({data:e})=>e),"v-121f466e":()=>h(()=>import("./index.html-f0189b54.js"),[]).then(({data:e})=>e),"v-4753ec21":()=>h(()=>import("./index.html-4a6904f1.js"),[]).then(({data:e})=>e),"v-b9a4855a":()=>h(()=>import("./index.html-03bf3810.js"),[]).then(({data:e})=>e),"v-5bc93818":()=>h(()=>import("./index.html-e609b71c.js"),[]).then(({data:e})=>e),"v-744d024e":()=>h(()=>import("./index.html-04a11369.js"),[]).then(({data:e})=>e),"v-e52c881c":()=>h(()=>import("./index.html-d1922e1a.js"),[]).then(({data:e})=>e),"v-154dc4c4":()=>h(()=>import("./index.html-c43655ce.js"),[]).then(({data:e})=>e),"v-01560935":()=>h(()=>import("./index.html-b67245ca.js"),[]).then(({data:e})=>e),"v-70677d9e":()=>h(()=>import("./index.html-0c60682a.js"),[]).then(({data:e})=>e),"v-c06a95c0":()=>h(()=>import("./index.html-f9475fdf.js"),[]).then(({data:e})=>e),"v-b6a4f932":()=>h(()=>import("./index.html-66a3434d.js"),[]).then(({data:e})=>e),"v-0d1f4c3c":()=>h(()=>import("./index.html-1356b789.js"),[]).then(({data:e})=>e),"v-7b0b3a14":()=>h(()=>import("./index.html-58ac58da.js"),[]).then(({data:e})=>e),"v-606be265":()=>h(()=>import("./index.html-3a947047.js"),[]).then(({data:e})=>e),"v-1c5eedbf":()=>h(()=>import("./index.html-a3a16301.js"),[]).then(({data:e})=>e),"v-2b6a541e":()=>h(()=>import("./index.html-a20b3126.js"),[]).then(({data:e})=>e),"v-58c21dea":()=>h(()=>import("./index.html-acbf5c91.js"),[]).then(({data:e})=>e),"v-49627fe2":()=>h(()=>import("./index.html-3487908d.js"),[]).then(({data:e})=>e),"v-9cc57efa":()=>h(()=>import("./index.html-8d1151da.js"),[]).then(({data:e})=>e),"v-574eed66":()=>h(()=>import("./index.html-347f8f0d.js"),[]).then(({data:e})=>e),"v-b93724ec":()=>h(()=>import("./index.html-efe63c0e.js"),[]).then(({data:e})=>e),"v-2bdb1026":()=>h(()=>import("./index.html-c53768c0.js"),[]).then(({data:e})=>e),"v-65f5031c":()=>h(()=>import("./index.html-214601b9.js"),[]).then(({data:e})=>e),"v-d293f072":()=>h(()=>import("./index.html-840dc877.js"),[]).then(({data:e})=>e),"v-721aed2b":()=>h(()=>import("./index.html-f6cd9cb5.js"),[]).then(({data:e})=>e),"v-1c5f3310":()=>h(()=>import("./index.html-fa85c0bf.js"),[]).then(({data:e})=>e),"v-3318a379":()=>h(()=>import("./index.html-dba578ae.js"),[]).then(({data:e})=>e),"v-69787d8a":()=>h(()=>import("./index.html-f71b5046.js"),[]).then(({data:e})=>e),"v-e348c378":()=>h(()=>import("./index.html-5677f005.js"),[]).then(({data:e})=>e),"v-000f2cac":()=>h(()=>import("./index.html-171811bf.js"),[]).then(({data:e})=>e),"v-9c48d85a":()=>h(()=>import("./index.html-c45a46d0.js"),[]).then(({data:e})=>e),"v-47e821f5":()=>h(()=>import("./index.html-2c2224f3.js"),[]).then(({data:e})=>e),"v-e9a125fe":()=>h(()=>import("./index.html-f027bd21.js"),[]).then(({data:e})=>e),"v-29324574":()=>h(()=>import("./index.html-20838d5f.js"),[]).then(({data:e})=>e),"v-80e9ca34":()=>h(()=>import("./index.html-9ee7f6ac.js"),[]).then(({data:e})=>e),"v-59ca63e7":()=>h(()=>import("./index.html-f9a72425.js"),[]).then(({data:e})=>e),"v-3d0b43bb":()=>h(()=>import("./index.html-78cdaab1.js"),[]).then(({data:e})=>e),"v-219beb8e":()=>h(()=>import("./index.html-f658f50d.js"),[]).then(({data:e})=>e),"v-6224bc80":()=>h(()=>import("./index.html-6f851208.js"),[]).then(({data:e})=>e),"v-b3067b5c":()=>h(()=>import("./index.html-3d310661.js"),[]).then(({data:e})=>e),"v-40b79b1b":()=>h(()=>import("./index.html-b4429dd6.js"),[]).then(({data:e})=>e),"v-318ed680":()=>h(()=>import("./index.html-20848499.js"),[]).then(({data:e})=>e),"v-53f6d684":()=>h(()=>import("./index.html-89c7041d.js"),[]).then(({data:e})=>e),"v-17bd7e0b":()=>h(()=>import("./index.html-03530d3d.js"),[]).then(({data:e})=>e),"v-6106c001":()=>h(()=>import("./index.html-a4cc3a13.js"),[]).then(({data:e})=>e),"v-0033da0b":()=>h(()=>import("./index.html-379e03c2.js"),[]).then(({data:e})=>e),"v-7b39bf6c":()=>h(()=>import("./index.html-bcaa02ce.js"),[]).then(({data:e})=>e),"v-32017b2c":()=>h(()=>import("./index.html-dcc95bfe.js"),[]).then(({data:e})=>e),"v-46b9d66c":()=>h(()=>import("./index.html-193defc5.js"),[]).then(({data:e})=>e),"v-25e1acb9":()=>h(()=>import("./index.html-c7b91d9d.js"),[]).then(({data:e})=>e),"v-f6aa26dc":()=>h(()=>import("./index.html-457ce6c1.js"),[]).then(({data:e})=>e),"v-28d23657":()=>h(()=>import("./index.html-1d2c3708.js"),[]).then(({data:e})=>e),"v-173e7dbe":()=>h(()=>import("./index.html-4ac0a8de.js"),[]).then(({data:e})=>e),"v-1bee38ca":()=>h(()=>import("./index.html-38a20207.js"),[]).then(({data:e})=>e),"v-b310d59e":()=>h(()=>import("./index.html-d3097db7.js"),[]).then(({data:e})=>e),"v-287f3643":()=>h(()=>import("./index.html-7aeca58b.js"),[]).then(({data:e})=>e)},I2=JSON.parse('{"base":"/","lang":"zh-CN","title":"","description":"","head":[],"locales":{}}');var P2=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),O2=e=>{const t=new Set,n=[];return e.forEach(r=>{const o=P2(r);t.has(o)||(t.add(o),n.push(r))}),n},L2=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,C2=e=>e.startsWith("ftp://"),mn=e=>/^(https?:)?\/\//.test(e),D2=/.md((\?|#).*)?$/,fo=(e,t="/")=>!!(mn(e)||C2(e)||e.startsWith("/")&&!e.startsWith(t)&&!D2.test(e)),Ec=e=>/^mailto:/.test(e),x2=e=>/^tel:/.test(e),Tr=e=>Object.prototype.toString.call(e)==="[object Object]",as=e=>e[e.length-1]==="/"?e.slice(0,-1):e,bc=e=>e[0]==="/"?e.slice(1):e,B2=(e,t)=>{const n=Object.keys(e).sort((r,o)=>{const a=o.split("/").length-r.split("/").length;return a!==0?a:o.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"};const Sc={"v-8daa1a0e":w(()=>h(()=>import("./index.html-3ef207b0.js"),["assets/index.html-3ef207b0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-184f4da6":w(()=>h(()=>import("./intro.html-03b12fa1.js"),["assets/intro.html-03b12fa1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2e3eac9e":w(()=>h(()=>import("./slides.html-cec126b8.js"),["assets/slides.html-cec126b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1473bf53":w(()=>h(()=>import("./index.html-72b77ce8.js"),["assets/index.html-72b77ce8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4e65ec78":w(()=>h(()=>import("./disable.html-4bb51bcc.js"),["assets/disable.html-4bb51bcc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c151bf32":w(()=>h(()=>import("./encrypt.html-1c354699.js"),["assets/encrypt.html-1c354699.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-438ffe52":w(()=>h(()=>import("./markdown.html-c1776077.js"),["assets/markdown.html-c1776077.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c9afc8f6":w(()=>h(()=>import("./index.html-42293e54.js"),["assets/index.html-42293e54.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-47a75f3e":w(()=>h(()=>import("./Perfect-competition.html-463687fc.js"),["assets/Perfect-competition.html-463687fc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f880e932":w(()=>h(()=>import("./2021-What-I-do.html-5949c74c.js"),["assets/2021-What-I-do.html-5949c74c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46d41fa4":w(()=>h(()=>import("./Absolutely-Correct.html-986856c4.js"),["assets/Absolutely-Correct.html-986856c4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-537693e6":w(()=>h(()=>import("./Battle-Internet.html-d3fc3610.js"),["assets/Battle-Internet.html-d3fc3610.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-18d64577":w(()=>h(()=>import("./I-wrote-a-blockchain-in-160-lines-of-code.html-b4af58ae.js"),["assets/I-wrote-a-blockchain-in-160-lines-of-code.html-b4af58ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-32bb1c95":w(()=>h(()=>import("./I-wrote-a-new-App-that-could-help-me-in-immersed.html-44e48c5d.js"),["assets/I-wrote-a-new-App-that-could-help-me-in-immersed.html-44e48c5d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-187a439e":w(()=>h(()=>import("./More-valuable-than-linear-algebra.html-354ba35a.js"),["assets/More-valuable-than-linear-algebra.html-354ba35a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41dba8b2":w(()=>h(()=>import("./Protect-yourself.html-0b57bc67.js"),["assets/Protect-yourself.html-0b57bc67.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-07aa4806":w(()=>h(()=>import("./be-friends-with-time.html-ea5cabf6.js"),["assets/be-friends-with-time.html-ea5cabf6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c3854da0":w(()=>h(()=>import("./cosmic-origin.html-fe725cbd.js"),["assets/cosmic-origin.html-fe725cbd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-39ad62d5":w(()=>h(()=>import("./get-away-wechat.html-d59ec1bd.js"),["assets/get-away-wechat.html-d59ec1bd.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-445d1c68":w(()=>h(()=>import("./learn-again.html-8ba04a63.js"),["assets/learn-again.html-8ba04a63.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4447c0de":w(()=>h(()=>import("./patient-with-develop.html-f468c066.js"),["assets/patient-with-develop.html-f468c066.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-a8a9a750":w(()=>h(()=>import("./run.html-2e942187.js"),["assets/run.html-2e942187.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b300ac6":w(()=>h(()=>import("./the-future-of-internet.html-b84a0a0b.js"),["assets/the-future-of-internet.html-b84a0a0b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1f902b80":w(()=>h(()=>import("./betxin-rules.html-adce2e34.js"),["assets/betxin-rules.html-adce2e34.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-51ce692c":w(()=>h(()=>import("./Docker-get-start.html-0a731854.js"),["assets/Docker-get-start.html-0a731854.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5b6f1d36":w(()=>h(()=>import("./get-start-with-c-tcp-program.html-f3a8997f.js"),["assets/get-start-with-c-tcp-program.html-f3a8997f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6e6d9123":w(()=>h(()=>import("./currency.html-8096dd02.js"),["assets/currency.html-8096dd02.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-311bc9d1":w(()=>h(()=>import("./go-depth.html-b32e04cf.js"),["assets/go-depth.html-b32e04cf.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0f4688c6":w(()=>h(()=>import("./top10-sorting.html-d2108293.js"),["assets/top10-sorting.html-d2108293.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d18eaea2":w(()=>h(()=>import("./std-bufio.html-13bfb899.js"),["assets/std-bufio.html-13bfb899.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f8bc084e":w(()=>h(()=>import("./std-context.html-66167329.js"),["assets/std-context.html-66167329.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1b84a3fe":w(()=>h(()=>import("./std-flag.html-a6691c7a.js"),["assets/std-flag.html-a6691c7a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f68d818a":w(()=>h(()=>import("./std-fmt.html-8e1f9247.js"),["assets/std-fmt.html-8e1f9247.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-479dc2e4":w(()=>h(()=>import("./std-log.html-ba5b39d3.js"),["assets/std-log.html-ba5b39d3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ea6c58ea":w(()=>h(()=>import("./std-reflect.html-3b369e29.js"),["assets/std-reflect.html-3b369e29.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3df5533a":w(()=>h(()=>import("./std-strconv.html-e22f7442.js"),["assets/std-strconv.html-e22f7442.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7700453d":w(()=>h(()=>import("./std-time.html-f2d89653.js"),["assets/std-time.html-f2d89653.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ed510016":w(()=>h(()=>import("./backtrack.html-39612048.js"),["assets/backtrack.html-39612048.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6bd45cce":w(()=>h(()=>import("./dynamic-programming.html-04965673.js"),["assets/dynamic-programming.html-04965673.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-655b0d80":w(()=>h(()=>import("./gomock-tuto.html-a04ca228.js"),["assets/gomock-tuto.html-a04ca228.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1de1766a":w(()=>h(()=>import("./offer.html-74f5a8a0.js"),["assets/offer.html-74f5a8a0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-56bd5e7e":w(()=>h(()=>import("./mysql-notes.html-a4b7553e.js"),["assets/mysql-notes.html-a4b7553e.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46709ae2":w(()=>h(()=>import("./cache-consistency.html-ba57d47f.js"),["assets/cache-consistency.html-ba57d47f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f29e4144":w(()=>h(()=>import("./datastruct.html-966540df.js"),["assets/datastruct.html-966540df.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fead0b28":w(()=>h(()=>import("./redis-note.html-1ca1f447.js"),["assets/redis-note.html-1ca1f447.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29af940e":w(()=>h(()=>import("./gin-framework-principle.html-e4d96fa6.js"),["assets/gin-framework-principle.html-e4d96fa6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4427ea5b":w(()=>h(()=>import("./1.html-d4967375.js"),["assets/1.html-d4967375.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-45dcc2fa":w(()=>h(()=>import("./2.html-60ab43c3.js"),["assets/2.html-60ab43c3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-47919b99":w(()=>h(()=>import("./3.html-b929f973.js"),["assets/3.html-b929f973.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49467438":w(()=>h(()=>import("./4.html-21e9b385.js"),["assets/4.html-21e9b385.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3706649a":w(()=>h(()=>import("./404.html-37422284.js"),["assets/404.html-37422284.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-69a86107":w(()=>h(()=>import("./index.html-ba66d573.js"),["assets/index.html-ba66d573.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e1e3da16":w(()=>h(()=>import("./index.html-bb84e385.js"),["assets/index.html-bb84e385.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4ba4912a":w(()=>h(()=>import("./index.html-b3173f41.js"),["assets/index.html-b3173f41.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-41ad8c23":w(()=>h(()=>import("./index.html-65402d1c.js"),["assets/index.html-65402d1c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1aaf0020":w(()=>h(()=>import("./index.html-d5c18fc9.js"),["assets/index.html-d5c18fc9.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-88d61c22":w(()=>h(()=>import("./index.html-3c2850ad.js"),["assets/index.html-3c2850ad.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-85603d8c":w(()=>h(()=>import("./index.html-c9ec8373.js"),["assets/index.html-c9ec8373.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2aef844c":w(()=>h(()=>import("./index.html-7e4412dc.js"),["assets/index.html-7e4412dc.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ec092336":w(()=>h(()=>import("./index.html-d7dd3641.js"),["assets/index.html-d7dd3641.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5ac20bf9":w(()=>h(()=>import("./index.html-533bafb0.js"),["assets/index.html-533bafb0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-fb37af2c":w(()=>h(()=>import("./index.html-56f7027d.js"),["assets/index.html-56f7027d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f9877410":w(()=>h(()=>import("./index.html-e102a811.js"),["assets/index.html-e102a811.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5aa12436":w(()=>h(()=>import("./index.html-5a34e781.js"),["assets/index.html-5a34e781.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2897b160":w(()=>h(()=>import("./index.html-3465bc98.js"),["assets/index.html-3465bc98.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-368344da":w(()=>h(()=>import("./index.html-84542f37.js"),["assets/index.html-84542f37.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f96b5d84":w(()=>h(()=>import("./index.html-d52880b4.js"),["assets/index.html-d52880b4.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01742aa6":w(()=>h(()=>import("./index.html-642465ea.js"),["assets/index.html-642465ea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7dc9dfbb":w(()=>h(()=>import("./index.html-b9953823.js"),["assets/index.html-b9953823.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7915bbed":w(()=>h(()=>import("./index.html-4e88812d.js"),["assets/index.html-4e88812d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2d1aaa94":w(()=>h(()=>import("./index.html-225abd73.js"),["assets/index.html-225abd73.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-ff059b98":w(()=>h(()=>import("./index.html-2a292b02.js"),["assets/index.html-2a292b02.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-561f115c":w(()=>h(()=>import("./index.html-c6423c36.js"),["assets/index.html-c6423c36.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-121f466e":w(()=>h(()=>import("./index.html-f8998680.js"),["assets/index.html-f8998680.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-4753ec21":w(()=>h(()=>import("./index.html-ea283583.js"),["assets/index.html-ea283583.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b9a4855a":w(()=>h(()=>import("./index.html-8039b5af.js"),["assets/index.html-8039b5af.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-5bc93818":w(()=>h(()=>import("./index.html-9f3c1556.js"),["assets/index.html-9f3c1556.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-744d024e":w(()=>h(()=>import("./index.html-9ed1d464.js"),["assets/index.html-9ed1d464.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e52c881c":w(()=>h(()=>import("./index.html-7622b05d.js"),["assets/index.html-7622b05d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-154dc4c4":w(()=>h(()=>import("./index.html-07a5f007.js"),["assets/index.html-07a5f007.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-01560935":w(()=>h(()=>import("./index.html-c6a2ea9a.js"),["assets/index.html-c6a2ea9a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-70677d9e":w(()=>h(()=>import("./index.html-fcb5a9b2.js"),["assets/index.html-fcb5a9b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-c06a95c0":w(()=>h(()=>import("./index.html-d819cea3.js"),["assets/index.html-d819cea3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b6a4f932":w(()=>h(()=>import("./index.html-630a1926.js"),["assets/index.html-630a1926.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0d1f4c3c":w(()=>h(()=>import("./index.html-82524ff5.js"),["assets/index.html-82524ff5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b0b3a14":w(()=>h(()=>import("./index.html-e7690772.js"),["assets/index.html-e7690772.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-606be265":w(()=>h(()=>import("./index.html-f7f674f0.js"),["assets/index.html-f7f674f0.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c5eedbf":w(()=>h(()=>import("./index.html-4fdbe469.js"),["assets/index.html-4fdbe469.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2b6a541e":w(()=>h(()=>import("./index.html-e5d08f66.js"),["assets/index.html-e5d08f66.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-58c21dea":w(()=>h(()=>import("./index.html-3373b251.js"),["assets/index.html-3373b251.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-49627fe2":w(()=>h(()=>import("./index.html-10928593.js"),["assets/index.html-10928593.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9cc57efa":w(()=>h(()=>import("./index.html-f4fa3cb3.js"),["assets/index.html-f4fa3cb3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-574eed66":w(()=>h(()=>import("./index.html-f32c2935.js"),["assets/index.html-f32c2935.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b93724ec":w(()=>h(()=>import("./index.html-7ea85ec8.js"),["assets/index.html-7ea85ec8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-2bdb1026":w(()=>h(()=>import("./index.html-b1b1de2f.js"),["assets/index.html-b1b1de2f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-65f5031c":w(()=>h(()=>import("./index.html-93508c14.js"),["assets/index.html-93508c14.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-d293f072":w(()=>h(()=>import("./index.html-a4ff6fea.js"),["assets/index.html-a4ff6fea.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-721aed2b":w(()=>h(()=>import("./index.html-2080646d.js"),["assets/index.html-2080646d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1c5f3310":w(()=>h(()=>import("./index.html-468d1175.js"),["assets/index.html-468d1175.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3318a379":w(()=>h(()=>import("./index.html-cebbf13c.js"),["assets/index.html-cebbf13c.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-69787d8a":w(()=>h(()=>import("./index.html-ac053178.js"),["assets/index.html-ac053178.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e348c378":w(()=>h(()=>import("./index.html-f37a6d24.js"),["assets/index.html-f37a6d24.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-000f2cac":w(()=>h(()=>import("./index.html-4b302814.js"),["assets/index.html-4b302814.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-9c48d85a":w(()=>h(()=>import("./index.html-60558891.js"),["assets/index.html-60558891.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-47e821f5":w(()=>h(()=>import("./index.html-5edeb101.js"),["assets/index.html-5edeb101.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-e9a125fe":w(()=>h(()=>import("./index.html-defb63ba.js"),["assets/index.html-defb63ba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-29324574":w(()=>h(()=>import("./index.html-315b26a1.js"),["assets/index.html-315b26a1.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-80e9ca34":w(()=>h(()=>import("./index.html-f729c6b8.js"),["assets/index.html-f729c6b8.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-59ca63e7":w(()=>h(()=>import("./index.html-2779b034.js"),["assets/index.html-2779b034.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-3d0b43bb":w(()=>h(()=>import("./index.html-fc33cf8d.js"),["assets/index.html-fc33cf8d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-219beb8e":w(()=>h(()=>import("./index.html-45580407.js"),["assets/index.html-45580407.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6224bc80":w(()=>h(()=>import("./index.html-06abf0b6.js"),["assets/index.html-06abf0b6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b3067b5c":w(()=>h(()=>import("./index.html-fbd8c5c3.js"),["assets/index.html-fbd8c5c3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-40b79b1b":w(()=>h(()=>import("./index.html-6894d8f6.js"),["assets/index.html-6894d8f6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-318ed680":w(()=>h(()=>import("./index.html-05f6d60d.js"),["assets/index.html-05f6d60d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-53f6d684":w(()=>h(()=>import("./index.html-ced61aba.js"),["assets/index.html-ced61aba.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-17bd7e0b":w(()=>h(()=>import("./index.html-d5ff3b33.js"),["assets/index.html-d5ff3b33.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-6106c001":w(()=>h(()=>import("./index.html-bd0ab2b3.js"),["assets/index.html-bd0ab2b3.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-0033da0b":w(()=>h(()=>import("./index.html-4bc1727f.js"),["assets/index.html-4bc1727f.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-7b39bf6c":w(()=>h(()=>import("./index.html-241582e5.js"),["assets/index.html-241582e5.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-32017b2c":w(()=>h(()=>import("./index.html-ae50628b.js"),["assets/index.html-ae50628b.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-46b9d66c":w(()=>h(()=>import("./index.html-6fc49b27.js"),["assets/index.html-6fc49b27.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-25e1acb9":w(()=>h(()=>import("./index.html-10359b36.js"),["assets/index.html-10359b36.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-f6aa26dc":w(()=>h(()=>import("./index.html-a40ff2ae.js"),["assets/index.html-a40ff2ae.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-28d23657":w(()=>h(()=>import("./index.html-5794ba1d.js"),["assets/index.html-5794ba1d.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-173e7dbe":w(()=>h(()=>import("./index.html-0a5206b2.js"),["assets/index.html-0a5206b2.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-1bee38ca":w(()=>h(()=>import("./index.html-5847691a.js"),["assets/index.html-5847691a.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-b310d59e":w(()=>h(()=>import("./index.html-16d8c6d6.js"),["assets/index.html-16d8c6d6.js","assets/plugin-vue_export-helper-c27b6911.js"])),"v-287f3643":w(()=>h(()=>import("./index.html-fd2ac6a4.js"),["assets/index.html-fd2ac6a4.js","assets/plugin-vue_export-helper-c27b6911.js"]))};var N2=Symbol(""),$2=H(T2),Rc=vn({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),Gt=H(Rc),ce=()=>Gt,Ac=Symbol(""),Ee=()=>{const e=de(Ac);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},wc=Symbol(""),M2=()=>{const e=de(wc);if(!e)throw new Error("usePageHead() is called without provider.");return e},kc=Symbol(""),V2=()=>{const e=de(kc);if(!e)throw new Error("usePageHeadTitle() is called without provider.");return e},Tc=Symbol(""),ss=()=>{const e=de(Tc);if(!e)throw new Error("usePageLang() is called without provider.");return e},Ic=Symbol(""),F2=()=>{const e=de(Ic);if(!e)throw new Error("usePageLayout() is called without provider.");return e},ls=Symbol(""),xt=()=>{const e=de(ls);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},wn=H(I2),Pc=()=>wn,Oc=Symbol(""),ko=()=>{const e=de(Oc);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},H2=Symbol(""),z2="Layout",G2="NotFound",Pt=Kn({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=$2.value[e];return await(t==null?void 0:t())??Rc},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const r=me(t.description)?t.description:n.description,o=[...J(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return O2(o)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let n;if(e.path){const r=e.frontmatter.layout;me(r)?n=r:n=z2}else n=G2;return t[n]},resolveRouteLocale:(e,t)=>B2(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),To=B({name:"ClientOnly",setup(e,t){const n=H(!1);return pe(()=>{n.value=!0}),()=>{var r,o;return n.value?(o=(r=t.slots).default)==null?void 0:o.call(r):null}}}),is=B({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=ce(),n=S(()=>Sc[e.pageKey||t.value.key]);return()=>n.value?i(n.value):i("div","404 Not Found")}}),Et=(e={})=>e,Ge=e=>mn(e)?e:`/${bc(e)}`;const j2={};var ze=Uint8Array,kn=Uint16Array,U2=Int32Array,Lc=new ze([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cc=new ze([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),K2=new ze([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Dc=function(e,t){for(var n=new kn(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var o=new U2(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)o[a]=a-n[r]<<5|r;return{b:n,r:o}},xc=Dc(Lc,2),Bc=xc.b,Y2=xc.r;Bc[28]=258,Y2[258]=28;var q2=Dc(Cc,0),W2=q2.b,ma=new kn(32768);for(var ke=0;ke<32768;++ke){var Vt=(ke&43690)>>1|(ke&21845)<<1;Vt=(Vt&52428)>>2|(Vt&13107)<<2,Vt=(Vt&61680)>>4|(Vt&3855)<<4,ma[ke]=((Vt&65280)>>8|(Vt&255)<<8)>>1}var cr=function(e,t,n){for(var r=e.length,o=0,a=new kn(t);o<r;++o)e[o]&&++a[e[o]-1];var s=new kn(t);for(o=1;o<t;++o)s[o]=s[o-1]+a[o-1]<<1;var l;if(n){l=new kn(1<<t);var c=15-t;for(o=0;o<r;++o)if(e[o])for(var u=o<<4|e[o],d=t-e[o],p=s[e[o]-1]++<<d,f=p|(1<<d)-1;p<=f;++p)l[ma[p]>>c]=u}else for(l=new kn(r),o=0;o<r;++o)e[o]&&(l[o]=ma[s[e[o]-1]++]>>15-e[o]);return l},Ir=new ze(288);for(var ke=0;ke<144;++ke)Ir[ke]=8;for(var ke=144;ke<256;++ke)Ir[ke]=9;for(var ke=256;ke<280;++ke)Ir[ke]=7;for(var ke=280;ke<288;++ke)Ir[ke]=8;var Nc=new ze(32);for(var ke=0;ke<32;++ke)Nc[ke]=5;var X2=cr(Ir,9,1),Z2=cr(Nc,5,1),jo=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},dt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Uo=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},J2=function(e){return(e+7)/8|0},cs=function(e,t,n){(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length);var r=new ze(n-t);return r.set(e.subarray(t,n)),r},Q2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],at=function(e,t,n){var r=new Error(t||Q2[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,at),!n)throw r;return r},ep=function(e,t,n,r){var o=e.length,a=r?r.length:0;if(!o||t.f&&!t.l)return n||new ze(0);var s=!n||t.i!=2,l=t.i;n||(n=new ze(o*3));var c=function(q){var fe=n.length;if(q>fe){var m=new ze(Math.max(fe*2,q));m.set(n),n=m}},u=t.f||0,d=t.p||0,p=t.b||0,f=t.l,v=t.d,y=t.m,R=t.n,A=o*8;do{if(!f){u=dt(e,d,1);var g=dt(e,d+1,3);if(d+=3,g)if(g==1)f=X2,v=Z2,y=9,R=5;else if(g==2){var U=dt(e,d,31)+257,C=dt(e,d+10,15)+4,W=U+dt(e,d+5,31)+1;d+=14;for(var I=new ze(W),j=new ze(19),z=0;z<C;++z)j[K2[z]]=dt(e,d+z*3,7);d+=C*3;for(var re=jo(j),G=(1<<re)-1,Q=cr(j,re,1),z=0;z<W;){var K=Q[dt(e,d,G)];d+=K&15;var E=K>>4;if(E<16)I[z++]=E;else{var Te=0,oe=0;for(E==16?(oe=3+dt(e,d,3),d+=2,Te=I[z-1]):E==17?(oe=3+dt(e,d,7),d+=3):E==18&&(oe=11+dt(e,d,127),d+=7);oe--;)I[z++]=Te}}var _e=I.subarray(0,U),te=I.subarray(U);y=jo(_e),R=jo(te),f=cr(_e,y,1),v=cr(te,R,1)}else at(1);else{var E=J2(d)+4,D=e[E-4]|e[E-3]<<8,x=E+D;if(x>o){l&&at(0);break}s&&c(p+D),n.set(e.subarray(E,x),p),t.b=p+=D,t.p=d=x*8,t.f=u;continue}if(d>A){l&&at(0);break}}s&&c(p+131072);for(var ct=(1<<y)-1,bt=(1<<R)-1,je=d;;je=d){var Te=f[Uo(e,d)&ct],Pe=Te>>4;if(d+=Te&15,d>A){l&&at(0);break}if(Te||at(2),Pe<256)n[p++]=Pe;else if(Pe==256){je=d,f=null;break}else{var kt=Pe-254;if(Pe>264){var z=Pe-257,nt=Lc[z];kt=dt(e,d,(1<<nt)-1)+Bc[z],d+=nt}var Bt=v[Uo(e,d)&bt],Ce=Bt>>4;Bt||at(3),d+=Bt&15;var te=W2[Ce];if(Ce>3){var nt=Cc[Ce];te+=Uo(e,d)&(1<<nt)-1,d+=nt}if(d>A){l&&at(0);break}s&&c(p+131072);var T=p+kt;if(p<te){var F=a-te,$=Math.min(te,T);for(F+p<0&&at(3);p<$;++p)n[p]=r[F+p]}for(;p<T;p+=4)n[p]=n[p-te],n[p+1]=n[p+1-te],n[p+2]=n[p+2-te],n[p+3]=n[p+3-te];p=T}}t.l=f,t.p=je,t.b=p,t.f=u,f&&(u=1,t.m=y,t.d=v,t.n=R)}while(!u);return p==n.length?n:cs(n,0,p)},tp=new ze(0),np=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&at(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&at(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function rp(e,t){return ep(e.subarray(np(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Sl=typeof TextEncoder<"u"&&new TextEncoder,ga=typeof TextDecoder<"u"&&new TextDecoder,op=0;try{ga.decode(tp,{stream:!0}),op=1}catch{}var ap=function(e){for(var t="",n=0;;){var r=e[n++],o=(r>127)+(r>223)+(r>239);if(n+o>e.length)return{s:t,r:cs(e,n-1)};o?o==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):o&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function sp(e,t){if(t){for(var n=new ze(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(Sl)return Sl.encode(e);for(var o=e.length,a=new ze(e.length+(e.length>>1)),s=0,l=function(d){a[s++]=d},r=0;r<o;++r){if(s+5>a.length){var c=new ze(s+8+(o-r<<1));c.set(a),a=c}var u=e.charCodeAt(r);u<128||t?l(u):u<2048?(l(192|u>>6),l(128|u&63)):u>55295&&u<57344?(u=65536+(u&1047552)|e.charCodeAt(++r)&1023,l(240|u>>18),l(128|u>>12&63),l(128|u>>6&63),l(128|u&63)):(l(224|u>>12),l(128|u>>6&63),l(128|u&63))}return cs(a,0,s)}function lp(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(ga)return ga.decode(e);var o=ap(e),a=o.s,n=o.r;return n.length&&at(8),a}}const se=({name:e="",color:t="currentColor"},{slots:n})=>{var r;return i("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(r=n.default)==null?void 0:r.call(n))};se.displayName="IconBase";const Xt=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{const o=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[i("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),i("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[i("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),i("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?i("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${r}px`},o):o};Xt.displayName="LoadingIcon";const $c=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},Mc=()=>i(se,{name:"github"},()=>i("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Mc.displayName="GitHubIcon";const Vc=()=>i(se,{name:"gitlab"},()=>i("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Vc.displayName="GitLabIcon";const Fc=()=>i(se,{name:"gitee"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Fc.displayName="GiteeIcon";const Hc=()=>i(se,{name:"bitbucket"},()=>i("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Hc.displayName="BitbucketIcon";const zc=()=>i(se,{name:"source"},()=>i("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));zc.displayName="SourceIcon";const us=Array.isArray,ip=e=>typeof e=="function",cp=e=>typeof e=="string";var Gc=e=>/^(https?:)?\/\//.test(e),ur=e=>Object.prototype.toString.call(e)==="[object Object]";const gt=(e,t)=>{const n=t?t._instance:Wn();return ur(n==null?void 0:n.appContext.components)&&(e in n.appContext.components||lt(e)in n.appContext.components||Ar(lt(e))in n.appContext.components)};function up(){const e=H(!1);return Wn()&&pe(()=>{e.value=!0}),e}function dp(e){return up(),S(()=>!!e())}const pp=()=>dp(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),fp=()=>{const e=pp();return S(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},Pr=e=>{const t=xt();return S(()=>e[t.value])},ds=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},Io=(e,t)=>{let n=1;for(let r=0;r<e.length;r++)n+=e.charCodeAt(r),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%t},un=e=>typeof e=="string",Fn=(e,t)=>un(e)&&e.startsWith(t),yn=(e,t)=>un(e)&&e.endsWith(t),Xn=Object.entries,vp=Object.fromEntries,Qe=Object.keys,Rl=(e,...t)=>{if(t.length===0)return e;const n=t.shift()||null;return n&&Xn(n).forEach(([r,o])=>{r==="__proto__"||r==="constructor"||(ur(e[r])&&ur(o)?Rl(e[r],o):us(o)?e[r]=[...o]:ur(o)?e[r]={...o}:e[r]=n[r])}),Rl(e,...t)},Al=e=>ur(e)&&un(e.name),Er=(e,t=!1)=>e?us(e)?e.map(n=>un(n)?{name:n}:Al(n)?n:null).filter(n=>n!==null):un(e)?[{name:e}]:Al(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],jc=(e,t)=>{if(e){if(us(e)&&e.every(un))return e;if(un(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},Uc=e=>jc(e,"category"),Kc=e=>jc(e,"tag"),Po=e=>Fn(e,"/");let hp=class{constructor(){this.messageElements={};const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const r=document.createElement("div"),o=Date.now();return r.className="message move-in",r.innerHTML=t,this.containerElement.appendChild(r),this.messageElements[o]=r,n>0&&setTimeout(()=>{this.close(o)},n),o}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else Qe(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const Yc=/#.*$/u,mp=e=>{const t=Yc.exec(e);return t?t[0]:""},wl=e=>decodeURI(e).replace(Yc,"").replace(/(index)?\.(md|html)$/,""),ps=(e,t)=>{if(t===void 0)return!1;const n=wl(e.path),r=wl(t),o=mp(t);return o?o===e.hash&&(!r||n===r):n===r},dn=e=>{const t=atob(e);return lp(rp(sp(t,!0)))},gp=e=>Gc(e)?e:`https://github.com/${e}`,qc=e=>!Gc(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Or=(e,...t)=>{const n=e.resolve(...t),r=n.matched[n.matched.length-1];if(!(r!=null&&r.redirect))return n;const{redirect:o}=r,a=ip(o)?o(n):o,s=cp(a)?{path:a}:a;return Or(e,{hash:n.hash,query:n.query,params:n.params,...s})};function Zt(e){return Ri()?(rd(e),!0):!1}function it(e){return typeof e=="function"?e():ln(e)}const Lr=typeof window<"u",pn=()=>{},_a=_p();function _p(){var e;return Lr&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function fs(e,t){function n(...r){return new Promise((o,a)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(o).catch(a)})}return n}const Wc=e=>e();function yp(e,t={}){let n,r,o=pn;const a=l=>{clearTimeout(l),o(),o=pn};return l=>{const c=it(e),u=it(t.maxWait);return n&&a(n),c<=0||u!==void 0&&u<=0?(r&&(a(r),r=null),Promise.resolve(l())):new Promise((d,p)=>{o=t.rejectOnCancel?p:d,u&&!r&&(r=setTimeout(()=>{n&&a(n),r=null,d(l())},u)),n=setTimeout(()=>{r&&a(r),r=null,d(l())},c)})}}function Ep(e,t=!0,n=!0,r=!1){let o=0,a,s=!0,l=pn,c;const u=()=>{a&&(clearTimeout(a),a=void 0,l(),l=pn)};return p=>{const f=it(e),v=Date.now()-o,y=()=>c=p();return u(),f<=0?(o=Date.now(),y()):(v>f&&(n||!s)?(o=Date.now(),y()):t&&(c=new Promise((R,A)=>{l=r?A:R,a=setTimeout(()=>{o=Date.now(),s=!0,R(y()),u()},Math.max(0,f-v))})),!n&&!a&&(a=setTimeout(()=>s=!0,f)),s=!1,c)}}function bp(e=Wc){const t=H(!0);function n(){t.value=!1}function r(){t.value=!0}const o=(...a)=>{t.value&&e(...a)};return{isActive:vn(t),pause:n,resume:r,eventFilter:o}}function Xc(...e){if(e.length!==1)return Yn(...e);const t=e[0];return typeof t=="function"?vn(Bd(()=>({get:t,set:pn}))):H(t)}function Zc(e,t=200,n={}){return fs(yp(t,n),e)}function Sp(e,t=200,n=!1,r=!0,o=!1){return fs(Ep(t,n,r,o),e)}function Jc(e,t=!0){Wn()?pe(e):t?e():hn(e)}function Rp(e,t,n={}){const{immediate:r=!0}=n,o=H(!1);let a=null;function s(){a&&(clearTimeout(a),a=null)}function l(){o.value=!1,s()}function c(...u){s(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...u)},it(t))}return r&&(o.value=!0,Lr&&c()),Zt(l),{isPending:vn(o),start:c,stop:l}}function ya(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=Be(e),a=H(e);function s(l){if(arguments.length)return a.value=l,a.value;{const c=it(n);return a.value=a.value===c?it(r):c,a.value}}return o?s:[a,s]}var kl=Object.getOwnPropertySymbols,Ap=Object.prototype.hasOwnProperty,wp=Object.prototype.propertyIsEnumerable,kp=(e,t)=>{var n={};for(var r in e)Ap.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&kl)for(var r of kl(e))t.indexOf(r)<0&&wp.call(e,r)&&(n[r]=e[r]);return n};function Tp(e,t,n={}){const r=n,{eventFilter:o=Wc}=r,a=kp(r,["eventFilter"]);return ie(e,fs(o,t),a)}var Ip=Object.defineProperty,Pp=Object.defineProperties,Op=Object.getOwnPropertyDescriptors,vo=Object.getOwnPropertySymbols,Qc=Object.prototype.hasOwnProperty,eu=Object.prototype.propertyIsEnumerable,Tl=(e,t,n)=>t in e?Ip(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lp=(e,t)=>{for(var n in t||(t={}))Qc.call(t,n)&&Tl(e,n,t[n]);if(vo)for(var n of vo(t))eu.call(t,n)&&Tl(e,n,t[n]);return e},Cp=(e,t)=>Pp(e,Op(t)),Dp=(e,t)=>{var n={};for(var r in e)Qc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&vo)for(var r of vo(e))t.indexOf(r)<0&&eu.call(e,r)&&(n[r]=e[r]);return n};function xp(e,t,n={}){const r=n,{eventFilter:o}=r,a=Dp(r,["eventFilter"]),{eventFilter:s,pause:l,resume:c,isActive:u}=bp(o);return{stop:Tp(e,t,Cp(Lp({},a),{eventFilter:s})),pause:l,resume:c,isActive:u}}function Xe(e){var t;const n=it(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _t=Lr?window:void 0,tu=Lr?window.document:void 0,Bp=Lr?window.navigator:void 0;function Ne(...e){let t,n,r,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,o]=e,t=_t):[t,n,r,o]=e,!t)return pn;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],s=()=>{a.forEach(d=>d()),a.length=0},l=(d,p,f,v)=>(d.addEventListener(p,f,v),()=>d.removeEventListener(p,f,v)),c=ie(()=>[Xe(t),it(o)],([d,p])=>{s(),d&&a.push(...n.flatMap(f=>r.map(v=>l(d,f,v,p))))},{immediate:!0,flush:"post"}),u=()=>{c(),s()};return Zt(u),u}let Il=!1;function Np(e,t,n={}){const{window:r=_t,ignore:o=[],capture:a=!0,detectIframe:s=!1}=n;if(!r)return;_a&&!Il&&(Il=!0,Array.from(r.document.body.children).forEach(f=>f.addEventListener("click",pn)));let l=!0;const c=f=>o.some(v=>{if(typeof v=="string")return Array.from(r.document.querySelectorAll(v)).some(y=>y===f.target||f.composedPath().includes(y));{const y=Xe(v);return y&&(f.target===y||f.composedPath().includes(y))}}),d=[Ne(r,"click",f=>{const v=Xe(e);if(!(!v||v===f.target||f.composedPath().includes(v))){if(f.detail===0&&(l=!c(f)),!l){l=!0;return}t(f)}},{passive:!0,capture:a}),Ne(r,"pointerdown",f=>{const v=Xe(e);v&&(l=!f.composedPath().includes(v)&&!c(f))},{passive:!0}),s&&Ne(r,"blur",f=>{var v;const y=Xe(e);((v=r.document.activeElement)==null?void 0:v.tagName)==="IFRAME"&&!(y!=null&&y.contains(r.document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}function $p(){const e=H(!1);return Wn()&&pe(()=>{e.value=!0}),e}function Cr(e){const t=$p();return S(()=>(t.value,!!e()))}function nu(e,t={}){const{window:n=_t}=t,r=Cr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const a=H(!1),s=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",l):o.removeListener(l))},l=()=>{r.value&&(s(),o=n.matchMedia(Xc(e).value),a.value=!!(o!=null&&o.matches),o&&("addEventListener"in o?o.addEventListener("change",l):o.addListener(l)))};return Qd(l),Zt(()=>s()),a}function Mp(e={}){const{navigator:t=Bp,read:n=!1,source:r,copiedDuring:o=1500,legacy:a=!1}=e,s=["copy","cut"],l=Cr(()=>t&&"clipboard"in t),c=S(()=>l.value||a),u=H(""),d=H(!1),p=Rp(()=>d.value=!1,o);function f(){l.value?t.clipboard.readText().then(A=>{u.value=A}):u.value=R()}if(c.value&&n)for(const A of s)Ne(A,f);async function v(A=it(r)){c.value&&A!=null&&(l.value?await t.clipboard.writeText(A):y(A),u.value=A,d.value=!0,p.start())}function y(A){const g=document.createElement("textarea");g.value=A??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function R(){var A,g,E;return(E=(g=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:g.toString())!=null?E:""}return{isSupported:c,text:u,copied:d,copy:v}}const qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wr="__vueuse_ssr_handlers__",Vp=Fp();function Fp(){return Wr in qr||(qr[Wr]=qr[Wr]||{}),qr[Wr]}function Hp(e,t){return Vp[e]||t}function zp(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Gp=Object.defineProperty,Pl=Object.getOwnPropertySymbols,jp=Object.prototype.hasOwnProperty,Up=Object.prototype.propertyIsEnumerable,Ol=(e,t,n)=>t in e?Gp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ll=(e,t)=>{for(var n in t||(t={}))jp.call(t,n)&&Ol(e,n,t[n]);if(Pl)for(var n of Pl(t))Up.call(t,n)&&Ol(e,n,t[n]);return e};const Kp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Cl="vueuse-storage";function Zn(e,t,n,r={}){var o;const{flush:a="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=_t,eventFilter:f,onError:v=I=>{console.error(I)}}=r,y=(d?Le:H)(t);if(!n)try{n=Hp("getDefaultStorage",()=>{var I;return(I=_t)==null?void 0:I.localStorage})()}catch(I){v(I)}if(!n)return y;const R=it(t),A=zp(R),g=(o=r.serializer)!=null?o:Kp[A],{pause:E,resume:D}=xp(y,()=>x(y.value),{flush:a,deep:s,eventFilter:f});return p&&l&&(Ne(p,"storage",W),Ne(p,Cl,C)),W(),y;function x(I){try{if(I==null)n.removeItem(e);else{const j=g.write(I),z=n.getItem(e);z!==j&&(n.setItem(e,j),p&&p.dispatchEvent(new CustomEvent(Cl,{detail:{key:e,oldValue:z,newValue:j,storageArea:n}})))}}catch(j){v(j)}}function U(I){const j=I?I.newValue:n.getItem(e);if(j==null)return c&&R!==null&&n.setItem(e,g.write(R)),R;if(!I&&u){const z=g.read(j);return typeof u=="function"?u(z,R):A==="object"&&!Array.isArray(z)?Ll(Ll({},R),z):z}else return typeof j!="string"?j:g.read(j)}function C(I){W(I.detail)}function W(I){if(!(I&&I.storageArea!==n)){if(I&&I.key==null){y.value=R;return}if(!(I&&I.key!==e)){E();try{y.value=U(I)}catch(j){v(j)}finally{I?hn(D):D()}}}}}function Yp(e){return nu("(prefers-color-scheme: dark)",e)}var Dl=Object.getOwnPropertySymbols,qp=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,Xp=(e,t)=>{var n={};for(var r in e)qp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Dl)for(var r of Dl(e))t.indexOf(r)<0&&Wp.call(e,r)&&(n[r]=e[r]);return n};function Zp(e,t,n={}){const r=n,{window:o=_t}=r,a=Xp(r,["window"]);let s;const l=Cr(()=>o&&"MutationObserver"in o),c=()=>{s&&(s.disconnect(),s=void 0)},u=ie(()=>Xe(e),p=>{c(),l.value&&o&&p&&(s=new MutationObserver(t),s.observe(p,a))},{immediate:!0}),d=()=>{c(),u()};return Zt(d),{isSupported:l,stop:d}}var xl=Object.getOwnPropertySymbols,Jp=Object.prototype.hasOwnProperty,Qp=Object.prototype.propertyIsEnumerable,e3=(e,t)=>{var n={};for(var r in e)Jp.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&xl)for(var r of xl(e))t.indexOf(r)<0&&Qp.call(e,r)&&(n[r]=e[r]);return n};function t3(e,t,n={}){const r=n,{window:o=_t}=r,a=e3(r,["window"]);let s;const l=Cr(()=>o&&"ResizeObserver"in o),c=()=>{s&&(s.disconnect(),s=void 0)},u=S(()=>Array.isArray(e)?e.map(f=>Xe(f)):[Xe(e)]),d=ie(u,f=>{if(c(),l.value&&o){s=new ResizeObserver(t);for(const v of f)v&&s.observe(v,a)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{c(),d()};return Zt(p),{isSupported:l,stop:p}}function n3(e,t={width:0,height:0},n={}){const{window:r=_t,box:o="content-box"}=n,a=S(()=>{var c,u;return(u=(c=Xe(e))==null?void 0:c.namespaceURI)==null?void 0:u.includes("svg")}),s=H(t.width),l=H(t.height);return t3(e,([c])=>{const u=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(r&&a.value){const d=Xe(e);if(d){const p=r.getComputedStyle(d);s.value=parseFloat(p.width),l.value=parseFloat(p.height)}}else if(u){const d=Array.isArray(u)?u:[u];s.value=d.reduce((p,{inlineSize:f})=>p+f,0),l.value=d.reduce((p,{blockSize:f})=>p+f,0)}else s.value=c.contentRect.width,l.value=c.contentRect.height},n),ie(()=>Xe(e),c=>{s.value=c?t.width:0,l.value=c?t.height:0}),{width:s,height:l}}const Bl=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function vs(e,t={}){const{document:n=tu,autoExit:r=!1}=t,o=S(()=>{var g;return(g=Xe(e))!=null?g:n==null?void 0:n.querySelector("html")}),a=H(!1),s=S(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(g=>n&&g in n||o.value&&g in o.value)),l=S(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(g=>n&&g in n||o.value&&g in o.value)),c=S(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(g=>n&&g in n||o.value&&g in o.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(g=>n&&g in n),d=Cr(()=>o.value&&n&&s.value!==void 0&&l.value!==void 0&&c.value!==void 0),p=()=>u?(n==null?void 0:n[u])===o.value:!1,f=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const g=o.value;if((g==null?void 0:g[c.value])!=null)return!!g[c.value]}}return!1};async function v(){if(d.value){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const g=o.value;(g==null?void 0:g[l.value])!=null&&await g[l.value]()}a.value=!1}}async function y(){if(!d.value)return;f()&&await v();const g=o.value;s.value&&(g==null?void 0:g[s.value])!=null&&(await g[s.value](),a.value=!0)}async function R(){await(a.value?v():y())}const A=()=>{const g=f();(!g||g&&p())&&(a.value=g)};return Ne(n,Bl,A,!1),Ne(()=>Xe(o),Bl,A,!1),r&&Zt(v),{isSupported:d,isFullscreen:a,enter:y,exit:v,toggle:R}}function ru(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientHeight<e.scrollHeight||t.overflowY==="auto"&&e.clientWidth<e.scrollWidth)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:ru(n)}}function r3(e){const t=e||window.event,n=t.target;return ru(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}function ou(e,t=!1){const n=H(t);let r=null,o;ie(Xc(e),l=>{if(l){const c=l;o=c.style.overflow,n.value&&(c.style.overflow="hidden")}},{immediate:!0});const a=()=>{const l=it(e);!l||n.value||(_a&&(r=Ne(l,"touchmove",c=>{r3(c)},{passive:!1})),l.style.overflow="hidden",n.value=!0)},s=()=>{const l=it(e);!l||!n.value||(_a&&(r==null||r()),l.style.overflow=o,n.value=!1)};return Zt(s),S({get(){return n.value},set(l){l?a():s()}})}function au(e,t,n={}){const{window:r=_t}=n;return Zn(e,t,r==null?void 0:r.sessionStorage,n)}let o3=0;function a3(e,t={}){const n=H(!1),{document:r=tu,immediate:o=!0,manual:a=!1,id:s=`vueuse_styletag_${++o3}`}=t,l=H(e);let c=()=>{};const u=()=>{if(!r)return;const p=r.getElementById(s)||r.createElement("style");p.isConnected||(p.type="text/css",p.id=s,t.media&&(p.media=t.media),r.head.appendChild(p)),!n.value&&(c=ie(l,f=>{p.textContent=f},{immediate:!0}),n.value=!0)},d=()=>{!r||!n.value||(c(),r.head.removeChild(r.getElementById(s)),n.value=!1)};return o&&!a&&Jc(u),a||Zt(d),{id:s,css:l,unload:d,load:u,isLoaded:vn(n)}}function s3({window:e=_t}={}){if(!e)return{x:H(0),y:H(0)};const t=H(e.scrollX),n=H(e.scrollY);return Ne(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}function l3(e={}){const{window:t=_t,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:a=!0}=e,s=H(n),l=H(r),c=()=>{t&&(a?(s.value=t.innerWidth,l.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),Jc(c),Ne("resize",c,{passive:!0}),o){const u=nu("(orientation: portrait)");ie(u,()=>c())}return{width:s,height:l}}const su=({type:e="info",text:t="",vertical:n="top",color:r},{slots:o})=>{var a;return i("span",{class:["badge",e,{diy:r}],style:{verticalAlign:n,...r?{backgroundColor:r}:{}}},((a=o.default)==null?void 0:a.call(o))||t)};su.displayName="Badge";var i3=B({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=S(()=>{const r=["font-icon icon"],o=`iconfont icon-${e.icon}`;return r.push(o),r}),n=S(()=>{const r={};return e.color&&(r.color=e.color),e.size&&(r["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),Qe(r).length?r:null});return()=>e.icon?i("span",{key:e.icon,class:t.value,style:n.value}):null}});const lu=()=>i(se,{name:"back-to-top"},()=>[i("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),i("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);lu.displayName="BackToTopIcon";var c3=B({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const t=Ee(),n=Pr({"/":{backToTop:"返回顶部"}}),r=Le(),{height:o}=n3(r),{height:a}=l3(),{y:s}=s3(),l=S(()=>t.value.backToTop!==!1&&s.value>e.threshold),c=S(()=>s.value/(o.value-a.value));return pe(()=>{r.value=document.body}),()=>i(Wt,{name:"fade"},()=>l.value?i("button",{type:"button",class:"back-to-top","aria-label":n.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:i("svg",{class:"scroll-progress"},i("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*c.value*100}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}})),i(lu)]):null)}});const u3=Et({enhance:({app:e})=>{gt("Badge")||e.component("Badge",su),gt("FontIcon")||e.component("FontIcon",i3)},setup:()=>{a3(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[()=>i(c3,{})]});function d3(e,t,n){var r,o,a;t===void 0&&(t=50),n===void 0&&(n={});var s=(r=n.isImmediate)!=null&&r,l=(o=n.callback)!=null&&o,c=n.maxWait,u=Date.now(),d=[];function p(){if(c!==void 0){var v=Date.now()-u;if(v+t>=c)return c-v}return t}var f=function(){var v=[].slice.call(arguments),y=this;return new Promise(function(R,A){var g=s&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,u=Date.now(),!s){var D=e.apply(y,v);l&&l(D),d.forEach(function(x){return(0,x.resolve)(D)}),d=[]}},p()),g){var E=e.apply(y,v);return l&&l(E),R(E)}d.push({resolve:R,reject:A})})};return f.cancel=function(v){a!==void 0&&clearTimeout(a),d.forEach(function(y){return(0,y.reject)(v)}),d=[]},f}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Rn=typeof window<"u";function p3(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ye=Object.assign;function Ko(e,t){const n={};for(const r in t){const o=t[r];n[r]=yt(o)?o.map(e):e(o)}return n}const dr=()=>{},yt=Array.isArray,f3=/\/$/,v3=e=>e.replace(f3,"");function Yo(e,t,n="/"){let r,o={},a="",s="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=t.slice(c+1,l>-1?l:t.length),o=e(a)),l>-1&&(r=r||t.slice(0,l),s=t.slice(l,t.length)),r=_3(r??t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function h3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Nl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function m3(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Hn(t.matched[r],n.matched[o])&&iu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function iu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!g3(e[n],t[n]))return!1;return!0}function g3(e,t){return yt(e)?$l(e,t):yt(t)?$l(t,e):e===t}function $l(e,t){return yt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function _3(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let a=n.length-1,s,l;for(s=0;s<r.length;s++)if(l=r[s],l!==".")if(l==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var br;(function(e){e.pop="pop",e.push="push"})(br||(br={}));var pr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pr||(pr={}));function y3(e){if(!e)if(Rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),v3(e)}const E3=/^[^#]+#/;function b3(e,t){return e.replace(E3,"#")+t}function S3(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Oo=()=>({left:window.pageXOffset,top:window.pageYOffset});function R3(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=S3(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ml(e,t){return(history.state?history.state.position-t:-1)+e}const Ea=new Map;function A3(e,t){Ea.set(e,t)}function w3(e){const t=Ea.get(e);return Ea.delete(e),t}let k3=()=>location.protocol+"//"+location.host;function cu(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let l=o.includes(e.slice(a))?e.slice(a).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),Nl(c,"")}return Nl(n,e)+r+o}function T3(e,t,n,r){let o=[],a=[],s=null;const l=({state:f})=>{const v=cu(e,location),y=n.value,R=t.value;let A=0;if(f){if(n.value=v,t.value=f,s&&s===y){s=null;return}A=R?f.position-R.position:0}else r(v);o.forEach(g=>{g(n.value,y,{delta:A,type:br.pop,direction:A?A>0?pr.forward:pr.back:pr.unknown})})};function c(){s=n.value}function u(f){o.push(f);const v=()=>{const y=o.indexOf(f);y>-1&&o.splice(y,1)};return a.push(v),v}function d(){const{history:f}=window;f.state&&f.replaceState(ye({},f.state,{scroll:Oo()}),"")}function p(){for(const f of a)f();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Vl(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Oo():null}}function I3(e){const{history:t,location:n}=window,r={value:cu(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,u,d){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:k3()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),o.value=u}catch(v){console.error(v),n[d?"replace":"assign"](f)}}function s(c,u){const d=ye({},t.state,Vl(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});a(c,d,!0),r.value=c}function l(c,u){const d=ye({},o.value,t.state,{forward:c,scroll:Oo()});a(d.current,d,!0);const p=ye({},Vl(r.value,c,null),{position:d.position+1},u);a(c,p,!1),r.value=c}return{location:r,state:o,push:l,replace:s}}function P3(e){e=y3(e);const t=I3(e),n=T3(e,t.state,t.location,t.replace);function r(a,s=!0){s||n.pauseListeners(),history.go(a)}const o=ye({location:"",base:e,go:r,createHref:b3.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function O3(e){return typeof e=="string"||e&&typeof e=="object"}function uu(e){return typeof e=="string"||typeof e=="symbol"}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},du=Symbol("");var Fl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fl||(Fl={}));function zn(e,t){return ye(new Error,{type:e,[du]:!0},t)}function Tt(e,t){return e instanceof Error&&du in e&&(t==null||!!(e.type&t))}const Hl="[^/]+?",L3={sensitive:!1,strict:!1,start:!0,end:!0},C3=/[.+*?^${}()[\]/\\]/g;function D3(e,t){const n=ye({},L3,t),r=[];let o=n.start?"^":"";const a=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let p=0;p<u.length;p++){const f=u[p];let v=40+(n.sensitive?.25:0);if(f.type===0)p||(o+="/"),o+=f.value.replace(C3,"\\$&"),v+=40;else if(f.type===1){const{value:y,repeatable:R,optional:A,regexp:g}=f;a.push({name:y,repeatable:R,optional:A});const E=g||Hl;if(E!==Hl){v+=10;try{new RegExp(`(${E})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${E}): `+x.message)}}let D=R?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;p||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),o+=D,v+=20,A&&(v+=-8),R&&(v+=-20),E===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function l(u){const d=u.match(s),p={};if(!d)return null;for(let f=1;f<d.length;f++){const v=d[f]||"",y=a[f-1];p[y.name]=v&&y.repeatable?v.split("/"):v}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of f)if(v.type===0)d+=v.value;else if(v.type===1){const{value:y,repeatable:R,optional:A}=v,g=y in u?u[y]:"";if(yt(g)&&!R)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const E=yt(g)?g.join("/"):g;if(!E)if(A)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${y}"`);d+=E}}return d||"/"}return{re:s,score:r,keys:a,parse:l,stringify:c}}function x3(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function B3(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=x3(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(zl(r))return 1;if(zl(o))return-1}return o.length-r.length}function zl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const N3={type:0,value:""},$3=/[a-zA-Z0-9_]/;function M3(e){if(!e)return[[]];if(e==="/")return[[N3]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let l=0,c,u="",d="";function p(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),s()):c===":"?(p(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:$3.test(c)?f():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),s(),o}function V3(e,t,n){const r=D3(M3(e.path),n),o=ye(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function F3(e,t){const n=[],r=new Map;t=Ul({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function a(d,p,f){const v=!f,y=H3(d);y.aliasOf=f&&f.record;const R=Ul(t,d),A=[y];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of D)A.push(ye({},y,{components:f?f.record.components:y.components,path:x,aliasOf:f?f.record:y}))}let g,E;for(const D of A){const{path:x}=D;if(p&&x[0]!=="/"){const U=p.record.path,C=U[U.length-1]==="/"?"":"/";D.path=p.record.path+(x&&C+x)}if(g=V3(D,p,R),f?f.alias.push(g):(E=E||g,E!==g&&E.alias.push(g),v&&d.name&&!jl(g)&&s(d.name)),y.children){const U=y.children;for(let C=0;C<U.length;C++)a(U[C],g,f&&f.children[C])}f=f||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&c(g)}return E?()=>{s(E)}:dr}function s(d){if(uu(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(s),p.alias.forEach(s))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(s),d.alias.forEach(s))}}function l(){return n}function c(d){let p=0;for(;p<n.length&&B3(d,n[p])>=0&&(d.record.path!==n[p].record.path||!pu(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!jl(d)&&r.set(d.record.name,d)}function u(d,p){let f,v={},y,R;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw zn(1,{location:d});R=f.record.name,v=ye(Gl(p.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),d.params&&Gl(d.params,f.keys.map(E=>E.name))),y=f.stringify(v)}else if("path"in d)y=d.path,f=n.find(E=>E.re.test(y)),f&&(v=f.parse(y),R=f.record.name);else{if(f=p.name?r.get(p.name):n.find(E=>E.re.test(p.path)),!f)throw zn(1,{location:d,currentLocation:p});R=f.record.name,v=ye({},p.params,d.params),y=f.stringify(v)}const A=[];let g=f;for(;g;)A.unshift(g.record),g=g.parent;return{name:R,path:y,params:v,matched:A,meta:G3(A)}}return e.forEach(d=>a(d)),{addRoute:a,resolve:u,removeRoute:s,getRoutes:l,getRecordMatcher:o}}function Gl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function H3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:z3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function z3(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function jl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function G3(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function Ul(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pu(e,t){return t.children.some(n=>n===e||pu(e,n))}const fu=/#/g,j3=/&/g,U3=/\//g,K3=/=/g,Y3=/\?/g,vu=/\+/g,q3=/%5B/g,W3=/%5D/g,hu=/%5E/g,X3=/%60/g,mu=/%7B/g,Z3=/%7C/g,gu=/%7D/g,J3=/%20/g;function hs(e){return encodeURI(""+e).replace(Z3,"|").replace(q3,"[").replace(W3,"]")}function Q3(e){return hs(e).replace(mu,"{").replace(gu,"}").replace(hu,"^")}function ba(e){return hs(e).replace(vu,"%2B").replace(J3,"+").replace(fu,"%23").replace(j3,"%26").replace(X3,"`").replace(mu,"{").replace(gu,"}").replace(hu,"^")}function e4(e){return ba(e).replace(K3,"%3D")}function t4(e){return hs(e).replace(fu,"%23").replace(Y3,"%3F")}function n4(e){return e==null?"":t4(e).replace(U3,"%2F")}function ho(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function r4(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(vu," "),s=a.indexOf("="),l=ho(s<0?a:a.slice(0,s)),c=s<0?null:ho(a.slice(s+1));if(l in t){let u=t[l];yt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function Kl(e){let t="";for(let n in e){const r=e[n];if(n=e4(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(yt(r)?r.map(a=>a&&ba(a)):[r&&ba(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function o4(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=yt(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const a4=Symbol(""),Yl=Symbol(""),Lo=Symbol(""),ms=Symbol(""),Sa=Symbol("");function nr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function jt(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const c=p=>{p===!1?l(zn(4,{from:n,to:t})):p instanceof Error?l(p):O3(p)?l(zn(2,{from:t,to:p})):(a&&r.enterCallbacks[o]===a&&typeof p=="function"&&a.push(p),s())},u=e.call(r&&r.instances[o],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function qo(e,t,n,r){const o=[];for(const a of e)for(const s in a.components){let l=a.components[s];if(!(t!=="beforeRouteEnter"&&!a.instances[s]))if(s4(l)){const u=(l.__vccOpts||l)[t];u&&o.push(jt(u,n,r,a,s))}else{let c=l();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${a.path}"`));const d=p3(u)?u.default:u;a.components[s]=d;const f=(d.__vccOpts||d)[t];return f&&jt(f,n,r,a,s)()}))}}return o}function s4(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ra(e){const t=de(Lo),n=de(ms),r=S(()=>t.resolve(ln(e.to))),o=S(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const f=p.findIndex(Hn.bind(null,d));if(f>-1)return f;const v=ql(c[u-2]);return u>1&&ql(d)===v&&p[p.length-1].path!==v?p.findIndex(Hn.bind(null,c[u-2])):f}),a=S(()=>o.value>-1&&c4(n.params,r.value.params)),s=S(()=>o.value>-1&&o.value===n.matched.length-1&&iu(n.params,r.value.params));function l(c={}){return i4(c)?t[ln(e.replace)?"replace":"push"](ln(e.to)).catch(dr):Promise.resolve()}return{route:r,href:S(()=>r.value.href),isActive:a,isExactActive:s,navigate:l}}const l4=B({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ra,setup(e,{slots:t}){const n=Kn(Ra(e)),{options:r}=de(Lo),o=S(()=>({[Wl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),Me=l4;function i4(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function c4(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!yt(o)||o.length!==r.length||r.some((a,s)=>a!==o[s]))return!1}return!0}function ql(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wl=(e,t,n)=>e??t??n,u4=B({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=de(Sa),o=S(()=>e.route||r.value),a=de(Yl,0),s=S(()=>{let u=ln(a);const{matched:d}=o.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=S(()=>o.value.matched[s.value]);mt(Yl,S(()=>s.value+1)),mt(a4,l),mt(Sa,o);const c=H();return ie(()=>[c.value,l.value,e.name],([u,d,p],[f,v,y])=>{d&&(d.instances[p]=u,v&&v!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),u&&d&&(!v||!Hn(d,v)||!f)&&(d.enterCallbacks[p]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,p=l.value,f=p&&p.components[d];if(!f)return Xl(n.default,{Component:f,route:u});const v=p.props[d],y=v?v===!0?u.params:typeof v=="function"?v(u):v:null,A=i(f,ye({},y,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Xl(n.default,{Component:A,route:u})||A}}});function Xl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _u=u4;function d4(e){const t=F3(e.routes,e),n=e.parseQuery||r4,r=e.stringifyQuery||Kl,o=e.history,a=nr(),s=nr(),l=nr(),c=Le(Ot);let u=Ot;Rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ko.bind(null,T=>""+T),p=Ko.bind(null,n4),f=Ko.bind(null,ho);function v(T,F){let $,q;return uu(T)?($=t.getRecordMatcher(T),q=F):q=T,t.addRoute(q,$)}function y(T){const F=t.getRecordMatcher(T);F&&t.removeRoute(F)}function R(){return t.getRoutes().map(T=>T.record)}function A(T){return!!t.getRecordMatcher(T)}function g(T,F){if(F=ye({},F||c.value),typeof T=="string"){const b=Yo(n,T,F.path),k=t.resolve({path:b.path},F),P=o.createHref(b.fullPath);return ye(b,k,{params:f(k.params),hash:ho(b.hash),redirectedFrom:void 0,href:P})}let $;if("path"in T)$=ye({},T,{path:Yo(n,T.path,F.path).path});else{const b=ye({},T.params);for(const k in b)b[k]==null&&delete b[k];$=ye({},T,{params:p(b)}),F.params=p(F.params)}const q=t.resolve($,F),fe=T.hash||"";q.params=d(f(q.params));const m=h3(r,ye({},T,{hash:Q3(fe),path:q.path})),_=o.createHref(m);return ye({fullPath:m,hash:fe,query:r===Kl?o4(T.query):T.query||{}},q,{redirectedFrom:void 0,href:_})}function E(T){return typeof T=="string"?Yo(n,T,c.value.path):ye({},T)}function D(T,F){if(u!==T)return zn(8,{from:F,to:T})}function x(T){return W(T)}function U(T){return x(ye(E(T),{replace:!0}))}function C(T){const F=T.matched[T.matched.length-1];if(F&&F.redirect){const{redirect:$}=F;let q=typeof $=="function"?$(T):$;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),ye({query:T.query,hash:T.hash,params:"path"in q?{}:T.params},q)}}function W(T,F){const $=u=g(T),q=c.value,fe=T.state,m=T.force,_=T.replace===!0,b=C($);if(b)return W(ye(E(b),{state:typeof b=="object"?ye({},fe,b.state):fe,force:m,replace:_}),F||$);const k=$;k.redirectedFrom=F;let P;return!m&&m3(r,q,$)&&(P=zn(16,{to:k,from:q}),je(q,q,!0,!1)),(P?Promise.resolve(P):z(k,q)).catch(O=>Tt(O)?Tt(O,2)?O:bt(O):te(O,k,q)).then(O=>{if(O){if(Tt(O,2))return W(ye({replace:_},E(O.to),{state:typeof O.to=="object"?ye({},fe,O.to.state):fe,force:m}),F||k)}else O=G(k,q,!0,_,fe);return re(k,q,O),O})}function I(T,F){const $=D(T,F);return $?Promise.reject($):Promise.resolve()}function j(T){const F=nt.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(T):T()}function z(T,F){let $;const[q,fe,m]=p4(T,F);$=qo(q.reverse(),"beforeRouteLeave",T,F);for(const b of q)b.leaveGuards.forEach(k=>{$.push(jt(k,T,F))});const _=I.bind(null,T,F);return $.push(_),Ce($).then(()=>{$=[];for(const b of a.list())$.push(jt(b,T,F));return $.push(_),Ce($)}).then(()=>{$=qo(fe,"beforeRouteUpdate",T,F);for(const b of fe)b.updateGuards.forEach(k=>{$.push(jt(k,T,F))});return $.push(_),Ce($)}).then(()=>{$=[];for(const b of T.matched)if(b.beforeEnter&&!F.matched.includes(b))if(yt(b.beforeEnter))for(const k of b.beforeEnter)$.push(jt(k,T,F));else $.push(jt(b.beforeEnter,T,F));return $.push(_),Ce($)}).then(()=>(T.matched.forEach(b=>b.enterCallbacks={}),$=qo(m,"beforeRouteEnter",T,F),$.push(_),Ce($))).then(()=>{$=[];for(const b of s.list())$.push(jt(b,T,F));return $.push(_),Ce($)}).catch(b=>Tt(b,8)?b:Promise.reject(b))}function re(T,F,$){for(const q of l.list())j(()=>q(T,F,$))}function G(T,F,$,q,fe){const m=D(T,F);if(m)return m;const _=F===Ot,b=Rn?history.state:{};$&&(q||_?o.replace(T.fullPath,ye({scroll:_&&b&&b.scroll},fe)):o.push(T.fullPath,fe)),c.value=T,je(T,F,$,_),bt()}let Q;function K(){Q||(Q=o.listen((T,F,$)=>{if(!Bt.listening)return;const q=g(T),fe=C(q);if(fe){W(ye(fe,{replace:!0}),q).catch(dr);return}u=q;const m=c.value;Rn&&A3(Ml(m.fullPath,$.delta),Oo()),z(q,m).catch(_=>Tt(_,12)?_:Tt(_,2)?(W(_.to,q).then(b=>{Tt(b,20)&&!$.delta&&$.type===br.pop&&o.go(-1,!1)}).catch(dr),Promise.reject()):($.delta&&o.go(-$.delta,!1),te(_,q,m))).then(_=>{_=_||G(q,m,!1),_&&($.delta&&!Tt(_,8)?o.go(-$.delta,!1):$.type===br.pop&&Tt(_,20)&&o.go(-1,!1)),re(q,m,_)}).catch(dr)}))}let Te=nr(),oe=nr(),_e;function te(T,F,$){bt(T);const q=oe.list();return q.length?q.forEach(fe=>fe(T,F,$)):console.error(T),Promise.reject(T)}function ct(){return _e&&c.value!==Ot?Promise.resolve():new Promise((T,F)=>{Te.add([T,F])})}function bt(T){return _e||(_e=!T,K(),Te.list().forEach(([F,$])=>T?$(T):F()),Te.reset()),T}function je(T,F,$,q){const{scrollBehavior:fe}=e;if(!Rn||!fe)return Promise.resolve();const m=!$&&w3(Ml(T.fullPath,0))||(q||!$)&&history.state&&history.state.scroll||null;return hn().then(()=>fe(T,F,m)).then(_=>_&&R3(_)).catch(_=>te(_,T,F))}const Pe=T=>o.go(T);let kt;const nt=new Set,Bt={currentRoute:c,listening:!0,addRoute:v,removeRoute:y,hasRoute:A,getRoutes:R,resolve:g,options:e,push:x,replace:U,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:a.add,beforeResolve:s.add,afterEach:l.add,onError:oe.add,isReady:ct,install(T){const F=this;T.component("RouterLink",Me),T.component("RouterView",_u),T.config.globalProperties.$router=F,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(c)}),Rn&&!kt&&c.value===Ot&&(kt=!0,x(o.location).catch(fe=>{}));const $={};for(const fe in Ot)$[fe]=S(()=>c.value[fe]);T.provide(Lo,F),T.provide(ms,Kn($)),T.provide(Sa,c);const q=T.unmount;nt.add(T),T.unmount=function(){nt.delete(T),nt.size<1&&(u=Ot,Q&&Q(),Q=null,c.value=Ot,kt=!1,_e=!1),q()}}};function Ce(T){return T.reduce((F,$)=>F.then(()=>j($)),Promise.resolve())}return Bt}function p4(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const l=t.matched[s];l&&(e.matched.find(u=>Hn(u,l))?r.push(l):n.push(l));const c=e.matched[s];c&&(t.matched.find(u=>Hn(u,c))||o.push(c))}return[n,r,o]}function tt(){return de(Lo)}function wt(){return de(ms)}const f4=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const o=tt(),s=d3(()=>{var R,A;const l=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(l-0)<r){Zl(o,"");return}const u=window.innerHeight+l,d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(d-u)<r,f=Array.from(document.querySelectorAll(e)),y=Array.from(document.querySelectorAll(t)).filter(g=>f.some(E=>E.hash===g.hash));for(let g=0;g<y.length;g++){const E=y[g],D=y[g+1],x=l>=(((R=E.parentElement)==null?void 0:R.offsetTop)??0)-r,U=!D||l<(((A=D.parentElement)==null?void 0:A.offsetTop)??0)-r;if(!(x&&U))continue;const W=decodeURIComponent(o.currentRoute.value.hash),I=decodeURIComponent(E.hash);if(W===I)return;if(p){for(let j=g+1;j<y.length;j++)if(W===decodeURIComponent(y[j].hash))return}Zl(o,I);return}},n);pe(()=>{window.addEventListener("scroll",s)}),es(()=>{window.removeEventListener("scroll",s)})},Zl=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t,force:!0}).finally(()=>e.options.scrollBehavior=n)},v4=".sidebar-link, .toc-link",h4=".header-anchor",m4=200,g4=5,_4=Et({setup(){f4({headerLinkSelector:v4,headerAnchorSelector:h4,delay:m4,offset:g4})}});let yu=()=>null;const Eu=Symbol(""),y4=e=>{yu=e},E4=()=>de(Eu),b4=e=>{e.provide(Eu,yu)};var S4=B({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean},setup(e){const t=E4(),n=Pr({"/":{title:"目录",empty:"暂无目录"}}),r=ce(),o=tt(),a=Pc(),s=u=>{const d=u.I;return typeof d>"u"||d},l=()=>{const u=e.base||r.value.path.replace(/\/[^/]+$/,"/"),d=o.getRoutes(),p=[];return d.filter(({meta:f,path:v})=>{if(!Fn(v,u)||v===u)return!1;if(u==="/"){const y=Qe(a.value.locales).filter(R=>R!=="/");if(v==="/404.html"||y.some(R=>Fn(v,R)))return!1}return(yn(v,".html")&&!yn(v,"/index.html")||yn(v,"/"))&&s(f)}).map(({path:f,meta:v})=>{const y=f.substring(u.length).split("/").length;return{title:v.t||"",icon:v.i,base:f.replace(/\/[^/]+\/?$/,"/"),order:v.O||null,level:yn(f,"/")?y-1:y,path:f}}).filter(({title:f,level:v})=>f&&v<=e.level).sort(({title:f,level:v,path:y,order:R},{title:A,level:g,path:E,order:D})=>v-g||(yn(y,"/index.html")?-1:yn(E,"/index.html")?1:R===null?D===null?f.localeCompare(A):D:D===null?R:R>0?D>0?R-D:-1:D<0?R-D:1)).forEach(f=>{var v;const{base:y,level:R}=f;switch(R){case 1:p.push(f);break;case 2:{const A=p.find(g=>g.path===y);A&&(A.children??(A.children=[])).push(f);break}default:{const A=p.find(g=>g.path===y.replace(/\/[^/]+\/$/,"/"));if(A){const g=(v=A.children)==null?void 0:v.find(E=>E.path===y);g&&(g.children??(g.children=[])).push(f)}}}}),p},c=S(()=>l());return()=>i("div",{class:"auto-catalog-wrapper"},[i("h2",{class:"main-title"},n.value.title),c.value.length?c.value.map(({children:u=[],icon:d,path:p,title:f},v)=>[i("h3",{id:f,class:["child-title",{"has-children":u.length}]},[i("a",{href:`#${f}`,class:"header-anchor"},"#"),i(Me,{class:"catalog-title",to:p},()=>[e.index?`${v+1}.`:null,d&&t?i(t,{icon:d}):null,f||"Unknown"])]),u.length?i("ul",{class:"child-catalog-wrapper"},u.map(({children:y=[],icon:R,path:A,title:g},E)=>i("li",{class:"child-catalog-item"},[i("div",{class:["sub-title",{"has-children":y.length}]},[i("a",{href:`#${g}`,class:"header-anchor"},"#"),i(Me,{class:"catalog-title",to:A},()=>[e.index?`${v+1}.${E+1}`:null,R&&t?i(t,{icon:R}):null,g||"Unknown"])]),y.length?i("div",{class:"sub-catalog-wrapper"},y.map(({icon:D,path:x,title:U},C)=>i(Me,{class:"sub-catalog-item",to:x},()=>[e.index?`${v+1}.${E+1}.${C+1}`:null,D&&t?i(t,{icon:D}):null,U||"Unknown"]))):null]))):null]):i("p",{class:"empty-catalog"},n.value.empty)])}}),R4=Et({enhance:({app:e})=>{b4(e),gt("AutoCatalog",e)||e.component("AutoCatalog",S4)}});const A4=i("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[i("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),i("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),bu=B({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=xt(),n=S(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>i("span",[A4,i("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),w4={},k4=Et({enhance({app:e}){e.component("ExternalLinkIcon",i(bu,{locales:w4}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const ve={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=ve.isStarted();e=Wo(e,ve.settings.minimum,1),ve.status=e===1?null:e;const n=ve.render(!t),r=n.querySelector(ve.settings.barSelector),o=ve.settings.speed,a=ve.settings.easing;return n.offsetWidth,T4(s=>{Xr(r,{transform:"translate3d("+Jl(e)+"%,0,0)",transition:"all "+o+"ms "+a}),e===1?(Xr(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){Xr(n,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){ve.remove(),s()},o)},o)):setTimeout(()=>s(),o)}),ve},isStarted:()=>typeof ve.status=="number",start:()=>{ve.status||ve.set(0);const e=()=>{setTimeout(()=>{ve.status&&(ve.trickle(),e())},ve.settings.trickleSpeed)};return ve.settings.trickle&&e(),ve},done:e=>!e&&!ve.status?ve:ve.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=ve.status;return t?(typeof e!="number"&&(e=(1-t)*Wo(Math.random()*t,.1,.95)),t=Wo(t+e,0,.994),ve.set(t)):ve.start()},trickle:()=>ve.inc(Math.random()*ve.settings.trickleRate),render:e=>{if(ve.isRendered())return document.getElementById("nprogress");Ql(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=ve.settings.template;const n=t.querySelector(ve.settings.barSelector),r=e?"-100":Jl(ve.status||0),o=document.querySelector(ve.settings.parent);return Xr(n,{transition:"all 0 linear",transform:"translate3d("+r+"%,0,0)"}),o!==document.body&&Ql(o,"nprogress-custom-parent"),o==null||o.appendChild(t),t},remove:()=>{ei(document.documentElement,"nprogress-busy"),ei(document.querySelector(ve.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&I4(e)},isRendered:()=>!!document.getElementById("nprogress")},Wo=(e,t,n)=>e<t?t:e>n?n:e,Jl=e=>(-1+e)*100,T4=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),Xr=function(){const e=["Webkit","O","Moz","ms"],t={};function n(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function r(s){const l=document.body.style;if(s in l)return s;let c=e.length;const u=s.charAt(0).toUpperCase()+s.slice(1);let d;for(;c--;)if(d=e[c]+u,d in l)return d;return s}function o(s){return s=n(s),t[s]??(t[s]=r(s))}function a(s,l,c){l=o(l),s.style[l]=c}return function(s,l){for(const c in l){const u=l[c];u!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&a(s,c,u)}}}(),Su=(e,t)=>(typeof e=="string"?e:gs(e)).indexOf(" "+t+" ")>=0,Ql=(e,t)=>{const n=gs(e),r=n+t;Su(n,t)||(e.className=r.substring(1))},ei=(e,t)=>{const n=gs(e);if(!Su(e,t))return;const r=n.replace(" "+t+" "," ");e.className=r.substring(1,r.length-1)},gs=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),I4=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const P4=()=>{pe(()=>{const e=tt(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||ve.start()}),e.afterEach(n=>{t.add(n.path),ve.done()})})},O4=Et({setup(){P4()}}),L4=JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":["$2a$10$cB05BY3rJfWaNqPm6SFDUOSY6ZGC5QNGxfQxg.Jluu.edxMuvtJSO"],"/zh/demo/encrypt.html":["$2a$10$SUyZ8JC7YnyYnrNDrH.ytui/BFDBuo98JitjlJxTr3iBMGj.Cy1me"]}},"darkmode":"toggle","pure":true,"footer":"本站博客未经授权禁止转载","displayFooter":true,"copyright":"Lixin © 2020-2023","breadcrumb":false,"repo":"lixvyang/myblog","docsDir":"docs","blog":{"roundAvatar":true,"description":"长期持续分享学习内容","medias":{"BiliBili":"https://space.bilibili.com/520711550","Email":"lixin@tutamail.com","GitHub":"https://github.com/lixvyang","Twitter":"https://twitter.com/Lixv28332301","Wechat":"https://example.com"}},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"Edit this page on GitHub","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":[{"text":"主页","icon":"home","link":"/"},{"text":"归档","icon":"discover","link":"/archives/"},{"text":"关于","icon":"info","link":"/intro/"}],"sidebar":false,"footer":"本站博客未经授权禁止转载","displayFooter":true,"blog":{"intro":"/intro.html"}}}}'),C4=H(L4),Ru=()=>C4,Au=Symbol(""),D4=()=>{const e=de(Au);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},x4=(e,t)=>{const{locales:n,...r}=e;return{...r,...n==null?void 0:n[t]}},B4=Et({enhance({app:e}){const t=Ru(),n=e._context.provides[ls],r=S(()=>x4(t.value,n.value));e.provide(Au,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}});const N4={provider:"Giscus",lightTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.216/templates/giscus/light.css",darkTheme:"https://unpkg.com/vuepress-theme-hope@2.0.0-beta.216/templates/giscus/dark.css",serverURL:"http://localhost:8080",repo:"lixvyang/blog-comments",repoId:"R_kgDOJpRLYg",category:"Announcements",categoryId:"DIC_kwDOJpRLYs4CW1R-"};let $4=N4;const wu=Symbol(""),ku=()=>de(wu),M4=ku,V4=e=>{e.provide(wu,$4)},ti=["ar","de","gsw","en","es","fa","fr","id","it","ja","ko","nl","pl","pt","ro","ru","th","tr","uk","vi","zh-CN","zh-TW"];var F4=B({name:"GiscusComment",props:{identifier:{type:String,required:!0},darkmode:Boolean},setup(e){const t=M4(),n=!!(t.repo&&t.repoId&&t.category&&t.categoryId),{repo:r,repoId:o,category:a,categoryId:s}=t,l=H(!1),c=S(()=>{const d=ss().value;if(ti.includes(d))return d;const p=d.split("-")[0];return ti.includes(p)?p:"en"}),u=S(()=>({repo:r,repoId:o,category:a,categoryId:s,lang:c.value,theme:e.darkmode?t.darkTheme||"dark":t.lightTheme||"light",mapping:t.mapping||"pathname",term:e.identifier,inputPosition:t.inputPosition||"top",reactionsEnabled:t.reactionsEnabled===!1?"0":"1",strict:t.strict===!1?"0":"1",loading:t.lazyLoading===!1?"eager":"lazy",emitMetadata:"0"}));return pe(async()=>{await h(()=>import("./giscus-52604b1e.js"),[]),l.value=!0}),()=>n?i("div",{class:["giscus-wrapper",{"input-top":t.inputPosition!=="bottom"}],id:"comment"},l.value?i("giscus-widget",u.value):i(Xt)):null}}),H4=B({name:"CommentService",props:{darkmode:Boolean},setup(e){const t=ku(),n=ce(),r=Ee(),o=t.comment!==!1,a=S(()=>r.value.comment||o&&r.value.comment!==!1);return()=>i(F4,{identifier:r.value.commentID||n.value.path,darkmode:e.darkmode,style:{display:a.value?"block":"none"}})}}),z4=Et({enhance:({app:e})=>{V4(e),e.component("CommentService",H4)}});const G4=800,j4=2e3,U4={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},K4=!1,Y4=['.theme-hope-content div[class*="language-"] pre'],ni=!0,Xo=new Map,q4=()=>{const{copy:e}=Mp({legacy:!0}),t=Pr(U4),n=ce(),r=fp(),o=l=>{if(!l.hasAttribute("copy-code-registered")){const c=document.createElement("button");c.type="button",c.classList.add("copy-code-button"),c.innerHTML='<div class="copy-icon" />',c.setAttribute("aria-label",t.value.copy),c.setAttribute("data-copied",t.value.copied),l.parentElement&&l.parentElement.insertBefore(c,l),l.setAttribute("copy-code-registered","")}},a=()=>hn().then(()=>new Promise(l=>{setTimeout(()=>{Y4.forEach(c=>{document.querySelectorAll(c).forEach(o)}),l()},G4)})),s=(l,c,u)=>{let{innerText:d=""}=c;/language-(shellscript|shell|bash|sh|zsh)/.test(l.classList.toString())&&(d=d.replace(/^ *(\$|>) /gm,"")),e(d).then(()=>{u.classList.add("copied"),clearTimeout(Xo.get(u));const p=setTimeout(()=>{u.classList.remove("copied"),u.blur(),Xo.delete(u)},j4);Xo.set(u,p)})};pe(()=>{(!r.value||ni)&&a(),Ne("click",l=>{const c=l.target;if(c.matches('div[class*="language-"] > button.copy')){const u=c.parentElement,d=c.nextElementSibling;d&&s(u,d,c)}else if(c.matches('div[class*="language-"] div.copy-icon')){const u=c.parentElement,d=u.parentElement,p=u.nextElementSibling;p&&s(d,p,u)}}),ie(()=>n.value.path,()=>{(!r.value||ni)&&a()})})};var W4=Et({setup:()=>{q4()}});const X4=(e,t)=>t==="json"?JSON.parse(e):new Function(`let config,__chart_js_config__;
{
${e}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var Z4=B({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=Le(),n=Le(),r=H(!0);return pe(async()=>{const[{default:o}]=await Promise.all([h(()=>import("./auto-fa8841cf.js"),[]),new Promise(l=>setTimeout(l,800))]);o.defaults.maintainAspectRatio=!1;const a=X4(dn(e.config),e.type),s=n.value.getContext("2d");new o(s,a),r.value=!1}),()=>[e.title?i("div",{class:"chart-title"},decodeURIComponent(e.title)):null,r.value?i(Xt,{class:"chart-loading",height:192}):null,i("div",{ref:t,class:"chart-wrapper",id:e.id,style:{display:r.value?"none":"block"}},i("canvas",{ref:n,height:400}))]}});const Zr=Zn("VUEPRESS_CODE_TAB_STORE",{});var J4=B({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=H(e.active),r=Le([]),o=()=>{e.tabId&&(Zr.value[e.tabId]=e.data[n.value].id)},a=(u=n.value)=>{n.value=u<r.value.length-1?u+1:0,r.value[n.value].focus()},s=(u=n.value)=>{n.value=u>0?u-1:r.value.length-1,r.value[n.value].focus()},l=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=d):u.key==="ArrowRight"?(u.preventDefault(),a()):u.key==="ArrowLeft"&&(u.preventDefault(),s()),e.tabId&&(Zr.value[e.tabId]=e.data[n.value].id)},c=()=>{if(e.tabId){const u=e.data.findIndex(({id:d})=>Zr.value[e.tabId]===d);if(u!==-1)return u}return e.active};return pe(()=>{n.value=c(),ie(()=>Zr.value[e.tabId],(u,d)=>{if(e.tabId&&u!==d){const p=e.data.findIndex(({id:f})=>f===u);p!==-1&&(n.value=p)}})}),()=>e.data.length?i("div",{class:"code-tabs"},[i("div",{class:"code-tabs-nav",role:"tablist"},e.data.map(({id:u},d)=>{const p=d===n.value;return i("button",{type:"button",ref:f=>{f&&(r.value[d]=f)},class:["code-tabs-nav-tab",{active:p}],role:"tab","aria-controls":`codetab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,o()},onKeydown:f=>l(f,d)},t[`title${d}`]({value:u,isActive:p}))})),e.data.map(({id:u},d)=>{const p=d===n.value;return i("div",{class:["code-tab",{active:p}],id:`codetab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},t[`tab${d}`]({value:u,isActive:p}))})]):null}});const Tu=({active:e=!1},{slots:t})=>{var n;return i("div",{class:["code-group-item",{active:e}],"aria-selected":e},(n=t.default)==null?void 0:n.call(t))};Tu.displayName="CodeGroupItem";const Q4=B({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const n=H(-1),r=Le([]),o=(l=n.value)=>{n.value=l<r.value.length-1?l+1:0,r.value[n.value].focus()},a=(l=n.value)=>{n.value=l>0?l-1:r.value.length-1,r.value[n.value].focus()},s=(l,c)=>{l.key===" "||l.key==="Enter"?(l.preventDefault(),n.value=c):l.key==="ArrowRight"?(l.preventDefault(),o(c)):l.key==="ArrowLeft"&&(l.preventDefault(),a(c))};return()=>{var l;const c=(((l=t.default)==null?void 0:l.call(t))||[]).filter(u=>u.type.name==="CodeGroupItem").map(u=>(u.props===null&&(u.props={}),u));return c.length===0?null:(n.value<0||n.value>c.length-1?(n.value=c.findIndex(u=>"active"in u.props),n.value===-1&&(n.value=0)):c.forEach((u,d)=>{u.props.active=d===n.value}),i("div",{class:"code-group"},[i("div",{class:"code-group-nav"},c.map((u,d)=>{const p=d===n.value;return i("button",{type:"button",ref:f=>{f&&(r.value[d]=f)},class:["code-group-nav-tab",{active:p}],"aria-pressed":p,"aria-expanded":p,onClick:()=>{n.value=d},onKeydown:f=>s(f,d)},u.props.title)})),c]))}}});const ef=()=>i(se,{name:"back"},()=>i("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),tf=()=>i(se,{name:"home"},()=>i("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"})),nf='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',rf='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',of='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';const Zo={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},ri={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},af=(e,t,n)=>{const r=document.createElement(e);return Tr(t)&&Qe(t).forEach(o=>{if(o.indexOf("data"))r[o]=t[o];else{const a=o.replace("data","");r.dataset[a]=t[o]}}),n&&n.forEach(o=>{r.appendChild(o)}),r},_s=e=>({...Zo,...e,jsLib:Array.from(new Set([...Zo.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...Zo.cssLib||[],...e.cssLib||[]]))}),Cn=(e,t)=>{if(e[t]!==void 0)return e[t];const n=new Promise(r=>{var o;const a=document.createElement("script");a.src=t,(o=document.querySelector("body"))==null||o.appendChild(a),a.onload=()=>{r()}});return e[t]=n,n},sf=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=af("style",{innerHTML:t.css});e.appendChild(n)}},lf=(e,t,n)=>{const r=n.getScript();if(r&&Array.from(t.childNodes).every(o=>o.nodeName!=="SCRIPT")){const o=document.createElement("script");o.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .code-demo-container').shadowRoot;
${r}}`)),t.appendChild(o)}},cf=e=>{const t=Qe(e),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(r=>{const o=t.filter(a=>ri[r].types.includes(a));if(o.length){const a=o[0];n[r]=[e[a].replace(/^\n|\n$/g,""),ri[r].map[a]||a]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},Iu=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Pu=e=>`<div id="app">
${Iu(e)}
</div>`,uf=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,df=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Ou=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,pf=(e,t)=>{const n=_s(t),r=e.js[0]||"";return{...n,html:Iu(e.html[0]||""),js:r,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var o;return n.useBabel?((o=window.Babel.transform(r,{presets:["es2015"]}))==null?void 0:o.code)||"":r}}},ff=/<template>([\s\S]+)<\/template>/u,vf=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,hf=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,mf=(e,t)=>{const n=_s(t),r=e.html[0]||"",o=ff.exec(r),a=vf.exec(r),s=hf.exec(r),l=o?o[1].replace(/^\n|\n$/g,""):"",[c="",u=""]=a?[a[4].replace(/^\n|\n$/g,""),a[3]]:[],[d="",p=""]=s?[s[4].replace(/^\n|\n$/g,""),s[3]]:[],f=u===""&&(p===""||p==="css");return{...n,html:Pu(l),js:df(c),css:d,isLegal:f,jsLib:[n.vue,...n.jsLib],getScript:()=>{var v,y;const R=t.useBabel?((y=(v=window.Babel)==null?void 0:v.transform(c,{presets:["es2015"]}))==null?void 0:y.code)||"":c.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Ou(R)};appOptions.template=\`${l.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},gf=(e,t)=>{const n=_s(t);return{...n,html:Pu(""),js:uf(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var r,o;const a=((o=(r=window.Babel)==null?void 0:r.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Ou(a)}))`}}},Dn={},_f=e=>Promise.all([Cn(Dn,e.babel),Cn(Dn,e.react),Cn(Dn,e.reactDOM)]),yf=e=>{const t=[Cn(Dn,e.vue)];return e.useBabel&&t.push(Cn(Dn,e.babel)),Promise.all(t)},Ef=e=>e.useBabel?Cn(Dn,e.babel):Promise.resolve();var bf=B({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,r]=ya(!1),o=Le(),a=Le(),s=H("0"),l=H(!1),c=S(()=>JSON.parse(e.config?dn(e.config):"{}")),u=S(()=>{const y=JSON.parse(dn(e.code));return cf(y)}),d=S(()=>e.type==="react"?gf(u.value,c.value):e.type==="vue"?mf(u.value,c.value):pf(u.value,c.value)),p=S(()=>d.value.isLegal),f=(y=!1)=>{const R=o.value.attachShadow({mode:"open"}),A=document.createElement("div");A.classList.add("code-demo-app"),R.appendChild(A),p.value?(y&&(A.innerHTML=d.value.html),sf(R,d.value),lf(e.id,R,d.value),s.value="0"):s.value="auto",l.value=!0},v=()=>{switch(e.type){case"react":return _f(d.value).then(()=>f());case"vue":return yf(d.value).then(()=>f());default:return Ef(d.value).then(()=>f(!0))}};return pe(()=>{setTimeout(()=>{v()},800)}),()=>{var y;return i("div",{class:"code-demo-wrapper",id:e.id},[i("div",{class:"code-demo-header"},[d.value.isLegal?i("button",{type:"button",title:"toggle","aria-hidden":!0,class:["toggle-button",n.value?"down":"end"],onClick:()=>{s.value=n.value?"0":`${a.value.clientHeight+13.8}px`,r()}}):null,e.title?i("span",{class:"title"},decodeURIComponent(e.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?i("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[i("input",{type:"hidden",name:"html",value:d.value.html}),i("input",{type:"hidden",name:"js",value:d.value.js}),i("input",{type:"hidden",name:"css",value:d.value.css}),i("input",{type:"hidden",name:"wrap",value:"1"}),i("input",{type:"hidden",name:"panel_js",value:"3"}),i("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),i("button",{type:"submit",class:"jsfiddle-button",innerHTML:rf,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?i("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[i("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:u.value?u.value.html[1]:"none",js_pre_processor:u.value?u.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:u.value?u.value.css[1]:"none",editors:d.value.codepenEditors})}),i("button",{type:"submit",innerHTML:nf,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),l.value?null:i(Xt,{class:"code-demo-loading"}),i("div",{ref:o,class:"code-demo-container",style:{display:p.value&&l.value?"block":"none"}}),i("div",{class:"code-demo-code-wrapper",style:{height:s.value}},i("div",{ref:a,class:"code-demo-codes"},(y=t.default)==null?void 0:y.call(t)))])}}});const Sf=(async()=>{}).constructor,Rf=(e,t,n)=>t==="js"?Sf("myChart",`let width,height,option,__echarts_config__;
{
${e}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(n):Promise.resolve({option:JSON.parse(e)});var Af=B({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(e){const t=H(!0),n=Le();let r;return Ne("resize",Zc(()=>r==null?void 0:r.resize(),100)),pe(()=>{Promise.all([h(()=>import("./index-ae8c1e74.js"),[]),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{r=o.init(n.value);const{option:a,...s}=await Rf(dn(e.config),e.type,r);r.resize(s),r.setOption(a),t.value=!1})}),qn(()=>{r==null||r.dispose()}),()=>[e.title?i("div",{class:"echarts-title"},decodeURIComponent(e.title)):null,i("div",{class:"echarts-wrapper"},[i("div",{ref:n,class:"echarts-container",id:e.id}),t.value?i(Xt,{class:"echarts-loading",height:360}):null])]}});var ys={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},wf={...ys,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},kf={...ys,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},Tf={...ys,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const oi={ant:wf,vue:Tf,pie:kf};var If=B({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(e){let t=null;const n=Le(),r=H(!0),o=H(1),a=S(()=>oi[e.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${e.preset}`),oi.vue)),s=l=>l<419?.8:l>1280?1:.9;return pe(()=>{Promise.all([h(()=>import("./flowchart-d65a1d8e.js"),[]),new Promise(l=>setTimeout(l,800))]).then(([{parse:l}])=>{t=l(dn(e.code)),o.value=s(window.innerWidth),r.value=!1,t.draw(e.id,{...a.value,scale:o.value})}),Ne("resize",Zc(()=>{if(t){const l=s(window.innerWidth);o.value!==l&&(o.value=l,t.draw(e.id,{...a.value,scale:l}))}},100))}),()=>[r.value?i(Xt,{class:"flowchart-loading",height:192}):null,i("div",{ref:n,class:["flowchart-wrapper",e.preset],id:e.id,style:{display:r.value?"none":"block"}})]}});let Pf={};const Lu=Symbol(""),Of=()=>de(Lu),Lf=e=>{e.provide(Lu,Pf)},En={useMaxWidth:!1},Cf=e=>({dark:e,background:e?"#1e1e1e":"#fff",primaryColor:e?"#389d70":"#4abf8a",primaryBorderColor:e?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:e?"#fff":"#000",secondaryTextColor:e?"#ddd":"#333",tertiaryColor:e?"#282828":"#efeef4",tertiaryBorderColor:e?"#bbb":"#242424",tertiaryTextColor:e?"#ddd":"#333",noteBkgColor:e?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:e?"#f6d365":"#333",lineColor:e?"#d3d3d3":"#333",textColor:e?"#fff":"#242424",mainBkg:e?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:e?"#389d70":"#4abf8a",nodeTextColor:e?"#fff":"#242424",signalTextColor:e?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:e?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var Df=B({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(e){const t=Of(),n=Le(),r=S(()=>dn(e.code)),o=H(""),a=H(!1),s=async()=>{const[{default:u}]=await Promise.all([h(()=>import("./mermaid.core-777ede9e.js").then(d=>d.aQ),[]),new Promise(d=>setTimeout(d,800))]);u.initialize({theme:"base",themeVariables:Cf(a.value),flowchart:En,sequence:En,journey:En,gantt:En,er:En,pie:En,...t,startOnLoad:!1}),o.value=(await u.render(e.id,r.value)).svg},l=()=>{const{body:u}=document,d=document.createElement("div");d.classList.add("mermaid-preview"),d.innerHTML=o.value,u.appendChild(d),d.addEventListener("click",()=>{u.removeChild(d)})},c=()=>{const u=`data:image/svg+xml;charset=utf8,${o.value.replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,d=document.createElement("a");d.setAttribute("href",u),d.setAttribute("download",`${e.id}.svg`),d.click()};return pe(()=>{const u=document.documentElement,d=()=>u.classList.contains("dark")||u.getAttribute("data-theme")==="dark";a.value=d(),s(),Zp(u,()=>{a.value=d()},{attributeFilter:["class","data-theme"],attributes:!0}),ie(a,()=>s())}),()=>[i("div",{class:"mermaid-actions"},[i("button",{class:"preview-button",onClick:()=>l(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),i("button",{class:"download-button",onClick:()=>c(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),i("div",{ref:n,class:"mermaid-wrapper"},o.value?i("div",{class:"mermaid-content",innerHTML:o.value}):i(Xt,{class:"mermaid-loading",height:96}))]}});let xf={};const Cu=Symbol(""),Bf=()=>de(Cu),Nf=e=>{e.provide(Cu,xf)},$f={showCompileOutput:!1,clearConsole:!1,ssr:!1};let Mf=$f;const Du=Symbol(""),D5=()=>de(Du),Vf=e=>{e.provide(Du,Mf)},Ff=()=>h(()=>import("./highlight.esm-75b11b9d.js"),[]),Hf=()=>h(()=>import("./markdown.esm-0191f9da.js"),[]),zf=()=>h(()=>import("./math.esm-70a288c8.js"),[]),Gf=()=>h(()=>import("./notes.esm-a106bb2c.js"),[]),jf=()=>h(()=>import("./reveal.esm-ec5549c1.js"),[]),Uf=()=>h(()=>import("./search.esm-7e6792e2.js"),[]),Kf=()=>h(()=>import("./zoom.esm-b83b91d0.js"),[]);const Yf=()=>[jf(),Hf(),Ff(),zf(),Uf(),Gf(),Kf()];var qf=B({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(e){const t=Bf(),n=Ee(),r=H(""),o=H(!0),a=Le();let s=null;const l=async c=>{const u=[new Promise(v=>setTimeout(v,800)),...Yf()],[,d,...p]=await Promise.all(u),f=new d.default(c,{plugins:p.map(({default:v})=>v)});return await f.initialize({backgroundTransition:"slide",hash:n.value.layout==="Slide",mouseWheel:n.value.layout==="Slide",transition:"slide",slideNumber:!0,...t,...n.value.reveal||{},embedded:n.value.layout!=="Slide"}),f};return pe(async()=>{const c=a.value;c&&(r.value=dn(e.code),c.setAttribute("id",e.id),c.setAttribute("data-theme",e.theme),s=await l(c),o.value=!1)}),qn(()=>{s==null||s.destroy()}),()=>i("div",{class:"presentation-wrapper"},[i("div",{ref:a,class:["reveal","reveal-viewport"]},i("div",{class:"slides",innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${r.value}<\/script></section>`})),o.value?i(Xt,{class:"reveal-loading",height:400}):null])}});var Wf=B({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(e){return()=>[i("div",{class:"playground-wrapper"},[i("div",{class:"title-wrapper"},[e.title?i("div",{class:"title"},decodeURIComponent(e.title)):null,i("div",{class:"actions"},[i("a",{class:"action",href:decodeURIComponent(e.link),target:"_blank",innerHTML:of})])]),i("div",{class:"playground-container"},i("iframe",{src:decodeURIComponent(e.link)}))])]}});const Jo=Zn("VUEPRESS_TAB_STORE",{});var Xf=B({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=H(e.active),r=Le([]),o=()=>{e.tabId&&(Jo.value[e.tabId]=e.data[n.value].id)},a=(u=n.value)=>{n.value=u<r.value.length-1?u+1:0,r.value[n.value].focus()},s=(u=n.value)=>{n.value=u>0?u-1:r.value.length-1,r.value[n.value].focus()},l=(u,d)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),n.value=d):u.key==="ArrowRight"?(u.preventDefault(),a()):u.key==="ArrowLeft"&&(u.preventDefault(),s()),o()},c=()=>{if(e.tabId){const u=e.data.findIndex(({id:d})=>Jo.value[e.tabId]===d);if(u!==-1)return u}return e.active};return pe(()=>{n.value=c(),ie(()=>Jo.value[e.tabId],(u,d)=>{if(e.tabId&&u!==d){const p=e.data.findIndex(({id:f})=>f===u);p!==-1&&(n.value=p)}})}),()=>e.data.length?i("div",{class:"tab-list"},[i("div",{class:"tab-list-nav",role:"tablist"},e.data.map(({id:u},d)=>{const p=d===n.value;return i("button",{type:"button",ref:f=>{f&&(r.value[d]=f)},class:["tab-list-nav-item",{active:p}],role:"tab","aria-controls":`tab-${e.id}-${d}`,"aria-selected":p,onClick:()=>{n.value=d,o()},onKeydown:f=>l(f,d)},t[`title${d}`]({value:u,isActive:p}))})),e.data.map(({id:u},d)=>{const p=d===n.value;return i("div",{class:["tab-item",{active:p}],id:`tab-${e.id}-${d}`,role:"tabpanel","aria-expanded":p},t[`tab${d}`]({value:u,isActive:p}))})]):null}});const Zf=Et({enhance:({app:e})=>{e.component("ChartJS",Z4),e.component("CodeTabs",J4),gt("CodeGroup",e)||e.component("CodeGroup",Q4),gt("CodeGroupItem",e)||e.component("CodeGroupItem",Tu),e.component("CodeDemo",bf),e.component("ECharts",Af),e.component("FlowChart",If),Lf(e),e.component("Mermaid",Df),Nf(e),e.component("Presentation",qf),e.component("Playground",Wf),e.component("Tabs",Xf),Vf(e),e.component("VuePlayground",w(()=>h(()=>import("./VuePlayground-a60f4327.js"),[])))}});let Jf={};const xu=Symbol(""),Qf=()=>de(xu),e6=e=>{e.provide(xu,Jf)};const t6=".theme-hope-content :not(a) > img:not([no-view])",n6={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},r6=800,o6='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',a6=e=>me(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),Bu=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(Bu(e)),e.onerror=r=>n(r))}),s6=()=>{const{isSupported:e,toggle:t}=vs(),n=Qf(),r=Pr(n6),o=ce();let a;const s=c=>{c.on("uiRegister",()=>{e&&c.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),c.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(u,d)=>{u.setAttribute("download",""),u.setAttribute("target","_blank"),u.setAttribute("rel","noopener"),d.on("change",()=>{u.setAttribute("href",d.currSlide.data.src)})}}),c.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(u,d)=>{const p=[];let f=-1;for(let v=0;v<d.getNumItems();v++){const y=document.createElement("div");y.className="photo-swipe-bullet",y.onclick=R=>{d.goTo(p.indexOf(R.target))},p.push(y),u.appendChild(y)}d.on("change",()=>{f>=0&&p[f].classList.remove("active"),p[d.currIndex].classList.add("active"),f=d.currIndex})}})})},l=()=>Promise.all([h(()=>import("./photoswipe.esm-2450701e.js"),[]),hn().then(()=>new Promise(c=>setTimeout(c,r6)).then(()=>a6(t6)))]).then(([{default:c},u])=>{const d=u.map(p=>({html:o6,element:p,msrc:p.src}));u.forEach((p,f)=>{const v=()=>{a=new c({preloaderDelay:0,showHideAnimationType:"zoom",...r.value,...n,dataSource:d,index:f,closeOnVerticalDrag:!0,wheelToZoom:!1}),s(a),a.addFilter("thumbEl",()=>p),a.addFilter("placeholderSrc",()=>p.src),a.init()};p.style.cursor="zoom-in",p.addEventListener("click",()=>{v()}),p.addEventListener("keypress",({key:y})=>{y==="Enter"&&v()})}),u.forEach((p,f)=>{Bu(p).then(v=>{d.splice(f,1,v),a==null||a.refreshSlideContent(f)})})});pe(()=>{Ne("wheel",()=>{a==null||a.close()}),l(),ie(()=>o.value.path,()=>l())})};var l6=Et({enhance:({app:e})=>{e6(e)},setup:()=>{s6()}});const Nu=()=>{const e=ce();return S(()=>e.value.readingTime??null)},Aa=typeof{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}}>"u"?null:{"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},$u=(e,t)=>{const{minutes:n,words:r}=e,{less1Minute:o,word:a,time:s}=t;return{time:n<1?o:s.replace("$time",Math.round(n).toString()),words:a.replace("$word",r.toString())}},ai={words:"",time:""},Mu=()=>Aa?Pr(Aa):S(()=>null),i6=()=>{if(typeof Aa>"u")return S(()=>ai);const e=Nu(),t=Mu();return S(()=>e.value&&t.value?$u(e.value,t.value):ai)},Jt=()=>Ru(),le=()=>D4(),Jn=()=>S(()=>!!Jt().value.pure);var Qo=B({name:"EmptyComponent",setup:()=>()=>null});const c6="719px",u6="1440px",d6="true",Es={mobileBreakPoint:c6,pcBreakPoint:u6,enableThemeColor:d6,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#3eaf7c","theme-4":"#fb9b5f"},bs={},Vu=e=>{const{icon:t="",color:n,size:r}=e,o={};return n&&(o.color=n),r&&(o.height=Number.isNaN(Number(r))?r:`${r}px`),mn(t)?i("img",{class:"icon",src:t,"no-view":"",style:o}):Po(t)?i("img",{class:"icon",src:Ge(t),"no-view":"",style:o}):i(Ze("FontIcon"),e)};Vu.displayName="HopeIcon";var et=Vu,Se=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(Se||{}),Fu=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(Fu||{});const xn=(e,t=!1)=>{const n=tt(),{fullPath:r,meta:o,name:a}=Or(n,encodeURI(e));return{text:!t&&o[Se.shortTitle]?o[Se.shortTitle]:o[Se.title]||e,link:a==="404"?e:r,...o[Se.icon]?{icon:o[Se.icon]}:{}}},Dr=()=>{const e=tt(),t=wt();return n=>{if(n)if(Po(n))t.path!==n&&e.push(n);else if(mn(n)||Ec(n))window&&window.open(n);else{const r=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${r}/${encodeURI(n)}`)}}},Hu=()=>{const e=le(),t=Ee();return S(()=>{const{author:n}=t.value;return n?Er(n):n===!1?[]:Er(e.value.author,!1)})},p6=()=>{const e=Ee();return S(()=>Uc(e.value.category).map(t=>{var n,r;return{name:t,path:((r=(n=de(Symbol.for("categoryMap")))==null?void 0:n.value.map[t])==null?void 0:r.path)||""}}))},f6=()=>{const e=Ee();return S(()=>Kc(e.value.tag).map(t=>{var n,r;return{name:t,path:((r=(n=de(Symbol.for("tagMap")))==null?void 0:n.value.map[t])==null?void 0:r.path)||""}}))},v6=()=>{const e=Ee(),t=ce();return S(()=>{const n=ds(e.value.date);if(n)return n;const{createdTime:r}=t.value.git||{};return r?new Date(r):null})},h6=()=>{const e=le(),t=ce(),n=Ee(),r=Hu(),o=p6(),a=f6(),s=v6(),l=Nu(),c=i6(),u=S(()=>({author:r.value,category:o.value,date:s.value,localizedDate:t.value.localizedDate,tag:a.value,isOriginal:n.value.isOriginal||!1,readingTime:l.value,readingTimeLocale:c.value,pageview:"pageview"in n.value?n.value.pageview:!0})),d=S(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:u,items:d}},{mobileBreakPoint:m6,pcBreakPoint:g6}=Es,si=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,xr=()=>{const e=H(!1),t=H(!1),n=()=>{e.value=window.innerWidth<=(si(m6)??719),t.value=window.innerWidth>=(si(g6)??1440)};return pe(()=>{n(),Ne("resize",n,!1),Ne("orientationchange",n,!1)}),{isMobile:e,isPC:t}},zu=Symbol(""),Br=()=>{const e=de(zu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},_6=e=>{const t=Jt(),n=Yp(),r=Zn("vuepress-theme-hope-scheme","auto"),o=S(()=>t.value.darkmode||"switch"),a=S(()=>{const l=o.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?n.value:l==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&n.value}),s=S(()=>{const l=o.value;return l==="switch"||l==="toggle"});e.provide(zu,{canToggle:s,config:o,isDarkmode:a,status:r}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>a.value}})},y6=()=>{const{isDarkmode:e}=Br(),t=(n=e.value)=>document.documentElement.setAttribute("data-theme",n?"dark":"light");pe(()=>{ie(e,t,{immediate:!0})})};var Ke=B({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:r}){const o=wt(),a=Pc(),s=Yn(e,"config"),l=S(()=>mn(s.value.link)),c=S(()=>Ec(s.value.link)||x2(s.value.link)),u=S(()=>c.value?void 0:s.value.target||(l.value?"_blank":void 0)),d=S(()=>u.value==="_blank"),p=S(()=>!l.value&&!c.value&&!d.value),f=S(()=>c.value?void 0:s.value.rel||(d.value?"noopener noreferrer":void 0)),v=S(()=>s.value.ariaLabel||s.value.text),y=S(()=>{if(e.exact)return!1;const A=Qe(a.value.locales);return A.length?A.every(g=>g!==s.value.link):s.value.link!=="/"}),R=S(()=>p.value?s.value.activeMatch?new RegExp(s.value.activeMatch).test(o.path):y.value?Fn(o.path,s.value.link):o.path===s.value.link:!1);return()=>{const{before:A,after:g,default:E}=r,{text:D,icon:x,link:U}=s.value;return p.value?i(Me,{to:U,"aria-label":v.value,...t,class:["nav-link",{active:R.value},t.class],onFocusout:()=>n("focusout")},()=>E?E():[A?A():i(et,{icon:x}),D,g==null?void 0:g()]):i("a",{href:U,rel:f.value,target:u.value,"aria-label":v.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},E?E():[A?A():i(et,{icon:x}),D,e.noExternalLinkIcon?null:i(bu),g==null?void 0:g()])}}});const Gn=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(e.path):ps(e,t.link)?!0:t.children&&!n?t.children.some(r=>Gn(e,r)):!1,Gu=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?Gu(e,n):n.type==="page"&&Gn(e,n,!0))||"prefix"in t&&ps(e,t.prefix):!1,ju=(e,t)=>me(e.link)?i(Ke,{...t,config:e}):i("p",t,[i(et,{icon:e.icon}),e.text]),Uu=e=>{const t=wt();return e?i("ul",{class:"sidebar-sub-headers"},e.map(n=>{const r=Gn(t,n,!0);return i("li",{class:"sidebar-sub-header"},[ju(n,{class:["sidebar-link","heading",{active:r}]}),Uu(n.children)])})):null},ea=(e="",t="")=>Po(t)?t:`${L2(e)}${t}`,E6=(e,t)=>{const n=ce();return{type:"heading",text:e.title,link:`${n.value.path}#${e.slug}`,children:Ss(e.children,t)}},Ss=(e,t)=>t>0?e.map(n=>E6(n,t-1)):[],Ku=e=>{const t=ce();return Ss(t.value.headers,e)},wa=(e,t,n="")=>{const r=ce(),o=(a,s=n)=>{var l;const c=me(a)?xn(ea(s,a)):a.link?{...a,...fo(a.link)?{}:{link:xn(ea(s,a.link)).link}}:a;if("children"in c){const u=ea(s,c.prefix),d=c.children==="structure"?bs[u]:c.children;return{type:"group",...c,prefix:u,children:d.map(p=>o(p,u))}}return{type:"page",...c,children:c.link===r.value.path?Ss(((l=r.value.headers[0])==null?void 0:l.level)===1?r.value.headers[0].children:r.value.headers,t):[]}};return e.map(a=>o(a))},b6=(e,t)=>{const n=ce(),r=Qe(e).sort((o,a)=>a.length-o.length);for(const o of r)if(Fn(decodeURI(n.value.path),o)){const a=e[o];return a?wa(a==="structure"?bs[o]:a==="heading"?Ku(t):a,t,o):[]}return console.warn(`${n.value.path} is missing sidebar config.`),[]},S6=()=>{const e=xt(),t=Ee(),n=le(),r=t.value.home?!1:t.value.sidebar??n.value.sidebar??"structure",o=t.value.headerDepth??n.value.headerDepth??2;return r===!1?[]:r==="heading"?Ku(o):r==="structure"?wa(bs[e.value],o,e.value):J(r)?wa(r,o):Tr(r)?b6(r,o):[]},Yu=Symbol(""),R6=()=>{const e=S(()=>S6());mt(Yu,e)},Rs=()=>{const e=de(Yu);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var A6=B({name:"PageFooter",setup(){const e=Ee(),t=le(),n=Hu(),r=S(()=>{const{copyright:s,footer:l}=e.value;return l!==!1&&!!(s||l||t.value.displayFooter)}),o=S(()=>{const{footer:s}=e.value;return s===!1?!1:me(s)?s:t.value.footer||""}),a=S(()=>"copyright"in e.value?e.value.copyright:"copyright"in t.value?t.value.copyright:n.value.length?`Copyright © ${new Date().getFullYear()} ${n.value[0].name}`:!1);return()=>r.value?i("footer",{class:"vp-footer-wrapper"},[o.value?i("div",{class:"vp-footer",innerHTML:o.value}):null,a.value?i("div",{class:"vp-copyright",innerHTML:a.value}):null]):null}}),w6=B({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ce(),r=Yn(e,"config"),o=S(()=>r.value.ariaLabel||r.value.text),a=H(!1);ie(()=>n.value.path,()=>{a.value=!1});const s=l=>{l.detail===0&&(a.value=!a.value)};return()=>{var l;return i("div",{class:["dropdown-wrapper",{open:a.value}]},[i("button",{type:"button",class:"dropdown-title","aria-label":o.value,onClick:s},[((l=t.title)==null?void 0:l.call(t))||i("span",{class:"title"},[i(et,{icon:r.value.icon}),e.config.text]),i("span",{class:"arrow"}),i("ul",{class:"nav-dropdown"},r.value.children.map((c,u)=>{const d=u===r.value.children.length-1;return i("li",{class:"dropdown-item"},"children"in c?[i("h4",{class:"dropdown-subtitle"},c.link?i(Ke,{config:c,onFocusout:()=>{c.children.length===0&&d&&(a.value=!1)}}):i("span",c.text)),i("ul",{class:"dropdown-subitem-wrapper"},c.children.map((p,f)=>i("li",{class:"dropdown-subitem"},i(Ke,{config:p,onFocusout:()=>{f===c.children.length-1&&d&&(a.value=!1)}}))))]:i(Ke,{config:c,onFocusout:()=>{d&&(a.value=!1)}}))}))])])}}});const qu=(e,t="")=>me(e)?xn(`${t}${e}`):"children"in e?{...e,...e.link&&!fo(e.link)?xn(`${t}${e.link}`):{},children:e.children.map(n=>qu(n,`${t}${e.prefix||""}`))}:{...e,link:fo(e.link)?e.link:xn(`${t}${e.link}`).link},Wu=()=>S(()=>(le().value.navbar||[]).map(e=>qu(e))),k6=()=>{const e=le(),t=S(()=>e.value.repo||null),n=S(()=>t.value?gp(t.value):null),r=S(()=>t.value?qc(t.value):null),o=S(()=>n.value?e.value.repoLabel??(r.value===null?"Source":r.value):null);return S(()=>!n.value||!o.value||e.value.repoDisplay===!1?null:{type:r.value||"Source",label:o.value,link:n.value})};var T6=B({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=ce(),n=Yn(e,"config"),r=S(()=>n.value.ariaLabel||n.value.text),o=H(!1);ie(()=>t.value.path,()=>{o.value=!1});const a=(s,l)=>l[l.length-1]===s;return()=>[i("button",{type:"button",class:["nav-screen-dropdown-title",{active:o.value}],"aria-label":r.value,onClick:()=>{o.value=!o.value}},[i("span",{class:"title"},[i(et,{icon:n.value.icon}),e.config.text]),i("span",{class:["arrow",o.value?"down":"end"]})]),i("ul",{class:["nav-screen-dropdown",{hide:!o.value}]},n.value.children.map(s=>i("li",{class:"dropdown-item"},"children"in s?[i("h4",{class:"dropdown-subtitle"},s.link?i(Ke,{config:s,onFocusout:()=>{a(s,n.value.children)&&s.children.length===0&&(o.value=!1)}}):i("span",s.text)),i("ul",{class:"dropdown-subitem-wrapper"},s.children.map(l=>i("li",{class:"dropdown-subitem"},i(Ke,{config:l,onFocusout:()=>{a(l,s.children)&&a(s,n.value.children)&&(o.value=!1)}}))))]:i(Ke,{config:s,onFocusout:()=>{a(s,n.value.children)&&(o.value=!1)}}))))]}}),I6=B({name:"NavScreenLinks",setup(){const e=Wu();return()=>e.value.length?i("nav",{class:"nav-screen-links"},e.value.map(t=>i("div",{class:"navbar-links-item"},"children"in t?i(T6,{config:t}):i(Ke,{config:t})))):null}});const Xu=()=>i(se,{name:"dark"},()=>i("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Xu.displayName="DarkIcon";const Zu=()=>i(se,{name:"light"},()=>i("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Zu.displayName="LightIcon";const Ju=()=>i(se,{name:"auto"},()=>i("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Ju.displayName="AutoIcon";const Qu=()=>i(se,{name:"enter-fullscreen"},()=>i("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Qu.displayName="EnterFullScreenIcon";const e1=()=>i(se,{name:"cancel-fullscreen"},()=>i("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));e1.displayName="CancelFullScreenIcon";const t1=()=>i(se,{name:"outlook"},()=>[i("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);t1.displayName="OutlookIcon";var n1=B({name:"AppearanceSwitch",setup(){const{config:e,status:t}=Br(),n=()=>{e.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"};return()=>i("button",{type:"button",id:"appearance-switch",onClick:()=>n()},[i(Ju,{style:{display:t.value==="auto"?"block":"none"}}),i(Xu,{style:{display:t.value==="dark"?"block":"none"}}),i(Zu,{style:{display:t.value==="light"?"block":"none"}})])}}),P6=B({name:"AppearanceMode",setup(){const e=le(),{canToggle:t}=Br(),n=S(()=>e.value.outlookLocales.darkmode);return()=>t.value?i("div",{class:"appearance-wrapper"},[i("label",{class:"appearance-title",for:"appearance-switch"},n.value),i(n1)]):null}});const ta="VUEPRESS_THEME_COLOR";var O6=B({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const r=document.documentElement.classList,o=Qe(e.themeColor);if(!n){localStorage.removeItem(ta),r.remove(...o);return}r.remove(...o.filter(a=>a!==n)),r.add(n),localStorage.setItem(ta,n)};return pe(()=>{const n=localStorage.getItem(ta);n&&t(n)}),()=>i("ul",{id:"theme-color-picker"},[i("li",i("span",{class:"theme-color",onClick:()=>t()})),Xn(e.themeColor).map(([n,r])=>i("li",i("span",{style:{background:r},onClick:()=>t(n)})))])}});const Bn=Es.enableThemeColor==="true",L6=Bn?vp(Xn(Es).filter(([e])=>e.startsWith("theme-"))):{};var C6=B({name:"ThemeColor",setup(){const e=le(),t=S(()=>e.value.outlookLocales.themeColor);return()=>Bn?i("div",{class:"theme-color-wrapper"},[i("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),i(O6,{themeColor:L6})]):null}}),r1=B({name:"ToggleFullScreenButton",setup(){const e=le(),{isSupported:t,isFullscreen:n,toggle:r}=vs(),o=S(()=>e.value.outlookLocales.fullscreen);return()=>t?i("div",{class:"full-screen-wrapper"},[i("label",{class:"full-screen-title",for:"full-screen-switch"},o.value),i("button",{type:"button",class:"full-screen",id:"full-screen-switch",ariaPressed:n.value,onClick:()=>r()},n.value?i(e1):i(Qu))]):null}}),o1=B({name:"OutlookSettings",setup(){const e=Jt(),t=Jn(),n=S(()=>!t.value&&e.value.fullscreen);return()=>i(To,()=>[Bn?i(C6):null,i(P6),n.value?i(r1):null])}}),D6=B({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const r=ce(),{isMobile:o}=xr(),a=Le(),s=ou(a);return pe(()=>{a.value=document.body,ie(o,l=>{!l&&e.show&&(s.value=!1,t("close"))}),ie(()=>r.value.path,()=>{s.value=!1,t("close")})}),qn(()=>{s.value=!1}),()=>i(Wt,{name:"fade",onEnter:()=>{s.value=!0},onAfterLeave:()=>{s.value=!1}},()=>{var l,c;return e.show?i("div",{id:"nav-screen"},i("div",{class:"vp-nav-screen-container"},[(l=n.before)==null?void 0:l.call(n),i(I6),i("div",{class:"vp-outlook-wrapper"},i(o1)),(c=n.after)==null?void 0:c.call(n)])):null})}}),x6=B({name:"NavbarBrand",setup(){const e=xt(),t=ko(),n=le(),r=S(()=>n.value.home||e.value),o=S(()=>t.value.title),a=S(()=>n.value.navTitle??o.value),s=S(()=>n.value.logo?Ge(n.value.logo):null),l=S(()=>n.value.logoDark?Ge(n.value.logoDark):null);return()=>i(Me,{to:r.value,class:"vp-brand"},()=>[s.value?i("img",{class:["vp-nav-logo",{light:!!l.value}],src:s.value,alt:o.value}):null,l.value?i("img",{class:["vp-nav-logo dark"],src:l.value,alt:o.value}):null,a.value?i("span",{class:["vp-site-name",{"hide-in-pad":s.value&&n.value.hideSiteNameOnMobile!==!1}]},a.value):null])}}),B6=B({name:"NavbarLinks",setup(){const e=Wu();return()=>e.value.length?i("nav",{class:"vp-nav-links"},e.value.map(t=>i("div",{class:"nav-item hide-in-mobile"},"children"in t?i(w6,{config:t}):i(Ke,{config:t})))):null}}),N6=B({name:"RepoLink",components:{BitbucketIcon:Hc,GiteeIcon:Fc,GitHubIcon:Mc,GitLabIcon:Vc,SourceIcon:zc},setup(){const e=k6();return()=>e.value?i("div",{class:"nav-item"},i("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},i(Ze(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const a1=({active:e=!1},{emit:t})=>i("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},i("span",[i("span",{class:"vp-top"}),i("span",{class:"vp-middle"}),i("span",{class:"vp-bottom"})]));a1.displayName="ToggleNavbarButton";var $6=a1;const ka=(e,{emit:t})=>i("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},i("span",{class:"icon"}));ka.displayName="ToggleSidebarButton",ka.emits=["toggle"];var M6=ka,V6=B({name:"OutlookButton",setup(){const{isSupported:e}=vs(),t=Jt(),n=Jn(),r=ce(),{canToggle:o}=Br(),a=H(!1),s=S(()=>!n.value&&t.value.fullscreen&&e);return ie(()=>r.value.path,()=>{a.value=!1}),()=>o.value||s.value||Bn?i("div",{class:"nav-item hide-in-mobile"},o.value&&!s.value&&!Bn?i(n1):s.value&&!o.value&&!Bn?i(r1):i("button",{type:"button",class:["outlook-button",{open:a.value}],tabindex:"-1","aria-hidden":!0},[i(t1),i("div",{class:"outlook-dropdown"},i(o1))])):null}}),F6=B({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const r=le(),{isMobile:o}=xr(),a=H(!1),s=S(()=>{const{navbarAutoHide:d="mobile"}=r.value;return d!=="none"&&(d==="always"||o.value)}),l=S(()=>r.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:x6,Language:Qo,Links:B6,Repo:N6,Outlook:V6,Search:gt("Docsearch")?Ze("Docsearch"):gt("SearchBox")?Ze("SearchBox"):Qo},u=d=>c[d]??(gt(d)?Ze(d):Qo);return()=>{var d,p,f,v,y,R;return[i("header",{class:["vp-navbar",{"auto-hide":s.value,"hide-icon":r.value.navbarIcon===!1}],id:"navbar"},[i("div",{class:"vp-navbar-start"},[i(M6,{onToggle:()=>{a.value&&(a.value=!1),t("toggleSidebar")}}),(d=n.startBefore)==null?void 0:d.call(n),(l.value.start||[]).map(A=>i(u(A))),(p=n.startAfter)==null?void 0:p.call(n)]),i("div",{class:"vp-navbar-center"},[(f=n.centerBefore)==null?void 0:f.call(n),(l.value.center||[]).map(A=>i(u(A))),(v=n.centerAfter)==null?void 0:v.call(n)]),i("div",{class:"vp-navbar-end"},[(y=n.endBefore)==null?void 0:y.call(n),(l.value.end||[]).map(A=>i(u(A))),(R=n.endAfter)==null?void 0:R.call(n),i($6,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),i(D6,{show:a.value,onClose:()=>{a.value=!1}},{before:()=>{var A;return(A=n.screenTop)==null?void 0:A.call(n)},after:()=>{var A;return(A=n.screenBottom)==null?void 0:A.call(n)}})]}}}),H6=B({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=wt();return()=>[ju(e.config,{class:["sidebar-link",`sidebar-${e.config.type}`,{active:Gn(t,e.config,!0)}],exact:!0}),Uu(e.config.children)]}}),z6=B({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=wt(),r=S(()=>Gn(n,e.config)),o=S(()=>Gn(n,e.config,!0));return()=>{const{collapsible:a,children:s=[],icon:l,prefix:c,link:u,text:d}=e.config;return i("section",{class:"sidebar-group"},[i(a?"button":"p",{class:["sidebar-heading",{clickable:a||u,exact:o.value,active:r.value}],...a?{type:"button",onClick:()=>t("toggle"),onKeydown:p=>{p.key==="Enter"&&t("toggle")}}:{}},[i(et,{icon:l}),u?i(Ke,{class:"title",config:{text:d,link:u},noExternalLinkIcon:!0}):i("span",{class:"title"},d),a?i("span",{class:["arrow",e.open?"down":"end"]}):null]),e.open||!a?i(s1,{key:c,config:s}):null])}}}),s1=B({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=wt(),n=H(-1),r=o=>{n.value=o===n.value?-1:o};return ie(()=>t.path,()=>{const o=e.config.findIndex(a=>Gu(t,a));n.value=o},{immediate:!0,flush:"post"}),()=>i("ul",{class:"sidebar-links"},e.config.map((o,a)=>i("li",o.type==="group"?i(z6,{config:o,open:a===n.value,onToggle:()=>r(a)}):i(H6,{config:o}))))}}),G6=B({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=wt(),r=le(),o=Rs(),a=Le();return pe(()=>{ie(()=>n.hash,s=>{const l=document.querySelector(`.sidebar a.sidebar-link[href="${n.path}${s}"]`);if(!l)return;const{top:c,height:u}=a.value.getBoundingClientRect(),{top:d,height:p}=l.getBoundingClientRect();d<c?l.scrollIntoView(!0):d+p>c+u&&l.scrollIntoView(!1)})}),()=>{var s,l,c;return i("aside",{class:["sidebar",{"hide-icon":r.value.sidebarIcon===!1}],id:"sidebar",ref:a},[(s=t.top)==null?void 0:s.call(t),((l=t.default)==null?void 0:l.call(t))||i(s1,{config:o.value}),(c=t.bottom)==null?void 0:c.call(t)])}}}),As=B({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=tt(),r=ce(),o=Ee(),a=le(),{isMobile:s,isPC:l}=xr(),[c,u]=ya(!1),[d,p]=ya(!1),f=Rs(),v=H(!1),y=S(()=>e.noNavbar||o.value.navbar===!1||a.value.navbar===!1?!1:!!(r.value.title||a.value.logo||a.value.repo||a.value.navbar)),R=S(()=>e.noSidebar?!1:o.value.sidebar!==!1&&f.value.length!==0&&!o.value.home),A=S(()=>e.noToc||o.value.home?!1:o.value.toc||a.value.toc!==!1&&o.value.toc!==!1),g={x:0,y:0},E=C=>{g.x=C.changedTouches[0].clientX,g.y=C.changedTouches[0].clientY},D=C=>{const W=C.changedTouches[0].clientX-g.x,I=C.changedTouches[0].clientY-g.y;Math.abs(W)>Math.abs(I)*1.5&&Math.abs(W)>40&&(W>0&&g.x<=80?u(!0):u(!1))},x=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let U=0;return Ne("scroll",Sp(()=>{const C=x();C<=58||C<U?v.value=!1:U+200<C&&!c.value&&(v.value=!0),U=C},300,!0)),ie(s,C=>{C||u(!1)}),pe(()=>{const C=ou(document.body);ie(c,I=>{C.value=I});const W=n.afterEach(()=>{u(!1)});qn(()=>{C.value=!1,W()})}),()=>i(gt("GlobalEncrypt")?Ze("GlobalEncrypt"):$c,()=>i("div",{class:["theme-container",{"no-navbar":!y.value,"no-sidebar":!R.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":A.value,"hide-navbar":v.value,"sidebar-collapsed":!s.value&&!l.value&&d.value,"sidebar-open":s.value&&c.value},o.value.containerClass||""],onTouchStart:E,onTouchEnd:D},[y.value?i(F6,{onToggleSidebar:()=>u()},{startBefore:()=>{var C;return(C=t.navbarStartBefore)==null?void 0:C.call(t)},startAfter:()=>{var C;return(C=t.navbarStartAfter)==null?void 0:C.call(t)},centerBefore:()=>{var C;return(C=t.navbarCenterBefore)==null?void 0:C.call(t)},centerAfter:()=>{var C;return(C=t.navbarCenterAfter)==null?void 0:C.call(t)},endBefore:()=>{var C;return(C=t.navbarEndBefore)==null?void 0:C.call(t)},endAfter:()=>{var C;return(C=t.navbarEndAfter)==null?void 0:C.call(t)},screenTop:()=>{var C;return(C=t.navScreenTop)==null?void 0:C.call(t)},screenBottom:()=>{var C;return(C=t.navScreenBottom)==null?void 0:C.call(t)}}):null,i(Wt,{name:"fade"},()=>c.value?i("div",{class:"sidebar-mask",onClick:()=>u(!1)}):null),i(Wt,{name:"fade"},()=>s.value?null:i("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},i("span",{class:["arrow",d.value?"end":"start"]}))),i(G6,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var C;return(C=t.sidebarTop)==null?void 0:C.call(t)},bottom:()=>{var C;return(C=t.sidebarBottom)==null?void 0:C.call(t)}}),t.default(),i(A6)]))}}),ge=B({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=o=>{o.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,o.style.transform="translateY(-20px)",o.style.opacity="0"},r=o=>{o.style.transform="translateY(0)",o.style.opacity="1"};return()=>i(e.type==="single"?Wt:v2,{name:"drop",appear:e.appear,onAppear:n,onAfterAppear:r,onEnter:n,onAfterEnter:r,onBeforeLeave:n},()=>t.default())}});const Ta=({custom:e})=>i(is,{class:["theme-hope-content",{custom:e}]});Ta.displayName="MarkdownContent",Ta.props={custom:Boolean};var ws=Ta;const l1=()=>i(se,{name:"author"},()=>i("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));l1.displayName="AuthorIcon";const i1=()=>i(se,{name:"calendar"},()=>i("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));i1.displayName="CalendarIcon";const c1=()=>i(se,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));c1.displayName="CategoryIcon";const u1=()=>i(se,{name:"print"},()=>i("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));u1.displayName="PrintIcon";const d1=()=>i(se,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));d1.displayName="TagIcon";const p1=()=>i(se,{name:"timer"},()=>i("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));p1.displayName="TimerIcon";const f1=()=>i(se,{name:"word"},()=>[i("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),i("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);f1.displayName="WordIcon";const Qt=()=>{const e=le();return S(()=>e.value.metaLocales)};var j6=B({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=Qt();return()=>e.author.length?i("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(l1),i("span",e.author.map(n=>n.url?i("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):i("span",{class:"page-author-item"},n.name))),i("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),U6=B({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=tt(),n=ce(),r=Qt(),o=(a,s="")=>{s&&n.value.path!==s&&(a.preventDefault(),t.push(s))};return()=>e.category.length?i("span",{class:"page-category-info","aria-label":`${r.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(c1),e.category.map(({name:a,path:s})=>i("span",{class:["page-category-item",{[`category${Io(a,9)}`]:!e.pure,clickable:s}],role:s?"navigation":"",onClick:l=>o(l,s)},a)),i("meta",{property:"articleSection",content:e.category.map(({name:a})=>a).join(",")})]):null}}),K6=B({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=ss(),n=Qt();return()=>e.date?i("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(i1),i("span",i(To,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),i("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),Y6=B({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=Qt();return()=>e.isOriginal?i("span",{class:"page-original-info"},t.value.origin):null}}),q6=B({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Qt(),n=S(()=>{if(!e.readingTime)return null;const{minutes:r}=e.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>{var r,o;return(r=e.readingTimeLocale)!=null&&r.time?i("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(p1),i("span",(o=e.readingTimeLocale)==null?void 0:o.time),i("meta",{property:"timeRequired",content:n.value})]):null}}}),W6=B({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=tt(),n=ce(),r=Qt(),o=(a,s="")=>{s&&n.value.path!==s&&(a.preventDefault(),t.push(s))};return()=>e.tag.length?i("span",{class:"page-tag-info","aria-label":`${r.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(d1),e.tag.map(({name:a,path:s})=>i("span",{class:["page-tag-item",{[`tag${Io(a,9)}`]:!e.pure,clickable:s}],role:s?"navigation":"",onClick:l=>o(l,s)},a)),i("meta",{property:"keywords",content:e.tag.map(({name:a})=>a).join(",")})]):null}}),X6=B({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Qt();return()=>{var n,r,o;return(n=e.readingTimeLocale)!=null&&n.words?i("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[i(f1),i("span",(r=e.readingTimeLocale)==null?void 0:r.words),i("meta",{property:"wordCount",content:(o=e.readingTime)==null?void 0:o.words})]):null}}}),v1=B({name:"PageInfo",components:{AuthorInfo:j6,CategoryInfo:U6,DateInfo:K6,OriginalInfo:Y6,PageViewInfo:()=>null,ReadingTimeInfo:q6,TagInfo:W6,WordInfo:X6},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=Jn();return()=>e.items?i("div",{class:"page-info"},e.items.map(n=>i(Ze(`${n}Info`),{...e.info,pure:t.value}))):null}}),Z6=B({name:"PrintButton",setup(){const e=Jt(),t=le();return()=>e.value.print===!1?null:i("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},i(u1))}});const J6=({title:e,level:t,slug:n})=>i(Me,{to:`#${n}`,class:["toc-link",`level${t}`]},()=>e),Ia=(e,t)=>{const n=wt();return e.length&&t>0?i("ul",{class:"toc-list"},e.map(r=>{const o=Ia(r.children,t-1);return[i("li",{class:["toc-item",{active:ps(n,`#${r.slug}`)}]},J6(r)),o?i("li",o):null]})):null};var h1=B({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=wt(),r=ce(),o=Qt(),a=Le(),s=H("-1.7rem"),l=u=>{var d;(d=a.value)==null||d.scrollTo({top:u,behavior:"smooth"})},c=()=>{if(a.value){const u=document.querySelector(".toc-item.active");u?s.value=`${u.getBoundingClientRect().top-a.value.getBoundingClientRect().top+a.value.scrollTop}px`:s.value="-1.7rem"}else s.value="-1.7rem"};return pe(()=>{ie(()=>n.hash,u=>{if(a.value){const d=document.querySelector(`#toc a.toc-link[href$="${u}"]`);if(!d)return;const{top:p,height:f}=a.value.getBoundingClientRect(),{top:v,height:y}=d.getBoundingClientRect();v<p?l(a.value.scrollTop+v-p):v+y>p+f&&l(a.value.scrollTop+v+y-p-f)}}),ie(()=>n.fullPath,()=>c(),{flush:"post",immediate:!0})}),()=>{var u,d;const p=e.items.length?Ia(e.items,e.headerDepth):r.value.headers?Ia(r.value.headers,e.headerDepth):null;return p?i("div",{class:"toc-place-holder"},[i("aside",{id:"toc"},[(u=t.before)==null?void 0:u.call(t),i("div",{class:"toc-header"},[o.value.toc,i(Z6)]),i("div",{class:"toc-wrapper",ref:a},[p,i("div",{class:"toc-marker",style:{top:s.value}})]),(d=t.after)==null?void 0:d.call(t)])]):null}}}),ks=B({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=ce(),n=le(),r=Le(),o=({target:a})=>{const s=document.querySelector(a.hash);if(s){const l=()=>{s.removeAttribute("tabindex"),s.removeEventListener("blur",l)};s.setAttribute("tabindex","-1"),s.addEventListener("blur",l),s.focus(),window.scrollTo(0,0)}};return pe(()=>{ie(()=>t.value.path,()=>r.value.focus())}),()=>[i("span",{ref:r,tabindex:"-1"}),i("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:o},n.value.routeLocales.skipToContent)]}});let na=null,Jr=null;const Q6={wait:()=>na,pending:()=>{na=new Promise(e=>Jr=e)},resolve:()=>{Jr==null||Jr(),na=null,Jr=null}},m1=()=>Q6;var g1=B({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:n,pending:r}=m1();return()=>i(Wt,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var o;return(o=t.default)==null?void 0:o.call(t)})}}),ev=B({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(e){return()=>i("div",{class:"vp-feature-panel"},[e.header?i("h2",{class:"vp-feature-title"},e.header):null,e.items.length?i("div",{class:"vp-features-wrapper"},e.items.map(t=>{const n=[i("h3",{class:"vp-feature-header"},[i(et,{icon:t.icon}),i("span",{innerHTML:t.title})]),i("p",{class:"vp-feature-content",innerHTML:t.details})];return t.link?fo(t.link)?i("a",{class:"vp-feature link",href:t.link,role:"navigation","aria-label":t.title,target:"_blank"},n):i(Me,{class:"vp-feature link",to:t.link,role:"navigation","aria-label":t.title},()=>n):i("div",{class:"vp-feature"},n)})):null])}}),tv=B({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=Ee(),r=ko(),o=S(()=>n.value.heroText===!1?!1:n.value.heroText||r.value.title||"Hello"),a=S(()=>n.value.tagline===!1?!1:n.value.tagline||r.value.description||"Welcome to your VuePress site"),s=S(()=>n.value.heroImage?Ge(n.value.heroImage):null),l=S(()=>n.value.heroImageDark?Ge(n.value.heroImageDark):null),c=S(()=>n.value.heroAlt||o.value||"hero"),u=S(()=>n.value.actions??[]);return()=>{var d,p;return i("header",{class:"vp-hero-info-wrapper"},[((d=t.heroImage)==null?void 0:d.call(t))||i(ge,{appear:!0,type:"group"},()=>[s.value?i("img",{key:"light",class:["vp-hero-image",{light:l.value}],src:s.value,alt:c.value}):null,l.value?i("img",{key:"dark",class:"vp-hero-image dark",src:l.value,alt:c.value}):null]),((p=t.heroInfo)==null?void 0:p.call(t))??i("div",{class:"vp-hero-info"},[o.value?i(ge,{appear:!0,delay:.04},()=>i("h1",{id:"main-title"},o.value)):null,a.value?i(ge,{appear:!0,delay:.08},()=>i("p",{class:"vp-description"},a.value)):null,u.value.length?i(ge,{appear:!0,delay:.12},()=>i("p",{class:"vp-actions"},u.value.map(f=>i(Ke,{class:["vp-action",f.type||"default"],config:f,noExternalLinkIcon:!0})))):null])])}}}),nv=B({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=Jn(),r=Ee(),o=S(()=>{const{features:a}=r.value;return J(a)?a.some(s=>!("items"in s))?[{items:a}]:a:[]});return()=>{var a,s,l;return i("main",{class:["vp-project-home ",{pure:n.value}],id:"main-content","aria-labelledby":r.value.heroText===null?void 0:"main-title"},[(a=t.top)==null?void 0:a.call(t),i(tv),o.value.map(({header:c="",items:u},d)=>i(ge,{appear:!0,delay:.16+d*.08},()=>i(ev,{header:c,items:u}))),(s=t.center)==null?void 0:s.call(t),i(ge,{appear:!0,delay:.16+o.value.length*.08},()=>i(ws)),(l=t.bottom)==null?void 0:l.call(t)])}}});const rv=(e,t)=>{const n=e.replace(t,"/").split("/"),r=[];let o=as(t);return n.forEach((a,s)=>{s!==n.length-1?(o+=`${a}/`,r.push(o)):a!==""&&(o+=a,r.push(o))}),r};var ov=B({name:"BreadCrumb",setup(){const e=tt(),t=ce(),n=xt(),r=Ee(),o=le(),a=Le([]),s=S(()=>(r.value.breadcrumb||r.value.breadcrumb!==!1&&o.value.breadcrumb!==!1)&&a.value.length>1),l=S(()=>r.value.breadcrumbIcon||r.value.breadcrumbIcon!==!1&&o.value.breadcrumbIcon!==!1),c=()=>{const u=e.getRoutes(),d=rv(t.value.path,n.value).map(p=>{const f=u.find(v=>v.path===p);if(f){const{meta:v,path:y}=Or(e,f.path),R=v[Se.shortTitle]||v[Se.title];if(R)return{title:R,icon:v[Se.icon],path:y}}return null}).filter(p=>p!==null);d.length>1&&(a.value=d)};return pe(()=>{c(),ie(()=>t.value.path,c)}),()=>i("nav",{class:["vp-breadcrumb",{disable:!s.value}]},s.value?i("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},a.value.map((u,d)=>i("li",{class:{"is-active":a.value.length-1===d},property:"itemListElement",typeof:"ListItem"},[i(Me,{to:u.path,property:"item",typeof:"WebPage"},()=>[l.value?i(et,{icon:u.icon}):null,i("span",{property:"name"},u.title||"Unknown")]),i("meta",{property:"position",content:d+1})]))):[])}});const li=e=>e===!1?!1:me(e)?xn(e,!0):Tr(e)?e:null,Pa=(e,t,n)=>{const r=e.findIndex(o=>o.link===t);if(r!==-1){const o=e[r+n];return o!=null&&o.link?o:null}for(const o of e)if(o.children){const a=Pa(o.children,t,n);if(a)return a}return null};var av=B({name:"PageNav",setup(){const e=le(),t=Ee(),n=Rs(),r=ce(),o=Dr(),a=S(()=>{const l=li(t.value.prev);return l===!1?null:l||(e.value.prevLink===!1?null:Pa(n.value,r.value.path,-1))}),s=S(()=>{const l=li(t.value.next);return l===!1?null:l||(e.value.nextLink===!1?null:Pa(n.value,r.value.path,1))});return Ne("keydown",l=>{l.altKey&&(l.key==="ArrowRight"?s.value&&(o(s.value.link),l.preventDefault()):l.key==="ArrowLeft"&&a.value&&(o(a.value.link),l.preventDefault()))}),()=>a.value||s.value?i("nav",{class:"vp-page-nav"},[a.value?i(Ke,{class:"prev",config:a.value},()=>{var l,c;return[i("div",{class:"hint"},[i("span",{class:"arrow start"}),e.value.metaLocales.prev]),i("div",{class:"link"},[i(et,{icon:(l=a.value)==null?void 0:l.icon}),(c=a.value)==null?void 0:c.text])]}):null,s.value?i(Ke,{class:"next",config:s.value},()=>{var l,c;return[i("div",{class:"hint"},[e.value.metaLocales.next,i("span",{class:"arrow end"})]),i("div",{class:"link"},[(l=s.value)==null?void 0:l.text,i(et,{icon:(c=s.value)==null?void 0:c.icon})])]}):null]):null}});const sv={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},lv=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:o})=>{if(!r)return null;const a=qc(e);let s;return o?s=o:a!==null&&(s=sv[a]),s?s.replace(/:repo/,mn(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,bc(`${as(n)}/${r}`)):null},iv=()=>{const e=le(),t=ce(),n=Ee();return S(()=>{const{repo:r,docsRepo:o=r,docsBranch:a="main",docsDir:s="",editLink:l,editLinkPattern:c=""}=e.value;if(!(n.value.editLink??l??!0)||!o)return null;const u=lv({docsRepo:o,docsBranch:a,docsDir:s,editLinkPattern:c,filePathRelative:t.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},cv=()=>{const e=ko(),t=le(),n=ce(),r=Ee();return S(()=>{var o,a;return!(r.value.lastUpdated??t.value.lastUpdated??!0)||!((o=n.value.git)!=null&&o.updatedTime)?null:new Date((a=n.value.git)==null?void 0:a.updatedTime).toLocaleString(e.value.lang)})},uv=()=>{const e=le(),t=ce(),n=Ee();return S(()=>{var r;return n.value.contributors??e.value.contributors??!0?((r=t.value.git)==null?void 0:r.contributors)??null:null})};var dv=B({name:"PageTitle",setup(){const e=ce(),t=Ee(),n=le(),{info:r,items:o}=h6();return()=>i("div",{class:"vp-page-title"},[i("h1",[n.value.titleIcon===!1?null:i(et,{icon:t.value.icon}),e.value.title]),i(v1,{info:r.value,...o.value===null?{}:{items:o.value}}),i("hr")])}});const _1=()=>i(se,{name:"edit"},()=>[i("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),i("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);_1.displayName="EditIcon";var pv=B({name:"PageMeta",setup(){const e=le(),t=iv(),n=cv(),r=uv();return()=>{const{metaLocales:o}=e.value;return i("footer",{class:"page-meta"},[t.value?i("div",{class:"meta-item edit-link"},i(Ke,{class:"label",config:t.value},{before:()=>i(_1)})):null,i("div",{class:"meta-item git-info"},[n.value?i("div",{class:"update-time"},[i("span",{class:"label"},`${o.lastUpdated}: `),i(To,()=>i("span",{class:"info"},n.value))]):null,r.value&&r.value.length?i("div",{class:"contributors"},[i("span",{class:"label"},`${o.contributors}: `),r.value.map(({email:a,name:s},l)=>[i("span",{class:"contributor",title:`email: ${a}`},s),l!==r.value.length-1?",":""])]):null])])}}}),fv=B({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=Ee(),r=ce(),{isDarkmode:o}=Br(),a=le(),s=S(()=>n.value.toc||n.value.toc!==!1&&a.value.toc!==!1);return()=>i("main",{class:"vp-page",id:"main-content"},i(gt("LocalEncrypt")?Ze("LocalEncrypt"):$c,()=>{var l,c,u,d;return[(l=t.top)==null?void 0:l.call(t),n.value.cover?i("img",{class:"page-cover",src:Ge(n.value.cover),alt:r.value.title,"no-view":""}):null,i(ov),i(dv),s.value?i(h1,{headerDepth:n.value.headerDepth??a.value.headerDepth??2},{before:()=>{var p;return(p=t.tocBefore)==null?void 0:p.call(t)},after:()=>{var p;return(p=t.tocAfter)==null?void 0:p.call(t)}}):null,(c=t.contentBefore)==null?void 0:c.call(t),i(ws),(u=t.contentAfter)==null?void 0:u.call(t),i(pv),i(av),gt("CommentService")?i(Ze("CommentService"),{darkmode:o.value}):null,(d=t.bottom)==null?void 0:d.call(t)]}))}}),vv=B({name:"Layout",setup(){const e=Jt(),t=le(),n=ce(),r=Ee(),{isMobile:o}=xr(),a=S(()=>{var s,l;return((s=t.value.blog)==null?void 0:s.sidebarDisplay)||((l=e.value.blog)==null?void 0:l.sidebarDisplay)||"mobile"});return()=>[i(ks),i(As,{},{default:()=>r.value.home?i(nv):i(g1,()=>i(fv,{key:n.value.path})),...a.value!=="none"?{navScreenBottom:()=>i(Ze("BloggerInfo"))}:{},...!o.value&&a.value==="always"?{sidebar:()=>i(Ze("BloggerInfo"))}:{}})]}}),hv=B({name:"NotFoundHint",setup(){const e=le(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>i("div",{class:"not-found-hint"},[i("p",{class:"error-code"},"404"),i("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),i("p",{class:"error-hint"},t())])}}),mv=B({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=xt(),r=le(),{navigate:o}=Ra({to:r.value.home??n.value});return()=>[i(ks),i(As,{noSidebar:!0},()=>{var a;return i("main",{class:"vp-page not-found",id:"main-content"},((a=t.default)==null?void 0:a.call(t))||[i(hv),i("div",{class:"actions"},[i("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},r.value.routeLocales.back),i("button",{type:"button",class:"action-button",onClick:()=>o()},r.value.routeLocales.home)])])})]}});const gv={BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Twitter:'<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#3397db"/><path fill="#fff" d="M808.325 346.204c-18.128 16.702-25.664 25.257-25.664 25.257s6.518 130.151-61.715 230.362-156.427 160.296-284.542 173.128c-128.114 12.832-211.623-39.31-211.623-39.31s56.012-3.259 91.86-16.906c35.644-13.85 86.97-49.901 86.97-49.901s-72.917-22.609-99.191-47.865c-26.275-25.46-32.793-40.532-32.793-40.532l72.103-1.019s-75.77-40.532-97.36-72.306-24.44-63.141-24.44-63.141l55.4 22.405s-46.032-62.938-52.55-111.82 8.352-75.159 8.352-75.159 23.423 44.199 119.967 93.082 178.017 46.032 178.017 46.032-31.163-108.154 64.363-156.02 161.11 32.997 161.11 32.997 16.703-4.481 29.127-9.166c12.425-4.48 30.348-12.832 30.348-12.832l-29.33 52.754 45.421-4.889s-5.703 8.147-23.83 24.85z"/></svg>',Wechat:'<svg xmlns="http://www.w3.org/2000/svg" class="icon wechat-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1AC88E"/><path fill="#fff" d="M827.551 578.742a176.583 176.583 0 0 0-185.685-158.379 172.942 172.942 0 0 0-186.3 158.379 172.942 172.942 0 0 0 185.686 158.379 282.169 282.169 0 0 0 65.536-10.923l60.689 32.768-16.384-54.613a166.275 166.275 0 0 0 76.458-125.611zm-245.76-27.307a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.307 21.845 24.872 24.872 0 0 1-27.921 21.845h.614zm121.356 0a21.845 21.845 0 1 1 0-43.69 24.872 24.872 0 0 1 27.306 21.845 24.872 24.872 0 0 1-28.512 21.845h1.206z"/><path fill="#fff" d="M623.662 400.953h21.23A222.709 222.709 0 0 0 419.772 245.6a208.145 208.145 0 0 0-223.323 189.94 182.044 182.044 0 0 0 89.201 150.483l-22.436 67.356 78.279-39.435a389.575 389.575 0 0 0 78.279 10.923h20.616a163.226 163.226 0 0 1-6.667-46.718 182.044 182.044 0 0 1 189.94-177.197zm-121.379-60.69a27.921 27.921 0 1 1 0 55.843 31.562 31.562 0 0 1-33.36-27.921 31.562 31.562 0 0 1 34.59-27.921h-1.23zM346.34 396.107a31.562 31.562 0 0 1-33.383-27.921 31.562 31.562 0 0 1 33.383-27.921 27.921 27.921 0 1 1 0 55.842z"/></svg>'},_v={category:{"/":{path:"/category/",map:{years:{path:"/category/years/",keys:["v-f880e932"]},thinking:{path:"/category/thinking/",keys:["v-46d41fa4","v-537693e6"]},value:{path:"/category/value/",keys:["v-187a439e"]},privacy:{path:"/category/privacy/",keys:["v-39ad62d5","v-41dba8b2"]},time:{path:"/category/time/",keys:["v-07aa4806"]},learn:{path:"/category/learn/",keys:["v-445d1c68"]},develop:{path:"/category/develop/",keys:["v-4447c0de","v-2b300ac6"]},run:{path:"/category/run/",keys:["v-a8a9a750"]},betxin:{path:"/category/betxin/",keys:["v-1f902b80"]},tutorial:{path:"/category/tutorial/",keys:["v-f8bc084e","v-d18eaea2","v-ea6c58ea","v-3df5533a","v-1b84a3fe","v-7700453d","v-479dc2e4","v-f68d818a","v-655b0d80","v-49467438","v-47919b99","v-45dcc2fa","v-4427ea5b","v-46709ae2","v-29af940e","v-51ce692c","v-311bc9d1","v-0f4688c6","v-fead0b28","v-56bd5e7e","v-1de1766a","v-6bd45cce","v-ed510016"]},c:{path:"/category/c/",keys:["v-5b6f1d36"]},linux:{path:"/category/linux/",keys:["v-5b6f1d36"]},golang:{path:"/category/golang/",keys:["v-6e6d9123"]},record:{path:"/category/record/",keys:["v-f29e4144"]}}}},tag:{"/":{path:"/tag/",map:{econonics:{path:"/tag/econonics/",keys:["v-47a75f3e"]},redis:{path:"/tag/redis/",keys:["v-46709ae2","v-f29e4144","v-f880e932","v-fead0b28"]},consistency:{path:"/tag/consistency/",keys:["v-46709ae2","v-f880e932"]},thinking:{path:"/tag/thinking/",keys:["v-46d41fa4"]},network:{path:"/tag/network/",keys:["v-537693e6","v-5b6f1d36"]},blockchain:{path:"/tag/blockchain/",keys:["v-537693e6","v-18d64577"]},thinging:{path:"/tag/thinging/",keys:["v-537693e6","v-445d1c68"]},"white-noise":{path:"/tag/white-noise/",keys:["v-32bb1c95"]},music:{path:"/tag/music/",keys:["v-32bb1c95"]},secure:{path:"/tag/secure/",keys:["v-41dba8b2","v-187a439e"]},value:{path:"/tag/value/",keys:["v-187a439e"]},privacy:{path:"/tag/privacy/",keys:["v-39ad62d5","v-41dba8b2"]},time:{path:"/tag/time/",keys:["v-07aa4806"]},imagine:{path:"/tag/imagine/",keys:["v-c3854da0"]},wechat:{path:"/tag/wechat/",keys:["v-39ad62d5"]},learn:{path:"/tag/learn/",keys:["v-445d1c68"]},develop:{path:"/tag/develop/",keys:["v-4447c0de"]},run:{path:"/tag/run/",keys:["v-a8a9a750"]},long_termism:{path:"/tag/long-termism/",keys:["v-a8a9a750"]},internet:{path:"/tag/internet/",keys:["v-2b300ac6"]},future:{path:"/tag/future/",keys:["v-2b300ac6"]},"betxin-rules":{path:"/tag/betxin-rules/",keys:["v-1f902b80"]},docker:{path:"/tag/docker/",keys:["v-51ce692c"]},golang:{path:"/tag/golang/",keys:["v-f8bc084e","v-d18eaea2","v-ea6c58ea","v-3df5533a","v-1b84a3fe","v-7700453d","v-479dc2e4","v-f68d818a","v-655b0d80","v-49467438","v-47919b99","v-45dcc2fa","v-4427ea5b","v-6e6d9123","v-311bc9d1","v-0f4688c6"]},concurrency:{path:"/tag/concurrency/",keys:["v-6e6d9123"]},"top10-sort":{path:"/tag/top10-sort/",keys:["v-0f4688c6"]},leetcode:{path:"/tag/leetcode/",keys:["v-1de1766a","v-6bd45cce","v-ed510016"]},backtrack:{path:"/tag/backtrack/",keys:["v-ed510016"]},"dynamic-programming":{path:"/tag/dynamic-programming/",keys:["v-6bd45cce"]},mock:{path:"/tag/mock/",keys:["v-655b0d80"]},offer:{path:"/tag/offer/",keys:["v-1de1766a"]},mysql:{path:"/tag/mysql/",keys:["v-56bd5e7e"]},gin:{path:"/tag/gin/",keys:["v-29af940e"]},grpc:{path:"/tag/grpc/",keys:["v-49467438","v-47919b99","v-45dcc2fa","v-4427ea5b"]}}}}},yv={article:{"/":{path:"/article/",keys:["v-f8bc084e","v-d18eaea2","v-ea6c58ea","v-3df5533a","v-1b84a3fe","v-7700453d","v-479dc2e4","v-f68d818a","v-655b0d80","v-49467438","v-47919b99","v-45dcc2fa","v-4427ea5b","v-46709ae2","v-f29e4144","v-1f902b80","v-46d41fa4","v-537693e6","v-5b6f1d36","v-47a75f3e","v-445d1c68","v-29af940e","v-f880e932","v-6e6d9123","v-51ce692c","v-32bb1c95","v-311bc9d1","v-0f4688c6","v-fead0b28","v-39ad62d5","v-56bd5e7e","v-1de1766a","v-6bd45cce","v-ed510016","v-41dba8b2","v-187a439e","v-a8a9a750","v-4447c0de","v-2b300ac6","v-18d64577","v-c3854da0","v-07aa4806"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-f8bc084e","v-d18eaea2","v-ea6c58ea","v-3df5533a","v-1b84a3fe","v-7700453d","v-479dc2e4","v-f68d818a","v-655b0d80","v-49467438","v-47919b99","v-45dcc2fa","v-4427ea5b","v-46709ae2","v-f29e4144","v-1f902b80","v-46d41fa4","v-537693e6","v-5b6f1d36","v-47a75f3e","v-445d1c68","v-29af940e","v-f880e932","v-6e6d9123","v-51ce692c","v-32bb1c95","v-311bc9d1","v-0f4688c6","v-fead0b28","v-39ad62d5","v-56bd5e7e","v-1de1766a","v-6bd45cce","v-ed510016","v-41dba8b2","v-187a439e","v-a8a9a750","v-4447c0de","v-2b300ac6","v-18d64577","v-c3854da0","v-07aa4806"]}}},ii=H(_v),y1=(e="")=>{const t=ce(),n=tt(),r=xt();return S(()=>{var o;const a=e||((o=Ee().value.blog)==null?void 0:o.key)||"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const s=n.getRoutes();if(!ii.value[a])throw new Error(`useBlogCategory: key ${a} is invalid`);const l=ii.value[a][r.value],c={path:l.path,map:{}};for(const u in l.map){const d=l.map[u];c.map[u]={path:d.path,items:[]};for(const p of d.keys){const f=s.find(({name:v})=>v===p);if(f){const v=Or(n,f.path);c.map[u].items.push({path:v.path,info:v.meta})}}t.value.path===d.path&&(c.currentItems=c.map[u].items)}return c})},ci=H(yv),Co=(e="")=>{const t=tt(),n=xt();return S(()=>{var r;const o=e||((r=Ee().value.blog)==null?void 0:r.key)||"";if(!o)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!ci.value[o])throw new Error(`useBlogType: key ${e} is invalid`);const a=t.getRoutes(),s=ci.value[o][n.value],l={path:s.path,items:[]};for(const c of s.keys){const u=a.find(({name:d})=>d===c);if(u){const d=Or(t,u.path);l.items.push({path:d.path,info:d.meta})}}return l})};const Ev="/assets/hero-197a9d2d.jpg",E1=Symbol.for("categoryMap"),Nr=()=>{const e=de(E1);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},bv=()=>{const e=y1("category");mt(E1,e)},$r=()=>{const e=Jt(),t=le();return S(()=>({...e.value.blog,...t.value.blog}))},b1=Symbol.for("tagMap"),Mr=()=>{const e=de(b1);if(!e)throw new Error("useTagMap() is called without provider.");return e},Sv=()=>{const e=y1("tag");mt(b1,e)},Rv=e=>{const t=le();return S(()=>{const{[Se.author]:n}=e.value;return n?Er(n):n===!1?[]:Er(t.value.author,!1)})},Av=e=>{const t=Nr();return S(()=>Uc(e.value[Se.category]).map(n=>({name:n,path:t.value.map[n].path})))},wv=e=>{const t=Mr();return S(()=>Kc(e.value[Se.tag]).map(n=>({name:n,path:t.value.map[n].path})))},kv=e=>S(()=>{const{[Se.date]:t}=e.value;return ds(t)}),Tv=e=>{const t=Yn(e,"info"),n=$r(),r=Rv(t),o=Av(t),a=wv(t),s=kv(t),l=Mu(),c=S(()=>({author:r.value,category:o.value,date:s.value,localizedDate:t.value[Se.localizedDate]||"",tag:a.value,isOriginal:t.value[Se.isOriginal]||!1,readingTime:t.value[Se.readingTime]||null,readingTimeLocale:t.value[Se.readingTime]&&l.value?$u(t.value[Se.readingTime],l.value):null,pageview:e.path})),u=S(()=>n.value.articleInfo);return{info:c,items:u}},S1=Symbol(""),Vr=()=>{const e=de(S1);if(!e)throw new Error("useArticles() is called without provider.");return e},Iv=()=>{const e=Co("article");mt(S1,e)},R1=Symbol(""),Ts=()=>{const e=de(R1);if(!e)throw new Error("useStars() is called without provider.");return e},Pv=()=>{const e=Co("star");mt(R1,e)},A1=Symbol(""),Is=()=>{const e=de(A1);if(!e)throw new Error("useTimelines() is called without provider.");return e},Ov=()=>{const e=Co("timeline"),t=S(()=>{const n=[];return e.value.items.forEach(({info:r,path:o})=>{const a=ds(r[Se.date]),s=a==null?void 0:a.getFullYear(),l=a?a.getMonth()+1:null,c=a==null?void 0:a.getDate();s&&l&&c&&((!n[0]||n[0].year!==s)&&n.unshift({year:s,items:[]}),n[0].items.push({date:`${l}/${c}`,info:r,path:o}))}),{...e.value,config:n.reverse()}});mt(A1,t)},Lv=()=>{Iv(),bv(),Pv(),Sv(),Ov()};var Cv=B({name:"SocialMedia",setup(){const e=$r(),t=Jn(),n=S(()=>{const r=e.value.medias;return r?Xn(r).map(([o,a])=>({name:o,icon:gv[o],url:a})):[]});return()=>n.value.length?i("div",{class:"vp-social-medias"},n.value.map(({name:r,icon:o,url:a})=>i("a",{class:"vp-social-media",href:a,rel:"noopener noreferrer",target:"_blank","aria-label":r,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:o}))):null}}),Ps=B({name:"BloggerInfo",setup(){const e=$r(),t=ko(),n=le(),r=Vr(),o=Nr(),a=Mr(),s=Is(),l=Dr(),c=S(()=>{var f;return e.value.name||((f=Er(n.value.author)[0])==null?void 0:f.name)||t.value.title}),u=S(()=>e.value.avatar||n.value.logo),d=S(()=>n.value.blogLocales),p=S(()=>e.value.intro);return()=>{const{article:f,category:v,tag:y,timeline:R}=d.value,A=[[r.value.path,r.value.items.length,f],[o.value.path,Qe(o.value.map).length,v],[a.value.path,Qe(a.value.map).length,y],[s.value.path,s.value.items.length,R]];return i("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[i("div",{class:"vp-blogger",...p.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>l(p.value)}:{}},[u.value?i("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:Ge(u.value),property:"image",alt:"Blogger Avatar"}):null,c.value?i("div",{class:"vp-blogger-name",property:"name"},c.value):null,e.value.description?i("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,p.value?i("meta",{property:"url",content:Ge(p.value)}):null]),i("div",{class:"vp-blog-counts"},A.map(([g,E,D])=>i(Me,{class:"vp-blog-count",to:g},()=>[i("div",{class:"count"},E),i("div",D)]))),i(Cv)])}}});const Oa=()=>i(se,{name:"category"},()=>i("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Oa.displayName="CategoryIcon";const La=()=>i(se,{name:"tag"},()=>i("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));La.displayName="TagIcon";const Os=()=>i(se,{name:"timeline"},()=>i("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Os.displayName="TimelineIcon";const w1=()=>i(se,{name:"slides"},()=>i("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));w1.displayName="SlideIcon";const k1=()=>i(se,{name:"sticky"},()=>[i("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);k1.displayName="StickyIcon";const mo=()=>i(se,{name:"article"},()=>i("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));mo.displayName="ArticleIcon";const T1=()=>i(se,{name:"book"},()=>i("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));T1.displayName="BookIcon";const I1=()=>i(se,{name:"link"},()=>i("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));I1.displayName="LinkIcon";const P1=()=>i(se,{name:"project"},()=>i("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));P1.displayName="ProjectIcon";const O1=()=>i(se,{name:"friend"},()=>i("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));O1.displayName="FriendIcon";const Ca=()=>i(se,{name:"slide-down"},()=>i("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Ca.displayName="SlideDownIcon";const L1=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});L1.displayName="EmptyIcon";const C1=()=>i(se,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));C1.displayName="LockIcon";var Dv=B({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=Yn(e,"info"),{info:r,items:o}=Tv(e);return()=>{var a,s,l;const{[Se.title]:c,[Se.type]:u,[Se.isEncrypted]:d=!1,[Se.cover]:p,[Se.excerpt]:f,[Se.sticky]:v}=n.value,y=r.value;return i("div",{class:"vp-article-wrapper"},i("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((a=t.cover)==null?void 0:a.call(t,{cover:p}))||(p?[i("img",{class:"vp-article-cover",src:Ge(p)}),i("meta",{property:"image",content:Ge(p)})]:[]),v?i(k1):null,i(Me,{to:e.path},()=>{var R;return((R=t.title)==null?void 0:R.call(t,{title:c,isEncrypted:d,type:u}))||i("header",{class:"vp-article-title"},[d?i(C1):null,u===Fu.slide?i(w1):null,i("span",{property:"headline"},c)])}),((s=t.excerpt)==null?void 0:s.call(t,{excerpt:f}))||(f?i("div",{class:"vp-article-excerpt",innerHTML:f}):null),i("hr",{class:"vp-article-hr"}),((l=t.info)==null?void 0:l.call(t,{info:y}))||i(v1,{info:y,...o.value?{items:o.value}:{}})]))}}}),xv=B({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const r=le(),o=H(""),a=S(()=>r.value.paginationLocales),s=S(()=>Math.ceil(e.total/e.perPage)),l=S(()=>!!s.value&&s.value!==1),c=S(()=>s.value<7?!1:e.current>4),u=S(()=>s.value<7?!1:e.current<s.value-3),d=S(()=>{const{current:v}=e;let y=1,R=s.value;const A=[];s.value>=7&&(v<=4&&v<s.value-3?(y=1,R=5):v>4&&v>=s.value-3?(R=s.value,y=s.value-4):s.value>7&&(y=v-2,R=v+2));for(let g=y;g<=R;g++)A.push(g);return A}),p=v=>t("updateCurrentPage",v),f=v=>{const y=parseInt(v);y<=s.value&&y>0?p(y):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${a.value.errorText.replace(/\$page/g,s.value.toString())}`)};return pe(()=>{n=new hp}),()=>i("div",{class:"vp-pagination"},l.value?i("div",{class:"vp-pagination-list"},[i("div",{class:"vp-pagination-number "},[e.current>1?i("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>p(e.current-1)},a.value.prev):null,c.value?[i("div",{role:"navigation",onClick:()=>p(1)},1),i("div",{class:"ellipsis"},"...")]:null,d.value.map(v=>i("div",{key:v,class:{active:e.current===v},role:"navigation",onClick:()=>p(v)},v)),u.value?[i("div",{class:"ellipsis"},"..."),i("div",{role:"navigation",onClick:()=>p(s.value)},s.value)]:null,e.current<s.value?i("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>p(e.current+1)},a.value.next):null]),i("div",{class:"vp-pagination-nav"},[i("label",{for:"navigation-text"},`${a.value.navigate}: `),i("input",{id:"navigation-text",value:o.value,onInput:({target:v})=>{o.value=v.value},onKeydown:v=>{v.key==="Enter"&&(v.preventDefault(),f(o.value))}}),i("button",{class:"vp-pagination-button",role:"navigation",title:a.value.action,onClick:()=>f(o.value)},a.value.action)])]):[])}}),Ls=B({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=wt(),n=tt(),r=$r(),o=H(1),a=S(()=>r.value.articlePerPage||10),s=S(()=>e.items.slice((o.value-1)*a.value,o.value*a.value)),l=c=>{o.value=c;const u={...t.query};u.page===c.toString()||c===1&&!u.page||(c===1?delete u.page:u.page=c.toString(),n.push({path:t.path,query:u}))};return pe(()=>{const{page:c}=t.query;l(c?Number(c):1),ie(o,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)}),ie(()=>t.query,({page:u})=>{l(u?Number(u):1)})}),()=>i("div",{id:"article-list",class:"vp-article-list"},s.value.length?[...s.value.map(({info:c,path:u},d)=>i(ge,{appear:!0,delay:d*.04},()=>i(Dv,{key:u,info:c,path:u}))),i(xv,{current:o.value,perPage:a.value,total:e.items.length,onUpdateCurrentPage:l})]:i(L1))}}),Cs=B({name:"CategoryList",setup(){const e=ce(),t=Nr();return()=>i("ul",{class:"vp-category-list"},Xn(t.value.map).map(([n,{path:r,items:o}])=>i("li",{class:["vp-category",`vp-category${Io(n,9)}`,{active:r===e.value.path}]},i(Me,{to:r},()=>[n,i("span",{class:"count"},o.length)]))))}}),Ds=B({name:"TagList",setup(){const e=Ee(),t=Mr(),n=r=>{var o;return r===((o=e.value.blog)==null?void 0:o.name)};return()=>i("ul",{class:"tag-list-wrapper"},Xn(t.value.map).map(([r,{path:o,items:a}])=>i("li",{class:["tag",`tag${Io(r,9)}`,{active:n(r)}]},i(Me,{to:o},()=>[r,i("span",{class:"tag-num"},a.length)]))))}}),Bv=B({name:"TimelineList",setup(){const e=le(),t=Is(),n=Dr(),r=S(()=>e.value.blogLocales.timeline);return()=>i("div",{class:"timeline-list-wrapper"},[i("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[i(Os),i("span",{class:"num"},t.value.items.length),r.value]),i("hr"),i("div",{class:"timeline-content"},i("ul",{class:"timeline-list"},t.value.config.map(({year:o,items:a},s)=>i(ge,{appear:!0,delay:.08*(s+1)},()=>i("li",[i("h3",{class:"timeline-year"},o),i("ul",{class:"timeline-year-wrapper"},a.map(({date:l,info:c,path:u})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},l),i(Me,{class:"timeline-title",to:u},()=>c[Se.title])])))])))))])}}),D1=B({name:"InfoList",setup(){const e=le(),t=Vr(),n=Nr(),r=S(()=>Qe(n.value.map).length),o=Ts(),a=Mr(),s=S(()=>Qe(a.value.map).length),l=Dr(),c=H("article"),u=S(()=>e.value.blogLocales),d=[["article",mo],["category",Oa],["tag",La],["timeline",Os]];return()=>i("div",{class:"vp-blog-infos"},[i("div",{class:"vp-blog-type-switcher"},d.map(([p,f])=>i("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=p}},i("div",{class:["icon-wrapper",{active:c.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},i(f))))),i(ge,()=>c.value==="article"?i("div",{class:"vp-sticky-article-wrapper"},[i("div",{class:"title",onClick:()=>l(t.value.path)},[i(mo),i("span",{class:"num"},t.value.items.length),u.value.article]),i("hr"),i("ul",{class:"vp-sticky-articles"},o.value.items.map(({info:p,path:f},v)=>i(ge,{appear:!0,delay:.08*(v+1)},()=>i("li",{class:"vp-sticky-article"},i(Me,{to:f},()=>p[Se.title])))))]):c.value==="category"?i("div",{class:"vp-category-wrapper"},[r.value?i("div",{class:"title",onClick:()=>l(n.value.path)},[i(Oa),i("span",{class:"num"},r.value),u.value.category]):null,i("hr"),i(ge,{delay:.04},()=>i(Cs))]):c.value==="tag"?i("div",{class:"vp-tag-wrapper"},[s.value?i("div",{class:"title",onClick:()=>l(a.value.path)},[i(La),i("span",{class:"num"},s.value),u.value.tag]):null,i("hr"),i(ge,{delay:.04},()=>i(Ds))]):i(ge,()=>i(Bv)))])}}),Do=B({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=xr();return()=>[i(ks),i(As,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>i(Ps),...n.value?{sidebar:()=>i(D1)}:{}})]}});const x1=()=>i("aside",{class:"vp-blog-info-wrapper"},[i(ge,()=>i(Ps)),i(ge,{delay:.04},()=>i(D1))]);x1.displayName="InfoPanel";var xo=x1,Nv=B({name:"BlogPage",components:{CategoryList:Cs,TagList:Ds},setup(){const e=ce(),t=Ee(),n=Nr(),r=Mr(),o=S(()=>t.value.blog||{}),a=S(()=>{const{key:l=""}=o.value;return l==="category"?"CategoryList":l==="tag"?"TagList":null}),s=S(()=>{const{name:l="",key:c=""}=o.value;return c==="category"?l?n.value.map[l].items:[]:c==="tag"?l?r.value.map[l].items:[]:[]});return()=>i(Do,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(ge,()=>a.value?i(Ze(a.value)):null),o.value.name?i(ge,{appear:!0,delay:.24},()=>i(Ls,{key:e.value.path,items:s.value})):null]),i(ge,{delay:.16},()=>i(xo))])))}}),$v=B({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=V2(),r=Ee(),o=Le(),a=S(()=>r.value.heroFullScreen??!1),s=S(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:p,heroImageStyle:f,tagline:v=null}=r.value;return{text:c===!1?null:c||n.value,image:u?Ge(u):null,imageDark:d?Ge(d):null,heroStyle:f,alt:p||"hero image",tagline:v,isFullScreen:a.value}}),l=S(()=>{const{bgImage:c,bgImageStyle:u}=r.value;return{image:me(c)?Ge(c):c===!1?null:Ev,bgStyle:u,isFullScreen:a.value}});return()=>{var c,u;return r.value.hero===!1?null:i("div",{ref:o,class:["vp-blog-hero",{fullscreen:a.value,"no-bg":!l.value.image}]},[((c=t.heroBg)==null?void 0:c.call(t,l.value))||(l.value.image?i("div",{class:"vp-blog-mask",style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null),((u=t.heroInfo)==null?void 0:u.call(t,s.value))||[i(ge,{appear:!0,type:"group",delay:.04},()=>[s.value.image?i("img",{key:"light",class:["vp-blog-hero-image",{light:s.value.imageDark}],style:s.value.heroStyle,src:s.value.image,alt:s.value.alt}):null,s.value.imageDark?i("img",{key:"dark",class:"vp-blog-hero-image dark",style:s.value.heroStyle,src:s.value.imageDark,alt:s.value.alt}):null]),i(ge,{appear:!0,delay:.08},()=>s.value.text?i("h1",{class:"vp-blog-hero-title"},s.value.text):null),i(ge,{appear:!0,delay:.12},()=>s.value.tagline?i("p",{class:"vp-blog-hero-description",innerHTML:s.value.tagline}):null)],s.value.isFullScreen?i("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:o.value.clientHeight,behavior:"smooth"})}},[i(Ca),i(Ca)]):null])}}});const Mv=["link","article","book","project","friend"];var Vv=B({name:"ProjectPanel",components:{ArticleIcon:mo,BookIcon:T1,FriendIcon:O1,LinkIcon:I1,ProjectIcon:P1},setup(){const e=Ee(),t=Jn(),n=Dr(),r=(o="",a="icon")=>Mv.includes(o)?i(Ze(`${o}-icon`)):mn(o)?i("img",{class:"vp-project-image",src:o,alt:a}):Po(o)?i("img",{class:"vp-project-image",src:Ge(o),alt:a}):i(et,{icon:o});return()=>{var o;return(o=e.value.projects)!=null&&o.length?i("div",{class:"vp-project-panel"},e.value.projects.map(({icon:a,link:s,name:l,desc:c},u)=>i("div",{class:["vp-project-card",{[`project${u%9}`]:!t.value}],onClick:()=>n(s)},[r(a,l),i("div",{class:"vp-project-name"},l),i("div",{class:"vp-project-desc"},c)]))):null}}}),Fv=B({name:"BlogHome",setup(){const e=Vr();return()=>i("div",{class:"vp-page vp-blog"},[i($v),i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-home",id:"main-content"},[i(ge,{appear:!0,delay:.16},()=>i(Vv)),i(ge,{appear:!0,delay:.24},()=>i(Ls,{items:e.value.items}))]),i(ge,{appear:!0,delay:.16},()=>i(xo))]),i(ge,{appear:!0,delay:.28},()=>i(ws))])}}),Hv=B({name:"BlogHome",setup(){return()=>i(Do,()=>i(Fv))}}),B1=B({name:"ArticleType",setup(){const e=ce(),t=xt(),n=le(),r=Vr(),o=Ts(),a=S(()=>{const s=n.value.blogLocales;return[{text:s.all,path:r.value.path},{text:s.star,path:o.value.path},...[].map(({key:l,path:c})=>({text:s[l],path:c.replace(/^\//,t.value)}))]});return()=>i("ul",{class:"vp-article-type-wrapper"},a.value.map(s=>i("li",{class:["vp-article-type",{active:s.path===e.value.path}]},i(Me,{to:s.path},()=>s.text))))}}),zv=B({name:"BlogPage",setup(){const e=Co(),t=Ee(),n=ce(),r=Vr(),o=Ts(),a=S(()=>{const{key:s="",type:l}=t.value.blog||{};return s==="star"?o.value.items:l==="type"&&s?e.value.items:r.value.items});return()=>i(Do,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(ge,()=>i(B1)),i(ge,{appear:!0,delay:.24},()=>i(Ls,{key:n.value.path,items:a.value}))]),i(ge,{delay:.16},()=>i(xo))])))}}),Gv=B({name:"TimelineItems",setup(){const e=$r(),t=le(),n=Is(),r=S(()=>e.value.timeline||t.value.blogLocales.timelineTitle),o=S(()=>n.value.config.map(({year:a})=>({title:a.toString(),level:2,slug:a.toString(),children:[]})));return()=>i("div",{class:"timeline-wrapper"},i("ul",{class:"timeline-content"},[i(ge,()=>i("li",{class:"motto"},r.value)),i(h1,{items:o.value}),n.value.config.map(({year:a,items:s},l)=>i(ge,{appear:!0,delay:.08*(l+1),type:"group"},()=>[i("h3",{key:"title",id:a,class:"timeline-year-title"},i("span",a)),i("li",{key:"content",class:"timeline-year-list"},[i("ul",{class:"timeline-year-wrapper"},s.map(({date:c,info:u,path:d})=>i("li",{class:"timeline-item"},[i("span",{class:"timeline-date"},c),i(Me,{class:"timeline-title",to:d},()=>u[Se.title])])))])]))]))}}),jv=B({name:"Timeline",components:{ArticleType:B1,CategoryList:Cs,TagList:Ds},setup(){return()=>i(Do,()=>i("div",{class:"vp-page vp-blog"},i("div",{class:"blog-page-wrapper"},[i("main",{class:"vp-blog-main",id:"main-content"},[i(ge,{appear:!0,delay:.24},()=>i(Gv))]),i(ge,{delay:.16},()=>i(xo))])))}});const bn="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ra=Array.from({length:64},(e,t)=>t),Qr=e=>Array(e).fill(-1),Ft=[...Qr(46),0,1,...ra.slice(54,64),...Qr(7),...ra.slice(2,28),...Qr(6),...ra.slice(28,54),...Qr(5)],ui=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],di=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],N1=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Da=(e,t)=>{if(t<=0||t>e.length)throw Error(`Illegal len: ${t}`);let n=0,r,o;const a=[];for(;n<t;){if(r=e[n++]&255,a.push(bn[r>>2&63]),r=(r&3)<<4,n>=t){a.push(bn[r&63]);break}if(o=e[n++]&255,r|=o>>4&15,a.push(bn[r&63]),r=(o&15)<<2,n>=t){a.push(bn[r&63]);break}o=e[n++]&255,r|=o>>6&3,a.push(bn[r&63]),a.push(bn[o&63])}return a.join("")},Uv=(e,t)=>{if(t<=0)throw Error(`Illegal len: ${t}`);const n=e.length;let r=0,o=0,a,s,l,c,u,d;const p=[];for(;r<n-1&&o<t&&(d=e.charCodeAt(r++),a=d<Ft.length?Ft[d]:-1,d=e.charCodeAt(r++),s=d<Ft.length?Ft[d]:-1,!(a==-1||s==-1||(u=a<<2>>>0,u|=(s&48)>>4,p.push(String.fromCharCode(u)),++o>=t||r>=n)||(d=e.charCodeAt(r++),l=d<Ft.length?Ft[d]:-1,l==-1)||(u=(s&15)<<4>>>0,u|=(l&60)>>2,p.push(String.fromCharCode(u)),++o>=t||r>=n)));)d=e.charCodeAt(r++),c=d<Ft.length?Ft[d]:-1,u=(l&3)<<6>>>0,u|=c,p.push(String.fromCharCode(u)),++o;return p.map(f=>f.charCodeAt(0))},Kv=(e,t)=>{let n=null;for(typeof e=="number"&&(n=e,e=()=>null);n!==null||(n=e())!==null;)n<128?t(n&127):n<2048?(t(n>>6&31|192),t(n&63|128)):n<65536?(t(n>>12&15|224),t(n>>6&63|128),t(n&63|128)):(t(n>>18&7|240),t(n>>12&63|128),t(n>>6&63|128),t(n&63|128)),n=null},Yv=(e,t)=>{let n,r=null;for(;(n=r!==null?r:e())!==null;){if(n>=55296&&n<=57343&&(r=e())!==null&&r>=56320&&r<=57343){t((n-55296)*1024+r-56320+65536),r=null;continue}t(n)}r!==null&&t(r)},qv=(e,t)=>{Yv(e,function(n){Kv(n,t)})},Wv=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout,Xv=e=>{const t=[];let n=0;return qv(()=>n>=e.length?null:e.charCodeAt(n++),r=>{t.push(r)}),t},Sr=(e,t,n,r)=>{let o,a=e[t],s=e[t+1];return a^=n[0],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[1],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[2],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[3],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[4],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[5],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[6],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[7],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[8],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[9],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[10],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[11],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[12],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[13],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[14],o=r[a>>>24],o+=r[256|a>>16&255],o^=r[512|a>>8&255],o+=r[768|a&255],s^=o^n[15],o=r[s>>>24],o+=r[256|s>>16&255],o^=r[512|s>>8&255],o+=r[768|s&255],a^=o^n[16],e[t]=s^n[16+1],e[t+1]=a,e},An=(e,t)=>{let n=0;for(let r=0;r<4;++r)n=n<<8|e[t]&255,t=(t+1)%e.length;return{key:n,offp:t}},pi=(e,t,n)=>{const r=t.length,o=n.length;let a=0,s=[0,0],l;for(let c=0;c<r;c++)l=An(e,a),a=l.offp,t[c]=t[c]^l.key;for(let c=0;c<r;c+=2)s=Sr(s,0,t,n),t[c]=s[0],t[c+1]=s[1];for(let c=0;c<o;c+=2)s=Sr(s,0,t,n),n[c]=s[0],n[c+1]=s[1]},Zv=(e,t,n,r)=>{const o=n.length,a=r.length;let s=0,l=[0,0],c;for(let u=0;u<o;u++)c=An(t,s),s=c.offp,n[u]=n[u]^c.key;s=0;for(let u=0;u<o;u+=2)c=An(e,s),s=c.offp,l[0]^=c.key,c=An(e,s),s=c.offp,l[1]^=c.key,l=Sr(l,0,n,r),n[u]=l[0],n[u+1]=l[1];for(let u=0;u<a;u+=2)c=An(e,s),s=c.offp,l[0]^=c.key,c=An(e,s),s=c.offp,l[1]^=c.key,l=Sr(l,0,n,r),r[u]=l[0],r[u+1]=l[1]},fi=(e,t,n,r,o)=>{const a=N1.slice(),s=a.length;if(n<4||n>31){const f=new Error(`Illegal number of rounds (4-31): ${n}`);if(r===!1)return Promise.reject(f);throw f}if(t.length!==16){const f=new Error(`Illegal salt length: ${t.length} != 16`);if(r===!1)return Promise.reject(f);throw f}n=1<<n>>>0;let l,c,u=0,d;Int32Array?(l=new Int32Array(ui),c=new Int32Array(di)):(l=ui.slice(),c=di.slice()),Zv(t,e,l,c);const p=()=>{if(o&&o(u/n),u<n){const f=Date.now();for(;u<n&&(u=u+1,pi(e,l,c),pi(t,l,c),!(Date.now()-f>100)););}else{for(u=0;u<64;u++)for(d=0;d<s>>1;d++)Sr(a,d<<1,l,c);const f=[];for(u=0;u<s;u++)f.push((a[u]>>24&255)>>>0),f.push((a[u]>>16&255)>>>0),f.push((a[u]>>8&255)>>>0),f.push((a[u]&255)>>>0);return r===!1?Promise.resolve(f):f}if(r===!1)return new Promise(f=>Wv(()=>{p().then(f)}))};if(r===!1)return p();{let f;for(;;)if(typeof(f=p())<"u")return f||[]}},Jv=e=>{try{let t;return(self.crypto||self.msCrypto).getRandomValues(t=new Uint32Array(e)),Array.prototype.slice.call(t)}catch{throw Error("WebCryptoAPI is not available")}},Qv=(e=10)=>{if(typeof e!="number")throw Error("Illegal arguments: "+typeof e);e<4?e=4:e>31&&(e=31);const t=[];return t.push("$2a$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(Da(Jv(16),16)),t.join("")};function e5(e,t,n,r){if(typeof e!="string"||typeof t!="string"){const v=new Error("Invalid string / salt: Not a string");if(n===!1)return Promise.reject(v);throw v}let o,a;if(t.charAt(0)!=="$"||t.charAt(1)!=="2"){const v=new Error("Invalid salt version: "+t.substring(0,2));if(n===!1)return Promise.reject(v);throw v}if(t.charAt(2)==="$")o=String.fromCharCode(0),a=3;else{if(o=t.charAt(2),o!=="a"&&o!=="b"&&o!=="y"||t.charAt(3)!=="$"){const v=Error("Invalid salt revision: "+t.substring(2,4));if(n===!1)return Promise.reject(v);throw v}a=4}if(t.charAt(a+2)>"$"){const v=new Error("Missing salt rounds");if(n===!1)return Promise.reject(v);throw v}const s=parseInt(t.substring(a,a+1),10)*10,l=parseInt(t.substring(a+1,a+2),10),c=s+l,u=t.substring(a+3,a+25);e+=o>="a"?"\0":"";const d=Xv(e),p=Uv(u,16),f=v=>{const y=[];return y.push("$2"),o>="a"&&y.push(o),y.push("$"),c<10&&y.push("0"),y.push(c.toString()),y.push("$"),y.push(Da(p,p.length)),y.push(Da(v,N1.length*4-1)),y.join("")};return n===!1?fi(d,p,c,!1,r).then(v=>f(v)):f(fi(d,p,c,!0,r))}const t5=(e,t=10)=>{if(typeof t=="number"&&(t=Qv(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return e5(e,t,!0)},xa=(e,t)=>{if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:t5(e,t.substring(0,t.length-31))===t},$1=()=>i(se,{name:"lock"},()=>i("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));$1.displayName="LockIcon";var M1=B({name:"PasswordModal",props:{full:Boolean},emits:["verify"],setup(e,{emit:t}){const n=Ee(),r=le(),o=H(""),a=H(!1),s=H(!1),l=S(()=>r.value.encryptLocales);let c=null;const u=()=>{c&&clearTimeout(c),a.value=!1,t("verify",o.value,s.value),hn().then(()=>{a.value=!0,c=setTimeout(()=>{a.value=!1},1e3)})};return()=>i("div",{class:["vp-decrypt-layer",{expand:e.full||n.value.home}]},i("div",{class:"vp-decrypt-modal"},[i("div",{class:["vp-decrypt-hint",{tried:a.value}]},a.value?l.value.errorHint:i($1,{"aria-label":l.value.iconLabel})),i("div",{class:"vp-decrypt-input"},[i("input",{type:"password",value:o.value,placeholder:l.value.placeholder,onInput:({target:d})=>{o.value=d.value},onKeydown:({key:d})=>{d==="Enter"&&u()}})]),i("div",{class:"vp-remember-password"},[i("input",{type:"checkbox",value:s.value,onChange:()=>s.value=!s.value}),l.value.remember]),i("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>u()},"OK")]))}});const V1=()=>{const e=Jt();return S(()=>e.value.encrypt||{})},vi="VUEPRESS_HOPE_GLOBAL_TOKEN",n5=()=>{const e=V1(),t=Zn(vi,""),n=au(vi,""),r=S(()=>{const{global:a=!1,admin:s=[]}=e.value;return a&&s.length>0}),o=S(()=>{if(r.value){if(t.value)return e.value.admin.some(a=>xa(t.value,a));if(n.value)return e.value.admin.some(a=>xa(n.value,a))}return!1});return{isEncrypted:r,isDecrypted:o,validate:(a,s=!1)=>{(s?t:n).value=a}}},oa=(e="",t)=>!!e&&xa(e,t),hi="VUEPRESS_HOPE_PATH_TOKEN",r5=()=>{const e=ce(),t=V1(),n=Zn(hi,{}),r=au(hi,{}),o=s=>Tr(t.value.config)?Qe(t.value.config).filter(l=>Fn(decodeURI(s),l)).sort((l,c)=>c.length-l.length):[],a=s=>{const l=o(s);if(l.length>0){const{config:c={}}=t.value;return{isEncrypted:!0,isDecrypted:l.some(u=>n.value[u]&&c[u].some(d=>oa(n.value[u],d))||r.value[u]&&c[u].some(d=>oa(r.value[u],d)))}}return{isDecrypted:!1,isEncrypted:!1}};return{status:S(()=>a(e.value.path)),getStatus:a,validate:(s,l=!1)=>{const{config:c={}}=t.value,u=o(e.value.path);for(const d of u)if(c[d].filter(p=>oa(s,p))){(l?n:r).value[d]=s;break}}}};var o5=B({name:"GlobalEncrypt",slots:Object,setup(e,{slots:t}){const{isDecrypted:n,isEncrypted:r,validate:o}=n5(),a=H(!1);return pe(()=>{a.value=!0}),()=>i(g1,()=>r.value?a.value?n.value?t.default():i(M1,{full:!0,onVerify:o}):null:t.default())}}),a5=B({name:"LocalEncrypt",slots:Object,setup(e,{slots:t}){const{status:n,validate:r}=r5(),o=H(!1);return pe(()=>{o.value=!0}),()=>{const{isEncrypted:a,isDecrypted:s}=n.value;return a?o.value?s?t.default()||null:i(M1,{full:!0,onVerify:r}):null:t.default()||null}}});var s5=B({name:"SlidePage",setup(){const e=tt(),t=H(!1),n=Le(),r=()=>{t.value=!t.value},o=()=>{t.value=!1},a=()=>{o(),window.history.go(-1)},s=()=>{o(),e.push("/")};return Np(n,o),()=>i("div",{class:"presentation"},[i(is),i("div",{ref:n,class:["menu",{active:t.value}]},[i("button",{type:"button",class:"menu-button",onClick:()=>r()},i("span",{class:"icon"})),i("button",{type:"button",class:"back-button",onClick:()=>a()},i(ef)),i("button",{type:"button",class:"home-button",onClick:()=>s()},i(tf))])])}});y4(et);const l5=Et({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...r)=>(await m1().wait(),n(...r)),_6(e),e.component("BloggerInfo",Ps),e.component("GlobalEncrypt",o5),e.component("LocalEncrypt",a5)},setup:()=>{y6(),R6(),Lv()},layouts:{Layout:vv,NotFound:mv,BlogCategory:Nv,BlogHome:Hv,BlogType:zv,Timeline:jv,Slide:s5}}),eo=[j2,u3,_4,R4,k4,O4,B4,z4,W4,Zf,l6,l5],i5=[["v-8daa1a0e","/",{y:"h",t:"主页",i:"home"},["/index.html","/README.md"]],["v-184f4da6","/intro.html",{y:"p",t:"关于",i:"info"},["/intro","/intro.md"]],["v-2e3eac9e","/slides.html",{y:"s",t:"Slide page",i:"slides"},["/slides","/slides.md"]],["v-1473bf53","/demo/",{y:"p",t:"Features Demo",i:"discover"},["/demo/index.html","/demo/README.md"]],["v-4e65ec78","/demo/disable.html",{y:"p",t:"Disabling layout and features",i:"config",O:3},["/demo/disable","/demo/disable.md"]],["v-c151bf32","/demo/encrypt.html",{y:"p",t:"Encryption Article",i:"lock"},["/demo/encrypt","/demo/encrypt.md"]],["v-438ffe52","/demo/markdown.html",{y:"p",t:"Markdown Enhance",i:"markdown",O:2},["/demo/markdown","/demo/markdown.md"]],["v-c9afc8f6","/archives/",{y:"p",t:"归档内容",i:"share"},["/archives/index.html","/archives/README.md"]],["v-47a75f3e","/posts/econonics/Perfect-competition.html",{d:16536096e5,l:"2022年5月27日",g:["econonics"],o:!0,e:`<h1> 完全竞争假设</h1>
<p>在经济学领域里对市场的划分有四个档次，分别是完全竞争市场、垄断竞争市场、寡头垄断市场、完全垄断市场。当然我列出的名词从字面上也可以大致理解个具体，但这不妨碍我还是要说明一下。</p>
<p>Wikipedia的页面最近重新设计了，之前像是上个世纪的Web的纯html页面，很杂，现在则有一种现代感的简洁美，好评一下。以下我内容进行总结自Wiki页面，当然为了防止知识传播的二次消耗，我还是在名字中加上一个链接。</p>
<p><a href="https://zh.m.wikipedia.org/zh/%E5%AE%8C%E5%85%A8%E7%AB%9E%E4%BA%89" target="_blank" rel="noopener noreferrer">完全竞争市场</a>：买卖双方的规模足够大，每个人都是价格的接收者，而且因为市场规模足够大，每个个体都无法左右价格的市场，就称为完全竞争市场。比如我们常见的菜市场，一颗大白菜的价格整个市场都差不多，各个白菜之间近乎无差异，所以在完全竞争市场里，没有一个个体可以左右市场价格。</p>`,r:{minutes:5.22,words:1565},y:"a",t:"完全竞争假设",i:"edit"},["/posts/econonics/Perfect-competition","/posts/econonics/Perfect-competition.md"]],["v-f880e932","/posts/thinking/2021-What-I-do.html",{d:16396992e5,l:"2021年12月17日",c:["years"],g:["redis","consistency"],o:!0,e:`<h1> 我在2021年做了些什么？</h1>
<p>记录时间与我而言仅仅只是手段，重要的是明白自己的时间都花在了哪里，或许哪里又可以有所改进？或许，自己的效率又有哪里可以提升的空间？又或许自己在过去一年又有哪些未完成的学习和工作任务？等等</p>
<p>这些问题相信每个人都遇到过，可能有相应的对应方法，又或许仅仅是使用鸵鸟策略对其相视不见。</p>
<p>提出问题却不去想办法解决问题是耍流氓的行为。既然我能心安理得的提出这些问题，那么相应的我就有责任去回答这些问题的解决方案。</p>
<p>当然时间又是一个不可再生资源，至少对于现在是，在可遇见的未来更是。这个不可再生资源又和外界认为的很不一样。煤、石油、天然气等等这些所谓的不可再生资源是有解决方案的。只要在以往的不可再生资源在未消耗完之前，寻找到新的可代替的资源就可以实现持续发展了。比如在煤炭用完之前找到了石油，在石油用完之前找到太阳能，在太阳能竭尽之前找到可以直接使用恒星能量的方法或者实现可控核聚变就没什么问题。</p>`,r:{minutes:6.48,words:1945},y:"a",t:"我在2021年做了些什么？",i:"edit"},["/posts/thinking/2021-What-I-do","/posts/thinking/2021-What-I-do.md"]],["v-46d41fa4","/posts/thinking/Absolutely-Correct.html",{d:16573248e5,l:"2022年7月9日",c:["thinking"],g:["thinking"],o:!0,e:`<h1> 绝对的正确</h1>
<p>绝对的正确存不存在？这对绝大多数人来讲是一个无须讨论的问题。因为对于他们来讲我们的时代就是毫无疑问的正确，所有的事物都是正确的，科学技术，艺术文化。</p>
<p>当我们回头往过去看，往往一切都是那么地失败，仿佛过去的都是错误的，甚至当我们看向我们自己也往往是同样的想法：过去犯的错误太多，如果...就好了，或者要是...，我就...连我们自身都会常常会有这样的想法。</p>
<p>但我们这个时代有什么不同呢？事实上是...没什么不同。这意味着我们的时代往往在当下看确实是<strong>前所未有的正确</strong>，但不用多久甚至五到十年事情往往就会发生变化，又因为信息革命让我们每个人的链接比以往放大了无数倍，所以未来的列车事实上也是加速度向我们驶来的。</p>`,r:{minutes:4.81,words:1444},y:"a",t:"绝对的正确",i:"edit"},["/posts/thinking/Absolutely-Correct","/posts/thinking/Absolutely-Correct.md"]],["v-537693e6","/posts/thinking/Battle-Internet.html",{d:16573248e5,l:"2022年7月9日",c:["thinking"],g:["network","blockchain","thinging"],o:!0,e:`<h1> 个体的反击</h1>
<p>有时候你不得不承认这个世界发展的速度已经超过了我们的想象，有时候在一个领域里一个新蹦出来的知识还没怎么理解透彻，回头一看，又新蹦出来一堆新发明的名词。这不仅仅是对我们考验着我们对资讯的理解和处理能力，也不单单挑战对技术的理解，更挑战着我们对这个世界的认知方式。</p>
<p>在这里还需要熟知的一点是，我们中的绝大多数人都生活在已经熟知的领域之内，因为自己在熟悉的领域中更清楚自己所处的位置以及知晓如何继续下去。你是学生，那么考试成绩就是证明自己的学有所成的有效方式，那么继续做个学生其实是生活在自己熟知领域里的最佳方式，虽然明白未来会呼啸而来，而随之而来的现实世界并没有最优解。在自己熟知的领域里知晓一切，而自己熟知的领域却不过是整个世界的一瞥。</p>`,r:{minutes:16.54,words:4963},y:"a",t:"个体的反击",i:"edit"},["/posts/thinking/Battle-Internet","/posts/thinking/Battle-Internet.md"]],["v-18d64577","/posts/thinking/I-wrote-a-blockchain-in-160-lines-of-code.html",{d:16197408e5,l:"2021年4月30日",g:["blockchain"],o:!0,e:`<h1> 我用160行代码写出了个区块链...</h1>
<figure><img src="https://pic.editoe.com/b1e68981168aed2b536ac06deddedc53db2fd6f38d8561e4a914247b173901c6.svg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>完成本篇教程，你将会做出一条属于自己的区块链系统</p>
<p>你可以在自己的浏览器中显示自己的区块链系统，类似于下图所示</p>
<figure><img src="https://pic.editoe.com/f1362f7d18873f3edaab827cc966ff75be5cdf3feb7832d0e3b5cec0ed5125ba.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:11.61,words:3482},y:"a",t:"我用160行代码写出了个区块链...",i:"edit"},["/posts/thinking/I-wrote-a-blockchain-in-160-lines-of-code","/posts/thinking/I-wrote-a-blockchain-in-160-lines-of-code.md"]],["v-32bb1c95","/posts/thinking/I-wrote-a-new-App-that-could-help-me-in-immersed.html",{d:16386624e5,l:"2021年12月5日",g:["white-noise","music"],o:!0,e:`<h1> I Wrote a new App that could help me in immersed</h1>
<p>In the past few years, Tide has always been a good App for people who like to meditate. But with the development of time, the tide has become bloated, contrary to its original intention. So three days ago, I decided to develop a new App to replace the Tide at least for me.</p>`,r:{minutes:1.43,words:428},y:"a",t:"I Wrote a new App that could help me in immersed",i:"edit"},["/posts/thinking/I-wrote-a-new-App-that-could-help-me-in-immersed","/posts/thinking/I-wrote-a-new-App-that-could-help-me-in-immersed.md"]],["v-187a439e","/posts/thinking/More-valuable-than-linear-algebra.html",{d:16347744e5,l:"2021年10月21日",c:["value"],g:["secure","value"],o:!0,e:`<h1> What you do is more valuable than linear algebra</h1>
<p>This morning, as usual, the entire linear algebra class is used by me for reading Taleb's books THE BLACK SWAN. But, one little thing is different from before. When 2 hours later, course is coming to an end. My linear algebra teacher liu ,he accidentally walked to my side, ask me : Why don't you play games like them?Really like reading? He watched the title of my book, and keep asking me what have you learnt from this book?</p>`,r:{minutes:1.65,words:494},y:"a",t:"What you do is more valuable than linear algebra",i:"edit"},["/posts/thinking/More-valuable-than-linear-algebra","/posts/thinking/More-valuable-than-linear-algebra.md"]],["v-41dba8b2","/posts/thinking/Protect-yourself.html",{d:16353792e5,l:"2021年10月28日",c:["privacy"],g:["secure","privacy"],o:!0,e:`<h1> Protect yourself</h1>
<p>My mother said to me: "Don't show off, it will bring danger." On the other hand,xiaolai's book《The Road to Freedom of Wealth》,end , say that <strong>the best way is to grow alone.</strong></p>
<p>Since November last year, I have earned income from the cryptocurrency market. What I don’t belong to my age should be income. The rate of return is about 200%. I have countless times to share the idea of profitability, but I have curbed it.</p>`,r:{minutes:.84,words:253},y:"a",t:"Protect yourself",i:"edit"},["/posts/thinking/Protect-yourself","/posts/thinking/Protect-yourself.md"]],["v-07aa4806","/posts/thinking/be-friends-with-time.html",{d:16058304e5,l:"2020年11月20日",c:["time"],g:["time"],o:!0,e:`<h1> You can live ten years longer than others?</h1>
<blockquote>
<p>Believe it or not, each of us has a chance to live ten years longer than everyone else. Realizing this, you seem to have a life cheating device. Compared with other people, you have won at the starting point.</p>
</blockquote>
<p>First of all, you have to accept a concept: each of us’s time is valuable. If you don't have this concept, then even if you have more than ten years, more than a hundred years than other people, it is just a silly living, turning yourself into a walking dead, worthless.</p>`,r:{minutes:4.55,words:1364},y:"a",t:"You can live ten years longer than others?",i:"edit"},["/posts/thinking/be-friends-with-time","/posts/thinking/be-friends-with-time.md"]],["v-c3854da0","/posts/thinking/cosmic-origin.html",{d:16111008e5,l:"2021年1月20日",g:["imagine"],o:!0,e:`<h1> Cosmic origin</h1>
<p>The past universe was in a state of infinitely high density and temperature before a finite time. This state is called a singularity. This high-temperature and high-density phase in the very early stage of the universe is called the "Big Bang", which is regarded as the birth period of our universe. So far, this period of the Big Bang has a history of 13.7 billion years.</p>`,r:{minutes:10.1,words:3029},y:"a",t:"Cosmic origin",i:"edit"},["/posts/thinking/cosmic-origin","/posts/thinking/cosmic-origin.md"]],["v-39ad62d5","/posts/thinking/get-away-wechat.html",{d:16373664e5,l:"2021年11月20日",c:["privacy"],g:["privacy","wechat"],o:!0,e:`<h1> 我离开微信的三天</h1>
<h2> English version</h2>
<p>I changed my phone three days ago and saw a few friends in the Mixin group chatting about the privacy issues of WeChat and the data monopoly of large companies. I have been thinking about this issue. Obviously, the backend of WeChat can monitor everyone's chat data, whether it is a transfer function or a normal chat. So how serious is this problem? I think there may be the following:</p>`,r:{minutes:12.69,words:3807},y:"a",t:"我离开微信的三天",i:"edit"},["/posts/thinking/get-away-wechat","/posts/thinking/get-away-wechat.md"]],["v-445d1c68","/posts/thinking/learn-again.html",{d:1644624e6,l:"2022年2月12日",c:["learn"],g:["learn","thinging"],o:!0,e:`<h1> 学习学习再学习</h1>
<p>这篇文章的标题选用李笑来以前的公众号名，看起来有点抄袭的意思了。但其实不是一个意思，根据李笑来的说法，这里的学习学习再学习，三个学习中第二个是名词，其他两个是动词。有点绕口，具体的解释是这样子的：先去学习正确学习的方法，再去学习，这样的学习就比较高效了。</p>
<p>但本文的学习学习再学习对待的是特定领域，比如你要学Javascript，那么你就先去学一学基础语法，确保大概能看懂别人的程序代码，注意：这里是第一个学习。接下来直接上手去做一点自己感兴趣的东西，或者直接去看别人的代码都可以，然后自己写一写，然后发现还是由很多东西没有掌握明白，于是逢山开路，遇河搭桥，这样子，此谓第二个学习，具体是有目的地去解决一些现实问题。到然后再去全然巩固一遍Javascript的全部概念，甚至底层的垃圾回收算法，词法分析，编译器等等问题，这就是第三个学习，全面。</p>`,r:{minutes:3.33,words:998},y:"a",t:"学习学习再学习",i:"edit"},["/posts/thinking/learn-again","/posts/thinking/learn-again.md"]],["v-4447c0de","/posts/thinking/patient-with-develop.html",{d:16327872e5,l:"2021年9月28日",c:["develop"],g:["develop"],o:!0,e:`<h1> Be patient with develop</h1>
<p>I lost my time book which recorded all my time spent in this year. But at this moment,I feel quiet. Although my time book lost, I got the most valuable stuff which is the perception of time.Time is fair to everyon. You can play games a whole year,or you can learn knowledge for several months.Now I choose the later.</p>`,r:{minutes:.78,words:233},y:"a",t:"Be patient with develop",i:"edit"},["/posts/thinking/patient-with-develop","/posts/thinking/patient-with-develop.md"]],["v-a8a9a750","/posts/thinking/run.html",{d:1634256e6,l:"2021年10月15日",c:["run"],g:["run","long_termism"],o:!0,e:`<h1> For the long run</h1>
<p>This morning, I ran a kilometer and used 4 minutes. Okay, so did the results a year ago. But the important thing I want to say is FOR THE LONG RUN. In the past year, I often started running at 6 o'clock in the morning, and occasionally took a walk. The fresh air in the morning always made me happy. My school playground always great, yes, at least now.</p>`,r:{minutes:.74,words:221},y:"a",t:"For the long run",i:"edit"},["/posts/thinking/run","/posts/thinking/run.md"]],["v-2b300ac6","/posts/thinking/the-future-of-internet.html",{d:16308864e5,l:"2021年9月6日",c:["develop"],g:["internet","future"],o:!0,e:`<h1> The future of the internet</h1>
<p>Well know, electronic identities have become popular in recently years,which make our personal information public in internet. Worse,internet company collect our personal privacy information sell to information vendors to make money,which make us become transparent in the world.</p>`,r:{minutes:2.05,words:614},y:"a",t:"The future of the internet",i:"edit"},["/posts/thinking/the-future-of-internet","/posts/thinking/the-future-of-internet.md"]],["v-1f902b80","/posts/program/betxin/betxin-rules.html",{d:16663968e5,l:"2022年10月22日",c:["betxin"],g:["betxin-rules"],o:!0,e:`<h1> Betxin 规则</h1>
<h2> Betxin</h2>
<p><span id="top"></span></p>
<h2> Menu</h2>
<p>Start:</p>
<ul>
<li><a href="#intro">Intro</a></li>
<li><a href="#overview">OverView</a></li>
<li><a href="#page">page</a></li>
</ul>
<p><span id="intro"></span></p>
<h1> 介绍</h1>
<h2> 什么是Betxin?</h2>
<p>Betxin是一个信息交易市场平台,你可以在这里交易世界上最受争议的话题例如(病毒、政治、加密货币、实事等)。在Betxin上,你可以根据自己的预测来构建投资预测组合，如果你的投资预测是正确的那么您将获得回报，当你决定在市场上进行预测投资时,你其实是在权衡自己的知识、头脑以及对未来的远见。市场比率在一定程度上反映了过去一段时间人们对未来的看法。在这里您可以根据您的预测进行购买，在预测达不到预期时也可以选择卖出。</p>`,r:{minutes:2.63,words:788},y:"a",t:"Betxin 规则",i:"edit"},["/posts/program/betxin/betxin-rules","/posts/program/betxin/betxin-rules.md"]],["v-51ce692c","/posts/program/docker/Docker-get-start.html",{d:16393536e5,l:"2021年12月13日",c:["tutorial"],g:["docker"],o:!0,e:`<h1> Docker 底层技术</h1>
<p>Docker 的关键部分就是镜像,容器和仓库理解了这三个概念，就理解了 Docker 的整个生命周期。</p>
<p>Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。使得 Docker 技术比虚拟机技术更为轻便、快捷。</p>
<p>下面的图片比较了 Docker 和传统虚拟化方式的不同之处。传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。</p>`,r:{minutes:40.7,words:12210},y:"a",t:"Docker 底层技术",i:"edit"},["/posts/program/docker/Docker-get-start","/posts/program/docker/Docker-get-start.md"]],["v-5b6f1d36","/posts/program/c/get-start-with-c-tcp-program/get-start-with-c-tcp-program.html",{d:16573248e5,l:"2022年7月9日",c:["c","linux"],g:["network"],o:!0,e:`<h1> TCP/IP Network Program</h1>
<p>If you are learn TCP/IP network, you must have heard that CS model with this.</p>
<figure><img src="/assets/images/tcp/tcp.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>But if you are new with network programing, there are difficult.</p>`,r:{minutes:2.86,words:857},y:"a",t:"TCP/IP Network Program",i:"edit"},["/posts/program/c/get-start-with-c-tcp-program/get-start-with-c-tcp-program","/posts/program/c/get-start-with-c-tcp-program/get-start-with-c-tcp-program.md"]],["v-6e6d9123","/posts/program/golang/currency/currency.html",{d:16396128e5,l:"2021年12月16日",c:["golang"],g:["golang","concurrency"],o:!0,e:`<h1> Concurrency or Parallelism ?</h1>
<p>First of all, You need to know Go is a concurrent language and not a parallel one. Before discussing how concurrency is taken care in Go, we must first understand what is concurrency and how it is different from parallelism.</p>
<h3> What is concurrency?</h3>`,r:{minutes:9.05,words:2715},y:"a",t:"Concurrency or Parallelism ?",i:"edit"},["/posts/program/golang/currency/currency","/posts/program/golang/currency/currency.md"]],["v-311bc9d1","/posts/program/golang/deep/go-depth.html",{d:16376256e5,l:"2021年11月23日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go 语言底层剖析</h1>
<h3> GMP</h3>
<p>数据结构</p>
<ul>
<li>G — 表示 Goroutine，它是一个待执行的任务；</li>
<li>M — 表示操作系统的线程，它由操作系统的调度器调度和管理；</li>
<li>P — 表示处理器，它可以被看做运行在线程上的本地调度器；</li>
</ul>
<p>我们先在这里介绍一下不同的数据结构, 作用以及运行期间可能的状态:
<img src="https://cdn.learnku.com/uploads/images/202003/11/58489/j37FX8nek9.png!large" alt="" loading="lazy"></p>`,r:{minutes:45.18,words:13553},y:"a",t:"Go 语言底层剖析",i:"edit"},["/posts/program/golang/deep/go-depth","/posts/program/golang/deep/go-depth.md"]],["v-0f4688c6","/posts/program/golang/sort/top10-sorting.html",{d:16376256e5,l:"2021年11月23日",c:["tutorial"],g:["golang","top10-sort"],o:!0,e:`<h1> 十大排序</h1>
<h3> 选择排序</h3>
<p>这是最简单也最没用的算法, 时间复杂度有O(n^2), 同时也不稳定</p>
<p>选择排序的思路特别简单: 第一遍找到最小的值把它放在最前面, 再遍历一次找到第二小的数放到第二个位置......</p>
<p>那么我们怎么开始写这个程序呢?</p>
<p>首先第一步是要找到最小的那个数, 如果遍历到的arr[j]比最小位置还要小,那么就让minPosition = j, 所以</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>minPosition <span class="token operator">:=</span> <span class="token number">0</span>
arr <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>  <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minPosition<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    minPosition <span class="token operator">=</span> j
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.58,words:2275},y:"a",t:"十大排序",i:"edit"},["/posts/program/golang/sort/top10-sorting","/posts/program/golang/sort/top10-sorting.md"]],["v-d18eaea2","/posts/program/golang/std/std-bufio.html",{d:1685232e6,l:"2023年5月28日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Bufio 包详解</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>bufio</code> 包是 Go 标准库中的一个包，提供了带缓冲的 I/O 操作，用于提高 I/O 的效率。它封装了 <code>io.Reader</code> 和 <code>io.Writer</code>，并提供了缓冲功能，可以减少系统调用次数，提高读写性能。</p>
</div>
<p>下面是对 <code>bufio</code> 包的详细介绍以及一些示例：</p>
<p><strong>创建缓冲读取器（<code>Scanner</code>）：</strong></p>`,r:{minutes:1.78,words:533},y:"a",t:"Bufio 包详解",i:"edit"},["/posts/program/golang/std/std-bufio","/posts/program/golang/std/std-bufio.md"]],["v-f8bc084e","/posts/program/golang/std/std-context.html",{d:16854912e5,l:"2023年5月31日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go Context包详解</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>context 包定义了 Context 类型，它在 API 边界和进程之间传递截止时间、取消信号和其他与请求相关的值。</p>
</div>
<p>这样说可能你还是一脸懵。</p>
<div class="hint-container info">
<p class="hint-container-title">举例</p>
<p>可以将 context 想象成传递信号的工具，类似于你向一个进程发送信号，告诉它该做什么或者取消它正在做的事情。</p>
<p>假设你是一名团队的领导，你负责协调团队中的各个成员完成任务。你希望每个成员都能在规定的时间内完成自己的任务，如果有需要的话，你还想提前告知他们任务的截止时间或者取消任务。在这种情况下，你可以使用 context 包来实现这些功能。</p>
</div>`,r:{minutes:1.87,words:561},y:"a",t:"Go Context包详解",i:"edit"},["/posts/program/golang/std/std-context","/posts/program/golang/std/std-context.md"]],["v-1b84a3fe","/posts/program/golang/std/std-flag.html",{d:16849728e5,l:"2023年5月25日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go flag 包详解</h1>
<h2> 介绍</h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>flag</code> 包是 Go 语言标准库中的一个包，用于解析命令行参数。它提供了一种方便的方式来定义和解析命令行参数，使得开发命令行工具和应用程序更加简单和灵活。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><code>flag</code> 包的主要功能包括：</p>
<ul>
<li>定义命令行参数的类型和默认值</li>
<li>解析命令行参数，并将其赋值给对应的变量</li>
<li>提供帮助信息和用法说明</li>
</ul>
</div>`,r:{minutes:9.08,words:2724},y:"a",t:"Go flag 包详解",i:"edit"},["/posts/program/golang/std/std-flag","/posts/program/golang/std/std-flag.md"]],["v-f68d818a","/posts/program/golang/std/std-fmt.html",{d:16841952e5,l:"2023年5月16日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go fmt 包详解</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>相信很多人入坑Go语言都是从官网的<code>fmt.Println("Hello World")</code>入门的</p>
<p>这篇文章带你好好了解一下<code>fmt</code>包还可以做哪些事情。</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>在Go语言中，我们经常使用 fmt 包进行格式化输入输出操作。虽然大多数时候我们只会使用 Print...、Sprint... 和 Errorf 等少数函数，也只会用到一些常见的占位符，但这并不代表我们不需要了解 fmt 包的其他特性, 本文就来详细介绍fmt包。</p>
</div>`,r:{minutes:5.84,words:1753},y:"a",t:"Go fmt 包详解",i:"edit"},["/posts/program/golang/std/std-fmt","/posts/program/golang/std/std-fmt.md"]],["v-479dc2e4","/posts/program/golang/std/std-log.html",{d:16845408e5,l:"2023年5月20日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Log包详解</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>之前不知道在哪看到过一句话，一个程序员开始重视日志的时候才是这个程序员从程序员迈向工程师的时候。</p>
<p>在程序开发中，日志是一个非常重要的工具，它可以帮助我们记录和追踪程序的运行状态和错误信息。在Go语言中，log 包是一个基础的标准库，提供了许多日志相关的功能。本文将介绍 log 包的常用函数以及如何配置和使用日志。</p>
</div>
<h2> 常用函数</h2>
<p>log 包提供了一些常用的函数，可以方便地打印日志信息。这些函数包括 Print、Printf、Println、Fatal、Fatalf、Fatalln、Panic、Panicf 和 Panicln。它们的功能类似，区别在于添加换行符(ln)和是否触发程序的退出或崩溃。</p>`,r:{minutes:3.53,words:1058},y:"a",t:"Go log 包详解",i:"edit"},["/posts/program/golang/std/std-log","/posts/program/golang/std/std-log.md"]],["v-ea6c58ea","/posts/program/golang/std/std-reflect.html",{d:16851456e5,l:"2023年5月27日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go reflect 反射包详解</h1>
<div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>当我们接触一个新名词的时候，我们需要做的事情就是明确其定义，然后尽快适应，反射就是这样的名词之一。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先是定义：反射允许程序在运行时检查和操作其结构、变量、方法等信息。Go语言提供了反射包（reflect），使得我们能够在运行时动态地获取类型信息、操作对象的字段和方法。</p>`,r:{minutes:10.4,words:3121},y:"a",t:"Go reflect 反射包详解",i:"edit"},["/posts/program/golang/std/std-reflect","/posts/program/golang/std/std-reflect.md"]],["v-3df5533a","/posts/program/golang/std/std-strconv.html",{d:16851456e5,l:"2023年5月27日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go strconv包详解</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>Strconv包也是我们在Go语言中经常会使用到的包，通常用于在字符串与基本数据类型之间进行转换。它提供了一系列函数来处理字符串的解析（parsing）和格式化（formatting）操作。</p>
</div>
<h3> 简要介绍</h3>
<p>strconv 包是 Go 标准库中的一个包，用于进行字符串和基本数据类型之间的相互转换。它提供了一系列的函数，包括将基本类型转换为字符串的函数，以及将字符串转换为基本类型的函数。</p>`,r:{minutes:5.13,words:1540},y:"a",t:"Go strconv包详解",i:"edit"},["/posts/program/golang/std/std-strconv","/posts/program/golang/std/std-strconv.md"]],["v-7700453d","/posts/program/golang/std/std-time.html",{d:16846272e5,l:"2023年5月21日",c:["tutorial"],g:["golang"],o:!0,e:`<h1> Go time 包详解</h1>
<div class="language-card line-numbers-mode" data-ext="card"><pre class="language-card"><code>time 包是 Go 语言中用于处理时间和日期的标准库。
它提供了许多函数和类型，用于表示和操作时间、计时器、持续时间和时区等。

本文的顺序按照Go time官方包的顺序编写
详细信息请看 https://pkg.go.dev/time@go1.20.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.21,words:2463},y:"a",t:"Go time 包详解",i:"edit"},["/posts/program/golang/std/std-time","/posts/program/golang/std/std-time.md"]],["v-ed510016","/posts/program/leetcode/leetcode/backtrack.html",{d:16358976e5,l:"2021年11月3日",c:["tutorial"],g:["leetcode","backtrack"],o:!0,e:`<h1> 回溯算法</h1>
<p><a href="https://www.programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">学习笔记</a></p>
<ul>
<li><a href="#%E7%BB%84%E5%90%88">组合</a></li>
<li><a href="#%E5%88%87%E5%89%B2">切割</a></li>
<li><a href="#%E5%AD%90%E9%9B%86">子集</a></li>
<li><a href="#%E6%8E%92%E5%88%97">排列</a></li>
<li><a href="#%E6%A3%8B%E7%9B%98">棋盘</a></li>
</ul>`,r:{minutes:10.6,words:3179},y:"a",t:"回溯算法",i:"edit"},["/posts/program/leetcode/leetcode/backtrack","/posts/program/leetcode/leetcode/backtrack.md"]],["v-6bd45cce","/posts/program/leetcode/leetcode/dynamic-programming.html",{d:16361568e5,l:"2021年11月6日",c:["tutorial"],g:["leetcode","dynamic-programming"],o:!0,e:`<h1> 动态规划</h1>
<p><a href="https://www.programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%9B%9E%E6%BA%AF%E6%B3%95%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98" target="_blank" rel="noopener noreferrer">学习笔记</a></p>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80%E9%A2%98%E7%9B%AE">基础题目</a></li>
<li><a href="#%E8%83%8C%E5%8C%85%E9%97%AE%E9%A2%98">背包问题</a></li>
<li><a href="#%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8D">打家劫舍</a></li>
<li><a href="#%E8%82%A1%E7%A5%A8%E9%97%AE%E9%A2%98">股票问题</a></li>
<li><a href="#%E5%AD%90%E5%BA%8F%E5%88%97%E9%97%AE%E9%A2%98">子序列问题</a></li>
</ul>`,r:{minutes:55.74,words:16722},y:"a",t:"动态规划",i:"edit"},["/posts/program/leetcode/leetcode/dynamic-programming","/posts/program/leetcode/leetcode/dynamic-programming.md"]],["v-655b0d80","/posts/program/golang/tool/gomock-tuto.html",{d:168264e7,l:"2023年4月28日",c:["tutorial"],g:["golang","mock"],o:!0,e:`<h1> GoMock 教程</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>GoMock是go官方提供的一款Mock工具，方便开发人员模拟接口行为做测试的工具。</p>
<p>比如我们有一个Person接口下的Eat方法，我们就可以模拟这个接口</p>
</div>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>ctrl <span class="token operator">:=</span> gomock<span class="token punctuation">.</span><span class="token function">NewController</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>

mockPerson <span class="token operator">:=</span> mocks<span class="token punctuation">.</span><span class="token function">NewMockPerson</span><span class="token punctuation">(</span>ctrl<span class="token punctuation">)</span>

mockPerson<span class="token punctuation">.</span> <span class="token function">EXPECT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token function">Eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Return</span><span class="token punctuation">(</span><span class="token string">"lixin is sleep"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.34,words:1001},y:"a",t:"GoMock 教程",i:"edit"},["/posts/program/golang/tool/gomock-tuto","/posts/program/golang/tool/gomock-tuto.md"]],["v-1de1766a","/posts/program/leetcode/offer/offer.html",{d:1636848e6,l:"2021年11月14日",c:["tutorial"],g:["leetcode","offer"],o:!0,e:`<h1> 剑指offer 刷题笔记</h1>
<p>关于剑指offer,其实今年前半年刷过一次,但许久未做题就遗忘了许多,这次边做题边记录一下做题过程,一方面可以让自己忘了的时候有可以复习的地方,再者也可以让读者查看作者的写题思路,供他人参考.</p>
<ul>
<li><a href="#1">03. 数组中重复的数字</a></li>
<li><a href="#2">04. 二维数组中的查找</a></li>
<li><a href="#3">05. 替换空格</a></li>
<li><a href="#4">4</a></li>
<li><a href="#5">5</a></li>
<li><a href="#6">6</a></li>
<li><a href="#7">7</a></li>
<li><a href="#8">8</a></li>
<li><a href="#9">9</a></li>
<li><a href="#10">10</a></li>
</ul>`,r:{minutes:42.64,words:12792},y:"a",t:"剑指offer 刷题笔记",i:"edit"},["/posts/program/leetcode/offer/offer","/posts/program/leetcode/offer/offer.md"]],["v-56bd5e7e","/posts/program/mysql/notes/mysql-notes.html",{d:16370208e5,l:"2021年11月16日",c:["tutorial"],g:["mysql"],o:!0,e:`<h1> MySQL 学习笔记</h1>
<ul>
<li><a href="#%E6%89%A7%E8%A1%8C%E4%B8%80%E6%9D%A1SQL%E6%9F%A5%E8%AF%A2%E8%AF%AD%E5%8F%A5%EF%BC%8C%E6%9C%9F%E9%97%B4%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88">执行一条 SQL 查询语句，期间发生了什么？</a></li>
<li><a href="#%E7%B4%A2%E5%BC%95">索引</a></li>
<li><a href="#%E5%86%85%E5%AD%98">内存</a></li>
<li><a href="#%E6%97%A5%E5%BF%97">日志</a></li>
<li><a href="#%E4%BA%8B%E5%8A%A1">事务</a></li>
<li><a href="#%E9%94%81">锁</a></li>
<li><a href="#BufferPool">说清楚Buffer Pool是啥</a></li>
</ul>`,r:{minutes:68.33,words:20498},y:"a",t:"MySQL 学习笔记",i:"edit"},["/posts/program/mysql/notes/mysql-notes","/posts/program/mysql/notes/mysql-notes.md"]],["v-46709ae2","/posts/program/redis/cache-consistency/cache-consistency.html",{d:16689888e5,l:"2022年11月21日",c:["tutorial"],g:["redis","consistency"],o:!0,e:`<h1> 缓存一致性目录</h1>
<ul>
<li><a href="#%E7%BC%93%E5%AD%98%E4%B8%80%E8%87%B4%E6%80%A7%E7%9B%AE%E5%BD%95">缓存一致性目录</a>
<ul>
<li><a href="#%E5%BC%95%E5%85%A5%E7%BC%93%E5%AD%98%E6%8F%90%E9%AB%98%E6%80%A7%E8%83%BD">引入缓存提高性能</a></li>
<li><a href="#%E7%BC%93%E5%AD%98%E5%88%A9%E7%94%A8%E7%8E%87%E4%B8%8E%E4%B8%80%E8%87%B4%E6%80%A7%E9%97%AE%E9%A2%98">缓存利用率与一致性问题</a></li>
<li><a href="#%E5%B9%B6%E5%8F%91%E5%BC%95%E5%85%A5%E7%9A%84%E4%B8%80%E8%87%B4%E6%80%A7%E9%97%AE%E9%A2%98">并发引入的一致性问题</a></li>
<li><a href="#%E5%88%A0%E9%99%A4%E7%BC%93%E5%AD%98%E5%8F%AF%E4%BB%A5%E4%BF%9D%E8%AF%81%E4%B8%80%E8%87%B4%E6%80%A7%E5%90%97">删除缓存可以保证一致性吗</a></li>
<li><a href="#%E5%A6%82%E4%BD%95%E4%BF%9D%E8%AF%81%E4%B8%A4%E6%AD%A5%E9%83%BD%E6%89%A7%E8%A1%8C%E6%88%90%E5%8A%9F">如何保证两步都执行成功?</a></li>
<li><a href="#%E4%B8%BB%E4%BB%8E%E5%BA%93%E5%BB%B6%E8%BF%9F%E5%92%8C%E5%BB%B6%E8%BF%9F%E5%8F%8C%E5%88%A0%E9%97%AE%E9%A2%98">主从库延迟和延迟双删问题</a></li>
<li><a href="#%E5%8F%AF%E4%BB%A5%E5%81%9A%E5%88%B0%E5%BC%BA%E4%B8%80%E8%87%B4%E5%90%97">可以做到强一致吗?</a></li>
<li><a href="#%E6%80%BB%E7%BB%93">总结</a></li>
</ul>
</li>
</ul>`,r:{minutes:16.31,words:4894},y:"a",t:"缓存一致性目录",i:"edit"},["/posts/program/redis/cache-consistency/cache-consistency","/posts/program/redis/cache-consistency/cache-consistency.md"]],["v-f29e4144","/posts/program/redis/datastruct/datastruct.html",{d:16689888e5,l:"2022年11月21日",c:["record"],g:["redis"],o:!0,e:`<h1> Redis 学习笔记</h1>
<h2> 数据结构与对象</h2>
<h3> SDS(简单动态字符串)</h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<blockquote>
<p>SDS(简单动态字符串), 是对C语言字符串封装了一层</p>
</blockquote>
</div>
<p>举个例子</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set msg "hello world"
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:127.59,words:38276},y:"a",t:"Redis 学习笔记",i:"edit"},["/posts/program/redis/datastruct/datastruct","/posts/program/redis/datastruct/datastruct.md"]],["v-fead0b28","/posts/program/redis/note/redis-note.html",{d:16376256e5,l:"2021年11月23日",c:["tutorial"],g:["redis"],o:!0,e:`<h1> Redis笔记</h1>
<!-- ## 数据结构与对象

### SDS(简单动态字符串)
> SDS(简单动态字符串), 是对C语言字符串封装了一层

举个例子
\`\`\`
set msg "hello world"
OK
\`\`\`
Redis会新增一个键值对, 其中: 键值对键是保存msg的SDS, 值也是一个字符串对象SDS
\`\`\`c
struct sdshdr {
//记录buf数组中已使用字节的数量  等于SDS所保存字符串的长度
int len;
//记录buf数组中未使用字节的数量
int free;
//字节数组，用于保存字符串
char buf[];
};
\`\`\`

其中SDS保留了C字符串中最后一个字符是'\\0'的惯例, 目的是SDS可以直接重用C字符串函数库里的函数.

好处: 
1. 因为SDS内部有个len属性, 所以如果想获取字符串长度就直接返回len, 时间复杂度是O(1), 但如果用原生strlen函数 时间复杂度就是O(n)了
2. SDS不会造成缓冲区溢出,因为 SDS 在拼接字符串之前会检查 SDS 空间是否满足要求，如果空间不够会自动扩容，所以不会导致缓冲区溢出的问题, 可以减少修改字符串带来的内存重分配次数,空间预分配:当append时当SDS长度小于1MB,则再多分配一倍的空间；若大于1MB, 则多分配1MB的空间；惰性空间释放, 当需要减少SDS的空间时, 不会立刻减少, 先更新free, 这样可以避免再次分配带来的性能损耗, 当然也有真正的释放内存空间的API.
3. SDS 不仅可以保存文本数据，还可以保存二进制数据。因为 SDS 使用 len 属性的值而不是空字符来判断字符串是否结束，并且 SDS 的所有 API 都会以处理二进制的方式来处理 SDS 存放在 buf[] 数组里的数据。所以 SDS 不光能存放文本数据，而且能保存图片、音频、视频、压缩文件这样的二进制数据。

### 链表

链表在Redis中的应用非常广泛，比如列表键的底层实现之一就是链表。当一个列表键包含了数量比较多的元素，又或者列表中包含的元素都是比较长的字符串时，Redis就会使用链表作为列表键的底层实现。

每个链表节点是
\`\`\`c
typedef struct listNode {
    struct listNode * prev;
    struct listNode * next;
    void * value;
}listNode;
\`\`\`
多个listNode可以通过prev和next指针组成双端链表。
\`\`\`c
typedef struct list {
listNode * head;
listNode * tail;
// 链表所包含的节点数量
unsigned long len;
// 节点值复制函数
void *(*dup)(void *ptr);
// 节点值释放函数
void (*free)(void *ptr);
// 节点值对比函数
int (*match)(void *ptr,void *key);
} list;
\`\`\`
链表的特性: 双端, 无环, ·带表头指针和表尾指针, 带链表长度计数器

多态：链表节点使用void*指针来保存节点值，并且可以通过list结构的dup、free、match三个属性为节点值设置类型特定函数，所以链表可以用于保存各种不同类型的值。

### 字典

Redis的字典用哈希表来实现, 一个哈希表里面有多个哈希表节点, 而每个哈希表节点就保存了字典中的多个键值对

哈希表实现
\`\`\`c
typedef struct dictht {
//哈希表数组
dictEntry **table;
//哈希表大小
unsigned long size;
//哈希表大小掩码，用于计算索引值
//总是等于size-1
unsigned long sizemask;
//该哈希表已有节点的数量
unsigned long used;
} dictht;
\`\`\`
table属性是一个数组,数组每个元素指向的是dictEntry结构的指针, 每个dictEntry结构都保存着一个键值对.
size属性保存哈希表的大小, 就是table数目的大小
used保存总共的键值对个数
sizemask属性的值总是等于size-1，这个属性和哈希值一起决定一个键应该被放到table数组的哪个索引上面。

哈希节点

\`\`\`c
typedef struct dictEntry {
//键
void *key;
//值
union{
    void *val;
    uint64_tu64;
    int64_ts64;
} v;
//指向下个哈希表节点，形成链表
struct dictEntry *next;
} dictEntry;
\`\`\`

next是一个指针,这个指针可以将哈希值相同的键值对连接在一起, 来解决哈系碰撞问题.

字典实现

\`\`\`c
typedef struct dict {
//类型特定函数
dictType *type;
//私有数据
void *privdata;
//哈希表
dictht ht[2];
// rehash索引
//当rehash 不在进行时，值为-1
int rehashidx; /* rehashing not in progress if rehashidx == -1 */
} dict;
\`\`\`

type属性和privdata属性是针对不同类型的键值对，为创建多态字典而设置的：
type属性是一个指向dictType结构的指针，每个dictType结构保存了一簇用于操作特定类型键值对的函数，Redis会为用途不同的字典设置不同的类型特定函数

而privdata属性则保存了需要传给那些类型特定函数的可选参数

\`\`\`c
typedef struct dictType {
//计算哈希值的函数
unsigned int (*hashFunction)(const void *key);
//复制键的函数
void *(*keyDup)(void *privdata, const void *key);
//复制值的函数
void *(*valDup)(void *privdata, const void *obj);
//对比键的函数
int (*keyCompare)(void *privdata, const void *key1, const void *key2);
//销毁键的函数
void (*keyDestructor)(void *privdata, void *key);
//销毁值的函数
void (*valDestructor)(void *privdata, void *obj);
} dictType;
\`\`\`

ht 属 性 是 一 个 包 含 两 个 项 的 数 组 ， 数 组 中 的 每 个 项 都 是 一 个dictht哈希表，一般情况下，字典只使用ht[0]哈希表，ht[1]哈希表只会在对ht[0]哈希表进行rehash时使用。

除了ht[1]之外，另一个和rehash有关的属性就是rehashidx，它记录了rehash目前的进度，如果目前没有在进行rehash，那么它的值为-1。


rehash

当哈希表的负载因子不断变大, 就需要rehash
1）为字典的ht[1]哈希表分配空间，这个哈希表的空间大小取决于 要 执 行 的 操 作 ， 以 及 ht[0] 当 前 包 含 的 键 值 对 数 量 （ 也 即 是ht[0].used属性的值）：
- 如果执行的是扩展操作，那么ht[1]的大小为第一个大于等于ht[0].used*2的2^n（2的n次方幂）；
- 如果执行的是收缩操作，那么ht[1]的大小为第一个大于等于ht[0].used的2^n。
2）将保存在ht[0]中的所有键值对rehash到ht[1]上面：rehash指的是重新计算键的哈希值和索引值，然后将键值对放置到ht[1]哈希表的指定位置上。

哈希表的扩展与收缩

当以下条件中的任意一个被满足时，程序会自动开始对哈希表执行扩展操作：

1）服务器目前没有在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于1。
2）服务器目前正在执行BGSAVE命令或者BGREWRITEAOF命令，并且哈希表的负载因子大于等于5。

负载因子=哈希表已保存节点数量/哈希表大小
load_factor = ht[0].used / ht[0].size

当哈希表的负载因子小于0.1时，程序自动开始对哈希表执行收缩操作。

渐进式rehash
当哈希表里的数据很多时, 一下子瞬间rehash可能导致性能问题, 所以redis采用渐进式rehash
\`\`\`sh
1）为ht[1]分配空间，让字典同时持有ht[0]和ht[1]两个哈希表。
2）在字典中维持一个索引计数器变量rehashidx，并将它的值设置为0，表示rehash工作正式开始。
3）在rehash进行期间，每次对字典执行添加、删除、查找或者更新操作时，程序除了执行指定的操作以外，还会顺带将ht[0]哈希表在rehashidx索引上的所有键值对rehash到ht[1]，当rehash工作完成之后，程序将rehashidx属性的值增一。
4）随着字典操作的不断执行，最终在某个时间点上，ht[0]的所有键值对都会被rehash至ht[1]，这时程序将rehashidx属性的值设为-1，表示rehash操作已完成。

因为在进行渐进式rehash的过程中，字典会同时使用ht[0]和ht[1] 两 个 哈 希 表 ， 所 以 在 渐 进 式 rehash 进 行 期 间 ， 字 典 的 删 除（delete）、查找（find）、更新（update）等操作会在两个哈希表上进行。例如，要在字典里面查找一个键的话，程序会先在ht[0]里面进行查找，如果没找到的话，就会继续到ht[1]里面进行查找，诸如此类。

另外，在渐进式rehash执行期间，新添加到字典的键值对一律会被保存到ht[1]里面，而ht[0]则不再进行任何添加操作，这一措施保证了ht[0]包含的键值对数量会只减不增，并随着rehash操作的执行而最终变成空表
\`\`\`

### 跳表

跳表是一个数据结构, 通过在每个节点内维持多个指向其他节点的指针, 从而达到快速访问节点的目的, 跳跃表支持平均O（logN）、最坏O（N）复杂度的节点查找，还可以通过顺序性操作来批量处理节点。

Redis只在两个地方用到了跳跃表，一个是实现有序集合键，另一个是在集群节点中用作内部数据结构.
跳表节点的属性
\`\`\`c
typedef struct zskiplistNode {
//Zset 对象的元素值
sds ele;
//元素权重值
double score;
//后向指针
struct zskiplistNode *backward;
//节点的level数组，保存每层上的前向指针和跨度
struct zskiplistLevel {
    struct zskiplistNode *forward;
    unsigned long span;
} level[];
} zskiplistNode;
\`\`\`
level层, 指向多个元素, 每个元素都可以访问其他节点, 程序可以通过层快速定位元素每次创建一个新跳跃表节点的时候，程序都根据幂次定律随机生成一个介于1和32之间的值作为level数组的大小，这个大小就是层的“高度”。

前进指针, 每个层之间都有一个指向表尾方向的前进指针, 用于从表头向表尾方向遍历节点, 层的跨度span属性记录了两个节点之间的距离

跳表属性
\`\`\`c
typedef struct zskiplist {
struct zskiplistNode *header, *tail;
unsigned long length;
int level;
} zskiplist;
\`\`\`

### 整数集合

整数集合是集合键的实现之一, 当一个集合只包含整数值元素，并且这个集合的元素数量不多时，Redis就会使用整数集合作为集合键的底层实现。

\`\`\`c
typedef struct intset {
//编码方式
uint32_t encoding;
//集合包含的元素数量
uint32_t length;
//保存元素的数组
int8_t contents[];
} intset;
\`\`\`
整数集合（intset）是Redis用于保存整数值的集合抽象数据结构，它可以保存类型为int16_t、int32_t或者int64_t的整数值，并且保证集合中不会出现重复元素。

contents数组是整数集合的底层实现, 虽然intset结构将contents属性声明为int8_t类型的数组，但实际上contents数组并不保存任何int8_t类型的值，contents数组的真正类型取决于encoding属性的值：

encoding的属性有INTSET_ENC_INT16, INTSET_ENC_INT32, INTSET_ENC_INT64, 分别将contents的属性设置为int16_t, int32_t, int64_t

升级

每当我们要将一个新元素添加到整数集合里面，并且新元素的类型比整数集合现有所有元素的类型都要长时，整数集合需要先进行升级（upgrade），然后才能将新元素添加到整数集合里面。

因为引发升级的新元素的长度总是比整数集合现有所有元素的长度都大，所以这个新元素的值要么就大于所有现有元素，要么就小于所有现有元素：
- 在新元素小于所有现有元素的情况下，新元素会被放置在底层数组的最开头（索引0）；
- 在新元素大于所有现有元素的情况下，新元素会被放置在底层数组的最末尾（索引length-1）。

升级的好处:提升灵活性, 节省内存

不支持降级

### 压缩列表

ziplist是list和hash的底层实现之一, 当一个列表键只包含少量列表项，并且每个列表项要么就是小整数值，要么就是长度比较短的字符串，那么Redis就会使用压缩列表来做列表键的底层实现。

压缩列表是Redis为了节约内存而开发的，是由一系列特殊编码的连续内存块组成的顺序型（sequential）数据结构。一个压缩列表可以包含任意多个节点（entry），每个节点可以保存一个字节数组或者一个整数值。

压缩列表的组成
\`\`\`
压缩列表在表头有三个字段：
zlbytes，记录整个压缩列表占⽤对内存字节数；
zltail，记录压缩列表「尾部」节点距离起始地址由多少字节，也就是列表尾的偏移量；
zllen，记录压缩列表包含的节点数量；
zlend，标记压缩列表的结束点，固定值 0xFF（⼗进制255）。
\`\`\`

在压缩列表中，如果我们要查找定位第⼀个元素和最后⼀个元素，可以通过表头三个字段的⻓度直接定位，复杂度是 O(1)。⽽查找其他元素时，就没有这么⾼效了，只能逐个查找，此时的复杂度就是 O(N)了，因此压缩列表不适合保存过多的元素

压缩列表节点包含三部分内容：prevlen，记录了「前⼀个节点」的⻓度；encoding，记录了当前节点实际数据的类型以及⻓度；data，记录了当前节点的实际数据；

连锁更新

压缩列表新增某个元素或修改某个元素时，如果空间不不够，压缩列表占⽤的内存空间就需要重新分配。⽽当新插⼊的元素较⼤时，可能会导致后续元素的 prevlen 占⽤空间都发⽣变化，从⽽引起「连锁更新」问题，导致每个元素的空间都要重新分配，造成访问压缩列表性能的下降。

### 对象

Redis针对前面所说的类型建立了一个对象系统, 这个系列包括字符串对象、列表对象、哈希对象、集合对象和有序集合对象这五种类型的对象，每种对象都用到了至少一种我们前面所介绍的数据结构。

Redis的总对象类型是
\`\`\`c
typedef struct redisObject {
//类型
unsigned type:4;
//编码
unsigned encoding:4;
//指向底层实现数据结构的指针
void *ptr;
// ...
} robj;
\`\`\`

type类型记录了对象的类型, 这个熟悉可以是REDIS_STRING, REDIS_LIST...

encoding属性记录了对象底层所使用的编码, 比如list的底层对象是list或者quicklist, hash的底层对象是ziplist或hash...


## 5种常见的数据类型

### String内部实现

String的内部实现是
SDS(简单动态字符串), 是对C语言字符串封装了一层

举个例子
\`\`\`
set msg "hello world"
OK
\`\`\`

字符串对象的编码可以是int、raw或者embstr。

Redis会新增一个键值对, 其中: 键值对键是保存msg的SDS, 值也是一个字符串对象SDS
\`\`\`
struct sdshdr {
//记录buf数组中已使用字节的数量  等于SDS所保存字符串的长度
int len;
//记录buf数组中未使用字节的数量
int free;
//字节数组，用于保存字符串
char buf[];
};
\`\`\`

其中SDS保留了C字符串中最后一个字符是'\\0'的惯例, 目的是SDS可以直接重用C字符串函数库里的函数.

好处: 
1. 因为SDS内部有个len属性, 所以如果想获取字符串长度就直接返回len, 时间复杂度是O(1), 但如果用原生strlen函数 时间复杂度就是O(n)了
2. SDS不会造成缓冲区溢出,因为 SDS 在拼接字符串之前会检查 SDS 空间是否满足要求，如果空间不够会自动扩容，所以不会导致缓冲区溢出的问题, 可以减少修改字符串带来的内存重分配次数,空间预分配:当append时当SDS长度小于1MB,则再多分配一倍的空间；若大于1MB, 则多分配1MB的空间；惰性空间释放, 当需要减少SDS的空间时, 不会立刻减少, 先更新free, 这样可以避免再次分配带来的性能损耗, 当然也有真正的释放内存空间的API.
3. SDS 不仅可以保存文本数据，还可以保存二进制数据。因为 SDS 使用 len 属性的值而不是空字符来判断字符串是否结束，并且 SDS 的所有 API 都会以处理二进制的方式来处理 SDS 存放在 buf[] 数组里的数据。所以 SDS 不光能存放文本数据，而且能保存图片、音频、视频、压缩文件这样的二进制数据。

#### 命令
| 命令 | 描述 |
| - | - |
| SET KEY VALUE |	设置指定 KEY 的值 |
| GET KEY |	获取指定 KEY 的值 |
| GETRANGE KEY start end  | 返回 KEY 中字符串值的子字符|
| GETSET KEY value |	将给定 KEY 的值设为 value ，并返回 KEY 的旧值|
| GETBIT KEY offset |	对 KEY 所储存的字符串值，获取指定偏移量上的位|
| MGET KEY1 [KEY2…] |	获取所有(一个或多个)给定 KEY 的值|
| SETBIT KEY offset value |	对 KEY 所储存的字符串值，设置或清除指定偏移量上的位|
| SETEX KEY seconds value |	将值 value 关联到 KEY ，并将 KEY 的过期时间设为 seconds (以秒为单位)|
| SETNX KEY value |	只有在 KEY 不存在时设置 KEY 的值|
| SETRANGE KEY offset value |	用 value 参数覆写给定 KEY 所储存的字符串值，从偏移量 offset 开始|
| STRLEN KEY |	返回 KEY 所储存的字符串值的长度|
| MSET KEY value KEY value … 	|同时设置一个或多个 KEY-value 对|
| MSETNX KEY value KEY value …  |	同时设置一个或多个 KEY-value 对，当且仅当所有给定 KEY 都不存在|
| PSETEX KEY milliseconds value |	这个命令和 SETEX 命令相似，但它以毫秒为单位设置 KEY 的生存时间|
| INCR KEY |	将 KEY 中储存的数字值增一 |
| INCRBY KEY increment |	将 KEY 所储存的值加上给定的增量值 increment|
| INCRBYFLOAT KEY increment |	将 KEY 所储存的值加上给定的浮点增量值 increment|
| DECR KEY |	将 KEY 中储存的数字值减一|
| DECRBY KEY decrement |	KEY 所储存的值减去给定的减量值 decrement|
| APPEND KEY value |	如果 KEY 已经存在并且是一个字符串， APPEND 命令将指定的 value 追加到该 KEY 原来值的末尾|
| BITCOUNT KEY START END 	|计算给定字符串中，被设置为 1 的比特位的数量|
| BITOP OPERATION DESTKEY KEY KEY … 	|对二进制位进行操作|

###  List 类型内部实现

List的内部实现是双向链表或者压缩列表

- 如果列表的元素个数小于 512 个（默认值，可由 list-max-ziplist-entries 配置），列表每个元素的值都小于 64 字节（默认值，可由 list-max-ziplist-value 配置），Redis 会使用压缩列表作为 List 类型的底层数据结构；
- 如果列表的元素不满足上面的条件，Redis 会使用双向链表作为 List 类型的底层数据结构；

但是在 Redis 3.2 版本之后，List 数据类型底层数据结构就只由 quicklist 实现了，替代了双向链表和压缩列表。
#### 命令

| 命令 | 描述 | 
| - | - |
| LPUSH KEY value1 value2 | 将一个或多个值插入到列表头部。 |
| LPUSHX KEY value | 将一个值插入到已存在的列表头部。 |
| RPUSH KEY value1 value2 |	将一个或多个值插入到列表尾部。 |
| RPUSHX KEY value | 将一个值插入到已存在的列表尾部。 |
| LSET KEY index value 	| 将列表索引 index 位置的值设置为 value。 |
| LINSERT KEY BEFORE AFTER pivot value | 将值 value 插入到列表 KEY 当中，位于值 pivot 之前或之后。 |
| LPOP KEY |	获取并移除列表的第一个元素。|
| RPOP KEY 	| 获取并移除列表的最后一个元素。|
| BLPOP KEY1 KEY2 timeout |	获取并移除列表的第一个元素， 如果列表没有元素会阻塞列表直到超时或有元素可弹出为止。|
| BRPOP KEY1 KEY2 timeout |	获取并移除列表的最后一个元素， 如果列表没有元素会阻塞列表直到超时或有元素可弹出为止。|
| RPOPLPUSH source destination |	移除 source 列表的最后一个元素，并将该元素添加到另一个列表 destination 的开头并返回。|
| BRPOPLPUSH source destination timeout | 1. BRPOPLPUSH 是 RPOPLPUSH 的阻塞版本。2. 当 source 有数据时，BRPOPLPUSH 的表现与 RPOPLPUSH 完全一样。3. 当 source 是空时，会阻塞列表直到超时或有元素可弹出为止。|
| LLEN KEY |	获取列表长度。|
| LINDEX KEY index |	通过索引获取列表中的元素。|
| LREM KEY count value |	从列表中移除 count 个值与 value 相等的元素。|
| LTRIM KEY start stop |	对一个列表进行修剪(trim)，只保留列表中的 start 和 stop 之间的元素。|
| LRANGE KEY start stop |	获取列表 start 和 stop 之间 的元素。|

### Hash 类型内部实现

Hash 类型的底层数据结构是由压缩列表或哈希表实现的：

- 如果哈希类型元素个数小于 512 个（默认值，可由 hash-max-ziplist-entries 配置），所有值小于 64 字节（默认值，可由 hash-max-ziplist-value 配置）的话，Redis 会使用压缩列表作为 Hash 类型的底层数据结构；
- 如果哈希类型元素不满足上面条件，Redis 会使用哈希表作为 Hash 类型的底层数据结构

在 Redis 7.0 中，压缩列表数据结构已经废弃了，交由 listpack 数据结构来实现了。

#### 命令

| 命令 |	描述 |
| - | - |
| HSET KEY field value |	将哈希表 KEY 中的字段 field 的值设为 value 。|
| HSETNX KEY field value | 只有在字段 field 不存在时，设置哈希表字段的值。 |
| HMSET KEY field1 value1 field2 value2 |	同时将多个 field-value (域-值)对设置到哈希表 KEY 中。|
| HGET KEY field |	获取存储在哈希表中指定字段的值。|
| HGETALL KEY |	获取在哈希表中指定 KEY 的所有字段和值。|
| HMGET KEY field1 field2 |	获取所有给定字段的值。|
| HKEYS KEY |	获取所有哈希表中的字段。|
| HVALS KEY |	获取哈希表中所有值。|
| HLEN KEY |	获取哈希表中字段的数量。|
| HINCRBY KEY field increment  | 为哈希表 KEY 中的指定字段的整数值加上增量 increment 。|
| HINCRBYFLOAT KEY field increment  |	为哈希表 KEY 中的指定字段的浮点数值加上增量 increment 。|
| HDEL KEY field1 field2  | 删除一个或多个哈希表字段。|
| HEXISTS KEY field | 查看哈希表 KEY 中，指定的字段是否存在。|
| HSCAN KEY cursor [MATCH pattern] [COUNT count] | 迭代哈希表中的键值对，类似 SCAN 命令。|

> Set 类型内部实现

Set 类型的底层数据结构是由哈希表或整数集合实现的：

- 如果集合中的元素都是整数且元素个数小于 512 （默认值，set-maxintset-entries配置）个，Redis 会使用整数集合作为 Set 类型的底层数据结构；
- 如果集合中的元素不满足上面条件，则 Redis 使用哈希表作为 Set 类型的底层数据结构。

当以哈希表存储时, 值为空, key就是所有的set的值

#### 命令

| 命令 | 描述 |
| - | - |
| SADD key member1 member2 | 向集合添加一个或多个成员。 |
| SCARD | key | 	获取集合的成员数。 |
| SDIFF key1 key2 |	返回给定所有集合的差集。|
| SDIFFSTORE destination key1 key2 |	返回给定所有集合的差集并存储在 destination 中。|
| SINTER key1 key2 |	返回给定所有集合的交集。|
| SINTERSTORE destination key1 key2 | 返回给定所有集合的交集并存储在 destination 中。|
| SISMEMBER key member |	判断 member 元素是否是集合 key 的成员。|
| SMEMBERS key |	返回集合中的所有成员。|
| SMOVE source destination member |	将 member 元素从 source 集合移动到 destination 集合。|
| SPOP key |	移除并返回集合中的一个随机元素。|
| SRANDMEMBER key count 	| 返回集合中一个或多个随机数。|
| SREM key member1 member2| 	移除集合中一个或多个成员。|
| SUNION key1 key2 | 	返回所有给定集合的并集。|
| SUNIONSTORE destination key1 key2 | 所有给定集合的并集存储在 destination 集合中。|
| SSCAN key cursor MATCH pattern COUNT count |	迭代集合中的元素。|


> ZSet 类型内部实现

Zset 类型的底层数据结构是由压缩列表或跳表实现的：

- 如果有序集合的元素个数小于 128 个，并且每个元素的值小于 64 字节时，Redis 会使用压缩列表作为 Zset 类型的底层数据结构；
- 如果有序集合的元素不满足上面的条件，Redis 会使用跳表作为 Zset 类型的底层数据结构；

在 Redis 7.0 中，压缩列表数据结构已经废弃了，交由 listpack 数据结构来实现了。

|命令 |-	描述|
| - | - |
|  ZADD KEY score1 member1 [score2 member2] |	向有序集合添加一个或多个成员，或者更新已存在成员的分数。|
|  ZCARD KEY |	获取有序集合的成员数。|
|  ZCOUNT KEY min max |	计算在有序集合中指定区间分数的成员数。|
|  ZINCRBY KEY increment member |	有序集合中对指定成员的分数加上增量 increment 。|
|  ZINTERSTORE destination num KEY [KEY …] |	计算给定的一个或多个有序集的交集并将结果集存储在新的有序集合 KEY 中。|
|  ZLEXCOUNT KEY min max |	在有序集合中计算指定字典区间内成员数量。|
|  ZRANGE KEY start stop [WITHSCORES] |	通过索引区间返回有序集合成指定区间内的成员。|
|  ZRANGEBYLEX KEY min max [LIMIT offset count] |	通过字典区间返回有序集合的成员。|
|  ZRANGEBYSCORE KEY min max [WITHSCORES] [LIMIT] |	通过分数返回有序集合指定区间内的成员。|
|  ZRANK KEY member |	返回有序集合中指定成员的索引。|
|  ZREM KEY member [member …] |	移除有序集合中的一个或多个成员。|
|  ZREMRANGEBYLEX KEY min max |	移除有序集合中给定的字典区间的所有成员。|
|  ZREMRANGEBYRANK KEY start stop |	移除有序集合中给定的排名区间的所有成员。|
|  ZREMRANGEBYSCORE KEY min max |	移除有序集合中给定的分数区间的所有成员。|
|  ZREVRANGE KEY start stop [WITHSCORES] |	返回有序集中指定区间内的成员，通过索引，分数从高到底。|
|  ZREVRANGEBYSCORE KEY max min [WITHSCORES] |	返回有序集中指定分数区间内的成员，分数从高到低排序。|
|  ZREVRANK KEY member |	返回有序集合中指定成员的排名，有序集成员按分数值递减(从大到小)排序。|
|  ZSCORE KEY member |	返回有序集中，成员的分数值。|
|  ZUNIONSTORE destination numKEYs KEY [KEY …] |	计算给定的一个或多个有序集的并集，并存储在新的 KEY 中。|
|  ZSCAN KEY cursor [MATCH pattern] [COUNT count]  |	迭代有序集合中的元素（包括元素成员和元素分值）。|

## Redis线程模型

Redis单线程指的是在接受客户端请求,解析请求,进行数据读写,发送给客户端这个过程是一个线程完成的

但是，Redis 程序并不是单线程的，Redis 在启动的时候，是会启动后台线程（BIO）的

- Redis 在 2.6 版本，会启动 2 个后台线程，分别处理关闭文件、AOF 刷盘这两个任务；
- Redis 在 4.0 版本之后，新增了一个新的后台线程，用来异步释放 Redis 内存，也就是 lazyfree 线程。例如执行 unlink key / flushdb async / flushall async 等命令，会把这些删除操作交给后台线程来执行，好处是不会导致 Redis 主线程卡顿。因此，当我们要删除一个大 key 的时候，不要使用 del 命令删除，因为 del 是在主线程处理的，这样会导致 Redis 主线程卡顿，因此我们应该使用 unlink 命令来异步删除大key。

之所以 Redis 为「关闭文件、AOF 刷盘、释放内存」这些任务创建单独的线程来处理，是因为这些任务的操作都是很耗时的，如果把这些任务都放在主线程来处理，那么 Redis 主线程就很容易发生阻塞，这样就无法处理后续的请求了。

后台线程相当于一个消费者，生产者把耗时任务丢到任务队列中，消费者（BIO）不停轮询这个队列，拿出任务就去执行对应的方法即可。

## Redis 采用单线程为什么还这么快？

- Redis 的大部分操作都在内存中完成，并且采用了高效的数据结构，因此 Redis 瓶颈可能是机器的内存或者网络带宽，而并非 CPU，既然 CPU 不是瓶颈，那么自然就采用单线程的解决方案了；
- Redis 采用单线程模型可以避免了多线程之间的竞争，省去了多线程切换带来的时间和性能上的开销，而且也不会导致死锁问题。
- Redis 采用了 I/O 多路复用机制处理大量的客户端 Socket 请求，IO 多路复用机制是指一个线程处理多个 IO 流，就是我们经常听到的 select/epoll 机制。简单来说，在 Redis 只运行单线程的情况下，该机制允许内核中，同时存在多个监听 Socket 和已连接 Socket。内核会一直监听这些 Socket 上的连接请求或数据请求。一旦有请求到达，就会交给 Redis 线程处理，这就实现了一个 Redis 线程处理多个 IO 流的效果。

CPU 并不是制约 Redis 性能表现的瓶颈所在，更多情况下是受到内存大小和网络I/O的限制，所以 Redis 核心网络模型使用单线程并没有什么问题，如果你想要使用服务的多核CPU，可以在一台服务器上启动多个节点或者采用分片集群的方式。

除了上面的官方回答，选择单线程的原因也有下面的考虑。

使用了单线程后，可维护性高，多线程模型虽然在某些方面表现优异，但是它却引入了程序执行顺序的不确定性，带来了并发读写的一系列问题，增加了系统复杂度、同时可能存在线程切换、甚至加锁解锁、死锁造成的性能损耗。

在 Redis 6.0 版本之后，也采用了多个 I/O 线程来处理网络请求，这是因为随着网络硬件的性能提升，Redis 的性能瓶颈有时会出现在网络 I/O 的处理上。

所以为了提高网络 I/O 的并行度，Redis 6.0 对于网络 I/O 采用多线程来处理。但是对于命令的执行，Redis 仍然使用单线程来处理，所以大家不要误解 Redis 有多线程同时执行命令。

## Redis持久化

Redis 如何实现数据不丢失？

- AOF 日志：每执行一条写操作命令，就把该命令以追加的方式写入到一个文件里；
- RDB 快照：将某一时刻的内存数据，以二进制的方式写入磁盘；
- 混合持久化方式：Redis 4.0 新增的方式，集成了 AOF 和 RBD 的优点；

AOF 日志是如何实现的？

Redis 在执行完一条写操作命令后，就会把该命令以追加的方式写入到一个文件里，然后 Redis 重启时，会读取该文件记录的命令，然后逐一执行命令的方式来进行数据恢复。

> 为什么先执行命令，再把数据写入日志呢？

- 避免额外的检查开销：因为如果先将写操作命令记录到 AOF 日志里，再执行该命令的话，如果当前的命令语法有问题，那么如果不进行命令语法检查，该错误的命令记录到 AOF 日志里后，Redis 在使用日志恢复数据时，就可能会出错。
- 不会阻塞当前写操作命令的执行：因为当写操作命令执行成功后，才会将命令记录到 AOF 日志。

当然，这样做也会带来风险：

- 数据可能会丢失： 执行写操作命令和记录日志是两个过程，那当 Redis 在还没来得及将命令写入到硬盘时，服务器发生宕机了，这个数据就会有丢失的风险。
- 可能阻塞其他操作： 由于写操作命令执行成功后才记录到 AOF 日志，所以不会阻塞当前命令的执行，但因为 AOF 日志也是在主线程中执行，所以当 Redis 把日志文件写入磁盘的时候，还是会阻塞后续的操作无法执行。

> AOF 写回策略有几种？
- Always，这个单词的意思是「总是」，所以它的意思是每次写操作命令执行完后，同步将 AOF 日志数据写回硬盘；
- Everysec，这个单词的意思是「每秒」，所以它的意思是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，然后每隔一秒将缓冲区里的内容写回到硬盘；
- No，意味着不由 Redis 控制写回硬盘的时机，转交给操作系统控制写回的时机，也就是每次写操作命令执行完后，先将命令写入到 AOF 文件的内核缓冲区，再由操作系统决定何时将缓冲区内容写回硬盘。

> AOF 日志过大，会触发什么机制？

Redis 为了避免 AOF 文件越写越大，提供了 AOF 重写机制，当 AOF 文件的大小超过所设定的阈值后，Redis 就会启用 AOF 重写机制，来压缩 AOF 文件。

> RDB 快照是如何实现的呢？

因为 AOF 日志记录的是操作命令，不是实际的数据，所以用 AOF 方法做故障恢复时，需要全量把日志都执行一遍，一旦 AOF 日志非常多，势必会造成 Redis 的恢复操作缓慢。

为了解决这个问题，Redis 增加了 RDB 快照。所谓的快照，就是记录某一个瞬间东西，比如当我们给风景拍照时，那一个瞬间的画面和信息就记录到了一张照片。

所以，RDB 快照就是记录某一个瞬间的内存数据，记录的是实际数据，而 AOF 文件记录的是命令操作的日志，而不是实际的数据。

因此在 Redis 恢复数据时， RDB 恢复数据的效率会比 AOF 高些，因为直接将 RDB 文件读入内存就可以，不需要像 AOF 那样还需要额外执行操作命令的步骤才能恢复数据。

> RDB 做快照时会阻塞线程吗？

Redis 提供了两个命令来生成 RDB 文件，分别是 save 和 bgsave，他们的区别就在于是否在「主线程」里执行：

- 执行了 save 命令，就会在主线程生成 RDB 文件，由于和执行操作命令在同一个线程，所以如果写入 RDB 文件的时间太长，会阻塞主线程；
- 执行了 bgsave 命令，会创建一个子进程来生成 RDB 文件，这样可以避免主线程的阻塞；

Redis 还可以通过配置文件的选项来实现每隔一段时间自动执行一次 bgsave 命令，默认会提供以下配置：

这里提一点，Redis 的快照是全量快照，也就是说每次执行快照，都是把内存中的「所有数据」都记录到磁盘中。所以执行快照是一个比较重的操作，如果频率太频繁，可能会对 Redis 性能产生影响。如果频率太低，服务器故障时，丢失的数据会更多。

>  为什么会有混合持久化

混合持久化优点：

    混合持久化结合了 RDB 和 AOF 持久化的优点，开头为 RDB 的格式，使得 Redis 可以更快的启动，同时结合 AOF 的优点，有减低了大量数据丢失的风险。

混合持久化缺点：

    AOF 文件中添加了 RDB 格式的内容，使得 AOF 文件的可读性变得很差；
    兼容性差，如果开启混合持久化，那么此混合持久化 AOF 文件，就不能用在 Redis 4.0 之前版本了。

> Redis 如何实现服务高可用？

要想设计一个高可用的 Redis 服务，一定要从 Redis 的多服务节点来考虑，比如 Redis 的主从复制、哨兵模式、切片集群。

> 主从复制
主从复制是 Redis 高可用服务的最基础的保证，实现方案就是将从前的一台 Redis 服务器，同步数据到多台从 Redis 服务器上，即一主多从的模式，且主从服务器之间采用的是「读写分离」的方式。

主服务器可以进行读写操作，当发生写操作时自动将写操作同步给从服务器，而从服务器一般是只读，并接受主服务器同步过来写操作命令，然后执行这条命令。

也就是说，所有的数据修改只在主服务器上进行，然后将最新的数据同步给从服务器，这样就使得主从服务器的数据是一致的。

注意，主从服务器之间的命令复制是异步进行的。

具体来说，在主从服务器命令传播阶段，主服务器收到新的写命令后，会发送给从服务器。但是，主服务器并不会等到从服务器实际执行完命令后，再把结果返回给客户端，而是主服务器自己在本地执行完命令后，就会向客户端返回结果了。如果从服务器还没有执行主服务器同步过来的命令，主从服务器间的数据就不一致了。

所以，无法实现强一致性保证（主从数据时时刻刻保持一致），数据不一致是难以避免的。

> 哨兵模式

在使用 Redis 主从服务的时候，会有一个问题，就是当 Redis 的主从服务器出现故障宕机时，需要手动进行恢复。

为了解决这个问题，Redis 增加了哨兵模式（Redis Sentinel），因为哨兵模式做到了可以监控主从服务器，并且提供主从节点故障转移的功能。

> 切片集群模式

当 Redis 缓存数据量大到一台服务器无法缓存时，就需要使用 Redis 切片集群（Redis Cluster ）方案，它将数据分布在不同的服务器上，以此来降低系统对单主节点的依赖，从而提高 Redis 服务的读写性能。

Redis Cluster 方案采用哈希槽（Hash Slot），来处理数据和节点之间的映射关系。在 Redis Cluster 方案中，一个切片集群共有 16384 个哈希槽，这些哈希槽类似于数据分区，每个键值对都会根据它的 key，被映射到一个哈希槽中，具体执行过程分为两大步：

    根据键值对的 key，按照 CRC16 算法

   计算一个 16 bit 的值。
    再用 16bit 值对 16384 取模，得到 0~16383 范围内的模数，每个模数代表一个相应编号的哈希槽。

接下来的问题就是，这些哈希槽怎么被映射到具体的 Redis 节点上的呢？有两种方案：

    平均分配： 在使用 cluster create 命令创建 Redis 集群时，Redis 会自动把所有哈希槽平均分布到集群节点上。比如集群中有 9 个节点，则每个节点上槽的个数为 16384/9 个。
    手动分配： 可以使用 cluster meet 命令手动建立节点间的连接，组成集群，再使用 cluster addslots 命令，指定每个节点上的哈希槽个数。

为了方便你的理解，我通过一张图来解释数据、哈希槽，以及节点三者的映射分布关系。

集群脑裂导致数据丢失怎么办？
  什么是脑裂？
  总结一句话就是：由于网络问题，集群节点之间失去联系。主从数据不同步；重新平衡选举，产生两个主服务。等网络恢复，旧主节点会降级为从节点，再与新主节点进行同步复制的时候，由于会从节点会清空自己的缓冲区，所以导致之前客户端写入的数据丢失了。

> 解决方案

## Redis 过期删除与内存淘汰

Redis 是可以对 key 设置过期时间的，因此需要有相应的机制将已过期的键值对删除，而做这个工作的就是过期键值删除策略。

每当我们对一个 key 设置了过期时间时，Redis 会把该 key 带上过期时间存储到一个过期字典（expires dict）中，也就是说「过期字典」保存了数据库中所有 key 的过期时间。

当我们查询一个 key 时，Redis 首先检查该 key 是否存在于过期字典中：

    如果不在，则正常读取键值；
    如果存在，则会获取该 key 的过期时间，然后与当前系统时间进行比对，如果比系统时间大，那就没有过期，否则判定该 key 已过期。

Redis 使用的过期删除策略是「惰性删除+定期删除」这两种策略配和使用。

> 什么是惰性删除策略？

惰性删除策略的做法是，不主动删除过期键，每次从数据库访问 key 时，都检测 key 是否过期，如果过期则删除该 key。

惰性删除策略的优点：

    因为每次访问时，才会检查 key 是否过期，所以此策略只会使用很少的系统资源，因此，惰性删除策略对 CPU 时间最友好。

惰性删除策略的缺点：

    如果一个 key 已经过期，而这个 key 又仍然保留在数据库中，那么只要这个过期 key 一直没有被访问，它所占用的内存就不会释放，造成了一定的内存空间浪费。所以，惰性删除策略对内存不友好。

> Redis 持久化时，对过期键会如何处理的？

Redis 持久化文件有两种格式：RDB（Redis Database）和 AOF（Append Only File），下面我们分别来看过期键在这两种格式中的呈现状态。

RDB 文件分为两个阶段，RDB 文件生成阶段和加载阶段。

    RDB 文件生成阶段：从内存状态持久化成 RDB（文件）的时候，会对 key 进行过期检查，过期的键「不会」被保存到新的 RDB 文件中，因此 Redis 中的过期键不会对生成新 RDB 文件产生任何影响。
    RDB 加载阶段：RDB 加载阶段时，要看服务器是主服务器还是从服务器，分别对应以下两种情况：
        如果 Redis 是「主服务器」运行模式的话，在载入 RDB 文件时，程序会对文件中保存的键进行检查，过期键「不会」被载入到数据库中。所以过期键不会对载入 RDB 文件的主服务器造成影响；
        如果 Redis 是「从服务器」运行模式的话，在载入 RDB 文件时，不论键是否过期都会被载入到数据库中。但由于主从服务器在进行数据同步时，从服务器的数据会被清空。所以一般来说，过期键对载入 RDB 文件的从服务器也不会造成影响。

AOF 文件分为两个阶段，AOF 文件写入阶段和 AOF 重写阶段。

    AOF 文件写入阶段：当 Redis 以 AOF 模式持久化时，如果数据库某个过期键还没被删除，那么 AOF 文件会保留此过期键，当此过期键被删除后，Redis 会向 AOF 文件追加一条 DEL 命令来显式地删除该键值。
    AOF 重写阶段：执行 AOF 重写时，会对 Redis 中的键值对进行检查，已过期的键不会被保存到重写后的 AOF 文件中，因此不会对 AOF 重写造成任何影响。

> Redis 主从模式中，对过期键会如何处理？

当 Redis 运行在主从模式下时，从库不会进行过期扫描，从库对过期的处理是被动的。也就是即使从库中的 key 过期了，如果有客户端访问从库时，依然可以得到 key 对应的值，像未过期的键值对一样返回。

从库的过期键处理依靠主服务器控制，主库在 key 到期时，会在 AOF 文件里增加一条 del 指令，同步到所有的从库，从库通过执行这条 del 指令来删除过期的 key。


### Redis的RDB持久化过程

#### RDB文件的创建与载入

Redis是内存型数据库, 这即意味着若服务器断电或关闭, 内存中加载的所有数据都会丢失, 所以Redis有RDB持久化过程,即可以将内存中的数据以固定格式保存在磁盘里,这样即使服务器断电...在重启服务器的时候也可以加载RDB文件来恢复数据,但RDB不是万能的,也就是若RDB文件生成一天后断了电,那么在这一天内产生的数据是没办法恢复的...当然这是另一个话题了

我们先来说一说RDB持久化的过程

生成RDB文件是用\`SAVE\`或\`BGSAVE\`来生成,SAVE命令会阻塞Redis的主进程也就是说若内存中的数据特别多,会导致Redis服务直接卡停, 导致Redis服务器无法处理别的请求.BGSAVE是在后台起一个进程来处理保存数据.

如何加载RDB文件呢?

Redis没有加载RDB文件的命令, 在Redis服务启动的时候会检查在config文件中配置文件下有没有文件,若有则自动加载RDB文件, 没有则不加载.

另外, 因为AOF文件是持久化比RDB频繁,所以若AOF文件和RDB文件同时存在,则优先加载AOF文件.只有在AOF持久化功能处于关闭状态时，服务器才会使用RDB文件来还原数据库状态。

这意味着若开启了AOF,但AOF文件为空,则加载的数据就为空

BGSAVE命令的保存工作由主进程fork的子进程执行,所以在执行了BGSAVE的情况下Redis服务器还能够接受客户端的命令, 但是在BGSAVE命令执行期间,服务器处理\`BGSAVE\`, \`SAVE\`, \`BGREWRITEAOF\`三个命令和平时有所不同

首先BGSAVE执行期间,客户端发送SAVE命令会被服务器直接拒绝, 服务器禁止SAVE和BGSAVE的目的是避免父子进程同时执行\`rdbSave\`防止有竞争条件, 其次BGSAVE命令执行期间客户端发送BGSAVE命令会被服务器直接拒绝, 因为同时执行两个BGSAVE也会产生竞争条件, 最后\`BGREWRITEAOF\`和\`BGSAVE\`两个命令不能同时执行, 如果BGSAVE同时执行, 那么客户端发送的BGREWRITEAOF命令会被延迟到BGSAVE命令执行完毕之后执行。如 果 BGREWRITEAOF命令正在执行，那么客户端发送的BGSAVE命令会被服务器拒绝。

为什么BGREWRITEAOF和BGSAVE两个命令不能同时进行?

> 因为BGREWRITEAOF和BGSAVE两个命令的实际工作都由子进程执行，所以这两个命令在操作方面并没有什么冲突的地方，不能同时执行它们只是一个性能方面的考虑——并发出两个子进程，并且这两个子进程都同时执行大量的磁盘写入操作，这怎么想都不会是一个好主意。

RDB文件载入时服务器会一直阻塞直到载入完成为止.

#### 自动间隔性保存

因为BGSAVE可以创建一个新的子进程来保存数据,所以可以通过配置文件的save选项设置多个保存条件,只要有其中任意一个满足,后台就可以自动执行BGSAVE, 如果我们向服务器提供\`save 900 1\`, 则若服务器在900秒内对数据库有至少一次修改,则BGSAVE自动执行

保存条件: 用户可以自己制定配置文件,若不配置则默认条件是
\`\`\`
save 900 1
save 300 10
save 60 10000
\`\`\`
接着服务器会根据save选项去保存条件,设置服务器状态redisServer结构的saveparams属性:, saveparams属性是一个数组,数组中每个元素是一个saveparam结构,saveparam结构是所设置的保存条件.
\`\`\`c
struct saveparam {
    //秒数
    time_t seconds;
    //修改数
    int changes;
};
\`\`\`
除了saveparams数组外,服务器状态还维持着一个dirty计数器和lastsave属性:
1. dirty计数器记录距离上一次成功执行SAVE命令或者BGSAVE命令之后，服务器对数据库状态（服务器中的所有数据库）进行了多少次修改（包括写入、删除、更新等操作）。
2. lastsave属性是一个UNIX时间戳,记录了上一次服务器的SAVE命令或BGSAVE命令的时间

当服务器成功执行一个数据库修改命令之后，程序就会对dirty计数器进行更新：命令修改了多少次数据库，dirty计数器的值就增加多少。

> 检查保存条件是否满足

Redis服务器周期性操作函数serverCron默认每隔100毫秒就执行一次, 它的工作之一就是检查save选项所设置的保存条件是否已经满足,如果满足的话就执行BGSAVE命令


#### RDB文件的结构
    
    
RDB的文件结构
\`\`\`
REDIS db_version databases EOF check_sum
\`\`\`

注意:为了区分变量常量数据,使用全大写单词标示常量,用全小写字母标识变量和数据

RDB文件的最开头是REDIS部分，这个部分的长度为5字节，保存着“REDIS”五个字符。通过这五个字符，程序可以在载入文件时，快速检查所载入的文件是否RDB文件。又因为Redis保存的是二进制数据,不是C字符串所以开头的REDIS其实就是REDIS五个字符没有'\\0'结尾...

db_version是长度为4字节,它的值是一个字符串表示的整数,这个整数记录了RDB文件的版本,比如"0006"代表是第六版,这里只介绍RDB的第六版文件

databases部分包含着0或多个数据库以及其中的数据.如果数据库的数据库状态为空则这部位为空.否则就保存数据

EOF常量为1字节,这个常量标志着RDB文件正文内容的结束,当读入程序遇到这个值的时候,它知道所有数据库的键值对都录入完毕.

check_sum是一个8字节长的无符号整数,保存着一个校验和,它是REDIS、db_version、databases、EOF四个部分的内容进行计算得出的。服务器在载入RDB文件时，会将载入数据所计算出的校验和与check_sum所记录的校验和进行对比，以此来检查RDB文件是否有出错或者损坏的情况出现。

##### databases部分

一个RDB文件的databases部分可以保存任意多个非空数据库。

每 个 非 空 数 据 库 在 RDB 文 件 中 都 可 以 保 存 为 SELECTDB 、db_number、key_value_pairs三个部分.

- SELECTDB常量的长度为1字节，当读入程序遇到这个值的时候，它知道接下来要读入的将是一个数据库号码。
- db_number保存着一个数据库号码，根据号码的大小不同，这个部分的长度可以是1字节、2字节或者5字节。当程序读入db_number部分之后，服务器会调用SELECT命令，根据读入的数据库号码进行数
据库切换，使得之后读入的键值对可以载入到正确的数据库中。
- key_value_pairs部分保存了数据库中的所有键值对数据，如果键值对带有过期时间，那么过期时间也会和键值对保存在一起。根据键值对的数量、类型、内容以及是否有过期时间等条件的不同，key_value_pairs部分的长度也会有所不同。

##### key_value_pairs部分

RDB文件中的每个key_value_pairs部分都保存了一个或以上数量的键值对，如果键值对带有过期时间的话，那么键值对的过期时间也会被保存在内。

不带过期时间的键值对在RDB文件中由TYPE、key、value三部分组成

TYPE记录了value的类型, 长度为1字节, 值可以是以下常量的其中一个
- REDIS_RDB_TYPE_STRING
- REDIS_RDB_TYPE_LIST
- REDIS_RDB_TYPE_SET
- REDIS_RDB_TYPE_ZSET
- REDIS_RDB_TYPE_HASH
- REDIS_RDB_TYPE_LIST_ZIPLIST
- REDIS_RDB_TYPE_SET_INTSET
- REDIS_RDB_TYPE_ZSET_ZIPLIST
- REDIS_RDB_TYPE_HASH_ZIPLIST

带有过期的部分有新增的EXPIRETIME_MS和ms, 分别是以毫秒为单位的过期时间和UNIX时间戳记录的过期时间

values 部分则是

其他的值类型部分不赘述了

### AOF文件结构

除了RDB持久化功能外,Redis还提供AOF持久化.AOF持久化是通过保存Redis服务器所执行的写命令来记录数据库状态的


被写入AOF文件的所有命令都是以Redis的命令请求协议格式保存的，因为Redis的命令请求协议是纯文本格式，所以我们可以直接打开一个AOF文件，观察里面的内容。

服务器在启动时，可以通过载入和执行AOF文件中保存的命令来还原服务器关闭之前的数据库状态

#### AOF持久化的实现

AOF持久化功能的实现可以分为命令追加（append）、文件写入、文件同步（sync）三个步骤。

追加:当AOF持久化功能处于打开状态时,服务器执行完一个写命令后,会以协议格式命令将被写命令追加到服务器状态的aof_buf缓冲区末尾.  

AOF文件的写入

Redis服务器进程其实就是一个事件循环,这个循环中的文件事件负责接收客户端的命令请求,以及向客户端发送命令回复,而时间事件则负责执行像serverCron函数这样需要定时运行的函数。因为服务器在处理文件事件时可能会执行写命令,使得一些内容被追加到aof_buf缓冲区中,所以服务器在每次循环结束时会调用flushAppendOnlyFile函数,考虑是否刷新aof_buf的内容.

flushAppendOnlyFile函数的行为由服务器配置的appendfsync选项的值来决定.
appendfsync选项有always  everysec   no意思分别为,总是,每秒,由操作系统决定...


文件写入和同步为了提高文件的写入效率,现代计算机中为了提高文件的写入效率,当用户调用write函数，将一些数据写入到文件的时候，操作系统通常会将写入数据暂时保存在一个内存缓冲区里面，等到缓冲区的空间被填满、或者超过了指定的时限之后，才真正地将缓冲区中的数据写入到磁盘里面。这种做法虽然提高了效率，但也为写入数据带来了安全问题，因为如果计算机发生停机，那么保存在内存缓冲区里面的写入数据将会丢失。为此，系统提供了fsync和fdatasync两个同步函数，它们可以强制让操作系统立即将缓冲区中的数据写入到硬盘里面，从而确保写入数据的安全性。


AOF的载入与数据还原

AOF文件包含了重建数据库所需的所有写命令,所以服务器只需要读入并重新执行一遍AOF文件里面保存的写命令就好了.

Redis读取AOF文件并还原数据库状态的详细步骤如下：
1）创建一个不带网络连接的伪客户端（fake client）：因为Redis的命令只能在客户端上下文中执行，而载入AOF文件时所使用的命令直接来源于AOF文件而不是网络连接，所以服务器使用了一个没有网络连接的伪客户端来执行AOF文件保存的写命令，伪客户端执行命令的效果和带网络连接的客户端执行命令的效果完全一样。
2）从AOF文件中分析并读取出一条写命令。
3）使用伪客户端执行被读出的写命令。
4）一直执行步骤2和步骤3，直到AOF文件中的所有写命令都被处理完毕为止。
当完成以上步骤之后，AOF文件所保存的数据库状态就会被完整地还原出来

AOF重写

因为AOF持久化是通过保存被执行的写命令来记录数据库状态的，所以随着服务器运行时间的流逝，AOF文件中的内容会越来越多，文件的体积也会越来越大，如果不加以控制的话，体积过大的AOF文件很可能对Redis服务器、甚至整个宿主计算机造成影响，并且AOF文件的体积越大，使用AOF文件来进行数据还原所需的时间就越多。


为了解决AOF文件体积膨胀的问题，Redis提供了AOF文件重写（rewrite）功能。通过该功能，Redis服务器可以创建一个新的AOF文件来替代现有的AOF文件，新旧两个AOF文件所保存的数据库状态相同，但新AOF文件不会包含任何浪费空间的冗余命令，所以新AOF文件的体积通常会比旧AOF文件的体积要小得多

在接下来的内容中，我们将介绍AOF文件重写的实现原理，以及BGREWEITEAOF命令的实现原理。


虽然Redis将生成新AOF文件替换旧AOF文件的功能命名为“AOF文件重写”，但实际上，AOF文件重写并不需要对现有的AOF文件进行任何读取、分析或者写入操作，这个功能是通过读取服务器当前的数据库状态来实现的。

即就是通过扫描服务器有的所有键值去重建AOF文件

### 发布与订阅

Redis发布订阅功能是由PUBLISH,SUBSCRIBE,PSUBSCRIBE等命令组成.

通过执行SUBSCRIBE命令，客户端可以订阅一个或多个频道，从而成为这些频道的订阅者（subscriber）：每当有其他客户端向被订阅的频道发送消息（message）时，频道的所有订阅者都会收到这条消息。

除了订阅频道之外，客户端还可以通过执行PSUBSCRIBE命令订阅一个或多个模式，从而成为这些模式的订阅者：每当有其他客户端向某个频道发送消息时，消息不仅会被发送给这个频道的所有订阅者，它还会被发送给所有与这个频道相匹配的模式的订阅者。

频道的订阅与退订

当一个客户端执行SUBSCRIBE命令订阅某个或某些频道的时候，这个客户端与被订阅频道之间就建立起了一种订阅关系。Redis将所有的订阅关系都发那个到了RedisServer类下的pubsub_channels字典里面,这个字典的键是某个被订阅的频道,值是一个链表,链表里面记录的是这个频道的客户端.

退订的话其实就是遍历链表删除操作,如果客户端为空,则频道键一并删除掉.

模式的订阅与退订

服务器也将所有模式的订阅关系都保存在服务器状态的pubsub_patterns属性里面,pubsub_patterns属性是一个链表，链表中的每个节点都包含着一个pubsub Pattern结构，这个结构的pattern属性记录了被订阅的模式，而client属性则记录了订阅模式的客户端

退订模式频道的退订差不多

发布消息

当一个redis客户端执行PUBLISH,将消息message发送给频道channel时,服务器需要执行以下两个动作,将消息message发送给channel频道的所有订阅者.如果有一个或多个模式和频道匹配那么将消息message发送给pattern模式的订阅者.

发送给模式的订阅者就是遍历所有模式,找出客户端发送...

查看订阅消息

PUBSUB客户端可以通过这个命令来查看频道或者模式的相关信息，比如某个频道目前有多少订阅者，又或者某个模式目前有多少订阅者，诸如此类。

PUBSUB CHANNELS[pattern]子命令用于返回服务器当前被订阅的频道，其中pattern参数是可选的：
·如果不给定pattern参数，那么命令返回服务器当前被订阅的所有频道。
·如果给定pattern参数，那么命令返回服务器当前被订阅的频道中那些与pattern模式相匹配的频道。

PUBSUB NUMSUB[channel-1 channel-2...channel-n]子命令接受任意多个频道作为输入参数，并返回这些频道的订阅者数量。

PUBSUB NUMPAT子命令用于返回服务器当前被订阅模式的数量。

### 事务

Redis通过multi,exec,watch等命令实现事务(transaction),事务提供了一种将多个命令请求打包,然后一次性顺序执行多个命令的过程.并且在事务执行期间服务器不会中断事务而改去执行其他客户端的命令请求，它会将事务中的所有命令都执行完毕，然后才去处理其他客户端的命令请求。

一个事务从开始到结束通常会经历以下三个阶段：
1）事务开始。
2）命令入队。
3）事务执行。

包括的命令有\`MULTI\`,\`DISCARD\`,\`EXEC\`,\`WATCH\`

\`multi\`事务开始,这一切换是通过在客户端状态的flags属性中打开REDIS_MULTI标识来完成的\`client.flags |= REDIS_MULTI\`.

当一个客户端处于非事务状态时，这个客户端发送的命令会立即被服务器执行, 不同的是若处于事务状态,则根据这个客户端发来的不同命令执行不同的操作.如果客户端发送的命令为EXEC、DISCARD、WATCH、MULTI四个命令的其中一个，那么服务器立即执行这个命令。

与 此 相 反 ， 如 果 客 户 端 发 送 的 命 令 是 EXEC 、 DISCARD 、WATCH、MULTI四个命令以外的其他命令，那么服务器并不立即执行这个命令，而是将这个命令放入一个事务队列里面，然后向客户端返回QUEUED回复

事务队列

每个Redis客户端都有自己的事务状态，这个事务状态保存在客户端状态的mstate属性里面, 事务状态属性包含一个事务队列，以及一个已入队命令的计数器（也可以说是事务队列的长度）：事务队列是一个multiCmd类型的数组，数组中的每个multiCmd结构都保存了一个已入队命令的相关信息，包括指向命令实现函数的指针、命令的参数，以及参数的数量.

执行事务

当一个处于事务状态的客户端向服务器发送EXEC命令时,，这个EXEC命令将立即被服务器执行。服务器会遍历这个客户端的事务队列，执行队列中保存的所有命令，最后将执行命令所得的结果全部返回给客户端。

WATCH命令的实现

WATCH命令是一个乐观锁（optimistic locking），它可以在EXEC命令执行之前，监视任意数量的数据库键，并在EXEC命令执行时，检查被监视的键是否至少有一个已经被修改过了，如果是的话，服务器将拒绝执行事务，并向客户端返回代表事务执行失败的空回复。

若在WATCH监视其间的事务,有其他客户端修改了某个被WATCH监视的键,则事务会被服务器端拒绝执行,WATCH的原理是,每个Redis数据库都保存着一个watched_keys字典，这个字典的键是某个被WATCH命令监视的数据库键，而字典的值则是一个链表，链表中记录了所有监视相应数据库键的客户端

通过watched_keys字典，服务器可以清楚地知道哪些数据库键正在被监视，以及哪些客户端正在监视这些数据库键

比如·客户端c1和c2正在监视键"name"。 ·客户端c3正在监视键"age"。 ·客户端c2和c4正在监视键"address"。

所有对数据库进行修改的命令，比如SET、LPUSH、SADD、ZREM 、 DEL 、 FLUSHDB 等 等 ， 在 执 行 之 后 都 会 调 用multi.c/touchWatchKey函数对watched_keys字典进行检查，查看是否有客户端正在监视刚刚被命令修改过的数据库键，如果有的话，那 么 touchWatchKey 函 数 会 将 监 视 被 修 改 键 的 客 户 端 的REDIS_DIRTY_CAS标识打开，表示该客户端的事务安全性已经被破坏。

当服务器接收到一个客户端发来的EXEC命令时，服务器会根据这个客户端是否打开了REDIS_DIRTY_CAS标识来决定是否执行事务：
- 如果客户端的REDIS_DIRTY_CAS标识已经被打开，那么说明客户端所监视的键当中，至少有一个键已经被修改过了，在这种情况下，客户端提交的事务已经不再安全，所以服务器会拒绝执行客户端提交的事务。
- 如果客户端的REDIS_DIRTY_CAS标识没有被打开，那么说明客户端监视的所有键都没有被修改过（或者客户端没有监视任何键），事务仍然是安全的，服务器将执行客户端提交的这个事务。

事务的ACID性质

在传统的关系式数据库中，常常用ACID性质来检验事务功能的可靠性和安全性。在 Redis 中 ， 事 务 总 是 具 有 原 子 性 （ Atomicity ） 、 一 致 性（Consistency）和隔离性（Isolation），并且当Redis运行在某种特定的持久化模式下时，事务也具有耐久性

事务具有原子性指的是，数据库将事务中的多个操作当作一个整体来执行，服务器要么就执行事务中的所有操作，要么就一个操作也不执行。对于Redis的事务功能来说，事务队列中的命令要么就全部都执行，要么就一个都不执行，因此，Redis的事务是具有原子性的

Redis的事务和传统的关系型数据库事务的最大区别在于，Redis不支持事务回滚机制（rollback），即使事务队列中的某个命令在执行期间出现了错误，整个事务也会继续执行下去，直到将事务队列中的所有命令都执行完毕为止。

Redis的作者在事务功能的文档中解释说，不支持事务回滚是因为这种复杂的功能和Redis追求简单高效的设计主旨不相符，并且他认为，Redis事务的执行时错误通常都是编程错误产生的，这种错误通常只会出现在开发环境中，而很少会在实际的生产环境中出现，所以他认为没有必要为Redis开发事务回滚功能。


事务具有一致性指的是，如果数据库在执行事务之前是一致的，那么在事务执行之后，无论事务是否执行成功，数据库也应该仍然是一致的。“一致”指的是数据符合数据库本身的定义和要求，没有包含非法或者无效的错误数据。Redis通过谨慎的错误检测和简单的设计来保证事务的一致性，以下三个小节将分别介绍三个Redis事务可能出错的地方，并说明Redis是如何妥善地处理这些错误，从而确保事务的一致性的。

1.入队错误: 如果命令在入队时发生了错误,比如命令不存在,或者命令格式不对,那么Redis将拒绝执行这个命令.

2.执行错误: 执行过程中发生的错误都是一些不能在入队时被服务器发现的错误，这些错误只会在命令实际执行时被触发, 并且执行错后,继续执行下面剩余的队列值

3.服务器停机: 

如果Redis服务器在执行事务的过程中停机，那么根据服务器所使用的持久化模式，可能有以下情况出现：如果服务器运行在无持久化的内存模式下，那么重启之后的数据库将是空白的，因此数据总是一致的。

如果服务器运行在RDB模式下，那么在事务中途停机不会导致不一致性，因为服务器可以根据现有的RDB文件来恢复数据，从而将数据库还原到一个一致的状态。如果找不到可供使用的RDB文件，那么重启之后的数据库将是空白的，而空白数据库总是一致的。

·如果服务器运行在AOF模式下，那么在事务中途停机不会导致不一致性，因为服务器可以根据现有的AOF文件来恢复数据，从而将数据库还原到一个一致的状态。如果找不到可供使用的AOF文件，那么重启之后的数据库将是空白的，而空白数据库总是一致的。综上所述，无论Redis服务器运行在哪种持久化模式下，事务执行中途发生的停机都不会影响数据库的一致性。

隔离性

事务的隔离性指的是，即使数据库中有多个事务并发地执行，各个事务之间也不会互相影响，并且在并发状态下执行的事务和串行执行的事务产生的结果完全相同。

因为Redis使用单线程的方式来执行事务（以及事务队列中的命令），并且服务器保证，在执行事务期间不会对事务进行中断，因此，Redis的事务总是以串行的方式运行的，并且事务也总是具有隔离性的。

耐久性

事务的耐久性指的是，当一个事务执行完毕时，执行这个事务所得的结果已经被保存到永久性存储介质（比如硬盘）里面了，即使服务器在事务执行完毕之后停机，执行事务所得的结果也不会丢失。

因为Redis的事务不过是简单地用队列包裹起了一组Redis命令，Redis并没有为事务提供任何额外的持久化功能，所以Redis事务的耐久性由Redis所使用的持久化模式决定


### 复制

在Redis的主从复制中,用户使用\`slaveof\`命令或者设置slaveof选项,可以让一个服务器去复制另一个服务器,被复制的服务器叫主服务器,对主服务器进行复制的服务器叫从服务器

进行复制中的服务器双方保存相同的数据,概念上将这种现象叫数据库状态一致.

这里先介绍2.8版本以前使用的旧版复制功能的实现原理,并说明旧版复制功能在处理断线后重新连接的从服务器时，会遇上怎样的低效情况。接着，本章将介绍Redis从2.8版本开始使用的新版复制功能是如何通过部分重同步来解决旧版复制功能的低效问题的，并说明部分重同步的实现原理。在此之后，本章将列举SLAVEOF命令的具体实现步骤，并在本章最后，说明主从服务器心跳检测机制的实现原理，并对基于心跳检测实现的几个功能进行介绍。

旧版复制功能的实现

Redis的复制分为同步和命令传播两个操作:
1. 同步状态用作将从服务器的数据库状态更新至与主服务器当前所处的数据库状态.
2. 命令传播操作则用于主从服务器状态不一致,让主从服务器状态回到一致的状态.

同步

当客户端向从服务器发送salveof命令时,要求从服务器复制主服务器,从服务器首先需要执行同步操作,也就是将从服务器的数据库状态更新至主服务器当前所处的数据库状态.从服务器对主服务器的同步操作需要通过向主服务器发送SYNC命令来完成,以下是发送SYNC命令的步骤:
1. 从服务器向主服务器发送SYNC命令。
2. 收到SYNC命令的主服务器执行BGSAVE命令在后台生成一个RDB文件,并使用一个缓冲区记录从现在开始执行的所有写命令.
3. 当主服务器BGSAVE命令执行完成,主服务器将BGSAVE生成的RDB文件发送给从服务器,从服务器接收并载入这个RDB文件,将自己的数据库状态更新至主服务器执行BGSAVE命令时的数据库状态
4. 主服务器将记录在缓冲区里的所有写命令发送给从服务器,从服务器执行这些写命令,将自己的数据库状态更新至主服务器所处的状态.

命令传播

在同步操作完成后,主从服务器状态将达成一致,但如果主服务器的客户端发送写命令时,主从服务器的数据库状态可能被修改,并导致主从服务器状态不再一致,为了让主从服务器再次回到一致状态，主服务器需要对从服务器执行命令传播操作：主服务器会将自己执行的写命令，也即是造成主从服务器不一致的那条写命令，发送给从服务器执行，当从服务器执行了相同的写命令之后，主从服务器将再次回到一致状态。

旧版复制功能的缺陷:Redis中从服务器对主服务器的复制可以分为以下两种情况：
- 初次复制：从服务器以前没有复制过任何主服务器，或者从服务器当前要复制的主服务器和上一次复制的主服务器不同。
- 断线后重复制：处于命令传播阶段的主从服务器因为网络原因而中断了复制，但从服务器通过自动重连接重新连上了主服务器，并继续复制主服务器。

对于初次复制来说，旧版复制功能能够很好地完成任务，但对于断线后重复制来说，旧版复制功能虽然也能让主从服务器重新回到一致状态，但效率却非常低,需要主服务器再次发生RDB文件.

新版Redis复制功能的实现:

为了解决旧版复制功能在处理断线重复制情况时的低效问题，Redis从2.8版本开始，使用PSYNC命令代替SYNC命令来执行复制时的同步操作。

PSYNC命令有完整重同步和部分重同步两种模式:
- 其中完整重同步用于处理初次复制情况:完整重同步的执行步骤和SYNC命令的执行步骤基本一样,都是通过让主服务器创建并发送RDB文件，以及向从服务器发送保存在缓冲区里面的写命令来进行同步。
- 部分重同步则用于处理断线后复制的情况,当从服务器在断线后重新连接主服务器时,如果条件允许,主服务器可以将主从服务器连接断开期间执行的写命令发送给从服务器，从服务器只要接收并执行这些写命令，就可以将数据库更新至主服务器当前所处的状态。PSYNC命令的部分重同步模式解决了旧版复制功能在处理断线后重复制时出现的低效情况.

部分重同步的实现

部分重同步功能由以下三个部分构成：
- 主服务器的复制偏移量（replication offset）和从服务器的复制偏移量。
- 主服务器的复制积压缓冲区（replication backlog）。
- 服务器的运行ID（run ID）。

复制偏移量

执行复制的双方——主服务器和从服务器会分别维护一个复制偏移量：
- 主服务器每次向从服务器传播N个字节的数据时，就将自己的复制偏移量的值加上N。
- 从服务器每次收到主服务器传播来的N个字节的数据时，就将自己的复制偏移量的值加上N。

通过对比主从服务器的复制偏移量，程序可以很容易地知道主从服务器是否处于一致状态：·如果主从服务器处于一致状态，那么主从服务器两者的偏移量总是相同的。相反，如果主从服务器两者的偏移量并不相同，那么说明主从服务器并未处于一致状态。

复制积压缓冲区

复制积压缓冲区是由主服务器维护的一个固定长度（fixed-size）先进先出（FIFO）队列，默认大小为1MB。主服务器的复制积压缓冲区里面会保存着一部分最近传播的写命令，并且复制积压缓冲区会为队列中的每个字节记录相应的复制偏移量

当从服务器重新连上主服务器时，从服务器会通过PSYNC命令将自己的复制偏移量offset发送给主服务器，主服务器会根据这个复制偏移量来决定对从服务器执行何种同步操作：
- 如果offset偏移量之后的数据（也即是偏移量offset+1开始的数据）仍然存在于复制积压缓冲区里面，那么主服务器将对从服务器执行部分重同步操作。
- 相反，如果offset偏移量之后的数据已经不存在于复制积压缓冲区，那么主服务器将对从服务器执行完整重同步操作。

服务器运行ID

除了复制偏移量和复制积压缓冲区之外，实现部分重同步还需要用到服务器运行ID（run ID）：
每个Redis服务器，不论主服务器还是从服务，都会有自己的运行ID

当从服务器对主服务器进行初次复制时，主服务器会将自己的运行ID传送给从服务器，而从服务器则会将这个运行ID保存起来。

当从服务器断线并重新连上一个主服务器时，从服务器将向当前连接的主服务器发送之前保存的运行ID：如果从服务器保存的运行ID和当前连接的主服务器的运行ID相同，那么说明从服务器断线之前复制的就是当前连接的这个主服务器，主服务器可以继续尝试执行部分重同步操作。相反地，如果从服务器保存的运行ID和当前连接的主服务器的运行ID并不相同，那么说明从服务器断线之前复制的主服务器并不是当前连接的这个主服务器，主服务器将对从服务器执行完整重同步操作。

PSYNC命令的实现

到目前为止，本章在介绍PSYNC命令时一直没有说明PSYNC命令的参数以及返回值，因为那时我们还未了解服务器运行ID、复制偏移量、复制积压缓冲区这些东西，在学习了部分重同步的实现原理之后，我们现在可以来了解PSYNC命令的完整细节了。

PSYNC命令的调用方法有两种：
如果从服务器以前没有复制过任何主服务器，或者之前执行过SLAVEOF no one命令，那么从服务器在开始一次新的复制时将向主服务器发送PSYNC ? -1命令，主动请求主服务器进行完整重同步（因为这时不可能执行部分重同步）
相反地，如果从服务器已经复制过某个主服务器，那么从服务器在开始一次新的复制时将向主服务器发送\`PSYNC <runid> \${offset}\`命令：其中runid是上一次复制的主服务器的运行ID，而offset则是从服务器当前的复制偏移量，接收到这个命令的主服务器会通过这两个参数来判断应该对从服务器执行哪种同步操作。

根据情况，接收到PSYNC命令的主服务器会向从服务器返回以下三种回复的其中一种：
如果主服务器返回\`+FULLRESYNC <runid> \${offset}\`回复，那么表示主服务器将与从服务器执行完整重同步操作：其中runid是这个主服务器的运行ID，从服务器会将这个ID保存起来，在下一次发送PSYNC命令时使用；而offset则是主服务器当前的复制偏移量，从服务器会将这个值作为自己的初始化偏移量。

如果主服务器返回+CONTINUE回复，那么表示主服务器将与从服务器执行部分重同步操作，从服务器只要等着主服务器将自己缺少的那部分数据发送过来就可以了。

如果主服务器返回-ERR回复，那么表示主服务器的版本低于Redis 2.8，它识别不了PSYNC命令，从服务器将向主服务器发送SYNC命令，并与主服务器执行完整同步操作。

复制的实现

通过向从服务器发送SLAVEOF命令，我们可以让一个从服务器去复制一个主服务器

步骤1：设置主服务器的地址和端口

当客户端向从服务器发送以下命令时：\`slaveof 127.0.0.1 6379\`, 从服务器首先要做的就是将客户端给定的服务器IP地址127.0.0.1以及端口6379保存到服务器状态的masterhost属性和masterport属性里面.

SLAVEOF命令是一个异步命令，在完成masterhost属性和masterport属性的设置工作之后，从服务器将向发送SLAVEOF命令的客户端返回OK，表示复制指令已经被接收，而实际的复制工作将在OK返回之后才真正开始执行。

步骤2：建立套接字连接

在SLAVEOF命令执行之后，从服务器将根据命令所设置的IP地址和端口，创建连向主服务器的套接字连接。

如果从服务器创建的套接字能成功连接（connect）到主服务器，那么从服务器将为这个套接字关联一个专门用于处理复制工作的文件事件处理器，这个处理器将负责执行后续的复制工作，比如接收RDB文件，以及接收主服务器传播来的写命令，诸如此类。
而主服务器在接受（accept）从服务器的套接字连接之后，将为该套接字创建相应的客户端状态，并将从服务器看作是一个连接到主服务器的客户端来对待，这时从服务器将同时具有服务器（server）和客户端（client）两个身份：从服务器可以向主服务器发送命令请求，而主服务器则会向从服务器返回命令回复

因为复制工作接下来的几个步骤都会以从服务器向主服务器发送命令请求的形式来进行，所以理解“从服务器是主服务器的客户端”这一点非常重要。

步骤3：发送PING命令

从服务器成为主服务器的客户端之后，做的第一件事就是向主服务器发送一个PING命令

虽然主从服务器成功建立起了套接字连接，但双方并未使用该套接字进行过任何通信，通过发送PING命令可以检查套接字的读写状态是否正常。

因为复制工作接下来的几个步骤都必须在主服务器可以正常处理命令请求的状态下才能进行，通过发送PING命令可以检查主服务器能否正常处理命令请求。

从服务器在发送PING命令之后将遇到以下三种情况的其中一种：

1. 如果主服务器向从服务器返回了一个命令回复，但从服务器却不能在规定的时限（timeout）内读取出命令回复的内容，那么表示主从服务器之间的网络连接状态不佳，不能继续执行复制工作的后续步骤。当出现这种情况时，从服务器断开并重新创建连向主服务器的套接字。
2. 如果主服务器向从服务器返回一个错误，那么表示主服务器暂时没办法处理从服务器的命令请求，不能继续执行复制工作的后续步骤。当出现这种情况时，从服务器断开并重新创建连向主服务器的套接字。比如说，如果主服务器正在处理一个超时运行的脚本，那么当从服务器向主服务器发送PING命令时，从服务器将收到主服务器返回的BUSY Redisis busy running a script.You can only call SCRIPTKILL or SHUTDOWN NOSAVE.错误。
3. 如果从服务器读取到"PONG"回复，那么表示主从服务器之间的网络连接状态正常，并且主服务器可以正常处理从服务器（客户端）发送的命令请求，在这种情况下，从服务器可以继续执行复制工作的下个步骤。

步骤4：身份验证

从服务器在收到主服务器返回的"PONG"回复之后，下一步要做的就是决定是否进行身份验证：

如果从服务器设置了masterauth选项，那么进行身份验证。

如果从服务器没有设置masterauth选项，那么不进行身份验证。

在需要进行身份验证的情况下，从服务器将向主服务器发送一条AUTH命令，命令的参数为从服务器masterauth选项的值。

举个例子，如果从服务器masterauth选项的值为10086，那么从服务器将向主服务器发送命令AUTH 10086，如图15-18所示。

步骤5：发送端口信息

在 身 份 验 证 步 骤 之 后 ， 从 服 务 器 将 执 行 命 令 REPLCONF listening-port <port-number>，向主服务器发送从服务器的监听端口号。

步骤6：同步

在这一步，从服务器将向主服务器发送PSYNC命令，执行同步操作，并将自己的数据库更新至主服务器数据库当前所处的状态。

步骤7：命令传播

当完成了同步之后，主从服务器就会进入命令传播阶段，这时主服务器只要一直将自己执行的写命令发送给从服务器，而从服务器只要一直接收并执行主服务器发来的写命令，就可以保证主从服务器一直保持一致了。

心跳检测

在命令传播阶段，从服务器默认会以每秒一次的频率，向主服务器发送命令：

其中replication_offset是从服务器当前的复制偏移量。

发送REPLCONF ACK命令对于主从服务器有三个作用：

- 检测主从服务器的网络连接状态。
- 辅助实现min-slaves选项。
- 检测命令丢失。
以下将分别介绍这三个作用。

检测主从服务器的网络连接状态:主从服务器可以通过发送和接收REPLCONF ACK命令来检查两者之间的网络连接是否正常：如果主服务器超过一秒钟没有收到从服务器发来的REPLCONF ACK命令，那么主服务器就知道主从服务器之间的连接出现问题了。

通过向主服务器发送INFO replication命令，在列出的从服务器列表的lag一栏中，我们可以看到相应从服务器最后一次向主服务器发送REPLCONF ACK命令距离现在过了多少秒.在一般情况下，lag的值应该在0秒或者1之间跳动，如果超过1秒的话，那么说明主从服务器之间的连接出现了故障。

辅助实现min-slaves配置选项

Redis的min-slaves-to-write和min-slaves-max-lag两个选项可以防止主服务器在不安全的情况下执行写命令。

举个例子，如果我们向主服务器提供以下设置：

那么在从服务器的数量少于3个，或者三个从服务器的延迟（lag）值都大于或等于10秒时，主服务器将拒绝执行写命令，这里的延迟值就是上面提到的INFO replication命令的lag值。

检测命令丢失

如果因为网络故障，主服务器传播给从服务器的写命令在半路丢失，那么当从服务器向主服务器发送REPLCONF ACK命令时，主服务器将发觉从服务器当前的复制偏移量少于自己的复制偏移量，然后主服务器就会根据从服务器提交的复制偏移量，在复制积压缓冲区里面找到从服务器缺少的数据，并将这些数据重新发送给从服务器。

### 哨兵

Sentinel(哨兵)系统是Redis高可用性解决方案,由一个或多个Sentinel实例组成的Sentineli系统可以监视任意多个服务器,以及这些主服务器下的所有从服务器,并在被监视的主服务器下线时,自动将这个下线主服务器属下的某个从服务器升级为新的主服务器,然后由新的主服务器代替已下线的主服务器处理请求.

当server1的下线时长超过用户设定的下线时长上限时,Sentinel系统就会对server1执行故障转移操作.

另外，Sentinel还会继续监视已下线的server1，并在它重新上线时，将它设置为新的主服务器的从服务器。

当一个Sentinel启动时，它需要执行以下步骤：
1）初始化服务器。
2）将普通Redis服务器使用的代码替换成Sentinel专用代码。
3）初始化Sentinel状态。
4）根据给定的配置文件，初始化Sentinel的监视主服务器列表。
5）创建连向主服务器的网络连接。

初始化服务器

Sentinel的本质就是运行在特殊模式下的Redis服务器,所以第一步其实是先初始化一个普通redis服务器,不过，因为Sentinel执行的工作和普通Redis服务器执行的工作不同，所以Sentinel的初始化过程和普通Redis服务器的初始化过程并不完全相同。

例如，普通服务器在初始化时会通过载入RDB文件或者AOF文件来还原数据库状态，但是因为Sentinel并不使用数据库，所以初始化Sentinel时就不会载入RDB文件或者AOF文件, sentinel内部是可以使用发布订阅功能的.

使用Sentinel专用代码

启动Sentinel的第二个步骤就是将一部分普通Redis服务器使用的代 码 替 换 成 Sentinel 专 用 代 码 。 比 如 说 ， 普 通 Redis 服 务 器 使 用redis.h/REDIS_SERVERPORT常量的值作为服务器端口

初始化Sentinel状态

在应用了Sentinel的专用代码之后，接下来，服务器会初始化一个sentinel.c/sentinelState结构（后面简称“Sentinel状态”），这个结构保存了服务器中所有和Sentinel功能有关的状态

\`\`\`c
struct sentinelState {
    //当前纪元，用于实现故障转移
    uint64_t current_epoch;
    //保存了所有被这个sentinel监视的主服务器
    //字典的键是主服务器的名字
    //字典的值则是一个指向sentinelRedisInstance结构的指针
    dict *masters;
    //是否进入了TILT模式？
    int tilt;
    //目前正在执行的脚本的数量
    int running_scripts;
    //进入TILT模式的时间
    mstime_t tilt_start_time;
    //最后一次执行时间处理器的时间
    mstime_t previous_time;
    //一个FIFO队列，包含了所有需要执行的用户脚本
    list *scripts_queue;
} sentinel;
\`\`\`
字典的键是被监视主服务器的名字, 而 字 典 的 值 则 是 被 监 视 主 服 务 器 对 应 的sentinel.c/sentinelRedisInstance结构。

\`\`\`c
typedef struct sentinelRedisInstance {
    //标识值，记录了实例的类型，以及该实例的当前状态
    int flags;
    //实例的名字
    //主服务器的名字由用户在配置文件中设置
    //从服务器以及Sentinel的名字由Sentinel自动设置
    //格式为ip:port，例如"127.0.0.1:26379"
    char *name;
    //实例的运行ID
    char *runid;
    //配置纪元，用于实现故障转移
    uint64_t config_epoch;
    //实例的地址
    sentinelAddr *addr;
    // SENTINEL down-after-milliseconds选项设定的值
    //实例无响应多少毫秒之后才会被判断为主观下线（subjectively down）
    mstime_t down_after_period;
    // SENTINEL monitor <master-name> <IP> <port> <quorum>选项中的quorum参数
    //判断这个实例为客观下线（objectively down）所需的支持投票数量
    int quorum;
    // SENTINEL parallel-syncs <master-name> <number>选项的值
    //在执行故障转移操作时，可以同时对新的主服务器进行同步的从服务器数量
    int parallel_syncs;
    // SENTINEL failover-timeout <master-name> <ms>选项的值
    //刷新故障迁移状态的最大时限
    mstime_t failover_timeout;
    // ...
} sentinelRedisInstance;

// sentinelRedisInstance.addr 属 性 是 一 个 指 向sentinel.c/sentinelAddr结构的指针，这个结构保存着实例的IP地址和端口号
typedef struct sentinelAddr {
    char *ip;
    int port;
} sentinelAddr;
\`\`\`
创建连向主服务器的网络连接

初始化Sentinel的最后一步是创建连向被监视主服务器的网络连接，Sentinel将成为主服务器的客户端，它可以向主服务器发送命令，并从命令回复中获取相关的信息。

对于每个被Sentinel监视的主服务器来说，Sentinel会创建两个连向主服务器的异步网络连接：
- 一个是命令连接，这个连接专门用于向主服务器发送命令，并接收命令回复。
- 另一个是订阅连接，这个连接专门用于订阅主服务器的__sentinel__:hello频道。

为什么有两个连接？

在Redis目前的发布与订阅功能中，被发送的信息都不会保存在Redis服务器里面，如果在信息发送时，想要接收信息的客户端不在线或者断线，那么这个客户端就会丢失这条信息。因此，为了不丢失__sentinel__:hello频道的任何信息，Sentinel必须专门用一个订阅连接来接收该频道的信息。另一方面，除了订阅频道之外，Sentinel还必须向主服务器发送命令，以此来与主服务器进行通信，所以Sentinel还必须向主服务器创建命令连接。
因为Sentinel需要与多个实例创建多个网络连接，所以Sentinel使用的是异步连接

获取主服务器信息

哨兵会默认以10秒一次的频率通过命令向被监视的主服务器发送INFO命令,并通过分析INFO命令的回复来获取主服务器的当前消息.

通过分析主服务器返回的INFO命令回复，Sentinel可以获取以下两方面的信息：

一方面是关于主服务器本身的信息，包括run_id域记录的服务器运行ID，以及role域记录的服务器角色；
另一方面是关于主服务器属下所有从服务器的信息.至于主服务器返回的从服务器信息，则会被用于更新主服务器实例结构的slaves字典，这个字典记录了主服务器属下从服务器的名单.

获取从服务器信息

当Sentinel发现主服务器有新的从服务器出现时，Sentinel除了会为这个新的从服务器创建相应的实例结构之外，Sentinel还会创建连接到从服务器的命令连接和订阅连接。

在创建命令连接之后，Sentinel在默认情况下，会以每十秒一次的频率通过命令连接向从服务器发送INFO命令.

根据INFO命令的回复，Sentinel会提取出以下信息：
·从服务器的运行ID run_id。
·从服务器的角色role。
· 主 服 务 器 的 IP 地 址 master_host ， 以 及 主 服 务 器 的 端 口 号
master_port。
·主从服务器的连接状态master_link_status。
·从服务器的优先级slave_priority。
·从服务器的复制偏移量slave_repl_offset。根据这些信息，Sentinel会对从服务器的实例结构进行更新.

向主服务器和从服务器发送信息

在默认情况下，Sentinel会以每两秒一次的频率，通过命令连接向所有被监视的主服务器和从服务器发送以下格式的命令
\`\`\`
PUBLISH __sentinel__:hello "<s_ip>,<s_port>,<s_runid>,<s_epoch>,<m_name>,<m_ip>,<m_port>,<m_epoch>"
\`\`\`
这条命令向服务器的__sentinel__:hello频道发送了一条信息，信息的内容由多个参数组成：

·其中以s_开头的参数记录的是Sentinel本身的信息·而m_开头的参数记录的则是主服务器的信息

接收来自主服务器和从服务器的频道信息

当Sentinel与一个主服务器或者从服务器建立起订阅连接之后，Sentinel就会通过订阅连接，向服务器发送以下命令
\`\`\`
SUBSCRIBE __sentinel__:hello
\`\`\`

Sentinel对__sentinel__:hello频道的订阅会一直持续到Sentinel与服务器的连接断开为止。
这也就是说，对于每个与Sentinel连接的服务器，Sentinel既通过命令连接向服务器的__sentinel__:hello频道发送信息，又通过订阅连接从服务器的__sentinel__:hello频道接收信息

对于监视同一个服务器的多个Sentinel来说，一个Sentinel发送的 信 息 会 被 其 他 Sentinel 接 收 到 ， 这 些 信 息 会 被 用 于 更 新 其 他Sentinel对发送信息Sentinel的认知，也会被用于更新其他Sentinel对被监视服务器的认知。

当 一 个 Sentinel 从 __sentinel__:hello 频 道 收 到 一 条 信 息 时 ，Sentinel会对这条信息进行分析，提取出信息中的Sentinel IP地址、Sentinel端口号、Sentinel运行ID等八个参数，并进行以下检查:如果信息中记录的Sentinel运行ID和接收信息的Sentinel的运行ID相同，那么说明这条信息是Sentinel自己发送的，Sentinel将丢弃这条信息，不做进一步处理.相 反 地 ， 如 果 信 息 中 记 录 Sentinel 运 行 ID 和 接 收 信 息 的Sentinel的运行ID不相同，那么说明这条信息是监视同一个服务器的其他Sentinel发来的，接收信息的Sentinel将根据信息中的各个参数，对相应主服务器的实例结构进行更新。

更新sentinels字典

Sentinel为主服务器创建的实例结构中的sentinels字典保存了除Sentinel本身之外，所有同样监视这个主服务器的其他Sentinel的资料

因为一个Sentinel可以通过分析接收到的频道信息来获知其他Sentinel的存在，并通过发送频道信息来让其他Sentinel知道自己的存在，所以用户在使用Sentinel的时候并不需要提供各个Sentinel的地址信息，监视同一个主服务器的多个Sentinel可以自动发现对方。

创建连向其他Sentinel的命令连接

当Sentinel通过频道信息发现一个新的Sentinel时，它不仅会为新Sentinel在sentinels字典中创建相应的实例结构，还会创建一个连向新Sentinel 的命令连接， 而 新 Sentinel 也 同 样 会 创 建 连 向 这 个
Sentinel的命令连接，最终监视同一主服务器的多个Sentinel将形成相 互 连 接 的 网 络 ： Sentinel A 有 连 向 Sentinel B 的 命 令 连 接 ， 而Sentinel B也有连向Sentinel A的命令连接。

使用命令连接相连的各个Sentinel可以通过向其他Sentinel发送命令请求来进行信息交换，本章接下来将对Sentinel实现主观下线检测和客观下线检测的原理进行介绍，这两种检测都会使用Sentinel之间的命令连接来进行通信。

Sentinel之间不会创建订阅连接

检测主观下线状态

在默认情况下，Sentinel会以每秒一次的频率向所有与它创建了命令连接的实例（包括主服务器、从服务器、其他Sentinel在内）发送PING命令，并通过实例返回的PING命令回复来判断实例是否在线。

如果配置文件指定Sentinel1的down-after-milliseconds选项的值为50000毫秒，那么当主服务器master连续50000毫秒都向Sentinel1返回无效回复时，Sentinel1就会将master标记为主观下线，并在master所对应的实例结构的flags属性中打开SRI_S_DOWN标识

主观下线时长选项的作用范围

用户设置的down-after-milliseconds选项的值，不仅会被Sentinel用来判断主服务器的主观下线状态，还会被用于判断主服务器属下的所有从服务器，以及所有同样监视这个主服务器的其他Sentinel的主观下线状态。举个例子，如果用户向Sentinel设置了以下配置：

\`\`\`
sentinel monitor master 127.0.0.1 6379 2
sentinel down-after-milliseconds master 50000
\`\`\`

那么50000毫秒不仅会成为Sentinel判断master进入主观下线的标准，还会成为Sentinel判断master属下所有从服务器，以及所有同样监视master的其他Sentinel进入主观下线的标准。

多个Sentinel设置的主观下线时长可能不同

down-after-milliseconds选项另一个需要注意的地方是，对于监视同一个主服务器的多个Sentinel来说，这些Sentinel所设置的down-after-milliseconds选项的值也可能不同，因此，当一个Sentinel将主服务器判断为主观下线时，其他Sentinel可能仍然会认为主服务器处于在线状态。举个例子，如果Sentinel1载入了以下配置：
\`\`\`
sentinel monitor master 127.0.0.1 6379 2
sentinel down-after-milliseconds master 50000
\`\`\`
而Sentinel2则载入了以下配置：
\`\`\`
sentinel monitor master 127.0.0.1 6379 2
sentinel down-after-milliseconds master 10000
\`\`\`
那么当master的断线时长超过10000毫秒之后，Sentinel2会将master判断为主观下线，而Sentinel1却认为master仍然在 线 。 只 有 当 master 的 断 线 时 长 超 过 50000 毫 秒 之 后 ，
Sentinel1和Sentinel2才会都认为master进入了主观下线状态。

检查客观下线状态

当Sentinel将一个主服务器判断为主观下线之后，为了确认这个主服务器是否真的下线了，它会向同样监视这一主服务器的其他Sentinel进行询问，看它们是否也认为主服务器已经进入了下线状态（可以是主观下线或者客观下线）。当Sentinel从其他Sentinel那里接收到足够数量的已下线判断之后，Sentinel就会将从服务器判定为客观下线，并对主服务器执行故障转移操作。

发送SENTINEL is-master-down-by-addr命令
\`\`\`
SENTINEL is-master-down-by-addr <ip> <port> <current_epoch> <runid>
\`\`\`

接收SENTINEL is-master-down-by-addr命令

当一个Sentinel（目标Sentinel）接收到另一个Sentinel（源Sentinel ） 发 来 的 SENTINEL is-master-down-by 命 令 时 ， 目 标Sentinel会分析并取出命令请求中包含的各个参数，并根据其中的主服务器IP和端口号，检查主服务器是否已下线，然后向源Sentinel返回 一 条 包 含 三 个 参 数 的 Multi Bulk 回 复 作 为 SENTINEL is-master-down-by命令的回复：

根据其他Sentinel发回的SENTINEL is-master-down-by-addr命令回复，Sentinel将统计其他Sentinel同意主服务器已下线的数量，当这一数量达到配置指定的判断客观下线所需的数量时，Sentinel会将主服务器实例结构flags属性的SRI_O_DOWN标识打开，表示主服务器已经进入客观下线状态.

客观下线状态的判断条件

当认为主服务器已经进入下线状态的Sentinel的数量，超过Sentinel配置中设置的quorum参数的值，那么该Sentinel就会认为主服务器已经进入客观下线状态。比如说，如果Sentinel在启动时载入了以下配置
\`\`\`
sentinel monitor master 127.0.0.1 6379 2
\`\`\`
那么包括当前Sentinel在内，只要总共有两个Sentinel认为主服务器已经进入下线状态，那么当前Sentinel就将主服务器判断为客观下线


不同Sentinel判断客观下线的条件可能不同

同样以多的为主

选举领头Sentinel

当一个主服务器被判断为客观下线时，监视这个下线主服务器的各 个 Sentinel 会 进 行 协 商 ， 选 举 出 一 个 领 头 Sentinel ， 并 由 领 头Sentinel对下线主服务器执行故障转移操作。

以下是Redis选举领头Sentinel的规则和方法：

所有在线的Sentinel都有被选为领头Sentinel的资格，换句话说，监视同一个主服务器的多个在线Sentinel中的任意一个都有可能成为领头Sentinel。

· 每 次 进 行 领 头 Sentinel 选 举 之 后 ， 不 论 选 举 是 否 成 功 ， 所 有Sentinel的配置纪元（configuration epoch）的值都会自增一次。配置纪元实际上就是一个计数器，并没有什么特别的。
·在一个配置纪元里面，所有Sentinel都有一次将某个Sentinel设置为局部领头Sentinel的机会，并且局部领头一旦设置，在这个配置纪元里面就不能再更改。
· 每 个 发 现 主 服 务 器 进 入 客 观 下 线 的 Sentinel 都 会 要 求 其 他Sentinel将自己设置为局部领头Sentinel。
· 当 一 个 Sentinel （ 源 Sentinel ） 向 另 一 个 Sentinel （ 目 标Sentinel）发送SENTINEL is-master-down-by-addr命令，并且命令中的runid参数不是*符号而是源Sentinel的运行ID时，这表示源Sentinel要求目标Sentinel将前者设置为后者的局部领头Sentinel。
·Sentinel设置局部领头Sentinel的规则是先到先得：最先向目标Sentinel发送设置要求的源Sentinel将成为目标Sentinel的局部领头Sentinel，而之后接收到的所有设置要求都会被目标Sentinel拒绝。
·目标Sentinel在接收到SENTINEL is-master-down-by-addr命令之后，将向源Sentinel返回一条命令回复，回复中的leader_runid参 数 和 leader_epoch 参 数 分 别 记 录 了 目 标 Sentinel 的 局 部 领 头Sentinel的运行ID和配置纪元。
·源Sentinel在接收到目标Sentinel返回的命令回复之后，会检查回复中leader_epoch参数的值和自己的配置纪元是否相同，如果相同的话，那么源Sentinel继续取出回复中的leader_runid参数，如果leader_runid参数的值和源Sentinel的运行ID一致，那么表示目标Sentinel将源Sentinel设置成了局部领头Sentinel。
·如果有某个Sentinel被半数以上的Sentinel设置成了局部领头Sentinel，那么这个Sentinel成为领头Sentinel。举个例子，在一个由 10 个 Sentinel 组 成 的 Sentinel 系 统 里 面 ， 只 要 有 大 于等 于10/2+1=6个Sentinel将某个Sentinel设置为局部领头Sentinel，那么被设置的那个Sentinel就会成为领头Sentinel。
·因为领头Sentinel的产生需要半数以上Sentinel的支持，并且每个Sentinel在每个配置纪元里面只能设置一次局部领头Sentinel，所以在一个配置纪元里面，只会出现一个领头Sentinel。
·如果在给定时限内，没有一个Sentinel被选举为领头Sentinel，那么各个Sentinel将在一段时间之后再次进行选举，直到选出领头Sentinel为止。

故障转移

在选举产生出领头Sentinel之后，领头Sentinel将对已下线的主服务器执行故障转移操作，该操作包含以下三个步骤：
1）在已下线主服务器属下的所有从服务器里面，挑选出一个从服务器，并将其转换为主服务器。
2）让已下线主服务器属下的所有从服务器改为复制新的主服务器。
3）将已下线主服务器设置为新的主服务器的从服务器，当这个旧的主服务器重新上线时，它就会成为新的主服务器的从服务器。

选出新的主服务器

故障转移操作第一步要做的就是在已下线主服务器属下的所有从服务器中，挑选出一个状态良好、数据完整的从服务器，然后向这个从服务器发送SLAVEOF no one命令，将这个从服务器转换为主服务器。

新的主服务器是怎样挑选出来的

领头Sentinel会将已下线主服务器的所有从服务器保存到一个列表里面，然后按照以下规则，一项一项地对列表进行过滤：

1）删除列表中所有处于下线或者断线状态的从服务器，这可以保证列表中剩余的从服务器都是正常在线的。
2）删除列表中所有最近五秒内没有回复过领头Sentinel的INFO命令的从服务器，这可以保证列表中剩余的从服务器都是最近成功进行过通信的。
3）删除所有与已下线主服务器连接断开超过down-after-milliseconds*10毫秒的从服务器：down-after-milliseconds选项指定了判断主服务器下线所需的时间，而删除断开时长超过down-after-milliseconds*10毫秒的从服务器，则可以保证列表中剩余的从服务器都没有过早地与主服务器断开连接，换句话说，列表中剩余的从服务器保存的数据都是比较新的。

之后，领头Sentinel将根据从服务器的优先级，对列表中剩余的从服务器进行排序，并选出其中优先级最高的从服务器。

如果有多个具有相同最高优先级的从服务器，那么领头Sentinel将按照从服务器的复制偏移量，对具有相同最高优先级的所有从服务器进行排序，并选出其中偏移量最大的从服务器（复制偏移量最大的从服务器就是保存着最新数据的从服务器）。
最后，如果有多个优先级最高、复制偏移量最大的从服务器，那么领头Sentinel将按照运行ID对这些从服务器进行排序，并选出其中运行ID最小的从服务器。

修改从服务器的复制目标

当新的主服务器出现之后，领头Sentinel下一步要做的就是，让已下线主服务器属下的所有从服务器去复制新的主服务器，这一动作可以通过向从服务器发送SLAVEOF命令来实现.

将旧的主服务器变为从服务器

故障转移操作最后要做的是，将已下线的主服务器设置为新的主服务器的从服务器因为旧的主服务器已经下线，所以这种设置是保存在server1对应的实例结构里面的，当server1重新上线时，Sentinel就会向它发送SLAVEOF命令，让它成为server2的从服务器。

### 集群

Redis集群是Redis提供的分布式数据库方案，集群通过分片（sharding）来进行数据共享，并提供复制和故障转移功能。

本节将对集群的节点、槽指派、命令执行、重新分片、转向、故障转移、消息等各个方面进行介绍。

节点

一个Redis集群通常由多个节点（node）组成，在刚开始的时候，每个节点都是相互独立的，它们都处于一个只包含自己的集群当中，要组建一个真正可工作的集群，我们必须将各个独立的节点连接起来，构成一个包含多个节点的集群。

连接各个节点的工作可以使用\`CLUSER MEET <ip> <port>\`命令来完成

跟一个节点发生CLUSER MEET命令可以让node节点与ip和port所指定的节点握手,当握手成功后node节点就会将ip和port所指定的节点添加到node节点所在的集群中.

启动节点

一个节点就是一个运行在集群模式下的Redis服务器，Redis服务器在启动时会根据cluster-enabled配置选项是否为yes来决定是否开启服务器的集群模式

节点会继续使用所有在单机模式中使用的服务器组件, 比如说会继续使用文件事件处理器来处理命令请求和返回命令请求...

集群数据结构

clusterNode结构保存了一个节点的当前状态,比如节点创建的时间,节点的名字,节点当前的配置纪元,节点的IP地址和端口号等,每个节点都会使用clusterNode结构来记录自己的状态,并为集群中的所有其他节点都创建一个相应的clusterNode结构,以此来记录其他节点的状态.
\`\`\`c
struct clusterNode {
    //创建节点的时间
    mstime_t ctime;
    //节点的名字，由40个十六进制字符组成
    //例如68eef66df23420a5862208ef5b1a7005b806f2ff
    char name[REDIS_CLUSTER_NAMELEN];
    //节点标识
    //使用各种不同的标识值记录节点的角色（比如主节点或者从节点），
    //以及节点目前所处的状态（比如在线或者下线）。
    int flags;
    //节点当前的配置纪元，用于实现故障转移
    uint64_t configEpoch;
    //节点的IP地址
    char ip[REDIS_IP_STR_LEN];
    //节点的端口号
    int port;
    //保存连接节点所需的有关信息
    clusterLink *link;
    // ...
};
\`\`\`
link属性对应的是clusterLink结构,该结构保存的其实是连接节点所需要的有关信息,比如socket描述符,输入缓冲区和输出缓冲区:
\`\`\`c
typedef struct clusterLink {
    //连接的创建时间
    mstime_t ctime;
    // TCP套接字描述符
    int fd;
    //输出缓冲区，保存着等待发送给其他节点的消息（message）。
    sds sndbuf;
    //输入缓冲区，保存着从其他节点接收到的消息。
    sds rcvbuf;
    //与这个连接相关联的节点，如果没有的话就为NULL
    struct clusterNode *node;
} clusterLink;
\`\`\`
redisClient和clusterLink结构都有自己的socket描述符,输入输出缓冲区,区别在于,redisClient的socket是连接客户端的,clusterLink的socket是连接集群节点的.

最后，每个节点都保存着一个clusterState结构，这个结构记录了在当前节点的视角下，集群目前所处的状态，例如集群是在线还是下线，集群包含多少个节点，集群当前的配置纪元，诸如此类
\`\`\`c
typedef struct clusterState {
    //指向当前节点的指针
    clusterNode *myself;
    //集群当前的配置纪元，用于实现故障转移
    uint64_t currentEpoch;
    //集群当前的状态：是在线还是下线
    int state;
    //集群中至少处理着一个槽的节点的数量
    int size;
    //集群节点名单（包括myself节点）
    //字典的键为节点的名字，字典的值为节点对应的clusterNode结构
    dict *nodes;
    // ...
} clusterState;
\`\`\`
CLUSTER MEET命令的实现

通过向节点A发送CLUSTER MEET命令，客户端可以让接收命令的节点A将另一个节点B添加到节点A当前所在的集群里面
1）节点A会为节点B创建一个clusterNode结构，并将该结构添加到自己的clusterState.nodes字典里面。
2）之后，节点A将根据CLUSTER MEET命令给定的IP地址和端口号，向节点B发送一条MEET消息（message）。
3）如果一切顺利，节点B将接收到节点A发送的MEET消息，节点B会为节点A创建一个clusterNode结构，并将该结构添加到自己的clusterState.nodes字典里面。
4）之后，节点B将向节点A返回一条PONG消息。
5）如果一切顺利，节点A将接收到节点B返回的PONG消息，通过这条PONG消息节点A可以知道节点B已经成功地接收到了自己发送的MEET消息。
6）之后，节点A将向节点B返回一条PING消息。
7）如果一切顺利，节点B将接收到节点A返回的PING消息，通过这条PING消息节点B可以知道节点A已经成功地接收到了自己返回的PONG消息，握手完成。

之后，节点A会将节点B的信息通过Gossip协议传播给集群中的其他节点，让其他节点也与节点B进行握手，最终，经过一段时间之后，节点B会被集群中的所有节点认识。

#### 槽指派

Redis集群通过分片的形式来保存redis数据库中的键值对,集群中整个数据库被分成16384个槽,数据库中的每个键都数据这些槽中的一个,集群中的每个节点可以处理0-16384个槽.

当数据库中的16384个槽都有节点处理时,集群处于上线状态,相反若有一个槽没有被处理,则整个集群是下线状态.

通过向节点发送\`CLUSTER ADDSLOTS\`命令，我们可以将一个或多个槽指派（assign）给节点负责.
\`\`\`c
CLUSTER ADDSLOTS <slot> [slot ...]
127.0.0.1:7000> CLUSTER ADDSLOTS 0 1 2 3 4 ... 5000
OK
127.0.0.1:7000> CLUSTER NODES
9dfb4c4e016e627d9769e4c9bb0d4fa208e65c26 127.0.0.1:7002 master - 0 1388316664849 0 connected
68eef66df23420a5862208ef5b1a7005b806f2ff 127.0.0.1:7001 master - 0 1388316665850 0 connected
51549e625cfda318ad27423a31e7476fe3cd2939 :0 myself,master - 0 0 0 connected 0-5000
// 为了让7000、7001、7002三个节点所在的集群进入上线状态，我们继续执行以下命令，将槽5001至槽10000指派给节点7001负责：
127.0.0.1:7001> CLUSTER ADDSLOTS 5001 5002 5003 5004 ... 10000
OK
127.0.0.1:7002> CLUSTER ADDSLOTS 10001 10002 10003 10004 ... 16383
OK
\`\`\`
数据库中的16384个槽都已经被指派给了相应的节点，集群进入上线状态

记录节点的槽指派信息

clusterNode结构的slots属性和numslot属性记录了节点负责处理哪些槽：
\`\`\`c
struct clusterNode {
    // ...
    unsigned char slots[16384/8];
    int numslots;
};
\`\`\`
如果slots数组在索引i上的二进制位的值为1，那么表示节点负责处理槽i。如果slots数组在索引i上的二进制位的值为0，那么表示节点不负责处理槽i。

至于numslots属性则记 录 节 点 负 责 处 理 的 槽 的 数 量 ， 也 即 是slots数组中值为1的二进制位的数量

传播节点的槽指派信息

一个节点除了将自己负责处理的槽记录在clusterNode结构的slots属性和numslots,它还会将自己的slots数组通过消息发送给集群中的其他节点，以此来告知其他节点自己目前负责处理哪些槽。

当节点A通过消息接收到了B的slots数组,节点A会从自己的clusterState.nodes字典中查找节点B对应的clusterNode结构,并对结构中的slots数组进行保存或更新.

因为集群中的节点都会将自己的slots数组通过消息发送给集群中的其他节点,并且每个接收到slots数组的节点都会将数组保存到相应节点的clusterNode结构中,因此，集群中的每个节点都会知道数据库中的16384个槽分别被指派给了集群中的哪些节点。

记录集群所有槽的指派信息

clusterState结构中的slots数组记录了集群中所有16384个槽的指派信息：
\`\`\`c
typedef struct clusterState {
    // ...
    clusterNode *slots[16384];
    // ...
} clusterState;
\`\`\`
slots 数 组 包 含 16384 个 项 ， 每 个 数 组 项 都 是 一 个 指 向clusterNode结构的指针：
- 如果slots[i]指针指向NULL，那么表示槽i尚未指派给任何节点。
- 如果slots[i]指针指向一个clusterNode结构，那么表示槽i已经指派给了clusterNode结构所代表的节点

如果只将槽指派信息保存在各个节点的clusterNode.slots数组里，会出现一些无法高效地解决的问题，而clusterState.slots数组的存在解决了这些问题

如果节点只使用clusterNode.slots数组来记录槽的指派信息，那么为了知道槽i是否已经被指派，或者槽i被指派给了哪个节点，程序需要遍历clusterState.nodes字典中的所有clusterNode结构，检查这些结构的slots数组，直到找到负责处理槽i的节点为止，这个过程的复 杂 度 为 O （ N ） ， 其 中 N 为 clusterState.nodes 字 典 保 存 的clusterNode结构的数量。

而通过将所有槽的指派信息保存在clusterState.slots数组里面，程序要检查槽i是否已经被指派，又或者取得负责处理槽i的节点，只需要访问clusterState.slots[i]的值即可，这个操作的复杂度仅为O（1）。

CLUSTER ADDSLOTS命令的实现

CLUSTER ADDSLOTS命令接受一个或多个槽作为参数，并将所有输入的槽指派给接收该命令的节点负责,若输入的槽有任何一个槽有节点,那么返回错误.

最后，在CLUSTER ADDSLOTS命令执行完毕之后，节点会通过发送消息告知集群中的其他节点，自己目前正在负责处理哪些槽。

#### 在集群中执行命令

在对数据库中的16384个槽都进行了指派之后，集群就会进入上线状态，这时客户端就可以向集群中的节点发送数据命令了。当客户端向节点发送与数据库键有关的命令时，接收命令的节点会计算出命令要处理的数据库键属于哪个槽，并检查这个槽是否指派给了自己：
- 如果键所在的槽正好就指派给了当前节点，那么节点直接执行这个命令。
- 如果键所在的槽并没有指派给当前节点，那么节点会向客户端返回一个MOVED错误，指引客户端转向（redirect）至正确的节点，并再次发送之前想要执行的命令。

计算键属于哪个槽

节点使用以下算法来计算给定键key属于哪个槽：
\`\`\`py
def slot_number(key):
return CRC16(key) & 16383
\`\`\`
其中CRC16（key）语句用于计算键key的CRC-16校验和，而&16383语句则用于计算出一个介于0至16383之间的整数作为键key的槽号。

使用\`CLUSTER KEYSLOT <key>\`命令可以查看一个给定键属于哪个槽：
\`\`\`c
127.0.0.1:7000> CLUSTER KEYSLOT "date"
(integer) 2022
127.0.0.1:7000> CLUSTER KEYSLOT "msg"
(integer) 6257
\`\`\`

判断槽是否由当前节点负责处理

当节点计算出键所属的槽i之后，节点就会检查自己在clusterState.slots数组中的项i，判断键所在的槽是否由自己负责

MOVED错误

当节点发现键所在的槽并非由自己负责处理的时候，节点就会向客户端返回一个MOVED错误，指引客户端转向至正在负责槽的节点。
\`\`\`c
MOVED <slot> <ip>:<port>
\`\`\`
一个客户端通常会与集群中多个节点建立socket连接,而所谓的节点转向实际上就是换一个socket来发送命令

如果客户端还没有与想要转向的节点建立socket连接,那么客户端会先根据MOVED错误提供的IP地址和端口号来建立连接,再进行转向.

集群模式的redis-cli客户端在接收到MOVED错误时，并不会打印出MOVED错误，而是根据MOVED错误自动进行节点转向，并打印出转向信息，所以我们是看不见节点返回的MOVED错误的.

#####  节点数据库的实现
集群节点保存键值对以及键值对的过期方式与Redis单机保存键值对过期时间的方式完全相同.

不同的是,节点只能使用0号数据库

另外，除了将键值对保存在数据库里面之外，节点还会用clusterState结构中的slots_to_keys跳跃表来保存槽和键之间的关系

### 重新分片

Redis集群的重新分片操作可以将任意数量已经指派给某个节点的槽指派给另一个节点,并且相关槽所属的键值对也会从源节点被移动到目标节点.

重新分片操作可以在线进行,在重新分片过程中,集群不需要下线,而且源节点和目标节点都可以继续处理命令请求.

重新分片的实现原理

Redis集群的重新分片操作其实是由edis的集群管理软件redis-trib负责执行的，Redis提供了进行重新分片所需的所有命令，而redis-trib则通过向源节点和目标节点发送命令来进行重新分片操作。

redis-trib对集群的单个槽slot进行重新分片的步骤如下：

1. 对目标节点发送\`CLUSTER SETSLOT<slot>IMPORTING<source_id>命令\`让目标节点准备好从源节点导入属于槽的键值对
2. redis-trib 对 源 节 点 发 送 \`CLUSTER SETSLOT<slot>MIGRATING<target_id>\`命令，让源节点准备好将属于槽slot的键值对迁移（migrate）至目标节点。
3. redis-trib向源节点发送\`CLUSTER GETKEYSINSLOT<slot><count>\`命令，获得最多count个属于槽slot的键值对的键名（key name）。
4. 对于步骤3获得的每个键名，redis-trib都向源节点发送一个\`MIGRATE<target_ip><target_port><key_name>0<timeout>\`命令，将被选中的键原子地从源节点迁移至目标节点。
5. 重复3-4直到所有的键值对被迁移完毕
6. redis-trib 向 集 群 中 的 任 意 一 个 节 点 发 送 \`CLUSTERSETSLOT<slot>NODE<target_id>\`命令，将槽slot指派给目标节点，这一指派信息会通过消息发送至整个集群，最终集群中的所有节点都会知槽slot已经指派给了目标节点。

### ASK错误

在进行重新分片期间，源节点向目标节点迁移一个槽的过程中，可能会出现这样一种情况：属于被迁移槽的一部分键值对保存在源节点里面，而另一部分键值对则保存在目标节点里面。

当客户端向源节点发送一个与数据库键有关的命令，并且命令要处理的数据库键恰好就属于正在被迁移的槽时, 源节点会优先从自己的数据库里查找键,如果找到的话,直接执行客户端发送的命令,相反如果源节点没能在自己的数据库里找到,就可能已经迁移至目标节点,源节点就向客户端返回一个ASK错误,指引客户端转向正在导入槽的目标节点,并且再次发送之前想要发送的命令

和接到MOVED错误时的情况类似，集群模式的redis-cli在接到ASK错误时也不会打印错误，而是自动根据错误提供的IP地址和端口进行转向动作。如果想看到节点发送的ASK错误的话，可以使用单机模式的redis-cli客户端


CLUSTER SETSLOT IMPORTING命令的实现

clusterState结构的importing_slots_from数组记录了当前节点正在从其他节点导入的槽：

如 果 importing_slots_from[i] 的 值 不 为 NULL ， 而 是 指 向 一 个clusterNode结构，那么表示当前节点正在从clusterNode所代表的节点导入槽i。

在对集群进行重新分片的时候，向目标节点发送命令：
\`\`\`
CLUSTER SETSLOT <i> IMPORTING <source_id>
\`\`\`
可以将目标节点clusterState.importing_slots_from[i]的值设置为source_id所代表节点的clusterNode结构。

CLUSTER SETSLOT MIGRATING命令的实现

clusterState结构的migrating_slots_to数组记录了当前节点正在迁移至其他节点的槽

如 果 migrating_slots_to[i] 的 值 不 为 NULL ， 而 是 指 向 一 个clusterNode结构，那么表示当前节点正在将槽i迁移至clusterNode所代表的节点。在对集群进行重新分片的时候，向源节点发送命令
\`\`\`
CLUSTER SETSLOT <i> MIGRATING <target_id>
\`\`\`

ASK错误

如果节点收到一个键key的命令请求,并且键key所属的槽i正好指派给了当前节点,那么就尝试从节点自己的数据库里查找key,如果找到了节点就直接执行客户端发送的命令.

与此相反，如果节点没有在自己的数据库里找到键key，那么节点会检查自己的clusterState.migrating_slots_to[i]，看键key所属的槽i是否正在进行迁移，如果槽i的确在进行迁移的话，那么节点会向客户端发送一个ASK错误，引导客户端到正在导入槽i的节点去查找键key。

ASKING命令

在一般情况下，如果客户端向节点发送一个关于槽i的命令，而槽i又没有指派给这个节点的话，那么节点将向客户端返回一个MOVED错误；但是，如果节点的clusterState.importing_slots_from[i]显示节点正在导入槽i，并且发送命令的客户端带有REDIS_ASKING标识，那么节点将破例执行这个关于槽i的命令一次。

### 复制与故障转移
Redis集群中的节点分为主节点（master）和从节点（slave），其中主节点用于处理槽，而从节点则用于复制某个主节点，并在被复制的主节点下线时，代替下线主节点继续处理命令请求。

这时如果一个主节点下线,那么集群仍在正常工作的几个节点将从其从节点中选择选举出一个新节点作为新的主节点,这个新节点将接管原来节点处理的槽,并继续处理客户端的命令请求, 并且原主机的从主机也会改为复制新主机.

此时如果原主节点重新上线,它也会成为新节点的从节点.

设置从节点

向一个节点发送命令：\`CLUSTER REPLICATE <node_id>\`

可以让接收命令的节点成为node_id所指定节点的从节点，并开始对主节点进行复制

接收到该命令的节点首先会在自己的clusterState.nodes字典中找到node_id 所 对 应 节 点 的 clusterNode 结 构 ， 并 将 自 己 的clusterState.myself.slaveof指针指向这个结构，以此来记录这个节点正在复制的主节点

然后节点会修改自己在clusterState.myself.flags中的属性，关闭原本的REDIS_NODE_MASTER标识，打开REDIS_NODE_SLAVE标识，表示这个节点已经由原来的主节点变成了从节点。

最后节点会调用复制代码,对指定节点进行复制.

故障检测

集群中每个节点会定期向集群中的其他节点发送PING消息,监测对方是否在线,如果接收PING的节点没有在规定时间内返回PONG,那么发送PING消息的节点就会将接收PING消息的节点标记为疑似下线（probablefail，PFAIL）.

集群中的各个节点会通过相互发送消息来交换集群中各个节点的消息,例如某个节点是否处于在线状态,疑似下线状态（PFAIL），还是已下线状态（FAIL）。

当一个主节点A通过消息得知主节点B认为主节点C进入了疑似下线状态时，主节点A会在自己的clusterState.nodes字典中找到主节点C所对应的clusterNode结构，并将主节点B的下线报告（failurereport）添加到clusterNode结构的fail_reports链表里面

如果一个集群中半数以上负责槽的主节点都将节点x报告为疑似下线,那么这个主节点将x节点标记为下线,并且将x下线的消息向集群广播,所有收到这条FAIL消息的节点都会立即将主节点x标记为已下线。

故障转移

当一个从节点发现自己正在复制的主节点进入了已下线状态时，从节点将开始对下线主节点进行故障转移，以下是故障转移的执行步骤

1）复制下线主节点的所有从节点里面，会有一个从节点被选中。点。
3）新的主节点会撤销所有对已下线主节点的槽指派，并将这些槽全部指派给自己。
4）新的主节点向集群广播一条PONG消息，这条PONG消息可以让集群中的其他节点立即知道这个节点已经由从节点变成了主节点，并且这个主节点已经接管了原本由已下线节点负责处理的槽。
5）新的主节点开始接收和自己负责处理的槽有关的命令请求，故障转移完成。

选举新的主节点

新的主节点是通过选举产生的。

1）集群的配置纪元是一个自增计数器，它的初始值为0。
2）当集群里的某个节点开始一次故障转移操作时，集群配置纪元的值会被增一。
3）对于每个配置纪元，集群里每个负责处理槽的主节点都有一次投票的机会，而第一个向主节点要求投票的从节点将获得主节点的投票。
4）当从节点发现自己正在复制的主节点进入已下线状态时，从节点会向集群广播一条CLUSTERMSG_TYPE_FAILOVER_AUTH_REQUEST消息，要求所有收到这条消息、并且具有投票权的主节点向这个从节点投票。
5）如果一个主节点具有投票权（它正在负责处理槽），并且这个主节点尚未投票给其他从节点，那么主节点将向要求投票的从节点返回一条CLUSTERMSG_TYPE_FAILOVER_AUTH_ACK消息，表示这个主节点支持从节点成为新的主节点。
6 ） 每 个 参 与 选 举 的 从 节 点 都 会 接 收CLUSTERMSG_TYPE_FAILOVER_AUTH_ACK消息，并根据自己收到了多少条这种消息来统计自己获得了多少主节点的支持。
7）如果集群里有N个具有投票权的主节点，那么当一个从节点收集到大于等于N/2+1张支持票时，这个从节点就会当选为新的主节点。
8）因为在每一个配置纪元里面，每个具有投票权的主节点只能投一次票，所以如果有N个主节点进行投票，那么具有大于等于N/2+1张支持票的从节点只会有一个，这确保了新的主节点只会有一个。
9）如果在一个配置纪元里面没有从节点能收集到足够多的支持票，那么集群进入一个新的配置纪元，并再次进行选举，直到选出新的主节点为止。这个选举新主节点的方法和第16章介绍的选举领头Sentinel的方法非常相 似，因为两者都是基于Raft算法的领头选举leade relection）方法来实现的。

### 消息

集群中的各个节点通过发送和接收消息（message）来进行通信，我们称发送消息的节点为发送者（sender），接收消息的节点为接收者（receiver）

节点发送的消息主要有以下五种：

- MEET消息：当发送者接到客户端发送的CLUSTER MEET命令时，发送者会向接收者发送MEET消息，请求接收者加入到发送者当前所处的集群里面。
- PING消息：集群里的每个节点默认每隔一秒钟就会从已知节点列表中随机选出五个节点，然后对这五个节点中最长时间没有发送过PING消息的节点发送PING消息，以此来检测被选中的节点是否在线。
- PONG消息：当接收者收到发送者发来的MEET消息或者PING消息时，为了向发送者确认这条MEET消息或者PING消息已到达，接收者会向发送者返回一条PONG消息。
- FAIL消息：当一个主节点A判断另一个主节点B已经进入FAIL状态时，节点A会向集群广播一条关于节点B的FAIL消息，所有收到这条消息的节点都会立即将节点B标记为已下线。
- PUBLISH消息：当节点接收到一个PUBLISH命令时，节点会执行这 个 命 令 ， 并 向 集 群 广 播 一 条 PUBLISH 消 息 ， 所 有 接 收 到 这 条PUBLISH消息的节点都会执行相同的PUBLISH命令。

一条消息由消息头（header）和消息正文（data）组成，接下来的内容将首先介绍消息头，然后再分别介绍上面提到的五种不同类型的消息正文。

#### 消息头
节点发送的所有消息都由一个消息头包裹，消息头除了包含消息正文之外，还记录了消息发送者自身的一些信息，因为这些信息也会被消息接收者用到，所以严格来讲，我们可以认为消息头本身也是消息的一部分。

\`\`\`c
typedef struct {
    //消息的长度（包括这个消息头的长度和消息正文的长度）
    uint32_t totlen;
    //消息的类型
    uint16_t type;
    //消息正文包含的节点信息数量
    //只在发送MEET PING PONG 这三种Gossip 协议消息时使用
    uint16_t count;
    //发送者所处的配置纪元
    uint64_t currentEpoch;
    //如果发送者是一个主节点，那么这里记录的是发送者的配置纪元
    // 如果发送者是一个从节点，那么这里记录的是发送者正在复制的主节点的配置纪元
    uint64_t configEpoch;
    //发送者的名字（ID）
    char sender[REDIS_CLUSTER_NAMELEN];
    //发送者目前的槽指派信息
    unsigned char myslots[REDIS_CLUSTER_SLOTS/8];
    //如果发送者是一个从节点，那么这里记录的是发送者正在复制的主节点的名字
    //如果发送者是一个主节点，那么这里记录的是REDIS_NODE_NULL_NAME
    //（一个40字节长，值全为0的字节数组）
    char slaveof[REDIS_CLUSTER_NAMELEN];
    //发送者的端口号
    uint16_t port;
    //发送者的标识值
    uint16_t flags;
    //发送者所处集群的状态
    unsigned char state;
    //消息的正文（或者说，内容）
    union clusterMsgData data;
} clusterMsg;
\`\`\`
clusterMsg.data属性指向联合cluster.h/clusterMsgData，这个联合就是消息的正文：
\`\`\`c
union clusterMsgData {
    // MEET、PING、PONG消息的正文
    struct {
        //每条MEET、PING、PONG消息都包含两个
        // clusterMsgDataGossip结构
        clusterMsgDataGossip gossip[1];
    } ping;
    // FAIL消息的正文
    struct {
        clusterMsgDataFail about;
    } fail;
    // PUBLISH消息的正文
    struct {
        clusterMsgDataPublish msg;
    } publish;
    //其他消息的正文...
};
\`\`\`

MEET、PING、PONG消息的实现

Redis集群中的各个节点通过Gossip协议来交换各自关于不同节点的状态信息，其中Gossip协议由MEET、PING、PONG三种消息实现，这三种消息的正文都由两个cluster.h/clusterMsgDataGossip结构组成：
\`\`\`c
union clusterMsgData {
// ...
// MEET、PING和PONG消息的正文
struct {
//每条MEET、PING、PONG消息都包含两个
// clusterMsgDataGossip结构
clusterMsgDataGossip gossip[1];
} ping;
//其他消息的正文...
};
\`\`\`
当接收者收到MEET、PING、PONG消息时，接收者会访问消息正文中的两个clusterMsgDataGossip结构，并根据自己是否认识clusterMsgDataGossip结构中记录的被选中节点来选择进行哪种操作：
- 如果被选中节点不存在于接收者的已知节点列表，那么说明接收者是第一次接触到被选中节点，接收者将根据结构中记录的IP地址和端口号等信息，与被选中节点进行握手。
- 如果被选中节点已经存在于接收者的已知节点列表，那么说明接收者之前已经与被选中节点进行过接触，接收者将根据clusterMsgDataGossip结构记录的信息，对被选中节点所对应的clusterNode结构进行更新。

举个发送PING消息和返回PONG消息的例子，假设在一个包含A、B、C、D、E、F六个节点的集群里：
·节点A向节点D发送PING消息，并且消息里面包含了节点B和节点C的信息，当节点D收到这条PING消息时，它将更新自己对节点B和节点C的认识。
·之后，节点D将向节点A返回一条PONG消息，并且消息里面包含了节点E和节点F的消息，当节点A收到这条PONG消息时，它将更新自己对节点E和节点F的认识。

FAIL消息的实现

当集群里的主节点A将主节点B标记为已下线（FAIL）时，主节点A将向集群广播一条关于主节点B的FAIL消息，所有接收到这条FAIL消息的节点都会将主节点B标记为已下线。

在集群的节点数量比较大的情况下，单纯使用Gossip协议来传播节点的已下线信息会给节点的信息更新带来一定延迟，因为Gossip协议消息通常需要一段时间才能传播至整个集群，而发送FAIL消息可以让集群里的所有节点立即知道某个主节点已下线，从而尽快判断是否需要将集群标记为下线，又或者对下线主节点进行故障转移。

FAIL消息的正文由cluster.h/clusterMsgDataFail结构表示，这个结构只包含一个nodename属性，该属性记录了已下线节点的名字：
\`\`\`c
typedef struct {
    char nodename[REDIS_CLUSTER_NAMELEN];
} clusterMsgDataFail;
\`\`\`
因为集群里的所有节点都有一个独一无二的名字，所以FAIL消息里面只需要保存下线节点的名字，接收到消息的节点就可以根据这个名字来判断是哪个节点下线了。

PUBLISH消息的实现

当客户端向集群中的某个节点发送命令：
\`\`\`c
PUBLISH <channel> <message>
\`\`\`
的时候,接收到PUBLISH命令的节点不仅会向channel频道发送消息message，它还会向集群广播一条PUBLISH消息，所有接收到这条PUBLISH消息的节点都会向channel频道发送message消息, 将导致集群中的所有节点都向channel频道发送message消息。

PUBLISH消息的正文由cluster.h/clusterMsgDataPublish结构表示：
\`\`\`c
typedef struct {
    uint32_t channel_len;
    uint32_t message_len;
    //定义为8字节只是为了对齐其他消息结构
    //实际的长度由保存的内容决定
    unsigned char bulk_data[8];
} clusterMsgDataPublish;
\`\`\`

clusterMsgDataPublish 结 构 的 bulk_data 属 性 是 一 个 字 节 数组 ， 这 个 字 节 数 组 保 存 了 客 户 端 通 过 PUBLISH 命 令 发 送 给 节 点 的channel 参 数 和 message 参 数 ， 而结 构 的 channel_len 和message_len则分别保存了channel参数的长度和message参数的长度


### Redis分布式锁问题
Redis是如何实现分布式锁的?

Redis本身可以被多个客户端访问,所以恰好是一个共享存储系统,可以来保存分布式锁,而且redis的读写性能很高,足够应付高并发场景了.

Redis的SET命令有个NX参数可以实现在key不存在时插入,所以可以用它实现分布式锁:
1. key不存在,则直接插入成功
2. key存在则插入失败

我们可以看到命令是这样的
\`\`\`
SET lock_key unique_value NX 
expire lock_key px 10000

SET lock_key unique_value NX PX 10000
\`\`\`
选择下面一种,因为可能刚设置了锁,第二步的expire设置过期时间就失败了,所以必须合并到一步,采用第二种方式
- lock_key 就是 key 键；
- unique_value 是客户端生成的唯一的标识，区分来自不同客户端的锁操作；
- NX 代表只在 lock_key 不存在时，才对 lock_key 进行设置操作；
- PX 10000 表示设置 lock_key 的过期时间为 10s，这是为了避免客户端发生异常而无法释放锁。

那么解锁呢?解锁需要1. 保证解锁的客户端是持有锁的客户端 2. 删除锁
所以需要LUA脚本支持

\`\`\`lua
// 释放锁时，先比较 unique_value 是否相等，避免锁的误释放
if redis.call("get",KEYS[1]) == ARGV[1] then
    return redis.call("del",KEYS[1])
else
    return 0
end
\`\`\`

基于 Redis 实现分布式锁有什么优缺点？
基于 Redis 实现分布式锁的优点：

    性能高效（这是选择缓存实现分布式锁最核心的出发点）。
    实现方便。很多研发工程师选择使用 Redis 来实现分布式锁，很大成分上是因为 Redis 提供了 setnx 方法，实现分布式锁很方便。
    避免单点故障（因为 Redis 是跨集群部署的，自然就避免了单点故障）。

基于 Redis 实现分布式锁的缺点：

    超时时间不好设置。如果锁的超时时间设置过长，会影响性能，如果设置的超时时间过短会保护不到共享资源。比如在有些场景中，一个线程 A 获取到了锁之后，由于业务代码执行时间可能比较长，导致超过了锁的超时时间，自动失效，注意 A 线程没执行完，后续线程 B 又意外的持有了锁，意味着可以操作共享资源，那么两个线程之间的共享资源就没办法进行保护了。
        那么如何合理设置超时时间呢？ 我们可以基于续约的方式设置超时时间：先给锁设置一个超时时间，然后启动一个守护线程，让守护线程在一段时间后，重新设置这个锁的超时时间。实现方式就是：写一个守护线程，然后去判断锁的情况，当锁快失效的时候，再次进行续约加锁，当主线程执行完成后，销毁续约锁即可，不过这种方式实现起来相对复杂。

    Redis 主从复制模式中的数据是异步复制的，这样导致分布式锁的不可靠性。如果在 Redis 主节点获取到锁后，在没有同步到其他节点时，Redis 主节点宕机了，此时新的 Redis 主节点依然可以获取锁，所以多个应用服务就可以同时获取到锁。

#### Redis 如何解决集群情况下分布式锁的可靠性？

Redis 官方已经设计了一个分布式锁算法 Redlock（红锁）。

它是基于多个 Redis 节点的分布式锁，即使有节点发生了故障，锁变量仍然是存在的，客户端还是可以完成锁操作。

Redlock 算法的基本思路，是让客户端和多个独立的 Redis 节点依次请求申请加锁，如果客户端能够和半数以上的节点成功地完成加锁操作，那么我们就认为，客户端成功地获得分布式锁，否则加锁失败。

Redlock 算法加锁三个过程：

    第一步是，客户端获取当前时间。

    第二步是，客户端按顺序依次向 N 个 Redis 节点执行加锁操作：
        加锁操作使用 SET 命令，带上 NX，EX/PX 选项，以及带上客户端的唯一标识。
        如果某个 Redis 节点发生故障了，为了保证在这种情况下，Redlock 算法能够继续运行，我们需要给「加锁操作」设置一个超时时间（不是对「锁」设置超时时间，而是对「加锁操作」设置超时时间）。

    第三步是，一旦客户端完成了和所有 Redis 节点的加锁操作，客户端就要计算整个加锁过程的总耗时（t1）。

加锁成功要同时满足两个条件（简述：如果有超过半数的 Redis 节点成功的获取到了锁，并且总耗时没有超过锁的有效时间，那么就是加锁成功）：

    条件一：客户端从超过半数（大于等于 N/2+1）的 Redis 节点上成功获取到了锁；
    条件二：客户端获取锁的总耗时（t1）没有超过锁的有效时间。

加锁成功后，客户端需要重新计算这把锁的有效时间，计算的结果是「锁的最初有效时间」减去「客户端为获取锁的总耗时（t1）」。

加锁失败后，客户端向所有 Redis 节点发起释放锁的操作，释放锁的操作和在单节点上释放锁的操作一样，只要执行释放锁的 Lua 脚本就可以了。 -->`,r:{minutes:127.8,words:38341},y:"a",t:"Redis笔记",i:"edit"},["/posts/program/redis/note/redis-note","/posts/program/redis/note/redis-note.md"]],["v-29af940e","/posts/program/golang/tool/gin/gin-framework-principle.html",{d:1639872e6,l:"2021年12月19日",c:["tutorial"],g:["gin"],o:!0,e:`<h1> Gin 框架深度剖析</h1>
<p>Gin框架是一款高性能的Go Web框架,本文以一个小案例为例,从源码角度分析Gin的启动过程,请求与相应的技术原理.</p>
<p>我们怎么开始Gin呢?很简单,以下代码就可以开始开启Gin的Web服务了</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// init gin with default configs</span>
	r <span class="token operator">:=</span> gin<span class="token punctuation">.</span><span class="token function">Default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  r<span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token char">'/hello'</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span>   <span class="token string">"Hello"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token comment">// run the engine</span>
	r<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.5,words:3751},y:"a",t:"Gin 框架深度剖析",i:"edit"},["/posts/program/golang/tool/gin/gin-framework-principle","/posts/program/golang/tool/gin/gin-framework-principle.md"]],["v-4427ea5b","/posts/program/golang/tool/grpc/1.html",{d:16798752e5,l:"2023年3月27日",c:["tutorial"],g:["golang","grpc"],o:!0,e:`<h1> GRPC教程 1- Go语言原生RPC原理</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>本篇文章介绍一下RPC的概念以及在Go语言如何使用标准库中的RPC.</p>
<p>RPC是全称叫Remote Procedure Call，远程过程调用，它允许像调用本地服务一样去调用远程服务，相对应的就是本地调用。</p>
</div>
<p>本地调用的例子:</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">"fmt"</span>
	<span class="token string">"os"</span>
	<span class="token string">"time"</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Args <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	A <span class="token builtin">int</span>
	B <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Add</span><span class="token punctuation">(</span>args <span class="token operator">*</span>Args<span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> args<span class="token punctuation">.</span>A <span class="token operator">+</span> args<span class="token punctuation">.</span>B 
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">Getpid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Args<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.49,words:447},y:"a",t:"GRPC教程 1- Go语言原生RPC原理",i:"edit"},["/posts/program/golang/tool/grpc/1","/posts/program/golang/tool/grpc/1.md"]],["v-45dcc2fa","/posts/program/golang/tool/grpc/2.html",{d:16799616e5,l:"2023年3月28日",c:["tutorial"],g:["golang","grpc"],o:!0,e:`<h1> GRPC教程 2- gRPC下载以及入门gRPC</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>本篇文章我们开始学习gRPC，我们之前学到了RPC(远程过程调用)，那么gRPC是什么呢？gRPC是Google开源的现代高性能RPC框架，能够运行在任何环境中，使用HTTP2作为传输协议。</p>
<p>gRPC与RPC一样，可以像调用本地方法一样去调用另一个进程上的服务，这可以帮助你很轻松的创建微服务程序。gRPC只是定义类型和远程服务带有的参数和返回类型，我们需要在gRPC服务端程序中定义服务的逻辑，在客户端调用和服务器端相同的方法。</p>
</div>`,r:{minutes:3,words:900},y:"a",t:"GRPC教程 2- gRPC下载以及入门gRPC",i:"edit"},["/posts/program/golang/tool/grpc/2","/posts/program/golang/tool/grpc/2.md"]],["v-47919b99","/posts/program/golang/tool/grpc/3.html",{d:1680048e6,l:"2023年3月29日",c:["tutorial"],g:["golang","grpc"],o:!0,e:`<h1> GRPC教程 3- 流式GRPC与错误处理</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<ul>
<li>解决vscode中，一个目录下多个mod文件的问题，怎么解决呢？
如何 在一个目录下正常的有多个.mod 文件</li>
</ul>
<p>使用 go work init 命令</p>
</div>
<p>本篇文章开始，我们将要开始学习流式GRPC与GRPC的错误处理</p>
<h2> 流式GRPC</h2>
<p>什么是流式GRPC呢？</p>
<p>和之前我们写的普通的RPC服务写入直接返回不同，流式GRPC允许我们在一个RPC请求中建立一个Stream(流)，客户端和服务器端都可以向这个流中写入数据，当客户端写入数据时，服务器端只需要不断监听这个流就可以不断获取客户端发送的消息，直到关闭。</p>`,r:{minutes:7.04,words:2112},y:"a",t:"GRPC教程 3- 流式GRPC与错误处理",i:"edit"},["/posts/program/golang/tool/grpc/3","/posts/program/golang/tool/grpc/3.md"]],["v-49467438","/posts/program/golang/tool/grpc/4.html",{d:16801344e5,l:"2023年3月30日",c:["tutorial"],g:["golang","grpc"],o:!0,e:`<h1> GRPC教程 4 - GRPC-Gateway教程与Transcoding</h1>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>GRPC-Gateway是protoc的一个插件，类似protoc-gen-go和protoc-gen-go-grpc插件，前者是生成.pb.go后者是生成.grpc.pb.go文件。</p>
</div>
<p>那么这两个插件是帮助proto文件生成go语言的插件，那么GRPC-Gateway呢，它是一个可以根据proto文件的定义生成一个反向代理器的，服务器可以将 RESTful JSON API 转换为 GRPC。</p>`,r:{minutes:4.32,words:1295},y:"a",t:"GRPC教程 4 - GRPC-Gateway教程与Transcoding",i:"edit"},["/posts/program/golang/tool/grpc/4","/posts/program/golang/tool/grpc/4.md"]],["v-3706649a","/404.html",{y:"p",t:""},["/404"]],["v-69a86107","/posts/econonics/",{y:"p",t:"Econonics"},["/posts/econonics/index.html"]],["v-e1e3da16","/posts/",{y:"p",t:"Posts"},["/posts/index.html"]],["v-4ba4912a","/posts/thinking/",{y:"p",t:"Thinking"},["/posts/thinking/index.html"]],["v-41ad8c23","/posts/program/betxin/",{y:"p",t:"Betxin"},["/posts/program/betxin/index.html"]],["v-1aaf0020","/posts/program/",{y:"p",t:"Program"},["/posts/program/index.html"]],["v-88d61c22","/posts/program/docker/",{y:"p",t:"Docker"},["/posts/program/docker/index.html"]],["v-85603d8c","/posts/program/c/get-start-with-c-tcp-program/",{y:"p",t:"Get Start with C Tcp Program"},["/posts/program/c/get-start-with-c-tcp-program/index.html"]],["v-2aef844c","/posts/program/c/",{y:"p",t:"C"},["/posts/program/c/index.html"]],["v-ec092336","/posts/program/golang/currency/",{y:"p",t:"Currency"},["/posts/program/golang/currency/index.html"]],["v-5ac20bf9","/posts/program/golang/",{y:"p",t:"Golang"},["/posts/program/golang/index.html"]],["v-fb37af2c","/posts/program/golang/deep/",{y:"p",t:"Deep"},["/posts/program/golang/deep/index.html"]],["v-f9877410","/posts/program/golang/sort/",{y:"p",t:"Sort"},["/posts/program/golang/sort/index.html"]],["v-5aa12436","/posts/program/golang/std/",{y:"p",t:"Std"},["/posts/program/golang/std/index.html"]],["v-2897b160","/posts/program/leetcode/leetcode/",{y:"p",t:"Leetcode"},["/posts/program/leetcode/leetcode/index.html"]],["v-368344da","/posts/program/leetcode/",{y:"p",t:"Leetcode"},["/posts/program/leetcode/index.html"]],["v-f96b5d84","/posts/program/golang/tool/",{y:"p",t:"Tool"},["/posts/program/golang/tool/index.html"]],["v-01742aa6","/posts/program/leetcode/offer/",{y:"p",t:"Offer"},["/posts/program/leetcode/offer/index.html"]],["v-7dc9dfbb","/posts/program/mysql/notes/",{y:"p",t:"Notes"},["/posts/program/mysql/notes/index.html"]],["v-7915bbed","/posts/program/mysql/",{y:"p",t:"Mysql"},["/posts/program/mysql/index.html"]],["v-2d1aaa94","/posts/program/redis/cache-consistency/",{y:"p",t:"Cache Consistency"},["/posts/program/redis/cache-consistency/index.html"]],["v-ff059b98","/posts/program/redis/",{y:"p",t:"Redis"},["/posts/program/redis/index.html"]],["v-561f115c","/posts/program/redis/datastruct/",{y:"p",t:"Datastruct"},["/posts/program/redis/datastruct/index.html"]],["v-121f466e","/posts/program/redis/note/",{y:"p",t:"Note"},["/posts/program/redis/note/index.html"]],["v-4753ec21","/posts/program/golang/tool/gin/",{y:"p",t:"Gin"},["/posts/program/golang/tool/gin/index.html"]],["v-b9a4855a","/posts/program/golang/tool/grpc/",{y:"p",t:"Grpc"},["/posts/program/golang/tool/grpc/index.html"]],["v-5bc93818","/category/",{y:"p",t:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",t:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",t:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",t:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",t:"时间轴"},["/timeline/index.html"]],["v-70677d9e","/category/years/",{y:"p",t:"years 分类"},["/category/years/index.html"]],["v-c06a95c0","/tag/econonics/",{y:"p",t:"econonics 标签"},["/tag/econonics/index.html"]],["v-b6a4f932","/category/thinking/",{y:"p",t:"thinking 分类"},["/category/thinking/index.html"]],["v-0d1f4c3c","/tag/redis/",{y:"p",t:"redis 标签"},["/tag/redis/index.html"]],["v-7b0b3a14","/category/value/",{y:"p",t:"value 分类"},["/category/value/index.html"]],["v-606be265","/tag/consistency/",{y:"p",t:"consistency 标签"},["/tag/consistency/index.html"]],["v-1c5eedbf","/category/privacy/",{y:"p",t:"privacy 分类"},["/category/privacy/index.html"]],["v-2b6a541e","/tag/thinking/",{y:"p",t:"thinking 标签"},["/tag/thinking/index.html"]],["v-58c21dea","/category/time/",{y:"p",t:"time 分类"},["/category/time/index.html"]],["v-49627fe2","/tag/network/",{y:"p",t:"network 标签"},["/tag/network/index.html"]],["v-9cc57efa","/category/learn/",{y:"p",t:"learn 分类"},["/category/learn/index.html"]],["v-574eed66","/tag/blockchain/",{y:"p",t:"blockchain 标签"},["/tag/blockchain/index.html"]],["v-b93724ec","/category/develop/",{y:"p",t:"develop 分类"},["/category/develop/index.html"]],["v-2bdb1026","/tag/thinging/",{y:"p",t:"thinging 标签"},["/tag/thinging/index.html"]],["v-65f5031c","/category/run/",{y:"p",t:"run 分类"},["/category/run/index.html"]],["v-d293f072","/tag/white-noise/",{y:"p",t:"white-noise 标签"},["/tag/white-noise/index.html"]],["v-721aed2b","/category/betxin/",{y:"p",t:"betxin 分类"},["/category/betxin/index.html"]],["v-1c5f3310","/tag/music/",{y:"p",t:"music 标签"},["/tag/music/index.html"]],["v-3318a379","/category/tutorial/",{y:"p",t:"tutorial 分类"},["/category/tutorial/index.html"]],["v-69787d8a","/tag/secure/",{y:"p",t:"secure 标签"},["/tag/secure/index.html"]],["v-e348c378","/category/c/",{y:"p",t:"c 分类"},["/category/c/index.html"]],["v-000f2cac","/tag/value/",{y:"p",t:"value 标签"},["/tag/value/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",t:"linux 分类"},["/category/linux/index.html"]],["v-47e821f5","/tag/privacy/",{y:"p",t:"privacy 标签"},["/tag/privacy/index.html"]],["v-e9a125fe","/category/golang/",{y:"p",t:"golang 分类"},["/category/golang/index.html"]],["v-29324574","/tag/time/",{y:"p",t:"time 标签"},["/tag/time/index.html"]],["v-80e9ca34","/category/record/",{y:"p",t:"record 分类"},["/category/record/index.html"]],["v-59ca63e7","/tag/imagine/",{y:"p",t:"imagine 标签"},["/tag/imagine/index.html"]],["v-3d0b43bb","/tag/wechat/",{y:"p",t:"wechat 标签"},["/tag/wechat/index.html"]],["v-219beb8e","/tag/learn/",{y:"p",t:"learn 标签"},["/tag/learn/index.html"]],["v-6224bc80","/tag/develop/",{y:"p",t:"develop 标签"},["/tag/develop/index.html"]],["v-b3067b5c","/tag/run/",{y:"p",t:"run 标签"},["/tag/run/index.html"]],["v-40b79b1b","/tag/long-termism/",{y:"p",t:"long_termism 标签"},["/tag/long-termism/index.html"]],["v-318ed680","/tag/internet/",{y:"p",t:"internet 标签"},["/tag/internet/index.html"]],["v-53f6d684","/tag/future/",{y:"p",t:"future 标签"},["/tag/future/index.html"]],["v-17bd7e0b","/tag/betxin-rules/",{y:"p",t:"betxin-rules 标签"},["/tag/betxin-rules/index.html"]],["v-6106c001","/tag/docker/",{y:"p",t:"docker 标签"},["/tag/docker/index.html"]],["v-0033da0b","/tag/golang/",{y:"p",t:"golang 标签"},["/tag/golang/index.html"]],["v-7b39bf6c","/tag/concurrency/",{y:"p",t:"concurrency 标签"},["/tag/concurrency/index.html"]],["v-32017b2c","/tag/top10-sort/",{y:"p",t:"top10-sort 标签"},["/tag/top10-sort/index.html"]],["v-46b9d66c","/tag/leetcode/",{y:"p",t:"leetcode 标签"},["/tag/leetcode/index.html"]],["v-25e1acb9","/tag/backtrack/",{y:"p",t:"backtrack 标签"},["/tag/backtrack/index.html"]],["v-f6aa26dc","/tag/dynamic-programming/",{y:"p",t:"dynamic-programming 标签"},["/tag/dynamic-programming/index.html"]],["v-28d23657","/tag/mock/",{y:"p",t:"mock 标签"},["/tag/mock/index.html"]],["v-173e7dbe","/tag/offer/",{y:"p",t:"offer 标签"},["/tag/offer/index.html"]],["v-1bee38ca","/tag/mysql/",{y:"p",t:"mysql 标签"},["/tag/mysql/index.html"]],["v-b310d59e","/tag/gin/",{y:"p",t:"gin 标签"},["/tag/gin/index.html"]],["v-287f3643","/tag/grpc/",{y:"p",t:"grpc 标签"},["/tag/grpc/index.html"]]];var mi=B({name:"Vuepress",setup(){const e=F2();return()=>i(e.value)}}),c5=()=>i5.reduce((e,[t,n,r,o])=>(e.push({name:t,path:n,component:mi,meta:r},...o.map(a=>({path:a,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:mi}]),u5=P3,d5=()=>{const e=d4({history:u5(as("/")),routes:c5(),scrollBehavior:(t,n,r)=>r||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var r;(t.path!==n.path||n===Ot)&&([Gt.value]=await Promise.all([Pt.resolvePageData(t.name),(r=Sc[t.name])==null?void 0:r.__asyncLoader()]))}),e},p5=e=>{e.component("ClientOnly",To),e.component("Content",is)},f5=(e,t,n)=>{const r=H(t.currentRoute.value.path);ie(()=>t.currentRoute.value.path,f=>r.value=f);const o=S(()=>Pt.resolveLayouts(n)),a=S(()=>Pt.resolveRouteLocale(wn.value.locales,r.value)),s=S(()=>Pt.resolveSiteLocaleData(wn.value,a.value)),l=S(()=>Pt.resolvePageFrontmatter(Gt.value)),c=S(()=>Pt.resolvePageHeadTitle(Gt.value,s.value)),u=S(()=>Pt.resolvePageHead(c.value,l.value,s.value)),d=S(()=>Pt.resolvePageLang(Gt.value)),p=S(()=>Pt.resolvePageLayout(Gt.value,o.value));return e.provide(N2,o),e.provide(Ac,l),e.provide(kc,c),e.provide(wc,u),e.provide(Tc,d),e.provide(Ic,p),e.provide(ls,a),e.provide(Oc,s),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>l.value},$head:{get:()=>u.value},$headTitle:{get:()=>c.value},$lang:{get:()=>d.value},$page:{get:()=>Gt.value},$routeLocale:{get:()=>a.value},$site:{get:()=>wn.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>Ge}}),{layouts:o,pageData:Gt,pageFrontmatter:l,pageHead:u,pageHeadTitle:c,pageLang:d,pageLayout:p,routeLocale:a,siteData:wn,siteLocaleData:s}},v5=()=>{const e=M2(),t=ss(),n=H([]),r=()=>{e.value.forEach(a=>{const s=h5(a);s&&n.value.push(s)})},o=()=>{document.documentElement.lang=t.value,n.value.forEach(a=>{a.parentNode===document.head&&document.head.removeChild(a)}),n.value.splice(0,n.value.length),e.value.forEach(a=>{const s=m5(a);s!==null&&(document.head.appendChild(s),n.value.push(s))})};mt(H2,o),pe(()=>{r(),o(),ie(()=>e.value,()=>o())})},h5=([e,t,n=""])=>{const r=Object.entries(t).map(([l,c])=>me(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),o=`head > ${e}${r}`;return Array.from(document.querySelectorAll(o)).find(l=>l.innerText===n)||null},m5=([e,t,n])=>{if(!me(e))return null;const r=document.createElement(e);return Tr(t)&&Object.entries(t).forEach(([o,a])=>{me(a)?r.setAttribute(o,a):a===!0&&r.setAttribute(o,"")}),me(n)&&r.appendChild(document.createTextNode(n)),r},g5=w2,_5=async()=>{var n;const e=g5({name:"VuepressApp",setup(){var r;v5();for(const o of eo)(r=o.setup)==null||r.call(o);return()=>[i(_u),...eo.flatMap(({rootComponents:o=[]})=>o.map(a=>i(a)))]}}),t=d5();p5(e),f5(e,t,eo);for(const r of eo)await((n=r.enhance)==null?void 0:n.call(r,{app:e,router:t,siteData:wn}));return e.use(t),{app:e,router:t}};_5().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{lc as A,mt as B,Yn as C,A5 as D,P5 as E,He as F,Fa as G,ln as H,y5 as I,Ha as J,R5 as K,I5 as L,O5 as M,E5 as N,b5 as O,Wt as T,h as _,cc as a,uc as b,w5 as c,_5 as createVueApp,T5 as d,Ie as e,k5 as f,B as g,H as h,D5 as i,S as j,Rl as k,pe as l,i as m,Xt as n,ac as o,Kn as p,Qd as q,Ze as r,Le as s,de as t,ie as u,Y0 as v,Yd as w,qn as x,S5 as y,L5 as z};
