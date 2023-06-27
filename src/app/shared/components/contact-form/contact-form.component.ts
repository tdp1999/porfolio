import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
    private _fb = inject(FormBuilder);

    public form = this._fb.group({
        test: ['', Validators.required],
    });

    submit() {
        console.log(this.form.value);
    }
}
