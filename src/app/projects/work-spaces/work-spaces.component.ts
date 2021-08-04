import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteWorkSpacesComponent } from './delete-work-spaces/delete-work-spaces.component';
import { debounceTime, map } from 'rxjs/operators';

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

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.getUserOrganizationsList();
    })
    
  }

  ngOnInit(): void {}

  getUserOrganizationsList(){
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata).subscribe(response => {
      this.totalOrgCount = response.total;
      for (let i = 0; i < this.pageDetail.pageSize; ++i) {
        if(response.res[i]){
          this.organizationLists.push(response.res[i]);
        }
      }
    });
  }

  deleteUserOrganization(organization: any){
    const modalRef: any = this.modalService.open(DeleteWorkSpacesComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete organization ${organization.name}`;      
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
    this.pageDetail.pageNumber++;
    this.getUserOrganizationsList();
    if(this.organizationLists.length >= this.totalOrgCount){
      this.scrollCheck = true;
    }
  }
}
