import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-submitted',
  templateUrl: './entry-submitted.component.html',
  styleUrls: ['./entry-submitted.component.scss']
})
export class EntrySubmittedComponent implements OnInit {

  params: any;
  constructor(private _location: Location, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.params = res;
    })
  }

  ngOnInit(): void {
  }

  back(){
    this._location.back();
  }

}
