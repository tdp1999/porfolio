import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const components = [MatFormFieldModule, MatInputModule, MatSnackBarModule];

@NgModule({
    declarations: [ContactFormComponent],
    imports: [CommonModule, ReactiveFormsModule, ...components],
    exports: [ContactFormComponent],
})
export class ContactFormModule {}
