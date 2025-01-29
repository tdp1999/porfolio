import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LightboxData } from './lightbox.type';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class LightboxComponent {
    public data: LightboxData = inject(MAT_DIALOG_DATA);
}
