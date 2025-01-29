import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavListModule } from '../nav-list/nav-list.module';

const components = [RouterModule, FontAwesomeModule, NavListModule];

@NgModule({
    imports: [CommonModule, ...components, HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderModule {}
