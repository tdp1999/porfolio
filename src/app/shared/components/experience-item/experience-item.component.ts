import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Experience } from '../../interfaces/information.interface';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceItemComponent implements OnInit {
    experiences: Experience[] = [
        {
            company: 'Vitop Mekong',
            position: 'Frontend Developer (Intern & Part-time)',
            startDate: new Date(2021, 4, 1),
            endDate: new Date(2021, 11, 1),
            description:
                'Worked as a Frontend Developer for the project of a big insurance company, Vietnam branch. My team is responsible for developing and maintaining the web application using Angular',
            technologies: ['Angular', 'Bootstrap 4', 'TypeScript'],
            location: 'Can Tho, Vietnam',
            clientLocation: 'Vietnam',
            responsibilities: [
                'Maintained and refactored the codebase',
                'Review the design and develop a new feature based on that design',
                'Participated in the weekly meeting with the account manager to discuss the issues and propose solutions',
            ],
            teamSize: 5,
            achievements: [
                'Successfully get acquainted with the job of a web developer.',
                "Successfully help the team to deliver 3 projects on time that meet the customer's requirements.",
                'Successfully accustomed to the Angular framework and some other web technologies such as Bootstrap 4, SwiperJS, etc.',
            ],
        },
        {
            company: 'App Core',
            position: 'Software Engineer',
            startDate: new Date(2022, 0, 1),
            endDate: new Date(2022, 4, 1),
            description:
                'Worked as a main Frontend Developer for multiple projects of several client located in Australia. My team is responsible for developing and maintaining the web application using Angular in the frontend and Python in the backend',
            technologies: ['Angular', 'Bootstrap 4', 'TypeScript'],
            location: 'Can Tho, Vietnam',
            clientLocation: 'Tokyo, Japan',
            responsibilities: [
                'Developed new features and fixed bugs of the web application',
                'Maintained and refactored the codebase',
                'Cooperated with the team to deliver tasks on time',
                'Participated in the daily meeting with the customer to report the progress',
                'Participated in the weekly meeting with the customer to discuss the issues and propose solutions',
            ],
            teamSize: 10,
            achievements: [
                'Successfully developed and delivered 3 new features to the customer',
                'Successfully fixed more than 20 bugs of the web application',
            ],
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
