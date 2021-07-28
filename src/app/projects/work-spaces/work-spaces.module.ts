import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkSpacesRoutingModule } from './work-spaces-routing.module';
import { WorkSpacesComponent } from './work-spaces.component';


@NgModule({
  declarations: [
    WorkSpacesComponent
  ],
  imports: [
    CommonModule,
    WorkSpacesRoutingModule
  ]
})
export class WorkSpacesModule { }
