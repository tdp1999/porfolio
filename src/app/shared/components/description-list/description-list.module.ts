import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './description-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { MatTooltipModule } from '@angular/material/tooltip';

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
