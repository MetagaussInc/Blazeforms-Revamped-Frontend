import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { ExportedViewComponent } from './components/exported-view/exported-view.component';


@NgModule({
  declarations: [
    FormBuilderComponent,
    UiInputComponent,
    ExportedViewComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    FormsModule,
    NgxDnDModule.forRoot()
  ]
})
export class FormBuilderModule { }
