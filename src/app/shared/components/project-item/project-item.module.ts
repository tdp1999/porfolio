import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from './project-item.component';
import { TranslocoModule } from '@ngneat/transloco';

const components = [TranslocoModule];

@NgModule({
    declarations: [ProjectItemComponent],
    imports: [CommonModule, ...components],
    exports: [ProjectItemComponent],
})
export class ProjectItemModule {}
