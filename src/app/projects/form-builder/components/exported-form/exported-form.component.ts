import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from '@swimlane/ngx-dnd';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { BillPayComponent } from 'src/app/projects/blazeforms/bill-pay/bill-pay.component';

@Component({
  selector: 'app-exported-form',
  templateUrl: './exported-form.component.html',
  styleUrls: ['./exported-form.component.scss']
})
export class ExportedFormComponent implements OnInit {

  @Input() public elements: any;
  @Input() public config: any;
  @Input() public initial: any;
  @Input() public payments: any;
  @Input() public styling: any;
  @Input() public noTabs: any
  @Input() public isPublishPage: any
  @Input() public levelDetails: any;
  strikeCheckout:any = null;
  model = {
    name: ''
  }
  haveTabs: boolean = false;
  active = 0;
  allArr:any = [];
  obj: any = {};
  submitted: boolean = false;
    constructor(private http: HttpService, private modalService: NgbModal, private router: Router) {

    }
  
    ngOnInit(): void {
      console.log(this.elements)
      let count = 0;
      if (this.elements?.length > 0) {
        for (const iterator of this.elements) {
          if (iterator.inputType === 'break') {
            this.haveTabs = true;
            break;
          }
        }
      }
      let arr = [];
      if (this.haveTabs) {
        for (const iterator of this.elements) {
          if (iterator.inputType === 'break' && arr.length > 0 ) {
            this.allArr.push(arr);
            arr = [];
            this.obj[count] = iterator.value;
            count = count + 1;
          } else if (iterator.inputType !== 'break') {
            arr.push(iterator);
          }
        }
        this.allArr.push(arr);
      }
      console.log(this.allArr)
      
      if (this.initial) {
        this.stripePaymentGateway()
      }
    }
  
    checkForDependency(model: any, T: any): boolean {
      const dependUpon = model?.[T];
  
      // if there is no dependency the show element always
      if (!dependUpon) {
        return true;
      }
      const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
      const data = this.elements[dependencyElementIndex].value;
      if (dependUpon.type === 'boolean') {
          if (dependUpon.isFilledOut) {
            return (typeof data === 'number') ? data > -1 : data.length > 0;
          }
          if (dependUpon.isNotFilledOut) {
            return data === 0 || data.length === 0;
          }
      } else {
        if (dependUpon.is) {
          return data === dependUpon.value;
        }
        if (dependUpon.isNot) {
          return data !== dependUpon.value;
        }
        if (dependUpon.contains) {
          return data?.toLowerCase().includes(dependUpon.value);
        }
        if (dependUpon.doesNotContains) {
          return !data?.toLowerCase().includes(dependUpon.value);
        }
        if (dependUpon.endWith) {
          return data.endsWith(dependUpon.value);
        }
        if (dependUpon.doesNotEndWith) {
          return data.endsWith(dependUpon.value);
        } 
        if (dependUpon.startWith) {
          return data.startsWith(dependUpon.value);
        }
        if (dependUpon.doesNotStartWith) {
          return !data.startsWith(dependUpon.value);
        }
      }
      return false;
    }

    getSubTotal() {
      let total = 0;
      this.payments?.forEach((element: any) => {
        total = total + Number(element.value);
      });
      return total;
    }

    getAmountDue() {
      let total = 0;
      let subTotal = this.getSubTotal();
      if (subTotal == 0) {
        return 0;
      }
      this.initial?.extraBill?.forEach((additional: any) => {
        if (additional.type === "dollar") {
          total = total + Number(additional.value);
          additional.calculated =  Number(additional.value);
        } else {
          additional.calculated =  (subTotal * (Number(additional.value) / 100));
          
          total = total + (subTotal * (Number(additional.value) / 100))
        }
      });
      total = total + subTotal;
      return total;
    }
  
    checkForRDependency(model: any, T: any): boolean {
      const dependUpon = model?.[T];
  
      // if there is no dependency the show element always
      if (!dependUpon) {
        return false;
      }
      const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
      const data = this.elements[dependencyElementIndex].value;
      if (dependUpon.type === 'boolean') {
          if (dependUpon.isFilledOut) {
            return (typeof data === 'number') ? data > -1 : data.length > 0;
          }
          if (dependUpon.isNotFilledOut) {
            return data === 0 || data.length === 0;
          }
      } else {
        if (dependUpon.is) {
          return data === dependUpon.value;
        }
        if (dependUpon.isNot) {
          return data !== dependUpon.value;
        }
        if (dependUpon.contains) {
          return data?.toLowerCase().includes(dependUpon.value);
        }
        if (dependUpon.doesNotContains) {
          return !data?.toLowerCase().includes(dependUpon.value);
        }
        if (dependUpon.endWith) {
          return data.endsWith(dependUpon.value);
        }
        if (dependUpon.doesNotEndWith) {
          return data.endsWith(dependUpon.value);
        } 
        if (dependUpon.startWith) {
          return data.startsWith(dependUpon.value);
        }
        if (dependUpon.doesNotStartWith) {
          return !data.startsWith(dependUpon.value);
        }
      }
      return true;
    }

