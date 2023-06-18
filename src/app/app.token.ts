import { Provider, inject } from '@angular/core';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MAT_DIALOG_SCROLL_STRATEGY,
    MatDialogConfig,
} from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';

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
