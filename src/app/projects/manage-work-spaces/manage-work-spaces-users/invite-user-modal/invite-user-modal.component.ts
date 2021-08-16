import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../../../shared/toast.service';

@Component({
  selector: 'app-invite-user-modal',
  templateUrl: './invite-user-modal.component.html',
  styleUrls: ['./invite-user-modal.component.scss']
})
export class InviteUserModalComponent implements OnInit {

  @Input() public workSpaceId: any;
  @Input() public workSpaceUserId: any;
  @Input() public modalTitle: any;
  @Input() public userList: any;
  @Input() public data: any;
  @Input() public modalButtonTitle: any;
  
  public activeRoles: any;
  public planError: boolean = false;

  accountInviteForm = new FormGroup({
    Email: new FormControl('', [Validators.required, this.validateUserEmail.bind(this)]),
    RoleId: new FormControl(null, [Validators.required]),
  });

  constructor(private http: HttpService, private router: Router, public activeModal: NgbActiveModal, private toastService: ToastService) {}

  ngOnInit(): void {
    this.http.call('getActiveRoles', 'POST', {WorkSpaceId: this.workSpaceId}).subscribe(response => {
      this.activeRoles = response;
    });
    if(this.data){
      this.accountInviteForm.patchValue({
        Email: this.data.email,
        RoleId: this.data.roleId,
      });
    }
  }

  closePopup(){
    this.activeModal.close();
  }

  validateUserEmail({ value }: AbstractControl): any {
    if(this.userList && this.userList.indexOf(value) > -1){
      return {isExists: true};
    }
    return null;
  }

  submit(){
    const obj = {
      ...JSON.parse(JSON.stringify(this.accountInviteForm.value)),
      CreatedBy: this.workSpaceUserId,
      SessionUser: this.workSpaceUserId,
      UserType: "Invited",
      WorkspaceId: this.workSpaceId
    };
    if(this.data){
      obj.Id = this.data.id;
      obj.WorkspaceId = this.workSpaceId;
      this.http.call('updateInvitedUser', 'POST', obj).subscribe(res => {
        this.toastService.showSuccess('Invited Successfully!');
        this.activeModal.close('getAccountUsersData');
      });
    }
    else{
      this.http.call('inviteUser', 'POST', obj).subscribe(res => {
        if(res.result == "PlanLimitExceeded"){
          this.modalTitle = 'Upgrade your plan';
          this.planError = true;
        }
        else{
          this.toastService.showSuccess('Invited Successfully!');
          this.activeModal.close('getAccountUsersData');
        }
      });
    }
  }

  get Email() { return this.accountInviteForm.get('Email'); }
  get RoleId() { return this.accountInviteForm.get('RoleId'); }
  get f() { return this.accountInviteForm.controls; }

}
