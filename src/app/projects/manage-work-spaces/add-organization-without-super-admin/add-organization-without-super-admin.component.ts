import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SharedData } from '../sharedData';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { EMPTY, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-organization-without-super-admin',
  templateUrl: './add-organization-without-super-admin.component.html',
  styleUrls: ['./add-organization-without-super-admin.component.scss']
})
export class AddOrganizationWithoutSuperAdminComponent implements OnInit {

  organizationSaveForm = new FormGroup({
    Name: new FormControl('', [Validators.required],
      this.validateNameViaServer.bind(this)
    ),
    DefaultReplyEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      //this.doubleDotValidator.bind(this)
    ],
      this.validateEmailViaServer.bind(this)
    ),
    Country: new FormControl(null),
    Timezone: new FormControl(null),
    Language: new FormControl(null),
    Currency: new FormControl(null),
  });

  public countryList: any;
  public timeZoneList: any;
  public languageList: any;
  public currencyList: any;
  public showPlanPage: boolean = false;
  public showBillingPage: boolean = false;
  public masterPlans: any[] = [];
  planDetails: any = {};
  public userId: any;

  constructor(private router: Router, private http: HttpService, private dataSharingService: DataSharingService) {
    this.userId = this.dataSharingService.GetUserId();
  }

  ngOnInit(): void {
    let sharedData = new SharedData();
    this.countryList = sharedData.getCountries();
    this.timeZoneList = sharedData.getTimezones();
    this.languageList = sharedData.getLanguages();
    this.currencyList = sharedData.getCurrencies();
  }

  getMasterPlan(){
    this.http.call('getMasterPlanDetailById', 'POST', { 'ID': '' }).subscribe(res => {
      this.planDetails = res;
      //this.planDetails.storageSize = ((res.storageSize) / (1024 * 1024));
    })
  }

  doubleDotValidator({ value }: AbstractControl): any {
    if (value?.includes('@')) {
      if (/[~`!#$%\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(value)) {
        return { specialCharInDomain: true };
      }
      if (value.split('@')[1]?.includes('..')) {
        return {doubleDotInDomain: true};
      }
    }
    return null;
  }

  validateEmailViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { Email: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;
        }
      )
    )
  }

  validateNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.call('checkEmail', 'POST', { WorkSpaceName: value })
      .pipe(debounceTime(1000),
        map((response: any) => {
          if (response.data) {
            return {
              isExists: true
            };
          }
          return null;;
        }
      )
    )
  }

  planChange(){
    this.showPlanPage = true;
    this.showBillingPage = false;
    this.http.call('getMasterPlansWithoutPagination', 'GET', '').subscribe(res => {
      this.masterPlans = res;
    })
  }

  updateSelectedPlan(plan: any){
    this.showPlanPage = false;
    this.planDetails = plan;
    this.showBillingPage = true;
    //this.planDetails.storageSize = ((plan.storageSize) / (1024 * 1024));
  }

  submit(){
    const obj = {
      ...JSON.parse(JSON.stringify(this.organizationSaveForm
        .value)),
      UserId: this.userId
    };
    this.http.call('saveWorkSpace', 'POST', obj).subscribe(res => {
      //this.router.navigate(['user/register-confirm'])
      this.planChange();
    });
  }

  get Name() { return this.organizationSaveForm.get('Name'); }
  get DefaultReplyEmail() { return this.organizationSaveForm.get('DefaultReplyEmail'); }
  get Country() { return this.organizationSaveForm.get('Country'); }
  get Timezone() { return this.organizationSaveForm.get('Timezone'); }
  get Language() { return this.organizationSaveForm.get('Language'); }
  get Currency() { return this.organizationSaveForm?.get('Currency'); }
  get f() { return this.organizationSaveForm.controls; }

}
