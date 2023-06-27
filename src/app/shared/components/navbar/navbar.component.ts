import { DOCUMENT } from '@angular/common';
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
import { Subject, filter, map, takeUntil, tap } from 'rxjs';
import { MENU_DATA } from '../../data/menu.data';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from './../../services/scroll.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from '../../interfaces/menu.interface';

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

    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _scrollService = inject(ScrollService);
    private _unsubscribeAll = new Subject<void>();
    private _http = inject(HttpClient);
    private _sanitizer = inject(DomSanitizer);

    sunIcon = faSun;
    moonIcon = faMoon;

    scrolled = false;
    items = MENU_DATA;

    ngAfterViewInit(): void {
        // Add active class to navbar links when click on nav item
        // this.router.events
        //     .pipe(
        //         filter((event) => event instanceof NavigationEnd),
        //         map(() => this.route.snapshot),
        //         map((event) => {
        //             while (
        //                 event.firstChild &&
        //                 event.firstChild.routeConfig?.path !== ''
        //             ) {
        //                 event = event.firstChild;
        //             }
        //             return event;
        //         }),
        //         takeUntil(this._unsubscribeAll)
        //     )
        //     .subscribe((route) => {
        //         if (!route.routeConfig?.data?.['noAnchor']) {
        //             this.routePrefix = route.routeConfig?.path || '';
        //             this._cdr.markForCheck();
        //         }
        //     });

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
                console.log('Emit: ', sectionId);
                this.items = this.items.map((item) => {
                    item.fragment === sectionId
                        ? (item.active = true)
                        : (item.active = false);
                    return item;
                });
                this._cdr.markForCheck();
            });
    }

    viewCV() {
        const pdfPath = 'assets/files/CVen.pdf';
        // const pdfUrl = this._sanitizer.bypassSecurityTrustResourceUrl(pdfPath);
        // window.open(pdfPath, '_blank');

        this._http
            .get(pdfPath, {
                responseType: 'blob',
            })
            .subscribe((res) => {
                // console.log('file', res);
                const file = new Blob([res], { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL, '_blank');
            });
    }

    getRouterLink(item: Menu) {}

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
