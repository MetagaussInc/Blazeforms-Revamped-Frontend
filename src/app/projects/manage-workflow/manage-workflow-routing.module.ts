import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageWorkflowComponent } from './manage-workflow.component';

const routes: Routes = [{ path: '', component: ManageWorkflowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageWorkflowRoutingModule { }
