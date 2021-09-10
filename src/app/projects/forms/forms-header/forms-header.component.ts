import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { Store } from '@ngrx/store';
import { selectUserInfo, userPlanDetail, userWorkspaceLists } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { storageCountFormatter } from 'src/app/shared/storage-count.pipe';
import { ActivatedRoute, NavigationEnd, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { updateCurrentWorkSpaceDetail, updateUserPlanDetail, userLogout } from 'src/app/+state/user/user.actions';
import { filter, map } from 'rxjs/operators';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-forms-header',
  templateUrl: './forms-header.component.html',
  styleUrls: ['./forms-header.component.scss']
})
export class FormsHeaderComponent implements OnInit {
  public formPermission = {canView: false, canEdit: false, canDelete: false};
  public organizationPermission = {canView: false, canEdit: false, canDelete: false};
  public planPermission = {canView: false, canEdit: false, canDelete: false};
  public userId: any = null;
  public userWorkspaceList: any;
  private userInfoSubscription$: any;
  public userInfo: any;
  public selectedWorkspaceId: any;
  public workSpacePlanDetail: any;
  public isSuperAdmin: boolean = false;
  public userWorkspaceLists: any;
  public calulateUites = storageCountFormatter;
  private redirectToWorkSpace: boolean = false;
  public hideDropdown = false;
  public profileImageSrc: any;
  private eventUrl$: any;
  public currentUrl: any;
  public notifications: any;
  public hideStatus: boolean = false;
  public organizationLogo: any;

  constructor(private route: ActivatedRoute ,private dataSharingService: DataSharingService, private store: Store, private http: HttpService, private router: Router, private toastService: ToastService) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
    ).subscribe((res: ActivatedRoute) => {
      this.redirectToWorkSpace = !this.router.url.includes('forms')
      this.hideDropdown = this.router.url.includes('form-builder')
    });
    
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      if(this.userInfo){
        this.getNotification(this.userInfo);
        if(this.userInfo.ProfileImage){
          this.profileImageSrc = `data:image/JPEG;base64,${this.userInfo.ProfileImage}`;
        }
        if(this.userInfo.Logo){
          this.organizationLogo = `data:image/${this.userInfo.LogoExt};base64,${this.userInfo.Logo}`;
        }        
        this.dataSharingService.SetUserInfoData(this.userInfo);
        this.selectedWorkspaceId    = this.userInfo.WorkspaceDetail.Id;
        this.formPermission         = this.dataSharingService.GetPermissions('Forms');
        this.organizationPermission = this.dataSharingService.GetPermissions('Organizations');
        this.planPermission         = this.dataSharingService.GetPermissions('Plan');
        this.userId                 = this.dataSharingService.GetUserId();
        this.userWorkspaceList      = this.dataSharingService.GetUserWorkspaceList();
        this.isSuperAdmin           = this.userInfo.IsSuperAdmin;
        this.store.select(userPlanDetail).subscribe(planInfo => {
          this.workSpacePlanDetail = planInfo;
        });
      }
      else{
        this.userId = this.selectedWorkspaceId = this.userWorkspaceList = this.workSpacePlanDetail = '';
        this.isSuperAdmin = false;
        this.formPermission = {canView: false, canEdit: false, canDelete: false};
        this.organizationPermission = {canView: false, canEdit: false, canDelete: false};
        this.planPermission = {canView: false, canEdit: false, canDelete: false};
        this.organizationLogo = '';
      }
    });

    this.eventUrl$ = this.router.events.subscribe((event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        this.currentUrl = event.url;
        // check for Manage work space pages
        if(event.url.search('/manage-work-spaces') > -1){
          this.currentUrl = '/manage-work-spaces';
        }
        // check for Manage role pages
        if(event.url.search('/manage-roles') > -1){
          this.currentUrl = '/manage-roles';
        }
        // check for form builder
        if(event.url.search('/form-builder') > -1){
          this.currentUrl = '/form-builder';
        }
      }
    });
            
    this.store.select(userWorkspaceLists).subscribe(workspacesList => {
      if(workspacesList){
        this.userWorkspaceLists = Array.from(Object.values(workspacesList));
      }
    });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
  ngOnInit(): void {}

  changeWorkSpace(workspace: any){
    this.userWorkspaceList = {id: workspace.id, name: workspace.name, userId: workspace.userId};
    this.dataSharingService.SetUserWorkspace(workspace);
    const obj = {
      UserId: this.userId,
      WorkspaceId: workspace.id,
    }
    this.http.call('getUserPlanDetailByWorkspace', 'POST', obj).subscribe(res => {
      if(res){
        const props = {
          mappingKey: 'getUserPlanDetailByWorkspace',
          payload: res
        }
        this.store.dispatch(updateUserPlanDetail({props}));
        this.store.dispatch(updateCurrentWorkSpaceDetail({props: {WorkSpaceId: workspace.id,WorkSpaceName: workspace.name}}))

        let orgId = workspace.id;
        let orgName = workspace.name;
        let orgUserId = workspace.userId;
        if (this.redirectToWorkSpace) {
          this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'edit', id: encodeURIComponent(orgId), orgUserId: encodeURIComponent(orgUserId), orgName: encodeURIComponent(orgName)}});
        }
      }
    });
  }

  UpgradePlan(workspace: any){}

  orgUserLogout(){
    this.store.dispatch(userLogout());
    this.toastService.showSuccess('You Are Successfully Logged Out!');
    this.router.navigate(['/user/login']);
  }
  viewPublish(item: any) {
    console.log(item.entryUrl.split('#')[1]);
    this.router.navigate([item.entryUrl.split('#')[1].replace('BlazeForms', 'blazeforms')])
  }
  getNotification(userInfo: any) {
    this.http.call('GetNotifications', 'POST', {
      ToUserId: userInfo.Id}).subscribe(res => {
        this.notifications = res;
    })
  }

  toggleStatusBar(){
    this.hideStatus = !this.hideStatus;
  }

  goToSubscribtion(){
    let wsp = this.dataSharingService.GetUserWorkspaceList();
    if(wsp){
      this.dataSharingService.SetActiveTabId(6);
      this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'edit', id: encodeURIComponent(wsp.id), orgUserId: encodeURIComponent(wsp.userId), orgName: encodeURIComponent(wsp.name)}});
    }
  }

  getDate(date: any) {
    return new Date(date);
  }

  getFormID(url: any, id: any) {
    return window.location.href?.split('#')?.[0] + `#/${url?.split('#')?.[1]?.replace('BlazeForms', 'blazeforms')}`
  }
  getNotificationsCount(notifications: any) {
    let count = 0;
    notifications?.map((x: any) => {
      if (!x.isRead) {
        count = count + 1;
      }
    })
    return count;
  }

}