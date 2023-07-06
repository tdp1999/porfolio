import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';

@NgModule({
    declarations: [AnimateOnScrollDirective],
    imports: [CommonModule],
    exports: [AnimateOnScrollDirective],
})
export class AnimateOnScrollModule {}
