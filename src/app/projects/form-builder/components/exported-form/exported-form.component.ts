import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exported-form',
  templateUrl: './exported-form.component.html',
  styleUrls: ['./exported-form.component.scss']
})
export class ExportedFormComponent implements OnInit {

  @Input() public elements: any;
  model = {
    name: ''
  }
  haveTabs: boolean = false;
  active = 0;
  allArr:any = [];
  obj: any = {}
    constructor() { }
  
    ngOnInit(): void {
      console.log(this.elements)
      let count = 0;
      if (this.elements?.length > 0) {
        for (const iterator of this.elements) {
          if (iterator.inputType === 'break') {
            this.haveTabs = true;
            break;
          }
        }
      }
      let arr = [];
      if (this.haveTabs) {
        for (const iterator of this.elements) {
          if (iterator.inputType === 'break' && arr.length > 0 ) {
            this.allArr.push(arr);
            arr = [];
            this.obj[count] = iterator.value;
            count = count + 1;
          } else if (iterator.inputType !== 'break') {
            arr.push(iterator);
          }
        }
        this.allArr.push(arr);
      }
      console.log(this.allArr)
      
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
