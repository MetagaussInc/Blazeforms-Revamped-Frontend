import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-work-spaces',
  templateUrl: './delete-work-spaces.component.html',
  styleUrls: ['./delete-work-spaces.component.scss']
})
export class DeleteWorkSpacesComponent implements OnInit {

  @Input() public message: string | undefined;
  @Input() public modalName: string | undefined;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.modalName);
  }

  deleteUserOrganization(){
    this.activeModal.close('deleteWorkSpace');
  }
}
