(function(){var t={511:function(t,e,n){"use strict";n.d(e,{Z:function(){return A}});var i=n(252),a=n(577);const s=t=>((0,i.dD)("data-v-c30a2e74"),t=t(),(0,i.Cn)(),t),r={class:"cart"},o=s((()=>(0,i._)("h4",null,"Izvēlētie laiki:",-1))),l={class:"cart__item"},d={class:"cart__item__desc"},u={class:"cart__item__desc__date"},c={class:"cart__item__desc__time"},h={class:"cart__item__price"},p=["onClick"],m={class:"total"},g=s((()=>(0,i._)("span",null,"Kopā:",-1))),v={class:"error"},f=["disabled"],y={key:1};function _(t,e,n,s,_,b){const w=(0,i.up)("loading-bar");return(0,i.wg)(),(0,i.iD)("div",r,[o,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.$store.getters.cart,((t,e)=>((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",d,[(0,i._)("span",u,(0,a.zw)(t.date.replace(/^(\d{4})-(\d{2})-(\d{2})$/,"$3.$2.$1")),1),(0,i._)("span",c,(0,a.zw)(this.timeSlots[t.start_index]+" - "+this.timeSlots[t.end_index]),1)]),(0,i._)("div",h,[(0,i._)("span",null,"€"+(0,a.zw)(parseFloat(b.getTotal[e]).toFixed(2)),1),(0,i._)("span",{class:"remove",onClick:t=>this.$store.dispatch("removeFromCart",e)},"Noņemt",8,p)])])))),256)),(0,i._)("div",m,[g,(0,i._)("span",null,"€"+(0,a.zw)(b.getTotal.reduce(((t,e)=>t+e),0).toFixed(2)),1)]),(0,i._)("div",v,[(0,i._)("p",null,(0,a.zw)(_.errorMessage),1),(0,i._)("p",null,(0,a.zw)(_.conflictingTimeSlots),1)]),(0,i._)("button",{class:"btn",disabled:this.checkoutLoading,onClick:e[0]||(e[0]=t=>b.pay())},[this.checkoutLoading?((0,i.wg)(),(0,i.j4)(w,{key:0})):((0,i.wg)(),(0,i.iD)("span",y,"Apmaksāt"))],8,f)])}const b=t=>((0,i.dD)("data-v-04a687c4"),t=t(),(0,i.Cn)(),t),w={class:"spinner"},k=b((()=>(0,i._)("div",{class:"lds-ellipsis"},[(0,i._)("div"),(0,i._)("div"),(0,i._)("div"),(0,i._)("div")],-1))),D=[k];function S(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",w,D)}var C={name:"LoadingSpinner"},T=n(744);const j=(0,T.Z)(C,[["render",S],["__scopeId","data-v-04a687c4"]]);var x=j;n(247);var I={name:"Cart",data(){return{timeSlots:{0:"06:30",1:"06:45",2:"07:00",3:"07:15",4:"07:30",5:"07:45",6:"08:00",7:"08:15",8:"08:30",9:"08:45",10:"09:00",11:"09:15",12:"09:30",13:"09:45",14:"10:00",15:"10:15",16:"10:30",17:"10:45",18:"11:00",19:"11:15",20:"11:30",21:"11:45",22:"12:00",23:"12:15",24:"12:30",25:"12:45",26:"13:00",27:"13:15",28:"13:30",29:"13:45",30:"14:00",31:"14:15",32:"14:30",33:"14:45",34:"15:00",35:"15:15",36:"15:30",37:"15:45",38:"16:00",39:"16:15",40:"16:30",41:"16:45",42:"17:00",43:"17:15",44:"17:30",45:"17:45",46:"18:00",47:"18:15",48:"18:30",49:"18:45",50:"19:00",51:"19:15",52:"19:30",53:"19:45",54:"20:00",55:"20:15",56:"20:30",57:"20:45",58:"21:00",59:"21:15",60:"21:30",61:"21:45",62:"22:00",63:"22:15",64:"22:30",65:"22:45",66:"23:00",67:"23:15",68:"23:30",69:"23:45",70:"00:00"},pricing:{3:7.5,4:10,5:12.5,6:15},pricingCheap:{3:5,4:6.5,5:8.5,6:10},dayDict:{Monday:"Pirmdien",Tuesday:"Otrdien",Wednesday:"Trešdien",Thursday:"Ceturtdien",Friday:"Piektdien",Saturday:"Sestdien",Sunday:"Svētdien"},checkoutLoading:!1,conflictingTimeSlots:"",errorMessage:""}},components:{LoadingBar:x},props:["payment"],computed:{getTotal(){const t=[];for(const e of this.$store.getters.cart){const n=e.start_index>30?this.pricing:this.pricingCheap,i=n[e.end_index-e.start_index];t.push(i)}return t}},methods:{pay(){this.checkoutLoading=!0,this.errorMessage="",this.conflictingTimeSlots="";const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.$store.getters.cart)};fetch("https://skultesgym.lv/api/checkout",t).then((t=>t.ok?t.json():409===t.status?t.json().then((t=>{this.errorMessage=t.msg,this.conflictingTimeSlots=`Pārklājas ar ${t.conflicts.join(", ")}`})):t.json().then((t=>{Promise.reject(t),this.checkoutLoading=!1})))).then((t=>window.location=t.url)).catch((t=>{console.error(t.error),this.checkoutLoading=!1}))}}};const L=(0,T.Z)(I,[["render",_],["__scopeId","data-v-c30a2e74"]]);var A=L},465:function(t,e,n){"use strict";n.d(e,{Z:function(){return w}});var i=n(252),a=n(963),s=n(577);const r=t=>((0,i.dD)("data-v-a2939b90"),t=t(),(0,i.Cn)(),t),o={class:"selectors"},l=r((()=>(0,i._)("h2",null,"Rezervēt laiku:",-1))),d=["value"],u=["value"],c=["value"],h={key:1,disabled:""},p=r((()=>(0,i._)("option",{value:-1,selected:""},"Visi laiki ir aizņemti",-1))),m=[p],g={class:"error-message"},v=r((()=>(0,i._)("input",{class:"btn",type:"submit",value:"Pieteikt rezervāciju"},null,-1)));function f(t,e,n,r,p,f){return(0,i.wg)(),(0,i.iD)("div",o,[l,(0,i._)("form",{onSubmit:e[6]||(e[6]=(0,a.iM)((t=>f.createAppointment()),["prevent"]))},[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>p.name=t),type:"text",name:"name",placeholder:"Vārds, uzvārds",required:""},null,512),[[a.nr,p.name]]),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>p.phone=t),type:"tel",name:"phone",placeholder:"Telefona numurs",required:""},null,512),[[a.nr,p.phone]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>p.dateIndex=t),onChange:e[3]||(e[3]=t=>this.time=Object.keys(this.availableTimeSlots[this.duration][this.dateIndex])[0])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.availableDates,((t,e)=>((0,i.wg)(),(0,i.iD)("option",{value:e},(0,s.zw)(this.availableDates[e].date_short+"  -  "+this.availableDates[e].day_text),9,d)))),256))],544),[[a.bM,p.dateIndex]]),(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>p.duration=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.durations,((t,e)=>((0,i.wg)(),(0,i.iD)("option",{value:e},(0,s.zw)(t),9,u)))),256))],512),[[a.bM,p.duration]]),f.currentTime?(0,i.wy)(((0,i.wg)(),(0,i.iD)("select",{key:0,"onUpdate:modelValue":e[5]||(e[5]=t=>p.time=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.availableTimeSlots[this.duration][this.dateIndex],((t,e)=>((0,i.wg)(),(0,i.iD)("option",{value:e},(0,s.zw)(t),9,c)))),256))],512)),[[a.bM,p.time]]):((0,i.wg)(),(0,i.iD)("select",h,m)),(0,i._)("label",g,(0,s.zw)(this.errorMessage),1),v],32)])}var y={name:"Home",components:{},data(){return{errorMessage:"",date:"",config:{defaultDate:"today"},name:"",phone:"",dateIndex:0,duration:3,prevDuration:3,time:0,timeSlots:{0:"06:30",1:"06:45",2:"07:00",3:"07:15",4:"07:30",5:"07:45",6:"08:00",7:"08:15",8:"08:30",9:"08:45",10:"09:00",11:"09:15",12:"09:30",13:"09:45",14:"10:00",15:"10:15",16:"10:30",17:"10:45",18:"11:00",19:"11:15",20:"11:30",21:"11:45",22:"12:00",23:"12:15",24:"12:30",25:"12:45",26:"13:00",27:"13:15",28:"13:30",29:"13:45",30:"14:00",31:"14:15",32:"14:30",33:"14:45",34:"15:00",35:"15:15",36:"15:30",37:"15:45",38:"16:00",39:"16:15",40:"16:30",41:"16:45",42:"17:00",43:"17:15",44:"17:30",45:"17:45",46:"18:00",47:"18:15",48:"18:30",49:"18:45",50:"19:00",51:"19:15",52:"19:30",53:"19:45",54:"20:00",55:"20:15",56:"20:30",57:"20:45",58:"21:00",59:"21:15",60:"21:30",61:"21:45",62:"22:00",63:"22:15",64:"22:30",65:"22:45",66:"23:00",67:"23:15",68:"23:30",69:"23:45",70:"00:00"},durations:{3:"45 min",4:"60 min",5:"75 min",6:"90 min"},dayDict:{Monday:"Pirmdien",Tuesday:"Otrdien",Wednesday:"Trešdien",Thursday:"Ceturtdien",Friday:"Piektdien",Saturday:"Sestdien",Sunday:"Svētdien"},pricing:{3:7.5,4:10,5:12.5,6:15},pricingCheap:{3:5,4:6.5,5:8.5,6:10}}},methods:{createAppointment(){if(Object.keys(this.availableTimeSlots[this.duration][this.dateIndex]).length<1&&(this.time=-1),(this.name.length<8||this.phone.length<8)&&(this.errorMessage="Lūdzu, aizpildi visus laukus!"),-1==this.time)this.errorMessage="Lūdzu, izvēlies laiku!";else{this.errorMessage="";const t={name:this.name,phone:this.phone,date:this.availableDates[this.dateIndex].date,start_index:parseInt(this.time),end_index:parseInt(this.time)+parseInt(this.duration)};this.$store.dispatch("addToCart",t),this.duration=3,this.time=Object.keys(this.availableTimeSlots[this.duration][this.dateIndex])[0]}},todaysAppointments(t){const e=[];for(const n of this.$store.getters.allAppointments)this.availableDates[t].value==n.date&&e.push(n);return e},getPricing:function(t,e){return t>30?this.pricing[e-t]:this.pricingCheap[e-t]},getDate:function(t){const e=t.toString(),n=e.substring(6),i=e.substring(4,6),a=e.substring(0,4);return n+"."+i+"."+a}},mounted(){this.availableDates.length>0&&(this.dateIndex=0),this.time=this.currentTime},watch:{currentTime(t){this.time=t},duration(t,e){this.prevDuration=e}},computed:{availableDates(){const t=new Date,e=[];for(let n=0;n<7;n++){const i=new Date(t);i.setDate(t.getDate()+n);const a=i.toLocaleString("en-US",{weekday:"long"}),s=i.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),[r,o,l]=s.split("/"),d=parseInt(l+r+o),u=l+"-"+r+"-"+o,c=`${o}.${r}`;e.push({day_text:this.dayDict[a],date_short:c,date:u,value:d})}return e},currentTime(){return this.currentDaySlots[0]},availableTimeSlots(){const t={3:[],4:[],5:[],6:[]};for(let e=3;e<7;e++){for(let o=0;o<7;o++)t[e].push({...this.timeSlots}),delete t[e][o][70];for(let o=0;o<7;o++){for(const n of this.$store.getters.availability[o].ranges)if(this.availableDates[o].date==this.$store.getters.availability[o].date.slice(0,10)){const i=n.start.index,a=n.end.index;for(let n=i;n<a;n++)delete t[e][o][n]}for(const n of this.$store.getters.cart)if(this.availableDates[o].date==n.date){const i=n.start_index,a=n.end_index;for(let n=i;n<a;n++)delete t[e][o][n]}}const n=new Date,i=n.getHours(),a=n.getMinutes(),s=60*i+a-390,r=Math.floor(s/15)+1;for(let o=0;o<r;o++)delete t[e][0][o];for(let o=0;o<7;o++)for(const n in t[e][o])for(let i=1;i<this.duration;i++)if(!t[e][o][parseInt(n)+parseInt(i)]){delete t[e][o][n];break}}return t},currentDaySlots(){return Object.keys(this.availableTimeSlots[this.duration][this.dateIndex])}}},_=n(744);const b=(0,_.Z)(y,[["render",f],["__scopeId","data-v-a2939b90"]]);var w=b},425:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var i=n(252);const a=t=>((0,i.dD)("data-v-7e11f824"),t=t(),(0,i.Cn)(),t),s={class:"spinner"},r=a((()=>(0,i._)("div",{class:"loadingio-spinner-rolling-m1e8ui1q0jb"},[(0,i._)("div",{class:"ldio-ood1y432iu"},[(0,i._)("div")])],-1))),o=[r];function l(t,e,n,a,r,l){return(0,i.wg)(),(0,i.iD)("div",s,o)}var d={name:"LoadingSpinner"},u=n(744);const c=(0,u.Z)(d,[["render",l],["__scopeId","data-v-7e11f824"]]);var h=c},362:function(t,e,n){"use strict";var i=n(963),a=n(907),s=n(252);function r(t,e){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}var o=n(744);const l={},d=(0,o.Z)(l,[["render",r]]);var u=d,c=n(201);const h=t=>((0,s.dD)("data-v-27fa0b3a"),t=t(),(0,s.Cn)(),t),p={class:"home"},m=h((()=>(0,s._)("h1",{class:"title"},[(0,s.Uk)("skultes "),(0,s._)("br"),(0,s._)("span",null,"gym")],-1))),g={key:1},v=h((()=>(0,s._)("footer",null,[(0,s._)("a",{href:"tel:+37127804609"},"☎ Atis Ozols")],-1))),f={ref:"bottom"};function y(t,e,n,i,a,r){const o=(0,s.up)("LoadingSpinner"),l=(0,s.up)("Availability"),d=(0,s.up)("InputForm"),u=(0,s.up)("Cart");return(0,s.wg)(),(0,s.iD)("div",p,[m,this.$store.getters.loadingStatus?((0,s.wg)(),(0,s.j4)(o,{key:0})):((0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("button",{onClick:e[0]||(e[0]=(...t)=>r.scrollDown&&r.scrollDown(...t)),class:"btn-rounded-clear"},"Pieteikties ›"),(0,s.Wm)(l),(0,s.Wm)(d),this.$store.getters.cart.length>0?((0,s.wg)(),(0,s.j4)(u,{key:0,payment:!0})):(0,s.kq)("",!0),v])),(0,s._)("span",f,null,512)])}var _=n(511),b=n(425),w=n(465),k=n(577);const D=t=>((0,s.dD)("data-v-5637ecc2"),t=t(),(0,s.Cn)(),t),S={class:"wrapper"},C=D((()=>(0,s._)("div",{class:"left"},[(0,s._)("span",null,"8:00"),(0,s._)("span",null,"12:00"),(0,s._)("span",null,"16:00"),(0,s._)("span",null,"20:00")],-1))),T={class:"right"},j={class:"dates"},x={class:"timetable"};function I(t,e,n,i,a,r){return(0,s.wg)(),(0,s.iD)("div",S,[C,(0,s._)("div",T,[(0,s._)("div",j,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.$store.getters.availability.slice(0,7),(t=>((0,s.wg)(),(0,s.iD)("span",null,(0,k.zw)(r.dateText(t.date)),1)))),256))]),(0,s._)("div",x,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.timetable,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"row",key:e},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t,((t,n)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,k.C_)(["cell",{available:0==t,divider:(e+2)%4==0,divider__dark:6==e||22==e||38==e||54==e}]),key:n},null,2)))),128))])))),128))])])])}var L={data(){return{timetable:[]}},mounted(){this.generateTimetable()},methods:{generateTimetable(){for(let t=0;t<69;t++){const e=[];for(let n=0;n<7;n++){const i=this.isUnavailable(n,t)?1:0;e.push(i)}this.timetable.push(e)}},isUnavailable(t,e){const n=this.$store.getters.availability[t].ranges;return n.some((t=>e>=t.start.index&&e<t.end.index))},dateText(t){const e=new Date(t),n=e.getDate().toString().padStart(2,"0"),i=(e.getMonth()+1).toString().padStart(2,"0");return`${n}.${i}`}}};const A=(0,o.Z)(L,[["render",I],["__scopeId","data-v-5637ecc2"]]);var $=A,z={name:"HomeView",components:{Cart:_.Z,InputForm:w.Z,LoadingSpinner:b.Z,Availability:$},data(){return{}},mounted(){this.$store.dispatch("fetchAvailability")},methods:{scrollDown(){const t=this.$refs.bottom;t?t.scrollIntoView({behavior:"smooth"}):console.log("error")}},computed:{startingDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate());const n=e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),[i,a,s]=n.split("/"),r=parseInt(s+i+a);return r}}};const M=(0,o.Z)(z,[["render",y],["__scopeId","data-v-27fa0b3a"]]);var O=M;const P=t=>((0,s.dD)("data-v-2d2fda6d"),t=t(),(0,s.Cn)(),t),U={class:"login"},Z=P((()=>(0,s._)("br",null,null,-1))),E=P((()=>(0,s._)("span",null,"gym",-1))),F=P((()=>(0,s._)("input",{type:"submit",class:"btn-rounded-clear",value:"Pieslēgties"},null,-1)));function q(t,e,n,a,r,o){const l=(0,s.up)("LoadingSpinner");return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("h1",{class:(0,k.C_)(["title",{hidden:this.loading}])},[(0,s.Uk)("skultes "),Z,E],2),this.loading?((0,s.wg)(),(0,s.j4)(l,{key:0})):((0,s.wg)(),(0,s.iD)("form",{key:1,class:"input-fields",onSubmit:e[2]||(e[2]=(0,i.iM)(((...t)=>o.login&&o.login(...t)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.user=t),type:"email",name:"pass",placeholder:"",autocomplete:"email",required:""},null,512),[[i.nr,r.user]]),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.pass=t),type:"password",name:"email",placeholder:"",autocomplete:"current-password",required:""},null,512),[[i.nr,r.pass]]),F],32))])}var N=n(669),V={name:"login",components:{LoadingSpinner:b.Z},data(){return{user:"",pass:"",auth:null,loading:!1}},methods:{login(){this.loading=!0,(0,N.e5)(this.auth,this.user,this.pass).then((t=>{this.$router.push("/admin")}),(t=>{this.loading=!1,alert(t.message)}))}},mounted(){this.auth=(0,N.v0)(),(0,N.Aj)(this.auth,(t=>{t&&this.$router.push("/admin")}))}};const H=(0,o.Z)(V,[["render",q],["__scopeId","data-v-2d2fda6d"]]);var K=H;const W=t=>((0,s.dD)("data-v-6b1596ee"),t=t(),(0,s.Cn)(),t),Y={key:1},B={key:0},J=W((()=>(0,s._)("p",{class:"thank-you"}," Paldies! ",-1))),R=W((()=>(0,s._)("p",null," Maksājums ir veiksmīgs ",-1))),G={key:1},Q=W((()=>(0,s._)("p",{class:"thank-you"}," Kļūda! ",-1))),X=W((()=>(0,s._)("p",null," Maksājums nav atrasts ",-1))),tt={key:2},et=W((()=>(0,s._)("p",{class:"thank-you"}," Lūdzu, uzgaidiet! ",-1))),nt=W((()=>(0,s._)("p",null," Maksājums tiek apstrādāts ",-1)));function it(t,e,n,i,a,r){const o=(0,s.up)("LoadingSpinner"),l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",{class:(0,k.C_)(["success",{hidden:!this.status}])},[this.status?((0,s.wg)(),(0,s.iD)("div",Y,["paid"===this.status?((0,s.wg)(),(0,s.iD)("div",B,[J,R,(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Uz sākumu")])),_:1})])):"unknown"===this.status?((0,s.wg)(),(0,s.iD)("div",G,[Q,X,(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Uz sākumu")])),_:1})])):"unpaid"===this.status||"no_payment_required"===this.status?((0,s.wg)(),(0,s.iD)("div",tt,[et,nt,(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Uz sākumu")])),_:1})])):(0,s.kq)("",!0)])):((0,s.wg)(),(0,s.j4)(o,{key:0}))],2)}const at=n(247);var st={name:"SuccessView",components:{LoadingSpinner:b.Z},data(){return{status:null}},mounted(){this.$route.query.session_id?fetch(at.origin+"/api/checkout/"+this.$route.query.session_id).then((t=>t.ok?t.json():t.json().then((t=>Promise.reject(t))))).then((t=>{this.status=t.payment_status})).catch((t=>console.error(t.error))):this.status="unknown"}};const rt=(0,o.Z)(st,[["render",it],["__scopeId","data-v-6b1596ee"]]);var ot=rt;const lt=[{path:"/",name:"home",component:O},{path:"/login",name:"login",component:K},{path:"/admin",name:"admin",component:function(){return n.e(443).then(n.bind(n,166))}},{path:"/success",name:"success",component:ot}],dt=(0,c.p7)({history:(0,c.r5)(),routes:lt});var ut=dt,ct=n(25);n(247);const ht=(0,a.MT)({state(){return{loadingAvailability:!0,availability:[],cart:[]}},mutations:{setLoadingAvailability(t,e){t.loadingAvailability=e},setAvailability(t,e){t.availability=e},updateCart(t,e){t.cart.push(e),console.log(t.cart)},removeItem(t,e){t.cart.splice(e,1)}},actions:{fetchAvailability(t){t.commit("setLoadingAvailability",!0),fetch("https://skultesgym.lv/api/availability/").then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((e=>{t.commit("setAvailability",e),t.commit("setLoadingAvailability",!1)})).catch((e=>{console.error("Error fetching availability:",e),t.commit("setLoadingAvailability",!1)}))},addToCart(t,e){t.commit("updateCart",e)},removeFromCart(t,e){t.commit("removeItem",e)},toggleLoading(t,e){t.commit("setLoadingStatus",e)}},getters:{loadingStatus(t){return t.loadingAvailability},cart(t){return t.cart},availability(t){return t.availability}}});(0,i.ri)(u).use(ut).use(ht).use(ct.ZP).mount("#app")},247:function(t){const e="https://skultesgym.lv";t.exports={origin:e}}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var d=a();void 0!==d&&(e=d)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,a,s]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.84cc485b.js"}}(),function(){n.miniCssF=function(t){return"css/about.844c2e6d.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="gymadmin:";n.l=function(i,a,s,r){if(t[i])t[i].push(a);else{var o,l;if(void 0!==s)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var c=d[u];if(c.getAttribute("src")==i||c.getAttribute("data-webpack")==e+s){o=c;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+s),o.src=i),t[i]=[a];var h=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var a=t[i];if(delete t[i],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,i,a){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var r=function(n){if(s.onerror=s.onload=null,"load"===n.type)i();else{var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=o,s.parentNode&&s.parentNode.removeChild(s),a(l)}};return s.onerror=s.onload=r,s.href=e,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===t||s===e))return a}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){a=r[i],s=a.getAttribute("data-href");if(s===t||s===e)return a}},i=function(i){return new Promise((function(a,s){var r=n.miniCssF(i),o=n.p+r;if(e(r,o))return a();t(i,o,null,a,s)}))},a={143:0};n.f.miniCss=function(t,e){var n={443:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=i(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,i){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var s=new Promise((function(n,i){a=t[e]=[n,i]}));i.push(a[2]=s);var r=n.p+n.u(e),o=new Error,l=function(i){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",o.name="ChunkLoadError",o.type=s,o.request=r,a[1](o)}};n.l(r,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,r=i[0],o=i[1],l=i[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var u=l(n)}for(e&&e(i);d<r.length;d++)s=r[d],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},i=self["webpackChunkgymadmin"]=self["webpackChunkgymadmin"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(362)}));i=n.O(i)})();
//# sourceMappingURL=app.c14f2972.js.map