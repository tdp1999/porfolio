import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent implements OnInit {
    private _dialog = inject(MatDialog);

    ngOnInit(): void {}

    handleActionClick() {
        this._dialog.open(LightboxComponent, {
            data: {
                test: 'hello world',
            },
        });
    }
}
