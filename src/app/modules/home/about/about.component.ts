import { ChangeDetectionStrategy, Component, ElementRef, inject, output } from '@angular/core';
import { PersonalInformation, StatsData } from 'src/app/shared/data/credential.data';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StatsItemComponent } from '../../../shared/components/stats-item/stats-item.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLink, StatsItemComponent, TranslocoModule],
})
export class AboutComponent {
    readonly scrollTo = output<string>();

    public elementRef = inject(ElementRef);

    public statsInformation = StatsData;
    public personalInformation = PersonalInformation;
}
