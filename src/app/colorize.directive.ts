import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective implements AfterViewInit{

  @Input() appColorize = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = this.appColorize;

  }

}
