import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isFormSubmitted: boolean = false;
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ],
  this.checkEmailExist.bind(this));
  
  constructor(private router: Router, private http: HttpService) {  }

  checkEmailExist({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(500),
        map((response: any) => {
          if (!response.data) {
            return {
              emailNotExists: true
            };
          }
          return null;
        }))
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(JSON.stringify(this.email.value));
    this.isFormSubmitted = true;
    let model = { 'Email': this.email.value };
    this.http.call('SendResetPasswordLinq', 'POST', model).subscribe(res => {
      console.log(res);
    })
    this.router.navigate(['/home'])
  }
}
