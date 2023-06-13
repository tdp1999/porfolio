import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
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

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('iconChangeAnimation', [
            state(
                'light',
                style({ 
                    transform: 'rotate(0deg)',
                })
            ),
            state(
                'dark',
                style({
                    transform: 'rotate(180deg)',
                })
            ),
            transition('light <=> dark', animate('200ms ease-in')),
        ]),
    ],
})
export class NavbarComponent {
    @ViewChild('nav', { static: true }) navbar!: ElementRef;
    @HostListener('window:scroll', ['$event']) onScroll() {
        requestAnimationFrame(() => {
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

    themeIcon = faSun;
    currentTheme: Theme = 'light';

    private _renderer2 = inject(Renderer2);

    scrolled = false;
    items = MENU_DATA;

    toggleTheme() {
        if (this.currentTheme === 'light') {
            this.currentTheme = 'dark';
            this.themeIcon = faMoon;
            return;
        }

        this.currentTheme = 'light';
        this.themeIcon = faSun;
    }
}
