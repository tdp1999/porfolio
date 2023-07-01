import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
    @Output() scrollTo = new EventEmitter<string>();
}
