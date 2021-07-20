import { Component, Input, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

// const TREE_DATA: FoodNode[] = [
//   {
//     text: 'Root',
//     main: true,
//     children: [
//       {
//         text: 'Meta',
//         children: [
//           {
//             text: 'Meta 1',
//             children: [
//               { text: 'Broccoli 1' },
//               { text: 'Brussels sprouts 1' },
//             ]
//           },
//           { text: 'Meta 2' },
//         ]
//       },
//       {
//         text: 'Test',
//         children: [
//           { text: 'Test 1' },
//           { text: 'Test 2' },
//         ]
//       },
//     ]
//   },
// ];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  text: string;
  level: number;
  // fullFolderPath?: any[], 
  fullFolderPath?: string[],
  value?: string;
}

interface FoodNode {
  text: string;
  main?: boolean;
  children?: FoodNode[];
  fullFolderPath?: string;
  // fullFolderPath?: any[];
  value?: string;
}
@Component({
  selector: 'app-t-select',
  templateUrl: './t-select.component.html',
  styleUrls: ['./t-select.component.scss']
})
export class TSelectComponent implements OnInit {
  @Input() public data: any;
  selected = 'Root';
  searchedString = '';
  public viewDropDown = false;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      text: node.text,
      level: level,
      fullFolderPath: node.fullFolderPath,
      value: node.value
    };
  }
  search($event: any) {
    if ($event?.target?.value.length > 0) {
      this.treeControl.expandAll();
    } else {
      this.treeControl.collapseAll();
    }

    // console.log($event.target.value)
    // this.dataSource.data = TREE_DATA
  }

  treeControl = new FlatTreeControl<any>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);






  constructor() {



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
      if (child.children) {
        this.ExtractChild(parent, child.children)

      }
    });
  }
  select(node: any): void {
    console.log(node)
    this.selected = node.text;
    this.treeControl.collapseAll();
    this.viewDropDown = false;
    // console.log(this.treeControl)
  }

  hasChild = (_: number, node: ExampleFlatNode) => {
    // console.log(_)
    return node.expandable
  };
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
      element.fullFolderPath += '/' + element?.text?.toLowerCase();
      const parentData = [];
      parentData.push(element);
      if (element.children) {
        this.ExtractChild(parentData, element.children)

      }

    })
    console.log(newData)
    this.dataSource.data = newData;
  }

}
