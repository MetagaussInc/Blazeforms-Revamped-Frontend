import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form-modal',
  templateUrl: './edit-form-modal.component.html',
  styleUrls: ['./edit-form-modal.component.scss']
})
export class EditFormModalComponent implements OnInit {
  @Input() public folderList: any;
  @Input() public type: any;
  @Input() public modalType: any;

  // signupForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   LastName: new FormControl('', [Validators.required]),
  //   PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //     acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  // });

  
  constructor() { }

  ngOnInit(): void {
    console.log(this.folderList, this.type);
  }

}
