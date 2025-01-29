import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LightboxData } from './lightbox.type';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { MatIconButton } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatIconButton, MatDialogClose, FontAwesomeModule, NgTemplateOutlet]
})
export class LightboxComponent {
    public data: LightboxData = inject(MAT_DIALOG_DATA);
}
