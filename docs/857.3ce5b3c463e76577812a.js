(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[857],{2857:(e,t,i)=>{"use strict";i.r(t),i.d(t,{MyProfileModule:()=>H});var r=i(8583),a=i(3679),s=i(2212),o=i(7310),n=i(7716),l=i(834),d=i(2595),c=i(9808),u=i(9075),g=i(8634),m=i(3065);function p(e,t){1&e&&n._UZ(0,"img",23)}function f(e,t){if(1&e&&n._UZ(0,"img",24),2&e){const e=n.oxw();n.Q6J("src",e.imageSrc,n.LSH)}}function h(e,t){1&e&&n._UZ(0,"span",25)}function Z(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",26),n._uU(1,"General Details"),n.qZA(),n.TgZ(2,"span",27),n.NdJ("click",function(){return n.CHM(e),n.oxw(),n.MAs(21).toggle("static-2")}),n._uU(3,"Edit"),n.qZA()}2&e&&n.Q6J("disabled",!0)}function b(e,t){if(1&e&&(n.TgZ(0,"div",28),n.TgZ(1,"div",29),n.TgZ(2,"label"),n._uU(3,"First Name"),n.qZA(),n.qZA(),n.TgZ(4,"div",29),n.TgZ(5,"p"),n._uU(6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"div",28),n.TgZ(8,"div",29),n.TgZ(9,"label"),n._uU(10,"Last Name"),n.qZA(),n.qZA(),n.TgZ(11,"div",29),n.TgZ(12,"p"),n._uU(13),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",28),n.TgZ(15,"div",29),n.TgZ(16,"label"),n._uU(17,"Email"),n.qZA(),n.qZA(),n.TgZ(18,"div",29),n.TgZ(19,"p"),n._uU(20),n.qZA(),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.xp6(6),n.Oqu(e.userData.FirstName),n.xp6(7),n.Oqu(e.userData.LastName),n.xp6(7),n.Oqu(e.userData.Email)}}function v(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",26),n._uU(1,"Edit Details"),n.qZA(),n.TgZ(2,"span",27),n.NdJ("click",function(){return n.CHM(e),n.oxw(),n.MAs(21).toggle("static-1")}),n._uU(3,"Close"),n.qZA()}2&e&&n.Q6J("disabled",!0)}function w(e,t){1&e&&(n.TgZ(0,"div",42),n._uU(1,"First Name is required "),n.qZA())}function A(e,t){if(1&e&&(n.ynx(0),n.YNc(1,w,2,0,"div",41),n.BQk()),2&e){const e=n.oxw(2);n.xp6(1),n.Q6J("ngIf",(null==e.f.FirstName.errors?null:e.f.FirstName.errors.required)||(null==e.f.FirstName.errors?null:e.f.FirstName.errors.pattern))}}function q(e,t){1&e&&(n.TgZ(0,"div",42),n._uU(1,"Last Name is required "),n.qZA())}function P(e,t){if(1&e&&(n.ynx(0),n.YNc(1,q,2,0,"div",41),n.BQk()),2&e){const e=n.oxw(2);n.xp6(1),n.Q6J("ngIf",(null==e.f.LastName.errors?null:e.f.LastName.errors.required)||(null==e.f.LastName.errors?null:e.f.LastName.errors.pattern))}}function T(e,t){1&e&&n._UZ(0,"span",25)}function I(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"form",30),n.TgZ(1,"div",31),n.TgZ(2,"div",29),n.TgZ(3,"label",32),n._uU(4,"First name"),n.qZA(),n._UZ(5,"input",33),n.YNc(6,A,2,1,"ng-container",34),n.qZA(),n.TgZ(7,"div",29),n.TgZ(8,"label",35),n._uU(9,"Last name"),n.qZA(),n._UZ(10,"input",36),n.YNc(11,P,2,1,"ng-container",34),n.qZA(),n.qZA(),n.TgZ(12,"div",37),n.TgZ(13,"label",38),n._uU(14,"Email"),n.qZA(),n._UZ(15,"input",39),n.qZA(),n.TgZ(16,"button",40),n.NdJ("click",function(){return n.CHM(e),n.oxw().updateProfile()}),n._uU(17," Save changes "),n.YNc(18,T,1,0,"span",13),n.qZA(),n.qZA()}if(2&e){const e=n.oxw();n.Q6J("formGroup",e.updateProfileForm),n.xp6(6),n.Q6J("ngIf",e.f.FirstName.invalid&&(e.f.FirstName.dirty||e.f.FirstName.touched)),n.xp6(5),n.Q6J("ngIf",e.f.LastName.invalid&&(e.f.LastName.dirty||e.f.LastName.touched)),n.xp6(5),n.Q6J("disabled",e.updateProfileForm.invalid),n.xp6(2),n.Q6J("ngIf",e.isFormSubmitted)}}let S=(()=>{class e{constructor(e,t,i,r,s){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.store=s,this.updateProfileForm=new a.cw({FirstName:new a.NI("",[a.kI.required]),LastName:new a.NI("",[a.kI.required]),Email:new a.NI("",[a.kI.required,a.kI.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")])}),this.acivePanel="static-1",this.isFormSubmitted=!1,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`,this.updateProfileData()}ngOnInit(){}updateProfileData(){this.updateProfileForm.patchValue({FirstName:this.userData.FirstName,LastName:this.userData.LastName,Email:this.userData.Email})}beforeChange(e){this.acivePanel="static-1"==e.panelId?"static-2":"static-1"}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.store.dispatch((0,c.vG)({props:{mappingKey:"uploadProfileImage",payload:e.profileImage}})),this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}updateProfile(){this.isFormSubmitted=!0;let e={Email:this.userData.Email,FirstName:this.updateProfileForm.value.FirstName,LastName:this.updateProfileForm.value.LastName,Id:this.userData.Id};this.http.call("updateUserProfile","POST",e).subscribe(t=>{this.isFormSubmitted=!1,this.store.dispatch((0,c.nS)({props:{mappingKey:"updateUserProfile",payload:e}})),this.toastService.showSuccess("Profile updated successfully!")})}get FirstName(){return this.updateProfileForm.get("FirstName")}get LastName(){return this.updateProfileForm.get("LastName")}get Email(){return this.updateProfileForm.get("Email")}get f(){return this.updateProfileForm.controls}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.j),n.Y36(d.O),n.Y36(u.H7),n.Y36(g.k),n.Y36(m.yh))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-my-profile-general"]],decls:28,vars:4,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt"," ",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt"," ","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","general-profile","aria-labelledby","general-profile-tab",1,"col-xl-8","px-4","active"],["id","accordion",1,"general-profile"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"card","mb-4","collapse","show"],["activeIds","static-1",3,"panelChange"],["acc","ngbAccordion"],["id","static-1"],["ngbPanelTitle","","class","card-header"],["ngbPanelContent","","class","card-body"],["id","static-2"],["src","assets/images/profile.jpg","alt"," ",1,"img-account-profile","rounded-circle","mb-2"],["alt"," ",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"],[3,"disabled"],[1,"float-right",3,"click"],[1,"row"],[1,"col-md-6"],["autocomplete","off",3,"formGroup"],[1,"row","gx-3","mb-3"],["for","inputFirstName",1,"mb-1"],["id","inputFirstName","type","text","placeholder","Enter your first name","formControlName","FirstName",1,"form-control"],[4,"ngIf"],["for","inputLastName",1,"small","mb-1"],["id","inputLastName","type","tex","placeholder","Enter your last name","formControlName","LastName",1,"form-control"],[1,"mb-3"],["for","inputUseremail",1,"small","mb-1"],["type","email","readonly","","placeholder","Enter your Email","formControlName","Email",1,"form-control"],["type","button",1,"btn","btn-primary","btn-bf",3,"disabled","click"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n._uU(4,"Profile Picture"),n.qZA(),n.TgZ(5,"div",4),n.YNc(6,p,1,0,"img",5),n.YNc(7,f,1,1,"img",6),n.TgZ(8,"div",7),n._uU(9,"JPG or PNG no larger than 5 MB"),n.qZA(),n.TgZ(10,"span",8),n._UZ(11,"label",9),n.TgZ(12,"input",10,11),n.NdJ("change",function(e){return t.fileChangeEvent(e)}),n.qZA(),n.TgZ(14,"button",12),n.NdJ("click",function(){return n.CHM(e),n.MAs(13).click()}),n._uU(15," Upload new image "),n.YNc(16,h,1,0,"span",13),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"div",14),n.TgZ(18,"div",15),n.TgZ(19,"div",16),n.TgZ(20,"ngb-accordion",17,18),n.NdJ("panelChange",function(e){return t.beforeChange(e)}),n.TgZ(22,"ngb-panel",19),n.YNc(23,Z,4,1,"ng-template",20),n.YNc(24,b,21,3,"ng-template",21),n.qZA(),n.TgZ(25,"ngb-panel",22),n.YNc(26,v,4,1,"ng-template",20),n.YNc(27,I,19,5,"ng-template",21),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&e&&(n.xp6(6),n.Q6J("ngIf",!t.imageSrc),n.xp6(1),n.Q6J("ngIf",t.imageSrc),n.xp6(5),n.Q6J("hidden",!0),n.xp6(4),n.Q6J("ngIf",t.isImageSubmitted))},directives:[r.O5,s.gY,s.Gk,s.Cu,s.gW,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:[""]}),e})();function N(e,t){1&e&&n._UZ(0,"img",30)}function y(e,t){if(1&e&&n._UZ(0,"img",31),2&e){const e=n.oxw();n.Q6J("src",e.imageSrc,n.LSH)}}function U(e,t){1&e&&n._UZ(0,"span",32)}function x(e,t){1&e&&(n.TgZ(0,"div",33),n._uU(1,"Password is required "),n.qZA())}function _(e,t){1&e&&(n.TgZ(0,"div",33),n._uU(1,"Password must contain at least one [A-Z], [a-z], [0-1] and Special character"),n.qZA())}function J(e,t){if(1&e&&(n.ynx(0),n.YNc(1,x,2,0,"div",28),n.YNc(2,_,2,0,"div",28),n.BQk()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.required),n.xp6(1),n.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.pattern)}}function F(e,t){1&e&&(n.TgZ(0,"div",33),n._uU(1,"Confirm Password is required "),n.qZA())}function E(e,t){if(1&e&&(n.ynx(0),n.YNc(1,F,2,0,"div",28),n.BQk()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.required)||(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.pattern))}}function k(e,t){1&e&&(n.TgZ(0,"div",33),n._uU(1," Confirm Password is not matched "),n.qZA())}function Y(e,t){1&e&&n._UZ(0,"span",32)}let Q=(()=>{class e{constructor(e,t,i,r){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.updatePasswordForm=new a.cw({OldPassword:new a.NI("",[a.kI.required]),Password:new a.NI("",[a.kI.required,a.kI.minLength(8),a.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),confirmPassword:new a.NI("",[a.kI.required])}),this.isFormSubmitted=!1,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`}ngOnInit(){}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}matchPass(){var e,t,i,r;return!(!(null===(e=this.confirmPassword)||void 0===e?void 0:e.dirty)&&!(null===(t=this.confirmPassword)||void 0===t?void 0:t.touched)||(null===(i=this.confirmPassword)||void 0===i?void 0:i.value)===(null===(r=this.Password)||void 0===r?void 0:r.value))}matchPassword({value:e}){var t;return(null===(t=this.Password)||void 0===t?void 0:t.value)===e?{passwordNotMatched:!1}:{passwordNotMatched:!0}}updatePassword(){this.isFormSubmitted=!0,this.http.call("checkUserByPassword","POST",{Email:this.userData.Email,Password:this.updatePasswordForm.value.OldPassword}).subscribe(e=>{0==e?(this.isFormSubmitted=!1,this.toastService.showError("Old password does not match!")):this.http.call("changePassword","POST",{Email:this.userData.Email,Password:this.updatePasswordForm.value.Password}).subscribe(e=>{this.isFormSubmitted=!1,this.toastService.showSuccess("Password changed successfully!"),this.updatePasswordForm.reset()})})}get OldPassword(){return this.updatePasswordForm.get("OldPassword")}get Password(){return this.updatePasswordForm.get("Password")}get confirmPassword(){return this.updatePasswordForm.get("confirmPassword")}get f(){return this.updatePasswordForm.controls}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.j),n.Y36(d.O),n.Y36(u.H7),n.Y36(g.k))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-my-profile-change-password"]],decls:43,vars:10,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt","",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt","","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","change-password","role","tabpanel","aria-labelledby","change-password-tab",1,"col-xl-8","px-4"],[1,"card","mb-4"],[1,"card-body"],[3,"formGroup"],[1,"row","gx-3","mb-3"],[1,"col-md-12"],["for","inputFirstName",1,"mb-1"],["type","password","formControlName","OldPassword","placeholder","Old Password",1,"form-control"],[1,"col-md-6"],["for","inputLastName",1,"small","mb-1"],["type","password","formControlName","Password","placeholder","New Password",1,"form-control"],[4,"ngIf"],["for","inputUseremail",1,"small","mb-1"],["type","password","formControlName","confirmPassword","placeholder","Confrm Password",1,"form-control"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-bf",3,"disabled","click"],["src","assets/images/profile.jpg","alt","",1,"img-account-profile","rounded-circle","mb-2"],["alt","",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n._uU(4,"Profile Picture"),n.qZA(),n.TgZ(5,"div",4),n.YNc(6,N,1,0,"img",5),n.YNc(7,y,1,1,"img",6),n.TgZ(8,"div",7),n._uU(9,"JPG or PNG no larger than 5 MB"),n.qZA(),n.TgZ(10,"span",8),n._UZ(11,"label",9),n.TgZ(12,"input",10,11),n.NdJ("change",function(e){return t.fileChangeEvent(e)}),n.qZA(),n.TgZ(14,"button",12),n.NdJ("click",function(){return n.CHM(e),n.MAs(13).click()}),n._uU(15," Upload new image "),n.YNc(16,U,1,0,"span",13),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"div",14),n.TgZ(18,"div",15),n.TgZ(19,"div",3),n._uU(20,"Change Password"),n.qZA(),n.TgZ(21,"div",16),n.TgZ(22,"form",17),n.TgZ(23,"div",18),n.TgZ(24,"div",19),n.TgZ(25,"label",20),n._uU(26,"Old Password"),n.qZA(),n._UZ(27,"input",21),n.qZA(),n.qZA(),n.TgZ(28,"div",18),n.TgZ(29,"div",22),n.TgZ(30,"label",23),n._uU(31,"New Password"),n.qZA(),n._UZ(32,"input",24),n.YNc(33,J,3,2,"ng-container",25),n.qZA(),n.TgZ(34,"div",22),n.TgZ(35,"label",26),n._uU(36,"Confrm Password"),n.qZA(),n._UZ(37,"input",27),n.YNc(38,E,2,1,"ng-container",25),n.YNc(39,k,2,0,"div",28),n.qZA(),n.qZA(),n.TgZ(40,"button",29),n.NdJ("click",function(){return t.updatePassword()}),n._uU(41," Save changes "),n.YNc(42,Y,1,0,"span",13),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&e&&(n.xp6(6),n.Q6J("ngIf",!t.imageSrc),n.xp6(1),n.Q6J("ngIf",t.imageSrc),n.xp6(5),n.Q6J("hidden",!0),n.xp6(4),n.Q6J("ngIf",t.isImageSubmitted),n.xp6(6),n.Q6J("formGroup",t.updatePasswordForm),n.xp6(11),n.Q6J("ngIf",t.f.Password.invalid&&(t.f.Password.dirty||t.f.Password.touched)),n.xp6(5),n.Q6J("ngIf",t.f.confirmPassword.invalid&&(t.f.confirmPassword.dirty||t.f.confirmPassword.touched)),n.xp6(1),n.Q6J("ngIf",(null==t.f.confirmPassword.errors?null:t.f.confirmPassword.errors.passwordNotMatched)||t.matchPass()),n.xp6(1),n.Q6J("disabled",t.updatePasswordForm.invalid||t.matchPass()),n.xp6(2),n.Q6J("ngIf",t.isFormSubmitted))},directives:[r.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:[""]}),e})();function O(e,t){1&e&&n._UZ(0,"img",28)}function C(e,t){if(1&e&&n._UZ(0,"img",29),2&e){const e=n.oxw();n.Q6J("src",e.imageSrc,n.LSH)}}function L(e,t){1&e&&n._UZ(0,"span",30)}let G=(()=>{class e{constructor(e,t,i,r){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`}ngOnInit(){}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.j),n.Y36(d.O),n.Y36(u.H7),n.Y36(g.k))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-my-profile-fingerprint"]],decls:60,vars:4,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt"," ",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt"," ","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","fingerprint-authentication","role","tabpanel","aria-labelledby","fingerprint-authentication-tab",1,"col-xl-8","px-4"],[1,"card","mb-4"],[1,"card-body"],[1,"list-group","border-0"],[1,"list-group-item"],[1,"li-numbers"],[1,"li-text","pl-3"],["href","assets/MSO Device Driver.rar "],["target","_blank ","href","http://localhost:4200/#/biometric "],[1,"text-center","my-3"],[1,"material-icons",2,"font-size","58px"],[1,"fingure-remover-bt","mt-3"],["type","button ",1,"btn","btn-primary","btn-bf"],["href","http://localhost:4200/#/biometric ",1,""],["src","assets/images/profile.jpg","alt"," ",1,"img-account-profile","rounded-circle","mb-2"],["alt"," ",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"]],template:function(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n._uU(4,"Profile Picture"),n.qZA(),n.TgZ(5,"div",4),n.YNc(6,O,1,0,"img",5),n.YNc(7,C,1,1,"img",6),n.TgZ(8,"div",7),n._uU(9,"JPG or PNG no larger than 5 MB"),n.qZA(),n.TgZ(10,"span",8),n._UZ(11,"label",9),n.TgZ(12,"input",10,11),n.NdJ("change",function(e){return t.fileChangeEvent(e)}),n.qZA(),n.TgZ(14,"button",12),n.NdJ("click",function(){return n.CHM(e),n.MAs(13).click()}),n._uU(15," Upload new image "),n.YNc(16,L,1,0,"span",13),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(17,"div",14),n.TgZ(18,"div",15),n.TgZ(19,"div",3),n._uU(20,"Step 1"),n.qZA(),n.TgZ(21,"div",16),n.TgZ(22,"ul",17),n.TgZ(23,"li",18),n.TgZ(24,"span",19),n._uU(25,"1"),n.qZA(),n.TgZ(26,"span",20),n._uU(27,"Download the fingerprint scanner drivers from the link "),n.TgZ(28,"a",21),n._uU(29,"download drivers."),n.qZA(),n.qZA(),n.qZA(),n.TgZ(30,"li",18),n.TgZ(31,"span",19),n._uU(32,"2"),n.qZA(),n.TgZ(33,"span",20),n._uU(34,"Ensure the installed service is running following "),n.TgZ(35,"a",22),n._uU(36,"steps."),n.qZA(),n.qZA(),n.qZA(),n.TgZ(37,"li",18),n.TgZ(38,"span",19),n._uU(39,"3"),n.qZA(),n.TgZ(40,"span",20),n._uU(41,"Connect "),n.TgZ(42,"b"),n._uU(43,"Morpho 1310"),n.qZA(),n._uU(44," device with machine and move to step 2."),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(45,"div",15),n.TgZ(46,"div",3),n._uU(47,"Step 2"),n.qZA(),n.TgZ(48,"div",16),n.TgZ(49,"p"),n._uU(50,"In order to login and form submission to work using fingerprint impression, you need to first save your impression with Blazeform. Please click on scan button below and verify your fingerprint twice. It will save your impression and you are good to login and authenticate all forms using Morpho scanner only."),n.qZA(),n.TgZ(51,"div",23),n.TgZ(52,"span",24),n._uU(53,"fingerprint"),n.qZA(),n.TgZ(54,"div",25),n.TgZ(55,"button",26),n._uU(56,"Remove Fingerprint "),n.qZA(),n.qZA(),n.TgZ(57,"div"),n.TgZ(58,"a",27),n._uU(59,"Having trouble with the scanner?"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&e&&(n.xp6(6),n.Q6J("ngIf",!t.imageSrc),n.xp6(1),n.Q6J("ngIf",t.imageSrc),n.xp6(5),n.Q6J("hidden",!0),n.xp6(4),n.Q6J("ngIf",t.isImageSubmitted))},directives:[r.O5],styles:[""]}),e})();function B(e,t){1&e&&(n.ynx(0),n._UZ(1,"app-my-profile-general"),n.BQk())}function D(e,t){1&e&&n._UZ(0,"app-my-profile-change-password")}function z(e,t){1&e&&n._UZ(0,"app-my-profile-fingerprint")}const M=[{path:"",component:(()=>{class e{constructor(e,t,i){this.dataSharingService=e,this.http=t,this.modalService=i,this.userId=this.dataSharingService.GetUserId(),console.log(this.userId)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.j),n.Y36(d.O),n.Y36(s.FF))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-my-profile"]],decls:20,vars:4,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"container-xl"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h2"),n._uU(3,"Profile"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(4,"div",2),n.TgZ(5,"ul",3,4),n.TgZ(7,"li",5),n.TgZ(8,"a",6),n._uU(9,"Profile"),n.qZA(),n.YNc(10,B,2,0,"ng-template",7),n.qZA(),n.TgZ(11,"li",5),n.TgZ(12,"a",6),n._uU(13,"Change Password"),n.qZA(),n.YNc(14,D,1,0,"ng-template",7),n.qZA(),n.TgZ(15,"li",5),n.TgZ(16,"a",6),n._uU(17,"Fingerprint Authentication"),n.qZA(),n.YNc(18,z,1,0,"ng-template",7),n.qZA(),n.qZA(),n._UZ(19,"div",8),n.qZA()),2&e){const e=n.MAs(6);n.xp6(7),n.Q6J("ngbNavItem",1),n.xp6(4),n.Q6J("ngbNavItem",2),n.xp6(4),n.Q6J("ngbNavItem",3),n.xp6(4),n.Q6J("ngbNavOutlet",e)}},directives:[s.Pz,s.nv,s.Vx,s.uN,s.tO,S,Q,G],styles:[""]}),e})()}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.Bz.forChild(M)],o.Bz]}),e})(),H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[r.ez,j,a.u5,a.UX,s.IJ]]}),e})()}}]);