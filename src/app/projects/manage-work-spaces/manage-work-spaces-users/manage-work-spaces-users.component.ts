import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { InviteUserModalComponent } from './invite-user-modal/invite-user-modal.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { DataSharingService } from '../../../shared/data-sharing.service';

@Component({
  selector: 'app-manage-work-spaces-users',
  templateUrl: './manage-work-spaces-users.component.html',
  styleUrls: ['./manage-work-spaces-users.component.scss']
})
export class ManageWorkSpacesUsersComponent implements OnInit {

  searchedString = '';
  totalNum = 0;
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  public accountUsersLists: any[] = [];
  public totalUsersCount = 0;
  public scrollCheck: boolean = false;
  public organizationId: any;
  public organizationUserId: any;
  private userInfoSubscription$: any;
  public userInfo: any;
  public userPermissions: any;

  constructor(private http: HttpService, private modalService: NgbModal, private router: Router, private Activatedroute: ActivatedRoute, private store: Store, private dataSharingService: DataSharingService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
    });
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.getAccountUsersData();
      }
    });
    this.userPermissions = this.dataSharingService.GetPermissions("User");
  }

  ngOnInit(): void {
  }

  getAccountUsersData(){
    const accountUserData = {
      Id: this.organizationId,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    this.http.call('getUsersOfWorkspace', 'POST', accountUserData).subscribe(response => {
      this.totalUsersCount = response.total;
      for (let i = 0; i < this.pageDetail.pageSize; ++i) {
        if(response.res[i]){
          this.accountUsersLists.push(response.res[i]);
        }
      }
    });
  }

  inviteUser(){
    let userList: any[] = [];
    this.accountUsersLists.forEach((item) => {
      userList.push(item.email);
    });
    const modalRef: any = this.modalService.open(InviteUserModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'add';
    modalRef.componentInstance.workSpaceId = this.organizationId;
    modalRef.componentInstance.workSpaceUserId = this.organizationUserId;
    modalRef.componentInstance.modalTitle = 'Invite User';
    modalRef.componentInstance.modalButtonTitle = 'Invite';
    modalRef.componentInstance.userList = userList;
    modalRef.result.then((result: any) => {
      if(result == 'getAccountUsersData'){
        this.accountUsersLists = [];
        this.getAccountUsersData();
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  editUser(user: any){
    const modalRef: any = this.modalService.open(InviteUserModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'edit';
    modalRef.componentInstance.workSpaceId = this.organizationId;
    modalRef.componentInstance.workSpaceUserId = this.organizationUserId;
    modalRef.componentInstance.modalTitle = 'Edit User';
    modalRef.componentInstance.modalButtonTitle = 'Save';
    modalRef.componentInstance.data = user;
    modalRef.result.then((result: any) => {
      if(result == 'getAccountUsersData'){
        this.accountUsersLists = [];
        this.getAccountUsersData();
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  deleteUser(user: any){
    const modalRef: any = this.modalService.open(DeleteUserModalComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete user  ${user.email}`;      
    modalRef.componentInstance.modalName = 'Delete User'; 
    modalRef.result.then((result: any) => {
      if (result === 'deleteUser') {
        const workdata = {
          Id: user.id,
          WorkSpaceId: this.organizationId,
        }
        this.http.call('deleteUserFromWorkspace', 'POST', workdata).subscribe(res => {
          if(res == true){
            this.accountUsersLists = [];
            this.getAccountUsersData();
          }
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  searchUsers(searchedString: any){
    this.searchedString = searchedString;
  }

  resendEmail(user: any){
    const userData = {
      CreatedBy: this.userInfo.Id,
      Email: user.email,
      SessionUser: this.organizationUserId,
      UserType: "Invited",
      WorkspaceId: this.organizationId
    }
    this.http.call('resendEmailToInvitedUser', 'POST', userData).subscribe(response => {
      console.log(response);
    });
  }

}
