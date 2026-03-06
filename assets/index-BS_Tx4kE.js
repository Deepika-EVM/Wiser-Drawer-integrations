(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const h of l)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function a(l){const h={};return l.integrity&&(h.integrity=l.integrity),l.referrerPolicy&&(h.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?h.credentials="include":l.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(l){if(l.ep)return;l.ep=!0;const h=a(l);fetch(l.href,h)}})();function k_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cd={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function o1(){if(pg)return zo;pg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,l,h){var f=null;if(h!==void 0&&(f=""+h),l.key!==void 0&&(f=""+l.key),"key"in l){h={};for(var g in l)g!=="key"&&(h[g]=l[g])}else h=l;return l=h.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:h}}return zo.Fragment=e,zo.jsx=a,zo.jsxs=a,zo}var yg;function l1(){return yg||(yg=1,Cd.exports=o1()),Cd.exports}var B=l1(),Ad={exports:{}},wt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function c1(){if(gg)return wt;gg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),O=Symbol.iterator;function G(V){return V===null||typeof V!="object"?null:(V=O&&V[O]||V["@@iterator"],typeof V=="function"?V:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tt=Object.assign,J={};function gt(V,Y,nt){this.props=V,this.context=Y,this.refs=J,this.updater=nt||Z}gt.prototype.isReactComponent={},gt.prototype.setState=function(V,Y){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Y,"setState")},gt.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function vt(){}vt.prototype=gt.prototype;function pt(V,Y,nt){this.props=V,this.context=Y,this.refs=J,this.updater=nt||Z}var lt=pt.prototype=new vt;lt.constructor=pt,tt(lt,gt.prototype),lt.isPureReactComponent=!0;var jt=Array.isArray;function ft(){}var C={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function A(V,Y,nt){var rt=nt.ref;return{$$typeof:s,type:V,key:Y,ref:rt!==void 0?rt:null,props:nt}}function x(V,Y){return A(V.type,Y,V.props)}function I(V){return typeof V=="object"&&V!==null&&V.$$typeof===s}function L(V){var Y={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(nt){return Y[nt]})}var N=/\/+/g;function ne(V,Y){return typeof V=="object"&&V!==null&&V.key!=null?L(""+V.key):Y.toString(36)}function Ne(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(ft,ft):(V.status="pending",V.then(function(Y){V.status==="pending"&&(V.status="fulfilled",V.value=Y)},function(Y){V.status==="pending"&&(V.status="rejected",V.reason=Y)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function P(V,Y,nt,rt,yt){var St=typeof V;(St==="undefined"||St==="boolean")&&(V=null);var Mt=!1;if(V===null)Mt=!0;else switch(St){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(V.$$typeof){case s:case e:Mt=!0;break;case T:return Mt=V._init,P(Mt(V._payload),Y,nt,rt,yt)}}if(Mt)return yt=yt(V),Mt=rt===""?"."+ne(V,0):rt,jt(yt)?(nt="",Mt!=null&&(nt=Mt.replace(N,"$&/")+"/"),P(yt,Y,nt,"",function(Li){return Li})):yt!=null&&(I(yt)&&(yt=x(yt,nt+(yt.key==null||V&&V.key===yt.key?"":(""+yt.key).replace(N,"$&/")+"/")+Mt)),Y.push(yt)),1;Mt=0;var De=rt===""?".":rt+":";if(jt(V))for(var ae=0;ae<V.length;ae++)rt=V[ae],St=De+ne(rt,ae),Mt+=P(rt,Y,nt,St,yt);else if(ae=G(V),typeof ae=="function")for(V=ae.call(V),ae=0;!(rt=V.next()).done;)rt=rt.value,St=De+ne(rt,ae++),Mt+=P(rt,Y,nt,St,yt);else if(St==="object"){if(typeof V.then=="function")return P(Ne(V),Y,nt,rt,yt);throw Y=String(V),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function et(V,Y,nt){if(V==null)return V;var rt=[],yt=0;return P(V,rt,"","",function(St){return Y.call(nt,St,yt++)}),rt}function ht(V){if(V._status===-1){var Y=V._result;Y=Y(),Y.then(function(nt){(V._status===0||V._status===-1)&&(V._status=1,V._result=nt)},function(nt){(V._status===0||V._status===-1)&&(V._status=2,V._result=nt)}),V._status===-1&&(V._status=0,V._result=Y)}if(V._status===1)return V._result.default;throw V._result}var kt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},Ht={map:et,forEach:function(V,Y,nt){et(V,function(){Y.apply(this,arguments)},nt)},count:function(V){var Y=0;return et(V,function(){Y++}),Y},toArray:function(V){return et(V,function(Y){return Y})||[]},only:function(V){if(!I(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return wt.Activity=b,wt.Children=Ht,wt.Component=gt,wt.Fragment=a,wt.Profiler=l,wt.PureComponent=pt,wt.StrictMode=r,wt.Suspense=v,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,wt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return C.H.useMemoCache(V)}},wt.cache=function(V){return function(){return V.apply(null,arguments)}},wt.cacheSignal=function(){return null},wt.cloneElement=function(V,Y,nt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var rt=tt({},V.props),yt=V.key;if(Y!=null)for(St in Y.key!==void 0&&(yt=""+Y.key),Y)!S.call(Y,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&Y.ref===void 0||(rt[St]=Y[St]);var St=arguments.length-2;if(St===1)rt.children=nt;else if(1<St){for(var Mt=Array(St),De=0;De<St;De++)Mt[De]=arguments[De+2];rt.children=Mt}return A(V.type,yt,rt)},wt.createContext=function(V){return V={$$typeof:f,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:h,_context:V},V},wt.createElement=function(V,Y,nt){var rt,yt={},St=null;if(Y!=null)for(rt in Y.key!==void 0&&(St=""+Y.key),Y)S.call(Y,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(yt[rt]=Y[rt]);var Mt=arguments.length-2;if(Mt===1)yt.children=nt;else if(1<Mt){for(var De=Array(Mt),ae=0;ae<Mt;ae++)De[ae]=arguments[ae+2];yt.children=De}if(V&&V.defaultProps)for(rt in Mt=V.defaultProps,Mt)yt[rt]===void 0&&(yt[rt]=Mt[rt]);return A(V,St,yt)},wt.createRef=function(){return{current:null}},wt.forwardRef=function(V){return{$$typeof:g,render:V}},wt.isValidElement=I,wt.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:ht}},wt.memo=function(V,Y){return{$$typeof:_,type:V,compare:Y===void 0?null:Y}},wt.startTransition=function(V){var Y=C.T,nt={};C.T=nt;try{var rt=V(),yt=C.S;yt!==null&&yt(nt,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(ft,kt)}catch(St){kt(St)}finally{Y!==null&&nt.types!==null&&(Y.types=nt.types),C.T=Y}},wt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},wt.use=function(V){return C.H.use(V)},wt.useActionState=function(V,Y,nt){return C.H.useActionState(V,Y,nt)},wt.useCallback=function(V,Y){return C.H.useCallback(V,Y)},wt.useContext=function(V){return C.H.useContext(V)},wt.useDebugValue=function(){},wt.useDeferredValue=function(V,Y){return C.H.useDeferredValue(V,Y)},wt.useEffect=function(V,Y){return C.H.useEffect(V,Y)},wt.useEffectEvent=function(V){return C.H.useEffectEvent(V)},wt.useId=function(){return C.H.useId()},wt.useImperativeHandle=function(V,Y,nt){return C.H.useImperativeHandle(V,Y,nt)},wt.useInsertionEffect=function(V,Y){return C.H.useInsertionEffect(V,Y)},wt.useLayoutEffect=function(V,Y){return C.H.useLayoutEffect(V,Y)},wt.useMemo=function(V,Y){return C.H.useMemo(V,Y)},wt.useOptimistic=function(V,Y){return C.H.useOptimistic(V,Y)},wt.useReducer=function(V,Y,nt){return C.H.useReducer(V,Y,nt)},wt.useRef=function(V){return C.H.useRef(V)},wt.useState=function(V){return C.H.useState(V)},wt.useSyncExternalStore=function(V,Y,nt){return C.H.useSyncExternalStore(V,Y,nt)},wt.useTransition=function(){return C.H.useTransition()},wt.version="19.2.1",wt}var _g;function hf(){return _g||(_g=1,Ad.exports=c1()),Ad.exports}var fe=hf();const u1=k_(fe);var Nd={exports:{}},Uo={},Dd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function h1(){return vg||(vg=1,(function(s){function e(P,et){var ht=P.length;P.push(et);t:for(;0<ht;){var kt=ht-1>>>1,Ht=P[kt];if(0<l(Ht,et))P[kt]=et,P[ht]=Ht,ht=kt;else break t}}function a(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var et=P[0],ht=P.pop();if(ht!==et){P[0]=ht;t:for(var kt=0,Ht=P.length,V=Ht>>>1;kt<V;){var Y=2*(kt+1)-1,nt=P[Y],rt=Y+1,yt=P[rt];if(0>l(nt,ht))rt<Ht&&0>l(yt,nt)?(P[kt]=yt,P[rt]=ht,kt=rt):(P[kt]=nt,P[Y]=ht,kt=Y);else if(rt<Ht&&0>l(yt,ht))P[kt]=yt,P[rt]=ht,kt=rt;else break t}}return et}function l(P,et){var ht=P.sortIndex-et.sortIndex;return ht!==0?ht:P.id-et.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var f=Date,g=f.now();s.unstable_now=function(){return f.now()-g}}var v=[],_=[],T=1,b=null,O=3,G=!1,Z=!1,tt=!1,J=!1,gt=typeof setTimeout=="function"?setTimeout:null,vt=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;function lt(P){for(var et=a(_);et!==null;){if(et.callback===null)r(_);else if(et.startTime<=P)r(_),et.sortIndex=et.expirationTime,e(v,et);else break;et=a(_)}}function jt(P){if(tt=!1,lt(P),!Z)if(a(v)!==null)Z=!0,ft||(ft=!0,L());else{var et=a(_);et!==null&&Ne(jt,et.startTime-P)}}var ft=!1,C=-1,S=5,A=-1;function x(){return J?!0:!(s.unstable_now()-A<S)}function I(){if(J=!1,ft){var P=s.unstable_now();A=P;var et=!0;try{t:{Z=!1,tt&&(tt=!1,vt(C),C=-1),G=!0;var ht=O;try{e:{for(lt(P),b=a(v);b!==null&&!(b.expirationTime>P&&x());){var kt=b.callback;if(typeof kt=="function"){b.callback=null,O=b.priorityLevel;var Ht=kt(b.expirationTime<=P);if(P=s.unstable_now(),typeof Ht=="function"){b.callback=Ht,lt(P),et=!0;break e}b===a(v)&&r(v),lt(P)}else r(v);b=a(v)}if(b!==null)et=!0;else{var V=a(_);V!==null&&Ne(jt,V.startTime-P),et=!1}}break t}finally{b=null,O=ht,G=!1}et=void 0}}finally{et?L():ft=!1}}}var L;if(typeof pt=="function")L=function(){pt(I)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,ne=N.port2;N.port1.onmessage=I,L=function(){ne.postMessage(null)}}else L=function(){gt(I,0)};function Ne(P,et){C=gt(function(){P(s.unstable_now())},et)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return O},s.unstable_next=function(P){switch(O){case 1:case 2:case 3:var et=3;break;default:et=O}var ht=O;O=et;try{return P()}finally{O=ht}},s.unstable_requestPaint=function(){J=!0},s.unstable_runWithPriority=function(P,et){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ht=O;O=P;try{return et()}finally{O=ht}},s.unstable_scheduleCallback=function(P,et,ht){var kt=s.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?kt+ht:kt):ht=kt,P){case 1:var Ht=-1;break;case 2:Ht=250;break;case 5:Ht=1073741823;break;case 4:Ht=1e4;break;default:Ht=5e3}return Ht=ht+Ht,P={id:T++,callback:et,priorityLevel:P,startTime:ht,expirationTime:Ht,sortIndex:-1},ht>kt?(P.sortIndex=ht,e(_,P),a(v)===null&&P===a(_)&&(tt?(vt(C),C=-1):tt=!0,Ne(jt,ht-kt))):(P.sortIndex=Ht,e(v,P),Z||G||(Z=!0,ft||(ft=!0,L()))),P},s.unstable_shouldYield=x,s.unstable_wrapCallback=function(P){var et=O;return function(){var ht=O;O=et;try{return P.apply(this,arguments)}finally{O=ht}}}})(Id)),Id}var wg;function d1(){return wg||(wg=1,Dd.exports=h1()),Dd.exports}var Rd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function f1(){if(Eg)return Qe;Eg=1;var s=hf();function e(v){var _="https://react.dev/errors/"+v;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+v+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},l=Symbol.for("react.portal");function h(v,_,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:v,containerInfo:_,implementation:T}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,_){if(v==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Qe.createPortal=function(v,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(e(299));return h(v,_,null,T)},Qe.flushSync=function(v){var _=f.T,T=r.p;try{if(f.T=null,r.p=2,v)return v()}finally{f.T=_,r.p=T,r.d.f()}},Qe.preconnect=function(v,_){typeof v=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(v,_))},Qe.prefetchDNS=function(v){typeof v=="string"&&r.d.D(v)},Qe.preinit=function(v,_){if(typeof v=="string"&&_&&typeof _.as=="string"){var T=_.as,b=g(T,_.crossOrigin),O=typeof _.integrity=="string"?_.integrity:void 0,G=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?r.d.S(v,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:O,fetchPriority:G}):T==="script"&&r.d.X(v,{crossOrigin:b,integrity:O,fetchPriority:G,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Qe.preinitModule=function(v,_){if(typeof v=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=g(_.as,_.crossOrigin);r.d.M(v,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(v)},Qe.preload=function(v,_){if(typeof v=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,b=g(T,_.crossOrigin);r.d.L(v,T,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Qe.preloadModule=function(v,_){if(typeof v=="string")if(_){var T=g(_.as,_.crossOrigin);r.d.m(v,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(v)},Qe.requestFormReset=function(v){r.d.r(v)},Qe.unstable_batchedUpdates=function(v,_){return v(_)},Qe.useFormState=function(v,_,T){return f.H.useFormState(v,_,T)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.2.1",Qe}var Tg;function m1(){if(Tg)return Rd.exports;Tg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=f1(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function p1(){if(bg)return Uo;bg=1;var s=d1(),e=hf(),a=m1();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function h(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(h(t)!==t)throw Error(r(188))}function _(t){var n=t.alternate;if(!n){if(n=h(t),n===null)throw Error(r(188));return n!==t?null:t}for(var i=t,o=n;;){var u=i.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){i=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===i)return v(u),t;if(d===o)return v(u),n;d=d.sibling}throw Error(r(188))}if(i.return!==o.return)i=u,o=d;else{for(var p=!1,w=u.child;w;){if(w===i){p=!0,i=u,o=d;break}if(w===o){p=!0,o=u,i=d;break}w=w.sibling}if(!p){for(w=d.child;w;){if(w===i){p=!0,i=d,o=u;break}if(w===o){p=!0,o=d,i=u;break}w=w.sibling}if(!p)throw Error(r(189))}}if(i.alternate!==o)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?t:n}function T(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=T(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,O=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),jt=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=I&&t[I]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function ne(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tt:return"Fragment";case gt:return"Profiler";case J:return"StrictMode";case jt:return"Suspense";case ft:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case pt:return t.displayName||"Context";case vt:return(t._context.displayName||"Context")+".Consumer";case lt:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case C:return n=t.displayName||null,n!==null?n:ne(t.type)||"Memo";case S:n=t._payload,t=t._init;try{return ne(t(n))}catch{}}return null}var Ne=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},kt=[],Ht=-1;function V(t){return{current:t}}function Y(t){0>Ht||(t.current=kt[Ht],kt[Ht]=null,Ht--)}function nt(t,n){Ht++,kt[Ht]=t.current,t.current=n}var rt=V(null),yt=V(null),St=V(null),Mt=V(null);function De(t,n){switch(nt(St,n),nt(yt,t),nt(rt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zy(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zy(n),t=Uy(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(rt),nt(rt,t)}function ae(){Y(rt),Y(yt),Y(St)}function Li(t){t.memoizedState!==null&&nt(Mt,t);var n=rt.current,i=Uy(n,t.type);n!==i&&(nt(yt,t),nt(rt,i))}function Tr(t){yt.current===t&&(Y(rt),Y(yt)),Mt.current===t&&(Y(Mt),Oo._currentValue=ht)}var br,Sr;function Qn(t){if(br===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);br=n&&n[1]||"",Sr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+br+t+Sr}var Ms=!1;function ji(t,n){if(!t||Ms)return"";Ms=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch($){var U=$}Reflect.construct(t,[],Q)}else{try{Q.call()}catch($){U=$}t.call(Q.prototype)}}else{try{throw Error()}catch($){U=$}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch($){if($&&U&&typeof $.stack=="string")return[$.stack,U.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),p=d[0],w=d[1];if(p&&w){var D=p.split(`
`),z=w.split(`
`);for(u=o=0;o<D.length&&!D[o].includes("DetermineComponentFrameRoot");)o++;for(;u<z.length&&!z[u].includes("DetermineComponentFrameRoot");)u++;if(o===D.length||u===z.length)for(o=D.length-1,u=z.length-1;1<=o&&0<=u&&D[o]!==z[u];)u--;for(;1<=o&&0<=u;o--,u--)if(D[o]!==z[u]){if(o!==1||u!==1)do if(o--,u--,0>u||D[o]!==z[u]){var H=`
`+D[o].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=o&&0<=u);break}}}finally{Ms=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?Qn(i):""}function Os(t,n){switch(t.tag){case 26:case 27:case 5:return Qn(t.type);case 16:return Qn("Lazy");case 13:return t.child!==n&&n!==null?Qn("Suspense Fallback"):Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 15:return ji(t.type,!1);case 11:return ji(t.type.render,!1);case 1:return ji(t.type,!0);case 31:return Qn("Activity");default:return""}}function Ls(t){try{var n="",i=null;do n+=Os(t,i),i=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var pe=Object.prototype.hasOwnProperty,Ie=s.unstable_scheduleCallback,Pa=s.unstable_cancelCallback,Nu=s.unstable_shouldYield,cl=s.unstable_requestPaint,Je=s.unstable_now,ki=s.unstable_getCurrentPriorityLevel,js=s.unstable_ImmediatePriority,ks=s.unstable_UserBlockingPriority,Ga=s.unstable_NormalPriority,Du=s.unstable_LowPriority,ul=s.unstable_IdlePriority,hl=s.log,dl=s.unstable_setDisableYieldValue,Mn=null,ze=null;function _n(t){if(typeof hl=="function"&&dl(t),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(Mn,t)}catch{}}var ce=Math.clz32?Math.clz32:ml,fl=Math.log,Cr=Math.LN2;function ml(t){return t>>>=0,t===0?32:31-(fl(t)/Cr|0)|0}var Yn=256,zi=262144,ye=4194304;function Kn(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Xn(t,n,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Kn(o):(p&=w,p!==0?u=Kn(p):i||(i=w&~t,i!==0&&(u=Kn(i))))):(w=o&~d,w!==0?u=Kn(w):p!==0?u=Kn(p):i||(i=o&~t,i!==0&&(u=Kn(i)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,i=n&-n,d>=i||d===32&&(i&4194048)!==0)?n:u}function On(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Iu(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pl(){var t=ye;return ye<<=1,(ye&62914560)===0&&(ye=4194304),t}function Jn(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Ui(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ru(t,n,i,o,u,d){var p=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var w=t.entanglements,D=t.expirationTimes,z=t.hiddenUpdates;for(i=p&~i;0<i;){var H=31-ce(i),Q=1<<H;w[H]=0,D[H]=-1;var U=z[H];if(U!==null)for(z[H]=null,H=0;H<U.length;H++){var $=U[H];$!==null&&($.lane&=-536870913)}i&=~Q}o!==0&&qi(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(p&~n))}function qi(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-ce(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|i&261930}function zs(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var o=31-ce(i),u=1<<o;u&n|t[o]&n&&(t[o]|=n),i&=~u}}function Us(t,n){var i=n&-n;return i=(i&42)!==0?1:$i(i),(i&(t.suspendedLanes|n))!==0?0:i}function $i(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ta(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function yl(){var t=et.p;return t!==0?t:(t=window.event,t===void 0?32:lg(t.type))}function Ln(t,n){var i=et.p;try{return et.p=t,n()}finally{et.p=i}}var jn=Math.random().toString(36).slice(2),ge="__reactFiber$"+jn,Me="__reactProps$"+jn,Zn="__reactContainer$"+jn,Ar="__reactEvents$"+jn,xu="__reactListeners$"+jn,gl="__reactHandles$"+jn,_l="__reactResources$"+jn,Wn="__reactMarker$"+jn;function Nr(t){delete t[ge],delete t[Me],delete t[Ar],delete t[xu],delete t[gl]}function ta(t){var n=t[ge];if(n)return n;for(var i=t.parentNode;i;){if(n=i[Zn]||i[ge]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=Fy(t);t!==null;){if(i=t[ge])return i;t=Fy(t)}return n}t=i,i=t.parentNode}return null}function vn(t){if(t=t[ge]||t[Zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ea(t){var n=t[_l];return n||(n=t[_l]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _e(t){t[Wn]=!0}var qs=new Set,$s={};function na(t,n){aa(t,n),aa(t+"Capture",n)}function aa(t,n){for($s[t]=n,t=0;t<n.length;t++)qs.add(n[t])}var Bs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},Ps={};function vl(t){return pe.call(Ps,t)?!0:pe.call(Hs,t)?!1:Bs.test(t)?Ps[t]=!0:(Hs[t]=!0,!1)}function Dr(t,n,i){if(vl(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+i)}}function un(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+i)}}function ve(t,n,i,o){if(o===null)t.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,""+o)}}function Oe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Gs(t,n,i){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){i=""+p,d.call(this,p)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(p){i=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pt(t){if(!t._valueTracker){var n=Fa(t)?"checked":"value";t._valueTracker=Gs(t,n,""+t[n])}}function Bi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),o="";return t&&(o=Fa(t)?t.checked?"true":"false":t.value),t=o,t!==i?(n.setValue(t),!0):!1}function ia(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hi=/[\n"\\]/g;function tn(t){return t.replace(Hi,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ir(t,n,i,o,u,d,p,w){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),n!=null?p==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Oe(n)):t.value!==""+Oe(n)&&(t.value=""+Oe(n)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),n!=null?Fs(t,p,Oe(n)):i!=null?Fs(t,p,Oe(i)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Oe(w):t.removeAttribute("name")}function wl(t,n,i,o,u,d,p,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||i!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Pt(t);return}i=i!=null?""+Oe(i):"",n=n!=null?""+Oe(n):i,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p),Pt(t)}function Fs(t,n,i){n==="number"&&ia(t.ownerDocument)===t||t.defaultValue===""+i||(t.defaultValue=""+i)}function Qa(t,n,i,o){if(t=t.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<t.length;i++)u=n.hasOwnProperty("$"+t[i].value),t[i].selected!==u&&(t[i].selected=u),u&&o&&(t[i].defaultSelected=!0)}else{for(i=""+Oe(i),n=null,u=0;u<t.length;u++){if(t[u].value===i){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function El(t,n,i){if(n!=null&&(n=""+Oe(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Oe(i):""}function Ya(t,n,i,o){if(n==null){if(o!=null){if(i!=null)throw Error(r(92));if(Ne(o)){if(1<o.length)throw Error(r(93));o=o[0]}i=o}i==null&&(i=""),n=i}i=Oe(n),t.defaultValue=i,o=t.textContent,o===i&&o!==""&&o!==null&&(t.value=o),Pt(t)}function en(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Tl=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qs(t,n,i){var o=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,i):typeof i!="number"||i===0||Tl.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function Ys(t,n,i){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,i!=null){for(var o in i)!i.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&i[u]!==o&&Qs(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Qs(t,d,n[d])}function Rr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ka=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xr(t){return Ka.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function kn(){}var Ks=null;function wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,ra=null;function Pi(t){var n=vn(t);if(n&&(t=n.stateNode)){var i=t[Me]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ir(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+tn(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var o=i[n];if(o!==t&&o.form===t.form){var u=o[Me]||null;if(!u)throw Error(r(90));Ir(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<i.length;n++)o=i[n],o.form===t.form&&Bi(o)}break t;case"textarea":El(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Qa(t,!!i.multiple,n,!1)}}}var Vr=!1;function Ja(t,n,i){if(Vr)return t(n,i);Vr=!0;try{var o=t(n);return o}finally{if(Vr=!1,(Xa!==null||ra!==null)&&(yc(),Xa&&(n=Xa,t=ra,ra=Xa=null,Pi(n),t)))for(n=0;n<t.length;n++)Pi(t[n])}}function zn(t,n){var i=t.stateNode;if(i===null)return null;var o=i[Me]||null;if(o===null)return null;i=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gi=!1;if(En)try{var Qt={};Object.defineProperty(Qt,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Qt,Qt),window.removeEventListener("test",Qt,Qt)}catch{Gi=!1}var sa=null,Xs=null,Fi=null;function Js(){if(Fi)return Fi;var t,n=Xs,i=n.length,o,u="value"in sa?sa.value:sa.textContent,d=u.length;for(t=0;t<i&&n[t]===u[t];t++);var p=i-t;for(o=1;o<=p&&n[i-o]===u[d-o];o++);return Fi=u.slice(t,1<o?1-o:void 0)}function Qi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function Un(){return!1}function Ue(t){function n(i,o,u,d,p){this._reactName=i,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=p,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(i=t[w],this[w]=i?i(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ba:Un,this.isPropagationStopped=Un,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),n}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=Ue(Sa),Za=b({},Sa,{view:0,detail:0}),Zs=Ue(Za),Wa,Mr,la,Or=b({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(Wa=t.screenX-la.screenX,Mr=t.screenY-la.screenY):Mr=Wa=0,la=t),Wa)},movementY:function(t){return"movementY"in t?t.movementY:Mr}}),Ws=Ue(Or),Yi=b({},Or,{dataTransfer:0}),Sl=Ue(Yi),Cl=b({},Za,{relatedTarget:0}),Ki=Ue(Cl),to=b({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Al=Ue(to),Lr=b({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Nl=Ue(Lr),Dl=b({},Sa,{data:0}),ca=Ue(Dl),Il={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=xl[t])?!!n[t]:!1}function ti(){return Vl}var Ze=b({},Za,{key:function(t){if(t.key){var n=Il[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rl[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(t){return t.type==="keypress"?Qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ml=Ue(Ze),Ol=b({},Or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=Ue(Ol),c=b({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),m=Ue(c),y=b({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),E=Ue(y),j=b({},Or,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q=Ue(j),W=b({},Sa,{newState:0,oldState:0}),Tt=Ue(W),ue=[9,13,27,32],qt=En&&"CompositionEvent"in window,ie=null;En&&"documentMode"in document&&(ie=document.documentMode);var Tn=En&&"TextEvent"in window&&!ie,ua=En&&(!qt||ie&&8<ie&&11>=ie),qn=" ",$n=!1;function Xi(t,n){switch(t){case"keyup":return ue.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function xw(t,n){switch(t){case"compositionend":return jr(n);case"keypress":return n.which!==32?null:($n=!0,qn);case"textInput":return t=n.data,t===qn&&$n?null:t;default:return null}}function Vw(t,n){if(kr)return t==="compositionend"||!qt&&Xi(t,n)?(t=Js(),Fi=Xs=sa=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ua&&n.locale!=="ko"?null:n.data;default:return null}}var Mw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mw[t.type]:n==="textarea"}function Xf(t,n,i,o){Xa?ra?ra.push(o):ra=[o]:Xa=o,n=bc(n,"onChange"),0<n.length&&(i=new oa("onChange","change",null,i,o),t.push({event:i,listeners:n}))}var eo=null,no=null;function Ow(t){Vy(t,0)}function Ll(t){var n=cn(t);if(Bi(n))return t}function Jf(t,n){if(t==="change")return n}var Zf=!1;if(En){var Vu;if(En){var Mu="oninput"in document;if(!Mu){var Wf=document.createElement("div");Wf.setAttribute("oninput","return;"),Mu=typeof Wf.oninput=="function"}Vu=Mu}else Vu=!1;Zf=Vu&&(!document.documentMode||9<document.documentMode)}function tm(){eo&&(eo.detachEvent("onpropertychange",em),no=eo=null)}function em(t){if(t.propertyName==="value"&&Ll(no)){var n=[];Xf(n,no,t,wn(t)),Ja(Ow,n)}}function Lw(t,n,i){t==="focusin"?(tm(),eo=n,no=i,eo.attachEvent("onpropertychange",em)):t==="focusout"&&tm()}function jw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(no)}function kw(t,n){if(t==="click")return Ll(n)}function zw(t,n){if(t==="input"||t==="change")return Ll(n)}function Uw(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var hn=typeof Object.is=="function"?Object.is:Uw;function ao(t,n){if(hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),o=Object.keys(n);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var u=i[o];if(!pe.call(n,u)||!hn(t[u],n[u]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var i=nm(t);t=0;for(var o;i;){if(i.nodeType===3){if(o=t+i.textContent.length,t<=n&&o>=n)return{node:i,offset:n-t};t=o}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=nm(i)}}function im(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?im(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ia(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=ia(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var qw=En&&"documentMode"in document&&11>=document.documentMode,zr=null,Lu=null,io=null,ju=!1;function sm(t,n,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ju||zr==null||zr!==ia(o)||(o=zr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&ao(io,o)||(io=o,o=bc(Lu,"onSelect"),0<o.length&&(n=new oa("onSelect","select",null,n,i),t.push({event:n,listeners:o}),n.target=zr)))}function Ji(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Ur={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionrun:Ji("Transition","TransitionRun"),transitionstart:Ji("Transition","TransitionStart"),transitioncancel:Ji("Transition","TransitionCancel"),transitionend:Ji("Transition","TransitionEnd")},ku={},om={};En&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Zi(t){if(ku[t])return ku[t];if(!Ur[t])return t;var n=Ur[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in om)return ku[t]=n[i];return t}var lm=Zi("animationend"),cm=Zi("animationiteration"),um=Zi("animationstart"),$w=Zi("transitionrun"),Bw=Zi("transitionstart"),Hw=Zi("transitioncancel"),hm=Zi("transitionend"),dm=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Bn(t,n){dm.set(t,n),na(n,[t])}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},bn=[],qr=0,Uu=0;function kl(){for(var t=qr,n=Uu=qr=0;n<t;){var i=bn[n];bn[n++]=null;var o=bn[n];bn[n++]=null;var u=bn[n];bn[n++]=null;var d=bn[n];if(bn[n++]=null,o!==null&&u!==null){var p=o.pending;p===null?u.next=u:(u.next=p.next,p.next=u),o.pending=u}d!==0&&fm(i,u,d)}}function zl(t,n,i,o){bn[qr++]=t,bn[qr++]=n,bn[qr++]=i,bn[qr++]=o,Uu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function qu(t,n,i,o){return zl(t,n,i,o),Ul(t)}function Wi(t,n){return zl(t,null,null,n),Ul(t)}function fm(t,n,i){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i);for(var u=!1,d=t.return;d!==null;)d.childLanes|=i,o=d.alternate,o!==null&&(o.childLanes|=i),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-ce(i),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=i|536870912),d):null}function Ul(t){if(50<No)throw No=0,Kh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $r={};function Pw(t,n,i,o){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,n,i,o){return new Pw(t,n,i,o)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Aa(t,n){var i=t.alternate;return i===null?(i=dn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&65011712,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function mm(t,n){t.flags&=65011714;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ql(t,n,i,o,u,d){var p=0;if(o=t,typeof t=="function")$u(t)&&(p=1);else if(typeof t=="string")p=K0(t,i,rt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return t=dn(31,i,n,u),t.elementType=A,t.lanes=d,t;case tt:return tr(i.children,u,d,n);case J:p=8,u|=24;break;case gt:return t=dn(12,i,n,u|2),t.elementType=gt,t.lanes=d,t;case jt:return t=dn(13,i,n,u),t.elementType=jt,t.lanes=d,t;case ft:return t=dn(19,i,n,u),t.elementType=ft,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pt:p=10;break t;case vt:p=9;break t;case lt:p=11;break t;case C:p=14;break t;case S:p=16,o=null;break t}p=29,i=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=dn(p,i,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function tr(t,n,i,o){return t=dn(7,t,o,n),t.lanes=i,t}function Bu(t,n,i){return t=dn(6,t,null,n),t.lanes=i,t}function pm(t){var n=dn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,i){return n=dn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ym=new WeakMap;function Sn(t,n){if(typeof t=="object"&&t!==null){var i=ym.get(t);return i!==void 0?i:(n={value:t,source:n,stack:Ls(n)},ym.set(t,n),n)}return{value:t,source:n,stack:Ls(n)}}var Br=[],Hr=0,$l=null,ro=0,Cn=[],An=0,ei=null,ha=1,da="";function Na(t,n){Br[Hr++]=ro,Br[Hr++]=$l,$l=t,ro=n}function gm(t,n,i){Cn[An++]=ha,Cn[An++]=da,Cn[An++]=ei,ei=t;var o=ha;t=da;var u=32-ce(o)-1;o&=~(1<<u),i+=1;var d=32-ce(n)+u;if(30<d){var p=u-u%5;d=(o&(1<<p)-1).toString(32),o>>=p,u-=p,ha=1<<32-ce(n)+u|i<<u|o,da=d+t}else ha=1<<d|i<<u|o,da=t}function Pu(t){t.return!==null&&(Na(t,1),gm(t,1,0))}function Gu(t){for(;t===$l;)$l=Br[--Hr],Br[Hr]=null,ro=Br[--Hr],Br[Hr]=null;for(;t===ei;)ei=Cn[--An],Cn[An]=null,da=Cn[--An],Cn[An]=null,ha=Cn[--An],Cn[An]=null}function _m(t,n){Cn[An++]=ha,Cn[An++]=da,Cn[An++]=ei,ha=n.id,da=n.overflow,ei=t}var qe=null,Wt=null,Vt=!1,ni=null,Nn=!1,Fu=Error(r(519));function ai(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(Sn(n,t)),Fu}function vm(t){var n=t.stateNode,i=t.type,o=t.memoizedProps;switch(n[ge]=t,n[Me]=o,i){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(i=0;i<Io.length;i++)Nt(Io[i],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),wl(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Ya(n,o.value,o.defaultValue,o.children)}i=o.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||o.suppressHydrationWarning===!0||jy(n.textContent,i)?(o.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),o.onScroll!=null&&Nt("scroll",n),o.onScrollEnd!=null&&Nt("scrollend",n),o.onClick!=null&&(n.onclick=kn),n=!0):n=!1,n||ai(t,!0)}function wm(t){for(qe=t.return;qe;)switch(qe.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:qe=qe.return}}function Pr(t){if(t!==qe)return!1;if(!Vt)return wm(t),Vt=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||ud(t.type,t.memoizedProps)),i=!i),i&&Wt&&ai(t),wm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Wt=Gy(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Wt=Gy(t)}else n===27?(n=Wt,gi(t.type)?(t=pd,pd=null,Wt=t):Wt=n):Wt=qe?In(t.stateNode.nextSibling):null;return!0}function er(){Wt=qe=null,Vt=!1}function Qu(){var t=ni;return t!==null&&(sn===null?sn=t:sn.push.apply(sn,t),ni=null),t}function so(t){ni===null?ni=[t]:ni.push(t)}var Yu=V(null),nr=null,Da=null;function ii(t,n,i){nt(Yu,n._currentValue),n._currentValue=i}function Ia(t){t._currentValue=Yu.current,Y(Yu)}function Ku(t,n,i){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===i)break;t=t.return}}function Xu(t,n,i,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var p=u.child;d=d.firstContext;t:for(;d!==null;){var w=d;d=u;for(var D=0;D<n.length;D++)if(w.context===n[D]){d.lanes|=i,w=d.alternate,w!==null&&(w.lanes|=i),Ku(d.return,i,t),o||(p=null);break t}d=w.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(r(341));p.lanes|=i,d=p.alternate,d!==null&&(d.lanes|=i),Ku(p,i,t),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===t){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function Gr(t,n,i,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(r(387));if(p=p.memoizedProps,p!==null){var w=u.type;hn(u.pendingProps.value,p.value)||(t!==null?t.push(w):t=[w])}}else if(u===Mt.current){if(p=u.alternate,p===null)throw Error(r(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&Xu(n,t,i,o),n.flags|=262144}function Bl(t){for(t=t.firstContext;t!==null;){if(!hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ar(t){nr=t,Da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $e(t){return Em(nr,t)}function Hl(t,n){return nr===null&&ar(t),Em(t,n)}function Em(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},Da===null){if(t===null)throw Error(r(308));Da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Da=Da.next=n;return i}var Gw=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Fw=s.unstable_scheduleCallback,Qw=s.unstable_NormalPriority,we={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new Gw,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&Fw(Qw,function(){t.controller.abort()})}var lo=null,Zu=0,Fr=0,Qr=null;function Yw(t,n){if(lo===null){var i=lo=[];Zu=0,Fr=ed(),Qr={status:"pending",value:void 0,then:function(o){i.push(o)}}}return Zu++,n.then(Tm,Tm),n}function Tm(){if(--Zu===0&&lo!==null){Qr!==null&&(Qr.status="fulfilled");var t=lo;lo=null,Fr=0,Qr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Kw(t,n){var i=[],o={status:"pending",value:null,reason:null,then:function(u){i.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<i.length;u++)(0,i[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<i.length;u++)(0,i[u])(void 0)}),o}var bm=P.S;P.S=function(t,n){sy=Je(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yw(t,n),bm!==null&&bm(t,n)};var ir=V(null);function Wu(){var t=ir.current;return t!==null?t:Jt.pooledCache}function Pl(t,n){n===null?nt(ir,ir.current):nt(ir,n.pool)}function Sm(){var t=Wu();return t===null?null:{parent:we._currentValue,pool:t}}var Yr=Error(r(460)),th=Error(r(474)),Gl=Error(r(542)),Fl={then:function(){}};function Cm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Am(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(kn,kn),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t;default:if(typeof n.status=="string")n.then(kn,kn);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dm(t),t}throw sr=n,Yr}}function rr(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(sr=i,Yr):i}}var sr=null;function Nm(){if(sr===null)throw Error(r(459));var t=sr;return sr=null,t}function Dm(t){if(t===Yr||t===Gl)throw Error(r(483))}var Kr=null,co=0;function Ql(t){var n=co;return co+=1,Kr===null&&(Kr=[]),Am(Kr,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Yl(t,n){throw n.$$typeof===O?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Im(t){function n(M,R){if(t){var k=M.deletions;k===null?(M.deletions=[R],M.flags|=16):k.push(R)}}function i(M,R){if(!t)return null;for(;R!==null;)n(M,R),R=R.sibling;return null}function o(M){for(var R=new Map;M!==null;)M.key!==null?R.set(M.key,M):R.set(M.index,M),M=M.sibling;return R}function u(M,R){return M=Aa(M,R),M.index=0,M.sibling=null,M}function d(M,R,k){return M.index=k,t?(k=M.alternate,k!==null?(k=k.index,k<R?(M.flags|=67108866,R):k):(M.flags|=67108866,R)):(M.flags|=1048576,R)}function p(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function w(M,R,k,F){return R===null||R.tag!==6?(R=Bu(k,M.mode,F),R.return=M,R):(R=u(R,k),R.return=M,R)}function D(M,R,k,F){var ct=k.type;return ct===tt?H(M,R,k.props.children,F,k.key):R!==null&&(R.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===S&&rr(ct)===R.type)?(R=u(R,k.props),uo(R,k),R.return=M,R):(R=ql(k.type,k.key,k.props,null,M.mode,F),uo(R,k),R.return=M,R)}function z(M,R,k,F){return R===null||R.tag!==4||R.stateNode.containerInfo!==k.containerInfo||R.stateNode.implementation!==k.implementation?(R=Hu(k,M.mode,F),R.return=M,R):(R=u(R,k.children||[]),R.return=M,R)}function H(M,R,k,F,ct){return R===null||R.tag!==7?(R=tr(k,M.mode,F,ct),R.return=M,R):(R=u(R,k),R.return=M,R)}function Q(M,R,k){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Bu(""+R,M.mode,k),R.return=M,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case G:return k=ql(R.type,R.key,R.props,null,M.mode,k),uo(k,R),k.return=M,k;case Z:return R=Hu(R,M.mode,k),R.return=M,R;case S:return R=rr(R),Q(M,R,k)}if(Ne(R)||L(R))return R=tr(R,M.mode,k,null),R.return=M,R;if(typeof R.then=="function")return Q(M,Ql(R),k);if(R.$$typeof===pt)return Q(M,Hl(M,R),k);Yl(M,R)}return null}function U(M,R,k,F){var ct=R!==null?R.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return ct!==null?null:w(M,R,""+k,F);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case G:return k.key===ct?D(M,R,k,F):null;case Z:return k.key===ct?z(M,R,k,F):null;case S:return k=rr(k),U(M,R,k,F)}if(Ne(k)||L(k))return ct!==null?null:H(M,R,k,F,null);if(typeof k.then=="function")return U(M,R,Ql(k),F);if(k.$$typeof===pt)return U(M,R,Hl(M,k),F);Yl(M,k)}return null}function $(M,R,k,F,ct){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return M=M.get(k)||null,w(R,M,""+F,ct);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case G:return M=M.get(F.key===null?k:F.key)||null,D(R,M,F,ct);case Z:return M=M.get(F.key===null?k:F.key)||null,z(R,M,F,ct);case S:return F=rr(F),$(M,R,k,F,ct)}if(Ne(F)||L(F))return M=M.get(k)||null,H(R,M,F,ct,null);if(typeof F.then=="function")return $(M,R,k,Ql(F),ct);if(F.$$typeof===pt)return $(M,R,k,Hl(R,F),ct);Yl(R,F)}return null}function st(M,R,k,F){for(var ct=null,zt=null,ot=R,Ct=R=0,It=null;ot!==null&&Ct<k.length;Ct++){ot.index>Ct?(It=ot,ot=null):It=ot.sibling;var Ut=U(M,ot,k[Ct],F);if(Ut===null){ot===null&&(ot=It);break}t&&ot&&Ut.alternate===null&&n(M,ot),R=d(Ut,R,Ct),zt===null?ct=Ut:zt.sibling=Ut,zt=Ut,ot=It}if(Ct===k.length)return i(M,ot),Vt&&Na(M,Ct),ct;if(ot===null){for(;Ct<k.length;Ct++)ot=Q(M,k[Ct],F),ot!==null&&(R=d(ot,R,Ct),zt===null?ct=ot:zt.sibling=ot,zt=ot);return Vt&&Na(M,Ct),ct}for(ot=o(ot);Ct<k.length;Ct++)It=$(ot,M,Ct,k[Ct],F),It!==null&&(t&&It.alternate!==null&&ot.delete(It.key===null?Ct:It.key),R=d(It,R,Ct),zt===null?ct=It:zt.sibling=It,zt=It);return t&&ot.forEach(function(Ti){return n(M,Ti)}),Vt&&Na(M,Ct),ct}function dt(M,R,k,F){if(k==null)throw Error(r(151));for(var ct=null,zt=null,ot=R,Ct=R=0,It=null,Ut=k.next();ot!==null&&!Ut.done;Ct++,Ut=k.next()){ot.index>Ct?(It=ot,ot=null):It=ot.sibling;var Ti=U(M,ot,Ut.value,F);if(Ti===null){ot===null&&(ot=It);break}t&&ot&&Ti.alternate===null&&n(M,ot),R=d(Ti,R,Ct),zt===null?ct=Ti:zt.sibling=Ti,zt=Ti,ot=It}if(Ut.done)return i(M,ot),Vt&&Na(M,Ct),ct;if(ot===null){for(;!Ut.done;Ct++,Ut=k.next())Ut=Q(M,Ut.value,F),Ut!==null&&(R=d(Ut,R,Ct),zt===null?ct=Ut:zt.sibling=Ut,zt=Ut);return Vt&&Na(M,Ct),ct}for(ot=o(ot);!Ut.done;Ct++,Ut=k.next())Ut=$(ot,M,Ct,Ut.value,F),Ut!==null&&(t&&Ut.alternate!==null&&ot.delete(Ut.key===null?Ct:Ut.key),R=d(Ut,R,Ct),zt===null?ct=Ut:zt.sibling=Ut,zt=Ut);return t&&ot.forEach(function(s1){return n(M,s1)}),Vt&&Na(M,Ct),ct}function Xt(M,R,k,F){if(typeof k=="object"&&k!==null&&k.type===tt&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case G:t:{for(var ct=k.key;R!==null;){if(R.key===ct){if(ct=k.type,ct===tt){if(R.tag===7){i(M,R.sibling),F=u(R,k.props.children),F.return=M,M=F;break t}}else if(R.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===S&&rr(ct)===R.type){i(M,R.sibling),F=u(R,k.props),uo(F,k),F.return=M,M=F;break t}i(M,R);break}else n(M,R);R=R.sibling}k.type===tt?(F=tr(k.props.children,M.mode,F,k.key),F.return=M,M=F):(F=ql(k.type,k.key,k.props,null,M.mode,F),uo(F,k),F.return=M,M=F)}return p(M);case Z:t:{for(ct=k.key;R!==null;){if(R.key===ct)if(R.tag===4&&R.stateNode.containerInfo===k.containerInfo&&R.stateNode.implementation===k.implementation){i(M,R.sibling),F=u(R,k.children||[]),F.return=M,M=F;break t}else{i(M,R);break}else n(M,R);R=R.sibling}F=Hu(k,M.mode,F),F.return=M,M=F}return p(M);case S:return k=rr(k),Xt(M,R,k,F)}if(Ne(k))return st(M,R,k,F);if(L(k)){if(ct=L(k),typeof ct!="function")throw Error(r(150));return k=ct.call(k),dt(M,R,k,F)}if(typeof k.then=="function")return Xt(M,R,Ql(k),F);if(k.$$typeof===pt)return Xt(M,R,Hl(M,k),F);Yl(M,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,R!==null&&R.tag===6?(i(M,R.sibling),F=u(R,k),F.return=M,M=F):(i(M,R),F=Bu(k,M.mode,F),F.return=M,M=F),p(M)):i(M,R)}return function(M,R,k,F){try{co=0;var ct=Xt(M,R,k,F);return Kr=null,ct}catch(ot){if(ot===Yr||ot===Gl)throw ot;var zt=dn(29,ot,null,M.mode);return zt.lanes=F,zt.return=M,zt}finally{}}}var or=Im(!0),Rm=Im(!1),ri=!1;function eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function si(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function oi(t,n,i){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,($t&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ul(t),fm(t,null,i),n}return zl(t,o,n,i),Ul(t)}function ho(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,zs(t,i)}}function ah(t,n){var i=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var u=null,d=null;if(i=i.firstBaseUpdate,i!==null){do{var p={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};d===null?u=d=p:d=d.next=p,i=i.next}while(i!==null);d===null?u=d=n:d=d.next=n}else u=d=n;i={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var ih=!1;function fo(){if(ih){var t=Qr;if(t!==null)throw t}}function mo(t,n,i,o){ih=!1;var u=t.updateQueue;ri=!1;var d=u.firstBaseUpdate,p=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var D=w,z=D.next;D.next=null,p===null?d=z:p.next=z,p=D;var H=t.alternate;H!==null&&(H=H.updateQueue,w=H.lastBaseUpdate,w!==p&&(w===null?H.firstBaseUpdate=z:w.next=z,H.lastBaseUpdate=D))}if(d!==null){var Q=u.baseState;p=0,H=z=D=null,w=d;do{var U=w.lane&-536870913,$=U!==w.lane;if($?(Dt&U)===U:(o&U)===U){U!==0&&U===Fr&&(ih=!0),H!==null&&(H=H.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var st=t,dt=w;U=n;var Xt=i;switch(dt.tag){case 1:if(st=dt.payload,typeof st=="function"){Q=st.call(Xt,Q,U);break t}Q=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=dt.payload,U=typeof st=="function"?st.call(Xt,Q,U):st,U==null)break t;Q=b({},Q,U);break t;case 2:ri=!0}}U=w.callback,U!==null&&(t.flags|=64,$&&(t.flags|=8192),$=u.callbacks,$===null?u.callbacks=[U]:$.push(U))}else $={lane:U,tag:w.tag,payload:w.payload,callback:w.callback,next:null},H===null?(z=H=$,D=Q):H=H.next=$,p|=U;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;$=w,w=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);H===null&&(D=Q),u.baseState=D,u.firstBaseUpdate=z,u.lastBaseUpdate=H,d===null&&(u.shared.lanes=0),di|=p,t.lanes=p,t.memoizedState=Q}}function xm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)xm(i[t],n)}var Xr=V(null),Kl=V(0);function Mm(t,n){t=za,nt(Kl,t),nt(Xr,n),za=t|n.baseLanes}function rh(){nt(Kl,za),nt(Xr,Xr.current)}function sh(){za=Kl.current,Y(Xr),Y(Kl)}var fn=V(null),Dn=null;function li(t){var n=t.alternate;nt(he,he.current&1),nt(fn,t),Dn===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Dn=t)}function oh(t){nt(he,he.current),nt(fn,t),Dn===null&&(Dn=t)}function Om(t){t.tag===22?(nt(he,he.current),nt(fn,t),Dn===null&&(Dn=t)):ci()}function ci(){nt(he,he.current),nt(fn,fn.current)}function mn(t){Y(fn),Dn===t&&(Dn=null),Y(he)}var he=V(0);function Xl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||fd(i)||md(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ra=0,bt=null,Yt=null,Ee=null,Jl=!1,Jr=!1,lr=!1,Zl=0,po=0,Zr=null,Xw=0;function oe(){throw Error(r(321))}function lh(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!hn(t[i],n[i]))return!1;return!0}function ch(t,n,i,o,u,d){return Ra=d,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?gp:Sh,lr=!1,d=i(o,u),lr=!1,Jr&&(d=jm(n,i,o,u)),Lm(t),d}function Lm(t){P.H=_o;var n=Yt!==null&&Yt.next!==null;if(Ra=0,Ee=Yt=bt=null,Jl=!1,po=0,Zr=null,n)throw Error(r(300));t===null||Te||(t=t.dependencies,t!==null&&Bl(t)&&(Te=!0))}function jm(t,n,i,o){bt=t;var u=0;do{if(Jr&&(Zr=null),po=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,Ee=Yt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=_p,d=n(i,o)}while(Jr);return d}function Jw(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?yo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(bt.flags|=1024),n}function uh(){var t=Zl!==0;return Zl=0,t}function hh(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function dh(t){if(Jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Jl=!1}Ra=0,Ee=Yt=bt=null,Jr=!1,po=Zl=0,Zr=null}function We(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?bt.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function de(){if(Yt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=Ee===null?bt.memoizedState:Ee.next;if(n!==null)Ee=n,Yt=t;else{if(t===null)throw bt.alternate===null?Error(r(467)):Error(r(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},Ee===null?bt.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(t){var n=po;return po+=1,Zr===null&&(Zr=[]),t=Am(Zr,t,n),n=bt,(Ee===null?n.memoizedState:Ee.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?gp:Sh),t}function tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return yo(t);if(t.$$typeof===pt)return $e(t)}throw Error(r(438,String(t)))}function fh(t){var n=null,i=bt.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Wl(),bt.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),o=0;o<t;o++)i[o]=x;return n.index++,i}function xa(t,n){return typeof n=="function"?n(t):n}function ec(t){var n=de();return mh(n,Yt,t)}function mh(t,n,i){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=i;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var p=u.next;u.next=d.next,d.next=p}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=p=null,D=null,z=n,H=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Dt&Q)===Q:(Ra&Q)===Q){var U=z.revertLane;if(U===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Fr&&(H=!0);else if((Ra&U)===U){z=z.next,U===Fr&&(H=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},D===null?(w=D=Q,p=d):D=D.next=Q,bt.lanes|=U,di|=U;Q=z.action,lr&&i(d,Q),d=z.hasEagerState?z.eagerState:i(d,Q)}else U={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},D===null?(w=D=U,p=d):D=D.next=U,bt.lanes|=Q,di|=Q;z=z.next}while(z!==null&&z!==n);if(D===null?p=d:D.next=w,!hn(d,t.memoizedState)&&(Te=!0,H&&(i=Qr,i!==null)))throw i;t.memoizedState=d,t.baseState=p,t.baseQueue=D,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function ph(t){var n=de(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=t;var o=i.dispatch,u=i.pending,d=n.memoizedState;if(u!==null){i.pending=null;var p=u=u.next;do d=t(d,p.action),p=p.next;while(p!==u);hn(d,n.memoizedState)||(Te=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),i.lastRenderedState=d}return[d,o]}function km(t,n,i){var o=bt,u=de(),d=Vt;if(d){if(i===void 0)throw Error(r(407));i=i()}else i=n();var p=!hn((Yt||u).memoizedState,i);if(p&&(u.memoizedState=i,Te=!0),u=u.queue,_h(qm.bind(null,o,u,t),[t]),u.getSnapshot!==n||p||Ee!==null&&Ee.memoizedState.tag&1){if(o.flags|=2048,Wr(9,{destroy:void 0},Um.bind(null,o,u,i,n),null),Jt===null)throw Error(r(349));d||(Ra&127)!==0||zm(o,n,i)}return i}function zm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=bt.updateQueue,n===null?(n=Wl(),bt.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Um(t,n,i,o){n.value=i,n.getSnapshot=o,$m(n)&&Bm(t)}function qm(t,n,i){return i(function(){$m(n)&&Bm(t)})}function $m(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!hn(t,i)}catch{return!0}}function Bm(t){var n=Wi(t,2);n!==null&&on(n,t,2)}function yh(t){var n=We();if(typeof t=="function"){var i=t;if(t=i(),lr){_n(!0);try{i()}finally{_n(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function Hm(t,n,i,o){return t.baseState=i,mh(t,Yt,typeof o=="function"?o:xa)}function Zw(t,n,i,o,u){if(ic(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){d.listeners.push(p)}};P.T!==null?i(!0):d.isTransition=!1,o(d),i=n.pending,i===null?(d.next=n.pending=d,Pm(n,d)):(d.next=i.next,n.pending=i.next=d)}}function Pm(t,n){var i=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,p={};P.T=p;try{var w=i(u,o),D=P.S;D!==null&&D(p,w),Gm(t,n,w)}catch(z){gh(t,n,z)}finally{d!==null&&p.types!==null&&(d.types=p.types),P.T=d}}else try{d=i(u,o),Gm(t,n,d)}catch(z){gh(t,n,z)}}function Gm(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(o){Fm(t,n,o)},function(o){return gh(t,n,o)}):Fm(t,n,i)}function Fm(t,n,i){n.status="fulfilled",n.value=i,Qm(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,Pm(t,i)))}function gh(t,n,i){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=i,Qm(n),n=n.next;while(n!==o)}t.action=null}function Qm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ym(t,n){return n}function Km(t,n){if(Vt){var i=Jt.formState;if(i!==null){t:{var o=bt;if(Vt){if(Wt){e:{for(var u=Wt,d=Nn;u.nodeType!==8;){if(!d){u=null;break e}if(u=In(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Wt=In(u.nextSibling),o=u.data==="F!";break t}}ai(o)}o=!1}o&&(n=i[0])}}return i=We(),i.memoizedState=i.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:n},i.queue=o,i=mp.bind(null,bt,o),o.dispatch=i,o=yh(!1),d=bh.bind(null,bt,!1,o.queue),o=We(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,i=Zw.bind(null,bt,u,d,i),u.dispatch=i,o.memoizedState=t,[n,i,!1]}function Xm(t){var n=de();return Jm(n,Yt,t)}function Jm(t,n,i){if(n=mh(t,n,Ym)[0],t=ec(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(p){throw p===Yr?Gl:p}else o=n;n=de();var u=n.queue,d=u.dispatch;return i!==n.memoizedState&&(bt.flags|=2048,Wr(9,{destroy:void 0},Ww.bind(null,u,i),null)),[o,d,t]}function Ww(t,n){t.action=n}function Zm(t){var n=de(),i=Yt;if(i!==null)return Jm(n,i,t);de(),n=n.memoizedState,i=de();var o=i.queue.dispatch;return i.memoizedState=t,[n,o,!1]}function Wr(t,n,i,o){return t={tag:t,create:i,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Wl(),bt.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(o=i.next,i.next=t,t.next=o,n.lastEffect=t),t}function Wm(){return de().memoizedState}function nc(t,n,i,o){var u=We();bt.flags|=t,u.memoizedState=Wr(1|n,{destroy:void 0},i,o===void 0?null:o)}function ac(t,n,i,o){var u=de();o=o===void 0?null:o;var d=u.memoizedState.inst;Yt!==null&&o!==null&&lh(o,Yt.memoizedState.deps)?u.memoizedState=Wr(n,d,i,o):(bt.flags|=t,u.memoizedState=Wr(1|n,d,i,o))}function tp(t,n){nc(8390656,8,t,n)}function _h(t,n){ac(2048,8,t,n)}function t0(t){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=Wl(),bt.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function ep(t){var n=de().memoizedState;return t0({ref:n,nextImpl:t}),function(){if(($t&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function np(t,n){return ac(4,2,t,n)}function ap(t,n){return ac(4,4,t,n)}function ip(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rp(t,n,i){i=i!=null?i.concat([t]):null,ac(4,4,ip.bind(null,n,t),i)}function vh(){}function sp(t,n){var i=de();n=n===void 0?null:n;var o=i.memoizedState;return n!==null&&lh(n,o[1])?o[0]:(i.memoizedState=[t,n],t)}function op(t,n){var i=de();n=n===void 0?null:n;var o=i.memoizedState;if(n!==null&&lh(n,o[1]))return o[0];if(o=t(),lr){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[o,n],o}function wh(t,n,i){return i===void 0||(Ra&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=ly(),bt.lanes|=t,di|=t,i)}function lp(t,n,i,o){return hn(i,n)?i:Xr.current!==null?(t=wh(t,i,o),hn(t,n)||(Te=!0),t):(Ra&42)===0||(Ra&1073741824)!==0&&(Dt&261930)===0?(Te=!0,t.memoizedState=i):(t=ly(),bt.lanes|=t,di|=t,n)}function cp(t,n,i,o,u){var d=et.p;et.p=d!==0&&8>d?d:8;var p=P.T,w={};P.T=w,bh(t,!1,n,i);try{var D=u(),z=P.S;if(z!==null&&z(w,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var H=Kw(D,o);go(t,n,H,gn(t))}else go(t,n,o,gn(t))}catch(Q){go(t,n,{then:function(){},status:"rejected",reason:Q},gn())}finally{et.p=d,p!==null&&w.types!==null&&(p.types=w.types),P.T=p}}function e0(){}function Eh(t,n,i,o){if(t.tag!==5)throw Error(r(476));var u=up(t).queue;cp(t,u,n,ht,i===null?e0:function(){return hp(t),i(o)})}function up(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:ht},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function hp(t){var n=up(t);n.next===null&&(n=t.alternate.memoizedState),go(t,n.next.queue,{},gn())}function Th(){return $e(Oo)}function dp(){return de().memoizedState}function fp(){return de().memoizedState}function n0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=gn();t=si(i);var o=oi(n,t,i);o!==null&&(on(o,n,i),ho(o,n,i)),n={cache:Ju()},t.payload=n;return}n=n.return}}function a0(t,n,i){var o=gn();i={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ic(t)?pp(n,i):(i=qu(t,n,i,o),i!==null&&(on(i,t,o),yp(i,n,o)))}function mp(t,n,i){var o=gn();go(t,n,i,o)}function go(t,n,i,o){var u={lane:o,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ic(t))pp(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var p=n.lastRenderedState,w=d(p,i);if(u.hasEagerState=!0,u.eagerState=w,hn(w,p))return zl(t,n,u,0),Jt===null&&kl(),!1}catch{}finally{}if(i=qu(t,n,u,o),i!==null)return on(i,t,o),yp(i,n,o),!0}return!1}function bh(t,n,i,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ic(t)){if(n)throw Error(r(479))}else n=qu(t,i,o,2),n!==null&&on(n,t,2)}function ic(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function pp(t,n){Jr=Jl=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function yp(t,n,i){if((i&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,i|=o,n.lanes=i,zs(t,i)}}var _o={readContext:$e,use:tc,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useLayoutEffect:oe,useInsertionEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useSyncExternalStore:oe,useId:oe,useHostTransitionStatus:oe,useFormState:oe,useActionState:oe,useOptimistic:oe,useMemoCache:oe,useCacheRefresh:oe};_o.useEffectEvent=oe;var gp={readContext:$e,use:tc,useCallback:function(t,n){return We().memoizedState=[t,n===void 0?null:n],t},useContext:$e,useEffect:tp,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,nc(4194308,4,ip.bind(null,n,t),i)},useLayoutEffect:function(t,n){return nc(4194308,4,t,n)},useInsertionEffect:function(t,n){nc(4,2,t,n)},useMemo:function(t,n){var i=We();n=n===void 0?null:n;var o=t();if(lr){_n(!0);try{t()}finally{_n(!1)}}return i.memoizedState=[o,n],o},useReducer:function(t,n,i){var o=We();if(i!==void 0){var u=i(n);if(lr){_n(!0);try{i(n)}finally{_n(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=a0.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=We();return t={current:t},n.memoizedState=t},useState:function(t){t=yh(t);var n=t.queue,i=mp.bind(null,bt,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:vh,useDeferredValue:function(t,n){var i=We();return wh(i,t,n)},useTransition:function(){var t=yh(!1);return t=cp.bind(null,bt,t.queue,!0,!1),We().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var o=bt,u=We();if(Vt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Jt===null)throw Error(r(349));(Dt&127)!==0||zm(o,n,i)}u.memoizedState=i;var d={value:i,getSnapshot:n};return u.queue=d,tp(qm.bind(null,o,d,t),[t]),o.flags|=2048,Wr(9,{destroy:void 0},Um.bind(null,o,d,i,n),null),i},useId:function(){var t=We(),n=Jt.identifierPrefix;if(Vt){var i=da,o=ha;i=(o&~(1<<32-ce(o)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Zl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Xw++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Th,useFormState:Km,useActionState:Km,useOptimistic:function(t){var n=We();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=bh.bind(null,bt,!0,i),i.dispatch=n,[t,n]},useMemoCache:fh,useCacheRefresh:function(){return We().memoizedState=n0.bind(null,bt)},useEffectEvent:function(t){var n=We(),i={impl:t};return n.memoizedState=i,function(){if(($t&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}},Sh={readContext:$e,use:tc,useCallback:sp,useContext:$e,useEffect:_h,useImperativeHandle:rp,useInsertionEffect:np,useLayoutEffect:ap,useMemo:op,useReducer:ec,useRef:Wm,useState:function(){return ec(xa)},useDebugValue:vh,useDeferredValue:function(t,n){var i=de();return lp(i,Yt.memoizedState,t,n)},useTransition:function(){var t=ec(xa)[0],n=de().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:km,useId:dp,useHostTransitionStatus:Th,useFormState:Xm,useActionState:Xm,useOptimistic:function(t,n){var i=de();return Hm(i,Yt,t,n)},useMemoCache:fh,useCacheRefresh:fp};Sh.useEffectEvent=ep;var _p={readContext:$e,use:tc,useCallback:sp,useContext:$e,useEffect:_h,useImperativeHandle:rp,useInsertionEffect:np,useLayoutEffect:ap,useMemo:op,useReducer:ph,useRef:Wm,useState:function(){return ph(xa)},useDebugValue:vh,useDeferredValue:function(t,n){var i=de();return Yt===null?wh(i,t,n):lp(i,Yt.memoizedState,t,n)},useTransition:function(){var t=ph(xa)[0],n=de().memoizedState;return[typeof t=="boolean"?t:yo(t),n]},useSyncExternalStore:km,useId:dp,useHostTransitionStatus:Th,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var i=de();return Yt!==null?Hm(i,Yt,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:fh,useCacheRefresh:fp};_p.useEffectEvent=ep;function Ch(t,n,i,o){n=t.memoizedState,i=i(o,n),i=i==null?n:b({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Ah={enqueueSetState:function(t,n,i){t=t._reactInternals;var o=gn(),u=si(o);u.payload=n,i!=null&&(u.callback=i),n=oi(t,u,o),n!==null&&(on(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var o=gn(),u=si(o);u.tag=1,u.payload=n,i!=null&&(u.callback=i),n=oi(t,u,o),n!==null&&(on(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=gn(),o=si(i);o.tag=2,n!=null&&(o.callback=n),n=oi(t,o,i),n!==null&&(on(n,t,i),ho(n,t,i))}};function vp(t,n,i,o,u,d,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,p):n.prototype&&n.prototype.isPureReactComponent?!ao(i,o)||!ao(u,d):!0}function wp(t,n,i,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,o),n.state!==t&&Ah.enqueueReplaceState(n,n.state,null)}function cr(t,n){var i=n;if("ref"in n){i={};for(var o in n)o!=="ref"&&(i[o]=n[o])}if(t=t.defaultProps){i===n&&(i=b({},i));for(var u in t)i[u]===void 0&&(i[u]=t[u])}return i}function Ep(t){jl(t)}function Tp(t){console.error(t)}function bp(t){jl(t)}function rc(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Sp(t,n,i){try{var o=t.onCaughtError;o(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Nh(t,n,i){return i=si(i),i.tag=3,i.payload={element:null},i.callback=function(){rc(t,n)},i}function Cp(t){return t=si(t),t.tag=3,t}function Ap(t,n,i,o){var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Sp(n,i,o)}}var p=i.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){Sp(n,i,o),typeof u!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function i0(t,n,i,o,u){if(i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=i.alternate,n!==null&&Gr(n,i,u,!0),i=fn.current,i!==null){switch(i.tag){case 31:case 13:return Dn===null?gc():i.alternate===null&&le===0&&(le=3),i.flags&=-257,i.flags|=65536,i.lanes=u,o===Fl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([o]):n.add(o),Zh(t,o,u)),!1;case 22:return i.flags|=65536,o===Fl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([o]):i.add(o)),Zh(t,o,u)),!1}throw Error(r(435,i.tag))}return Zh(t,o,u),gc(),!1}if(Vt)return n=fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Fu&&(t=Error(r(422),{cause:o}),so(Sn(t,i)))):(o!==Fu&&(n=Error(r(423),{cause:o}),so(Sn(n,i))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Sn(o,i),u=Nh(t.stateNode,o,u),ah(t,u),le!==4&&(le=2)),!1;var d=Error(r(520),{cause:o});if(d=Sn(d,i),Ao===null?Ao=[d]:Ao.push(d),le!==4&&(le=2),n===null)return!0;o=Sn(o,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=u&-u,i.lanes|=t,t=Nh(i.stateNode,o,t),ah(i,t),!1;case 1:if(n=i.type,d=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fi===null||!fi.has(d))))return i.flags|=65536,u&=-u,i.lanes|=u,u=Cp(u),Ap(u,t,i,o),ah(i,u),!1}i=i.return}while(i!==null);return!1}var Dh=Error(r(461)),Te=!1;function Be(t,n,i,o){n.child=t===null?Rm(n,null,i,o):or(n,t.child,i,o)}function Np(t,n,i,o,u){i=i.render;var d=n.ref;if("ref"in o){var p={};for(var w in o)w!=="ref"&&(p[w]=o[w])}else p=o;return ar(n),o=ch(t,n,i,p,d,u),w=uh(),t!==null&&!Te?(hh(t,n,u),Va(t,n,u)):(Vt&&w&&Pu(n),n.flags|=1,Be(t,n,o,u),n.child)}function Dp(t,n,i,o,u){if(t===null){var d=i.type;return typeof d=="function"&&!$u(d)&&d.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=d,Ip(t,n,d,o,u)):(t=ql(i.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!jh(t,u)){var p=d.memoizedProps;if(i=i.compare,i=i!==null?i:ao,i(p,o)&&t.ref===n.ref)return Va(t,n,u)}return n.flags|=1,t=Aa(d,o),t.ref=n.ref,t.return=n,n.child=t}function Ip(t,n,i,o,u){if(t!==null){var d=t.memoizedProps;if(ao(d,o)&&t.ref===n.ref)if(Te=!1,n.pendingProps=o=d,jh(t,u))(t.flags&131072)!==0&&(Te=!0);else return n.lanes=t.lanes,Va(t,n,u)}return Ih(t,n,i,o,u)}function Rp(t,n,i,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|i:i,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return xp(t,n,d,i,o)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pl(n,d!==null?d.cachePool:null),d!==null?Mm(n,d):rh(),Om(n);else return o=n.lanes=536870912,xp(t,n,d!==null?d.baseLanes|i:i,i,o)}else d!==null?(Pl(n,d.cachePool),Mm(n,d),ci(),n.memoizedState=null):(t!==null&&Pl(n,null),rh(),ci());return Be(t,n,u,i),n.child}function vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function xp(t,n,i,o,u){var d=Wu();return d=d===null?null:{parent:we._currentValue,pool:d},n.memoizedState={baseLanes:i,cachePool:d},t!==null&&Pl(n,null),rh(),Om(n),t!==null&&Gr(t,n,o,!0),n.childLanes=u,null}function sc(t,n){return n=lc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vp(t,n,i){return or(n,t.child,null,i),t=sc(n,n.pendingProps),t.flags|=2,mn(n),n.memoizedState=null,t}function r0(t,n,i){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Vt){if(o.mode==="hidden")return t=sc(n,o),n.lanes=536870912,vo(null,t);if(oh(n),(t=Wt)?(t=Py(t,Nn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ei!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},i=pm(t),i.return=n,n.child=i,qe=n,Wt=null)):t=null,t===null)throw ai(n);return n.lanes=536870912,null}return sc(n,o)}var d=t.memoizedState;if(d!==null){var p=d.dehydrated;if(oh(n),u)if(n.flags&256)n.flags&=-257,n=Vp(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Te||Gr(t,n,i,!1),u=(i&t.childLanes)!==0,Te||u){if(o=Jt,o!==null&&(p=Us(o,i),p!==0&&p!==d.retryLane))throw d.retryLane=p,Wi(t,p),on(o,t,p),Dh;gc(),n=Vp(t,n,i)}else t=d.treeContext,Wt=In(p.nextSibling),qe=n,Vt=!0,ni=null,Nn=!1,t!==null&&_m(n,t),n=sc(n,o),n.flags|=4096;return n}return t=Aa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function oc(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(r(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Ih(t,n,i,o,u){return ar(n),i=ch(t,n,i,o,void 0,u),o=uh(),t!==null&&!Te?(hh(t,n,u),Va(t,n,u)):(Vt&&o&&Pu(n),n.flags|=1,Be(t,n,i,u),n.child)}function Mp(t,n,i,o,u,d){return ar(n),n.updateQueue=null,i=jm(n,o,i,u),Lm(t),o=uh(),t!==null&&!Te?(hh(t,n,d),Va(t,n,d)):(Vt&&o&&Pu(n),n.flags|=1,Be(t,n,i,d),n.child)}function Op(t,n,i,o,u){if(ar(n),n.stateNode===null){var d=$r,p=i.contextType;typeof p=="object"&&p!==null&&(d=$e(p)),d=new i(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ah,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},eh(n),p=i.contextType,d.context=typeof p=="object"&&p!==null?$e(p):$r,d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ch(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(p=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),p!==d.state&&Ah.enqueueReplaceState(d,d.state,null),mo(n,o,d,u),fo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,D=cr(i,w);d.props=D;var z=d.context,H=i.contextType;p=$r,typeof H=="object"&&H!==null&&(p=$e(H));var Q=i.getDerivedStateFromProps;H=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,H||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||z!==p)&&wp(n,d,o,p),ri=!1;var U=n.memoizedState;d.state=U,mo(n,o,d,u),fo(),z=n.memoizedState,w||U!==z||ri?(typeof Q=="function"&&(Ch(n,i,Q,o),z=n.memoizedState),(D=ri||vp(n,i,D,o,U,z,p))?(H||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=z),d.props=o,d.state=z,d.context=p,o=D):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,nh(t,n),p=n.memoizedProps,H=cr(i,p),d.props=H,Q=n.pendingProps,U=d.context,z=i.contextType,D=$r,typeof z=="object"&&z!==null&&(D=$e(z)),w=i.getDerivedStateFromProps,(z=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(p!==Q||U!==D)&&wp(n,d,o,D),ri=!1,U=n.memoizedState,d.state=U,mo(n,o,d,u),fo();var $=n.memoizedState;p!==Q||U!==$||ri||t!==null&&t.dependencies!==null&&Bl(t.dependencies)?(typeof w=="function"&&(Ch(n,i,w,o),$=n.memoizedState),(H=ri||vp(n,i,H,o,U,$,D)||t!==null&&t.dependencies!==null&&Bl(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,$,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,$,D)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||p===t.memoizedProps&&U===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&U===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=D,o=H):(typeof d.componentDidUpdate!="function"||p===t.memoizedProps&&U===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&U===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,oc(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,i=o&&typeof i.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=or(n,t.child,null,u),n.child=or(n,null,i,u)):Be(t,n,i,u),n.memoizedState=d.state,t=n.child):t=Va(t,n,u),t}function Lp(t,n,i,o){return er(),n.flags|=256,Be(t,n,i,o),n.child}var Rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xh(t){return{baseLanes:t,cachePool:Sm()}}function Vh(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=yn),t}function jp(t,n,i){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,p;if((p=d)||(p=t!==null&&t.memoizedState===null?!1:(he.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,t===null){if(Vt){if(u?li(n):ci(),(t=Wt)?(t=Py(t,Nn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ei!==null?{id:ha,overflow:da}:null,retryLane:536870912,hydrationErrors:null},i=pm(t),i.return=n,n.child=i,qe=n,Wt=null)):t=null,t===null)throw ai(n);return md(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(ci(),u=n.mode,w=lc({mode:"hidden",children:w},u),o=tr(o,u,i,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=xh(i),o.childLanes=Vh(t,p,i),n.memoizedState=Rh,vo(null,o)):(li(n),Mh(n,w))}var D=t.memoizedState;if(D!==null&&(w=D.dehydrated,w!==null)){if(d)n.flags&256?(li(n),n.flags&=-257,n=Oh(t,n,i)):n.memoizedState!==null?(ci(),n.child=t.child,n.flags|=128,n=null):(ci(),w=o.fallback,u=n.mode,o=lc({mode:"visible",children:o.children},u),w=tr(w,u,i,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,or(n,t.child,null,i),o=n.child,o.memoizedState=xh(i),o.childLanes=Vh(t,p,i),n.memoizedState=Rh,n=vo(null,o));else if(li(n),md(w)){if(p=w.nextSibling&&w.nextSibling.dataset,p)var z=p.dgst;p=z,o=Error(r(419)),o.stack="",o.digest=p,so({value:o,source:null,stack:null}),n=Oh(t,n,i)}else if(Te||Gr(t,n,i,!1),p=(i&t.childLanes)!==0,Te||p){if(p=Jt,p!==null&&(o=Us(p,i),o!==0&&o!==D.retryLane))throw D.retryLane=o,Wi(t,o),on(p,t,o),Dh;fd(w)||gc(),n=Oh(t,n,i)}else fd(w)?(n.flags|=192,n.child=t.child,n=null):(t=D.treeContext,Wt=In(w.nextSibling),qe=n,Vt=!0,ni=null,Nn=!1,t!==null&&_m(n,t),n=Mh(n,o.children),n.flags|=4096);return n}return u?(ci(),w=o.fallback,u=n.mode,D=t.child,z=D.sibling,o=Aa(D,{mode:"hidden",children:o.children}),o.subtreeFlags=D.subtreeFlags&65011712,z!==null?w=Aa(z,w):(w=tr(w,u,i,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,vo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=xh(i):(u=w.cachePool,u!==null?(D=we._currentValue,u=u.parent!==D?{parent:D,pool:D}:u):u=Sm(),w={baseLanes:w.baseLanes|i,cachePool:u}),o.memoizedState=w,o.childLanes=Vh(t,p,i),n.memoizedState=Rh,vo(t.child,o)):(li(n),i=t.child,t=i.sibling,i=Aa(i,{mode:"visible",children:o.children}),i.return=n,i.sibling=null,t!==null&&(p=n.deletions,p===null?(n.deletions=[t],n.flags|=16):p.push(t)),n.child=i,n.memoizedState=null,i)}function Mh(t,n){return n=lc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function lc(t,n){return t=dn(22,t,null,n),t.lanes=0,t}function Oh(t,n,i){return or(n,t.child,null,i),t=Mh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function kp(t,n,i){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ku(t.return,n,i)}function Lh(t,n,i,o,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:u,treeForkCount:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=o,p.tail=i,p.tailMode=u,p.treeForkCount=d)}function zp(t,n,i){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var p=he.current,w=(p&2)!==0;if(w?(p=p&1|2,n.flags|=128):p&=1,nt(he,p),Be(t,n,o,i),o=Vt?ro:0,!w&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,i,n);else if(t.tag===19)kp(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(i=n.child,u=null;i!==null;)t=i.alternate,t!==null&&Xl(t)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),Lh(n,!1,u,i,d,o);break;case"backwards":case"unstable_legacy-backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Xl(t)===null){n.child=u;break}t=u.sibling,u.sibling=i,i=u,u=t}Lh(n,!0,i,null,d,o);break;case"together":Lh(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Va(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),di|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Gr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,i=Aa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=Aa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function jh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Bl(t)))}function s0(t,n,i){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),ii(n,we,t.memoizedState.cache),er();break;case 27:case 5:Li(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:ii(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,oh(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(li(n),n.flags|=128,null):(i&n.child.childLanes)!==0?jp(t,n,i):(li(n),t=Va(t,n,i),t!==null?t.sibling:null);li(n);break;case 19:var u=(t.flags&128)!==0;if(o=(i&n.childLanes)!==0,o||(Gr(t,n,i,!1),o=(i&n.childLanes)!==0),u){if(o)return zp(t,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),nt(he,he.current),o)break;return null;case 22:return n.lanes=0,Rp(t,n,i,n.pendingProps);case 24:ii(n,we,t.memoizedState.cache)}return Va(t,n,i)}function Up(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)Te=!0;else{if(!jh(t,i)&&(n.flags&128)===0)return Te=!1,s0(t,n,i);Te=(t.flags&131072)!==0}else Te=!1,Vt&&(n.flags&1048576)!==0&&gm(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=rr(n.elementType),n.type=t,typeof t=="function")$u(t)?(o=cr(t,o),n.tag=1,n=Op(null,n,t,o,i)):(n.tag=0,n=Ih(null,n,t,o,i));else{if(t!=null){var u=t.$$typeof;if(u===lt){n.tag=11,n=Np(null,n,t,o,i);break t}else if(u===C){n.tag=14,n=Dp(null,n,t,o,i);break t}}throw n=ne(t)||t,Error(r(306,n,""))}}return n;case 0:return Ih(t,n,n.type,n.pendingProps,i);case 1:return o=n.type,u=cr(o,n.pendingProps),Op(t,n,o,u,i);case 3:t:{if(De(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,nh(t,n),mo(n,o,null,i);var p=n.memoizedState;if(o=p.cache,ii(n,we,o),o!==d.cache&&Xu(n,[we],i,!0),fo(),o=p.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Lp(t,n,o,i);break t}else if(o!==u){u=Sn(Error(r(424)),n),so(u),n=Lp(t,n,o,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Wt=In(t.firstChild),qe=n,Vt=!0,ni=null,Nn=!0,i=Rm(n,null,o,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(er(),o===u){n=Va(t,n,i);break t}Be(t,n,o,i)}n=n.child}return n;case 26:return oc(t,n),t===null?(i=Xy(n.type,null,n.pendingProps,null))?n.memoizedState=i:Vt||(i=n.type,t=n.pendingProps,o=Sc(St.current).createElement(i),o[ge]=n,o[Me]=t,He(o,i,t),_e(o),n.stateNode=o):n.memoizedState=Xy(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Li(n),t===null&&Vt&&(o=n.stateNode=Qy(n.type,n.pendingProps,St.current),qe=n,Nn=!0,u=Wt,gi(n.type)?(pd=u,Wt=In(o.firstChild)):Wt=u),Be(t,n,n.pendingProps.children,i),oc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Vt&&((u=o=Wt)&&(o=j0(o,n.type,n.pendingProps,Nn),o!==null?(n.stateNode=o,qe=n,Wt=In(o.firstChild),Nn=!1,u=!0):u=!1),u||ai(n)),Li(n),u=n.type,d=n.pendingProps,p=t!==null?t.memoizedProps:null,o=d.children,ud(u,d)?o=null:p!==null&&ud(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=ch(t,n,Jw,null,null,i),Oo._currentValue=u),oc(t,n),Be(t,n,o,i),n.child;case 6:return t===null&&Vt&&((t=i=Wt)&&(i=k0(i,n.pendingProps,Nn),i!==null?(n.stateNode=i,qe=n,Wt=null,t=!0):t=!1),t||ai(n)),null;case 13:return jp(t,n,i);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=or(n,null,o,i):Be(t,n,o,i),n.child;case 11:return Np(t,n,n.type,n.pendingProps,i);case 7:return Be(t,n,n.pendingProps,i),n.child;case 8:return Be(t,n,n.pendingProps.children,i),n.child;case 12:return Be(t,n,n.pendingProps.children,i),n.child;case 10:return o=n.pendingProps,ii(n,n.type,o.value),Be(t,n,o.children,i),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ar(n),u=$e(u),o=o(u),n.flags|=1,Be(t,n,o,i),n.child;case 14:return Dp(t,n,n.type,n.pendingProps,i);case 15:return Ip(t,n,n.type,n.pendingProps,i);case 19:return zp(t,n,i);case 31:return r0(t,n,i);case 22:return Rp(t,n,i,n.pendingProps);case 24:return ar(n),o=$e(we),t===null?(u=Wu(),u===null&&(u=Jt,d=Ju(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=i),u=d),n.memoizedState={parent:o,cache:u},eh(n),ii(n,we,u)):((t.lanes&i)!==0&&(nh(t,n),mo(n,null,null,i),fo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ii(n,we,o)):(o=d.cache,ii(n,we,o),o!==u.cache&&Xu(n,[we],i,!0))),Be(t,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ma(t){t.flags|=4}function kh(t,n,i,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(dy())t.flags|=8192;else throw sr=Fl,th}else t.flags&=-16777217}function qp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!eg(n))if(dy())t.flags|=8192;else throw sr=Fl,th}function cc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?pl():536870912,t.lanes|=n,as|=n)}function wo(t,n){if(!Vt)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function te(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,o=0;if(n)for(var u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=i,n}function o0(t,n,i){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return te(n),null;case 3:return i=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ia(we),ae(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pr(n)?Ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),te(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Ma(n),d!==null?(te(n),qp(n,d)):(te(n),kh(n,u,null,o,i))):d?d!==t.memoizedState?(Ma(n),te(n),qp(n,d)):(te(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ma(n),te(n),kh(n,u,t,o,i)),null;case 27:if(Tr(n),i=St.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ma(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return te(n),null}t=rt.current,Pr(n)?vm(n):(t=Qy(u,o,i),n.stateNode=t,Ma(n))}return te(n),null;case 5:if(Tr(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ma(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return te(n),null}if(d=rt.current,Pr(n))vm(n);else{var p=Sc(St.current);switch(d){case 1:d=p.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=p.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=p.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=p.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?p.createElement("select",{is:o.is}):p.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?p.createElement(u,{is:o.is}):p.createElement(u)}}d[ge]=n,d[Me]=o;t:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)d.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break t;for(;p.sibling===null;){if(p.return===null||p.return===n)break t;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=d;t:switch(He(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ma(n)}}return te(n),kh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ma(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=St.current,Pr(n)){if(t=n.stateNode,i=n.memoizedProps,o=null,u=qe,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ge]=n,t=!!(t.nodeValue===i||o!==null&&o.suppressHydrationWarning===!0||jy(t.nodeValue,i)),t||ai(n,!0)}else t=Sc(t).createTextNode(o),t[ge]=n,n.stateNode=t}return te(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(o=Pr(n),i!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ge]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;te(n),t=!1}else i=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(mn(n),n):(mn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return te(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Pr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ge]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;te(n),u=!1}else u=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(mn(n),n):(mn(n),null)}return mn(n),(n.flags&128)!==0?(n.lanes=i,n):(i=o!==null,t=t!==null&&t.memoizedState!==null,i&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),cc(n,n.updateQueue),te(n),null);case 4:return ae(),t===null&&rd(n.stateNode.containerInfo),te(n),null;case 10:return Ia(n.type),te(n),null;case 19:if(Y(he),o=n.memoizedState,o===null)return te(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)wo(o,!1);else{if(le!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Xl(t),d!==null){for(n.flags|=128,wo(o,!1),t=d.updateQueue,n.updateQueue=t,cc(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)mm(i,t),i=i.sibling;return nt(he,he.current&1|2),Vt&&Na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Je()>mc&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Xl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,cc(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Vt)return te(n),null}else 2*Je()-o.renderingStartTime>mc&&i!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Je(),t.sibling=null,i=he.current,nt(he,u?i&1|2:i&1),Vt&&Na(n,o.treeForkCount),t):(te(n),null);case 22:case 23:return mn(n),sh(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(i&536870912)!==0&&(n.flags&128)===0&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),i=n.updateQueue,i!==null&&cc(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==i&&(n.flags|=2048),t!==null&&Y(ir),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),Ia(we),te(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function l0(t,n){switch(Gu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ia(we),ae(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Tr(n),null;case 31:if(n.memoizedState!==null){if(mn(n),n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(mn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(he),null;case 4:return ae(),null;case 10:return Ia(n.type),null;case 22:case 23:return mn(n),sh(),t!==null&&Y(ir),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ia(we),null;case 25:return null;default:return null}}function $p(t,n){switch(Gu(n),n.tag){case 3:Ia(we),ae();break;case 26:case 27:case 5:Tr(n);break;case 4:ae();break;case 31:n.memoizedState!==null&&mn(n);break;case 13:mn(n);break;case 19:Y(he);break;case 10:Ia(n.type);break;case 22:case 23:mn(n),sh(),t!==null&&Y(ir);break;case 24:Ia(we)}}function Eo(t,n){try{var i=n.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&t)===t){o=void 0;var d=i.create,p=i.inst;o=d(),p.destroy=o}i=i.next}while(i!==u)}}catch(w){Ft(n,n.return,w)}}function ui(t,n,i){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var p=o.inst,w=p.destroy;if(w!==void 0){p.destroy=void 0,u=n;var D=i,z=w;try{z()}catch(H){Ft(u,D,H)}}}o=o.next}while(o!==d)}}catch(H){Ft(n,n.return,H)}}function Bp(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Vm(n,i)}catch(o){Ft(t,t.return,o)}}}function Hp(t,n,i){i.props=cr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(o){Ft(t,n,o)}}function To(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof i=="function"?t.refCleanup=i(o):i.current=o}}catch(u){Ft(t,n,u)}}function fa(t,n){var i=t.ref,o=t.refCleanup;if(i!==null)if(typeof o=="function")try{o()}catch(u){Ft(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(u){Ft(t,n,u)}else i.current=null}function Pp(t){var n=t.type,i=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&o.focus();break t;case"img":i.src?o.src=i.src:i.srcSet&&(o.srcset=i.srcSet)}}catch(u){Ft(t,t.return,u)}}function zh(t,n,i){try{var o=t.stateNode;R0(o,t.type,i,n),o[Me]=n}catch(u){Ft(t,t.return,u)}}function Gp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gi(t.type)||t.tag===4}function Uh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gi(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qh(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(t,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(t),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=kn));else if(o!==4&&(o===27&&gi(t.type)&&(i=t.stateNode,n=null),t=t.child,t!==null))for(qh(t,n,i),t=t.sibling;t!==null;)qh(t,n,i),t=t.sibling}function uc(t,n,i){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(o!==4&&(o===27&&gi(t.type)&&(i=t.stateNode),t=t.child,t!==null))for(uc(t,n,i),t=t.sibling;t!==null;)uc(t,n,i),t=t.sibling}function Fp(t){var n=t.stateNode,i=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);He(n,o,i),n[ge]=t,n[Me]=i}catch(d){Ft(t,t.return,d)}}var Oa=!1,be=!1,$h=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,Le=null;function c0(t,n){if(t=t.containerInfo,ld=xc,t=rm(t),Ou(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else t:{i=(i=t.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{i.nodeType,d.nodeType}catch{i=null;break t}var p=0,w=-1,D=-1,z=0,H=0,Q=t,U=null;e:for(;;){for(var $;Q!==i||u!==0&&Q.nodeType!==3||(w=p+u),Q!==d||o!==0&&Q.nodeType!==3||(D=p+o),Q.nodeType===3&&(p+=Q.nodeValue.length),($=Q.firstChild)!==null;)U=Q,Q=$;for(;;){if(Q===t)break e;if(U===i&&++z===u&&(w=p),U===d&&++H===o&&(D=p),($=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=$}i=w===-1||D===-1?null:{start:w,end:D}}else i=null}i=i||{start:0,end:0}}else i=null;for(cd={focusedElem:t,selectionRange:i},xc=!1,Le=n;Le!==null;)if(n=Le,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Le=t;else for(;Le!==null;){switch(n=Le,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(i=0;i<t.length;i++)u=t[i],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,i=n,u=d.memoizedProps,d=d.memoizedState,o=i.stateNode;try{var st=cr(i.type,u);t=o.getSnapshotBeforeUpdate(st,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(dt){Ft(i,i.return,dt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,i=t.nodeType,i===9)dd(t);else if(i===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Le=t;break}Le=n.return}}function Yp(t,n,i){var o=i.flags;switch(i.tag){case 0:case 11:case 15:ja(t,i),o&4&&Eo(5,i);break;case 1:if(ja(t,i),o&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(p){Ft(i,i.return,p)}else{var u=cr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ft(i,i.return,p)}}o&64&&Bp(i),o&512&&To(i,i.return);break;case 3:if(ja(t,i),o&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Vm(t,n)}catch(p){Ft(i,i.return,p)}}break;case 27:n===null&&o&4&&Fp(i);case 26:case 5:ja(t,i),n===null&&o&4&&Pp(i),o&512&&To(i,i.return);break;case 12:ja(t,i);break;case 31:ja(t,i),o&4&&Jp(t,i);break;case 13:ja(t,i),o&4&&Zp(t,i),o&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=_0.bind(null,i),z0(t,i))));break;case 22:if(o=i.memoizedState!==null||Oa,!o){n=n!==null&&n.memoizedState!==null||be,u=Oa;var d=be;Oa=o,(be=n)&&!d?ka(t,i,(i.subtreeFlags&8772)!==0):ja(t,i),Oa=u,be=d}break;case 30:break;default:ja(t,i)}}function Kp(t){var n=t.alternate;n!==null&&(t.alternate=null,Kp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Nr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var re=null,nn=!1;function La(t,n,i){for(i=i.child;i!==null;)Xp(t,n,i),i=i.sibling}function Xp(t,n,i){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Mn,i)}catch{}switch(i.tag){case 26:be||fa(i,n),La(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:be||fa(i,n);var o=re,u=nn;gi(i.type)&&(re=i.stateNode,nn=!1),La(t,n,i),xo(i.stateNode),re=o,nn=u;break;case 5:be||fa(i,n);case 6:if(o=re,u=nn,re=null,La(t,n,i),re=o,nn=u,re!==null)if(nn)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(i.stateNode)}catch(d){Ft(i,n,d)}else try{re.removeChild(i.stateNode)}catch(d){Ft(i,n,d)}break;case 18:re!==null&&(nn?(t=re,By(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),hs(t)):By(re,i.stateNode));break;case 4:o=re,u=nn,re=i.stateNode.containerInfo,nn=!0,La(t,n,i),re=o,nn=u;break;case 0:case 11:case 14:case 15:ui(2,i,n),be||ui(4,i,n),La(t,n,i);break;case 1:be||(fa(i,n),o=i.stateNode,typeof o.componentWillUnmount=="function"&&Hp(i,n,o)),La(t,n,i);break;case 21:La(t,n,i);break;case 22:be=(o=be)||i.memoizedState!==null,La(t,n,i),be=o;break;default:La(t,n,i)}}function Jp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{hs(t)}catch(i){Ft(n,n.return,i)}}}function Zp(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hs(t)}catch(i){Ft(n,n.return,i)}}function u0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Qp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Qp),n;default:throw Error(r(435,t.tag))}}function hc(t,n){var i=u0(t);n.forEach(function(o){if(!i.has(o)){i.add(o);var u=v0.bind(null,t,o);o.then(u,u)}})}function an(t,n){var i=n.deletions;if(i!==null)for(var o=0;o<i.length;o++){var u=i[o],d=t,p=n,w=p;t:for(;w!==null;){switch(w.tag){case 27:if(gi(w.type)){re=w.stateNode,nn=!1;break t}break;case 5:re=w.stateNode,nn=!1;break t;case 3:case 4:re=w.stateNode.containerInfo,nn=!0;break t}w=w.return}if(re===null)throw Error(r(160));Xp(d,p,u),re=null,nn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Wp(n,t),n=n.sibling}var Hn=null;function Wp(t,n){var i=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:an(n,t),rn(t),o&4&&(ui(3,t,t.return),Eo(3,t),ui(5,t,t.return));break;case 1:an(n,t),rn(t),o&512&&(be||i===null||fa(i,i.return)),o&64&&Oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?o:i.concat(o))));break;case 26:var u=Hn;if(an(n,t),rn(t),o&512&&(be||i===null||fa(i,i.return)),o&4){var d=i!==null?i.memoizedState:null;if(o=t.memoizedState,i===null)if(o===null)if(t.stateNode===null){t:{o=t.type,i=t.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Wn]||d[ge]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),He(d,o,i),d[ge]=t,_e(d),o=d;break t;case"link":var p=Wy("link","href",u).get(o+(i.href||""));if(p){for(var w=0;w<p.length;w++)if(d=p[w],d.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&d.getAttribute("rel")===(i.rel==null?null:i.rel)&&d.getAttribute("title")===(i.title==null?null:i.title)&&d.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){p.splice(w,1);break e}}d=u.createElement(o),He(d,o,i),u.head.appendChild(d);break;case"meta":if(p=Wy("meta","content",u).get(o+(i.content||""))){for(w=0;w<p.length;w++)if(d=p[w],d.getAttribute("content")===(i.content==null?null:""+i.content)&&d.getAttribute("name")===(i.name==null?null:i.name)&&d.getAttribute("property")===(i.property==null?null:i.property)&&d.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&d.getAttribute("charset")===(i.charSet==null?null:i.charSet)){p.splice(w,1);break e}}d=u.createElement(o),He(d,o,i),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[ge]=t,_e(d),o=d}t.stateNode=o}else tg(u,t.type,t.stateNode);else t.stateNode=Zy(u,o,t.memoizedProps);else d!==o?(d===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):d.count--,o===null?tg(u,t.type,t.stateNode):Zy(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zh(t,t.memoizedProps,i.memoizedProps)}break;case 27:an(n,t),rn(t),o&512&&(be||i===null||fa(i,i.return)),i!==null&&o&4&&zh(t,t.memoizedProps,i.memoizedProps);break;case 5:if(an(n,t),rn(t),o&512&&(be||i===null||fa(i,i.return)),t.flags&32){u=t.stateNode;try{en(u,"")}catch(st){Ft(t,t.return,st)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,zh(t,u,i!==null?i.memoizedProps:u)),o&1024&&($h=!0);break;case 6:if(an(n,t),rn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,i=t.stateNode;try{i.nodeValue=o}catch(st){Ft(t,t.return,st)}}break;case 3:if(Nc=null,u=Hn,Hn=Cc(n.containerInfo),an(n,t),Hn=u,rn(t),o&4&&i!==null&&i.memoizedState.isDehydrated)try{hs(n.containerInfo)}catch(st){Ft(t,t.return,st)}$h&&($h=!1,ty(t));break;case 4:o=Hn,Hn=Cc(t.stateNode.containerInfo),an(n,t),rn(t),Hn=o;break;case 12:an(n,t),rn(t);break;case 31:an(n,t),rn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 13:an(n,t),rn(t),t.child.flags&8192&&t.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(fc=Je()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 22:u=t.memoizedState!==null;var D=i!==null&&i.memoizedState!==null,z=Oa,H=be;if(Oa=z||u,be=H||D,an(n,t),be=H,Oa=z,rn(t),o&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(i===null||D||Oa||be||ur(t)),i=null,n=t;;){if(n.tag===5||n.tag===26){if(i===null){D=i=n;try{if(d=D.stateNode,u)p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{w=D.stateNode;var Q=D.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;w.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(st){Ft(D,D.return,st)}}}else if(n.tag===6){if(i===null){D=n;try{D.stateNode.nodeValue=u?"":D.memoizedProps}catch(st){Ft(D,D.return,st)}}}else if(n.tag===18){if(i===null){D=n;try{var $=D.stateNode;u?Hy($,!0):Hy(D.stateNode,!1)}catch(st){Ft(D,D.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(i=o.retryQueue,i!==null&&(o.retryQueue=null,hc(t,i))));break;case 19:an(n,t),rn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 30:break;case 21:break;default:an(n,t),rn(t)}}function rn(t){var n=t.flags;if(n&2){try{for(var i,o=t.return;o!==null;){if(Gp(o)){i=o;break}o=o.return}if(i==null)throw Error(r(160));switch(i.tag){case 27:var u=i.stateNode,d=Uh(t);uc(t,d,u);break;case 5:var p=i.stateNode;i.flags&32&&(en(p,""),i.flags&=-33);var w=Uh(t);uc(t,w,p);break;case 3:case 4:var D=i.stateNode.containerInfo,z=Uh(t);qh(t,z,D);break;default:throw Error(r(161))}}catch(H){Ft(t,t.return,H)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ty(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ty(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ja(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Yp(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ui(4,n,n.return),ur(n);break;case 1:fa(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Hp(n,n.return,i),ur(n);break;case 27:xo(n.stateNode);case 26:case 5:fa(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function ka(t,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,p=d.flags;switch(d.tag){case 0:case 11:case 15:ka(u,d,i),Eo(4,d);break;case 1:if(ka(u,d,i),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(z){Ft(o,o.return,z)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var D=u.shared.hiddenCallbacks;if(D!==null)for(u.shared.hiddenCallbacks=null,u=0;u<D.length;u++)xm(D[u],w)}catch(z){Ft(o,o.return,z)}}i&&p&64&&Bp(d),To(d,d.return);break;case 27:Fp(d);case 26:case 5:ka(u,d,i),i&&o===null&&p&4&&Pp(d),To(d,d.return);break;case 12:ka(u,d,i);break;case 31:ka(u,d,i),i&&p&4&&Jp(u,d);break;case 13:ka(u,d,i),i&&p&4&&Zp(u,d);break;case 22:d.memoizedState===null&&ka(u,d,i),To(d,d.return);break;case 30:break;default:ka(u,d,i)}n=n.sibling}}function Bh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&oo(i))}function Hh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function Pn(t,n,i,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ey(t,n,i,o),n=n.sibling}function ey(t,n,i,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Pn(t,n,i,o),u&2048&&Eo(9,n);break;case 1:Pn(t,n,i,o);break;case 3:Pn(t,n,i,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){Pn(t,n,i,o),t=n.stateNode;try{var d=n.memoizedProps,p=d.id,w=d.onPostCommit;typeof w=="function"&&w(p,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(D){Ft(n,n.return,D)}}else Pn(t,n,i,o);break;case 31:Pn(t,n,i,o);break;case 13:Pn(t,n,i,o);break;case 23:break;case 22:d=n.stateNode,p=n.alternate,n.memoizedState!==null?d._visibility&2?Pn(t,n,i,o):bo(t,n):d._visibility&2?Pn(t,n,i,o):(d._visibility|=2,ts(t,n,i,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Bh(p,n);break;case 24:Pn(t,n,i,o),u&2048&&Hh(n.alternate,n);break;default:Pn(t,n,i,o)}}function ts(t,n,i,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,p=n,w=i,D=o,z=p.flags;switch(p.tag){case 0:case 11:case 15:ts(d,p,w,D,u),Eo(8,p);break;case 23:break;case 22:var H=p.stateNode;p.memoizedState!==null?H._visibility&2?ts(d,p,w,D,u):bo(d,p):(H._visibility|=2,ts(d,p,w,D,u)),u&&z&2048&&Bh(p.alternate,p);break;case 24:ts(d,p,w,D,u),u&&z&2048&&Hh(p.alternate,p);break;default:ts(d,p,w,D,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,o=n,u=o.flags;switch(o.tag){case 22:bo(i,o),u&2048&&Bh(o.alternate,o);break;case 24:bo(i,o),u&2048&&Hh(o.alternate,o);break;default:bo(i,o)}n=n.sibling}}var So=8192;function es(t,n,i){if(t.subtreeFlags&So)for(t=t.child;t!==null;)ny(t,n,i),t=t.sibling}function ny(t,n,i){switch(t.tag){case 26:es(t,n,i),t.flags&So&&t.memoizedState!==null&&X0(i,Hn,t.memoizedState,t.memoizedProps);break;case 5:es(t,n,i);break;case 3:case 4:var o=Hn;Hn=Cc(t.stateNode.containerInfo),es(t,n,i),Hn=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=So,So=16777216,es(t,n,i),So=o):es(t,n,i));break;default:es(t,n,i)}}function ay(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];Le=o,ry(o,t)}ay(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iy(t),t=t.sibling}function iy(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&ui(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,dc(t)):Co(t);break;default:Co(t)}}function dc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];Le=o,ry(o,t)}ay(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ui(8,n,n.return),dc(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,dc(n));break;default:dc(n)}t=t.sibling}}function ry(t,n){for(;Le!==null;){var i=Le;switch(i.tag){case 0:case 11:case 15:ui(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var o=i.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(i.memoizedState.cache)}if(o=i.child,o!==null)o.return=i,Le=o;else t:for(i=t;Le!==null;){o=Le;var u=o.sibling,d=o.return;if(Kp(o),o===i){Le=null;break t}if(u!==null){u.return=d,Le=u;break t}Le=d}}}var h0={getCacheForType:function(t){var n=$e(we),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return $e(we).controller.signal}},d0=typeof WeakMap=="function"?WeakMap:Map,$t=0,Jt=null,At=null,Dt=0,Gt=0,pn=null,hi=!1,ns=!1,Ph=!1,za=0,le=0,di=0,hr=0,Gh=0,yn=0,as=0,Ao=null,sn=null,Fh=!1,fc=0,sy=0,mc=1/0,pc=null,fi=null,Re=0,mi=null,is=null,Ua=0,Qh=0,Yh=null,oy=null,No=0,Kh=null;function gn(){return($t&2)!==0&&Dt!==0?Dt&-Dt:P.T!==null?ed():yl()}function ly(){if(yn===0)if((Dt&536870912)===0||Vt){var t=zi;zi<<=1,(zi&3932160)===0&&(zi=262144),yn=t}else yn=536870912;return t=fn.current,t!==null&&(t.flags|=32),yn}function on(t,n,i){(t===Jt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(rs(t,0),pi(t,Dt,yn,!1)),Ui(t,i),(($t&2)===0||t!==Jt)&&(t===Jt&&(($t&2)===0&&(hr|=i),le===4&&pi(t,Dt,yn,!1)),ma(t))}function cy(t,n,i){if(($t&6)!==0)throw Error(r(327));var o=!i&&(n&127)===0&&(n&t.expiredLanes)===0||On(t,n),u=o?p0(t,n):Jh(t,n,!0),d=o;do{if(u===0){ns&&!o&&pi(t,n,0,!1);break}else{if(i=t.current.alternate,d&&!f0(i)){u=Jh(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;t:{var w=t;u=Ao;var D=w.current.memoizedState.isDehydrated;if(D&&(rs(w,p).flags|=256),p=Jh(w,p,!1),p!==2){if(Ph&&!D){w.errorRecoveryDisabledLanes|=d,hr|=d,u=4;break t}d=sn,sn=u,d!==null&&(sn===null?sn=d:sn.push.apply(sn,d))}u=p}if(d=!1,u!==2)continue}}if(u===1){rs(t,0),pi(t,n,0,!0);break}t:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:pi(o,n,yn,!hi);break t;case 2:sn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=fc+300-Je(),10<u)){if(pi(o,n,yn,!hi),Xn(o,0,!0)!==0)break t;Ua=n,o.timeoutHandle=qy(uy.bind(null,o,i,sn,pc,Fh,n,yn,hr,as,hi,d,"Throttled",-0,0),u);break t}uy(o,i,sn,pc,Fh,n,yn,hr,as,hi,d,null,-0,0)}}break}while(!0);ma(t)}function uy(t,n,i,o,u,d,p,w,D,z,H,Q,U,$){if(t.timeoutHandle=-1,Q=n.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kn},ny(n,d,Q);var st=(d&62914560)===d?fc-Je():(d&4194048)===d?sy-Je():0;if(st=J0(Q,st),st!==null){Ua=d,t.cancelPendingCommit=st(_y.bind(null,t,n,d,i,o,u,p,w,D,H,Q,null,U,$)),pi(t,d,p,!z);return}}_y(t,n,d,i,o,u,p,w,D)}function f0(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var o=0;o<i.length;o++){var u=i[o],d=u.getSnapshot;u=u.value;try{if(!hn(d(),u))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pi(t,n,i,o){n&=~Gh,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-ce(u),p=1<<d;o[d]=-1,u&=~p}i!==0&&qi(t,i,n)}function yc(){return($t&6)===0?(Do(0),!1):!0}function Xh(){if(At!==null){if(Gt===0)var t=At.return;else t=At,Da=nr=null,dh(t),Kr=null,co=0,t=At;for(;t!==null;)$p(t.alternate,t),t=t.return;At=null}}function rs(t,n){var i=t.timeoutHandle;i!==-1&&(t.timeoutHandle=-1,M0(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),Ua=0,Xh(),Jt=t,At=i=Aa(t.current,null),Dt=n,Gt=0,pn=null,hi=!1,ns=On(t,n),Ph=!1,as=yn=Gh=hr=di=le=0,sn=Ao=null,Fh=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-ce(o),d=1<<u;n|=t[u],o&=~d}return za=n,kl(),i}function hy(t,n){bt=null,P.H=_o,n===Yr||n===Gl?(n=Nm(),Gt=3):n===th?(n=Nm(),Gt=4):Gt=n===Dh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,pn=n,At===null&&(le=1,rc(t,Sn(n,t.current)))}function dy(){var t=fn.current;return t===null?!0:(Dt&4194048)===Dt?Dn===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Dn:!1}function fy(){var t=P.H;return P.H=_o,t===null?_o:t}function my(){var t=P.A;return P.A=h0,t}function gc(){le=4,hi||(Dt&4194048)!==Dt&&fn.current!==null||(ns=!0),(di&134217727)===0&&(hr&134217727)===0||Jt===null||pi(Jt,Dt,yn,!1)}function Jh(t,n,i){var o=$t;$t|=2;var u=fy(),d=my();(Jt!==t||Dt!==n)&&(pc=null,rs(t,n)),n=!1;var p=le;t:do try{if(Gt!==0&&At!==null){var w=At,D=pn;switch(Gt){case 8:Xh(),p=6;break t;case 3:case 2:case 9:case 6:fn.current===null&&(n=!0);var z=Gt;if(Gt=0,pn=null,ss(t,w,D,z),i&&ns){p=0;break t}break;default:z=Gt,Gt=0,pn=null,ss(t,w,D,z)}}m0(),p=le;break}catch(H){hy(t,H)}while(!0);return n&&t.shellSuspendCounter++,Da=nr=null,$t=o,P.H=u,P.A=d,At===null&&(Jt=null,Dt=0,kl()),p}function m0(){for(;At!==null;)py(At)}function p0(t,n){var i=$t;$t|=2;var o=fy(),u=my();Jt!==t||Dt!==n?(pc=null,mc=Je()+500,rs(t,n)):ns=On(t,n);t:do try{if(Gt!==0&&At!==null){n=At;var d=pn;e:switch(Gt){case 1:Gt=0,pn=null,ss(t,n,d,1);break;case 2:case 9:if(Cm(d)){Gt=0,pn=null,yy(n);break}n=function(){Gt!==2&&Gt!==9||Jt!==t||(Gt=7),ma(t)},d.then(n,n);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Cm(d)?(Gt=0,pn=null,yy(n)):(Gt=0,pn=null,ss(t,n,d,7));break;case 5:var p=null;switch(At.tag){case 26:p=At.memoizedState;case 5:case 27:var w=At;if(p?eg(p):w.stateNode.complete){Gt=0,pn=null;var D=w.sibling;if(D!==null)At=D;else{var z=w.return;z!==null?(At=z,_c(z)):At=null}break e}}Gt=0,pn=null,ss(t,n,d,5);break;case 6:Gt=0,pn=null,ss(t,n,d,6);break;case 8:Xh(),le=6;break t;default:throw Error(r(462))}}y0();break}catch(H){hy(t,H)}while(!0);return Da=nr=null,P.H=o,P.A=u,$t=i,At!==null?0:(Jt=null,Dt=0,kl(),le)}function y0(){for(;At!==null&&!Nu();)py(At)}function py(t){var n=Up(t.alternate,t,za);t.memoizedProps=t.pendingProps,n===null?_c(t):At=n}function yy(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Mp(i,n,n.pendingProps,n.type,void 0,Dt);break;case 11:n=Mp(i,n,n.pendingProps,n.type.render,n.ref,Dt);break;case 5:dh(n);default:$p(i,n),n=At=mm(n,za),n=Up(i,n,za)}t.memoizedProps=t.pendingProps,n===null?_c(t):At=n}function ss(t,n,i,o){Da=nr=null,dh(n),Kr=null,co=0;var u=n.return;try{if(i0(t,u,n,i,Dt)){le=1,rc(t,Sn(i,t.current)),At=null;return}}catch(d){if(u!==null)throw At=u,d;le=1,rc(t,Sn(i,t.current)),At=null;return}n.flags&32768?(Vt||o===1?t=!0:ns||(Dt&536870912)!==0?t=!1:(hi=t=!0,(o===2||o===9||o===3||o===6)&&(o=fn.current,o!==null&&o.tag===13&&(o.flags|=16384))),gy(n,t)):_c(n)}function _c(t){var n=t;do{if((n.flags&32768)!==0){gy(n,hi);return}t=n.return;var i=o0(n.alternate,n,za);if(i!==null){At=i;return}if(n=n.sibling,n!==null){At=n;return}At=n=t}while(n!==null);le===0&&(le=5)}function gy(t,n){do{var i=l0(t.alternate,t);if(i!==null){i.flags&=32767,At=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){At=t;return}At=t=i}while(t!==null);le=6,At=null}function _y(t,n,i,o,u,d,p,w,D){t.cancelPendingCommit=null;do vc();while(Re!==0);if(($t&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Uu,Ru(t,i,d,p,w,D),t===Jt&&(At=Jt=null,Dt=0),is=n,mi=t,Ua=i,Qh=d,Yh=u,oy=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,w0(Ga,function(){return by(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=et.p,et.p=2,p=$t,$t|=4;try{c0(t,n,i)}finally{$t=p,et.p=u,P.T=o}}Re=1,vy(),wy(),Ey()}}function vy(){if(Re===1){Re=0;var t=mi,n=is,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=P.T,P.T=null;var o=et.p;et.p=2;var u=$t;$t|=4;try{Wp(n,t);var d=cd,p=rm(t.containerInfo),w=d.focusedElem,D=d.selectionRange;if(p!==w&&w&&w.ownerDocument&&im(w.ownerDocument.documentElement,w)){if(D!==null&&Ou(w)){var z=D.start,H=D.end;if(H===void 0&&(H=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(H,w.value.length);else{var Q=w.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var $=U.getSelection(),st=w.textContent.length,dt=Math.min(D.start,st),Xt=D.end===void 0?dt:Math.min(D.end,st);!$.extend&&dt>Xt&&(p=Xt,Xt=dt,dt=p);var M=am(w,dt),R=am(w,Xt);if(M&&R&&($.rangeCount!==1||$.anchorNode!==M.node||$.anchorOffset!==M.offset||$.focusNode!==R.node||$.focusOffset!==R.offset)){var k=Q.createRange();k.setStart(M.node,M.offset),$.removeAllRanges(),dt>Xt?($.addRange(k),$.extend(R.node,R.offset)):(k.setEnd(R.node,R.offset),$.addRange(k))}}}}for(Q=[],$=w;$=$.parentNode;)$.nodeType===1&&Q.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Q.length;w++){var F=Q[w];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}xc=!!ld,cd=ld=null}finally{$t=u,et.p=o,P.T=i}}t.current=n,Re=2}}function wy(){if(Re===2){Re=0;var t=mi,n=is,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=P.T,P.T=null;var o=et.p;et.p=2;var u=$t;$t|=4;try{Yp(t,n.alternate,n)}finally{$t=u,et.p=o,P.T=i}}Re=3}}function Ey(){if(Re===4||Re===3){Re=0,cl();var t=mi,n=is,i=Ua,o=oy;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Re=5:(Re=0,is=mi=null,Ty(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(fi=null),Ta(i),n=n.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Mn,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=et.p,et.p=2,P.T=null;try{for(var d=t.onRecoverableError,p=0;p<o.length;p++){var w=o[p];d(w.value,{componentStack:w.stack})}}finally{P.T=n,et.p=u}}(Ua&3)!==0&&vc(),ma(t),u=t.pendingLanes,(i&261930)!==0&&(u&42)!==0?t===Kh?No++:(No=0,Kh=t):No=0,Do(0)}}function Ty(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function vc(){return vy(),wy(),Ey(),by()}function by(){if(Re!==5)return!1;var t=mi,n=Qh;Qh=0;var i=Ta(Ua),o=P.T,u=et.p;try{et.p=32>i?32:i,P.T=null,i=Yh,Yh=null;var d=mi,p=Ua;if(Re=0,is=mi=null,Ua=0,($t&6)!==0)throw Error(r(331));var w=$t;if($t|=4,iy(d.current),ey(d,d.current,p,i),$t=w,Do(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Mn,d)}catch{}return!0}finally{et.p=u,P.T=o,Ty(t,n)}}function Sy(t,n,i){n=Sn(i,n),n=Nh(t.stateNode,n,2),t=oi(t,n,2),t!==null&&(Ui(t,2),ma(t))}function Ft(t,n,i){if(t.tag===3)Sy(t,t,i);else for(;n!==null;){if(n.tag===3){Sy(n,t,i);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fi===null||!fi.has(o))){t=Sn(i,t),i=Cp(2),o=oi(n,i,2),o!==null&&(Ap(i,o,n,t),Ui(o,2),ma(o));break}}n=n.return}}function Zh(t,n,i){var o=t.pingCache;if(o===null){o=t.pingCache=new d0;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(i)||(Ph=!0,u.add(i),t=g0.bind(null,t,n,i),n.then(t,t))}function g0(t,n,i){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Jt===t&&(Dt&i)===i&&(le===4||le===3&&(Dt&62914560)===Dt&&300>Je()-fc?($t&2)===0&&rs(t,0):Gh|=i,as===Dt&&(as=0)),ma(t)}function Cy(t,n){n===0&&(n=pl()),t=Wi(t,n),t!==null&&(Ui(t,n),ma(t))}function _0(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),Cy(t,i)}function v0(t,n){var i=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(i=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Cy(t,i)}function w0(t,n){return Ie(t,n)}var wc=null,os=null,Wh=!1,Ec=!1,td=!1,yi=0;function ma(t){t!==os&&t.next===null&&(os===null?wc=os=t:os=os.next=t),Ec=!0,Wh||(Wh=!0,T0())}function Do(t,n){if(!td&&Ec){td=!0;do for(var i=!1,o=wc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var p=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-ce(42|t)+1)-1,d&=u&~(p&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(i=!0,Iy(o,d))}else d=Dt,d=Xn(o,o===Jt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||On(o,d)||(i=!0,Iy(o,d));o=o.next}while(i);td=!1}}function E0(){Ay()}function Ay(){Ec=Wh=!1;var t=0;yi!==0&&V0()&&(t=yi);for(var n=Je(),i=null,o=wc;o!==null;){var u=o.next,d=Ny(o,n);d===0?(o.next=null,i===null?wc=u:i.next=u,u===null&&(os=i)):(i=o,(t!==0||(d&3)!==0)&&(Ec=!0)),o=u}Re!==0&&Re!==5||Do(t),yi!==0&&(yi=0)}function Ny(t,n){for(var i=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var p=31-ce(d),w=1<<p,D=u[p];D===-1?((w&i)===0||(w&o)!==0)&&(u[p]=Iu(w,n)):D<=n&&(t.expiredLanes|=w),d&=~w}if(n=Jt,i=Dt,i=Xn(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,i===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pa(o),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||On(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(o!==null&&Pa(o),Ta(i)){case 2:case 8:i=ks;break;case 32:i=Ga;break;case 268435456:i=ul;break;default:i=Ga}return o=Dy.bind(null,t),i=Ie(i,o),t.callbackPriority=n,t.callbackNode=i,n}return o!==null&&o!==null&&Pa(o),t.callbackPriority=2,t.callbackNode=null,2}function Dy(t,n){if(Re!==0&&Re!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(vc()&&t.callbackNode!==i)return null;var o=Dt;return o=Xn(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(cy(t,o,n),Ny(t,Je()),t.callbackNode!=null&&t.callbackNode===i?Dy.bind(null,t):null)}function Iy(t,n){if(vc())return null;cy(t,n,!0)}function T0(){O0(function(){($t&6)!==0?Ie(js,E0):Ay()})}function ed(){if(yi===0){var t=Fr;t===0&&(t=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),yi=t}return yi}function Ry(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xr(""+t)}function xy(t,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,t.id&&i.setAttribute("form",t.id),n.parentNode.insertBefore(i,n),t=new FormData(t),i.parentNode.removeChild(i),t}function b0(t,n,i,o,u){if(n==="submit"&&i&&i.stateNode===u){var d=Ry((u[Me]||null).action),p=o.submitter;p&&(n=(n=p[Me]||null)?Ry(n.formAction):p.getAttribute("formAction"),n!==null&&(d=n,p=null));var w=new oa("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yi!==0){var D=p?xy(u,p):new FormData(u);Eh(i,{pending:!0,data:D,method:u.method,action:d},null,D)}}else typeof d=="function"&&(w.preventDefault(),D=p?xy(u,p):new FormData(u),Eh(i,{pending:!0,data:D,method:u.method,action:d},d,D))},currentTarget:u}]})}}for(var nd=0;nd<zu.length;nd++){var ad=zu[nd],S0=ad.toLowerCase(),C0=ad[0].toUpperCase()+ad.slice(1);Bn(S0,"on"+C0)}Bn(lm,"onAnimationEnd"),Bn(cm,"onAnimationIteration"),Bn(um,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn($w,"onTransitionRun"),Bn(Bw,"onTransitionStart"),Bn(Hw,"onTransitionCancel"),Bn(hm,"onTransitionEnd"),aa("onMouseEnter",["mouseout","mouseover"]),aa("onMouseLeave",["mouseout","mouseover"]),aa("onPointerEnter",["pointerout","pointerover"]),aa("onPointerLeave",["pointerout","pointerover"]),na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),na("onBeforeInput",["compositionend","keypress","textInput","paste"]),na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),A0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Vy(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var o=t[i],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var p=o.length-1;0<=p;p--){var w=o[p],D=w.instance,z=w.currentTarget;if(w=w.listener,D!==d&&u.isPropagationStopped())break t;d=w,u.currentTarget=z;try{d(u)}catch(H){jl(H)}u.currentTarget=null,d=D}else for(p=0;p<o.length;p++){if(w=o[p],D=w.instance,z=w.currentTarget,w=w.listener,D!==d&&u.isPropagationStopped())break t;d=w,u.currentTarget=z;try{d(u)}catch(H){jl(H)}u.currentTarget=null,d=D}}}}function Nt(t,n){var i=n[Ar];i===void 0&&(i=n[Ar]=new Set);var o=t+"__bubble";i.has(o)||(My(n,t,2,!1),i.add(o))}function id(t,n,i){var o=0;n&&(o|=4),My(i,t,o,n)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[Tc]){t[Tc]=!0,qs.forEach(function(i){i!=="selectionchange"&&(A0.has(i)||id(i,!1,t),id(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Tc]||(n[Tc]=!0,id("selectionchange",!1,n))}}function My(t,n,i,o){switch(lg(n)){case 2:var u=t1;break;case 8:u=e1;break;default:u=wd}i=u.bind(null,n,i,t),u=void 0,!Gi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,i,{capture:!0,passive:u}):t.addEventListener(n,i,!0):u!==void 0?t.addEventListener(n,i,{passive:u}):t.addEventListener(n,i,!1)}function sd(t,n,i,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var p=o.tag;if(p===3||p===4){var w=o.stateNode.containerInfo;if(w===u)break;if(p===4)for(p=o.return;p!==null;){var D=p.tag;if((D===3||D===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;w!==null;){if(p=ta(w),p===null)return;if(D=p.tag,D===5||D===6||D===26||D===27){o=d=p;continue t}w=w.parentNode}}o=o.return}Ja(function(){var z=d,H=wn(i),Q=[];t:{var U=dm.get(t);if(U!==void 0){var $=oa,st=t;switch(t){case"keypress":if(Qi(i)===0)break t;case"keydown":case"keyup":$=Ml;break;case"focusin":st="focus",$=Ki;break;case"focusout":st="blur",$=Ki;break;case"beforeblur":case"afterblur":$=Ki;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Ws;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=m;break;case lm:case cm:case um:$=Al;break;case hm:$=E;break;case"scroll":case"scrollend":$=Zs;break;case"wheel":$=q;break;case"copy":case"cut":case"paste":$=Nl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Ca;break;case"toggle":case"beforetoggle":$=Tt}var dt=(n&4)!==0,Xt=!dt&&(t==="scroll"||t==="scrollend"),M=dt?U!==null?U+"Capture":null:U;dt=[];for(var R=z,k;R!==null;){var F=R;if(k=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||k===null||M===null||(F=zn(R,M),F!=null&&dt.push(Ro(R,F,k))),Xt)break;R=R.return}0<dt.length&&(U=new $(U,st,null,i,H),Q.push({event:U,listeners:dt}))}}if((n&7)===0){t:{if(U=t==="mouseover"||t==="pointerover",$=t==="mouseout"||t==="pointerout",U&&i!==Ks&&(st=i.relatedTarget||i.fromElement)&&(ta(st)||st[Zn]))break t;if(($||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,$?(st=i.relatedTarget||i.toElement,$=z,st=st?ta(st):null,st!==null&&(Xt=h(st),dt=st.tag,st!==Xt||dt!==5&&dt!==27&&dt!==6)&&(st=null)):($=null,st=z),$!==st)){if(dt=Ws,F="onMouseLeave",M="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(dt=Ca,F="onPointerLeave",M="onPointerEnter",R="pointer"),Xt=$==null?U:cn($),k=st==null?U:cn(st),U=new dt(F,R+"leave",$,i,H),U.target=Xt,U.relatedTarget=k,F=null,ta(H)===z&&(dt=new dt(M,R+"enter",st,i,H),dt.target=k,dt.relatedTarget=Xt,F=dt),Xt=F,$&&st)e:{for(dt=N0,M=$,R=st,k=0,F=M;F;F=dt(F))k++;F=0;for(var ct=R;ct;ct=dt(ct))F++;for(;0<k-F;)M=dt(M),k--;for(;0<F-k;)R=dt(R),F--;for(;k--;){if(M===R||R!==null&&M===R.alternate){dt=M;break e}M=dt(M),R=dt(R)}dt=null}else dt=null;$!==null&&Oy(Q,U,$,dt,!1),st!==null&&Xt!==null&&Oy(Q,Xt,st,dt,!0)}}t:{if(U=z?cn(z):window,$=U.nodeName&&U.nodeName.toLowerCase(),$==="select"||$==="input"&&U.type==="file")var zt=Jf;else if(Kf(U))if(Zf)zt=zw;else{zt=jw;var ot=Lw}else $=U.nodeName,!$||$.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?z&&Rr(z.elementType)&&(zt=Jf):zt=kw;if(zt&&(zt=zt(t,z))){Xf(Q,zt,i,H);break t}ot&&ot(t,U,z),t==="focusout"&&z&&U.type==="number"&&z.memoizedProps.value!=null&&Fs(U,"number",U.value)}switch(ot=z?cn(z):window,t){case"focusin":(Kf(ot)||ot.contentEditable==="true")&&(zr=ot,Lu=z,io=null);break;case"focusout":io=Lu=zr=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,sm(Q,i,H);break;case"selectionchange":if(qw)break;case"keydown":case"keyup":sm(Q,i,H)}var Ct;if(qt)t:{switch(t){case"compositionstart":var It="onCompositionStart";break t;case"compositionend":It="onCompositionEnd";break t;case"compositionupdate":It="onCompositionUpdate";break t}It=void 0}else kr?Xi(t,i)&&(It="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(It="onCompositionStart");It&&(ua&&i.locale!=="ko"&&(kr||It!=="onCompositionStart"?It==="onCompositionEnd"&&kr&&(Ct=Js()):(sa=H,Xs="value"in sa?sa.value:sa.textContent,kr=!0)),ot=bc(z,It),0<ot.length&&(It=new ca(It,t,null,i,H),Q.push({event:It,listeners:ot}),Ct?It.data=Ct:(Ct=jr(i),Ct!==null&&(It.data=Ct)))),(Ct=Tn?xw(t,i):Vw(t,i))&&(It=bc(z,"onBeforeInput"),0<It.length&&(ot=new ca("onBeforeInput","beforeinput",null,i,H),Q.push({event:ot,listeners:It}),ot.data=Ct)),b0(Q,t,z,i,H)}Vy(Q,n)})}function Ro(t,n,i){return{instance:t,listener:n,currentTarget:i}}function bc(t,n){for(var i=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=zn(t,i),u!=null&&o.unshift(Ro(t,u,d)),u=zn(t,n),u!=null&&o.push(Ro(t,u,d))),t.tag===3)return o;t=t.return}return[]}function N0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Oy(t,n,i,o,u){for(var d=n._reactName,p=[];i!==null&&i!==o;){var w=i,D=w.alternate,z=w.stateNode;if(w=w.tag,D!==null&&D===o)break;w!==5&&w!==26&&w!==27||z===null||(D=z,u?(z=zn(i,d),z!=null&&p.unshift(Ro(i,z,D))):u||(z=zn(i,d),z!=null&&p.push(Ro(i,z,D)))),i=i.return}p.length!==0&&t.push({event:n,listeners:p})}var D0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function Ly(t){return(typeof t=="string"?t:""+t).replace(D0,`
`).replace(I0,"")}function jy(t,n){return n=Ly(n),Ly(t)===n}function Kt(t,n,i,o,u,d){switch(i){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||en(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&en(t,""+o);break;case"className":un(t,"class",o);break;case"tabIndex":un(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":un(t,i,o);break;case"style":Ys(t,o,d);break;case"data":if(n!=="object"){un(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=xr(""+o),t.setAttribute(i,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(i==="formAction"?(n!=="input"&&Kt(t,n,"name",u.name,u,null),Kt(t,n,"formEncType",u.formEncType,u,null),Kt(t,n,"formMethod",u.formMethod,u,null),Kt(t,n,"formTarget",u.formTarget,u,null)):(Kt(t,n,"encType",u.encType,u,null),Kt(t,n,"method",u.method,u,null),Kt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(i);break}o=xr(""+o),t.setAttribute(i,o);break;case"onClick":o!=null&&(t.onclick=kn);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=i}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}i=xr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""+o):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":o===!0?t.setAttribute(i,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(i,o):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(i,o):t.removeAttribute(i);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(i):t.setAttribute(i,o);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),Dr(t,"popover",o);break;case"xlinkActuate":ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Dr(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=bl.get(i)||i,Dr(t,i,o))}}function od(t,n,i,o,u,d){switch(i){case"style":Ys(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(i=o.__html,i!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=i}}break;case"children":typeof o=="string"?en(t,o):(typeof o=="number"||typeof o=="bigint")&&en(t,""+o);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$s.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(u=i.endsWith("Capture"),n=i.slice(2,u?i.length-7:void 0),d=t[Me]||null,d=d!=null?d[i]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(n,o,u);break t}i in t?t[i]=o:o===!0?t.setAttribute(i,""):Dr(t,i,o)}}}function He(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var o=!1,u=!1,d;for(d in i)if(i.hasOwnProperty(d)){var p=i[d];if(p!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,d,p,i,null)}}u&&Kt(t,n,"srcSet",i.srcSet,i,null),o&&Kt(t,n,"src",i.src,i,null);return;case"input":Nt("invalid",t);var w=d=p=u=null,D=null,z=null;for(o in i)if(i.hasOwnProperty(o)){var H=i[o];if(H!=null)switch(o){case"name":u=H;break;case"type":p=H;break;case"checked":D=H;break;case"defaultChecked":z=H;break;case"value":d=H;break;case"defaultValue":w=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,n));break;default:Kt(t,n,o,H,i,null)}}wl(t,d,w,D,z,p,u,!1);return;case"select":Nt("invalid",t),o=p=d=null;for(u in i)if(i.hasOwnProperty(u)&&(w=i[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":p=w;break;case"multiple":o=w;default:Kt(t,n,u,w,i,null)}n=d,i=p,t.multiple=!!o,n!=null?Qa(t,!!o,n,!1):i!=null&&Qa(t,!!o,i,!0);return;case"textarea":Nt("invalid",t),d=u=o=null;for(p in i)if(i.hasOwnProperty(p)&&(w=i[p],w!=null))switch(p){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Kt(t,n,p,w,i,null)}Ya(t,o,u,d);return;case"option":for(D in i)if(i.hasOwnProperty(D)&&(o=i[D],o!=null))switch(D){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Kt(t,n,D,o,i,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)Nt(Io[o],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in i)if(i.hasOwnProperty(z)&&(o=i[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Kt(t,n,z,o,i,null)}return;default:if(Rr(n)){for(H in i)i.hasOwnProperty(H)&&(o=i[H],o!==void 0&&od(t,n,H,o,i,void 0));return}}for(w in i)i.hasOwnProperty(w)&&(o=i[w],o!=null&&Kt(t,n,w,o,i,null))}function R0(t,n,i,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,p=null,w=null,D=null,z=null,H=null;for($ in i){var Q=i[$];if(i.hasOwnProperty($)&&Q!=null)switch($){case"checked":break;case"value":break;case"defaultValue":D=Q;default:o.hasOwnProperty($)||Kt(t,n,$,null,o,Q)}}for(var U in o){var $=o[U];if(Q=i[U],o.hasOwnProperty(U)&&($!=null||Q!=null))switch(U){case"type":d=$;break;case"name":u=$;break;case"checked":z=$;break;case"defaultChecked":H=$;break;case"value":p=$;break;case"defaultValue":w=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:$!==Q&&Kt(t,n,U,$,o,Q)}}Ir(t,p,w,D,z,H,d,u);return;case"select":$=p=w=U=null;for(d in i)if(D=i[d],i.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":$=D;default:o.hasOwnProperty(d)||Kt(t,n,d,null,o,D)}for(u in o)if(d=o[u],D=i[u],o.hasOwnProperty(u)&&(d!=null||D!=null))switch(u){case"value":U=d;break;case"defaultValue":w=d;break;case"multiple":p=d;default:d!==D&&Kt(t,n,u,d,o,D)}n=w,i=p,o=$,U!=null?Qa(t,!!i,U,!1):!!o!=!!i&&(n!=null?Qa(t,!!i,n,!0):Qa(t,!!i,i?[]:"",!1));return;case"textarea":$=U=null;for(w in i)if(u=i[w],i.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(t,n,w,null,o,u)}for(p in o)if(u=o[p],d=i[p],o.hasOwnProperty(p)&&(u!=null||d!=null))switch(p){case"value":U=u;break;case"defaultValue":$=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Kt(t,n,p,u,o,d)}El(t,U,$);return;case"option":for(var st in i)if(U=i[st],i.hasOwnProperty(st)&&U!=null&&!o.hasOwnProperty(st))switch(st){case"selected":t.selected=!1;break;default:Kt(t,n,st,null,o,U)}for(D in o)if(U=o[D],$=i[D],o.hasOwnProperty(D)&&U!==$&&(U!=null||$!=null))switch(D){case"selected":t.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:Kt(t,n,D,U,o,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in i)U=i[dt],i.hasOwnProperty(dt)&&U!=null&&!o.hasOwnProperty(dt)&&Kt(t,n,dt,null,o,U);for(z in o)if(U=o[z],$=i[z],o.hasOwnProperty(z)&&U!==$&&(U!=null||$!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,n));break;default:Kt(t,n,z,U,o,$)}return;default:if(Rr(n)){for(var Xt in i)U=i[Xt],i.hasOwnProperty(Xt)&&U!==void 0&&!o.hasOwnProperty(Xt)&&od(t,n,Xt,void 0,o,U);for(H in o)U=o[H],$=i[H],!o.hasOwnProperty(H)||U===$||U===void 0&&$===void 0||od(t,n,H,U,o,$);return}}for(var M in i)U=i[M],i.hasOwnProperty(M)&&U!=null&&!o.hasOwnProperty(M)&&Kt(t,n,M,null,o,U);for(Q in o)U=o[Q],$=i[Q],!o.hasOwnProperty(Q)||U===$||U==null&&$==null||Kt(t,n,Q,U,o,$)}function ky(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),o=0;o<i.length;o++){var u=i[o],d=u.transferSize,p=u.initiatorType,w=u.duration;if(d&&w&&ky(p)){for(p=0,w=u.responseEnd,o+=1;o<i.length;o++){var D=i[o],z=D.startTime;if(z>w)break;var H=D.transferSize,Q=D.initiatorType;H&&ky(Q)&&(D=D.responseEnd,p+=H*(D<w?1:(w-z)/(D-z)))}if(--o,n+=8*(d+p)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ld=null,cd=null;function Sc(t){return t.nodeType===9?t:t.ownerDocument}function zy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uy(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ud(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hd=null;function V0(){var t=window.event;return t&&t.type==="popstate"?t===hd?!1:(hd=t,!0):(hd=null,!1)}var qy=typeof setTimeout=="function"?setTimeout:void 0,M0=typeof clearTimeout=="function"?clearTimeout:void 0,$y=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof $y<"u"?function(t){return $y.resolve(null).then(t).catch(L0)}:qy;function L0(t){setTimeout(function(){throw t})}function gi(t){return t==="head"}function By(t,n){var i=n,o=0;do{var u=i.nextSibling;if(t.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"||i==="/&"){if(o===0){t.removeChild(u),hs(n);return}o--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")o++;else if(i==="html")xo(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,xo(i);for(var d=i.firstChild;d;){var p=d.nextSibling,w=d.nodeName;d[Wn]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||i.removeChild(d),d=p}}else i==="body"&&xo(t.ownerDocument.body);i=u}while(i);hs(n)}function Hy(t,n){var i=t;t=0;do{var o=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),o&&o.nodeType===8)if(i=o.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=o}while(i)}function dd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":dd(i),Nr(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function j0(t,n,i,o){for(;t.nodeType===1;){var u=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Wn])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=In(t.nextSibling),t===null)break}return null}function k0(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=In(t.nextSibling),t===null))return null;return t}function Py(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=In(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function z0(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var o=function(){n(),i.removeEventListener("DOMContentLoaded",o)};i.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function In(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var pd=null;function Gy(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return In(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function Fy(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function Qy(t,n,i){switch(n=Sc(i),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Nr(t)}var Rn=new Map,Yy=new Set;function Cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qa=et.d;et.d={f:U0,r:q0,D:$0,C:B0,L:H0,m:P0,X:F0,S:G0,M:Q0};function U0(){var t=qa.f(),n=yc();return t||n}function q0(t){var n=vn(t);n!==null&&n.tag===5&&n.type==="form"?hp(n):qa.r(t)}var ls=typeof document>"u"?null:document;function Ky(t,n,i){var o=ls;if(o&&typeof n=="string"&&n){var u=tn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof i=="string"&&(u+='[crossorigin="'+i+'"]'),Yy.has(u)||(Yy.add(u),t={rel:t,crossOrigin:i,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),He(n,"link",t),_e(n),o.head.appendChild(n)))}}function $0(t){qa.D(t),Ky("dns-prefetch",t,null)}function B0(t,n){qa.C(t,n),Ky("preconnect",t,n)}function H0(t,n,i){qa.L(t,n,i);var o=ls;if(o&&t&&n){var u='link[rel="preload"][as="'+tn(n)+'"]';n==="image"&&i&&i.imageSrcSet?(u+='[imagesrcset="'+tn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(u+='[imagesizes="'+tn(i.imageSizes)+'"]')):u+='[href="'+tn(t)+'"]';var d=u;switch(n){case"style":d=cs(t);break;case"script":d=us(t)}Rn.has(d)||(t=b({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),Rn.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(Mo(d))||(n=o.createElement("link"),He(n,"link",t),_e(n),o.head.appendChild(n)))}}function P0(t,n){qa.m(t,n);var i=ls;if(i&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+tn(o)+'"][href="'+tn(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=us(t)}if(!Rn.has(d)&&(t=b({rel:"modulepreload",href:t},n),Rn.set(d,t),i.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Mo(d)))return}o=i.createElement("link"),He(o,"link",t),_e(o),i.head.appendChild(o)}}}function G0(t,n,i){qa.S(t,n,i);var o=ls;if(o&&t){var u=ea(o).hoistableStyles,d=cs(t);n=n||"default";var p=u.get(d);if(!p){var w={loading:0,preload:null};if(p=o.querySelector(Vo(d)))w.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},i),(i=Rn.get(d))&&yd(t,i);var D=p=o.createElement("link");_e(D),He(D,"link",t),D._p=new Promise(function(z,H){D.onload=z,D.onerror=H}),D.addEventListener("load",function(){w.loading|=1}),D.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ac(p,n,o)}p={type:"stylesheet",instance:p,count:1,state:w},u.set(d,p)}}}function F0(t,n){qa.X(t,n);var i=ls;if(i&&t){var o=ea(i).hoistableScripts,u=us(t),d=o.get(u);d||(d=i.querySelector(Mo(u)),d||(t=b({src:t,async:!0},n),(n=Rn.get(u))&&gd(t,n),d=i.createElement("script"),_e(d),He(d,"link",t),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Q0(t,n){qa.M(t,n);var i=ls;if(i&&t){var o=ea(i).hoistableScripts,u=us(t),d=o.get(u);d||(d=i.querySelector(Mo(u)),d||(t=b({src:t,async:!0,type:"module"},n),(n=Rn.get(u))&&gd(t,n),d=i.createElement("script"),_e(d),He(d,"link",t),i.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Xy(t,n,i,o){var u=(u=St.current)?Cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=cs(i.href),i=ea(u).hoistableStyles,o=i.get(n),o||(o={type:"style",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=cs(i.href);var d=ea(u).hoistableStyles,p=d.get(t);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,p),(d=u.querySelector(Vo(t)))&&!d._p&&(p.instance=d,p.state.loading=5),Rn.has(t)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Rn.set(t,i),d||Y0(u,t,i,p.state))),n&&o===null)throw Error(r(528,""));return p}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(i),i=ea(u).hoistableScripts,o=i.get(n),o||(o={type:"script",instance:null,count:0,state:null},i.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function cs(t){return'href="'+tn(t)+'"'}function Vo(t){return'link[rel="stylesheet"]['+t+"]"}function Jy(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function Y0(t,n,i,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),He(n,"link",i),_e(n),t.head.appendChild(n))}function us(t){return'[src="'+tn(t)+'"]'}function Mo(t){return"script[async]"+t}function Zy(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+tn(i.href)+'"]');if(o)return n.instance=o,_e(o),o;var u=b({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),_e(o),He(o,"style",u),Ac(o,i.precedence,t),n.instance=o;case"stylesheet":u=cs(i.href);var d=t.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,_e(d),d;o=Jy(i),(u=Rn.get(u))&&yd(o,u),d=(t.ownerDocument||t).createElement("link"),_e(d);var p=d;return p._p=new Promise(function(w,D){p.onload=w,p.onerror=D}),He(d,"link",o),n.state.loading|=4,Ac(d,i.precedence,t),n.instance=d;case"script":return d=us(i.src),(u=t.querySelector(Mo(d)))?(n.instance=u,_e(u),u):(o=i,(u=Rn.get(d))&&(o=b({},i),gd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),_e(u),He(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ac(o,i.precedence,t));return n.instance}function Ac(t,n,i){for(var o=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,p=0;p<o.length;p++){var w=o[p];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function yd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nc=null;function Wy(t,n,i){if(Nc===null){var o=new Map,u=Nc=new Map;u.set(i,o)}else u=Nc,o=u.get(i),o||(o=new Map,u.set(i,o));if(o.has(t))return o;for(o.set(t,null),i=i.getElementsByTagName(t),u=0;u<i.length;u++){var d=i[u];if(!(d[Wn]||d[ge]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var p=d.getAttribute(n)||"";p=t+p;var w=o.get(p);w?w.push(d):o.set(p,[d])}}return o}function tg(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function K0(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function X0(t,n,i,o){if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=cs(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Dc.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=d,_e(d);return}d=n.ownerDocument||n,o=Jy(o),(u=Rn.get(u))&&yd(o,u),d=d.createElement("link"),_e(d);var p=d;p._p=new Promise(function(w,D){p.onload=w,p.onerror=D}),He(d,"link",o),i.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Dc.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var _d=0;function J0(t,n){return t.stylesheets&&t.count===0&&Rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var o=setTimeout(function(){if(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&_d===0&&(_d=62500*x0());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>_d?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function Rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,n.forEach(Z0,t),Ic=null,Dc.call(t))}function Z0(t,n){if(!(n.state.loading&4)){var i=Ic.get(t);if(i)var o=i.get(null);else{i=new Map,Ic.set(t,i);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var p=u[d];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(i.set(p.dataset.precedence,p),o=p)}o&&i.set(null,o)}u=n.instance,p=u.getAttribute("data-precedence"),d=i.get(p)||o,d===o&&i.set(null,u),i.set(p,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:pt,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function W0(t,n,i,o,u,d,p,w,D){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.hiddenUpdates=Jn(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function ng(t,n,i,o,u,d,p,w,D,z,H,Q){return t=new W0(t,n,i,p,D,z,H,Q,w),n=1,d===!0&&(n|=24),d=dn(3,null,null,n),t.current=d,d.stateNode=t,n=Ju(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:i,cache:n},eh(d),t}function ag(t){return t?(t=$r,t):$r}function ig(t,n,i,o,u,d){u=ag(u),o.context===null?o.context=u:o.pendingContext=u,o=si(n),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=oi(t,o,n),i!==null&&(on(i,t,n),ho(i,t,n))}function rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function vd(t,n){rg(t,n),(t=t.alternate)&&rg(t,n)}function sg(t){if(t.tag===13||t.tag===31){var n=Wi(t,67108864);n!==null&&on(n,t,67108864),vd(t,67108864)}}function og(t){if(t.tag===13||t.tag===31){var n=gn();n=$i(n);var i=Wi(t,n);i!==null&&on(i,t,n),vd(t,n)}}var xc=!0;function t1(t,n,i,o){var u=P.T;P.T=null;var d=et.p;try{et.p=2,wd(t,n,i,o)}finally{et.p=d,P.T=u}}function e1(t,n,i,o){var u=P.T;P.T=null;var d=et.p;try{et.p=8,wd(t,n,i,o)}finally{et.p=d,P.T=u}}function wd(t,n,i,o){if(xc){var u=Ed(o);if(u===null)sd(t,n,o,Vc,i),cg(t,o);else if(a1(u,t,n,i,o))o.stopPropagation();else if(cg(t,o),n&4&&-1<n1.indexOf(t)){for(;u!==null;){var d=vn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var p=Kn(d.pendingLanes);if(p!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;p;){var D=1<<31-ce(p);w.entanglements[1]|=D,p&=~D}ma(d),($t&6)===0&&(mc=Je()+500,Do(0))}}break;case 31:case 13:w=Wi(d,2),w!==null&&on(w,d,2),yc(),vd(d,2)}if(d=Ed(o),d===null&&sd(t,n,o,Vc,i),d===u)break;u=d}u!==null&&o.stopPropagation()}else sd(t,n,o,null,i)}}function Ed(t){return t=wn(t),Td(t)}var Vc=null;function Td(t){if(Vc=null,t=ta(t),t!==null){var n=h(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=f(n),t!==null)return t;t=null}else if(i===31){if(t=g(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Vc=t,null}function lg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ki()){case js:return 2;case ks:return 8;case Ga:case Du:return 32;case ul:return 268435456;default:return 32}default:return 32}}var bd=!1,_i=null,vi=null,wi=null,Lo=new Map,jo=new Map,Ei=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cg(t,n){switch(t){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(n.pointerId)}}function ko(t,n,i,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:i,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=vn(n),n!==null&&sg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function a1(t,n,i,o,u){switch(n){case"focusin":return _i=ko(_i,t,n,i,o,u),!0;case"dragenter":return vi=ko(vi,t,n,i,o,u),!0;case"mouseover":return wi=ko(wi,t,n,i,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,ko(Lo.get(d)||null,t,n,i,o,u)),!0;case"gotpointercapture":return d=u.pointerId,jo.set(d,ko(jo.get(d)||null,t,n,i,o,u)),!0}return!1}function ug(t){var n=ta(t.target);if(n!==null){var i=h(n);if(i!==null){if(n=i.tag,n===13){if(n=f(i),n!==null){t.blockedOn=n,Ln(t.priority,function(){og(i)});return}}else if(n===31){if(n=g(i),n!==null){t.blockedOn=n,Ln(t.priority,function(){og(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=Ed(t.nativeEvent);if(i===null){i=t.nativeEvent;var o=new i.constructor(i.type,i);Ks=o,i.target.dispatchEvent(o),Ks=null}else return n=vn(i),n!==null&&sg(n),t.blockedOn=i,!1;n.shift()}return!0}function hg(t,n,i){Mc(t)&&i.delete(n)}function i1(){bd=!1,_i!==null&&Mc(_i)&&(_i=null),vi!==null&&Mc(vi)&&(vi=null),wi!==null&&Mc(wi)&&(wi=null),Lo.forEach(hg),jo.forEach(hg)}function Oc(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,i1)))}var Lc=null;function dg(t){Lc!==t&&(Lc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var n=0;n<t.length;n+=3){var i=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Td(o||i)===null)continue;break}var d=vn(i);d!==null&&(t.splice(n,3),n-=3,Eh(d,{pending:!0,data:u,method:i.method,action:o},o,u))}}))}function hs(t){function n(D){return Oc(D,t)}_i!==null&&Oc(_i,t),vi!==null&&Oc(vi,t),wi!==null&&Oc(wi,t),Lo.forEach(n),jo.forEach(n);for(var i=0;i<Ei.length;i++){var o=Ei[i];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ei.length&&(i=Ei[0],i.blockedOn===null);)ug(i),i.blockedOn===null&&Ei.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(o=0;o<i.length;o+=3){var u=i[o],d=i[o+1],p=u[Me]||null;if(typeof d=="function")p||dg(i);else if(p){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,p=d[Me]||null)w=p.formAction;else if(Td(u)!==null)continue}else w=p.action;typeof w=="function"?i[o+1]=w:(i.splice(o,3),o-=3),dg(i)}}}function fg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(p){return u=p})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(i,20)}function i(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Sd(t){this._internalRoot=t}jc.prototype.render=Sd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var i=n.current,o=gn();ig(i,o,t,n,null,null)},jc.prototype.unmount=Sd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ig(t.current,2,null,t,null,null),yc(),n[Zn]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var n=yl();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Ei.length&&n!==0&&n<Ei[i].priority;i++);Ei.splice(i,0,t),i===0&&ug(t)}};var mg=e.version;if(mg!=="19.2.1")throw Error(r(527,mg,"19.2.1"));et.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=_(n),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var r1={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kc.isDisabled&&kc.supportsFiber)try{Mn=kc.inject(r1),ze=kc}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var i=!1,o="",u=Ep,d=Tp,p=bp;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=ng(t,1,!1,null,null,i,o,null,u,d,p,fg),t[Zn]=n.current,rd(t),new Sd(n)},Uo.hydrateRoot=function(t,n,i){if(!l(t))throw Error(r(299));var o=!1,u="",d=Ep,p=Tp,w=bp,D=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(w=i.onRecoverableError),i.formState!==void 0&&(D=i.formState)),n=ng(t,1,!0,n,i??null,o,u,D,d,p,w,fg),n.context=ag(null),i=n.current,o=gn(),o=$i(o),u=si(o),u.callback=null,oi(i,u,o),i=o,n.current.lanes=i,Ui(n,i),ma(n),t[Zn]=n.current,rd(t),new jc(n)},Uo.version="19.2.1",Uo}var Sg;function y1(){if(Sg)return Nd.exports;Sg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Nd.exports=p1(),Nd.exports}var g1=y1();const _1=k_(g1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w1=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),Cg=s=>{const e=w1(s);return e.charAt(0).toUpperCase()+e.slice(1)},z_=(...s)=>s.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim(),E1=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:l="",children:h,iconNode:f,...g},v)=>fe.createElement("svg",{ref:v,...T1,width:e,height:e,stroke:s,strokeWidth:r?Number(a)*24/Number(e):a,className:z_("lucide",l),...!h&&!E1(g)&&{"aria-hidden":"true"},...g},[...f.map(([_,T])=>fe.createElement(_,T)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(s,e)=>{const a=fe.forwardRef(({className:r,...l},h)=>fe.createElement(b1,{ref:h,iconNode:e,className:z_(`lucide-${v1(Cg(s))}`,`lucide-${s}`,r),...l}));return a.displayName=Cg(s),a};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],C1=Ve("check",S1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],N1=Ve("chevron-left",A1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],I1=Ve("chevron-right",D1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],x1=Ve("circle-alert",R1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],M1=Ve("code-xml",V1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],U_=Ve("code",O1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],j1=Ve("copy",L1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],z1=Ve("database",k1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]],q1=Ve("file-diff",U1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],B1=Ve("globe",$1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],P1=Ve("image-off",H1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],F1=Ve("image",G1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xd=Ve("plus",Q1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],K1=Ve("save",Y1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],J1=Ve("search",X1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],W1=Ve("shopping-bag",Z1);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],eE=Ve("type",tE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],q_=Ve("user",nE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],iE=Ve("x",aE),rE=({snippet:s})=>{var O,G,Z;const[e,a]=fe.useState(!1),[r,l]=fe.useState(!1),[h,f]=fe.useState(!1),g=async()=>{var tt;try{if((tt=navigator==null?void 0:navigator.clipboard)!=null&&tt.writeText)await navigator.clipboard.writeText(s.code);else{const J=document.createElement("textarea");J.value=s.code,document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J)}a(!0),setTimeout(()=>{a(!1)},1500)}catch(J){console.error("Copy failed",J)}},v=(Z=(G=(O=s.storeName)==null?void 0:O.replace(/^https?:\/\//,""))==null?void 0:G.replace(/\/$/,""))==null?void 0:Z.replace(/^www\./,""),_=s.screenshot&&s.screenshot.trim()!=="",T=s.themeChanges&&s.themeChanges.trim()!=="",b=_||T;return B.jsxs("div",{className:"code-card",children:[B.jsxs("div",{className:"code-card-header",children:[B.jsxs("div",{className:"author-date",children:[B.jsx("a",{className:"store-link",href:`https://${v}`,target:"_blank",rel:"noopener noreferrer",children:v}),B.jsxs("div",{className:"author",children:[B.jsx(q_,{size:14})," ",s.author]})]}),B.jsxs("div",{className:"theme-info",children:[B.jsxs("div",{className:"theme-name-wrapper",children:[B.jsx(W1,{size:16}),B.jsxs("h3",{className:"theme-name",children:[s.themeName,s.version&&B.jsxs("span",{className:"theme-version",children:[" (",s.version,")"]})]})]}),B.jsx("div",{className:"date",children:s.date})]})]}),B.jsxs("div",{className:"code-block",children:[B.jsxs("div",{className:"code-toolbar",children:[B.jsxs("div",{className:"toolbar-left",children:[B.jsx(M1,{size:14,className:"opacity-70"}),"Code Snippet"]}),B.jsxs("button",{className:`copy-button ${e?"copied":""}`,onClick:g,children:[e?B.jsx(C1,{size:12}):B.jsx(j1,{size:12}),e?"Copied":"Copy"]})]}),B.jsx("pre",{className:"code-content",children:B.jsx("code",{children:s.code})})]}),b&&B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"accordion-toggle",onClick:()=>l(!r),children:B.jsx("span",{children:r?"Hide Themechanges ▲":"Show Themechanges ▼"})}),r&&B.jsxs("div",{className:"accordion-content",children:[_&&!h&&B.jsx("div",{className:"screenshot-container",children:B.jsx("img",{src:s.screenshot,alt:"Screenshot",className:"screenshot",onError:()=>f(!0)})}),_&&h&&B.jsxs("div",{className:"screenshot-fallback",children:[B.jsx(P1,{size:20}),"Screenshot not available"]}),T&&B.jsxs("div",{className:"theme-changes",children:[B.jsx("h4",{children:"Theme Changes"}),B.jsx("pre",{children:s.themeChanges})]})]})]})]})},sE=({isOpen:s,onClose:e,onSave:a})=>{const[r,l]=fe.useState({storeName:"",themeName:"",version:"",author:"",code:"",screenshot:"",themeChanges:""}),[h,f]=fe.useState(!1),[g,v]=fe.useState("");if(!s)return null;const _=async b=>{if(b.preventDefault(),!r.storeName||!r.themeName||!r.code||!r.author){v("Store, Theme, Author, and Code are required.");return}f(!0),v("");try{const O=new Date().toISOString().split("T")[0];await a({...r,date:O}),l({storeName:"",themeName:"",version:"",author:"",code:"",screenshot:"",themeChanges:""}),e()}catch{v("Failed to save. Please try again.")}finally{f(!1)}},T=b=>{var Z;const O=(Z=b.target.files)==null?void 0:Z[0];if(!O)return;const G=new FileReader;G.onloadend=()=>{l({...r,screenshot:G.result})},G.readAsDataURL(O)};return B.jsx("div",{className:"modal-overlay",children:B.jsxs("div",{className:"modal-container",children:[B.jsxs("div",{className:"modal-header",children:[B.jsxs("div",{children:[B.jsx("h2",{children:"New Integration"}),B.jsx("p",{children:"Add a new drawer code snippet to the library."})]}),B.jsx("button",{className:"icon-button",onClick:e,children:B.jsx(iE,{size:20})})]}),B.jsxs("div",{className:"modal-body",children:[g&&B.jsxs("div",{className:"error-box",children:[B.jsx(x1,{size:16}),B.jsx("span",{children:g})]}),B.jsxs("form",{id:"add-code-form",onSubmit:_,children:[B.jsxs("div",{className:"grid-2",children:[B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(eE,{size:12})," Theme Name"]}),B.jsx("input",{placeholder:"Dawn",value:r.themeName,onChange:b=>l({...r,themeName:b.target.value})})]}),B.jsxs("div",{className:"field",children:[B.jsx("label",{children:"Version (optional)"}),B.jsx("input",{placeholder:"1.0, 2.0",value:r.version,onChange:b=>l({...r,version:b.target.value})})]}),B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(B1,{size:12})," Store URL"]}),B.jsx("input",{placeholder:"wiser.myshopify.com",value:r.storeName,onChange:b=>l({...r,storeName:b.target.value})})]})]}),B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(q_,{size:12})," Added By"]}),B.jsx("input",{value:r.author,onChange:b=>l({...r,author:b.target.value})})]}),B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(F1,{size:12})," Screenshot"]}),B.jsx("input",{placeholder:"https://example.com/image.png",value:r.screenshot,onChange:b=>l({...r,screenshot:b.target.value})}),B.jsx("input",{type:"file",accept:"image/*",onChange:T}),r.screenshot&&B.jsx("img",{className:"preview-image",src:r.screenshot})]}),B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(q1,{size:12})," Theme Code Changes"]}),B.jsx("textarea",{rows:3,value:r.themeChanges,onChange:b=>l({...r,themeChanges:b.target.value})})]}),B.jsxs("div",{className:"field",children:[B.jsxs("label",{children:[B.jsx(U_,{size:12})," JavaScript Code"]}),B.jsx("textarea",{rows:10,className:"code-box",value:r.code,onChange:b=>l({...r,code:b.target.value})})]})]})]}),B.jsxs("div",{className:"modal-footer",children:[B.jsx("button",{className:"btn secondary",onClick:e,children:"Cancel"}),B.jsxs("button",{className:"btn primary",type:"submit",form:"add-code-form",disabled:h,children:[B.jsx(K1,{size:16}),h?"Saving...":"Save"]})]})]})})},oE=[{id:"1",storeName:"jerseys-megastore.myshopify.com",themeName:"Local",date:"25-12-09",author:"Deepika",code:`function wiseraddedtocart() {
    window.refreshCart()
}`},{id:"2",storeName:"wooden-ships.myshopify.com",themeName:"Symmetry",date:"25-11-27",author:"Deepika",code:`function wiseraddedtocart() {
  document.dispatchEvent(
    new CustomEvent('dispatch:cart-drawer:refresh', {
      bubbles: true,
    })
  );
  document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open'));
}
wiseraddedtocart();`},{id:"3",storeName:"shopnalli.myshopify.com",themeName:"Horizon",date:"25-11-11",author:"Deepika",code:`function wiseraddtocart() {
  document.dispatchEvent(
    new CustomEvent('cart:update', {
      detail: {
        data: {
          source: 'manual-console',
          sections: {},
        },
      },
      bubbles: true,
      composed: true,
    })
  );
  const wscart = document.querySelector('.cart-drawer__dialog');
  wscart.show();
}
wiseraddtocart();`},{id:"4",storeName:"prostandard.myshopify.com",themeName:"Craft",date:"25-10-30",author:"Deepika",code:`async function wiseraddtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
}
wiseraddtocart()`},{id:"5",storeName:"prostandard.myshopify.com",themeName:"Symmetry",date:"25-10-26",author:"Deepika",code:`<script>
function wiseraddedtocart(){
  document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false, detail: { openDrawer: true } }));
  document.querySelector('.cart-link').click();
}
<\/script>`},{id:"6",storeName:"flexx-memory.myshopify.com",themeName:"Electro Theme",date:"25-10-07",author:"Evm",code:`async function wiseraddedtocart() {
  if (window.innerWidth < 992) {
    document.querySelector('#cart-message').addClass('is-open');
  } else {
    document.querySelector('.js-header-cart-icon--desktop').click();

    try {
      const res = await fetch('/?section_id=ajax-cart');
      const html = await res.text();
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const ajaxCartSection = tempDiv.querySelector(
        '#shopify-section-ajax-cart'
      );
      if (!ajaxCartSection) {
        return;
      }
      const cartJSON = JSON.parse(
        ajaxCartSection.querySelector('[data-cart-json]')?.innerHTML
      );
      const dropdownCartBody = document.querySelector(
        'body .dropdown-cart .dropdown-cart_body'
      );
      if (dropdownCartBody) {
        dropdownCartBody.innerHTML = ajaxCartSection.innerHTML;
      }
      const cartTotal = document.querySelector('.cart-total_price');
      if (cartTotal && cartJSON.total_price != null) {
        cartTotal.innerHTML = cartJSON.total_price.toCurrency();
        window.Shopify?.theme?.sections?.instances?.[0]?.dropdownCart?.setItemCount(
          cartJSON.item_count
        );
        const cartElement = document.querySelector('.js-header-dropdown-cart');
        cartElement.setAttribute('data-cart-item-count', cartJSON.item_count);
      }
      window.Shopify?.theme?.sections?.instances?.[0].dropdownCart.container
        .querySelectorAll('.js-cart-line-item')
        .forEach(
          window.Shopify?.theme?.sections?.instances?.[0].initDropdownCartLineItem.bind(
            window.Shopify?.theme?.sections?.instances?.[0]
          )
        );
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }
}
wiseraddedtocart();`},{id:"7",storeName:"cad71e-74.myshopify.com",themeName:"PoseTheme",date:"25-10-07",author:"Jaya",code:`function wiseraddedtocart() {
  theme.miniCart.updateElements();
  theme.miniCart.generateCart();
}
wiseraddedtocart()`},{id:"8",storeName:"indiangoodsgenie.myshopify.com",themeName:"Booster-7.1.4",date:"25-10-07",author:"Deepika",code:`function wiseraddedtocart() {
  $('.minicart__button--shopping-cart .minicart__label').trigger('click');
}`},{id:"9",storeName:"andy-evan.myshopify.com",themeName:"Boost",date:"25-10-07",author:"Deepika",code:`function wiseraddedtocart(){
  window.SLIDECART_UPDATE()
  window.SLIDECART_OPEN()
}`},{id:"10",storeName:"livingfitstore123.myshopify.com",themeName:"Pursuit",date:"25-10-06",author:"Deepika",code:`function wiserAddedToCart() {
  theme.Cart.prototype._sidebarDrawerOpen();
  theme.Cart.prototype._onProductAdded();
}`},{id:"11",storeName:"fb235c-92.myshopify.com",themeName:"Divine",date:"25-09-25",author:"Deepika",code:`<script>
async function wiseraddedtocart(){
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble'); // Fixed selector
    if (cartIconElement) cartIconElement.innerHTML = wsnewBox;
    document.querySelector('body .header__icon .cart-count-bubble').click();
}
<\/script>`},{id:"12",storeName:"ozlifestyle-2.myshopify.com",themeName:"Empire",date:"25-09-23",author:"Deepika",code:`<script>
function wiserAddedToCart(){
fetch(\`\${window.Theme.routes.cart_url}.js\`)
  .then(response => response.json())
  .then(data => {
    console.log('Cart data:', data);
    const countEvent = new CustomEvent('cartcount:update', {
      detail: data
    });
    window.dispatchEvent(countEvent);
  })
  .catch(error => console.error('Error updating cart:', error));
}
<\/script>`},{id:"13",storeName:"pmc-jewellery.myshopify.com",themeName:"Dawn",date:"25-09-21",author:"Deepika",code:`<script>
async function wiserAddedToCart() {
  try {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    if (cartIconElement && wsnewBox) {
      cartIconElement.innerHTML = wsnewBox;
    }
  } catch (error) {
    console.error('Error in wiserAddedToCart:', error);
  }
}
<\/script>`},{id:"14",storeName:"9bd82c-2.myshopify.com",themeName:"Stiletto",date:"25-09-16",author:"Deepika",code:`function wiseraddedtocart() {
  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');
  setTimeout(function() {
    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');
  }, 1500);
}`},{id:"15",storeName:"wojciechowskacosmetics.myshopify.com",themeName:"Prestige",date:"25-09-12",author:"Jaya",code:`async function wiseraddtocart() {                                
  document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
  bubbles: true
}));
 const cartDrawer = document.querySelector('cart-drawer');
 cartDrawer.show()
 }
wiseraddtocart()`},{id:"16",storeName:"mega-vitamins.myshopify.com",themeName:"Ecomus",date:"25-09-11",author:"Deepika",code:`<script>
   function wiseraddedtocart() {
      document.dispatchEvent(new CustomEvent('cart:refresh'));
      document.querySelector('.hdt-site-nav_cart a').click();
   }
<\/script>`},{id:"17",storeName:"wb-hbo.myshopify.com",themeName:"Snow Blizzard",date:"25-09-01",author:"Deepika",code:`<script>
 function wiseraddedtocart(){
     new theme.CartDrawer();
     $('.js-drawer-open-cart span').trigger('click');
   }
<\/script>`},{id:"18",storeName:"universal-parks.myshopify.com",themeName:"Dawn",date:"25-09-01",author:"Deepika",code:`<script>
 async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }
<\/script>`},{id:"19",storeName:"disney-hulu.myshopify.com",themeName:"Snow Blizzard",date:"25-08-20",author:"Deepika",code:`function wiserAddedToCart() {
  if (!theme.cartDrawer && typeof theme.CartDrawer === 'function') {
    theme.cartDrawer = new theme.CartDrawer();
  }
  // cartDrawer logic
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      if (theme.cartDrawer && theme.cartDrawer.updateSuccess) {
        theme.cartDrawer.updateSuccess(cart);
        theme.cartDrawer.drawer.open();
      }
    });
}`},{id:"20",storeName:"38dd0b-3.myshopify.com",themeName:"Dawn",date:"25-08-20",author:"Deepika",code:`function wiseraddedtocart(){
const cartIcon = $('#cart-icon-bubble')[0];
if (cartIcon) cartIcon.click();
  monster_refresh();
}`},{id:"21",storeName:"turner-engineering.myshopify.com",themeName:"Athens",date:"25-08-20",author:"Deepika",code:`function wiseraddedtocart(){
  const wscart = document.querySelector('mini-cart');
  wscart.updateQuantity();
  wscart.open();
}`},{id:"22",storeName:"chefs-mandala-gourmet-store.myshopify.com",themeName:"Dawn",date:"25-07-03",author:"Neeraj",code:`async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }
  wiseraddedtocart()`},{id:"23",storeName:"haveda-uk.myshopify.com",themeName:"Dawn",date:"25-07-03",author:"Yash",code:`async function wiserAddedToCart() {
const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
   const wshtml = document.createElement('div');
      wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
cartIconElement.innerHTML = wsnewBox;
}`},{id:"24",storeName:"flexpawz-2.myshopify.com",themeName:"Dawn",date:"25-07-03",author:"Deepika",code:`function wiseraddedtocart(){
const cartIcon = $('#cart-icon-bubble')[0];
if (cartIcon) cartIcon.click();
  monster_refresh();
}`},{id:"25",storeName:"cad71e-74.myshopify.com",themeName:"PoseTheme",date:"25-07-03",author:"Yash",code:`function wiseraddedtocart() {
  theme.miniCart.updateElements();
  theme.miniCart.generateCart();
}

setTimeout(function () {
  var $wsInit = 0;
  var oldcount = 0;
  var $wsInterval = setInterval(function () {
    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length;
    var newCount = document.querySelector('.mini-cart-header .js-cart-count').textContent;
    if ($wsDrawerDivCnt == 16 && $wsInit == 0 && oldcount != newCount) {
      $wsInit = 1;
      window.WISER_INIT('cart', 1);
      oldcount = newCount;
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 100);
}, 3000);`},{id:"26",storeName:"eyb5bj-dr.myshopify.com",themeName:"Blockshop",date:"25-06-27",author:"Yash",code:`<script>
async function wiseraddedtocart() {
  const wsres = await fetch('/?section_id=cart-drawer');
  const wstext = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wstext;
  const wsnewBox = wshtml.querySelector('cart-element').innerHTML;
  document.querySelector('cart-element').innerHTML = wsnewBox;
  const viewport = document.querySelector('.layout--viewport');
  if (viewport) {
    viewport.setAttribute('data-cart-empty', 'false');
  }
  window.trigger('theme:drawer:open', {
    side: 'right',
    view: 'cart-drawer',
    trigger: '',
  });
  window.trigger('theme:transition:reload:cart-drawer');
  window.Cart.updateTotals('updateTotals');
} <\/script>`},{id:"27",storeName:"hi8ahp-jn.myshopify.com",themeName:"Impulse",date:"25-06-25",author:"Deepika",code:`<script>
function wiseraddedtocart() {
  new theme.CartDrawer();
  $('.js-drawer-open-cart span').trigger('click');
}
 <\/script>`},{id:"28",storeName:"signify-india.myshopify.com",themeName:"Lampi",date:"25-06-25",author:"Deepika",code:`<script>
function wiseraddedtocart() {
  let wsFlag = 0;
  if (!document.querySelector('.mini-cart-bottom.enj-minicart-ajax .prod ')) {
    if (wsFlag == 0) {
      wsFlag = 1;
      window.REFRESH_CART(true);
    }
    window.refreshCart(true);
    window.OPEN_CART();
  } else {
    window.refreshCart(true);
    window.OPEN_CART();
  }
}
 <\/script>`},{id:"29",storeName:"somethings-brewing-store.myshopify.com",themeName:"Hyper",date:"25-06-25",author:"Deepika",code:`<script>
function wiseraddedtocart() {
  const wscart11 = document.querySelector('cart-count');
  if (wscart11 && wscart11.hasAttribute('hidden')) {
    wscart11.removeAttribute('hidden');
  }
  const wscart = document.querySelector('cart-drawer');
 if (wscart && typeof wscart.onCartRefresh === 'function') {
    wscart.onCartRefresh();
  }
  wscart.show();
}
 <\/script>`},{id:"30",storeName:"american-cornhole-association.myshopify.com",themeName:"Focal",date:"25-06-12",author:"Deepika",code:`<script>
function wiseraddedtocart() {
  document.documentElement.dispatchEvent(
    new CustomEvent('cart:refresh', {
      bubbles: true,
      detail: {
        openMiniCart: window.themeVariables.settings.cartType === 'drawer',
      },}));
  // Theme based code
  $.getJSON('/cart.js', function (cart) {
    var ws_item_count = cart.item_count;
    $('.header__cart-count').text(ws_item_count);
  });
}

var $wsInit = 0;
var $wsInterval = setInterval(function () {
  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
  var wsChkAttr = $('cart-drawer').attr('open');
  if (
    typeof wsChkAttr !== 'undefined' &&
    wsChkAttr !== false &&
    $wsDrawerDivCnt == 8 &&
    $wsInit == 0
  ) {
    $wsInit = 1;
    window.WISER_INIT('cart', 1);
    setTimeout(function () {
      $wsInit = 0;
    }, 1000);}
}, 100);
 <\/script>`},{id:"31",storeName:"azariabrand.myshopify.com",themeName:"Shella",date:"25-06-12",author:"Deepika",code:`<script>
  function wiseraddedtocart() {
        $('body .header__counter')[0].click();
  }
 <\/script>`},{id:"32",storeName:"lashv-us.myshopify.com",themeName:"Minimog - OS 2.0",date:"25-06-06",author:"Deepika",code:`<script>
  function wiseraddedtocart(){
  const wscart = document.querySelector('m-cart-drawer');
  wscart.onCartDrawerUpdate();
  wscart.open();
  }
setTimeout(function () {
  var $wsInit = 0;
  var oldcount = 0;
  var $wsInterval = setInterval(function () {
    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length;
    var newCount = document.querySelector('.m-cart-count-bubble').textContent;
    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {
      $wsInit = 1;
      window.WISER_INIT('cart', 1);
      oldcount = newCount;
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 100);
 }, 3000);
<\/script>`},{id:"33",storeName:"2dffa4.myshopify.com",themeName:"Testament",date:"25-05-29",author:"Deepika",code:`<script>
  function wiseraddedtocart(){
     const cartDrawer11 = document.querySelector('.cart-drawer');
    cartDrawer11?.openDialog?.();
   const cartDrawer22 = document.querySelector('cart-items');
cartDrawer22?.refreshCart();
  }  
setTimeout(function () {
  var $wsInit = 0
  var oldcount = 0
  var $wsInterval = setInterval(function () {
    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length
    var newCount = document.querySelector('.evm_wiser_count').textContent
    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {
      $wsInit = 1
      window.WISER_INIT('cart', 1)
      oldcount = newCount
      setTimeout(function () {
        $wsInit = 0
      }, 3000)
    }
  }, 00)
}, 4000)
<\/script>`},{id:"34",storeName:"everything-crochet-shop.myshopify.com",themeName:"Primavera",date:"25-05-30",author:"Deepika",code:`<script>
  function wiseraddedtocart(){
     const cartDrawer11 = document.querySelector('.cart-drawer');
    cartDrawer11?.openDialog?.();
   const cartDrawer22 = document.querySelector('cart-items');
cartDrawer22?.refreshCart();
  }  
setTimeout(function () {
  var $wsInit = 0
  var oldcount = 0
  var $wsInterval = setInterval(function () {
    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length
    var newCount = document.querySelector('.evm_wiser_count').textContent
    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {
      $wsInit = 1
      window.WISER_INIT('cart', 1)
      oldcount = newCount
      setTimeout(function () {
        $wsInit = 0
      }, 3000)
    }
  }, 00)
}, 4000)
<\/script>`},{id:"35",storeName:"gtworldde.myshopify.com",themeName:"Be Yours",date:"25-01-05",author:"Deepika",code:`<script>
   async function wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer');
  wsopener.openMenuDrawer();
  const wsres = await fetch('/?section_id=mini-cart');
  const wstext = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wstext;
  const wsnewBox =                   wshtml.querySelector('.mini-cart__inner').innerHTML; 
  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;
  document.querySelector('.mini-cart').classList.remove('is-empty');
}
<\/script>`},{id:"36",storeName:"bodegas-ferrera.myshopify.com",themeName:"wpbingo",date:"25-04-30",author:"Deepika",code:`<script>
  function wiseraddedtocart(){
    ajaxCart.load();
    $('body').addClass('drawer--open');
    $('.js-drawer-close').on('click', function() {
    $('body').removeClass('drawer--open');
    });
  }
<\/script>`},{id:"37",storeName:"softambient.myshopify.com",themeName:"Minimog - OS 2.0",date:"25-04-09",author:"Deepika",code:`<script>
  function wiseraddedtocart(){
  const wscart = document.querySelector('m-cart-drawer');
  wscart.onCartDrawerUpdate();
  wscart.open();
  }
<\/script>`},{id:"38",storeName:"finemodesty.myshopify.com",themeName:"dawn",date:"25-04-08",author:"Deepika",code:`function wiseraddedtocart(){
   $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);
}`},{id:"39",storeName:"littleweststreet.myshopify.com",themeName:"Prestige",date:"25-04-04",author:"Deepika",code:`<script>
function wiseraddedtocart(){
  document.documentElement.dispatchEvent(new CustomEvent('product:added', {
            bubbles: true,
            detail: {
         quantity: 1
            }
          }));
}
 <\/script>`},{id:"40",storeName:"1-itemisrael.myshopify.com",themeName:"Prestige",date:"25-04-04",author:"Deepika",code:`<script>
    function wiseraddedtocart() {    
    document.dispatchEvent(new CustomEvent('product:added', {
        bubbles: true,
      detail: {}
    }));
  }
 let $wsInit = 0;
    setInterval(function() {
     
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
console.log($wsDrawerDivCnt , '$wsDrawerDivCnt')
const cartDrawer11 = document.querySelector('.cart-drawer');
if (cartDrawer11.open  && $wsDrawerDivCnt == 8 && $('#cart-drawer').css('display') == 'block' && $wsInit == 0) {
      window.WISER_INIT('cart',1);
       setTimeout(function () {
      $wsInit = 0;
    }, 3000);
    }
  }, 500);
  <\/script>`},{id:"41",storeName:"voltage-staging.myshopify.com",themeName:"Prestige",date:"25-04-04",author:"Deepika",code:`<script>
function wiseraddedtocart(){
  document.documentElement.dispatchEvent(new CustomEvent('product:added', {
  bubbles: true,
  detail: {      
  quantity: 1
}
}));
}
    <\/script>`},{id:"42",storeName:"650226-3.myshopify.com",themeName:"Origin",date:"25-04-03",author:"Yash",code:`<script>
     async function wiseraddedtocart(){
const wsopener = document.querySelector('cart-drawer')
  wsopener.open()
  const wsres = await fetch('/?section_id=cart-drawer')
  const wstext = await wsres.text()
  const wshtml = document.createElement('div')
  wshtml.innerHTML = wstext
  const wsnewBox = wshtml.querySelector('.drawer').innerHTML
  document.querySelector('.drawer').innerHTML = wsnewBox
  document.querySelector('.drawer').classList.remove('is-empty')
undefined
      }
 
var $wsInit = 0;
var $wsCartCntOld = 0;
var $wsInterval = setInterval(function () {
  var $wsCartCnt = $('body .cart-count-bubble span[aria-hidden='true']').text();
  if (
    document.querySelector('cart-drawer').classList.contains('active') &&
    $wsCartCnt != $wsCartCntOld &&
    $wsInit == 0
  ) {
    $wsCartCntOld = $wsCartCnt;
    $wsInit = 1;
    window.WISER_INIT('cart', 1);
    setTimeout(function () {
      $wsInit = 0;
    }, 1000);
  }
}, 500);
    <\/script>`},{id:"43",storeName:"voltage-staging.myshopify.com",themeName:"Electro",date:"25-02-10",author:"Deepika",code:`async function wiseraddedtocart() {
  const wsopener = document.querySelector('sht-cart-drwr')
  wsopener.openDrawer()
  const wsres = await fetch('/?section_id=cart-drawer')
  const wstext = await wsres.text()
  const wshtml = document.createElement('div')
  wshtml.innerHTML = wstext
  const wsnewBox = wshtml.querySelector('.drawer__wrapper').innerHTML
  document.querySelector('.drawer__wrapper').innerHTML = wsnewBox
  document.querySelector('.drawer__wrapper').classList.remove('is-empty')
}`},{id:"44",storeName:"intrepid-6309.myshopify.com",themeName:"Bullet",date:"25-02-14",author:"Yash",code:`function wiseraddedtocart() {
  setTimeout(() => {
    const wsopener = document.querySelector('cart-drawer');
    if (wsopener) {
      wsopener.show();
      console.log('Cart drawer shown');
    } else {
      console.error('cart-drawer not found!');
    }
  }, 500);`},{id:"45",storeName:"gs13gg-za.myshopify.com",themeName:"Concept",date:"25-03-20",author:"Yash",code:`async function wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer')
  if (window.cartItemsVal.length > 0) {
    wsopener.refresh()
  } else {
    const wsres = await fetch('/?section_id=cart-drawer')
    const wstext = await wsres.text()
    const wshtml = document.createElement('div')
    wshtml.innerHTML = wstext
    const wsnewBox = wshtml.querySelector('.drawer__content').innerHTML
    document.querySelector('.drawer__content').innerHTML = wsnewBox
    const cartLink = document.querySelector('#cart-icon-bubble')
  }
  wsopener.open()
}
setTimeout(function () {
  var $wsInit = 0
  var oldcount = 0
  var $wsInterval = setInterval(function () {
    var $wsDrawerDivCnt = document.querySelectorAll('body div.evm-drawer-main div').length
    var newCount = document.querySelector('.evm_wiser_count').textContent
    if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldcount != newCount) {
      $wsInit = 1
      window.WISER_INIT('cart', 1)
      oldcount = newCount
      setTimeout(function () {
        $wsInit = 0
      }, 3000)
    }
  }, 00)
}, 5000)`},{id:"46",storeName:"royale-lighting.myshopify.com",themeName:"Concept",date:"25-03-25",author:"Deepika",code:`function wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer')
  wsopener.onCartRefresh()
  wsopener.show()
  document.querySelectorAll('.evm_wiser_count').forEach(el => el.removeAttribute('hidden'))
}`},{id:"47",storeName:"n2-interior.myshopify.com",themeName:"Bullet",date:"25-03-25",author:"Yash",code:`function wiseraddedtocart(){
 window.liquidAjaxCart.update()
     const wscartdrawer = document.querySelector('coretex-dialog')
     wscartdrawer.open();
 }`},{id:"48",storeName:"ugaoo-store.myshopify.com",themeName:"Be Yours",date:"25-03-26",author:"Deepika",code:`async function wiseraddedtocart(){
  const wsopener = document.querySelector('cart-drawer');
  wsopener.openMenuDrawer();
  const wsres = await fetch('/?section_id=mini-cart');
  const wstext = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wstext;
  const wsnewBox = wshtml.querySelector('.mini-cart__inner').innerHTML;
  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;
  document.querySelector('.mini-cart').classList.remove('is-empty');
}
  var $wsInit = 0;
var $wsInterval = setInterval(function() {
  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
  var wsChkAttr = $('.cart-drawer-container').attr('open');
  if (wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {
    $wsInit = 1;
    window.WISER_INIT('cart',1);
    setTimeout(function () {
      $wsInit = 0;
    }, 3000);
  }
}, 100);`},{id:"49",storeName:"1nruwb-jm.myshopify.com",themeName:"dawn",date:"25-03-05",author:"Deepika",code:`function wiseraddedtocart(){
  $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icon #cart-icon-bubble')[0].click();
      });
    }, 1000);
}`},{id:"50",storeName:"baa2ce-78.myshopify.com",themeName:"Ella",date:"25-01-29",author:"Deepika",code:`// Create wsHaloJs variable in theme.js file and assign value on this variable halo variable value

function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {
    if (window.page_name === 'cart') {
      wsHaloJs.updateCart(cart);
    } else {
      wsHaloJs.updateSidebarCart(cart);
    }
    document.querySelector('a[href='/cart']').click();
  });
}`},{id:"51",storeName:"colorshow-pk.myshopify.com",themeName:"Debut",date:"25-01-09",author:"Yash",code:`function wiseraddedtocart() {
  adjustCartDropDown()
  if (!$('.cart-display #cart-container').hasClass('innew')) {
    $('.cart-display #cardawnt-container').addClass('innew')
    $('.cart-display .cart-title').addClass('collapsed')
    $('.cart-display .cart-title').attr('aria-expanded', 'true')
    $('.cart-display #cart-container').css('height', '')
  }
}`},{id:"52",storeName:"kristielight.myshopify.com",themeName:"Pink Paradise",date:"25-01-08",author:"Yash",code:`/* file m changes h
jquery.interact-function.js
line number : 3559
wiserSell: function(){
          ShowCart();
        }
line number: 2434
alsoShopify.wiserSell(); */
function wiseraddedtocart(){
    window.aloShopify.wiserSell()
    $('.mini-cart.push_side.header-icon').trigger('click')
  }`},{id:"53",storeName:"ensojewellery.myshopify.com",themeName:"Wpbingo",date:"25-01-09",author:"Deepika",code:`function wiseraddedtocart(){
          ajaxCart.load();
          $('body').addClass('drawer--open');
          $('.js-drawer-close').on('click', function() {
            $('body').removeClass('drawer--open');
          });
         }`},{id:"54",storeName:"colorshow-pk.myshopify.com",themeName:"Debut",date:"24-12-18",author:"Yash",code:`function wiseraddedtocart(){
  adjustCartDropDown();
 if(!$('.cart-display #cart-container').hasClass('innew')){
      $('.cart-display #cart-container').addClass('innew');
      $('.cart-display .cart-title').addClass('collapsed');
      $('.cart-display .cart-title').attr('aria-expanded', 'true');
      $('.cart-display #cart-container').css('height', '');
    }
}`},{id:"55",storeName:"ca490c-bb.myshopify.com",themeName:"Impact",date:"24-12-18",author:"Deepika",code:`function wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer');
  wsopener._onCartRefreshListener();
  wsopener.show();
  fetch('/cart.js')
    .then((res) => res.json())
    .then((cartData) => {
      const itemCount = cartData.item_count || 0;
      document.dispatchEvent(
        new CustomEvent('cart:change', {
          detail: { cart: { item_count: itemCount } },
        })
      );
    });
}`},{id:"56",storeName:"organic-olivia.myshopify.com",themeName:"be yours",date:"24-12-18",author:"Yash",code:`async function wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer');
  wsopener.openMenuDrawer();
  const wsres = await fetch('/?section_id=mini-cart');
  const wstext = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wstext;
  const wsnewBox = wshtml.querySelector('.mini-cart__inner').innerHTML;
  document.querySelector('.mini-cart__inner').innerHTML = wsnewBox;
  document.querySelector('.mini-cart').classList.remove('is-empty');
}`},{id:"57",storeName:"maxxusindustries.myshopify.com",themeName:"Dawn",date:"24-12-18",author:"Deepika",code:`function wiseraddedtocart() {
    const wscart = document.querySelector('cart-notification');
   wscart.renderCartContent();
   wscart.open();
    }`},{id:"58",storeName:"another-level-beauty-supply-llc.myshopify.com",themeName:"Ella",date:"24-12-13",author:"Deepika",code:`// Create wsHaloJs variable in theme.js file and assign value on this variable halo variable value

function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {
    if (window.page_name === 'cart') {
      wsHaloJs.updateCart(cart);
    } else {
      wsHaloJs.updateSidebarCart(cart);
    }
    document.querySelector('a[href='/cart']').click();
  });
}`},{id:"59",storeName:"179bd3.myshopify.com",themeName:"Kalles",date:"24-12-12",author:"Yash",code:`function wiseraddedtocart(){
         window.T4SThemeSP.Cart.getToFetch();
  $('.t4s-site-nav__cart svg').trigger('click');
     }`},{id:"60",storeName:"q5r1im-rd.myshopify.com",themeName:"Shrine PRO",date:"24-12-11",author:"Deepika",code:`async function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {
    var ws_item_count = cart.item_count;
    $('.cart-count-bubble').remove();
    $('#cart-icon-bubble').append(
      '<div class='cart-count-bubble'><span aria-hidden='true'>' +
        ws_item_count +
        '</span><span class='visually-hidden'>' +
        ws_item_count +
        ' item</span></div>'
    );
  });
  const wsDrawerSelector = document.querySelector('cart-drawer');
  const wsres = await fetch('/?section_id=cart-drawer');
  const wstext = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wstext;
  const wsnewBox = wshtml.querySelector('.drawer__inner').innerHTML;
  document.querySelector('.drawer__inner').innerHTML = wsnewBox;
  document.querySelector('.drawer').classList.remove('is-empty');
  const cartLink = document.querySelector('#cart-icon-bubble');
  wsDrawerSelector.open();
}`},{id:"61",storeName:"zenescope.myshopify.com",themeName:"Xtra",date:"24-12-03",author:"Yash",code:`function wiseraddedtocart() {
  window.ajaxCart.init();
  window.ajaxCart.load();
}

// Theme based code
$(document).ready(function () {
  var $wsInit = 0;
  let $wsCartCntOld = 0;

  var $wsInterval = setInterval(function () {
    $wsDrawerDivCnt = $('body div.evm-drawer-main > div').length;
    let $wsCartCntnew = $('.evm_wiser_count').text();
    if (
      $('#cart').attr('aria-hidden') === 'false' &&
      $wsInit == 0 &&
      $wsCartCntnew != $wsCartCntOld &&
      $wsDrawerDivCnt == 8
    ) {
      $wsCartCntOld = $wsCartCntnew;
      $wsInit = 1;
      window.WISER_INIT('cart', 1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);
});`},{id:"62",storeName:"metapod-com.myshopify.com",themeName:"Impact",date:"24-12-03",author:"Deepika",code:`function  wiseraddedtocart() {
  const wsopener = document.querySelector('cart-drawer')
    wsopener._onCartRefreshListener();
 wsopener.show()
  const cartCount = document.querySelector('cart-count');
if (cartCount.style.opacity === '0' || !cartCount.style.opacity) {
  cartCount.style.opacity = '1';
  } 
  // Theme based code
  var $wsInit = 0;
var $wsInterval = setInterval(function() {
  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
  var wsChkAttr = $('cart-drawer').attr('open');
  if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {
    $wsInit = 1;
    window.WISER_INIT('cart',1);
    setTimeout(function () {
      $wsInit = 0;
    }, 3000);
  }
}, 100);`},{id:"63",storeName:"soulandmore.myshopify.com",themeName:"Sense",date:"24-12-02",author:"Yash",code:`async function wiseraddtocart(){
        const wsDrawerSelector = document.querySelector('cart-drawer');
     const res = await fetch('/?section_id=cart-drawer');
       const text = await res.text(); console.log(text , 'inside')
        const html = document.createElement('div');
    html.innerHTML = text;
        const newBox = html.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = newBox;
   document.querySelector('.drawer').classList.remove('is-empty');
   const cartLink = document.querySelector('#cart-icon-bubble');
    wsDrawerSelector.open()
      }`},{id:"64",storeName:"zoelle-fit.myshopify.com",themeName:"Impulse",date:"24-11-27",author:"Deepika",code:`function wiseraddedtocart() {
  new theme.CartDrawer();
  $('.js-drawer-open-cart span').trigger('click');
}`},{id:"65",storeName:"warnerbrothers-shop.myshopify.com",themeName:"Impulse",date:"24-11-27",author:"Deepika",code:`function wiseraddedtocart() {
  new theme.CartDrawer();
  $('.js-drawer-open-cart span').trigger('click');
}`},{id:"66",storeName:"startrek-shop.myshopify.com",themeName:"Avalanche",date:"24-11-27",author:"Yash",code:`function wiseraddedtocart(){
      setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);
}`},{id:"67",storeName:"nbcuniversal.myshopify.com",themeName:"Avalanche",date:"24-11-27",author:"Deepika",code:`function wiseraddedtocart(){
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
        $('#shopify-section-cart-drawer .my-cart, .cart-close-button, .cart-drawer-overlay').addClass('open');
        window.postMessage({ type: 'cart_drawer', action: 'open'}, '*');
      });
    }, 1000);
}`},{id:"68",storeName:"fox-pos.myshopify.com",themeName:"dawn",date:"24-11-25",author:"Deepika",code:`function wiseraddedtocart(){
      $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);
}`},{id:"69",storeName:"poppys-of-atlanta.myshopify.com",themeName:"Testament",date:"24-11-25",author:"Yash",code:`function wiseraddedtocart(){
      let ws_drawerConfig = document.getElementById('cart-config');
        ws_drawerConfig = JSON.parse(config.innerHTML || '{}');
      Shopify.theme.ajaxCart.showDrawer(ws_drawerConfig);
     
      }
     
      var $wsInit = 0;
          let $wsCartCntOld = 0;
          var $wsInterval = setInterval(function() {
          $wsDrawerDivCnt = $('body div.evm-drawer-main > div').length;
          let $wsCartCntnew = $('.cart-links__link-cart .button-as-link .js-cart-count').text();
           
          if ($('body .slideout__drawer-right.mini-cart').hasClass('slideout--active') && $wsInit == 0  && $wsCartCntnew != $wsCartCntOld) {
            $wsCartCntOld = $wsCartCntnew;
            $wsInit = 1;
            window.WISER_INIT('cart',1);
            console.log(' 22222 ')
            setTimeout(function () {
              $wsInit = 0;
            }, 3000);
          }
      }, 100);`},{id:"70",storeName:"vcbs-yellowstone.myshopify.com",themeName:"Avalanche",date:"24-11-21",author:"Yash",code:`async function wiseraddedtocart() {    
  const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
   const wshtml = document.createElement('div');
      wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon');
cartIconElement.innerHTML = wsnewBox;
  const wsrescart = await fetch('/?section_id=cart-drawer');
  const wstextcart = await wsrescart.text();
  const wshtmlcart = document.createElement('div');
  wshtmlcart.innerHTML = wstextcart;
  const wsnewBoxCart =wshtmlcart.querySelector('#shopify-section-cart-drawer .cart-container').innerHTML;
  document.querySelector('#shopify-section-cart-drawer .cart-container').innerHTML = wsnewBoxCart;
   $('body .header__icons #cart-icon-bubble')[0].click();
  }`},{id:"71",storeName:"the-wondery-shop.myshopify.com",themeName:"Avalanche",date:"24-11-14",author:"Yash",code:`function wiseraddedtocart() {    
        setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);


      }


/*wiser Code to show  widgets in cart drawer  */
    var $wsInit = 0;
    var $wsInterval = setInterval(function () {
      var $wsCartCnt =  $('.header__icon--cart span[data-ajax-cart-bind-state]').text()[0];
      $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
      if ($('body .cart-drawer-overlay').hasClass('open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {                
       $wsInit = 1;
        window.WISER_INIT('cart', 1);
        setTimeout(function () {
          $wsInit = 0;
        }, 5000);
      }
    }, 100);`},{id:"72",storeName:"the-perfect-hoop.myshopify.com",themeName:"Spark",date:"24-11-11",author:"Yash",code:`function wiseraddedtocart(){
  const quickCartInstance = window.quickCartInstance(document.querySelector('.quick-cart'))
 quickCartInstance.open();
}`},{id:"73",storeName:"9bd82c-2.myshopify.com",themeName:"Stiletto",date:"24-11-11",author:"Yash",code:`function wiseraddedtocart() {
  if (window.quickCartInstance && typeof window.quickCartInstance.openQuickCart === 'function') {
    window.quickCartInstance.refreshQuickCart();
        setTimeout(() => {
           window.quickCartInstance.openQuickCart();
          }, 300);
  }
  }
 
  // theme based code
       
        var $wsInit = 0;
        var $wsInterval = setInterval(function () {
          var $wsCartCnt = $('.evm_wiser_count').text()[0];
          $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
          if ($('body .quick-cart__wrapper').hasClass('active') &&            $wsDrawerDivCnt == 8 && $wsInit == 0) {                
           $wsInit = 1;
            window.WISER_INIT('cart', 1);
            setTimeout(function () {
              $wsInit = 0;
            }, 5000);
          }
        }, 100);`},{id:"74",storeName:"marithefrancoisgirbaud.myshopify.com",themeName:"Symmetry",date:"24-11-07",author:"Deepika",code:`function wiseraddedtocart(){
    $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');
$.getJSON('/cart.js', function(cart) {
  var ws_item_count = cart.item_count
  $('.cart-link__count').remove();
  $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)
  setTimeout(function() {
    $('body .cart-link__icon').trigger('click');
  }, 1000 );
});
}`},{id:"75",storeName:"revision-skincare.myshopify.com",themeName:"dawn",date:"24-11-07",author:"Deepika",code:`// No specific code provided in source, just theme name. 
// Please verify if code is needed.`},{id:"76",storeName:"vapingland-com.myshopify.com",themeName:"ella",date:"24-10-23",author:"Deepika",code:`function wiseraddedtocart(){
    $.getJSON('/cart.js', function(cart) {
      if (window.page_name === 'cart') {
        wsHaloJs.updateCart(cart);
      }else{
        wsHaloJs.updateSidebarCart(cart);  
      }
       document.querySelector('a[href='/cart']').click()
    });
  }`},{id:"77",storeName:"d8dc91-1a.myshopify.com",themeName:"Beauty",date:"24-10-16",author:"Deepika",code:`function wiseraddedtocart(){
    $(document).on('click', '#CartDrawer-Overlay', function(e) {
      e.preventDefault();
      $('#CartDrawer').parent().removeClass('active');
    });  
    $('.drawer').load(location.href + ' .drawer>*', '');
    setTimeout(function() {
      $('.drawer').addClass('active');
      $('.drawer').removeClass('is-empty');
    },1000);
   }`},{id:"78",storeName:"rforrabbit1.myshopify.com",themeName:"Ella",date:"24-09-13",author:"Neeraj",code:`function wiseraddedtocart(){
    $.getJSON('/cart.js', function(cart) {
      if (window.page_name === 'cart') {
        wsHaloJs.updateCart(cart);
      }else{
        wsHaloJs.updateSidebarCart(cart);  
      }
      window.OPEN_CART();
    });
  }


  /* theme based code */
  var $wsInit = 0;
  var $wsCartCntOld = 0;
  var $wsInterval = setInterval(function () {
    var $wsCartCnt = parseInt($('.cart-count-bubble .text').text());
    if ($('body').hasClass('cart-sidebar-show') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {
      $wsInit = 1;
      $wsCartCntOld = $wsCartCnt;
     window.WISER_INIT('cart', 1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 500);`},{id:"79",storeName:"6dc86d-ba.myshopify.com",themeName:"Eurus",date:"24-09-12",author:"Yash",code:`function wiseraddedtocart(){
    Alpine.store('xMiniCart').reLoad();
   Alpine.store('xMiniCart').openCart();
 }`},{id:"80",storeName:"centrale-fillers.myshopify.com",themeName:"Gradibase",date:"24-09-02",author:"Neeraj",code:`var wsChkFao = 0;
    wsGetCartCntOld = 0;
    let wsCartInterValFao = setInterval(function() {
    let wsGetCartCnt = $('.button-cart-counter').text();
      if (parseInt(wsGetCartCnt) != parseInt(wsGetCartCntOld) && wsChkFao == 0) {
        window.WISER_INIT('cart',1);
        wsChkFao = 1;
        wsGetCartCntOld = wsGetCartCnt;
        // clearInterval(wsCartInterValFao);
        setTimeout(function () {
          wsChkFao = 0;
        }, 3000);
      }
    }, 100);`},{id:"81",storeName:"fao-schwarz.myshopify.com",themeName:"Impulse",date:"24-09-03",author:"Neeraj",code:`var wsChkFao = 0;
  setTimeout(function () {
    let wsCartInterValFao = setInterval(function() {
      if ($('.cart-link__bubble').hasClass('cart-link__bubble--visible') && wsChkFao == 0) {
        wsChkFao = 1;
        clearInterval(wsCartInterValFao);
        window.WISER_INIT('cart',1);
      }
    }, 500);
  }, 4000);
 
  function wiserOpenCartDrawer(pid){
   fetch('/cart/add.js', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          id: pid,
          quantity: 1
      })
    })
    .then(response => response.json())
    .then(data => {
      window.WISER_INIT('cart',1);
      $('.evm-wi-quick-close-btn').trigger('click');
      const wsCartObjQickView = new theme.CartDrawer();
      wsCartObjQickView.open();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
   // theme based code
  function wiseraddedtocart(){
    const wsCartDrawerObj = new themen.CartDrawer();
    wsCartDrawerObj.open();
    window.WISER_INIT('cart',1);
  }`},{id:"82",storeName:"1921movement.myshopify.com",themeName:"Dawn",date:"24-09-02",author:"Deepika",code:`<script>
 function wiseraddedtocart(){
    const wsevent = new CustomEvent('wiser:addedToCart');
    window.dispatchEvent(wsevent);
  }
 <\/script>`},{id:"83",storeName:"royale-lighting.myshopify.com",themeName:"Warehouse",date:"24-08-30",author:"Deepika",code:`<script>
 function wiseraddedtocart(){
document.documentElement.dispatchEvent(new CustomEvent('product:added', {
      bubbles: true,
        detail: {
         quantity: 1
       }
     }));
 }
 <\/script>`},{id:"84",storeName:"camessi-collection.myshopify.com",themeName:"Taiga",date:"24-08-01",author:"Deepika",code:`<script>
function wiseraddedtocart(){
document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
}));
  }
 <\/script>`},{id:"85",storeName:"jean-rachel-jewelry.myshopify.com",themeName:"Pipeline",date:"24-06-25",author:"Deepika",code:`var $wsInit = 0;
    var oldCount = 0;
      var $wsInterval = setInterval(function() {
        const spanElement = document.getElementById('evm_cart_count');
          var newCount = spanElement.dataset.headerCartCount      
        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
        if ($wsDrawerDivCnt == 8 && $wsInit == 0 && oldCount !=  newCount) {  
console.log('In')  
          $wsInit = 1;
          window.WISER_INIT('cart',1);
          setTimeout(function () {
            $wsInit = 0;
          }, 3000);
        }
      }, 1000);`},{id:"86",storeName:"indiatrend1.myshopify.com",themeName:"Forge",date:"24-06-21",author:"Yash",code:`function wiseraddedtocart() {          
    let config = document.getElementById('cart-config');
        if ( !config ) return false;
        config = JSON.parse(config.innerHTML || '{}');
         console.log(config)  
   
   
    window.WAU.ThemeCart.getCart()
      .then(cartData => {        
         return cartData;
     })
      .then(finalValue => {
        window.WAU.AjaxCart.updateView(config, finalValue);  
          if (!$('.slideout__drawer-right.mini-cart').hasClass('slideout--active')){
            $('.slideout__trigger--open span').trigger( 'click' )
         }    
      })
      .catch(error => {
        // Handle any errors that occur during the promise chain
        console.error('Error:', error);
      });
    }
    <script>
    var $wsInit = 0;
    var oldCount = 0;
      var $wsInterval = setInterval(function() {
          var newCount = document.querySelector('.js-mini-cart-trigger .js-cart-count').innerText      
        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
        if ($('.slideout__drawer-right.mini-cart').hasClass('slideout--active') && $wsDrawerDivCnt == 8 && $wsInit == 0 && oldCount !=  newCount) {      
          $wsInit = 1;
          window.WISER_INIT('cart',1);
          setTimeout(function () {
            $wsInit = 0;
          }, 3000);
        }
      }, 1000);
      <\/script>`},{id:"87",storeName:"stratum-aesthetics.myshopify.com",themeName:"Pipeline",date:"24-06-21",author:"Deepika",code:`function wiseraddedtocart() {          
document.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true }));
document.dispatchEvent(new CustomEvent('theme:cart:reload', { bubbles: true }));  
}`},{id:"88",storeName:"imperio-brazilian.myshopify.com",themeName:"Dawn",date:"24-06-17",author:"Yash",code:"wiseraddtocart()"},{id:"89",storeName:"skillmaticsindia.myshopify.com",themeName:"Wokiee",date:"24-06-14",author:"Yash",code:`$( document ).ready(function() {
  var $wsInit = 0;
  var $wsCartCntOld = 0;
  var $wsInterval = setInterval(function() {
  var $wsCartCnt    = parseInt($('.tt-badge-cart').text())
var parentElement = $('.hs-sticky-cart');
      var emptyElement = $('.hs-empty-cart');
      var newElement = $(\`<div class='evm-drawer-main' data-scrollable>
                        <div class='evm-drawer-related-product'></div>
                        <div class='evm-drawer-related-viewed-browsing'></div>
                        <div class='evm-drawer-recommended-products'></div>
                        <div class='evm-drawer-recently-viewed'></div>
                        <div class='evm-drawer-arrivals-product'></div>
                        <div class='evm-drawer-featured-product'></div>
                        <div class='evm-drawer-popular-products'></div>
                        <div class='evm-drawer-trending-products'></div>
                        </div>\`);
    if ($('.hs-popup-cart-sp-load').hasClass('hs-active') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {
var $wsDrawerDivCnt  = $('body div.evm-drawer-main  div').length;      
        if($wsCartCnt > 0 &&  $wsDrawerDivCnt < 8){
            parentElement.after(newElement);
        }
           
      $wsCartCntOld = $wsCartCnt;
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
        if ($('.hs-popup-cart-sp-load').hasClass('hs-active') && $('.hs-empty-cart') && $wsInit == 0) {  
          var $wsDrawerDivCnt  = $('body div.evm-drawer-main  div').length;
          if($wsCartCnt == 0 && $wsDrawerDivCnt < 8 ){        
          emptyElement.after(newElement);
          }
       $wsInit = 1;
          if($wsDrawerDivCnt == 8 ){
            window.WISER_INIT('cart',1);
            $('.hs-body-layout').css({'overflow-y': 'auto'})
          }        
        setTimeout(function () {
          $wsInit = 0;
        }, 3000);
       }
  }, 500);
});`},{id:"90",storeName:"rmid.myshopify.com",themeName:"Palo Alto",date:"24-06-14",author:"Yash",code:`function wiseraddedtocart() {
  window.cart.getCart()
  window.cart.openCartDrawer()
}


/* tehem based code */


$( document ).ready(function() {
  var ws_flag = 0;
  var cart_count_old = 0 ;
// var cartHasItem = window.cart.hasItemsInCart();  
setInterval(function () {
  var cart_count = window.cart.items.length
  var drawer = document.getElementById('evm-drawer-main');


  if (drawer != null){
     if (cart_count == 0) {
    drawer.style.display = 'none';
  } else {
    drawer.style.display = 'block';
  }
  }
    if (cart_count_old != cart_count && cart_count > 0   && ws_flag == 0) {      
      ws_flag = 1;
      cart_count_old = cart_count;
      window.WISER_INIT('cart',1);
      setTimeout(function() {          
        ws_flag= 0;
      }, 3000);
    }
  }, 100);
})`},{id:"91",storeName:"hardman-design-eu.myshopify.com",themeName:"Split",date:"24-06-16",author:"Yash",code:`function wiseraddedtocart(){
  window.refreshCart();
}
wiseraddedtocart();

/* theme based code */


var $wsInit = 0;
var old_cartCount= 0;
  var $wsInterval = setInterval(function() {
var cartCount  = document.querySelector('[data-header-cart-count]').innerText;
   
      $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
console.log('$wsDrawerDivCnt' , $wsDrawerDivCnt)
    if ($('body #site-cart').hasClass('active') && old_cartCount !== cartCount && $wsInit == 0) {
      $wsInit = 1;
      old_cartCount = cartCount
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);`},{id:"92",storeName:"237a95-2.myshopify.com",themeName:"Impulse",date:"24-05-23",author:"Deepika",code:`<script>
      function wiseraddedtocart(){
     		const wsCartDrawerObj = new themen.CartDrawer();
        wsCartDrawerObj.open();
        }
    <\/script>`},{id:"93",storeName:"minimalist-global.myshopify.com",themeName:"Motion",date:"24-05-22",author:"Yash",code:`function wiseraddedtocart(){
  var cartNew  = new theme.CartDrawer();
  document.body.classList.add('cart-has-items');
  cartNew.cartForm.updateCount();
  cartNew.drawer.open();
 }






//  theme based code
    var old_cart_count = 0;
  setInterval(function () {
    var cart_count = $('.cart-link__bubble').attr('data-items');
    if ($('#CartDrawer').hasClass('drawer--is-open') && cart_count != old_cart_count) {
      old_cart_count = cart_count;
      window.WISER_INIT('cart',1);
    }
  }, 100);`},{id:"94",storeName:"b11b0d-2.myshopify.com",themeName:"Motion",date:"24-05-08",author:"Deepika",code:`function wiseraddedtocart(){
  var cartNew  = new theme.CartDrawer();
  document.body.classList.add('cart-has-items');
  cartNew.cartForm.updateCount();
  cartNew.drawer.open();
 }`},{id:"95",storeName:"birch-robot.myshopify.com",themeName:"Streamline",date:"24-05-03",author:"Yash",code:`function wiseraddedtocart(){
  var cartNew  = new theme.CartDrawer();
  document.body.classList.add('cart-has-items');
  cartNew.cartForm.updateCount();
  cartNew.drawer.open();
 }`},{id:"96",storeName:"hypeach-boutique.myshopify.com",themeName:"Upscale",date:"24-04-30",author:"Neeraj",code:`function wiseraddedtocart(){
        $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');
        setTimeout(function() {
          const wsChkAriaExpd = $('#HeaderCartIcon button').attr('aria-expanded');
          if(wsChkAriaExpd == 'false') {
            $('#HeaderCartIcon button').trigger('click');
          }
        }, 1000);
        setTimeout(function () {
          $.getJSON('/cart.js', function(cart) {
            var ws_item_count = cart.item_count
            $('.header-cart-icon__count').remove();
            $('#HeaderCartIcon').append('<div class='header-cart-icon__count  small-text'><span class='evm_wiser_count' aria-hidden='true'>'+ws_item_count+'</span><span class='sr-only'>'+ws_item_count+' item</span></div>');        
          });
         }, 1000);          
      }

      /* LOAD WIDGETS ON-LOAD CART DRAWER */
      var $wsInit = 0;
      var $wsInterval = setInterval(function() {
        var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;        
        var wsChkAttr = $('#CartDrawer').attr('open');        
        if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {          
          $wsInit = 1;          
          window.WISER_INIT('cart',1);          
          setTimeout(function () {
            $wsInit = 0;
          }, 3000);          
        }
      }, 2000);`},{id:"97",storeName:"wholesale-matrboomie-com.myshopify.com",themeName:"Custom",date:"24-04-22",author:"Deepika",code:`<!--Wiser cartdrwaer shipping bar-->
{% if customer %}
  {% assign tag_to_check = 'RPP' %}
  {% assign customer_tags = customer.tags | split: ', ' %}
  {% for tag in customer_tags %}
    {% if tag contains tag_to_check %}
       <style>
         div#wsFsbMain, div#wsProgWr {
              display: none;
          }
       </style>    
      {% endif %}
  {% endfor %}
{% endif %}
<!--Wiser cartdrwaer shipping bar end-->`},{id:"98",storeName:"raithclothing.myshopify.com",themeName:"impulse",date:"24-04-11",author:"Neeraj",code:`wiseraddedtocart();
   function wiseraddedtocart(){
     new theme.CartDrawer();
     $('.js-drawer-open-cart span').trigger('click');
   }`},{id:"99",storeName:"fail-forward-clothing.myshopify.com",themeName:"Symmetry",date:"24-04-10",author:"Neeraj",code:`wiseraddedtocart();
function wiseraddedtocart() {
  $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');
  $.getJSON('/cart.js', function(cart) {
    var ws_item_count = cart.item_count
    $('.cart-link__count').remove();
    $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)
    setTimeout(function() {
      $('body .cart-link__icon').trigger('click');
    }, 1000 );
  });
}`},{id:"100",storeName:"tony-by-toni.myshopify.com",themeName:"Motion",date:"24-04-04",author:"Admin",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    document.querySelector('.js-drawer-open-cart').click();
}`},{id:"101",storeName:"yesterhome.myshopify.com",themeName:"Symmetry",date:"24-02-16",author:"Yash",code:`function wiseraddedtocart(){
    document.documentElement.dispatchEvent(new CustomEvent('theme:cartchanged', { bubbles: true, cancelable: false, detail: { openDrawer: true } }));
  }`},{id:"102",storeName:"gorecon1.myshopify.com",themeName:"Athens",date:"24-02-14",author:"Yash",code:`function  wiseraddedtocart() {
    window.SLIDECART_UPDATE();
     window.SLIDECART_OPEN();    
   }`},{id:"103",storeName:"alter-ego-running.myshopify.com",themeName:"Impulse",date:"24-02-12",author:"Neeraj",code:`wiseraddedtocart();
   function wiseraddedtocart(){
     new theme.CartDrawer();
     $('.js-drawer-open-cart span').trigger('click');
   }


  // Theme Based code
  var $wsInit = 0;
  var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);`},{id:"104",storeName:"royal-republiq.myshopify.com",themeName:"Prestige",date:"24-02-09",author:"Neeraj",code:`var ws_cnt = 0;
  function  wiseraddedtocart(e = '') {
    // e.stopPropagation()
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {bubbles: true}));      
    if($('#cart-drawer').attr('open') !== 'open' ) $('body a[aria-controls=cart-drawer] span ').trigger('click');  
  }
  var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body .header__cart-dot').hasClass('is-visible') && $wsDrawerDivCnt == 8 && $('#cart-drawer').css('display') == 'block') {
      console.log('in')
      window.WISER_INIT('cart',1);
    }
  }, 500);`},{id:"105",storeName:"snap-deal-1.myshopify.com",themeName:"Custom",date:"24-02-08",author:"Yash",code:`// wiser code
		var ws_flag = 0;
		var old_cart_count = 0;
		setInterval(function () {
			var cart_count =  $('.cart-full span').text();
			if ($('body[class*='template-']').hasClass('cart-active') && cart_count != '' && cart_count != old_cart_count && ws_flag == 0) {
				
              old_cart_count = cart_count;
				ws_flag = 1;
				window.WISER_INIT('cart',1);
			}
			setTimeout(function(){ ws_flag = 0 }, 5000);
		}, 100);`},{id:"106",storeName:"snap-deal-1.myshopify.com",themeName:"Snapdeal",date:"24-02-08",author:"P",code:`function wiseraddedtocart(){
  	$('li .site-header__cart-toggle span').trigger('click');       
  }`},{id:"107",storeName:"boconi.myshopify.com",themeName:"Reformation",date:"24-02-08",author:"P",code:`async function wiseraddedtocart() {
  try {
      const cart = await getCartData('/cart.js');


      // Extracting the item count from the cart object
      const ws_item_count = cart.item_count;


      // Updating the text content of elements with class 'thb-item-count' with the item count
      $('.thb-item-count').text(ws_item_count);


      // Reloading the content of an element with id 'Cart-Drawer' from the current location
      await loadCartDrawer();


      // Triggering a click event on an element with id 'cart-drawer-toggle'
      $('#cart-drawer-toggle div').trigger('click');
  } catch (error) {
      console.error('Error:', error);
  }location.href
}


function getCartData(url) {
  return new Promise((resolve, reject) => {
      $.ajax({ 
          url: url,
          dataType: 'json',
          success: function (data) {
              resolve(data);
          },
          error: function (xhr, status, error) {
              reject(error);
          }
      });
  });
}


function loadCartDrawer() {
  return new Promise((resolve) => {
      $('#Cart-Drawer').load(location.href + ' #Cart-Drawer>*', '', function () {
          resolve();
      });
  });
}`},{id:"108",storeName:"7cd45b-2.myshopify.com",themeName:"Motion",date:"24-01-18",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
    new theme.CartDrawer();
    document.querySelector('.js-drawer-open-cart').click();
}`},{id:"109",storeName:"lindasdekor.myshopify.com",themeName:"Stiletto",date:"24-01-17",author:"P",code:`wiseraddtocart();
function wiseraddtocart() {
  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');
  setTimeout(function() {
    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');
  }, 1500);
}
// theme based code 
      var $wsInit = 0;
      var $wsInterval = setInterval(function () {
        var $wsCartCnt = $('.evm_wiser_count').text()[0];
        $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
        if ($('body .quick-cart__wrapper').hasClass('active') && $wsDrawerDivCnt == 8 && $wsInit == 0) {                
         $wsInit = 1;
          window.WISER_INIT('cart', 1);
          setTimeout(function () {
            $wsInit = 0;
          }, 5000);
        }
      }, 100);`},{id:"110",storeName:"bj-positive-wear.myshopify.com",themeName:"Impulse",date:"24-01-10",author:"P",code:`function wiseraddedtocart(){
    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
          detail: {
            product: '',
            addToCartBtn: ''
          }
        }));  
  }
wiseraddtocart();
function wiseraddtocart() {
  $('.quick-cart__container').load(location.href + ' .quick-cart__container>*', '');
  setTimeout(function() {
    $('body header a .icon-button.icon-button-header-shopping-cart').trigger('click');
  }, 1500);
}`},{id:"111",storeName:"louisstitch.myshopify.com",themeName:"Gecko",date:"23-12-28",author:"P",code:`function wiseraddedtocart() {
  window.T4SThemeSP.Cart.getToFetch();
  $('.t4s-site-nav__cart svg').trigger('click');
}


// Theme baesd Code for cart drawer
var $wsInit = 0;
var $wsCartCntOld = 0;
var $wsInterval = setInterval(function () {
  var $wsCartCnt = $('body .t4s-site-nav__cart a  span.t4s-count-box').text();
  if (
    $('body #t4s-mini_cart').attr('aria-hidden') != 'true' &&
    $wsCartCnt != $wsCartCntOld &&
    $wsInit == 0
  ) {
    $wsCartCntOld = $wsCartCnt;
    $wsInit = 1;
    window.WISER_INIT('cart', 1);
    setTimeout(function () {
      $wsInit = 0;
    }, 3000);
  }
}, 500);`},{id:"112",storeName:"shanelzstore.myshopify.com",themeName:"Kalles",date:"23-12-15",author:"P",code:`function wiseraddedtocart(){
         window.T4SThemeSP.Cart.getToFetch();
  $('.t4s-site-nav__cart svg').trigger('click');
     }`},{id:"113",storeName:"divebombindustries.myshopify.com",themeName:"Impulse",date:"23-12-05",author:"Yash",code:`function wiseraddedtocart(){
    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
          detail: {
            product: '',
            addToCartBtn: ''
          }
        }));  
  }




  // Theme Based code                                                         .    


  var $wsInit = 0;
  var $wsCartCntOld = 0;
  var $wsInterval = setInterval(function() {
    $wsCartCnt    = $('.cart__items').attr('data-count');
    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsCartCnt != $wsCartCntOld && $wsInit == 0) {
      $wsCartCntOld = $wsCartCnt;
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 500);`},{id:"114",storeName:"Gracemygrace.myshopify.com",themeName:"Fashionopolism",date:"23-12-05",author:"Yash",code:`function wiseraddedtocart(){
$.getJSON('/cart.js', function(cart) {
        window.wetheme.toggleRightDrawer('cart', true, { cart: cart });      
      });
    }
 // theme based code 


  $( document ).ready(function() {
    setInterval(function() {
      var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
      var aa = $('.cart-item-count-header').text();
      if ( $('.right-drawer-vue').find('div').length > 1 &&  $wsDrawerDivCnt == 0) {
        var parentElement = $('#CartContainer form .ajaxcart__inner');
        var lastChild = parentElement.children().last();
        var newElement = $(\`<div class='evm-drawer-main' data-scrollable><div class='evm-drawer-related-product'></div><div class='evm-drawer-related-viewed-browsing'></div><div class='evm-drawer-recommended-products'></div><div class='evm-drawer-recently-viewed'></div><div class='evm-drawer-arrivals-product'></div><div class='evm-drawer-featured-product'></div><div class='evm-drawer-popular-products'></div><div class='evm-drawer-trending-products'></div></div>\`);


	if(parentElement.lenght > 0) { 
        newElement.insertBefore(lastChild);
        window.WISER_INIT('cart',1);
}
      }
    }, 1000);
  });`},{id:"115",storeName:"secret-label.myshopify.com",themeName:"Fashionopolism",date:"23-12-01",author:"Neeraj",code:`function wiseraddtocart() {
    $('.js-mini-cart-trigger').trigger('click');
  }
  // Theme Based code                                                       .
  let $wsInit = 0;
  let $wsCartCntOld = 0;
  let $wsInterval = setInterval(function() {
    let $wsCartCnt = parseInt($('.js-cart-count.vib-center').text());
    if ($wsCartCnt != $wsCartCntOld && $wsInit == 0) {
      $wsInit = 1;
      $wsCartCntOld = $wsCartCnt;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 500);`},{id:"116",storeName:"pilla-sport-2.myshopify.com",themeName:"Impulse",date:"23-11-16",author:"P",code:`function wiseraddedtocart(){  
  new theme.CartDrawer();
   $('.js-drawer-open-cart span').trigger('click'); 


}`},{id:"117",storeName:"ripplecollection.myshopify.com",themeName:"Flex",date:"23-11-09",author:"P",code:`function wiseraddedtocart(){  
  window.PXUTheme.jsAjaxCart.showDrawer();
  window.PXUTheme.jsAjaxCart.updateView();
}`},{id:"118",storeName:"hilife-vitamins.myshopify.com",themeName:"Supply",date:"23-11-08",author:"P",code:`function wiseraddedtocart(){
    window.ajaxifyShopify.showUpdatedCartModal()
   }    


$( document ).ready(function() {
  setInterval( function() {    
    var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ( $('#ajaxifyModal').hasClass('is-visible') && $('#ajaxifyCart form') && $wsDrawerDivCnt == 0 ) {
      var parentElement = $('#ajaxifyCart form');
      var lastChild = parentElement.children().last();
      var newElement = $(\`<div class='evm-drawer-main' data-scrollable>
                        <div class='evm-drawer-related-product'></div>
                        <div class='evm-drawer-related-viewed-browsing'></div>
                        <div class='evm-drawer-recommended-products'></div>
                        <div class='evm-drawer-recently-viewed'></div>
                        <div class='evm-drawer-arrivals-product'></div>
                        <div class='evm-drawer-featured-product'></div>
                        <div class='evm-drawer-popular-products'></div>
                        <div class='evm-drawer-trending-products'></div>
                        </div>\`);
      if(parentElement.length > 0 ) {
        newElement.insertBefore(lastChild);
      window.WISER_INIT('cart',1);
      }    
     }                  
   }, 1000);
});`},{id:"119",storeName:"brandscollective.myshopify.com",themeName:"Minimog - OS 2.0",date:"23-11-03",author:"P",code:`function wiseraddedtocart(){
    const mCartDrawerElement = document.querySelector('m-cart-drawer');
    mCartDrawerElement.open();
    mCartDrawerElement.onCartDrawerUpdate();    
}`},{id:"120",storeName:"finn-wien.myshopify.com",themeName:"Venue",date:"23-11-01",author:"P",code:`function wiseraddedtocart(){  
    ajaxCart.load();
}`},{id:"121",storeName:"sime-garden.myshopify.com",themeName:"Local",date:"23-11-01",author:"P",code:`function wiseraddedtocart() {
    window.refreshCart()
}`},{id:"122",storeName:"nehumall.myshopify.com",themeName:"Expanse",date:"23-11-01",author:"P",code:`function wiseraddedtocart() {
    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
      detail: { product: '', addToCartBtn: '' }
    }));
  }`},{id:"123",storeName:"freakins.myshopify.com",themeName:"Focal",date:"23-10-24",author:"Evm-old",code:`function  wiseraddedtocart(){
  document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
    bubbles: true,
    detail: { openMiniCart: window.themeVariables.settings.cartType === 'drawer' }
  }));
  $.getJSON('/cart.js', function(cart) {
  var ws_item_count = cart.item_count
  $('.header__cart-count').text(ws_item_count);
  });
}
  // Theme Based code                                                       .
var $wsInit = 0;
var $wsInterval = setInterval(function() {
  var $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
  var wsChkAttr = $('cart-drawer').attr('open');
  if (typeof wsChkAttr !== 'undefined' && wsChkAttr !== false && $wsDrawerDivCnt == 8 && $wsInit == 0) {
    $wsInit = 1;
    window.WISER_INIT('cart',1);
    setTimeout(function () {
      $wsInit = 0;
    }, 3000);
  }
}, 1000);`},{id:"124",storeName:"luxoboutique7.myshopify.com",themeName:"Streamline",date:"23-10-23",author:"Evm-old",code:`wiseraddedtocart();
   function wiseraddedtocart(){
     document.dispatchEvent(new CustomEvent('ajaxProduct:added'));
   }
  // Theme Based code                                                       .
  var $wsInit = 0;
  var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body #CartDrawer').hasClass('drawer--is-open') && $wsDrawerDivCnt == 8 && $wsInit == 0) {
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);`},{id:"125",storeName:"justhorseriders.myshopify.com",themeName:"Symmetry",date:"23-10-19",author:"Yash",code:`function wiseraddedtocart(){
  $('.cart-drawer').load(location.href + ' .cart-drawer>*', '');
  $.getJSON('/cart.js', function(cart) {
     var ws_item_count = cart.item_count
     $('.cart-link__count').remove();
     $('.cart-link__icon').append(\`<span class='cart-link__count'>\${ws_item_count}</span> \`)
     
  });
}`},{id:"126",storeName:"Hello-charlie-2.myshopify.com",themeName:"Venue",date:"23-10-10",author:"Evm-old",code:`function wiseraddedtocart(){      
    ajaxCart.load();
    $('.cart-count-bubble').trigger('click');
  }`},{id:"127",storeName:"victoria-beckham-staging.myshopify.com",themeName:"Dawn",date:"23-10-09",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
    $('#shopify-section-foster-mini-cart-items').load(location.href + ' #shopify-section-fostr-mini-cart-items>*', '');
    $('#shopify-section-fostr-mini-cart-footer').load(location.href + ' #shopify-section-fostr-mini-cart-footer>*', '');
    $('body #cart-icon-bubble .cart-count-bubble').trigger('click');
  }
  // Theme Based code                                                       .
  var $wsInterval = setInterval(function() {
    if ($('body #mini-cart').hasClass('is-active')) {
      $('#mini-cart').removeAttr('hidden');
    }
  }, 500);`},{id:"128",storeName:"victoria-beckham-us.myshopify.com",themeName:"Dawn",date:"23-11-16",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
    const event = new CustomEvent('wiser:addedToCart');
    window.dispatchEvent(event);
  }`},{id:"129",storeName:"524f99.myshopify.com",themeName:"Streamline",date:"23-10-06",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
    $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');
    $('body .site-nav__link--cart').trigger('click');
  }`},{id:"130",storeName:"ju-poppin.myshopify.com",themeName:"Venue",date:"23-10-06",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
    $('#CartDrawer-Body').load(location.href + ' #CartDrawer-Body>*', '');
    $('body #cart-counter .cart-count-badge').trigger('click');
  }
  // Theme Based code                                                       .
  var $wsInit = 0;
   var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body cart-drawer').hasClass('is-visible') && $wsDrawerDivCnt == 8 && $wsInit == 0) {
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);`},{id:"131",storeName:"bondi-boost-usa.myshopify.com",themeName:"Impulse",date:"23-09-22",author:"Evm-old",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    $('.js-drawer-open-cart').trigger('click');
  }
  // Theme Based code                                                       .
  var $wsInit = 0;
  var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body .cart-link__bubble').hasClass('cart-link__bubble--visible') && $wsDrawerDivCnt == 8 && $wsInit == 0) {
      $wsInit = 1;
      window.WISER_INIT('cart',1);
      setTimeout(function () {
        $wsInit = 0;
      }, 3000);
    }
  }, 1000);`},{id:"132",storeName:"beeglee-in.myshopify.com",themeName:"Prestige",date:"23-07-12",author:"Evm-old",code:`var ws_cnt = 0;
  function wiseraddtocart(e) {
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {bubbles: true}));
    if ($(e.target).closest('.evm-drawer-main').length != 0) return false;
    if(ws_cnt == 0) $('body a.relative .sr-only').trigger('click');
    ws_cnt++;
    setTimeout(function () {
      ws_cnt = 0;
    }, 3000);
  }	
  var $wsInterval = setInterval(function() {
    $wsDrawerDivCnt = $('body div.evm-drawer-main div').length;
    if ($('body .header__cart-dot').hasClass('is-visible') && $wsDrawerDivCnt == 8) {
      window.WISER_INIT('cart',1);
    }
  }, 1000);`},{id:"133",storeName:"globalhealing.myshopify.com",themeName:"Dawn",date:"23-07-12",author:"Evm-old",code:`function wiseraddtocart() {
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);


    $(document).on('click', '#CartDrawer-Overlay', function(e) {
      e.preventDefault();
      $('#CartDrawer').parent().removeClass('active');
    });  
    $('.drawer').load(location.href + ' .drawer>*', '');
    setTimeout(function() {
      $('.drawer').addClass('active');
      $('.drawer').removeClass('is-empty');
    },1000);
  }`},{id:"134",storeName:"elevatestyles.myshopify.com",themeName:"Expanse",date:"23-06-13",author:"Evm-old",code:`function wiseraddedtocart() {
    document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
      detail: { product: '', addToCartBtn: '' }
    }));
  }`},{id:"135",storeName:"avimeeherbal.myshopify.com",themeName:"Refresh",date:"23-06-06",author:"Evm-old",code:`function wiseraddedtocart() {
    $('#CartDrawer').load(location.href + ' #CartDrawer>*', '');
    setTimeout(function () {
      $('#CartDrawer').parent().removeClass('is-empty');
      $.getJSON('/cart.js', function (cart) {
        var ws_item_count = cart.item_count;
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append(
          '<div class='cart-count-bubble'><span aria-hidden='true'>' +
            ws_item_count +
            '</span><span class='visually-hidden'>' +
            ws_item_count +
            ' item</span></div>'
        );
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);
  }
  $(document).click(function (e) {
    if ($(e.target).closest('.drawer__inner').length != 0) return false;
    $('.drawer__close').trigger('click');
  });`},{id:"136",storeName:"molton-brown-ksa.myshopify.com",themeName:"Advanced Gulp Theme",date:"23-05-29",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
    $('.mini-cart-list').load(location.href+' .mini-cart-list>*','');
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.mcart-count').text(ws_item_count);
        // $('.mcart-count').trigger('click');
      });
    }, 500);
  }`},{id:"137",storeName:"us-d2csympli.myshopify.com",themeName:"Prestige",date:"23-05-23",author:"Evm-old",code:`function wiseraddedtocart() {    
    document.dispatchEvent(new CustomEvent('product:added', {
        bubbles: true,
      detail: {}
    }));
  }
  // Theme Based code                                                       .
  <script>
    var cart_count_old = 0;
    $('.Header__Icon').on('click', function() {
      var ws_aria_hidden = $('#sidebar-cart').attr('aria-hidden');
      if(ws_aria_hidden == 'true') {
          jQuery.getJSON('/cart.js', function(ws_cart) {
          var ws_cnt = ws_cart.item_count;
          if(cart_count_old != ws_cnt) {
            cart_count_old = ws_cnt;
              window.WISER_INIT('cart',1);
          }
        });
      }
    })
  <\/script>`},{id:"138",storeName:"organic-basics-store-us.myshopify.com",themeName:"Dawn",date:"23-04-28",author:"Evm-old",code:`function wiseraddedtocart() {
    $('#ws_CartDrawer').load(location.href+' #ws_CartDrawer>*','');
    setTimeout(function () {
      $.getJSON('/cart.js', function(cart) {
        var ws_item_count = cart.item_count
        $('.cart-count-bubble').remove();
        $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
        $('body .header__icons #cart-icon-bubble')[0].click();
      });
    }, 1000);
  }


  // Theme Based code                                                       .
  $(document).click(function(e){
    if($(e.target).closest('.drawer__inner').length != 0) return false;
      $('.drawer__close').trigger('click');
  });
   
  var old_cart_count = 0;
  setInterval(function () {
    var cart_count = $('.cart-count-bubble span:first-child').text();
    if ($('.drawer').hasClass('active') && cart_count != old_cart_count) {
      old_cart_count = cart_count;
    }
    if($('body').hasClass('overflow-hidden') && cart_count != old_cart_count) {
      $('.ws_CartDrawer .drawer').addClass('active');
    }
  }, 100);`},{id:"139",storeName:"goldelucks-bakeshop.myshopify.com",themeName:"Tarun Box Sleeve Add On",date:"23-04-13",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {  
    setTimeout(function(){
      $.ajax({
        url: '/cart/update.js',
        method: 'post',
        dataType: 'json',
        data: {
          updates: {}
        }
      }).Evm-old(function(cart) {
      //  searchPopup();
     
        // Shopify.addItem('6848867958846', 1);
        console.log(cart);
        //addToCartHandler.initItemAddToCartButton();
        Shopify.onCartUpdate(cart);
       
      });  
    }, 1000);
  }`},{id:"140",storeName:"renaissance-global-limited.myshopify.com",themeName:"Debut",date:"23-04-05",author:"Evm-old",code:`wiseraddedtocart();
  function wiseraddedtocart() {
      $('.site-header__cart').click();
  }`},{id:"141",storeName:"mooboutiqueyorkshire.myshopify.com",themeName:"Impulse",date:"23-03-30",author:"Evm-old",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    $('.js-drawer-open-cart').trigger('click');
}`},{id:"142",storeName:"rex-specs-k9.myshopify.com",themeName:"Custom",date:"23-03-07",author:"Evm-old",code:`function wiseraddtocart() {
    jQuery.getJSON('/cart.js', function(cart) {
      var ws_items    = cart.items;
      window.vue.updateCart(ws_items[0].variant_id, ws_items[0].quantity);
      $('.drawer-cart-toggle').trigger('click')
    });
  }
// Theme,e base codews_item_count
  var old_cart_count = 0;
  setInterval(function () {
    var cart_count = $('.drawer-cart-toggle .font-primary').text();
    if (cart_count != old_cart_count) {
      old_cart_count = cart_count;
      window.WISER_INIT('cart',1);
    }
}, 100);`},{id:"143",storeName:"bad-no.myshopify.com",themeName:"Basel",date:"23-02-21",author:"Evm-old",code:`function wiseraddedtocart()   { 
    setTimeout(function(){
       $.ajax({
        url: '/cart/update.js',
        method: 'post',
        dataType: 'json',
        data: {
          updates: {}
        }}).Evm-old(function(cart) {
        $.get('/cart?view=json', function(data) {
          $('.widget_shopping_cart_content').html(data);
        });
       $('.basel-ajax-shop-on').addClass('basel-cart-opened');
      });  
    }, 100);
  }`},{id:"144",storeName:"bad-no.myshopify.com",themeName:"Dawn",date:"23-02-17",author:"Evm-old",code:`function wiseraddedtocart() {
      $('#ws_CartDrawer').load(location.href + ' #ws_CartDrawer');
      setTimeout(function() {
        $('.drawer').addClass('active');
        $('.drawer').removeClass('is-empty');
      },1000);
 }

// Theme based code
var old_cart_count = 0;
    var ws_flag = 0; 
    setTimeout(function(){
      setInterval(function () {
        var cart_count = $('.drawer__items-wrapper div').length;
        if (cart_count != old_cart_count) {
          old_cart_count = cart_count;
          ws_flag = 1;
          window.WISER_INIT('cart',1); 
        }
      }, 100);
      ws_flag = 0;
    }, 3000);
    $(document).on('click','body #CartDrawer .drawer__close', function(){
      if($('.drawer').hasClass('active')) {
         $('.drawer').removeClass('active');
      }
    });`},{id:"145",storeName:"julian-charles-home.myshopify.com",themeName:"Dawn",date:"23-01-11",author:"Evm-old",code:`function wiseraddedtocart() {
    $('#ws_CartDrawer').load(location.href + ' #ws_CartDrawer');
    $.getJSON('/cart.js', function(cart){
      var ws_item_count = cart.item_count
      $('.cart-count-bubble').remove();
      $('#cart-icon-bubble').append('<div class='cart-count-bubble'><span aria-hidden='true'>'+ws_item_count+'</span><span class='visually-hidden'>'+ws_item_count+' item</span></div>');
    });
    setTimeout(function () {
      $('body').addClass('overflow-hidden');
    }, 2000);
  }
// Theme based code 

/* wiser js code */
    var old_cart_count = 0;
    setTimeout(function () {
      setInterval(function () {
        var cart_count = $('.cart-count-bubble span:first-child').text();
        if ($('.drawer').hasClass('active') && cart_count != old_cart_count) {
          old_cart_count = cart_count;
          var ws_cnt = 0;
          $('.evm-drawer-main div').each(function() {
            if($(this).html()=='') {
              ws_cnt++;
            }
          });
          if(ws_cnt <= 8) {
            window.WISER_INIT('cart',1);
          }
        }
        if($('body').hasClass('overflow-hidden') && cart_count != old_cart_count) {
          $('.ws_CartDrawer .drawer').addClass('active');
        }
      }, 100);
    }, 1000);
    /* end wiser js code */`},{id:"146",storeName:"herb-pharm-llc.myshopify.com",themeName:"Dawn",date:"23-01-11",author:"Evm-old",code:`function wiseraddedtocart() {
  $('#main-cart-items').load(location.href + ' #main-cart-items');
  setTimeout(function() {
      $('#cart-icon-bubble').trigger( 'click' );
  }, 3000);
}
// Theme based code
var old_cart_count = 0;
var ws_flag = 0; 
setInterval(function () {
  var cart_count = $('.cart-count-bubble span:first').text();
  if ($('#cart-notification').hasClass('active') && cart_count != old_cart_count && ws_flag == 0) {
    old_cart_count = cart_count;
    ws_flag = 1;
    window.WISER_INIT('cart',1); 
  }
}, 100);`},{id:"147",storeName:"axyzcnc.myshopify.com",themeName:"Dawn",date:"23-01-06",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
  jQuery.getJSON('/cart.js', function(cart) {
    console.log(cart.items);
    var ws_last_item = cart.items[0];
    console.log(ws_last_item);
    var ws_html = '<img class='cart-notification-product__image' src=''+ws_last_item.image+'' alt='' width='70' height='94' loading='lazy'>';
    ws_html += '<div class='cart-notification-product__info'>';
    ws_html += '<h3 class='cart-notification-product__name h4'>'+ws_last_item.product_title+'</h3>';
    ws_html += '<dl><div class='cart-notification-product__option h4'>';
    ws_html += '<dt>Size: </dt>';
    ws_html += '<dd>'+ws_last_item.variant_title+'</dd>';
    ws_html += '</div></dl></div>';
    $('#cart-notification-button').text('View my cart ('+cart.item_count+')');
    $('#cart-notification-product').append(ws_html);
    $('#cart-notification').addClass('active');
  });
}`},{id:"148",storeName:"axyzcnc.myshopify.com",themeName:"Woodmart",date:"23-01-03",author:"Evm-old",code:`function wiseraddedtocart() {
    $.get('/cart?view=json', function(e) {
      $('.widget_shopping_cart_content').html(e);
    }),
    $.getJSON('/cart.js', function(e) {
      $('.woodmart-cart-number').html(e.item_count + ' <span>'+woodmart_settings.cart_data.totalNumb+'</span>');
      $('.woodmart-cart-subtotal >span').html(Shopify.formatMoney(e.total_price, money_format));
    });
    $('body').addClass('woodmart-cart-opened');
}`},{id:"149",storeName:"modelaider.myshopify.com",themeName:"Custom",date:"22-12-08",author:"Evm-old",code:`function wiseraddedtocart() {
   Shopify.getCart();
   $('.shopping-cart-content').addClass('show');
}`},{id:"150",storeName:"woodland-presets.myshopify.com",themeName:"Motion",date:"22-12-06",author:"Evm-old",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    document.querySelector('.js-drawer-open-cart').click();
}`},{id:"151",storeName:"cura-marketing.myshopify.com",themeName:"Impulse",date:"22-11-23",author:"Evm-old",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    $('.js-drawer-open-cart').trigger('click');
}`},{id:"152",storeName:"petslibro.myshopify.com",themeName:"Motion",date:"22-11-23",author:"Evm-old",code:`function wiseraddedtocart() {
    new theme.CartDrawer();
    document.querySelector('.js-drawer-open-cart').click();
}

// Theme based code is below
var old_cart_count = 0;
  setInterval(function () {
    var cart_count = $('.small--hide .cart-link__bubble').text();
    if ($('#CartDrawer').hasClass('drawer--is-open') && cart_count != old_cart_count) {
      old_cart_count = cart_count;
      window.WISER_INIT('cart',1);
    }
  }, 100);`},{id:"153",storeName:"vooki-in.myshopify.com",themeName:"Belle OS 2.0",date:"22-11-08",author:"Evm-old",code:`function wiseraddedtocart() {
  $('#errorDrawer').css('display', 'none');
  $('.modalOverly').css('display', 'none');
  setTimeout(function(){
    CartJS.addItem({
        'success': function(data, textStatus, jqXHR){
           setTimeout(function() {
              $('body').removeClass('loading showOverly');
              $('.header-cart').trigger('click');
           },500);
        },
    });
  }, 500);
}`},{id:"154",storeName:"holsteinshopsliving.myshopify.com",themeName:"Dawn",date:"22-10-17",author:"Evm-old",code:`function wsRemoveNoti() { $('#cart-notification').removeClass('active');}

wiseraddedtocart();
function wiseraddedtocart() {
	setTimeout(function() {
          $.ajax({
            url: '/cart/update.js',
            method: 'post',
            dataType: 'json',
            data: {
              updates: {}
            }
          }).Evm-old(function(cart) {
            var ws_title = cart.items[0].product_title;
            var ws_image = cart.items[0].image;
            var ws_cnt = cart.item_count;
            var ws_cnt_txt = 'Meinen Warenkorb (0) anzeigen';
            var updated_txt = ws_cnt_txt.replace(/d+/, ws_cnt);
            var ws_cart_noti = '<div class='cart-notification__header'> <h2 class='cart-notification__heading caption-large text-body'><svg class='icon icon-checkmark color-foreground-accent-1' aria-hidden='true' focusable='false' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 9' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M11.35.643a.5.5 0 01.006.707l-6.77 6.886a.5.5 0 01-.719-.006L.638 4.845a.5.5 0 11.724-.69l2.872 3.011 6.41-6.517a.5.5 0 01.707-.006h-.001z' fill='currentColor'></path> </svg><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+ws_title+'</font></font></h2> <button type='button' onclick='wsRemoveNoti()' class='cart-notification__close modal__close-button link link--text focus-inset' aria-label='Conclude'> <svg class='icon icon-close' aria-hidden='true' focusable='false'><use href='#icon-close'></use></svg> </button> </div> <div id='cart-notification-product' class='cart-notification-product'><div class='cart-notification-product__image global-media-settings'> <img src=''+ws_image+'' alt=''+ws_title+''  width='70' height='70' loading='lazy'> </div><div> <h3 class='cart-notification-product__name h4'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+ws_title+'</font></font></h3> <dl></dl></div> </div> <div class='cart-notification__links'> <a href='/cart' id='cart-notification-button' class='button button--secondary button--full-width'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>'+updated_txt+'</font></font></a> <form action='/cart' method='post' id='cart-notification-form'> <button class='button button--primary button--full-width' name='checkout'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>Sicher zur Kasse</font></font></button> </form> <button type='button' onclick='wsRemoveNoti()' class='link button-label'><font style='vertical-align: inherit;'><font style='vertical-align: inherit;'>Weiter shoppen</font></font></button> </div>';
            $('#cart-notification div').remove();
            $('#cart-notification').append(ws_cart_noti);
            $('#cart-notification').addClass('active');
          });
        }, 500);
}, 100);`},{id:"155",storeName:"divinikey.myshopify.com",themeName:"Canopy",date:"22-10-07",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
      setTimeout(function() {
        theme.updateCartSummaries(true, true);
      }, 500);
}
var cart_count_old = 0;
    setInterval(function () {
      var inner_count = $('.inner-count').text();
      if (inner_count != cart_count_old) {
        cart_count_old = inner_count;
        window.WISER_INIT('cart',1);
      }
}, 100);`},{id:"156",storeName:"elgeniox.myshopify.com",themeName:"Molla",date:"22-10-07",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
    setTimeout(function() {
      Shopify.KT_getCart();
    }, 1000);
  }`},{id:"157",storeName:"kiwabi-usa.myshopify.com",themeName:"Pipeline",date:"22-10-05",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
    setTimeout(function() {
        document.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true}));
        document.dispatchEvent(new CustomEvent('theme:cart:reload', {bubbles: true}));
        var ws_cart_count_old = 0;
    }, 1500);
    setTimeout(function() {
        $('body .header__mobile__right .header__mobile__button .header__cart__status').trigger('click');
    }, 2500);
}`},{id:"158",storeName:"hoptea.myshopify.com",themeName:"Venue",date:"22-07-14",author:"Evm-old",code:`function wiseraddedtocart() {
      ajaxCart.load();
      ajaxCart.open();
    }
// Theme based code
setInterval(function () {
          if ($('#ajax-cart-container').hasClass('active')) {
            $('.ws_ajaxcart_container').addClass('active');
            $('body').addClass('no-scroll');
          } else {
            $('.ws_ajaxcart_container').removeClass('active');
          }
        }, 10);`},{id:"159",storeName:"bsc-women.myshopify.com",themeName:"Kalles",date:"22-06-16",author:"Evm-old",code:`function wiseraddedtocart() {
      var pid = $('.evm-related-product .evm-ws__cart-submit').attr('data-pid');
      setTimeout(function(){
        document.dispatchEvent(new CustomEvent('cart:refresh'));
          var mask = $('.mask-overlay'),
              classActive = 'act_current',
              act_opened = 'act_opened',
              html = $('html'),
              ModTouchevents = Modernizr.touchevents;
          html.addClass('hside_opened');
          $('body').addClass('pside_opened');
          $('#nt_cart_canvas').addClass(act_opened);
          mask.addClass('mask_opened');
      }, 1000);
}`},{id:"160",storeName:"golftini.myshopify.com",themeName:"Mr Parker",date:"22-06-13",author:"Evm-old",code:`function wiseraddedtocart() {
   $('.js-mini-cart-trigger.js-slideout-open').trigger('click');
}`},{id:"161",storeName:"bailey44-usd.myshopify.com",themeName:"Prestige",date:"23-01-23",author:"Evm-old",code:`// Theme based code 
 var old_cart_count = 0;
  setInterval(function () {
    var ws_cnt_div = $('.evm-drawer-related-viewed-browsing div').children().length;
    console.log(ws_cnt_div);
    var cart_count = $('.Header__CartCount').text();
    if(cart_count != old_cart_count && cart_count != '' && cart_count < '2' && ws_cnt_div == 0) {
      old_cart_count = cart_count;
      window.WISER_INIT('cart',1); 
    }
  }, 100);`},{id:"162",storeName:"bailey44-usd.myshopify.com",themeName:"Belle OS 2.0",date:"22-06-07",author:"Evm-old",code:`function wiseraddedtocart() {
      $('#errorDrawer').css('display', 'none');
      $('.modalOverly').css('display', 'none');
      setTimeout(function(){
        $('.header-cart').trigger('click');
      },500);
    }`},{id:"163",storeName:"bailey44-usd.myshopify.com",themeName:"Prestige",date:"22-06-03",author:"Evm-old",code:`function wiseraddedtocart() {
    document.dispatchEvent(new CustomEvent('product:added', {
      bubbles: true,
      detail: {
      }
    }));
  }`},{id:"164",storeName:"Yourmood.myshopify.com",themeName:"Expanse",date:"23-06-04",author:"Evm-old",code:`function wiseraddedtocart() {
  document.dispatchEvent(new CustomEvent('ajaxProduct:added', {
    detail: {
      product: '', addToCartBtn: ''
    }
  }));
}`},{id:"165",storeName:"rmid.myshopify.com",themeName:"Broadcast",date:"24-04-04",author:"Evm-old",code:`function wiseraddedtocart() {
    const wsCartItmObj = document.querySelector('cart-items');
    wsCartItmObj.getCart()
    document.dispatchEvent(new CustomEvent('theme:cart:toggle', {bubbles: true}));
  }`},{id:"166",storeName:"rmid.myshopify.com",themeName:"Broadcast",date:"23-12-05",author:"Evm-old",code:`wiseraddedtocart();
function wiseraddedtocart() {
    window.cart.getCart();
    if(!$('#cart-dropdown').hasClass('is-open')) {
       $('#ws_navlink_cart_drawer')[0].click();
    }
  }

// Theme based code [5-12-23]
  var ws_flag = 0;
  var cart_count_old = 0;
  setInterval(function () {
    var cart_count = $('.header__cart__status').attr('data-cart-count');
    if (cart_count_old != cart_count && ws_flag == 0) {
      ws_flag = 1;
      cart_count_old = cart_count;
      window.WISER_INIT('cart',1);
      setTimeout(function() {
        ws_flag= 0;
      }, 3000);
    }
  }, 100);`},{id:"167",storeName:"rmid.myshopify.com",themeName:"Broadcast",date:"23-01-17",author:"Evm-old",code:`var ws_clk = 0;
  function wiseraddedtocart() {
    window.cart.getCart();
    if(!$('#cart-dropdown').hasClass('is-open')) {
       $('#ws_navlink_cart_drawer')[0].click(); // add this id in cart icon in header file 
    }
  }`},{id:"168",storeName:"rmid.myshopify.com",themeName:"Broadcast",date:"22-05-30",author:"Evm-old",code:`var ws_clk = 0;
function wiseraddedtocart() {
  setTimeout(function() {
    if(ws_clk == 0) {
      ws_clk = 1;
      $('#ws_navlink_cart_drawer')[0].click();
    }
    setTimeout(function() {
      ws_clk = 0;
    }, 3000);
  }, 2000);
}
// Change some code of theme.js file
// Comment if condition
//       if (!this.cartDropdownIsBuilded) {
        this.getCart();
//       }`},{id:"169",storeName:"rmid.myshopify.com",themeName:"Pipeline",date:"22-04-20",author:"Evm-old",code:`function wiseraddedtocart() {
	setTimeout(function() {
		document.documentElement.dispatchEvent(new CustomEvent('theme:cart:init', { bubbles: true}));
		document.dispatchEvent(new CustomEvent('theme:cart:reload', {bubbles: true}));
		
		$('.drawer.cart__drawer').removeClass('display-none');
		$('.drawer.cart__drawer').addClass('drawer--visible');
	}, 1500);

}

// Below code is theme based
var ws_flag = 0;
setInterval(function() {
	jQuery.getJSON('/cart.js', function(cart) {
		let items = cart.items;
		for(var i=0; i < items.length; i++){
			if(ws_flag == 0) {
				ws_flag = 1;
				window.WISER_INIT('cart',1);
			}
		}
	});
}, 100);`},{id:"170",storeName:"Lockenkopf.myshopify.com",themeName:"Custom",date:"22-01-20",author:"Evm-old",code:`function wiseraddedtocart() {   
    setTimeout(function(){
      $.ajax({
        url: '/cart/update.js',
        method: 'post',
        dataType: 'json',
        data: {
          updates: {}
        }
      }).Evm-old(function(cart) {
        Shopify.getCart(cart);
        $('#CartCount').text('( '+cart.item_count+' )');
        $('#page_content .container #CartToggle').click();
      });  
    }, 1000);
  }`},{id:"171",storeName:"Lockenkopf.myshopify.com",themeName:"Prestige",date:"22-06-27",author:"Evm-old",code:`function wiseraddedtocart() {
    document.dispatchEvent(new CustomEvent('product:added', {
        bubbles: true,
        detail: {}
    }));
}`},{id:"172",storeName:"Bombay-shaving.myshopify.com",themeName:"Kalles",date:"22-01-19",author:"Evm-old",code:`function wiseraddedtocart() {  
      var pid = $('.evm-related-product .evm-ws__cart-submit').attr('data-pid');
      setTimeout(function(){
        document.dispatchEvent(new CustomEvent('cart:refresh'));
          var mask = $('.mask-overlay'),
              classActive = 'act_current',
              act_opened = 'act_opened',
              html = $('html'),
              ModTouchevents = Modernizr.touchevents;
          html.addClass('hside_opened');
          $('body').addClass('pside_opened');
          $('#nt_cart_canvas').addClass(act_opened);
          mask.addClass('mask_opened');
      }, 1000);
    }`},{id:"173",storeName:"Littlebeastnyc.myshopify.com",themeName:"Brooklyn",date:"22-01-19",author:"Evm-old",code:`function wiseraddedtocart() {
    $('#CartDrawer .js-drawer-close').click();
    $('#shopify-section-fodaHeader .main-nav .cart-link').click();
  }`},{id:"174",storeName:"lastswab.myshopify.com",themeName:"Custom",date:"22-01-21",author:"Neeraj",code:`// Currency converter Code for -> lastswab.myshopify.com
function wsChangeCurr(wsEleClsId) {
  var ws_currency           = Shopify.currency;
  var ws_money_format       = Shopify.money_format;
  // ... (Full code truncated for brevity, standard currency logic)
  $(wsEleClsId).each(function( index, val ) {
    var ws_price        = $( this ).text();
    ws_price = ws_price.replace(',', '');
    // ... conversion logic ...
    $(val).text(ws_money_format.replace(ws_money_format_text, ws_orig_price_f));
  });
}`},{id:"175",storeName:"amandaharrington.com",themeName:"Debut",date:"22-01-21",author:"Evm-old",code:`$( document ).ready(function() {
     //console.log('m1');
    setTimeout(function(){
      //console.log('m2');
  		wiseraddedtocart();
    }, 1500);
  });
  
  function wiseraddedtocart() { 
   
    $('.evm-ws__cart-submit').click(function(){
      	//console.log('m3');
        setTimeout(function(){
			 $.ajax({
              url: '/cart/update.js',
              method: 'post',
              dataType: 'json',
              data: {
                updates: {}
              }}).Evm-old(function(cart) {
              const cartEvent = new Event('cartUpdate');
              window.dispatchEvent(cartEvent);
              refreshCart(cart);
              window.setTimeout(function(){ $('.cart-button').click(); }, 500);
          	});  
        }, 100);
      });
	
  }`},{id:"176",storeName:"Zamage.myshopify.com",themeName:"Custom",date:"22-01-21",author:"Evm-old",code:"$('body').trigger('added.ajaxProduct', '');"},{id:"177",storeName:"Tradehutdirect.myshopify.com",themeName:"Warehouse",date:"22-01-21",author:"Evm-old",code:`document.documentElement.dispatchEvent(new CustomEvent('product:added', {
						bubbles: true,
						detail: {
						variant:varid,
						quantity: 1
						}
					}));`},{id:"178",storeName:"Mph-online.myshopify.com",themeName:"Warehouse",date:"22-01-21",author:"Evm-old",code:`document.documentElement.dispatchEvent(new CustomEvent('product:added', {
						bubbles: true,
						detail: {
						variant:null,
						quantity: 1
						}
					}));`},{id:"179",storeName:"Usporto-proweb.myshopify.com",themeName:"Shella",date:"22-01-21",author:"Evm-old",screenshot:"https://www.awesomescreenshot.com/image/57906621?key=e8c7318da7b1be66f2f0628ed488fcb6",code:`// After ATC JS :
document.documentElement.dispatchEvent(new CustomEvent('wiser_product_added', {
						bubbles: true,
						detail: {
						variant:varid,
						quantity: 1
						}
					}));

// Cart drawer :
theme.Popups.callByName('cart');`},{id:"180",author:"Deepikaaa",code:`// After ATC JS :
document.documentElement.dispatchEvent(new CustomEvent('wiser_product_added', {
						bubbles: true,
						detail: {
						variant:varid,
						quantity: 1
						}
					}));

// Cart drawer :
theme.Popups.callByName('cart');`,date:"2025-12-11",screenshot:"https://cdn.shopify.com/s/files/1/2162/5967/products/1582460006_logo_architechpro.png?v=1590392401",storeName:"deep",themeChanges:"them.liqiid changes here ",themeName:"peep"},{id:"YjpDKWLItPIXsgWDYZo2",date:"2025-12-15",storeName:"b9297f-4.myshopify.com",themeName:"Palo Alto ",code:`function wiseraddedtocart() {  window.cart.getCart()} 

wiseraddedtocart()  `,author:"Yash",themeChanges:"",screenshot:""},{id:"sSdfums6QDgeDJAZx0Ls",themeName:"Dawn",author:"Jaya",date:"2025-12-10",storeName:"9hues-by-abg.myshopify.com",code:`async function wiserAddedToCart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;

    const wsnewBox = wshtml.querySelector(
      '#shopify-section-cart-icon-bubble'
    )?.innerHTML;

    const cartIconElement = document.querySelector(
      '#cart-icon-bubble.header__icon--cart'
    );

    cartIconElement.innerHTML = wsnewBox;
  }`},{id:"HISZ3Pypyqi0m6BUyCzu",date:"2026-02-13",storeName:"gegshop-31b5.myshopify.com",themeName:"Momentum",code:`                                        async function wiseraddedtocart() {
  const cart = await (await fetch('/cart.js')).json();
  if (window.wetheme && typeof window.wetheme.updateCartCount === 'function') {
    window.wetheme.updateCartCount(cart);
  }
}

wiseraddedtocart();
                                    `,author:"Deepika",themeChanges:"",screenshot:""},{id:"zHX34CseZni3GpHgLHEu",date:"2026-01-07",storeName:"2351de-e7.myshopify.com",themeName:"ap-aprin",code:`async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=header-3');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-header-3')?.innerHTML;
    const cartIconElement = document.querySelector('#shopify-section-header-3');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=mini-cart');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('#shopify-section-mini-cart').innerHTML;
    document.querySelector('#shopify-section-mini-cart').innerHTML = wsnewBoxCart;
   const countData = document.querySelector('ap-cartcount')
   countData.click()
  }
wiseraddedtocart()`,author:"Yash",themeChanges:"Old  to  new  migration  old  m  FBt template  1 use  kar raha tha  new m  template  3 diya h  cart drawer intregration  kiya h  phle  nhi tha ",screenshot:""},{id:"lenGPlB96rKBGKqjbgS0",date:"2026-03-05",storeName:"glancia-co.myshopify.com",themeName:"Impact",code:`function wiseraddedtocart() {
  document.querySelector('cart-drawer')?.show();
  document.dispatchEvent(new Event('cart:refresh'));
}
wiseraddedtocart();                                    `,author:"jaya",themeChanges:"",screenshot:""},{id:"ZY5iTMGEWvkox6f3I59i",date:"2026-03-05",storeName:"hockgiftshop.com",themeName:"December",code:`function wiseraddedtocart() {
  theme.miniCart.updateElements();
  theme.miniCart.generateCart();
}
wiseraddedtocart();
`,author:"jaya",themeChanges:"",screenshot:""},{id:"U34hSq5vKORfADMSKRr0",date:"2026-03-05",storeName:"45b69c-c2.myshopify.com ",themeName:"Shrine PRO",code:`async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }
wiseraddedtocart();
`,author:"jaya",themeChanges:"",screenshot:""},{id:"S64i8IZqEDiTo2DjwIPc",date:"2026-03-05",storeName:"angadcreations.com",themeName:"Wonder",code:`async function wiseraddedtocart() {
  const wsres = await fetch('/?section_id=cart-icon-bubble');
  const wsText = await wsres.text();
  const wshtml = document.createElement('div');
  wshtml.innerHTML = wsText;
  const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
  const cartIconElement = document.querySelector('.wt-header__panel__link#cart-icon-bubble');
  cartIconElement.innerHTML = wsnewBox;
  const wsres1 = await fetch('/?section_id=cart-drawer');
  const wstext1 = await wsres1.text();
  const wstemp1 = document.createElement('div');
  wstemp1.innerHTML = wstext1;
  const newDrawer = wstemp1.querySelector('.cart-drawer');
  const currentDrawer = document.querySelector('.cart-drawer');
  if (!newDrawer || !currentDrawer) return;
  currentDrawer.innerHTML = newDrawer.innerHTML;
  const cartDrawer = document.querySelector('cart-drawer');
  if (cartDrawer && !cartDrawer.isOpen) {
    cartDrawer.toggleDrawerClasses();
  }
}
wiseraddedtocart();                                    
`,author:"jaya",themeChanges:"",screenshot:""},{id:"OvFoZyg91JBiZrzbGlDj",date:"2026-03-05",storeName:"5bhmfq-t3.myshopify.com",themeName:"Kalles",code:`function wiseraddedtocart() {
await document.dispatchEvent(new CustomEvent('cart:reload', { bubbles: true }));
const drawerWs = document.querySelector('hdt-cart-drawer')
drawerWs .open()
}
wiseraddedtocart()
                                                                        `,author:"Deepika",themeChanges:"",screenshot:""},{id:"LPFEj2KZJTIowoiqM5ML",date:"2026-03-05",storeName:"blingqueen-in.myshopify.com",themeName:"Impulse",code:`function wiseraddedtocart() {
  new theme.CartDrawer();
  $('.js-drawer-open-cart span').trigger('click');
}
 wiseraddedtocart();                `,author:"jaya",themeChanges:"",screenshot:""},{id:"Hcc11axSAjiwgzMZDnhd",date:"2026-03-05",storeName:"captains-landing.myshopify.com",themeName:"Dawn",code:` async function wiseraddedtocart() {
    const wsres = await fetch('/?section_id=cart-icon-bubble');
    const wsText = await wsres.text();
    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;
    const wsnewBox = wshtml.querySelector('#shopify-section-cart-icon-bubble')?.innerHTML;
    const cartIconElement = document.querySelector('#cart-icon-bubble.header__icon--cart');
    cartIconElement.innerHTML = wsnewBox;
    const wsrescart = await fetch('/?section_id=cart-drawer');
    const wstextcart = await wsrescart.text();
    const wshtmlcart = document.createElement('div');
    wshtmlcart.innerHTML = wstextcart;
    const wsnewBoxCart = wshtmlcart.querySelector('.drawer__inner').innerHTML;
    document.querySelector('.drawer__inner').innerHTML = wsnewBoxCart;
    const wsopener = document.querySelector('cart-drawer');
    wsopener.open();
    document.querySelector('cart-drawer').classList.remove('is-empty');
  }

wiseraddedtocart();
                                                                                                                                                                                                                                                                 `,author:"jaya",themeChanges:"",screenshot:""},{id:"chD6aVg61gCBwIppJozJ",date:"2026-03-02",storeName:"raffi-online.myshopify.com",themeName:"Ella",code:`function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {

    if (typeof wsHaloJs !== "undefined") {
      if (window.page_name === 'cart') {
        wsHaloJs.updateCart(cart);
      } else {
        wsHaloJs.updateSidebarCart(cart);
      }
    }

    var cartLink = document.querySelector("a[href='/cart']");
    if (cartLink) {
      cartLink.click();
    }
  });
}

wiseraddedtocart();`,author:"deepika",themeChanges:"added var wsHaloJs = halo; variable in theme.js",screenshot:""},{id:"9JQVKhB1lesF6jMS7J1P",date:"2026-02-23",storeName:"http://e0du0i-1q.myshopify.com/",themeName:"Horizon",code:`                                        async function wiserAddedToCart() {

    const wsres = await fetch('/?section_id=header');
    const wsText = await wsres.text();

    const wshtml = document.createElement('div');
    wshtml.innerHTML = wsText;

    const wsnewBox = wshtml.querySelector('cart-items-component')?.innerHTML;
    const cartIconText = wshtml.querySelector('cart-icon')?.innerHTML;

    const cartDrawer = document.querySelector('cart-drawer-component');
    if (!cartDrawer) return;

    const cartDrawerItems = cartDrawer.querySelector('cart-items-component');
    const cartIcon = cartDrawer.querySelector('cart-icon');

    if (cartDrawerItems && wsnewBox) {
      cartDrawerItems.innerHTML = wsnewBox;
    }

    if (cartIcon && cartIconText) {
      cartIcon.innerHTML = cartIconText;
    }
    const dialog = cartDrawer.querySelector('dialog, .cart-drawer__dialog');
    dialog?.classList.remove('cart-drawer--empty');
    if (typeof cartDrawer.open === 'function') {
      cartDrawer.open();
    }
}
wiserAddedToCart();                                    `,author:"Deepika",themeChanges:"",screenshot:""},{id:"4OaykCT8q7CCNwdLqC7N",date:"2026-02-23",storeName:"craze-india.myshopify.com",themeName:"Ella",code:`function wiseraddedtocart() {
  $.getJSON('/cart.js', function (cart) {
    if (window.page_name === 'cart') {
      wsHaloJs.updateCart(cart);
    } else {
      wsHaloJs.updateSidebarCart(cart);
    }

    var cartLink = document.querySelector('a[href="/cart"]');
    if (cartLink) {
      cartLink.click();
    }
  });
}
`,author:"Deepika",themeChanges:"",screenshot:""}],lE=()=>{};var Ag={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=function(s){const e=[];let a=0;for(let r=0;r<s.length;r++){let l=s.charCodeAt(r);l<128?e[a++]=l:l<2048?(e[a++]=l>>6|192,e[a++]=l&63|128):(l&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(l=65536+((l&1023)<<10)+(s.charCodeAt(++r)&1023),e[a++]=l>>18|240,e[a++]=l>>12&63|128,e[a++]=l>>6&63|128,e[a++]=l&63|128):(e[a++]=l>>12|224,e[a++]=l>>6&63|128,e[a++]=l&63|128)}return e},cE=function(s){const e=[];let a=0,r=0;for(;a<s.length;){const l=s[a++];if(l<128)e[r++]=String.fromCharCode(l);else if(l>191&&l<224){const h=s[a++];e[r++]=String.fromCharCode((l&31)<<6|h&63)}else if(l>239&&l<365){const h=s[a++],f=s[a++],g=s[a++],v=((l&7)<<18|(h&63)<<12|(f&63)<<6|g&63)-65536;e[r++]=String.fromCharCode(55296+(v>>10)),e[r++]=String.fromCharCode(56320+(v&1023))}else{const h=s[a++],f=s[a++];e[r++]=String.fromCharCode((l&15)<<12|(h&63)<<6|f&63)}}return e.join("")},B_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let l=0;l<s.length;l+=3){const h=s[l],f=l+1<s.length,g=f?s[l+1]:0,v=l+2<s.length,_=v?s[l+2]:0,T=h>>2,b=(h&3)<<4|g>>4;let O=(g&15)<<2|_>>6,G=_&63;v||(G=64,f||(O=64)),r.push(a[T],a[b],a[O],a[G])}return r.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray($_(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):cE(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const a=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let l=0;l<s.length;){const h=a[s.charAt(l++)],g=l<s.length?a[s.charAt(l)]:0;++l;const _=l<s.length?a[s.charAt(l)]:64;++l;const b=l<s.length?a[s.charAt(l)]:64;if(++l,h==null||g==null||_==null||b==null)throw new uE;const O=h<<2|g>>4;if(r.push(O),_!==64){const G=g<<4&240|_>>2;if(r.push(G),b!==64){const Z=_<<6&192|b;r.push(Z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class uE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hE=function(s){const e=$_(s);return B_.encodeByteArray(e,!0)},Zc=function(s){return hE(s).replace(/\./g,"")},dE=function(s){try{return B_.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=()=>fE().__FIREBASE_DEFAULTS__,pE=()=>{if(typeof process>"u"||typeof Ag>"u")return;const s=Ag.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},yE=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&dE(s[1]);return e&&JSON.parse(e)},df=()=>{try{return lE()||mE()||pE()||yE()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},gE=s=>{var e,a;return(a=(e=df())==null?void 0:e.emulatorHosts)==null?void 0:a[s]},_E=s=>{const e=gE(s);if(!e)return;const a=e.lastIndexOf(":");if(a<=0||a+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(a+1),10);return e[0]==="["?[e.substring(1,a-1),r]:[e.substring(0,a),r]},H_=()=>{var s;return(s=df())==null?void 0:s.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,a)=>{this.resolve=e,this.reject=a})}wrapCallback(e){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(a):e(a,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wE(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},r=e||"demo-project",l=s.iat||0,h=s.sub||s.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${r}`,aud:r,iat:l,exp:l+3600,auth_time:l,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Zc(JSON.stringify(a)),Zc(JSON.stringify(f)),""].join(".")}const Ho={};function TE(){const s={prod:[],emulator:[]};for(const e of Object.keys(Ho))Ho[e]?s.emulator.push(e):s.prod.push(e);return s}function bE(s){let e=document.getElementById(s),a=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),a=!0),{created:a,element:e}}let Ng=!1;function SE(s,e){if(typeof window>"u"||typeof document>"u"||!ff(window.location.host)||Ho[s]===e||Ho[s]||Ng)return;Ho[s]=e;function a(O){return`__firebase__banner__${O}`}const r="__firebase__banner",h=TE().prod.length>0;function f(){const O=document.getElementById(r);O&&O.remove()}function g(O){O.style.display="flex",O.style.background="#7faaf0",O.style.position="fixed",O.style.bottom="5px",O.style.left="5px",O.style.padding=".5em",O.style.borderRadius="5px",O.style.alignItems="center"}function v(O,G){O.setAttribute("width","24"),O.setAttribute("id",G),O.setAttribute("height","24"),O.setAttribute("viewBox","0 0 24 24"),O.setAttribute("fill","none"),O.style.marginLeft="-6px"}function _(){const O=document.createElement("span");return O.style.cursor="pointer",O.style.marginLeft="16px",O.style.fontSize="24px",O.innerHTML=" &times;",O.onclick=()=>{Ng=!0,f()},O}function T(O,G){O.setAttribute("id",G),O.innerText="Learn more",O.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",O.setAttribute("target","__blank"),O.style.paddingLeft="5px",O.style.textDecoration="underline"}function b(){const O=bE(r),G=a("text"),Z=document.getElementById(G)||document.createElement("span"),tt=a("learnmore"),J=document.getElementById(tt)||document.createElement("a"),gt=a("preprendIcon"),vt=document.getElementById(gt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(O.created){const pt=O.element;g(pt),T(J,tt);const lt=_();v(vt,gt),pt.append(vt,Z,J,lt),document.body.appendChild(pt)}h?(Z.innerText="Preview backend disconnected.",vt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(vt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){var e;const s=(e=df())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NE(){return!AE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DE(){try{return typeof indexedDB=="object"}catch{return!1}}function IE(){return new Promise((s,e)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(r);l.onsuccess=()=>{l.result.close(),a||self.indexedDB.deleteDatabase(r),s(!0)},l.onupgradeneeded=()=>{a=!1},l.onerror=()=>{var h;e(((h=l.error)==null?void 0:h.message)||"")}}catch(a){e(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="FirebaseError";class Ns extends Error{constructor(e,a,r){super(a),this.code=e,this.customData=r,this.name=RE,Object.setPrototypeOf(this,Ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P_.prototype.create)}}class P_{constructor(e,a,r){this.service=e,this.serviceName=a,this.errors=r}create(e,...a){const r=a[0]||{},l=`${this.service}/${e}`,h=this.errors[e],f=h?xE(h,r):"Error",g=`${this.serviceName}: ${f} (${l}).`;return new Ns(l,g,r)}}function xE(s,e){return s.replace(VE,(a,r)=>{const l=e[r];return l!=null?String(l):`<${r}?>`})}const VE=/\{\$([^}]+)}/g;function Wc(s,e){if(s===e)return!0;const a=Object.keys(s),r=Object.keys(e);for(const l of a){if(!r.includes(l))return!1;const h=s[l],f=e[l];if(Dg(h)&&Dg(f)){if(!Wc(h,f))return!1}else if(h!==f)return!1}for(const l of r)if(!a.includes(l))return!1;return!0}function Dg(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(s){return s&&s._delegate?s._delegate:s}class Yo{constructor(e,a,r){this.name=e,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,a){this.name=e,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const a=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(a)){const r=new vE;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:a});l&&r.resolve(l)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(e){const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(l){if(r)return null;throw l}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LE(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(a);try{const h=this.getOrInitializeService({instanceIdentifier:l});r.resolve(h)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...e.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:a={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[h,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(h);r===g&&f.resolve(l)}return l}onInit(e,a){const r=this.normalizeInstanceIdentifier(a),l=this.onInitCallbacks.get(r)??new Set;l.add(e),this.onInitCallbacks.set(r,l);const h=this.instances.get(r);return h&&e(h,r),()=>{l.delete(e)}}invokeOnInitCallbacks(e,a){const r=this.onInitCallbacks.get(a);if(r)for(const l of r)try{l(e,a)}catch{}}getOrInitializeService({instanceIdentifier:e,options:a={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OE(e),options:a}),this.instances.set(e,r),this.instancesOptions.set(e,a),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OE(s){return s===dr?void 0:s}function LE(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const a=this.getProvider(e.name);if(a.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);a.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const a=new ME(e,this);return this.providers.set(e,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Lt||(Lt={}));const kE={debug:Lt.DEBUG,verbose:Lt.VERBOSE,info:Lt.INFO,warn:Lt.WARN,error:Lt.ERROR,silent:Lt.SILENT},zE=Lt.INFO,UE={[Lt.DEBUG]:"log",[Lt.VERBOSE]:"log",[Lt.INFO]:"info",[Lt.WARN]:"warn",[Lt.ERROR]:"error"},qE=(s,e,...a)=>{if(e<s.logLevel)return;const r=new Date().toISOString(),l=UE[e];if(l)console[l](`[${r}]  ${s.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class G_{constructor(e){this.name=e,this._logLevel=zE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Lt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Lt.DEBUG,...e),this._logHandler(this,Lt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Lt.VERBOSE,...e),this._logHandler(this,Lt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Lt.INFO,...e),this._logHandler(this,Lt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Lt.WARN,...e),this._logHandler(this,Lt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Lt.ERROR,...e),this._logHandler(this,Lt.ERROR,...e)}}const $E=(s,e)=>e.some(a=>s instanceof a);let Ig,Rg;function BE(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HE(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,$d=new WeakMap,Q_=new WeakMap,Vd=new WeakMap,mf=new WeakMap;function PE(s){const e=new Promise((a,r)=>{const l=()=>{s.removeEventListener("success",h),s.removeEventListener("error",f)},h=()=>{a(Si(s.result)),l()},f=()=>{r(s.error),l()};s.addEventListener("success",h),s.addEventListener("error",f)});return e.then(a=>{a instanceof IDBCursor&&F_.set(a,s)}).catch(()=>{}),mf.set(e,s),e}function GE(s){if($d.has(s))return;const e=new Promise((a,r)=>{const l=()=>{s.removeEventListener("complete",h),s.removeEventListener("error",f),s.removeEventListener("abort",f)},h=()=>{a(),l()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),l()};s.addEventListener("complete",h),s.addEventListener("error",f),s.addEventListener("abort",f)});$d.set(s,e)}let Bd={get(s,e,a){if(s instanceof IDBTransaction){if(e==="done")return $d.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Q_.get(s);if(e==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Si(s[e])},set(s,e,a){return s[e]=a,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function FE(s){Bd=s(Bd)}function QE(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...a){const r=s.call(Md(this),e,...a);return Q_.set(r,e.sort?e.sort():[e]),Si(r)}:HE().includes(s)?function(...e){return s.apply(Md(this),e),Si(F_.get(this))}:function(...e){return Si(s.apply(Md(this),e))}}function YE(s){return typeof s=="function"?QE(s):(s instanceof IDBTransaction&&GE(s),$E(s,BE())?new Proxy(s,Bd):s)}function Si(s){if(s instanceof IDBRequest)return PE(s);if(Vd.has(s))return Vd.get(s);const e=YE(s);return e!==s&&(Vd.set(s,e),mf.set(e,s)),e}const Md=s=>mf.get(s);function KE(s,e,{blocked:a,upgrade:r,blocking:l,terminated:h}={}){const f=indexedDB.open(s,e),g=Si(f);return r&&f.addEventListener("upgradeneeded",v=>{r(Si(f.result),v.oldVersion,v.newVersion,Si(f.transaction),v)}),a&&f.addEventListener("blocked",v=>a(v.oldVersion,v.newVersion,v)),g.then(v=>{h&&v.addEventListener("close",()=>h()),l&&v.addEventListener("versionchange",_=>l(_.oldVersion,_.newVersion,_))}).catch(()=>{}),g}const XE=["get","getKey","getAll","getAllKeys","count"],JE=["put","add","delete","clear"],Od=new Map;function xg(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const a=e.replace(/FromIndex$/,""),r=e!==a,l=JE.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(l||XE.includes(a)))return;const h=async function(f,...g){const v=this.transaction(f,l?"readwrite":"readonly");let _=v.store;return r&&(_=_.index(g.shift())),(await Promise.all([_[a](...g),l&&v.done]))[0]};return Od.set(e,h),h}FE(s=>({...s,get:(e,a,r)=>xg(e,a)||s.get(e,a,r),has:(e,a)=>!!xg(e,a)||s.has(e,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(WE(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function WE(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",Vg="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new G_("@firebase/app"),tT="@firebase/app-compat",eT="@firebase/analytics-compat",nT="@firebase/analytics",aT="@firebase/app-check-compat",iT="@firebase/app-check",rT="@firebase/auth",sT="@firebase/auth-compat",oT="@firebase/database",lT="@firebase/data-connect",cT="@firebase/database-compat",uT="@firebase/functions",hT="@firebase/functions-compat",dT="@firebase/installations",fT="@firebase/installations-compat",mT="@firebase/messaging",pT="@firebase/messaging-compat",yT="@firebase/performance",gT="@firebase/performance-compat",_T="@firebase/remote-config",vT="@firebase/remote-config-compat",wT="@firebase/storage",ET="@firebase/storage-compat",TT="@firebase/firestore",bT="@firebase/ai",ST="@firebase/firestore-compat",CT="firebase",AT="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="[DEFAULT]",NT={[Hd]:"fire-core",[tT]:"fire-core-compat",[nT]:"fire-analytics",[eT]:"fire-analytics-compat",[iT]:"fire-app-check",[aT]:"fire-app-check-compat",[rT]:"fire-auth",[sT]:"fire-auth-compat",[oT]:"fire-rtdb",[lT]:"fire-data-connect",[cT]:"fire-rtdb-compat",[uT]:"fire-fn",[hT]:"fire-fn-compat",[dT]:"fire-iid",[fT]:"fire-iid-compat",[mT]:"fire-fcm",[pT]:"fire-fcm-compat",[yT]:"fire-perf",[gT]:"fire-perf-compat",[_T]:"fire-rc",[vT]:"fire-rc-compat",[wT]:"fire-gcs",[ET]:"fire-gcs-compat",[TT]:"fire-fst",[ST]:"fire-fst-compat",[bT]:"fire-vertex","fire-js":"fire-js",[CT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Map,DT=new Map,Gd=new Map;function Mg(s,e){try{s.container.addComponent(e)}catch(a){$a.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,a)}}function eu(s){const e=s.name;if(Gd.has(e))return $a.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,s);for(const a of tu.values())Mg(a,s);for(const a of DT.values())Mg(a,s);return!0}function IT(s,e){const a=s.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),s.container.getProvider(e)}function RT(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ci=new P_("app","Firebase",xT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,a,r){this._isDeleted=!1,this._options={...e},this._config={...a},this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=AT;function Y_(s,e={}){let a=s;typeof e!="object"&&(e={name:e});const r={name:Pd,automaticDataCollectionEnabled:!0,...e},l=r.name;if(typeof l!="string"||!l)throw Ci.create("bad-app-name",{appName:String(l)});if(a||(a=H_()),!a)throw Ci.create("no-options");const h=tu.get(l);if(h){if(Wc(a,h.options)&&Wc(r,h.config))return h;throw Ci.create("duplicate-app",{appName:l})}const f=new jE(l);for(const v of Gd.values())f.addComponent(v);const g=new VT(a,r,f);return tu.set(l,g),g}function OT(s=Pd){const e=tu.get(s);if(!e&&s===Pd&&H_())return Y_();if(!e)throw Ci.create("no-app",{appName:s});return e}function ys(s,e,a){let r=NT[s]??s;a&&(r+=`-${a}`);const l=r.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${r}" with version "${e}":`];l&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$a.warn(f.join(" "));return}eu(new Yo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="firebase-heartbeat-database",jT=1,Ko="firebase-heartbeat-store";let Ld=null;function K_(){return Ld||(Ld=KE(LT,jT,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ko)}catch(a){console.warn(a)}}}}).catch(s=>{throw Ci.create("idb-open",{originalErrorMessage:s.message})})),Ld}async function kT(s){try{const a=(await K_()).transaction(Ko),r=await a.objectStore(Ko).get(X_(s));return await a.done,r}catch(e){if(e instanceof Ns)$a.warn(e.message);else{const a=Ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$a.warn(a.message)}}}async function Og(s,e){try{const r=(await K_()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,X_(s)),await r.done}catch(a){if(a instanceof Ns)$a.warn(a.message);else{const r=Ci.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});$a.warn(r.message)}}}function X_(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1024,UT=30;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new BT(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,a;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Lg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((a=this._heartbeatsCache)==null?void 0:a.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(f=>f.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:l}),this._heartbeatsCache.heartbeats.length>UT){const f=HT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){$a.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const a=Lg(),{heartbeatsToSend:r,unsentEntries:l}=$T(this._heartbeatsCache.heartbeats),h=Zc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=a,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(a){return $a.warn(a),""}}}function Lg(){return new Date().toISOString().substring(0,10)}function $T(s,e=zT){const a=[];let r=s.slice();for(const l of s){const h=a.find(f=>f.agent===l.agent);if(h){if(h.dates.push(l.date),jg(a)>e){h.dates.pop();break}}else if(a.push({agent:l.agent,dates:[l.date]}),jg(a)>e){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class BT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DE()?IE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const a=await kT(this.app);return a!=null&&a.heartbeats?a:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Og(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function jg(s){return Zc(JSON.stringify({version:2,heartbeats:s})).length}function HT(s){if(s.length===0)return-1;let e=0,a=s[0].date;for(let r=1;r<s.length;r++)s[r].date<a&&(a=s[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(s){eu(new Yo("platform-logger",e=>new ZE(e),"PRIVATE")),eu(new Yo("heartbeat",e=>new qT(e),"PRIVATE")),ys(Hd,Vg,s),ys(Hd,Vg,"esm2020"),ys("fire-js","")}PT("");var GT="firebase",FT="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ys(GT,FT,"app");var kg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ai,J_;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,S){function A(){}A.prototype=S.prototype,C.F=S.prototype,C.prototype=new A,C.prototype.constructor=C,C.D=function(x,I,L){for(var N=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)N[ne-2]=arguments[ne];return S.prototype[I].apply(x,N)}}function a(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,a),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(C,S,A){A||(A=0);const x=Array(16);if(typeof S=="string")for(var I=0;I<16;++I)x[I]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(I=0;I<16;++I)x[I]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=C.g[0],A=C.g[1],I=C.g[2];let L=C.g[3],N;N=S+(L^A&(I^L))+x[0]+3614090360&4294967295,S=A+(N<<7&4294967295|N>>>25),N=L+(I^S&(A^I))+x[1]+3905402710&4294967295,L=S+(N<<12&4294967295|N>>>20),N=I+(A^L&(S^A))+x[2]+606105819&4294967295,I=L+(N<<17&4294967295|N>>>15),N=A+(S^I&(L^S))+x[3]+3250441966&4294967295,A=I+(N<<22&4294967295|N>>>10),N=S+(L^A&(I^L))+x[4]+4118548399&4294967295,S=A+(N<<7&4294967295|N>>>25),N=L+(I^S&(A^I))+x[5]+1200080426&4294967295,L=S+(N<<12&4294967295|N>>>20),N=I+(A^L&(S^A))+x[6]+2821735955&4294967295,I=L+(N<<17&4294967295|N>>>15),N=A+(S^I&(L^S))+x[7]+4249261313&4294967295,A=I+(N<<22&4294967295|N>>>10),N=S+(L^A&(I^L))+x[8]+1770035416&4294967295,S=A+(N<<7&4294967295|N>>>25),N=L+(I^S&(A^I))+x[9]+2336552879&4294967295,L=S+(N<<12&4294967295|N>>>20),N=I+(A^L&(S^A))+x[10]+4294925233&4294967295,I=L+(N<<17&4294967295|N>>>15),N=A+(S^I&(L^S))+x[11]+2304563134&4294967295,A=I+(N<<22&4294967295|N>>>10),N=S+(L^A&(I^L))+x[12]+1804603682&4294967295,S=A+(N<<7&4294967295|N>>>25),N=L+(I^S&(A^I))+x[13]+4254626195&4294967295,L=S+(N<<12&4294967295|N>>>20),N=I+(A^L&(S^A))+x[14]+2792965006&4294967295,I=L+(N<<17&4294967295|N>>>15),N=A+(S^I&(L^S))+x[15]+1236535329&4294967295,A=I+(N<<22&4294967295|N>>>10),N=S+(I^L&(A^I))+x[1]+4129170786&4294967295,S=A+(N<<5&4294967295|N>>>27),N=L+(A^I&(S^A))+x[6]+3225465664&4294967295,L=S+(N<<9&4294967295|N>>>23),N=I+(S^A&(L^S))+x[11]+643717713&4294967295,I=L+(N<<14&4294967295|N>>>18),N=A+(L^S&(I^L))+x[0]+3921069994&4294967295,A=I+(N<<20&4294967295|N>>>12),N=S+(I^L&(A^I))+x[5]+3593408605&4294967295,S=A+(N<<5&4294967295|N>>>27),N=L+(A^I&(S^A))+x[10]+38016083&4294967295,L=S+(N<<9&4294967295|N>>>23),N=I+(S^A&(L^S))+x[15]+3634488961&4294967295,I=L+(N<<14&4294967295|N>>>18),N=A+(L^S&(I^L))+x[4]+3889429448&4294967295,A=I+(N<<20&4294967295|N>>>12),N=S+(I^L&(A^I))+x[9]+568446438&4294967295,S=A+(N<<5&4294967295|N>>>27),N=L+(A^I&(S^A))+x[14]+3275163606&4294967295,L=S+(N<<9&4294967295|N>>>23),N=I+(S^A&(L^S))+x[3]+4107603335&4294967295,I=L+(N<<14&4294967295|N>>>18),N=A+(L^S&(I^L))+x[8]+1163531501&4294967295,A=I+(N<<20&4294967295|N>>>12),N=S+(I^L&(A^I))+x[13]+2850285829&4294967295,S=A+(N<<5&4294967295|N>>>27),N=L+(A^I&(S^A))+x[2]+4243563512&4294967295,L=S+(N<<9&4294967295|N>>>23),N=I+(S^A&(L^S))+x[7]+1735328473&4294967295,I=L+(N<<14&4294967295|N>>>18),N=A+(L^S&(I^L))+x[12]+2368359562&4294967295,A=I+(N<<20&4294967295|N>>>12),N=S+(A^I^L)+x[5]+4294588738&4294967295,S=A+(N<<4&4294967295|N>>>28),N=L+(S^A^I)+x[8]+2272392833&4294967295,L=S+(N<<11&4294967295|N>>>21),N=I+(L^S^A)+x[11]+1839030562&4294967295,I=L+(N<<16&4294967295|N>>>16),N=A+(I^L^S)+x[14]+4259657740&4294967295,A=I+(N<<23&4294967295|N>>>9),N=S+(A^I^L)+x[1]+2763975236&4294967295,S=A+(N<<4&4294967295|N>>>28),N=L+(S^A^I)+x[4]+1272893353&4294967295,L=S+(N<<11&4294967295|N>>>21),N=I+(L^S^A)+x[7]+4139469664&4294967295,I=L+(N<<16&4294967295|N>>>16),N=A+(I^L^S)+x[10]+3200236656&4294967295,A=I+(N<<23&4294967295|N>>>9),N=S+(A^I^L)+x[13]+681279174&4294967295,S=A+(N<<4&4294967295|N>>>28),N=L+(S^A^I)+x[0]+3936430074&4294967295,L=S+(N<<11&4294967295|N>>>21),N=I+(L^S^A)+x[3]+3572445317&4294967295,I=L+(N<<16&4294967295|N>>>16),N=A+(I^L^S)+x[6]+76029189&4294967295,A=I+(N<<23&4294967295|N>>>9),N=S+(A^I^L)+x[9]+3654602809&4294967295,S=A+(N<<4&4294967295|N>>>28),N=L+(S^A^I)+x[12]+3873151461&4294967295,L=S+(N<<11&4294967295|N>>>21),N=I+(L^S^A)+x[15]+530742520&4294967295,I=L+(N<<16&4294967295|N>>>16),N=A+(I^L^S)+x[2]+3299628645&4294967295,A=I+(N<<23&4294967295|N>>>9),N=S+(I^(A|~L))+x[0]+4096336452&4294967295,S=A+(N<<6&4294967295|N>>>26),N=L+(A^(S|~I))+x[7]+1126891415&4294967295,L=S+(N<<10&4294967295|N>>>22),N=I+(S^(L|~A))+x[14]+2878612391&4294967295,I=L+(N<<15&4294967295|N>>>17),N=A+(L^(I|~S))+x[5]+4237533241&4294967295,A=I+(N<<21&4294967295|N>>>11),N=S+(I^(A|~L))+x[12]+1700485571&4294967295,S=A+(N<<6&4294967295|N>>>26),N=L+(A^(S|~I))+x[3]+2399980690&4294967295,L=S+(N<<10&4294967295|N>>>22),N=I+(S^(L|~A))+x[10]+4293915773&4294967295,I=L+(N<<15&4294967295|N>>>17),N=A+(L^(I|~S))+x[1]+2240044497&4294967295,A=I+(N<<21&4294967295|N>>>11),N=S+(I^(A|~L))+x[8]+1873313359&4294967295,S=A+(N<<6&4294967295|N>>>26),N=L+(A^(S|~I))+x[15]+4264355552&4294967295,L=S+(N<<10&4294967295|N>>>22),N=I+(S^(L|~A))+x[6]+2734768916&4294967295,I=L+(N<<15&4294967295|N>>>17),N=A+(L^(I|~S))+x[13]+1309151649&4294967295,A=I+(N<<21&4294967295|N>>>11),N=S+(I^(A|~L))+x[4]+4149444226&4294967295,S=A+(N<<6&4294967295|N>>>26),N=L+(A^(S|~I))+x[11]+3174756917&4294967295,L=S+(N<<10&4294967295|N>>>22),N=I+(S^(L|~A))+x[2]+718787259&4294967295,I=L+(N<<15&4294967295|N>>>17),N=A+(L^(I|~S))+x[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(I+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+L&4294967295}r.prototype.v=function(C,S){S===void 0&&(S=C.length);const A=S-this.blockSize,x=this.C;let I=this.h,L=0;for(;L<S;){if(I==0)for(;L<=A;)l(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<S;)if(x[I++]=C.charCodeAt(L++),I==this.blockSize){l(this,x),I=0;break}}else for(;L<S;)if(x[I++]=C[L++],I==this.blockSize){l(this,x),I=0;break}}this.h=I,this.o+=S},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;S=this.o*8;for(var A=C.length-8;A<C.length;++A)C[A]=S&255,S/=256;for(this.v(C),C=Array(16),S=0,A=0;A<4;++A)for(let x=0;x<32;x+=8)C[S++]=this.g[A]>>>x&255;return C};function h(C,S){var A=g;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=S(C)}function f(C,S){this.h=S;const A=[];let x=!0;for(let I=C.length-1;I>=0;I--){const L=C[I]|0;x&&L==S||(A[I]=L,x=!1)}this.g=A}var g={};function v(C){return-128<=C&&C<128?h(C,function(S){return new f([S|0],S<0?-1:0)}):new f([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return b;if(C<0)return J(_(-C));const S=[];let A=1;for(let x=0;C>=A;x++)S[x]=C/A|0,A*=4294967296;return new f(S,0)}function T(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return J(T(C.substring(1),S));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=_(Math.pow(S,8));let x=b;for(let L=0;L<C.length;L+=8){var I=Math.min(8,C.length-L);const N=parseInt(C.substring(L,L+I),S);I<8?(I=_(Math.pow(S,I)),x=x.j(I).add(_(N))):(x=x.j(A),x=x.add(_(N)))}return x}var b=v(0),O=v(1),G=v(16777216);s=f.prototype,s.m=function(){if(tt(this))return-J(this).m();let C=0,S=1;for(let A=0;A<this.g.length;A++){const x=this.i(A);C+=(x>=0?x:4294967296+x)*S,S*=4294967296}return C},s.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(Z(this))return"0";if(tt(this))return"-"+J(this).toString(C);const S=_(Math.pow(C,6));var A=this;let x="";for(;;){const I=lt(A,S).g;A=gt(A,I.j(S));let L=((A.g.length>0?A.g[0]:A.h)>>>0).toString(C);if(A=I,Z(A))return L+x;for(;L.length<6;)L="0"+L;x=L+x}},s.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function Z(C){if(C.h!=0)return!1;for(let S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function tt(C){return C.h==-1}s.l=function(C){return C=gt(this,C),tt(C)?-1:Z(C)?0:1};function J(C){const S=C.g.length,A=[];for(let x=0;x<S;x++)A[x]=~C.g[x];return new f(A,~C.h).add(O)}s.abs=function(){return tt(this)?J(this):this},s.add=function(C){const S=Math.max(this.g.length,C.g.length),A=[];let x=0;for(let I=0;I<=S;I++){let L=x+(this.i(I)&65535)+(C.i(I)&65535),N=(L>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);x=N>>>16,L&=65535,N&=65535,A[I]=N<<16|L}return new f(A,A[A.length-1]&-2147483648?-1:0)};function gt(C,S){return C.add(J(S))}s.j=function(C){if(Z(this)||Z(C))return b;if(tt(this))return tt(C)?J(this).j(J(C)):J(J(this).j(C));if(tt(C))return J(this.j(J(C)));if(this.l(G)<0&&C.l(G)<0)return _(this.m()*C.m());const S=this.g.length+C.g.length,A=[];for(var x=0;x<2*S;x++)A[x]=0;for(x=0;x<this.g.length;x++)for(let I=0;I<C.g.length;I++){const L=this.i(x)>>>16,N=this.i(x)&65535,ne=C.i(I)>>>16,Ne=C.i(I)&65535;A[2*x+2*I]+=N*Ne,vt(A,2*x+2*I),A[2*x+2*I+1]+=L*Ne,vt(A,2*x+2*I+1),A[2*x+2*I+1]+=N*ne,vt(A,2*x+2*I+1),A[2*x+2*I+2]+=L*ne,vt(A,2*x+2*I+2)}for(C=0;C<S;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=S;C<2*S;C++)A[C]=0;return new f(A,0)};function vt(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function pt(C,S){this.g=C,this.h=S}function lt(C,S){if(Z(S))throw Error("division by zero");if(Z(C))return new pt(b,b);if(tt(C))return S=lt(J(C),S),new pt(J(S.g),J(S.h));if(tt(S))return S=lt(C,J(S)),new pt(J(S.g),S.h);if(C.g.length>30){if(tt(C)||tt(S))throw Error("slowDivide_ only works with positive integers.");for(var A=O,x=S;x.l(C)<=0;)A=jt(A),x=jt(x);var I=ft(A,1),L=ft(x,1);for(x=ft(x,2),A=ft(A,2);!Z(x);){var N=L.add(x);N.l(C)<=0&&(I=I.add(A),L=N),x=ft(x,1),A=ft(A,1)}return S=gt(C,I.j(S)),new pt(I,S)}for(I=b;C.l(S)>=0;){for(A=Math.max(1,Math.floor(C.m()/S.m())),x=Math.ceil(Math.log(A)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),L=_(A),N=L.j(S);tt(N)||N.l(C)>0;)A-=x,L=_(A),N=L.j(S);Z(L)&&(L=O),I=I.add(L),C=gt(C,N)}return new pt(I,C)}s.B=function(C){return lt(this,C).h},s.and=function(C){const S=Math.max(this.g.length,C.g.length),A=[];for(let x=0;x<S;x++)A[x]=this.i(x)&C.i(x);return new f(A,this.h&C.h)},s.or=function(C){const S=Math.max(this.g.length,C.g.length),A=[];for(let x=0;x<S;x++)A[x]=this.i(x)|C.i(x);return new f(A,this.h|C.h)},s.xor=function(C){const S=Math.max(this.g.length,C.g.length),A=[];for(let x=0;x<S;x++)A[x]=this.i(x)^C.i(x);return new f(A,this.h^C.h)};function jt(C){const S=C.g.length+1,A=[];for(let x=0;x<S;x++)A[x]=C.i(x)<<1|C.i(x-1)>>>31;return new f(A,C.h)}function ft(C,S){const A=S>>5;S%=32;const x=C.g.length-A,I=[];for(let L=0;L<x;L++)I[L]=S>0?C.i(L+A)>>>S|C.i(L+A+1)<<32-S:C.i(L+A);return new f(I,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,J_=r,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=T,Ai=f}).apply(typeof kg<"u"?kg:typeof self<"u"?self:typeof window<"u"?window:{});var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Z_,qo,W_,Fc,Fd,tv,ev,nv;(function(){var s,e=Object.defineProperty;function a(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof zc=="object"&&zc];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=a(this);function l(c,m){if(m)t:{var y=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var j=c[E];if(!(j in y))break t;y=y[j]}c=c[c.length-1],E=y[c],m=m(E),m!=E&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(c){return c||function(m){var y=[],E;for(E in m)Object.prototype.hasOwnProperty.call(m,E)&&y.push([E,m[E]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function v(c,m,y){return c.call.apply(c.bind,arguments)}function _(c,m,y){return _=v,_.apply(null,arguments)}function T(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function b(c,m){function y(){}y.prototype=m.prototype,c.Z=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Ob=function(E,j,q){for(var W=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)W[Tt-2]=arguments[Tt];return m.prototype[j].apply(E,W)}}var O=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function G(c){const m=c.length;if(m>0){const y=Array(m);for(let E=0;E<m;E++)y[E]=c[E];return y}return[]}function Z(c,m){for(let E=1;E<arguments.length;E++){const j=arguments[E];var y=typeof j;if(y=y!="object"?y:j?Array.isArray(j)?"array":y:"null",y=="array"||y=="object"&&typeof j.length=="number"){y=c.length||0;const q=j.length||0;c.length=y+q;for(let W=0;W<q;W++)c[y+W]=j[W]}else c.push(j)}}class tt{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(c){f.setTimeout(()=>{throw c},0)}function gt(){var c=C;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class vt{constructor(){this.h=this.g=null}add(m,y){const E=pt.get();E.set(m,y),this.h?this.h.next=E:this.g=E,this.h=E}}var pt=new tt(()=>new lt,c=>c.reset());class lt{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let jt,ft=!1,C=new vt,S=()=>{const c=Promise.resolve(void 0);jt=()=>{c.then(A)}};function A(){for(var c;c=gt();){try{c.h.call(c.g)}catch(y){J(y)}var m=pt;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}ft=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};f.addEventListener("test",y,m),f.removeEventListener("test",y,m)}catch{}return c})();function N(c){return/^[\s\xa0]*$/.test(c)}function ne(c,m){I.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}b(ne,I),ne.prototype.init=function(c,m){const y=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),P=0;function et(c,m,y,E,j){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!E,this.ha=j,this.key=++P,this.da=this.fa=!1}function ht(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function kt(c,m,y){for(const E in c)m.call(y,c[E],E,c)}function Ht(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function V(c){const m={};for(const y in c)m[y]=c[y];return m}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let y,E;for(let j=1;j<arguments.length;j++){E=arguments[j];for(y in E)c[y]=E[y];for(let q=0;q<Y.length;q++)y=Y[q],Object.prototype.hasOwnProperty.call(E,y)&&(c[y]=E[y])}}function rt(c){this.src=c,this.g={},this.h=0}rt.prototype.add=function(c,m,y,E,j){const q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);const W=St(c,m,E,j);return W>-1?(m=c[W],y||(m.fa=!1)):(m=new et(m,this.src,q,!!E,j),m.fa=y,c.push(m)),m};function yt(c,m){const y=m.type;if(y in c.g){var E=c.g[y],j=Array.prototype.indexOf.call(E,m,void 0),q;(q=j>=0)&&Array.prototype.splice.call(E,j,1),q&&(ht(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function St(c,m,y,E){for(let j=0;j<c.length;++j){const q=c[j];if(!q.da&&q.listener==m&&q.capture==!!y&&q.ha==E)return j}return-1}var Mt="closure_lm_"+(Math.random()*1e6|0),De={};function ae(c,m,y,E,j){if(Array.isArray(m)){for(let q=0;q<m.length;q++)ae(c,m[q],y,E,j);return null}return y=Ls(y),c&&c[Ne]?c.J(m,y,g(E)?!!E.capture:!1,j):Li(c,m,y,!1,E,j)}function Li(c,m,y,E,j,q){if(!m)throw Error("Invalid event type");const W=g(j)?!!j.capture:!!j;let Tt=ji(c);if(Tt||(c[Mt]=Tt=new rt(c)),y=Tt.add(m,y,E,W,q),y.proxy)return y;if(E=Tr(),y.proxy=E,E.src=c,E.listener=y,c.addEventListener)L||(j=W),j===void 0&&(j=!1),c.addEventListener(m.toString(),E,j);else if(c.attachEvent)c.attachEvent(Qn(m.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Tr(){function c(y){return m.call(c.src,c.listener,y)}const m=Ms;return c}function br(c,m,y,E,j){if(Array.isArray(m))for(var q=0;q<m.length;q++)br(c,m[q],y,E,j);else E=g(E)?!!E.capture:!!E,y=Ls(y),c&&c[Ne]?(c=c.i,q=String(m).toString(),q in c.g&&(m=c.g[q],y=St(m,y,E,j),y>-1&&(ht(m[y]),Array.prototype.splice.call(m,y,1),m.length==0&&(delete c.g[q],c.h--)))):c&&(c=ji(c))&&(m=c.g[m.toString()],c=-1,m&&(c=St(m,y,E,j)),(y=c>-1?m[c]:null)&&Sr(y))}function Sr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ne])yt(m.i,c);else{var y=c.type,E=c.proxy;m.removeEventListener?m.removeEventListener(y,E,c.capture):m.detachEvent?m.detachEvent(Qn(y),E):m.addListener&&m.removeListener&&m.removeListener(E),(y=ji(m))?(yt(y,c),y.h==0&&(y.src=null,m[Mt]=null)):ht(c)}}}function Qn(c){return c in De?De[c]:De[c]="on"+c}function Ms(c,m){if(c.da)c=!0;else{m=new ne(m,this);const y=c.listener,E=c.ha||c.src;c.fa&&Sr(c),c=y.call(E,m)}return c}function ji(c){return c=c[Mt],c instanceof rt?c:null}var Os="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ls(c){return typeof c=="function"?c:(c[Os]||(c[Os]=function(m){return c.handleEvent(m)}),c[Os])}function pe(){x.call(this),this.i=new rt(this),this.M=this,this.G=null}b(pe,x),pe.prototype[Ne]=!0,pe.prototype.removeEventListener=function(c,m,y,E){br(this,c,m,y,E)};function Ie(c,m){var y,E=c.G;if(E)for(y=[];E;E=E.G)y.push(E);if(c=c.M,E=m.type||m,typeof m=="string")m=new I(m,c);else if(m instanceof I)m.target=m.target||c;else{var j=m;m=new I(E,c),nt(m,j)}j=!0;let q,W;if(y)for(W=y.length-1;W>=0;W--)q=m.g=y[W],j=Pa(q,E,!0,m)&&j;if(q=m.g=c,j=Pa(q,E,!0,m)&&j,j=Pa(q,E,!1,m)&&j,y)for(W=0;W<y.length;W++)q=m.g=y[W],j=Pa(q,E,!1,m)&&j}pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const y=c.g[m];for(let E=0;E<y.length;E++)ht(y[E]);delete c.g[m],c.h--}}this.G=null},pe.prototype.J=function(c,m,y,E){return this.i.add(String(c),m,!1,y,E)},pe.prototype.K=function(c,m,y,E){return this.i.add(String(c),m,!0,y,E)};function Pa(c,m,y,E){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let j=!0;for(let q=0;q<m.length;++q){const W=m[q];if(W&&!W.da&&W.capture==y){const Tt=W.listener,ue=W.ha||W.src;W.fa&&yt(c.i,W),j=Tt.call(ue,E)!==!1&&j}}return j&&!E.defaultPrevented}function Nu(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function cl(c){c.g=Nu(()=>{c.g=null,c.i&&(c.i=!1,cl(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Je extends x{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:cl(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(c){x.call(this),this.h=c,this.g={}}b(ki,x);var js=[];function ks(c){kt(c.g,function(m,y){this.g.hasOwnProperty(y)&&Sr(m)},c),c.g={}}ki.prototype.N=function(){ki.Z.N.call(this),ks(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ga=f.JSON.stringify,Du=f.JSON.parse,ul=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function hl(){}function dl(){}var Mn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ze(){I.call(this,"d")}b(ze,I);function _n(){I.call(this,"c")}b(_n,I);var ce={},fl=null;function Cr(){return fl=fl||new pe}ce.Ia="serverreachability";function ml(c){I.call(this,ce.Ia,c)}b(ml,I);function Yn(c){const m=Cr();Ie(m,new ml(m))}ce.STAT_EVENT="statevent";function zi(c,m){I.call(this,ce.STAT_EVENT,c),this.stat=m}b(zi,I);function ye(c){const m=Cr();Ie(m,new zi(m,c))}ce.Ja="timingevent";function Kn(c,m){I.call(this,ce.Ja,c),this.size=m}b(Kn,I);function Xn(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function On(){this.g=!0}On.prototype.ua=function(){this.g=!1};function Iu(c,m,y,E,j,q){c.info(function(){if(c.g)if(q){var W="",Tt=q.split("&");for(let qt=0;qt<Tt.length;qt++){var ue=Tt[qt].split("=");if(ue.length>1){const ie=ue[0];ue=ue[1];const Tn=ie.split("_");W=Tn.length>=2&&Tn[1]=="type"?W+(ie+"="+ue+"&"):W+(ie+"=redacted&")}}}else W=null;else W=q;return"XMLHTTP REQ ("+E+") [attempt "+j+"]: "+m+`
`+y+`
`+W})}function pl(c,m,y,E,j,q,W){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+j+"]: "+m+`
`+y+`
`+q+" "+W})}function Jn(c,m,y,E){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ru(c,y)+(E?" "+E:"")})}function Ui(c,m){c.info(function(){return"TIMEOUT: "+m})}On.prototype.info=function(){};function Ru(c,m){if(!c.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(c=0;c<q.length;c++)if(Array.isArray(q[c])){var y=q[c];if(!(y.length<2)){var E=y[1];if(Array.isArray(E)&&!(E.length<1)){var j=E[0];if(j!="noop"&&j!="stop"&&j!="close")for(let W=1;W<E.length;W++)E[W]=""}}}}return Ga(q)}catch{return m}}var qi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Us;function $i(){}b($i,hl),$i.prototype.g=function(){return new XMLHttpRequest},Us=new $i;function Ta(c){return encodeURIComponent(String(c))}function yl(c){var m=1;c=c.split(":");const y=[];for(;m>0&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function Ln(c,m,y,E){this.j=c,this.i=m,this.l=y,this.S=E||1,this.V=new ki(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jn}function jn(){this.i=null,this.g="",this.h=!1}var ge={},Me={};function Zn(c,m,y){c.M=1,c.A=Bi(ve(m)),c.u=y,c.R=!0,Ar(c,null)}function Ar(c,m){c.F=Date.now(),Wn(c),c.B=ve(c.A);var y=c.B,E=c.S;Array.isArray(E)||(E=[String(E)]),Rr(y.i,"t",E),c.C=0,y=c.j.L,c.h=new jn,c.g=xl(c.j,y?m:null,!c.u),c.P>0&&(c.O=new Je(_(c.Y,c,c.g),c.P)),m=c.V,y=c.g,E=c.ba;var j="readystatechange";Array.isArray(j)||(j&&(js[0]=j.toString()),j=js);for(let q=0;q<j.length;q++){const W=ae(y,j[q],E||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=c.J?V(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),Yn(),Iu(c.i,c.v,c.B,c.l,c.S,c.u)}Ln.prototype.ba=function(c){c=c.target;const m=this.O;m&&Un(c)==3?m.j():this.Y(c)},Ln.prototype.Y=function(c){try{if(c==this.g)t:{const Tt=Un(this.g),ue=this.g.ya(),qt=this.g.ca();if(!(Tt<3)&&(Tt!=3||this.g&&(this.h.h||this.g.la()||Ue(this.g)))){this.K||Tt!=4||ue==7||(ue==8||qt<=0?Yn(3):Yn(2)),ta(this);var m=this.g.ca();this.X=m;var y=xu(this);if(this.o=m==200,pl(this.i,this.v,this.B,this.l,this.S,Tt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var E,j=this.g;if((E=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(E)){var q=E;break e}}q=null}if(c=q)Jn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ea(this,c);else{this.o=!1,this.m=3,ye(12),cn(this),vn(this);break t}}if(this.R){c=!0;let ie;for(;!this.K&&this.C<y.length;)if(ie=_l(this,y),ie==Me){Tt==4&&(this.m=4,ye(14),c=!1),Jn(this.i,this.l,null,"[Incomplete Response]");break}else if(ie==ge){this.m=4,ye(15),Jn(this.i,this.l,y,"[Invalid Chunk]"),c=!1;break}else Jn(this.i,this.l,ie,null),ea(this,ie);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||y.length!=0||this.h.h||(this.m=1,ye(16),c=!1),this.o=this.o&&c,!c)Jn(this.i,this.l,y,"[Invalid Chunked Response]"),cn(this),vn(this);else if(y.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),to(W),W.P=!0,ye(11))}}else Jn(this.i,this.l,y,null),ea(this,y);Tt==4&&cn(this),this.o&&!this.K&&(Tt==4?Nl(this.j,this):(this.o=!1,Wn(this)))}else Sa(this.g),m==400&&y.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),cn(this),vn(this)}}}catch{}finally{}};function xu(c){if(!gl(c))return c.g.la();const m=Ue(c.g);if(m==="")return"";let y="";const E=m.length,j=Un(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return cn(c),vn(c),"";c.h.i=new f.TextDecoder}for(let q=0;q<E;q++)c.h.h=!0,y+=c.h.i.decode(m[q],{stream:!(j&&q==E-1)});return m.length=0,c.h.g+=y,c.C=0,c.h.g}function gl(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function _l(c,m){var y=c.C,E=m.indexOf(`
`,y);return E==-1?Me:(y=Number(m.substring(y,E)),isNaN(y)?ge:(E+=1,E+y>m.length?Me:(m=m.slice(E,E+y),c.C=E+y,m)))}Ln.prototype.cancel=function(){this.K=!0,cn(this)};function Wn(c){c.T=Date.now()+c.H,Nr(c,c.H)}function Nr(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Xn(_(c.aa,c),m)}function ta(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Ln.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Ui(this.i,this.B),this.M!=2&&(Yn(),ye(17)),cn(this),this.m=2,vn(this)):Nr(this,this.T-c)};function vn(c){c.j.I==0||c.K||Nl(c.j,c)}function cn(c){ta(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,ks(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function ea(c,m){try{var y=c.j;if(y.I!=0&&(y.g==c||aa(y.h,c))){if(!c.L&&aa(y.h,c)&&y.I==3){try{var E=y.Ba.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var j=E;if(j[0]==0){t:if(!y.v){if(y.g)if(y.g.F+3e3<c.F)Lr(y),Wa(y);else break t;Ki(y),ye(18)}}else y.xa=j[1],0<y.xa-y.K&&j[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=Xn(_(y.Va,y),6e3));na(y.h)<=1&&y.ta&&(y.ta=void 0)}else ca(y,11)}else if((c.L||y.g==c)&&Lr(y),!N(m))for(j=y.Ba.g.parse(m),m=0;m<j.length;m++){let qt=j[m];const ie=qt[0];if(!(ie<=y.K))if(y.K=ie,qt=qt[1],y.I==2)if(qt[0]=="c"){y.M=qt[1],y.ba=qt[2];const Tn=qt[3];Tn!=null&&(y.ka=Tn,y.j.info("VER="+y.ka));const ua=qt[4];ua!=null&&(y.za=ua,y.j.info("SVER="+y.za));const qn=qt[5];qn!=null&&typeof qn=="number"&&qn>0&&(E=1.5*qn,y.O=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const $n=c.g;if($n){const Xi=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xi){var q=E.h;q.g||Xi.indexOf("spdy")==-1&&Xi.indexOf("quic")==-1&&Xi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Bs(q,q.h),q.h=null))}if(E.G){const jr=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;jr&&(E.wa=jr,Pt(E.J,E.G,jr))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-c.F,y.j.info("Handshake RTT: "+y.T+"ms")),E=y;var W=c;if(E.na=Rl(E,E.L?E.ba:null,E.W),W.L){Hs(E.h,W);var Tt=W,ue=E.O;ue&&(Tt.H=ue),Tt.D&&(ta(Tt),Wn(Tt)),E.g=W}else Cl(E);y.i.length>0&&la(y)}else qt[0]!="stop"&&qt[0]!="close"||ca(y,7);else y.I==3&&(qt[0]=="stop"||qt[0]=="close"?qt[0]=="stop"?ca(y,7):Zs(y):qt[0]!="noop"&&y.l&&y.l.qa(qt),y.A=0)}}Yn(4)}catch{}}var _e=class{constructor(c,m){this.g=c,this.map=m}};function qs(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $s(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function na(c){return c.h?1:c.g?c.g.size:0}function aa(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Bs(c,m){c.g?c.g.add(m):c.h=m}function Hs(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}qs.prototype.cancel=function(){if(this.i=Ps(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ps(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.G);return m}return G(c.i)}var vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dr(c,m){if(c){c=c.split("&");for(let y=0;y<c.length;y++){const E=c[y].indexOf("=");let j,q=null;E>=0?(j=c[y].substring(0,E),q=c[y].substring(E+1)):j=c[y],m(j,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function un(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof un?(this.l=c.l,Oe(this,c.j),this.o=c.o,this.g=c.g,Fa(this,c.u),this.h=c.h,Gs(this,bl(c.i)),this.m=c.m):c&&(m=String(c).match(vl))?(this.l=!1,Oe(this,m[1]||"",!0),this.o=ia(m[2]||""),this.g=ia(m[3]||"",!0),Fa(this,m[4]),this.h=ia(m[5]||"",!0),Gs(this,m[6]||"",!0),this.m=ia(m[7]||"")):(this.l=!1,this.i=new Ya(null,this.l))}un.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(Hi(m,Ir,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Hi(m,Ir,!0),"@"),c.push(Ta(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&c.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Hi(y,y.charAt(0)=="/"?Fs:wl,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Hi(y,El)),c.join("")},un.prototype.resolve=function(c){const m=ve(this);let y=!!c.j;y?Oe(m,c.j):y=!!c.o,y?m.o=c.o:y=!!c.g,y?m.g=c.g:y=c.u!=null;var E=c.h;if(y)Fa(m,c.u);else if(y=!!c.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var j=m.h.lastIndexOf("/");j!=-1&&(E=m.h.slice(0,j+1)+E)}if(j=E,j==".."||j==".")E="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){E=j.lastIndexOf("/",0)==0,j=j.split("/");const q=[];for(let W=0;W<j.length;){const Tt=j[W++];Tt=="."?E&&W==j.length&&q.push(""):Tt==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),E&&W==j.length&&q.push("")):(q.push(Tt),E=!0)}E=q.join("/")}else E=j}return y?m.h=E:y=c.i.toString()!=="",y?Gs(m,bl(c.i)):y=!!c.m,y&&(m.m=c.m),m};function ve(c){return new un(c)}function Oe(c,m,y){c.j=y?ia(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function Fa(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function Gs(c,m,y){m instanceof Ya?(c.i=m,xr(c.i,c.l)):(y||(m=Hi(m,Qa)),c.i=new Ya(m,c.l))}function Pt(c,m,y){c.i.set(m,y)}function Bi(c){return Pt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function ia(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Hi(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,tn),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function tn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ir=/[#\/\?@]/g,wl=/[#\?:]/g,Fs=/[#\?]/g,Qa=/[#\?@]/g,El=/#/g;function Ya(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function en(c){c.g||(c.g=new Map,c.h=0,c.i&&Dr(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}s=Ya.prototype,s.add=function(c,m){en(this),this.i=null,c=Ka(this,c);let y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function Tl(c,m){en(c),m=Ka(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Qs(c,m){return en(c),m=Ka(c,m),c.g.has(m)}s.forEach=function(c,m){en(this),this.g.forEach(function(y,E){y.forEach(function(j){c.call(m,j,E,this)},this)},this)};function Ys(c,m){en(c);let y=[];if(typeof m=="string")Qs(c,m)&&(y=y.concat(c.g.get(Ka(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)y=y.concat(c[m]);return y}s.set=function(c,m){return en(this),this.i=null,c=Ka(this,c),Qs(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},s.get=function(c,m){return c?(c=Ys(this,c),c.length>0?String(c[0]):m):m};function Rr(c,m,y){Tl(c,m),y.length>0&&(c.i=null,c.g.set(Ka(c,m),G(y)),c.h+=y.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let E=0;E<m.length;E++){var y=m[E];const j=Ta(y);y=Ys(this,y);for(let q=0;q<y.length;q++){let W=j;y[q]!==""&&(W+="="+Ta(y[q])),c.push(W)}}return this.i=c.join("&")};function bl(c){const m=new Ya;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Ka(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function xr(c,m){m&&!c.j&&(en(c),c.i=null,c.g.forEach(function(y,E){const j=E.toLowerCase();E!=j&&(Tl(this,E),Rr(this,j,y))},c)),c.j=m}function kn(c,m){const y=new On;if(f.Image){const E=new Image;E.onload=T(wn,y,"TestLoadImage: loaded",!0,m,E),E.onerror=T(wn,y,"TestLoadImage: error",!1,m,E),E.onabort=T(wn,y,"TestLoadImage: abort",!1,m,E),E.ontimeout=T(wn,y,"TestLoadImage: timeout",!1,m,E),f.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else m(!1)}function Ks(c,m){const y=new On,E=new AbortController,j=setTimeout(()=>{E.abort(),wn(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:E.signal}).then(q=>{clearTimeout(j),q.ok?wn(y,"TestPingServer: ok",!0,m):wn(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),wn(y,"TestPingServer: error",!1,m)})}function wn(c,m,y,E,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),E(y)}catch{}}function Xa(){this.g=new ul}function ra(c){this.i=c.Sb||null,this.h=c.ab||!1}b(ra,hl),ra.prototype.g=function(){return new Pi(this.i,this.h)};function Pi(c,m){pe.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(Pi,pe),s=Pi.prototype,s.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,zn(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ja(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vr(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vr(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Ja(this):zn(this),this.readyState==3&&Vr(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,Ja(this))},s.Na=function(c){this.g&&(this.response=c,Ja(this))},s.ga=function(){this.g&&Ja(this)};function Ja(c){c.readyState=4,c.l=null,c.j=null,c.B=null,zn(c)}s.setRequestHeader=function(c,m){this.A.append(c,m)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function zn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function En(c){let m="";return kt(c,function(y,E){m+=E,m+=":",m+=y,m+=`\r
`}),m}function Gi(c,m,y){t:{for(E in y){var E=!1;break t}E=!0}E||(y=En(y),typeof c=="string"?y!=null&&Ta(y):Pt(c,m,y))}function Qt(c){pe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(Qt,pe);var sa=/^https?$/i,Xs=["POST","PUT"];s=Qt.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,m,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Us.g(),this.g.onreadystatechange=O(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){Fi(this,q);return}if(c=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var j in E)y.set(j,E[j]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const q of E.keys())y.set(q,E.get(q));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(q=>q.toLowerCase()=="content-type"),j=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Xs,m,void 0)>=0)||E||j||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,W]of y)this.g.setRequestHeader(q,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(q){Fi(this,q)}};function Fi(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,Js(c),ba(c)}function Js(c){c.A||(c.A=!0,Ie(c,"complete"),Ie(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ie(this,"complete"),Ie(this,"abort"),ba(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),Qt.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Qi(this):this.Xa())},s.Xa=function(){Qi(this)};function Qi(c){if(c.h&&typeof h<"u"){if(c.v&&Un(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ie(c,"readystatechange"),Un(c)==4){c.h=!1;try{const q=c.ca();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var y;if(!(y=m)){var E;if(E=q===0){let W=String(c.D).match(vl)[1]||null;!W&&f.self&&f.self.location&&(W=f.self.location.protocol.slice(0,-1)),E=!sa.test(W?W.toLowerCase():"")}y=E}if(y)Ie(c,"complete"),Ie(c,"success");else{c.o=6;try{var j=Un(c)>2?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.ca()+"]",Js(c)}}finally{ba(c)}}}}function ba(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const y=c.g;c.g=null,m||Ie(c,"ready");try{y.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Un(c){return c.g?c.g.readyState:0}s.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Du(m)}};function Ue(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Sa(c){const m={};c=(c.g&&Un(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(N(c[E]))continue;var y=yl(c[E]);const j=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const q=m[j]||[];m[j]=q,q.push(y)}Ht(m,function(E){return E.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function oa(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function Za(c){this.za=0,this.i=[],this.j=new On,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=oa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=oa("baseRetryDelayMs",5e3,c),this.Za=oa("retryDelaySeedMs",1e4,c),this.Ta=oa("forwardChannelMaxRetries",2,c),this.va=oa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new qs(c&&c.concurrentRequestLimit),this.Ba=new Xa,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Za.prototype,s.ka=8,s.I=1,s.connect=function(c,m,y,E){ye(0),this.W=c,this.H=m||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.J=Rl(this,null,this.W),la(this)};function Zs(c){if(Mr(c),c.I==3){var m=c.V++,y=ve(c.J);if(Pt(y,"SID",c.M),Pt(y,"RID",m),Pt(y,"TYPE","terminate"),Yi(c,y),m=new Ln(c,c.j,m),m.M=2,m.A=Bi(ve(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!y&&f.Image&&(new Image().src=m.A,y=!0),y||(m.g=xl(m.j,null),m.g.ea(m.A)),m.F=Date.now(),Wn(m)}Il(c)}function Wa(c){c.g&&(to(c),c.g.cancel(),c.g=null)}function Mr(c){Wa(c),c.v&&(f.clearTimeout(c.v),c.v=null),Lr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function la(c){if(!$s(c.h)&&!c.m){c.m=!0;var m=c.Ea;jt||S(),ft||(jt(),ft=!0),C.add(m,c),c.D=0}}function Or(c,m){return na(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Xn(_(c.Ea,c,m),Dl(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const j=new Ln(this,this.j,c);let q=this.o;if(this.U&&(q?(q=V(q),nt(q,this.U)):q=this.U),this.u!==null||this.R||(j.J=q,q=null),this.S)t:{for(var m=0,y=0;y<this.i.length;y++){e:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(m+=E,m>4096){m=y;break t}if(m===4096||y===this.i.length-1){m=y+1;break t}}m=1e3}else m=1e3;m=Sl(this,j,m),y=ve(this.J),Pt(y,"RID",c),Pt(y,"CVER",22),this.G&&Pt(y,"X-HTTP-Session-Id",this.G),Yi(this,y),q&&(this.R?m="headers="+Ta(En(q))+"&"+m:this.u&&Gi(y,this.u,q)),Bs(this.h,j),this.Ra&&Pt(y,"TYPE","init"),this.S?(Pt(y,"$req",m),Pt(y,"SID","null"),j.U=!0,Zn(j,y,null)):Zn(j,y,m),this.I=2}}else this.I==3&&(c?Ws(this,c):this.i.length==0||$s(this.h)||Ws(this))};function Ws(c,m){var y;m?y=m.l:y=c.V++;const E=ve(c.J);Pt(E,"SID",c.M),Pt(E,"RID",y),Pt(E,"AID",c.K),Yi(c,E),c.u&&c.o&&Gi(E,c.u,c.o),y=new Ln(c,c.j,y,c.D+1),c.u===null&&(y.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Sl(c,y,1e3),y.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Bs(c.h,y),Zn(y,E,m)}function Yi(c,m){c.H&&kt(c.H,function(y,E){Pt(m,E,y)}),c.l&&kt({},function(y,E){Pt(m,E,y)})}function Sl(c,m,y){y=Math.min(c.i.length,y);const E=c.l?_(c.l.Ka,c.l,c):null;t:{var j=c.i;let Tt=-1;for(;;){const ue=["count="+y];Tt==-1?y>0?(Tt=j[0].g,ue.push("ofs="+Tt)):Tt=0:ue.push("ofs="+Tt);let qt=!0;for(let ie=0;ie<y;ie++){var q=j[ie].g;const Tn=j[ie].map;if(q-=Tt,q<0)Tt=Math.max(0,j[ie].g-100),qt=!1;else try{q="req"+q+"_"||"";try{var W=Tn instanceof Map?Tn:Object.entries(Tn);for(const[ua,qn]of W){let $n=qn;g(qn)&&($n=Ga(qn)),ue.push(q+ua+"="+encodeURIComponent($n))}}catch(ua){throw ue.push(q+"type="+encodeURIComponent("_badmap")),ua}}catch{E&&E(Tn)}}if(qt){W=ue.join("&");break t}}W=void 0}return c=c.i.splice(0,y),m.G=c,W}function Cl(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;jt||S(),ft||(jt(),ft=!0),C.add(m,c),c.A=0}}function Ki(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Xn(_(c.Da,c),Dl(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,Al(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Xn(_(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),Wa(this),Al(this))};function to(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Al(c){c.g=new Ln(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=ve(c.na);Pt(m,"RID","rpc"),Pt(m,"SID",c.M),Pt(m,"AID",c.K),Pt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Pt(m,"TO",c.ia),Pt(m,"TYPE","xmlhttp"),Yi(c,m),c.u&&c.o&&Gi(m,c.u,c.o),c.O&&(c.g.H=c.O);var y=c.g;c=c.ba,y.M=1,y.A=Bi(ve(m)),y.u=null,y.R=!0,Ar(y,c)}s.Va=function(){this.C!=null&&(this.C=null,Wa(this),Ki(this),ye(19))};function Lr(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Nl(c,m){var y=null;if(c.g==m){Lr(c),to(c),c.g=null;var E=2}else if(aa(c.h,m))y=m.G,Hs(c.h,m),E=1;else return;if(c.I!=0){if(m.o)if(E==1){y=m.u?m.u.length:0,m=Date.now()-m.F;var j=c.D;E=Cr(),Ie(E,new Kn(E,y)),la(c)}else Cl(c);else if(j=m.m,j==3||j==0&&m.X>0||!(E==1&&Or(c,m)||E==2&&Ki(c)))switch(y&&y.length>0&&(m=c.h,m.i=m.i.concat(y)),j){case 1:ca(c,5);break;case 4:ca(c,10);break;case 3:ca(c,6);break;default:ca(c,2)}}}function Dl(c,m){let y=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(y*=2),y*m}function ca(c,m){if(c.j.info("Error code "+m),m==2){var y=_(c.bb,c),E=c.Ua;const j=!E;E=new un(E||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Oe(E,"https"),Bi(E),j?kn(E.toString(),y):Ks(E.toString(),y)}else ye(2);c.I=0,c.l&&c.l.pa(m),Il(c),Mr(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function Il(c){if(c.I=0,c.ja=[],c.l){const m=Ps(c.h);(m.length!=0||c.i.length!=0)&&(Z(c.ja,m),Z(c.ja,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.oa()}}function Rl(c,m,y){var E=y instanceof un?ve(y):new un(y);if(E.g!="")m&&(E.g=m+"."+E.g),Fa(E,E.u);else{var j=f.location;E=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;const q=new un(null);E&&Oe(q,E),m&&(q.g=m),j&&Fa(q,j),y&&(q.h=y),E=q}return y=c.G,m=c.wa,y&&m&&Pt(E,y,m),Pt(E,"VER",c.ka),Yi(c,E),E}function xl(c,m,y){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Qt(new ra({ab:y})):new Qt(c.ma),m.Fa(c.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vl(){}s=Vl.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function ti(){}ti.prototype.g=function(c,m){return new Ze(c,m)};function Ze(c,m){pe.call(this),this.g=new Za(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!N(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!N(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Ca(this)}b(Ze,pe),Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Zs(this.g)},Ze.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.v&&(y={},y.__data__=Ga(c),c=y);m.i.push(new _e(m.Ya++,c)),m.I==3&&la(m)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Zs(this.g),delete this.g,Ze.Z.N.call(this)};function Ml(c){ze.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const y in m){c=y;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}b(Ml,ze);function Ol(){_n.call(this),this.status=1}b(Ol,_n);function Ca(c){this.g=c}b(Ca,Vl),Ca.prototype.ra=function(){Ie(this.g,"a")},Ca.prototype.qa=function(c){Ie(this.g,new Ml(c))},Ca.prototype.pa=function(c){Ie(this.g,new Ol)},Ca.prototype.oa=function(){Ie(this.g,"b")},ti.prototype.createWebChannel=ti.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,nv=function(){return new ti},ev=function(){return Cr()},tv=ce,Fd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qi.NO_ERROR=0,qi.TIMEOUT=8,qi.HTTP_ERROR=6,Fc=qi,zs.COMPLETE="complete",W_=zs,dl.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",pe.prototype.listen=pe.prototype.J,qo=dl,Qt.prototype.listenOnce=Qt.prototype.K,Qt.prototype.getLastError=Qt.prototype.Ha,Qt.prototype.getLastErrorCode=Qt.prototype.ya,Qt.prototype.getStatus=Qt.prototype.ca,Qt.prototype.getResponseJson=Qt.prototype.La,Qt.prototype.getResponseText=Qt.prototype.la,Qt.prototype.send=Qt.prototype.ea,Qt.prototype.setWithCredentials=Qt.prototype.Fa,Z_=Qt}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});const zg="@firebase/firestore",Ug="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new G_("@firebase/firestore");function ds(){return mr.logLevel}function it(s,...e){if(mr.logLevel<=Lt.DEBUG){const a=e.map(pf);mr.debug(`Firestore (${Ds}): ${s}`,...a)}}function Ba(s,...e){if(mr.logLevel<=Lt.ERROR){const a=e.map(pf);mr.error(`Firestore (${Ds}): ${s}`,...a)}}function Es(s,...e){if(mr.logLevel<=Lt.WARN){const a=e.map(pf);mr.warn(`Firestore (${Ds}): ${s}`,...a)}}function pf(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(a){return JSON.stringify(a)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(s,e,a){let r="Unexpected state";typeof e=="string"?r=e:a=e,av(s,r,a)}function av(s,e,a){let r=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(a!==void 0)try{r+=" CONTEXT: "+JSON.stringify(a)}catch{r+=" CONTEXT: "+a}throw Ba(r),new Error(r)}function Bt(s,e,a,r){let l="Unexpected state";typeof a=="string"?l=a:r=a,s||av(e,l,r)}function Et(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class at extends Ns{constructor(e,a){super(e,a),this.code=e,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.promise=new Promise(((e,a)=>{this.resolve=e,this.reject=a}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,a){e.enqueueRetryable((()=>a(Ke.UNAUTHENTICATED)))}shutdown(){}}class YT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,a){this.changeListener=a,e.enqueueRetryable((()=>a(this.token.user)))}shutdown(){this.changeListener=null}}class KT{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,a){Bt(this.o===void 0,42304);let r=this.i;const l=v=>this.i!==r?(r=this.i,a(v)):Promise.resolve();let h=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),h.resolve(),h=new Ni,e.enqueueRetryable((()=>l(this.currentUser)))};const f=()=>{const v=h;e.enqueueRetryable((async()=>{await v.promise,await l(this.currentUser)}))},g=v=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((v=>g(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?g(v):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),h.resolve(),h=new Ni)}}),0),f()}getToken(){const e=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then((r=>this.i!==e?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Bt(typeof r.accessToken=="string",31837,{l:r}),new iv(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Bt(e===null||typeof e=="string",2055,{h:e}),new Ke(e)}}class XT{constructor(e,a,r){this.P=e,this.T=a,this.I=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class JT{constructor(e,a,r){this.P=e,this.T=a,this.I=r}getToken(){return Promise.resolve(new XT(this.P,this.T,this.I))}start(e,a){e.enqueueRetryable((()=>a(Ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZT{constructor(e,a){this.V=a,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,RT(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,a){Bt(this.o===void 0,3512);const r=h=>{h.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${h.error.message}`);const f=h.token!==this.m;return this.m=h.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?a(h.token):Promise.resolve()};this.o=h=>{e.enqueueRetryable((()=>r(h)))};const l=h=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=h,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((h=>l(h))),setTimeout((()=>{if(!this.appCheck){const h=this.V.getImmediate({optional:!0});h?l(h):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((a=>a?(Bt(typeof a.token=="string",44558,{tokenResult:a}),this.m=a.token,new qg(a.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(a);else for(let r=0;r<s;r++)a[r]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const l=WT(40);for(let h=0;h<l.length;++h)r.length<20&&l[h]<a&&(r+=e.charAt(l[h]%62))}return r}}function Rt(s,e){return s<e?-1:s>e?1:0}function Qd(s,e){const a=Math.min(s.length,e.length);for(let r=0;r<a;r++){const l=s.charAt(r),h=e.charAt(r);if(l!==h)return jd(l)===jd(h)?Rt(l,h):jd(l)?1:-1}return Rt(s.length,e.length)}const tb=55296,eb=57343;function jd(s){const e=s.charCodeAt(0);return e>=tb&&e<=eb}function Ts(s,e,a){return s.length===e.length&&s.every(((r,l)=>a(r,e[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="__name__";class pa{constructor(e,a,r){a===void 0?a=0:a>e.length&&mt(637,{offset:a,range:e.length}),r===void 0?r=e.length-a:r>e.length-a&&mt(1746,{length:r,range:e.length-a}),this.segments=e,this.offset=a,this.len=r}get length(){return this.len}isEqual(e){return pa.comparator(this,e)===0}child(e){const a=this.segments.slice(this.offset,this.limit());return e instanceof pa?e.forEach((r=>{a.push(r)})):a.push(e),this.construct(a)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==e.get(a))return!1;return!0}forEach(e){for(let a=this.offset,r=this.limit();a<r;a++)e(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,a){const r=Math.min(e.length,a.length);for(let l=0;l<r;l++){const h=pa.compareSegments(e.get(l),a.get(l));if(h!==0)return h}return Rt(e.length,a.length)}static compareSegments(e,a){const r=pa.isNumericId(e),l=pa.isNumericId(a);return r&&!l?-1:!r&&l?1:r&&l?pa.extractNumericId(e).compare(pa.extractNumericId(a)):Qd(e,a)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ai.fromString(e.substring(4,e.length-2))}}class Zt extends pa{construct(e,a,r){return new Zt(e,a,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const a=[];for(const r of e){if(r.indexOf("//")>=0)throw new at(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);a.push(...r.split("/").filter((l=>l.length>0)))}return new Zt(a)}static emptyPath(){return new Zt([])}}const nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends pa{construct(e,a,r){return new Ge(e,a,r)}static isValidIdentifier(e){return nb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$g}static keyField(){return new Ge([$g])}static fromServerFormat(e){const a=[];let r="",l=0;const h=()=>{if(r.length===0)throw new at(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(r),r=""};let f=!1;for(;l<e.length;){const g=e[l];if(g==="\\"){if(l+1===e.length)throw new at(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[l+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new at(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=v,l+=2}else g==="`"?(f=!f,l++):g!=="."||f?(r+=g,l++):(h(),l++)}if(h(),f)throw new at(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(a)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.path=e}static fromPath(e){return new ut(Zt.fromString(e))}static fromName(e){return new ut(Zt.fromString(e).popFirst(5))}static empty(){return new ut(Zt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Zt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,a){return Zt.comparator(e.path,a.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ut(new Zt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(s,e,a){if(!a)throw new at(K.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function ab(s,e,a,r){if(e===!0&&r===!0)throw new at(K.INVALID_ARGUMENT,`${s} and ${a} cannot be used together.`)}function Bg(s){if(!ut.isDocumentKey(s))throw new at(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Hg(s){if(ut.isDocumentKey(s))throw new at(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function sv(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function fu(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":mt(12329,{type:typeof s})}function Xo(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new at(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=fu(s);throw new at(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${a}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(s,e){const a={typeString:s};return e&&(a.value=e),a}function il(s,e){if(!sv(s))throw new at(K.INVALID_ARGUMENT,"JSON must be an object");let a;for(const r in e)if(e[r]){const l=e[r].typeString,h="value"in e[r]?{value:e[r].value}:void 0;if(!(r in s)){a=`JSON missing required field: '${r}'`;break}const f=s[r];if(l&&typeof f!==l){a=`JSON field '${r}' must be a ${l}.`;break}if(h!==void 0&&f!==h.value){a=`Expected '${r}' field to equal '${h.value}'`;break}}if(a)throw new at(K.INVALID_ARGUMENT,a);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=-62135596800,Gg=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const a=Math.floor(e/1e3),r=Math.floor((e-1e3*a)*Gg);return new ee(a,r)}constructor(e,a){if(this.seconds=e,this.nanoseconds=a,a<0)throw new at(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new at(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(e<Pg)throw new at(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new at(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gg}_compareTo(e){return this.seconds===e.seconds?Rt(this.nanoseconds,e.nanoseconds):Rt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(il(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Ae("string",ee._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(e){return new _t(e)}static min(){return new _t(new ee(0,0))}static max(){return new _t(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=-1;function ib(s,e){const a=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,l=_t.fromTimestamp(r===1e9?new ee(a+1,0):new ee(a,r));return new Ii(l,ut.empty(),e)}function rb(s){return new Ii(s.readTime,s.key,Jo)}class Ii{constructor(e,a,r){this.readTime=e,this.documentKey=a,this.largestBatchId=r}static min(){return new Ii(_t.min(),ut.empty(),Jo)}static max(){return new Ii(_t.max(),ut.empty(),Jo)}}function sb(s,e){let a=s.readTime.compareTo(e.readTime);return a!==0?a:(a=ut.comparator(s.documentKey,e.documentKey),a!==0?a:Rt(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(s){if(s.code!==K.FAILED_PRECONDITION||s.message!==ob)throw s;it("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)}),(a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)}))}catch(e){return this.next(void 0,e)}next(e,a){return this.callbackAttached&&mt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(e,this.result):new X(((r,l)=>{this.nextCallback=h=>{this.wrapSuccess(e,h).next(r,l)},this.catchCallback=h=>{this.wrapFailure(a,h).next(r,l)}}))}toPromise(){return new Promise(((e,a)=>{this.next(e,a)}))}wrapUserFunction(e){try{const a=e();return a instanceof X?a:X.resolve(a)}catch(a){return X.reject(a)}}wrapSuccess(e,a){return e?this.wrapUserFunction((()=>e(a))):X.resolve(a)}wrapFailure(e,a){return e?this.wrapUserFunction((()=>e(a))):X.reject(a)}static resolve(e){return new X(((a,r)=>{a(e)}))}static reject(e){return new X(((a,r)=>{r(e)}))}static waitFor(e){return new X(((a,r)=>{let l=0,h=0,f=!1;e.forEach((g=>{++l,g.next((()=>{++h,f&&h===l&&a()}),(v=>r(v)))})),f=!0,h===l&&a()}))}static or(e){let a=X.resolve(!1);for(const r of e)a=a.next((l=>l?X.resolve(l):r()));return a}static forEach(e,a){const r=[];return e.forEach(((l,h)=>{r.push(a.call(this,l,h))})),this.waitFor(r)}static mapArray(e,a){return new X(((r,l)=>{const h=e.length,f=new Array(h);let g=0;for(let v=0;v<h;v++){const _=v;a(e[_]).next((T=>{f[_]=T,++g,g===h&&r(f)}),(T=>l(T)))}}))}static doWhile(e,a){return new X(((r,l)=>{const h=()=>{e()===!0?a().next((()=>{h()}),l):r()};h()}))}}function cb(s){const e=s.match(/Android ([\d.]+)/i),a=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(a)}function Rs(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,a){this.previousValue=e,a&&(a.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>a.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=-1;function pu(s){return s==null}function nu(s){return s===0&&1/s==-1/0}function ub(s){return typeof s=="number"&&Number.isInteger(s)&&!nu(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="";function hb(s){let e="";for(let a=0;a<s.length;a++)e.length>0&&(e=Fg(e)),e=db(s.get(a),e);return Fg(e)}function db(s,e){let a=e;const r=s.length;for(let l=0;l<r;l++){const h=s.charAt(l);switch(h){case"\0":a+="";break;case ov:a+="";break;default:a+=h}}return a}function Fg(s){return s+ov+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(s){let e=0;for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&e++;return e}function gr(s,e){for(const a in s)Object.prototype.hasOwnProperty.call(s,a)&&e(a,s[a])}function lv(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,a){this.comparator=e,this.root=a||Pe.EMPTY}insert(e,a){return new se(this.comparator,this.root.insert(e,a,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let a=this.root;for(;!a.isEmpty();){const r=this.comparator(e,a.key);if(r===0)return a.value;r<0?a=a.left:r>0&&(a=a.right)}return null}indexOf(e){let a=0,r=this.root;for(;!r.isEmpty();){const l=this.comparator(e,r.key);if(l===0)return a+r.left.size;l<0?r=r.left:(a+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((a,r)=>(e(a,r),!1)))}toString(){const e=[];return this.inorderTraversal(((a,r)=>(e.push(`${a}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uc(this.root,e,this.comparator,!0)}}class Uc{constructor(e,a,r,l){this.isReverse=l,this.nodeStack=[];let h=1;for(;!e.isEmpty();)if(h=a?r(e.key,a):1,a&&l&&(h*=-1),h<0)e=this.isReverse?e.left:e.right;else{if(h===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const a={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,a,r,l,h){this.key=e,this.value=a,this.color=r??Pe.RED,this.left=l??Pe.EMPTY,this.right=h??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,a,r,l,h){return new Pe(e??this.key,a??this.value,r??this.color,l??this.left,h??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,a,r){let l=this;const h=r(e,l.key);return l=h<0?l.copy(null,null,null,l.left.insert(e,a,r),null):h===0?l.copy(null,a,null,null,null):l.copy(null,null,null,null,l.right.insert(e,a,r)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,a){let r,l=this;if(a(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,a),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),a(e,l.key)===0){if(l.right.isEmpty())return Pe.EMPTY;r=l.right.min(),l=l.copy(r.key,r.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,a))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,a)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mt(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw mt(27949);return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw mt(57766)}get value(){throw mt(16141)}get color(){throw mt(16727)}get left(){throw mt(29726)}get right(){throw mt(36894)}copy(e,a,r,l,h){return this}insert(e,a,r){return new Pe(e,a)}remove(e,a){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((a,r)=>(e(a),!1)))}forEachInRange(e,a){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const l=r.getNext();if(this.comparator(l.key,e[1])>=0)return;a(l.key)}}forEachWhile(e,a){let r;for(r=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const a=this.data.getIteratorFrom(e);return a.hasNext()?a.getNext().key:null}getIterator(){return new Yg(this.data.getIterator())}getIteratorFrom(e){return new Yg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let a=this;return a.size<e.size&&(a=e,e=this),e.forEach((r=>{a=a.add(r)})),a}isEqual(e){if(!(e instanceof xe)||this.size!==e.size)return!1;const a=this.data.getIterator(),r=e.data.getIterator();for(;a.hasNext();){const l=a.getNext().key,h=r.getNext().key;if(this.comparator(l,h)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((a=>{e.push(a)})),e}toString(){const e=[];return this.forEach((a=>e.push(a))),"SortedSet("+e.toString()+")"}copy(e){const a=new xe(this.comparator);return a.data=e,a}}class Yg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Gn([])}unionWith(e){let a=new xe(Ge.comparator);for(const r of this.fields)a=a.add(r);for(const r of e)a=a.add(r);return new Gn(a.toArray())}covers(e){for(const a of this.fields)if(a.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,((a,r)=>a.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const a=(function(l){try{return atob(l)}catch(h){throw typeof DOMException<"u"&&h instanceof DOMException?new cv("Invalid base64 string: "+h):h}})(e);return new Fe(a)}static fromUint8Array(e){const a=(function(l){let h="";for(let f=0;f<l.length;++f)h+=String.fromCharCode(l[f]);return h})(e);return new Fe(a)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(a){return btoa(a)})(this.binaryString)}toUint8Array(){return(function(a){const r=new Uint8Array(a.length);for(let l=0;l<a.length;l++)r[l]=a.charCodeAt(l);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Rt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const fb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(s){if(Bt(!!s,39018),typeof s=="string"){let e=0;const a=fb.exec(s);if(Bt(!!a,46558,{timestamp:s}),a[1]){let l=a[1];l=(l+"000000000").substr(0,9),e=Number(l)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(s.seconds),nanos:me(s.nanos)}}function me(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function xi(s){return typeof s=="string"?Fe.fromBase64String(s):Fe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="server_timestamp",hv="__type__",dv="__previous_value__",fv="__local_write_time__";function _f(s){var a,r;return((r=(((a=s==null?void 0:s.mapValue)==null?void 0:a.fields)||{})[hv])==null?void 0:r.stringValue)===uv}function yu(s){const e=s.mapValue.fields[dv];return _f(e)?yu(e):e}function Zo(s){const e=Ri(s.mapValue.fields[fv].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,a,r,l,h,f,g,v,_,T){this.databaseId=e,this.appId=a,this.persistenceKey=r,this.host=l,this.ssl=h,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=v,this.useFetchStreams=_,this.isUsingEmulator=T}}const au="(default)";class Wo{constructor(e,a){this.projectId=e,this.database=a||au}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===au}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="__type__",pb="__max__",qc={mapValue:{}},pv="__vector__",iu="value";function Vi(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?_f(s)?4:gb(s)?9007199254740991:yb(s)?10:11:mt(28295,{value:s})}function Ea(s,e){if(s===e)return!0;const a=Vi(s);if(a!==Vi(e))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Zo(s).isEqual(Zo(e));case 3:return(function(l,h){if(typeof l.timestampValue=="string"&&typeof h.timestampValue=="string"&&l.timestampValue.length===h.timestampValue.length)return l.timestampValue===h.timestampValue;const f=Ri(l.timestampValue),g=Ri(h.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(l,h){return xi(l.bytesValue).isEqual(xi(h.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(l,h){return me(l.geoPointValue.latitude)===me(h.geoPointValue.latitude)&&me(l.geoPointValue.longitude)===me(h.geoPointValue.longitude)})(s,e);case 2:return(function(l,h){if("integerValue"in l&&"integerValue"in h)return me(l.integerValue)===me(h.integerValue);if("doubleValue"in l&&"doubleValue"in h){const f=me(l.doubleValue),g=me(h.doubleValue);return f===g?nu(f)===nu(g):isNaN(f)&&isNaN(g)}return!1})(s,e);case 9:return Ts(s.arrayValue.values||[],e.arrayValue.values||[],Ea);case 10:case 11:return(function(l,h){const f=l.mapValue.fields||{},g=h.mapValue.fields||{};if(Qg(f)!==Qg(g))return!1;for(const v in f)if(f.hasOwnProperty(v)&&(g[v]===void 0||!Ea(f[v],g[v])))return!1;return!0})(s,e);default:return mt(52216,{left:s})}}function tl(s,e){return(s.values||[]).find((a=>Ea(a,e)))!==void 0}function bs(s,e){if(s===e)return 0;const a=Vi(s),r=Vi(e);if(a!==r)return Rt(a,r);switch(a){case 0:case 9007199254740991:return 0;case 1:return Rt(s.booleanValue,e.booleanValue);case 2:return(function(h,f){const g=me(h.integerValue||h.doubleValue),v=me(f.integerValue||f.doubleValue);return g<v?-1:g>v?1:g===v?0:isNaN(g)?isNaN(v)?0:-1:1})(s,e);case 3:return Kg(s.timestampValue,e.timestampValue);case 4:return Kg(Zo(s),Zo(e));case 5:return Qd(s.stringValue,e.stringValue);case 6:return(function(h,f){const g=xi(h),v=xi(f);return g.compareTo(v)})(s.bytesValue,e.bytesValue);case 7:return(function(h,f){const g=h.split("/"),v=f.split("/");for(let _=0;_<g.length&&_<v.length;_++){const T=Rt(g[_],v[_]);if(T!==0)return T}return Rt(g.length,v.length)})(s.referenceValue,e.referenceValue);case 8:return(function(h,f){const g=Rt(me(h.latitude),me(f.latitude));return g!==0?g:Rt(me(h.longitude),me(f.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return Xg(s.arrayValue,e.arrayValue);case 10:return(function(h,f){var O,G,Z,tt;const g=h.fields||{},v=f.fields||{},_=(O=g[iu])==null?void 0:O.arrayValue,T=(G=v[iu])==null?void 0:G.arrayValue,b=Rt(((Z=_==null?void 0:_.values)==null?void 0:Z.length)||0,((tt=T==null?void 0:T.values)==null?void 0:tt.length)||0);return b!==0?b:Xg(_,T)})(s.mapValue,e.mapValue);case 11:return(function(h,f){if(h===qc.mapValue&&f===qc.mapValue)return 0;if(h===qc.mapValue)return 1;if(f===qc.mapValue)return-1;const g=h.fields||{},v=Object.keys(g),_=f.fields||{},T=Object.keys(_);v.sort(),T.sort();for(let b=0;b<v.length&&b<T.length;++b){const O=Qd(v[b],T[b]);if(O!==0)return O;const G=bs(g[v[b]],_[T[b]]);if(G!==0)return G}return Rt(v.length,T.length)})(s.mapValue,e.mapValue);default:throw mt(23264,{he:a})}}function Kg(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Rt(s,e);const a=Ri(s),r=Ri(e),l=Rt(a.seconds,r.seconds);return l!==0?l:Rt(a.nanos,r.nanos)}function Xg(s,e){const a=s.values||[],r=e.values||[];for(let l=0;l<a.length&&l<r.length;++l){const h=bs(a[l],r[l]);if(h)return h}return Rt(a.length,r.length)}function Ss(s){return Yd(s)}function Yd(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(a){const r=Ri(a);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(a){return xi(a).toBase64()})(s.bytesValue):"referenceValue"in s?(function(a){return ut.fromName(a).toString()})(s.referenceValue):"geoPointValue"in s?(function(a){return`geo(${a.latitude},${a.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(a){let r="[",l=!0;for(const h of a.values||[])l?l=!1:r+=",",r+=Yd(h);return r+"]"})(s.arrayValue):"mapValue"in s?(function(a){const r=Object.keys(a.fields||{}).sort();let l="{",h=!0;for(const f of r)h?h=!1:l+=",",l+=`${f}:${Yd(a.fields[f])}`;return l+"}"})(s.mapValue):mt(61005,{value:s})}function Qc(s){switch(Vi(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=yu(s);return e?16+Qc(e):16;case 5:return 2*s.stringValue.length;case 6:return xi(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((l,h)=>l+Qc(h)),0)})(s.arrayValue);case 10:case 11:return(function(r){let l=0;return gr(r.fields,((h,f)=>{l+=h.length+Qc(f)})),l})(s.mapValue);default:throw mt(13486,{value:s})}}function Jg(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Kd(s){return!!s&&"integerValue"in s}function vf(s){return!!s&&"arrayValue"in s}function Zg(s){return!!s&&"nullValue"in s}function Wg(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Yc(s){return!!s&&"mapValue"in s}function yb(s){var a,r;return((r=(((a=s==null?void 0:s.mapValue)==null?void 0:a.fields)||{})[mv])==null?void 0:r.stringValue)===pv}function Po(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return gr(s.mapValue.fields,((a,r)=>e.mapValue.fields[a]=Po(r))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let a=0;a<(s.arrayValue.values||[]).length;++a)e.arrayValue.values[a]=Po(s.arrayValue.values[a]);return e}return{...s}}function gb(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===pb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.value=e}static empty(){return new xn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let a=this.value;for(let r=0;r<e.length-1;++r)if(a=(a.mapValue.fields||{})[e.get(r)],!Yc(a))return null;return a=(a.mapValue.fields||{})[e.lastSegment()],a||null}}set(e,a){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(a)}setAll(e){let a=Ge.emptyPath(),r={},l=[];e.forEach(((f,g)=>{if(!a.isImmediateParentOf(g)){const v=this.getFieldsMap(a);this.applyChanges(v,r,l),r={},l=[],a=g.popLast()}f?r[g.lastSegment()]=Po(f):l.push(g.lastSegment())}));const h=this.getFieldsMap(a);this.applyChanges(h,r,l)}delete(e){const a=this.field(e.popLast());Yc(a)&&a.mapValue.fields&&delete a.mapValue.fields[e.lastSegment()]}isEqual(e){return Ea(this.value,e.value)}getFieldsMap(e){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let r=0;r<e.length;++r){let l=a.mapValue.fields[e.get(r)];Yc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},a.mapValue.fields[e.get(r)]=l),a=l}return a.mapValue.fields}applyChanges(e,a,r){gr(a,((l,h)=>e[l]=h));for(const l of r)delete e[l]}clone(){return new xn(Po(this.value))}}function yv(s){const e=[];return gr(s.fields,((a,r)=>{const l=new Ge([a]);if(Yc(r)){const h=yv(r.mapValue).fields;if(h.length===0)e.push(l);else for(const f of h)e.push(l.child(f))}else e.push(l)})),new Gn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,a,r,l,h,f,g){this.key=e,this.documentType=a,this.version=r,this.readTime=l,this.createTime=h,this.data=f,this.documentState=g}static newInvalidDocument(e){return new Xe(e,0,_t.min(),_t.min(),_t.min(),xn.empty(),0)}static newFoundDocument(e,a,r,l){return new Xe(e,1,a,_t.min(),r,l,0)}static newNoDocument(e,a){return new Xe(e,2,a,_t.min(),_t.min(),xn.empty(),0)}static newUnknownDocument(e,a){return new Xe(e,3,a,_t.min(),_t.min(),xn.empty(),2)}convertToFoundDocument(e,a){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,a){this.position=e,this.inclusive=a}}function t_(s,e,a){let r=0;for(let l=0;l<s.position.length;l++){const h=e[l],f=s.position[l];if(h.field.isKeyField()?r=ut.comparator(ut.fromName(f.referenceValue),a.key):r=bs(f,a.data.field(h.field)),h.dir==="desc"&&(r*=-1),r!==0)break}return r}function e_(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let a=0;a<s.position.length;a++)if(!Ea(s.position[a],e.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,a="asc"){this.field=e,this.dir=a}}function _b(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{}class Ce extends gv{constructor(e,a,r){super(),this.field=e,this.op=a,this.value=r}static create(e,a,r){return e.isKeyField()?a==="in"||a==="not-in"?this.createKeyFieldInFilter(e,a,r):new wb(e,a,r):a==="array-contains"?new bb(e,r):a==="in"?new Sb(e,r):a==="not-in"?new Cb(e,r):a==="array-contains-any"?new Ab(e,r):new Ce(e,a,r)}static createKeyFieldInFilter(e,a,r){return a==="in"?new Eb(e,r):new Tb(e,r)}matches(e){const a=e.data.field(this.field);return this.op==="!="?a!==null&&a.nullValue===void 0&&this.matchesComparison(bs(a,this.value)):a!==null&&Vi(this.value)===Vi(a)&&this.matchesComparison(bs(a,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return mt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends gv{constructor(e,a){super(),this.filters=e,this.op=a,this.Pe=null}static create(e,a){return new Fn(e,a)}matches(e){return _v(this)?this.filters.find((a=>!a.matches(e)))===void 0:this.filters.find((a=>a.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,a)=>e.concat(a.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _v(s){return s.op==="and"}function vv(s){return vb(s)&&_v(s)}function vb(s){for(const e of s.filters)if(e instanceof Fn)return!1;return!0}function Xd(s){if(s instanceof Ce)return s.field.canonicalString()+s.op.toString()+Ss(s.value);if(vv(s))return s.filters.map((e=>Xd(e))).join(",");{const e=s.filters.map((a=>Xd(a))).join(",");return`${s.op}(${e})`}}function wv(s,e){return s instanceof Ce?(function(r,l){return l instanceof Ce&&r.op===l.op&&r.field.isEqual(l.field)&&Ea(r.value,l.value)})(s,e):s instanceof Fn?(function(r,l){return l instanceof Fn&&r.op===l.op&&r.filters.length===l.filters.length?r.filters.reduce(((h,f,g)=>h&&wv(f,l.filters[g])),!0):!1})(s,e):void mt(19439)}function Ev(s){return s instanceof Ce?(function(a){return`${a.field.canonicalString()} ${a.op} ${Ss(a.value)}`})(s):s instanceof Fn?(function(a){return a.op.toString()+" {"+a.getFilters().map(Ev).join(" ,")+"}"})(s):"Filter"}class wb extends Ce{constructor(e,a,r){super(e,a,r),this.key=ut.fromName(r.referenceValue)}matches(e){const a=ut.comparator(e.key,this.key);return this.matchesComparison(a)}}class Eb extends Ce{constructor(e,a){super(e,"in",a),this.keys=Tv("in",a)}matches(e){return this.keys.some((a=>a.isEqual(e.key)))}}class Tb extends Ce{constructor(e,a){super(e,"not-in",a),this.keys=Tv("not-in",a)}matches(e){return!this.keys.some((a=>a.isEqual(e.key)))}}function Tv(s,e){var a;return(((a=e.arrayValue)==null?void 0:a.values)||[]).map((r=>ut.fromName(r.referenceValue)))}class bb extends Ce{constructor(e,a){super(e,"array-contains",a)}matches(e){const a=e.data.field(this.field);return vf(a)&&tl(a.arrayValue,this.value)}}class Sb extends Ce{constructor(e,a){super(e,"in",a)}matches(e){const a=e.data.field(this.field);return a!==null&&tl(this.value.arrayValue,a)}}class Cb extends Ce{constructor(e,a){super(e,"not-in",a)}matches(e){if(tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=e.data.field(this.field);return a!==null&&a.nullValue===void 0&&!tl(this.value.arrayValue,a)}}class Ab extends Ce{constructor(e,a){super(e,"array-contains-any",a)}matches(e){const a=e.data.field(this.field);return!(!vf(a)||!a.arrayValue.values)&&a.arrayValue.values.some((r=>tl(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,a=null,r=[],l=[],h=null,f=null,g=null){this.path=e,this.collectionGroup=a,this.orderBy=r,this.filters=l,this.limit=h,this.startAt=f,this.endAt=g,this.Te=null}}function n_(s,e=null,a=[],r=[],l=null,h=null,f=null){return new Nb(s,e,a,r,l,h,f)}function wf(s){const e=Et(s);if(e.Te===null){let a=e.path.canonicalString();e.collectionGroup!==null&&(a+="|cg:"+e.collectionGroup),a+="|f:",a+=e.filters.map((r=>Xd(r))).join(","),a+="|ob:",a+=e.orderBy.map((r=>(function(h){return h.field.canonicalString()+h.dir})(r))).join(","),pu(e.limit)||(a+="|l:",a+=e.limit),e.startAt&&(a+="|lb:",a+=e.startAt.inclusive?"b:":"a:",a+=e.startAt.position.map((r=>Ss(r))).join(",")),e.endAt&&(a+="|ub:",a+=e.endAt.inclusive?"a:":"b:",a+=e.endAt.position.map((r=>Ss(r))).join(",")),e.Te=a}return e.Te}function Ef(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let a=0;a<s.orderBy.length;a++)if(!_b(s.orderBy[a],e.orderBy[a]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let a=0;a<s.filters.length;a++)if(!wv(s.filters[a],e.filters[a]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!e_(s.startAt,e.startAt)&&e_(s.endAt,e.endAt)}function Jd(s){return ut.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,a=null,r=[],l=[],h=null,f="F",g=null,v=null){this.path=e,this.collectionGroup=a,this.explicitOrderBy=r,this.filters=l,this.limit=h,this.limitType=f,this.startAt=g,this.endAt=v,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Db(s,e,a,r,l,h,f,g){return new xs(s,e,a,r,l,h,f,g)}function bv(s){return new xs(s)}function a_(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Sv(s){return s.collectionGroup!==null}function Go(s){const e=Et(s);if(e.Ie===null){e.Ie=[];const a=new Set;for(const h of e.explicitOrderBy)e.Ie.push(h),a.add(h.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new xe(Ge.comparator);return f.filters.forEach((v=>{v.getFlattenedFilters().forEach((_=>{_.isInequality()&&(g=g.add(_.field))}))})),g})(e).forEach((h=>{a.has(h.canonicalString())||h.isKeyField()||e.Ie.push(new el(h,r))})),a.has(Ge.keyField().canonicalString())||e.Ie.push(new el(Ge.keyField(),r))}return e.Ie}function ya(s){const e=Et(s);return e.Ee||(e.Ee=Ib(e,Go(s))),e.Ee}function Ib(s,e){if(s.limitType==="F")return n_(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((l=>{const h=l.dir==="desc"?"asc":"desc";return new el(l.field,h)}));const a=s.endAt?new ru(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new ru(s.startAt.position,s.startAt.inclusive):null;return n_(s.path,s.collectionGroup,e,s.filters,s.limit,a,r)}}function Zd(s,e){const a=s.filters.concat([e]);return new xs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),a,s.limit,s.limitType,s.startAt,s.endAt)}function Wd(s,e,a){return new xs(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,a,s.startAt,s.endAt)}function gu(s,e){return Ef(ya(s),ya(e))&&s.limitType===e.limitType}function Cv(s){return`${wf(ya(s))}|lt:${s.limitType}`}function fs(s){return`Query(target=${(function(a){let r=a.path.canonicalString();return a.collectionGroup!==null&&(r+=" collectionGroup="+a.collectionGroup),a.filters.length>0&&(r+=`, filters: [${a.filters.map((l=>Ev(l))).join(", ")}]`),pu(a.limit)||(r+=", limit: "+a.limit),a.orderBy.length>0&&(r+=`, orderBy: [${a.orderBy.map((l=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(l))).join(", ")}]`),a.startAt&&(r+=", startAt: ",r+=a.startAt.inclusive?"b:":"a:",r+=a.startAt.position.map((l=>Ss(l))).join(",")),a.endAt&&(r+=", endAt: ",r+=a.endAt.inclusive?"a:":"b:",r+=a.endAt.position.map((l=>Ss(l))).join(",")),`Target(${r})`})(ya(s))}; limitType=${s.limitType})`}function _u(s,e){return e.isFoundDocument()&&(function(r,l){const h=l.key.path;return r.collectionGroup!==null?l.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(h):ut.isDocumentKey(r.path)?r.path.isEqual(h):r.path.isImmediateParentOf(h)})(s,e)&&(function(r,l){for(const h of Go(r))if(!h.field.isKeyField()&&l.data.field(h.field)===null)return!1;return!0})(s,e)&&(function(r,l){for(const h of r.filters)if(!h.matches(l))return!1;return!0})(s,e)&&(function(r,l){return!(r.startAt&&!(function(f,g,v){const _=t_(f,g,v);return f.inclusive?_<=0:_<0})(r.startAt,Go(r),l)||r.endAt&&!(function(f,g,v){const _=t_(f,g,v);return f.inclusive?_>=0:_>0})(r.endAt,Go(r),l))})(s,e)}function Rb(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function Av(s){return(e,a)=>{let r=!1;for(const l of Go(s)){const h=xb(l,e,a);if(h!==0)return h;r=r||l.field.isKeyField()}return 0}}function xb(s,e,a){const r=s.field.isKeyField()?ut.comparator(e.key,a.key):(function(h,f,g){const v=f.data.field(h),_=g.data.field(h);return v!==null&&_!==null?bs(v,_):mt(42886)})(s.field,e,a);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return mt(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,a){this.mapKeyFn=e,this.equalsFn=a,this.inner={},this.innerSize=0}get(e){const a=this.mapKeyFn(e),r=this.inner[a];if(r!==void 0){for(const[l,h]of r)if(this.equalsFn(l,e))return h}}has(e){return this.get(e)!==void 0}set(e,a){const r=this.mapKeyFn(e),l=this.inner[r];if(l===void 0)return this.inner[r]=[[e,a]],void this.innerSize++;for(let h=0;h<l.length;h++)if(this.equalsFn(l[h][0],e))return void(l[h]=[e,a]);l.push([e,a]),this.innerSize++}delete(e){const a=this.mapKeyFn(e),r=this.inner[a];if(r===void 0)return!1;for(let l=0;l<r.length;l++)if(this.equalsFn(r[l][0],e))return r.length===1?delete this.inner[a]:r.splice(l,1),this.innerSize--,!0;return!1}forEach(e){gr(this.inner,((a,r)=>{for(const[l,h]of r)e(l,h)}))}isEmpty(){return lv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new se(ut.comparator);function Ha(){return Vb}const Nv=new se(ut.comparator);function $o(...s){let e=Nv;for(const a of s)e=e.insert(a.key,a);return e}function Dv(s){let e=Nv;return s.forEach(((a,r)=>e=e.insert(a,r.overlayedDocument))),e}function fr(){return Fo()}function Iv(){return Fo()}function Fo(){return new _r((s=>s.toString()),((s,e)=>s.isEqual(e)))}const Mb=new se(ut.comparator),Ob=new xe(ut.comparator);function xt(...s){let e=Ob;for(const a of s)e=e.add(a);return e}const Lb=new xe(Rt);function jb(){return Lb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function Rv(s){return{integerValue:""+s}}function kb(s,e){return ub(e)?Rv(e):Tf(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this._=void 0}}function zb(s,e,a){return s instanceof su?(function(l,h){const f={fields:{[hv]:{stringValue:uv},[fv]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return h&&_f(h)&&(h=yu(h)),h&&(f.fields[dv]=h),{mapValue:f}})(a,e):s instanceof nl?Vv(s,e):s instanceof al?Mv(s,e):(function(l,h){const f=xv(l,h),g=i_(f)+i_(l.Ae);return Kd(f)&&Kd(l.Ae)?Rv(g):Tf(l.serializer,g)})(s,e)}function Ub(s,e,a){return s instanceof nl?Vv(s,e):s instanceof al?Mv(s,e):a}function xv(s,e){return s instanceof ou?(function(r){return Kd(r)||(function(h){return!!h&&"doubleValue"in h})(r)})(e)?e:{integerValue:0}:null}class su extends vu{}class nl extends vu{constructor(e){super(),this.elements=e}}function Vv(s,e){const a=Ov(e);for(const r of s.elements)a.some((l=>Ea(l,r)))||a.push(r);return{arrayValue:{values:a}}}class al extends vu{constructor(e){super(),this.elements=e}}function Mv(s,e){let a=Ov(e);for(const r of s.elements)a=a.filter((l=>!Ea(l,r)));return{arrayValue:{values:a}}}class ou extends vu{constructor(e,a){super(),this.serializer=e,this.Ae=a}}function i_(s){return me(s.integerValue||s.doubleValue)}function Ov(s){return vf(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function qb(s,e){return s.field.isEqual(e.field)&&(function(r,l){return r instanceof nl&&l instanceof nl||r instanceof al&&l instanceof al?Ts(r.elements,l.elements,Ea):r instanceof ou&&l instanceof ou?Ea(r.Ae,l.Ae):r instanceof su&&l instanceof su})(s.transform,e.transform)}class $b{constructor(e,a){this.version=e,this.transformResults=a}}class ga{constructor(e,a){this.updateTime=e,this.exists=a}static none(){return new ga}static exists(e){return new ga(void 0,e)}static updateTime(e){return new ga(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kc(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class wu{}function Lv(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new bf(s.key,ga.none()):new rl(s.key,s.data,ga.none());{const a=s.data,r=xn.empty();let l=new xe(Ge.comparator);for(let h of e.fields)if(!l.has(h)){let f=a.field(h);f===null&&h.length>1&&(h=h.popLast(),f=a.field(h)),f===null?r.delete(h):r.set(h,f),l=l.add(h)}return new vr(s.key,r,new Gn(l.toArray()),ga.none())}}function Bb(s,e,a){s instanceof rl?(function(l,h,f){const g=l.value.clone(),v=s_(l.fieldTransforms,h,f.transformResults);g.setAll(v),h.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(s,e,a):s instanceof vr?(function(l,h,f){if(!Kc(l.precondition,h))return void h.convertToUnknownDocument(f.version);const g=s_(l.fieldTransforms,h,f.transformResults),v=h.data;v.setAll(jv(l)),v.setAll(g),h.convertToFoundDocument(f.version,v).setHasCommittedMutations()})(s,e,a):(function(l,h,f){h.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,a)}function Qo(s,e,a,r){return s instanceof rl?(function(h,f,g,v){if(!Kc(h.precondition,f))return g;const _=h.value.clone(),T=o_(h.fieldTransforms,v,f);return _.setAll(T),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null})(s,e,a,r):s instanceof vr?(function(h,f,g,v){if(!Kc(h.precondition,f))return g;const _=o_(h.fieldTransforms,v,f),T=f.data;return T.setAll(jv(h)),T.setAll(_),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),g===null?null:g.unionWith(h.fieldMask.fields).unionWith(h.fieldTransforms.map((b=>b.field)))})(s,e,a,r):(function(h,f,g){return Kc(h.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g})(s,e,a)}function Hb(s,e){let a=null;for(const r of s.fieldTransforms){const l=e.data.field(r.field),h=xv(r.transform,l||null);h!=null&&(a===null&&(a=xn.empty()),a.set(r.field,h))}return a||null}function r_(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(r,l){return r===void 0&&l===void 0||!(!r||!l)&&Ts(r,l,((h,f)=>qb(h,f)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class rl extends wu{constructor(e,a,r,l=[]){super(),this.key=e,this.value=a,this.precondition=r,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class vr extends wu{constructor(e,a,r,l,h=[]){super(),this.key=e,this.data=a,this.fieldMask=r,this.precondition=l,this.fieldTransforms=h,this.type=1}getFieldMask(){return this.fieldMask}}function jv(s){const e=new Map;return s.fieldMask.fields.forEach((a=>{if(!a.isEmpty()){const r=s.data.field(a);e.set(a,r)}})),e}function s_(s,e,a){const r=new Map;Bt(s.length===a.length,32656,{Re:a.length,Ve:s.length});for(let l=0;l<a.length;l++){const h=s[l],f=h.transform,g=e.data.field(h.field);r.set(h.field,Ub(f,g,a[l]))}return r}function o_(s,e,a){const r=new Map;for(const l of s){const h=l.transform,f=a.data.field(l.field);r.set(l.field,zb(h,f,e))}return r}class bf extends wu{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pb extends wu{constructor(e,a){super(),this.key=e,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,a,r,l){this.batchId=e,this.localWriteTime=a,this.baseMutations=r,this.mutations=l}applyToRemoteDocument(e,a){const r=a.mutationResults;for(let l=0;l<this.mutations.length;l++){const h=this.mutations[l];h.key.isEqual(e.key)&&Bb(h,e,r[l])}}applyToLocalView(e,a){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(a=Qo(r,e,a,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(a=Qo(r,e,a,this.localWriteTime));return a}applyToLocalDocumentSet(e,a){const r=Iv();return this.mutations.forEach((l=>{const h=e.get(l.key),f=h.overlayedDocument;let g=this.applyToLocalView(f,h.mutatedFields);g=a.has(l.key)?null:g;const v=Lv(f,g);v!==null&&r.set(l.key,v),f.isValidDocument()||f.convertToNoDocument(_t.min())})),r}keys(){return this.mutations.reduce(((e,a)=>e.add(a.key)),xt())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,((a,r)=>r_(a,r)))&&Ts(this.baseMutations,e.baseMutations,((a,r)=>r_(a,r)))}}class Sf{constructor(e,a,r,l){this.batch=e,this.commitVersion=a,this.mutationResults=r,this.docVersions=l}static from(e,a,r){Bt(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let l=(function(){return Mb})();const h=e.mutations;for(let f=0;f<h.length;f++)l=l.insert(h[f].key,r[f].version);return new Sf(e,a,r,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,a){this.largestBatchId=e,this.mutation=a}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,a){this.count=e,this.unchangedNames=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Ot;function Yb(s){switch(s){case K.OK:return mt(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return mt(15467,{code:s})}}function kv(s){if(s===void 0)return Ba("GRPC error has no .code"),K.UNKNOWN;switch(s){case Se.OK:return K.OK;case Se.CANCELLED:return K.CANCELLED;case Se.UNKNOWN:return K.UNKNOWN;case Se.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Se.INTERNAL:return K.INTERNAL;case Se.UNAVAILABLE:return K.UNAVAILABLE;case Se.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Se.NOT_FOUND:return K.NOT_FOUND;case Se.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Se.ABORTED:return K.ABORTED;case Se.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Se.DATA_LOSS:return K.DATA_LOSS;default:return mt(39323,{code:s})}}(Ot=Se||(Se={}))[Ot.OK=0]="OK",Ot[Ot.CANCELLED=1]="CANCELLED",Ot[Ot.UNKNOWN=2]="UNKNOWN",Ot[Ot.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ot[Ot.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ot[Ot.NOT_FOUND=5]="NOT_FOUND",Ot[Ot.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ot[Ot.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ot[Ot.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ot[Ot.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ot[Ot.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ot[Ot.ABORTED=10]="ABORTED",Ot[Ot.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ot[Ot.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ot[Ot.INTERNAL=13]="INTERNAL",Ot[Ot.UNAVAILABLE=14]="UNAVAILABLE",Ot[Ot.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=new Ai([4294967295,4294967295],0);function l_(s){const e=Kb().encode(s),a=new J_;return a.update(e),new Uint8Array(a.digest())}function c_(s){const e=new DataView(s.buffer),a=e.getUint32(0,!0),r=e.getUint32(4,!0),l=e.getUint32(8,!0),h=e.getUint32(12,!0);return[new Ai([a,r],0),new Ai([l,h],0)]}class Cf{constructor(e,a,r){if(this.bitmap=e,this.padding=a,this.hashCount=r,a<0||a>=8)throw new Bo(`Invalid padding: ${a}`);if(r<0)throw new Bo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bo(`Invalid hash count: ${r}`);if(e.length===0&&a!==0)throw new Bo(`Invalid padding when bitmap length is 0: ${a}`);this.ge=8*e.length-a,this.pe=Ai.fromNumber(this.ge)}ye(e,a,r){let l=e.add(a.multiply(Ai.fromNumber(r)));return l.compare(Xb)===1&&(l=new Ai([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const a=l_(e),[r,l]=c_(a);for(let h=0;h<this.hashCount;h++){const f=this.ye(r,l,h);if(!this.we(f))return!1}return!0}static create(e,a,r){const l=e%8==0?0:8-e%8,h=new Uint8Array(Math.ceil(e/8)),f=new Cf(h,l,a);return r.forEach((g=>f.insert(g))),f}insert(e){if(this.ge===0)return;const a=l_(e),[r,l]=c_(a);for(let h=0;h<this.hashCount;h++){const f=this.ye(r,l,h);this.Se(f)}}Se(e){const a=Math.floor(e/8),r=e%8;this.bitmap[a]|=1<<r}}class Bo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,a,r,l,h){this.snapshotVersion=e,this.targetChanges=a,this.targetMismatches=r,this.documentUpdates=l,this.resolvedLimboDocuments=h}static createSynthesizedRemoteEventForCurrentChange(e,a,r){const l=new Map;return l.set(e,sl.createSynthesizedTargetChangeForCurrentChange(e,a,r)),new Eu(_t.min(),l,new se(Rt),Ha(),xt())}}class sl{constructor(e,a,r,l,h){this.resumeToken=e,this.current=a,this.addedDocuments=r,this.modifiedDocuments=l,this.removedDocuments=h}static createSynthesizedTargetChangeForCurrentChange(e,a,r){return new sl(r,a,xt(),xt(),xt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,a,r,l){this.be=e,this.removedTargetIds=a,this.key=r,this.De=l}}class zv{constructor(e,a){this.targetId=e,this.Ce=a}}class Uv{constructor(e,a,r=Fe.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=a,this.resumeToken=r,this.cause=l}}class u_{constructor(){this.ve=0,this.Fe=h_(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xt(),a=xt(),r=xt();return this.Fe.forEach(((l,h)=>{switch(h){case 0:e=e.add(l);break;case 2:a=a.add(l);break;case 1:r=r.add(l);break;default:mt(38017,{changeType:h})}})),new sl(this.Me,this.xe,e,a,r)}qe(){this.Oe=!1,this.Fe=h_()}Qe(e,a){this.Oe=!0,this.Fe=this.Fe.insert(e,a)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Bt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Jb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ha(),this.Je=$c(),this.He=$c(),this.Ye=new se(Rt)}Ze(e){for(const a of e.be)e.De&&e.De.isFoundDocument()?this.Xe(a,e.De):this.et(a,e.key,e.De);for(const a of e.removedTargetIds)this.et(a,e.key,e.De)}tt(e){this.forEachTarget(e,(a=>{const r=this.nt(a);switch(e.state){case 0:this.rt(a)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(a);break;case 3:this.rt(a)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(a)&&(this.it(a),r.Le(e.resumeToken));break;default:mt(56790,{state:e.state})}}))}forEachTarget(e,a){e.targetIds.length>0?e.targetIds.forEach(a):this.ze.forEach(((r,l)=>{this.rt(l)&&a(l)}))}st(e){const a=e.targetId,r=e.Ce.count,l=this.ot(a);if(l){const h=l.target;if(Jd(h))if(r===0){const f=new ut(h.path);this.et(a,f,Xe.newNoDocument(f,_t.min()))}else Bt(r===1,20013,{expectedCount:r});else{const f=this._t(a);if(f!==r){const g=this.ut(e),v=g?this.ct(g,e,f):1;if(v!==0){this.it(a);const _=v===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(a,_)}}}}}ut(e){const a=e.Ce.unchangedNames;if(!a||!a.bits)return null;const{bits:{bitmap:r="",padding:l=0},hashCount:h=0}=a;let f,g;try{f=xi(r).toUint8Array()}catch(v){if(v instanceof cv)return Es("Decoding the base64 bloom filter in existence filter failed ("+v.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw v}try{g=new Cf(f,l,h)}catch(v){return Es(v instanceof Bo?"BloomFilter error: ":"Applying bloom filter failed: ",v),null}return g.ge===0?null:g}ct(e,a,r){return a.Ce.count===r-this.Pt(e,a.targetId)?0:2}Pt(e,a){const r=this.Ge.getRemoteKeysForTarget(a);let l=0;return r.forEach((h=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${h.path.canonicalString()}`;e.mightContain(g)||(this.et(a,h,null),l++)})),l}Tt(e){const a=new Map;this.ze.forEach(((h,f)=>{const g=this.ot(f);if(g){if(h.current&&Jd(g.target)){const v=new ut(g.target.path);this.It(v).has(f)||this.Et(f,v)||this.et(f,v,Xe.newNoDocument(v,e))}h.Be&&(a.set(f,h.ke()),h.qe())}}));let r=xt();this.He.forEach(((h,f)=>{let g=!0;f.forEachWhile((v=>{const _=this.ot(v);return!_||_.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(r=r.add(h))})),this.je.forEach(((h,f)=>f.setReadTime(e)));const l=new Eu(e,a,this.Ye,this.je,r);return this.je=Ha(),this.Je=$c(),this.He=$c(),this.Ye=new se(Rt),l}Xe(e,a){if(!this.rt(e))return;const r=this.Et(e,a.key)?2:0;this.nt(e).Qe(a.key,r),this.je=this.je.insert(a.key,a),this.Je=this.Je.insert(a.key,this.It(a.key).add(e)),this.He=this.He.insert(a.key,this.dt(a.key).add(e))}et(e,a,r){if(!this.rt(e))return;const l=this.nt(e);this.Et(e,a)?l.Qe(a,1):l.$e(a),this.He=this.He.insert(a,this.dt(a).delete(e)),this.He=this.He.insert(a,this.dt(a).add(e)),r&&(this.je=this.je.insert(a,r))}removeTarget(e){this.ze.delete(e)}_t(e){const a=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+a.addedDocuments.size-a.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let a=this.ze.get(e);return a||(a=new u_,this.ze.set(e,a)),a}dt(e){let a=this.He.get(e);return a||(a=new xe(Rt),this.He=this.He.insert(e,a)),a}It(e){let a=this.Je.get(e);return a||(a=new xe(Rt),this.Je=this.Je.insert(e,a)),a}rt(e){const a=this.ot(e)!==null;return a||it("WatchChangeAggregator","Detected inactive target",e),a}ot(e){const a=this.ze.get(e);return a&&a.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new u_),this.Ge.getRemoteKeysForTarget(e).forEach((a=>{this.et(e,a,null)}))}Et(e,a){return this.Ge.getRemoteKeysForTarget(e).has(a)}}function $c(){return new se(ut.comparator)}function h_(){return new se(ut.comparator)}const Zb={asc:"ASCENDING",desc:"DESCENDING"},Wb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t2={and:"AND",or:"OR"};class e2{constructor(e,a){this.databaseId=e,this.useProto3Json=a}}function tf(s,e){return s.useProto3Json||pu(e)?e:{value:e}}function lu(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qv(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function n2(s,e){return lu(s,e.toTimestamp())}function _a(s){return Bt(!!s,49232),_t.fromTimestamp((function(a){const r=Ri(a);return new ee(r.seconds,r.nanos)})(s))}function Af(s,e){return ef(s,e).canonicalString()}function ef(s,e){const a=(function(l){return new Zt(["projects",l.projectId,"databases",l.database])})(s).child("documents");return e===void 0?a:a.child(e)}function $v(s){const e=Zt.fromString(s);return Bt(Fv(e),10190,{key:e.toString()}),e}function nf(s,e){return Af(s.databaseId,e.path)}function kd(s,e){const a=$v(e);if(a.get(1)!==s.databaseId.projectId)throw new at(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+s.databaseId.projectId);if(a.get(3)!==s.databaseId.database)throw new at(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+s.databaseId.database);return new ut(Hv(a))}function Bv(s,e){return Af(s.databaseId,e)}function a2(s){const e=$v(s);return e.length===4?Zt.emptyPath():Hv(e)}function af(s){return new Zt(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Hv(s){return Bt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function d_(s,e,a){return{name:nf(s,e),fields:a.value.mapValue.fields}}function i2(s,e){let a;if("targetChange"in e){e.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:mt(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],h=(function(_,T){return _.useProto3Json?(Bt(T===void 0||typeof T=="string",58123),Fe.fromBase64String(T||"")):(Bt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Fe.fromUint8Array(T||new Uint8Array))})(s,e.targetChange.resumeToken),f=e.targetChange.cause,g=f&&(function(_){const T=_.code===void 0?K.UNKNOWN:kv(_.code);return new at(T,_.message||"")})(f);a=new Uv(r,l,h,g||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const l=kd(s,r.document.name),h=_a(r.document.updateTime),f=r.document.createTime?_a(r.document.createTime):_t.min(),g=new xn({mapValue:{fields:r.document.fields}}),v=Xe.newFoundDocument(l,h,f,g),_=r.targetIds||[],T=r.removedTargetIds||[];a=new Xc(_,T,v.key,v)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const l=kd(s,r.document),h=r.readTime?_a(r.readTime):_t.min(),f=Xe.newNoDocument(l,h),g=r.removedTargetIds||[];a=new Xc([],g,f.key,f)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const l=kd(s,r.document),h=r.removedTargetIds||[];a=new Xc([],h,l,null)}else{if(!("filter"in e))return mt(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:l=0,unchangedNames:h}=r,f=new Qb(l,h),g=r.targetId;a=new zv(g,f)}}return a}function r2(s,e){let a;if(e instanceof rl)a={update:d_(s,e.key,e.value)};else if(e instanceof bf)a={delete:nf(s,e.key)};else if(e instanceof vr)a={update:d_(s,e.key,e.data),updateMask:m2(e.fieldMask)};else{if(!(e instanceof Pb))return mt(16599,{Vt:e.type});a={verify:nf(s,e.key)}}return e.fieldTransforms.length>0&&(a.updateTransforms=e.fieldTransforms.map((r=>(function(h,f){const g=f.transform;if(g instanceof su)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof nl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof al)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof ou)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw mt(20930,{transform:f.transform})})(0,r)))),e.precondition.isNone||(a.currentDocument=(function(l,h){return h.updateTime!==void 0?{updateTime:n2(l,h.updateTime)}:h.exists!==void 0?{exists:h.exists}:mt(27497)})(s,e.precondition)),a}function s2(s,e){return s&&s.length>0?(Bt(e!==void 0,14353),s.map((a=>(function(l,h){let f=l.updateTime?_a(l.updateTime):_a(h);return f.isEqual(_t.min())&&(f=_a(h)),new $b(f,l.transformResults||[])})(a,e)))):[]}function o2(s,e){return{documents:[Bv(s,e.path)]}}function l2(s,e){const a={structuredQuery:{}},r=e.path;let l;e.collectionGroup!==null?(l=r,a.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=r.popLast(),a.structuredQuery.from=[{collectionId:r.lastSegment()}]),a.parent=Bv(s,l);const h=(function(_){if(_.length!==0)return Gv(Fn.create(_,"and"))})(e.filters);h&&(a.structuredQuery.where=h);const f=(function(_){if(_.length!==0)return _.map((T=>(function(O){return{field:ms(O.field),direction:h2(O.dir)}})(T)))})(e.orderBy);f&&(a.structuredQuery.orderBy=f);const g=tf(s,e.limit);return g!==null&&(a.structuredQuery.limit=g),e.startAt&&(a.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(a.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{ft:a,parent:l}}function c2(s){let e=a2(s.parent);const a=s.structuredQuery,r=a.from?a.from.length:0;let l=null;if(r>0){Bt(r===1,65062);const T=a.from[0];T.allDescendants?l=T.collectionId:e=e.child(T.collectionId)}let h=[];a.where&&(h=(function(b){const O=Pv(b);return O instanceof Fn&&vv(O)?O.getFilters():[O]})(a.where));let f=[];a.orderBy&&(f=(function(b){return b.map((O=>(function(Z){return new el(ps(Z.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(O)))})(a.orderBy));let g=null;a.limit&&(g=(function(b){let O;return O=typeof b=="object"?b.value:b,pu(O)?null:O})(a.limit));let v=null;a.startAt&&(v=(function(b){const O=!!b.before,G=b.values||[];return new ru(G,O)})(a.startAt));let _=null;return a.endAt&&(_=(function(b){const O=!b.before,G=b.values||[];return new ru(G,O)})(a.endAt)),Db(e,l,f,h,g,"F",v,_)}function u2(s,e){const a=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mt(28987,{purpose:l})}})(e.purpose);return a==null?null:{"goog-listen-tags":a}}function Pv(s){return s.unaryFilter!==void 0?(function(a){switch(a.unaryFilter.op){case"IS_NAN":const r=ps(a.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const l=ps(a.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const h=ps(a.unaryFilter.field);return Ce.create(h,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=ps(a.unaryFilter.field);return Ce.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mt(61313);default:return mt(60726)}})(s):s.fieldFilter!==void 0?(function(a){return Ce.create(ps(a.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mt(58110);default:return mt(50506)}})(a.fieldFilter.op),a.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(a){return Fn.create(a.compositeFilter.filters.map((r=>Pv(r))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return mt(1026)}})(a.compositeFilter.op))})(s):mt(30097,{filter:s})}function h2(s){return Zb[s]}function d2(s){return Wb[s]}function f2(s){return t2[s]}function ms(s){return{fieldPath:s.canonicalString()}}function ps(s){return Ge.fromServerFormat(s.fieldPath)}function Gv(s){return s instanceof Ce?(function(a){if(a.op==="=="){if(Wg(a.value))return{unaryFilter:{field:ms(a.field),op:"IS_NAN"}};if(Zg(a.value))return{unaryFilter:{field:ms(a.field),op:"IS_NULL"}}}else if(a.op==="!="){if(Wg(a.value))return{unaryFilter:{field:ms(a.field),op:"IS_NOT_NAN"}};if(Zg(a.value))return{unaryFilter:{field:ms(a.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(a.field),op:d2(a.op),value:a.value}}})(s):s instanceof Fn?(function(a){const r=a.getFilters().map((l=>Gv(l)));return r.length===1?r[0]:{compositeFilter:{op:f2(a.op),filters:r}}})(s):mt(54877,{filter:s})}function m2(s){const e=[];return s.fields.forEach((a=>e.push(a.canonicalString()))),{fieldPaths:e}}function Fv(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,a,r,l,h=_t.min(),f=_t.min(),g=Fe.EMPTY_BYTE_STRING,v=null){this.target=e,this.targetId=a,this.purpose=r,this.sequenceNumber=l,this.snapshotVersion=h,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=v}withSequenceNumber(e){return new bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,a){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.yt=e}}function y2(s){const e=c2({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this.Cn=new _2}addToCollectionParentIndex(e,a){return this.Cn.add(a),X.resolve()}getCollectionParents(e,a){return X.resolve(this.Cn.getEntries(a))}addFieldIndex(e,a){return X.resolve()}deleteFieldIndex(e,a){return X.resolve()}deleteAllFieldIndexes(e){return X.resolve()}createTargetIndexes(e,a){return X.resolve()}getDocumentsMatchingTarget(e,a){return X.resolve(null)}getIndexType(e,a){return X.resolve(0)}getFieldIndexes(e,a){return X.resolve([])}getNextCollectionGroupToUpdate(e){return X.resolve(null)}getMinOffset(e,a){return X.resolve(Ii.min())}getMinOffsetFromCollectionGroup(e,a){return X.resolve(Ii.min())}updateCollectionGroup(e,a,r){return X.resolve()}updateIndexEntries(e,a){return X.resolve()}}class _2{constructor(){this.index={}}add(e){const a=e.lastSegment(),r=e.popLast(),l=this.index[a]||new xe(Zt.comparator),h=!l.has(r);return this.index[a]=l.add(r),h}has(e){const a=e.lastSegment(),r=e.popLast(),l=this.index[a];return l&&l.has(r)}getEntries(e){return(this.index[e]||new xe(Zt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,a,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=a,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(Qv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Cs(0)}static cr(){return new Cs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="LruGarbageCollector",v2=1048576;function p_([s,e],[a,r]){const l=Rt(s,a);return l===0?Rt(e,r):l}class w2{constructor(e){this.Ir=e,this.buffer=new xe(p_),this.Er=0}dr(){return++this.Er}Ar(e){const a=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(a);else{const r=this.buffer.last();p_(a,r)<0&&(this.buffer=this.buffer.delete(r).add(a))}}get maxValue(){return this.buffer.last()[0]}}class E2{constructor(e,a,r){this.garbageCollector=e,this.asyncQueue=a,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){it(m_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(a){Rs(a)?it(m_,"Ignoring IndexedDB error during garbage collection: ",a):await Is(a)}await this.Vr(3e5)}))}}class T2{constructor(e,a){this.mr=e,this.params=a}calculateTargetCount(e,a){return this.mr.gr(e).next((r=>Math.floor(a/100*r)))}nthSequenceNumber(e,a){if(a===0)return X.resolve(mu.ce);const r=new w2(a);return this.mr.forEachTarget(e,(l=>r.Ar(l.sequenceNumber))).next((()=>this.mr.pr(e,(l=>r.Ar(l))))).next((()=>r.maxValue))}removeTargets(e,a,r){return this.mr.removeTargets(e,a,r)}removeOrphanedDocuments(e,a){return this.mr.removeOrphanedDocuments(e,a)}collect(e,a){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(f_)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),f_):this.yr(e,a)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,a){let r,l,h,f,g,v,_;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),l=this.params.maximumSequenceNumbersToCollect):l=b,f=Date.now(),this.nthSequenceNumber(e,l)))).next((b=>(r=b,g=Date.now(),this.removeTargets(e,r,a)))).next((b=>(h=b,v=Date.now(),this.removeOrphanedDocuments(e,r)))).next((b=>(_=Date.now(),ds()<=Lt.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${l} in `+(g-f)+`ms
	Removed ${h} targets in `+(v-g)+`ms
	Removed ${b} documents in `+(_-v)+`ms
Total Duration: ${_-T}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:h,documentsRemoved:b}))))}}function b2(s,e){return new T2(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.changes=new _r((e=>e.toString()),((e,a)=>e.isEqual(a))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,a){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(a))}getEntry(e,a){this.assertNotApplied();const r=this.changes.get(a);return r!==void 0?X.resolve(r):this.getFromCache(e,a)}getEntries(e,a){return this.getAllFromCache(e,a)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,a){this.overlayedDocument=e,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e,a,r,l){this.remoteDocumentCache=e,this.mutationQueue=a,this.documentOverlayCache=r,this.indexManager=l}getDocument(e,a){let r=null;return this.documentOverlayCache.getOverlay(e,a).next((l=>(r=l,this.remoteDocumentCache.getEntry(e,a)))).next((l=>(r!==null&&Qo(r.mutation,l,Gn.empty(),ee.now()),l)))}getDocuments(e,a){return this.remoteDocumentCache.getEntries(e,a).next((r=>this.getLocalViewOfDocuments(e,r,xt()).next((()=>r))))}getLocalViewOfDocuments(e,a,r=xt()){const l=fr();return this.populateOverlays(e,l,a).next((()=>this.computeViews(e,a,l,r).next((h=>{let f=$o();return h.forEach(((g,v)=>{f=f.insert(g,v.overlayedDocument)})),f}))))}getOverlayedDocuments(e,a){const r=fr();return this.populateOverlays(e,r,a).next((()=>this.computeViews(e,a,r,xt())))}populateOverlays(e,a,r){const l=[];return r.forEach((h=>{a.has(h)||l.push(h)})),this.documentOverlayCache.getOverlays(e,l).next((h=>{h.forEach(((f,g)=>{a.set(f,g)}))}))}computeViews(e,a,r,l){let h=Ha();const f=Fo(),g=(function(){return Fo()})();return a.forEach(((v,_)=>{const T=r.get(_.key);l.has(_.key)&&(T===void 0||T.mutation instanceof vr)?h=h.insert(_.key,_):T!==void 0?(f.set(_.key,T.mutation.getFieldMask()),Qo(T.mutation,_,T.mutation.getFieldMask(),ee.now())):f.set(_.key,Gn.empty())})),this.recalculateAndSaveOverlays(e,h).next((v=>(v.forEach(((_,T)=>f.set(_,T))),a.forEach(((_,T)=>g.set(_,new C2(T,f.get(_)??null)))),g)))}recalculateAndSaveOverlays(e,a){const r=Fo();let l=new se(((f,g)=>f-g)),h=xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,a).next((f=>{for(const g of f)g.keys().forEach((v=>{const _=a.get(v);if(_===null)return;let T=r.get(v)||Gn.empty();T=g.applyToLocalView(_,T),r.set(v,T);const b=(l.get(g.batchId)||xt()).add(v);l=l.insert(g.batchId,b)}))})).next((()=>{const f=[],g=l.getReverseIterator();for(;g.hasNext();){const v=g.getNext(),_=v.key,T=v.value,b=Iv();T.forEach((O=>{if(!h.has(O)){const G=Lv(a.get(O),r.get(O));G!==null&&b.set(O,G),h=h.add(O)}})),f.push(this.documentOverlayCache.saveOverlays(e,_,b))}return X.waitFor(f)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,a){return this.remoteDocumentCache.getEntries(e,a).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,a,r,l){return(function(f){return ut.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(a)?this.getDocumentsMatchingDocumentQuery(e,a.path):Sv(a)?this.getDocumentsMatchingCollectionGroupQuery(e,a,r,l):this.getDocumentsMatchingCollectionQuery(e,a,r,l)}getNextDocuments(e,a,r,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,a,r,l).next((h=>{const f=l-h.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,a,r.largestBatchId,l-h.size):X.resolve(fr());let g=Jo,v=h;return f.next((_=>X.forEach(_,((T,b)=>(g<b.largestBatchId&&(g=b.largestBatchId),h.get(T)?X.resolve():this.remoteDocumentCache.getEntry(e,T).next((O=>{v=v.insert(T,O)}))))).next((()=>this.populateOverlays(e,_,h))).next((()=>this.computeViews(e,v,_,xt()))).next((T=>({batchId:g,changes:Dv(T)})))))}))}getDocumentsMatchingDocumentQuery(e,a){return this.getDocument(e,new ut(a)).next((r=>{let l=$o();return r.isFoundDocument()&&(l=l.insert(r.key,r)),l}))}getDocumentsMatchingCollectionGroupQuery(e,a,r,l){const h=a.collectionGroup;let f=$o();return this.indexManager.getCollectionParents(e,h).next((g=>X.forEach(g,(v=>{const _=(function(b,O){return new xs(O,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(a,v.child(h));return this.getDocumentsMatchingCollectionQuery(e,_,r,l).next((T=>{T.forEach(((b,O)=>{f=f.insert(b,O)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,a,r,l){let h;return this.documentOverlayCache.getOverlaysForCollection(e,a.path,r.largestBatchId).next((f=>(h=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,a,r,h,l)))).next((f=>{h.forEach(((v,_)=>{const T=_.getKey();f.get(T)===null&&(f=f.insert(T,Xe.newInvalidDocument(T)))}));let g=$o();return f.forEach(((v,_)=>{const T=h.get(v);T!==void 0&&Qo(T.mutation,_,Gn.empty(),ee.now()),_u(a,_)&&(g=g.insert(v,_))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,a){return X.resolve(this.Lr.get(a))}saveBundleMetadata(e,a){return this.Lr.set(a.id,(function(l){return{id:l.id,version:l.version,createTime:_a(l.createTime)}})(a)),X.resolve()}getNamedQuery(e,a){return X.resolve(this.kr.get(a))}saveNamedQuery(e,a){return this.kr.set(a.name,(function(l){return{name:l.name,query:y2(l.bundledQuery),readTime:_a(l.readTime)}})(a)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.overlays=new se(ut.comparator),this.qr=new Map}getOverlay(e,a){return X.resolve(this.overlays.get(a))}getOverlays(e,a){const r=fr();return X.forEach(a,(l=>this.getOverlay(e,l).next((h=>{h!==null&&r.set(l,h)})))).next((()=>r))}saveOverlays(e,a,r){return r.forEach(((l,h)=>{this.St(e,a,h)})),X.resolve()}removeOverlaysForBatchId(e,a,r){const l=this.qr.get(r);return l!==void 0&&(l.forEach((h=>this.overlays=this.overlays.remove(h))),this.qr.delete(r)),X.resolve()}getOverlaysForCollection(e,a,r){const l=fr(),h=a.length+1,f=new ut(a.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const v=g.getNext().value,_=v.getKey();if(!a.isPrefixOf(_.path))break;_.path.length===h&&v.largestBatchId>r&&l.set(v.getKey(),v)}return X.resolve(l)}getOverlaysForCollectionGroup(e,a,r,l){let h=new se(((_,T)=>_-T));const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===a&&_.largestBatchId>r){let T=h.get(_.largestBatchId);T===null&&(T=fr(),h=h.insert(_.largestBatchId,T)),T.set(_.getKey(),_)}}const g=fr(),v=h.getIterator();for(;v.hasNext()&&(v.getNext().value.forEach(((_,T)=>g.set(_,T))),!(g.size()>=l)););return X.resolve(g)}St(e,a,r){const l=this.overlays.get(r.key);if(l!==null){const f=this.qr.get(l.largestBatchId).delete(r.key);this.qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(r.key,new Fb(a,r));let h=this.qr.get(a);h===void 0&&(h=xt(),this.qr.set(a,h)),this.qr.set(a,h.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return X.resolve(this.sessionToken)}setSessionToken(e,a){return this.sessionToken=a,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.Qr=new xe(je.$r),this.Ur=new xe(je.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,a){const r=new je(e,a);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,a){e.forEach((r=>this.addReference(r,a)))}removeReference(e,a){this.Gr(new je(e,a))}zr(e,a){e.forEach((r=>this.removeReference(r,a)))}jr(e){const a=new ut(new Zt([])),r=new je(a,e),l=new je(a,e+1),h=[];return this.Ur.forEachInRange([r,l],(f=>{this.Gr(f),h.push(f.key)})),h}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const a=new ut(new Zt([])),r=new je(a,e),l=new je(a,e+1);let h=xt();return this.Ur.forEachInRange([r,l],(f=>{h=h.add(f.key)})),h}containsKey(e){const a=new je(e,0),r=this.Qr.firstAfterOrEqual(a);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,a){this.key=e,this.Yr=a}static $r(e,a){return ut.comparator(e.key,a.key)||Rt(e.Yr,a.Yr)}static Kr(e,a){return Rt(e.Yr,a.Yr)||ut.comparator(e.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e,a){this.indexManager=e,this.referenceDelegate=a,this.mutationQueue=[],this.tr=1,this.Zr=new xe(je.$r)}checkEmpty(e){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(e,a,r,l){const h=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new Gb(h,a,r,l);this.mutationQueue.push(f);for(const g of l)this.Zr=this.Zr.add(new je(g.key,h)),this.indexManager.addToCollectionParentIndex(e,g.key.path.popLast());return X.resolve(f)}lookupMutationBatch(e,a){return X.resolve(this.Xr(a))}getNextMutationBatchAfterBatchId(e,a){const r=a+1,l=this.ei(r),h=l<0?0:l;return X.resolve(this.mutationQueue.length>h?this.mutationQueue[h]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?gf:this.tr-1)}getAllMutationBatches(e){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,a){const r=new je(a,0),l=new je(a,Number.POSITIVE_INFINITY),h=[];return this.Zr.forEachInRange([r,l],(f=>{const g=this.Xr(f.Yr);h.push(g)})),X.resolve(h)}getAllMutationBatchesAffectingDocumentKeys(e,a){let r=new xe(Rt);return a.forEach((l=>{const h=new je(l,0),f=new je(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([h,f],(g=>{r=r.add(g.Yr)}))})),X.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,a){const r=a.path,l=r.length+1;let h=r;ut.isDocumentKey(h)||(h=h.child(""));const f=new je(new ut(h),0);let g=new xe(Rt);return this.Zr.forEachWhile((v=>{const _=v.key.path;return!!r.isPrefixOf(_)&&(_.length===l&&(g=g.add(v.Yr)),!0)}),f),X.resolve(this.ti(g))}ti(e){const a=[];return e.forEach((r=>{const l=this.Xr(r);l!==null&&a.push(l)})),a}removeMutationBatch(e,a){Bt(this.ni(a.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return X.forEach(a.mutations,(l=>{const h=new je(l.key,a.batchId);return r=r.delete(h),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,a){const r=new je(a,0),l=this.Zr.firstAfterOrEqual(r);return X.resolve(a.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,X.resolve()}ni(e,a){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const a=this.ei(e);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.ri=e,this.docs=(function(){return new se(ut.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,a){const r=a.key,l=this.docs.get(r),h=l?l.size:0,f=this.ri(a);return this.docs=this.docs.insert(r,{document:a.mutableCopy(),size:f}),this.size+=f-h,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const a=this.docs.get(e);a&&(this.docs=this.docs.remove(e),this.size-=a.size)}getEntry(e,a){const r=this.docs.get(a);return X.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(a))}getEntries(e,a){let r=Ha();return a.forEach((l=>{const h=this.docs.get(l);r=r.insert(l,h?h.document.mutableCopy():Xe.newInvalidDocument(l))})),X.resolve(r)}getDocumentsMatchingQuery(e,a,r,l){let h=Ha();const f=a.path,g=new ut(f.child("__id-9223372036854775808__")),v=this.docs.getIteratorFrom(g);for(;v.hasNext();){const{key:_,value:{document:T}}=v.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||sb(rb(T),r)<=0||(l.has(T.key)||_u(a,T))&&(h=h.insert(T.key,T.mutableCopy()))}return X.resolve(h)}getAllFromCollectionGroup(e,a,r,l){mt(9500)}ii(e,a){return X.forEach(this.docs,(r=>a(r)))}newChangeBuffer(e){return new V2(this)}getSize(e){return X.resolve(this.size)}}class V2 extends S2{constructor(e){super(),this.Nr=e}applyChanges(e){const a=[];return this.changes.forEach(((r,l)=>{l.isValidDocument()?a.push(this.Nr.addEntry(e,l)):this.Nr.removeEntry(r)})),X.waitFor(a)}getFromCache(e,a){return this.Nr.getEntry(e,a)}getAllFromCache(e,a){return this.Nr.getEntries(e,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.persistence=e,this.si=new _r((a=>wf(a)),Ef),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.oi=0,this._i=new Nf,this.targetCount=0,this.ai=Cs.ur()}forEachTarget(e,a){return this.si.forEach(((r,l)=>a(l))),X.resolve()}getLastRemoteSnapshotVersion(e){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return X.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(e,a,r){return r&&(this.lastRemoteSnapshotVersion=r),a>this.oi&&(this.oi=a),X.resolve()}Pr(e){this.si.set(e.target,e);const a=e.targetId;a>this.highestTargetId&&(this.ai=new Cs(a),this.highestTargetId=a),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,a){return this.Pr(a),this.targetCount+=1,X.resolve()}updateTargetData(e,a){return this.Pr(a),X.resolve()}removeTargetData(e,a){return this.si.delete(a.target),this._i.jr(a.targetId),this.targetCount-=1,X.resolve()}removeTargets(e,a,r){let l=0;const h=[];return this.si.forEach(((f,g)=>{g.sequenceNumber<=a&&r.get(g.targetId)===null&&(this.si.delete(f),h.push(this.removeMatchingKeysForTargetId(e,g.targetId)),l++)})),X.waitFor(h).next((()=>l))}getTargetCount(e){return X.resolve(this.targetCount)}getTargetData(e,a){const r=this.si.get(a)||null;return X.resolve(r)}addMatchingKeys(e,a,r){return this._i.Wr(a,r),X.resolve()}removeMatchingKeys(e,a,r){this._i.zr(a,r);const l=this.persistence.referenceDelegate,h=[];return l&&a.forEach((f=>{h.push(l.markPotentiallyOrphaned(e,f))})),X.waitFor(h)}removeMatchingKeysForTargetId(e,a){return this._i.jr(a),X.resolve()}getMatchingKeysForTargetId(e,a){const r=this._i.Hr(a);return X.resolve(r)}containsKey(e,a){return X.resolve(this._i.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,a){this.ui={},this.overlays={},this.ci=new mu(0),this.li=!1,this.li=!0,this.hi=new I2,this.referenceDelegate=e(this),this.Pi=new M2(this),this.indexManager=new g2,this.remoteDocumentCache=(function(l){return new x2(l)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new p2(a),this.Ii=new N2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let a=this.overlays[e.toKey()];return a||(a=new D2,this.overlays[e.toKey()]=a),a}getMutationQueue(e,a){let r=this.ui[e.toKey()];return r||(r=new R2(a,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,a,r){it("MemoryPersistence","Starting transaction:",e);const l=new O2(this.ci.next());return this.referenceDelegate.Ei(),r(l).next((h=>this.referenceDelegate.di(l).next((()=>h)))).toPromise().then((h=>(l.raiseOnCommittedEvent(),h)))}Ai(e,a){return X.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,a))))}}class O2 extends lb{constructor(e){super(),this.currentSequenceNumber=e}}class Df{constructor(e){this.persistence=e,this.Ri=new Nf,this.Vi=null}static mi(e){return new Df(e)}get fi(){if(this.Vi)return this.Vi;throw mt(60996)}addReference(e,a,r){return this.Ri.addReference(r,a),this.fi.delete(r.toString()),X.resolve()}removeReference(e,a,r){return this.Ri.removeReference(r,a),this.fi.add(r.toString()),X.resolve()}markPotentiallyOrphaned(e,a){return this.fi.add(a.toString()),X.resolve()}removeTarget(e,a){this.Ri.jr(a.targetId).forEach((l=>this.fi.add(l.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,a.targetId).next((l=>{l.forEach((h=>this.fi.add(h.toString())))})).next((()=>r.removeTargetData(e,a)))}Ei(){this.Vi=new Set}di(e){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.fi,(r=>{const l=ut.fromPath(r);return this.gi(e,l).next((h=>{h||a.removeEntry(l,_t.min())}))})).next((()=>(this.Vi=null,a.apply(e))))}updateLimboDocument(e,a){return this.gi(e,a).next((r=>{r?this.fi.delete(a.toString()):this.fi.add(a.toString())}))}Ti(e){return 0}gi(e,a){return X.or([()=>X.resolve(this.Ri.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(e,a),()=>this.persistence.Ai(e,a)])}}class cu{constructor(e,a){this.persistence=e,this.pi=new _r((r=>hb(r.path)),((r,l)=>r.isEqual(l))),this.garbageCollector=b2(this,a)}static mi(e,a){return new cu(e,a)}Ei(){}di(e){return X.resolve()}forEachTarget(e,a){return this.persistence.getTargetCache().forEachTarget(e,a)}gr(e){const a=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>a.next((l=>r+l))))}wr(e){let a=0;return this.pr(e,(r=>{a++})).next((()=>a))}pr(e,a){return X.forEach(this.pi,((r,l)=>this.br(e,r,l).next((h=>h?X.resolve():a(l)))))}removeTargets(e,a,r){return this.persistence.getTargetCache().removeTargets(e,a,r)}removeOrphanedDocuments(e,a){let r=0;const l=this.persistence.getRemoteDocumentCache(),h=l.newChangeBuffer();return l.ii(e,(f=>this.br(e,f,a).next((g=>{g||(r++,h.removeEntry(f,_t.min()))})))).next((()=>h.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,a){return this.pi.set(a,e.currentSequenceNumber),X.resolve()}removeTarget(e,a){const r=a.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,a,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}removeReference(e,a,r){return this.pi.set(r,e.currentSequenceNumber),X.resolve()}updateLimboDocument(e,a){return this.pi.set(a,e.currentSequenceNumber),X.resolve()}Ti(e){let a=e.key.toString().length;return e.isFoundDocument()&&(a+=Qc(e.data.value)),a}br(e,a,r){return X.or([()=>this.persistence.Ai(e,a),()=>this.persistence.getTargetCache().containsKey(e,a),()=>{const l=this.pi.get(a);return X.resolve(l!==void 0&&l>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,a,r,l){this.targetId=e,this.fromCache=a,this.Es=r,this.ds=l}static As(e,a){let r=xt(),l=xt();for(const h of a.docChanges)switch(h.type){case 0:r=r.add(h.doc.key);break;case 1:l=l.add(h.doc.key)}return new If(e,a.fromCache,r,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return NE()?8:cb(CE())>0?6:4})()}initialize(e,a){this.ps=e,this.indexManager=a,this.Rs=!0}getDocumentsMatchingQuery(e,a,r,l){const h={result:null};return this.ys(e,a).next((f=>{h.result=f})).next((()=>{if(!h.result)return this.ws(e,a,l,r).next((f=>{h.result=f}))})).next((()=>{if(h.result)return;const f=new L2;return this.Ss(e,a,f).next((g=>{if(h.result=g,this.Vs)return this.bs(e,a,f,g.size)}))})).next((()=>h.result))}bs(e,a,r,l){return r.documentReadCount<this.fs?(ds()<=Lt.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",fs(a),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),X.resolve()):(ds()<=Lt.DEBUG&&it("QueryEngine","Query:",fs(a),"scans",r.documentReadCount,"local documents and returns",l,"documents as results."),r.documentReadCount>this.gs*l?(ds()<=Lt.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",fs(a),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ya(a))):X.resolve())}ys(e,a){if(a_(a))return X.resolve(null);let r=ya(a);return this.indexManager.getIndexType(e,r).next((l=>l===0?null:(a.limit!==null&&l===1&&(a=Wd(a,null,"F"),r=ya(a)),this.indexManager.getDocumentsMatchingTarget(e,r).next((h=>{const f=xt(...h);return this.ps.getDocuments(e,f).next((g=>this.indexManager.getMinOffset(e,r).next((v=>{const _=this.Ds(a,g);return this.Cs(a,_,f,v.readTime)?this.ys(e,Wd(a,null,"F")):this.vs(e,_,a,v)}))))})))))}ws(e,a,r,l){return a_(a)||l.isEqual(_t.min())?X.resolve(null):this.ps.getDocuments(e,r).next((h=>{const f=this.Ds(a,h);return this.Cs(a,f,r,l)?X.resolve(null):(ds()<=Lt.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),fs(a)),this.vs(e,f,a,ib(l,Jo)).next((g=>g)))}))}Ds(e,a){let r=new xe(Av(e));return a.forEach(((l,h)=>{_u(e,h)&&(r=r.add(h))})),r}Cs(e,a,r,l){if(e.limit===null)return!1;if(r.size!==a.size)return!0;const h=e.limitType==="F"?a.last():a.first();return!!h&&(h.hasPendingWrites||h.version.compareTo(l)>0)}Ss(e,a,r){return ds()<=Lt.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",fs(a)),this.ps.getDocumentsMatchingQuery(e,a,Ii.min(),r)}vs(e,a,r,l){return this.ps.getDocumentsMatchingQuery(e,r,l).next((h=>(a.forEach((f=>{h=h.insert(f.key,f)})),h)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="LocalStore",k2=3e8;class z2{constructor(e,a,r,l){this.persistence=e,this.Fs=a,this.serializer=l,this.Ms=new se(Rt),this.xs=new _r((h=>wf(h)),Ef),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(a=>e.collect(a,this.Ms)))}}function U2(s,e,a,r){return new z2(s,e,a,r)}async function Kv(s,e){const a=Et(s);return await a.persistence.runTransaction("Handle user change","readonly",(r=>{let l;return a.mutationQueue.getAllMutationBatches(r).next((h=>(l=h,a.Bs(e),a.mutationQueue.getAllMutationBatches(r)))).next((h=>{const f=[],g=[];let v=xt();for(const _ of l){f.push(_.batchId);for(const T of _.mutations)v=v.add(T.key)}for(const _ of h){g.push(_.batchId);for(const T of _.mutations)v=v.add(T.key)}return a.localDocuments.getDocuments(r,v).next((_=>({Ls:_,removedBatchIds:f,addedBatchIds:g})))}))}))}function q2(s,e){const a=Et(s);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const l=e.batch.keys(),h=a.Ns.newChangeBuffer({trackRemovals:!0});return(function(g,v,_,T){const b=_.batch,O=b.keys();let G=X.resolve();return O.forEach((Z=>{G=G.next((()=>T.getEntry(v,Z))).next((tt=>{const J=_.docVersions.get(Z);Bt(J!==null,48541),tt.version.compareTo(J)<0&&(b.applyToRemoteDocument(tt,_),tt.isValidDocument()&&(tt.setReadTime(_.commitVersion),T.addEntry(tt)))}))})),G.next((()=>g.mutationQueue.removeMutationBatch(v,b)))})(a,r,e,h).next((()=>h.apply(r))).next((()=>a.mutationQueue.performConsistencyCheck(r))).next((()=>a.documentOverlayCache.removeOverlaysForBatchId(r,l,e.batch.batchId))).next((()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(g){let v=xt();for(let _=0;_<g.mutationResults.length;++_)g.mutationResults[_].transformResults.length>0&&(v=v.add(g.batch.mutations[_].key));return v})(e)))).next((()=>a.localDocuments.getDocuments(r,l)))}))}function Xv(s){const e=Et(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(a=>e.Pi.getLastRemoteSnapshotVersion(a)))}function $2(s,e){const a=Et(s),r=e.snapshotVersion;let l=a.Ms;return a.persistence.runTransaction("Apply remote event","readwrite-primary",(h=>{const f=a.Ns.newChangeBuffer({trackRemovals:!0});l=a.Ms;const g=[];e.targetChanges.forEach(((T,b)=>{const O=l.get(b);if(!O)return;g.push(a.Pi.removeMatchingKeys(h,T.removedDocuments,b).next((()=>a.Pi.addMatchingKeys(h,T.addedDocuments,b))));let G=O.withSequenceNumber(h.currentSequenceNumber);e.targetMismatches.get(b)!==null?G=G.withResumeToken(Fe.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):T.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(T.resumeToken,r)),l=l.insert(b,G),(function(tt,J,gt){return tt.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-tt.snapshotVersion.toMicroseconds()>=k2?!0:gt.addedDocuments.size+gt.modifiedDocuments.size+gt.removedDocuments.size>0})(O,G,T)&&g.push(a.Pi.updateTargetData(h,G))}));let v=Ha(),_=xt();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&g.push(a.persistence.referenceDelegate.updateLimboDocument(h,T))})),g.push(B2(h,f,e.documentUpdates).next((T=>{v=T.ks,_=T.qs}))),!r.isEqual(_t.min())){const T=a.Pi.getLastRemoteSnapshotVersion(h).next((b=>a.Pi.setTargetsMetadata(h,h.currentSequenceNumber,r)));g.push(T)}return X.waitFor(g).next((()=>f.apply(h))).next((()=>a.localDocuments.getLocalViewOfDocuments(h,v,_))).next((()=>v))})).then((h=>(a.Ms=l,h)))}function B2(s,e,a){let r=xt(),l=xt();return a.forEach((h=>r=r.add(h))),e.getEntries(s,r).next((h=>{let f=Ha();return a.forEach(((g,v)=>{const _=h.get(g);v.isFoundDocument()!==_.isFoundDocument()&&(l=l.add(g)),v.isNoDocument()&&v.version.isEqual(_t.min())?(e.removeEntry(g,v.readTime),f=f.insert(g,v)):!_.isValidDocument()||v.version.compareTo(_.version)>0||v.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(v),f=f.insert(g,v)):it(Rf,"Ignoring outdated watch update for ",g,". Current version:",_.version," Watch version:",v.version)})),{ks:f,qs:l}}))}function H2(s,e){const a=Et(s);return a.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=gf),a.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function P2(s,e){const a=Et(s);return a.persistence.runTransaction("Allocate target","readwrite",(r=>{let l;return a.Pi.getTargetData(r,e).next((h=>h?(l=h,X.resolve(l)):a.Pi.allocateTargetId(r).next((f=>(l=new bi(e,f,"TargetPurposeListen",r.currentSequenceNumber),a.Pi.addTargetData(r,l).next((()=>l)))))))})).then((r=>{const l=a.Ms.get(r.targetId);return(l===null||r.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(a.Ms=a.Ms.insert(r.targetId,r),a.xs.set(e,r.targetId)),r}))}async function rf(s,e,a){const r=Et(s),l=r.Ms.get(e),h=a?"readwrite":"readwrite-primary";try{a||await r.persistence.runTransaction("Release target",h,(f=>r.persistence.referenceDelegate.removeTarget(f,l)))}catch(f){if(!Rs(f))throw f;it(Rf,`Failed to update sequence numbers for target ${e}: ${f}`)}r.Ms=r.Ms.remove(e),r.xs.delete(l.target)}function y_(s,e,a){const r=Et(s);let l=_t.min(),h=xt();return r.persistence.runTransaction("Execute query","readwrite",(f=>(function(v,_,T){const b=Et(v),O=b.xs.get(T);return O!==void 0?X.resolve(b.Ms.get(O)):b.Pi.getTargetData(_,T)})(r,f,ya(e)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(f,g.targetId).next((v=>{h=v}))})).next((()=>r.Fs.getDocumentsMatchingQuery(f,e,a?l:_t.min(),a?h:xt()))).next((g=>(G2(r,Rb(e),g),{documents:g,Qs:h})))))}function G2(s,e,a){let r=s.Os.get(e)||_t.min();a.forEach(((l,h)=>{h.readTime.compareTo(r)>0&&(r=h.readTime)})),s.Os.set(e,r)}class g_{constructor(){this.activeTargetIds=jb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F2{constructor(){this.Mo=new g_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,a,r){}addLocalQueryTarget(e,a=!0){return a&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,a,r){this.xo[e]=a}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new g_,Promise.resolve()}handleUserChange(e,a,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="ConnectivityMonitor";class v_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){it(__,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){it(__,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc=null;function sf(){return Bc===null?Bc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Bc++,"0x"+Bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="RestConnection",Y2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class K2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const a=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=a+"://"+e.host,this.Ko=`projects/${r}/databases/${l}`,this.Wo=this.databaseId.database===au?`project_id=${r}`:`project_id=${r}&database_id=${l}`}Go(e,a,r,l,h){const f=sf(),g=this.zo(e,a.toUriEncodedString());it(zd,`Sending RPC '${e}' ${f}:`,g,r);const v={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(v,l,h);const{host:_}=new URL(g),T=ff(_);return this.Jo(e,g,v,r,T).then((b=>(it(zd,`Received RPC '${e}' ${f}: `,b),b)),(b=>{throw Es(zd,`RPC '${e}' ${f} failed with error: `,b,"url: ",g,"request:",r),b}))}Ho(e,a,r,l,h,f){return this.Go(e,a,r,l,h)}jo(e,a,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach(((l,h)=>e[h]=l)),r&&r.headers.forEach(((l,h)=>e[h]=l))}zo(e,a){const r=Y2[e];return`${this.Uo}/v1/${a}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class J2 extends K2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,a,r,l,h){const f=sf();return new Promise(((g,v)=>{const _=new Z_;_.setWithCredentials(!0),_.listenOnce(W_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case Fc.NO_ERROR:const b=_.getResponseJson();it(Ye,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(b)),g(b);break;case Fc.TIMEOUT:it(Ye,`RPC '${e}' ${f} timed out`),v(new at(K.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const O=_.getStatus();if(it(Ye,`RPC '${e}' ${f} failed with status:`,O,"response text:",_.getResponseText()),O>0){let G=_.getResponseJson();Array.isArray(G)&&(G=G[0]);const Z=G==null?void 0:G.error;if(Z&&Z.status&&Z.message){const tt=(function(gt){const vt=gt.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(vt)>=0?vt:K.UNKNOWN})(Z.status);v(new at(tt,Z.message))}else v(new at(K.UNKNOWN,"Server responded with status "+_.getStatus()))}else v(new at(K.UNAVAILABLE,"Connection failed."));break;default:mt(9055,{l_:e,streamId:f,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{it(Ye,`RPC '${e}' ${f} completed.`)}}));const T=JSON.stringify(l);it(Ye,`RPC '${e}' ${f} sending request:`,l),_.send(a,"POST",T,r,15)}))}T_(e,a,r){const l=sf(),h=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=nv(),g=ev(),v={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(v.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(v.useFetchStreams=!0),this.jo(v.initMessageHeaders,a,r),v.encodeInitMessageHeaders=!0;const T=h.join("");it(Ye,`Creating RPC '${e}' stream ${l}: ${T}`,v);const b=f.createWebChannel(T,v);this.I_(b);let O=!1,G=!1;const Z=new X2({Yo:J=>{G?it(Ye,`Not sending because RPC '${e}' stream ${l} is closed:`,J):(O||(it(Ye,`Opening RPC '${e}' stream ${l} transport.`),b.open(),O=!0),it(Ye,`RPC '${e}' stream ${l} sending:`,J),b.send(J))},Zo:()=>b.close()}),tt=(J,gt,vt)=>{J.listen(gt,(pt=>{try{vt(pt)}catch(lt){setTimeout((()=>{throw lt}),0)}}))};return tt(b,qo.EventType.OPEN,(()=>{G||(it(Ye,`RPC '${e}' stream ${l} transport opened.`),Z.o_())})),tt(b,qo.EventType.CLOSE,(()=>{G||(G=!0,it(Ye,`RPC '${e}' stream ${l} transport closed`),Z.a_(),this.E_(b))})),tt(b,qo.EventType.ERROR,(J=>{G||(G=!0,Es(Ye,`RPC '${e}' stream ${l} transport errored. Name:`,J.name,"Message:",J.message),Z.a_(new at(K.UNAVAILABLE,"The operation could not be completed")))})),tt(b,qo.EventType.MESSAGE,(J=>{var gt;if(!G){const vt=J.data[0];Bt(!!vt,16349);const pt=vt,lt=(pt==null?void 0:pt.error)||((gt=pt[0])==null?void 0:gt.error);if(lt){it(Ye,`RPC '${e}' stream ${l} received error:`,lt);const jt=lt.status;let ft=(function(A){const x=Se[A];if(x!==void 0)return kv(x)})(jt),C=lt.message;ft===void 0&&(ft=K.INTERNAL,C="Unknown error status: "+jt+" with message "+lt.message),G=!0,Z.a_(new at(ft,C)),b.close()}else it(Ye,`RPC '${e}' stream ${l} received:`,vt),Z.u_(vt)}})),tt(g,tv.STAT_EVENT,(J=>{J.stat===Fd.PROXY?it(Ye,`RPC '${e}' stream ${l} detected buffering proxy`):J.stat===Fd.NOPROXY&&it(Ye,`RPC '${e}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{Z.__()}),0),Z}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((a=>a===e))}}function Ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(s){return new e2(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,a,r=1e3,l=1.5,h=6e4){this.Mi=e,this.timerId=a,this.d_=r,this.A_=l,this.R_=h,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const a=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),l=Math.max(0,a-r);l>0&&it("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${a} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="PersistentStream";class Zv{constructor(e,a,r,l,h,f,g,v){this.Mi=e,this.S_=r,this.b_=l,this.connection=h,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=v,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jv(e,a)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,a){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():a&&a.code===K.RESOURCE_EXHAUSTED?(Ba(a.toString()),Ba("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):a&&a.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(a)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),a=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,l])=>{this.D_===a&&this.G_(r,l)}),(r=>{e((()=>{const l=new at(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(l)}))}))}G_(e,a){const r=this.W_(this.D_);this.stream=this.j_(e,a),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{r((()=>this.z_(l)))})),this.stream.onMessage((l=>{r((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return it(w_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return a=>{this.Mi.enqueueAndForget((()=>this.D_===e?a():(it(w_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Z2 extends Zv{constructor(e,a,r,l,h,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,r,l,f),this.serializer=h}j_(e,a){return this.connection.T_("Listen",e,a)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const a=i2(this.serializer,e),r=(function(h){if(!("targetChange"in h))return _t.min();const f=h.targetChange;return f.targetIds&&f.targetIds.length?_t.min():f.readTime?_a(f.readTime):_t.min()})(e);return this.listener.H_(a,r)}Y_(e){const a={};a.database=af(this.serializer),a.addTarget=(function(h,f){let g;const v=f.target;if(g=Jd(v)?{documents:o2(h,v)}:{query:l2(h,v).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=qv(h,f.resumeToken);const _=tf(h,f.expectedCount);_!==null&&(g.expectedCount=_)}else if(f.snapshotVersion.compareTo(_t.min())>0){g.readTime=lu(h,f.snapshotVersion.toTimestamp());const _=tf(h,f.expectedCount);_!==null&&(g.expectedCount=_)}return g})(this.serializer,e);const r=u2(this.serializer,e);r&&(a.labels=r),this.q_(a)}Z_(e){const a={};a.database=af(this.serializer),a.removeTarget=e,this.q_(a)}}class W2 extends Zv{constructor(e,a,r,l,h,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,r,l,f),this.serializer=h}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,a){return this.connection.T_("Write",e,a)}J_(e){return Bt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Bt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Bt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const a=s2(e.writeResults,e.commitTime),r=_a(e.commitTime);return this.listener.na(r,a)}ra(){const e={};e.database=af(this.serializer),this.q_(e)}ea(e){const a={streamToken:this.lastStreamToken,writes:e.map((r=>r2(this.serializer,r)))};this.q_(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{}class eS extends tS{constructor(e,a,r,l){super(),this.authCredentials=e,this.appCheckCredentials=a,this.connection=r,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new at(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,a,r,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,f])=>this.connection.Go(e,ef(a,r),l,h,f))).catch((h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new at(K.UNKNOWN,h.toString())}))}Ho(e,a,r,l,h){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,g])=>this.connection.Ho(e,ef(a,r),l,f,g,h))).catch((f=>{throw f.name==="FirebaseError"?(f.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new at(K.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class nS{constructor(e,a){this.asyncQueue=e,this.onlineStateHandler=a,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const a=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ba(a),this.aa=!1):it("OnlineStateTracker",a)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="RemoteStore";class aS{constructor(e,a,r,l,h){this.localStore=e,this.datastore=a,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=h,this.Aa.Oo((f=>{r.enqueueAndForget((async()=>{wr(this)&&(it(pr,"Restarting streams for network reachability change."),await(async function(v){const _=Et(v);_.Ea.add(4),await ol(_),_.Ra.set("Unknown"),_.Ea.delete(4),await bu(_)})(this))}))})),this.Ra=new nS(r,l)}}async function bu(s){if(wr(s))for(const e of s.da)await e(!0)}async function ol(s){for(const e of s.da)await e(!1)}function Wv(s,e){const a=Et(s);a.Ia.has(e.targetId)||(a.Ia.set(e.targetId,e),Of(a)?Mf(a):Vs(a).O_()&&Vf(a,e))}function xf(s,e){const a=Et(s),r=Vs(a);a.Ia.delete(e),r.O_()&&tw(a,e),a.Ia.size===0&&(r.O_()?r.L_():wr(a)&&a.Ra.set("Unknown"))}function Vf(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_t.min())>0){const a=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(a)}Vs(s).Y_(e)}function tw(s,e){s.Va.Ue(e),Vs(s).Z_(e)}function Mf(s){s.Va=new Jb({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),Vs(s).start(),s.Ra.ua()}function Of(s){return wr(s)&&!Vs(s).x_()&&s.Ia.size>0}function wr(s){return Et(s).Ea.size===0}function ew(s){s.Va=void 0}async function iS(s){s.Ra.set("Online")}async function rS(s){s.Ia.forEach(((e,a)=>{Vf(s,e)}))}async function sS(s,e){ew(s),Of(s)?(s.Ra.ha(e),Mf(s)):s.Ra.set("Unknown")}async function oS(s,e,a){if(s.Ra.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await(async function(l,h){const f=h.cause;for(const g of h.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,f),l.Ia.delete(g),l.Va.removeTarget(g))})(s,e)}catch(r){it(pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(s,r)}else if(e instanceof Xc?s.Va.Ze(e):e instanceof zv?s.Va.st(e):s.Va.tt(e),!a.isEqual(_t.min()))try{const r=await Xv(s.localStore);a.compareTo(r)>=0&&await(function(h,f){const g=h.Va.Tt(f);return g.targetChanges.forEach(((v,_)=>{if(v.resumeToken.approximateByteSize()>0){const T=h.Ia.get(_);T&&h.Ia.set(_,T.withResumeToken(v.resumeToken,f))}})),g.targetMismatches.forEach(((v,_)=>{const T=h.Ia.get(v);if(!T)return;h.Ia.set(v,T.withResumeToken(Fe.EMPTY_BYTE_STRING,T.snapshotVersion)),tw(h,v);const b=new bi(T.target,v,_,T.sequenceNumber);Vf(h,b)})),h.remoteSyncer.applyRemoteEvent(g)})(s,a)}catch(r){it(pr,"Failed to raise snapshot:",r),await uu(s,r)}}async function uu(s,e,a){if(!Rs(e))throw e;s.Ea.add(1),await ol(s),s.Ra.set("Offline"),a||(a=()=>Xv(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{it(pr,"Retrying IndexedDB access"),await a(),s.Ea.delete(1),await bu(s)}))}function nw(s,e){return e().catch((a=>uu(s,a,e)))}async function Su(s){const e=Et(s),a=Mi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:gf;for(;lS(e);)try{const l=await H2(e.localStore,r);if(l===null){e.Ta.length===0&&a.L_();break}r=l.batchId,cS(e,l)}catch(l){await uu(e,l)}aw(e)&&iw(e)}function lS(s){return wr(s)&&s.Ta.length<10}function cS(s,e){s.Ta.push(e);const a=Mi(s);a.O_()&&a.X_&&a.ea(e.mutations)}function aw(s){return wr(s)&&!Mi(s).x_()&&s.Ta.length>0}function iw(s){Mi(s).start()}async function uS(s){Mi(s).ra()}async function hS(s){const e=Mi(s);for(const a of s.Ta)e.ea(a.mutations)}async function dS(s,e,a){const r=s.Ta.shift(),l=Sf.from(r,e,a);await nw(s,(()=>s.remoteSyncer.applySuccessfulWrite(l))),await Su(s)}async function fS(s,e){e&&Mi(s).X_&&await(async function(r,l){if((function(f){return Yb(f)&&f!==K.ABORTED})(l.code)){const h=r.Ta.shift();Mi(r).B_(),await nw(r,(()=>r.remoteSyncer.rejectFailedWrite(h.batchId,l))),await Su(r)}})(s,e),aw(s)&&iw(s)}async function E_(s,e){const a=Et(s);a.asyncQueue.verifyOperationInProgress(),it(pr,"RemoteStore received new credentials");const r=wr(a);a.Ea.add(3),await ol(a),r&&a.Ra.set("Unknown"),await a.remoteSyncer.handleCredentialChange(e),a.Ea.delete(3),await bu(a)}async function mS(s,e){const a=Et(s);e?(a.Ea.delete(2),await bu(a)):e||(a.Ea.add(2),await ol(a),a.Ra.set("Unknown"))}function Vs(s){return s.ma||(s.ma=(function(a,r,l){const h=Et(a);return h.sa(),new Z2(r,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)})(s.datastore,s.asyncQueue,{Xo:iS.bind(null,s),t_:rS.bind(null,s),r_:sS.bind(null,s),H_:oS.bind(null,s)}),s.da.push((async e=>{e?(s.ma.B_(),Of(s)?Mf(s):s.Ra.set("Unknown")):(await s.ma.stop(),ew(s))}))),s.ma}function Mi(s){return s.fa||(s.fa=(function(a,r,l){const h=Et(a);return h.sa(),new W2(r,h.connection,h.authCredentials,h.appCheckCredentials,h.serializer,l)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:uS.bind(null,s),r_:fS.bind(null,s),ta:hS.bind(null,s),na:dS.bind(null,s)}),s.da.push((async e=>{e?(s.fa.B_(),await Su(s)):(await s.fa.stop(),s.Ta.length>0&&(it(pr,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,a,r,l,h){this.asyncQueue=e,this.timerId=a,this.targetTimeMs=r,this.op=l,this.removalCallback=h,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,a,r,l,h){const f=Date.now()+r,g=new Lf(e,a,f,l,h);return g.start(r),g}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new at(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jf(s,e){if(Ba("AsyncQueue",`${e}: ${s}`),Rs(s))return new at(K.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(a,r)=>e(a,r)||ut.comparator(a.key,r.key):(a,r)=>ut.comparator(a.key,r.key),this.keyedMap=$o(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const a=this.keyedMap.get(e);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((a,r)=>(e(a),!1)))}add(e){const a=this.delete(e.key);return a.copy(a.keyedMap.insert(e.key,e),a.sortedSet.insert(e,null))}delete(e){const a=this.get(e);return a?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(a)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const a=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;a.hasNext();){const l=a.getNext().key,h=r.getNext().key;if(!l.isEqual(h))return!1}return!0}toString(){const e=[];return this.forEach((a=>{e.push(a.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,a){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=a,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.ga=new se(ut.comparator)}track(e){const a=e.doc.key,r=this.ga.get(a);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(a,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(a,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(a,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(a,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(a):e.type===1&&r.type===2?this.ga=this.ga.insert(a,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(a,{type:2,doc:e.doc}):mt(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(a,e)}ya(){const e=[];return this.ga.inorderTraversal(((a,r)=>{e.push(r)})),e}}class As{constructor(e,a,r,l,h,f,g,v,_){this.query=e,this.docs=a,this.oldDocs=r,this.docChanges=l,this.mutatedKeys=h,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=v,this.hasCachedResults=_}static fromInitialDocuments(e,a,r,l,h){const f=[];return a.forEach((g=>{f.push({type:0,doc:g})})),new As(e,a,gs.emptySet(a),f,r,l,!0,!1,h)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const a=this.docChanges,r=e.docChanges;if(a.length!==r.length)return!1;for(let l=0;l<a.length;l++)if(a[l].type!==r[l].type||!a[l].doc.isEqual(r[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class yS{constructor(){this.queries=b_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(a,r){const l=Et(a),h=l.queries;l.queries=b_(),h.forEach(((f,g)=>{for(const v of g.Sa)v.onError(r)}))})(this,new at(K.ABORTED,"Firestore shutting down"))}}function b_(){return new _r((s=>Cv(s)),gu)}async function gS(s,e){const a=Et(s);let r=3;const l=e.query;let h=a.queries.get(l);h?!h.ba()&&e.Da()&&(r=2):(h=new pS,r=e.Da()?0:1);try{switch(r){case 0:h.wa=await a.onListen(l,!0);break;case 1:h.wa=await a.onListen(l,!1);break;case 2:await a.onFirstRemoteStoreListen(l)}}catch(f){const g=jf(f,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(g)}a.queries.set(l,h),h.Sa.push(e),e.va(a.onlineState),h.wa&&e.Fa(h.wa)&&kf(a)}async function _S(s,e){const a=Et(s),r=e.query;let l=3;const h=a.queries.get(r);if(h){const f=h.Sa.indexOf(e);f>=0&&(h.Sa.splice(f,1),h.Sa.length===0?l=e.Da()?0:1:!h.ba()&&e.Da()&&(l=2))}switch(l){case 0:return a.queries.delete(r),a.onUnlisten(r,!0);case 1:return a.queries.delete(r),a.onUnlisten(r,!1);case 2:return a.onLastRemoteStoreUnlisten(r);default:return}}function vS(s,e){const a=Et(s);let r=!1;for(const l of e){const h=l.query,f=a.queries.get(h);if(f){for(const g of f.Sa)g.Fa(l)&&(r=!0);f.wa=l}}r&&kf(a)}function wS(s,e,a){const r=Et(s),l=r.queries.get(e);if(l)for(const h of l.Sa)h.onError(a);r.queries.delete(e)}function kf(s){s.Ca.forEach((e=>{e.next()}))}var of,S_;(S_=of||(of={})).Ma="default",S_.Cache="cache";class ES{constructor(e,a,r){this.query=e,this.xa=a,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const l of e.docChanges)l.type!==3&&r.push(l);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let a=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),a=!0):this.La(e,this.onlineState)&&(this.ka(e),a=!0),this.Na=e,a}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let a=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),a=!0),a}La(e,a){if(!e.fromCache||!this.Da())return!0;const r=a!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||a==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const a=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}ka(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==of.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class TS{constructor(e,a){this.query=e,this.Ya=a,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xt(),this.mutatedKeys=xt(),this.eu=Av(e),this.tu=new gs(this.eu)}get nu(){return this.Ya}ru(e,a){const r=a?a.iu:new T_,l=a?a.tu:this.tu;let h=a?a.mutatedKeys:this.mutatedKeys,f=l,g=!1;const v=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,_=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((T,b)=>{const O=l.get(T),G=_u(this.query,b)?b:null,Z=!!O&&this.mutatedKeys.has(O.key),tt=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let J=!1;O&&G?O.data.isEqual(G.data)?Z!==tt&&(r.track({type:3,doc:G}),J=!0):this.su(O,G)||(r.track({type:2,doc:G}),J=!0,(v&&this.eu(G,v)>0||_&&this.eu(G,_)<0)&&(g=!0)):!O&&G?(r.track({type:0,doc:G}),J=!0):O&&!G&&(r.track({type:1,doc:O}),J=!0,(v||_)&&(g=!0)),J&&(G?(f=f.add(G),h=tt?h.add(T):h.delete(T)):(f=f.delete(T),h=h.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),h=h.delete(T.key),r.track({type:1,doc:T})}return{tu:f,iu:r,Cs:g,mutatedKeys:h}}su(e,a){return e.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(e,a,r,l){const h=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((T,b)=>(function(G,Z){const tt=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mt(20277,{Rt:J})}};return tt(G)-tt(Z)})(T.type,b.type)||this.eu(T.doc,b.doc))),this.ou(r),l=l??!1;const g=a&&!l?this._u():[],v=this.Xa.size===0&&this.current&&!l?1:0,_=v!==this.Za;return this.Za=v,f.length!==0||_?{snapshot:new As(this.query,e.tu,h,f,e.mutatedKeys,v===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new T_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((a=>this.Ya=this.Ya.add(a))),e.modifiedDocuments.forEach((a=>{})),e.removedDocuments.forEach((a=>this.Ya=this.Ya.delete(a))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=xt(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const a=[];return e.forEach((r=>{this.Xa.has(r)||a.push(new sw(r))})),this.Xa.forEach((r=>{e.has(r)||a.push(new rw(r))})),a}cu(e){this.Ya=e.Qs,this.Xa=xt();const a=this.ru(e.documents);return this.applyChanges(a,!0)}lu(){return As.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zf="SyncEngine";class bS{constructor(e,a,r){this.query=e,this.targetId=a,this.view=r}}class SS{constructor(e){this.key=e,this.hu=!1}}class CS{constructor(e,a,r,l,h,f){this.localStore=e,this.remoteStore=a,this.eventManager=r,this.sharedClientState=l,this.currentUser=h,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new _r((g=>Cv(g)),gu),this.Iu=new Map,this.Eu=new Set,this.du=new se(ut.comparator),this.Au=new Map,this.Ru=new Nf,this.Vu={},this.mu=new Map,this.fu=Cs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function AS(s,e,a=!0){const r=dw(s);let l;const h=r.Tu.get(e);return h?(r.sharedClientState.addLocalQueryTarget(h.targetId),l=h.view.lu()):l=await ow(r,e,a,!0),l}async function NS(s,e){const a=dw(s);await ow(a,e,!0,!1)}async function ow(s,e,a,r){const l=await P2(s.localStore,ya(e)),h=l.targetId,f=s.sharedClientState.addLocalQueryTarget(h,a);let g;return r&&(g=await DS(s,e,h,f==="current",l.resumeToken)),s.isPrimaryClient&&a&&Wv(s.remoteStore,l),g}async function DS(s,e,a,r,l){s.pu=(b,O,G)=>(async function(tt,J,gt,vt){let pt=J.view.ru(gt);pt.Cs&&(pt=await y_(tt.localStore,J.query,!1).then((({documents:C})=>J.view.ru(C,pt))));const lt=vt&&vt.targetChanges.get(J.targetId),jt=vt&&vt.targetMismatches.get(J.targetId)!=null,ft=J.view.applyChanges(pt,tt.isPrimaryClient,lt,jt);return A_(tt,J.targetId,ft.au),ft.snapshot})(s,b,O,G);const h=await y_(s.localStore,e,!0),f=new TS(e,h.Qs),g=f.ru(h.documents),v=sl.createSynthesizedTargetChangeForCurrentChange(a,r&&s.onlineState!=="Offline",l),_=f.applyChanges(g,s.isPrimaryClient,v);A_(s,a,_.au);const T=new bS(e,a,f);return s.Tu.set(e,T),s.Iu.has(a)?s.Iu.get(a).push(e):s.Iu.set(a,[e]),_.snapshot}async function IS(s,e,a){const r=Et(s),l=r.Tu.get(e),h=r.Iu.get(l.targetId);if(h.length>1)return r.Iu.set(l.targetId,h.filter((f=>!gu(f,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(l.targetId),r.sharedClientState.isActiveQueryTarget(l.targetId)||await rf(r.localStore,l.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(l.targetId),a&&xf(r.remoteStore,l.targetId),lf(r,l.targetId)})).catch(Is)):(lf(r,l.targetId),await rf(r.localStore,l.targetId,!0))}async function RS(s,e){const a=Et(s),r=a.Tu.get(e),l=a.Iu.get(r.targetId);a.isPrimaryClient&&l.length===1&&(a.sharedClientState.removeLocalQueryTarget(r.targetId),xf(a.remoteStore,r.targetId))}async function xS(s,e,a){const r=zS(s);try{const l=await(function(f,g){const v=Et(f),_=ee.now(),T=g.reduce(((G,Z)=>G.add(Z.key)),xt());let b,O;return v.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let Z=Ha(),tt=xt();return v.Ns.getEntries(G,T).next((J=>{Z=J,Z.forEach(((gt,vt)=>{vt.isValidDocument()||(tt=tt.add(gt))}))})).next((()=>v.localDocuments.getOverlayedDocuments(G,Z))).next((J=>{b=J;const gt=[];for(const vt of g){const pt=Hb(vt,b.get(vt.key).overlayedDocument);pt!=null&&gt.push(new vr(vt.key,pt,yv(pt.value.mapValue),ga.exists(!0)))}return v.mutationQueue.addMutationBatch(G,_,gt,g)})).next((J=>{O=J;const gt=J.applyToLocalDocumentSet(b,tt);return v.documentOverlayCache.saveOverlays(G,J.batchId,gt)}))})).then((()=>({batchId:O.batchId,changes:Dv(b)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(l.batchId),(function(f,g,v){let _=f.Vu[f.currentUser.toKey()];_||(_=new se(Rt)),_=_.insert(g,v),f.Vu[f.currentUser.toKey()]=_})(r,l.batchId,a),await ll(r,l.changes),await Su(r.remoteStore)}catch(l){const h=jf(l,"Failed to persist write");a.reject(h)}}async function lw(s,e){const a=Et(s);try{const r=await $2(a.localStore,e);e.targetChanges.forEach(((l,h)=>{const f=a.Au.get(h);f&&(Bt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?Bt(f.hu,14607):l.removedDocuments.size>0&&(Bt(f.hu,42227),f.hu=!1))})),await ll(a,r,e)}catch(r){await Is(r)}}function C_(s,e,a){const r=Et(s);if(r.isPrimaryClient&&a===0||!r.isPrimaryClient&&a===1){const l=[];r.Tu.forEach(((h,f)=>{const g=f.view.va(e);g.snapshot&&l.push(g.snapshot)})),(function(f,g){const v=Et(f);v.onlineState=g;let _=!1;v.queries.forEach(((T,b)=>{for(const O of b.Sa)O.va(g)&&(_=!0)})),_&&kf(v)})(r.eventManager,e),l.length&&r.Pu.H_(l),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VS(s,e,a){const r=Et(s);r.sharedClientState.updateQueryState(e,"rejected",a);const l=r.Au.get(e),h=l&&l.key;if(h){let f=new se(ut.comparator);f=f.insert(h,Xe.newNoDocument(h,_t.min()));const g=xt().add(h),v=new Eu(_t.min(),new Map,new se(Rt),f,g);await lw(r,v),r.du=r.du.remove(h),r.Au.delete(e),Uf(r)}else await rf(r.localStore,e,!1).then((()=>lf(r,e,a))).catch(Is)}async function MS(s,e){const a=Et(s),r=e.batch.batchId;try{const l=await q2(a.localStore,e);uw(a,r,null),cw(a,r),a.sharedClientState.updateMutationState(r,"acknowledged"),await ll(a,l)}catch(l){await Is(l)}}async function OS(s,e,a){const r=Et(s);try{const l=await(function(f,g){const v=Et(f);return v.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let T;return v.mutationQueue.lookupMutationBatch(_,g).next((b=>(Bt(b!==null,37113),T=b.keys(),v.mutationQueue.removeMutationBatch(_,b)))).next((()=>v.mutationQueue.performConsistencyCheck(_))).next((()=>v.documentOverlayCache.removeOverlaysForBatchId(_,T,g))).next((()=>v.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,T))).next((()=>v.localDocuments.getDocuments(_,T)))}))})(r.localStore,e);uw(r,e,a),cw(r,e),r.sharedClientState.updateMutationState(e,"rejected",a),await ll(r,l)}catch(l){await Is(l)}}function cw(s,e){(s.mu.get(e)||[]).forEach((a=>{a.resolve()})),s.mu.delete(e)}function uw(s,e,a){const r=Et(s);let l=r.Vu[r.currentUser.toKey()];if(l){const h=l.get(e);h&&(a?h.reject(a):h.resolve(),l=l.remove(e)),r.Vu[r.currentUser.toKey()]=l}}function lf(s,e,a=null){s.sharedClientState.removeLocalQueryTarget(e);for(const r of s.Iu.get(e))s.Tu.delete(r),a&&s.Pu.yu(r,a);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach((r=>{s.Ru.containsKey(r)||hw(s,r)}))}function hw(s,e){s.Eu.delete(e.path.canonicalString());const a=s.du.get(e);a!==null&&(xf(s.remoteStore,a),s.du=s.du.remove(e),s.Au.delete(a),Uf(s))}function A_(s,e,a){for(const r of a)r instanceof rw?(s.Ru.addReference(r.key,e),LS(s,r)):r instanceof sw?(it(zf,"Document no longer in limbo: "+r.key),s.Ru.removeReference(r.key,e),s.Ru.containsKey(r.key)||hw(s,r.key)):mt(19791,{wu:r})}function LS(s,e){const a=e.key,r=a.path.canonicalString();s.du.get(a)||s.Eu.has(r)||(it(zf,"New document in limbo: "+a),s.Eu.add(r),Uf(s))}function Uf(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const a=new ut(Zt.fromString(e)),r=s.fu.next();s.Au.set(r,new SS(a)),s.du=s.du.insert(a,r),Wv(s.remoteStore,new bi(ya(bv(a.path)),r,"TargetPurposeLimboResolution",mu.ce))}}async function ll(s,e,a){const r=Et(s),l=[],h=[],f=[];r.Tu.isEmpty()||(r.Tu.forEach(((g,v)=>{f.push(r.pu(v,e,a).then((_=>{var T;if((_||a)&&r.isPrimaryClient){const b=_?!_.fromCache:(T=a==null?void 0:a.targetChanges.get(v.targetId))==null?void 0:T.current;r.sharedClientState.updateQueryState(v.targetId,b?"current":"not-current")}if(_){l.push(_);const b=If.As(v.targetId,_);h.push(b)}})))})),await Promise.all(f),r.Pu.H_(l),await(async function(v,_){const T=Et(v);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>X.forEach(_,(O=>X.forEach(O.Es,(G=>T.persistence.referenceDelegate.addReference(b,O.targetId,G))).next((()=>X.forEach(O.ds,(G=>T.persistence.referenceDelegate.removeReference(b,O.targetId,G)))))))))}catch(b){if(!Rs(b))throw b;it(Rf,"Failed to update sequence numbers: "+b)}for(const b of _){const O=b.targetId;if(!b.fromCache){const G=T.Ms.get(O),Z=G.snapshotVersion,tt=G.withLastLimboFreeSnapshotVersion(Z);T.Ms=T.Ms.insert(O,tt)}}})(r.localStore,h))}async function jS(s,e){const a=Et(s);if(!a.currentUser.isEqual(e)){it(zf,"User change. New user:",e.toKey());const r=await Kv(a.localStore,e);a.currentUser=e,(function(h,f){h.mu.forEach((g=>{g.forEach((v=>{v.reject(new at(K.CANCELLED,f))}))})),h.mu.clear()})(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ll(a,r.Ls)}}function kS(s,e){const a=Et(s),r=a.Au.get(e);if(r&&r.hu)return xt().add(r.key);{let l=xt();const h=a.Iu.get(e);if(!h)return l;for(const f of h){const g=a.Tu.get(f);l=l.unionWith(g.view.nu)}return l}}function dw(s){const e=Et(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=lw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VS.bind(null,e),e.Pu.H_=vS.bind(null,e.eventManager),e.Pu.yu=wS.bind(null,e.eventManager),e}function zS(s){const e=Et(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OS.bind(null,e),e}class hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,a){return null}Mu(e,a){return null}vu(e){return U2(this.persistence,new j2,e.initialUser,this.serializer)}Cu(e){return new Yv(Df.mi,this.serializer)}Du(e){return new F2}async terminate(){var e,a;(e=this.gcScheduler)==null||e.stop(),(a=this.indexBackfillerScheduler)==null||a.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hu.provider={build:()=>new hu};class US extends hu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,a){Bt(this.persistence.referenceDelegate instanceof cu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new E2(r,e.asyncQueue,a)}Cu(e){const a=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new Yv((r=>cu.mi(r,a)),this.serializer)}}class cf{async initialize(e,a){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>C_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jS.bind(null,this.syncEngine),await mS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yS})()}createDatastore(e){const a=Tu(e.databaseInfo.databaseId),r=(function(h){return new J2(h)})(e.databaseInfo);return(function(h,f,g,v){return new eS(h,f,g,v)})(e.authCredentials,e.appCheckCredentials,r,a)}createRemoteStore(e){return(function(r,l,h,f,g){return new aS(r,l,h,f,g)})(this.localStore,this.datastore,e.asyncQueue,(a=>C_(this.syncEngine,a,0)),(function(){return v_.v()?new v_:new Q2})())}createSyncEngine(e,a){return(function(l,h,f,g,v,_,T){const b=new CS(l,h,f,g,v,_);return T&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,a)}async terminate(){var e,a;await(async function(l){const h=Et(l);it(pr,"RemoteStore shutting down."),h.Ea.add(5),await ol(h),h.Aa.shutdown(),h.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(a=this.eventManager)==null||a.terminate()}}cf.provider={build:()=>new cf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ba("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,a){setTimeout((()=>{this.muted||e(a)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="FirestoreClient";class $S{constructor(e,a,r,l,h){this.authCredentials=e,this.appCheckCredentials=a,this.asyncQueue=r,this.databaseInfo=l,this.user=Ke.UNAUTHENTICATED,this.clientId=yf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=h,this.authCredentials.start(r,(async f=>{it(Oi,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(r,(f=>(it(Oi,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){const r=jf(a,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function qd(s,e){s.asyncQueue.verifyOperationInProgress(),it(Oi,"Initializing OfflineComponentProvider");const a=s.configuration;await e.initialize(a);let r=a.initialUser;s.setCredentialChangeListener((async l=>{r.isEqual(l)||(await Kv(e.localStore,l),r=l)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function N_(s,e){s.asyncQueue.verifyOperationInProgress();const a=await BS(s);it(Oi,"Initializing OnlineComponentProvider"),await e.initialize(a,s.configuration),s.setCredentialChangeListener((r=>E_(e.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,l)=>E_(e.remoteStore,l))),s._onlineComponents=e}async function BS(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){it(Oi,"Using user provided OfflineComponentProvider");try{await qd(s,s._uninitializedComponentsProvider._offline)}catch(e){const a=e;if(!(function(l){return l.name==="FirebaseError"?l.code===K.FAILED_PRECONDITION||l.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(a))throw a;Es("Error using user provided cache. Falling back to memory cache: "+a),await qd(s,new hu)}}else it(Oi,"Using default OfflineComponentProvider"),await qd(s,new US(void 0));return s._offlineComponents}async function fw(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(it(Oi,"Using user provided OnlineComponentProvider"),await N_(s,s._uninitializedComponentsProvider._online)):(it(Oi,"Using default OnlineComponentProvider"),await N_(s,new cf))),s._onlineComponents}function HS(s){return fw(s).then((e=>e.syncEngine))}async function PS(s){const e=await fw(s),a=e.eventManager;return a.onListen=AS.bind(null,e.syncEngine),a.onUnlisten=IS.bind(null,e.syncEngine),a.onFirstRemoteStoreListen=NS.bind(null,e.syncEngine),a.onLastRemoteStoreUnlisten=RS.bind(null,e.syncEngine),a}function GS(s,e,a={}){const r=new Ni;return s.asyncQueue.enqueueAndForget((async()=>(function(h,f,g,v,_){const T=new qS({next:O=>{T.Nu(),f.enqueueAndForget((()=>_S(h,b))),O.fromCache&&v.source==="server"?_.reject(new at(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(O)},error:O=>_.reject(O)}),b=new ES(g,T,{includeMetadataChanges:!0,qa:!0});return gS(h,b)})(await PS(s),s.asyncQueue,e,a,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firestore.googleapis.com",I_=!0;class R_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new at(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pw,this.ssl=I_}else this.host=e.host,this.ssl=e.ssl??I_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<v2)throw new at(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ab("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mw(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new at(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new at(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new at(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,l){return r.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cu{constructor(e,a,r,l){this._authCredentials=e,this._appCheckCredentials=a,this._databaseId=r,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new R_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new at(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new at(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new R_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new QT;switch(r.type){case"firstParty":return new JT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new at(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(a){const r=D_.get(a);r&&(it("ComponentProvider","Removing Datastore"),D_.delete(a),r.terminate())})(this),Promise.resolve()}}function FS(s,e,a,r={}){var _;s=Xo(s,Cu);const l=ff(e),h=s._getSettings(),f={...h,emulatorOptions:s._getEmulatorOptions()},g=`${e}:${a}`;l&&(wE(`https://${g}`),SE("Firestore",!0)),h.host!==pw&&h.host!==g&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...h,host:g,ssl:l,emulatorOptions:r};if(!Wc(v,f)&&(s._setSettings(v),r.mockUserToken)){let T,b;if(typeof r.mockUserToken=="string")T=r.mockUserToken,b=Ke.MOCK_USER;else{T=EE(r.mockUserToken,(_=s._app)==null?void 0:_.options.projectId);const O=r.mockUserToken.sub||r.mockUserToken.user_id;if(!O)throw new at(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Ke(O)}s._authCredentials=new YT(new iv(T,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,a,r){this.converter=a,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Er(this.firestore,e,this._query)}}class ke{constructor(e,a,r){this.converter=a,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,a,r){if(il(a,ke._jsonSchema))return new ke(e,r||null,new ut(Zt.fromString(a.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Ae("string",ke._jsonSchemaVersion),referencePath:Ae("string")};class Di extends Er{constructor(e,a,r){super(e,a,bv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new ut(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function yw(s,e,...a){if(s=ws(s),rv("collection","path",e),s instanceof Cu){const r=Zt.fromString(e,...a);return Hg(r),new Di(s,null,r)}{if(!(s instanceof ke||s instanceof Di))throw new at(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Zt.fromString(e,...a));return Hg(r),new Di(s.firestore,null,r)}}function gw(s,e,...a){if(s=ws(s),arguments.length===1&&(e=yf.newId()),rv("doc","path",e),s instanceof Cu){const r=Zt.fromString(e,...a);return Bg(r),new ke(s,null,new ut(r))}{if(!(s instanceof ke||s instanceof Di))throw new at(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Zt.fromString(e,...a));return Bg(r),new ke(s.firestore,s instanceof Di?s.converter:null,new ut(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="AsyncQueue";class V_{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jv(this,"async_queue_retry"),this._c=()=>{const r=Ud();r&&it(x_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const a=Ud();a&&typeof a.addEventListener=="function"&&a.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const a=Ud();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const a=new Ni;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(a.resolve,a.reject),a.promise))).then((()=>a.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Rs(e))throw e;it(x_,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const a=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ba("INTERNAL UNHANDLED ERROR: ",M_(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=a,a}enqueueAfterDelay(e,a,r){this.uc(),this.oc.indexOf(e)>-1&&(a=0);const l=Lf.createAndSchedule(this,e,a,r,(h=>this.hc(h)));return this.tc.push(l),l}uc(){this.nc&&mt(47125,{Pc:M_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const a of this.tc)if(a.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((a,r)=>a.targetTimeMs-r.targetTimeMs));for(const a of this.tc)if(a.skipDelay(),e!=="all"&&a.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const a=this.tc.indexOf(e);this.tc.splice(a,1)}}function M_(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Au extends Cu{constructor(e,a,r,l){super(e,a,r,l),this.type="firestore",this._queue=new V_,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function QS(s,e){const a=typeof s=="object"?s:OT(),r=typeof s=="string"?s:au,l=IT(a,"firestore").getImmediate({identifier:r});if(!l._initialized){const h=_E("firestore");h&&FS(l,...h)}return l}function _w(s){if(s._terminated)throw new at(K.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||YS(s),s._firestoreClient}function YS(s){var r,l,h;const e=s._freezeSettings(),a=(function(g,v,_,T){return new mb(g,v,_,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,mw(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(l=e.localCache)!=null&&l._offlineComponentProvider&&((h=e.localCache)!=null&&h._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new $S(s._authCredentials,s._appCheckCredentials,s._queue,a,s._componentsProvider&&(function(g){const v=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(v),_online:v}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vn(Fe.fromBase64String(e))}catch(a){throw new at(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(e){return new Vn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(il(e,Vn._jsonSchema))return Vn.fromBase64String(e.bytes)}}Vn._jsonSchemaVersion="firestore/bytes/1.0",Vn._jsonSchema={type:Ae("string",Vn._jsonSchemaVersion),bytes:Ae("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(...e){for(let a=0;a<e.length;++a)if(e[a].length===0)throw new at(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,a){if(!isFinite(e)||e<-90||e>90)throw new at(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(a)||a<-180||a>180)throw new at(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=e,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Rt(this._lat,e._lat)||Rt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:va._jsonSchemaVersion}}static fromJSON(e){if(il(e,va._jsonSchema))return new va(e.latitude,e.longitude)}}va._jsonSchemaVersion="firestore/geoPoint/1.0",va._jsonSchema={type:Ae("string",va._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this._values=(e||[]).map((a=>a))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,l){if(r.length!==l.length)return!1;for(let h=0;h<r.length;++h)if(r[h]!==l[h])return!1;return!0})(this._values,e._values)}toJSON(){return{type:wa._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(il(e,wa._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((a=>typeof a=="number")))return new wa(e.vectorValues);throw new at(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}wa._jsonSchemaVersion="firestore/vectorValue/1.0",wa._jsonSchema={type:Ae("string",wa._jsonSchemaVersion),vectorValues:Ae("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=/^__.*__$/;class XS{constructor(e,a,r){this.data=e,this.fieldMask=a,this.fieldTransforms=r}toMutation(e,a){return this.fieldMask!==null?new vr(e,this.data,this.fieldMask,a,this.fieldTransforms):new rl(e,this.data,a,this.fieldTransforms)}}function ww(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mt(40011,{Ac:s})}}class $f{constructor(e,a,r,l,h,f){this.settings=e,this.databaseId=a,this.serializer=r,this.ignoreUndefinedProperties=l,h===void 0&&this.Rc(),this.fieldTransforms=h||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new $f({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var l;const a=(l=this.path)==null?void 0:l.child(e),r=this.Vc({path:a,fc:!1});return r.gc(e),r}yc(e){var l;const a=(l=this.path)==null?void 0:l.child(e),r=this.Vc({path:a,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return du(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((a=>e.isPrefixOf(a)))!==void 0||this.fieldTransforms.find((a=>e.isPrefixOf(a.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(ww(this.Ac)&&KS.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class JS{constructor(e,a,r){this.databaseId=e,this.ignoreUndefinedProperties=a,this.serializer=r||Tu(e)}Cc(e,a,r,l=!1){return new $f({Ac:e,methodName:a,Dc:r,path:Ge.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ew(s){const e=s._freezeSettings(),a=Tu(s._databaseId);return new JS(s._databaseId,!!e.ignoreUndefinedProperties,a)}function ZS(s,e,a,r,l,h={}){const f=s.Cc(h.merge||h.mergeFields?2:0,e,a,l);Sw("Data must be an object, but it was:",f,r);const g=Tw(r,f);let v,_;if(h.merge)v=new Gn(f.fieldMask),_=f.fieldTransforms;else if(h.mergeFields){const T=[];for(const b of h.mergeFields){const O=tC(e,b,a);if(!f.contains(O))throw new at(K.INVALID_ARGUMENT,`Field '${O}' is specified in your field mask but missing from your input data.`);nC(T,O)||T.push(O)}v=new Gn(T),_=f.fieldTransforms.filter((b=>v.covers(b.field)))}else v=null,_=f.fieldTransforms;return new XS(new xn(g),v,_)}function WS(s,e,a,r=!1){return Bf(a,s.Cc(r?4:3,e))}function Bf(s,e){if(bw(s=ws(s)))return Sw("Unsupported field value:",e,s),Tw(s,e);if(s instanceof vw)return(function(r,l){if(!ww(l.Ac))throw l.Sc(`${r._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${r._methodName}() is not currently supported inside arrays`);const h=r._toFieldTransform(l);h&&l.fieldTransforms.push(h)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,l){const h=[];let f=0;for(const g of r){let v=Bf(g,l.wc(f));v==null&&(v={nullValue:"NULL_VALUE"}),h.push(v),f++}return{arrayValue:{values:h}}})(s,e)}return(function(r,l){if((r=ws(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kb(l.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const h=ee.fromDate(r);return{timestampValue:lu(l.serializer,h)}}if(r instanceof ee){const h=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(l.serializer,h)}}if(r instanceof va)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vn)return{bytesValue:qv(l.serializer,r._byteString)};if(r instanceof ke){const h=l.databaseId,f=r.firestore._databaseId;if(!f.isEqual(h))throw l.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${h.projectId}/${h.database}`);return{referenceValue:Af(r.firestore._databaseId||l.databaseId,r._key.path)}}if(r instanceof wa)return(function(f,g){return{mapValue:{fields:{[mv]:{stringValue:pv},[iu]:{arrayValue:{values:f.toArray().map((_=>{if(typeof _!="number")throw g.Sc("VectorValues must only contain numeric values.");return Tf(g.serializer,_)}))}}}}}})(r,l);throw l.Sc(`Unsupported field value: ${fu(r)}`)})(s,e)}function Tw(s,e){const a={};return lv(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gr(s,((r,l)=>{const h=Bf(l,e.mc(r));h!=null&&(a[r]=h)})),{mapValue:{fields:a}}}function bw(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ee||s instanceof va||s instanceof Vn||s instanceof ke||s instanceof vw||s instanceof wa)}function Sw(s,e,a){if(!bw(a)||!sv(a)){const r=fu(a);throw r==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+r)}}function tC(s,e,a){if((e=ws(e))instanceof qf)return e._internalPath;if(typeof e=="string")return Cw(s,e);throw du("Field path arguments must be of type string or ",s,!1,void 0,a)}const eC=new RegExp("[~\\*/\\[\\]]");function Cw(s,e,a){if(e.search(eC)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,a);try{return new qf(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,a)}}function du(s,e,a,r,l){const h=r&&!r.isEmpty(),f=l!==void 0;let g=`Function ${e}() called with invalid data`;a&&(g+=" (via `toFirestore()`)"),g+=". ";let v="";return(h||f)&&(v+=" (found",h&&(v+=` in field ${r}`),f&&(v+=` in document ${l}`),v+=")"),new at(K.INVALID_ARGUMENT,g+s+v)}function nC(s,e){return s.some((a=>a.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,a,r,l,h){this._firestore=e,this._userDataWriter=a,this._key=r,this._document=l,this._converter=h}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new aC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const a=this._document.data.field(Hf("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a)}}}class aC extends Aw{data(){return super.data()}}function Hf(s,e){return typeof e=="string"?Cw(s,e):e instanceof qf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new at(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class Nw extends Pf{}function rC(s,e,...a){let r=[];e instanceof Pf&&r.push(e),r=r.concat(a),(function(h){const f=h.filter((v=>v instanceof Ff)).length,g=h.filter((v=>v instanceof Gf)).length;if(f>1||f>0&&g>0)throw new at(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const l of r)s=l._apply(s);return s}class Gf extends Nw{constructor(e,a,r){super(),this._field=e,this._op=a,this._value=r,this.type="where"}static _create(e,a,r){return new Gf(e,a,r)}_apply(e){const a=this._parse(e);return Dw(e._query,a),new Er(e.firestore,e.converter,Zd(e._query,a))}_parse(e){const a=Ew(e.firestore);return(function(h,f,g,v,_,T,b){let O;if(_.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new at(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){L_(b,T);const Z=[];for(const tt of b)Z.push(O_(v,h,tt));O={arrayValue:{values:Z}}}else O=O_(v,h,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||L_(b,T),O=WS(g,f,b,T==="in"||T==="not-in");return Ce.create(_,T,O)})(e._query,"where",a,e.firestore._databaseId,this._field,this._op,this._value)}}class Ff extends Pf{constructor(e,a){super(),this.type=e,this._queryConstraints=a}static _create(e,a){return new Ff(e,a)}_parse(e){const a=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return a.length===1?a[0]:Fn.create(a,this._getOperator())}_apply(e){const a=this._parse(e);return a.getFilters().length===0?e:((function(l,h){let f=l;const g=h.getFlattenedFilters();for(const v of g)Dw(f,v),f=Zd(f,v)})(e._query,a),new Er(e.firestore,e.converter,Zd(e._query,a)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qf extends Nw{constructor(e,a){super(),this._field=e,this._direction=a,this.type="orderBy"}static _create(e,a){return new Qf(e,a)}_apply(e){const a=(function(l,h,f){if(l.startAt!==null)throw new at(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new at(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new el(h,f)})(e._query,this._field,this._direction);return new Er(e.firestore,e.converter,(function(l,h){const f=l.explicitOrderBy.concat([h]);return new xs(l.path,l.collectionGroup,f,l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)})(e._query,a))}}function sC(s,e="asc"){const a=e,r=Hf("orderBy",s);return Qf._create(r,a)}function O_(s,e,a){if(typeof(a=ws(a))=="string"){if(a==="")throw new at(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sv(e)&&a.indexOf("/")!==-1)throw new at(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);const r=e.path.child(Zt.fromString(a));if(!ut.isDocumentKey(r))throw new at(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jg(s,new ut(r))}if(a instanceof ke)return Jg(s,a._key);throw new at(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fu(a)}.`)}function L_(s,e){if(!Array.isArray(s)||s.length===0)throw new at(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Dw(s,e){const a=(function(l,h){for(const f of l)for(const g of f.getFlattenedFilters())if(h.indexOf(g.op)>=0)return g.op;return null})(s.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(a!==null)throw a===e.op?new at(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new at(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${a.toString()}' filters.`)}class oC{convertValue(e,a="none"){switch(Vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,a);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,a);case 11:return this.convertObject(e.mapValue,a);case 10:return this.convertVectorValue(e.mapValue);default:throw mt(62114,{value:e})}}convertObject(e,a){return this.convertObjectMap(e.fields,a)}convertObjectMap(e,a="none"){const r={};return gr(e,((l,h)=>{r[l]=this.convertValue(h,a)})),r}convertVectorValue(e){var r,l,h;const a=(h=(l=(r=e.fields)==null?void 0:r[iu].arrayValue)==null?void 0:l.values)==null?void 0:h.map((f=>me(f.doubleValue)));return new wa(a)}convertGeoPoint(e){return new va(me(e.latitude),me(e.longitude))}convertArray(e,a){return(e.values||[]).map((r=>this.convertValue(r,a)))}convertServerTimestamp(e,a){switch(a){case"previous":const r=yu(e);return r==null?null:this.convertValue(r,a);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const a=Ri(e);return new ee(a.seconds,a.nanos)}convertDocumentKey(e,a){const r=Zt.fromString(e);Bt(Fv(r),9688,{name:e});const l=new Wo(r.get(1),r.get(3)),h=new ut(r.popFirst(5));return l.isEqual(a)||Ba(`Document ${h} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(s,e,a){let r;return r=s?s.toFirestore(e):e,r}class Hc{constructor(e,a){this.hasPendingWrites=e,this.fromCache=a}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _s extends Aw{constructor(e,a,r,l,h,f){super(e,a,r,l,f),this._firestore=e,this._firestoreImpl=e,this.metadata=h}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const a=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,a={}){if(this._document){const r=this._document.data.field(Hf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,a.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new at(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,a={};return a.type=_s._jsonSchemaVersion,a.bundle="",a.bundleSource="DocumentSnapshot",a.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?a:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),a.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),a)}}_s._jsonSchemaVersion="firestore/documentSnapshot/1.0",_s._jsonSchema={type:Ae("string",_s._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class Jc extends _s{data(e={}){return super.data(e)}}class vs{constructor(e,a,r,l){this._firestore=e,this._userDataWriter=a,this._snapshot=l,this.metadata=new Hc(l.hasPendingWrites,l.fromCache),this.query=r}get docs(){const e=[];return this.forEach((a=>e.push(a))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,a){this._snapshot.docs.forEach((r=>{e.call(a,new Jc(this._firestore,this._userDataWriter,r.key,r,new Hc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const a=!!e.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new at(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=(function(l,h){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map((g=>{const v=new Jc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Hc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:v,oldIndex:-1,newIndex:f++}}))}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>h||g.type!==3)).map((g=>{const v=new Jc(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Hc(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let _=-1,T=-1;return g.type!==0&&(_=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),T=f.indexOf(g.doc.key)),{type:cC(g.type),doc:v,oldIndex:_,newIndex:T}}))}})(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new at(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const a=[],r=[],l=[];return this.docs.forEach((h=>{h._document!==null&&(a.push(h._document),r.push(this._userDataWriter.convertObjectMap(h._document.data.value.mapValue.fields,"previous")),l.push(h.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cC(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mt(61501,{type:s})}}vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:Ae("string",vs._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class uC extends oC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vn(e)}convertReference(e){const a=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,a)}}function hC(s){s=Xo(s,Er);const e=Xo(s.firestore,Au),a=_w(e),r=new uC(e);return iC(s._query),GS(a,s._query).then((l=>new vs(e,r,s,l)))}function dC(s){return Iw(Xo(s.firestore,Au),[new bf(s._key,ga.none())])}function fC(s,e){const a=Xo(s.firestore,Au),r=gw(s),l=lC(s.converter,e);return Iw(a,[ZS(Ew(s.firestore),"addDoc",r._key,l,s.converter!==null,{}).toMutation(r._key,ga.exists(!1))]).then((()=>r))}function Iw(s,e){return(function(r,l){const h=new Ni;return r.asyncQueue.enqueueAndForget((async()=>xS(await HS(r),l,h))),h.promise})(_w(s),e)}(function(e,a=!0){(function(l){Ds=l})(MT),eu(new Yo("firestore",((r,{instanceIdentifier:l,options:h})=>{const f=r.getProvider("app").getImmediate(),g=new Au(new KT(r.getProvider("auth-internal")),new ZT(f,r.getProvider("app-check-internal")),(function(_,T){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new at(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(_.options.projectId,T)})(f,l),f);return h={useFetchStreams:a,...h},g._setSettings(h),g}),"PUBLIC").setMultipleInstances(!0)),ys(zg,Ug,e),ys(zg,Ug,"esm2020")})();const uf={apiKey:"AIzaSyD7HTMY0EsktRFuEymrBJob_XKzaSh5EK0",authDomain:"drawer-integration.firebaseapp.com",projectId:"drawer-integration",storageBucket:"drawer-integration.appspot.com",messagingSenderId:"882803140404",appId:"1:882803140404:web:3eef58d2e8fbeba1aca761"},mC=async s=>{yr&&await dC(gw(yr,"snippets",s))},Yf=!!(uf.apiKey&&uf.projectId);let yr=null;if(Yf)try{const s=Y_(uf);yr=QS(s)}catch(s){console.error("Firebase initialization error:",s)}const j_=async()=>{if(!Yf||!yr)return[];try{const s=rC(yw(yr,"snippets"),sC("date","desc"));return(await hC(s)).docs.map(a=>({id:a.id,...a.data()}))}catch(s){return console.error("Error fetching snippets:",s),[]}},pC=async s=>{if(!Yf||!yr)return console.warn("Firebase not configured. Data will only be saved locally."),null;try{return(await fC(yw(yr,"snippets"),s)).id}catch(e){throw console.error("Error adding snippet:",e),e}},yC="wisercode",Pc=48,Gc=s=>{if(/^\d{2}-\d{2}-\d{2}$/.test(s)){const[e,a,r]=s.split("-");return new Date(`20${e}-${a}-${r}`)}return new Date(s)},gC=()=>{const[s,e]=fe.useState([]),[a,r]=fe.useState(""),[l,h]=fe.useState(!1),[f,g]=fe.useState("date-desc"),[v,_]=fe.useState(!0),[T,b]=fe.useState(1);fe.useEffect(()=>{(async()=>{e(oE);try{const jt=await j_();jt.length>0&&e(ft=>{const C=new Set(ft.map(A=>A.id));return[...jt.filter(A=>!C.has(A.id)),...ft]})}catch{_(!1)}})()},[]);const O=()=>prompt("Enter admin code")===yC,G=async lt=>{let jt=Date.now().toString();try{const C=await pC(lt);C&&(jt=C)}catch{}const ft={id:jt,...lt};e(C=>[ft,...C]),b(1),g("date-desc")},Z=fe.useMemo(()=>{const lt=a.toLowerCase();return s.filter(ft=>ft.themeName.toLowerCase().includes(lt)||ft.storeName.toLowerCase().includes(lt)||ft.author.toLowerCase().includes(lt)||ft.code.toLowerCase().includes(lt)).sort((ft,C)=>f==="date-desc"?Gc(C.date).getTime()-Gc(ft.date).getTime():f==="date-asc"?Gc(ft.date).getTime()-Gc(C.date).getTime():f==="theme-asc"?ft.themeName.localeCompare(C.themeName):0)},[s,a,f]),tt=Math.ceil(Z.length/Pc),J=Z.slice((T-1)*Pc,T*Pc);fe.useEffect(()=>{b(1)},[a,f]);const gt=s.length,vt=s.length,pt=async()=>{if(!O()){alert("Not allowed");return}const lt=await j_();if(!lt.length){alert("No snippets found.");return}const jt=window.confirm("Are you sure you want to delete all snippets from Firebase after downloading?"),ft=`export const DOWNLOADED_SNIPPETS = [
${lt.map(x=>{const I=x.code.includes(`
`);return`  {
    id: '${x.id}',
    date: '${x.date}',
    storeName: '${x.storeName}',
    themeName: '${x.themeName}',
    code: ${I?`\`${x.code}\``:`'${x.code.replace(/'/g,"\\'")}'`},
    author: '${x.author}',
    themeChanges: '${x.themeChanges||""}',
    screenshot: '${x.screenshot||""}'
  }`}).join(`,
`)}
];`,C=new Blob([ft],{type:"text/javascript"}),S=URL.createObjectURL(C),A=document.createElement("a");if(A.href=S,A.download="snippets.js",A.click(),URL.revokeObjectURL(S),!jt){alert("Download completed. Firebase data was not deleted.");return}for(const x of lt)await mC(x.id);e(x=>x.filter(I=>!lt.find(L=>L.id===I.id))),alert("Download completed and Firebase data deleted.")};return B.jsxs("div",{className:"app",children:[B.jsx("nav",{className:"navbar",children:B.jsxs("div",{className:"navbar-content",children:[B.jsxs("div",{className:"navbar-left",children:[B.jsx("div",{className:"navbar-icon",children:B.jsx(U_,{})}),B.jsxs("div",{className:"navbar-title",children:[B.jsx("h1",{children:"WiserCode"}),B.jsx("p",{children:"Integration Library"})]})]}),B.jsxs("button",{onClick:()=>h(!0),className:"btn-primary desktop-only",children:[B.jsx(xd,{size:18}),"Add Integration"]})]})}),B.jsxs("main",{className:"main",children:[B.jsxs("div",{className:"header",children:[B.jsxs("div",{children:[B.jsx("h2",{className:"page-title",children:"Theme Repository"}),B.jsx("p",{className:"page-desc",children:"Centralized hub for Shopify drawer integration codes."})]}),B.jsxs("div",{className:"stats",children:[B.jsxs("div",{className:"stat-box",children:[B.jsx("span",{className:"stat-label",children:"Total Codes"}),B.jsx("span",{className:"stat-value",children:gt})]}),B.jsxs("div",{className:"stat-box",children:[B.jsx("span",{className:"stat-label",children:"Stores"}),B.jsx("span",{className:"stat-value",children:vt})]})]})]}),B.jsxs("div",{className:"filter-bar",children:[B.jsxs("div",{className:"search-wrapper",children:[B.jsx(J1,{className:"search-icon"}),B.jsx("input",{type:"text",className:"search-input",placeholder:"Search themes, store URLs, authors...",value:a,onChange:lt=>r(lt.target.value)})]}),B.jsxs("div",{className:"filter-right",children:[B.jsxs("select",{value:f,onChange:lt=>g(lt.target.value),className:"sort-select",children:[B.jsx("option",{value:"date-desc",children:"Newest First"}),B.jsx("option",{value:"date-asc",children:"Oldest First"}),B.jsx("option",{value:"theme-asc",children:"Theme (A-Z)"})]}),B.jsx("button",{className:"btn-primary mobile-only",onClick:()=>h(!0),children:B.jsx(xd,{size:18})})]})]}),Z.length>Pc&&B.jsxs("div",{className:"pagination",children:[B.jsx("button",{disabled:T===1,onClick:()=>b(lt=>lt-1),children:B.jsx(N1,{size:16})}),B.jsxs("span",{className:"page-count",children:["Page ",T," of ",tt]}),B.jsx("button",{disabled:T===tt,onClick:()=>b(lt=>lt+1),children:B.jsx(I1,{size:16})})]}),B.jsx("div",{className:"grid",children:J.length>0?J.map(lt=>B.jsx(rE,{snippet:lt},lt.id)):B.jsxs("div",{className:"empty",children:[B.jsx("div",{className:"empty-icon",children:B.jsx(z1,{})}),B.jsx("h3",{children:"No results found"}),B.jsxs("p",{children:["No integration codes match “",a,"”."]}),B.jsxs("button",{className:"btn-link",onClick:()=>h(!0),children:[B.jsx(xd,{size:16})," Add new integration"]})]})}),B.jsx("button",{onClick:pt,className:"btn-secondary desktop-only",children:"Download Firebase data Snippets"})]}),B.jsxs("footer",{className:"footer",children:[B.jsxs("p",{children:["© ",new Date().getFullYear()," WiserCode. Internal Development Tool."]}),B.jsxs("div",{className:"status",children:[B.jsx("span",{className:v?"dot green":"dot yellow"}),B.jsx("span",{children:v?"Database Connected":"Local Mode"})]})]}),B.jsx(sE,{isOpen:l,onClose:()=>h(!1),onSave:G})]})},Rw=document.getElementById("root");if(!Rw)throw new Error("Could not find root element to mount to");const _C=_1.createRoot(Rw);_C.render(B.jsx(u1.StrictMode,{children:B.jsx(gC,{})}));
