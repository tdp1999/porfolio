import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';
import { SocialLinkData } from 'src/app/shared/data/social-link.data';
import { Link } from 'src/app/shared/interfaces/general-entity';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactFormComponent as ContactFormComponent_1 } from '../../../shared/components/contact-form/contact-form.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FontAwesomeModule, ContactFormComponent_1, TranslocoModule],
})
export class ContactComponent {
    public socialLink: Link[] = SocialLinkData;

    private _dialog = inject(MatDialog);

    openContactForm() {
        this._dialog.open(ContactFormComponent, {
            panelClass: 'contact-form-dialog',
        });
    }
}
