import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
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
import { AnimateOnScrollModule } from 'src/app/shared/directives/animate-on-scroll/animate-on-scroll.module';
import { ScrollspyModule } from 'src/app/shared/directives/scrollspy/scrollspy.module';
import { SwiperModule } from 'src/app/shared/directives/swiper/swiper.module';
import { TrackByModule } from 'src/app/shared/directives/track-by/track-by.module';
import { ExperienceItemModule } from './../../shared/components/experience-item/experience-item.module';
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
    AnimateOnScrollModule,
    CarouselModule,
    ContactFormModule,
    DescriptionListModule,
    ExperienceItemModule,
    FontAwesomeModule,
    LightboxModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatTreeModule,
    ProjectItemModule,
    ScrollToTopModule,
    ScrollspyModule,
    SkillItemModule,
    StatsItemModule,
    TimelineModule,
    TranslocoModule,
    TagModule,
    SwiperModule,
];

const directives = [TrackByModule];

@NgModule({
    declarations: [
        HomeComponent,
        HeroComponent,
        ExperiencesComponent,
        AboutComponent,
        SkillsComponent,
        ContactComponent,
        ProjectsComponent,
        HomeSectionDirective,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ...components,
        ...directives,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
