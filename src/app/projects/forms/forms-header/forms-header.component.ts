import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';

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

  constructor(private dataSharingService: DataSharingService, private store: Store, private http: HttpService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      if(this.userInfo){
        this.dataSharingService.SetUserInfoData(this.userInfo);
        this.selectedWorkspaceId = this.userInfo.WorkspaceDetail.Id;
        this.formPermission = this.dataSharingService.GetPermissions('Forms');
        this.organizationPermission = this.dataSharingService.GetPermissions('Organizations');
        this.planPermission = this.dataSharingService.GetPermissions('Plan');
        this.userId = this.dataSharingService.GetUserId();
        this.userWorkspaceList = this.dataSharingService.GetUserWorkspaceList();
        this.isSuperAdmin = this.userInfo.IsSuperAdmin;
        this.onInitialization();
      }
    });
  }

  ngOnInit(): void {}

  onInitialization(){
    if(this.userId){
      this.GetWorkspacePlanDetail();
      this.dataSharingService.GetUserWorkSpace();
    }
  }

  GetWorkspacePlanDetail(){
    const userPlan = {
      UserId: this.userId,
      WorkspaceId: this.selectedWorkspaceId,
    }
    this.http.call('getUserPlanDetailByWorkspace', 'POST', userPlan).subscribe(response => {
      console.log(response);
      this.workSpacePlanDetail = response;
    });
  }

}
