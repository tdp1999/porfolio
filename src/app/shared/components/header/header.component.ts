import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, OnInit, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { MENU_DATA } from '../../data/menu.data';
import { LocalStorageService } from '../../services/local-storage.service';
import { MenuService } from '../../services/menu.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';
import { LS_LANGUAGE_KEY } from '../../tokens/local-storage.token';
import { NavListComponent } from '../nav-list/nav-list.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    host: { ngSkipHydration: 'true' },
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, NavListComponent, FontAwesomeModule, MatMenuModule],
})
export class HeaderComponent implements OnInit {
    readonly headerRef = viewChild.required<ElementRef>('header');

    public items = MENU_DATA;
    public menuService = inject(MenuService);
    public themeService = inject(ThemeService);
    public scrollService = inject(ScrollService);

    private _document = inject(DOCUMENT);
    private _languageKey = inject(LS_LANGUAGE_KEY);
    private _localStorage = inject(LocalStorageService);
    private _translocoService = inject(TranslocoService);

    public currentTheme = toSignal(this.themeService.currentTheme$, { requireSync: true });

    // Language menu
    public languageMenuOpen = signal<boolean>(false);
    public availableLanguage: LangDefinition[] = this._translocoService.getAvailableLangs() as LangDefinition[];
    private readonly _currentLang = toSignal(this._translocoService.langChanges$.pipe(debounceTime(300), distinctUntilChanged()), {
        initialValue: this._translocoService.getActiveLang(),
    });
    public readonly currentLanguage = computed(() => this.availableLanguage.find((langDef) => langDef.id === this._currentLang()));

    ngOnInit() {
        this._loadInitialLanguage();
    }

    toggleMenuButton(): void {
        this.languageMenuOpen.update((value) => !value);
    }

    selectLanguage(lang: string): void {
        if (lang === this.currentLanguage()?.id) return;
        this._translocoService.setActiveLang(lang);
        this._document.documentElement.lang = lang;
        this._localStorage.setItem(this._languageKey, lang);
    }

    private _loadInitialLanguage(): void {
        const lang = this._localStorage.getItem(this._languageKey);
        lang && this._translocoService.setActiveLang(lang);
    }
}
