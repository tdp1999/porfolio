import {
    Component,
    ElementRef,
    Renderer2,
    inject,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { Subject, map, takeUntil } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    private _renderer2 = inject(Renderer2);
    private _elementRef = inject(ElementRef);
    private _themeService = inject(ThemeService);
    private _document = inject(DOCUMENT);

    private _unsubscribe$ = new Subject<void>();

    ngOnInit(): void {
        this._themeService.currentTheme$
            .pipe(
                map((value) => value === 'dark'),
                takeUntil(this._unsubscribe$)
            )
            .subscribe((isDark) => {
                isDark
                    ? this._renderer2.addClass(this._document.body, 'dark')
                    : this._renderer2.removeClass(this._document.body, 'dark');
            });
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
