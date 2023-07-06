import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    QueryList,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Subject,
    delay,
    distinctUntilChanged,
    filter,
    take,
    takeUntil,
    tap,
} from 'rxjs';
import { IntersectionObserveService } from 'src/app/shared/services/intersection-observe.service';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { AboutComponent } from './about/about.component';
import { HomeSectionDirective } from './home-section.directive';
import { ProjectsComponent } from './projects/projects.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    @ViewChild(AboutComponent, { static: true }) about!: AboutComponent;
    @ViewChild(ProjectsComponent, { static: true, read: ElementRef })
    projects!: ElementRef;

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
