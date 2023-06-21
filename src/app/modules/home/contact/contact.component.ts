import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
    faLinkedin,
    faSkype,
    faSquareFacebook,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { SocialLinkData } from 'src/app/shared/data/social-link.data';
import { SocialLink } from 'src/app/shared/interfaces/social-link.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
    socialLink: SocialLink[] = SocialLinkData;

    constructor() {}

    ngOnInit(): void {}
}
