import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, Subject, map, of, startWith, switchMap } from 'rxjs';
import { DescriptionListComponent } from 'src/app/shared/components/description-list/description-list.component';
import { ProjectTags, Projects } from 'src/app/shared/data/project.data';
import { ETag } from 'src/app/shared/enums/tag.enum';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
    public tags$ = of(ProjectTags);
    public filter = new Subject<ETag>();
    public filter$ = this.filter.asObservable();

    public tag$: Observable<ETag> = this.filter$.pipe(
        startWith(ETag.allTag),
        map(
            (tag) =>
                Object.values(ProjectTags).find((item) => item.id === tag)
                    ?.id ?? ETag.allTag
        )
    );

    public filteredProject$: Observable<Project[]> = this.filter$.pipe(
        startWith(ETag.allTag),
        switchMap((tag) => {
            return tag === ETag.allTag
                ? of(Projects)
                : of(
                      Projects.filter((item) =>
                          item.tags?.map((item) => item.id)?.includes(tag)
                      )
                  );
        })
    );

    private _dialog = inject(MatDialog);
    private _translocoService = inject(TranslocoService);

    openMetadataDialog(item: Project) {
        const data = [
            {
                title: 'Technologies',
                value: item.technologies.join(', '),
            },
            {
                title: 'Start - End Date',
                value: `${item.startDate.value.toLocaleDateString()} - ${
                    item.endDate
                        ? item.endDate.value.toLocaleDateString()
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
