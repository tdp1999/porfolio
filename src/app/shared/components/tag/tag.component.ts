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

    @Output() onClick = new EventEmitter<ETag>();

    getCustomClass(): string {
        const notClickableClass = 'cursor-default';
        const defaultColorClass =
            'text-theme-black-80 border-theme-black-80 dark:text-theme-white-80 dark:border-theme-white-80';

        let customClass: string = '';

        this.tag.class
            ? (customClass = customClass.concat(this.tag.class))
            : (customClass = customClass.concat(defaultColorClass));
        !this.clickable &&
            (customClass = customClass.concat(' ', notClickableClass));

        return customClass;
    }
}
