import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './description-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

const components = [MatButtonModule, MatDialogModule, MatTooltipModule, FontAwesomeModule, TranslocoModule];

@NgModule({
    imports: [CommonModule, ...components, DescriptionListComponent],
    exports: [DescriptionListComponent],
})
export class DescriptionListModule {}
