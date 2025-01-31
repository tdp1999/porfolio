import { ChangeDetectionStrategy, Component, input, Input, OnInit, output } from '@angular/core';
import { DatetimeFormat } from '../../constants/datetime.constant';
import { Experience } from '../../interfaces/experience.interface';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DatePipe],
})
export class ExperienceItemComponent {
    readonly data = input.required<Experience>();
    readonly actionClick = output();

    public monthYearFormat = DatetimeFormat.monthYear;
}
