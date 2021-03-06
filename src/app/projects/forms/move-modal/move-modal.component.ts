import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-move-modal',
  templateUrl: './move-modal.component.html',
  styleUrls: ['./move-modal.component.scss']
})
export class MoveModalComponent implements OnInit {
@Input() public folderList: any;
@Input() public form: any;
id: any;
  constructor(private http: HttpService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  selectFolderEventHandler($event: any) {
    this.id = $event;
  }
  save() {
    let p = {}
    if (this.form.bulk) {
p = {
  Action: "Move",
FolderId: this.id,
FormIds: this.form.value
}
    } else {
      p = {
        FolderID: this.id,
        Id: this.form.value 
      }
    }

    this.http.call(this.form.bulk ? 'bulkAction' : 'moveFolder', 'POST', p).subscribe(res => {console.log(res);
        this.close();
      })
  }

  close() {
    this.activeModal.close('close');
  }

}
