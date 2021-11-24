import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPlanComponent } from './buy-plan/buy-plan.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InviteComponent } from './invite/invite.component';
import { LoginComponent } from './login/login.component';
import { RegisterConfirmComponent } from './register-confirm/register-confirm.component';
import { RegisterFailedComponent } from './register-failed/register-failed.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { 
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'register-confirm',
        component: RegisterConfirmComponent
      },
      {
        path: 'register-success',
        component: RegisterSuccessComponent
      },
      {
        path: 'register-error',
        component: RegisterFailedComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'invite',
        component: InviteComponent
      },
      {
        path: 'upgrade-plan',
        component: BuyPlanComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
