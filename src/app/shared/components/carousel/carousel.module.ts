import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselComponent } from './carousel.component';

const components = [FontAwesomeModule, MatButtonModule, MatDialogModule];

@NgModule({
    imports: [CommonModule, ...components, CarouselComponent],
    exports: [CarouselComponent],
})
export class CarouselModule {}
