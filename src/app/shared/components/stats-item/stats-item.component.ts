import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    inject,
} from '@angular/core';

@Component({
    selector: 'app-stats-item',
    templateUrl: './stats-item.component.html',
    styleUrls: ['./stats-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsItemComponent implements AfterViewInit {
    @Input() startFrom = 0;
    @Input() duration = 7000;
    @Input() steps = 100;

    @Input() value!: number;

    private _cdr = inject(ChangeDetectorRef);

    showPlusSign = false;
    currentValue = 0;
    intervalId!: any;

    ngAfterViewInit(): void {
        this.startCounting();
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
