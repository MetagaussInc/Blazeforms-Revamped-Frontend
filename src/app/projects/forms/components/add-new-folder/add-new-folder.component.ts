import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-add-new-folder',
  templateUrl: './add-new-folder.component.html',
  styleUrls: ['./add-new-folder.component.scss']
})
export class AddNewFolderComponent implements OnInit {
  @Input() public folderList: any;
  @Input() public form: any;
  @Input() public workSpaceId: any;
  @Input() public userId: any;
  selectedLevel = 0;
  id: any;

  newFolderDef = new FormGroup({
    name: new FormControl('', [Validators.required],
    this.validateNameViaServer.bind(this)),
    desc: new FormControl('', [Validators.required]),
    folder: new FormControl('', [Validators.required, Validators.minLength(10)]),
    active: new FormControl(false)
  });
    constructor(private http: HttpService, public activeModal: NgbActiveModal) { }
  
    ngOnInit(): void {
    }
  
    // selectFolderEventHandler($event: any) {
    //   this.id = $event;
    // }
    selectFolderEventHandler($event: any) {
      console.log($event)
      this.folder?.setValue($event);
    }
    save() {
      console.log(this.newFolderDef.value)
      const payload = {
        Description: this.newFolderDef.value.desc,
        IsActive: this.newFolderDef.value.active,
        Name: this.newFolderDef.value.name,
        ParentId: this.newFolderDef.value.folder?.length > 0 ? this.newFolderDef.value.folder?.length : null,
        SessionUser: this.userId,
        WorkSpaceId: this.workSpaceId
      }
      this.http.call('SaveFolderAttributes', 'POST', payload).subscribe(res => {console.log(res);
          this.close();
        })
    }
  
    close() {
      this.activeModal.close('Folder Added');
    }
    validateNameViaServer({ value }: AbstractControl): Observable<ValidationErrors | null> {
      return this.http.call('ValidateFolderName', 'POST', { 
        Name: value,
        WorkSpaceId: this.workSpaceId
       })
        .pipe(debounceTime(1000),
          map((response: any) => {
            if (response.id) {
              return {
                isExists: true
              };
            }
            return null;;
          }))
    }

    selectFolderLevelHandler($event: any) {
    this.selectedLevel = $event;
    }
    
  get name() { return this.newFolderDef.get('name'); }
  get desc() { return this.newFolderDef.get('desc'); }
  get folder() { return this.newFolderDef.get('folder'); }
  get active() { return this.newFolderDef.get('active'); }
  get f() { return this.newFolderDef.controls; }
  
  }
  