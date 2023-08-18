import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForTrackByIdDirective } from './track-by.directive';

@NgModule({
    declarations: [NgForTrackByIdDirective],
    imports: [CommonModule],
    exports: [NgForTrackByIdDirective],
})
export class TrackByModule {}
