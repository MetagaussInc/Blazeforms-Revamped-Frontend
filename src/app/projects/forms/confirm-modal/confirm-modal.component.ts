import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() public message: string | undefined; 
  @Input() public modalName: string | undefined;
  constructor(public activeModal: NgbActiveModal) {

  }
  ngOnInit(): void {
  }

  close(message: any) {
    this.activeModal.close(message);
  }

  closeModal() {
    this.activeModal.close('close');
  }

  archive() {
    this.activeModal.close('archive');
  }
}
