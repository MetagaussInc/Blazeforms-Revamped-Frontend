import { Component, OnInit, TemplateRef } from '@angular/core';
import {ToastService} from '../shared/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [header]="toast.headertext"
      [class]="toast.classname"
      [autohide]="toast.autohide"
      [delay]="toast.delay || 5000"
      (hide)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'},
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}
