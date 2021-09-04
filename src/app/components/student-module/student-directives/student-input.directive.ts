import { Directive , ElementRef , HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector:"[studentInput]"
  })

  export class studentInput { 

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    /* When focus is removed and the value of tag is examined and class added accordingly */
    @HostListener('document:click', ['$event'])
    handleClick(event: Event) {
      this.el.nativeElement.addEventListener('blur', function(event){
        if (event.target.value != '') {
          event.target.parentNode.classList.add('has-value');
        } else {
          event.target.parentNode.classList.remove('has-value');
        }
      });
    }
  }