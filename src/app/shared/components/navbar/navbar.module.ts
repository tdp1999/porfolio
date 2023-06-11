import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

const components = [RouterModule];

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, ...components],
    exports: [NavbarComponent],
})
export class NavbarModule {}
