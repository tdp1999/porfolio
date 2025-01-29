import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { TranslocoModule } from '@ngneat/transloco';

const components = [TranslocoModule];

@NgModule({
    imports: [CommonModule, ...components, TagComponent],
    exports: [TagComponent],
})
export class TagModule {}
