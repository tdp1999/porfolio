import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TimelineComponent } from './timeline.component';

const components = [MatTooltipModule];

@NgModule({
    imports: [CommonModule, ...components, TimelineComponent],
    exports: [TimelineComponent],
})
export class TimelineModule {}
