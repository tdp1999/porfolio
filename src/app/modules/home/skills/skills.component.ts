import { BreakpointObserver } from '@angular/cdk/layout';
import { Overlay } from '@angular/cdk/overlay';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    inject,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { SkillTypes } from 'src/app/shared/data/skill.data';
import { Skill } from 'src/app/shared/interfaces/skill.interface';
import { SkillType } from 'src/app/shared/types/skill.type';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
    public skillTypes = SkillTypes;
    public navPosition: 'right' | 'left' = 'right';

    private _currentType = new BehaviorSubject<SkillType>('technical');
    public currentType$ = this._currentType.asObservable();

    private _skillData = new BehaviorSubject<Skill[]>(this.skillTypes[0].data);
    public skillData$ = this._skillData.asObservable();

    private _cdr = inject(ChangeDetectorRef);
    private _dialog = inject(MatDialog);
    private _overlay = inject(Overlay);
    private _unsubscribeAll$ = new Subject<void>();
    private _breakpointObserver = inject(BreakpointObserver);

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
        this._currentType.next(type);

        const skill = this.skillTypes.find((item) => item.id === type);
        this._skillData.next(skill?.data ?? []);
    }
}
