import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { DatetimeFormat } from '../../constants/datetime.constant';
import { Experience } from '../../interfaces/experience.interface';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DatePipe]
})
export class ExperienceItemComponent {
    // TODO: Skipped for migration because:
    //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
    //  and migrating would break narrowing currently.
    @Input() data?: Experience;
    @Output() actionClick = new EventEmitter();

    public monthYearFormat = DatetimeFormat.monthYear;
}
