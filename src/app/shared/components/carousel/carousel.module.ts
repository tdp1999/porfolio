import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

const components = [
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
];

@NgModule({
    declarations: [CarouselComponent],
    imports: [CommonModule, ...components],
    exports: [CarouselComponent],
})
export class CarouselModule {}
