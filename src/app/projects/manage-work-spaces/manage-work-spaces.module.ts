import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageWorkSpacesRoutingModule } from './manage-work-spaces-routing.module';
import { ManageWorkSpacesComponent } from './manage-work-spaces.component';
//import { ManageWorkSpacesHeaderComponent } from './manage-work-spaces-header/manage-work-spaces-header.component';
//import { ManageWorkSpacesFooterComponent } from './manage-work-spaces-footer/manage-work-spaces-footer.component';
import { ManageWorkSpacesGeneralComponent } from './manage-work-spaces-general/manage-work-spaces-general.component';
import { ManageWorkSpacesAccountSettingsComponent } from './manage-work-spaces-account-settings/manage-work-spaces-account-settings.component';
import { ManageWorkSpacesBrandingComponent } from './manage-work-spaces-branding/manage-work-spaces-branding.component';
import { ManageWorkSpacesUsersComponent } from './manage-work-spaces-users/manage-work-spaces-users.component';
import { ManageWorkSpacesRolesComponent } from './manage-work-spaces-roles/manage-work-spaces-roles.component';
import { ManageWorkSpacesSubscriptionComponent } from './manage-work-spaces-subscription/manage-work-spaces-subscription.component';
import { ManageWorkSpacesReferralProgramComponent } from './manage-work-spaces-referral-program/manage-work-spaces-referral-program.component';
import { AddAccountsModalComponent } from './manage-work-spaces-account-settings/add-accounts-modal/add-accounts-modal.component';
import { DeleteAccountsModalComponent } from './manage-work-spaces-account-settings/delete-accounts-modal/delete-accounts-modal.component';
import { InviteUserModalComponent } from './manage-work-spaces-users/invite-user-modal/invite-user-modal.component';
import { DeleteUserModalComponent } from './manage-work-spaces-users/delete-user-modal/delete-user-modal.component';
import { DeleteRoleModalComponent } from './manage-work-spaces-roles/delete-role-modal/delete-role-modal.component';
import { AddReferralLinkModalComponent } from './manage-work-spaces-referral-program/add-referral-link-modal/add-referral-link-modal.component';
import { ReferFriendModalComponent } from './manage-work-spaces-referral-program/refer-friend-modal/refer-friend-modal.component';
import { SwiperModule } from 'swiper/angular';
import { AddOrganizationWithoutSuperAdminComponent } from './add-organization-without-super-admin/add-organization-without-super-admin.component';
import { StorageCountPipe } from '../../shared/storage-count.pipe';

@NgModule({
  declarations: [
    ManageWorkSpacesComponent,
    //ManageWorkSpacesHeaderComponent,
    //ManageWorkSpacesFooterComponent,
    ManageWorkSpacesGeneralComponent,
    ManageWorkSpacesAccountSettingsComponent,
    ManageWorkSpacesBrandingComponent,
    ManageWorkSpacesUsersComponent,
    ManageWorkSpacesRolesComponent,
    ManageWorkSpacesSubscriptionComponent,
    ManageWorkSpacesReferralProgramComponent,
    AddAccountsModalComponent,
    DeleteAccountsModalComponent,
    InviteUserModalComponent,
    DeleteUserModalComponent,
    DeleteRoleModalComponent,
    AddReferralLinkModalComponent,
    ReferFriendModalComponent,
    AddOrganizationWithoutSuperAdminComponent,
    StorageCountPipe
  ],
  imports: [
    CommonModule,
    ManageWorkSpacesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SwiperModule
  ]
})
export class ManageWorkSpacesModule { }
