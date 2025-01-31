import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, iif, of, share } from 'rxjs';
import { WindowRefService } from './window-ref.service';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private _window = inject(WindowRefService);
    private _document = inject(DOCUMENT);
    private _renderer2 = inject(Renderer2);
    private _platformId = inject(PLATFORM_ID);
    private _sectionChange = new BehaviorSubject<string | null>(null);

    public contentScroll$ = fromEvent(this._document.querySelector('mat-drawer-content') ?? [], 'scroll').pipe(share());

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

    scrollToTop() {
        const scrollTarget = this._document.querySelector('mat-drawer-content');
        if (!scrollTarget) return;
        scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });
    }

    observeElementScroll(el: Element) {
        return fromEvent(el, 'scroll').pipe(share());
    }

    toggleScrolledClass(scrollTarget: Document | Element, window: Window, element: Element, threshold = 64) {
        if (!isPlatformBrowser(this._platformId)) return;
        return requestAnimationFrame(() => {
            const scrollOffset = this.getScrollOffset(scrollTarget, window);
            const hasScrolledClass = element.classList.contains('scrolled');

            if (scrollOffset < threshold && !hasScrolledClass) return;
            if (scrollOffset >= threshold && hasScrolledClass) return;

            scrollOffset < threshold ? this._renderer2.removeClass(element, 'scrolled') : this._renderer2.addClass(element, 'scrolled');
        });
    }

    getScrollOffset(document: Document | Element, window: Window) {
        if (document instanceof Document) return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

        return document.scrollTop;
    }

    getElementOffsetTop(element: Element): number {
        return element.getBoundingClientRect().top;
    }

    isElementInsideViewport(element: Element): boolean {
        const rect = element.getBoundingClientRect();
        const window = this._window.nativeWindow;
        if (!window) return false;

        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
        const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
        return vertInView && horInView;
    }

    getVisibleHeight(element: Element): number {
        const window = this._window.nativeWindow;
        if (!window) return 0;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        return Math.max(visibleHeight, 0);
    }

    elementWithMaxVisibleHeight(elements: Element[]): Element {
        return elements.reduce((max, element) => {
            return this.getVisibleHeight(max) > this.getVisibleHeight(element) ? max : element;
        }, elements[0]);
    }
}
