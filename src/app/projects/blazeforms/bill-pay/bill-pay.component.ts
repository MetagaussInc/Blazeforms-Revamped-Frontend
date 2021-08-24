import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-bill-pay',
  templateUrl: './bill-pay.component.html',
  styleUrls: ['./bill-pay.component.scss']
})
export class BillPayComponent implements OnInit {
  @Input() config: any;
  paymentForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    card: new FormControl('', [Validators.required, Validators.minLength(10)]),
    ccv: new FormControl('', [Validators.required, Validators.minLength(10)]),
    date: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  constructor(public activeModal: NgbActiveModal, private http: HttpService) { }

  ngOnInit(): void {
  }

  saveAccount() {
    const payload = {
      email: this.paymentForm.value.email,
      createdBy:  this.config.createdBy, //"TXYu0NjodAYzBODQlLqdmg==",
createdDate: this.config.createdDate,// "2021-08-14T05:51:52.663Z",
formId: this.config.id, //"zAunqdXcdyoD-ICOYtmtgA==",
id: "",
isActive: this.config.isActive,
isDeleted: this.config.isDeleted,
modifiedBy: this.config.modifiedBy,
modifiedDate: this.config.modifiedDate,// "2021-08-14T05:51:52.663Z",
card: this.paymentForm.value.card,
ccv: this.paymentForm.value.ccv,
workSpaceId: this.config.workSpaceId //"TXYu0NjodAYzBODQlLqdmg==",
    }
    this.http.call('SaveWorkspaceAccountSettings', 'POST', payload).subscribe(res => {
      this.activeModal.close('added');
    })
  }

  get email() { return this.paymentForm.get('email'); }
  get card() { return this.paymentForm.get('card'); }
  get ccv() { return this.paymentForm.get('ccv'); }
  get date() { return this.paymentForm.get('date'); }
  get f() { return this.paymentForm.controls; }

}
