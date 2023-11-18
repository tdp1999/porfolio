import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableTextComponent } from './expandable-text.component';

@NgModule({
    declarations: [ExpandableTextComponent],
    imports: [CommonModule],
    exports: [ExpandableTextComponent],
})
export class ExpandableTextModule {}
