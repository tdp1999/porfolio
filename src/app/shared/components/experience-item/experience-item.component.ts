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

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent {
    @Input() data?: Experience;
    @Output() actionClick = new EventEmitter();

    public monthYearFormat = DatetimeFormat.monthYear;
}
