import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { LightboxData } from './lightbox.type';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent {
    public data: LightboxData = inject(MAT_DIALOG_DATA);
}
