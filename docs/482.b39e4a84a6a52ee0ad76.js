(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[482],{7482:(e,r,t)=>{"use strict";t.r(r),t.d(r,{UserModule:()=>ae});var n=t(8583),i=t(9215),o=t(665),a=t(4395),s=t(8002),l=t(7716),c=t(2595);function d(e,r){1&e&&(l.TgZ(0,"div",21),l._uU(1,"Email is required"),l.qZA())}function p(e,r){if(1&e&&(l.ynx(0),l.YNc(1,d,2,0,"div",13),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.email.errors?null:e.email.errors.required)||(null==e.email.errors?null:e.email.errors.pattern))}}function u(e,r){1&e&&(l.TgZ(0,"div",21),l._uU(1," Email not found "),l.qZA())}function g(e,r){1&e&&l._UZ(0,"span",22)}const m=function(){return["../register"]};let f=(()=>{class e{constructor(e,r){this.router=e,this.http=r,this.isFormSubmitted=!1,this.email=new o.NI("",[o.kI.required,o.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],this.checkEmailExist.bind(this))}checkEmailExist({value:e}){return this.http.call("checkEmail","POST",{Email:e}).pipe((0,a.b)(500),(0,s.U)(e=>e.data?null:{emailNotExists:!0}))}ngOnInit(){}submit(){console.log(JSON.stringify(this.email.value)),this.isFormSubmitted=!0,this.http.call("SendResetPasswordLinq","POST",{Email:this.email.value}).subscribe(e=>{console.log(e)}),this.router.navigate(["/home"])}}return e.\u0275fac=function(r){return new(r||e)(l.Y36(i.F0),l.Y36(c.O))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-forgot-password"]],decls:26,vars:6,consts:[[1,"login-area-container","container","d-flex","align-items-center","justify-content-center"],[1,"login-box","row","border","rounded-lg"],[1,"left-column","col-md-5","p-4","border-right","d-flex","justify-content-center","flex-wrap","align-content-center"],["src","../../../assets/images/forgot-password-vector.png",1,"login-image"],[1,"right-column","col-md-7"],[1,"right-column-top","row","p-3"],[1,"login-heading-wrapper","col-md-12","py-3","text-center"],[1,"login-heading"],[1,"forgot-password-fields-wrapper","col-md-12","mt-4","px-5"],[1,"form-group"],["for","email",1,"ml-1"],["type","email","id","email","placeholder","Enter your email address",1,"form-control","rounded-sm",3,"formControl"],[4,"ngIf"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],[1,"login-button-wrapper","col-md-12","mt-1","mb-5","px-5"],["type","button",1,"login-button","btn","btn-bf","btn-block","py-2",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],[1,"row"],[1,"col-md-12","d-flex","justify-content-center","flex-wrap","align-content-center","py-4","mt-4","border-top"],[1,"create-account-link-area"],[1,"create-account-link",3,"routerLink"],[1,"field-error","text-right","mt-1","pr-2","small"],[1,"spinner-border","spinner-border-sm","mr-2"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l._UZ(3,"img",3),l.qZA(),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"h2",7),l._uU(8,"Forgot Password"),l.qZA(),l.qZA(),l.TgZ(9,"div",8),l.TgZ(10,"div",9),l.TgZ(11,"label",10),l._uU(12,"Email"),l.qZA(),l._UZ(13,"input",11),l.YNc(14,p,2,1,"ng-container",12),l.YNc(15,u,2,0,"div",13),l.qZA(),l.qZA(),l.TgZ(16,"div",14),l.TgZ(17,"button",15),l.NdJ("click",function(){return r.submit()}),l.YNc(18,g,1,0,"span",16),l._uU(19," Submit "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",17),l.TgZ(21,"div",18),l.TgZ(22,"span",19),l._uU(23," No account yet? "),l.TgZ(24,"a",20),l._uU(25,"Create account"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(13),l.Q6J("formControl",r.email),l.xp6(1),l.Q6J("ngIf",r.email.invalid&&(r.email.dirty||r.email.touched)),l.xp6(1),l.Q6J("ngIf",null==r.email.errors?null:r.email.errors.emailNotExists),l.xp6(3),l.Q6J("ngIf",r.isFormSubmitted),l.xp6(6),l.Q6J("routerLink",l.DdM(5,m)))},directives:[o.Fj,o.JJ,o.oH,n.O5,i.yS],styles:[""]}),e})();var Z=t(9808),h=t(9336),v=t(3065);function A(e,r){1&e&&(l.TgZ(0,"div",48),l._uU(1,"Email is required"),l.qZA())}function q(e,r){if(1&e&&(l.ynx(0),l.YNc(1,A,2,0,"div",47),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.email.errors?null:e.f.email.errors.required)||(null==e.f.email.errors?null:e.f.email.errors.pattern))}}function w(e,r){1&e&&(l.TgZ(0,"div",48),l._uU(1,"Please add minimum 8 charactor for password"),l.qZA())}function T(e,r){1&e&&(l.TgZ(0,"div",48),l._uU(1,"Please add minimum 8 charactor for password"),l.qZA())}function b(e,r){if(1&e&&(l.ynx(0),l.YNc(1,w,2,0,"div",47),l.YNc(2,T,2,0,"div",47),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",null==e.f.password||null==e.f.password.errors?null:e.f.password.errors.minLength),l.xp6(1),l.Q6J("ngIf",null==e.f.password||null==e.f.password.errors?null:e.f.password.errors.required)}}function x(e,r){1&e&&l._UZ(0,"span",40)}const y=function(){return["../forgot-password"]},L=function(){return["../register"]};let N=(()=>{class e{constructor(e,r){this.store=e,this.router=r,this.isFormSubmitted=!1,this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),password:new o.NI("",[o.kI.required,o.kI.minLength(8)])}),this.store.select(h.tH).subscribe(e=>{e.apiCompleted&&(this.isFormSubmitted=!1,e.user&&this.router.navigate(["/forms"])),console.log(e)})}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}get f(){return this.loginForm.controls}ngOnInit(){}submit(){console.log(this.loginForm.value);const e={mappingKey:"login",payload:this.loginForm.value};this.isFormSubmitted=!0,this.store.dispatch((0,Z.n$)({props:e}))}}return e.\u0275fac=function(r){return new(r||e)(l.Y36(v.yh),l.Y36(i.F0))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-login"]],decls:66,vars:9,consts:[[1,"login-area-container","container","d-flex","align-items-center","justify-content-center"],[1,"login-box","row","border","rounded-lg"],[1,"left-column","col-md-5","p-4","border-right","d-flex","justify-content-center","flex-wrap","align-content-center"],["src","../../../assets/images/login-vector.png",1,"login-image"],[1,"right-column","col-md-7"],[1,"right-column-top","row","px-3","pt-3"],[1,"login-heading-wrapper","col-md-12","py-3","text-center"],[1,"login-heading"],[1,"tabbed-form-wrapper","col-md-12"],[1,"row","p-4"],[1,"login-form-nav","col-md-12"],[1,"nav","nav-pills","nav-justified","border-bottom"],[1,"nav-item"],["data-toggle","pill","href","#email-login",1,"nav-link","active","py-3"],[1,"material-icons"],["data-toggle","pill","href","#fingerprint-login",1,"nav-link","py-3"],[1,"form-wrapper","col-md-12"],[1,"tab-content","p-2"],["id","email-login",1,"tab-pane","container","active"],[1,"row","mt-3"],[3,"formGroup","keyup.enter"],[1,"login-fields-wrapper","col-md-12"],[1,"form-group"],["for","email",1,"ml-1"],["type","email","formControlName","email","autocomplete","off","id","email","placeholder","Enter your email address",1,"form-control","rounded-sm"],[4,"ngIf"],["for","password",1,"ml-1"],["type","password","formControlName","password","autocomplete","off","id","password","placeholder","Enter your password",1,"form-control","rounded-sm"],[1,"login-button-wrapper","col-md-12","mt-3"],["type","button",1,"login-button","btn","btn-bf","btn-block","py-2",3,"disabled","click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],[1,"forgot-password-wrapper","col-md-12","text-center","mt-3"],[3,"routerLink"],["id","fingerprint-login",1,"tab-pane","container","fade"],[1,"fingerprint-capture-area","row","text-center"],[1,"fingerprint-instructions","col-md-12","py-3"],[1,"fingerprint-icon","col-md-12","py-3"],["src","../../../assets/images/fingerprint-v2-print.svg","height","100",1,"fingerprint-icon-svg"],[1,"fingerprint-button-wrapper","col-md-12","mt-3"],["type","button",1,"fingerprint-button","btn","btn-bf","btn-block","py-2"],[1,"spinner-border","spinner-border-sm","mr-2"],[1,"scanner-troubleshoot-wrapper","col-md-12","mt-3"],["href","#"],[1,"row"],[1,"col-md-12","d-flex","justify-content-center","flex-wrap","align-content-center","py-4","border-top"],[1,"create-account-link-area"],[1,"create-account-link",3,"routerLink"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l._UZ(3,"img",3),l.qZA(),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"div",6),l.TgZ(7,"h2",7),l._uU(8,"Sign in with Email or Fingerprint"),l.qZA(),l.qZA(),l.TgZ(9,"div",8),l.TgZ(10,"div",9),l.TgZ(11,"div",10),l.TgZ(12,"ul",11),l.TgZ(13,"li",12),l.TgZ(14,"a",13),l.TgZ(15,"i",14),l._uU(16,"mail_outline"),l.qZA(),l._uU(17," Email "),l.qZA(),l.qZA(),l.TgZ(18,"li",12),l.TgZ(19,"a",15),l.TgZ(20,"i",14),l._uU(21,"fingerprint"),l.qZA(),l._uU(22," Fingerprint "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(23,"div",16),l.TgZ(24,"div",17),l.TgZ(25,"div",18),l.TgZ(26,"div",19),l.TgZ(27,"form",20),l.NdJ("keyup.enter",function(){return!r.loginForm.invalid&&r.submit()}),l.TgZ(28,"div",21),l.TgZ(29,"div",22),l.TgZ(30,"label",23),l._uU(31,"Email"),l.qZA(),l._UZ(32,"input",24),l.YNc(33,q,2,1,"ng-container",25),l.qZA(),l.TgZ(34,"div",22),l.TgZ(35,"label",26),l._uU(36,"Password"),l.qZA(),l._UZ(37,"input",27),l.YNc(38,b,3,2,"ng-container",25),l.qZA(),l.qZA(),l.qZA(),l.TgZ(39,"div",28),l.TgZ(40,"button",29),l.NdJ("click",function(){return r.submit()}),l.YNc(41,x,1,0,"span",30),l._uU(42," Log In"),l.qZA(),l.qZA(),l.TgZ(43,"div",31),l.TgZ(44,"a",32),l._uU(45," Forgot Your Password? "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(46,"div",33),l.TgZ(47,"div",34),l.TgZ(48,"div",35),l.TgZ(49,"span"),l._uU(50,"To login using you registered fingerprint, please press the button below and than place your finger on the scanner."),l.qZA(),l.qZA(),l.TgZ(51,"div",36),l._UZ(52,"img",37),l.qZA(),l.TgZ(53,"div",38),l.TgZ(54,"button",39),l._UZ(55,"span",40),l._uU(56," Capture Fingerprint "),l.qZA(),l.qZA(),l.TgZ(57,"div",41),l.TgZ(58,"a",42),l._uU(59,"Having trouble with the scanner?"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(60,"div",43),l.TgZ(61,"div",44),l.TgZ(62,"span",45),l._uU(63," No account yet? "),l.TgZ(64,"a",46),l._uU(65,"Create account"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(27),l.Q6J("formGroup",r.loginForm),l.xp6(6),l.Q6J("ngIf",r.f.email.invalid&&(r.f.email.dirty||r.f.email.touched)),l.xp6(5),l.Q6J("ngIf",r.f.password.invalid&&(r.f.password.dirty||r.f.password.touched)),l.xp6(2),l.Q6J("disabled",r.loginForm.invalid),l.xp6(1),l.Q6J("ngIf",r.isFormSubmitted),l.xp6(3),l.Q6J("routerLink",l.DdM(7,y)),l.xp6(20),l.Q6J("routerLink",l.DdM(8,L)))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,n.O5,i.yS],styles:["form[_ngcontent-%COMP%]{width:100%}"]}),e})();const C=["container"],_=new l.OlP("angular-google-recaptcha siteKey");let k=(()=>{class e{injectAndLoadScript(e){const r=document.createElement("script");r.src=e.scriptSrc,r.async=!0,r.defer=!0,r.onload=()=>e.onLoadCallback(),r.onerror=r=>e.onErrorCallback(r),document.body.appendChild(r)}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac}),e})(),U=(()=>{class e{constructor(e,r,t,n,i){this.recaptchaConfig=e,this.controlDir=r,this.scriptLoaderService=t,this.zone=n,this.cd=i,this.scriptLoad=new l.vpe,this.scriptError=new l.vpe,this.GLOBAL_ON_LOAD_CALLBACK_NAME="___recaptchaOnLoadCallback___",this.controlDir.valueAccessor=this}ngOnInit(){const e=this.controlDir.control;e&&(this.setGlobalHandlers(),this.injectGoogleRecaptchaScript(),e.setValidators(e=>void 0!==this.activeRecaptchaId&&this.recaptchaAPI&&this.recaptchaAPI.getResponse(this.activeRecaptchaId)?null:{invalidRecaptcha:!0}),e.updateValueAndValidity())}ngOnDestroy(){this.unsetGlobalHandlers()}writeValue(e){}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setGlobalHandlers(){window[this.GLOBAL_ON_LOAD_CALLBACK_NAME]=()=>{this.recaptchaAPI=window.grecaptcha,this.renderRecaptcha()}}unsetGlobalHandlers(){delete window[this.GLOBAL_ON_LOAD_CALLBACK_NAME]}injectGoogleRecaptchaScript(){this.scriptLoaderService.injectAndLoadScript({scriptSrc:`https://www.google.com/recaptcha/api.js?render=explicit&onload=${this.GLOBAL_ON_LOAD_CALLBACK_NAME}`,onLoadCallback:()=>this.scriptLoad.emit(),onErrorCallback:e=>this.scriptError.emit(e)})}renderRecaptcha(){this.recaptchaAPI&&(this.activeRecaptchaId=this.recaptchaAPI.render(this.container.nativeElement,{sitekey:this.recaptchaConfig.siteKey,callback:this.onRecaptchaValidCallback.bind(this),"expired-callback":this.onRecaptchaExpiredCallback.bind(this)}))}onRecaptchaValidCallback(){this.zone.run(()=>{this.onChange(!0),this.onTouched(),this.cd.markForCheck()})}onRecaptchaExpiredCallback(){this.zone.run(()=>{this.onChange(!1),this.cd.markForCheck()})}}return e.\u0275fac=function(r){return new(r||e)(l.Y36(_),l.Y36(o.a5,10),l.Y36(k),l.Y36(l.R0b),l.Y36(l.sBO))},e.\u0275cmp=l.Xpm({type:e,selectors:[["recaptcha"]],viewQuery:function(e,r){if(1&e&&l.Gf(C,5),2&e){let e;l.iGM(e=l.CRH())&&(r.container=e.first)}},outputs:{scriptLoad:"scriptLoad",scriptError:"scriptError"},features:[l._Bn([k])],decls:2,vars:0,consts:[[1,"angular-google-recaptcha-container"],["container",""]],template:function(e,r){1&e&&l._UZ(0,"div",0,1)},encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{static forRoot(r){return{ngModule:e,providers:[{provide:_,useValue:r}]}}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({}),e})();function P(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"First Name is required"),l.qZA())}function S(e,r){if(1&e&&(l.ynx(0),l.YNc(1,P,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.FirstName.errors?null:e.f.FirstName.errors.required)||(null==e.f.FirstName.errors?null:e.f.FirstName.errors.pattern))}}function E(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Last Name is required"),l.qZA())}function F(e,r){if(1&e&&(l.ynx(0),l.YNc(1,E,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.LastName.errors?null:e.f.LastName.errors.required)||(null==e.f.LastName.errors?null:e.f.LastName.errors.pattern))}}function J(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Email is required"),l.qZA())}function O(e,r){if(1&e&&(l.ynx(0),l.YNc(1,J,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.Email.errors?null:e.f.Email.errors.required)||(null==e.f.Email.errors?null:e.f.Email.errors.pattern))}}function Q(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1," Email is already exist"),l.qZA())}function Y(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Phone Number is required"),l.qZA())}function B(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Please add a valid mobile number"),l.qZA())}function D(e,r){if(1&e&&(l.ynx(0),l.YNc(1,Y,2,0,"div",33),l.YNc(2,B,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",null==e.f.PhoneNumber.errors?null:e.f.PhoneNumber.errors.required),l.xp6(1),l.Q6J("ngIf",e.f.PhoneNumber.hasError("minlength"))}}function j(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Password is required"),l.qZA())}function z(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Enter a valid password"),l.qZA())}function R(e,r){if(1&e&&(l.ynx(0),l.YNc(1,j,2,0,"div",33),l.YNc(2,z,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.required),l.xp6(1),l.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.pattern)}}function M(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Confirm Password is required"),l.qZA())}function G(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1," Confirm Password is not matched "),l.qZA())}function W(e,r){if(1&e&&(l.ynx(0),l.YNc(1,M,2,0,"div",33),l.YNc(2,G,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.required)||(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.pattern)),l.xp6(1),l.Q6J("ngIf",null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.passwordNotMatched)}}function H(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Work Space Name is required"),l.qZA())}function V(e,r){if(1&e&&(l.ynx(0),l.YNc(1,H,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",(null==e.f.WorkSpaceName.errors?null:e.f.WorkSpaceName.errors.required)||(null==e.f.WorkSpaceName.errors?null:e.f.WorkSpaceName.errors.pattern))}}function $(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1," Work Space Name is already exist"),l.qZA())}function K(e,r){1&e&&(l.TgZ(0,"div",52),l._uU(1,"Please accept the agreement"),l.qZA())}function X(e,r){if(1&e&&(l.ynx(0),l.YNc(1,K,2,0,"div",33),l.BQk()),2&e){const e=l.oxw();l.xp6(1),l.Q6J("ngIf",null==e.f.acceptAgreement.errors?null:e.f.acceptAgreement.errors.isRefused)}}const ee=function(){return["../login"]};let re=(()=>{class e{constructor(e){this.http=e,this.signupForm=new o.cw({FirstName:new o.NI("",[o.kI.required]),LastName:new o.NI("",[o.kI.required]),PhoneNumber:new o.NI("",[o.kI.required,o.kI.minLength(10)]),WorkSpaceName:new o.NI("",[o.kI.required],this.validateNameViaServer.bind(this)),Email:new o.NI("",[o.kI.required,o.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],this.validateEmailViaServer.bind(this)),Password:new o.NI("",[o.kI.required,o.kI.minLength(8),o.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),confirmPassword:new o.NI("",[o.kI.required,this.matchPassword.bind(this)]),myRecaptcha:new o.NI(!1,[this.checkforAgreements.bind(this)]),acceptAgreement:new o.NI(!1,this.checkforAgreements.bind(this))}),this.planDetails={id:1,name:"The Starter Plan",description:"The Starter Plan",noOfForms:10,noOfUsers:1,noOfEntries:50,paymentPercentage:0,storageSize:"2 GB",IsActive:1,IsDeleted:0,createdBy:"",modifiedBy:"",CreatedDate:"",price:"0",userId:"",isDefault:1,isRecommended:1,ShowOnHome:1,StorageUnit:"",WorkspaceId:"",concretePlanId:"",ModifiedBy:"",StripePlanId:""}}checkforAgreements({value:e}){return e?null:{isRefused:!0}}validateNameViaServer({value:e}){return this.http.call("checkEmail","POST",{WorkSpaceName:e}).pipe((0,a.b)(1e3),(0,s.U)(e=>e.data?{isExists:!0}:null))}validateEmailViaServer({value:e}){return this.http.call("checkEmail","POST",{Email:e}).pipe((0,a.b)(1e3),(0,s.U)(e=>e.data?{isExists:!0}:null))}matchPassword({value:e}){var r,t;return console.log(null===(r=this.Password)||void 0===r?void 0:r.value,e),(null===(t=this.Password)||void 0===t?void 0:t.value)===e?null:{passwordNotMatched:!0}}ngOnInit(){this.http.call("GetMasterPlanDetailById","POST",{ID:""}).subscribe(e=>{this.planDetails=e,this.planDetails.storageSize=e.storageSize/1048576})}onScriptLoad(){console.log("Google reCAPTCHA loaded and is ready for use!")}onScriptError(){console.log("Something went long when loading the Google reCAPTCHA")}submit(){console.log(this.signupForm),console.log(this.signupForm.value);const e=Object.assign(Object.assign({},JSON.parse(JSON.stringify(this.signupForm.value))),{IsLinkActivated:!1,IsSuperAdmin:!1,PlanId:"TZW3ou4hevmgAh6EEJ9-dw==",planDetails:{concretePlanId:null,createdBy:null,createdDate:"0001-01-01T00:00:00",description:"100% Free Plan",id:"TZW3ou4hevmgAh6EEJ9-dw==",isActive:!1,isDefault:!0,isDeleted:!1,isExpired:!1,isRecommended:!1,modifiedBy:null,modifiedDate:"0001-01-01T00:00:00",name:"The Starter Plan",noOfEntries:50,noOfForms:10,noOfUsers:1,paymentPercentage:null,planType:null,plandetails:null,price:0,returnPlanList:null,returnStatus:!1,showOnHome:!1,storageSize:"2097152",storageUnit:null,stripePlanId:null,type:null,workSpaceId:null}});delete e.confirmPassword,delete e.acceptAgreement,this.http.call("signup","POST",e).subscribe(e=>{console.log(e)})}get FirstName(){return this.signupForm.get("FirstName")}get LastName(){return this.signupForm.get("LastName")}get PhoneNumber(){return this.signupForm.get("PhoneNumber")}get WorkSpaceName(){return this.signupForm.get("WorkSpaceName")}get Email(){return this.signupForm.get("Email")}get Password(){var e;return null===(e=this.signupForm)||void 0===e?void 0:e.get("Password")}get confirmPassword(){var e;return null===(e=this.signupForm)||void 0===e?void 0:e.get("confirmPassword")}get f(){return this.signupForm.controls}}return e.\u0275fac=function(r){return new(r||e)(l.Y36(c.O))},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-register"]],decls:137,vars:21,consts:[[1,"login-area-container","container","d-flex","align-items-center","justify-content-center"],[1,"login-box","row","border","rounded-lg"],[1,"left-column","col-md-4","p-5","border-right","d-flex","justify-content-center","flex-wrap","align-content-center"],[1,"selected-plan-wrapper","shadow-sm","row","rounded","border","text-center"],[1,"plan-name-wrapper","col-md-12","py-5","text-white-50","rounded-top"],[1,"plan-name"],[1,"mb-n2"],[1,"plan-price-wrapper","col-md-12","py-4","border-bottom"],[1,"plan-price"],[1,"plan-period","mt-n2","text-secondary"],[1,"col-md-12","p-2"],[1,"plan-attributes-wrapper","row","px-2","py-4"],[1,"plan-attribute","col-md-12","py-1"],[1,"text-secondary"],[1,"plan-price-button","col-md-12","mt-3"],["type","button",1,"btn","btn-bf","btn-sm"],[1,"right-column","col-md-8"],[1,"right-column-top","row","px-3","pt-3"],[1,"register-heading-wrapper","col-md-12","py-3","text-left"],[1,"register-heading"],[1,"register-description-wrapper","col-md-12","mb-5","mt-n2"],[1,"=register-form","col-md-12","mb-3"],[3,"formGroup"],[1,"register-fields-wrapper","row","mb-3"],[1,"field-wrapper","col-md-6"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"material-icons"],["type","text","formControlName","FirstName","placeholder","First Name",1,"form-control"],[4,"ngIf"],["type","text","formControlName","LastName","placeholder","Last Name",1,"form-control"],["type","email","formControlName","Email","placeholder","Your Email",1,"form-control"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],["type","tel","formControlName","PhoneNumber","placeholder","Your Phone",1,"form-control"],["type","password","formControlName","Password","placeholder","Choose Password",1,"form-control"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control"],[1,"field-wrapper","col-md-12"],["type","text","formControlName","WorkSpaceName","placeholder","Your Organization Name",1,"form-control"],[1,"terms-conditions-wrapper","col-md-12","my-3","text-center"],[1,"custom-control","custom-checkbox"],["type","checkbox","formControlName","acceptAgreement","id","customCheck","name","example1",1,"custom-control-input"],["for","customCheck",1,"custom-control-label"],["href","#"],[1,"signup-recaptcha-wrapper","col-md-12","mb-3","text-center"],["formControlName","myRecaptcha",3,"scriptLoad","scriptError"],[1,"signup-button-wrapper","col-md-12","mb-3","text-center"],["type","button",1,"btn","btn-bf",3,"disabled","click"],[1,"row"],[1,"col-md-12","d-flex","justify-content-center","flex-wrap","align-content-center","py-4","border-top"],[1,"have-account-link-area"],[1,"account-login-link",3,"routerLink"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"div",5),l.TgZ(6,"h4",6),l.TgZ(7,"strong"),l._uU(8),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(9,"div",7),l.TgZ(10,"div",8),l.TgZ(11,"h4"),l.TgZ(12,"strong"),l._uU(13,"US$"),l.qZA(),l._uU(14),l.qZA(),l.qZA(),l.TgZ(15,"div",9),l._uU(16,"amount / month"),l.qZA(),l.qZA(),l.TgZ(17,"div",10),l.TgZ(18,"div",11),l.TgZ(19,"div",12),l.TgZ(20,"span"),l._uU(21),l.qZA(),l.TgZ(22,"span",13),l._uU(23," Users"),l.qZA(),l.qZA(),l.TgZ(24,"div",12),l.TgZ(25,"span"),l._uU(26),l.qZA(),l.TgZ(27,"span",13),l._uU(28," Forms"),l.qZA(),l.qZA(),l.TgZ(29,"div",12),l.TgZ(30,"span"),l._uU(31),l.qZA(),l.TgZ(32,"span",13),l._uU(33," Entries"),l.qZA(),l.qZA(),l.TgZ(34,"div",12),l.TgZ(35,"span"),l._uU(36),l.qZA(),l.TgZ(37,"span",13),l._uU(38," Storage"),l.qZA(),l.qZA(),l.TgZ(39,"div",14),l.TgZ(40,"button",15),l._uU(41,"Change Plan"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(42,"div",16),l.TgZ(43,"div",17),l.TgZ(44,"div",18),l.TgZ(45,"h4",19),l._uU(46,"Start Building Your Forms Now"),l.qZA(),l.qZA(),l.TgZ(47,"div",20),l.TgZ(48,"span"),l._uU(49," Sign up for BlazeForms today to discover how we can help you optimize conversions while saving time and effort with each form you build! "),l.qZA(),l.qZA(),l.TgZ(50,"div",21),l.TgZ(51,"form",22),l.TgZ(52,"div",23),l.TgZ(53,"div",24),l.TgZ(54,"div",25),l.TgZ(55,"div",26),l.TgZ(56,"span",27),l.TgZ(57,"i",28),l._uU(58,"person"),l.qZA(),l.qZA(),l.qZA(),l._UZ(59,"input",29),l.qZA(),l.YNc(60,S,2,1,"ng-container",30),l.qZA(),l.TgZ(61,"div",24),l.TgZ(62,"div",25),l.TgZ(63,"div",26),l.TgZ(64,"span",27),l.TgZ(65,"i",28),l._uU(66,"person"),l.qZA(),l.qZA(),l.qZA(),l._UZ(67,"input",31),l.qZA(),l.YNc(68,F,2,1,"ng-container",30),l.qZA(),l.qZA(),l.TgZ(69,"div",23),l.TgZ(70,"div",24),l.TgZ(71,"div",25),l.TgZ(72,"div",26),l.TgZ(73,"span",27),l.TgZ(74,"i",28),l._uU(75,"email"),l.qZA(),l.qZA(),l.qZA(),l._UZ(76,"input",32),l.qZA(),l.YNc(77,O,2,1,"ng-container",30),l.YNc(78,Q,2,0,"div",33),l.qZA(),l.TgZ(79,"div",24),l.TgZ(80,"div",25),l.TgZ(81,"div",26),l.TgZ(82,"span",27),l.TgZ(83,"i",28),l._uU(84,"smartphone"),l.qZA(),l.qZA(),l.qZA(),l._UZ(85,"input",34),l.qZA(),l.YNc(86,D,3,2,"ng-container",30),l.qZA(),l.qZA(),l.TgZ(87,"div",23),l.TgZ(88,"div",24),l.TgZ(89,"div",25),l.TgZ(90,"div",26),l.TgZ(91,"span",27),l.TgZ(92,"i",28),l._uU(93,"password"),l.qZA(),l.qZA(),l.qZA(),l._UZ(94,"input",35),l.qZA(),l.YNc(95,R,3,2,"ng-container",30),l.qZA(),l.TgZ(96,"div",24),l.TgZ(97,"div",25),l.TgZ(98,"div",26),l.TgZ(99,"span",27),l.TgZ(100,"i",28),l._uU(101,"password"),l.qZA(),l.qZA(),l.qZA(),l._UZ(102,"input",36),l.qZA(),l.YNc(103,W,3,2,"ng-container",30),l.qZA(),l.qZA(),l.TgZ(104,"div",23),l.TgZ(105,"div",37),l.TgZ(106,"div",25),l.TgZ(107,"div",26),l.TgZ(108,"span",27),l.TgZ(109,"i",28),l._uU(110,"apartment"),l.qZA(),l.qZA(),l.qZA(),l._UZ(111,"input",38),l.qZA(),l.YNc(112,V,2,1,"ng-container",30),l.YNc(113,$,2,0,"div",33),l.qZA(),l.qZA(),l.TgZ(114,"div",23),l.TgZ(115,"div",39),l.TgZ(116,"div",40),l._UZ(117,"input",41),l.TgZ(118,"label",42),l._uU(119,"I have read and accepted "),l.TgZ(120,"a",43),l._uU(121,"Terms & Conditions"),l.qZA(),l._uU(122),l.qZA(),l.qZA(),l.YNc(123,X,2,1,"ng-container",30),l.qZA(),l.qZA(),l.TgZ(124,"div",23),l.TgZ(125,"div",44),l.TgZ(126,"recaptcha",45),l.NdJ("scriptLoad",function(){return r.onScriptLoad()})("scriptError",function(){return r.onScriptError()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(127,"div",23),l.TgZ(128,"div",46),l.TgZ(129,"button",47),l.NdJ("click",function(){return r.submit()}),l._uU(130,"Sign Up Now "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(131,"div",48),l.TgZ(132,"div",49),l.TgZ(133,"span",50),l._uU(134," Already have an account? "),l.TgZ(135,"a",51),l._uU(136,"Login Now"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(8),l.Oqu(r.planDetails.name),l.xp6(6),l.hij(" ",r.planDetails.price,""),l.xp6(7),l.Oqu(r.planDetails.noOfUsers),l.xp6(5),l.Oqu(r.planDetails.noOfForms),l.xp6(5),l.Oqu(r.planDetails.noOfEntries),l.xp6(5),l.hij("",r.planDetails.storageSize," GB"),l.xp6(15),l.Q6J("formGroup",r.signupForm),l.xp6(9),l.Q6J("ngIf",r.f.FirstName.invalid&&(r.f.FirstName.dirty||r.f.FirstName.touched)),l.xp6(8),l.Q6J("ngIf",r.f.LastName.invalid&&(r.f.LastName.dirty||r.f.LastName.touched)),l.xp6(9),l.Q6J("ngIf",r.f.Email.invalid&&(r.f.Email.dirty||r.f.Email.touched)),l.xp6(1),l.Q6J("ngIf",null==r.f.Email.errors?null:r.f.Email.errors.isExists),l.xp6(8),l.Q6J("ngIf",r.f.PhoneNumber.invalid&&(r.f.PhoneNumber.dirty||r.f.PhoneNumber.touched)),l.xp6(9),l.Q6J("ngIf",r.f.Password.invalid&&(r.f.Password.dirty||r.f.Password.touched)),l.xp6(8),l.Q6J("ngIf",r.f.confirmPassword.invalid&&(r.f.confirmPassword.dirty||r.f.confirmPassword.touched)),l.xp6(9),l.Q6J("ngIf",r.f.WorkSpaceName.invalid&&(r.f.WorkSpaceName.dirty||r.f.WorkSpaceName.touched)),l.xp6(1),l.Q6J("ngIf",null==r.f.WorkSpaceName.errors?null:r.f.WorkSpaceName.errors.isExists),l.xp6(9),l.hij(" ",null==r.f.acceptAgreement.errors?null:r.f.acceptAgreement.errors.isRefused,""),l.xp6(1),l.Q6J("ngIf",r.f.acceptAgreement.invalid&&(r.f.acceptAgreement.dirty||r.f.acceptAgreement.touched)),l.xp6(6),l.Q6J("disabled",r.signupForm.invalid),l.xp6(6),l.Q6J("routerLink",l.DdM(20,ee)))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,n.O5,o.Wl,U,i.yS],styles:[""]}),e})(),te=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-header"]],decls:5,vars:0,consts:[[1,"header-container","container-fluid"],[1,"header-wrapper","row","px-3","border-bottom"],[1,"logo-wrapper","col","py-3","d-flex","align-items-center","justify-content-between"],[1,"colored-logo"],["src","../../../assets/images/logo.png","height","41"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l._UZ(4,"img",4),l.qZA(),l.qZA(),l.qZA(),l.qZA())},styles:[""]}),e})(),ne=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-footer"]],decls:12,vars:0,consts:[[1,"login-footer-container","container","d-flex","align-items-center","justify-content-center","fixed-bottom"],[1,"login-footer-wrapper","row","p-3"],[1,"monochrome-logo-wrapper","mr-2"],["width","100%","height","100%","viewBox","0 0 152 185","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",0,"xml","space","preserve",0,"xmlns","serif","http://www.serif.com/",1,"monochrome-logo",2,"fill-rule","evenodd","clip-rule","evenodd","stroke-linejoin","round","stroke-miterlimit","2"],["transform","matrix(0.429851,0,0,0.429851,-95.0387,-38.8813)"],["transform","matrix(8.79,0,0,8.79,-953.066,-846.569)"],["d","M146.699,151.251C146.666,151.275 146.631,151.296 146.596,151.315L140.138,155.27C140.112,155.286 140.084,155.303 140.057,155.316L140.036,155.327C139.884,155.399 139.712,155.431 139.534,155.409C139.405,155.395 139.287,155.354 139.183,155.293L139.169,155.285L139.164,155.281L139.126,155.257L139.113,155.249L139.108,155.245L139.096,155.235L139.078,155.223L139.072,155.218L139.061,155.208L139.044,155.194L139.038,155.188L139.028,155.179L139.021,155.174L139.005,155.159L138.995,155.148L138.989,155.142L138.98,155.134L138.951,155.101L138.943,155.091L138.937,155.085L138.928,155.073L138.922,155.066L138.914,155.056L138.91,155.05C138.878,155.009 138.851,154.964 138.827,154.917L138.818,154.9L138.817,154.896C138.745,154.745 138.712,154.571 138.734,154.394L139.631,146.847C139.634,146.811 139.638,146.773 139.644,146.739L140.997,135.363C141.014,135.222 141.063,135.092 141.134,134.979L141.133,134.978L142.637,132.632L144.365,129.935C144.637,129.508 145.204,129.383 145.63,129.655C146.057,129.928 146.181,130.495 145.909,130.921L144.181,133.618C143.903,134.052 143.827,134.559 143.929,135.028L143.931,135.027C144.033,135.496 144.313,135.926 144.745,136.204C145.178,136.48 145.686,136.556 146.154,136.456L146.154,136.454C146.622,136.351 147.05,136.072 147.326,135.644L147.328,135.642L147.33,135.639L149.058,132.941C149.331,132.515 149.897,132.39 150.324,132.663C150.75,132.935 150.875,133.502 150.601,133.928L148.9,136.583L148.899,136.586L148.897,136.588C148.883,136.614 148.868,136.638 148.851,136.662C148.592,137.086 148.523,137.58 148.622,138.034L148.624,138.034C148.724,138.49 148.992,138.91 149.404,139.188C149.428,139.202 149.451,139.217 149.474,139.232C149.899,139.492 150.392,139.56 150.847,139.462L150.846,139.46C151.309,139.358 151.733,139.085 152.01,138.664L152.021,138.649L152.022,138.646L153.751,135.947C154.023,135.521 154.589,135.397 155.016,135.669C155.442,135.941 155.567,136.508 155.294,136.934L153.593,139.59L153.592,139.592L153.59,139.595C153.576,139.62 153.56,139.645 153.544,139.668C153.285,140.095 153.215,140.588 153.315,141.044C153.415,141.498 153.683,141.917 154.096,142.194C154.122,142.208 154.144,142.224 154.167,142.239C154.592,142.499 155.084,142.566 155.54,142.467L155.588,142.458C156.037,142.348 156.447,142.072 156.715,141.652L156.715,141.653L158.445,138.954C158.716,138.528 159.283,138.403 159.709,138.676C160.135,138.948 160.26,139.515 159.989,139.941L158.266,142.629L158.26,142.639L156.756,144.986L156.754,144.985C156.682,145.099 156.583,145.198 156.46,145.272L146.699,151.251ZM154.552,144.296C154.066,144.22 153.586,144.043 153.148,143.763L153.144,143.761C152.288,143.211 151.732,142.359 151.529,141.43C151.511,141.35 151.496,141.269 151.484,141.188C151.403,141.21 151.323,141.231 151.241,141.249L151.241,141.247L151.238,141.248C150.312,141.45 149.309,141.302 148.454,140.756L148.451,140.753C147.593,140.204 147.038,139.354 146.834,138.428L146.837,138.427L146.836,138.424C146.819,138.343 146.803,138.262 146.791,138.18C146.71,138.204 146.629,138.224 146.547,138.242L146.547,138.24L146.544,138.241C145.618,138.443 144.614,138.295 143.759,137.747C143.317,137.464 142.956,137.103 142.682,136.691L141.521,146.438L146.181,149.424L154.552,144.296Z",2,"fill","rgb(108,117,125)"],["d","M156.693,112.159C160.838,108.452 163.61,112.814 166.131,108.134C161.973,110.229 158.391,105.077 156.693,112.159ZM160.574,135.919L147.338,127.44C147.338,127.44 146.828,122.337 148.677,119.181C150.527,116.023 152.395,115.614 152.395,115.614C152.395,115.614 151.437,117.042 151.367,118.169C151.295,119.295 151.644,120.04 151.644,120.04C151.644,120.04 152.5,115.247 158.257,113.987C163.25,112.893 170.175,113.301 169.965,106.601C173.638,114.49 171.597,126.759 164.808,130.204C166.163,129.998 168.181,129.844 168.991,127.593C168.517,131.784 165.42,135.667 160.574,135.919Z",2,"fill","rgb(108,117,125)"],["d","M397.524,135.646C300.086,135.646 221.097,214.635 221.097,312.073C221.097,409.446 300.151,488.5 397.524,488.5C494.896,488.5 573.951,409.446 573.951,312.073C573.951,291.221 570.254,270.534 563.032,250.972L550.284,255.678C556.95,273.733 560.361,292.827 560.361,312.073C560.361,401.945 487.396,474.911 397.524,474.911C307.651,474.911 234.686,401.945 234.686,312.073C234.686,222.14 307.591,149.235 397.524,149.235L397.524,135.646Z",2,"fill","rgb(108,117,125)"],[1,"footer-copyright-wrapper"],[1,"footer-copyright-text","text-secondary"]],template:function(e,r){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.O4$(),l.TgZ(3,"svg",3),l.TgZ(4,"g",4),l.TgZ(5,"g",5),l._UZ(6,"path",6),l._UZ(7,"path",7),l.qZA(),l._UZ(8,"path",8),l.qZA(),l.qZA(),l.qZA(),l.kcU(),l.TgZ(9,"div",9),l.TgZ(10,"span",10),l._uU(11," Blazeforms \xa9 2021 Metagauss, Inc. "),l.qZA(),l.qZA(),l.qZA(),l.qZA())},styles:[""]}),e})();const ie=[{path:"",component:(()=>{class e{constructor(){document.body.className="page-background"}ngOnInit(){}ngOnDestroy(){document.body.className=""}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-user"]],decls:3,vars:0,template:function(e,r){1&e&&(l._UZ(0,"app-header"),l._UZ(1,"router-outlet"),l._UZ(2,"app-footer"))},directives:[te,i.lC,ne],styles:["body[_ngcontent-%COMP%]{background-color:#f8f9fa!important}"]}),e})(),children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"register",component:re},{path:"login",component:N},{path:"forgot-password",component:f}]}];let oe=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.Bz.forChild(ie)],i.Bz]}),e})(),ae=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[n.ez,o.u5,oe,o.UX,I.forRoot({siteKey:"6LeKjH4bAAAAAHs1enkoqyola0dT5VQTxTQftCi2"})]]}),e})()}}]);