import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { AddAccountsModalComponent } from './add-accounts-modal/add-accounts-modal.component';
import { DeleteAccountsModalComponent } from './delete-accounts-modal/delete-accounts-modal.component';

@Component({
  selector: 'app-manage-work-spaces-account-settings',
  templateUrl: './manage-work-spaces-account-settings.component.html',
  styleUrls: ['./manage-work-spaces-account-settings.component.scss']
})
export class ManageWorkSpacesAccountSettingsComponent implements OnInit {

  searchedString = '';
  totalNum = 0;
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  public accountsLists: any[] = [];
  public totalAccountsCount = 0;
  public scrollCheck: boolean = false;
  public organizationId: any;
  public organizationUserId: any;

  constructor(private http: HttpService, private modalService: NgbModal, private router: Router, private Activatedroute: ActivatedRoute) {
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.getAccountsData();
      }
    });
  }

  ngOnInit(): void {
  }

  getAccountsData(){
    const accountsdata = {
      WorkSpaceId: this.organizationId,
      SearchKeyword: this.searchedString,
      ...this.pageDetail
    }
    this.http.call('getAccountsOfWorkspace', 'POST', accountsdata).subscribe(response => {
      this.totalAccountsCount = response.total;
      for (let i = 0; i < this.pageDetail.pageSize; ++i) {
        if(response.res[i]){
          this.accountsLists.push(response.res[i]);
        }
      }
    });
  }

  openAddAccountModal(){
    const modalRef: any = this.modalService.open(AddAccountsModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'add';
    modalRef.componentInstance.workSpaceId = this.organizationId;
    modalRef.componentInstance.workSpaceUserId = this.organizationUserId;
    modalRef.componentInstance.modalTitle = 'Configure Stripe Account';
    modalRef.result.then((result: any) => {
      if(result == 'getAccountsData'){
        this.accountsLists = [];
        this.getAccountsData();
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  editAccount(accountEditData: any){
    const modalRef: any = this.modalService.open(AddAccountsModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'edit';
    modalRef.componentInstance.workSpaceId = this.organizationId;
    modalRef.componentInstance.workSpaceUserId = this.organizationUserId;
    modalRef.componentInstance.modalTitle = 'Edit Stripe Account';
    modalRef.componentInstance.data = accountEditData;
    modalRef.result.then((result: any) => {
      if(result == 'getAccountsData'){
        this.accountsLists = [];
        this.getAccountsData();
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  deleteAccount(accountEditData: any){
    const modalRef: any = this.modalService.open(DeleteAccountsModalComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete your account ${accountEditData.accountName}`;      
    modalRef.componentInstance.modalName = 'Delete'; 
    modalRef.result.then((result: any) => {
      if (result === 'deleteAccount') {
        const workdata = {
          Id: accountEditData.id,
          WorkSpaceId: this.organizationId,
        }
        this.http.call('deleteWorkspaceAccountSettings', 'POST', workdata).subscribe(res => {
          if(res == true){
            this.accountsLists = [];
            this.getAccountsData();
          }
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  searchAccounts(searchedString: any){    
    this.searchedString = searchedString;
  }

}
