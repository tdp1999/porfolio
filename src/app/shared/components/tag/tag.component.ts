import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { ProjectTagDescription } from '../../interfaces/project.interface';
import { ETag } from '../../enums/tag.enum';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
    @Input() tag!: ProjectTagDescription;
    @Input() get clickable(): boolean {
        return this._clickable;
    }
    set clickable(value: BooleanInput) {
        this._clickable = coerceBooleanProperty(value);
    }
    public _clickable = false;

    @Input() get choosed(): boolean {
        return this._choosed;
    }
    set choosed(value: BooleanInput) {
        this._choosed = coerceBooleanProperty(value);
    }
    public _choosed = false;

    @Output() onClick = new EventEmitter<ETag>();

    getCustomClass(): string {
        const notClickableClass = 'cursor-default';

        let customClass: string = '';

        !this.clickable &&
            (customClass = customClass.concat(notClickableClass));

        customClass = customClass.concat(
            ' ',
            this._decideColorClass(this.tag.class)
        );

        return customClass;
    }

    private _decideColorClass(customClass?: string): string {
        if (this.choosed) return 'bg-theme-primary text-theme-white-90';
        if (customClass) return customClass;
        return 'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80';
    }
}
