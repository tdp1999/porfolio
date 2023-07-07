import {
    Observable,
    Subscriber,
    distinctUntilChanged,
    map,
    mergeMap,
    of,
    shareReplay,
} from 'rxjs';
import { ElementRef, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class IntersectionObserveService {
    private _platformId = inject(PLATFORM_ID);

    observe(element: ElementRef, threshold = 0.5): Observable<boolean> {
        if (!isPlatformBrowser(this._platformId)) return of(false);

        return new Observable(
            (observer: Subscriber<IntersectionObserverEntry[]>) => {
                const intersectionObserver = new IntersectionObserver(
                    (entries) => observer.next(entries),
                    { root: null, threshold } // 0.5 = 50% of the element is visible. Beware the long element
                );
                intersectionObserver.observe(element.nativeElement);
                return () => intersectionObserver.disconnect();
            }
        ).pipe(
            mergeMap((entries: IntersectionObserverEntry[]) => entries),
            map((entry: IntersectionObserverEntry) => entry.isIntersecting),
            distinctUntilChanged(),
            shareReplay({ bufferSize: 1, refCount: true })
        );
    }
}
