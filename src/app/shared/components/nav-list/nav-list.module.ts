import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './nav-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

const components = [
    RouterModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    declarations: [NavListComponent],
    imports: [CommonModule, ...components],
    exports: [NavListComponent],
})
export class NavListModule {}
