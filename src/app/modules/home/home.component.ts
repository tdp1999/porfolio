import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    QueryList,
    Renderer2,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import {
    Subject,
    delay,
    distinctUntilChanged,
    filter,
    takeUntil,
    tap,
} from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { AboutComponent } from './about/about.component';
import { HomeSectionDirective } from './home-section.directive';
import { IntersectionObserveService } from 'src/app/shared/services/intersection-observe.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    @ViewChild(AboutComponent, { static: true }) about!: AboutComponent;
    @ViewChildren(HomeSectionDirective, { read: ElementRef })
    sections!: QueryList<ElementRef>;

    private _route = inject(ActivatedRoute);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);
    private _intersectionService = inject(IntersectionObserveService);

    ngAfterViewInit(): void {
        const sections = this.sections.toArray();
        console.log('Section: ', sections);

        // this._intersectionService.observe(sections).subscribe((entries) => {})

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

    scrollTo(fragment: string) {
        this._scrollService.scrollToFragment(fragment);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
