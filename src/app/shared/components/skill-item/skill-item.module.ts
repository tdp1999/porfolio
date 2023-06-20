import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from './skill-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [FontAwesomeModule];

@NgModule({
    declarations: [SkillItemComponent],
    imports: [CommonModule, ...components],
    exports: [SkillItemComponent],
})
export class SkillItemModule {}
