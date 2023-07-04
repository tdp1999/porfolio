import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    inject,
} from '@angular/core';
import {
    Information,
    StatsInformation,
} from 'src/app/shared/interfaces/general-entitly';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
    @Output() scrollTo: EventEmitter<string> = new EventEmitter<string>();

    public elementRef = inject(ElementRef);
    personalInformation: Information[] = [
        {
            label: 'Name',
            value: 'Tran Duc Phuong',
            templateRef: 'text',
        },
        {
            label: 'Age',
            value: '24',
            templateRef: 'text',
        },
        {
            label: 'Email',
            value: 'tdp99.business@gmail.com',
            templateRef: 'email',
        },
        // {
        //     label: 'Phone',
        //     value: '+84 783 995 295',
        //     templateRef: 'phone',
        //     metadata: {
        //         value: '+84783995295',
        //     },
        // },
        {
            label: 'Locations',
            value: 'Can Tho, HCM City (VN)',
            templateRef: 'text',
        },
        {
            label: 'Languages',
            value: 'Vietnamese, English',
            templateRef: 'text',
        },
        {
            label: 'Education',
            value: 'Bachelor of Engineer (Valedictorian) - Can Tho University',
            templateRef: 'text',
        },
    ];

    statsInformation: StatsInformation[] = [
        {
            label: 'Years of Experience',
            value: 2,
        },
        {
            label: 'Projects Completed',
            value: 5,
        },
    ];
}
