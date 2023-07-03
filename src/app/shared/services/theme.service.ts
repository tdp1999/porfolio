import { Injectable, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { Theme } from '../types/theme.type';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const THEME_KEY = 'theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private _platformId = inject(PLATFORM_ID);
    private currentTheme = new BehaviorSubject<Theme>('light');
    public currentTheme$ = this.currentTheme.asObservable();

    constructor() {
        this._loadReferredTheme();
    }

    toggleTheme() {
        const theme = this.currentTheme.value === 'light' ? 'dark' : 'light';
        this.currentTheme.next(theme);
        this._saveReferedTheme(theme);
    }

    private _loadReferredTheme() {
        if (!isPlatformBrowser(this._platformId)) return;
        const theme = localStorage.getItem(THEME_KEY) as Theme;
        theme && this.currentTheme.next(theme);
    }

    private _saveReferedTheme(theme: Theme) {
        if (!isPlatformBrowser(this._platformId)) return;
        localStorage.setItem(THEME_KEY, theme);
    }
}
