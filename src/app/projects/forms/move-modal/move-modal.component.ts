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
    this.http.call('moveFolder', 'POST', { FolderID: this.id,
      Id: this.form.value }).subscribe(res => {console.log(res);
        this.close();
      })
  }

  close() {
    this.activeModal.close();
  }

}
