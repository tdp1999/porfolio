import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [RouterModule, FontAwesomeModule];

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, ...components],
    exports: [NavbarComponent],
})
export class NavbarModule {}
