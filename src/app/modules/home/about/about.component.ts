import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    inject,
} from '@angular/core';
import {
    PersonalInformation,
    StatsData,
} from 'src/app/shared/data/credential.data';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AboutComponent {
    @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

    public elementRef = inject(ElementRef);

    public statsInformation = StatsData;
    public personalInformation = PersonalInformation;
}
