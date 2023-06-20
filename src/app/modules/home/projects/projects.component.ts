import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    private _dialog = inject(MatDialog);

    ngOnInit(): void {}

    handleLinkClicked(item: any) {
        this._dialog.open(CarouselComponent, {
            data: {
                test: 'hello world',
            },
        });
    }
}
