(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[354],{2354:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlazeformsModule:()=>N});var l=n(8583),i=n(7310),s=n(9336),o=n(7716),a=n(2595),r=n(3065),u=n(5521);function c(e,t){if(1&e){const e=o.EpF();o.ynx(0),o.TgZ(1,"div",2),o.TgZ(2,"h2",3),o._uU(3),o.qZA(),o.TgZ(4,"app-exported-form",4),o.NdJ("inputUpdateEvent",function(t){return o.CHM(e),o.oxw().inputUpdateEventHandler(t)}),o.qZA(),o.qZA(),o.BQk()}if(2&e){const e=o.oxw();o.xp6(3),o.Oqu(e.formDetail.name),o.xp6(1),o.Q6J("levelDetails",e.levelDetails)("isPublishPage",!0)("elements",e.elements)("initial",e.paymentDetails)("payments",e.payments)("config",e.formDetail)}}function d(e,t){1&e&&(o.ynx(0),o._uU(1," Need Login "),o.BQk())}function m(e,t){1&e&&o._uU(0," It's Loading ")}function h(e,t){if(1&e&&(o.YNc(0,d,2,0,"ng-container",0),o.YNc(1,m,1,0,"ng-template",null,5,o.W1O)),2&e){const e=o.MAs(2),t=o.oxw();o.Q6J("ngIf",t.needLogin)("ngIfElse",e)}}let p=(()=>{class e{constructor(e,t,n,l){this.http=e,this.store=t,this.routec=n,this.renderer=l,this.dataLoaded=!1,this.model={name:""},this.haveTabs=!1,this.active=0,this.allArr=[],this.obj={},this.submitted=!1,this.workSpaceName="",this.formDetail={},this.payments=[],this.needLogin=!1,this.levelDetails={},this.userInfoSubscription$=this.store.select(s.S8).subscribe(e=>{this.userInfo=e}),this.routec.params.subscribe(e=>{this.workSpaceName=e.workspaceName,this.getForm(e.workspaceName,e.formName,e.entry)}),this.globalListenFunc=this.renderer.listen("document","keypress",e=>{this.payments=[],this.extractAllLineItems(this.elements)})}getForm(e,t,n){var l,i;console.log(this.userInfo,n);const s={FormEntriesId:n||null,Id:null,Name:t,WorkSpaceName:e,userID:(null===(l=this.userInfo)||void 0===l?void 0:l.Id)?null===(i=this.userInfo)||void 0===i?void 0:i.Id:null};this.http.call("GetFormDesign","POST",s).subscribe(e=>{this.dataLoaded=!0;const t=localStorage.getItem("bforms");JSON.parse(t),this.needLogin="WorkFlow"===e.formType&&!this.userInfo,this.formDetail=Object.assign(Object.assign({},e),{workspaceName:this.workSpaceName}),this.elements=[...JSON.parse(e.miscellaneousJSON).levels||[],...JSON.parse(e.miscellaneousJSON).targetBuilderTools],this.paymentDetails=JSON.parse(e.miscellaneousJSON).paymentSetting,this.extractAllLineItems(this.elements),this.getLevelDetails(this.formDetail),console.log(this.payments)})}getLevelDetails(e){var t,n,l,i,s,o;console.log(e),this.levelDetails.toBeFilledById=null===(t=this.userInfo)||void 0===t?void 0:t.Id,this.levelDetails.toBeFilledByName=null===(n=this.userInfo)||void 0===n?void 0:n.name,e.formEntry?(console.log(JSON.parse(e.formEntry)),this.elements=JSON.parse(e.formEntry).savedElementsWithValue,this.levelDetails.disabledLevel=JSON.parse(e.formEntry).levelDetails.enabledLevelId,this.levelDetails.enabledLevelId=JSON.parse(e.formEntry).levelDetails.enabledLevelId,e.workFlowOwners.forEach(t=>{var n;(null===(n=null==t?void 0:t.levelId)||void 0===n?void 0:n.length)>0&&e.workFlowLevels.forEach(e=>{t.levelId===e.id&&(this.levelDetails.toBeFilled=e.id,this.levelDetails.enabledLevelId.push(e.id))})})):(this.levelDetails.enabledLevelId=[null===(i=null===(l=null==e?void 0:e.workFlowLevels)||void 0===l?void 0:l[0])||void 0===i?void 0:i.id],this.levelDetails.toBeFilled=null===(o=null===(s=null==e?void 0:e.workFlowLevels)||void 0===s?void 0:s[0])||void 0===o?void 0:o.id)}extractAllLineItems(e){null==e||e.forEach(e=>{var t;if("payment"!==e.inputType||(null==e?void 0:e.dependUpon)&&!this.checkForDependency(e,"dependUpon")||this.payments.push({name:e.name,value:e.value}),"currency"===e.inputType&&Number(e.value)>0&&this.payments.push({name:e.name,value:e.value}),"toggle"===e.inputType&&e.collectPayment&&e.value&&Number(e.collectAmount)>0&&this.payments.push({name:e.name,value:e.collectAmount}),e.childSection&&this.extractAllLineItems(e.childSection),e.children&&this.extractAllLineItems(e.children),"radio"!==e.inputType&&"dropdown"!==e.inputType||!e.collectPayment||null===(t=e.options)||void 0===t||t.forEach((t,n)=>{(null==t?void 0:t.label)===(null==e?void 0:e.value)&&Number(e.options[n].payment)>0&&this.payments.push({name:e.name,value:e.options[n].payment})}),"checkbox"===e.inputType&&e.collectPayment){let t=0;e.options.forEach((n,l)=>{var i;(null===(i=null==e?void 0:e.value)||void 0===i?void 0:i.includes(n.label))&&(t+=n.payment)}),this.payments.push({name:e.name,value:t})}e.rows&&e.columns.forEach(e=>{"payment"!==e.inputType&&"currency"!==e.inputType||this.payments.push({name:e.name,value:e.value})})})}inputUpdateEventHandler(e){this.payments=[],this.extractAllLineItems(this.elements)}ngOnInit(){}checkForDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!0;const l=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[l].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!1}checkForRDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!1;const l=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[l].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!0}submitParentForm(e){let t="";this.haveTabs?this.allArr.forEach(e=>{e.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"})}):this.elements.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"}),console.log(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.O),o.Y36(r.yh),o.Y36(i.gz),o.Y36(o.Qsj))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-blazeforms"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notLoaded",""],[1,"container-fluid"],[1,"text-center","form-heading","my-1"],[3,"levelDetails","isPublishPage","elements","initial","payments","config","inputUpdateEvent"],["elseTemplate",""]],template:function(e,t){if(1&e&&(o.YNc(0,c,5,7,"ng-container",0),o.YNc(1,h,3,2,"ng-template",null,1,o.W1O)),2&e){const e=o.MAs(2);o.Q6J("ngIf",t.dataLoaded&&!t.needLogin)("ngIfElse",e)}},directives:[l.O5,u.d],styles:[""]}),e})();const v=[{path:":workspaceName/:formName",component:p},{path:":workspaceName/:formName/:entry",component:p},{path:"form-submitted",component:(()=>{class e{constructor(e){this._location=e}ngOnInit(){}back(){this._location.back()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.Ye))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-entry-submitted"]],decls:15,vars:0,consts:[[1,"thank-you-container","container","d-flex","align-items-center","justify-content-center"],[1,"thank-you","row","p-3"],[1,"thank-you-heading-wrapper","col-md-12","py-3","text-center"],[1,"jumbotron","jumbotron-fluid","text-center","bg-transparent"],[1,"material-icons-outlined","md-36","text-bf",2,"font-size","60px"],[1,"display-3"],[1,"lead"],[1,"my-4"],["href","#","role","button",1,"btn","btn-bf","py-2","px-4","mt-5",3,"click"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"span",4),o._uU(5," thumb_up"),o.qZA(),o.TgZ(6,"h1",5),o._uU(7,"Thank You!"),o.qZA(),o.TgZ(8,"p",6),o._uU(9," Thank you for submitting the form.!"),o.qZA(),o._UZ(10,"hr",7),o.TgZ(11,"p",6),o._uU(12,"maximus felis. Sed vel lacinia nulla. Nullam dolor nulla, dignissim sed ante eget, placerat ultrices neque. Nunc sit amet cursus eros, ac commodo est. Proin vel ultricies turpis."),o.qZA(),o.TgZ(13,"a",8),o.NdJ("click",function(){return t.back()}),o._uU(14," Submit New Entry"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA())},styles:[".centered[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.thank-you-area-box[_ngcontent-%COMP%]   .material-icons.check-icon[_ngcontent-%COMP%]{border:1px solid #2ecd71;color:#2ecd71;width:50px;height:50px;line-height:50px;text-align:center;border-radius:50%;font-size:35px}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),e})();var g=n(3679),y=n(526),b=n(4466);let N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[l.ez,y.IJ,g.u5,g.UX,b.m,f]]}),e})()}}]);