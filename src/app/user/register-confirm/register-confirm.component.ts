import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { DataSharingService } from 'src/app/shared/data-sharing.service';
import { ToastService } from 'src/app/shared/toast.service';
import { storageCountFormatter } from 'src/app/shared/storage-count.pipe';
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { loadStripe } from '@stripe/stripe-js';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss']
})
export class RegisterConfirmComponent implements OnInit {

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
  chargeId: any;
  formValues: any;
  fromPage: string = 'subscription';
  paidUserData: any;
  showBillingSection: boolean = false;
  public calulateUites = storageCountFormatter;
  public showPlanPage: boolean = false;
  public masterPlans: any[] = [];

  stripeKey = window.location.host === "app.blazeforms.com" ? 'pk_live_kgALEKxShS6il7bwDjsg6X1x00MZPQc0de' : 'pk_test_51IclahSHmdevWCqrjzhp4868a8lTtKZ8a4meW7CVlQstDeu7GIPW9ChZEWYvGlBGSiOFIyWLr7N4O43Rrc7IJzUP00Bo6EZPFW';
  stripePromise = loadStripe(this.stripeKey);


  constructor(private dataSharingService: DataSharingService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute, private http: HttpService, private toastService: ToastService) {
    console.log("GetPaidUserRegistrationData", this.dataSharingService.GetPaidUserRegistrationData());
    this.paidUserData = this.dataSharingService.GetPaidUserRegistrationData();
      if(this.paidUserData){
      this.showBillingSection = true;
      this.billingpageData = this.paidUserData.plan;
      this.organizationId = this.paidUserData.user.workspaceId;
      this.organizationBillingForm.patchValue({
        firstName: this.paidUserData.user.firstName,
        lastName: this.paidUserData.user.lastName,
        organization: this.paidUserData.user.workSpaceName,
        billingAddress1: this.paidUserData.user.address1,
        billingAddress2: this.paidUserData.user.address2,
        billingCityName: this.paidUserData.user.cityName,
        billingStateName: this.paidUserData.user.stateName,
        billingPostalCode: this.paidUserData.user.postalCode,
        phoneNumber: this.paidUserData.user.phoneNumber,
        email: this.paidUserData.user.email,
      });
    }
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
    this.formValues = this.organizationBillingForm.value;
    const thisInstance = this;
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: 'pk_test_6M6dPCZWn6kColOQcLy2LB1e',
      locale: 'auto',
      token: function (stripeToken: any) {
        thisInstance.stripeToken = stripeToken.id;
        thisInstance.stripeEmail = stripeToken.email;
        thisInstance.type = stripeToken.card.type;
        if (thisInstance.stripeToken != null && thisInstance.stripeToken != undefined) {
          thisInstance.savePayment(thisInstance);
        }
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

  savePayment(thisInstance: any){
    let recurringEnable = false;
    let planUpgrade = true;
    if(this.fromPage != 'subscription'){
      planUpgrade = false;
    }
    if(thisInstance.organizationBillingForm.value.recuring){
      recurringEnable = true;
    }
    let model = {
      'UserFirstName': thisInstance.organizationBillingForm.value.firstName,
      'UserLastName': thisInstance.organizationBillingForm.value.lastName,
      'Email': thisInstance.organizationBillingForm.value.email,
      'WorkspaceId': thisInstance.organizationId,
      'Address1': thisInstance.organizationBillingForm.value.billingAddress1,
      'Address2': thisInstance.organizationBillingForm.value.billingAddress2,
      'CityName': thisInstance.organizationBillingForm.value.billingCityName,
      'StateName': thisInstance.organizationBillingForm.value.billingStateName,
      'PostalCode': thisInstance.organizationBillingForm.value.billingPostalCode,
      'CountryId': 0,
      'IsActivate': false,
      'PlanId': thisInstance.billingpageData.id,
      'Amount': thisInstance.billingpageData.price,
      'StripeEmail': thisInstance.stripeEmail,
      'StripeToken': thisInstance.stripeToken,
      'Currency': "$",
      'Description': thisInstance.billingpageData.name,
      'UserId': thisInstance.paidUserData.user.id,
      'OverWriteExistingPlan': false,
      'IsPlanUpgrade': planUpgrade,
      'RecurringPayment': recurringEnable,
      'StripePlanid': thisInstance.billingpageData.stripePlanId
    };
    thisInstance.http.call('savePayment', 'POST', model).subscribe((res: any) => {
      thisInstance.toastService.showSuccess('Payment Made Successfully!');
      let userPlanData = {user: '', plan: ''};
      this.dataSharingService.SetPaidUserRegistrationData(userPlanData);
      thisInstance.router.navigate(['user/login']);
    });
  }

  updatePlan(){
    this.showPlanPage = true;
    this.http.call('getMasterPlansWithoutPagination', 'GET', '').subscribe(res => {
      this.masterPlans = res;
    })
  }

  updateSelectedPlan(plan: any){
    this.showPlanPage = false;
    this.billingpageData = plan;
  }

  async checkOut() {
    const stripe: any = await this.stripePromise;
    return stripe;
  }
  buyPlan() {
    this.checkOut().then((res) => {
      console.log(res);
      this.http
        .call("StripeSession", "POST", {
          userInfo: {
            Email: this.paidUserData?.user?.email || "",
          },
          plan: this.billingpageData?.name,
          url: `${window.location.origin}${window.location.pathname}/#/user/login`,
        })
        .subscribe((session) => {
          return res.redirectToCheckout({ sessionId: session.id });
        });
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
