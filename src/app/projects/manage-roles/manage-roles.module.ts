import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageRolesRoutingModule } from './manage-roles-routing.module';
import { ManageRolesComponent } from './manage-roles.component';
import { ManageRolesHeaderComponent } from './manage-roles-header/manage-roles-header.component';
import { ManageRolesFooterComponent } from './manage-roles-footer/manage-roles-footer.component';


@NgModule({
  declarations: [
    ManageRolesComponent,
    ManageRolesHeaderComponent,
    ManageRolesFooterComponent,
  ],
  imports: [
    CommonModule,
    ManageRolesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ManageRolesModule { }
