import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/config/rest-config/http.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserPermissionModalComponent } from '../add-user-permission-modal/add-user-permission-modal.component';

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
  public isEditMode: boolean = false;

  constructor(private http: HttpService, private modalService: NgbModal, public activeModal: NgbActiveModal) {}
  
  ngOnInit(): void {
    this.http.call('getRolePermission', 'POST', {FormId: this.formId}).subscribe(res => {
      console.log(res);
      this.userLists = res;
    });
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
          }
        });
      });
      
    }
  }

  editFormUser(userList: any){
    this.isEditMode = true;
  }

  updateFormUser(userList: any){
    const userData = {
      'FormId': userList.formId,
      'Id': userList.id,
      'Permissions': userList.permissions,
      'UserId': userList.userId,
      'UserEmail': userList.userEmail,
      'UserName': userList.userName
    }
    this.http.call('saveRolePermission', 'POST', userData).subscribe(res => {
      this.userLists.forEach((item:any, index:number) => {
        if(item.id === res.id){
          this.userLists[index] = res;
        }
      });
    });
  }

}
