(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[857],{2857:(e,t,i)=>{"use strict";i.r(t),i.d(t,{MyProfileModule:()=>M});var r=i(8583),a=i(3679),s=i(2212),n=i(7310),o=i(7716),l=i(834),c=i(2595),d=i(9075),u=i(8634);function g(e,t){1&e&&o._UZ(0,"img",23)}function m(e,t){if(1&e&&o._UZ(0,"img",24),2&e){const e=o.oxw();o.Q6J("src",e.imageSrc,o.LSH)}}function p(e,t){1&e&&o._UZ(0,"span",25)}function f(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"button",26),o._uU(1,"General Details"),o.qZA(),o.TgZ(2,"span",27),o.NdJ("click",function(){return o.CHM(e),o.oxw(),o.MAs(21).toggle("static-2")}),o._uU(3,"Edit"),o.qZA()}2&e&&o.Q6J("disabled",!0)}function h(e,t){if(1&e&&(o.TgZ(0,"div",28),o.TgZ(1,"div",29),o.TgZ(2,"label"),o._uU(3,"First Name"),o.qZA(),o.qZA(),o.TgZ(4,"div",29),o.TgZ(5,"p"),o._uU(6),o.qZA(),o.qZA(),o.qZA(),o.TgZ(7,"div",28),o.TgZ(8,"div",29),o.TgZ(9,"label"),o._uU(10,"Last Name"),o.qZA(),o.qZA(),o.TgZ(11,"div",29),o.TgZ(12,"p"),o._uU(13),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"div",28),o.TgZ(15,"div",29),o.TgZ(16,"label"),o._uU(17,"Email"),o.qZA(),o.qZA(),o.TgZ(18,"div",29),o.TgZ(19,"p"),o._uU(20),o.qZA(),o.qZA(),o.qZA()),2&e){const e=o.oxw();o.xp6(6),o.Oqu(e.userData.FirstName),o.xp6(7),o.Oqu(e.userData.LastName),o.xp6(7),o.Oqu(e.userData.Email)}}function Z(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"button",26),o._uU(1,"Edit Details"),o.qZA(),o.TgZ(2,"span",27),o.NdJ("click",function(){return o.CHM(e),o.oxw(),o.MAs(21).toggle("static-1")}),o._uU(3,"Close"),o.qZA()}2&e&&o.Q6J("disabled",!0)}function b(e,t){1&e&&(o.TgZ(0,"div",42),o._uU(1,"First Name is required "),o.qZA())}function v(e,t){if(1&e&&(o.ynx(0),o.YNc(1,b,2,0,"div",41),o.BQk()),2&e){const e=o.oxw(2);o.xp6(1),o.Q6J("ngIf",(null==e.f.FirstName.errors?null:e.f.FirstName.errors.required)||(null==e.f.FirstName.errors?null:e.f.FirstName.errors.pattern))}}function w(e,t){1&e&&(o.TgZ(0,"div",42),o._uU(1,"Last Name is required "),o.qZA())}function A(e,t){if(1&e&&(o.ynx(0),o.YNc(1,w,2,0,"div",41),o.BQk()),2&e){const e=o.oxw(2);o.xp6(1),o.Q6J("ngIf",(null==e.f.LastName.errors?null:e.f.LastName.errors.required)||(null==e.f.LastName.errors?null:e.f.LastName.errors.pattern))}}function q(e,t){1&e&&o._UZ(0,"span",25)}function P(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"form",30),o.TgZ(1,"div",31),o.TgZ(2,"div",29),o.TgZ(3,"label",32),o._uU(4,"First name"),o.qZA(),o._UZ(5,"input",33),o.YNc(6,v,2,1,"ng-container",34),o.qZA(),o.TgZ(7,"div",29),o.TgZ(8,"label",35),o._uU(9,"Last name"),o.qZA(),o._UZ(10,"input",36),o.YNc(11,A,2,1,"ng-container",34),o.qZA(),o.qZA(),o.TgZ(12,"div",37),o.TgZ(13,"label",38),o._uU(14,"Email"),o.qZA(),o._UZ(15,"input",39),o.qZA(),o.TgZ(16,"button",40),o.NdJ("click",function(){return o.CHM(e),o.oxw().updateProfile()}),o._uU(17," Save changes "),o.YNc(18,q,1,0,"span",13),o.qZA(),o.qZA()}if(2&e){const e=o.oxw();o.Q6J("formGroup",e.updateProfileForm),o.xp6(6),o.Q6J("ngIf",e.f.FirstName.invalid&&(e.f.FirstName.dirty||e.f.FirstName.touched)),o.xp6(5),o.Q6J("ngIf",e.f.LastName.invalid&&(e.f.LastName.dirty||e.f.LastName.touched)),o.xp6(5),o.Q6J("disabled",e.updateProfileForm.invalid),o.xp6(2),o.Q6J("ngIf",e.isFormSubmitted)}}let T=(()=>{class e{constructor(e,t,i,r){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.updateProfileForm=new a.cw({FirstName:new a.NI("",[a.kI.required]),LastName:new a.NI("",[a.kI.required]),Email:new a.NI("",[a.kI.required,a.kI.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")])}),this.acivePanel="static-1",this.isFormSubmitted=!1,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`,this.updateProfileData()}ngOnInit(){}updateProfileData(){this.updateProfileForm.patchValue({FirstName:this.userData.FirstName,LastName:this.userData.LastName,Email:this.userData.Email})}beforeChange(e){this.acivePanel="static-1"==e.panelId?"static-2":"static-1"}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}updateProfile(){this.isFormSubmitted=!0,this.http.call("updateUserProfile","POST",{Email:this.userData.Email,FirstName:this.updateProfileForm.value.FirstName,LastName:this.updateProfileForm.value.LastName,Id:this.userData.Id}).subscribe(e=>{this.isFormSubmitted=!1,this.toastService.showSuccess("Profile updated successfully!")})}get FirstName(){return this.updateProfileForm.get("FirstName")}get LastName(){return this.updateProfileForm.get("LastName")}get Email(){return this.updateProfileForm.get("Email")}get f(){return this.updateProfileForm.controls}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.j),o.Y36(c.O),o.Y36(d.H7),o.Y36(u.k))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-my-profile-general"]],decls:28,vars:4,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt"," ",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt"," ","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","general-profile","aria-labelledby","general-profile-tab",1,"col-xl-8","px-4","active"],["id","accordion",1,"general-profile"],["id","collapseOne","aria-labelledby","headingOne","data-parent","#accordion",1,"card","mb-4","collapse","show"],["activeIds","static-1",3,"panelChange"],["acc","ngbAccordion"],["id","static-1"],["ngbPanelTitle","","class","card-header"],["ngbPanelContent","","class","card-body"],["id","static-2"],["src","assets/images/profile.jpg","alt"," ",1,"img-account-profile","rounded-circle","mb-2"],["alt"," ",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"],[3,"disabled"],[1,"float-right",3,"click"],[1,"row"],[1,"col-md-6"],["autocomplete","off",3,"formGroup"],[1,"row","gx-3","mb-3"],["for","inputFirstName",1,"mb-1"],["id","inputFirstName","type","text","placeholder","Enter your first name","formControlName","FirstName",1,"form-control"],[4,"ngIf"],["for","inputLastName",1,"small","mb-1"],["id","inputLastName","type","tex","placeholder","Enter your last name","formControlName","LastName",1,"form-control"],[1,"mb-3"],["for","inputUseremail",1,"small","mb-1"],["type","email","readonly","","placeholder","Enter your Email","formControlName","Email",1,"form-control"],["type","button",1,"btn","btn-primary","btn-bf",3,"disabled","click"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._uU(4,"Profile Picture"),o.qZA(),o.TgZ(5,"div",4),o.YNc(6,g,1,0,"img",5),o.YNc(7,m,1,1,"img",6),o.TgZ(8,"div",7),o._uU(9,"JPG or PNG no larger than 5 MB"),o.qZA(),o.TgZ(10,"span",8),o._UZ(11,"label",9),o.TgZ(12,"input",10,11),o.NdJ("change",function(e){return t.fileChangeEvent(e)}),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return o.CHM(e),o.MAs(13).click()}),o._uU(15," Upload new image "),o.YNc(16,p,1,0,"span",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",14),o.TgZ(18,"div",15),o.TgZ(19,"div",16),o.TgZ(20,"ngb-accordion",17,18),o.NdJ("panelChange",function(e){return t.beforeChange(e)}),o.TgZ(22,"ngb-panel",19),o.YNc(23,f,4,1,"ng-template",20),o.YNc(24,h,21,3,"ng-template",21),o.qZA(),o.TgZ(25,"ngb-panel",22),o.YNc(26,Z,4,1,"ng-template",20),o.YNc(27,P,19,5,"ng-template",21),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.xp6(6),o.Q6J("ngIf",!t.imageSrc),o.xp6(1),o.Q6J("ngIf",t.imageSrc),o.xp6(5),o.Q6J("hidden",!0),o.xp6(4),o.Q6J("ngIf",t.isImageSubmitted))},directives:[r.O5,s.gY,s.Gk,s.Cu,s.gW,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:[""]}),e})();function I(e,t){1&e&&o._UZ(0,"img",30)}function S(e,t){if(1&e&&o._UZ(0,"img",31),2&e){const e=o.oxw();o.Q6J("src",e.imageSrc,o.LSH)}}function N(e,t){1&e&&o._UZ(0,"span",32)}function y(e,t){1&e&&(o.TgZ(0,"div",33),o._uU(1,"Password is required "),o.qZA())}function U(e,t){1&e&&(o.TgZ(0,"div",33),o._uU(1,"Password must contain at least one [A-Z], [a-z], [0-1] and Special character"),o.qZA())}function x(e,t){if(1&e&&(o.ynx(0),o.YNc(1,y,2,0,"div",28),o.YNc(2,U,2,0,"div",28),o.BQk()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.required),o.xp6(1),o.Q6J("ngIf",null==e.f.Password.errors?null:e.f.Password.errors.pattern)}}function _(e,t){1&e&&(o.TgZ(0,"div",33),o._uU(1,"Confirm Password is required "),o.qZA())}function J(e,t){if(1&e&&(o.ynx(0),o.YNc(1,_,2,0,"div",28),o.BQk()),2&e){const e=o.oxw();o.xp6(1),o.Q6J("ngIf",(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.required)||(null==e.f.confirmPassword.errors?null:e.f.confirmPassword.errors.pattern))}}function F(e,t){1&e&&(o.TgZ(0,"div",33),o._uU(1," Confirm Password is not matched "),o.qZA())}function E(e,t){1&e&&o._UZ(0,"span",32)}let k=(()=>{class e{constructor(e,t,i,r){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.updatePasswordForm=new a.cw({OldPassword:new a.NI("",[a.kI.required]),Password:new a.NI("",[a.kI.required,a.kI.minLength(8),a.kI.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]),confirmPassword:new a.NI("",[a.kI.required])}),this.isFormSubmitted=!1,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`}ngOnInit(){}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}matchPass(){var e,t,i,r;return!(!(null===(e=this.confirmPassword)||void 0===e?void 0:e.dirty)&&!(null===(t=this.confirmPassword)||void 0===t?void 0:t.touched)||(null===(i=this.confirmPassword)||void 0===i?void 0:i.value)===(null===(r=this.Password)||void 0===r?void 0:r.value))}matchPassword({value:e}){var t;return(null===(t=this.Password)||void 0===t?void 0:t.value)===e?{passwordNotMatched:!1}:{passwordNotMatched:!0}}updatePassword(){this.isFormSubmitted=!0,this.http.call("checkUserByPassword","POST",{Email:this.userData.Email,Password:this.updatePasswordForm.value.OldPassword}).subscribe(e=>{0==e?(this.isFormSubmitted=!1,this.toastService.showError("Old password does not match!")):this.http.call("changePassword","POST",{Email:this.userData.Email,Password:this.updatePasswordForm.value.Password}).subscribe(e=>{this.isFormSubmitted=!1,this.toastService.showSuccess("Password changed successfully!"),this.updatePasswordForm.reset()})})}get OldPassword(){return this.updatePasswordForm.get("OldPassword")}get Password(){return this.updatePasswordForm.get("Password")}get confirmPassword(){return this.updatePasswordForm.get("confirmPassword")}get f(){return this.updatePasswordForm.controls}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.j),o.Y36(c.O),o.Y36(d.H7),o.Y36(u.k))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-my-profile-change-password"]],decls:43,vars:10,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt","",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt","","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","change-password","role","tabpanel","aria-labelledby","change-password-tab",1,"col-xl-8","px-4"],[1,"card","mb-4"],[1,"card-body"],[3,"formGroup"],[1,"row","gx-3","mb-3"],[1,"col-md-12"],["for","inputFirstName",1,"mb-1"],["type","password","formControlName","OldPassword","placeholder","Old Password",1,"form-control"],[1,"col-md-6"],["for","inputLastName",1,"small","mb-1"],["type","password","formControlName","Password","placeholder","New Password",1,"form-control"],[4,"ngIf"],["for","inputUseremail",1,"small","mb-1"],["type","password","formControlName","confirmPassword","placeholder","Confrm Password",1,"form-control"],["class","field-error text-right mt-1 pr-2 small",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-bf",3,"disabled","click"],["src","assets/images/profile.jpg","alt","",1,"img-account-profile","rounded-circle","mb-2"],["alt","",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"],[1,"field-error","text-right","mt-1","pr-2","small"]],template:function(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._uU(4,"Profile Picture"),o.qZA(),o.TgZ(5,"div",4),o.YNc(6,I,1,0,"img",5),o.YNc(7,S,1,1,"img",6),o.TgZ(8,"div",7),o._uU(9,"JPG or PNG no larger than 5 MB"),o.qZA(),o.TgZ(10,"span",8),o._UZ(11,"label",9),o.TgZ(12,"input",10,11),o.NdJ("change",function(e){return t.fileChangeEvent(e)}),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return o.CHM(e),o.MAs(13).click()}),o._uU(15," Upload new image "),o.YNc(16,N,1,0,"span",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",14),o.TgZ(18,"div",15),o.TgZ(19,"div",3),o._uU(20,"Change Password"),o.qZA(),o.TgZ(21,"div",16),o.TgZ(22,"form",17),o.TgZ(23,"div",18),o.TgZ(24,"div",19),o.TgZ(25,"label",20),o._uU(26,"Old Password"),o.qZA(),o._UZ(27,"input",21),o.qZA(),o.qZA(),o.TgZ(28,"div",18),o.TgZ(29,"div",22),o.TgZ(30,"label",23),o._uU(31,"New Password"),o.qZA(),o._UZ(32,"input",24),o.YNc(33,x,3,2,"ng-container",25),o.qZA(),o.TgZ(34,"div",22),o.TgZ(35,"label",26),o._uU(36,"Confrm Password"),o.qZA(),o._UZ(37,"input",27),o.YNc(38,J,2,1,"ng-container",25),o.YNc(39,F,2,0,"div",28),o.qZA(),o.qZA(),o.TgZ(40,"button",29),o.NdJ("click",function(){return t.updatePassword()}),o._uU(41," Save changes "),o.YNc(42,E,1,0,"span",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.xp6(6),o.Q6J("ngIf",!t.imageSrc),o.xp6(1),o.Q6J("ngIf",t.imageSrc),o.xp6(5),o.Q6J("hidden",!0),o.xp6(4),o.Q6J("ngIf",t.isImageSubmitted),o.xp6(6),o.Q6J("formGroup",t.updatePasswordForm),o.xp6(11),o.Q6J("ngIf",t.f.Password.invalid&&(t.f.Password.dirty||t.f.Password.touched)),o.xp6(5),o.Q6J("ngIf",t.f.confirmPassword.invalid&&(t.f.confirmPassword.dirty||t.f.confirmPassword.touched)),o.xp6(1),o.Q6J("ngIf",(null==t.f.confirmPassword.errors?null:t.f.confirmPassword.errors.passwordNotMatched)||t.matchPass()),o.xp6(1),o.Q6J("disabled",t.updatePasswordForm.invalid||t.matchPass()),o.xp6(2),o.Q6J("ngIf",t.isFormSubmitted))},directives:[r.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u],styles:[""]}),e})();function Y(e,t){1&e&&o._UZ(0,"img",28)}function Q(e,t){if(1&e&&o._UZ(0,"img",29),2&e){const e=o.oxw();o.Q6J("src",e.imageSrc,o.LSH)}}function O(e,t){1&e&&o._UZ(0,"span",30)}let C=(()=>{class e{constructor(e,t,i,r){this.dataSharingService=e,this.http=t,this.sanitizer=i,this.toastService=r,this.isImageSubmitted=!1,this.userId=this.dataSharingService.GetUserId(),this.userData=this.dataSharingService.GetLoggedInUserData(),this.imageSrc=`data:image/JPEG;base64,${this.userData.ProfileImage}`}ngOnInit(){}fileChangeEvent(e){this.isImageSubmitted=!0;const t=new FileReader;if(e.target.files&&e.target.files.length){const[i]=e.target.files;"image/jpg"==i.type||"image/png"==i.type||"image/jpeg"==i.type?i.size/1048576<5?(t.readAsDataURL(i),t.onload=()=>{this.fileSource=t.result,this.submit()}):(this.isImageSubmitted=!1,this.toastService.showError("Image size should not be more then 5 MB!")):(this.isImageSubmitted=!1,this.toastService.showError("Only JPG or PNG allowed!"))}}submit(){let e={UserId:this.userId,ImageBase64:this.loadBase64Image(this.fileSource)};this.http.call("uploadProfileImage","POST",e).subscribe(e=>{this.isImageSubmitted=!1,e?(this.imageSrc=`data:image/JPEG;base64,${e.profileImage}`,this.toastService.showSuccess("Profile updated successfully!")):this.toastService.showError("Something wrong")})}loadBase64Image(e){let t;return t=this.sanitizer.bypassSecurityTrustResourceUrl(e),t.changingThisBreaksApplicationSecurity}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.j),o.Y36(c.O),o.Y36(d.H7),o.Y36(u.k))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-my-profile-fingerprint"]],decls:60,vars:4,consts:[[1,"row","user-profile-row","my-5",2,"min-height","500px"],[1,"col-xl-4"],[1,"card","mb-4","mb-xl-0"],[1,"card-header"],[1,"card-body","text-center"],["class","img-account-profile rounded-circle mb-2","src","assets/images/profile.jpg","alt"," ",4,"ngIf"],["class","img-account-profile rounded-circle mb-2","alt"," ","style","max-width: 200px; height: 200px;",3,"src",4,"ngIf"],[1,"small","font-italic","text-muted","mb-4"],[1,"file-input-container"],["for","file-upload",1,"file-upload-label"],["type","file","name","fileUpload","accept","image/*",3,"hidden","change"],["fileupload",""],["type","button",1,"btn","btn-primary","btn-bf",3,"click"],["class","spinner-border spinner-border-sm mr-2",4,"ngIf"],["id","fingerprint-authentication","role","tabpanel","aria-labelledby","fingerprint-authentication-tab",1,"col-xl-8","px-4"],[1,"card","mb-4"],[1,"card-body"],[1,"list-group","border-0"],[1,"list-group-item"],[1,"li-numbers"],[1,"li-text","pl-3"],["href","assets/MSO Device Driver.rar "],["target","_blank ","href","http://localhost:4200/#/biometric "],[1,"text-center","my-3"],[1,"material-icons",2,"font-size","58px"],[1,"fingure-remover-bt","mt-3"],["type","button ",1,"btn","btn-primary","btn-bf"],["href","http://localhost:4200/#/biometric ",1,""],["src","assets/images/profile.jpg","alt"," ",1,"img-account-profile","rounded-circle","mb-2"],["alt"," ",1,"img-account-profile","rounded-circle","mb-2",2,"max-width","200px","height","200px",3,"src"],[1,"spinner-border","spinner-border-sm","mr-2"]],template:function(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o._uU(4,"Profile Picture"),o.qZA(),o.TgZ(5,"div",4),o.YNc(6,Y,1,0,"img",5),o.YNc(7,Q,1,1,"img",6),o.TgZ(8,"div",7),o._uU(9,"JPG or PNG no larger than 5 MB"),o.qZA(),o.TgZ(10,"span",8),o._UZ(11,"label",9),o.TgZ(12,"input",10,11),o.NdJ("change",function(e){return t.fileChangeEvent(e)}),o.qZA(),o.TgZ(14,"button",12),o.NdJ("click",function(){return o.CHM(e),o.MAs(13).click()}),o._uU(15," Upload new image "),o.YNc(16,O,1,0,"span",13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"div",14),o.TgZ(18,"div",15),o.TgZ(19,"div",3),o._uU(20,"Step 1"),o.qZA(),o.TgZ(21,"div",16),o.TgZ(22,"ul",17),o.TgZ(23,"li",18),o.TgZ(24,"span",19),o._uU(25,"1"),o.qZA(),o.TgZ(26,"span",20),o._uU(27,"Download the fingerprint scanner drivers from the link "),o.TgZ(28,"a",21),o._uU(29,"download drivers."),o.qZA(),o.qZA(),o.qZA(),o.TgZ(30,"li",18),o.TgZ(31,"span",19),o._uU(32,"2"),o.qZA(),o.TgZ(33,"span",20),o._uU(34,"Ensure the installed service is running following "),o.TgZ(35,"a",22),o._uU(36,"steps."),o.qZA(),o.qZA(),o.qZA(),o.TgZ(37,"li",18),o.TgZ(38,"span",19),o._uU(39,"3"),o.qZA(),o.TgZ(40,"span",20),o._uU(41,"Connect "),o.TgZ(42,"b"),o._uU(43,"Morpho 1310"),o.qZA(),o._uU(44," device with machine and move to step 2."),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(45,"div",15),o.TgZ(46,"div",3),o._uU(47,"Step 2"),o.qZA(),o.TgZ(48,"div",16),o.TgZ(49,"p"),o._uU(50,"In order to login and form submission to work using fingerprint impression, you need to first save your impression with Blazeform. Please click on scan button below and verify your fingerprint twice. It will save your impression and you are good to login and authenticate all forms using Morpho scanner only."),o.qZA(),o.TgZ(51,"div",23),o.TgZ(52,"span",24),o._uU(53,"fingerprint"),o.qZA(),o.TgZ(54,"div",25),o.TgZ(55,"button",26),o._uU(56,"Remove Fingerprint "),o.qZA(),o.qZA(),o.TgZ(57,"div"),o.TgZ(58,"a",27),o._uU(59,"Having trouble with the scanner?"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}2&e&&(o.xp6(6),o.Q6J("ngIf",!t.imageSrc),o.xp6(1),o.Q6J("ngIf",t.imageSrc),o.xp6(5),o.Q6J("hidden",!0),o.xp6(4),o.Q6J("ngIf",t.isImageSubmitted))},directives:[r.O5],styles:[""]}),e})();function L(e,t){1&e&&(o.ynx(0),o._UZ(1,"app-my-profile-general"),o.BQk())}function G(e,t){1&e&&o._UZ(0,"app-my-profile-change-password")}function B(e,t){1&e&&o._UZ(0,"app-my-profile-fingerprint")}const D=[{path:"",component:(()=>{class e{constructor(e,t,i){this.dataSharingService=e,this.http=t,this.modalService=i,this.userId=this.dataSharingService.GetUserId(),console.log(this.userId)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.j),o.Y36(c.O),o.Y36(s.FF))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-my-profile"]],decls:20,vars:4,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"container-xl"],["ngbNav","",1,"nav-tabs"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"mt-2",3,"ngbNavOutlet"]],template:function(e,t){if(1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"Profile"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"ul",3,4),o.TgZ(7,"li",5),o.TgZ(8,"a",6),o._uU(9,"Profile"),o.qZA(),o.YNc(10,L,2,0,"ng-template",7),o.qZA(),o.TgZ(11,"li",5),o.TgZ(12,"a",6),o._uU(13,"Change Password"),o.qZA(),o.YNc(14,G,1,0,"ng-template",7),o.qZA(),o.TgZ(15,"li",5),o.TgZ(16,"a",6),o._uU(17,"Fingerprint Authentication"),o.qZA(),o.YNc(18,B,1,0,"ng-template",7),o.qZA(),o.qZA(),o._UZ(19,"div",8),o.qZA()),2&e){const e=o.MAs(6);o.xp6(7),o.Q6J("ngbNavItem",1),o.xp6(4),o.Q6J("ngbNavItem",2),o.xp6(4),o.Q6J("ngbNavItem",3),o.xp6(4),o.Q6J("ngbNavOutlet",e)}},directives:[s.Pz,s.nv,s.Vx,s.uN,s.tO,T,k,C],styles:[""]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.Bz.forChild(D)],n.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[r.ez,z,a.u5,a.UX,s.IJ]]}),e})()}}]);