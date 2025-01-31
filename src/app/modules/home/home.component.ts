import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, delay, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs';
import { ScrollService } from 'src/app/shared/services/scroll.service';
import { ScrollToTopComponent } from '../../shared/components/scroll-to-top/scroll-to-top.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll/animate-on-scroll.directive';
import { ScrollspyDirective } from '../../shared/directives/scrollspy/scrollspy.directive';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ScrollspyDirective,
        HeroComponent,
        AnimateOnScrollDirective,
        AboutComponent,
        ExperiencesComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent,
        ScrollToTopComponent,
    ],
})
export class HomeComponent implements OnDestroy, AfterViewInit {
    private _route = inject(ActivatedRoute);
    private _unsubscribeAll = new Subject<void>();
    private _scrollService = inject(ScrollService);

    ngAfterViewInit(): void {
        // Scroll into section when fragment changes
        this._route.fragment
            .pipe(
                distinctUntilChanged(),
                filter((fragment) => !!fragment),
                delay(100),
                tap((fragment) => this._scrollService.scrollToFragment(fragment ?? '')),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe();
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    scrollTo(fragment: string) {
        this._scrollService.scrollToFragment(fragment);
    }
}
