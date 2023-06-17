import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent implements OnInit {
    private _data = inject(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<LightboxComponent>);

    ngOnInit(): void {
        console.log(this._data);
    }
}
