import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
    inject,
} from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { DOCUMENT } from '@angular/common';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Directive({
    selector: '[appScrollspy]',
})
export class ScrollspyDirective implements OnInit, OnDestroy {
    @Input() get spiedTags(): string[] {
        return this._spiedTags;
    }
    set spiedTags(val: string[]) {
        this._spiedTags = val.map((v) => v.toUpperCase());
    }
    private _spiedTags: string[] = [];

    @Output() sectionChange = new EventEmitter<string>();

    private _activeSection!: string;
    private _unsubscribeAll$ = new Subject<void>();

    private _document = inject(DOCUMENT);
    private _elementRef = inject(ElementRef);
    private _scrollService = inject(ScrollService);

    ngOnInit() {
        this._scrollService.windowScroll$
            .pipe(debounceTime(200), takeUntil(this._unsubscribeAll$))
            .subscribe((event: Event) => {
                // Get all sections that spied by Scrollspy directive
                const children = Array.from(
                    this._elementRef.nativeElement.children as HTMLCollection
                ).filter((child) => {
                    return this.spiedTags.some(
                        (spiedTag) => spiedTag === child.tagName
                    );
                }) as HTMLElement[];

                // Find all section that are inside the viewport
                const sectionsInView = [];
                for (let i = 0; i < children.length; i++) {
                    const element = children[i];
                    const isInsideViewport =
                        this._scrollService.isElementInsideViewport(element);
                    isInsideViewport && sectionsInView.push(element);
                }

                // Find the section that has the biggest height visible in the viewport
                const currentSection =
                    this._scrollService.elementWithMaxVisibleHeight(
                        sectionsInView
                    )?.id;

                if (!currentSection) return;
                if (currentSection !== this._activeSection) {
                    this._activeSection = currentSection;
                    this.sectionChange.emit(this._activeSection);
                    this._scrollService.setActiveSection(this._activeSection);
                }
            });
    }

    ngOnDestroy() {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }
}
