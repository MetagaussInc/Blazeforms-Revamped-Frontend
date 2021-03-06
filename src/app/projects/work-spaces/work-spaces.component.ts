import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteWorkSpacesComponent } from './delete-work-spaces/delete-work-spaces.component';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataSharingService } from '../../shared/data-sharing.service';

@Component({
  selector: 'app-work-spaces',
  templateUrl: './work-spaces.component.html',
  styleUrls: ['./work-spaces.component.scss']
})
export class WorkSpacesComponent implements OnInit {

  searchedString = '';
  totalNum = 0;
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  private userInfoSubscription$: any;
  public userInfo: any;
  public organizationLists: any[] = [];
  public totalOrgCount = 0;
  public scrollCheck: boolean = false;
  public IsSuperAdmin: boolean = false;
  public permissions: any;
  public isPaginationLoading: boolean = false;
  public isLoading: boolean = false;
  public selectedWorkspaceId: any;

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private dataSharingService: DataSharingService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      if(this.userInfo.IsSuperAdmin){
        this.IsSuperAdmin = true;
      }
      this.getUserOrganizationsList();
    })
    this.permissions = this.dataSharingService.GetPermissions("Organizations");
    let workSpaceListData = this.dataSharingService.GetUserWorkspaceList();
    this.selectedWorkspaceId = workSpaceListData.id;
  }

  ngOnInit(): void {}

  getUserOrganizationsList(){
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    if(this.IsSuperAdmin){
      this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata).subscribe(response => {
        this.totalOrgCount = response.total;
        for (let i = 0; i < this.pageDetail.pageSize; ++i) {
          if(response.res[i]){
            this.organizationLists.push(response.res[i]);
          }
        }
        this.isPaginationLoading = false;
      });
      console.log(this.organizationLists.length);
      console.log(this.totalOrgCount);
      console.log(this.scrollCheck);
    }
    else{
      this.http.call('getUserWorkSpaces', 'POST', workspacedata).subscribe(response => {
        this.totalOrgCount = response.total;
        for (let i = 0; i < this.pageDetail.pageSize; ++i) {
          if(response.res[i]){
            this.organizationLists.push(response.res[i]);
          }
        }
        this.isPaginationLoading = false;
      });
    }
  }

  deleteUserOrganization(organization: any){
    const modalRef: any = this.modalService.open(DeleteWorkSpacesComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete organization ${organization.name} ?`;
    modalRef.componentInstance.modalName = 'Delete Organization'; 
    modalRef.result.then((result: any) => {
      if (result === 'deleteWorkSpace') {
        const workdata = {
          Id: organization.id,
          IsActive: false,
          IsDeleted: true,
          UserId: organization.userId
        }
        this.http.call('deleteWorkSpace', 'POST', workdata).subscribe(res => {
          if(res == true){
            this.organizationLists = [];
            this.pageDetail.pageNumber = 1;
            this.getUserOrganizationsList();
          }
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  searchWorkSpace(searchedString: any){    
    this.searchedString = searchedString;
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata)
    .pipe(debounceTime(500),
      map((response: any) => {
      this.totalOrgCount = response.total;
      for (let i = 0; i < this.pageDetail.pageSize; ++i) {
        if(response.res[i]){
          this.organizationLists.push(response.res[i]);
        }
      }
    }));
  }

  onScroll(){
    this.isPaginationLoading = true;
    this.pageDetail.pageNumber++;
    this.getUserOrganizationsList();
    console.log(this.pageDetail.pageNumber);
    console.log(this.scrollCheck);
    if(this.organizationLists.length >= this.totalOrgCount){
      this.scrollCheck = true;
    }
  }

  goToManageWorkSpaces(action: any, orgId: string){
    if(action == 'add'){
      this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'add'}});
    }
    else{
      let orgUserId: any;
      let orgName: any;
      this.organizationLists.forEach((item) => {
        if(item.id == orgId){
          orgUserId = item.userId;
          orgName = item.name;
        }
      });
      this.router.navigate(['/manage-work-spaces'], {queryParams: {action: 'edit', id: encodeURIComponent(orgId), orgUserId: encodeURIComponent(orgUserId), orgName: encodeURIComponent(orgName)}});
    }    
  }

  UnSubscribePlan(stripeSubscriptionId: any){
    if(stripeSubscriptionId){
      this.http.call('unSubscriptionPlan', 'DELETE', {SubscriptionId: stripeSubscriptionId}).subscribe(response => {
        console.log(response);
      });
    }
  }
}
