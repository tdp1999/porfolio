import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SkillItemComponent {
    // TODO: Skipped for migration because:
    //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
    //  and migrating would break narrowing currently.
    @Input() skill!: Skill;
    @Output() actionClick = new EventEmitter();
}
