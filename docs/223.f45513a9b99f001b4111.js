(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[223],{3223:(t,e,i)=>{"use strict";i.r(e),i.d(e,{WorkSpacesModule:()=>P});var o=i(8583),n=i(7310),r=i(9336),s=i(7716),l=i(2212);let a=(()=>{class t{constructor(t){this.activeModal=t}ngOnInit(){console.log(this.modalName)}deleteUserOrganization(){this.activeModal.close("deleteWorkSpace")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.Kz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-delete-work-spaces"]],inputs:{message:"message",modalName:"modalName"},decls:17,vars:2,consts:[["id","delete-organization-modal",1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"row","my-4","px-4","form-group"],[1,"col-md-12"],[1,"modal-footer","border-0"],["type","button","data-bs-dismiss","modal",1,"btn","btn-link","btn-sm","text-bf"],["type","button",1,"btn","btn-bf","btn-sm",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"h5",3),s._uU(4),s.qZA(),s.TgZ(5,"button",4),s._uU(6,"\xd7"),s.qZA(),s.qZA(),s.TgZ(7,"div",5),s.TgZ(8,"div",6),s.TgZ(9,"div",7),s.TgZ(10,"p"),s._uU(11),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"div",8),s.TgZ(13,"button",9),s._uU(14,"Close"),s.qZA(),s.TgZ(15,"button",10),s.NdJ("click",function(){return e.deleteUserOrganization()}),s._uU(16,"Delete"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Oqu(e.modalName),s.xp6(7),s.Oqu(e.message))},styles:[""]}),t})();var c=i(4395),d=i(8002),g=i(2595),h=i(3065);let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-work-spaces-header"]],decls:23,vars:0,consts:[[1,"header-container","container-fluid"],[1,"header-wrapper","row","px-3","border-bottom","d-flex","flex-nowrap","align-items-center","justify-content-between"],[1,"logo-wrapper","col","py-3"],[1,"colored-logo"],["src","assets/images/logo.png","height","41"],[1,"nav-area","col","d-flex","flex-nowrap","align-items-center","justify-content-end"],[1,"nav","mr-5"],[1,"nav-item","active","p-4"],[1,"nav-item","p-4"],[1,"org-switch-wrapper","mx-4","bg-light"],[1,"org-switch-wrapper","border","rounded","py-2","pl-3"],[1,"org-name","mr-3"],[1,"material-icons","pr-2"],[1,"lang-switcher-wrapper","mr-4"],[1,"material-icons"],[1,"account-image-wrapper"],[1,"account-image"],["src","assets/images/user.jpg","height","35",1,"rounded-circle"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s._UZ(4,"img",4),s.qZA(),s.qZA(),s.TgZ(5,"div",5),s.TgZ(6,"div",6),s.TgZ(7,"div",7),s._uU(8," Forms "),s.qZA(),s.TgZ(9,"div",8),s._uU(10," Organizations "),s.qZA(),s.qZA(),s.TgZ(11,"div",9),s.TgZ(12,"div",10),s.TgZ(13,"span",11),s._uU(14,"Company Name"),s.qZA(),s.TgZ(15,"i",12),s._uU(16,"expand_more"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(17,"div",13),s.TgZ(18,"i",14),s._uU(19,"language"),s.qZA(),s.qZA(),s.TgZ(20,"div",15),s.TgZ(21,"div",16),s._UZ(22,"img",17),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA())},styles:[""]}),t})();var p=i(3679),f=i(5917),m=i(2759),w=i(9773),Z=i(8307),T=i(5435),S=i(7393),b=i(3637);const C={leading:!0,trailing:!1};class L{constructor(t,e,i,o){this.duration=t,this.scheduler=e,this.leading=i,this.trailing=o}call(t,e){return e.subscribe(new y(t,this.duration,this.scheduler,this.leading,this.trailing))}}class y extends S.L{constructor(t,e,i,o,n){super(t),this.duration=e,this.scheduler=i,this.leading=o,this.trailing=n,this._hasTrailingValue=!1,this._trailingValue=null}_next(t){this.throttled?this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0):(this.add(this.throttled=this.scheduler.schedule(v,this.duration,{subscriber:this})),this.leading?this.destination.next(t):this.trailing&&(this._trailingValue=t,this._hasTrailingValue=!0))}_complete(){this._hasTrailingValue?(this.destination.next(this._trailingValue),this.destination.complete()):this.destination.complete()}clearThrottle(){const t=this.throttled;t&&(this.trailing&&this._hasTrailingValue&&(this.destination.next(this._trailingValue),this._trailingValue=null,this._hasTrailingValue=!1),t.unsubscribe(),this.remove(t),this.throttled=null)}}function v(t){const{subscriber:e}=t;e.clearThrottle()}function A(t,e,i,o){const n=window&&!!window.document&&window.document.documentElement;let r=n&&e?window:i;if(t&&(r=t&&n&&"string"==typeof t?function(t,e,i){return(i?window.document:e).querySelector(t)}(t,i.nativeElement,o):t,!r))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function q(t){return t&&!t.firstChange}const z={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},O={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class x{constructor(t=!0){this.vertical=t,this.propsMap=t?z:O}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function U(t){return["Window","global"].some(e=>Object.prototype.toString.call(t).includes(e))}function k(t,e){return t?e.document.documentElement:null}function _(t,e){const i=function({container:t,isWindow:e,axis:i}){const{offsetHeightKey:o,clientHeightKey:n}=D(i);return W(t,e,o,n)}(e);return e.isWindow?function(t,e,i){const{axis:o,container:n,isWindow:r}=i,{offsetHeightKey:s,clientHeightKey:l}=D(o),a=t+H(k(r,n),o,r),c=W(e.nativeElement,r,s,l);return{height:t,scrolled:a,totalToScroll:function(t,e,i){const o=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[o]+H(t,e,i)}(e.nativeElement,o,r)+c,isWindow:r}}(i,t,e):function(t,e,i){const{axis:o,container:n}=i;return{height:t,scrolled:n[o.scrollTopKey()],totalToScroll:n[o.scrollHeightKey()],isWindow:!1}}(i,0,e)}function D(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function W(t,e,i,o){if(isNaN(t[i])){const i=k(e,t);return i?i[o]:0}return t[i]}function H(t,e,i){const o=e.pageYOffsetKey(),n=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window.pageYOffset)?k(i,t)[n]:t.ownerDocument?t.ownerDocument.defaultView[o]:t[r]}function M(t,e,i){let o,n;if(t.totalToScroll<=0)return!1;const r=t.isWindow?t.scrolled:t.height+t.scrolled;return i?(o=(t.totalToScroll-r)/t.totalToScroll,n=e.down/10):(o=t.scrolled/(t.scrolled+(t.totalToScroll-r)),n=e.up/10),o<=n}class I{constructor({totalToScroll:t}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=t}updateScrollPosition(t){return this.lastScrollPosition=t}updateTotalToScroll(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}updateScroll(t,e){this.updateScrollPosition(t),this.updateTotalToScroll(e)}updateTriggeredFlag(t,e){e?this.triggered.down=t:this.triggered.up=t}isTriggeredScroll(t,e){return e?this.triggered.down===t:this.triggered.up===t}}const K="[NGX_ISE] DOWN",N="[NGX_ISE] UP";function j(t){const{scrollDown:e,stats:{scrolled:i}}=t;return{type:e?K:N,payload:{currentScrollPosition:i}}}let V=(()=>{class t{constructor(t,e){this.element=t,this.zone=e,this.scrolled=new s.vpe,this.scrolledUp=new s.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:t,infiniteScrollDisabled:e,infiniteScrollDistance:i}){const o=q(t),n=q(e),r=q(i),s=!n&&!this.infiniteScrollDisabled||n&&!e.currentValue||r;(o||n||r)&&(this.destroyScroller(),s&&this.setup())}setup(){"undefined"!=typeof window&&this.zone.runOutsideAngular(()=>{this.disposeScroller=function(t){const{scrollContainer:e,scrollWindow:i,element:o,fromRoot:n}=t,r=function({windowElement:t,axis:e}){return function(t,e){const i=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return Object.assign(Object.assign({},t),{container:i})}({axis:e,isWindow:U(t)},t)}({axis:new x(!t.horizontal),windowElement:A(e,i,o,n)}),s=new I({totalToScroll:_(o,r)}),l={up:t.upDistance,down:t.downDistance};return function(t){let e=(0,m.R)(t.container,"scroll");return t.throttle&&(e=e.pipe(function(t,e=b.P,i=C){return o=>o.lift(new L(t,e,i.leading,i.trailing))}(t.throttle))),e}({container:r.container,throttle:t.throttle}).pipe((0,w.zg)(()=>(0,f.of)(_(o,r))),(0,d.U)(t=>function(t,e,i){const{scrollDown:o,fire:n}=function(t,e,i){const o=function(t,e){return t<e.scrolled}(t,e);return{fire:M(e,i,o),scrollDown:o}}(t,e,i);return{scrollDown:o,fire:n,stats:e}}(s.lastScrollPosition,t,l)),(0,Z.b)(({stats:t})=>s.updateScroll(t.scrolled,t.totalToScroll)),(0,T.h)(({fire:e,scrollDown:i,stats:{totalToScroll:o}})=>function(t,e,i){return!(!t||!e)||!(i||!e)}(t.alwaysCallback,e,s.isTriggeredScroll(o,i))),(0,Z.b)(({scrollDown:t,stats:{totalToScroll:e}})=>{s.updateTriggeredFlag(e,t)}),(0,d.U)(j))}({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(t=>this.zone.run(()=>this.handleOnScroll(t)))})}handleOnScroll({type:t,payload:e}){switch(t){case K:return this.scrolled.emit(e);case N:return this.scrolledUp.emit(e);default:return}}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(s.R0b))},t.\u0275dir=s.lG2({type:t,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[s.TTD]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[],imports:[[]]}),t})(),Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-work-spaces-footer"]],decls:12,vars:0,consts:[[1,"footer-container","container-fluid"],[1,"footer-wrapper","row","p-3","bg-dark","border-top","border-5","border-bf"],[1,"footer-copyright-wrapper","text-center","col"],[1,"monochrome-logo-wrapper","mr-2"],["width","20px","height","100%","viewBox","0 0 152 185","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",0,"xml","space","preserve",0,"xmlns","serif","http://www.serif.com/",1,"monochrome-logo",2,"fill-rule","evenodd","clip-rule","evenodd","stroke-linejoin","round","stroke-miterlimit","2"],["transform","matrix(0.429851,0,0,0.429851,-95.0387,-38.8813)"],["transform","matrix(8.79,0,0,8.79,-953.066,-846.569)"],["d","M146.699,151.251C146.666,151.275 146.631,151.296 146.596,151.315L140.138,155.27C140.112,155.286 140.084,155.303 140.057,155.316L140.036,155.327C139.884,155.399 139.712,155.431 139.534,155.409C139.405,155.395 139.287,155.354 139.183,155.293L139.169,155.285L139.164,155.281L139.126,155.257L139.113,155.249L139.108,155.245L139.096,155.235L139.078,155.223L139.072,155.218L139.061,155.208L139.044,155.194L139.038,155.188L139.028,155.179L139.021,155.174L139.005,155.159L138.995,155.148L138.989,155.142L138.98,155.134L138.951,155.101L138.943,155.091L138.937,155.085L138.928,155.073L138.922,155.066L138.914,155.056L138.91,155.05C138.878,155.009 138.851,154.964 138.827,154.917L138.818,154.9L138.817,154.896C138.745,154.745 138.712,154.571 138.734,154.394L139.631,146.847C139.634,146.811 139.638,146.773 139.644,146.739L140.997,135.363C141.014,135.222 141.063,135.092 141.134,134.979L141.133,134.978L142.637,132.632L144.365,129.935C144.637,129.508 145.204,129.383 145.63,129.655C146.057,129.928 146.181,130.495 145.909,130.921L144.181,133.618C143.903,134.052 143.827,134.559 143.929,135.028L143.931,135.027C144.033,135.496 144.313,135.926 144.745,136.204C145.178,136.48 145.686,136.556 146.154,136.456L146.154,136.454C146.622,136.351 147.05,136.072 147.326,135.644L147.328,135.642L147.33,135.639L149.058,132.941C149.331,132.515 149.897,132.39 150.324,132.663C150.75,132.935 150.875,133.502 150.601,133.928L148.9,136.583L148.899,136.586L148.897,136.588C148.883,136.614 148.868,136.638 148.851,136.662C148.592,137.086 148.523,137.58 148.622,138.034L148.624,138.034C148.724,138.49 148.992,138.91 149.404,139.188C149.428,139.202 149.451,139.217 149.474,139.232C149.899,139.492 150.392,139.56 150.847,139.462L150.846,139.46C151.309,139.358 151.733,139.085 152.01,138.664L152.021,138.649L152.022,138.646L153.751,135.947C154.023,135.521 154.589,135.397 155.016,135.669C155.442,135.941 155.567,136.508 155.294,136.934L153.593,139.59L153.592,139.592L153.59,139.595C153.576,139.62 153.56,139.645 153.544,139.668C153.285,140.095 153.215,140.588 153.315,141.044C153.415,141.498 153.683,141.917 154.096,142.194C154.122,142.208 154.144,142.224 154.167,142.239C154.592,142.499 155.084,142.566 155.54,142.467L155.588,142.458C156.037,142.348 156.447,142.072 156.715,141.652L156.715,141.653L158.445,138.954C158.716,138.528 159.283,138.403 159.709,138.676C160.135,138.948 160.26,139.515 159.989,139.941L158.266,142.629L158.26,142.639L156.756,144.986L156.754,144.985C156.682,145.099 156.583,145.198 156.46,145.272L146.699,151.251ZM154.552,144.296C154.066,144.22 153.586,144.043 153.148,143.763L153.144,143.761C152.288,143.211 151.732,142.359 151.529,141.43C151.511,141.35 151.496,141.269 151.484,141.188C151.403,141.21 151.323,141.231 151.241,141.249L151.241,141.247L151.238,141.248C150.312,141.45 149.309,141.302 148.454,140.756L148.451,140.753C147.593,140.204 147.038,139.354 146.834,138.428L146.837,138.427L146.836,138.424C146.819,138.343 146.803,138.262 146.791,138.18C146.71,138.204 146.629,138.224 146.547,138.242L146.547,138.24L146.544,138.241C145.618,138.443 144.614,138.295 143.759,137.747C143.317,137.464 142.956,137.103 142.682,136.691L141.521,146.438L146.181,149.424L154.552,144.296Z",2,"fill","rgb(108,117,125)"],["d","M156.693,112.159C160.838,108.452 163.61,112.814 166.131,108.134C161.973,110.229 158.391,105.077 156.693,112.159ZM160.574,135.919L147.338,127.44C147.338,127.44 146.828,122.337 148.677,119.181C150.527,116.023 152.395,115.614 152.395,115.614C152.395,115.614 151.437,117.042 151.367,118.169C151.295,119.295 151.644,120.04 151.644,120.04C151.644,120.04 152.5,115.247 158.257,113.987C163.25,112.893 170.175,113.301 169.965,106.601C173.638,114.49 171.597,126.759 164.808,130.204C166.163,129.998 168.181,129.844 168.991,127.593C168.517,131.784 165.42,135.667 160.574,135.919Z",2,"fill","rgb(108,117,125)"],["d","M397.524,135.646C300.086,135.646 221.097,214.635 221.097,312.073C221.097,409.446 300.151,488.5 397.524,488.5C494.896,488.5 573.951,409.446 573.951,312.073C573.951,291.221 570.254,270.534 563.032,250.972L550.284,255.678C556.95,273.733 560.361,292.827 560.361,312.073C560.361,401.945 487.396,474.911 397.524,474.911C307.651,474.911 234.686,401.945 234.686,312.073C234.686,222.14 307.591,149.235 397.524,149.235L397.524,135.646Z",2,"fill","rgb(108,117,125)"],[1,"footer-copyright-text","text-muted"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"span",3),s.O4$(),s.TgZ(4,"svg",4),s.TgZ(5,"g",5),s.TgZ(6,"g",6),s._UZ(7,"path",7),s._UZ(8,"path",8),s.qZA(),s._UZ(9,"path",9),s.qZA(),s.qZA(),s.qZA(),s.kcU(),s.TgZ(10,"span",10),s._uU(11," Blazeforms \xa9 2021 Metagauss, Inc. "),s.qZA(),s.qZA(),s.qZA(),s.qZA())},styles:[""]}),t})();function J(t,e){if(1&t){const t=s.EpF();s.ynx(0),s.TgZ(1,"div"),s.TgZ(2,"div",13),s.TgZ(3,"div",14),s._UZ(4,"img",15),s.qZA(),s.TgZ(5,"div",16),s.TgZ(6,"span",17),s._uU(7),s.qZA(),s.qZA(),s.TgZ(8,"div",18),s.TgZ(9,"i",19),s._uU(10," open_in_browser "),s.qZA(),s.TgZ(11,"a",20),s.TgZ(12,"i",19),s._uU(13,"edit"),s.qZA(),s.qZA(),s.TgZ(14,"i",21),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().deleteUserOrganization(e)}),s._uU(15,"delete"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.BQk()}if(2&t){const t=e.$implicit,i=s.oxw();let o;s.xp6(1),s.Udp("display",0===i.searchedString.length||null!=t.name&&null!=(o=t.name.toLowerCase())&&o.includes(null==i.searchedString?null:i.searchedString.toLowerCase())?"block":"none"),s.xp6(6),s.Oqu(t.name)}}const F=[{path:"",component:(()=>{class t{constructor(t,e,i){this.http=t,this.store=e,this.modalService=i,this.searchedString="",this.totalNum=0,this.pageDetail={pageNumber:1,pageSize:14},this.organizationLists=[],this.totalOrgCount=0,this.scrollCheck=!1,this.userInfoSubscription$=this.store.select(r.S8).subscribe(t=>{this.userInfo=t,this.getUserOrganizationsList()})}ngOnInit(){}getUserOrganizationsList(){const t=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.http.call("getUserWorkSpacesForSuperMaster","POST",t).subscribe(t=>{this.totalOrgCount=t.total;for(let e=0;e<this.pageDetail.pageSize;++e)t.res[e]&&this.organizationLists.push(t.res[e])})}deleteUserOrganization(t){const e=this.modalService.open(a,{size:"lg"});e.componentInstance.message=`Are you sure you want to delete organization ${t.name}`,e.componentInstance.modalName="Delete Organization",e.result.then(e=>{"deleteWorkSpace"===e&&this.http.call("deleteWorkSpace","POST",{Id:t.id,IsActive:!1,IsDeleted:!0,UserId:t.userId}).subscribe(t=>{1==t&&this.getUserOrganizationsList()})},t=>{console.log("Dismissed ")})}searchWorkSpace(t){this.searchedString=t;const e=Object.assign({Id:this.userInfo.Id,SearchKeyword:this.searchedString},this.pageDetail);this.http.call("getUserWorkSpacesForSuperMaster","POST",e).pipe((0,c.b)(500),(0,d.U)(t=>{this.totalOrgCount=t.total;for(let e=0;e<this.pageDetail.pageSize;++e)t.res[e]&&this.organizationLists.push(t.res[e])}))}onScroll(){this.pageDetail.pageNumber++,this.getUserOrganizationsList(),this.organizationLists.length>=this.totalOrgCount&&(this.scrollCheck=!0)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(g.O),s.Y36(h.yh),s.Y36(l.FF))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-work-spaces"]],decls:18,vars:5,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"organizations-container","container"],[1,"search-wrapper"],[1,"form-group","has-search","mb-5"],["type","text","placeholder","Search Organization",1,"form-control",3,"ngModel","ngModelChange"],[1,"organization-controls-wrapper","d-flex","flex-wrap","justify-content-between","mb-5"],[1,"add-organization-wrapper"],["href","/#/manage-work-spaces"],["type","button","id","add-form","data-toggle","modal",1,"btn","btn-bf","btn-sm"],[1,"organization-wrapper","row","mb-5"],["infiniteScroll","",1,"organization-list","col-md-12","border","rounded",3,"infiniteScrollDistance","infiniteScrollThrottle","infiniteScrollDisabled","scrolled"],[4,"ngFor","ngForOf"],[1,"organization-list-item","row","p-3","border-bottom"],[1,"organization-img-wrapper","col-md-1"],["src","assets/images/pepsi.png","alt","","title","","width","30","height","30",1,"workspace-img"],[1,"organization-title-wrapper","col-md-8"],["clss","organization-name"],[1,"organization-actions-wrapper","col-md-3","d-flex","d-wrap","justify-content-end"],[1,"material-icons-round","mr-3","text-dark"],["href","manage-organization.html"],["data-toggle","modal","data-target","#delete-organization-modal",1,"material-icons-round","text-dark",3,"click"]],template:function(t,e){1&t&&(s._UZ(0,"app-work-spaces-header"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.TgZ(3,"h2"),s._uU(4,"Organizations"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(5,"div",2),s.TgZ(6,"div",3),s.TgZ(7,"div",4),s.TgZ(8,"input",5),s.NdJ("ngModelChange",function(t){return e.searchedString=t})("ngModelChange",function(t){return e.searchWorkSpace(t)}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(9,"div",6),s.TgZ(10,"div",7),s.TgZ(11,"a",8),s.TgZ(12,"button",9),s._uU(13,"Add Organization"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div",10),s.TgZ(15,"div",11),s.NdJ("scrolled",function(){return e.onScroll()}),s.YNc(16,J,16,3,"ng-container",12),s.qZA(),s.qZA(),s.qZA(),s._UZ(17,"app-work-spaces-footer")),2&t&&(s.xp6(8),s.Q6J("ngModel",e.searchedString),s.xp6(7),s.Q6J("infiniteScrollDistance",1)("infiniteScrollThrottle",50)("infiniteScrollDisabled",e.scrollCheck),s.xp6(1),s.Q6J("ngForOf",e.organizationLists))},directives:[u,p.Fj,p.JJ,p.On,V,o.sg,Y],styles:[""]}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.Bz.forChild(F)],n.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,B,p.u5,l.IJ,E]]}),t})()}}]);