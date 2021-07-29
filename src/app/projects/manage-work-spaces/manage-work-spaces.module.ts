import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ManageWorkSpacesRoutingModule } from './manage-work-spaces-routing.module';
import { ManageWorkSpacesComponent } from './manage-work-spaces.component';
import { ManageWorkSpacesHeaderComponent } from './manage-work-spaces-header/manage-work-spaces-header.component';
import { ManageWorkSpacesFooterComponent } from './manage-work-spaces-footer/manage-work-spaces-footer.component';


@NgModule({
  declarations: [
    ManageWorkSpacesComponent,
    ManageWorkSpacesHeaderComponent,
    ManageWorkSpacesFooterComponent
  ],
  imports: [
    CommonModule,
    ManageWorkSpacesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageWorkSpacesModule { }
