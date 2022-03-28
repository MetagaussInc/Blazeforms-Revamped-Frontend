import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { loadStripe } from "@stripe/stripe-js";
import { HttpService } from "src/app/config/rest-config/http.service";
import { storageCountFormatter } from "src/app/shared/storage-count.pipe";

@Component({
  selector: "app-buy-plan",
  templateUrl: "./buy-plan.component.html",
  styleUrls: ["./buy-plan.component.scss"],
})
export class BuyPlanComponent implements OnInit {
  showPlanPage: boolean = false;
  public masterPlans: any[] = [];
  public calulateUites = storageCountFormatter;
  planDetails: any;
  userEmail: any;

  stripeKey = window.location.host === "app.blazeforms.com" ? 'pk_live_kgALEKxShS6il7bwDjsg6X1x00MZPQc0de' : 'pk_test_51IclahSHmdevWCqrjzhp4868a8lTtKZ8a4meW7CVlQstDeu7GIPW9ChZEWYvGlBGSiOFIyWLr7N4O43Rrc7IJzUP00Bo6EZPFW';
  stripePromise = loadStripe(this.stripeKey);

  constructor(public http: HttpService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((res) => {
      this.userEmail = res.email;
    });
  }

  ngOnInit(): void {
    this.http
      .call("getMasterPlanDetailById", "POST", { ID: "" })
      .subscribe((res) => {
        this.planDetails = res;
        //this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
      });
  }

  planChange() {
    this.showPlanPage = true;
    this.http
      .call("getMasterPlansWithoutPagination", "GET", "")
      .subscribe((res) => {
        this.masterPlans = res;
      });
  }

  updateSelectedPlan(plan: any) {
    this.showPlanPage = false;
    this.planDetails = plan;
    console.log(this.planDetails.name);
  }

  async checkOut() {
    const stripe: any = await this.stripePromise;
    return stripe;
  }
  buyPlan() {
    this.checkOut().then((res) => {
      console.log(res);
      this.http
        .call("StripeSession", "POST", {
          userInfo: {
            Email: this.userEmail,
          },
          plan: this.planDetails?.name,
          url: `${window.location.origin}${window.location.pathname}/#/user/login`,
        })
        .subscribe((session) => {
          return res.redirectToCheckout({ sessionId: session.id });
        });
    });
  }
}
