import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionListData } from './description-list.type';

@Component({
    selector: 'app-description-list',
    templateUrl: './description-list.component.html',
    styleUrls: ['./description-list.component.scss'],
    standalone: false
})
export class DescriptionListComponent {
    public data: DescriptionListData = inject(MAT_DIALOG_DATA);

    keepOrder = (a: any, b: any) => {
        return a.key;
    };
}
