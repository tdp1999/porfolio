import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { IntersectionObserveService } from '../../services/intersection-observe.service';
import { Subject, delay, takeUntil } from 'rxjs';

@Component({
    selector: 'app-stats-item',
    templateUrl: './stats-item.component.html',
    styleUrls: ['./stats-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsItemComponent implements AfterViewInit, OnDestroy {
    @Input() startFrom = 0;
    @Input() duration = 7000;
    @Input() steps = 100;

    @Input() value!: number;
    @Input() label!: string;

    @ViewChild('el') el!: ElementRef;

    private _cdr = inject(ChangeDetectorRef);
    private _unsubscribeAll = new Subject<void>();
    private _intersectionService = inject(IntersectionObserveService);

    showPlusSign = false;
    currentValue = 0;
    intervalId!: any;

    ngAfterViewInit(): void {
        this._intersectionService
            .observe(this.el)
            .pipe(takeUntil(this._unsubscribeAll), delay(300))
            .subscribe((isIntersecting) => {
                if (isIntersecting) {
                    this.startCounting();
                }
            });
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    startCounting() {
        const increment = Math.ceil((this.value - this.startFrom) / this.steps);

        this.intervalId = setInterval(() => {
            this.currentValue += increment;
            this.showPlusSign = this.currentValue >= this.value;
            this._cdr.markForCheck();

            if (this.currentValue >= this.value) {
                this.currentValue = this.value;
                this._cdr.markForCheck();
                clearInterval(this.intervalId);
            }
        }, this.duration / this.steps);
    }
}
