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
import { ScrollService } from '../../services/scroll.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
    // trigger('iconChangeAnimation', [
    //     state('void', style({ transform: 'rotate(0deg)' })),
    //     state(':leave', style({ color: 'blue' })),
    //     transition(':enter', animate('200ms ease-in')),
    // ]),
    ],
    standalone: false
})
export class HeaderComponent {
    @ViewChild('header', { static: true }) headerRef!: ElementRef;

    public items = MENU_DATA;
    public menuService = inject(MenuService);
    public themeService = inject(ThemeService);
    public scrollService = inject(ScrollService);
}
