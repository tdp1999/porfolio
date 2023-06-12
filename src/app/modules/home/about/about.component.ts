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
            value: 'John Doe',
        },
        {
            label: 'Age',
            value: '25',
        },
        {
            label: 'Email',
            value: 'test@gmail.com',
        },
        {
            label: 'Phone',
            value: '1234567890',
        },
        {
            label: 'Location',
            value: 'New York, USA',
        },
        {
            label: 'Languages',
            value: 'English, Spanish',
        },
        {
            label: 'Education',
            value: 'Master',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
