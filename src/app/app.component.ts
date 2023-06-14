import {
    Component,
    ElementRef,
    Renderer2,
    inject,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    private _renderer2 = inject(Renderer2);
    private _elementRef = inject(ElementRef);
    private _themeService = inject(ThemeService);

    private _unsubscribe$ = new Subject<void>();

    ngOnInit(): void {
        this._themeService.currentTheme$
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((theme) => {
              // remove all classes
              // this._renderer2.removeClass(
              //     this._elementRef.nativeElement,
                     
              // )
                // this._renderer2.addClass(this._elementRef.nativeElement, theme);
            });
    }

    ngOnDestroy(): void {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
