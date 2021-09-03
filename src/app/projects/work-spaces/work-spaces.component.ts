import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo, userWorkspaceLists } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteWorkSpacesComponent } from './delete-work-spaces/delete-work-spaces.component';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataSharingService } from '../../shared/data-sharing.service';
import { userWorkspaceDetailSuccess,  } from 'src/app/+state/user/user.actions';
import { ToastService } from '../../shared/toast.service';

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
    pageSize: 10
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
  public p: number = 1;
  public isPagination: boolean = false;
  public showPagination: boolean = false;
  public userWorkspaceLists: any[] = [];

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private dataSharingService: DataSharingService, private toastService: ToastService) {
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
    this.store.select(userWorkspaceLists).subscribe(workspacesList => {
      if(workspacesList){
        let workSpaceListData = Array.from(Object.values(workspacesList));
        workSpaceListData.forEach((item: any) => {
          this.userWorkspaceLists.push({id: item.id, name: item.name});
        });
      }
    });
  }

  ngOnInit(): void {}

  getUserOrganizationsList(){
    this.isLoading = true;
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    if(this.IsSuperAdmin){
      this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata).subscribe(response => {
        this.totalOrgCount = response.total;
        this.organizationLists = response.res;
        this.isLoading = false;
        this.showPagination = true;
        if(this.isPagination){
          window.scroll({ top: 100, left: 0, behavior: 'smooth' });
        }
      });
    }
    else{
      this.http.call('getUserWorkSpaces', 'POST', workspacedata).subscribe(response => {
        this.totalOrgCount = response.total;
        this.organizationLists = response.res;
        this.isLoading = false;
        this.showPagination = true;
        if(this.isPagination){
          window.scroll({ top: 100, left: 0, behavior: 'smooth' });
        }
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
            this.toastService.showSuccess('Organization Deleted Successfully!');
            this.organizationLists = [];
            this.pageDetail.pageNumber = 1;
            this.showPagination = false;
            this.getUserOrganizationsList();
            this.http.call('getUserWorkSpacesWithoutPagination', 'POST', {Id: this.userInfo.Id}).subscribe(response => {
              const props = response;
              this.store.dispatch(userWorkspaceDetailSuccess({props}));
            });
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
      this.organizationLists = response.res;
    }));
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

  getPage(page: any){
    this.p = page;
    this.pageDetail.pageNumber = page;
    this.isPagination = true;
    this.getUserOrganizationsList();
  }

  formatter = (x: {name: string}) => x.name;

  search: OperatorFunction<string, readonly {id: any, name: any}[]> = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter((term: any | any[]) => term.length >= 2),
    map(term => this.userWorkspaceLists.filter((org: { name: string; }) => new RegExp(term, 'mi').test(org.name)).slice(0, 10))
  );

  selectOrgItem(org: any){
    if(org){
      if(org.item.id){
        this.goToManageWorkSpaces('edit', org.item.id);
      }
    }
  }

}
