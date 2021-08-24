import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';

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
  addForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    folder: new FormControl('', [Validators.required, Validators.minLength(10)]),
    active: new FormControl(false)
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
  constructor(private http: HttpService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.folderList, this.type);
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
      FormType: "Form",
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

  get name() { return this.addForm.get('name'); }
  get desc() { return this.addForm.get('desc'); }
  get folder() { return this.addForm.get('folder'); }
  get active() { return this.addForm.get('active'); }
  get f() { return this.addForm.controls; }


}
