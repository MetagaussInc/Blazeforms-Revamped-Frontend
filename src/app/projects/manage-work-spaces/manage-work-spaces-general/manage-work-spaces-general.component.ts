import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SharedData } from '../sharedData';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-manage-work-spaces-general',
  templateUrl: './manage-work-spaces-general.component.html',
  styleUrls: ['./manage-work-spaces-general.component.scss']
})
export class ManageWorkSpacesGeneralComponent implements OnInit {

  organizationGeneralForm = new FormGroup({
    Name: new FormControl('', [Validators.required],
      //this.validateNameViaServer.bind(this)
    ),
    DefaultReplyEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
      //this.doubleDotValidator.bind(this)
    ],
      //this.validateEmailViaServer.bind(this)
    ),
    Country: new FormControl(null),
    Timezone: new FormControl(null),
    Language: new FormControl(null),
    Currency: new FormControl(null),
    isActive: new FormControl(true)
  });

  public countryList: any;
  public timeZoneList: any;
  public languageList: any;
  public currencyList: any;
  public organizationId: any;
  public organizationUserId: any;

  constructor(private router: Router, private Activatedroute: ActivatedRoute, private http: HttpService) {
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
        this.getCurrentWorkspaceData(this.organizationId, this.organizationUserId);
      }
    });
  }

  ngOnInit(): void {
    let sharedData = new SharedData();
    this.countryList = sharedData.getCountries();
    this.timeZoneList = sharedData.getTimezones();
    this.languageList = sharedData.getLanguages();
    this.currencyList = sharedData.getCurrencies();
  }

  getCurrentWorkspaceData(orgId: any, userId: any){
    let obj = {
      Id: orgId,
      IsOrganizationSettings: true,
      UserId: userId
    }
    this.http.call('setCurrentWorkSpaceForAdmin', 'POST', obj).subscribe(res => {
      let data = res.result.data;
      this.organizationGeneralForm.patchValue({
        Name: data.workSpaceName,
        DefaultReplyEmail: data.email
     });
    })
  }

  submit(){
    console.log(this.organizationGeneralForm.value);
    const obj = {
      ...JSON.parse(JSON.stringify(this.organizationGeneralForm.value)),
      Id: this.organizationId,
      UserId: this.organizationUserId
    };
    this.http.call('saveWorkSpace', 'POST', obj).subscribe(res => {
      this.router.navigate(['/work-spaces']);
    })
  }

  get WorkSpaceName() { return this.organizationGeneralForm.get('WorkSpaceName'); }
  get Email() { return this.organizationGeneralForm.get('Email'); }
  get Country() { return this.organizationGeneralForm.get('Country'); }
  get Timezone() { return this.organizationGeneralForm.get('Timezone'); }
  get Language() { return this.organizationGeneralForm.get('Language'); }
  get Currency() { return this.organizationGeneralForm?.get('Currency'); }
  get f() { return this.organizationGeneralForm.controls; }

}
