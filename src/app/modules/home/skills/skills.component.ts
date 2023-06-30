import { BreakpointObserver } from '@angular/cdk/layout';
import { Overlay } from '@angular/cdk/overlay';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { Experiences } from 'src/app/shared/data/experience.data';
import { SkillTypes, Skills } from 'src/app/shared/data/skill.data';
import { SkillType } from 'src/app/shared/types/skill.type';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
    public skills = Skills;
    public navPosition: 'right' | 'left' = 'right';
    public currentType: SkillType = 'technical';
    public skillTypes = SkillTypes;

    private _cdr = inject(ChangeDetectorRef);
    private _overlay = inject(Overlay);
    private _dialog = inject(MatDialog);
    private _breakpointObserver = inject(BreakpointObserver);
    private _unsubscribeAll$ = new Subject<void>();

    ngAfterViewInit(): void {
        this._breakpointObserver
            .observe(['(min-width: 768px)'])
            .pipe(takeUntil(this._unsubscribeAll$))
            .subscribe((result) => {
                result.matches
                    ? (this.navPosition = 'right')
                    : (this.navPosition = 'left');
                this._cdr.markForCheck();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll$.next();
        this._unsubscribeAll$.complete();
    }

    handleActionClick() {
        this._dialog.open(LightboxComponent, {
            scrollStrategy: this._overlay.scrollStrategies.noop(),
            data: {
                test: 'test',
            },
        });
    }

    toggleNavPosition() {
        this.navPosition = this.navPosition === 'left' ? 'right' : 'left';
    }

    goTo(type: SkillType) {
        this.currentType = type;
    }
}
