import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  isFormSubmitted: boolean = false;
  email: string = '';
  linkActivated = false;
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ])
  confirmPassword = new FormControl('', [
    Validators.required,
    // this.matchPassword.bind(this)

  ])
  queryParamsSubscription$: any;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {
    this.queryParamsSubscription$ = this.route.queryParams.subscribe((params: any) => {
      this.Activate(params['key']);
    });
  }

  Activate(key: any) {
    this.http.call('activateResetPasswordLink', 'POST', {ResetPasswordKey: key}).subscribe(
      data => {
        if (data.data) {
          this.linkActivated = true;
          this.http.call('deactivateResetPasswordLink', 'POST', {ResetPasswordKey: key}).subscribe(
            data => {
              if (data) {
                this.email = data.email;
              }
            })
        } else {
          this.router.navigate(['user/register-error']);
        }
      });
       
  }
  matchPassword({ value }: AbstractControl): any {
    return this.password?.value === value ? null : { passwordNotMatched: true };
  }

  ngOnInit(): void {
  }

  submit() {
    let model = { Email: this.email, 'Password': this.password.value };
    this.http.call('resetPassword', 'POST', model).subscribe(res => {
    this.isFormSubmitted = true;
     
        this.router.navigate(['user/login'])
    })
  }
}
