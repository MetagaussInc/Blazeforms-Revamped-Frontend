import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile.component';
import { MyProfileGeneralComponent } from './my-profile-general/my-profile-general.component';
import { MyProfileChangePasswordComponent } from './my-profile-change-password/my-profile-change-password.component';
import { MyProfileFingerprintComponent } from './my-profile-fingerprint/my-profile-fingerprint.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    MyProfileGeneralComponent,
    MyProfileChangePasswordComponent,
    MyProfileFingerprintComponent,
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class MyProfileModule { }
