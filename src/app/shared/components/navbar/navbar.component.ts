import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    ViewChild,
    inject,
} from '@angular/core';
import {
    ActivatedRoute,
    IsActiveMatchOptions,
    NavigationEnd,
    Router,
} from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    tap,
} from 'rxjs';
import { MENU_DATA } from '../../data/menu.data';
import { Menu } from '../../interfaces/menu.interface';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from './../../services/scroll.service';
import { TranslocoService } from '@ngneat/transloco';
import { CVURL } from '../../constants/url.constant';
import { Language } from '../../types/language.type';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        // trigger('iconChangeAnimation', [
        //     state('void', style({ transform: 'rotate(0deg)' })),
        //     state(':leave', style({ color: 'blue' })),
        //     transition(':enter', animate('200ms ease-in')),
        // ]),
    ],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
    @ViewChild('nav', { static: true }) navbar!: ElementRef;

    public linkActiveOptions: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    public routePrefix = null;
    public router = inject(Router);
    public route = inject(ActivatedRoute);
    public themeService = inject(ThemeService);
    public currentActivatedRoute = this.route;
    public cvUrl = CVURL.en;

    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _scrollService = inject(ScrollService);
    private _translocoService = inject(TranslocoService);
    private _unsubscribeAll = new Subject<void>();

    sunIcon = faSun;
    moonIcon = faMoon;

    scrolled = false;
    items = MENU_DATA;

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

        // Remove active class on route change
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

        // Padding navbar animation on scroll
        this._scrollService.windowScroll$
            .pipe(
                takeUntil(this._unsubscribeAll),
                tap(() =>
                    this._scrollService.toggleScrolledClass(
                        this._document.body.firstElementChild ?? this._document,
                        window,
                        this.navbar.nativeElement
                    )
                )
            )
            .subscribe();

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
}
