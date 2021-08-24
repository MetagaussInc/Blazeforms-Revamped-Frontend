import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlazeformsRoutingModule } from './blazeforms-routing.module';
import { BlazeformsComponent } from './blazeforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilderModule } from '../form-builder/form-builder.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillPayComponent } from './bill-pay/bill-pay.component';


@NgModule({
  declarations: [
    BlazeformsComponent,
    BillPayComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BlazeformsRoutingModule,
  ]
})
export class BlazeformsModule { }
