import { Provider } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogConfig } from '@angular/material/dialog';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { DEFAULT_LANGUAGE, DEFAULT_THEME } from './shared/tokens/default-value.token';
import { LS_LANGUAGE_KEY, LS_THEME_KEY } from './shared/tokens/local-storage.token';

const matDialogDefaultOption: MatDialogConfig<Record<string, any>> = {
    panelClass: 'default-dialog-class',
};

const matFormFieldDefaultOption: MatFormFieldDefaultOptions = {
    appearance: 'fill',
};

export const MATERIAL_CONFIGURATIONS: Provider[] = [
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: matDialogDefaultOption,
    },
    {
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: matFormFieldDefaultOption,
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
