import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';
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
  @Input() public entryId: any;
  @Output() inputUpdateEvent: EventEmitter<any> = new EventEmitter()

  string: any;
  strikeCheckout: any = null;
  model = {
    name: ''
  }
  haveTabs: boolean = false;
  active = 0;
  allArr: any = [];
  tabName: any = [];
  obj: any = {};
  submitted: boolean = false;
  constructor(private http: HttpService, private modalService: NgbModal, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.levelDetails)
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
      this.elements.forEach((element: any) => {
        if (element.inputType === 'break') {
          this.tabName.push(element.value);
        }
      });
      for (const iterator of this.elements) {
        if (iterator.inputType === 'break' && arr.length > 0) {
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
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon?.elementId);
    const data = this.elements[dependencyElementIndex]?.value;
    if (dependUpon?.type === 'boolean') {
      if (dependUpon?.isFilledOut) {
        return (typeof data === 'number') ? data > -1 : data?.length > 0;
      }
      if (dependUpon?.isNotFilledOut) {
        return data === 0 || data?.length === 0;
      }
    } else {
      if (dependUpon?.is) {
        return data === dependUpon?.value;
      }
      if (dependUpon?.isNot) {
        return data !== dependUpon?.value;
      }
      if (dependUpon?.contains) {
        return data?.toLowerCase().includes(dependUpon?.value);
      }
      if (dependUpon?.doesNotContains) {
        return !data?.toLowerCase().includes(dependUpon?.value);
      }
      if (dependUpon?.endWith) {
        return data.endsWith(dependUpon?.value);
      }
      if (dependUpon?.doesNotEndWith) {
        return data?.endsWith(dependUpon?.value);
      }
      if (dependUpon.startWith) {
        return data?.startsWith(dependUpon?.value);
      }
      if (dependUpon.doesNotStartWith) {
        return !data?.startsWith(dependUpon?.value);
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
        additional.calculated = Number(additional.value);
      } else {
        additional.calculated = (subTotal * (Number(additional.value) / 100));

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
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId);
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
        return (data === dependUpon.value);
      }
      if (dependUpon.isNot) {
        return (data !== dependUpon.value);
      }
      if (dependUpon.contains) {
        return (data?.toLowerCase().includes(dependUpon.value));
      }
      if (dependUpon.doesNotContains) {
        return (!data?.toLowerCase().includes(dependUpon.value));
      }
      if (dependUpon.endWith) {
        return (data.endsWith(dependUpon.value));
      }
      if (dependUpon.doesNotEndWith) {
        return (data.endsWith(dependUpon.value));
      }
      if (dependUpon.startWith) {
        return (data.startsWith(dependUpon.value));
      }
      if (dependUpon.doesNotStartWith) {
        return (!data.startsWith(dependUpon.value));
      }
    }
    return true;
  }

  billPay(formEntryId: any) {
    this.checkout(this.getAmountDue(), formEntryId)
  }
  checkout(amount: any, formEntryId: any) {
    const thisInstance = this;
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: this.initial?.accountDetail?.publishableKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        // alert('Stripe token generated!');
        thisInstance.updateEntry(stripeToken.email, stripeToken.id,formEntryId)
      }
    });

    strikeCheckout.open({
      name: 'Blazeforms',
      description: 'Blazeforms Payment Gateway',
      amount: amount * 100
    });
  }

  stripePaymentGateway() {
    if (!window.document.getElementById('stripe-script')) {
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

  updateEntry(email: any, token: any, formEntryId: any) {
    const payload  = {
      Amount: this.getAmountDue(),
Description: "BlazeForms Payment Gateway",
FormEntriesId: formEntryId,
SecretKey: this.initial?.accountDetail?.secretKey,
StripeEmail: email,
StripeToken: token
    }
    this.http.call('SaveWorkspacePayment', 'POST', payload).subscribe(res => {

     this.router.navigate(['blazeforms/form-submitted'], {queryParams: {
      amount: res.amount,
      chargeId: res.chargeId,
     }})

    })
  }

  getDataString(array: any, dataRef: string) {
    // let data = dataRef;
      array.forEach((element: any) => {
        if (element.children && element.inputType !== 'addressSection' && element.inputType !== 'levelSection' && element.inputType !== 'nameSection') {
          element.children.forEach((child: any) => {
            this.string = this.string + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
          });
        } else if (element.inputType === 'addressSection' || element.inputType === 'nameSection') {
          this.string = this.string + element.uiIndexId + '=' + element.name + '='
          element.children.forEach((child: any) => {
            if (child.value?.length > 1) {
              this.string = this.string + child.value + ', '
            }
          });
          this.string = this.string + '||';

        } else if (element.ratingOptions) {
          this.string = this.string + element.uiIndexId + '=' + element.name + '=';
          element.ratingOptions.forEach((child: any) => {
            this.string = this.string + child.value + ', '
          });
          this.string = this.string + '||';
        }else if (element.childSection) {
          this.string = this.string + element.uiIndexId + '=' + element.name + '=' + element?.childSection?.length + '||';
        }else if (element.columns) {
          this.string = this.string + element.uiIndexId + '=' + element.name + '=' + element?.rows?.length + '||';
        }else if (element.children && element.inputType === "levelSection") {
          this.getDataString(element.children, this.string)
        } if (element.inputType === 'date') {
          this.string = this.string + element.uiIndexId + '=' + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : (element.value.day +'/'+ element.value.month +'/'+ element.value.year)) + '||'
        } else {
          this.string = this.string + element.uiIndexId + '=' + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
        }
      });
    return this.string;
  }

  checkForRequired(): boolean {
    let yes = false;
    for (const element of this.elements) {
      if (this.checkForRDependency(element, 'reqDependUpOn') ) {
        element.isRequired = true
        yes = true;
      } else {
        element.isRequired = false
      }
    }
    return yes;
  }
  submitParentForm(parentForm: any) {

    if (this.checkForRequired()) {
      this.submitted = true
      return;
    }
    
    let ddata = '';

    // if (this.haveTabs) {
    //   this.allArr.forEach((arr: any) => {
    //     arr.forEach((element: any) => {
    //       if (element.children && element.inputType !== 'addressSection' && element.inputType !== 'nameSection') {
    //         element.children.forEach((child: any) => {
    //           data = data + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
    //         });
    //       } else if (element.inputType === 'addressSection'|| element.inputType === 'nameSection') {
    //         data = data + element.uiIndexId + '=' + element.name + '='
    //         element.children.forEach((child: any) => {
    //           data = data + (child.value || '') + ', '
    //         });
    //         data = data + '||'
    //       }else if (element.ratingOptions) {
    //         data = data + element.uiIndexId + '=' + element.name + '=';
    //         element.ratingOptions.forEach((child: any) => {
    //           data = data + child.value + ', '
    //         });
    //         data = data + '||';
    //       }else if (element.childSection) {
    //         data = data + element.uiIndexId + '=' + element.name + '=' + element?.childSection?.length + '||';
    //       } else if (element.columns) {
    //         data = data + element.uiIndexId + '=' + element.name + '=' + element.rows.length + '||';
    //       } else {
    //         data = data + element.uiIndexId + '=' + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
    //       }
    //     });
    //   });
    // } else {
    //   this.elements.forEach((element: any) => {
    //     if (element.children && element.inputType !== 'addressSection' && element.inputType !== 'nameSection') {
    //       element.children.forEach((child: any) => {
    //         data = data + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
    //       });
    //     } else if (element.inputType === 'addressSection' || element.inputType === 'nameSection') {
    //       data = data + element.uiIndexId + '=' + element.name + '='
    //       element.children.forEach((child: any) => {
    //         data = data + child.value + ', '
    //       });
    //       data = data + '||';
    //     } else if (element.ratingOptions) {
    //       data = data + element.uiIndexId + '=' + element.name + '=';
    //       element.ratingOptions.forEach((child: any) => {
    //         data = data + child.value + ', '
    //       });
    //       data = data + '||';
    //     }else if (element.childSection) {
    //       data = data + element.uiIndexId + '=' + element.name + '=' + element?.childSection?.length + '||';
    //     }else if (element.columns) {
    //       data = data + element.uiIndexId + '=' + element.name + '=' + element?.rows?.length + '||';
    //     }else if (element.children && element.inputType === "levelSection") {
    //        element.children.forEach((child: any) => {
    //         data = data + child.name + '=' + ((!child.value || child.value.length === 0) ? 'No_value' : child.value) + '||'
    //       });
    //     } else {
    //       data = data + element.uiIndexId + '=' + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
    //     }
    //   });
    // }

    if (this.haveTabs) {
      ddata = this.getDataString(this.allArr, ddata)
    } else {
      ddata = this.getDataString(this.elements, ddata)
    }

    // return;
    if (this.getAmountDue() > 0) {
      let string = '';
        string = `${'Total Payment'}=${'Total Payment'}=${this.getAmountDue()} || ${'Payment Mode'}=${'Payment Mode'}=${this.initial?.selectedPaymentOption === 'Card' ? 'Card' : 'Cash'} ||`;
        ddata = ddata + string;
    }

    const payload = {
      EncryptEntryData: false,
      FormType: this.levelDetails ? 'WorkFlow' : "Form",
      Id: this.config.id, //"2dz77r3bzZJ6UaCmrfOSeg==",
      IsValidNotification: false,
      Name: this.config.name, //"R2",
      PaymentMode: this.initial?.selectedPaymentOption === 'Card' ? 'Card' : 'Cash',
      SubmissionSettings: "NOVALUE",
      SubmittedWhenStatus: false,
      TotalEntries: 1000000000,
      UpdatedWhenStatus: false,
      // UserName: "admin1223489   blazeforms",
      WorkSpaceId: this.config.workSpaceId, // "TXYu0NjodAYzBODQlLqdmg==",
      WorkSpaceName: this.config.workspaceName, //"Super_Admin_WorkSpace1",
      formEntry: JSON.stringify({
        entry: ddata,
        status: 'Submitted',
        SubmittedDate: new Date(),
        submittedBy: '',
        levelDetails: this.levelDetails,
        savedElementsWithValue: this.elements
      }),
      ...(this.entryId && {FormEntryId : this.entryId}),
      userID: this.config.createdBy, //this.config.userId //"TXYu0NjodAYzBODQlLqdmg==",
    }
    this.http.call('SaveFormEntry', 'POST', payload).subscribe(res => {
      if (this.initial?.selectedPaymentOption === 'Card') {
        this.billPay(res.formEntryId)
      } else {
        this.router.navigate(['blazeforms/form-submitted'])
      }
    })
  }

  checkBox($event: any, model: any, option: any) {
    if (model.value.includes(option)) {
      model.value = model.value.filter((x: any) => x !== option);
    } else {
      model.value.push(option);
    }
    this.inputUpdateEvent.emit();
  }

  validateNumber(event: any, decimal: number) {    
    if (event.target.value?.split('.')?.[1]?.length > decimal) {
      const v = (event.target?.value)?.toString()?.split('');
      v.pop();
      event.target.value = Number(v?.join(''));
    }
    // const reg = /^-?\d*(\.\d{0,2})?$/;
    // let input = event.target.value + String.fromCharCode(event.charCode);
    // if (!reg.test(input)) {
    //     event.preventDefault();
    // }
}

  checkMobileNumber(form: any) {
    if (/[~`!#$%\^&*+=\-a-z\[\]\\';,/{}()|\\":<>\?]/g.test(form.value) && form.type === 'US') {
      return true;
    } else if (/[~`!#$%\^&*=\a-z\[\]\\';,/{}|\\":<>\?]/g.test(form.value) && form.type !== 'US') {
      return true;
    }
    return false;

  }

  addSection(form: any) {
    const formInstance = JSON.parse(JSON.stringify(form.childSection[form.childSection.length - 1]));
    formInstance.uiIndexId = formInstance.uiIndexId+ 'section' + form.childSection.length + 1
    form.childSection.push(formInstance);
  }

  onFileChange(event: any, form: any) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // if (file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/jpeg') {
        let fileSize = ((file.size) / (1024 * 1024));
        if(fileSize < form.fileSize && form.value?.length < form.numberOfFile){
          form.message = null;
          reader.readAsDataURL(file);    
          reader.onload = () => {   
            console.log('yes')
            form.value.push({
              name: file.name,
              file: reader.result,
              type: file.type
            })
            // this.fileSource = reader.result;
            // this.logoType = file.type;
          };
        } else
        if (fileSize > form.fileSize) {
          form.message = 'File size should not more than ' + form.fileSize + ' MB';
        } else if (form.value.length >= form.numberOfFile) {
          form.message = 'You can upload upto ' + form.numberOfFile + ' files';
        }
      // }
    }
  }

  viewLevelSection(form: any): boolean {
    return this.levelDetails?.enabledLevelId?.includes(form.levelId);
  }

  getActiveLevels() {
    let hasLevel = false;
    this.levelDetails?.enabledLevelId?.forEach((level: any) => {
      if (!this.levelDetails?.disabledLevel?.includes(level)) {
        hasLevel = true;
      }
    });
    return (this.levelDetails && hasLevel) || !this.levelDetails;
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

  validateEmail(elementValue: any){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue); 
  } 
  checkForFieldDependencies(elements: any) {
    let disable = false;
    elements?.map((element: any) => {
      if (element.inputType === 'string' || element.inputType === 'text' || element.inputType === 'text-box') {
        if (element.value?.length < element.minVal || element.value?.length > element.maxVal) {
          disable = true
        }
      } else if (element.inputType === 'number') {
        if (element.value < element.minVal || element.value > element.maxVal) {
          disable = true
        }
      }
    })
    return disable;
  }

  isUrlValid(userInput: any) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

}
