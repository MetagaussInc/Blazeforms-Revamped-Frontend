import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbSlideEvent, NgbSlideEventSource, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-work-spaces',
  templateUrl: './manage-work-spaces.component.html',
  styleUrls: ['./manage-work-spaces.component.scss']
})
export class ManageWorkSpacesComponent implements OnInit {

  planDetails: any = {};
  organizationSignupForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      this.doubleDotValidator.bind(this)
    ],
      this.validateEmailViaServer.bind(this)
    ),
    PhoneNumber: new FormControl('', [
      Validators.required, Validators.minLength(10),
      Validators.pattern('^[+0-9]{10,14}$')]
    ),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.matchPassword.bind(this)
    ]),
    WorkSpaceName: new FormControl('', [Validators.required],
      this.validateNameViaServer.bind(this)),
    acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  });

  public isOrganizationAdd: boolean = false;
  public isOrganizationEdit: boolean = false;
  public organizationName: any;
  public showPlanPage: boolean = false;
  public masterPlans: any[] = [];

  constructor(private http: HttpService, private router: Router, private modalService: NgbModal, private Activatedroute: ActivatedRoute, config: NgbCarouselConfig) {
    config.pauseOnHover = false;
    config.wrap = true;

    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      console.log(params);
      if(!params.has('action')){
        this.router.navigate(['/work-spaces']);
      }
      if(params.get('action') == 'add'){
        this.isOrganizationAdd = true;
        this.getMasterPlan();
      }
      else{
        if(!params.has('action') || !params.has('id') || !params.has('orgUserId') || !params.has('orgName')){
          this.router.navigate(['/work-spaces']);
        }
        this.isOrganizationEdit = true;
        let orgName: any = params.get('orgName');
        this.organizationName = decodeURIComponent(orgName);
      }
    });
  }

  ngOnInit(): void {}

  checkforAgreements({ value }: AbstractControl): any {
    if (!value) {
      return {
        isRefused: true
      }
    }
    return null
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

  matchPass(): boolean {
    if ((this.confirmPassword?.dirty || this.confirmPassword?.touched)) {
      if (this.confirmPassword?.value !== this.Password?.value) {
        return true;

      }
    }    
    return false
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
          return null;
        }
      )
    )
  }

  matchPassword({ value }: AbstractControl): any {
    return this.Password?.value === value ? null : { passwordNotMatched: true };
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
        }
      )
    )
  }

  submit(){
    const obj = {
      ...JSON.parse(JSON.stringify(this.organizationSignupForm.value)),
      IsLinkActivated: false,
      IsSuperAdmin: true,
      PlanId: this.planDetails.id,
      planDetails: this.planDetails
    };
    delete obj.confirmPassword;
    delete obj.acceptAgreement;
    this.http.call('signup', 'POST', obj).subscribe(res => {
      this.router.navigate(['user/register-confirm'])
    })
  }

  getMasterPlan(){
    this.http.call('getMasterPlanDetailById', 'POST', { 'ID': '' }).subscribe(res => {
      this.planDetails = res;
      this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
    })
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
    this.planDetails.storageSize = ((plan.storageSize) / (1024 * 1024));
  }

  get FirstName() { return this.organizationSignupForm.get('FirstName'); }
  get LastName() { return this.organizationSignupForm.get('LastName'); }
  get PhoneNumber() { return this.organizationSignupForm.get('PhoneNumber'); }
  get WorkSpaceName() { return this.organizationSignupForm.get('WorkSpaceName'); }
  get Email() { return this.organizationSignupForm.get('Email'); }
  get Password() { return this.organizationSignupForm?.get('Password'); }
  get confirmPassword() { return this.organizationSignupForm?.get('confirmPassword'); }
  get f() { return this.organizationSignupForm.controls; }

}
