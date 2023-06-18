import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LightboxData } from './lightbox.type';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent implements OnInit {
    private _data: LightboxData = inject(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<LightboxComponent>);

    private _matIconRegistry = inject(MatIconRegistry);

    faClose = faClose;

    ngOnInit(): void {
        this._matIconRegistry.registerFontClassAlias('fontawesome', 'fa');

        console.log(this._data);
    }
}
