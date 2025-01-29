import { Component, OnInit, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.scss'],
    imports: [FontAwesomeModule]
})
export class ScrollToTopComponent {
    private _scrollService = inject(ScrollService);

    scrollToTop() {
        this._scrollService.scrollToTop();
    }
}
