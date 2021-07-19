import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormsHeaderComponent } from './forms-header/forms-header.component';
import { FormsFooterComponent } from './forms-footer/forms-footer.component';
import { AddFormModalComponent } from './components/add-form-modal/add-form-modal.component';
import { EditFormModalComponent } from './components/edit-form-modal/edit-form-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { RestrictFormEntriesComponent } from './restrict-form-entries/restrict-form-entries.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormsComponent,
    FormsHeaderComponent,
    FormsFooterComponent,
    AddFormModalComponent,
    EditFormModalComponent,
    ConfirmModalComponent,
    RestrictFormEntriesComponent,
    TreeSelectComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class FormModule { }
