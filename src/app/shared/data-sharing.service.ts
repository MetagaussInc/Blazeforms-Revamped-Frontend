import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo, userPlanDetail, userWorkspaceLists } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  public Modules = {
    User: "User",
    WorkSpace: "Organizations",
    Role: "Role",
    Forms: 'Forms',
    Folder: 'Folder',
    Plan: "Plan",
  }
  public _permissions: any;
  public permissions: any;
  private userInfoSubscription$: any;
  public userInfo: any;
  public selectedWorkspaceId: any;
  public userId: any;
  public userWorkspaceList: any;
  public billingPageData: any;
  public activeTabId = 1;

  constructor(private store: Store, private http: HttpService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      if(this.userInfo){
        this.userId = this.userInfo.Id;
        this.selectedWorkspaceId = this.userInfo.WorkspaceDetail.Id;
      }
    });
  }

  SetUserInfoData(userInfo: any){
    if(!this.userInfo){
      this.userInfo = userInfo;
    }
  }

  GetPermissions(val: any) {
    this._permissions = {};
    if(this.userInfo){
      this.permissions = this.userInfo.UserPermission.RoleModuleList;
      if (this.permissions != null && this.permissions != undefined) {
        this.permissions.forEach((value: any) => {
          if (value.ModuleName != undefined && value.ModuleName != null) {
            if (value.ModuleName == val) {
              value.ModulePermissionList.forEach((per: any) => {
                if (per.PermissionName == "View") {
                  this._permissions.canView =  per.IsActive;
                }
                if (per.PermissionName == "Edit") {
                  this._permissions.canEdit =  per.IsActive;
                }
                if (per.PermissionName == "Delete") {
                  this._permissions.canDelete =  per.IsActive;
                }
              });
            }
          }
          else if (value.moduleName != undefined && value.moduleName != null) {
            if (value.moduleName == val) {
              value.modulePermissionList.forEach((per: any) => {
                if (per.permissionName == "View") {
                  this._permissions.canView = per.IsActive;
                }
                if (per.permissionName == "Edit") {
                  this._permissions.canEdit = per.IsActive;
                }
                if (per.permissionName == "Delete") {
                  this._permissions.canDelete = per.IsActive;
                }
              });
            }
          }
        });
      }
    }
    return this._permissions;
  }

  IsSuperAdmin(){
    if(this.userInfo){
      return this.userInfo.IsSuperAdmin;
    }
    return false;
  }

  GetUserId(){
    return this.userId;
  }

  GetLoggedInUserData(){
    return this.userInfo;
  }

  GetUserWorkspaceList(){
    if(this.userWorkspaceList){
      return this.userWorkspaceList;
    }
    if(this.userInfo){
      let workspaceDetails = this.userInfo.WorkspaceDetail;
      this.userWorkspaceList = {id: workspaceDetails.Id, name: workspaceDetails.Name, userId: this.userInfo.Id};
      return this.userWorkspaceList;
    }
    return null;
  }

  GetSelectedWorkspaceId(){
    return this.selectedWorkspaceId;
  }

  GetUserWorkSpace(){
    this.store.select(userWorkspaceLists).subscribe(workspacesList => {
      return workspacesList;
    });
  }

  GetWorkspacePlanDetail(){
    this.store.select(userPlanDetail).subscribe(planInfo => {
      return planInfo;
    });
  }

  SetUserWorkspace(workspace: any){
    this.userWorkspaceList = {id: workspace.id, name: workspace.name, userId: workspace.userId};
  }

  SetBillingPageData(data: any){
    this.billingPageData = data;
  }

  GetBillingpageData(){
    return this.billingPageData;
  }

  SetActiveTabId(id: number){
    this.activeTabId = id;
  }

  GetActiveTabId(){
    return this.activeTabId;
  }

  GetPageLoader(){
    let loader = `<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>`;
    return loader;
  }

}