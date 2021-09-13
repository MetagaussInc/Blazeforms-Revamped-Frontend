import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exported-view',
  templateUrl: './exported-view.component.html',
  styleUrls: ['./exported-view.component.scss']
})
export class ExportedViewComponent implements OnInit {
@Input() public elements: any;
@Input() public url: any;
@Input() public builderObj: any;
@Input() public styling: any;
file: any;
model = {
  name: ''
}


active = 1;
path: string = '';
  constructor() { }

  ngOnInit(): void {
    // Remove this when code is deploy to stage.
    console.log(this.url)
   this.path = window.location.origin +'/#'+ this.url.split('#')[1].replace('BlazeForms', 'blazeforms')
  }

  placeholderStyling($event?: any) {
    console.log('picker Called', $event)
    if (document.getElementById("bclr")) {
      const a: any = document.getElementById("bclr");
      a.remove();
    }

    const color = this.styling.placeholders.color;
    const size = this.styling.placeholders.size;
    const font = this.styling.placeholders.font;
    const string = `
    <style id="bclr">
    app-exported-form input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:    ${color}!important;
      font-size: ${size}!important;
      font-family: ${font}!important;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    ${color}!important;
    font-size: ${size}!important;
    font-family: ${font}!important;
     opacity:  1;
  }

  }</style>
    
    `
    document.head.insertAdjacentHTML("beforeend", string)
  }

  checkForDependency(model: any, T: any): boolean {
    const dependUpon = model?.[T];

    // if there is no dependency the show element always
    if (!dependUpon) {
      return true;
    }
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
    const data = this.elements[dependencyElementIndex].value;
    if (dependUpon.type === 'boolean') {
        if (dependUpon.isFilledOut) {
          return (typeof data === 'number') ? data > -1 : data.length > 0;
        }
        if (dependUpon.isNotFilledOut) {
          return data === 0 || data.length === 0;
        }
    } else {
      if (dependUpon.is) {
        return data === dependUpon.value;
      }
      if (dependUpon.isNot) {
        return data !== dependUpon.value;
      }
      if (dependUpon.contains) {
        return data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.doesNotContains) {
        return !data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.endWith) {
        return data.endsWith(dependUpon.value);
      }
      if (dependUpon.doesNotEndWith) {
        return data.endsWith(dependUpon.value);
      } 
      if (dependUpon.startWith) {
        return data.startsWith(dependUpon.value);
      }
      if (dependUpon.doesNotStartWith) {
        return !data.startsWith(dependUpon.value);
      }
    }
    return false;
  }

  checkForRDependency(model: any, T: any): boolean {
    const dependUpon = model?.[T];

    // if there is no dependency the show element always
    if (!dependUpon) {
      return false;
    }
    const dependencyElementIndex = this.elements.findIndex((x: any) => x.uiIndexId == dependUpon.elementId );
    const data = this.elements[dependencyElementIndex].value;
    if (dependUpon.type === 'boolean') {
        if (dependUpon.isFilledOut) {
          return (typeof data === 'number') ? data > -1 : data.length > 0;
        }
        if (dependUpon.isNotFilledOut) {
          return data === 0 || data.length === 0;
        }
    } else {
      if (dependUpon.is) {
        return data === dependUpon.value;
      }
      if (dependUpon.isNot) {
        return data !== dependUpon.value;
      }
      if (dependUpon.contains) {
        return data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.doesNotContains) {
        return !data?.toLowerCase().includes(dependUpon.value);
      }
      if (dependUpon.endWith) {
        return data.endsWith(dependUpon.value);
      }
      if (dependUpon.doesNotEndWith) {
        return data.endsWith(dependUpon.value);
      } 
      if (dependUpon.startWith) {
        return data.startsWith(dependUpon.value);
      }
      if (dependUpon.doesNotStartWith) {
        return !data.startsWith(dependUpon.value);
      }
    }
    return true;
  }
  submitParentForm(parentForm: any){
    console.log(parentForm)
  }

  getUrl(url: any)
{
  return `url(${url})`;
}

onFileChanged(event: any) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result;
      // this.styling.pagebackgroundImage = reader.result; 
    };
  }
}

applyImage() {
      this.styling.pagebackgroundImage = this.file; 

}

clearImage() {
  this.styling.pagebackgroundImage = ''; 
}

}


// for ref
//  ::-moz-placeholder { /* Mozilla Firefox 19+ */
// color:    #909;
// opacity:  1;
// }
// :-ms-input-placeholder { /* Internet Explorer 10-11 */
// color:    #909;
// }
// ::-ms-input-placeholder { /* Microsoft Edge */
// color:    #909;
// }

// ::placeholder { /* Most modern browsers support this now. */
// color:    #909;