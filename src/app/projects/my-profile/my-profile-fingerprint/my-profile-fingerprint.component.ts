import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-my-profile-fingerprint',
  templateUrl: './my-profile-fingerprint.component.html',
  styleUrls: ['./my-profile-fingerprint.component.scss']
})
export class MyProfileFingerprintComponent implements OnInit {

  public userId: any;
  public userData: any;
  public imageSrc: any;
  public fileSource: any;
  public isImageSubmitted: boolean = false;

  constructor(private dataSharingService: DataSharingService, private http: HttpService, private sanitizer: DomSanitizer, private toastService: ToastService) {
    this.userId = this.dataSharingService.GetUserId();
    this.userData = this.dataSharingService.GetLoggedInUserData();
    if(this.userData.ProfileImage){
      this.imageSrc = `data:image/JPEG;base64,${this.userData.ProfileImage}`;
    }
  }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any){
    this.isImageSubmitted = true;
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      if (file.type == 'image/jpg' || file.type == 'image/png' || file.type == 'image/jpeg') {
        let fileSize = ((file.size) / (1024 * 1024));
        if(fileSize < 5){
          reader.readAsDataURL(file);    
          reader.onload = () => {   
            //this.imageSrc = reader.result as string;
            this.fileSource = reader.result;
            this.submit();
          };
        }
        else{
          this.isImageSubmitted = false;
          this.toastService.showError('Image size should not be more then 5 MB!');
        }
      }
      else{
        this.isImageSubmitted = false;
        this.toastService.showError('Only JPG or PNG allowed!');
      }
    }
  }

  submit(){
    let model = {'UserId': this.userId,  'ImageBase64': this.loadBase64Image(this.fileSource) };
    this.http.call('uploadProfileImage', 'POST', model).subscribe(res => {
      this.isImageSubmitted = false;
      if(res){
        this.imageSrc = `data:image/JPEG;base64,${res.profileImage}`;
        this.toastService.showSuccess('Profile updated successfully!');
      }
      else{
        this.toastService.showError('Something wrong');
      }
    });
  }

  loadBase64Image(image: any){
    let encodedmage: any;
    encodedmage = this.sanitizer.bypassSecurityTrustResourceUrl(image);
    return encodedmage.changingThisBreaksApplicationSecurity;
  }

}
