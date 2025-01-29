import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    inject,
} from '@angular/core';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { LocalStorageService } from '../../services/local-storage.service';
import { LS_LANGUAGE_KEY } from '../../tokens/local-storage.token';
import { DOCUMENT, NgFor } from '@angular/common';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatMenuTrigger, FontAwesomeModule, MatMenu, NgFor, MatMenuItem]
})
export class FooterComponent implements OnInit, OnDestroy {
    public menuOpen: boolean = false;
    public currentLanguage?: LangDefinition;
    public currentYear = new Date().getFullYear();

    private _cdr = inject(ChangeDetectorRef);
    private _document = inject(DOCUMENT);
    private _languageKey = inject(LS_LANGUAGE_KEY);
    private _localStorage = inject(LocalStorageService);
    private _translocoService = inject(TranslocoService);

    private _unsubscribeAll = new Subject<void>();

    public availableLanguage: LangDefinition[] =
        this._translocoService.getAvailableLangs() as LangDefinition[];

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
        const lang = this._localStorage.getItem(this._languageKey);
        lang && this._translocoService.setActiveLang(lang);
    }

    selectLanguage(lang: string): void {
        if (lang === this.currentLanguage?.id) return;
        this._translocoService.setActiveLang(lang);
        this._document.documentElement.lang = lang;
        this._localStorage.setItem(this._languageKey, lang);
    }
}
