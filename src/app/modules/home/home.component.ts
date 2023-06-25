import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild(AboutComponent, { static: true }) about!: AboutComponent;

    private _activatedRoute = inject(ActivatedRoute);
    private _routeData = this._activatedRoute.snapshot.data as {
        lang: string;
    };
    private _translocoService = inject(TranslocoService);
    private _intersectionObserver!: IntersectionObserver;

    ngOnInit(): void {
        this._translocoService.setActiveLang(this._routeData.lang);
        console.log(this.about);

        this._intersectionObserver = new IntersectionObserver(
            this.handleIntersection,
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );
        this._intersectionObserver.observe(this.about.elementRef.nativeElement);
    }

    ngOnDestroy(): void {
        this._intersectionObserver.disconnect();
    }

    handleIntersection(
        entries: IntersectionObserverEntry[],
        options: IntersectionObserverInit
    ) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('Intersecting:', entry.target);
            }
        });
    }
}
