import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, output } from '@angular/core';
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
    // TODO: Skipped for migration because:
    //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
    //  and migrating would break narrowing currently.
    @Input() item?: Project;
    readonly linkClicked = output<void>();
}
