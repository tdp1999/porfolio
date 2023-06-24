import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { MatTooltipModule } from '@angular/material/tooltip';

const components = [MatTooltipModule];

@NgModule({
    declarations: [TimelineComponent],
    imports: [CommonModule, ...components],
    exports: [TimelineComponent],
})
export class TimelineModule {}
