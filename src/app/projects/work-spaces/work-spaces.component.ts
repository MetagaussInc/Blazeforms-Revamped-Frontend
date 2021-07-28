import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';

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

  constructor(private http: HttpService, private store: Store) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      console.log(userInfo);
      this.userInfo = userInfo;
    })
    
  }

  ngOnInit(): void {
    const workspacedata = {
      Id: this.userInfo.Id,
      SearchKeyword: "",
      ...this.pageDetail
    }
    this.http.call('getUserWorkSpacesForSuperMaster', 'POST', workspacedata).subscribe(res => {
      this.organizationLists = res.res;
      console.log(this.organizationLists);
    });
  }

}
