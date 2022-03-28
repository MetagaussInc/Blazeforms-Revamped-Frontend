import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { BASE_URL, HttpService } from 'src/app/config/rest-config/http.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormModalComponent } from './components/add-form-modal/add-form-modal.component';
import { EditFormModalComponent } from './components/edit-form-modal/edit-form-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { RestrictFormEntriesComponent } from './restrict-form-entries/restrict-form-entries.component';
import { MoveModalComponent } from './move-modal/move-modal.component';
import { UserPermissionModalComponent } from './components/user-permission-modal/user-permission-modal.component';
import { DataSharingService } from '../../shared/data-sharing.service';
import { Router } from '@angular/router';
import { AddNewFolderComponent } from './components/add-new-folder/add-new-folder.component';
import * as lodash from 'lodash';
import { updateUserPlanDetail } from 'src/app/+state/user/user.actions';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  searchedString = '';
  pageDetail = {
    pageNumber: 1,
    pageSize: 14
  };
  selectedFolder: any = null;

  viewBy: any = null;
  public selectedForms: any[] = [];
  public selectedFormName: any[] = [];
  viewFilterDropdown = false;
  private userInfoSubscription$: any;
  private searchedFormKeyword: string = '';
  private FilterAttribute: string = 'null';
  public formsList: any;
  public allForms: any;
  public folderList: any;
  folderListWithForms: any;
  userInfo: any;
  public formPermissions: any;
  public selectedWorkspaceId: any;
  public favs: any = []
  public notifications: any;
  formsbyId: any;
  dataLoaded = false;
  constructor(private http: HttpService, private store: Store, private modalService: NgbModal, private router: Router, private dataSharingService: DataSharingService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      console.log(userInfo)
      this.userInfo = userInfo;
      let workSpaceListData = this.dataSharingService.GetUserWorkspaceList();
      this.selectedWorkspaceId = workSpaceListData.id;
      // this.getNotification(userInfo);
      this.getFormsList(userInfo);
    })
    this.formPermissions = this.dataSharingService.GetPermissions("Forms");
  }

  stripeKey = window.location.host === "app.blazeforms.com" ? 'pk_live_kgALEKxShS6il7bwDjsg6X1x00MZPQc0de' : 'pk_test_51IclahSHmdevWCqrjzhp4868a8lTtKZ8a4meW7CVlQstDeu7GIPW9ChZEWYvGlBGSiOFIyWLr7N4O43Rrc7IJzUP00Bo6EZPFW';
  stripePromise = loadStripe(this.stripeKey);

  async checkOut() {
    const stripe: any = await this.stripePromise;
    return stripe;
  }
  session() {

    this.checkOut().then(res => {
      this.http.call('StripeSession', 'POST', {
        userInfo: this.userInfo,
        plan: 'MG Super Test',
        url: window.location.href
      }).subscribe(session => {
        return res.redirectToCheckout({ sessionId: session.id });

      })
    })

    // this.http.call('StripeSession', 'POST', {} ).subscribe(x => {
    //   console.log(x)
    // })

    // fetch(BASE_URL+'Payment/StripeSession', {
    //   method: 'POST',
    //   body: {
    //     planID: 'planA'
    //   }
    // })
    // .then(function(response) {
    //   console.log(response)
    //   return response.json();
    // })
    // .then(function(session) {
    //   console.log(session)
    //   return stripe.redirectToCheckout({ sessionId: session.id });
    // })
    // .then(function(result) {
    //   console.log(result)
    //   // If `redirectToCheckout` fails due to a browser or network
    //   // error, you should display the localized error message to your
    //   // customer using `error.message`.
    //   if (result.error) {
    //     alert(result.error.message);
    //   }
    // });
  }

  getFormsList(userInfo: any) {
    if (userInfo) {
      // this.http.call('getFormsList', 'POST', obj).subscribe(res => {
      //   this.formsList = _.groupBy(res.res, 'folderName');
      //   console.log(this.formsList)
      // })

      this.getFoldersWithList(userInfo)

      this.http.call('getAllActiveForms', 'POST', {
        UserId: userInfo.Id,
        WorkSpaceId: this.selectedWorkspaceId,
      }).subscribe(res => {
        this.allForms = res;
        this.formsbyId = lodash.groupBy(this.allForms, 'id')
        this.allForms.forEach((element: any) => {
          if (element.isFavourite) {
            this.favs.push(element.id);
          }
        });
        this.dataLoaded = true
      })

      this.http.call('getFolders', 'POST', {
        WorkSpaceId: this.selectedWorkspaceId,
      }).subscribe(res => {
        this.folderList = res;
      })
    }
  }

  getFormId(form: any): string {
    return form.value ? form.value : form.id;
  }
  enableStarred(form: any) {
    const value = this.getFormId(form);
    if (this.favs?.includes(value)) {
      this.favs = this.favs.filter((x: any) => x !== value)
    } else {
      this.favs.push(value);
    }
    this.http.call('UpdateFormAttributes', 'POST', {
      FormUpdateAction: "IsFavourite",
      Id: value,
    }).subscribe(res => {
      // this.getFormsList(this.userInfo)
      // this.favs= [];
    })

  }

  getNotification(userInfo: any) {
    this.http.call('GetNotifications', 'POST', {
      ToUserId: userInfo.Id
    }).subscribe(res => {
      this.notifications = res;
    })
  }

  getFoldersWithList(userInfo: any,) {
    if (userInfo) {
      const obj = {
        FilterAttribute: this.FilterAttribute,
        SearchKeyword: this.searchedFormKeyword,
        UserId: userInfo.Id,
        WorkSpaceId: this.selectedWorkspaceId,
        ...this.pageDetail,
      }
      this.http.call('GetFoldersListWithForms', 'POST', obj).subscribe(res => {
        const arr: any = [];
        this.getfolderNameWithForms(res, arr);
        this.formsList = arr;
        this.folderListWithForms = arr;;

      })
    }
  }

  selectBulkForms(form: any) {
    const value = form.value ? form.value : form.id;
    if (this.selectedForms.includes(value)) {
      this.selectedForms = this.selectedForms.filter((x: any) => value !== x);
      this.selectedFormName = this.selectedForms.filter((x: any) => value !== x && form?.name !== x && form?.text !== x);
    } else {
      this.selectedForms.push(value);
      this.selectedFormName.push(form.text ? form.text : form.name);
    }
  }

  get bulkId() {
    return this.selectedForms.join(',');
  }
  getfolderNameWithForms(res: any[], arr: any[]) {
    res.forEach((obj: any) => {
      if (obj?.childrenForms?.length > 0) {
        arr.push({
          folderPath: obj.folderPath,
          text: obj.text,
          folderId: obj.value,
          forms: obj.childrenForms.map((x: any) => {
            x.folderId = obj.value;
            return x;
          }),
          childNameList: function () {
            let list = '';
            obj?.childrenForms.forEach((x: any) => { list += '/' + x.text });
            return list;
          }()
        })
      }
      if (obj?.childrenFolders) {
        this.getfolderNameWithForms(obj?.childrenFolders, arr)
      }
    });
  }

  ngOnInit(): void {
  }

  selectionChange($event: any) {
    if (this.viewBy === 'StarredForms' || this.viewBy === 'ArchievedForms') {
      this.formsList = JSON.parse(JSON.stringify(this.folderListWithForms));
    }
    this.viewBy = null;
    this.selectedFolder = $event;
  }
  open() {
    const modalRef: any = this.modalService.open(AddFormModalComponent, { size: 'lg' })
    modalRef.componentInstance.formsList = this.allForms;
    modalRef.componentInstance.userId = this.userInfo.Id;

    // modalRef.componentInstance.openEditEvent.subscribe((arg: string) => {
    // });

    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.openEdit(result);
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  editForm(form: any) {
    const id = form.value ? form.value : form.id;
    const formDetail = this.formsbyId?.[id]?.[0];
    console.log(formDetail)
    const payload = {
      FormEntriesId: null, // to do
      Id: id, // no user credentials
      Name: null,
      WorkSpaceName: null,
      userID: this.userInfo.Id // no user credentials
    }
    this.http.call('GetFormDesign', 'POST', payload).subscribe(res => {
      const modalRef: any = this.modalService.open(EditFormModalComponent,{ size: 'lg' })
      modalRef.componentInstance.folderList = this.folderList;
      modalRef.componentInstance.type = formDetail.formType;
      modalRef.componentInstance.modalType = 'Edit';
      modalRef.componentInstance.workSpaceId = this.selectedWorkspaceId;
      modalRef.componentInstance.userId = this.userInfo.Id;
      modalRef.componentInstance.config = {
        name: res.name,
        description:res.description,
        folderID:res.folderID,
        isActive:res.isActive,
        formType: res.formType,
        id: res.id
      };
      modalRef.result.then((result: any) => {
        console.log(`Closed with: ${result}`);
        this.getFormsList(this.userInfo);
      }, (reason: any) => {
        console.log(`Dismissed `);
      });
    })


  }

  openEdit(type: string) {
    const modalRef: any = this.modalService.open(EditFormModalComponent, { size: 'lg' })
    modalRef.componentInstance.folderList = this.folderList;
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.modalType = 'Add';
    modalRef.componentInstance.workSpaceId = this.selectedWorkspaceId;
    modalRef.componentInstance.userId = this.userInfo.Id;
    modalRef.componentInstance.config = {

    };

    modalRef.result.then((result: any) => {
      console.log(`Closed with: ${result}`);
      if (result?.message === 'added') {
        // update header uses
        this.dataSharingService.UpdateHeaderUserPlanDetail(this.userInfo.Id, this.selectedWorkspaceId);
        this.router.navigate(['/form-builder'], { queryParams: { ID: result.res.id, seletedTab: type === 'WorkFlow' ? 0 : 1 } })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  openbuilder(form: any, tabIndex: any) {
    this.router.navigate(['/form-builder'], { queryParams: { ID: form.value, seletedTab: tabIndex } })

  }

  openBuilderByName(form: any, tabIndex: any) {
    let openWorkFLow = false;
    this.allForms.forEach((element: any) => {
      if (element.id === form.value && element.formType === 'WorkFlow') {
        openWorkFLow = true;
      }
    });
    this.router.navigate(['/form-builder'], { queryParams: { ID: form.value, seletedTab: openWorkFLow ? 0 : tabIndex } })

  }

  openFormURL(form: any) {
    // console.log(this.userInfo.WorkSpaceName)
    this.router.navigate([`/blazeforms/${this.userInfo.WorkSpaceName.split(' ').join('_')}/${form.text ? form.text.split(' ').join('_') : form.name.split(' ').join(_)}`]);
  }
  openPermissions(form: any) {
    console.log('openPermissions', form)
    const modalRef: any = this.modalService.open(RestrictFormEntriesComponent, { size: 'lg' })
    modalRef.componentInstance.form = form;
    // modalRef.componentInstance.modalName = 'Archive';
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        // this.http.call('archive', 'POST', {Action: 'Archive', FormIds: ''}).subscribe(res => {

        // })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  move(form: any) {
    console.log('move', form, this.folderList)
    const modalRef: any = this.modalService.open(MoveModalComponent, { size: 'lg' })
    modalRef.componentInstance.folderList = this.folderList;
    modalRef.componentInstance.form = form;
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.getFoldersWithList(this.userInfo)
        this.selectedForms = [];
        this.selectedFormName = [];
        // this.http.call('archive', 'POST', {Action: 'Archive', FormIds: form.value }).subscribe(res => {
        //   console.log(res)
        // })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  archive(form: any) {
    const modalRef: any = this.modalService.open(ConfirmModalComponent, { size: 'lg' })
    modalRef.componentInstance.message = form.bulk ? 'All Selected forms will be archived. Are you sure you wish to proceed?' : `Are you sure you want to archive ${form.text} forms ?`;
    modalRef.componentInstance.modalName = 'Archive';
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.http.call('archive', 'POST', { Action: 'Archive', FormIds: form.value }).subscribe(res => {
          // console.log(res)
          this.dataLoaded = false
          this.getFormsList(this.userInfo)
          this.selectedForms = [];
          this.selectedFormName = [];
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  bulkDelete() {
    this.deleteForm({ text: this.selectedFormName.join(','), value: this.bulkId, bulk: true });
  }
  bulkMove() {
    this.move({ text: this.selectedFormName.join(','), value: this.bulkId, bulk: true });
  }
  bulkArchive() {
    this.archive({ text: this.selectedFormName.join(','), value: this.bulkId, bulk: true });
  }

  deleteForm(form: any) {
    const modalRef: any = this.modalService.open(ConfirmModalComponent, { size: 'lg' })
    modalRef.componentInstance.message = form.bulk ? 'All Selected forms will be deleted. Are you sure you wish to proceed?' : `Are you sure you want to delete <strong>${form.text}</strong> ?`;
    modalRef.componentInstance.modalName = 'Delete';
    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.http.call('archive', 'POST', { Action: 'Delete', FormIds: form.value }).subscribe(res => {
          this.getFormsList(this.userInfo);
          this.selectedForms = [];
          this.selectedFormName = [];
          // update header uses
          this.dataSharingService.UpdateHeaderUserPlanDetail(this.userInfo.Id, this.selectedWorkspaceId);
        })
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  openModal(formId: any) {
    const modalRef: any = this.modalService.open(UserPermissionModalComponent, { size: 'lg' })
    modalRef.componentInstance.formId = formId;
    modalRef.componentInstance.modalType = 'permission';
    modalRef.componentInstance.workSpaceId = this.selectedWorkspaceId;
    modalRef.result.then((result: any) => { }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }
  openAddNewFolderModal() {
    const modalRef: any = this.modalService.open(AddNewFolderComponent, { size: 'lg' })
    modalRef.componentInstance.folderList = this.folderList;
    // modalRef.componentInstance.workSpaceId = this.userInfo.WorkspaceDetail.Id;
    modalRef.componentInstance.workSpaceId = this.selectedWorkspaceId;
    modalRef.componentInstance.userId = this.userInfo.Id;

    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.getFormsList(this.userInfo);
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  changeViewBy(view: any) {
    this.selectedFolder = null;
    this.viewBy = view;
    if (view === 'All Forms') {
      this.getFormsList(this.userInfo)
      // this.getFoldersWithList(this.userInfo)
    } else {
      this.getFilteredForm();
    }
  }

  getFilteredForm() {
    this.http.call('getFormsList', 'POST', {
      FilterAttribute: this.viewBy,
      SearchKeyword: "",
      UserId: this.userInfo.Id,
      WorkSpaceId: this.selectedWorkspaceId,
      // WorkSpaceId: this.userInfo.WorkspaceDetail.Id,
      pageNumber: 1,
      pageSize: 14
    }).subscribe(res => {
      if (this.viewBy === 'StarredForms') {
        res?.res?.forEach((element: any) => {
          this.favs.push(element.id);
        });
      } else {
        this.favs = [];
      }
      this.formsList = [{
        folderPath: this.viewBy === 'StarredForms' ? 'All Starred Forms' : 'All Archived Forms',
        forms: res.res
      }]
      console.log(res)
    })
  }

  enableBuildPublishTab(form: any, formsbyId?: any) {
    if (this.formsbyId?.[form.value]?.[0]?.formType === 'WorkFlow') {
      if (this.formsbyId?.[form.value]?.[0]?.formEntries?.length > 0 || this.formsbyId?.[form.value]?.[0]?.createdBy !== this.userInfo?.Id) {
        return false;
      } else {
        return true;
      }
    }
    return true
  }

  enableDefine(form: any, formsbyId?: any) {
    return (this.formsbyId?.[form.value]?.[0]?.formType === 'WorkFlow' && this.userInfo?.Id === this.formsbyId?.[form.value]?.[0]?.createdBy);
  }

  enableUrl() {

  }



  ngOnDestroy() {
    this.userInfoSubscription$.unsubscribe();
  }
}
