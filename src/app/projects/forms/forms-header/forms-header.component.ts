import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { Store } from '@ngrx/store';
import { selectUserInfo, userPlanDetail, userWorkspaceLists } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { storageCountFormatter } from 'src/app/shared/storage-count.pipe';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { updateCurrentWorkSpaceDetail, updateUserPlanDetail } from 'src/app/+state/user/user.actions';
import { filter, map } from 'rxjs/operators';

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
  
  constructor(private route: ActivatedRoute ,private dataSharingService: DataSharingService, private store: Store, private http: HttpService, private router: Router) {
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
        this.store.select(userWorkspaceLists).subscribe(workspacesList => {
          if(workspacesList){
            this.userWorkspaceLists = Array.from(Object.values(workspacesList));
          }
        });
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
    this.userWorkspaceList = {id: workspace.id, name: workspace.name};
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

  UpgradePlan(workspace: any){

  }

}
