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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoveModalComponent } from './move-modal/move-modal.component';
import { TSelectComponent } from 'src/app/ux/t-select/t-select.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { UserPermissionModalComponent } from './components/user-permission-modal/user-permission-modal.component';
import { AddUserPermissionModalComponent } from './components/add-user-permission-modal/add-user-permission-modal.component';

@NgModule({
  declarations: [
    FormsComponent,
    FormsHeaderComponent,
    FormsFooterComponent,
    AddFormModalComponent,
    EditFormModalComponent,
    ConfirmModalComponent,
    RestrictFormEntriesComponent,
    TreeSelectComponent,
    MoveModalComponent,
    TSelectComponent,
    UserPermissionModalComponent,
    AddUserPermissionModalComponent

  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    NgbModule,
    FormsModule,
    MatTreeModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
