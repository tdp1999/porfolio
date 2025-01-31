import { Component, OnInit, input } from '@angular/core';
import { CarouselImage } from '../../interfaces/carousel.interface';
import { trigger, transition, style, animate } from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger('carouselAnimation', [
            transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
            transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
        ]),
    ],
    imports: [FontAwesomeModule],
})
export class CarouselComponent {
    readonly images = input<CarouselImage[]>([
        {
            title: 'Image 1',
            alt: 'Image 1',
            url: 'assets/images/carousel/carousel-1.jpg',
        },
        {
            title: 'Image 2',
            alt: 'Image 2',
            url: 'assets/images/carousel/carousel-2.jpg',
        },
        {
            title: 'Image 3',
            alt: 'Image 3',
            url: 'assets/images/carousel/carousel-3.jpg',
        },
    ]);

    public currentIndex = 0;

    getCurrentSlideURL(): string {
        return `url(${this.images()[this.currentIndex].url})`;
    }

    prevSlide() {
        this.currentIndex = this.currentIndex === 0 ? this.images().length - 1 : this.currentIndex - 1;
    }

    nextSlide() {
        this.currentIndex = this.currentIndex === this.images().length - 1 ? 0 : this.currentIndex + 1;
    }

    gotoSlide(index: number) {
        this.currentIndex = index;
    }
}
