import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { ContactFormModule } from 'src/app/shared/components/contact-form/contact-form.module';
import { DescriptionListModule } from 'src/app/shared/components/description-list/description-list.module';
import { LightboxModule } from 'src/app/shared/components/lightbox/lightbox.module';
import { ProjectItemModule } from 'src/app/shared/components/project-item/project-item.module';
import { ScrollToTopModule } from 'src/app/shared/components/scroll-to-top/scroll-to-top.module';
import { SkillItemModule } from 'src/app/shared/components/skill-item/skill-item.module';
import { StatsItemModule } from 'src/app/shared/components/stats-item/stats-item.module';
import { TagModule } from 'src/app/shared/components/tag/tag.module';
import { TimelineModule } from 'src/app/shared/components/timeline/timeline.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HeroComponent } from './hero/hero.component';
import { HomeSectionDirective } from './home-section.directive';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

const components = [
    CarouselModule,
    ContactFormModule,
    DescriptionListModule,
    FontAwesomeModule,
    LightboxModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatTooltipModule,
    MatTreeModule,
    ProjectItemModule,
    ScrollToTopModule,
    SkillItemModule,
    StatsItemModule,
    TimelineModule,
    TranslocoModule,
    TagModule,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ...components,
        HomeComponent,
        HeroComponent,
        ExperiencesComponent,
        AboutComponent,
        SkillsComponent,
        ContactComponent,
        ProjectsComponent,
        HomeSectionDirective,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
