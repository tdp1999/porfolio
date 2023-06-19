import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Experiences } from 'src/app/shared/data/experience.data';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent implements OnInit {
    public experiences = Experiences.sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
    );
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
