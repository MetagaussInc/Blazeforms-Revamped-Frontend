import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-role-modal',
  templateUrl: './delete-role-modal.component.html',
  styleUrls: ['./delete-role-modal.component.scss']
})
export class DeleteRoleModalComponent implements OnInit {

  @Input() public message: string | undefined;
  @Input() public modalName: string | undefined;
  
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteRole(){
    this.activeModal.close('deleteRole');
  }

  closePopup(){
    this.activeModal.close();
  }

}
