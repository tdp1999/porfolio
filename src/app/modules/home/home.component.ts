import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    private _activatedRoute = inject(ActivatedRoute);
    private _routeData = this._activatedRoute.snapshot.data as { lang: string };
    private _translocoService = inject(TranslocoService);

    ngOnInit(): void {
        this._translocoService.setActiveLang(this._routeData.lang);
    }
}
