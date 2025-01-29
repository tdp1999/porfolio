import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from './skill-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [FontAwesomeModule];

@NgModule({
    imports: [CommonModule, ...components, SkillItemComponent],
    exports: [SkillItemComponent],
})
export class SkillItemModule {}
