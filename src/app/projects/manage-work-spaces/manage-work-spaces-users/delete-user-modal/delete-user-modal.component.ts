import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss']
})
export class DeleteUserModalComponent implements OnInit {

  @Input() public message: string | undefined;
  @Input() public modalName: string | undefined;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteUser(){
    this.activeModal.close('deleteUser');
  }

  closePopup(){
    this.activeModal.close();
  }

}
