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

    observe(element: ElementRef): Observable<boolean> {
        if (!isPlatformBrowser(this._platformId)) return of(false);

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

    // observeElement(element: ElementRef): Observable<string> {
    //     if (!isPlatformBrowser(this._platformId)) return of('');

    //     return new Observable((observer: Subscriber<string>) => {
    //         const intersectionObserver = new IntersectionObserver(
    //             ([entry]) => observer.next(entry.target.id),
    //             { root: null, threshold: 0.5 }
    //         );

    //         intersectionObserver.observe(element.nativeElement);
    //         return () => intersectionObserver.disconnect();
    //     });
    // }

    // observeAll(elements: ElementRef[]): Observable<string[]> {
    //     const observables = elements.map((element) =>
    //         this.observeElement(element)
    //     );

    //     return mergeMap((...results) => results)(...observables).pipe(
    //         distinctUntilChanged(),
    //         shareReplay({ bufferSize: 1, refCount: true })
    //     );
    // }
}
