import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserPermissionModalComponent } from '../user-permission-modal/user-permission-modal.component';
import { ToastService } from '../../../../shared/toast.service';

@Component({
  selector: 'app-add-user-permission-modal',
  templateUrl: './add-user-permission-modal.component.html',
  styleUrls: ['./add-user-permission-modal.component.scss']
})
export class AddUserPermissionModalComponent implements OnInit {

  @Input() public formId: any;
  @Input() public modalType: any;
  @Input() public workSpaceId: any;

  public userListData: any;
  public userRolesData: any;

  addPermissionForm:  FormGroup;

  userPermissions: Array<any> = [
    { name: 'View', value: 3, short: 'view'},
    { name: 'Edit', value: 1, short: 'edit'},
    { name: 'Delete', value: 2, short: 'delete'}
  ];

  constructor(private http: HttpService, private fb: FormBuilder, private modalService: NgbModal, public activeModal: NgbActiveModal, private toastService: ToastService) {
    this.addPermissionForm = this.fb.group({
      email: ['', Validators.required],
      permission: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.http.call('getFormUserRoleWorkSpaces', 'POST', {Id: this.formId, WorkSpaceId: this.workSpaceId}).subscribe(res => {
      this.userRolesData = res;
      let userNameArr : any[] = [];
      res.data.forEach( function(value:any, index:number) {
        if(index == 0) return;
        let username = `${value.firstName} ${value.lastName} (${value.email})`;
        userNameArr.push({id : index+1, name : username});
      });
      this.userListData = userNameArr;
    });
  }

  onCheckboxChange(e: any) {
    const permission: FormArray = this.addPermissionForm.get('permission') as FormArray;  
    if (e.target.checked) {
      permission.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      permission.controls.forEach((item) => {
        if (item.value == e.target.value) {
          permission.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submit(){
    let splitEmail = this.addPermissionForm.value.email.split('(');
    splitEmail = splitEmail[1].replace(')', '');
    const selectedEmail = splitEmail;
    const selectedPermission = this.addPermissionForm.value.permission;
    let selectedUserId;
    this.userRolesData.data.forEach((item:any) => {
      if(item.email === selectedEmail){        
        selectedUserId = item.id;
        return;
      }
    });
    selectedPermission.push(3);
    selectedPermission.sort();
    let saveUserData = {
      'FormId': this.formId,
      'Id': null,
      'Permissions': selectedPermission.toString(),
      'UserEmail': selectedEmail,
      'UserId': selectedUserId,
      'UserName': null
    }
    this.http.call('saveRolePermission', 'POST', saveUserData).subscribe(res => {
      this.toastService.showSuccess('User Added Successfully!');
      this.closeAddModal();
    });
  }

  closeAddModal(){
    this.activeModal.close(true);
    const modalRef: any = this.modalService.open(UserPermissionModalComponent,{ size: 'lg' })
    modalRef.componentInstance.formId = this.formId;      
    modalRef.componentInstance.modalType = 'permission';
    modalRef.componentInstance.workSpaceId = this.workSpaceId;
    modalRef.result.then((result: any) => { }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

}
