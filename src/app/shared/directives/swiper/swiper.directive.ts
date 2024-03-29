import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    inject,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Directive({
    selector: '[appSwiper]',
})
export class SwiperDirective implements AfterViewInit {
    // @Input() swiperConfig?: SwiperOptions;
    @Input() swiperConfig?: any;

    private _el = inject(ElementRef<SwiperContainer>);

    ngAfterViewInit(): void {
        Object.assign(this._el.nativeElement, this.swiperConfig);
        this._el.nativeElement.initialize();
    }
}
