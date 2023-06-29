import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';
import {
    Subject,
    debounceTime,
    distinct,
    distinctUntilChanged,
    startWith,
    takeUntil,
    tap,
} from 'rxjs';

const LANGUAGE_KEY = 'lang';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit, OnDestroy {
    currentYear = new Date().getFullYear();

    private _router = inject(Router);
    private _cdr = inject(ChangeDetectorRef);
    private _translocoService = inject(TranslocoService);
    private _unsubscribeAll = new Subject<void>();

    public menuOpen: boolean = false;

    public availableLanguage: LangDefinition[] =
        this._translocoService.getAvailableLangs() as LangDefinition[];

    public currentLanguage?: LangDefinition;

    ngOnInit(): void {
        this.loadReferredLanguage();

        this._translocoService.langChanges$
            .pipe(
                debounceTime(300),
                distinctUntilChanged(),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((lang) => {
                this.currentLanguage = this.availableLanguage.find(
                    (langDef) => langDef.id === lang
                );

                this._cdr.markForCheck();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    loadReferredLanguage(): void {
        const lang = localStorage.getItem(LANGUAGE_KEY);
        this._translocoService.setActiveLang(lang ?? 'en');
    }

    selectLanguage(lang: string): void {
        if (lang === this.currentLanguage?.id) return;

        this._translocoService.setActiveLang(lang);
        localStorage.setItem(LANGUAGE_KEY, lang);
    }
}
