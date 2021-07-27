import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userLogin } from 'src/app/+state/user/user.actions';
import { selectUserState } from 'src/app/+state/user/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormSubmitted: boolean = false;
  showHidePass = false;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  constructor(private store: Store, private router: Router) {
    this.store.select(selectUserState).subscribe((res: any) => {
      if (res.apiCompleted) {
        this.isFormSubmitted = false;
        if (res.user) {
          this.router.navigate(['/forms'])

        }
      }
      console.log(res)
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get f() { return this.loginForm.controls;}

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value)
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
}
