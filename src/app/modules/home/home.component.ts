import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    QueryList,
    Type,
    ViewChild,
    ViewChildren,
    inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AboutComponent } from './about/about.component';
import { Subject, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(AboutComponent, { static: true }) about!: AboutComponent;
    @ViewChildren(AboutComponent, { read: ElementRef })
    sections!: QueryList<ElementRef>;

    private _route = inject(ActivatedRoute);
    private _routeData = this._route.snapshot.data as {
        lang: string;
    };
    private _document = inject(DOCUMENT);
    private _cdr = inject(ChangeDetectorRef);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);
    private _translocoService = inject(TranslocoService);
    private _intersectionObserver!: IntersectionObserver;

    ngOnInit(): void {
        this._translocoService.setActiveLang(this._routeData.lang);

        // this._intersectionObserver = new IntersectionObserver(
        //     this.handleIntersection,
        //     {
        //         root: null,
        //         rootMargin: '0px',
        //         threshold: 0.5,
        //     }
        // );
        // this._intersectionObserver.observe(this.about.elementRef.nativeElement);
    }

    ngAfterViewInit(): void {
        // Scroll into section when fragment changes
        this._route.fragment
            .pipe(
                distinctUntilChanged(),
                filter((fragment) => !!fragment),
                tap((fragment) => this.scrollToSection(fragment ?? '')),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe();
    }

    scrollToSection(id: string) {
        console.log('Scrolling to:', id);
        this._document.querySelector(`[id="${id}"]`)?.scrollIntoView({
            behavior: 'smooth',
        });
    }

    ngOnDestroy(): void {
        this._intersectionObserver.disconnect();

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
