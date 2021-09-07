import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as lodash from 'lodash';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-add-form-modal',
  templateUrl: './add-form-modal.component.html',
  styleUrls: ['./add-form-modal.component.scss']
})
export class AddFormModalComponent implements OnInit, OnChanges {
@Input() public formsList: any;
@Input() public userId: any;
@Output() openEditEvent: EventEmitter<any> = new EventEmitter()
 viewFormsList = false;
 viewFormDesign = false;
 viewMainSection = true;
 url = '';
 selectedForm: any = null;
 selectedFormDetail: any = null;
  constructor(private router: Router,public activeModal: NgbActiveModal, private sanitizer: DomSanitizer, private http: HttpService) {

   }

  ngOnChanges(){
  }
  ngOnInit(): void {
      console.log(this.formsList)
  }

  openEdit(type: string){
    this.activeModal.close(type);
    // this.openEditEvent.emit(type);
  }

  copy(form: any) {
    this.selectedForm = form;
    this.getForm();

  }
  viewForm(form: any) {
    this.url = form.url;
    this.selectedForm = form;
    this.viewFormDesign = true;
    this.viewFormsList = false
  }

  copyFromDesign() {
    this.getForm();
  }

  FormUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.href?.split('#')?.[0] + `#/${this.url?.split('#')?.[1]?.replace('BlazeForms', 'blazeforms')}`);
  }

  getForm() {
    const payload = {
      FormEntriesId: null, // to do
      Id: this.selectedForm.id,
      Name: null, // to do
      WorkSpaceName: null, // to do
      userID: this.userId
    }
    this.http.call('GetFormDesign', 'POST', payload).subscribe(res => {
      this.selectedFormDetail = res;
      this.copyAttributes(res);
  
    })

  }

  copyAttributes(formDetail: any) {
    const payload = {
      CreatedBy: formDetail.createdBy,
DependenciesJSON: formDetail.dependenciesJSON,
Description: formDetail.description,
FormNewJSON: formDetail.formNewJSON,
FormSettings: formDetail.formSettings,
FormStyleJson: formDetail.formStyleJson,
FormType: formDetail.formType,
Id: formDetail.id,
Name: this.getNewFormName(formDetail.name + 'copy '),
SubmissionButtonName: formDetail.submissionButtonName,
SubmissionDependenciesJSON: formDetail.submissionDependenciesJSON,
SubmissionSettings: formDetail.submissionSettings,
WorkSpaceId: formDetail.workSpaceId,
formLabels: formDetail.formLabels,
modifiedBy: formDetail.modifiedBy,
miscellaneousJSON: formDetail.miscellaneousJSON
    }

    this.http.call('CopyFormAttributes', 'POST', payload).subscribe(res => {
      this.router.navigate(['/form-builder'], {queryParams: {ID: res.id, seletedTab: 1}})
      this.activeModal.close('close');
    })
  }

  getRandomIntInclusive(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
  }

  getNewFormName(formName: string) {
    const randomNumber = this.getRandomIntInclusive(0, 10);
    return formName + randomNumber;
  }

}


