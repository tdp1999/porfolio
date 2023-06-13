import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Information } from 'src/app/shared/interfaces/information.interface';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
    personalInformation: Information[] = [
        {
            label: 'Name',
            value: 'Phuong Tran',
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
        {
            label: 'Phone',
            value: '+84 783 995 295',
            templateRef: 'phone',
            metadata: {
                value: '+84783995295',
            }
            
        },
        {
            label: 'Location',
            value: 'Can Tho, HCM City, VN',
            templateRef: 'text',
        },
        {
            label: 'Languages',
            value: 'Vietnamese, English',
            templateRef: 'text',
        },
        {
            label: 'Education',
            value: 'Bachelor of Computer Science, Can Tho University',
            templateRef: 'text',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
