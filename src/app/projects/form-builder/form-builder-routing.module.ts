import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalGuard } from 'src/app/config/gaurds/external.gaurd';
import { BuildComponent } from './components/build/build.component';
import { FormBuilderComponent } from './form-builder.component';

const routes: Routes = [
  { path: 'build', component: FormBuilderComponent, canActivate: [ExternalGuard] },
{ path: '', component: BuildComponent, canActivate: [ExternalGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuilderRoutingModule { }
