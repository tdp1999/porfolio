import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [FontAwesomeModule];

@NgModule({
    declarations: [ScrollToTopComponent],
    imports: [CommonModule, ...components],
    exports: [ScrollToTopComponent],
})
export class ScrollToTopModule {}
