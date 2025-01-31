import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';
import { DescriptionListData } from './description-list.type';
import { MatIconButton } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, KeyValuePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-description-list',
    templateUrl: './description-list.component.html',
    styleUrls: ['./description-list.component.scss'],
    imports: [MatIconButton, MatDialogClose, FontAwesomeModule, MatTooltip, NgClass, KeyValuePipe, TranslocoModule],
})
export class DescriptionListComponent {
    public data: DescriptionListData = inject(MAT_DIALOG_DATA);

    keepOrder = (a: any, b: any) => {
        return a.key;
    };
}
