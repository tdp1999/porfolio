import {
    Observable,
    Subscriber,
    distinctUntilChanged,
    map,
    mergeMap,
    shareReplay,
} from 'rxjs';
import { ElementRef, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class IntersectionObserveService {
    constructor() {}

    observe(element: ElementRef): Observable<boolean> {
        return new Observable(
            (observer: Subscriber<IntersectionObserverEntry[]>) => {
                const intersectionObserver = new IntersectionObserver(
                    (entries) => observer.next(entries),
                    { root: null, threshold: 0.5 }
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
