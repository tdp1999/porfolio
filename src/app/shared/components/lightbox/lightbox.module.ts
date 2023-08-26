import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
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
