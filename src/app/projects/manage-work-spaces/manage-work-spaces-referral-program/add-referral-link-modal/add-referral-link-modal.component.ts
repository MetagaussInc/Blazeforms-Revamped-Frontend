import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-referral-link-modal',
  templateUrl: './add-referral-link-modal.component.html',
  styleUrls: ['./add-referral-link-modal.component.scss']
})
export class AddReferralLinkModalComponent implements OnInit {

  @Input() modalTitle: any;
  referralLink = 'https://staging.blazeforms.com/#/authentication/registration';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  closePopup(){
    this.activeModal.close();
  }

  copyLink(referralLinkData: any){
    var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = referralLinkData;
    fullLink.select();
    document.execCommand("copy", false);
    fullLink.remove();
  }

}
