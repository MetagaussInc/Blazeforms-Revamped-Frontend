import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';

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
  private searchedFormKeyword: string = '';
  private FilterAttribute: string = 'null';
  public formsList: any;
  constructor(private http: HttpService, private store: Store) {
    this.store.select(selectUserInfo).subscribe(userInfo => {
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
      this.formsList = res.res;
    })
  }

  ngOnInit(): void {
  }

}
