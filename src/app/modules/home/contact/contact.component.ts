import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
    faLinkedin,
    faSkype,
    faSquareFacebook,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { SocialLink } from 'src/app/shared/interfaces/social-link.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
    socialLink: SocialLink[] = [
        {
            id: 1,
            label: 'Github',
            icon: faSquareGithub,
            url: '',
        },
        {
            id: 2,
            label: 'Linkedin',
            icon: faLinkedin,
            url: '',
        },
        {
            id: 3,
            label: 'Twitter',
            icon: faSquareTwitter,
            url: '',
        },
        {
            id: 4,
            label: 'Facebook',
            icon: faSquareFacebook,
            url: '',
        },
        {
            id: 5,
            label: 'Skype',
            icon: faSkype,
            url: '',
        },
    ];

    constructor() {}

    ngOnInit(): void {}
}
