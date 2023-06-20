import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillItemComponent {
    @Input() skill!: Skill;
    @Output() actionClick = new EventEmitter();
}
