import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { DescriptionListComponent } from 'src/app/shared/components/description-list/description-list.component';
import { Projects } from 'src/app/shared/data/project.data';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
    public projects = Projects;

    private _dialog = inject(MatDialog);
    private _translocoService = inject(TranslocoService);

    ngOnInit(): void {}

    openMetadataDialog(item: Project) {
        const data = [
            {
                title: 'Technologies',
                value: item.technologies.join(', '),
            },
            {
                title: 'Start - End Date',
                value: `${item.startDate.toLocaleDateString()} - ${
                    item.endDate
                        ? item.endDate.toLocaleDateString()
                        : this._translocoService.translate('Present')
                }`,
            },
            {
                title: 'Project Category',
                value: item.projectCategory,
            },
            {
                title: 'Project Type',
                value: item.projectType,
            },
            {
                title: 'Project Size',
                value: item.projectSize,
                // tooltip: 'projectSizeTooltip',
            },
            {
                title: 'Main Functionality',
                value: item.mainFunctionality
                    .map((item) => this._translocoService.translate(item))
                    .join('<br><br>'),
            },
            {
                title: 'Client Location',
                value: item.clientLocation,
            },
            {
                title: 'Client Domain',
                value: item.clientDomain,
            },
        ];

        let links = undefined;
        if (
            item.demoLink &&
            item.demoLink.url &&
            item.sourceCodeLink &&
            item.sourceCodeLink.url
        ) {
            links = {
                Demo: item.demoLink,
                'Source Code': item.sourceCodeLink,
            };
        }

        this._dialog.open(DescriptionListComponent, {
            data: {
                title: item.name,
                subtitle: item.description,
                data,
                links,
            },
            panelClass: 'description-list-dialog',
        });
    }
}
