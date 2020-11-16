import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');*/
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseout') onMouseOut() {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');*/
    this.backgroundColor = 'white'
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
