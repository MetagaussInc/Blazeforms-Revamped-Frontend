import { Component, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { BASE_URL, HttpService } from 'src/app/config/rest-config/http.service';
import { advancedLayout, config, layoutInputs, Level, paymentModel } from '../../input.config';
import { AddStripeAccountComponent } from '../add-stripe-account/add-stripe-account.component';
import { ConditionalRendereringModalComponent } from '../conditional-renderering-modal/conditional-renderering-modal.component';
import { ExcelService } from '../../excelservice.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as lodash from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { DataSharingService } from 'src/app/shared/data-sharing.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnDestroy {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    upload: (file: File): any => { return '' },
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  styling = {
    labels: {
      font: 'Roboto',
      size: 16,
      color: '#212519'
    },
    text: {
      font: 'Roboto',
      size: 16,
      color: '#212519'
    },
    placeholders: {
      font: 'Roboto',
      size: 16,
      color: '#212519'
    },
    buttons: {
      font: 'Roboto',
      size: 16,
      color: 'white'
    },
    pagebackgroundColor: 'white',
    pagebackgroundImage: ''
  }
  extraBillModel = {
      value: null,
      type: 'dollar',
      name: 'Additional'
    };
  selectedPlan: any = '';
  model: any = {
    name: '',
  };
  viewSpecificEntry: any;
  active = 1;
  viewProperties = 0;
  selectedIndex: any;
  selectedElement: any = {
    viewOptions: false
  };
  viewExportedView = false;
  selectedDependency: any;
  count: number = 0;
  dummyContainer: any = [];
  formLoaded = false;
  PaymentModel = {
    name: 'Calculations',
    textValue: '',
    minCharacter: 0,
    maxCharacter: 100,
    value: '',
    inputType: 'calculations',
    icon: 'fas fa-language',
    class: 'full',
    placeholder: '',
    size: 'medium',
    view: 'always',
    minVal: 0,
    maxVal: 50,
    helpText: '',
    isRequired: 'always',
    showSubTotal: true,
    showLineItems: true,
    mapBillingFields: true,
    stripeAccount: 'Dummy',
    stripeAccounts: [
      {
        name: 'Dummy',
        secretKey: '',
        sKey: ''
      }
    ],
    extraBill: [
      {
        value: null,
        type: 'dollar',
        name: 'Additional'
      }
    ],
    validations: {
      billing: true
    }
  }
  url = '';
  filter: any = null;
  userInfoSubscription$: any;
  userInfo: any;
  sourceBuilderTools = config;
  layout = layoutInputs;
  advanced = advancedLayout
  targetBuilderTools: any = [];
  formsList: any;
  builderObj: any = {
    MiscellaneousJSON: ''
  };
  paymentSetting: any = {
    extraBill: [],
    inputType: 'paymentSection',
    showSubTotal: true,
    showLineItems: true,
    mapBillingFields: true,
    stripeAccount: "",
    paymentOption: ['Card', 'Cash'],
    selectedPaymentOption: 'Cash',
    selectedAddress: '',
    selectedName: '',
    selectedEmail: ''
  }
  stripeAccounts: any;

  entries: any = {
    entries: [],
    columns: [],
    rows: [],
    selected: []
  }
  payments: any = [];
  viewEntryPanel = false;

  mainTab = 1;
  workFLowDetails: any;
  addedUserId: any = [];
  formId: any = null;
  userSerach: any = null;
  userSerachForLevel: any = null;
  listPayments: any = [];
  selectColElement: any;
  formActivities:any = [];
  globalListenFunc: any;
  globalListenFunc1: any;
  constructor(private dataService: DataSharingService, private https: HttpClient, private sanitizer: DomSanitizer, private modalService: NgbModal, private excelService: ExcelService, private route: ActivatedRoute, private http: HttpService, private store: Store, private router: Router, private renderer: Renderer2) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.targetBuilderTools = [];
      if (userInfo) {
        this.route.queryParams.subscribe(res => {
          this.formId = res.ID;
          this.mainTab = Number(res.seletedTab);
          this.getForm(res?.ID, true)
          this.getFormActivities(res?.ID);
        })
      }
      this.globalListenFunc = this.renderer.listen('document', 'keypress', e => {
        this.payments = [];
        this.extractAllLineItems(this.targetBuilderTools)
      });
      this.globalListenFunc1 = this.renderer.listen('document', 'click', e => {
        this.payments = [];
        this.extractAllLineItems(this.targetBuilderTools)
      });
    })

  }

  export() {
    this.excelService.exportAsExcelFile(this.entries.rows, 'Form entries');
  }

  newEntry() {
    this.router.navigate([`/blazeforms/${this.userInfo.WorkspaceDetail.Name.split(" ").join("_")}/${this.builderObj.name.split(" ").join("_")}`])
  }

  getFormActivities(ID: any) {
       this.https.post(BASE_URL + `Forms/GetFormActivityLogsByFormId?formId=${ID}`, null).subscribe(res => {
        this.formActivities = res;
    })
  }

  getFormDataByActivities(ID: any) {
    this.formLoaded = false;
    this.targetBuilderTools = [];
    this.https.post(BASE_URL + `Forms/GetFormDataByFormLogId?formlogId=${ID}`, null).subscribe((res: any) => {
    //  this.formActivities = res;
    this.formLoaded = true;
     this.builderObj = Object.assign(this.builderObj, res);
      // console.log(this.builderObj)
      // console.log(JSON.parse(this.builderObj.formNewJSON))

      this.formLoaded = true;
      this.url = res.url;
      const resp = JSON.parse(this.builderObj.miscellaneousJSON)
      console.log(resp)
      this.targetBuilderTools = JSON.parse(this.builderObj.formNewJSON)?.targetBuilderTools || [];
      if (!this.targetBuilderTools?.length) {
        this.targetBuilderTools = [];
        // this.targetBuilderTools.push(config[0])
      }
      this.paymentSetting = {
        ...(resp?.paymentSetting || this.paymentSetting),
        inputType: 'paymentSection'
      };
      if (resp?.styling) {
        this.styling = resp.styling
        this.placeholderStyling();
      }
      // this.createColums(this.targetBuilderTools)
      this.count = resp?.count || 0;
      this.targetBuilderTools?.forEach((element: any) => {
        if (element.uiIndexId >= this.count) {
          this.count = element.uiIndexId + 1;
        }
      });

      this.setLevels(resp?.levels);

      // Excecute function initially only
      if (true) {
        if (this.builderObj?.formType === 'WorkFlow') {
          if (!this.builderObj?.hasEntries) {
            // this.mainTab = 0
          }
          this.getWorkFlowDetails(ID);
        }
        this.getWorkSpaceAccounts();
        this.getFoldersWithList(this.userInfo)
        this.getNewEntries();

      }

 })
}

  getForm(ID: any, initial: boolean) {
    console.log(ID)
    const payload = {
      FormEntriesId: null, // to do
      Id: ID,
      Name: null, // to do
      WorkSpaceName: null, // to do
      userID: this.userInfo.Id
    }
    this.http.call('GetFormDesign', 'POST', payload).subscribe(res => {
      this.builderObj = Object.assign(this.builderObj, res);
      console.log(this.builderObj)
      this.formLoaded = true;
      this.url = res.url;
      const resp = JSON.parse(this.builderObj.miscellaneousJSON)
      console.log(resp)
      console.log(JSON.parse(this.builderObj.formNewJSON))
      this.targetBuilderTools = resp?.targetBuilderTools || [];
      if (!this.targetBuilderTools?.length) {
        this.targetBuilderTools = [];
        // this.targetBuilderTools.push(config[0])
      }
      this.paymentSetting = {
        ...(resp?.paymentSetting || this.paymentSetting),
        inputType: 'paymentSection'
      };
      if (resp?.styling) {
        this.styling = resp.styling
        this.placeholderStyling();
      }
      // this.createColums(this.targetBuilderTools)
      this.count = resp?.count || 0;
      this.targetBuilderTools?.forEach((element: any) => {
        if (element.uiIndexId >= this.count) {
          this.count = element.uiIndexId + 1;
        }
      });

      this.setLevels(resp?.levels);

      // Excecute function initially only
      if (initial) {
        if (this.builderObj?.formType === 'WorkFlow') {
          if (!this.builderObj?.hasEntries) {
            // this.mainTab = 0
          }
          this.getWorkFlowDetails(ID);
        }
        this.getWorkSpaceAccounts();
        this.getFoldersWithList(this.userInfo)
        this.getNewEntries();

      }
      this.extractAllLineItems(this.targetBuilderTools);


    })

  }

  placeholderStyling($event?: any) {
    console.log('picker Called', $event)
    if (document.getElementById("bclr")) {
      const a: any = document.getElementById("bclr");
      a.remove();
    }

    const color = this.styling.placeholders.color;
    const size = this.styling.placeholders.size;
    const font = this.styling.placeholders.font;
    const string = `
    <style id="bclr">
    app-exported-form input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:    ${color}!important;
      font-size: ${size}!important;
      font-family: ${font}!important;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    ${color}!important;
    font-size: ${size}!important;
    font-family: ${font}!important;
     opacity:  1;
  }

  }</style>

    `
    document.head.insertAdjacentHTML("beforeend", string)
  }


  setLevels(levels: any[]) {
    const groupByLevelId = lodash.groupBy(levels, 'levelId');
    if (this.builderObj?.formType === 'WorkFlow' && this.builderObj?.workFlowLevels.length > 0) {
      console.log(this.builderObj?.workFlowLevels)
      this.builderObj?.workFlowLevels.forEach((level: any) => {
        if (groupByLevelId[level.id]) {
          this.targetBuilderTools.push(groupByLevelId[level.id][0])
        } else {
          this.count = this.count + 2;
          const levelConfig: any = JSON.parse(JSON.stringify(Level));
          levelConfig.name = level.level;
          levelConfig.levelId = level.id;
          levelConfig.levelOrder = level.levelOrder;
          levelConfig.levelOrder = level.levelOrder;
          levelConfig.uiIndexId = this.count;
          this.targetBuilderTools.push(levelConfig);
        }
      });


    }
  }

  switchToBuild() {
    console.log('Switch')
    if (this.builderObj?.formType === 'WorkFlow') {
      this.getForm(this.formId, false);
    }
  }

  getSelectedColumns(entries: any) {
    let count = 0;
    entries.columns.map((x: any) => {
      if (x.view) {
        count = count + 1;
      }
    })
    return count > 1;
  }

  addUserToWorkFlow(id: any) {
    this.userSerach = null;
    const payload = {
      CreatedBy: this.userInfo.Id,
      FormId: this.formId,
      LevelId: null,
      UserId: id,
      UserType: "Owner",// to do
      WorkspaceId: this.userInfo.WorkspaceDetail.Id
    }

    this.http.call('AddUserToWorkFlow', 'POST', payload).subscribe(res => {
      // console.log(res)
      this.getWorkFlowDetails(this.formId);

    })
  }

  deleteFormLevel(id: any) {
    this.http.call('DeleteLevelInWorkFlowLevels', 'POST', {
      Id: id
    }).subscribe(res => {
      this.getWorkFlowDetails(this.formId);
    })
  }

  addUserToWorkFlowLevel(id: any, formId: any) {
    this.userSerach = null;
    const payload = {
      CreatedBy: this.userInfo.Id,
      FormId: this.formId,
      LevelId: formId, ///
      UserId: id,
      UserType: "Participant", // As per production : Always participant for this.
      WorkspaceId: this.userInfo.WorkspaceDetail.Id
    }

    this.http.call('AddUserToWorkFlow', 'POST', payload).subscribe(res => {
      // console.log(res)
      this.getWorkFlowDetails(this.formId);

    })
  }

  deleteUser(id: any) {

    let ID = ''
    this.workFLowDetails.workFlowUsers.forEach((element: any) => {
      if (element.userId === id) {
        ID = element.id;
      }
    });
    const payload = {
      Id: ID,
      UserId: id,
      WorkspaceId: this.userInfo.WorkspaceDetail.Id
    }

    this.http.call('DeleteUserFromWorkFlow', 'POST', payload).subscribe(res => {
      this.getWorkFlowDetails(this.formId);

    })

  }

  deleteUserFromLevel(id: any) {
    let ID = ''
    this.workFLowDetails.workFlowUsers.forEach((element: any) => {
      if (element.userId === id) {
        ID = element.id;
      }
    });

    const payload = {
      Id: ID,
      UserId: id,
      WorkspaceId: this.userInfo.WorkspaceDetail.Id
    }

    this.http.call('DeleteUserFromWorkFlow', 'POST', payload).subscribe(res => {
      this.getWorkFlowDetails(this.formId);

    })

  }

  addLevels(id?: any, level?: any, updateWorkFlowDeatils?: boolean) {
    const payload = {
      CreatedBy: this.userInfo.id,
      FormId: this.formId,
      Id: id ? id : null,
      Level: level ? level : null,
      LevelOrder: this.workFLowDetails.workFlowLevels.length,
      WorkspaceId: this.userInfo.WorkspaceDetail.Id
    }

    this.http.call('AddLevelInWorkFlowLevels', 'POST', payload).subscribe(res => {
      console.log(res)
      if (updateWorkFlowDeatils) {
        this.getWorkFlowDetails(this.formId);
      }

    })
  }

  changeLevel($event: any, item: any) {
    // console.log($event.target.value, item.id)
    this.addLevels(item.id, $event.target.value, false)
  }
  getWorkFlowDetails(ID: any) {
    const payload = {
      FormId: ID,
      SearchKeyword: '',
      UserId: this.userInfo.Id,
      WorkSpaceId: this.userInfo.WorkspaceDetail.Id
    }
    this.http.call('GetDetailsOfWorkflow', 'POST', payload).subscribe(res => {
      console.log('GetDetailsOfWorkflow -- response ', res)
      this.workFLowDetails = res;
      this.addedUserId = [];
      this.workFLowDetails?.workFlowUsers?.forEach((element: any) => {
        this.addedUserId.push(element.userId)

      });
    })
  }

  makeLarger(model: any) {
    switch (model.size) {
      case 'small':
        model.size = 'medium';
        break;
      case 'medium':
        model.size = 'large';
        break;
      case 'large':
        model.size = 'extra-large'
        break;

      default:
        break;
    }
  }

  makeSmaller(model: any) {
    switch (model.size) {
      case 'medium':
        model.size = 'small';
        break;
      case 'large':
        model.size = 'medium';
        break;
      case 'extra-large':
        model.size = 'large'
        break;
      default:
        break;
    }
  }
  getNewEntries() {
    this.http.call('GetFormEntries', 'POST', { Id: this.formId }).subscribe(res => {
      const data: any = [];
      this.entries.entries = res.formEntries;
      res.formEntries?.forEach((element: any, index: any) => {
        const entry = JSON.parse(element.formEntryJSON)
        data.push(`-3=ID=${index + 1}||-2=Status=${entry.status}||-1=Submitted=${entry.SubmittedDate}||${entry.entry} && response=${JSON.stringify(element)}`)
      });
      this.createColums(data);
      // this.dataService.UpdateHeaderUserPlanDetail(this.userInfo.Id, this.builderObj.workSpaceId)
    })
  }

  createColums(Elements: any) {
    const Columns: any = []
    const dataArr: any = Elements;
    const rows: any = [];
    dataArr.forEach((entry: string, entryIndex: any) => {
      const separatedData = entry?.split("&&");
      const data: any = separatedData[0].split('||');
      const formData: any = separatedData[1];

      // console.log(data)
      const rowObj: any = {};
      data.forEach((elementWithValue: any, colIndex: any) => {
        if (elementWithValue && elementWithValue?.length > 0) {
          if (entryIndex === 0) {
            Columns.push({
              headerName: elementWithValue?.split("=")?.[1],
              field: elementWithValue?.split("=")?.[0],
              view: true
            })
          }
          rowObj[elementWithValue?.split("=")?.[0]] = elementWithValue?.split("=")?.[2];
        }

      });
      rowObj.formDetail = formData;

      rows.push(rowObj)
    });

    // console.log(Columns, rows)
    this.entries.columns = Columns;
    this.entries.rows = rows;
  }

  getFoldersWithList(userInfo: any) {
    this.http.call('getAllActiveForms', 'POST', {
      UserId: userInfo.Id,
      WorkSpaceId: userInfo.WorkspaceDetail.Id,
    }).subscribe(res => {
      this.formsList = res;
      console.log(this.formsList);
    })
  }

  openForm(form: any) {
    console.log(form)
    // this.getForm(form.id, true);
    this.router.navigate(['/form-builder'], {
      queryParams: {
        ID: form.id,
        seletedTab: this.mainTab
      }
    })

  }
  saveForm() {
    const levels: any = []
    const elements: any = []
    this.targetBuilderTools.forEach((element: any) => {
      if (element.inputType !== 'levelSection') {
        elements.push(element);
      } else {
        levels.push(element)
      }
    });
    this.addStripeAccount()

    let formInstances:any = [];
    if (this.builderObj?.formNewJSON?.length > 5) {
      formInstances = JSON.parse(this.builderObj?.formNewJSON) || []
    }
    console.log(formInstances)
    const payload = {
      CreatedBy: this.builderObj.createdBy,
      DependenciesJSON: "", //to do
      Description: this.builderObj.description, // to do
      FormChanges: true, // to do
      FormNewJSON: JSON.stringify([
        ...formInstances,
        {
          targetBuilderTools: elements,
          levels: levels,
          count: this.count,
          styling: this.styling,
          paymentSetting: (this.showPaymentFields() ? lodash.cloneDeep(this.paymentSetting) : null)
        }
      ]), // to do
      FormSettings: "", // to do
      FormStyleJson: "", // to do
      Id: this.builderObj.id,
      LabelsDifference: false, // to do
      Name: this.builderObj.name,
      SubmissionButtonName: "", //to do
      SubmissionDependenciesJSON: "[]",
      SubmissionSettings: "",
      URL: this.builderObj.url,
      WorkFlowLevels: null,
      WorkSpaceId: this.userInfo.WorkspaceDetail.Id,
      formLabels: "",
      MiscellaneousJSON: JSON.stringify({
        targetBuilderTools: elements,
        levels: levels,
        count: this.count,
        styling: this.styling,
        paymentSetting: (this.showPaymentFields() ? lodash.cloneDeep(this.paymentSetting) : null)
      })
    }
    this.http.call('saveFormDesign', 'POST', payload).subscribe(res => {
      console.log(res)
      this.extractAllLineItems(this.targetBuilderTools);
    })
  }

  enableDefine() {
    return (this.builderObj.formType === 'WorkFlow' && this.userInfo.Id === this.builderObj?.createdBy);
  }

  addDependency(event: any) {
    console.log(event.target.value);
    this.targetBuilderTools[this.selectedIndex].dependUpon = event.target.value ? { elementId: event.target.value } : null;
  }

  addDependencyProperty($event: any) {
    const val = $event.target.value;
    const condition = (val === 'isFilledOut' || val === 'isFilledNotOut');
    const ref = this.targetBuilderTools[this.selectedIndex].dependUpon.elementId;
    this.targetBuilderTools[this.selectedIndex].dependUpon = {
      elementId: ref,
      [val]: condition ? true : '',
      type: condition ? 'boolean' : 'text'
    }
    // this.targetBuilderTools[this.selectedIndex].dependUpon[val] = condition ? true : '';
    // this.targetBuilderTools[this.selectedIndex].dependUpon['type'] = condition ? 'boolean' : 'text'
  }

  checkForDependency(model: any): boolean {
    const dependUpon = model?.dependUpon;

    // if there is no dependency the show element always
    if (!dependUpon) {
      return true;
    }
    const dependencyElementIndex = this.targetBuilderTools.findIndex((x: any) => x.uiIndexId == dependUpon.elementId);
    const data = this.targetBuilderTools?.[dependencyElementIndex]?.value;
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
  changeDependency($event: any, dependElementKey: any) {
    // console.log($event.target.id, $event.target.value, dependElementKey)
    this.targetBuilderTools[this.selectedIndex].dependUpon[dependElementKey.key] = $event.target.value
  }
  droppableItemClass = (item: any) => `${item.class} ${item.size} ${item.inputType} ${this.selectedElement?.uiIndexId === item.uiIndexId ? 'current-active' : ''}`;

  checkBox($event: any, model: any, option: any) {
    if (model.value.includes(option)) {
      model.value = model.value.filter((x: any) => x !== option);
    } else {
      model.value.push(option);
    }
  }

  delete(model: any) {
    const id = model.uiIndexId;
    this.targetBuilderTools = this.targetBuilderTools.filter((x: any) => id !== x.uiIndexId);
    if (model.inputType === 'levelSection') {
      this.http.call('DeleteLevelInWorkFlowLevels', 'POST', {
        Id: model.levelId
      }).subscribe(res => {
        this.saveForm();
      })
    } else {
      this.saveForm();
    }
    this.selectedElement = {
      viewOptions: false
    };
    this.viewProperties = 0;
  }

  duplicate(id: any) {
    let indexE: any = {};
    let i = 0;
    for (let index = 0; index < this.targetBuilderTools.length; index++) {
      if (this.targetBuilderTools[index]?.uiIndexId === id) {
        indexE = JSON.parse(JSON.stringify(this.targetBuilderTools[index]));
        i = index;
        this.count = this.count + 2
        indexE.uiIndexId = this.count;
        break;
      }
    }
    this.targetBuilderTools.splice((i + 1), 0, indexE);
    this.saveForm();

  }

  change($event: any, val: any) {
    this.selectedElement.options[val] = $event.target.value;
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  remove(i: number) {
    this.selectedElement.options.splice(i, 1);
  }

  updateObj(key: any, selectedElement: any, props: any) {
  }
  showPaymentFields(): boolean {
    return this.targetBuilderTools?.some((x: any) => x.inputType === 'payment' ||
     (x.collectPayment && (x.inputType === 'currency' || x.inputType === 'radio'|| x.inputType === 'checkbox'|| x.inputType === 'dropdown')));
  }
  removeObj(key: any, selectedElement: any, props: any) {
    delete selectedElement[props][key];
  }

  builderDrag(e: any) {
    const item = e.value;
    item.data = item.inputType === 'number' ? (Math.random() * 100) | 0 : Math.random().toString(36).substring(20);
  }

  drop(e: any) {
    console.log(this.targetBuilderTools)
    this.count = this.count + 1;
    if (!e.value.uiIndexId) {
      e.value.uiIndexId = this.count;
    }
    console.log(e.type, e);
    // this.updateIndex();
    this.dummyContainer = [];
    if (e.value.inputType === 'break') {
      if (this.isFirstPageBreak()) {
        this.targetBuilderTools.unshift(JSON.parse(JSON.stringify(e.value)))
      }
    }
    this.viewProperties = 1;

    // this.targetBuilderTools.forEach((element: any) => {
    //   if (element.uiIndexId === this.count) {
    this.selectedElement = e.value;
    // }
    // });

    setTimeout(() => {
      this.saveForm()
    }, 100);
  }

  isFirstPageBreak() {
    let count = 0;
    this.targetBuilderTools.forEach((element: any) => {
      if (element.inputType === 'break') {
        count = count + 1;
      }
    });
    return count === 1;
  }

  abc($event: any, source: any, handle: any, sibling: any): boolean {
    return ($event.name === 'AddressDnd') ? false : true;
    return true;
  }
  drop2(e: any) {
    this.count = this.count + 1;
    if (!e.value.uiIndexId) {
      e.value.uiIndexId = this.count;
    }
    this.targetBuilderTools.push(e.value);
    // this.updateDnd();
    this.updateIndex(); // add rowId to all elements
    this.dummyContainer = [];
  }

  removeLastTwoDropDowns() {
    console.log(JSON.parse(JSON.stringify(this.targetBuilderTools)))
    const obj: any = {
      'small': 1,
      'medium': 2,
      'large': 3,
      'extra-large': 4
    }
    const lastElement = this.targetBuilderTools[this.targetBuilderTools.length - 1];
    const secondLastElement = this.targetBuilderTools[this.targetBuilderTools.length - 2];
    const ThirdLast = this.targetBuilderTools[this.targetBuilderTools.length - 3]

    if (lastElement.rowId !== secondLastElement.rowId && lastElement.name === 'Dnd') {
      // remove if only one dnd is there in last row
      console.log(`Element removed on dnd ${lastElement.name}||  ${lastElement.rowId}/${secondLastElement.rowId} `)
      this.targetBuilderTools.pop();
    }
    if (lastElement.inputType === 'DND' && secondLastElement.inputType === 'DND') {
      switch ((obj[lastElement.size] + obj[secondLastElement.size])) {
        case 4:
          this.targetBuilderTools.pop();
          if (lastElement.rowId === secondLastElement.rowId) {
            this.targetBuilderTools.pop();
          }
          break;
        case 5:
          this.targetBuilderTools.pop();
          break;
        case 6:
          this.targetBuilderTools.pop();
          break;

        default:
          break;
      }
    }
  }

  updateDnd() {
    const obj1 = {
      name: 'Dnd',
      value: '',
      children: [] as any[],
      inputType: 'DND',
      icon: 'far fa-square',
      uiIndexId: this.count + 1,
      class: 'no-hover',
      size: 'medium',
      view: 'always',
    };

    const max = 4;
    this.targetBuilderTools.push(obj1);
    this.count = this.count + 1;
    // if (this.targetBuilderTools.length < 2) {
    //   this.targetBuilderTools.push(obj1);
    // } else {

    //   const arr = this.targetBuilderTools;
    //   let count = 0;
    //   arr.forEach((element: any) => {
    //     count  = count + obj[element.size]
    //   });
    // }



  }

  replaceDnd($event: any, i: any) {
    console.log($event, i);
    const element = $event.value;
    element.uiIndexId = i.uiIndexId;
    const index = this.targetBuilderTools.findIndex((x: any) => x.uiIndexId === i.uiIndexId)
    this.targetBuilderTools.splice(index, 1, element)
  }
  updateIndex() {
    const obj: any = {
      small: 1,
      medium: 2,
      large: 3,
      'extra-large': 4
    }
    const max = 4;
    let count = 0;
    let row = 1;
    this.targetBuilderTools?.forEach((element: any, i: any) => {
      // element.index = i;
      element.rowId = row;
      count = count + obj[element.size];
      if (count === 4) {
        count = 0;
        row = row + 1;
      }
    });
  }

  log(e: any) {
    console.log(e.type, e);
  }



  selectPayment() {
    this.selectedElement = this.paymentSetting;
    this.viewProperties = 1;
  }

  clicked($event: any, model: any, i: any) {
    if (this.selectedElement?.viewOption) {
      this.selectedElement['viewOption'] = false;
    }
    this.selectedElement = model;
    console.log(model.name, 'Selected')
    this.viewProperties = 1;

    $event.preventDefault();
    $event.stopPropagation()
  }

  sectionClicked($event: any, model: any, i: any) {
    this.selectedElement = model;
    this.viewProperties = 1;
    console.log(model.name, 'Selected')
    $event.preventDefault();
    $event.stopPropagation()

  }

  setConditionalDependency() {

  }
  addStripeAccount() {
    this.stripeAccounts?.forEach((account: any) => {
      if (account.accountName === this.paymentSetting?.stripeAccount) {
        this.paymentSetting.accountDetail = account;
      }
    });
  }

  openModal(selectedElement: any, value: string, type: string) {

    if (value === 'always') {
      selectedElement[type] = null;
      return;
    }
    if (value === 'never') {
      selectedElement[type] = {};
      return;
    }
    const modalRef: any = this.modalService.open(ConditionalRendereringModalComponent, { size: 'lg' })
    modalRef.componentInstance.config = {
      headerName: '',
      selectedElement,
      targetBuilderTools: this.targetBuilderTools,
      type: type
    }
    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  canMove(e: any): boolean {
    console.log(e)
    return e.indexOf('Disabled') === -1;
  }

  log1($event: any) {
    console.log($event)
    if ($event.value.name === 'Dnd') {
      $event.value.class = 'd-none'

    }
  }

  addNewStripeAccount() {
    const modalRef: any = this.modalService.open(AddStripeAccountComponent, { size: 'lg' })
    modalRef.componentInstance.config = {
      ...this.builderObj
    }
    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
      if (result === 'added') {
        this.getWorkSpaceAccounts()
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  getWorkSpaceAccounts() {
    this.http.call('GetWorkspaceAccountSettingsByWorkspaceId', 'POST',
      {
        WorkspaceId: this.userInfo.WorkspaceDetail.Id
      }).subscribe(res => {
        this.stripeAccounts = res;
        console.log(res)
      })
  }

  get nameField() {
    return this.targetBuilderTools.filter((x: any) => x.inputType === 'string');
  }

  get emailField() {
    return this.targetBuilderTools.filter((x: any) => x.inputType === 'email');
  }

  get addressField() {
    return this.targetBuilderTools.filter((x: any) => x.inputType === 'addressSection');
  }

  selectEntry(rowIndex: any) {
    if (this.entries.selected.includes(rowIndex)) {
      this.entries.selected = this.entries.selected.filter((x: any) => x !== rowIndex);
    } else {
      this.entries.selected.push(rowIndex);
    }
    console.log('selected entry', this.entries.selected)
  }

  selectAllEntries() {
    if (this.entries.selected.length !== this.entries.rows.length) {
      this.entries.selected = [];
      this.entries.rows.forEach((element: any, index: any) => {
        this.entries.selected.push(index)
      });
    } else {
      this.entries.selected = [];
    }

  }

  getDateString(date: any) {
    return new Date(date).toLocaleDateString()
  }
  deleteEntry() {
    let string = '';
    this.entries.selected.forEach((index: any) => {
      string =  string + ',' + this.entries.entries[index]?.id;
    });
    this.http.call('DeleteFormEntries', 'POST',
      {
        FormEntriesID: string
      }).subscribe(res => {
        this.entries.selected = [];
        this.getNewEntries();
      })
  }

  // @HostListener('document:keydown.delete', ['$event'])
  // onDeleteComponent(event: KeyboardEvent) {
  //   // this.delete(this.selectedElement)
  // }

  selectColumn($event: any, colId: any) {
    console.log($event, colId);
  }

  selectDefault(selectedElement: any , i: any) {
    /**
     * Works for setting defaul value for RADIO | Checkbox | Dropdown.
     */
    if (selectedElement.inputType === 'radio' || selectedElement.inputType === 'dropdown') {
      selectedElement.value = selectedElement.options[i].label
    } else {
      if (selectedElement.value.includes(selectedElement.options[i].label)) {
        selectedElement.value = selectedElement.value.filter((x: any) => x !== selectedElement.options[i].label);
      } else {
        selectedElement.value.push(selectedElement.options[i].label)
      }
    }
  }

  // arrayAction(array: any[], value: any) {
  //   if (array.includes(value)) {
  //     array = array.filter(x => x !== value);
  //   } else {
  //     array.push(value)
  //   }
  //   console.log('setting-selection', array)
  // }

  addCol(col: any) {
    this.selectedElement.columns.push(JSON.parse(JSON.stringify(this.selectedElement?.validations?.addColumns[col])))
  }

  FormUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.href?.split('#')?.[0] + `#/${this.url?.split('#')?.[1]?.replace('BlazeForms', 'blazeforms')}`);
  }

  viewEntry(rowIndex: any) {
    console.log(this.entries.entries[rowIndex]?.id)
    this.viewSpecificEntry = this.sanitizer.bypassSecurityTrustResourceUrl(window.location.href?.split('#')?.[0] + `#/${this.url?.split('#')?.[1]?.replace('BlazeForms', 'blazeforms')}/${this.entries.entries[rowIndex]?.entryId}`);

  }

  addSection(form: any) {
    const formInstance = JSON.parse(JSON.stringify(form.childSection[form.childSection.length - 1]));
    formInstance.uiIndexId = formInstance.uiIndexId+ 'section' + form.childSection.length + 1
    form.childSection.push(formInstance);
  }

  closeIframes() {
    this.viewSpecificEntry = null;
    this.viewEntryPanel = false;
  }

  userNameChange($event: any, item: any) {
    item.userSerachForLevel = $event?.target?.value;
  }

  // viewAdditionnalField() {
  //   return this.targetBuilderTools?.some((x: any) => x.inputType === 'currency');
  // }

  extractAllLineItems(elements: any) {
    elements?.forEach((element: any) => {
      if ((element.inputType === 'payment')) {
        this.payments.push({name: element.name, value: element.value});
      }
      if (element.inputType === 'currency') {
        if ((Number(element.value) > 0)) {
        this.payments.push({name: element.name, value: element.value});
        }
      }
      // console.log(element)
      if (element.inputType === 'toggle' && element.collectPayment) {
        if ((element.value) && Number(element.collectAmount) > 0) {
        this.payments.push({name: element.name, value: element.collectAmount});
        }
      }
      if (element.childSection) {
        this.extractAllLineItems(element.childSection);
      }
      if (element.children) {
        this.extractAllLineItems(element.children);
      }
      if ((element.inputType === 'radio' || element.inputType === 'dropdown' )&&  element.collectPayment) {
        element.options?.forEach((option: any, i: any) => {
          if (option?.label === element?.value && (Number(element.options[i].payment) > 0)) {
            this.payments.push({name: element.name, value: element.options[i].payment});
          }
        });
      }
      if (element.inputType === 'checkbox' && element.collectPayment) {
        let p = 0;
        element.options.forEach((option: any, i: any) => {
          if (element?.value?.includes(option.label)) {
            p = p + option.payment;
          }
        });
        this.payments.push({name: element.name, value: p});

      }
      if (element.rows) {
        // console.log(element.columns)
        element.columns.forEach((column: any) => {
          if ((column.inputType === 'payment' || column.inputType === 'currency')) {
            this.payments.push({name: column.name, value: column.value});
          }
        });
      }
    });
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
    this.paymentSetting?.extraBill?.forEach((additional: any) => {
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


  onFileChange(event: any, form: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type == 'application/vnd.ms-excel' || file.type == '.xlsx' || file.type == '.xls' || file.type == 'image/jpeg') {
      let fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
          const arrayBuffer: any = fileReader.result;
          let data = new Uint8Array(arrayBuffer);
          let arr = [];
          for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          let bstr = arr.join("");
          let workbook = XLSX.read(bstr, {type:"binary"});
          let first_sheet_name = workbook.SheetNames[0];
          let worksheet = workbook.Sheets[first_sheet_name];
            let arraylist: any = XLSX.utils.sheet_to_json(worksheet,{raw:true});
            for (let index = 0; index < arraylist.length; index++) {
              form.options.push( { label: arraylist[index].name, payment: 0 },)
            }
      }
      }
    }
  }

  selectRole($event: any) {
    this.selectedPlan = $event.target.value;
    console.log(this.selectedPlan)
  }

  inviteUser() {
    const p = {
      CreatedBy: this.userInfo.Id,
      FormId: this.builderObj.id,
      LevelId: null,
      RoleId: this.selectedPlan,
      SessionUser: this.userInfo.Id,
      UserEmail: this.userSerach,
      UserType: "Owner",
      WorkspaceId: this.userInfo.WorkspaceDetail.Id,
    }
    this.http.call('InviteUserForWorkFlow', 'POST', p).subscribe(res => {
      this.userSerach = '';
      this.getWorkFlowDetails(this.formId);
    })
  }

  inviteUserforLevel(id: any, userSerachForLevel: any) {
    const p = {
      CreatedBy: this.userInfo.Id,
      FormId: this.builderObj.id,
      LevelId: id,
      RoleId: this.selectedPlan,
      SessionUser: this.userInfo.Id,
      UserEmail: userSerachForLevel,
      UserType: "Participant",
      WorkspaceId: this.userInfo.WorkspaceDetail.Id,
    }
    this.http.call('InviteUserForWorkFlow', 'POST', p).subscribe(res => {
      this.userSerach = '';
      this.getWorkFlowDetails(this.formId);
    })
  }

  openTab(tabId: any) {
    // this.getForm(form.id, true);
    this.router.navigate(['/form-builder'], {
      queryParams: {
        ID: this.formId,
        seletedTab: tabId
      }
    })

  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userInfoSubscription$.unsubscribe();
  }
}
