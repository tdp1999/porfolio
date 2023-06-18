import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
    ngOnInit(): void {}
}
