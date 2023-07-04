import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    QueryList,
    Renderer2,
    Type,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AboutComponent } from './about/about.component';
import {
    Subject,
    delay,
    distinctUntilChanged,
    filter,
    takeUntil,
    tap,
} from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    @ViewChild(AboutComponent, { static: true }) about!: AboutComponent;

    private _route = inject(ActivatedRoute);
    private _routeData = this._route.snapshot.data as {
        lang: string;
    };
    private _document = inject(DOCUMENT);
    private _renderer2 = inject(Renderer2);
    private _cdr = inject(ChangeDetectorRef);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);
    private _translocoService = inject(TranslocoService);

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

    scrollTo(fragment: string) {
        this._scrollService.scrollToFragment(fragment);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
