import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
