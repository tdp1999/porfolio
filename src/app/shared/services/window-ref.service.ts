import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

function getWindow() {
    return window;
}

@Injectable({
    providedIn: 'root',
})
export class WindowRefService {
    private _platformId = inject(PLATFORM_ID);

    get nativeWindow(): Window | null {
        return isPlatformBrowser(this._platformId) ? getWindow() : null;
    }
}
