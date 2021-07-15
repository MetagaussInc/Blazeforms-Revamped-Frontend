import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormModalComponent } from './components/add-form-modal/add-form-modal.component';
import { EditFormModalComponent } from './components/edit-form-modal/edit-form-modal.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };

  public selectedForms: any[] = [];

  private userInfoSubscription$: any;
  private searchedFormKeyword: string = '';
  private FilterAttribute: string = 'null';
  public formsList: any;
  public allForms :any;
  public folderList: any;
  constructor(private http: HttpService, private store: Store, private modalService: NgbModal) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.getFormsList(userInfo);
    })
    
  }

  getFormsList(userInfo: any) {
    const obj = {
      FilterAttribute: this.FilterAttribute,
      SearchKeyword: this.searchedFormKeyword,
      UserId: userInfo.Id,
      WorkSpaceId: userInfo.WorkspaceDetail.Id,
      ...this.pageDetail,
    }
    // this.http.call('getFormsList', 'POST', obj).subscribe(res => {
    //   this.formsList = _.groupBy(res.res, 'folderName');
    //   console.log(this.formsList)
    // })
    this.http.call('GetFoldersListWithForms', 'POST', obj).subscribe(res => {
      const arr: any = [];
      console.log(res)
      this.getfolderNameWithForms(res, arr);
      this.formsList = arr;
    })

    this.http.call('getAllActiveForms', 'POST', {UserId: userInfo.Id,
      WorkSpaceId: userInfo.WorkspaceDetail.Id,}).subscribe(res => {
      this.allForms = res;
    })

    this.http.call('getFolders', 'POST', {
      WorkSpaceId: userInfo.WorkspaceDetail.Id,}).subscribe(res => {
      this.folderList = res;
    })
  }

  getfolderNameWithForms(res: any[], arr: any[]) {
    res.forEach((obj: any) => {
      if (obj?.childrenForms?.length > 0) {
        arr.push({
          folderPath: obj.folderPath,
          text: obj.text,
          forms: obj.childrenForms
        })
      }
      if (obj?.childrenFolders) {
        this.getfolderNameWithForms(obj?.childrenFolders, arr)
      }
    });
  }

  ngOnInit(): void {
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
    modalRef.componentInstance.modalType = 'add';      
    
    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }
  
  ngOnDestroy() {
    this.userInfoSubscription$.unsubscribe();
  }
}
