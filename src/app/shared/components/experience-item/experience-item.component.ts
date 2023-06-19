import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { Experience } from '../../interfaces/information.interface';
import { Experiences } from '../../data/experience.data';
import { DatetimeFormat } from '../../constants/datetime.constant';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent implements OnInit {
    @Input() data?: Experience;

    @Output() actionClick = new EventEmitter();

    monthYearFormat = DatetimeFormat.monthYear;

    constructor() {}

    ngOnInit(): void {}
}
