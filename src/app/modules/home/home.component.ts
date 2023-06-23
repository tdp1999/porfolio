import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    private _router = inject(Router);
    private _activatedRoute = inject(ActivatedRoute);
    private _routeData = this._activatedRoute.snapshot.data as {
        lang: string;
    };
    private _translocoService = inject(TranslocoService);

    ngOnInit(): void {
        this._translocoService.setActiveLang(this._routeData.lang);
    }

    onSectionChange(sectionId: string) {
        const currentFragment = this._activatedRoute.snapshot.fragment;
        if (currentFragment !== sectionId) {
            this._router.navigate([], {
                fragment: sectionId,
                relativeTo: this._activatedRoute,
                queryParamsHandling: 'preserve',
                replaceUrl: true,
            });
        }
    }
}
