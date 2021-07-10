import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUser } from 'src/app/+state/user/user.actions';
import { selectUserInfo, selectUserState } from 'src/app/+state/user/user.selectors';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit, OnDestroy {

  private userStateSubscription$;
  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    let queryParam: any;
    this.store.dispatch(loadUser());
    this.route.queryParams.subscribe(queryParams => queryParam = queryParams)
    this.userStateSubscription$ = this.store.select(selectUserState).subscribe(res => {
      if (res.user) {
        this.router.navigate(['/'+ queryParam.path])
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.userStateSubscription$.unsubscribe();
  }
}
