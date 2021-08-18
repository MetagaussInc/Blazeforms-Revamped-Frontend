import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-my-profile-general',
  templateUrl: './my-profile-general.component.html',
  styleUrls: ['./my-profile-general.component.scss']
})
export class MyProfileGeneralComponent implements OnInit {
  updateProfileForm = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$"),
    ]),
  });
  public userId: any;
  public userData: any;
  public imageSrc: any;
  public acivePanel = 'static-1';
  public fileSource: any;
  public isFormSubmitted: boolean = false;
  public isImageSubmitted: boolean = false;

  constructor(private dataSharingService: DataSharingService, private http: HttpService, private sanitizer: DomSanitizer, private toastService: ToastService) {
    this.userId = this.dataSharingService.GetUserId();
    this.userData = this.dataSharingService.GetLoggedInUserData();
    this.imageSrc = `data:image/JPEG;base64,${this.userData.ProfileImage}`;
    this.updateProfileData();
  }

  ngOnInit(): void {
  }

  updateProfileData(){
    this.updateProfileForm.patchValue({
      FirstName: this.userData.FirstName,
      LastName: this.userData.LastName,
      Email: this.userData.Email,
    });
  }

  public beforeChange($event: NgbPanelChangeEvent) {
    //console.log($event);
    if($event.panelId == 'static-1'){
      this.acivePanel = 'static-2';
    }
    else{
      this.acivePanel = 'static-1';
    }    
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

  updateProfile(){
    this.isFormSubmitted = true;
    let obj = {
      Email: this.userData.Email,
      FirstName: this.updateProfileForm.value.FirstName,
      LastName: this.updateProfileForm.value.LastName,
      Id: this.userData.Id
    }
    this.http.call('updateUserProfile', 'POST', obj).subscribe(res => {
      this.isFormSubmitted = false;
      this.toastService.showSuccess('Profile updated successfully!');
    });
    
  }

  get FirstName() { return this.updateProfileForm.get('FirstName'); }
  get LastName() { return this.updateProfileForm.get('LastName'); }
  get Email() { return this.updateProfileForm.get('Email'); }
  get f() { return this.updateProfileForm.controls; }

}
