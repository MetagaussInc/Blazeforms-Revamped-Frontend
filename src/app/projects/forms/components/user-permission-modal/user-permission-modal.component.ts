import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserPermissionModalComponent } from '../add-user-permission-modal/add-user-permission-modal.component';
import { analyze } from 'eslint-scope';
import { ToastService } from '../../../../shared/toast.service';

@Component({
  selector: 'app-user-permission-modal',
  templateUrl: './user-permission-modal.component.html',
  styleUrls: ['./user-permission-modal.component.scss']
})
export class UserPermissionModalComponent implements OnInit {
  
  @Input() public formId: any;
  @Input() public modalType: any;
  @Input() public workSpaceId: any;

  public userLists: any;
  public isEditMode: any;
  public assignedUserPermission = [] as  any;
  public assignedPer = [] as any;
  public assignedidx: any;

  userPermissions: Array<any> = [
    { name: 'View', value: 3, short: 'view'},
    { name: 'Edit', value: 1, short: 'edit'},
    { name: 'Delete', value: 2, short: 'delete'}
  ];

  constructor(private http: HttpService, private modalService: NgbModal, public activeModal: NgbActiveModal, private toastService: ToastService) { }
  
  ngOnInit(): void {
    setTimeout(() =>{
      this.http.call('getRolePermission', 'POST', {FormId: this.formId}).subscribe(res => {
        console.log(res);
        this.userLists = res;
        res.forEach((item: any) => {
          let itemPer = {id: item.id, permissions: item.permissions};
          this.assignedUserPermission.push(itemPer);
        });
      });
    }, 1000);
  }

  openAddUserPermissionModal(){
    this.activeModal.close(true);
    const modalRef: any = this.modalService.open(AddUserPermissionModalComponent,{ size: 'lg' })
    modalRef.componentInstance.modalType = 'add_permission';
    modalRef.componentInstance.formId = this.formId;      
    modalRef.componentInstance.workSpaceId = this.workSpaceId;
    modalRef.result.then((result: any) => { }, (reason: any) => {
      console.log(`Dismissed `);
    });
  }

  deleteFormUser(userList: any){
    if(confirm("Are you sure you want to delete the user?")){
      const userData = {
        'FormId': userList.formId,
        'Id': userList.id,
        'Permissions': userList.permissions,
        'UserId': userList.userId
      }
      this.http.call('deleteRolePermission', 'POST', userData).subscribe(res => {
        this.userLists.forEach((item:any, index:number) => {
          if(item.id === userList.id){
            delete this.userLists[index];
            this.toastService.showSuccess('User Deleted Successfully!');
          }
        });
      });
    }
  }

  editFormUser(userList: any){
    this.isEditMode = userList.id;
  }

  updateFormUser(userList: any){
    console.log(this.assignedUserPermission);
    let selectedUserPermission;
    this.assignedUserPermission.forEach((element:any) => {
      if(element.id == userList.id){
        selectedUserPermission = element.permissions;
      }
    });
    const userData = {
      'FormId': userList.formId,
      'Id': userList.id,
      'Permissions': selectedUserPermission,
      'UserId': userList.userId,
      'UserEmail': userList.userEmail,
      'UserName': userList.userName
    }
    this.http.call('saveRolePermission', 'POST', userData).subscribe(res => {
      this.userLists.forEach((item:any, index:number) => {
        if(item.id === res.id){
          this.userLists[index] = res;
          this.isEditMode = '';
          this.toastService.showSuccess('Permission Updated Successfully!');
        }
      });
    });
  }

  onCheckboxChange(e: any, userData: any) {
    this.assignedidx;
    this.assignedPer = [];
    this.assignedUserPermission.forEach((item:any, index:number) => {
      if(item.id == userData.id){
        this.assignedidx = index;
        let splitPer = item.permissions.split(',');
        this.assignedPer = splitPer;
      }
    });
    if (e.target.checked) {
      let perValue: any = e.target.value;
      this.assignedPer.push(perValue);
    }
    else{
      let i: number = 0;
      this.assignedPer.forEach((item: any) => {
        if (item == e.target.value) {
          this.assignedPer.splice(i, 1);
          return;
        }
        i++;
      });
    }
    this.assignedUserPermission[this.assignedidx].permissions = this.assignedPer.join(',');
  }

}