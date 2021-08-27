import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { FormControl, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { DataSharingService } from '../../shared/data-sharing.service';
import { Location } from '@angular/common';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {

  public organizationId: any;
  public organizationUserId: any;
  public organizationName: any;
  private userInfoSubscription$: any;
  public userInfo: any;
  public SuperUserId: any;
  public roledataId: any;
  public rolePermissionData: any;
  public roleDetails: any[] = [];
  public isFormSubmitted: boolean = false;
  public rolePermissions: any;

  roleAddForm = new FormGroup({
    Name: new FormControl('', [Validators.required],
      this.validateRoleNameViaServer.bind(this)
    ),
    Description: new FormControl(''),
    IsActive: new FormControl(''),
  });

  constructor(private http: HttpService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute, private dataSharingService: DataSharingService, private location: Location, private toastService: ToastService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.SuperUserId = userInfo.Id;
    });
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(!params.has('action') || !params.has('id') || !params.has('orgUserId') || !params.has('orgName')){
        this.router.navigate(['/work-spaces']);
      }
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        let orgName: any = params.get('orgName');
        let roleId: any = params.get('roleId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.organizationName = decodeURIComponent(orgName);
        if(roleId){
          this.roledataId = decodeURIComponent(roleId);
        }
        this.getRoleDetail();
        this.rolePermissions = this.dataSharingService.GetPermissions("Role");
      }
    });
  }

  ngOnInit(): void {
  }

  getRoleDetail(){
    let obj = {};
    if(!this.roledataId){
      obj = {
        UserId: this.SuperUserId
      }
    }
    else{
      console.log("Edit Role")
      console.log(this.roledataId);
      obj = {
        Id: this.roledataId,
        UserId: this.SuperUserId
      }
    }
    this.http.call('getRoleDetails', 'POST', obj).subscribe(response => {
      this.rolePermissionData = response;
      if(this.roledataId){
        this.roleAddForm.patchValue({
          Name: this.rolePermissionData.name,
          Description: this.rolePermissionData.description,
          IsActive: this.rolePermissionData.isActive,
        });
      }
    });
  }

  validateRoleNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('validateRoleName', 'POST', { Name: value, WorkSpaceId: this.SuperUserId })
      .pipe(debounceTime(1000),
        map((response: any) => {
          if (response.id) {
            return {
              isExists: true
            };
          }
          return null;
        }
      )
    )
  }

  submit(){
    this.isFormSubmitted = true;
    let roleModuleList = this.rolePermissionData.roleModuleList;
    if(roleModuleList.length > 0){
      for (let data of roleModuleList) {
        let permissions: any[] = [];
        for (let item of data.modulePermissionList) {
          permissions.push({
            'PermissionId': item.permissionId, 'IsSelected': item.isActive
          });
        }
        if(this.roledataId !== null){
          this.roleDetails.push({
            'ModuleId': data.moduleId, 'Permissions': permissions, 'CreatedBy': this.SuperUserId, 'ModifiedBy': this.SuperUserId
          });
        }
        else{
          this.roleDetails.push({
            'RoleId': this.roledataId, 'ModuleId': data.moduleId, 'Permissions': permissions, 'CreatedBy': this.SuperUserId, 'ModifiedBy': this.SuperUserId
          });
        }
      }
    }

    let obj = {
      ...JSON.parse(JSON.stringify(this.roleAddForm.value)),
      CreatedBy: this.SuperUserId,
      IsDeleted: false,
      WorkSpaceId: this.organizationId,
      isEditable: true,
      modulePermission: this.roleDetails
    }
    if(this.roledataId && this.roledataId !== null){
      let obj = {
        ...JSON.parse(JSON.stringify(this.roleAddForm.value)),
        CreatedBy: this.SuperUserId,
        IsDeleted: false,
        WorkSpaceId: this.organizationId,
        isEditable: true,
        modulePermission: this.roleDetails,
        Id: this.roledataId,
        isActiveAssignedUser: true
      }
    }
    this.http.call('saveRole', 'POST', obj).subscribe(response => {
      if(response.id){
        if(this.roledataId){
          this.toastService.showSuccess('Updated Successfully!');
        }
        else{
          this.toastService.showSuccess('Saved Successfully!');
        }
        this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'edit', id: this.organizationId, orgUserId: this.organizationUserId, orgName: this.organizationName}});
      }
    });

  }

  goBack() {
    this.location.back();
  }

  get Name() { return this.roleAddForm.get('Name'); }
  get Description() { return this.roleAddForm.get('Description'); }
  get IsActive() { return this.roleAddForm.get('IsActive'); }
  get f() { return this.roleAddForm.controls; }

}
