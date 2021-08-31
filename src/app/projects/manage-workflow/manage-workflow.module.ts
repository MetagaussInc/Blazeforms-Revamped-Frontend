import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageWorkflowRoutingModule } from './manage-workflow-routing.module';
import { ManageWorkflowComponent } from './manage-workflow.component';


@NgModule({
  declarations: [
    ManageWorkflowComponent
  ],
  imports: [
    CommonModule,
    ManageWorkflowRoutingModule
  ]
})
export class ManageWorkflowModule { }
