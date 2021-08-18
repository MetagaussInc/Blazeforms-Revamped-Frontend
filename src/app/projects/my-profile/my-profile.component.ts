import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../shared/data-sharing.service';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  public userId: any;
  constructor(private dataSharingService: DataSharingService, private http: HttpService, private modalService: NgbModal) {
    this.userId = this.dataSharingService.GetUserId();
    console.log(this.userId);
  }

  ngOnInit(): void {
  }

}
