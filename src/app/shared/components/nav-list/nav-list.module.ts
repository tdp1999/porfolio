import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { NavListComponent } from './nav-list.component';

const components = [RouterModule, MatListModule, MatDividerModule, MatButtonModule, MatMenuModule, FontAwesomeModule, TranslocoModule];

@NgModule({
    imports: [CommonModule, ...components, NavListComponent],
    exports: [NavListComponent],
})
export class NavListModule {}
