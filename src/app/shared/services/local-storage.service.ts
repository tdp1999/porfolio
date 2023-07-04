import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { CheckBrowser } from '../decorators/platform.decorator';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    private _platformId = inject(PLATFORM_ID);

    getItem(key: string): any {
        if (!isPlatformBrowser(this._platformId)) return;
        const value = localStorage.getItem(key);
        return value ?? null;
    }

    setItem(key: string, value: any): void {
        if (!value) return;
        if (!isPlatformBrowser(this._platformId)) return;
        localStorage.setItem(key, value);
    }

    removeItem(key: string): void {
        if (!isPlatformBrowser(this._platformId)) return;
        localStorage.removeItem(key);
    }

    clear(): void {
        if (!isPlatformBrowser(this._platformId)) return;
        localStorage.clear();
    }

    get length(): number {
        if (!isPlatformBrowser(this._platformId)) return 0;
        return localStorage.length;
    }
}
