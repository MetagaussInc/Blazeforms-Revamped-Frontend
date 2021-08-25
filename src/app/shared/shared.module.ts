import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportedFormComponent } from '../projects/form-builder/components/exported-form/exported-form.component';
import { SignatureFieldComponent } from '../projects/form-builder/components/signature-field/signature-field.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignaturePadModule } from 'angular2-signaturepad';
//import { StorageCountPipe } from './storage-count.pipe';

@NgModule({
  declarations: [
    ExportedFormComponent,
    SignatureFieldComponent,
    //StorageCountPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SignaturePadModule
  ],
  exports: [
    ExportedFormComponent,
    SignatureFieldComponent
  ]
})
export class SharedModule { }
