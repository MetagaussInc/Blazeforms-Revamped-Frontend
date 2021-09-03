import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';

@Component({
  selector: 'app-forms-footer',
  templateUrl: './forms-footer.component.html',
  styleUrls: ['./forms-footer.component.scss']
})
export class FormsFooterComponent implements OnInit {

  public userId: any = null;
  public userWorkspaceList: any;
  private userInfoSubscription$: any;
  public userInfo: any;

  constructor(private store: Store) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      if(this.userInfo){
        this.userId = this.userInfo.Id;
      }
    });
  }

  ngOnInit(): void {
  }

}
