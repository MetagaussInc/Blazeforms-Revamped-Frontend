import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddReferralLinkModalComponent } from './add-referral-link-modal/add-referral-link-modal.component';
import { ReferFriendModalComponent } from './refer-friend-modal/refer-friend-modal.component';

@Component({
  selector: 'app-manage-work-spaces-referral-program',
  templateUrl: './manage-work-spaces-referral-program.component.html',
  styleUrls: ['./manage-work-spaces-referral-program.component.scss']
})
export class ManageWorkSpacesReferralProgramComponent implements OnInit {
  referralLink = 'https://staging.blazeforms.com/#/authentication/registration';
  twitterGoogleFormURL = 'https://staging.blazeforms.com/%23/authentication/registration';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openReferralModal(){
    const modalRef: any = this.modalService.open(AddReferralLinkModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'add';
    modalRef.componentInstance.modalTitle = 'Referral Link';
    modalRef.result.then((result: any) => {
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  openReferFriendModal(){
    const modalRef: any = this.modalService.open(ReferFriendModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'refer';
    modalRef.componentInstance.modalTitle = 'Refer A Friend';
    modalRef.result.then((result: any) => {
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

}
