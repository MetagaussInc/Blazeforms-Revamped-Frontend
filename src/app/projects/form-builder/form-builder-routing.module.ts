import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildComponent } from './components/build/build.component';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  { path: 'build', component: FormBuilderComponent },
{ path: '', component: BuildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
