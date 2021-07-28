import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageWorkSpacesComponent } from './manage-work-spaces.component';

const routes: Routes = [{ path: '', component: ManageWorkSpacesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWorkSpacesRoutingModule { }
