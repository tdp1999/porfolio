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

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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

    private _renderer2 = inject(Renderer2);

    scrolled = false;
    items = MENU_DATA;

    constructor() {}
}
