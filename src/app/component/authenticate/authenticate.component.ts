import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { split } from 'lodash';
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
        const url = decodeURIComponent(queryParam.path)?.split('?')?.[0];
        const qParams =   (queryParam.path)?.split('?')?.[1]?.split('&');
        const query: any = {};
        if (qParams) {
          for (const params of qParams) {
            query[params.split('=')[0]] = function(){
              let s = '';
              for (let index = 1; index < params.split('=').length; index++) {
                s = s +  ((params.split('=')[index] === '') ? '=' : params.split('=')[index]);
              }
              return s;
            }() 
          }
        }
        this.router.navigate([url], {queryParams: query})
      } else {
        this.router.navigate(['/user/login'])
      }
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.userStateSubscription$.unsubscribe();
  }
}
