import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    ViewChild,
    inject,
} from '@angular/core';
import { Subject, delay, takeUntil } from 'rxjs';
import { IntersectionObserveService } from '../../services/intersection-observe.service';

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

    public currentValue = 0;
    public showPlusSign = false;

    private _cdr = inject(ChangeDetectorRef);
    private _intersectionService = inject(IntersectionObserveService);

    private _intervalId!: any;
    private _unsubscribeAll = new Subject<void>();

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
        clearInterval(this._intervalId);
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    startCounting() {
        const increment = Math.ceil((this.value - this.startFrom) / this.steps);

        this._intervalId = setInterval(() => {
            this.currentValue += increment;
            this.showPlusSign = this.currentValue >= this.value;
            this._cdr.markForCheck();

            if (this.currentValue >= this.value) {
                this.currentValue = this.value;
                this._cdr.markForCheck();
                clearInterval(this._intervalId);
            }
        }, this.duration / this.steps);
    }
}
