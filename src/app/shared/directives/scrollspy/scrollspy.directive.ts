import {
    AfterViewInit,
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
export class ScrollspyDirective implements AfterViewInit, OnDestroy {
    @Input() get spiedTags(): string[] {
        return this._spiedTags;
    }
    set spiedTags(val: string[]) {
        this._spiedTags = val.map((v) => v.toUpperCase());
    }
    private _spiedTags: string[] = [];

    @Output() sectionChange = new EventEmitter<string | null>();

    private _activeSection!: string;
    private _unsubscribeAll$ = new Subject<void>();

    private _document = inject(DOCUMENT);
    private _elementRef = inject(ElementRef);
    private _scrollService = inject(ScrollService);

    ngAfterViewInit() {
        const scrollableElement =
            this._document.querySelector('[id="content"]');

        if (!scrollableElement) return;

        this._scrollService
            .observeElementScroll(scrollableElement)
            .pipe(debounceTime(100), takeUntil(this._unsubscribeAll$))
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

                this._activeSection = currentSection;
                this.sectionChange.emit(this._activeSection ?? null);
                this._scrollService.setActiveSection(
                    this._activeSection ?? null
                );
            });
    }

    ngOnDestroy() {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }
}
