import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  
  queryParamsSubscription$;
  selectedPlanId: any;
  planDetails: any;
  showForm = true;
  userId: any;
  email: any;
  workSpaceId: any;
  user: any;
  mappingKey: any;
  formSubmitted= false;
  key: any;
  constructor(private toastService: ToastService, private route: ActivatedRoute, private http: HttpService, private router: Router) {
    this.queryParamsSubscription$ = this.route.queryParams.subscribe((params: any) => {
      this.mappingKey = params['mappingKey']
      this.key = params['key'];
      this.getExpiredInvitedLink(params['key']);
    });
  }

  getExpiredInvitedLink(key: any) {
    let model = { 'ActivationKey': key };
    this.http.call('GetExpireInvitedLink', 'POST', model).subscribe(
      data => {
        if (!data?.isExpired) {
          this.http.call('GetInvitedUserDetailsForActivation', 'POST', { 'ActivationKey': key }).subscribe(
            data => {

              if(data && data.success) {
                this.showForm = true;
                this.userId = data?.data?.id;
                this.email = data?.data?.email;
                this.workSpaceId = data?.data?.workspaceId;
                this.user = data.data;
              } else {
                this.router.navigate(['user/register-error']);
              }
              if (true) {  // if plan id check with Charan todo
                this.http.call('GetMasterPlanDetailById', 'POST', {Id: null}).subscribe(
                  data => {
                    if (data) {
                      this.selectedPlanId = data.id;
                      this.planDetails = data;
                    }
                    

                  })

              }
              
      
            })
        } else {
          this.router.navigate(['user/register-error']);

        }
        
        

      })
  }

  ngOnInit(): void {
  }


  signupForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
    Validators.pattern('^[+0-9]{10,14}$')]),
    // WorkSpaceName: new FormControl('', [Validators.required],
    //   this.validateNameViaServer.bind(this)),
    // Email: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
    //   this.doubleDotValidator.bind(this)
    // ],
    //   this.validateEmailViaServer.bind(this)
    // ),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      // this.matchPassword.bind(this)
    ]),
    myRecaptcha: new FormControl(true, [
      this.checkforAgreements.bind(this)
    ]),
    acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  });

  isFormSubmitted: boolean = false;
  showPlanPage: boolean = false;
  public masterPlans: any[] = [];
  

  checkforAgreements({ value }: AbstractControl): any {
    if (!value) {
      return {
        isRefused: true
      }
    }
    return null
  }

  validateNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { WorkSpaceName: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }))
  }

  validateEmailViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }))
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
      ActivationKey: this.key,
      // ...JSON.parse(JSON.stringify(this.signupForm.value)),
      Email: this.email,
FirstName: this.signupForm.value.FirstName,
Id: this.userId,
IsLinkActivated: false,
LastName: this.signupForm.value.LastName,
Password: this.signupForm.value.Password,
UserMappingKey: this.mappingKey,
WorkspaceId: this.workSpaceId,



    };
    // delete obj.confirmPassword;
    // delete obj.acceptAgreement;
    console.log(obj);
    this.http.call('ActivateInvitedUser', 'POST', obj).subscribe(res => {
      this.toastService.showSuccess('Account Saved Successfully!');
      this.isFormSubmitted = false;
      this.formSubmitted = true;
      // this.router.navigate(['user/register-confirm'])
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
