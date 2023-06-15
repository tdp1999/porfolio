import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/information.interface';
import { Experiences } from '../../data/experience.data';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent implements OnInit {
    experiences = Experiences;

    constructor() {}

    ngOnInit(): void {}
}
