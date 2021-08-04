import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private http: HttpService, private router: Router) {
    this.http.call('getMasterPlanDetailById', 'POST', { 'ID': '' }).subscribe(res => {
      this.planDetails = res;
      this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
    })
  }

  ngOnInit(): void {
  }

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
          return null;;
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

  get FirstName() { return this.organizationSignupForm.get('FirstName'); }
  get LastName() { return this.organizationSignupForm.get('LastName'); }
  get PhoneNumber() { return this.organizationSignupForm.get('PhoneNumber'); }
  get WorkSpaceName() { return this.organizationSignupForm.get('WorkSpaceName'); }
  get Email() { return this.organizationSignupForm.get('Email'); }
  get Password() { return this.organizationSignupForm?.get('Password'); }
  get confirmPassword() { return this.organizationSignupForm?.get('confirmPassword'); }
  get f() { return this.organizationSignupForm.controls; }

}
