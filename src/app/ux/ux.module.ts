import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UxRoutingModule } from './ux-routing.module';
import { UxComponent } from './ux.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { TSelectComponent } from './t-select/t-select.component';
import {MatTreeModule } from '@angular/material/tree';
import {MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UxComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    TSelectComponent
  ],
  imports: [
    CommonModule,
    UxRoutingModule,
    MatTreeModule,
    MatIconModule,
    FormsModule
  ]
})
export class UxModule { }
