(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[354],{82354:(e,t,n)=>{"use strict";n.r(t),n.d(t,{BlazeformsModule:()=>k});var l=n(38583),i=n(67310),o=n(99336),s=n(37716),a=n(62595),r=n(23065),u=n(25521);const d=function(e){return{"background-image":e}};function c(e,t){if(1&e){const e=s.EpF();s.ynx(0),s.TgZ(1,"div",2),s.TgZ(2,"h2",3),s._uU(3),s.qZA(),s.TgZ(4,"app-exported-form",4),s.NdJ("inputUpdateEvent",function(t){return s.CHM(e),s.oxw().inputUpdateEventHandler(t)}),s.qZA(),s.qZA(),s.BQk()}if(2&e){const e=s.oxw();s.xp6(1),s.Udp("background-color",null==e.styling?null:e.styling.pagebackgroundColor),s.Q6J("ngStyle",s.VKq(12,d,e.getUrl(null==e.styling?null:e.styling.pagebackgroundImage))),s.xp6(2),s.Oqu(e.formDetail.name),s.xp6(1),s.Q6J("entryId",e.entryId)("levelDetails",e.levelDetails)("styling",e.styling)("isPublishPage",!0)("elements",e.elements)("initial",e.paymentDetails)("payments",e.payments)("config",e.formDetail)}}function m(e,t){1&e&&(s.ynx(0),s._uU(1," Need Login "),s.BQk())}function p(e,t){1&e&&s._uU(0," It's Loading ")}function h(e,t){if(1&e&&(s.YNc(0,m,2,0,"ng-container",0),s.YNc(1,p,1,0,"ng-template",null,5,s.W1O)),2&e){const e=s.MAs(2),t=s.oxw();s.Q6J("ngIf",t.needLogin)("ngIfElse",e)}}let v=(()=>{class e{constructor(e,t,n,l){this.http=e,this.store=t,this.routec=n,this.renderer=l,this.dataLoaded=!1,this.model={name:""},this.haveTabs=!1,this.active=0,this.allArr=[],this.obj={},this.submitted=!1,this.workSpaceName="",this.formDetail={},this.payments=[],this.needLogin=!1,this.levelDetails={},this.entryId=null,document.body.className="bg-light",this.userInfoSubscription$=this.store.select(o.S8).subscribe(e=>{this.userInfo=e}),this.routec.params.subscribe(e=>{this.workSpaceName=e.workspaceName,this.entryId=e.entry,this.getForm(e.workspaceName,e.formName,e.entry)}),this.globalListenFunc=this.renderer.listen("document","keypress",e=>{this.payments=[],this.extractAllLineItems(this.elements)})}getForm(e,t,n){var l,i,o,s,a,r;const u=localStorage.getItem("bforms");console.log(this.userInfo,n,null===(i=null===(l=JSON.parse(u))||void 0===l?void 0:l.user)||void 0===i?void 0:i.Id);const d={FormEntriesId:n||null,Id:null,Name:t,WorkSpaceName:e,userID:(null===(s=null===(o=JSON.parse(u))||void 0===o?void 0:o.user)||void 0===s?void 0:s.Id)?null===(r=null===(a=JSON.parse(u))||void 0===a?void 0:a.user)||void 0===r?void 0:r.Id:null};this.http.call("GetFormDesign","POST",d).subscribe(e=>{var t,n,l,i;this.dataLoaded=!0;const o=localStorage.getItem("bforms");this.needLogin="WorkFlow"===e.formType&&!(null===(n=null===(t=JSON.parse(o))||void 0===t?void 0:t.user)||void 0===n?void 0:n.Id),this.formDetail=Object.assign(Object.assign({},e),{workspaceName:this.workSpaceName}),this.elements=[...(null===(l=JSON.parse(e.miscellaneousJSON))||void 0===l?void 0:l.levels)||[],...null===(i=JSON.parse(e.miscellaneousJSON))||void 0===i?void 0:i.targetBuilderTools],this.paymentDetails=JSON.parse(e.miscellaneousJSON).paymentSetting,this.styling=JSON.parse(e.miscellaneousJSON).styling,this.placeholderStyling(JSON.parse(e.miscellaneousJSON).styling),this.extractAllLineItems(this.elements),this.getLevelDetails(this.formDetail),console.log(this.payments)})}placeholderStyling(e){document.getElementById("bclr")&&document.getElementById("bclr").remove();const t=null==e?void 0:e.placeholders.color,n=null==e?void 0:e.placeholders.size,l=null==e?void 0:e.placeholders.font;document.head.insertAdjacentHTML("beforeend",`\n      <style id="bclr">\n      app-exported-form input::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n        color:    ${t}!important;\n        font-size: ${n}!important;\n        font-family: ${l}!important;\n    }\n    input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n      color:    ${t}!important;\n      font-size: ${n}!important;\n      font-family: ${l}!important;\n       opacity:  1;\n    }\n  \n    }</style>\n      \n      `)}getLevelDetails(e){var t,n,l,i,o,s;console.log(e),this.levelDetails.toBeFilledById=null===(t=this.userInfo)||void 0===t?void 0:t.Id,this.levelDetails.toBeFilledByName=null===(n=this.userInfo)||void 0===n?void 0:n.name,e.formEntry?(console.log(JSON.parse(e.formEntry)),this.elements=JSON.parse(e.formEntry).savedElementsWithValue,this.levelDetails.disabledLevel=JSON.parse(e.formEntry).levelDetails.enabledLevelId,this.levelDetails.enabledLevelId=JSON.parse(e.formEntry).levelDetails.enabledLevelId,e.workFlowOwners.forEach(t=>{var n;(null===(n=null==t?void 0:t.levelId)||void 0===n?void 0:n.length)>0&&e.workFlowLevels.forEach(e=>{t.levelId===e.id&&(this.levelDetails.toBeFilled=e.id,this.levelDetails.enabledLevelId.push(e.id))})})):(this.levelDetails.enabledLevelId=[null===(i=null===(l=null==e?void 0:e.workFlowLevels)||void 0===l?void 0:l[0])||void 0===i?void 0:i.id],this.levelDetails.toBeFilled=null===(s=null===(o=null==e?void 0:e.workFlowLevels)||void 0===o?void 0:o[0])||void 0===s?void 0:s.id)}extractAllLineItems(e){null==e||e.forEach(e=>{var t;if("payment"!==e.inputType||(null==e?void 0:e.dependUpon)&&!this.checkForDependency(e,"dependUpon")||this.payments.push({name:e.name,value:e.value}),"currency"===e.inputType&&Number(e.value)>0&&this.payments.push({name:e.name,value:e.value}),"toggle"===e.inputType&&e.collectPayment&&e.value&&Number(e.collectAmount)>0&&this.payments.push({name:e.name,value:e.collectAmount}),e.childSection&&this.extractAllLineItems(e.childSection),e.children&&this.extractAllLineItems(e.children),"radio"!==e.inputType&&"dropdown"!==e.inputType||!e.collectPayment||null===(t=e.options)||void 0===t||t.forEach((t,n)=>{(null==t?void 0:t.label)===(null==e?void 0:e.value)&&Number(e.options[n].payment)>0&&this.payments.push({name:e.name,value:e.options[n].payment})}),"checkbox"===e.inputType&&e.collectPayment){let t=0;e.options.forEach((n,l)=>{var i;(null===(i=null==e?void 0:e.value)||void 0===i?void 0:i.includes(n.label))&&(t+=n.payment)}),this.payments.push({name:e.name,value:t})}e.rows&&e.columns.forEach(e=>{"payment"!==e.inputType&&"currency"!==e.inputType||this.payments.push({name:e.name,value:e.value})})})}inputUpdateEventHandler(e){this.payments=[],this.extractAllLineItems(this.elements)}ngOnInit(){}checkForDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!0;const l=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[l].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!1}checkForRDependency(e,t){const n=null==e?void 0:e[t];if(!n)return!1;const l=this.elements.findIndex(e=>e.uiIndexId==n.elementId),i=this.elements[l].value;if("boolean"===n.type){if(n.isFilledOut)return"number"==typeof i?i>-1:i.length>0;if(n.isNotFilledOut)return 0===i||0===i.length}else{if(n.is)return i===n.value;if(n.isNot)return i!==n.value;if(n.contains)return null==i?void 0:i.toLowerCase().includes(n.value);if(n.doesNotContains)return!(null==i?void 0:i.toLowerCase().includes(n.value));if(n.endWith)return i.endsWith(n.value);if(n.doesNotEndWith)return i.endsWith(n.value);if(n.startWith)return i.startsWith(n.value);if(n.doesNotStartWith)return!i.startsWith(n.value)}return!0}getUrl(e){return`url(${e})`}submitParentForm(e){let t="";this.haveTabs?this.allArr.forEach(e=>{e.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"})}):this.elements.forEach(e=>{t=t+e.name+"="+(e.value&&0!==e.value.length?e.value:"No_value")+"||"}),console.log(t)}ngOnDestroy(){document.body.className=""}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(a.O),s.Y36(r.yh),s.Y36(i.gz),s.Y36(s.Qsj))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-blazeforms"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notLoaded",""],[1,"container","exported-form-container","bf-custom-styling","px-5","my-5","shadow",3,"ngStyle"],[1,"text-center","form-heading","py-3"],[3,"entryId","levelDetails","styling","isPublishPage","elements","initial","payments","config","inputUpdateEvent"],["elseTemplate",""]],template:function(e,t){if(1&e&&(s.YNc(0,c,5,14,"ng-container",0),s.YNc(1,h,3,2,"ng-template",null,1,s.W1O)),2&e){const e=s.MAs(2);s.Q6J("ngIf",t.dataLoaded&&!t.needLogin)("ngIfElse",e)}},directives:[l.O5,l.PC,u.d],styles:[".exported-form-container[_ngcontent-%COMP%]{background-color:#fff}.exported-form-container[_ngcontent-%COMP%]   .ngx-dnd-containe[_ngcontent-%COMP%]   .ngx-dnd-item[_ngcontent-%COMP%], .exported-form-container[_ngcontent-%COMP%]   .ngx-dnd-container[_ngcontent-%COMP%]{background-color:initial!important}"]}),e})();function f(e,t){if(1&e&&(s.TgZ(0,"p",6),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Transaction Id: ",e.params.chargeId,"")}}function g(e,t){if(1&e&&(s.TgZ(0,"p",6),s._uU(1),s.qZA()),2&e){const e=s.oxw();s.xp6(1),s.hij("Amount: $",e.params.amount,"")}}const y=[{path:":workspaceName/:formName",component:v},{path:":workspaceName/:formName/:entry",component:v},{path:"form-submitted",component:(()=>{class e{constructor(e,t){this._location=e,this.route=t,this.route.queryParams.subscribe(e=>{this.params=e})}ngOnInit(){}back(){this._location.back()}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(l.Ye),s.Y36(i.gz))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-entry-submitted"]],decls:17,vars:2,consts:[[1,"thank-you-container","container","d-flex","align-items-center","justify-content-center"],[1,"thank-you","row","p-3"],[1,"thank-you-heading-wrapper","col-md-12","py-3","text-center"],[1,"jumbotron","jumbotron-fluid","text-center","bg-transparent"],[1,"material-icons-outlined","md-36","text-bf",2,"font-size","60px"],[1,"display-3"],[1,"lead"],[1,"my-4"],["href","#","role","button",1,"btn","btn-bf","py-2","px-4","mt-5",3,"click"],["class","lead",4,"ngIf"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"span",4),s._uU(5," thumb_up"),s.qZA(),s.TgZ(6,"h1",5),s._uU(7,"Thank You!"),s.qZA(),s.TgZ(8,"p",6),s._uU(9," Thank you for submitting the form.!"),s.qZA(),s._UZ(10,"hr",7),s._UZ(11,"p",6),s.TgZ(12,"a",8),s.NdJ("click",function(){return t.back()}),s._uU(13," Submit New Entry"),s.qZA(),s._UZ(14,"hr",7),s.YNc(15,f,2,1,"p",9),s.YNc(16,g,2,1,"p",9),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(15),s.Q6J("ngIf",t.params.chargeId),s.xp6(1),s.Q6J("ngIf",t.params.chargeId))},directives:[l.O5],styles:[".centered[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}.thank-you-area-box[_ngcontent-%COMP%]   .material-icons.check-icon[_ngcontent-%COMP%]{border:1px solid #2ecd71;color:#2ecd71;width:50px;height:50px;line-height:50px;text-align:center;border-radius:50%;font-size:35px}"]}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(y)],i.Bz]}),e})();var I=n(3679),N=n(30526),x=n(44466);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[l.ez,N.IJ,I.u5,I.UX,x.m,b]]}),e})()}}]);