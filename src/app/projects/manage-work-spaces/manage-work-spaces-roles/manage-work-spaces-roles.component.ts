import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteRoleModalComponent } from './delete-role-modal/delete-role-modal.component';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-manage-work-spaces-roles',
  templateUrl: './manage-work-spaces-roles.component.html',
  styleUrls: ['./manage-work-spaces-roles.component.scss']
})
export class ManageWorkSpacesRolesComponent implements OnInit {

  searchedString = '';
  totalNum = 0;
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  private userInfoSubscription$: any;
  public userInfo: any;
  public accountRolesLists: any[] = [];
  public totalRolesCount = 0;
  public scrollCheck: boolean = false;
  public organizationId: any;
  public organizationUserId: any;
  public SuperUserId: any;
  public action: any;
  public organizationName: any;
  public rolePermissions: any;

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private Activatedroute: ActivatedRoute, private dataSharingService: DataSharingService, private toastService: ToastService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.SuperUserId = userInfo.Id;
    })
    
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        let orgName: any = params.get('orgName');
        this.action = params.get('action');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.organizationName = decodeURIComponent(orgName);
      }
    });
    this.rolePermissions = this.dataSharingService.GetPermissions("Role");
    this.getAccountRolesData();
  }

  ngOnInit(): void {
  }

  getAccountRolesData(){
    const accountRoleData = {
      WorkSpaceId: this.userInfo.WorkspaceId,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    this.http.call('getRoles', 'POST', accountRoleData).subscribe(response => {
      this.totalRolesCount = response.total;
      for (let i = 0; i < this.pageDetail.pageSize; ++i) {
        if(response.res[i]){
          this.accountRolesLists.push(response.res[i]);
        }
      }
    });
  }

  deleteRole(role: any){
    const modalRef: any = this.modalService.open(DeleteRoleModalComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete role ${role.name}`;      
    modalRef.componentInstance.modalName = 'Delete Role'; 
    modalRef.result.then((result: any) => {
      if (result === 'deleteRole') {
        const workdata = {
          Id: role.id,
          ModifiedBy: this.SuperUserId,
        }
        this.http.call('deleteRole', 'POST', workdata).subscribe(res => {
          if(res){
            this.toastService.showSuccess('Deleted Successfully!');
            this.accountRolesLists = [];
            this.getAccountRolesData();
          }
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  searchRoles(searchedString: any){    
    this.searchedString = searchedString;
  }

  addRole(){
    this.router.navigate(['/manage-roles'], {queryParams: {action: this.action, id: this.organizationId, orgUserId: this.organizationUserId, orgName: this.organizationName}});
  }

  manageRoleData(role: any){
    this.router.navigate(['/manage-roles'], {queryParams: {action: this.action, id: this.organizationId, orgUserId: this.organizationUserId, orgName: this.organizationName, roleId: encodeURIComponent(role.id)}});
  }

}
