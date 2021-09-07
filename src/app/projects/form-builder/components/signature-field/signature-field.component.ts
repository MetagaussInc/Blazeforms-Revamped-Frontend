import { Component, EventEmitter, Input, OnInit , Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
// import { SignaturePad } from 'angular2-signaturepad/angular2-signaturepad';

@Component({
  selector: 'app-signature-field',
  templateUrl: './signature-field.component.html',
  styleUrls: ['./signature-field.component.scss']
})
export class SignatureFieldComponent implements OnInit {
  @Input() public model: any
  @ViewChild(SignaturePad) signaturePad: any;
  @Output() signData: EventEmitter<any> = new EventEmitter()

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 300,
    'canvasHeight': 300
  };
  constructor() { }

  ngOnInit(): void {
  }
  
  

  ngAfterViewInit() {
    // this.signaturePad is now available
    setTimeout(() => {
      this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
      this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
      
    });
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
    this.model.value = this.signaturePad.toDataURL();
    this.signData.emit(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

}
