(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[581],{21581:(t,e,i)=>{"use strict";i.r(e),i.d(e,{WorkSpacesModule:()=>P});var n=i(38583),s=i(67310),o=i(99336),a=i(37716),r=i(30526);let c=(()=>{class t{constructor(t){this.activeModal=t}ngOnInit(){console.log(this.modalName)}closePopup(){this.activeModal.close()}deleteUserOrganization(){this.activeModal.close("deleteWorkSpace")}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.Kz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-delete-work-spaces"]],inputs:{message:"message",modalName:"modalName"},decls:16,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","title","Close",1,"close",3,"click"],[1,"modal-body"],[1,"row","my-4","px-4","form-group"],[1,"col-md-12"],[1,"modal-footer","border-0"],["type","button","data-bs-dismiss","modal","title","Close",1,"btn","btn-link","btn-sm","text-bf",3,"click"],["type","button","title","Delete",1,"btn","btn-bf","btn-sm",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h5",2),a._uU(3),a.qZA(),a.TgZ(4,"button",3),a.NdJ("click",function(){return e.closePopup()}),a._uU(5,"\xd7"),a.qZA(),a.qZA(),a.TgZ(6,"div",4),a.TgZ(7,"div",5),a.TgZ(8,"div",6),a.TgZ(9,"p"),a._uU(10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"div",7),a.TgZ(12,"button",8),a.NdJ("click",function(){return e.closePopup()}),a._uU(13,"Close"),a.qZA(),a.TgZ(14,"button",9),a.NdJ("click",function(){return e.deleteUserOrganization()}),a._uU(15,"Delete"),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.Oqu(e.modalName),a.xp6(7),a.Oqu(e.message))},styles:[""]}),t})();var l=i(54395),g=i(87519),d=i(45435),p=i(88002),u=i(59808),h=i(62595),m=i(23065),f=i(834),b=i(8634);function Z(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div",13),a.TgZ(1,"div",14),a.TgZ(2,"a",15),a.NdJ("click",function(){return a.CHM(t),a.oxw().goToManageWorkSpaces("add","")}),a.TgZ(3,"button",16),a._uU(4,"Add Organization"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}}function w(t,e){1&t&&a._UZ(0,"img",30)}function k(t,e){if(1&t&&a._UZ(0,"img",31),2&t){const t=a.oxw(2).$implicit;a.hYB("src","data:image/",t.logoExt,";base64,",t.logo,"",a.LSH)}}function I(t,e){1&t&&(a.TgZ(0,"span"),a._uU(1,"(Default)"),a.qZA())}const S=function(t){return{unsubscribed:t}};function A(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",32),a.NdJ("click",function(){a.CHM(t);const e=a.oxw(2).$implicit;return a.oxw().UnSubscribePlan(e.stripeSubscriptionId)}),a.TgZ(1,"i",33),a._uU(2," domain_disabled "),a.qZA(),a.qZA()}if(2&t){const t=a.oxw(2).$implicit;a.Q6J("disabled",!t.recurringPayment)("ngClass",a.VKq(2,S,!t.recurringPayment))}}function T(t,e){1&t&&(a.TgZ(0,"button",34),a.TgZ(1,"i",35),a._uU(2," open_in_browser "),a.qZA(),a.qZA())}function v(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"a",36),a.NdJ("click",function(){a.CHM(t);const e=a.oxw(2).$implicit;return a.oxw().goToManageWorkSpaces("edit",e.id)}),a.TgZ(1,"i",35),a._uU(2,"edit"),a.qZA(),a.qZA()}}function q(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"a",37),a.NdJ("click",function(){a.CHM(t);const e=a.oxw(2).$implicit;return a.oxw().deleteUserOrganization(e)}),a.TgZ(1,"i",38),a._uU(2,"delete"),a.qZA(),a.qZA()}}function x(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"div"),a.TgZ(1,"div",18),a.TgZ(2,"div",19),a.YNc(3,w,1,0,"img",20),a.YNc(4,k,1,2,"img",21),a.qZA(),a.TgZ(5,"div",22),a.TgZ(6,"span",23),a.NdJ("click",function(){a.CHM(t);const e=a.oxw().$implicit;return a.oxw().goToManageWorkSpaces("edit",e.id)}),a._uU(7),a.qZA(),a._UZ(8,"br"),a.YNc(9,I,2,0,"span",24),a.qZA(),a.TgZ(10,"div",25),a.YNc(11,A,3,4,"button",26),a.YNc(12,T,3,0,"button",27),a.YNc(13,v,3,0,"a",28),a.YNc(14,q,3,0,"a",29),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=a.oxw().$implicit,e=a.oxw();let i,n;a.Udp("display",0===e.searchedString.length||null!=t.name&&null!=(i=t.name.toLowerCase())&&i.includes(null==e.searchedString||null==(n=e.searchedString.trim())?null:n.toLowerCase())?"block":"none"),a.xp6(3),a.Q6J("ngIf",!t.logo),a.xp6(1),a.Q6J("ngIf",t.logo),a.xp6(3),a.Oqu(t.name),a.xp6(2),a.Q6J("ngIf",t.id==e.selectedWorkspaceId),a.xp6(2),a.Q6J("ngIf",t.isOrganizationAdmin),a.xp6(1),a.Q6J("ngIf",e.IsSuperAdmin),a.xp6(1),a.Q6J("ngIf",e.permissions.canEdit),a.xp6(1),a.Q6J("ngIf",t.id!=e.userInfo.WorkspaceId&&e.permissions.canDelete||e.IsSuperAdmin)}}function z(t,e){if(1&t&&(a.ynx(0),a.YNc(1,x,15,10,"div",17),a.BQk()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("ngIf",t.permissions.canView)}}function O(t,e){1&t&&(a.TgZ(0,"div",39),a.TgZ(1,"div",40),a.TgZ(2,"span",41),a._uU(3,"Loading..."),a.qZA(),a.qZA(),a.qZA())}const U=[{path:"",component:(()=>{class t{constructor(t,e,i,n,s,a){this.http=t,this.store=e,this.modalService=i,this.router=n,this.dataSharingService=s,this.toastService=a,this.searchedString="",this.totalNum=0,this.pageDetail={pageNumber:1,pageSize:10},this.organizationLists=[],this.totalOrgCount=0,this.scrollCheck=!1,this.IsSuperAdmin=!1,this.isPaginationLoading=!1,this.isLoading=!1,this.p=1,this.isPagination=!1,this.showPagination=!1,this.userWorkspaceLists=[],this.formatter=t=>t.name,this.search=t=>t.pipe((0,l.b)(200),(0,g.x)(),(0,d.h)(t=>t.length>=2),(0,p.U)(t=>this.userWorkspaceLists.filter(e=>new RegExp(t,"mi").test(e.name)).slice(0,10))),this.userInfoSubscription$=this.store.select(o.S8).subscribe(t=>{this.userInfo=t,this.userInfo&&(this.userInfo.IsSuperAdmin&&(this.IsSuperAdmin=!0),this.getUserOrganizationsList())}),this.permissions=this.dataSharingService.GetPermissions("Organizations");let r=this.dataSharingService.GetUserWorkspaceList();this.selectedWorkspaceId=r.id,this.store.select(o.eJ).subscribe(t=>{t&&Array.from(Object.values(t)).forEach(t=>{this.userWorkspaceLists.push({id:t.id,name:t.name})})})}ngOnInit(){}getUserOrganizationsList(){this.isLoading=!0;const t=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.IsSuperAdmin?this.http.call("getUserWorkSpacesForSuperMaster","POST",t).subscribe(t=>{this.totalOrgCount=t.total,this.organizationLists=t.res,this.isLoading=!1,this.showPagination=!0,this.isPagination&&window.scroll({top:100,left:0,behavior:"smooth"})}):this.http.call("getUserWorkSpaces","POST",t).subscribe(t=>{console.log(t),this.totalOrgCount=t.total,this.organizationLists=t.res,this.isLoading=!1,this.showPagination=!0,this.isPagination&&window.scroll({top:100,left:0,behavior:"smooth"})})}deleteUserOrganization(t){const e=this.modalService.open(c,{size:"lg"});e.componentInstance.message=`Are you sure you want to delete organization ${t.name} ?`,e.componentInstance.modalName="Delete Organization",e.result.then(e=>{"deleteWorkSpace"===e&&this.http.call("deleteWorkSpace","POST",{Id:t.id,IsActive:!1,IsDeleted:!0,UserId:t.userId}).subscribe(t=>{1==t&&(this.toastService.showSuccess("Organization Deleted Successfully!"),this.organizationLists=[],this.pageDetail.pageNumber=1,this.showPagination=!1,this.getUserOrganizationsList(),this.http.call("getUserWorkSpacesWithoutPagination","POST",{Id:this.userInfo.Id}).subscribe(t=>{this.store.dispatch((0,u.bN)({props:t}))}),this.store.select(o.eJ).subscribe(t=>{t&&(this.userWorkspaceLists=[],Array.from(Object.values(t)).forEach(t=>{this.userWorkspaceLists.push({id:t.id,name:t.name})}))}))})},t=>{console.log("Dismissed ")})}searchWorkSpace(t){this.searchedString=t;const e=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.http.call("getUserWorkSpacesForSuperMaster","POST",e).pipe((0,l.b)(500),(0,p.U)(t=>{this.totalOrgCount=t.total,this.organizationLists=t.res}))}goToManageWorkSpaces(t,e){if(this.dataSharingService.SetActiveTabId(1),"add"==t)this.router.navigate(["/manage-work-spaces"],{queryParams:{action:"add"}});else{let t,i;this.organizationLists.forEach(n=>{n.id==e&&(t=n.userId,i=n.name)}),this.router.navigate(["/manage-work-spaces"],{queryParams:{action:"edit",id:encodeURIComponent(e),orgUserId:encodeURIComponent(t),orgName:encodeURIComponent(i)}})}}UnSubscribePlan(t){t&&this.http.call("unSubscriptionPlan","DELETE",{SubscriptionId:t}).subscribe(t=>{console.log(t)})}getPage(t){this.p=t,this.pageDetail.pageNumber=t,this.isPagination=!0,this.getUserOrganizationsList()}selectOrgItem(t){t&&t.item.id&&this.goToManageWorkSpaces("edit",t.item.id)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(h.O),a.Y36(m.yh),a.Y36(r.FF),a.Y36(s.F0),a.Y36(f.j),a.Y36(b.k))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-work-spaces"]],decls:15,vars:11,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"organizations-container","container"],[1,"search-wrapper"],[1,"form-group","has-search","mb-5"],["id","typeahead-basic","type","text","placeholder","Search Organization",1,"form-control",3,"ngbTypeahead","inputFormatter","resultFormatter","editable","selectItem"],["class","organization-controls-wrapper d-flex flex-wrap justify-content-between mb-5",4,"ngIf"],["id","organizationWrapper",1,"organization-wrapper","row","mb-5","overflow-auto"],[1,"organization-list","col-md-12","border","rounded"],[4,"ngFor","ngForOf"],[1,"has-text-centered","w-100","my-5","d-flex","justify-content-center","bd-highlight","mb-3"],["aria-label","Default pagination",3,"collectionSize","page","disabled","hidden","pageChange"],["class","text-center w-100 mb-5",4,"ngIf"],[1,"organization-controls-wrapper","d-flex","flex-wrap","justify-content-between","mb-5"],[1,"add-organization-wrapper"],[3,"click"],["type","button","id","add-form","data-toggle","modal","title","Add New Organization",1,"btn","btn-bf","btn-sm"],[3,"display",4,"ngIf"],[1,"organization-list-item","row","p-3","border-bottom","justify-content-end","align-items-center"],[1,"organization-img-wrapper","col-md-1"],["src","assets/images/pepsi.png","class","workspace-img","alt","","title","","width","30","height","30",4,"ngIf"],["class","workspace-img","alt","","title","","width","30","height","30",3,"src",4,"ngIf"],[1,"organization-title-wrapper","col-md-8"],["clss","organization-name","role","link",3,"click"],[4,"ngIf"],[1,"organization-actions-wrapper","col-md-3","d-flex","d-wrap","justify-content-end","align-items-center"],["class","btn animate-mat","title","Unsubscribe",3,"disabled","ngClass","click",4,"ngIf"],["class","btn animate-mat","title","Redirect",4,"ngIf"],["title","Edit",3,"click",4,"ngIf"],["title","Delete",3,"click",4,"ngIf"],["src","assets/images/pepsi.png","alt","","title","","width","30","height","30",1,"workspace-img"],["alt","","title","","width","30","height","30",1,"workspace-img",3,"src"],["title","Unsubscribe",1,"btn","animate-mat",3,"disabled","ngClass","click"],[1,"material-icons"],["title","Redirect",1,"btn","animate-mat"],[1,"material-icons-round","mr-3","text-dark"],["title","Edit",3,"click"],["title","Delete",3,"click"],[1,"material-icons-round","text-dark"],[1,"text-center","w-100","mb-5"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3,"Organizations"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"div",3),a.TgZ(6,"div",4),a.TgZ(7,"input",5),a.NdJ("selectItem",function(t){return e.selectOrgItem(t)}),a.qZA(),a.qZA(),a.qZA(),a.YNc(8,Z,5,0,"div",6),a.TgZ(9,"div",7),a.TgZ(10,"div",8),a.YNc(11,z,2,1,"ng-container",9),a.qZA(),a.TgZ(12,"div",10),a.TgZ(13,"ngb-pagination",11),a.NdJ("pageChange",function(t){return e.p=t})("pageChange",function(t){return e.getPage(t)}),a.qZA(),a.qZA(),a.YNc(14,O,4,0,"div",12),a.qZA(),a.qZA()),2&t&&(a.xp6(7),a.Q6J("ngbTypeahead",e.search)("inputFormatter",e.formatter)("resultFormatter",e.formatter)("editable",!1),a.xp6(1),a.Q6J("ngIf",e.permissions.canEdit),a.xp6(3),a.Q6J("ngForOf",e.organizationLists),a.xp6(2),a.Q6J("collectionSize",e.totalOrgCount)("page",e.p)("disabled",e.isLoading)("hidden",!e.showPagination),a.xp6(1),a.Q6J("ngIf",e.isLoading))},directives:[r.dR,n.O5,n.sg,r.N9,n.mk],styles:[".organization-list[_ngcontent-%COMP%]   .organization-list-item[_ngcontent-%COMP%]:hover{background-color:#fff4f5}[role=link][_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[s.Bz.forChild(U)],s.Bz]}),t})();var N=i(3679);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,y,N.u5,r.IJ]]}),t})()}}]);