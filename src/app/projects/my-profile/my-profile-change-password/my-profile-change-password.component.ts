import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../../shared/data-sharing.service';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../shared/toast.service';

@Component({
  selector: 'app-my-profile-change-password',
  templateUrl: './my-profile-change-password.component.html',
  styleUrls: ['./my-profile-change-password.component.scss']
})
export class MyProfileChangePasswordComponent implements OnInit {

  updatePasswordForm = new FormGroup({
    OldPassword: new FormControl('', [Validators.required]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      //this.matchPassword.bind(this)
    ]),
  });

  public userId: any;
  public userData: any;
  public imageSrc: any;
  public fileSource: any;
  public isFormSubmitted: boolean = false;
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

  matchPass(): boolean {
    if ((this.confirmPassword?.dirty || this.confirmPassword?.touched)) {
      if (this.confirmPassword?.value !== this.Password?.value) {
        return true;
      }
    }
    return false
  }

  matchPassword({ value }: AbstractControl): any {
    return this.Password?.value === value ? { passwordNotMatched: false } : { passwordNotMatched: true };
  }

  updatePassword(){
    this.isFormSubmitted = true;
    let obj = {
      Email: this.userData.Email,
      Password: this.updatePasswordForm.value.OldPassword
    };
    this.http.call('checkUserByPassword', 'POST', obj).subscribe(res => {
      if(res == false){
        this.isFormSubmitted = false;
        this.toastService.showError('Old password does not match!');
      }
      else{
        let passObj = {
          Email: this.userData.Email,
          Password: this.updatePasswordForm.value.Password
        };
        this.http.call('changePassword', 'POST', passObj).subscribe(res => {
          this.isFormSubmitted = false;
          this.toastService.showSuccess('Password changed successfully!');
          this.updatePasswordForm.reset();
        }); 
      }
    });
  }

  get OldPassword() { return this.updatePasswordForm.get('OldPassword'); }
  get Password() { return this.updatePasswordForm.get('Password'); }
  get confirmPassword() { return this.updatePasswordForm.get('confirmPassword'); }
  get f() { return this.updatePasswordForm.controls; }

}
