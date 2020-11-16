import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: 'p [appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private elementRef: ElementRef, private render: Renderer2) { 
    //this.elementRef.nativeElement.style.backgroundColor ="yellow";
   this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

}