    billPay() {
      // const modalRef: any = this.modalService.open(BillPayComponent, { size: 'lg' })
      // modalRef.componentInstance.config = {
      //   initial: this.initial
      // }
      // modalRef.result.then((result: any) => {
      //   console.log(`Closed with: ${result}`);
      // }, (reason: any) => {
      //   console.log(`Dismissed `);
      // });
      this.checkout(this.getAmountDue())
    }
    checkout(amount: any) {
      console.log(amount);
      const strikeCheckout = (<any>window).StripeCheckout.configure({
        key: this.initial?.accountDetail?.publishableKey,
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken)
          alert('Stripe token generated!');
        }
      });
    
      strikeCheckout.open({
        name: 'Dummy Payment Rohit',
        description: 'Dummy Payment Rohit Desc',
        amount: amount * 100
      });
    }

    stripePaymentGateway() {
      console.log(this.initial)
      if(!window.document.getElementById('stripe-script')) {
        const scr = window.document.createElement("script");
        scr.id = "stripe-script";
        scr.type = "text/javascript";
        scr.src = "https://checkout.stripe.com/checkout.js";
  
        scr.onload = () => {
          this.strikeCheckout = (<any>window).StripeCheckout.configure({
            key: this.initial?.accountDetail?.publishableKey,
            locale: 'auto',
            token: function (token: any) {
              console.log(token)
              alert('Payment via stripe successfull!');
            }
          });
        }
          
        window.document.body.appendChild(scr);
      }
    }
    submitParentForm(parentForm: any){
      let data = '';
      if (this.haveTabs) {
        this.allArr.forEach((arr: any) => {
          arr.forEach((element: any) => {
            if (element.children && element.inputType !== 'addressSection') {
              element.children.forEach((child: any) => {
               data = data + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
              });
            } else if (element.inputType === 'addressSection') {
              data = data + element.name + '='
              element.children.forEach((child: any) => {
                data = data + (child.value || '') + ', '
               });
               data = data + '||'
            }  else if (element.columns) {
              data = data + element.name + '=' + element.rows.length + '||';
            }else {
              data = data + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
            }
          });
        });
      } else {
        this.elements.forEach((element: any) => {
          if (element.children && element.inputType !== 'addressSection') {
            element.children.forEach((child: any) => {
             data = data + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
            });
          } else if (element.inputType === 'addressSection') {
            data = data + element.name + '='
            element.children.forEach((child: any) => {
              data = data + child.value + ', '
             });
             data = data + '||';
          } else if (element.columns) {
            data = data + element.name + '=' + element.rows.length + '||';
          } else {
            data = data + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
          }
        });
      }
      

      console.log(data);
      const payload = {
        EncryptEntryData: false,
FormType: this.levelDetails ? 'WorkFlow' : "Form",
Id: this.config.id, //"2dz77r3bzZJ6UaCmrfOSeg==",
IsValidNotification: false,
Name: this.config.name, //"R2",
PaymentMode: "Cash",
SubmissionSettings: "NOVALUE",
SubmittedWhenStatus: false,
TotalEntries: 1000000000,
UpdatedWhenStatus: false,
// UserName: "admin1223489   blazeforms",
WorkSpaceId: this.config.workSpaceId, // "TXYu0NjodAYzBODQlLqdmg==",
WorkSpaceName: this.config.workspaceName, //"Super_Admin_WorkSpace1",
formEntry: JSON.stringify({
  entry: data,
  status: 'Submitted',
  SubmittedDate: new Date(),
  submittedBy: '',
  levelDetails: this.levelDetails,
  savedElementsWithValue: this.elements
}),
userID: this.config.createdBy, //this.config.userId //"TXYu0NjodAYzBODQlLqdmg==",
      }
      this.http.call('SaveFormEntry', 'POST', payload).subscribe(res => {
        this.router.navigate(['blazeforms/form-submitted'])
      })
    }

    viewLevelSection(form: any): boolean {
      return this.levelDetails?.enabledLevelId?.includes(form.levelId);
    }

    enableLevelSection(form: any): boolean {
      return this.levelDetails?.disabledLevel?.includes(form.levelId);

    }

    addRow(form: any) {
      if (!form.rows) {
        form.rows = [];
      }
      const obj: any = {}
      form.columns.forEach((column: any) => {
        obj[column.name] = column.value;
      });
      form.rows.push(obj)
    }

}
