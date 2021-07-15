import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLogout } from '../+state/user/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(userLogout()) 
    this.router.navigate(['/uxer/login'])

  }
}
