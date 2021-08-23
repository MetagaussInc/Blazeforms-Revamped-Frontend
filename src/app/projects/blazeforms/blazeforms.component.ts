import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-blazeforms',
  templateUrl: './blazeforms.component.html',
  styleUrls: ['./blazeforms.component.scss']
})
export class BlazeformsComponent implements OnInit {

  dataLoaded = false;
  public elements: any;
  model = {
    name: ''
  }

  paymentDetails: any;
  haveTabs: boolean = false;
  active = 0;
  allArr:any = [];
  obj: any = {};
  submitted: boolean = false;
    workSpaceName = "";
  formDetail: any = {}
  payments: any = [];
  globalListenFunc: any;
  constructor(private http: HttpService, private routec: ActivatedRoute, private renderer: Renderer2) {
    this.routec.params.subscribe(res => {
      this.workSpaceName = res.workspaceName;
      this.getForm(res.workspaceName, res.formName)
    });
    this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
      this.payments = [];
      this.extractAllLineItems(this.elements)
    });
  }

  getForm(workspaceName: string, formName: string) {
      const payload = {
        // FormEntriesId: null, // to do
        Id: null, // no user credentials
        Name: formName,
        WorkSpaceName: workspaceName,
        userID: null // no user credentials
      }
      this.http.call('GetFormDesign', 'POST', payload).subscribe(res => {
        this.dataLoaded = true;
        this.formDetail = {
          ... res,
          workspaceName: this.workSpaceName
        };
        this.elements = JSON.parse(res.miscellaneousJSON).targetBuilderTools;
        this.paymentDetails = JSON.parse(res.miscellaneousJSON).paymentSetting;
        this.extractAllLineItems(this.elements)
        console.log(this.payments)
      })
    }

    extractAllLineItems(elements: any) {
      elements.forEach((element: any) => {
        if ((element.inputType === 'payment' || element.inputType === 'currency') && (!element?.dependUpon || this.checkForDependency(element, 'dependUpon')) ) {
          this.payments.push({name: element.name, value: element.value});
        }
        if (element.childSection) {
          this.extractAllLineItems(element.childSection);
        }
        if (element.children) {
          this.extractAllLineItems(element.children);
        }
      });
    }
  
    
    ngOnInit(): void {
      return;
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
    submitParentForm(parentForm: any){
      let data = '';
      if (this.haveTabs) {
        this.allArr.forEach((arr: any) => {
          arr.forEach((element: any) => {
            data = data + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
          });
        });
      } else {
        this.elements.forEach((element: any) => {
          data = data + element.name + '=' + ((!element.value || element.value.length === 0) ? 'No_value' : element.value) + '||'
        });
      }
      

      console.log(data);
      return;
      const payload = {
        EncryptEntryData: false,
FormType: "Form",
Id: "k-jbgwzGUcCIANdi0eXaZQ==",
IsValidNotification: false,
Name: "OLD APP Form",
PaymentMode: "Cash",
SubmissionSettings: "NOVALUE",
SubmittedWhenStatus: false,
TotalEntries: 1000000000,
UpdatedWhenStatus: false,
UserName: "admin1223489   blazeforms",
WorkSpaceId: "TXYu0NjodAYzBODQlLqdmg==",
WorkSpaceName: "Super_Admin_WorkSpace1",
formEntry: JSON.stringify({
  entry: data,
  status: 'Submitted',
  SubmittedDate: new Date()
}),
userID: "TXYu0NjodAYzBODQlLqdmg==",
      }
      this.http.call('SaveFormEntry', 'POST', payload).subscribe(res => {
        console.log(res)
      })
    }
  }