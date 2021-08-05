import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-accounts-modal',
  templateUrl: './delete-accounts-modal.component.html',
  styleUrls: ['./delete-accounts-modal.component.scss']
})
export class DeleteAccountsModalComponent implements OnInit {

  @Input() public message: string | undefined;
  @Input() public modalName: string | undefined;
  
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  deleteAccount(){
    this.activeModal.close('deleteAccount');
  }

  closePopup(){
    this.activeModal.close();
  }

}
