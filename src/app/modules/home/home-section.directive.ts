import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[appHomeSection]',
    standalone: false
})
export class HomeSectionDirective {
    public elementRef = inject(ElementRef);
}
