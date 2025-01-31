import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-p404',
    templateUrl: './p404.component.html',
    styleUrls: ['./p404.component.scss'],
    imports: [RouterLink, TranslocoModule],
})
export class P404Component {}
