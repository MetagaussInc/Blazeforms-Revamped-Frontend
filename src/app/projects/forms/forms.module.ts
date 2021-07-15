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


@NgModule({
  declarations: [
    FormsComponent,
    FormsHeaderComponent,
    FormsFooterComponent,
    AddFormModalComponent,
    EditFormModalComponent,
    ConfirmModalComponent,
    RestrictFormEntriesComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgbModule
  ]
})
export class FormsModule { }
