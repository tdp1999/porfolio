import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    Output,
    inject,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[appScrollspy]',
})
export class ScrollspyDirective {
    @Input() spiedTags = [];
    @Output() sectionChange = new EventEmitter<string>();

    private _activeSection!: string;

    private _document = inject(DOCUMENT);
    private _elementRef = inject(ElementRef);
    private _scrollService = inject(ScrollService);
    // private _children = this._elementRef.nativeElement.children;

    @HostListener('scroll', ['$event']) onScroll(event: Event) {
        let currentSection!: string;
        const children = this._elementRef.nativeElement.children;

        // the position of the scrollbar's top
        const scrollTop = this._scrollService.getScrollOffset(
            this._document,
            window
        );

        // the position of the parent element's top
        // const parentOffset = event.target.offsetTop; // the position of the parent element's top
        const parentOffset = this._scrollService.getElementOffsetTop(
            this._elementRef.nativeElement
        );

        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (
                !this.spiedTags.some((spiedTag) => spiedTag === element.tagName)
            )
                return;

            if (
                element.offsetTop - parentOffset - 1 <=
                scrollTop + parentOffset
            ) {
                currentSection = element.id;
            }
        }

        if (currentSection !== this._activeSection) {
            this._activeSection = currentSection;
            this.sectionChange.emit(this._activeSection);
        }
    }
}
