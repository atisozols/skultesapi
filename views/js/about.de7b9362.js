"use strict";(self["webpackChunkgymadmin"]=self["webpackChunkgymadmin"]||[]).push([[443],{166:function(t,e,i){i.r(e),i.d(e,{default:function(){return jr}});var n=i(252),s=i(577);const r=t=>((0,n.dD)("data-v-56fb9512"),t=t(),(0,n.Cn)(),t),o={class:"title"},a=r((()=>(0,n._)("br",null,null,-1))),h=r((()=>(0,n._)("span",{class:"title__name"},"skultes",-1))),l=r((()=>(0,n._)("br",null,null,-1))),u=r((()=>(0,n._)("span",{class:"title__gym"},"gym",-1))),c={key:1};function f(t,e,i,r,f,p){const g=(0,n.up)("LoadingSpinner"),d=(0,n.up)("AppointmentList"),m=(0,n.up)("InputForm"),y=(0,n.up)("Cart");return(0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)(["admin",{hidden:this.$store.getters.loadingStatus}])},[(0,n._)("button",{onClick:e[0]||(e[0]=(...t)=>p.logout&&p.logout(...t)),class:(0,s.C_)(["sign-out",{hidden:this.$store.getters.loadingStatus}])},"×",2),(0,n._)("h1",o,[(0,n._)("span",{class:(0,s.C_)(["title__admin",{hidden:this.$store.getters.loadingStatus}])},"admin",2),a,h,l,u]),this.$store.getters.loadingStatus?((0,n.wg)(),(0,n.j4)(g,{key:0})):((0,n.wg)(),(0,n.iD)("div",c,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.availableDates,((t,e)=>((0,n.wg)(),(0,n.j4)(d,{appointments:p.todaysAppointments(e),date:t.date_short,day:t.day_text},null,8,["appointments","date","day"])))),256)),(0,n.Wm)(m),this.$store.getters.cart.length>0?((0,n.wg)(),(0,n.j4)(y,{key:0,payment:!1})):(0,n.kq)("",!0)]))],2)}const p={class:"appointment-list"},g={class:"appointment"},d=["href"],m={key:1},y=(0,n._)("div",{class:"no-appointment"},[(0,n._)("span",null,"Nav pieteikumu")],-1),v=[y];function E(t,e,i,r,o,a){return(0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("h4",null,[(0,n._)("span",null,(0,s.zw)(i.date),1),(0,n._)("span",null,(0,s.zw)(i.day),1)]),i.appointments.length>0?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)(i.appointments,(t=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",g,[(0,n._)("span",null,(0,s.zw)(this.timeSlots[t.start_index]+" - "+this.timeSlots[t.end_index]),1),(0,n._)("span",null,[(0,n._)("a",{class:"call",href:"tel:"+t.phone},(0,s.zw)(t.name),9,d)])])])))),256)):((0,n.wg)(),(0,n.iD)("div",m,v))])}var b={name:"AppointmentList",data(){return{timeSlots:{0:"06:30",1:"06:45",2:"07:00",3:"07:15",4:"07:30",5:"07:45",6:"08:00",7:"08:15",8:"08:30",9:"08:45",10:"09:00",11:"09:15",12:"09:30",13:"09:45",14:"10:00",15:"10:15",16:"10:30",17:"10:45",18:"11:00",19:"11:15",20:"11:30",21:"11:45",22:"12:00",23:"12:15",24:"12:30",25:"12:45",26:"13:00",27:"13:15",28:"13:30",29:"13:45",30:"14:00",31:"14:15",32:"14:30",33:"14:45",34:"15:00",35:"15:15",36:"15:30",37:"15:45",38:"16:00",39:"16:15",40:"16:30",41:"16:45",42:"17:00",43:"17:15",44:"17:30",45:"17:45",46:"18:00",47:"18:15",48:"18:30",49:"18:45",50:"19:00",51:"19:15",52:"19:30",53:"19:45",54:"20:00",55:"20:15",56:"20:30",57:"20:45",58:"21:00",59:"21:15",60:"21:30",61:"21:45",62:"22:00",63:"22:15",64:"22:30",65:"22:45",66:"23:00",67:"23:15",68:"23:30",69:"23:45",70:"00:00"}}},props:["appointments","day","date"]},w=i(744);const A=(0,w.Z)(b,[["render",E]]);var T=A,_=i(832),S=i(425),I=i(98),C=i(444),R=i(463),N=i(816),L=i(333);
/**
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
 */
class k{constructor(t,e){this._delegate=t,this.firebase=e,(0,N._addComponent)(t,new R.wA("app-compat",(()=>this),"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((t=>{this._delegate.checkDestroyed(),t()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,N.deleteApp)(this._delegate))))}_getService(t,e=N._DEFAULT_ENTRY_NAME){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(t);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:e})}_removeServiceInstance(t,e=N._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){(0,N._addComponent)(this._delegate,t)}_addOrOverwriteComponent(t){(0,N._addOrOverwriteComponent)(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const D={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},P=new C.LL("app-compat","Firebase",D);
/**
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
 */
function O(t){const e={},i={__esModule:!0,initializeApp:r,app:s,registerVersion:N.registerVersion,setLogLevel:N.setLogLevel,onLog:N.onLog,apps:null,SDK_VERSION:N.SDK_VERSION,INTERNAL:{registerComponent:a,removeApp:n,useAsService:h,modularAPIs:N}};function n(t){delete e[t]}function s(t){if(t=t||N._DEFAULT_ENTRY_NAME,!(0,C.r3)(e,t))throw P.create("no-app",{appName:t});return e[t]}function r(n,s={}){const r=N.initializeApp(n,s);if((0,C.r3)(e,r.name))return e[r.name];const o=new t(r,i);return e[r.name]=o,o}function o(){return Object.keys(e).map((t=>e[t]))}function a(e){const n=e.name,r=n.replace("-compat","");if(N._registerComponent(e)&&"PUBLIC"===e.type){const o=(t=s())=>{if("function"!==typeof t[r])throw P.create("invalid-app-argument",{appName:n});return t[r]()};void 0!==e.serviceProps&&(0,C.ZB)(o,e.serviceProps),i[r]=o,t.prototype[r]=function(...t){const i=this._getService.bind(this,n);return i.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?i[r]:null}function h(t,e){if("serverAuth"===e)return null;const i=e;return i}return i["default"]=i,Object.defineProperty(i,"apps",{get:o}),s["App"]=t,i}
/**
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
 */function x(){const t=O(k);function e(e){(0,C.ZB)(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:x,extendNamespace:e,createSubscribe:C.ne,ErrorFactory:C.LL,deepExtend:C.ZB}),t}const M=x(),U=new L.Yd("@firebase/app-compat"),F="@firebase/app-compat",j="0.2.19";
/**
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
 */
/**
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
 */
function B(t){(0,N.registerVersion)(F,j,t)}
/**
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
 */if((0,C.jU)()&&void 0!==self.firebase){U.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&U.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const V=M;B();var H="firebase",K="10.4.0";
/**
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
 */
V.registerVersion(H,K,"app-compat");var z,X="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},$={},G=G||{},Y=X||self;function q(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function W(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function J(t){return Object.prototype.hasOwnProperty.call(t,Q)&&t[Q]||(t[Q]=++Z)}var Q="closure_uid_"+(1e9*Math.random()>>>0),Z=0;function tt(t,e,i){return t.call.apply(t.bind,arguments)}function et(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function it(t,e,i){return it=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tt:et,it.apply(null,arguments)}function nt(t,e){var i=Array.prototype.slice.call(arguments,1);return function(){var e=i.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function st(t,e){function i(){}i.prototype=e.prototype,t.$=e.prototype,t.prototype=new i,t.prototype.constructor=t,t.ac=function(t,i,n){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[i].apply(t,s)}}function rt(){this.s=this.s,this.o=this.o}var ot=0;rt.prototype.s=!1,rt.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==ot)||J(this)},rt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const at=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let i=0;i<t.length;i++)if(i in t&&t[i]===e)return i;return-1};function ht(t){const e=t.length;if(0<e){const i=Array(e);for(let n=0;n<e;n++)i[n]=t[n];return i}return[]}function lt(t,e){for(let i=1;i<arguments.length;i++){const e=arguments[i];if(q(e)){const i=t.length||0,n=e.length||0;t.length=i+n;for(let s=0;s<n;s++)t[i+s]=e[s]}else t.push(e)}}function ut(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var ct=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",(()=>{}),e),Y.removeEventListener("test",(()=>{}),e)}catch(i){}return t}();function ft(t){return/^[\s\xa0]*$/.test(t)}function pt(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function gt(t){return-1!=pt().indexOf(t)}function dt(t){return dt[" "](t),t}function mt(t,e){var i=ns;return Object.prototype.hasOwnProperty.call(i,t)?i[t]:i[t]=e(t)}dt[" "]=function(){};var yt,vt,Et=gt("Opera"),bt=gt("Trident")||gt("MSIE"),wt=gt("Edge"),At=wt||bt,Tt=gt("Gecko")&&!(-1!=pt().toLowerCase().indexOf("webkit")&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),_t=-1!=pt().toLowerCase().indexOf("webkit")&&!gt("Edge");function St(){var t=Y.document;return t?t.documentMode:void 0}t:{var It="",Ct=function(){var t=pt();return Tt?/rv:([^\);]+)(\)|;)/.exec(t):wt?/Edge\/([\d\.]+)/.exec(t):bt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):_t?/WebKit\/(\S+)/.exec(t):Et?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Ct&&(It=Ct?Ct[1]:""),bt){var Rt=St();if(null!=Rt&&Rt>parseFloat(It)){yt=String(Rt);break t}}yt=It}if(Y.document&&bt){var Nt=St();vt=Nt||(parseInt(yt,10)||void 0)}else vt=void 0;var Lt=vt;function kt(t,e){if(ut.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var i=this.type=t.type,n=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Tt){t:{try{dt(e.nodeName);var s=!0;break t}catch(r){}s=!1}s||(e=null)}}else"mouseover"==i?e=t.fromElement:"mouseout"==i&&(e=t.toElement);this.relatedTarget=e,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Dt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kt.$.h.call(this)}}st(kt,ut);var Dt={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function xt(t,e,i,n,s){this.listener=t,this.proxy=null,this.src=e,this.type=i,this.capture=!!n,this.la=s,this.key=++Ot,this.fa=this.ia=!1}function Mt(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ut(t,e,i){for(const n in t)e.call(i,t[n],n,t)}function Ft(t,e){for(const i in t)e.call(void 0,t[i],i,t)}function jt(t){const e={};for(const i in t)e[i]=t[i];return e}const Bt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vt(t,e){let i,n;for(let s=1;s<arguments.length;s++){for(i in n=arguments[s],n)t[i]=n[i];for(let e=0;e<Bt.length;e++)i=Bt[e],Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}}function Ht(t){this.src=t,this.g={},this.h=0}function Kt(t,e){var i=e.type;if(i in t.g){var n,s=t.g[i],r=at(s,e);(n=0<=r)&&Array.prototype.splice.call(s,r,1),n&&(Mt(e),0==t.g[i].length&&(delete t.g[i],t.h--))}}function zt(t,e,i,n){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!i&&r.la==n)return s}return-1}Ht.prototype.add=function(t,e,i,n,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=zt(t,e,n,s);return-1<o?(e=t[o],i||(e.ia=!1)):(e=new xt(e,this.src,r,!!n,s),e.ia=i,t.push(e)),e};var Xt="closure_lm_"+(1e6*Math.random()|0),$t={};function Gt(t,e,i,n,s){if(n&&n.once)return Wt(t,e,i,n,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gt(t,e[r],i,n,s);return null}return i=ne(i),t&&t[Pt]?t.O(e,i,W(n)?!!n.capture:!!n,s):Yt(t,e,i,!1,n,s)}function Yt(t,e,i,n,s,r){if(!e)throw Error("Invalid event type");var o=W(s)?!!s.capture:!!s,a=ee(t);if(a||(t[Xt]=a=new Ht(t)),i=a.add(e,i,n,o,r),i.proxy)return i;if(n=qt(),i.proxy=n,n.src=t,n.listener=i,t.addEventListener)ct||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),n,s);else if(t.attachEvent)t.attachEvent(Zt(e.toString()),n);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(n)}return i}function qt(){function t(i){return e.call(t.src,t.listener,i)}const e=te;return t}function Wt(t,e,i,n,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wt(t,e[r],i,n,s);return null}return i=ne(i),t&&t[Pt]?t.P(e,i,W(n)?!!n.capture:!!n,s):Yt(t,e,i,!0,n,s)}function Jt(t,e,i,n,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Jt(t,e[r],i,n,s);else n=W(n)?!!n.capture:!!n,i=ne(i),t&&t[Pt]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],i=zt(r,i,n,s),-1<i&&(Mt(r[i]),Array.prototype.splice.call(r,i,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=ee(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zt(e,i,n,s)),(i=-1<t?e[t]:null)&&Qt(i))}function Qt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Pt])Kt(e.i,t);else{var i=t.type,n=t.proxy;e.removeEventListener?e.removeEventListener(i,n,t.capture):e.detachEvent?e.detachEvent(Zt(i),n):e.addListener&&e.removeListener&&e.removeListener(n),(i=ee(e))?(Kt(i,t),0==i.h&&(i.src=null,e[Xt]=null)):Mt(t)}}}function Zt(t){return t in $t?$t[t]:$t[t]="on"+t}function te(t,e){if(t.fa)t=!0;else{e=new kt(e,this);var i=t.listener,n=t.la||t.src;t.ia&&Qt(t),t=i.call(n,e)}return t}function ee(t){return t=t[Xt],t instanceof Ht?t:null}var ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(t){return"function"===typeof t?t:(t[ie]||(t[ie]=function(e){return t.handleEvent(e)}),t[ie])}function se(){rt.call(this),this.i=new Ht(this),this.S=this,this.J=null}function re(t,e){var i,n=t.J;if(n)for(i=[];n;n=n.J)i.push(n);if(t=t.S,n=e.type||e,"string"===typeof e)e=new ut(e,t);else if(e instanceof ut)e.target=e.target||t;else{var s=e;e=new ut(n,t),Vt(e,s)}if(s=!0,i)for(var r=i.length-1;0<=r;r--){var o=e.g=i[r];s=oe(o,n,!0,e)&&s}if(o=e.g=t,s=oe(o,n,!0,e)&&s,s=oe(o,n,!1,e)&&s,i)for(r=0;r<i.length;r++)o=e.g=i[r],s=oe(o,n,!1,e)&&s}function oe(t,e,i,n){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==i){var a=o.listener,h=o.la||o.src;o.ia&&Kt(t.i,o),s=!1!==a.call(h,n)&&s}}return s&&!n.defaultPrevented}st(se,rt),se.prototype[Pt]=!0,se.prototype.removeEventListener=function(t,e,i,n){Jt(this,t,e,i,n)},se.prototype.N=function(){if(se.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var i=e.g[t],n=0;n<i.length;n++)Mt(i[n]);delete e.g[t],e.h--}}this.J=null},se.prototype.O=function(t,e,i,n){return this.i.add(String(t),e,!1,i,n)},se.prototype.P=function(t,e,i,n){return this.i.add(String(t),e,!0,i,n)};var ae=Y.JSON.stringify;class he{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function le(){var t=ye;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ue{constructor(){this.h=this.g=null}add(t,e){const i=ce.get();i.set(t,e),this.h?this.h.next=i:this.g=i,this.h=i}}var ce=new he((()=>new fe),(t=>t.reset()));class fe{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pe(t){var e=1;t=t.split(":");const i=[];for(;0<e&&t.length;)i.push(t.shift()),e--;return t.length&&i.push(t.join(":")),i}function ge(t){Y.setTimeout((()=>{throw t}),0)}let de,me=!1,ye=new ue,ve=()=>{const t=Y.Promise.resolve(void 0);de=()=>{t.then(Ee)}};var Ee=()=>{for(var t;t=le();){try{t.h.call(t.g)}catch(i){ge(i)}var e=ce;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}me=!1};function be(t,e){se.call(this),this.h=t||1,this.g=e||Y,this.j=it(this.qb,this),this.l=Date.now()}function we(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ae(t,e,i){if("function"===typeof t)i&&(t=it(t,i));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=it(t.handleEvent,t)}return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function Te(t){t.g=Ae((()=>{t.g=null,t.i&&(t.i=!1,Te(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}st(be,se),z=be.prototype,z.ga=!1,z.T=null,z.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),re(this,"tick"),this.ga&&(we(this),this.start()))}},z.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},z.N=function(){be.$.N.call(this),we(this),delete this.g};class _e extends rt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Te(this)}N(){super.N(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(t){rt.call(this),this.h=t,this.g={}}st(Se,rt);var Ie=[];function Ce(t,e,i,n){Array.isArray(i)||(i&&(Ie[0]=i.toString()),i=Ie);for(var s=0;s<i.length;s++){var r=Gt(e,i[s],n||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Re(t){Ut(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Qt(t)}),t),t.g={}}function Ne(){this.g=!0}function Le(t,e,i,n,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var u=l[0];l=l[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+n+") [attempt "+s+"]: "+e+"\n"+i+"\n"+o}))}function ke(t,e,i,n,s,r,o){t.info((function(){return"XMLHTTP RESP ("+n+") [ attempt "+s+"]: "+e+"\n"+i+"\n"+r+" "+o}))}function De(t,e,i,n){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Oe(t,i)+(n?" "+n:"")}))}function Pe(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Oe(t,e){if(!t.g)return e;if(!e)return null;try{var i=JSON.parse(e);if(i)for(t=0;t<i.length;t++)if(Array.isArray(i[t])){var n=i[t];if(!(2>n.length)){var s=n[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ae(i)}catch(a){return e}}Se.prototype.N=function(){Se.$.N.call(this),Re(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ne.prototype.Ea=function(){this.g=!1},Ne.prototype.info=function(){};var xe={},Me=null;function Ue(){return Me=Me||new se}function Fe(t){ut.call(this,xe.Ta,t)}function je(t){const e=Ue();re(e,new Fe(e))}function Be(t,e){ut.call(this,xe.STAT_EVENT,t),this.stat=e}function Ve(t){const e=Ue();re(e,new Be(e,t))}function He(t,e){ut.call(this,xe.Ua,t),this.size=e}function Ke(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return Y.setTimeout((function(){t()}),e)}xe.Ta="serverreachability",st(Fe,ut),xe.STAT_EVENT="statevent",st(Be,ut),xe.Ua="timingevent",st(He,ut);var ze={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xe={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $e(){}function Ge(t){return t.h||(t.h=t.i())}function Ye(){}$e.prototype.h=null;var qe,We={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Je(){ut.call(this,"d")}function Qe(){ut.call(this,"c")}function Ze(){}function ti(t,e,i,n){this.l=t,this.j=e,this.m=i,this.W=n||1,this.U=new Se(this),this.P=ii,t=At?125:void 0,this.V=new be(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}st(Je,ut),st(Qe,ut),st(Ze,$e),Ze.prototype.g=function(){return new XMLHttpRequest},Ze.prototype.i=function(){return{}},qe=new Ze;var ii=45e3,ni={},si={};function ri(t,e,i){t.L=1,t.v=Ci(Ai(e)),t.s=i,t.S=!0,oi(t,null)}function oi(t,e){t.G=Date.now(),ui(t),t.A=Ai(t.v);var i=t.A,n=t.W;Array.isArray(n)||(n=[String(n)]),Bi(i.i,"t",n),t.C=0,i=t.l.J,t.h=new ei,t.g=$n(t.l,i?e:null,!t.s),0<t.O&&(t.M=new _e(it(t.Pa,t,t.g),t.O)),Ce(t.U,t.g,"readystatechange",t.nb),e=t.I?jt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),je(),Le(t.j,t.u,t.A,t.m,t.W,t.s)}function ai(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function hi(t,e,i){let n,s=!0;for(;!t.J&&t.C<i.length;){if(n=li(t,i),n==si){4==e&&(t.o=4,Ve(14),s=!1),De(t.j,t.m,null,"[Incomplete Response]");break}if(n==ni){t.o=4,Ve(15),De(t.j,t.m,i,"[Invalid Chunk]"),s=!1;break}De(t.j,t.m,n,null),di(t,n)}ai(t)&&n!=si&&n!=ni&&(t.h.g="",t.C=0),4!=e||0!=i.length||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<i.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),Fn(e),e.M=!0,Ve(11))):(De(t.j,t.m,i,"[Invalid Chunked Response]"),gi(t),pi(t))}function li(t,e){var i=t.C,n=e.indexOf("\n",i);return-1==n?si:(i=Number(e.substring(i,n)),isNaN(i)?ni:(n+=1,n+i>e.length?si:(e=e.slice(n,n+i),t.C=n+i,e)))}function ui(t){t.Y=Date.now()+t.P,ci(t,t.P)}function ci(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ke(it(t.lb,t),e)}function fi(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}function pi(t){0==t.l.H||t.J||Vn(t.l,t)}function gi(t){fi(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,we(t.V),Re(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function di(t,e){try{var i=t.l;if(0!=i.H&&(i.g==t||Yi(i.i,t)))if(!t.K&&Yi(i.i,t)&&3==i.H){try{var n=i.Ja.g.parse(e)}catch(l){n=null}if(Array.isArray(n)&&3==n.length){var s=n;if(0==s[0]){t:if(!i.u){if(i.g){if(!(i.g.G+3e3<t.G))break t;Bn(i),Nn(i)}Un(i),Ve(18)}}else i.Fa=s[1],0<i.Fa-i.V&&37500>s[2]&&i.G&&0==i.A&&!i.v&&(i.v=Ke(it(i.ib,i),6e3));if(1>=Gi(i.i)&&i.oa){try{i.oa()}catch(l){}i.oa=void 0}}else Kn(i,11)}else if((t.K||i.g==t)&&Bn(i),!ft(e))for(s=i.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(i.V=l[0],l=l[1],2==i.H)if("c"==l[0]){i.K=l[1],i.pa=l[2];const e=l[3];null!=e&&(i.ra=e,i.l.info("VER="+i.ra));const s=l[4];null!=s&&(i.Ga=s,i.l.info("SVER="+i.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(n=1.5*u,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=n.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(qi(r,r.h),r.h=null))}if(n.F){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(n.Da=t,Ii(n.I,n.F,t))}}i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-t.G,i.l.info("Handshake RTT: "+i.S+"ms")),n=i;var o=t;if(n.wa=Xn(n,n.J?n.pa:null,n.Y),o.K){Wi(n.i,o);var a=o,h=n.L;h&&a.setTimeout(h),a.B&&(fi(a),ui(a)),n.g=o}else Mn(n);0<i.j.length&&kn(i)}else"stop"!=l[0]&&"close"!=l[0]||Kn(i,7);else 3==i.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Kn(i,7):Rn(i):"noop"!=l[0]&&i.h&&i.h.Aa(l),i.A=0)}je(4)}catch(l){}}function mi(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(q(t)){for(var e=[],i=t.length,n=0;n<i;n++)e.push(t[n]);return e}for(n in e=[],i=0,t)e[i++]=t[n];return e}function yi(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(q(t)||"string"===typeof t){var e=[];t=t.length;for(var i=0;i<t;i++)e.push(i);return e}e=[],i=0;for(const n in t)e[i++]=n;return e}}}function vi(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(q(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var i=yi(t),n=mi(t),s=n.length,r=0;r<s;r++)e.call(void 0,n[r],i&&i[r],t)}z=ti.prototype,z.setTimeout=function(t){this.P=t},z.nb=function(t){t=t.target;const e=this.M;e&&3==wn(t)?e.l():this.Pa(t)},z.Pa=function(t){try{if(t==this.g)t:{const u=wn(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>u)&&(3!=u||At||this.g&&(this.h.h||this.g.ja()||An(this.g)))){this.J||4!=u||7==e||je(8==e||0>=c?3:2),fi(this);var i=this.g.da();this.ca=i;e:if(ai(this)){var n=An(this.g);t="";var s=n.length,r=4==wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){gi(this),pi(this);var o="";break e}this.h.i=new Y.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(n[e],{stream:r&&e==s-1});n.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==i,ke(this.j,this.u,this.A,this.m,this.W,u,i),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ft(a)){var l=a;break e}}l=null}if(!(i=l)){this.i=!1,this.o=3,Ve(12),gi(this),pi(this);break t}De(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,di(this,i)}this.S?(hi(this,u,o),At&&this.i&&3==u&&(Ce(this.U,this.V,"tick",this.mb),this.V.start())):(De(this.j,this.m,o,null),di(this,o)),4==u&&gi(this),this.i&&!this.J&&(4==u?Vn(this.l,this):(this.i=!1,ui(this)))}else Tn(this.g),400==i&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),gi(this),pi(this)}}}catch(u){}},z.mb=function(){if(this.g){var t=wn(this.g),e=this.g.ja();this.C<e.length&&(fi(this),hi(this,t,e),this.i&&4!=t&&ui(this))}},z.cancel=function(){this.J=!0,gi(this)},z.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Pe(this.j,this.A),2!=this.L&&(je(),Ve(17)),gi(this),this.o=2,pi(this)):ci(this,this.Y-t)};var Ei=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bi(t,e){if(t){t=t.split("&");for(var i=0;i<t.length;i++){var n=t[i].indexOf("="),s=null;if(0<=n){var r=t[i].substring(0,n);s=t[i].substring(n+1)}else r=t[i];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function wi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=t.h,Ti(this,t.j),this.s=t.s,this.g=t.g,_i(this,t.m),this.l=t.l;var e=t.i,i=new Mi;i.i=e.i,e.g&&(i.g=new Map(e.g),i.h=e.h),Si(this,i),this.o=t.o}else t&&(e=String(t).match(Ei))?(this.h=!1,Ti(this,e[1]||"",!0),this.s=Ri(e[2]||""),this.g=Ri(e[3]||"",!0),_i(this,e[4]),this.l=Ri(e[5]||"",!0),Si(this,e[6]||"",!0),this.o=Ri(e[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}function Ai(t){return new wi(t)}function Ti(t,e,i){t.j=i?Ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Si(t,e,i){e instanceof Mi?(t.i=e,Hi(t.i,t.h)):(i||(e=Ni(e,Oi)),t.i=new Mi(e,t.h))}function Ii(t,e,i){t.i.set(e,i)}function Ci(t){return Ii(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ni(t,e,i){return"string"===typeof t?(t=encodeURI(t).replace(e,Li),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Li(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ni(e,ki,!0),":");var i=this.g;return(i||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ni(e,ki,!0),"@"),t.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.m,null!=i&&t.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&t.push("/"),t.push(Ni(i,"/"==i.charAt(0)?Pi:Di,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.o)&&t.push("#",Ni(i,xi)),t.join("")};var ki=/[#\/\?@]/g,Di=/[#\?:]/g,Pi=/[#\?]/g,Oi=/[#\?@]/g,xi=/#/g;function Mi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ui(t){t.g||(t.g=new Map,t.h=0,t.i&&bi(t.i,(function(e,i){t.add(decodeURIComponent(e.replace(/\+/g," ")),i)})))}function Fi(t,e){Ui(t),e=Vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ji(t,e){return Ui(t),e=Vi(t,e),t.g.has(e)}function Bi(t,e,i){Fi(t,e),0<i.length&&(t.i=null,t.g.set(Vi(t,e),ht(i)),t.h+=i.length)}function Vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Hi(t,e){e&&!t.j&&(Ui(t),t.i=null,t.g.forEach((function(t,e){var i=e.toLowerCase();e!=i&&(Fi(this,e),Bi(this,i,t))}),t)),t.j=e}z=Mi.prototype,z.add=function(t,e){Ui(this),this.i=null,t=Vi(this,t);var i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(e),this.h+=1,this},z.forEach=function(t,e){Ui(this),this.g.forEach((function(i,n){i.forEach((function(i){t.call(e,i,n,this)}),this)}),this)},z.ta=function(){Ui(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),i=[];for(let n=0;n<e.length;n++){const s=t[n];for(let t=0;t<s.length;t++)i.push(e[n])}return i},z.Z=function(t){Ui(this);let e=[];if("string"===typeof t)ji(this,t)&&(e=e.concat(this.g.get(Vi(this,t))));else{t=Array.from(this.g.values());for(let i=0;i<t.length;i++)e=e.concat(t[i])}return e},z.set=function(t,e){return Ui(this),this.i=null,t=Vi(this,t),ji(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},z.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var i=0;i<e.length;i++){var n=e[i];const r=encodeURIComponent(String(n)),o=this.Z(n);for(n=0;n<o.length;n++){var s=r;""!==o[n]&&(s+="="+encodeURIComponent(String(o[n]))),t.push(s)}}return this.i=t.join("&")};var Ki=class{constructor(t,e){this.g=t,this.map=e}};function zi(t){this.l=t||Xi,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(Y.g&&Y.g.Ka&&Y.g.Ka()&&Y.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xi=10;function $i(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gi(t){return t.h?1:t.g?t.g.size:0}function Yi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function qi(t,e){t.g?t.g.add(e):t.h=e}function Wi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ji(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const i of t.g.values())e=e.concat(i.F);return e}return ht(t.i)}zi.prototype.cancel=function(){if(this.i=Ji(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var Qi=class{stringify(t){return Y.JSON.stringify(t,void 0)}parse(t){return Y.JSON.parse(t,void 0)}};function Zi(){this.g=new Qi}function tn(t,e,i){const n=i||"";try{vi(t,(function(t,i){let s=t;W(t)&&(s=ae(t)),e.push(n+i+"="+encodeURIComponent(s))}))}catch(s){throw e.push(n+"type="+encodeURIComponent("_badmap")),s}}function en(t,e){const i=new Ne;if(Y.Image){const n=new Image;n.onload=nt(nn,i,n,"TestLoadImage: loaded",!0,e),n.onerror=nt(nn,i,n,"TestLoadImage: error",!1,e),n.onabort=nt(nn,i,n,"TestLoadImage: abort",!1,e),n.ontimeout=nt(nn,i,n,"TestLoadImage: timeout",!1,e),Y.setTimeout((function(){n.ontimeout&&n.ontimeout()}),1e4),n.src=t}else e(!1)}function nn(t,e,i,n,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(n)}catch(r){}}function sn(t){this.l=t.ec||null,this.j=t.ob||!1}function rn(t,e){se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=on,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}st(sn,$e),sn.prototype.g=function(){return new rn(this.l,this.j)},sn.prototype.i=function(t){return function(){return t}}({}),st(rn,se);var on=0;function an(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function hn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ln(t)}function ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}z=rn.prototype,z.open=function(t,e){if(this.readyState!=on)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ln(this)},z.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Y).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,hn(this)),this.readyState=on},z.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ln(this)),this.g&&(this.readyState=3,ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof Y.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;an(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},z.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?hn(this):ln(this),3==this.readyState&&an(this)}},z.Za=function(t){this.g&&(this.response=this.responseText=t,hn(this))},z.Ya=function(t){this.g&&(this.response=t,hn(this))},z.ka=function(){this.g&&hn(this)},z.setRequestHeader=function(t,e){this.v.append(t,e)},z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var i=e.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=e.next();return t.join("\r\n")},Object.defineProperty(rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var un=Y.JSON.parse;function cn(t){se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fn,this.L=this.M=!1}st(cn,se);var fn="",pn=/^https?$/i,gn=["POST","PUT"];function dn(t){return bt&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function mn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yn(t),En(t)}function yn(t){t.F||(t.F=!0,re(t,"complete"),re(t,"error"))}function vn(t){if(t.h&&"undefined"!=typeof G&&(!t.C[1]||4!=wn(t)||2!=t.da()))if(t.v&&4==wn(t))Ae(t.La,0,t);else if(re(t,"readystatechange"),4==wn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var i;if(!(i=e)){var n;if(n=0===a){var s=String(t.I).match(Ei)[1]||null;!s&&Y.self&&Y.self.location&&(s=Y.self.location.protocol.slice(0,-1)),n=!pn.test(s?s.toLowerCase():"")}i=n}if(i)re(t,"complete"),re(t,"success");else{t.m=6;try{var r=2<wn(t)?t.g.statusText:""}catch(o){r=""}t.j=r+" ["+t.da()+"]",yn(t)}}finally{En(t)}}}function En(t,e){if(t.g){bn(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||re(t,"ready");try{n.onreadystatechange=s}catch(i){}}}function bn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function wn(t){return t.g?t.g.readyState:0}function An(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(_s){return null}}function Tn(t){const e={};t=(t.g&&2<=wn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<t.length;n++){if(ft(t[n]))continue;var i=pe(t[n]);const s=i[0];if(i=i[1],"string"!==typeof i)continue;i=i.trim();const r=e[s]||[];e[s]=r,r.push(i)}Ft(e,(function(t){return t.join(", ")}))}function _n(t){let e="";return Ut(t,(function(t,i){e+=i,e+=":",e+=t,e+="\r\n"})),e}function Sn(t,e,i){t:{for(n in i){var n=!1;break t}n=!0}n||(i=_n(i),"string"===typeof t?null!=i&&encodeURIComponent(String(i)):Ii(t,e,i))}function In(t,e,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||e}function Cn(t){this.Ga=0,this.j=[],this.l=new Ne,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=In("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=In("baseRetryDelayMs",5e3,t),this.hb=In("retryDelaySeedMs",1e4,t),this.eb=In("forwardChannelMaxRetries",2,t),this.xa=In("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zi(t&&t.concurrentRequestLimit),this.Ja=new Zi,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Rn(t){if(Ln(t),3==t.H){var e=t.W++,i=Ai(t.I);if(Ii(i,"SID",t.K),Ii(i,"RID",e),Ii(i,"TYPE","terminate"),On(t,i),e=new ti(t,t.l,e),e.L=2,e.v=Ci(Ai(i)),i=!1,Y.navigator&&Y.navigator.sendBeacon)try{i=Y.navigator.sendBeacon(e.v.toString(),"")}catch(n){}!i&&Y.Image&&((new Image).src=e.v,i=!0),i||(e.g=$n(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ui(e)}zn(t)}function Nn(t){t.g&&(Fn(t),t.g.cancel(),t.g=null)}function Ln(t){Nn(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Bn(t),t.i.cancel(),t.m&&("number"===typeof t.m&&Y.clearTimeout(t.m),t.m=null)}function kn(t){if(!$i(t.i)&&!t.m){t.m=!0;var e=t.Na;de||ve(),me||(de(),me=!0),ye.add(e,t),t.C=0}}function Dn(t,e){return!(Gi(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=Ke(it(t.Na,t,e),Hn(t,t.C)),t.C++,!0))}function Pn(t,e){var i;i=e?e.m:t.W++;const n=Ai(t.I);Ii(n,"SID",t.K),Ii(n,"RID",i),Ii(n,"AID",t.V),On(t,n),t.o&&t.s&&Sn(n,t.o,t.s),i=new ti(t,t.l,i,t.C+1),null===t.o&&(i.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xn(t,i,1e3),i.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qi(t.i,i),ri(i,n,e)}function On(t,e){t.na&&Ut(t.na,(function(t,i){Ii(e,i,t)})),t.h&&vi({},(function(t,i){Ii(e,i,t)}))}function xn(t,e,i){i=Math.min(t.j.length,i);var n=t.h?it(t.h.Va,t.h,t):null;t:{var s=t.j;let e=-1;for(;;){const t=["count="+i];-1==e?0<i?(e=s[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<i;a++){let i=s[a].g;const h=s[a].map;if(i-=e,0>i)e=Math.max(0,s[a].g-100),o=!1;else try{tn(h,t,"req"+i+"_")}catch(r){n&&n(h)}}if(o){n=t.join("&");break t}}}return t=t.j.splice(0,i),e.F=t,n}function Mn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;de||ve(),me||(de(),me=!0),ye.add(e,t),t.A=0}}function Un(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Ke(it(t.Ma,t),Hn(t,t.A)),t.A++,!0)}function Fn(t){null!=t.B&&(Y.clearTimeout(t.B),t.B=null)}function jn(t){t.g=new ti(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ai(t.wa);Ii(e,"RID","rpc"),Ii(e,"SID",t.K),Ii(e,"AID",t.V),Ii(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ii(e,"TO",t.qa),Ii(e,"TYPE","xmlhttp"),On(t,e),t.o&&t.s&&Sn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var i=t.g;t=t.pa,i.L=1,i.v=Ci(Ai(e)),i.s=null,i.S=!0,oi(i,t)}function Bn(t){null!=t.v&&(Y.clearTimeout(t.v),t.v=null)}function Vn(t,e){var i=null;if(t.g==e){Bn(t),Fn(t),t.g=null;var n=2}else{if(!Yi(t.i,e))return;i=e.F,Wi(t.i,e),n=1}if(0!=t.H)if(e.i)if(1==n){i=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;n=Ue(),re(n,new He(n,i)),kn(t)}else Mn(t);else if(s=e.o,3==s||0==s&&0<e.ca||!(1==n&&Dn(t,e)||2==n&&Un(t)))switch(i&&0<i.length&&(e=t.i,e.i=e.i.concat(i)),s){case 1:Kn(t,5);break;case 4:Kn(t,10);break;case 3:Kn(t,6);break;default:Kn(t,2)}}function Hn(t,e){let i=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(i*=2),i*e}function Kn(t,e){if(t.l.info("Error code "+e),2==e){var i=null;t.h&&(i=null);var n=it(t.pb,t);i||(i=new wi("//www.google.com/images/cleardot.gif"),Y.location&&"http"==Y.location.protocol||Ti(i,"https"),Ci(i)),en(i.toString(),n)}else Ve(2);t.H=0,t.h&&t.h.za(e),zn(t),Ln(t)}function zn(t){if(t.H=0,t.ma=[],t.h){const e=Ji(t.i);0==e.length&&0==t.j.length||(lt(t.ma,e),lt(t.ma,t.j),t.i.i.length=0,ht(t.j),t.j.length=0),t.h.ya()}}function Xn(t,e,i){var n=i instanceof wi?Ai(i):new wi(i);if(""!=n.g)e&&(n.g=e+"."+n.g),_i(n,n.m);else{var s=Y.location;n=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new wi(null);n&&Ti(r,n),e&&(r.g=e),s&&_i(r,s),i&&(r.l=i),n=r}return i=t.F,e=t.Da,i&&e&&Ii(n,i,e),Ii(n,"VER",t.ra),On(t,n),n}function $n(t,e,i){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=i&&t.Ha&&!t.va?new cn(new sn({ob:!0})):new cn(t.va),e.Oa(t.J),e}function Gn(){}function Yn(){if(bt&&!(10<=Number(Lt)))throw Error("Environmental error: no available transport.")}function qn(t,e){se.call(this),this.g=new Cn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ft(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ft(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Qn(this)}function Wn(t){Je.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const i in e){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Jn(){Qe.call(this),this.status=1}function Qn(t){this.g=t}function Zn(){this.blockSize=-1}function ts(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function es(t,e,i){i||(i=0);var n=Array(16);if("string"===typeof e)for(var s=0;16>s;++s)n[s]=e.charCodeAt(i++)|e.charCodeAt(i++)<<8|e.charCodeAt(i++)<<16|e.charCodeAt(i++)<<24;else for(s=0;16>s;++s)n[s]=e[i++]|e[i++]<<8|e[i++]<<16|e[i++]<<24;e=t.g[0],i=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^i&(s^r))+n[0]+3614090360&4294967295;e=i+(o<<7&4294967295|o>>>25),o=r+(s^e&(i^s))+n[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(i^r&(e^i))+n[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=i+(e^s&(r^e))+n[3]+3250441966&4294967295,i=s+(o<<22&4294967295|o>>>10),o=e+(r^i&(s^r))+n[4]+4118548399&4294967295,e=i+(o<<7&4294967295|o>>>25),o=r+(s^e&(i^s))+n[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(i^r&(e^i))+n[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=i+(e^s&(r^e))+n[7]+4249261313&4294967295,i=s+(o<<22&4294967295|o>>>10),o=e+(r^i&(s^r))+n[8]+1770035416&4294967295,e=i+(o<<7&4294967295|o>>>25),o=r+(s^e&(i^s))+n[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(i^r&(e^i))+n[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=i+(e^s&(r^e))+n[11]+2304563134&4294967295,i=s+(o<<22&4294967295|o>>>10),o=e+(r^i&(s^r))+n[12]+1804603682&4294967295,e=i+(o<<7&4294967295|o>>>25),o=r+(s^e&(i^s))+n[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(i^r&(e^i))+n[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=i+(e^s&(r^e))+n[15]+1236535329&4294967295,i=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(i^s))+n[1]+4129170786&4294967295,e=i+(o<<5&4294967295|o>>>27),o=r+(i^s&(e^i))+n[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^i&(r^e))+n[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=i+(r^e&(s^r))+n[0]+3921069994&4294967295,i=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(i^s))+n[5]+3593408605&4294967295,e=i+(o<<5&4294967295|o>>>27),o=r+(i^s&(e^i))+n[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^i&(r^e))+n[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=i+(r^e&(s^r))+n[4]+3889429448&4294967295,i=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(i^s))+n[9]+568446438&4294967295,e=i+(o<<5&4294967295|o>>>27),o=r+(i^s&(e^i))+n[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^i&(r^e))+n[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=i+(r^e&(s^r))+n[8]+1163531501&4294967295,i=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(i^s))+n[13]+2850285829&4294967295,e=i+(o<<5&4294967295|o>>>27),o=r+(i^s&(e^i))+n[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^i&(r^e))+n[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=i+(r^e&(s^r))+n[12]+2368359562&4294967295,i=s+(o<<20&4294967295|o>>>12),o=e+(i^s^r)+n[5]+4294588738&4294967295,e=i+(o<<4&4294967295|o>>>28),o=r+(e^i^s)+n[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^i)+n[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=i+(s^r^e)+n[14]+4259657740&4294967295,i=s+(o<<23&4294967295|o>>>9),o=e+(i^s^r)+n[1]+2763975236&4294967295,e=i+(o<<4&4294967295|o>>>28),o=r+(e^i^s)+n[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^i)+n[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=i+(s^r^e)+n[10]+3200236656&4294967295,i=s+(o<<23&4294967295|o>>>9),o=e+(i^s^r)+n[13]+681279174&4294967295,e=i+(o<<4&4294967295|o>>>28),o=r+(e^i^s)+n[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^i)+n[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=i+(s^r^e)+n[6]+76029189&4294967295,i=s+(o<<23&4294967295|o>>>9),o=e+(i^s^r)+n[9]+3654602809&4294967295,e=i+(o<<4&4294967295|o>>>28),o=r+(e^i^s)+n[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^i)+n[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=i+(s^r^e)+n[2]+3299628645&4294967295,i=s+(o<<23&4294967295|o>>>9),o=e+(s^(i|~r))+n[0]+4096336452&4294967295,e=i+(o<<6&4294967295|o>>>26),o=r+(i^(e|~s))+n[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~i))+n[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=i+(r^(s|~e))+n[5]+4237533241&4294967295,i=s+(o<<21&4294967295|o>>>11),o=e+(s^(i|~r))+n[12]+1700485571&4294967295,e=i+(o<<6&4294967295|o>>>26),o=r+(i^(e|~s))+n[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~i))+n[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=i+(r^(s|~e))+n[1]+2240044497&4294967295,i=s+(o<<21&4294967295|o>>>11),o=e+(s^(i|~r))+n[8]+1873313359&4294967295,e=i+(o<<6&4294967295|o>>>26),o=r+(i^(e|~s))+n[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~i))+n[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=i+(r^(s|~e))+n[13]+1309151649&4294967295,i=s+(o<<21&4294967295|o>>>11),o=e+(s^(i|~r))+n[4]+4149444226&4294967295,e=i+(o<<6&4294967295|o>>>26),o=r+(i^(e|~s))+n[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~i))+n[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=i+(r^(s|~e))+n[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}function is(t,e){this.h=e;for(var i=[],n=!0,s=t.length-1;0<=s;s--){var r=0|t[s];n&&r==e||(i[s]=r,n=!1)}this.g=i}z=cn.prototype,z.Oa=function(t){this.M=t},z.ha=function(t,e,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qe.g(),this.C=this.u?Ge(this.u):Ge(qe),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){return void mn(this,r)}if(t=i||"",i=new Map(this.headers),n)if(Object.getPrototypeOf(n)===Object.prototype)for(var s in n)i.set(s,n[s]);else{if("function"!==typeof n.keys||"function"!==typeof n.get)throw Error("Unknown input type for opt_headers: "+String(n));for(const t of n.keys())i.set(t,n.get(t))}n=Array.from(i.keys()).find((t=>"content-type"==t.toLowerCase())),s=Y.FormData&&t instanceof Y.FormData,!(0<=at(gn,e))||n||s||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of i)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{bn(this),0<this.B&&((this.L=dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=Ae(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){mn(this,r)}},z.ua=function(){"undefined"!=typeof G&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,re(this,"timeout"),this.abort(8))},z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,re(this,"complete"),re(this,"abort"),En(this))},z.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),En(this,!0)),cn.$.N.call(this)},z.La=function(){this.s||(this.G||this.v||this.l?vn(this):this.kb())},z.kb=function(){vn(this)},z.isActive=function(){return!!this.g},z.da=function(){try{return 2<wn(this)?this.g.status:-1}catch(t){return-1}},z.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},z.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),un(e)}},z.Ia=function(){return this.m},z.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},z=Cn.prototype,z.ra=8,z.H=1,z.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ti(this,this.l,t);let r=this.s;if(this.U&&(r?(r=jt(r),Vt(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)t:{for(var e=0,i=0;i<this.j.length;i++){var n=this.j[i];if(n="__data__"in n.map&&(n=n.map.__data__,"string"===typeof n)?n.length:void 0,void 0===n)break;if(e+=n,4096<e){e=i;break t}if(4096===e||i===this.j.length-1){e=i+1;break t}}e=1e3}else e=1e3;e=xn(this,s,e),i=Ai(this.I),Ii(i,"RID",t),Ii(i,"CVER",22),this.F&&Ii(i,"X-HTTP-Session-Id",this.F),On(this,i),r&&(this.O?e="headers="+encodeURIComponent(String(_n(r)))+"&"+e:this.o&&Sn(i,this.o,r)),qi(this.i,s),this.bb&&Ii(i,"TYPE","init"),this.P?(Ii(i,"$req",e),Ii(i,"SID","null"),s.aa=!0,ri(s,i,null)):ri(s,i,e),this.H=2}}else 3==this.H&&(t?Pn(this,t):0==this.j.length||$i(this.i)||Pn(this))},z.Ma=function(){if(this.u=null,jn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ke(it(this.jb,this),t)}},z.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ve(10),Nn(this),jn(this))},z.ib=function(){null!=this.v&&(this.v=null,Nn(this),Un(this),Ve(19))},z.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ve(2)):(this.l.info("Failed to ping google.com"),Ve(1))},z.isActive=function(){return!!this.h&&this.h.isActive(this)},z=Gn.prototype,z.Ba=function(){},z.Aa=function(){},z.za=function(){},z.ya=function(){},z.isActive=function(){return!0},z.Va=function(){},Yn.prototype.g=function(t,e){return new qn(t,e)},st(qn,se),qn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,i=this.h||void 0;Ve(0),t.Y=e,t.na=i||{},t.G=t.aa,t.I=Xn(t,null,t.Y),kn(t)},qn.prototype.close=function(){Rn(this.g)},qn.prototype.u=function(t){var e=this.g;if("string"===typeof t){var i={};i.__data__=t,t=i}else this.v&&(i={},i.__data__=ae(t),t=i);e.j.push(new Ki(e.fb++,t)),3==e.H&&kn(e)},qn.prototype.N=function(){this.g.h=null,delete this.j,Rn(this.g),delete this.g,qn.$.N.call(this)},st(Wn,Je),st(Jn,Qe),st(Qn,Gn),Qn.prototype.Ba=function(){re(this.g,"a")},Qn.prototype.Aa=function(t){re(this.g,new Wn(t))},Qn.prototype.za=function(t){re(this.g,new Jn)},Qn.prototype.ya=function(){re(this.g,"b")},st(ts,Zn),ts.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ts.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var i=e-this.blockSize,n=this.m,s=this.h,r=0;r<e;){if(0==s)for(;r<=i;)es(this,t,r),r+=this.blockSize;if("string"===typeof t){for(;r<e;)if(n[s++]=t.charCodeAt(r++),s==this.blockSize){es(this,n),s=0;break}}else for(;r<e;)if(n[s++]=t[r++],s==this.blockSize){es(this,n),s=0;break}}this.h=s,this.i+=e},ts.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var i=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&i,i/=256;for(this.j(t),t=Array(16),e=i=0;4>e;++e)for(var n=0;32>n;n+=8)t[i++]=this.g[e]>>>n&255;return t};var ns={};function ss(t){return-128<=t&&128>t?mt(t,(function(t){return new is([0|t],0>t?-1:0)})):new is([0|t],0>t?-1:0)}function rs(t){if(isNaN(t)||!isFinite(t))return hs;if(0>t)return ps(rs(-t));for(var e=[],i=1,n=0;t>=i;n++)e[n]=t/i|0,i*=as;return new is(e,0)}function os(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return ps(os(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=rs(Math.pow(e,8)),n=hs,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=rs(Math.pow(e,r)),n=n.R(r).add(rs(o))):(n=n.R(i),n=n.add(rs(o)))}return n}var as=4294967296,hs=ss(0),ls=ss(1),us=ss(16777216);function cs(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function fs(t){return-1==t.h}function ps(t){for(var e=t.g.length,i=[],n=0;n<e;n++)i[n]=~t.g[n];return new is(i,~t.h).add(ls)}function gs(t,e){return t.add(ps(e))}function ds(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ms(t,e){this.g=t,this.h=e}function ys(t,e){if(cs(e))throw Error("division by zero");if(cs(t))return new ms(hs,hs);if(fs(t))return e=ys(ps(t),e),new ms(ps(e.g),ps(e.h));if(fs(e))return e=ys(t,ps(e)),new ms(ps(e.g),e.h);if(30<t.g.length){if(fs(t)||fs(e))throw Error("slowDivide_ only works with positive integers.");for(var i=ls,n=e;0>=n.X(t);)i=vs(i),n=vs(n);var s=Es(i,1),r=Es(n,1);for(n=Es(n,2),i=Es(i,2);!cs(n);){var o=r.add(n);0>=o.X(t)&&(s=s.add(i),r=o),n=Es(n,1),i=Es(i,1)}return e=gs(t,s.R(e)),new ms(s,e)}for(s=hs;0<=t.X(e);){for(i=Math.max(1,Math.floor(t.ea()/e.ea())),n=Math.ceil(Math.log(i)/Math.LN2),n=48>=n?1:Math.pow(2,n-48),r=rs(i),o=r.R(e);fs(o)||0<o.X(t);)i-=n,r=rs(i),o=r.R(e);cs(r)&&(r=ls),s=s.add(r),t=gs(t,o)}return new ms(s,t)}function vs(t){for(var e=t.g.length+1,i=[],n=0;n<e;n++)i[n]=t.D(n)<<1|t.D(n-1)>>>31;return new is(i,t.h)}function Es(t,e){var i=e>>5;e%=32;for(var n=t.g.length-i,s=[],r=0;r<n;r++)s[r]=0<e?t.D(r+i)>>>e|t.D(r+i+1)<<32-e:t.D(r+i);return new is(s,t.h)}z=is.prototype,z.ea=function(){if(fs(this))return-ps(this).ea();for(var t=0,e=1,i=0;i<this.g.length;i++){var n=this.D(i);t+=(0<=n?n:as+n)*e,e*=as}return t},z.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cs(this))return"0";if(fs(this))return"-"+ps(this).toString(t);for(var e=rs(Math.pow(t,6)),i=this,n="";;){var s=ys(i,e).g;i=gs(i,s.R(e));var r=((0<i.g.length?i.g[0]:i.h)>>>0).toString(t);if(i=s,cs(i))return r+n;for(;6>r.length;)r="0"+r;n=r+n}},z.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},z.X=function(t){return t=gs(this,t),fs(t)?-1:cs(t)?0:1},z.abs=function(){return fs(this)?ps(this):this},z.add=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0,s=0;s<=e;s++){var r=n+(65535&this.D(s))+(65535&t.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);n=o>>>16,r&=65535,o&=65535,i[s]=o<<16|r}return new is(i,-2147483648&i[i.length-1]?-1:0)},z.R=function(t){if(cs(this)||cs(t))return hs;if(fs(this))return fs(t)?ps(this).R(ps(t)):ps(ps(this).R(t));if(fs(t))return ps(this.R(ps(t)));if(0>this.X(us)&&0>t.X(us))return rs(this.ea()*t.ea());for(var e=this.g.length+t.g.length,i=[],n=0;n<2*e;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var s=0;s<t.g.length;s++){var r=this.D(n)>>>16,o=65535&this.D(n),a=t.D(s)>>>16,h=65535&t.D(s);i[2*n+2*s]+=o*h,ds(i,2*n+2*s),i[2*n+2*s+1]+=r*h,ds(i,2*n+2*s+1),i[2*n+2*s+1]+=o*a,ds(i,2*n+2*s+1),i[2*n+2*s+2]+=r*a,ds(i,2*n+2*s+2)}for(n=0;n<e;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=e;n<2*e;n++)i[n]=0;return new is(i,0)},z.gb=function(t){return ys(this,t).h},z.and=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)&t.D(n);return new is(i,this.h&t.h)},z.or=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)|t.D(n);return new is(i,this.h|t.h)},z.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),i=[],n=0;n<e;n++)i[n]=this.D(n)^t.D(n);return new is(i,this.h^t.h)},Yn.prototype.createWebChannel=Yn.prototype.g,qn.prototype.send=qn.prototype.u,qn.prototype.open=qn.prototype.m,qn.prototype.close=qn.prototype.close,ze.NO_ERROR=0,ze.TIMEOUT=8,ze.HTTP_ERROR=6,Xe.COMPLETE="complete",Ye.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",se.prototype.listen=se.prototype.O,cn.prototype.listenOnce=cn.prototype.P,cn.prototype.getLastError=cn.prototype.Sa,cn.prototype.getLastErrorCode=cn.prototype.Ia,cn.prototype.getStatus=cn.prototype.da,cn.prototype.getResponseJson=cn.prototype.Wa,cn.prototype.getResponseText=cn.prototype.ja,cn.prototype.send=cn.prototype.ha,cn.prototype.setWithCredentials=cn.prototype.Oa,ts.prototype.digest=ts.prototype.l,ts.prototype.reset=ts.prototype.reset,ts.prototype.update=ts.prototype.j,is.prototype.add=is.prototype.add,is.prototype.multiply=is.prototype.R,is.prototype.modulo=is.prototype.gb,is.prototype.compare=is.prototype.X,is.prototype.toNumber=is.prototype.ea,is.prototype.toString=is.prototype.toString,is.prototype.getBits=is.prototype.D,is.fromNumber=rs,is.fromString=os;$.createWebChannelTransport=function(){return new Yn},$.getStatEventTarget=function(){return Ue()},$.ErrorCode=ze,$.EventType=Xe,$.Event=xe,$.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$.FetchXmlHttpFactory=sn,$.WebChannel=Ye,$.XhrIo=cn,$.Md5=ts;var bs=$.Integer=is;const ws="@firebase/firestore";
/**
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
 */class As{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}As.UNAUTHENTICATED=new As(null),As.GOOGLE_CREDENTIALS=new As("google-credentials-uid"),As.FIRST_PARTY=new As("first-party-uid"),As.MOCK_USER=new As("mock-user");
/**
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
 */
let Ts="10.4.0";
/**
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
 */const _s=new L.Yd("@firebase/firestore");function Ss(t,...e){if(_s.logLevel<=L["in"].DEBUG){const i=e.map(Rs);_s.debug(`Firestore (${Ts}): ${t}`,...i)}}function Is(t,...e){if(_s.logLevel<=L["in"].ERROR){const i=e.map(Rs);_s.error(`Firestore (${Ts}): ${t}`,...i)}}function Cs(t,...e){if(_s.logLevel<=L["in"].WARN){const i=e.map(Rs);_s.warn(`Firestore (${Ts}): ${t}`,...i)}}function Rs(t){if("string"==typeof t)return t;try{
/**
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
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function Ns(t="Unexpected state"){const e=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: `+t;throw Is(e),new Error(e)}function Ls(t,e){t||Ns()}
/**
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
 */
const ks={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ds extends C.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Ps{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Os{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xs{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(As.UNAUTHENTICATED)))}shutdown(){}}class Ms{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Us{constructor(t){this.t=t,this.currentUser=As.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let i=this.i;const n=t=>this.i!==i?(i=this.i,e(t)):Promise.resolve();let s=new Ps;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ps,t.enqueueRetryable((()=>n(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await n(this.currentUser)}))},o=t=>{Ss("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ss("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ps)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ss("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ls("string"==typeof e.accessToken),new Os(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ls(null===t||"string"==typeof t),new As(t)}}class Fs{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=As.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class js{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Fs(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(As.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vs{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const i=t=>{null!=t.error&&Ss("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const i=t.token!==this.R;return this.R=t.token,Ss("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>i(e)))};const n=t=>{Ss("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?n(t):Ss("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ls("string"==typeof t.token),this.R=t.token,new Bs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Hs(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(i);else for(let n=0;n<t;n++)i[n]=Math.floor(256*Math.random());return i}
/**
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
 */class Ks{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const n=Hs(40);for(let s=0;s<n.length;++s)i.length<20&&n[s]<e&&(i+=t.charAt(n[s]%t.length))}return i}}function zs(t,e){return t<e?-1:t>e?1:0}
/**
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
 */
class Xs{constructor(t,e,i){void 0===e?e=0:e>t.length&&Ns(),void 0===i?i=t.length-e:i>t.length-e&&Ns(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return 0===Xs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let n=0;n<i;n++){const i=t.get(n),s=e.get(n);if(i<s)return-1;if(i>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class $s extends Xs{construct(t,e,i){return new $s(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new Ds(ks.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter((t=>t.length>0)))}return new $s(e)}static emptyPath(){return new $s([])}}
/**
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
 */
class Gs{constructor(t){this.path=t}static fromPath(t){return new Gs($s.fromString(t))}static fromName(t){return new Gs($s.fromString(t).popFirst(5))}static empty(){return new Gs($s.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===$s.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return $s.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gs(new $s(t.slice()))}}
/**
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
 */class Ys{constructor(t,e,i,n){this.indexId=t,this.collectionGroup=e,this.fields=i,this.indexState=n}}Ys.UNKNOWN_ID=-1;function qs(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Ws{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Js(t){return 0===t&&1/t==-1/0}Ws.ae=-1;const Qs=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Zs=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],tr=Zs;
/**
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
 */
/**
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
 */
class er{constructor(t,e){this.comparator=t,this.root=e||nr.EMPTY}insert(t,e){return new er(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nr.BLACK,null,null))}remove(t){return new er(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const n=this.comparator(t,i.key);if(0===n)return e+i.left.size;n<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,i)=>(t(e,i),!1)))}toString(){const t=[];return this.inorderTraversal(((e,i)=>(t.push(`${e}:${i}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ir(this.root,t,this.comparator,!0)}}class ir{constructor(t,e,i,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?i(t.key,e):1,e&&n&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nr{constructor(t,e,i,n,s){this.key=t,this.value=e,this.color=null!=i?i:nr.RED,this.left=null!=n?n:nr.EMPTY,this.right=null!=s?s:nr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,n,s){return new nr(null!=t?t:this.key,null!=e?e:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let n=this;const s=i(t,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(t,e,i),null):0===s?n.copy(null,e,null,null,null):n.copy(null,null,null,null,n.right.insert(t,e,i)),n.fixUp()}removeMin(){if(this.left.isEmpty())return nr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,n=this;if(e(t,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===e(t,n.key)){if(n.right.isEmpty())return nr.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ns();if(this.right.isRed())throw Ns();const t=this.left.check();if(t!==this.right.check())throw Ns();return t+(this.isRed()?0:1)}}nr.EMPTY=null,nr.RED=!0,nr.BLACK=!1,nr.EMPTY=new class{constructor(){this.size=0}get key(){throw Ns()}get value(){throw Ns()}get color(){throw Ns()}get left(){throw Ns()}get right(){throw Ns()}copy(t,e,i,n,s){return this}insert(t,e,i){return new nr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class sr{constructor(t){this.comparator=t,this.data=new er(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,i)=>(t(e),!1)))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const n=i.getNext();if(this.comparator(n.key,t[1])>=0)return;e(n.key)}}forEachWhile(t,e){let i;for(i=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rr(this.data.getIterator())}getIteratorFrom(t){return new rr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof sr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,n=i.getNext().key;if(0!==this.comparator(t,n))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new sr(this.comparator);return e.data=t,e}}class rr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class or extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class ar{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new or("Invalid base64 string: "+t):t}}(t);return new ar(e)}static fromUint8Array(t){const e=function(t){let e="";for(let i=0;i<t.length;++i)e+=String.fromCharCode(t[i]);return e}(t);return new ar(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return zs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ar.EMPTY_BYTE_STRING=new ar("");function hr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function lr(t){return"string"==typeof t?ar.fromBase64String(t):ar.fromUint8Array(t)}
/**
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
 */
/**
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
 */
class ur{constructor(t,e,i,n,s,r,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=n,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class cr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new cr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof cr&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */function fr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
new er(Gs.comparator);new er(Gs.comparator);new er(Gs.comparator),new sr(Gs.comparator);new sr(zs);
/**
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
 */
var pr,gr;(gr=pr||(pr={}))[gr.OK=0]="OK",gr[gr.CANCELLED=1]="CANCELLED",gr[gr.UNKNOWN=2]="UNKNOWN",gr[gr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gr[gr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gr[gr.NOT_FOUND=5]="NOT_FOUND",gr[gr.ALREADY_EXISTS=6]="ALREADY_EXISTS",gr[gr.PERMISSION_DENIED=7]="PERMISSION_DENIED",gr[gr.UNAUTHENTICATED=16]="UNAUTHENTICATED",gr[gr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gr[gr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gr[gr.ABORTED=10]="ABORTED",gr[gr.OUT_OF_RANGE=11]="OUT_OF_RANGE",gr[gr.UNIMPLEMENTED=12]="UNIMPLEMENTED",gr[gr.INTERNAL=13]="INTERNAL",gr[gr.UNAVAILABLE=14]="UNAVAILABLE",gr[gr.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new bs([4294967295,4294967295],0);(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();
/**
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
 */
class dr{constructor(){}dt(t,e){this.Tt(t,e),e.Et()}Tt(t,e){if("nullValue"in t)this.At(e,5);else if("booleanValue"in t)this.At(e,10),e.Rt(t.booleanValue?1:0);else if("integerValue"in t)this.At(e,15),e.Rt(hr(t.integerValue));else if("doubleValue"in t){const i=hr(t.doubleValue);isNaN(i)?this.At(e,13):(this.At(e,15),Js(i)?e.Rt(0):e.Rt(i))}else if("timestampValue"in t){const i=t.timestampValue;this.At(e,20),"string"==typeof i?e.Vt(i):(e.Vt(`${i.seconds||""}`),e.Rt(i.nanos||0))}else if("stringValue"in t)this.ft(t.stringValue,e),this.gt(e);else if("bytesValue"in t)this.At(e,30),e.yt(lr(t.bytesValue)),this.gt(e);else if("referenceValue"in t)this.wt(t.referenceValue,e);else if("geoPointValue"in t){const i=t.geoPointValue;this.At(e,45),e.Rt(i.latitude||0),e.Rt(i.longitude||0)}else"mapValue"in t?fr(t)?this.At(e,Number.MAX_SAFE_INTEGER):(this.St(t.mapValue,e),this.gt(e)):"arrayValue"in t?(this.bt(t.arrayValue,e),this.gt(e)):Ns()}ft(t,e){this.At(e,25),this.Dt(t,e)}Dt(t,e){e.Vt(t)}St(t,e){const i=t.fields||{};this.At(e,55);for(const n of Object.keys(i))this.ft(n,e),this.Tt(i[n],e)}bt(t,e){const i=t.values||[];this.At(e,50);for(const n of i)this.Tt(n,e)}wt(t,e){this.At(e,37),Gs.fromName(t).path.forEach((t=>{this.At(e,60),this.Dt(t,e)}))}At(t,e){t.Rt(e)}gt(t){t.Rt(2)}}dr.Ct=new dr;
/**
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
 */
new Uint8Array(0);class mr{constructor(t,e,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=i}static withCacheSize(t){return new mr(t,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */mr.DEFAULT_COLLECTION_PERCENTILE=10,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mr.DEFAULT=new mr(41943040,mr.DEFAULT_COLLECTION_PERCENTILE,mr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mr.DISABLED=new mr(-1,0,0);function yr(){return"undefined"!=typeof document?document:null}
/**
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
 */
/**
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
 */
class vr{constructor(t,e,i=1e3,n=1.5,s=6e4){this._i=t,this.timerId=e,this.xo=i,this.Oo=n,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const e=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),n=Math.max(0,e-i);n>0&&Ss("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,(()=>(this.ko=Date.now(),t()))),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}
/**
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
 */
/**
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
 */
class Er{constructor(t,e,i,n,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=n,this.removalCallback=s,this.deferred=new Ps,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,n,s){const r=Date.now()+i,o=new Er(t,e,r,n,s);return o.start(i),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ds(ks.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function br(t,e){if(Is("AsyncQueue",`${e}: ${t}`),qs(t))return new Ds(ks.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */
/**
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
 */
class wr{constructor(t,e,i,n){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=n,this.user=As.UNAUTHENTICATED,this.clientId=Ks.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async t=>{Ss("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(i,(t=>(Ss("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ds(ks.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ps;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=br(e,"Failed to shutdown persistence");t.reject(i)}})),t.promise}}
/**
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
 */
function Ar(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const Tr=new Map;
/**
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
 */function _r(t,e,i,n){if(!0===e&&!0===n)throw new Ds(ks.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function Sr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ns()}function Ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ds(ks.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=Sr(t);throw new Ds(ks.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}
/**
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
 */
class Cr{constructor(t){var e,i;if(void 0===t.host){if(void 0!==t.ssl)throw new Ds(ks.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ds(ks.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_r("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ar(null!==(i=t.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Ds(ks.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Ds(ks.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Ds(ks.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rr{constructor(t,e,i,n){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ds(ks.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ds(ks.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cr(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new xs;switch(t.type){case"firstParty":return new js(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ds(ks.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Tr.get(t);e&&(Ss("ComponentProvider","Removing Datastore"),Tr.delete(t),e.terminate())}(this),Promise.resolve()}}function Nr(t,e,i,n={}){var s;const r=(t=Ir(t,Rr))._getSettings(),o=`${e}:${i}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),n.mockUserToken){let e,i;if("string"==typeof n.mockUserToken)e=n.mockUserToken,i=As.MOCK_USER;else{e=(0,C.Sg)(n.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=n.mockUserToken.sub||n.mockUserToken.user_id;if(!r)throw new Ds(ks.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new As(r)}t._authCredentials=new Ms(new Os(e,i))}}
/**
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
 */
/**
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
 */
class Lr{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new vr(this,"async_queue_retry"),this.ou=()=>{const t=yr();t&&Ss("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ho.$o()};const t=yr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const e=yr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise((()=>{}));const e=new Ps;return this.au((()=>this.eu&&this.iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xa.push(t),this.uu())))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!qs(t))throw t;Ss("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo((()=>this.uu()))}}au(t){const e=this.Za.then((()=>(this.ru=!0,t().catch((t=>{this.nu=t,this.ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Is("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.ru=!1,t))))));return this.Za=e,e}enqueueAfterDelay(t,e,i){this._u(),this.su.indexOf(t)>-1&&(e=0);const n=Er.createAndSchedule(this,t,e,i,(t=>this.cu(t)));return this.tu.push(n),n}_u(){this.nu&&Ns()}verifyOperationInProgress(){}async lu(){let t;do{t=this.Za,await t}while(t!==this.Za)}hu(t){for(const e of this.tu)if(e.timerId===t)return!0;return!1}Pu(t){return this.lu().then((()=>{this.tu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.tu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.lu()}))}Iu(t){this.su.push(t)}cu(t){const e=this.tu.indexOf(t);this.tu.splice(e,1)}}class kr extends Rr{constructor(t,e,i,n){super(t,e,i,n),this.type="firestore",this._queue=function(){return new Lr}(),this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pr(this),this._firestoreClient.terminate()}}function Dr(t,e){const i="object"==typeof t?t:(0,N.getApp)(),n="string"==typeof t?t:e||"(default)",s=(0,N._getProvider)(i,"firestore").getImmediate({identifier:n});if(!s._initialized){const t=(0,C.P0)("firestore");t&&Nr(s,...t)}return s}function Pr(t){var e,i,n;const s=t._freezeSettings(),r=function(t,e,i,n){return new ur(t,e,i,n.host,n.ssl,n.experimentalForceLongPolling,n.experimentalAutoDetectLongPolling,Ar(n.experimentalLongPollingOptions),n.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new wr(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(i=s.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}new WeakMap;
/**
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
 */!function(t,e=!0){!function(t){Ts=t}(N.SDK_VERSION),(0,N._registerComponent)(new R.wA("firestore",((t,{instanceIdentifier:i,options:n})=>{const s=t.getProvider("app").getImmediate(),r=new kr(new Us(t.getProvider("auth-internal")),new Vs(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ds(ks.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cr(t.options.projectId,e)}(s,i),s);return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r}),"PUBLIC").setMultipleInstances(!0)),(0,N.registerVersion)(ws,"4.2.0",t),(0,N.registerVersion)(ws,"4.2.0","esm2017")}();const Or={apiKey:"AIzaSyAbrf0VTFq_c3CrKvUqGIw29TpgeUCK71I",authDomain:"skultesgym-19f66.firebaseapp.com",projectId:"skultesgym-19f66",storageBucket:"skultesgym-19f66.appspot.com",messagingSenderId:"155818486003",appId:"1:155818486003:web:bc3563846b727d1c93ef86",measurementId:"G-YG72JSQLKL"},xr=V.initializeApp(Or);Dr(xr);var Mr=i(669),Ur={name:"HomeView",components:{AppointmentList:T,LoadingSpinner:S.Z,InputForm:_.Z,Cart:I.Z},data(){return{auth:null,date:"",day:"",dayDict:{Monday:"Pirmdien",Tuesday:"Otrdien",Wednesday:"Trešdien",Thursday:"Ceturtdien",Friday:"Piektdien",Saturday:"Sestdien",Sunday:"Svētdien"}}},mounted(){this.auth=(0,Mr.v0)(),(0,Mr.Aj)(this.auth,(t=>{t||this.$router.push("/login")}))},methods:{todaysAppointments(t){const e=[];for(const i of this.$store.getters.allAppointments)this.availableDates[t].value==i.date&&e.push(i);return e},logout(){this.$store.dispatch("setLoadingStatus",!0),setTimeout((()=>{(0,Mr.w7)(this.auth)}),1500)}},computed:{availableDates(){const t=new Date,e=new Date(t),i=t.getDay(),n=0===i?6:i-1;e.setDate(t.getDate()-n);const s=[];for(let r=0;r<7;r++){const t=new Date(e);t.setDate(e.getDate()+r);const i=t.toLocaleString("en-US",{weekday:"long"}),n=t.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),[o,a,h]=n.split("/"),l=parseInt(h+o+a),u=h+"-"+o+"-"+a,c=`${a}.${o}`;s.push({day_text:this.dayDict[i],date_short:c,date:u,value:l})}return s}}};const Fr=(0,w.Z)(Ur,[["render",f],["__scopeId","data-v-56fb9512"]]);var jr=Fr}}]);
//# sourceMappingURL=about.de7b9362.js.map