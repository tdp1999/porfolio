import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [RouterModule, FontAwesomeModule];

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, ...components],
    exports: [NavbarComponent],
})
export class NavbarModule {}
