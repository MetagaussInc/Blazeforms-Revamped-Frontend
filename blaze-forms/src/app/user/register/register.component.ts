import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  myRecaptcha = new FormControl(false);

  signupForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    WorkSpaceName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      this.validateNameViaServer.bind(this)
    ),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
    ]),
    acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  });

  planDetails = {
    id: 1,
    name: 'The Starter Plan',
    description: 'The Starter Plan',
    noOfForms: 10,
    noOfUsers: 1,
    noOfEntries: 50,
    paymentPercentage: 0,
    storageSize: <any> '2 GB',
    IsActive: 1,
    IsDeleted: 0,
    createdBy: '',
    modifiedBy: '',
    CreatedDate: '',
    price: '0',
    userId: '',
    isDefault: 1,
    isRecommended: 1,
    ShowOnHome: 1,
    StorageUnit: '',
    WorkspaceId: '',
    concretePlanId: '',
    ModifiedBy: '',
    StripePlanId: ''
  };
  constructor(private http: HttpService) { }

  checkforAgreements({ value }: AbstractControl): any {
    if (!value) {
      return {
        isRefused: true
      }
    }
    return null
  }
  validateNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(500),
        map((response: any) => {
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }))
  }
  ngOnInit(): void {
    this.http.call('GetMasterPlanDetailById', 'POST', {'ID': ''}).subscribe(res => {
      this.planDetails = res;
      this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
    })
  }


  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA')
  }


  submit() {
    console.log(this.signupForm.value, this.myRecaptcha.value)
    const obj = {
      ...JSON.parse(JSON.stringify(this.signupForm.value)),
      IsLinkActivated: false,
      IsSuperAdmin: false,
      PlanId: "TZW3ou4hevmgAh6EEJ9-dw=="
    }
    delete obj.confirmPassword;
    delete obj.acceptAgreement;
    this.http.call('signup', 'POST', obj).subscribe(res => {
      console.log(res);
    })
  }
  get FirstName() { return this.signupForm.get('FirstName'); }
  get LastName() { return this.signupForm.get('LastName'); }
  get PhoneNumber() { return this.signupForm.get('PhoneNumber'); }
  get WorkSpaceName() { return this.signupForm.get('WorkSpaceName'); }
  get Email() { return this.signupForm.get('Email'); }
  get Password() { return this.signupForm.get('Password'); }
  get confirmPassword() { return this.signupForm.get('confirmPassword'); }
  get f() { return this.signupForm.controls; }

}
