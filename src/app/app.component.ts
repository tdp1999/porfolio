import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, IsActiveMatchOptions, RouterOutlet } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Subject, debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { CVURL } from './shared/constants/url.constant';
import { MENU_DATA } from './shared/data/menu.data';
import { MenuService } from './shared/services/menu.service';
import { ScrollService } from './shared/services/scroll.service';
import { ThemeService } from './shared/services/theme.service';
import { Language } from './shared/types/language.type';
import { MatIconButton } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDivider } from '@angular/material/divider';
import { NavListComponent } from './shared/components/nav-list/nav-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    // Renderer2 can only be injected into the constructor of a directive or component.
    // So we need provide the service in the component decorator.
    providers: [ScrollService],
    imports: [
        MatDrawerContainer,
        MatDrawer,
        MatIconButton,
        FontAwesomeModule,
        MatDivider,
        NavListComponent,
        MatDrawerContent,
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(MatDrawer, { static: true }) drawer!: MatDrawer;

    public linkActiveOptions: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    public cvUrl = CVURL.en;
    public items = MENU_DATA;

    public route = inject(ActivatedRoute);
    public currentActivatedRoute = this.route;

    private _cdr = inject(ChangeDetectorRef);
    private _document = inject(DOCUMENT);
    private _renderer2 = inject(Renderer2);
    private _menuService = inject(MenuService);
    private _themeService = inject(ThemeService);
    private _titleService = inject(Title);
    private _translocoService = inject(TranslocoService);

    private _unsubscribeAll$ = new Subject<void>();

    ngOnInit(): void {
        this._titleService.setTitle('Phuong Tran | Portfolio');
        this._themeService.currentTheme$
            .pipe(
                map((value) => value === 'dark'),
                takeUntil(this._unsubscribeAll$)
            )
            .subscribe((isDark) => {
                isDark ? this._renderer2.addClass(this._document.body, 'dark') : this._renderer2.removeClass(this._document.body, 'dark');
            });

        this._translocoService.langChanges$
            .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this._unsubscribeAll$))
            .subscribe((lang) => {
                this.cvUrl = CVURL[lang as Language];
                this._cdr.markForCheck();
            });

        this._menuService.menuState$.pipe(takeUntil(this._unsubscribeAll$)).subscribe(() => {
            this.drawer.toggle();
        });
    }

    ngAfterViewInit(): void {
        register();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }
}
