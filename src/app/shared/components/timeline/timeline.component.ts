import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  input
} from '@angular/core';
import { Milestone } from './timeline.interface';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TimelineComponent implements OnInit {
    readonly milestones = input<Milestone[]>([]);
    readonly contentTemplate = input<TemplateRef<any>>();
    readonly defaultPoint = input<number>(0);

    public currentMilestone = 0;

    ngOnInit(): void {
        this.currentMilestone = this.defaultPoint();
    }

    selectMilestone(index: number): void {
        this.currentMilestone = index;
    }
}
