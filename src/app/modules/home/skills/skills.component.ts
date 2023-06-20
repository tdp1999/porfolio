import { Overlay } from '@angular/cdk/overlay';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Experiences } from 'src/app/shared/data/experience.data';
import { Skills } from 'src/app/shared/data/skill.data';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements OnInit {
    public skills = Skills;

    private _overlay = inject(Overlay);
    private _dialog = inject(MatDialog);

    ngOnInit(): void {}

    handleActionClick() {
        this._dialog.open(LightboxComponent, {
            scrollStrategy: this._overlay.scrollStrategies.noop(),
            data: {
                test: 'test',
            },
        });
    }
}
