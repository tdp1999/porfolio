import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, iif, of, share } from 'rxjs';
import { WindowRefService } from './window-ref.service';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private _document = inject(DOCUMENT);
    private _platformId = inject(PLATFORM_ID);
    private _renderer2 = inject(Renderer2);
    // private _window = inject(WindowRefService);
    private _sectionChange = new BehaviorSubject<string | null>(null);

    // public windowScroll$ = iif(
    //     () => isPlatformBrowser(this._platformId),
    //     fromEvent(
    //         this._document.body.firstElementChild ?? this._window.nativeWindow,
    //         'scroll'
    //     ).pipe(share()),
    //     of(null)
    // );

    // public contentScroll$ = iif(
    //     () => isPlatformBrowser(this._platformId),
    //     fromEvent(
    //         this._document.querySelector('mat-drawer-content') ??
    //             this._window.nativeWindow,
    //         'scroll'
    //     ).pipe(share()),
    //     of(null)
    // );

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
        if (!isPlatformBrowser(this._platformId)) return;
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

    // isElementInsideViewport(element: Element): boolean {
    //     const rect = element.getBoundingClientRect();
    //     const windowHeight =
    //         this._window.nativeWindow.innerHeight ||
    //         document.documentElement.clientHeight;
    //     const windowWidth =
    //         this._window.nativeWindow.innerWidth ||
    //         document.documentElement.clientWidth;
    //     const vertInView =
    //         rect.top <= windowHeight && rect.top + rect.height >= 0;
    //     const horInView =
    //         rect.left <= windowWidth && rect.left + rect.width >= 0;
    //     return vertInView && horInView;
    // }

    // getVisibleHeight(element: Element): number {
    //     const rect = element.getBoundingClientRect();
    //     const windowHeight = this._window.nativeWindow.innerHeight;
    //     const visibleHeight =
    //         Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    //     return Math.max(visibleHeight, 0);
    // }

    // elementWithMaxVisibleHeight(elements: Element[]): Element {
    //     return elements.reduce((max, element) => {
    //         return this.getVisibleHeight(max) > this.getVisibleHeight(element)
    //             ? max
    //             : element;
    //     }, elements[0]);
    // }
}
