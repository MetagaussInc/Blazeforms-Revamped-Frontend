import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'angular-google-recaptcha';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterFailedComponent } from './register-failed/register-failed.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BlockPasteDirective } from '../directives/block-paste.directive';
import { SwiperModule } from 'swiper/angular';
import { InviteComponent } from './invite/invite.component';

@NgModule({
  declarations: [
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    RegisterConfirmComponent,
    RegisterSuccessComponent,
    RegisterFailedComponent,
    ResetPasswordComponent,
    BlockPasteDirective,
    InviteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot({
      
      // /**github */ siteKey: '6LdR_KkbAAAAAPgIpLDII97yNaE05-Ayu35OGblf'
      /**stage */siteKey: '6LcsWboaAAAAAIp2o2Ofi_jqqYJgz1QWL6bioP4v'
      /**github */ // secretKey: '6LdR_KkbAAAAAEZkStGEFDPeqYEPjw-uwnKGGuVP'
    //  /**Localhost */ siteKey: '6LeKjH4bAAAAAHs1enkoqyola0dT5VQTxTQftCi2',
      /**Localhost */ // secretKey: '6LeKjH4bAAAAAMo6XoLdUmbCPOaP61BKEXQJv2QF'
    }),
    SwiperModule
  ]
})
export class UserModule { }
