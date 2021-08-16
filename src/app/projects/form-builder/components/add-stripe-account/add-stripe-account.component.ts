import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-add-stripe-account',
  templateUrl: './add-stripe-account.component.html',
  styleUrls: ['./add-stripe-account.component.scss']
})
export class AddStripeAccountComponent implements OnInit {
  @Input() config: any;
  stripeForm = new FormGroup({
    accountName: new FormControl('', [Validators.required]),
    publishableKey: new FormControl('', [Validators.required, Validators.minLength(10)]),
    secretKey: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  constructor(public activeModal: NgbActiveModal, private http: HttpService) { }

  ngOnInit(): void {
  }

  saveAccount() {
    const payload = {
      accountName: this.stripeForm.value.accountName,
      createdBy:  this.config.createdBy, //"TXYu0NjodAYzBODQlLqdmg==",
createdDate: this.config.createdDate,// "2021-08-14T05:51:52.663Z",
formId: this.config.id, //"zAunqdXcdyoD-ICOYtmtgA==",
id: "",
isActive: this.config.isActive,
isDeleted: this.config.isDeleted,
modifiedBy: this.config.modifiedBy,
modifiedDate: this.config.modifiedDate,// "2021-08-14T05:51:52.663Z",
publishableKey: this.stripeForm.value.publishableKey,
secretKey: this.stripeForm.value.secretKey,
workSpaceId: this.config.workSpaceId //"TXYu0NjodAYzBODQlLqdmg==",
    }
    this.http.call('SaveWorkspaceAccountSettings', 'POST', payload).subscribe(res => {
      this.activeModal.close('added');
    })
  }

  get accountName() { return this.stripeForm.get('accountName'); }
  get publishableKey() { return this.stripeForm.get('publishableKey'); }
  get secretKey() { return this.stripeForm.get('secretKey'); }
  get f() { return this.stripeForm.controls; }

}
