import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    private _fb = inject(FormBuilder);

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
    }
}
