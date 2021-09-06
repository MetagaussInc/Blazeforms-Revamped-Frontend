import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
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
  needLogin = false;
  userInfoSubscription$: any;
  userInfo: any;

  levelDetails: any = {};

  constructor(private http: HttpService,private store: Store, private routec: ActivatedRoute, private renderer: Renderer2) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
    })
    this.routec.params.subscribe(res => {
      this.workSpaceName = res.workspaceName;
      this.getForm(res.workspaceName, res.formName, res.entry)
    });
    this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
      this.payments = [];
      this.extractAllLineItems(this.elements)
    });
    
  }

  getForm(workspaceName: string, formName: string, entry: any) {
    console.log(this.userInfo, entry)
      const payload = {
        FormEntriesId: entry ? entry : null, // to do
        Id: null, // no user credentials
        Name: formName,
        WorkSpaceName: workspaceName,
        userID: this.userInfo?.Id ? this.userInfo?.Id : null // no user credentials
      }
      this.http.call('GetFormDesign', 'POST', payload).subscribe(res => {
        this.dataLoaded = true;
        
        const bForms: any = localStorage.getItem('bforms');
          user: JSON.parse(bForms)?.user,
        this.needLogin = res.formType === 'WorkFlow' && !this.userInfo ? true : false;
        this.formDetail = {
          ... res,
          workspaceName: this.workSpaceName
        };
        this.elements = [...(JSON.parse(res.miscellaneousJSON).levels || []), ...JSON.parse(res.miscellaneousJSON).targetBuilderTools];
        this.paymentDetails = JSON.parse(res.miscellaneousJSON).paymentSetting;
        this.extractAllLineItems(this.elements)
        this.getLevelDetails(this.formDetail);
        console.log(this.payments)
      })
    }

    getLevelDetails(formDetail: any) {
      console.log(formDetail)
      this.levelDetails['toBeFilledById'] = this.userInfo?.Id;
      this.levelDetails['toBeFilledByName'] = this.userInfo?.name;
      if (!formDetail.formEntry) {
        // When there is no entry and first level user jumps on this page.
        // First section should be anabled always.
        this.levelDetails['enabledLevelId'] = [formDetail?.workFlowLevels?.[0]?.id];
        this.levelDetails['toBeFilled'] = formDetail?.workFlowLevels?.[0]?.id

      } else {
        console.log(JSON.parse(formDetail.formEntry))
        this.elements = JSON.parse(formDetail.formEntry).savedElementsWithValue;
        this.levelDetails['disabledLevel'] = JSON.parse(formDetail.formEntry).levelDetails.enabledLevelId;
        this.levelDetails['enabledLevelId'] = JSON.parse(formDetail.formEntry).levelDetails.enabledLevelId;
        formDetail.workFlowOwners.forEach((owns: any) => {

          if (owns?.levelId?.length > 0) {
            formDetail.workFlowLevels.forEach((level: any) => {
                if (owns.levelId === level.id) {
                this.levelDetails['toBeFilled'] = level.id;
                this.levelDetails['enabledLevelId'].push(level.id)
                }
            });

          }
        });
        // formDetail
        // formDetail?.workFlowLevels?.[0]?.id
      }

      
      
     

      // formDetail.
      console.log(this.levelDetails)
      console.log(this.elements)
    }

    extractAllLineItems(elements: any) {
      elements?.forEach((element: any) => {
        if ((element.inputType === 'payment') && (!element?.dependUpon || this.checkForDependency(element, 'dependUpon')) ) {
          this.payments.push({name: element.name, value: element.value});
        }
        if (element.inputType === 'currency') {
          if ((Number(element.value) > 0)) {
          this.payments.push({name: element.name, value: element.value});
          }
        }
        if (element.childSection) {
          this.extractAllLineItems(element.childSection);
        }
        if (element.children) {
          this.extractAllLineItems(element.children);
        }
        if (element.inputType === 'radio' || element.inputType === 'dropdown') {
          element.options?.forEach((option: any, i: any) => {
            if (option?.label === element?.value && (Number(element.options[i].payment) > 0)) {
              this.payments.push({name: element.name, value: element.options[i].payment});
            }
          });
        }
        if (element.inputType === 'checkbox') {
          let p = 0;
          element.options.forEach((option: any, i: any) => {
            if (element?.value?.includes(option.label)) {
              p = p + option.payment;
            }
          });
          this.payments.push({name: element.name, value: p});

        }
        if (element.rows) {
          console.log(element.columns)
          element.columns.forEach((column: any) => {
            if ((column.inputType === 'payment' || column.inputType === 'currency')) {
              this.payments.push({name: column.name, value: column.value});
            }
          });
        }
      });
    }
  
    inputUpdateEventHandler($event: any) {
      this.payments = [];
      this.extractAllLineItems(this.elements)
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