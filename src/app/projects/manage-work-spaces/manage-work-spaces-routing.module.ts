import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalGuard } from 'src/app/config/gaurds/external.gaurd';
import { ManageWorkSpacesComponent } from './manage-work-spaces.component';

const routes: Routes = [{ path: '', component: ManageWorkSpacesComponent, canActivate: [ExternalGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWorkSpacesRoutingModule { }
