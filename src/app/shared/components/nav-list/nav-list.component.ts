import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
  input
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {
    ActivatedRoute,
    IsActiveMatchOptions,
    NavigationEnd,
    Router,
} from '@angular/router';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';
import {
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    tap,
} from 'rxjs';
import { CVURL } from '../../constants/url.constant';
import { MENU_DATA } from '../../data/menu.data';
import { Menu } from '../../interfaces/menu.interface';
import { LocalStorageService } from '../../services/local-storage.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';
import { WindowRefService } from '../../services/window-ref.service';
import { LS_LANGUAGE_KEY } from '../../tokens/local-storage.token';
import { Language } from '../../types/language.type';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss'],
    standalone: false
})
export class NavListComponent implements OnInit, AfterViewInit, OnDestroy {
    readonly drawer = input<MatDrawer>();
    readonly containerRef = input<ElementRef>();

    public cvUrl = CVURL.en;
    public items: Menu[] = MENU_DATA;
    public linkActiveOptions: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    public route = inject(ActivatedRoute);
    public router = inject(Router);
    public themeService = inject(ThemeService);
    public breakpointObserver = inject(BreakpointObserver);

    public availableTheme = ['light', 'dark'];
    public currentActivatedRoute = this.route;
    public themeMenuOpen: boolean = false;
    public languageMenuOpen: boolean = false;
    public currentLanguage?: LangDefinition;
    public isNotLg$ = this.breakpointObserver
        .observe('(max-width: 1023.98px)')
        .pipe(map((state) => state.matches));

    private _cdr = inject(ChangeDetectorRef);
    private _window = inject(WindowRefService);
    private _document = inject(DOCUMENT);
    private _languageKey = inject(LS_LANGUAGE_KEY);
    private _localStorage = inject(LocalStorageService);
    private _scrollService = inject(ScrollService);
    private _translocoService = inject(TranslocoService);

    private _unsubscribeAll = new Subject<void>();

    public availableLanguage: LangDefinition[] =
        this._translocoService.getAvailableLangs() as LangDefinition[];

    ngOnInit(): void {
        this.loadReferredLanguage();

        this._translocoService.langChanges$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((lang) => {
                this.currentLanguage = this.availableLanguage.find(
                    (langDef) => langDef.id === lang
                );

                this._cdr.markForCheck();
            });
    }

    ngAfterViewInit(): void {
        this._translocoService.langChanges$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((lang) => {
                this.cvUrl = CVURL[lang as Language];
                this._cdr.markForCheck();
            });

        // Remove active class on route changes
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                ),
                debounceTime(100),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {
                if (event.urlAfterRedirects.includes('not-found')) {
                    this.items = this.items.map((item) => {
                        item.active = false;
                        return item;
                    });
                    this._cdr.markForCheck();
                }
            });

        // Padding containerRef animation on scroll
        const scrollableElement =
            this._document.querySelector('[id="content"]');
        const window = this._window.nativeWindow;
        if (scrollableElement && window) {
            this._scrollService
                .observeElementScroll(scrollableElement)
                .pipe(
                    takeUntil(this._unsubscribeAll),
                    // debounceTime(150),
                    tap(() => {
                        const containerRef = this.containerRef();
                        if (!containerRef || !containerRef.nativeElement)
                            return;
                        this._scrollService.toggleScrolledClass(
                            scrollableElement,
                            window,
                            containerRef.nativeElement
                        );
                    })
                )
                .subscribe();
        }

        // Add active class while scrolling
        this._scrollService.activeSection$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((sectionId) => {
                this.items = this.items.map((item) => {
                    item.fragment === sectionId
                        ? (item.active = true)
                        : (item.active = false);
                    return item;
                });
                this._cdr.markForCheck();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadReferredLanguage(): void {
        const lang = this._localStorage.getItem(this._languageKey);
        lang && this._translocoService.setActiveLang(lang);
    }

    selectLanguage(lang: string): void {
        if (lang === this.currentLanguage?.id) return;
        this._translocoService.setActiveLang(lang);
        this._localStorage.setItem(this._languageKey, lang);
    }

    selectTheme(theme: string, currentTheme: string): void {
        this.drawer()?.close();

        if (currentTheme === theme) return;
        this.themeService.toggleTheme();
    }
}
