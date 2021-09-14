import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLogin } from 'src/app/+state/user/user.actions';
import { selectUserState, getUserLoginAttempts } from 'src/app/+state/user/user.selectors';
import { ToastService } from '../../shared/toast.service';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  isFormSubmitted: boolean = false;
  showHidePass = false;
  isBlockUser: boolean = false;
  timerDisplay: any;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      this.doubleDotValidator.bind(this)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  userSubscription$: any;
  loginAttempts$: any;
  constructor(private store: Store, private router: Router, private toastService: ToastService, private http: HttpService) {
    this.userSubscription$ = this.store.select(selectUserState).subscribe((res: any) => {
      if (res.apiCompleted) {
        this.isFormSubmitted = false;
        if (res.user) {
          this.router.navigate(['/forms'])
        }
      }
    });
    this.loginAttempts$ = this.store.select(getUserLoginAttempts).subscribe((res: any) => {
      if(res >= 3){
        this.isBlockUser = true;
        this.timer(1);
      }
    })
  }

  ngOnInit(): void {
  }

  submit() {
    const props = {
      mappingKey: 'login',
      payload: this.loginForm.value
    }
    this.isFormSubmitted = true;
    this.store.dispatch(userLogin({props}))
  }

  showHidePassword(){
    this.showHidePass = !this.showHidePass;
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

  // @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
  //   e.preventDefault();
  // }

  timer(minute: any) {
    let seconds: number = minute * 30;
    let textSec: any = "0";
    let statSec: number = 30;
    const prefix = minute < 10 ? "0" : "";
    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 29;
      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;
      this.timerDisplay = `${textSec}`;
      if (seconds == 0) {
        this.http.call('resetAccessFailedCount', 'POST', {email: this.loginForm.value.email}).subscribe(res => {
          this.isBlockUser = false;
          clearInterval(timer);
        });
      }
    }, 1000);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get f() { return this.loginForm.controls;}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSubscription$.unsubscribe()
    this.loginAttempts$.unsubscribe()
  }
}
