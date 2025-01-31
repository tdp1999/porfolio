import { DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { DescriptionListComponent } from 'src/app/shared/components/description-list/description-list.component';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Milestone } from 'src/app/shared/components/timeline/timeline.interface';
import { DatetimeFormat } from 'src/app/shared/constants/datetime.constant';
import { Experiences } from 'src/app/shared/data/experience.data';
import { Experience } from 'src/app/shared/interfaces/experience.interface';
import { TimelineComponent } from '../../../shared/components/timeline/timeline.component';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe],
    imports: [TimelineComponent, UpperCasePipe, DatePipe, TranslocoModule],
})
export class ExperiencesComponent {
    detail = viewChild.required<TemplateRef<any>>('detail');

    private _dialog = inject(MatDialog);
    private _datePipe = inject(DatePipe);
    private _translocoService = inject(TranslocoService);

    public monthYearFormat = DatetimeFormat.monthYear;
    public experiences = Experiences.sort((a, b) => a.startDate.value.getTime() - b.startDate.value.getTime());
    public milestones: Milestone[] = this.experiences.map((item) => ({
        id: item.id,
        tooltip: this._datePipe.transform(item.startDate.value, this.monthYearFormat) ?? '',
        data: item,
    }));

    handleActionClick(item: Experience) {
        this._dialog.open(LightboxComponent, {
            // scrollStrategy: this._overlay.scrollStrategies.noop(),
            data: {
                data: item,
                image: {
                    url: 'assets/images/carousel/carousel-1.jpg',
                    description: 'Art',
                    tags: ['art', 'painting', 'drawing'],
                    alt: 'Art',
                },
                detailTmpl: this.detail(),
            },
        });
    }

    openMetadataDialog(item: Experience) {
        const data = [
            {
                title: 'Description',
                value: item.description,
            },
            {
                title: 'Technologies',
                value: item.technologies.join(', '),
            },
            {
                title: 'Client Location',
                value: item.clientLocation,
            },
            {
                title: 'Client Domain',
                value: item.clientDomain,
            },
            {
                title: 'Responsibilities',
                value: item.responsibilities.map((item) => this._translocoService.translate(item)).join('<br><br>'),
            },
            {
                title: 'Team Size',
                value: typeof item.teamSize === 'number' ? item.teamSize : `${item.teamSize[0]} - ${item.teamSize[1]}`,
            },
            {
                title: 'Achievements',
                value: item.achievements.map((item) => this._translocoService.translate(item)).join('<br><br>'),
            },
        ];

        this._dialog.open(DescriptionListComponent, {
            data: {
                title: item.company,
                subtitle: item.position,
                data,
            },
            panelClass: 'description-list-dialog',
        });
    }
}
