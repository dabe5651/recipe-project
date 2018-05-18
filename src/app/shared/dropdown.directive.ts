import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openMenu = false; 
  
  @HostListener('click') onMenuUp() {
    this.openMenu = !this.openMenu;
  }
  constructor() { }

}
