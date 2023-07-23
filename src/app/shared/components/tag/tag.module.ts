import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { TranslocoModule } from '@ngneat/transloco';

const components = [TranslocoModule];

@NgModule({
    declarations: [TagComponent],
    imports: [CommonModule, ...components],
    exports: [TagComponent],
})
export class TagModule {}
