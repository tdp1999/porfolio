import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { TranslocoModule } from '@ngneat/transloco';
import { TrimModule } from '../../directives/trim/trim.module';

const components = [
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    TranslocoModule,
];

const directives = [TrimModule];

@NgModule({
    declarations: [ContactFormComponent],
    imports: [CommonModule, ReactiveFormsModule, ...components, ...directives],
    exports: [ContactFormComponent],
})
export class ContactFormModule {}
