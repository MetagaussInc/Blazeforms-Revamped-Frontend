import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {

  constructor() {
    document.body.className = 'bg-light';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }
}
