import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MENU_DATA } from '../../data/menu.data';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
    items = MENU_DATA;

    constructor() {}

    ngOnInit(): void {}
}
