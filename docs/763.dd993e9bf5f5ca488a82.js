(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[763],{2763:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlazeformsModule:()=>p});var s=n(8583),i=n(7310),a=n(7716),r=n(2595),l=n(4336);function o(e,t){if(1&e&&(a.ynx(0),a.TgZ(1,"div",2),a.TgZ(2,"h3"),a._uU(3),a.qZA(),a._UZ(4,"app-exported-form",3),a.qZA(),a.BQk()),2&e){const e=a.oxw();a.xp6(3),a.Oqu(e.formDetail.name),a.xp6(1),a.Q6J("elements",e.elements)("initial",e.paymentDetails)("payments",e.payments)("config",e.formDetail)}}function u(e,t){1&e&&a._uU(0," It's Loading\n")}const c=[{path:":workspaceName/:formName",component:(()=>{class e{constructor(e,t,n){this.http=e,this.routec=t,this.renderer=n,this.dataLoaded=!1,this.model={name:""},this.haveTabs=!1,this.active=0,this.allArr=[],this.obj={},this.submitted=!1,this.workSpaceName="",this.formDetail={},this.payments=[],this.routec.params.subscribe(e=>{this.workSpaceName=e.workspaceName,this.getForm(e.workspaceName,e.formName)}),this.globalListenFunc=this.renderer.listen("document","keypress",e=>{this.payments=[],this.extractAllLineItems(this.elements)})}getForm(e,t){this.http.call("GetFormDesign","POST",{Id:null,Name:t,WorkSpaceName:e,userID:null}).subscribe(e=>{this.dataLoaded=!0,this.formDetail=Object.assign(Object.assign({},e),{workspaceName:this.workSpaceName}),this.elements=JSON.parse(e.miscellaneousJSON).targetBuilderTools,this.paymentDetails=JSON.parse(e.miscellaneousJSON).paymentSetting,this.extractAllLineItems(this.elements),console.log(this.payments)})}extractAllLineItems(e){e.forEach(e=>{"payment"!==e.inputType&&"currency"!==e.inputType||(null==e?void 0:e.dependUpon)&&!this.checkForDependency(e,"dependUpon")||this.payments.push({name:e.name,value:e.value}),e.childSection&&this.extractAllLineItems(e.childSection),e.children&&this.extractAllLineItems(e.children)})}ngOnInit(){}checkForDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!0;const s=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[s].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!1}checkForRDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!1;const s=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[s].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!0}submitParentForm(e){let t="";this.haveTabs?this.allArr.forEach(e=>{e.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"})}):this.elements.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"}),console.log(t)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(r.O),a.Y36(i.gz),a.Y36(a.Qsj))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-blazeforms"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notLoaded",""],[1,"container-fluid"],[3,"elements","initial","payments","config"]],template:function(e,t){if(1&e&&(a.YNc(0,o,5,5,"ng-container",0),a.YNc(1,u,1,0,"ng-template",null,1,a.W1O)),2&e){const e=a.MAs(2);a.Q6J("ngIf",t.dataLoaded)("ngIfElse",e)}},directives:[s.O5,l.d],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(c)],i.Bz]}),e})();var d=n(3679),m=n(2212),f=n(4466);let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.ez,m.IJ,d.u5,d.UX,f.m,h]]}),e})()}}]);