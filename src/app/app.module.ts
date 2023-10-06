import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    FaIconLibrary,
    FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
    faGitAlt,
    faLinkedin,
    faNodeJs,
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
    faCircleInfo,
    faCircle as faCircleSolid,
    faClose,
    faCoffee,
    faEarthAsia,
    faEnvelope,
    faLocationDot,
    faMoon,
    faPhone,
    faSun,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DEFAULT_TOKENS, MATERIAL_CONFIGURATIONS } from './app.token';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavListModule } from './shared/components/nav-list/nav-list.module';
import { HeaderModule } from './shared/components/header/header.module';
import { TranslocoRootModule } from './transloco-root.module';

const components = [
    HeaderModule,
    FooterModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    NavListModule,
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,
        ...components,
    ],
    providers: [
        ...MATERIAL_CONFIGURATIONS,
        ...DEFAULT_TOKENS,
        provideClientHydration()
    ],
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
            faAnglesDown,
            faGitAlt,
            faNodeJs,
            faXmark,
            faCircleInfo
        );
    }
}
