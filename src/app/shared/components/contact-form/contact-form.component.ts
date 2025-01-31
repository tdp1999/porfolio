import { Component, ViewChild, inject, viewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactFormData } from '../../interfaces/contact-form.interface';
import { NetlifyService } from '../../services/netlify.service';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { TrimDirective } from '../../directives/trim/trim.directive';
import { NgIf } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, TrimDirective, NgIf, MatError, TranslocoModule],
})
export class ContactFormComponent {
    // @ViewChild(FormGroupDirective) formRef!: FormGroupDirective;
    formRef = viewChild.required<FormGroupDirective>('formRef');

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
        if (this.form.invalid) return;

        this._netlifyService.submitForm(this.form.value as ContactFormData).subscribe({
            next: () => {
                this.formRef().resetForm();
                this._snackbar.open('Your message has been sent! Thank you!', 'Dismiss', {
                    duration: 3000,
                });
            },
            error: (err: any) => console.log('Error: ', err),
        });
    }
}
