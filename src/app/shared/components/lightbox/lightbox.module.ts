import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LightboxComponent } from './lightbox.component';

const components = [
    MatDialogModule,
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
