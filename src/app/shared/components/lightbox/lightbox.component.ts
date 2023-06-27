import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewContainerRef,
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
    public data: LightboxData = inject(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<LightboxComponent>);

    faClose = faClose;

    ngOnInit(): void {}
}
