import { ChangeDetectionStrategy, Component, Input, output } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FontAwesomeModule],
})
export class SkillItemComponent {
    // TODO: Skipped for migration because:
    //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
    //  and migrating would break narrowing currently.
    @Input() skill!: Skill;
    readonly actionClick = output();
}
