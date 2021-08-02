import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from '../../input.config';
import { ConditionalRendereringModalComponent } from '../conditional-renderering-modal/conditional-renderering-modal.component';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent {
  model: any = {
    name: ''
  };
  selectedIndex: any;
  selectedElement: any;
  viewExportedView = false;
  selectedDependency: any;
  count = 0;
  // sourceBuilderTools = [
  //   { 
  //     name: 'Section', 
  //     value: '', children: [] as any[], 
  //     inputType: 'section', 
  //     icon: 'far fa-square', 
  //     class: 'wide' },
  //   {
  //     name: 'Text', 
  //     textValue: '',
  //     minCharacter: 0,
  //     maxCharacter: 100, 
  //     value: '', inputType: 'string', 
  //     icon: 'fas fa-language', 
  //     class: 'full', placeholder: ''
  //   },
  //   {
  //     name: 'First Name', 
  //     textValue: '',
  //     minCharacter: 0,
  //     maxCharacter: 100, 
  //     value: '', inputType: 'string', 
  //     icon: 'fas fa-language', 
  //     class: 'full', placeholder: '',
  //     isRequired: true,
  //   },
  //   {
  //     name: 'Last Name', 
  //     textValue: '',
  //     minCharacter: 0,
  //     maxCharacter: 100, 
  //     value: '', inputType: 'string', 
  //     icon: 'fas fa-language', 
  //     class: 'full', placeholder: ''
      
  //   },
  //   {
  //     name: 'Number', 
  //     inputType: 'number', 
  //     icon: 'fas fa-hashtag', 
  //     class: 'half',
  //     placeholder: '',
  //     numericValue: 0,
  //     value: undefined,
  //     minCharacter: 0,
  //     maxCharacter: 100,
  //     validations: {
  //       config: {
  //         minLength: {
  //           enabled: true,
  //           value: 10,
  //           errorMessage: "Min length should be 10"
  //         }
  //       },
  //       props: {
  //         minLenth: {
  //           value: 10
  //         }
  //       }
  //     },
  //   },
  //   {
  //     name: 'Phone Number', 
  //     inputType: 'number', 
  //     icon: 'fas fa-hashtag', 
  //     class: 'half',
  //     placeholder: '',
  //     numericValue: 0,
  //     value: undefined,
  //     minCharacter: 9,
  //     maxCharacter: 11,
  //     validations: {
  //       config: {
  //         minLength: {
  //           enabled: true,
  //           value: 10,
  //           errorMessage: "Min length should be 10"
  //         }
  //       },
  //       props: {
  //         minLenth: {
  //           value: 10
  //         }
  //       },
  //     },
  //   }
  // ];
  sourceBuilderTools = config;
  targetBuilderTools: any = [];

  constructor(private modalService: NgbModal) {

  }
  addDependency(event: any) {
    console.log(event.target.value);
    this.targetBuilderTools[this.selectedIndex].dependUpon = event.target.value ? {elementId: event.target.value} :  null;
  }

  addDependencyProperty($event: any) {
    const val = $event.target.value;
    const condition = (val === 'isFilledOut' || val === 'isFilledNotOut');
    const ref = this.targetBuilderTools[this.selectedIndex].dependUpon.elementId;
    this.targetBuilderTools[this.selectedIndex].dependUpon = {
      elementId: ref,
      [val]: condition ? true : '',
      type: condition ? 'boolean' : 'text'
    }
      // this.targetBuilderTools[this.selectedIndex].dependUpon[val] = condition ? true : '';
      // this.targetBuilderTools[this.selectedIndex].dependUpon['type'] = condition ? 'boolean' : 'text'
  }

  checkForDependency(model: any): boolean {
    const dependUpon = model?.dependUpon;

    // if there is no dependency the show element always
    if (!dependUpon) {
      return true;
    }
    const dependencyElementIndex = this.targetBuilderTools.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
    const data = this.targetBuilderTools[dependencyElementIndex].value;
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
  changeDependency($event: any , dependElementKey: any) {
    // console.log($event.target.id, $event.target.value, dependElementKey)
    this.targetBuilderTools[this.selectedIndex].dependUpon[dependElementKey.key] = $event.target.value
  }
  droppableItemClass = (item: any) => `${item.class} ${item.size} ${item.inputType}`;

  checkBox($event: any, model: any, option: any) {
    if (model.value.includes(option)) {
      model.value = model.value.filter((x: any) => x !== option);
    } else {
      model.value.push(option);
    }
  }

change($event: any, val: any) {
  this.selectedElement.options[val] = $event.target.value;
}

remove(i: number) {
  this.selectedElement.options.splice(i, 1);
}

  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ? (Math.random() * 100) | 0 : Math.random().toString(36).substring(20);
  }

  drop(e: any) {
    this.count = this.count + 1;
    if (!e.value.uiIndexId) {
      e.value.uiIndexId = this.count;
    }
    console.log(e.type, e);
    this.updateIndex();
  }

  updateIndex() {
    this.targetBuilderTools.forEach((element: any, i: any) => {
      element.index = i;
    });
  }

  log(e: any) {
    console.log(e.type, e);
  }

  clicked($event: any, model: any, i: any) {
    this.selectedElement = model;
    // this.selectedIndex = model.index;
    // this.selectedDependency = null;
    console.log( model, i)
    $event.preventDefault();
    $event.stopPropagation()
  }

  sectionClicked($event: any, model: any, i: any) {
    this.selectedElement = model;
    // this.selectedIndex = model.index;
    // this.selectedDependency = null;
    console.log( model, i)
    $event.preventDefault();
    $event.stopPropagation()

  }

  setConditionalDependency() {

  }

  openModal(selectedElement: any, value: string, type: string) {

    if ( value === 'always') {
      selectedElement[type] = null;
      return;
    }
    if ( value === 'never') {
      selectedElement[type] = {};
      return;
    }
    const modalRef: any = this.modalService.open(ConditionalRendereringModalComponent,{ size: 'lg' })
    modalRef.componentInstance.config = {
      headerName: '',
      selectedElement,
      targetBuilderTools: this.targetBuilderTools,
      type: type
    }
    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }
}