import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TagModule } from '../tag/tag.module';

const components = [TranslocoModule, TagModule];

@NgModule({
    imports: [CommonModule, ...components, ProjectItemComponent],
    exports: [ProjectItemComponent],
})
export class ProjectItemModule {}
