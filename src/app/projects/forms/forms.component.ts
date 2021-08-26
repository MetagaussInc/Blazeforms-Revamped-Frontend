import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormModalComponent } from './components/add-form-modal/add-form-modal.component';
import { EditFormModalComponent } from './components/edit-form-modal/edit-form-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { RestrictFormEntriesComponent } from './restrict-form-entries/restrict-form-entries.component';
import { MoveModalComponent } from './move-modal/move-modal.component';
import { UserPermissionModalComponent } from './components/user-permission-modal/user-permission-modal.component';
import { DataSharingService } from '../../shared/data-sharing.service';
import { Router } from '@angular/router';
import { AddNewFolderComponent } from './components/add-new-folder/add-new-folder.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  searchedString = '';
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  selectedFolder: any = null;

  viewBy: any = null;
  public selectedForms: any[] = [];
  viewFilterDropdown = false;
  private userInfoSubscription$: any;
  private searchedFormKeyword: string = '';
  private FilterAttribute: string = 'null';
  public formsList: any;
  public allForms :any;
  public folderList: any;
  userInfo: any;
  public formPermissions: any;

  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private dataSharingService: DataSharingService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.getFormsList(userInfo);
    })
    this.formPermissions = this.dataSharingService.GetPermissions("Forms");
  }

  getFormsList(userInfo: any) {
    
    // this.http.call('getFormsList', 'POST', obj).subscribe(res => {
    //   this.formsList = _.groupBy(res.res, 'folderName');
    //   console.log(this.formsList)
    // })
   
    this.getFoldersWithList(userInfo)

    this.http.call('getAllActiveForms', 'POST', {UserId: userInfo.Id,
      WorkSpaceId: userInfo.WorkspaceDetail.Id,}).subscribe(res => {
      this.allForms = res;
    })

    this.http.call('getFolders', 'POST', {
      WorkSpaceId: userInfo.WorkspaceDetail.Id,}).subscribe(res => {
      this.folderList = res;
    })
  }

  getFoldersWithList(userInfo: any) {
    const obj = {
      FilterAttribute: this.FilterAttribute,
      SearchKeyword: this.searchedFormKeyword,
      UserId: userInfo.Id,
      WorkSpaceId: userInfo.WorkspaceDetail.Id,
      ...this.pageDetail,
    }
    this.http.call('GetFoldersListWithForms', 'POST', obj).subscribe(res => {
      const arr: any = [];
      this.getfolderNameWithForms(res, arr);
      this.formsList = arr;
    })
  }

  getfolderNameWithForms(res: any[], arr: any[]) {
    res.forEach((obj: any) => {
      if (obj?.childrenForms?.length > 0) {
        arr.push({
          folderPath: obj.folderPath,
          text: obj.text,
          folderId: obj.value,
          forms: obj.childrenForms.map((x: any) => {
            x.folderId = obj.value;
            return x;
          } ),
          childNameList: function(){
            let list = obj.text;
            obj?.childrenForms.forEach((x: any) => { list += '/'+ x.text} );
            return list;
          }()
        })
      }
      if (obj?.childrenFolders) {
        this.getfolderNameWithForms(obj?.childrenFolders, arr)
      }
    });
  }

  ngOnInit(): void {
  }

  selectionChange($event: any) {
    this.selectedFolder = $event;
}
  open() {
    const modalRef: any = this.modalService.open(AddFormModalComponent,{ size: 'lg' })
    modalRef.componentInstance.formsList = this.allForms;      
    // modalRef.componentInstance.openEditEvent.subscribe((arg: string) => {
    // });
    
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.openEdit(result);
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  openEdit(type: string) {
    const modalRef: any = this.modalService.open(EditFormModalComponent,{ size: 'lg' })
    modalRef.componentInstance.folderList = this.folderList;      
    modalRef.componentInstance.type = type;      
    modalRef.componentInstance.modalType = 'Add';      
    modalRef.componentInstance.workSpaceId = this.userInfo.WorkspaceDetail.Id;
    modalRef.componentInstance.userId = this.userInfo.Id;
    
    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
      if (result?.message === 'added') {
        this.router.navigate(['/form-builder'], {queryParams: {ID: result.res.id}})
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  openbuilder(form: any) {
    this.router.navigate(['/form-builder'], {queryParams: {ID: form.value}})

  }

  openPermissions(form: any) {
    console.log('openPermissions', form)
    const modalRef: any = this.modalService.open(RestrictFormEntriesComponent,{ size: 'lg' })
    modalRef.componentInstance.form = form;      
    // modalRef.componentInstance.modalName = 'Archive'; 
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        // this.http.call('archive', 'POST', {Action: 'Archive', FormIds: ''}).subscribe(res => {
          
        // })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  move(form: any) {
    console.log('move', form,  this.folderList)
    const modalRef: any = this.modalService.open(MoveModalComponent,{ size: 'lg' })
    modalRef.componentInstance.folderList =  this.folderList; 
    modalRef.componentInstance.form =  form; 
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.getFoldersWithList(this.userInfo)
        // this.http.call('archive', 'POST', {Action: 'Archive', FormIds: form.value }).subscribe(res => {
        //   console.log(res)
        // })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  archive(form: any) {
    const modalRef: any = this.modalService.open(ConfirmModalComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to archive ${form.text} forms`;      
    modalRef.componentInstance.modalName = 'Archive'; 
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.http.call('archive', 'POST', {Action: 'Archive', FormIds: form.value }).subscribe(res => {
          console.log(res)
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  deleteForm(form: any) {
    const modalRef: any = this.modalService.open(ConfirmModalComponent,{ size: 'lg' })
    modalRef.componentInstance.message = `Are you sure you want to delete ${form.text} forms`;      
    modalRef.componentInstance.modalName = 'Delete'; 
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.http.call('archive', 'POST', {Action: 'Delete', FormIds: form.value }).subscribe(res => {
          this.getFormsList(this.userInfo);
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }
  
  openModal(formId: any) {
    const modalRef: any = this.modalService.open(UserPermissionModalComponent,{ size: 'lg' })
    modalRef.componentInstance.formId = formId;      
    modalRef.componentInstance.modalType = 'permission';
    modalRef.componentInstance.workSpaceId = this.userInfo.WorkspaceDetail.Id;
    modalRef.result.then((result: any) => { }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }
  openAddNewFolderModal() {
    const modalRef: any = this.modalService.open(AddNewFolderComponent,{ size: 'lg' })
    modalRef.componentInstance.folderList =  this.folderList; 
    modalRef.componentInstance.workSpaceId = this.userInfo.WorkspaceDetail.Id;
    modalRef.componentInstance.userId = this.userInfo.Id;

    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.getFormsList(this.userInfo);
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  changeViewBy(view: any) {
    this.selectedFolder = null;
    this.viewBy = view;
    if (view === 'All Forms') {
      this.getFoldersWithList(this.userInfo)
    } else {
      this.getFilteredForm();
    }
  }

  getFilteredForm() {
     this.http.call('getFormsList', 'POST', {
      FilterAttribute: this.viewBy,
      SearchKeyword: "",
      UserId: this.userInfo.Id,
      WorkSpaceId: this.userInfo.WorkspaceDetail.Id,
      pageNumber: 1,
      pageSize: 14
     }).subscribe(res => {
       this.formsList = [{
         folderPath: this.viewBy === 'StarredForms' ? 'All Starred Forms' : 'All Archived Forms',
         forms: res.res
       }]
      console.log(res)
    })
  }
  ngOnDestroy() {
    this.userInfoSubscription$.unsubscribe();
  }
}
