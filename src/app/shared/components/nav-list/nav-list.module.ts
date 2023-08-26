import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { RouterModule } from '@angular/router';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';

const components = [
    RouterModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
    TranslocoModule,
];

@NgModule({
    declarations: [NavListComponent],
    imports: [CommonModule, ...components],
    exports: [NavListComponent],
})
export class NavListModule {}
