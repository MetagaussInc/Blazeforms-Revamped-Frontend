import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isFormSubmitted: any;
  isSuccessPage: boolean = false;
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ],
  this.checkEmailExist.bind(this));
  
  constructor(private router: Router, private http: HttpService, private toastService: ToastService) {  }

  checkEmailExist({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(500),
        map((response: any) => {
          if (!response.data) {
            this.isFormSubmitted = false;
            return {
              emailNotExists: true,
            };
          }
          return null;
        }))
  }

  ngOnInit(): void {
  }

  submit() {
    this.isFormSubmitted = true;
    let model = { 'Email': this.email.value };
    this.http.call('SendResetPasswordLinq', 'POST', model).subscribe(res => {
      this.isFormSubmitted = false;
      if(res.success){
        this.isSuccessPage = true;
        this.toastService.showSuccess(res.message);
      }
      else{
        this.isSuccessPage = false;
        this.toastService.showError(res.message);
      }
    })
  }
}
 