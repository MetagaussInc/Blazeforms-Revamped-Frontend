import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormModalComponent } from './components/add-form-modal/add-form-modal.component';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  }

  private userInfoSubscription$: any;

  private searchedFormKeyword: string = '';
  private FilterAttribute: string = 'null';
  public formsList: any;
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
    this.http.call('getFormsList', 'POST', obj).subscribe(res => {
      this.formsList = _.groupBy(res.res, 'folderName');
      console.log(this.formsList)
    })
    this.http.call('GetFoldersListWithForms', 'POST', obj).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

  open() {
    this.modalService.open(AddFormModalComponent,{ size: 'lg' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed `);
    });
  }
  
  ngOnDestroy() {
    this.userInfoSubscription$.unsubscribe();
  }
}
