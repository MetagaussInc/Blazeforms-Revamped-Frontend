import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilderRoutingModule } from './form-builder-routing.module';
import { FormBuilderComponent } from './form-builder.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiInputComponent } from './components/ui-input/ui-input.component';
import { ExportedViewComponent } from './components/exported-view/exported-view.component';
import { BuildComponent } from './components/build/build.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConditionalRendereringModalComponent } from './components/conditional-renderering-modal/conditional-renderering-modal.component';
import { SignatureFieldComponent } from './components/signature-field/signature-field.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AddStripeAccountComponent } from './components/add-stripe-account/add-stripe-account.component';

@NgModule({
  declarations: [
    FormBuilderComponent,
    UiInputComponent,
    ExportedViewComponent,
    BuildComponent,
    ConditionalRendereringModalComponent,
    SignatureFieldComponent,
    AddStripeAccountComponent
  ],
  imports: [
    CommonModule,
    FormBuilderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgxDnDModule.forRoot(),
    SignaturePadModule
  ] 
})
export class FormBuilderModule { }
