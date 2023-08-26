import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './description-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

const components = [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    FontAwesomeModule,
    TranslocoModule,
];

@NgModule({
    declarations: [DescriptionListComponent],
    imports: [CommonModule, ...components],
    exports: [DescriptionListComponent],
})
export class DescriptionListModule {}
