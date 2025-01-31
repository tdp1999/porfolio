import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { MENU_DATA } from '../../data/menu.data';
import { MenuService } from '../../services/menu.service';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { RouterLink } from '@angular/router';
import { NavListComponent } from '../nav-list/nav-list.component';
import { AsyncPipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    imports: [RouterLink, NavListComponent, FontAwesomeModule, AsyncPipe],
})
export class HeaderComponent {
    readonly headerRef = viewChild.required<ElementRef>('header');

    public items = MENU_DATA;
    public menuService = inject(MenuService);
    public themeService = inject(ThemeService);
    public scrollService = inject(ScrollService);
}
