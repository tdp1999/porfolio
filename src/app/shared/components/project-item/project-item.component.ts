import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, input, output } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

import { TagComponent } from '../tag/tag.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TagComponent, TranslocoModule],
})
export class ProjectItemComponent {
    readonly item = input.required<Project>();
    readonly linkClicked = output<void>();
}
