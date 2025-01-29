import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [FontAwesomeModule];

@NgModule({
    imports: [CommonModule, ...components, ScrollToTopComponent],
    exports: [ScrollToTopComponent],
})
export class ScrollToTopModule {}
