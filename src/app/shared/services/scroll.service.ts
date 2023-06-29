import { DOCUMENT } from '@angular/common';
import { Injectable, Renderer2, inject } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, share } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private _document = inject(DOCUMENT);
    private _renderer2 = inject(Renderer2);

    private _sectionChange = new BehaviorSubject<string | null>(null);

    public windowScroll$ = fromEvent(
        this._document.body.firstElementChild ?? window,
        'scroll'
    ).pipe(share());

    public contentScroll$ = fromEvent(
        this._document.querySelector('mat-drawer-content') ?? window,
        'scroll'
    ).pipe(share());

    public activeSection$ = this._sectionChange.asObservable().pipe(share());

    setActiveSection(section: string | null) {
        this._sectionChange.next(section);
    }

    scrollToFragment(fragmentId: string) {
        this._document.querySelector(`[id="${fragmentId}"]`)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    }

    observeElementScroll(el: Element) {
        return fromEvent(el, 'scroll').pipe(share());
    }

    toggleScrolledClass(
        scrollTarget: Document | Element,
        window: Window,
        element: Element,
        threshold = 64
    ) {
        return requestAnimationFrame(() => {
            const scrollOffset = this.getScrollOffset(scrollTarget, window);
            const hasScrolledClass = element.classList.contains('scrolled');

            if (scrollOffset < threshold && !hasScrolledClass) return;
            if (scrollOffset >= threshold && hasScrolledClass) return;

            scrollOffset < threshold
                ? this._renderer2.removeClass(element, 'scrolled')
                : this._renderer2.addClass(element, 'scrolled');
        });
    }

    getScrollOffset(document: Document | Element, window: Window) {
        if (document instanceof Document)
            return (
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            );

        return document.scrollTop;
    }

    getElementOffsetTop(element: Element): number {
        return element.getBoundingClientRect().top;
    }

    isElementInsideViewport(element: Element): boolean {
        const rect = element.getBoundingClientRect();
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        const windowWidth =
            window.innerWidth || document.documentElement.clientWidth;
        const vertInView =
            rect.top <= windowHeight && rect.top + rect.height >= 0;
        const horInView =
            rect.left <= windowWidth && rect.left + rect.width >= 0;
        return vertInView && horInView;
    }

    getVisibleHeight(element: Element): number {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        return Math.max(visibleHeight, 0);
    }

    elementWithMaxVisibleHeight(elements: Element[]): Element {
        return elements.reduce((max, element) => {
            return this.getVisibleHeight(max) > this.getVisibleHeight(element)
                ? max
                : element;
        }, elements[0]);
    }
}
