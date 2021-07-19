import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

const TREE_DATA: FoodNode[] = [
  {
    name: 'Root',
    main: true,
    children: [
      {
        name: 'Meta',
        children: [
          {
            name: 'Meta 1',
            children: [
              { name: 'Broccoli 1' },
              { name: 'Brussels sprouts 1' },
            ]
          },
          { name: 'Meta 2' },
        ]
      },
      {
        name: 'Test',
        children: [
          { name: 'Test 1' },
          { name: 'Test 2' },
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  // fullFolderPath?: any[], 
  fullFolderPath?: string[],
}

interface FoodNode {
  name: string;
  main?: boolean;
  children?: FoodNode[];
  fullFolderPath?: string;
  // fullFolderPath?: any[];
}
@Component({
  selector: 'app-t-select',
  templateUrl: './t-select.component.html',
  styleUrls: ['./t-select.component.scss']
})
export class TSelectComponent implements OnInit {
  selected = 'Root';
  searchedString = '';
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      fullFolderPath: node.fullFolderPath
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

    const o = TREE_DATA.forEach(element => {
      // element.fullFolderPath = [];
      // element.fullFolderPath.push(element.name);
      element.fullFolderPath = '';
      element.fullFolderPath += '/' + element.name.toLowerCase();
      const parentData = [];
      parentData.push(element);
      if (element.children) {
        this.ExtractChild(parentData, element.children)

      }

    })
    console.log(TREE_DATA)
    this.dataSource.data = TREE_DATA;

  }

  ExtractChild(parentElements: any, childElements: any) {
    childElements.forEach((child: any) => {
      // child.fullFolderPath = [];
      // child.fullFolderPath.push(child.name);
      child.fullFolderPath = '';
      child.fullFolderPath += '/' + child.name.toLowerCase();
      parentElements.forEach((element: any) => {
        element.fullFolderPath += '/' + child.name.toLowerCase();

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
    // console.log(node)
    this.selected = node.name;
    this.treeControl.collapseAll();
    // console.log(this.treeControl)
  }

  hasChild = (_: number, node: ExampleFlatNode) => {
    // console.log(_)
    return node.expandable
  };
  ngOnInit(): void {
  }

}
