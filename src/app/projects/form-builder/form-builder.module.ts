import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { ExportedViewComponent } from './components/exported-view/exported-view.component';
import { BuildComponent } from './components/build/build.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConditionalRendereringModalComponent } from './components/conditional-renderering-modal/conditional-renderering-modal.component';


@NgModule({
  declarations: [
    FormBuilderComponent,
    UiInputComponent,
    ExportedViewComponent,
    BuildComponent,
    ConditionalRendereringModalComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    FormsModule,
    NgbModule,
    NgxDnDModule.forRoot(),
  ] 
})
export class FormBuilderModule { }
