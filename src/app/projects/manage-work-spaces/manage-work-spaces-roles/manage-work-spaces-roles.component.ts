import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteRoleModalComponent } from './delete-role-modal/delete-role-modal.component';

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
  public SuperWorkSpaceId: any;

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private Activatedroute: ActivatedRoute) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.SuperWorkSpaceId = userInfo.Id;
    })
    
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
      }
    });

    this.getAccountRolesData();
  }

  ngOnInit(): void {
  }

  getAccountRolesData(){
    const accountRoleData = {
      WorkSpaceId: this.SuperWorkSpaceId,
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
          ModifiedBy: this.SuperWorkSpaceId,
        }
        this.http.call('deleteRole', 'POST', workdata).subscribe(res => {
          if(res){
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

  }

  manageRoleData(role: any){

  }

}
