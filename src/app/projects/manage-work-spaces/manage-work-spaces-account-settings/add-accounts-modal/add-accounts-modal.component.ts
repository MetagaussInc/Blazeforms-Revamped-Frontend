import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-accounts-modal',
  templateUrl: './add-accounts-modal.component.html',
  styleUrls: ['./add-accounts-modal.component.scss']
})
export class AddAccountsModalComponent implements OnInit {

  @Input() public workSpaceId: any;
  @Input() public workSpaceUserId: any;
  @Input() public modalTitle: any;
  @Input() public data: any;

  accountAddForm = new FormGroup({
    accountName: new FormControl('', [Validators.required]),
    publishableKey: new FormControl('', [Validators.required]),
    secretKey: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpService, private router: Router, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.data){
      this.accountAddForm.patchValue({
        accountName: this.data.accountName,
        publishableKey: this.data.publishableKey,
        secretKey: this.data.secretKey,
      });
    }
  }

  submit(){
    const obj = {
      ...JSON.parse(JSON.stringify(this.accountAddForm.value)),
      createdBy: this.workSpaceUserId,
      createdDate: new Date(),
      formId: "",
      id: "",
      isActive: true,
      isDeleted: false,
      modifiedBy: "",
      modifiedDate: new Date(),
      workSpaceId: this.workSpaceId
    };
    if(this.data){
      obj.createdBy = this.data.createdBy;
      obj.createdDate = this.data.createdDate;
      obj.id = this.data.id;
      obj.modifiedBy = this.workSpaceUserId;      
      this.http.call('updateWorkspaceAccountSettings', 'POST', obj).subscribe(res => {
        this.activeModal.close('getAccountsData');
      });
    }
    else{
      this.http.call('saveWorkspaceAccountSettings', 'POST', obj).subscribe(res => {
        this.activeModal.close('getAccountsData');
      });
    }
  }

  closePopup(){
    this.activeModal.close();
  }

  get accountName() { return this.accountAddForm.get('accountName'); }
  get publishableKey() { return this.accountAddForm.get('publishableKey'); }
  get secretKey() { return this.accountAddForm.get('secretKey'); }
  get f() { return this.accountAddForm.controls; }

}
