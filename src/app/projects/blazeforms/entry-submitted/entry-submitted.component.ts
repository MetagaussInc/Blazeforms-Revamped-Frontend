import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-entry-submitted',
  templateUrl: './entry-submitted.component.html',
  styleUrls: ['./entry-submitted.component.scss']
})
export class EntrySubmittedComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this._location.back();
  }

}
