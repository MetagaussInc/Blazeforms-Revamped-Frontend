import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-manage-work-spaces-billing-info',
  templateUrl: './manage-work-spaces-billing-info.component.html',
  styleUrls: ['./manage-work-spaces-billing-info.component.scss']
})
export class ManageWorkSpacesBillingInfoComponent implements OnInit {

  public billingpageData: any;
  public userInfo: any;
  public organizationId: any;
  public organizationUserId: any;
  public organizationName: any;

  organizationBillingForm = new FormGroup({
    firstName: new FormControl('', [Validators.required] ),
    lastName: new FormControl('', [Validators.required] ),
    organization: new FormControl('', [Validators.required] ),
    billingAddress1: new FormControl('', [Validators.required] ),
    billingAddress2: new FormControl('', [Validators.required] ),
    billingCityName: new FormControl('', [Validators.required] ),
    billingStateName: new FormControl('', [Validators.required] ),
    billingPostalCode: new FormControl('', [Validators.required] ),
    phoneNumber: new FormControl('', [Validators.required] ),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      this.doubleDotValidator.bind(this)
    ]),
    recuring: new FormControl()
  });

  strikeCheckout:any = null;
  stripeEmail: any;
  stripeToken: any;
  globalListener: any;
  date: any = Date.now();
  type: any;

  constructor(private dataSharingService: DataSharingService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute, private http: HttpService, private toastService: ToastService) {
    this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        let orgName: any = params.get('orgName');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.organizationName = decodeURIComponent(orgName);

        let billData = this.dataSharingService.GetBillingpageData();
        if(billData){
          this.billingpageData = JSON.parse(billData);
          this.store.select(selectUserInfo).subscribe(userInfo => {
            this.userInfo = userInfo;
            if(this.userInfo){
              console.log(this.userInfo);
              this.organizationBillingForm.patchValue({
                firstName: this.userInfo.FirstName,
                lastName: this.userInfo.LastName,
                organization: this.organizationName,
                billingAddress1: this.userInfo.Address1,
                billingAddress2: this.userInfo.Address2,
                billingCityName: this.userInfo.CityName,
                billingStateName: this.userInfo.StateName,
                billingPostalCode: this.userInfo.PostalCode,
                phoneNumber: this.userInfo.PhoneNumber,
                email: this.userInfo.Email,
              });
            }
          });
        }
        console.log(this.billingpageData);
      }
    });
  }

  ngOnInit(): void {
    this.stripePaymentGateway();
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

  submit() {
    console.log(this.organizationBillingForm.value);
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_6M6dPCZWn6kColOQcLy2LB1e',
      locale: 'auto',
      token: function (stripeToken: any) {
        this.stripeToken = stripeToken.id;
        this.stripeEmail = stripeToken.email;
        this.type = stripeToken.card.type;
        this.savePayment();
      }
    });

    strikeCheckout.open({
      name: 'Blaze Forms payment',
      email: this.organizationBillingForm.value.email,
      description: this.billingpageData.name,
      amount: parseFloat(this.billingpageData.price) * parseFloat("100"),
    });
  }

  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";
      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_6M6dPCZWn6kColOQcLy2LB1e',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
          }
        });
      }
      window.document.body.appendChild(scr);
    }
  }

  savePayment(){
    let model = {
      'UserFirstName': this.organizationBillingForm.value.firstName,
      'UserLastName': this.organizationBillingForm.value.lastName,
      'Email': this.organizationBillingForm.value.email,
      'WorkspaceId': this.organizationId,
      'Address1': this.organizationBillingForm.value.billingAddress1,
      'Address2': this.organizationBillingForm.value.billingAddress2,
      'CityName': this.organizationBillingForm.value.billingCityName,
      'StateName': this.organizationBillingForm.value.stateName,
      'PostalCode': this.organizationBillingForm.value.billingPostalCode,
      'CountryId': this.userInfo.CountryId,
      'IsActivate': false,
      'PlanId': this.billingpageData.Id,
      'Amount': this.billingpageData.price,
      'StripeEmail': this.stripeEmail,
      'StripeToken': this.stripeToken,
      'Currency': "$",
      'Description': this.billingpageData.name,
      'UserId': this.userInfo.Id,
      'OverWriteExistingPlan': false,
      'IsPlanUpgrade': true,
      'RecurringPayment': this.organizationBillingForm.get('recuring'),
      'StripePlanid': this.billingpageData.stripePlanId
    };
    this.http.call('savePayment', 'POST', model).subscribe(res => {
      this.toastService.showSuccess('Payment Successfully!');
    });
  }

  get firstName() { return this.organizationBillingForm.get('firstName'); }
  get lastName() { return this.organizationBillingForm.get('lastName'); }
  get organization() { return this.organizationBillingForm.get('organization'); }
  get billingAddress1() { return this.organizationBillingForm.get('billingAddress1'); }
  get billingAddress2() { return this.organizationBillingForm.get('billingAddress2'); }
  get billingCityName() { return this.organizationBillingForm?.get('billingCityName'); }
  get billingStateName() { return this.organizationBillingForm?.get('billingStateName'); }
  get billingPostalCode() { return this.organizationBillingForm?.get('billingPostalCode'); }
  get phoneNumber() { return this.organizationBillingForm?.get('phoneNumber'); }
  get email() { return this.organizationBillingForm?.get('email'); }
  get recuring() { return this.organizationBillingForm?.get('recuring'); }
  get f() { return this.organizationBillingForm.controls; }

}
