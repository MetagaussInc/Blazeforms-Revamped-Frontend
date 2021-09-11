import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { AddNewFolderComponent } from '../add-new-folder/add-new-folder.component';

@Component({
  selector: 'app-edit-form-modal',
  templateUrl: './edit-form-modal.component.html',
  styleUrls: ['./edit-form-modal.component.scss']
})
export class EditFormModalComponent implements OnInit {
  @Input() public folderList: any;
  @Input() public type: any;
  @Input() public modalType: any;
  @Input() public workSpaceId: any;
  @Input() public userId: any;
  @Input() public config: any;
  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    folder: new FormControl('', [Validators.required, Validators.minLength(10)]),
    active: new FormControl(true)
  });

  checkforAgreements({ value }: AbstractControl): any {
    if (!value) {
      return {
        isRefused: true
      }
    }
    return null
  }
  
  selectFolderEventHandler($event: any) {
    console.log($event)
    this.folder?.setValue($event);
  }
   
  constructor(private http: HttpService, public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.modalType === 'Edit') {
      this.addForm.setValue({
        name: this.config.name, 
        desc: this.config.description,
        folder: this.config.folderID,
        active: this.config.isActive
      });
    }
    console.log(this.folderList, this.modalType);
  }

  closeModal() {
    this.activeModal.close('close');
  }

  editForm() {
    const p = {
      Description: this.addForm.value.desc,
DocumentTemplatesJson: "NO_VALUE",
FormSettings: "NO_VALUE",
FormType: this.type,
Id: this.config.id,
IsActive: this.addForm.value.isActive,
Name: this.addForm.value.name,
SessionUser: this.userId,
SubmissionButtonName: "NO_USAGE",
SubmissionSettings: "NO_USAGE",
WorkSpaceId: this.workSpaceId
    }

    this.http.call('SaveFormAttributes', 'POST', p).subscribe(res => {
      if (res.id) {
        this.activeModal.close({message: 'added', res: res});
      }
      console.log(res)
    })
  }

  submit() {
    const payload = {
      Description: this.addForm.value.desc,
      FolderID: this.addForm.value.folder,
      IsActive: this.addForm.value.isActive,
      Name: this.addForm.value.name,
      WorkspaceId: this.workSpaceId
    }
    const p  = {
      Description: this.addForm.value.desc,
      DocumentTemplatesJson: "NOUSAGE",
      FormSettings: "NOUSAGE",
      FormType: this.type,
      FolderID: this.addForm.value.folder,
      IsActive: true,
      Name: this.addForm.value.name,
      SessionUser: this.userId,
      SubmissionButtonName: "NOUSAGE",
      SubmissionSettings: "NOUSAGE",
      WorkSpaceId: this.workSpaceId
    }
    this.http.call('SaveFormAttributes', 'POST', p).subscribe(res => {
      if (res.id) {
        this.activeModal.close({message: 'added', res: res});
      }
      console.log(res)
    })

  }

  openAddNewFolderModal() {
    console.log('open')
    const modalRef: any = this.modalService.open(AddNewFolderComponent,{ size: 'lg' })
    modalRef.componentInstance.folderList =  this.folderList; 
    modalRef.componentInstance.workSpaceId = this.workSpaceId;
    modalRef.componentInstance.userId = this.userId;

    modalRef.result.then((result: any) => {
      if (result !== 'close') {
        this.http.call('getFolders', 'POST', {
          WorkSpaceId: this.workSpaceId,}).subscribe(res => {
          this.folderList = res;
        })
        // this.getFormsList(this.userInfo);
      }
    }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  get name() { return this.addForm.get('name'); }
  get desc() { return this.addForm.get('desc'); }
  get folder() { return this.addForm.get('folder'); }
  get active() { return this.addForm.get('active'); }
  get f() { return this.addForm.controls; }


}
