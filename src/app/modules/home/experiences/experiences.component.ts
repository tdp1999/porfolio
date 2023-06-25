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
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Milestone } from 'src/app/shared/components/timeline/timeline.interface';
import { DatetimeFormat } from 'src/app/shared/constants/datetime.constant';
import { Experiences } from 'src/app/shared/data/experience.data';
import { Experience } from 'src/app/shared/interfaces/information.interface';

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
}
