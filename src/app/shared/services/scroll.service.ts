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

    toggleScrolling() {
        // return requestAnimationFrame(() => {
        //     const threshold = 64;
        //     const scrollOffset =
        //         window.scrollY ||
        //         document.documentElement.scrollTop ||
        //         document.body.scrollTop ||
        //         0;
        //     const isTop = scrollOffset < threshold;

        //     if (isTop && this.scrolled) {
        //         this.scrolled = false;
        //         this._renderer2.removeClass(
        //             this.navbar.nativeElement,
        //             'scrolled'
        //         );
        //         return;
        //     }

        //     if (!isTop && !this.scrolled) {
        //         this.scrolled = true;
        //         this._renderer2.addClass(this.navbar.nativeElement, 'scrolled');
        //         return;
        //     }
        // });
    }
}
