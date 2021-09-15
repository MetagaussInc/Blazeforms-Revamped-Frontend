import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toasts: any[] = [];

  showSuccess(msg:any) {
    this.show(msg, {
      //classname: 'bg-success text-light',
      delay: 5000 ,
      autohide: true,
      headertext: 'Success!'
    });
  }
  showError(msg:any) {
    this.show(msg, {
      //classname: 'bg-danger text-light',
      delay: 5000 ,
      autohide: true,
      headertext: 'Error!'
    });
  }
  showCustom(header: any, msg:any) {
    this.show(msg, {
      //classname: 'bg-danger text-light',
      delay: 5000 ,
      autohide: true,
      headertext: header
    });
  }

  // Push new Toasts to array with content and options
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  // Callback method to remove Toast DOM element from view
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}