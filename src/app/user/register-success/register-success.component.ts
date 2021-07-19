import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  queryParamsSubscription$: any;
  progressLoader = true;
  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.queryParamsSubscription$ = this.route.queryParams.subscribe((params: any) => {
      this.Activate(params['key']);
    });
  }

  Activate(activationKey: any) {
    // this.progressLoader = true;
    let model = { 'ActivationKey': activationKey };
    this.http.call('activateUser', 'POST', model).subscribe(
      data => {
        if (data != null && data.id != '') {
          if (data.isLinkActivated) {
            this.progressLoader = false;

            // TO DO: THis code is not required as of now , we will check it if some thing comes up in testing.
            // data.password != null ? localStorage.setItem("ActivatedUserData", JSON.stringify(data)) : '';
            // let userType: string;
            // if (data.isInvited)
              // userType = this.appConstants.UserActivationType.Invited;
            // else
              // data.userType == this.appConstants.UserActivationType.FreePlan ? userType = this.appConstants.UserActivationType.FreePlan : userType = this.appConstants.UserActivationType.PaidPlan;
            // localStorage.setItem('activationUserType', userType);
            // this.router.navigate(['/confirmation']);
          }
          else {
            // window.location.href = this.appConfig.invitationLink + data.activationKey;
            // localStorage.setItem('activateUserMapping', activationKey )
          }
          
        } else {
          this.router.navigate(['/confirmation-error']);
        }
      },
      error => {
      });
  }
}
