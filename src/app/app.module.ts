import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    FaIconLibrary,
    FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
    faLinkedin,
    faSkype,
    faSquareFacebook,
    faSquareGithub,
    faSquareTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
    faAnglesDown,
    faBars,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faCircleCheck as faCircleCheckSolid,
    faCircle as faCircleSolid,
    faClose,
    faCoffee,
    faEarthAsia,
    faEnvelope,
    faLocationDot,
    faMoon,
    faPhone,
    faSun,
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MATERIAL_CONFIGURATIONS } from './app.token';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { TranslocoRootModule } from './transloco-root.module';

const components = [
    NavbarModule,
    FooterModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatListModule,
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,
        ...components,
    ],
    providers: [...MATERIAL_CONFIGURATIONS],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(public faLibrary: FaIconLibrary) {
        faLibrary.addIcons(
            faLinkedin,
            faSkype,
            faSquareFacebook,
            faSquareGithub,
            faSquareTwitter,
            faClose,
            faMoon,
            faSun,
            faCoffee,
            faChevronDown,
            faChevronUp,
            faChevronLeft,
            faChevronRight,
            faCircleSolid,
            faCircle,
            faCircleCheck,
            faCircleCheckSolid,
            faEarthAsia,
            faPhone,
            faEnvelope,
            faLocationDot,
            faBars,
            faAnglesDown
        );
    }
}
