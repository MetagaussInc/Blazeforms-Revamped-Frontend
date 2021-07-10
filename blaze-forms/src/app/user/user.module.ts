import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';

@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      siteKey: '6LeKjH4bAAAAAHs1enkoqyola0dT5VQTxTQftCi2',
      // secretKey: '6LeKjH4bAAAAAMo6XoLdUmbCPOaP61BKEXQJv2QF'
  }),
  ]
})
export class UserModule { }
