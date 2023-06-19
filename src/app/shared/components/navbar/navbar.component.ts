import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    OnDestroy,
    Renderer2,
    ViewChild,
    inject,
} from '@angular/core';
import { MENU_DATA } from '../../data/menu.data';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../types/theme.type';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { Subject, fromEvent, takeUntil, tap, throttleTime } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('iconChangeAnimation', [
            state('void', style({ transform: 'rotate(0deg)' })),
            // state(':leave', style({ color: 'blue' })),
            transition(':enter', animate('200ms ease-in')),
        ]),
    ],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
    @ViewChild('nav', { static: true }) navbar!: ElementRef;

    public router = inject(Router);
    public route = inject(ActivatedRoute);
    public themeService = inject(ThemeService);

    private _renderer2 = inject(Renderer2);
    private _unsubscribeAll = new Subject<void>();

    sunIcon = faSun;
    moonIcon = faMoon;

    scrolled = false;
    items = MENU_DATA;

    ngAfterViewInit(): void {
        fromEvent(window, 'scroll')
            .pipe(
                throttleTime(500),
                takeUntil(this._unsubscribeAll),
                tap(() => this.toggleScroll())
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleScroll() {
        return requestAnimationFrame(() => {
            const threshold = 64;
            const scrollOffset =
                window.scrollY ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            const isTop = scrollOffset < threshold;

            if (isTop && this.scrolled) {
                this.scrolled = false;
                this._renderer2.removeClass(
                    this.navbar.nativeElement,
                    'scrolled'
                );
                return;
            }

            if (!isTop && !this.scrolled) {
                this.scrolled = true;
                this._renderer2.addClass(this.navbar.nativeElement, 'scrolled');
                return;
            }
        });
    }
}
