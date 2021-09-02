import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';

@Component({
  selector: 'app-manage-work-spaces-billing-info',
  templateUrl: './manage-work-spaces-billing-info.component.html',
  styleUrls: ['./manage-work-spaces-billing-info.component.scss']
})
export class ManageWorkSpacesBillingInfoComponent implements OnInit {

  public billingpageData: any;
  constructor(private dataSharingService: DataSharingService) {
    let billData = this.dataSharingService.GetBillingpageData();
    if(billData){
      this.billingpageData = JSON.parse(billData);
    }
    console.log(this.billingpageData);
  }

  ngOnInit(): void {
  }

}
