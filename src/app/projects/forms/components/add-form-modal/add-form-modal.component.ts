import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-form-modal',
  templateUrl: './add-form-modal.component.html',
  styleUrls: ['./add-form-modal.component.scss']
})
export class AddFormModalComponent implements OnInit, OnChanges {
@Input() public formsList: any;
@Output() openEditEvent: EventEmitter<any> = new EventEmitter()
 viewFormsList = false;
  constructor(public activeModal: NgbActiveModal) {

   }

  ngOnChanges(){
  }
  ngOnInit(): void {
      console.log(this.formsList)
  }

  openEdit(type: string){
    this.activeModal.close(type);
    // this.openEditEvent.emit(type);
  }
}
