import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';

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

  constructor(private http: HttpService, private router: Router, private Activatedroute: ActivatedRoute, private sanitizer: DomSanitizer) {
    const queryParamsAction = this.Activatedroute.queryParamMap.subscribe(params => {
      if(params.get('action') == 'edit'){
        let orgId: any = params.get('id');
        let orgUserId: any = params.get('orgUserId');
        this.organizationId = decodeURIComponent(orgId);
        this.organizationUserId = decodeURIComponent(orgUserId);
      }
    });
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
    let model = {'UserId': this.organizationUserId,  'ImageBase64': this.loadBase64Image(this.fileSource) };
    this.http.call('uploadFiles', 'POST', model).subscribe(res => {
      console.log(res);
    });
  }

  loadBase64Image(image: any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(image);
  }

}
