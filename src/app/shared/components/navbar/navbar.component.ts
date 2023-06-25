import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    Renderer2,
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
    filter,
    fromEvent,
    map,
    takeUntil,
    tap,
    throttleTime,
} from 'rxjs';
import { MENU_DATA } from '../../data/menu.data';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from './../../services/scroll.service';
import { ACTIVE_SECTION } from '../../tokens/active-section.token';

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

    public routePrefix = '';
    public router = inject(Router);
    public route = inject(ActivatedRoute);
    public themeService = inject(ThemeService);

    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _scrollService = inject(ScrollService);
    private _unsubscribeAll = new Subject<void>();

    sunIcon = faSun;
    moonIcon = faMoon;

    scrolled = false;
    items = MENU_DATA;

    ngAfterViewInit(): void {
        // Add active class to navbar links
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.route.snapshot),
                map((event) => {
                    while (
                        event.firstChild &&
                        event.firstChild.routeConfig?.path !== ''
                    ) {
                        event = event.firstChild;
                    }
                    return event;
                }),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((route) => {
                if (!route.routeConfig?.data?.['noAnchor']) {
                    this.routePrefix = route.routeConfig?.path || '';
                    this._cdr.markForCheck();
                }
            });

        // Padding navbar animation on scroll
        this._scrollService.windowScroll$
            .pipe(
                takeUntil(this._unsubscribeAll),
                tap(() =>
                    this._scrollService.toggleScrolledClass(
                        this._document,
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
                const activeLink = this.items.find(
                    (item) => item.fragment === sectionId
                );
                if (activeLink) {
                    this.items.forEach((item) => (item.active = false));
                    activeLink.active = true;
                    this._cdr.markForCheck();
                }
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
