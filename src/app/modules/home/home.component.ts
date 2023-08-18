import {
    AfterViewInit,
    CUSTOM_ELEMENTS_SCHEMA,
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Subject,
    delay,
    distinctUntilChanged,
    filter,
    takeUntil,
    tap,
} from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
// import { SwiperOptions } from 'swiper/types';
// import { A11y, Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    public sliders: string[] = [
        'Test 1',
        'Test 2',
        'Test 3',
        'Test 4',
        'Test 5',
        'Test 6',
        'Test 7',
        'Test 8',
        'Test 9',
    ];

    // public config: SwiperOptions = {
    // public config: SwiperOptions = {
    //     // modules: [Navigation, Pagination, A11y, Mousewheel],
    //     // modules: [Navigation],
    //     autoHeight: true,
    //     spaceBetween: 20,
    //     navigation: false,
    //     pagination: { clickable: true, dynamicBullets: true },
    //     slidesPerView: 1,
    //     centeredSlides: true,
    //     breakpoints: {
    //         400: {
    //             slidesPerView: 'auto',
    //             centeredSlides: false,
    //         },
    //     },
    // };

    private _route = inject(ActivatedRoute);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);

    ngAfterViewInit(): void {
        // Scroll into section when fragment changes
        this._route.fragment
            .pipe(
                distinctUntilChanged(),
                filter((fragment) => !!fragment),
                delay(100),
                tap((fragment) =>
                    this._scrollService.scrollToFragment(fragment ?? '')
                ),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    scrollTo(fragment: string) {
        this._scrollService.scrollToFragment(fragment);
    }
}
