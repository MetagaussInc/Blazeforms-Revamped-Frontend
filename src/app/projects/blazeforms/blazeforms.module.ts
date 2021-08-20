import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlazeformsRoutingModule } from './blazeforms-routing.module';
import { BlazeformsComponent } from './blazeforms.component';
import { FormsModule } from '@angular/forms';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlazeformsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule,
    BlazeformsRoutingModule,
  ]
})
export class BlazeformsModule { }
