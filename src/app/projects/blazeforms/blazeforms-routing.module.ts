import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlazeformsComponent } from './blazeforms.component';

const routes: Routes = [{ path: ':workspaceName/:formName', component: BlazeformsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlazeformsRoutingModule { }
