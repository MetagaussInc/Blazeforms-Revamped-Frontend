import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlazeformsComponent } from './blazeforms.component';
import { EntrySubmittedComponent } from './entry-submitted/entry-submitted.component';

const routes: Routes = [
  { path: ':workspaceName/:formName', component: BlazeformsComponent },
  { path: ':workspaceName/:formName/:entry', component: BlazeformsComponent },
  { path: 'form-submitted', component: EntrySubmittedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlazeformsRoutingModule { }
