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
}
