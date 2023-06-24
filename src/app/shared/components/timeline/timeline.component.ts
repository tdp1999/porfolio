import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
    milestones = [1, 2, 3, 4];

    currentMilestone = 0;

    constructor() {}

    ngOnInit(): void {}

    selectMilestone(index: number): void {
        this.currentMilestone = index;
    }
}
