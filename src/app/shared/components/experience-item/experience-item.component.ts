import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { Experience } from '../../interfaces/information.interface';
import { Experiences } from '../../data/experience.data';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent implements OnInit {
    @Output() actionClick = new EventEmitter();

    experiences = Experiences;

    constructor() {}

    ngOnInit(): void {}
}
