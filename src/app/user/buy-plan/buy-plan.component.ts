import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { storageCountFormatter } from 'src/app/shared/storage-count.pipe';

@Component({
  selector: 'app-buy-plan',
  templateUrl: './buy-plan.component.html',
  styleUrls: ['./buy-plan.component.scss']
})
export class BuyPlanComponent implements OnInit {
  showPlanPage: boolean = false;
  public masterPlans: any[] = [];
  public calulateUites = storageCountFormatter;
  planDetails: any;
  userEmail: any;
  stripePromise: any;
  constructor(public http: HttpService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(res => {
      this.userEmail = res.email;
    })
  }

  ngOnInit(): void {
    this.http.call('getMasterPlanDetailById', 'POST', { 'ID': '' }).subscribe(res => {
      this.planDetails = res;
      //this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
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
    this.planDetails = plan;
  }

  async checkOut() {
    const stripe: any = await this.stripePromise;
    return stripe;
  }
  buyPlan() {
    this.checkOut().then(res => {
      this.http.call('StripeSession','POST', {
        userInfo: {
          Email: this.userEmail
        },
        plan: 'MG Super Test',
        url: window.location.href
      }).subscribe(session => {
      return res.redirectToCheckout({ sessionId: session.id, customerEmail: this.userEmail });

      })
    })
  }

}
