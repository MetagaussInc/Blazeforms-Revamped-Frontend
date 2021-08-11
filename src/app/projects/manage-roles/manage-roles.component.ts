import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { FormControl, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

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
  public roledataId: any = null;
  public rolePermissionData: any;
  public roleDetails: any[] = [];
  public isFormSubmitted: boolean = false;

  roleAddForm = new FormGroup({
    Name: new FormControl('', [Validators.required],
      this.validateRoleNameViaServer.bind(this)
    ),
    Description: new FormControl(''),
    IsActive: new FormControl(''),
  });

  constructor(private http: HttpService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.SuperUserId = userInfo.Id;
    })
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        let orgName: any = params.get('orgName');
        let roleId: any = params.get('roleId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.organizationName = decodeURIComponent(orgName);
        this.roledataId = decodeURIComponent(roleId);
        this.getRoleDetail();
      }
    });
  }

  ngOnInit(): void {
  }

  getRoleDetail(){
    const obj = {
      Id: this.roledataId,
      UserId: this.SuperUserId
    }
    this.http.call('getRoleDetails', 'POST', obj).subscribe(response => {
      this.rolePermissionData = response;
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
        this.roleDetails.push({
          'RoleId': this.roledataId, 'ModuleId': data.moduleId, 'Permissions': permissions, 'CreatedBy': this.SuperUserId, 'ModifiedBy': this.SuperUserId
        });
      }
    }

    const obj = {
      ...JSON.parse(JSON.stringify(this.roleAddForm.value)),
      CreatedBy: this.SuperUserId,
      IsDeleted: false,
      WorkSpaceId: "TXYu0NjodAYzBODQlLqdmg==",
      isEditable: true,
      modulePermission: this.roleDetails
    }
    if(this.roledataId){
      obj.Id = this.roledataId;
      obj.isActiveAssignedUser = true;
    }
    this.http.call('saveRole', 'POST', obj).subscribe(response => {
      if(response.id){
        this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'edit', id: this.organizationId, orgUserId: this.organizationUserId, orgName: this.organizationName}});
      }
    });

  }

  get Name() { return this.roleAddForm.get('Name'); }
  get Description() { return this.roleAddForm.get('Description'); }
  get IsActive() { return this.roleAddForm.get('IsActive'); }
  get f() { return this.roleAddForm.controls; }

}
