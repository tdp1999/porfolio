import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from 'src/app/shared/components/contact-form/contact-form.component';
import { SocialLinkData } from 'src/app/shared/data/social-link.data';
import { Link } from 'src/app/shared/interfaces/general-entitly';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
