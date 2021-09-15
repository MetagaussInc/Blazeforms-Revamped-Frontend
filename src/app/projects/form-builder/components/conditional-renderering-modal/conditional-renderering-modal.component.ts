import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as lodash from 'lodash';

@Component({
  selector: 'app-conditional-renderering-modal',
  templateUrl: './conditional-renderering-modal.component.html',
  styleUrls: ['./conditional-renderering-modal.component.scss']
})
export class ConditionalRendereringModalComponent implements OnInit {

  @Input() public configs: any;
  public config: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.configs)

    this.config = JSON.parse(JSON.stringify(this.configs));
    if (!this.config?.selectedElement?.[this.config.type]) {
      this.config.selectedElement[this.config.type] = {}
    }
  }

  addDependency(event: any) {
    console.log(event.target.value);
    // this.config.selectedElement.dependUpon = event.target.value ? {elementId: event.target.value} :  null;
    this.config.selectedElement[this.config.type] = event.target.value ? {elementId: event.target.value} :  null;
  }

  addDependencyProperty($event: any) {
    const val = $event.target.value;
    const condition = (val === 'isFilledOut' || val === 'isNotFilledOut');
    const ref = this.config.selectedElement?.[this.config.type].elementId;
    // const ref = this.config.selectedElement.dependUpon.elementId;
    this.config.selectedElement[this.config.type] = {
      elementId: ref,
      // [val]: condition ? true : '',
      selectedCondition: val,
      [val]: true,
      type: condition ? 'boolean' : 'text'
    }
      // this.targetBuilderTools[this.selectedIndex].dependUpon[val] = condition ? true : '';
      // this.targetBuilderTools[this.selectedIndex].dependUpon['type'] = condition ? 'boolean' : 'text'
  }

  save() {
    this.configs.selectedElement[this.config.type] = lodash.cloneDeep(this.config.selectedElement[this.config.type]);
    this.activeModal.close('close')
  }
}
