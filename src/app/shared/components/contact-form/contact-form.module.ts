import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const components = [MatFormFieldModule, MatInputModule];

@NgModule({
    declarations: [ContactFormComponent],
    imports: [CommonModule, ReactiveFormsModule, ...components],
    exports: [ContactFormComponent],
})
export class ContactFormModule {}
