import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    faLinkedin,
    faSkype,
    faSquareFacebook,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';
import { SocialLinkData } from 'src/app/shared/data/social-link.data';
import { SocialLink } from 'src/app/shared/interfaces/social-link.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
    socialLink: SocialLink[] = SocialLinkData;

    private _dialog = inject(MatDialog);

    constructor() {}

    openContactForm() {
        this._dialog.open(ContactFormComponent, {
            panelClass: 'contact-form-dialog',
        });
    }
}
