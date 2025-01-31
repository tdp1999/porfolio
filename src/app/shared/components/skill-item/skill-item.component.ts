import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
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
    readonly skill = input.required<Skill>();
    readonly actionClick = output();
}
