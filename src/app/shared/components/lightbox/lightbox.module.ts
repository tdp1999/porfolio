import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { LightboxComponent } from './lightbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
];

@NgModule({
    declarations: [LightboxComponent],
    imports: [CommonModule, ...components],
    exports: [LightboxComponent],
    providers: [MatIconRegistry],
})
export class LightboxModule {}
