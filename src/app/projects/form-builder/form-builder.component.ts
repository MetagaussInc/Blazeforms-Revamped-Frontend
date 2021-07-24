import { Component, OnInit } from '@angular/core';
var global = window;

/** required inputs
 * Text box
 * - label
 * - placeholder
 * - type -multiple
 * - form validation
 * - default value
 * - range
 * - help text
 * 
 * Date
 * phone
 * currency
 * price
 * name
 * email
 * radio button
 * checkbox
 * rating scale
 * number address
 * website
 * dropdown
 * calculations
 * 
 * 
 * layout controls
 * -
 * section
 * repeating section
 * page-break
 * content
 * 
 * Advance
 * -fileupload
 * signature
 * table
 * 
 * conditinal rendering
 * is filled out
 * is not filled out
 * is  => value
 * is not => value
 * contains
 * does not contains
 * end with
 * doesnot end with
 * starts with
 * does not starts with
 * 
 * 
 * */

const conditionalRendring = {
  isFilledOut: function(){},
  isNotFilledOut: function(){},
  is: function(){},
  isNot: function(){},
  contains: function(){},
  doesNotContains: function(){},
  endWith: function(){},
  doesNotEndWith: function(){},
  startWith: function(){},
  doesNotStartWith: function(){}
}
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent {
  selectedIndex: any;
  selectedDependency: any;
  count = 0;
  sourceBuilderTools = [
    { 
      name: 'Section', 
      value: '', children: [] as any[], 
      inputType: 'section', 
      icon: 'far fa-square', 
      class: 'wide' },
    {
      name: 'Text', 
      textValue: '',
      minCharacter: 0,
      maxCharacter: 100, 
      value: '', inputType: 'string', 
      icon: 'fas fa-language', 
      class: 'full', placeholder: ''
    },
    {
      name: 'Number', 
      inputType: 'number', 
      icon: 'fas fa-hashtag', 
      class: 'half',
      placeholder: '',
      numericValue: 0,
      value: undefined,
      minCharacter: 0,
      maxCharacter: 100,
      validations: {
        config: {
          minLength: {
            enabled: true,
            value: 10,
            errorMessage: "Min length should be 10"
          }
        },
        props: {
          minLenth: {
            value: 10
          }
        }
      },
    },
    {
      name: 'Phone Number', 
      inputType: 'number', 
      icon: 'fas fa-hashtag', 
      class: 'half',
      placeholder: '',
      numericValue: 0,
      value: undefined,
      minCharacter: 9,
      maxCharacter: 11,
      validations: {
        config: {
          minLength: {
            enabled: true,
            value: 10,
            errorMessage: "Min length should be 10"
          }
        },
        props: {
          minLenth: {
            value: 10
          }
        },
      },
    }
  ];
  targetBuilderTools: any = [];

  addDependency(event: any) {
    console.log(event.target.value);
    this.targetBuilderTools[this.selectedIndex].dependUpon = {
        elementId: event.target.value
  }
  }

  addDependencyProperty($event: any) {
    const val = $event.target.value;
    const condition = (val === 'isFilledOut' || val === 'isFilledOut');
    this.targetBuilderTools[this.selectedIndex].dependUpon = {
      [val]: condition ? true : '',
      type: condition ? 'boolean' : 'text'
    }
  }
  changeDependency($event: any , dependElementKey: any) {
    // console.log($event.target.id, $event.target.value, dependElementKey)
    this.targetBuilderTools[this.selectedIndex].dependUpon ={
      [dependElementKey.key]: $event.target.value
}
  }
  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

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
    this.selectedIndex = model.index;
    this.selectedDependency = null;
    console.log($event, model, i)
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }
}
