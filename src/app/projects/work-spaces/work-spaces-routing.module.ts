import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkSpacesComponent } from './work-spaces.component';

const routes: Routes = [{ path: '', component: WorkSpacesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkSpacesRoutingModule { }
