import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    ViewChild,
    inject,
} from '@angular/core';
import { MENU_DATA } from '../../data/menu.data';
import { MenuService } from '../../services/menu.service';
import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        // trigger('iconChangeAnimation', [
        //     state('void', style({ transform: 'rotate(0deg)' })),
        //     state(':leave', style({ color: 'blue' })),
        //     transition(':enter', animate('200ms ease-in')),
        // ]),
    ],
})
export class NavbarComponent {
    @ViewChild('nav', { static: true }) navbar!: ElementRef;

    public menuService = inject(MenuService);
    public themeService = inject(ThemeService);

    items = MENU_DATA;
}
