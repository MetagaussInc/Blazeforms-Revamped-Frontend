import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.scss']
})
export class FilterTreeComponent implements OnInit {

  @Input() data: any;
  @Input() selectedFolder: any;
@Output() selectFolderEvent: EventEmitter<any> = new EventEmitter()
selected: any = 'Root';
  childData: any;
  searchedString: any = null;
  constructor() { }

  ngOnInit(): void {
    const newData: any = [{
      text: 'Root',
      main: true,
      children: this.data
    }];

    const o = newData?.forEach((element: any) => {
      // element.fullFolderPath = [];
      // element.fullFolderPath.push(element.text);
      element.fullFolderPath = '';
      if (this.selectedFolder === element?.value) {
        this.selected = element.text;
      }
      element.fullFolderPath += '/' + element?.text?.toLowerCase();
      const parentData = [];
      parentData.push(element);
      if (element.children) {
        this.ExtractChild(parentData, element.children)

      }

    })
    console.log(newData)
    this.childData = newData;
  }

  ExtractChild(parentElements: any, childElements: any) {
    childElements.forEach((child: any) => {
      // child.fullFolderPath = [];
      // child.fullFolderPath.push(child.text);
      child.fullFolderPath = '';
      child.fullFolderPath += '/' + child.text.toLowerCase();
      parentElements.forEach((element: any) => {
        element.fullFolderPath += '/' + child.text.toLowerCase();

      });
      const parent = []
      parent.push(...parentElements);
      parent.push(child);
      if (this.selectedFolder === child?.value) {
        this.selected = child.text;
      }
      if (child.children) {
        this.ExtractChild(parent, child.children)

      }
    });
  }

  selectionChange($event: any) {
    this.selectFolderEvent.emit($event);
}
}
