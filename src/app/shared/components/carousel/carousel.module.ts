import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [FontAwesomeModule];

@NgModule({
    declarations: [CarouselComponent],
    imports: [CommonModule, ...components],
    exports: [CarouselComponent],
})
export class CarouselModule {}
