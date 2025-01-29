import {
    Directive,
    HostListener,
    Injector,
    OnInit,
    forwardRef,
    inject,
} from '@angular/core';
import {
    ControlValueAccessor,
    DefaultValueAccessor,
    NG_VALUE_ACCESSOR,
    NgControl,
} from '@angular/forms';

@Directive({
    selector: 'input[trim], textarea[trim]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TrimDirective),
            multi: true,
        },
    ]
})
export class TrimDirective extends DefaultValueAccessor implements OnInit {
    private _injector = inject(Injector);
    private _control: NgControl | null = null;

    @HostListener('blur', ['$event.target.value']) trim(val: any) {
        this.writeValue(val);
        this._control?.control?.updateValueAndValidity();
    }

    override writeValue(value: any): void {
        if (typeof value === 'string') {
            value = value.trim();
        }
        super.writeValue(value);
    }

    ngOnInit() {
        this._control = this._injector.get(NgControl, null);
    }
}
