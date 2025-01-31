import { ChangeDetectionStrategy, Component, Input, OnInit, input, output } from '@angular/core';
import { ProjectTagDescription } from '../../interfaces/project.interface';
import { ETag } from '../../enums/tag.enum';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgClass } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgClass, TranslocoModule],
})
export class TagComponent {
    readonly tag = input.required<ProjectTagDescription>();
    // TODO: Skipped for migration because:
    //  Accessor inputs cannot be migrated as they are too complex.
    @Input() get clickable(): boolean {
        return this._clickable;
    }
    set clickable(value: BooleanInput) {
        this._clickable = coerceBooleanProperty(value);
    }
    public _clickable = false;

    // TODO: Skipped for migration because:
    //  Accessor inputs cannot be migrated as they are too complex.
    @Input() get choosed(): boolean {
        return this._choosed;
    }
    set choosed(value: BooleanInput) {
        this._choosed = coerceBooleanProperty(value);
    }
    public _choosed = false;

    readonly userClick = output<ETag>();

    getCustomClass(): string {
        const notClickableClass = 'cursor-default';

        let customClass: string = '';

        !this.clickable && (customClass = customClass.concat(notClickableClass));

        customClass = customClass.concat(' ', this._decideColorClass(this.tag().class));

        return customClass;
    }

    private _decideColorClass(customClass?: string): string {
        if (this.choosed) return 'bg-theme-primary text-theme-white-90';
        if (customClass) return customClass;
        return 'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80';
    }
}
