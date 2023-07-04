import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
    selector: '[appHomeSection]',
})
export class HomeSectionDirective {
    public elementRef = inject(ElementRef);
}
