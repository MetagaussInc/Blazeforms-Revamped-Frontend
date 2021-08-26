import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {
@Input() data: any;
@Input() selectedFolder: any;
@Output() selectFolderEvent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('tree select ',this.data)
  }

  selectionChange($event: any) {
      this.selectFolderEvent.emit($event);
  }
}
