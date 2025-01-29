import { NgForOf } from '@angular/common';
import { Directive, OnInit, inject } from '@angular/core';

@Directive({
    selector: '[ngForTrackById]',
    standalone: false
})
export class NgForTrackByIdDirective<T extends { id: number | string }>
    implements OnInit
{
    private _ngFor = inject(NgForOf<T>);

    ngOnInit(): void {
        this._ngFor.ngForTrackBy = (index: number, item: T) => item.id;
    }
}
