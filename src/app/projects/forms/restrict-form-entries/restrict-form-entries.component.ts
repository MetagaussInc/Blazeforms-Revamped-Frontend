import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/config/rest-config/http.service';

@Component({
  selector: 'app-restrict-form-entries',
  templateUrl: './restrict-form-entries.component.html',
  styleUrls: ['./restrict-form-entries.component.scss']
})
export class RestrictFormEntriesComponent implements OnInit {
  @Input() public form: any; 

  addForm = false;
  constructor(private http: HttpService, public activeModal: NgbActiveModal) {
    
  }

  ngOnInit(): void {
    this.http.call('getRolePermissions', 'POST', {FormIds: this.form?.value}).subscribe(res => {
      console.log(res)
    })
  }

  close(message: any) {
    console.log('12')
    this.activeModal.close(message);
  }

  save() {
    
  }

}
