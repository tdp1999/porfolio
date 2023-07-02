import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Menu } from '../../interfaces/menu.interface';
import {
    ActivatedRoute,
    IsActiveMatchOptions,
    NavigationEnd,
    Router,
} from '@angular/router';
import { CVURL } from '../../constants/url.constant';
import { TranslocoService } from '@ngneat/transloco';
import {
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    tap,
} from 'rxjs';
import { Language } from '../../types/language.type';
import { ScrollService } from '../../services/scroll.service';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MENU_DATA } from '../../data/menu.data';

@Component({
    selector: 'app-nav-list',
    templateUrl: './nav-list.component.html',
    styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements AfterViewInit, OnDestroy {
    @Input() drawer?: MatDrawer;
    @Input() navbar?: ElementRef;

    public linkActiveOptions: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    public cvUrl = CVURL.en;
    public router = inject(Router);
    public items: Menu[] = MENU_DATA;
    public route = inject(ActivatedRoute);
    public currentActivatedRoute = this.route;
    public breakpointObserver = inject(BreakpointObserver);
    public isNotLg$ = this.breakpointObserver
        .observe('(max-width: 1023.98px)')
        .pipe(map((state) => state.matches));

    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);
    private _translocoService = inject(TranslocoService);

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

        // Padding navbar animation on scroll
        const scrollableElement =
            this._document.querySelector('[id="content"]');
        if (scrollableElement) {
            this._scrollService
                .observeElementScroll(scrollableElement)
                .pipe(
                    takeUntil(this._unsubscribeAll),
                    debounceTime(150),
                    tap(() => {
                        if (!this.navbar || !this.navbar.nativeElement) return;
                        this._scrollService.toggleScrolledClass(
                            scrollableElement,
                            window,
                            this.navbar.nativeElement
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
}
