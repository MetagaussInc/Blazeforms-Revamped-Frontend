(self.webpackChunkblaze_forms=self.webpackChunkblaze_forms||[]).push([[619],{80619:(e,i,t)=>{"use strict";t.r(i),t.d(i,{ManageWorkflowModule:()=>g});var Z=t(38583),d=t(67310),o=t(14065),a=t(37716);const r=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-manage-workflow"]],decls:162,vars:0,consts:[[1,"hero-banner","container-fluid","py-4","bg-light","mb-4","border-bottom"],[1,"container","py-4"],[1,"Workflow-container","container"],[1,"row"],[1,"col-md-12"],[1,"card","workflow-box"],[1,"card-header"],[1,"card-body"],[1,"card-text","d-flex","h6","info-box-text"],[1,"material-icons-outlined","mr-2"],[1,"row","mt-3"],[1,"form-group"],["id","text1","name","text1","type","text","placeholder","Enter name or email of users to add as owner",1,"form-control"],[1,"added-users-list","col-md-12","border","rounded"],[1,"added-user-item","row","p-3","border-bottom"],[1,"added-user-title-wrapper","col-md-1"],["src","images/user.jpg","alt","","title","","width","40","height","40",1,"user-profile-img","rounded-circle"],[1,"added-user-title-wrapper","col-md-6"],["clss","added-user-name"],[1,"text-muted"],[1,"added-user-title-wrapper","col-md-3"],[1,"badge","badge-pill","badge-success","py-2","px-3","mt-2"],[1,"added-user-actions-wrapper","col-md-2","d-flex","d-wrap","justify-content-end"],["title","Delete","role","button",1,"material-icons-round","text-dark"],[1,"card-text"],[1,"text-center"],["href","#","data-toggle","collapse","data-target","#add-user-level-block","aria-expanded","false","aria-controls","add-user-level-block",1,"btn","btn-primary","btn-bf"],[1,"col"],["id","add-user-level-block",1,"collapse","multi-collapse","card"],[1,"col-md-8"],["id","text1","name","text1","type","text",1,"form-control"],[1,"col-md-4","text-right"],["title","Add Participants","role","button",1,"material-icons","collapsed","mr-2"],["title","Drag n Drop","role","button",1,"material-icons","mr-2"],["title","Edit","role","button",1,"material-icons","mr-2"],["title","Delete","role","button",1,"material-icons","mr-2"],["role","button",1,"material-icons-outlined","mr-1"],["href","#","data-target","#",1,"btn","btn-primary","btn-bf"]],template:function(e,i){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3,"Workflow"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"div",3),a.TgZ(6,"div",4),a.TgZ(7,"div",5),a.TgZ(8,"h5",6),a._uU(9,"Invite Users"),a.qZA(),a.TgZ(10,"div",7),a.TgZ(11,"p",8),a.TgZ(12,"span",9),a._uU(13," info "),a.qZA(),a._uU(14," You may add any user within the organization or invite user outside the organization by entering their emails below. Invited users will get email notification to activate themselves. Users added as owners has full rights to edit workflow, modify levels, assign participants and design workflow forms."),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(15,"div",10),a.TgZ(16,"div",4),a.TgZ(17,"div",5),a.TgZ(18,"h5",6),a._uU(19,"Define owners for this workflow"),a.qZA(),a.TgZ(20,"div",7),a.TgZ(21,"div",11),a._UZ(22,"label"),a._UZ(23,"input",12),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(24,"div",10),a.TgZ(25,"div",4),a.TgZ(26,"h4"),a._uU(27,"Added Users"),a.qZA(),a.TgZ(28,"div",13),a.TgZ(29,"div",14),a.TgZ(30,"div",15),a._UZ(31,"img",16),a.qZA(),a.TgZ(32,"div",17),a.TgZ(33,"div",18),a._uU(34,"John Doe"),a.qZA(),a.TgZ(35,"span",19),a.TgZ(36,"i"),a._uU(37,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(38,"div",20),a.TgZ(39,"span",21),a._uU(40,"Activated"),a.qZA(),a.qZA(),a.TgZ(41,"div",22),a.TgZ(42,"i",23),a._uU(43,"delete"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(44,"div",14),a.TgZ(45,"div",15),a._UZ(46,"img",16),a.qZA(),a.TgZ(47,"div",17),a.TgZ(48,"div",18),a._uU(49,"John Doe"),a.qZA(),a.TgZ(50,"span",19),a.TgZ(51,"i"),a._uU(52,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(53,"div",20),a.TgZ(54,"span",21),a._uU(55,"Activated"),a.qZA(),a.qZA(),a.TgZ(56,"div",22),a.TgZ(57,"i",23),a._uU(58,"delete"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(59,"div",14),a.TgZ(60,"div",15),a._UZ(61,"img",16),a.qZA(),a.TgZ(62,"div",17),a.TgZ(63,"div",18),a._uU(64,"John Doe"),a.qZA(),a.TgZ(65,"span",19),a.TgZ(66,"i"),a._uU(67,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(68,"div",20),a.TgZ(69,"span",21),a._uU(70,"Activated"),a.qZA(),a.qZA(),a.TgZ(71,"div",22),a.TgZ(72,"i",23),a._uU(73,"delete"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(74,"div",14),a.TgZ(75,"div",15),a._UZ(76,"img",16),a.qZA(),a.TgZ(77,"div",17),a.TgZ(78,"div",18),a._uU(79,"John Doe"),a.qZA(),a.TgZ(80,"span",19),a.TgZ(81,"i"),a._uU(82,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(83,"div",20),a.TgZ(84,"span",21),a._uU(85,"Activated"),a.qZA(),a.qZA(),a.TgZ(86,"div",22),a.TgZ(87,"i",23),a._uU(88,"delete"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(89,"div",14),a.TgZ(90,"div",15),a._UZ(91,"img",16),a.qZA(),a.TgZ(92,"div",17),a.TgZ(93,"div",18),a._uU(94,"John Doe"),a.qZA(),a.TgZ(95,"span",19),a.TgZ(96,"i"),a._uU(97,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(98,"div",20),a.TgZ(99,"span",21),a._uU(100,"Activated"),a.qZA(),a.qZA(),a.TgZ(101,"div",22),a.TgZ(102,"i",23),a._uU(103,"delete"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(104,"div",14),a.TgZ(105,"div",15),a._UZ(106,"img",16),a.qZA(),a.TgZ(107,"div",17),a.TgZ(108,"div",18),a._uU(109,"John Doe"),a.qZA(),a.TgZ(110,"span",19),a.TgZ(111,"i"),a._uU(112,"brand.blazeform@blazeform.com"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(113,"div",20),a.TgZ(114,"span",21),a._uU(115,"Activated"),a.qZA(),a.qZA(),a.TgZ(116,"div",22),a.TgZ(117,"i",23),a._uU(118,"delete"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(119,"div",10),a.TgZ(120,"div",4),a.TgZ(121,"div",5),a.TgZ(122,"h5",6),a._uU(123,"Define various levels to this workflow"),a.qZA(),a.TgZ(124,"div",7),a.TgZ(125,"p",24),a._uU(126," You may add any user within the organization or invite user outside the organization by entering their emails below. Invited users will get email notification to activate themselves. Users added as owners has full rights to edit workflow, modify levels, assign participants and design workflow forms."),a.qZA(),a.TgZ(127,"div",25),a.TgZ(128,"a",26),a._uU(129,"Add Levels"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(130,"div",10),a.TgZ(131,"div",27),a.TgZ(132,"div",28),a.TgZ(133,"h5",6),a._uU(134,"Added Levels"),a.qZA(),a.TgZ(135,"div",7),a.TgZ(136,"div",3),a.TgZ(137,"div",29),a.TgZ(138,"div",11),a._UZ(139,"input",30),a.qZA(),a.qZA(),a.TgZ(140,"div",31),a.TgZ(141,"span",32),a._uU(142,"person_add"),a.qZA(),a.TgZ(143,"span",33),a._uU(144,"open_with"),a.qZA(),a.TgZ(145,"span",34),a._uU(146,"edit"),a.qZA(),a.TgZ(147,"span",35),a._uU(148,"delete"),a.qZA(),a.TgZ(149,"span",36),a._uU(150," expand_more "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(151,"div",3),a.TgZ(152,"div",4),a.TgZ(153,"div",5),a.TgZ(154,"h5",6),a._uU(155,"Build your form"),a.qZA(),a.TgZ(156,"div",7),a.TgZ(157,"p",24),a._uU(158," You may add any under within the organization or invite user outside the organization by entering their emails below. Invited users will get email notification to activate theirselves. Users added as owners has full rights to edit workflow, modify levels, assign participants and design workflow forms."),a.qZA(),a.TgZ(159,"div",25),a.TgZ(160,"a",37),a._uU(161,"Build"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA())},styles:[""]}),e})(),canActivate:[o.c]}];let n=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[d.Bz.forChild(r)],d.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[Z.ez,n]]}),e})()}}]);