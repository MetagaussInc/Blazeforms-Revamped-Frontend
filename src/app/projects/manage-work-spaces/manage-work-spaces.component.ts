import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-work-spaces',
  templateUrl: './manage-work-spaces.component.html',
  styleUrls: ['./manage-work-spaces.component.scss']
})
export class ManageWorkSpacesComponent implements OnInit {

  signupForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(10),
    Validators.pattern('^[+0-9]{10,14}$')]),
    WorkSpaceName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      this.doubleDotValidator.bind(this)
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required
    ]),
    acceptAgreement: new FormControl(false, this.checkforAgreements.bind(this))
  });

  constructor() { }

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

}
