import { DatePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    TemplateRef,
    ViewChild,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DescriptionListComponent } from 'src/app/shared/components/description-list/description-list.component';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Milestone } from 'src/app/shared/components/timeline/timeline.interface';
import { DatetimeFormat } from 'src/app/shared/constants/datetime.constant';
import { Experiences } from 'src/app/shared/data/experience.data';
import { Experience } from 'src/app/shared/interfaces/experience.interface';

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe],
})
export class ExperiencesComponent implements OnInit {
    @ViewChild('detail', { static: true }) detail!: TemplateRef<any>;

    private _dialog = inject(MatDialog);
    private _datePipe = inject(DatePipe);

    public monthYearFormat = DatetimeFormat.monthYear;
    public experiences = Experiences.sort(
        (a, b) => a.startDate.getTime() - b.startDate.getTime()
    );
    public milestones: Milestone[] = this.experiences.map((item) => ({
        id: item.id,
        tooltip:
            this._datePipe.transform(item.startDate, this.monthYearFormat) ??
            '',
        data: item,
    }));

    ngOnInit(): void {}

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
                detailTmpl: this.detail,
            },
        });
    }

    openMetadataDialog(item: Experience) {
        const data = {
            Description: item.description,
            Technologies: item.technologies.join(', '),
            'Client Location': item.clientLocation,
            'Client Domain': item.clientDomain,
            Responsibilities: item.responsibilities.join('<br><br>'),
            'Team Size':
                typeof item.teamSize === 'number'
                    ? item.teamSize
                    : `${item.teamSize[0]} - ${item.teamSize[1]}`,
            Achievements: item.achievements.join('<br><br>'),
        };

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
