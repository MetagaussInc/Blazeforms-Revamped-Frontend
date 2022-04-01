import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { ToastService } from '../../shared/toast.service';
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { storageCountFormatter } from 'src/app/shared/storage-count.pipe';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  apiGoingOn = false;
  signupForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.minLength(10),
    Validators.pattern('^[+0-9]{10,14}$')]),
    WorkSpaceName: new FormControl('', [Validators.required],
      this.validateNameViaServer.bind(this)),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      this.doubleDotValidator.bind(this)
    ],
      this.validateEmailViaServer.bind(this)
    ),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      // this.matchPassword.bind(this)
    ]),
    myRecaptcha: new FormControl(false, [
      this.checkforAgreements.bind(this)
    ]),
    acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  });

  planDetails = {
    concretePlanId: null,
    createdBy: null,
    createdDate: "0001-01-01T00:00:00",
    description: "100% Free Plan",
    id: "TZW3ou4hevmgAh6EEJ9-dw==",
    isActive: false,
    isDefault: true,
    isDeleted: false,
    isExpired: false,
    isRecommended: false,
    modifiedBy: null,
    modifiedDate: "0001-01-01T00:00:00",
    name: "The Starter Plan",
    noOfEntries: 50,
    noOfForms: 10,
    noOfUsers: 1,
    paymentPercentage: null,
    planType: null,
    plandetails: null,
    price: 0,
    returnPlanList: null,
    returnStatus: false,
    showOnHome: false,
    storageSize: "2097152",
    storageUnit: null,
    stripePlanId: null,
    type: null,
    workSpaceId: null,
  };

  isFormSubmitted: boolean = false;
  showPlanPage: boolean = false;
  public masterPlans: any[] = [];
  public calulateUites = storageCountFormatter;

  constructor(private http: HttpService, private router: Router, private toastService: ToastService) { }

  checkforAgreements({ value }: AbstractControl): any {
    if (!value) {
      return {
        isRefused: true
      }
    }
    return null
  }

  validateNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    this.apiGoingOn = true;
    return this.http.call('checkEmail', 'POST', { WorkSpaceName: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
        this.apiGoingOn = false;
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }))
  }

  validateEmailViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    this.apiGoingOn = true;
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
        this.apiGoingOn = false;
        if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }))
  }

  passwordvalidation(): boolean {
    if  (!this.confirmPassword?.value || this.confirmPassword?.value === "" || !this.Password?.value || this.Password?.value === "") {
      return true;
    }

    return this.matchPass();
  }

  matchPass(): boolean {

    if ((this.confirmPassword?.dirty || this.confirmPassword?.touched)) {
      if (this.confirmPassword?.value !== this.Password?.value) {
        return true;

      }
    }

    return false
  }

  matchPassword({ value }: AbstractControl): any {
    return this.Password?.value === value ? null : { passwordNotMatched: true };
  }

  doubleDotValidator({ value }: AbstractControl): any {
    if (value?.includes('@')) {
      if (/[~`!#$%\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(value)) {
        return { specialCharInDomain: true };
      }
      if (value.split('@')[1]?.includes('..')) {
        return {doubleDotInDomain: true};
      }
    }
    return null;
  }

  ngOnInit(): void {
    this.http.call('getMasterPlanDetailById', 'POST', { 'ID': '' }).subscribe(res => {
      this.planDetails = res;
      //this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
    })
  }

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    console.log('Something went long when loading the Google reCAPTCHA')
  }

  planChange(){
    this.showPlanPage = true;
    this.http.call('getMasterPlansWithoutPagination', 'GET', '').subscribe(res => {
      this.masterPlans = res;
    })
  }

  updateSelectedPlan(plan: any){
    this.showPlanPage = false;
    this.planDetails = plan;
  }

  submit() {
    this.isFormSubmitted = true;
    const obj = {
      ...JSON.parse(JSON.stringify(this.signupForm.value)),
      IsLinkActivated: false,
      IsSuperAdmin: false,
      PlanId: this.planDetails.id,
      planDetails: this.planDetails
    };
    delete obj.confirmPassword;
    delete obj.acceptAgreement;
    this.http.call('signup', 'POST', obj).subscribe(res => {
      this.toastService.showSuccess('Account Saved Successfully!');
      this.isFormSubmitted = false;
      this.router.navigate(['user/register-confirm'])
    })
  }

  get FirstName() { return this.signupForm.get('FirstName'); }
  get LastName() { return this.signupForm.get('LastName'); }
  get PhoneNumber() { return this.signupForm.get('PhoneNumber'); }
  get WorkSpaceName() { return this.signupForm.get('WorkSpaceName'); }
  get Email() { return this.signupForm.get('Email'); }
  get Password() { return this.signupForm?.get('Password'); }
  get confirmPassword() { return this.signupForm?.get('confirmPassword'); }
  get f() { return this.signupForm.controls; }

}
