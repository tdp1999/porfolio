import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
    @Input() item?: Project;

    @Output() linkClicked = new EventEmitter<void>();
}
