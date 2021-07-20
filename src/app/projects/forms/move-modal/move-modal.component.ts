import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-modal',
  templateUrl: './move-modal.component.html',
  styleUrls: ['./move-modal.component.scss']
})
export class MoveModalComponent implements OnInit {
@Input() public folderList: any;
  constructor() { }

  ngOnInit(): void {
  }

}
