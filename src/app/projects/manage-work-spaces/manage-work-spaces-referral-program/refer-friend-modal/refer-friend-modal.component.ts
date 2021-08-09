import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refer-friend-modal',
  templateUrl: './refer-friend-modal.component.html',
  styleUrls: ['./refer-friend-modal.component.scss']
})
export class ReferFriendModalComponent implements OnInit {

  @Input() public modalTitle: any;
  public organizationId: any;
  public organizationUserId: any;
  public organizationName: any;
  
  referFriendForm = new FormGroup({
    DefaultReplyEmail: new FormControl('', [Validators.required]),
    ToEmail: new FormControl('', [Validators.required]),
    Subject: new FormControl('', [Validators.required]),
    Message: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private Activatedroute: ActivatedRoute, private http: HttpService, public activeModal: NgbActiveModal) {
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.getCurrentWorkspaceData(this.organizationId, this.organizationUserId);
      }
    });
  }

  ngOnInit(): void {}

  getCurrentWorkspaceData(orgId: any, userId: any){
    let obj = {
      Id: orgId,
      IsOrganizationSettings: true,
      UserId: userId
    }
    this.http.call('setCurrentWorkSpaceForAdmin', 'POST', obj).subscribe(res => {
      let data = res.result.data;
      this.organizationName = data.workSpaceName;
      this.referFriendForm.patchValue({
        DefaultReplyEmail: data.email,
        Subject: `You are invited by ${data.workSpaceName} to try Blaze Forms for free.`,
        Message: 'Blaze Forms is an intuitive online form builder with unbeatable pricing, allowing you to easily create, publish, and manage your online forms.',
      })
    })
  }

  submit(){
    const obj = {
      ...JSON.parse(JSON.stringify(this.referFriendForm.value)),
      Name: this.organizationName,
      RefferalLink: "https://staging.blazeforms.com/#/authentication/registration"
    };

    this.http.call('sendRefferalLinkByEmail', 'POST', obj).subscribe(res => {
      this.activeModal.close();
    });
  }

  closePopup(){
    this.activeModal.close();
  }

  get DefaultReplyEmail() { return this.referFriendForm.get('DefaultReplyEmail'); }
  get ToEmail() { return this.referFriendForm.get('ToEmail'); }
  get Subject() { return this.referFriendForm.get('Subject'); }
  get Message() { return this.referFriendForm.get('Message'); }
  get f() { return this.referFriendForm.controls; }

}
