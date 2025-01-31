import { AfterViewInit, Directive, ElementRef, Input, inject, input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Directive({ selector: '[appSwiper]' })
export class SwiperDirective implements AfterViewInit {
    // @Input() swiperConfig?: SwiperOptions;

    readonly swiperConfig = input<any>();

    private _el = inject(ElementRef<SwiperContainer>);

    ngAfterViewInit(): void {
        Object.assign(this._el.nativeElement, this.swiperConfig);
        this._el.nativeElement.initialize();
    }
}
