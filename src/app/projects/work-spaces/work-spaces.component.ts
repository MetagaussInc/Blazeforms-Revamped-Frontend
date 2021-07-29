import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteWorkSpacesComponent } from './delete-work-spaces/delete-work-spaces.component';

@Component({
  selector: 'app-work-spaces',
  templateUrl: './work-spaces.component.html',
  styleUrls: ['./work-spaces.component.scss']
})
export class WorkSpacesComponent implements OnInit {

  searchedString = '';
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  private userInfoSubscription$: any;
  public userInfo: any;
  public organizationLists: any;

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.getUserOrganizationsList(userInfo);
    })
    
  }

  ngOnInit(): void {}

  getUserOrganizationsList(userInfo: any){
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: "",
      ...this.pageDetail
    }
    this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata).subscribe(res => {
      this.organizationLists = res.res;
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
            this.getUserOrganizationsList(this.userInfo);
          }
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

}
