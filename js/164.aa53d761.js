"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[164],{9164:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var n=s(3396);const a={class:"container mt-5 mb-5 d-flex justify-content-center"},i={key:0,class:"cls-card px-1 py-4"},c=(0,n._)("h3",{class:"text-center wow fadeInDown","data-wow-delay":"0.4s"}," withing to sent message verify ",-1),r=[c],o={key:1,class:"cls-card px-1 py-4"},h=(0,n._)("h3",{class:"text-center wow fadeInUp","data-wow-delay":"0.8s"}," the massage ,has been sent to the email,pleas check you inbox ",-1),d=[h];function l(e,t,s,c,h,l){return(0,n.wg)(),(0,n.iD)("div",a,[h.isSent?((0,n.wg)(),(0,n.iD)("div",o,d)):((0,n.wg)(),(0,n.iD)("div",i,r))])}var w={data(){return{isSent:!1}},methods:{sentVerify:async function(){let e=this.$route.params.token;await this.$store.dispatch("emailResend",e).then((e=>{this.isSent=!0})).catch((e=>{this.isSent=!0}))}},created(){this.sentVerify()}},p=s(89);const u=(0,p.Z)(w,[["render",l]]);var f=u}}]);
//# sourceMappingURL=164.aa53d761.js.map