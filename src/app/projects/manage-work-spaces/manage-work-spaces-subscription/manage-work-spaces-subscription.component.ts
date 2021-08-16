import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../../../shared/data-sharing.service';

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

  constructor(private http: HttpService, private store: Store, private router: Router, private Activatedroute: ActivatedRoute, private dataSharingService: DataSharingService) {
    this.userInfoSubscription$ = this.store.select(selectUserInfo).subscribe(userInfo => {
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
      this.userPlanData.storageSize = ((this.userPlanData.storageSize) / (1024 * 1024));
      this.planDetail.storageSize = ((this.planDetail.storageSize) / (1024 * 1024));
    });
  }

  getUserPlanHistoryData(){
    this.http.call('getWorkspacePlanHistory', 'POST', {workspaceId: this.organizationId}).subscribe(response => {
      this.paymentHistory = response;
    });
  }

  download(paymentData: any,index: number) {

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
    this.planDetail.storageSize = ((this.planDetail.storageSize) / (1024 * 1024));
  }

}
