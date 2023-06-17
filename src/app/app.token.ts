import { Provider } from '@angular/core';
import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatDialogConfig,
} from '@angular/material/dialog';

const matDialogDefaultOption: MatDialogConfig<Record<string, any>> = {
    panelClass: 'default-dialog-class',
};

export const MATERIAL_CONFIGURATIONS: Provider[] = [
    {
        provide: MAT_DIALOG_DEFAULT_OPTIONS,
        useValue: matDialogDefaultOption,
    },
];
