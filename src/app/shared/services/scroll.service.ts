import { Injectable, Renderer2, inject } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private _renderer2 = inject(Renderer2);

    scrollToFragment(fragmentId: string) {
        const element = this._renderer2.selectRootElement('#' + fragmentId);

        element && element.scrollIntoView({ behavior: 'smooth' });
    }

    toggleScrolling(
        document: Document,
        window: Window,
        element: Element,
        threshold = 64
    ) {
        return requestAnimationFrame(() => {
            const scrollOffset = this.getScrollOffset(document, window);
            const hasScrolledClass = element.classList.contains('scrolled');

            if (scrollOffset < threshold && !hasScrolledClass) return;
            if (scrollOffset >= threshold && hasScrolledClass) return;

            scrollOffset < threshold
                ? this._renderer2.removeClass(element, 'scrolled')
                : this._renderer2.addClass(element, 'scrolled');
        });
    }

    getScrollOffset(document: Document, window: Window) {
        return (
            window.scrollY ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0
        );
    }

    getElementOffsetTop(element: Element) {
        return element.getBoundingClientRect().top;
    }
}
