import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { ToastService } from '../../../shared/toast.service';
import { Store } from '@ngrx/store';
import { userWorkspaceLogoUpdate } from 'src/app/+state/user/user.actions';
import { selectUserInfo } from 'src/app/+state/user/user.selectors';

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
  public isFormSubmitted: boolean = false;
  public selectedFileName = 'Select file';
  public userInfo: any;
  public logoType: any;
  public workspacePermissions: any;

  constructor(private http: HttpService, private router: Router, private Activatedroute: ActivatedRoute, private sanitizer: DomSanitizer, private dataSharingService: DataSharingService, private toastService: ToastService, private store: Store) {
    this.store.select(selectUserInfo).subscribe(userInfo => {
      if(userInfo){
        this.userInfo = userInfo;
        this.userId = this.userInfo.Id;
        this.isSuperAdmin = this.userInfo.IsSuperAdmin;
      }      
    });
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
      }
    });
    this.workspacePermissions = this.dataSharingService.GetPermissions("Organizations");
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
        if(this.logo){
          this.logoExt = dataRes.workspaceDetail.logoExt;
          this.imageSrc = `data:image/${this.logoExt};base64,${this.logo}`;
        }
      });
    }
    else{
      this.http.call('setCurrentWorkSpace', 'POST', obj).subscribe(res => {
        dataRes = res.result.data;
        this.logo = dataRes.workspaceDetail.logo;
        if(this.logo){
          this.logoExt = dataRes.workspaceDetail.logoExt;
          this.imageSrc = `data:image/${this.logoExt};base64,${this.logo}`;
        }
      });
    }
  }

  ngOnInit(): void {
  }

  onFileChange(event:any) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.selectedFileName = file.name;
      if (file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/jpeg') {
        let fileSize = ((file.size) / (1024 * 1024));
        if(fileSize < 0.5){
          reader.readAsDataURL(file);    
          reader.onload = () => {   
            this.fileSource = reader.result;
            this.logoType = file.type;
          };
        }
        else{
          this.Image.setErrors({'invalid': true});
          this.toastService.showError('Image size should not be more then 500 KB !');
        }
      }
      else{
        this.Image.setErrors({'invalid': true});
        this.toastService.showError('Only JPG or PNG allowed!');
      }
    }
  }

  submit(){
    this.isFormSubmitted = true;
    let encodedImage = this.loadBase64Image(this.fileSource);
    let model = {'LogoWorkSpaceId': this.organizationId,  'ImageBase64': encodedImage};
    this.http.call('uploadFilesForWorkspace', 'POST', model).subscribe(res => {
      this.isFormSubmitted = false;
      if(res){
        this.imageSrc = this.fileSource as string;
        this.selectedFileName = '';
        if(this.organizationId == this.userInfo.WorkspaceId){
          let encodedUrl = encodedImage.split('base64,')[1];
          let encodedExt = this.logoType.split('image/')[1];
          const props = {
            logo: encodedUrl,
            ext: encodedExt
          }
          this.store.dispatch(userWorkspaceLogoUpdate({props}));
        }
        // update header uses
        this.dataSharingService.UpdateHeaderUserPlanDetail(this.userInfo.Id, this.organizationId);
        this.toastService.showSuccess('Logo Updated Successfully!');
      }
      else{
        this.toastService.showSuccess('Something is wrong!');
      }
    });
  }

  loadBase64Image(image: any){
    let encodedmage: any;
    encodedmage = this.sanitizer.bypassSecurityTrustResourceUrl(image);
    return encodedmage.changingThisBreaksApplicationSecurity;
  }

}
