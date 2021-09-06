import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appBlockPaste]'
})
export class BlockPasteDirective {

  constructor(private el: ElementRef, private control : NgControl) {

  }

  @HostListener('paste',['$event']) onEvent($event: { preventDefault: () => void; clipboardData: { getData: (arg0: string) => any; }; }) {
    $event.preventDefault();
  }

}
