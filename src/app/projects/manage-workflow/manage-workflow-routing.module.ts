import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalGuard } from 'src/app/config/gaurds/external.gaurd';
import { ManageWorkflowComponent } from './manage-workflow.component';

const routes: Routes = [{ path: '', component: ManageWorkflowComponent, canActivate: [ExternalGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWorkflowRoutingModule { }
