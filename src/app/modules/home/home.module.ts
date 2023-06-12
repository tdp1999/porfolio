import { ExperienceItemModule } from './../../shared/components/experience-item/experience-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { StatsItemModule } from 'src/app/shared/components/stats-item/stats-item.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

const components = [ExperienceItemModule, StatsItemModule];

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ExperiencesComponent,
        AboutComponent,
        SkillsComponent,
        ContactComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...components],
})
export class HomeModule {}
