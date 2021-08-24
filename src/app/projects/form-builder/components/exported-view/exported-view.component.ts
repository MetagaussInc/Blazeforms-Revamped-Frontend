import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exported-view',
  templateUrl: './exported-view.component.html',
  styleUrls: ['./exported-view.component.scss']
})
export class ExportedViewComponent implements OnInit {
@Input() public elements: any;
@Input() public url: any;
model = {
  name: ''
}
styling = {
  labels: {
    font: 'Roboto',
    size: 16,
    color: 'red'
  },
  text: {
    font: 'Roboto',
    size: 16,
    color: 'red'
  },
  placeholders: {
    font: 'Roboto',
    size: 16,
    color: 'red'
  },
  buttons: {
    font: 'Roboto',
    size: 16,
    color: 'red'
  },
  pagebackgroundColor: 'white',
  pagebackgroundImage: ''
}

active = 1;
  constructor() { }

  ngOnInit(): void {
    console.log(this.elements)
  }

  checkForDependency(model: any, T: any): boolean {
    const dependUpon = model?.[T];

    // if there is no dependency the show element always
    if (!dependUpon) {
      return true;
    }
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
    const data = this.elements[dependencyElementIndex].value;
    if (dependUpon.type === 'boolean') {
        if (dependUpon.isFilledOut) {
          return (typeof data === 'number') ? data > -1 : data.length > 0;
        }
        if (dependUpon.isNotFilledOut) {
          return data === 0 || data.length === 0;
        }
    } else {
      if (dependUpon.is) {
        return data === dependUpon.value;
      }
      if (dependUpon.isNot) {
        return data !== dependUpon.value;
      }
      if (dependUpon.contains) {
        return data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.doesNotContains) {
        return !data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.endWith) {
        return data.endsWith(dependUpon.value);
      }
      if (dependUpon.doesNotEndWith) {
        return data.endsWith(dependUpon.value);
      } 
      if (dependUpon.startWith) {
        return data.startsWith(dependUpon.value);
      }
      if (dependUpon.doesNotStartWith) {
        return !data.startsWith(dependUpon.value);
      }
    }
    return false;
  }

  checkForRDependency(model: any, T: any): boolean {
    const dependUpon = model?.[T];

    // if there is no dependency the show element always
    if (!dependUpon) {
      return false;
    }
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
    const data = this.elements[dependencyElementIndex].value;
    if (dependUpon.type === 'boolean') {
        if (dependUpon.isFilledOut) {
          return (typeof data === 'number') ? data > -1 : data.length > 0;
        }
        if (dependUpon.isNotFilledOut) {
          return data === 0 || data.length === 0;
        }
    } else {
      if (dependUpon.is) {
        return data === dependUpon.value;
      }
      if (dependUpon.isNot) {
        return data !== dependUpon.value;
      }
      if (dependUpon.contains) {
        return data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.doesNotContains) {
        return !data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.endWith) {
        return data.endsWith(dependUpon.value);
      }
      if (dependUpon.doesNotEndWith) {
        return data.endsWith(dependUpon.value);
      } 
      if (dependUpon.startWith) {
        return data.startsWith(dependUpon.value);
      }
      if (dependUpon.doesNotStartWith) {
        return !data.startsWith(dependUpon.value);
      }
    }
    return true;
  }
  submitParentForm(parentForm: any){
    console.log(parentForm)
  }

}
