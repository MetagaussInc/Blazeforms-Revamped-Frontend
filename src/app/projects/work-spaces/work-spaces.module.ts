import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkSpacesRoutingModule } from './work-spaces-routing.module';
import { WorkSpacesComponent } from './work-spaces.component';
import { WorkSpacesHeaderComponent } from './work-spaces-header/work-spaces-header.component';
import { WorkSpacesFooterComponent } from './work-spaces-footer/work-spaces-footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkSpacesComponent,
    WorkSpacesHeaderComponent,
    WorkSpacesFooterComponent
  ],
  imports: [
    CommonModule,
    WorkSpacesRoutingModule,
    FormsModule
  ]
})
export class WorkSpacesModule { }
