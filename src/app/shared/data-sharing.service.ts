import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';

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
  private isSuperAdmin: boolean = false;

  constructor(private store: Store) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.isSuperAdmin = this.userInfo.IsSuperAdmin;
    });
  }

  GetPermissions(val: any) {
    this._permissions = {};
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
    return this._permissions;
  }

  IsSuperAdmin(){
    return this.isSuperAdmin;
  }

  GetUserId(){
    return this.userInfo.Id;
  }
}
