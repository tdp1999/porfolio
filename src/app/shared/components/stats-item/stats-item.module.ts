import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsItemComponent } from './stats-item.component';
import { TranslocoModule } from '@ngneat/transloco';

const components = [TranslocoModule];

@NgModule({
    declarations: [StatsItemComponent],
    imports: [CommonModule, ...components],
    exports: [StatsItemComponent],
})
export class StatsItemModule {}
