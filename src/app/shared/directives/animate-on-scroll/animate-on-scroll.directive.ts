import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy, Renderer2, inject } from '@angular/core';
import { IntersectionObserveService } from '../../services/intersection-observe.service';
import { Subject, filter, switchMap, take, takeUntil, tap, withLatestFrom } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Directive({ selector: '[appAnimateOnScroll]' })
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
    // TODO: Skipped for migration because:
    //  Accessor inputs cannot be migrated as they are too complex.
    @Input() set animateStart(value: string) {
        const classes = this._elementRef.nativeElement.classList;
        if (classes.contains(this._animateStart)) return;

        this._renderer.removeClass(this._elementRef.nativeElement, this._animateStart);
        this._renderer.addClass(this._elementRef.nativeElement, value);
        this._animateStart = value;
    }
    get animateStart(): string {
        return this._animateStart;
    }
    private _animateStart = 'animation--fade';

    // TODO: Skipped for migration because:
    //  Class of this input is manually instantiated. This is discouraged and prevents
    //  migration.
    @Input() animationEnd = 'animate';

    @HostBinding('class.animation--fade') animate = true;

    private _renderer = inject(Renderer2);
    private _elementRef = inject(ElementRef);
    private _unsubscribeAll$ = new Subject<void>();
    private _breakpointObserver = inject(BreakpointObserver);
    private _intersectionObserverService = inject(IntersectionObserveService);

    ngAfterViewInit(): void {
        this._breakpointObserver
            .observe(['(min-width: 768px)'])
            .pipe(
                switchMap((result) => {
                    const threshold = result.matches ? 0.5 : 0.3;
                    return this._intersectionObserverService.observe(this._elementRef, threshold);
                }),
                filter((isIntersecting: boolean) => isIntersecting),
                take(1),
                takeUntil(this._unsubscribeAll$),
            )
            .subscribe((isIntersecting: boolean) => {
                this._elementRef.nativeElement.classList.add(this.animationEnd);
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }
}
