import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { BASE_URL, HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-manage-work-spaces-subscription',
  templateUrl: './manage-work-spaces-subscription.component.html',
  styleUrls: ['./manage-work-spaces-subscription.component.scss']
})
export class ManageWorkSpacesSubscriptionComponent implements OnInit {

  private userInfoSubscription$: any;
  public userInfo: any;
  public organizationId: any;
  public organizationUserId: any;
  public SuperWorkSpaceId: any;
  public userPlanData: any;
  public planDetail: any;
  public paymentHistory: any;
  public showPlanPage: boolean = false;
  public masterPlans: any[] = [];
  public planPermissions: any;
  public isSuperAdmin: boolean = false;
  public activeIndex: any;

  invoiceModel = {
    id: "",
    userId: "",
    workspaceId: "",
    planId: "",
    transactionId: "",
    paymentDate: new Date(),
    paymentStatus: "",
    amount: 0.0,
    address1: "",
    address2: "",
    cityName: "",
    stateName: "",
    postalCode: "",
    countryId: 1,
    countryName: "", 
    name: "",
    noOfUsers: "",
    noOfForms: "",
    noOfEntries: "",
    storageSize: "",
    price: ""

  }
  public selectedInvoiceData = this.invoiceModel;

  @ViewChild('htmlData') htmlData:ElementRef | undefined;

  @Output() updatePlan = new EventEmitter<any>();

  constructor(private http: HttpService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute, private dataSharingService: DataSharingService, private https: HttpClient) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.SuperWorkSpaceId = userInfo.Id;
    });
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.getUserPlanData();
        this.getUserPlanHistoryData();
      }
    });
    this.planPermissions = this.dataSharingService.GetPermissions("Plan");
    this.isSuperAdmin = this.dataSharingService.IsSuperAdmin();
  }

  ngOnInit(): void {
  }

  getUserPlanData(){
    const userPlan = {
      UserId: this.SuperWorkSpaceId,
      WorkspaceId: this.organizationId,
    }
    this.http.call('getUserPlanDetailByWorkspace', 'POST', userPlan).subscribe(response => {
      this.userPlanData = response;
      this.planDetail = this.userPlanData.plandetails;
      //this.userPlanData.storageSize = ((this.userPlanData.storageSize) / (1024 * 1024));
      //this.planDetail.storageSize = ((this.planDetail.storageSize) / (1024 * 1024));
    });
  }

  getUserPlanHistoryData(){
    this.https.post(BASE_URL + `Plan/GetWorkspacePlanHistory?workspaceId=${this.organizationId}`, null).subscribe(res => {
      this.paymentHistory = res;
    })
  }

  planChange(){
    this.showPlanPage = true;
    this.http.call('getMasterPlansWithoutPagination', 'GET', '').subscribe(res => {
      this.masterPlans = res;
    })
  }

  updateSelectedPlan(plan: any){
    this.showPlanPage = false;
    this.planDetail = plan;
    this.updatePlan.emit(JSON.stringify(plan));
  }

  download(paymentData: any,index: number) {
    this.activeIndex = index;
    this.selectedInvoiceData = paymentData;
    let invoiceNo = '';
    if(this.selectedInvoiceData.transactionId){
      invoiceNo = this.selectedInvoiceData.transactionId.substring(0, 8);
    }
    let DATA = document.getElementById('generateInvoice')!;
    setTimeout( () => {      
      html2canvas(DATA).then(canvas => {
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        PDF.save('invoice_' + invoiceNo + '.pdf');
      });
      this.activeIndex = '';
    }, 2500);
  }

}
