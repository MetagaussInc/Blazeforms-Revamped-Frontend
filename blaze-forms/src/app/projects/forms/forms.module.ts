import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsHeaderComponent } from './forms-header/forms-header.component';
import { FormsFooterComponent } from './forms-footer/forms-footer.component';


@NgModule({
  declarations: [
    FormsComponent,
    FormsHeaderComponent,
    FormsFooterComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
