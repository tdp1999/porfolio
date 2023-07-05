import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { Milestone } from './timeline.interface';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
    @Input() milestones: Milestone[] = [];
    @Input() contentTemplate: TemplateRef<any> | undefined;
    @Input() defaultPoint: number = 0;

    public currentMilestone = 0;

    ngOnInit(): void {
        this.currentMilestone = this.defaultPoint;
    }

    selectMilestone(index: number): void {
        this.currentMilestone = index;
    }
}
