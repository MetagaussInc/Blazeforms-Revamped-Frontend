(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[619],{2619:(t,i,e)=>{"use strict";e.r(i),e.d(i,{WorkSpacesModule:()=>nt});var n=e(8583),o=e(7310),s=e(9336),r=e(7716),l=e(2212);let a=(()=>{class t{constructor(t){this.activeModal=t}ngOnInit(){console.log(this.modalName)}closePopup(){this.activeModal.close()}deleteUserOrganization(){this.activeModal.close("deleteWorkSpace")}}return t.\u0275fac=function(i){return new(i||t)(r.Y36(l.Kz))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-delete-work-spaces"]],inputs:{message:"message",modalName:"modalName"},decls:17,vars:2,consts:[["id","delete-organization-modal",1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal","title","Close",1,"close",3,"click"],[1,"modal-body"],[1,"row","my-4","px-4","form-group"],[1,"col-md-12"],[1,"modal-footer","border-0"],["type","button","data-bs-dismiss","modal","title","Close",1,"btn","btn-link","btn-sm","text-bf",3,"click"],["type","button","title","Delete",1,"btn","btn-bf","btn-sm",3,"click"]],template:function(t,i){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"h5",3),r._uU(4),r.qZA(),r.TgZ(5,"button",4),r.NdJ("click",function(){return i.closePopup()}),r._uU(6,"\xd7"),r.qZA(),r.qZA(),r.TgZ(7,"div",5),r.TgZ(8,"div",6),r.TgZ(9,"div",7),r.TgZ(10,"p"),r._uU(11),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"div",8),r.TgZ(13,"button",9),r.NdJ("click",function(){return i.closePopup()}),r._uU(14,"Close"),r.qZA(),r.TgZ(15,"button",10),r.NdJ("click",function(){return i.deleteUserOrganization()}),r._uU(16,"Delete"),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(4),r.Oqu(i.modalName),r.xp6(7),r.Oqu(i.message))},styles:[""]}),t})();var c=e(4395),d=e(8002),u=e(2595),g=e(3065),h=e(834),p=e(3679),f=e(5917),m=e(2759),S=e(9773),b=e(8307),w=e(5435),T=e(7393),Z=e(3637);const y={leading:!0,trailing:!1};class k{constructor(t,i,e,n){this.duration=t,this.scheduler=i,this.leading=e,this.trailing=n}call(t,i){return i.subscribe(new A(t,this.duration,this.scheduler,this.leading,this.trailing))}}class A extends T.L{constructor(t,i,e,n,o){super(t),this.duration=i,this.scheduler=e,this.leading=n,this.trailing=o,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(z,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function z(t){const{subscriber:i}=t;i.clearThrottle()}function v(t,i,e,n){const o=window&&!!window.document&&window.document.documentElement;let s=o&&i?window:e;if(t&&(s=t&&o&&"string"==typeof t?function(t,i,e){return(e?window.document:i).querySelector(t)}(t,e.nativeElement,n):t,!s))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return s}function x(t){return t&&!t.firstChange}const I={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},D={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class O{constructor(t=!0){this.vertical=t,this.propsMap=t?I:D}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function q(t){return["Window","global"].some(i=>Object.prototype.toString.call(t).includes(i))}function C(t,i){return t?i.document.documentElement:null}function U(t,i){const e=function({container:t,isWindow:i,axis:e}){const{offsetHeightKey:n,clientHeightKey:o}=N(e);return _(t,i,n,o)}(i);return i.isWindow?function(t,i,e){const{axis:n,container:o,isWindow:s}=e,{offsetHeightKey:r,clientHeightKey:l}=N(n),a=t+W(C(s,o),n,s),c=_(i.nativeElement,s,r,l);return{height:t,scrolled:a,totalToScroll:function(t,i,e){const n=i.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[n]+W(t,i,e)}(i.nativeElement,n,s)+c,isWindow:s}}(e,t,i):function(t,i,e){const{axis:n,container:o}=e;return{height:t,scrolled:o[n.scrollTopKey()],totalToScroll:o[n.scrollHeightKey()],isWindow:!1}}(e,0,i)}function N(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function _(t,i,e,n){if(isNaN(t[e])){const e=C(i,t);return e?e[n]:0}return t[e]}function W(t,i,e){const n=i.pageYOffsetKey(),o=i.scrollTopKey(),s=i.offsetTopKey();return isNaN(window.pageYOffset)?C(e,t)[o]:t.ownerDocument?t.ownerDocument.defaultView[n]:t[s]}function H(t,i,e){let n,o;if(t.totalToScroll<=0)return!1;const s=t.isWindow?t.scrolled:t.height+t.scrolled;return e?(n=(t.totalToScroll-s)/t.totalToScroll,o=i.down/10):(n=t.scrolled/(t.scrolled+(t.totalToScroll-s)),o=i.up/10),n<=o}class J{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,i){this.updateScrollPosition(t),this.updateTotalToScroll(i)}updateTriggeredFlag(t,i){i?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,i){return i?this.triggered.down===t:this.triggered.up===t}}const L="[NGX_ISE] DOWN",M="[NGX_ISE] UP";function P(t){const{scrollDown:i,stats:{scrolled:e}}=t;return{type:i?L:M,payload:{currentScrollPosition:e}}}let E=(()=>{class t{constructor(t,i){this.element=t,this.zone=i,this.scrolled=new r.vpe,this.scrolledUp=new r.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:i,infiniteScrollDistance:e}){const n=x(t),o=x(i),s=x(e),r=!o&&!this.infiniteScrollDisabled||o&&!i.currentValue||s;(n||o||s)&&(this.destroyScroller(),r&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:i,scrollWindow:e,element:n,fromRoot:o}=t,s=function({windowElement:t,axis:i}){return function(t,i){const e=t.isWindow||i&&!i.nativeElement?i:i.nativeElement;return Object.assign(Object.assign({},t),{container:e})}({axis:i,isWindow:q(t)},t)}({axis:new O(!t.horizontal),windowElement:v(i,e,n,o)}),r=new J({totalToScroll:U(n,s)}),l={up:t.upDistance,down:t.downDistance};return function(t){let i=(0,m.R)(t.container,"scroll");return t.throttle&&(i=i.pipe(function(t,i=Z.P,e=y){return n=>n.lift(new k(t,i,e.leading,e.trailing))}(t.throttle))),i}({container:s.container,throttle:t.throttle}).pipe((0,S.zg)(()=>(0,f.of)(U(n,s))),(0,d.U)(t=>function(t,i,e){const{scrollDown:n,fire:o}=function(t,i,e){const n=function(t,i){return t<i.scrolled}(t,i);return{fire:H(i,e,n),scrollDown:n}}(t,i,e);return{scrollDown:n,fire:o,stats:i}}(r.lastScrollPosition,t,l)),(0,b.b)(({stats:t})=>r.updateScroll(t.scrolled,t.totalToScroll)),(0,w.h)(({fire:i,scrollDown:e,stats:{totalToScroll:n}})=>function(t,i,e){return!(!t||!i)||!(e||!i)}(t.alwaysCallback,i,r.isTriggeredScroll(n,e))),(0,b.b)(({scrollDown:t,stats:{totalToScroll:i}})=>{r.updateTriggeredFlag(i,t)}),(0,d.U)(P))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:i}){switch(t){case L:return this.scrolled.emit(i);case M:return this.scrolledUp.emit(i);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(r.Y36(r.SBq),r.Y36(r.R0b))},t.\u0275dir=r.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[r.TTD]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[],imports:[[]]}),t})();function Y(t,i){1&t&&(r.TgZ(0,"div",12),r.TgZ(1,"span",13),r._uU(2,"Loading..."),r.qZA(),r.qZA())}function V(t,i){1&t&&(r.TgZ(0,"span"),r._uU(1,"( Default )"),r.qZA())}const F=function(t){return{unsubscribed:t}};function R(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"button",29),r.NdJ("click",function(){r.CHM(t);const i=r.oxw(2).$implicit;return r.oxw(2).UnSubscribePlan(i.stripeSubscriptionId)}),r.TgZ(1,"i",30),r._uU(2," domain_disabled "),r.qZA(),r.qZA()}if(2&t){const t=r.oxw(2).$implicit;r.Q6J("disabled",!t.recurringPayment)("ngClass",r.VKq(2,F,!t.recurringPayment))}}function Q(t,i){1&t&&(r.TgZ(0,"button",31),r.TgZ(1,"i",32),r._uU(2," open_in_browser "),r.qZA(),r.qZA())}function j(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"a",33),r.NdJ("click",function(){r.CHM(t);const i=r.oxw(2).$implicit;return r.oxw(2).goToManageWorkSpaces("edit",i.id)}),r.TgZ(1,"i",32),r._uU(2,"edit"),r.qZA(),r.qZA()}}function B(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"a",34),r.NdJ("click",function(){r.CHM(t);const i=r.oxw(2).$implicit;return r.oxw(2).deleteUserOrganization(i)}),r.TgZ(1,"i",35),r._uU(2,"delete"),r.qZA(),r.qZA()}}function $(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"div"),r.TgZ(1,"div",18),r.TgZ(2,"div",19),r._UZ(3,"img",20),r.qZA(),r.TgZ(4,"div",21),r.TgZ(5,"span",22),r.NdJ("click",function(){r.CHM(t);const i=r.oxw().$implicit;return r.oxw(2).goToManageWorkSpaces("edit",i.id)}),r._uU(6),r.qZA(),r.YNc(7,V,2,0,"span",23),r.qZA(),r.TgZ(8,"div",24),r.YNc(9,R,3,4,"button",25),r.YNc(10,Q,3,0,"button",26),r.YNc(11,j,3,0,"a",27),r.YNc(12,B,3,0,"a",28),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=r.oxw().$implicit,i=r.oxw(2);let e;r.Udp("display",0===i.searchedString.length||null!=t.name&&null!=(e=t.name.toLowerCase())&&e.includes(null==i.searchedString?null:i.searchedString.toLowerCase())?"block":"none"),r.xp6(6),r.Oqu(t.name),r.xp6(1),r.Q6J("ngIf",t.id==i.selectedWorkspaceId),r.xp6(2),r.Q6J("ngIf",t.isOrganizationAdmin),r.xp6(1),r.Q6J("ngIf",i.IsSuperAdmin),r.xp6(1),r.Q6J("ngIf",i.permissions.canEdit),r.xp6(1),r.Q6J("ngIf",t.id!=i.userInfo.WorkspaceId&&i.permissions.canDelete||i.IsSuperAdmin)}}function G(t,i){if(1&t&&(r.ynx(0),r.YNc(1,$,13,8,"div",17),r.BQk()),2&t){const t=r.oxw(2);r.xp6(1),r.Q6J("ngIf",t.permissions.canView)}}function X(t,i){1&t&&(r.TgZ(0,"div",12),r.TgZ(1,"span",13),r._uU(2,"Loading..."),r.qZA(),r.qZA())}function tt(t,i){if(1&t){const t=r.EpF();r.TgZ(0,"div",14),r.TgZ(1,"div",15),r.NdJ("scrolled",function(){return r.CHM(t),r.oxw().onScroll()}),r.YNc(2,G,2,1,"ng-container",16),r.YNc(3,X,3,0,"div",10),r.qZA(),r.qZA()}if(2&t){const t=r.oxw();r.xp6(1),r.Q6J("infiniteScrollDistance",1)("infiniteScrollThrottle",50)("infiniteScrollDisabled",t.scrollCheck),r.xp6(1),r.Q6J("ngForOf",t.organizationLists),r.xp6(1),r.Q6J("ngIf",t.isPaginationLoading)}}const it=[{path:"",component:(()=>{class t{constructor(t,i,e,n,o){this.http=t,this.store=i,this.modalService=e,this.router=n,this.dataSharingService=o,this.searchedString="",this.totalNum=0,this.pageDetail={pageNumber:1,pageSize:14},this.organizationLists=[],this.totalOrgCount=0,this.scrollCheck=!1,this.IsSuperAdmin=!1,this.isPaginationLoading=!1,this.isLoading=!1,this.userInfoSubscription$=this.store.select(s.S8).subscribe(t=>{this.userInfo=t,this.userInfo.IsSuperAdmin&&(this.IsSuperAdmin=!0),this.getUserOrganizationsList()}),this.permissions=this.dataSharingService.GetPermissions("Organizations");let r=this.dataSharingService.GetUserWorkspaceList();this.selectedWorkspaceId=r.id}ngOnInit(){}getUserOrganizationsList(){const t=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.IsSuperAdmin?this.http.call("getUserWorkSpacesForSuperMaster","POST",t).subscribe(t=>{this.totalOrgCount=t.total;for(let i=0;i<this.pageDetail.pageSize;++i)t.res[i]&&this.organizationLists.push(t.res[i]);this.isPaginationLoading=!1}):this.http.call("getUserWorkSpaces","POST",t).subscribe(t=>{this.totalOrgCount=t.total;for(let i=0;i<this.pageDetail.pageSize;++i)t.res[i]&&this.organizationLists.push(t.res[i]);this.isPaginationLoading=!1})}deleteUserOrganization(t){const i=this.modalService.open(a,{size:"lg"});i.componentInstance.message=`Are you sure you want to delete organization ${t.name} ?`,i.componentInstance.modalName="Delete Organization",i.result.then(i=>{"deleteWorkSpace"===i&&this.http.call("deleteWorkSpace","POST",{Id:t.id,IsActive:!1,IsDeleted:!0,UserId:t.userId}).subscribe(t=>{1==t&&(this.organizationLists=[],this.pageDetail.pageNumber=1,this.getUserOrganizationsList())})},t=>{console.log("Dismissed ")})}searchWorkSpace(t){this.searchedString=t;const i=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.http.call("getUserWorkSpacesForSuperMaster","POST",i).pipe((0,c.b)(500),(0,d.U)(t=>{this.totalOrgCount=t.total;for(let i=0;i<this.pageDetail.pageSize;++i)t.res[i]&&this.organizationLists.push(t.res[i])}))}onScroll(){this.isPaginationLoading=!0,this.pageDetail.pageNumber++,this.getUserOrganizationsList(),this.organizationLists.length>=this.totalOrgCount&&(this.scrollCheck=!0)}goToManageWorkSpaces(t,i){if("add"==t)this.router.navigate(["/manage-work-spaces"],{queryParams:{action:"add"}});else{let t,e;this.organizationLists.forEach(n=>{n.id==i&&(t=n.userId,e=n.name)}),this.router.navigate(["/manage-work-spaces"],{queryParams:{action:"edit",id:encodeURIComponent(i),orgUserId:encodeURIComponent(t),orgName:encodeURIComponent(e)}})}}UnSubscribePlan(t){t&&this.http.call("unSubscriptionPlan","DELETE",{SubscriptionId:t}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(i){return new(i||t)(r.Y36(u.O),r.Y36(g.yh),r.Y36(l.FF),r.Y36(o.F0),r.Y36(h.j))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-work-spaces"]],decls:15,vars:3,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"organizations-container","container"],[1,"search-wrapper"],[1,"form-group","has-search","mb-5"],["type","text","placeholder","Search Organization",1,"form-control",3,"ngModel","ngModelChange"],[1,"organization-controls-wrapper","d-flex","flex-wrap","justify-content-between","mb-5"],[1,"add-organization-wrapper"],[3,"click"],["type","button","id","add-form","data-toggle","modal","title","Add New Organization",1,"btn","btn-bf","btn-sm"],["class","spinner-grow text-bf text-center","role","status",4,"ngIf"],["class","organization-wrapper row mb-5 overflow-auto height-fix",4,"ngIf"],["role","status",1,"spinner-grow","text-bf","text-center"],[1,"sr-only"],[1,"organization-wrapper","row","mb-5","overflow-auto","height-fix"],["infiniteScroll","",1,"organization-list","col-md-12","border","rounded",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollDisabled","scrolled"],[4,"ngFor","ngForOf"],[3,"display",4,"ngIf"],[1,"organization-list-item","row","p-3","border-bottom"],[1,"organization-img-wrapper","col-md-1"],["src","assets/images/pepsi.png","alt","","title","","width","30","height","30",1,"workspace-img"],[1,"organization-title-wrapper","col-md-8"],["clss","organization-name",3,"click"],[4,"ngIf"],[1,"organization-actions-wrapper","col-md-3","d-flex","d-wrap","justify-content-end"],["class","btn animate-mat","title","Unsubscribe",3,"disabled","ngClass","click",4,"ngIf"],["class","btn animate-mat","title","Redirect",4,"ngIf"],["title","Edit",3,"click",4,"ngIf"],["title","Delete",3,"click",4,"ngIf"],["title","Unsubscribe",1,"btn","animate-mat",3,"disabled","ngClass","click"],[1,"material-icons"],["title","Redirect",1,"btn","animate-mat"],[1,"material-icons-round","mr-3","text-dark"],["title","Edit",3,"click"],["title","Delete",3,"click"],[1,"material-icons-round","text-dark"]],template:function(t,i){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h2"),r._uU(3,"Organizations"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(4,"div",2),r.TgZ(5,"div",3),r.TgZ(6,"div",4),r.TgZ(7,"input",5),r.NdJ("ngModelChange",function(t){return i.searchedString=t})("ngModelChange",function(t){return i.searchWorkSpace(t)}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(8,"div",6),r.TgZ(9,"div",7),r.TgZ(10,"a",8),r.NdJ("click",function(){return i.goToManageWorkSpaces("add","")}),r.TgZ(11,"button",9),r._uU(12,"Add Organization"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(13,Y,3,0,"div",10),r.YNc(14,tt,4,5,"div",11),r.qZA()),2&t&&(r.xp6(7),r.Q6J("ngModel",i.searchedString),r.xp6(6),r.Q6J("ngIf",i.isLoading),r.xp6(1),r.Q6J("ngIf",!i.isLoading))},directives:[p.Fj,p.JJ,p.On,n.O5,E,n.sg,n.mk],styles:[""]}),t})()}];let et=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(it)],o.Bz]}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,et,p.u5,l.IJ,K]]}),t})()}}]);