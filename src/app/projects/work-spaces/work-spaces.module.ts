import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkSpacesRoutingModule } from './work-spaces-routing.module';
import { WorkSpacesComponent } from './work-spaces.component';
//import { WorkSpacesHeaderComponent } from './work-spaces-header/work-spaces-header.component';
//import { WorkSpacesFooterComponent } from './work-spaces-footer/work-spaces-footer.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteWorkSpacesComponent } from './delete-work-spaces/delete-work-spaces.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    WorkSpacesComponent,
    //WorkSpacesHeaderComponent,
    //WorkSpacesFooterComponent,
    DeleteWorkSpacesComponent
  ],
  imports: [
    CommonModule,
    WorkSpacesRoutingModule,
    FormsModule,
    NgbModule,
    InfiniteScrollModule
  ]
})
export class WorkSpacesModule { }
