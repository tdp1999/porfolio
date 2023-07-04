import { Injectable, PLATFORM_ID, Renderer2, inject } from '@angular/core';
import { Theme } from '../types/theme.type';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { LocalStorageService } from './local-storage.service';
import { LS_THEME_KEY } from '../tokens/local-storage.token';
@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private _themeKey = inject(LS_THEME_KEY);
    private _platformId = inject(PLATFORM_ID);
    private _localStorage = inject(LocalStorageService);
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
        const theme = this._localStorage.getItem(this._themeKey) as Theme;
        theme && this.currentTheme.next(theme);
    }

    private _saveReferedTheme(theme: Theme) {
        this._localStorage.setItem(this._themeKey, theme);
    }
}
