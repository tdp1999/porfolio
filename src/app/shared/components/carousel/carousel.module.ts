import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

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
