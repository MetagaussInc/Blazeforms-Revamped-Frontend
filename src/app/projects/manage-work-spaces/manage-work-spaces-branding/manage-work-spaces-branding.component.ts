import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { DataSharingService } from '../../../shared/data-sharing.service';

@Component({
  selector: 'app-manage-work-spaces-branding',
  templateUrl: './manage-work-spaces-branding.component.html',
  styleUrls: ['./manage-work-spaces-branding.component.scss']
})
export class ManageWorkSpacesBrandingComponent implements OnInit {

  Image = new FormControl('', [Validators.required]);

  public organizationId: any;
  public organizationUserId: any;
  public imageSrc: string = '';
  public fileSource: any;
  public logoExt: any;
  public logo: any;
  public userId: any;
  public isSuperAdmin: boolean = false;

  constructor(private http: HttpService, private router: Router, private Activatedroute: ActivatedRoute, private sanitizer: DomSanitizer, private dataSharingService: DataSharingService) {
    this.userId = this.dataSharingService.GetUserId();
    this.isSuperAdmin = this.dataSharingService.IsSuperAdmin();
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
      }
    });
    let obj = {
      Id: this.organizationId,
      IsOrganizationSettings: true,
      UserId: this.organizationUserId
    }
    let dataRes: any;
    if(this.isSuperAdmin){
      this.http.call('setCurrentWorkSpaceForAdmin', 'POST', obj).subscribe(res => {
        dataRes = res.result.data;
        this.logo = dataRes.workspaceDetail.logo;
        this.logoExt = dataRes.workspaceDetail.logoExt;
        this.imageSrc = `data:image/${this.logoExt};base64,${this.logo}`;
      });
    }
    else{
      this.http.call('setCurrentWorkSpace', 'POST', obj).subscribe(res => {
        dataRes = res.result.data;
        this.logo = dataRes.workspaceDetail.logo;
        this.logoExt = dataRes.workspaceDetail.logoExt;
        this.imageSrc = `data:image/${this.logoExt};base64,${this.logo}`;
      });
    }
  }

  ngOnInit(): void {
  }

  onFileChange(event:any) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);    
      reader.onload = () => {   
        this.imageSrc = reader.result as string;
        this.fileSource = reader.result;
      };
    }
  }

  submit(){
    let model = {'LogoWorkSpaceId': this.organizationId,  'ImageBase64': this.loadBase64Image(this.fileSource) };
    this.http.call('uploadFilesForWorkspace', 'POST', model).subscribe(res => {
      console.log(res);
    });
  }

  loadBase64Image(image: any){
    let encodedmage: any;
    encodedmage = this.sanitizer.bypassSecurityTrustResourceUrl(image);
    return encodedmage.changingThisBreaksApplicationSecurity;
  }

}
