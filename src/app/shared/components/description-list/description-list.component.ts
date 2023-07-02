import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DescriptionListData } from './description-list.type';

@Component({
    selector: 'app-description-list',
    templateUrl: './description-list.component.html',
    styleUrls: ['./description-list.component.scss'],
})
export class DescriptionListComponent {
    public data: DescriptionListData = inject(MAT_DIALOG_DATA);
}
