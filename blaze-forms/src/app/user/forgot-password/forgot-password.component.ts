import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

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
  ]);
  constructor(private store: Store, private router: Router) {

  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.email.value);
    this.isFormSubmitted = true;
    this.router.navigate(['/home'])
  }
}
