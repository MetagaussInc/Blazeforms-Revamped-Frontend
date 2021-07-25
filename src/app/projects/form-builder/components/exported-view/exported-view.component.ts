import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exported-view',
  templateUrl: './exported-view.component.html',
  styleUrls: ['./exported-view.component.scss']
})
export class ExportedViewComponent implements OnInit {
@Input() public elements: any;
model = {
  name: ''
}
  constructor() { }

  ngOnInit(): void {
    console.log(this.elements)
  }

  submitParentForm(parentForm: any){
    console.log(parentForm)
  }

}
