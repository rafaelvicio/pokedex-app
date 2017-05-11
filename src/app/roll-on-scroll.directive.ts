import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[rollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll(){
    let rotation = `translateY(-50%) rotateZ(${window.scrollY / 15}deg)` ;
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'transform',
      rotation
    );
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
  ) { }

}
