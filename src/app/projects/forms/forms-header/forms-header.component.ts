import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';

@Component({
  selector: 'app-forms-header',
  templateUrl: './forms-header.component.html',
  styleUrls: ['./forms-header.component.scss']
})
export class FormsHeaderComponent implements OnInit {
  public formPermission: any;
  public organizationPermission: any;
  public userId: any = null;

  constructor(private dataSharingService: DataSharingService) {
    
  }

  ngOnInit(): void {
    this.formPermission = this.dataSharingService.GetPermissions('Forms');
    this.organizationPermission = this.dataSharingService.GetPermissions('Organizations');
    this.userId = this.dataSharingService.GetUserId();
    console.log(this.userId);
  }

}
