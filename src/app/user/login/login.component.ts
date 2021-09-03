import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLogin } from 'src/app/+state/user/user.actions';
import { selectUserState, getUserLoginAttempts } from 'src/app/+state/user/user.selectors';
import { ToastService } from '../../shared/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormSubmitted: boolean = false;
  showHidePass = false;
  isBlockUser: boolean = false;
  timerDisplay: any;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  constructor(private store: Store, private router: Router, private toastService: ToastService) {
    this.store.select(selectUserState).subscribe((res: any) => {
      if (res.apiCompleted) {
        this.isFormSubmitted = false;
        if (res.user) {
          this.router.navigate(['/forms'])
        }
      }
    });
    this.store.select(getUserLoginAttempts).subscribe((res: any) => {
      if(res == 5){
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

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  timer(minute: any) {
    // let minute = 1;
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
        this.isBlockUser = false;
        clearInterval(timer);
      }
    }, 1000);
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get f() { return this.loginForm.controls;}
}
