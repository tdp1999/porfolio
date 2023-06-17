import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-skill-item',
    templateUrl: './skill-item.component.html',
    styleUrls: ['./skill-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillItemComponent implements OnInit {
    @Output() actionClick = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
