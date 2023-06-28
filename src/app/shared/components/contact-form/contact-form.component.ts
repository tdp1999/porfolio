import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NetlifyService } from '../../services/netlify.service';
import { ContactFormData } from '../../interfaces/contact-form.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    private _fb = inject(FormBuilder);
    private _snackbar = inject(MatSnackBar);
    private _netlifyService = inject(NetlifyService);

    public form = this._fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        company: [''],
        message: ['', Validators.required],
    });

    submit() {
        this.form.markAllAsTouched();
        console.log(this.form.value);
        if (this.form.invalid) return;

        this._netlifyService
            .submitForm(this.form.value as ContactFormData)
            .subscribe({
                next: () => {
                    console.log('Success!');
                    this.form.reset();
                    this._snackbar.open(
                        'Your message has been sent!',
                        'Dismiss',
                        {
                            duration: 3000,
                        }
                    );
                },
                error: (err) => console.log('Error: ', err),
            });
    }
}
