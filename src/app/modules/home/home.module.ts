import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { LightboxModule } from 'src/app/shared/components/lightbox/lightbox.module';
import { ProjectItemModule } from 'src/app/shared/components/project-item/project-item.module';
import { SkillItemModule } from 'src/app/shared/components/skill-item/skill-item.module';
import { StatsItemModule } from 'src/app/shared/components/stats-item/stats-item.module';
import { ExperienceItemModule } from './../../shared/components/experience-item/experience-item.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

const components = [
    ExperienceItemModule,
    StatsItemModule,
    SkillItemModule,
    ProjectItemModule,
    MatDialogModule,
    LightboxModule,
    FontAwesomeModule,
    TranslocoModule,
    CarouselModule
];

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ExperiencesComponent,
        AboutComponent,
        SkillsComponent,
        ContactComponent,
        ProjectsComponent,
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ...components],
})
export class HomeModule {}
