import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


interface FoodNode {
  name: string;
  main?: boolean;
  children?: FoodNode[];
}

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
              {name: 'Broccoli 1'},
              {name: 'Brussels sprouts 1'},
            ]
          },
          {name: 'Meta 2'},
        ]
      }, 
      {
        name: 'Test',
        children: [
          {name: 'Test 1'},
          {name: 'Test 2'},
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
}

@Component({
  selector: 'app-t-select',
  templateUrl: './t-select.component.html',
  styleUrls: ['./t-select.component.scss']
})
export class TSelectComponent implements OnInit { 
  selected = 'Root';
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  select(node: any): void {
    console.log(node)
    this.selected = node.name;
    this.treeControl.collapseAll();
    console.log(this.treeControl)
  }

  hasChild = (_: number, node: ExampleFlatNode) => {
    console.log(_)
    return node.expandable};
  ngOnInit(): void {
  }

}
