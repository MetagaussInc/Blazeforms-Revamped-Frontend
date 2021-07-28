import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageWorkSpacesRoutingModule } from './manage-work-spaces-routing.module';
import { ManageWorkSpacesComponent } from './manage-work-spaces.component';


@NgModule({
  declarations: [
    ManageWorkSpacesComponent
  ],
  imports: [
    CommonModule,
    ManageWorkSpacesRoutingModule
  ]
})
export class ManageWorkSpacesModule { }
