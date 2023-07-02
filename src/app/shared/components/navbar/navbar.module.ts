import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavListModule } from '../nav-list/nav-list.module';

const components = [RouterModule, FontAwesomeModule, NavListModule];

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, ...components],
    exports: [NavbarComponent],
})
export class NavbarModule {}
