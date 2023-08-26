import { Provider, inject } from '@angular/core';
import {
    MAT_LEGACY_DIALOG_DEFAULT_OPTIONS as MAT_DIALOG_DEFAULT_OPTIONS,
    MAT_LEGACY_DIALOG_SCROLL_STRATEGY as MAT_DIALOG_SCROLL_STRATEGY,
    MatLegacyDialogConfig as MatDialogConfig,
} from '@angular/material/legacy-dialog';
import { Overlay } from '@angular/cdk/overlay';
import {
    LS_LANGUAGE_KEY,
    LS_THEME_KEY,
} from './shared/tokens/local-storage.token';
import {
    DEFAULT_LANGUAGE,
    DEFAULT_THEME,
} from './shared/tokens/default-value.token';

const matDialogDefaultOption: MatDialogConfig<Record<string, any>> = {
    panelClass: 'default-dialog-class',
};

export const MATERIAL_CONFIGURATIONS: Provider[] = [
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: matDialogDefaultOption,
    },
    // {
    //     provide: MAT_DIALOG_SCROLL_STRATEGY,
    //     useFactory: () => inject(Overlay).scrollStrategies.close(),
    // },

];

export const DEFAULT_TOKENS: Provider[] = [
    {
        provide: LS_THEME_KEY,
        useValue: 'theme',
    },
    {
        provide: DEFAULT_THEME,
        useValue: 'dark',
    },
    {
        provide: LS_LANGUAGE_KEY,
        useValue: 'lang',
    },
    {
        provide: DEFAULT_LANGUAGE,
        useValue: 'en',
    },
];
