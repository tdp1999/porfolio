import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

const components = [MatMenuModule, FontAwesomeModule, RouterModule];

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, ...components],
    exports: [FooterComponent],
})
export class FooterModule {}
