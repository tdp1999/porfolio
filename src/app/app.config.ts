import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
    provideRouter,
    withComponentInputBinding,
    withEnabledBlockingInitialNavigation,
    withInMemoryScrolling,
    withRouterConfig,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from './app.route';
import { DEFAULT_TOKENS, MATERIAL_CONFIGURATIONS } from './app.token';
import { FooterModule } from './shared/components/footer/footer.module';
import { HeaderModule } from './shared/components/header/header.module';
import { NavListModule } from './shared/components/nav-list/nav-list.module';
import { TranslocoRootModule } from './transloco-root.module';

const components = [HeaderModule, FooterModule, FontAwesomeModule, MatSidenavModule, MatDividerModule, MatButtonModule, NavListModule];

export const appConfig = {
    providers: [
        provideRouter(
            routes,
            withComponentInputBinding(),
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            withRouterConfig({ onSameUrlNavigation: 'reload' }),
            withEnabledBlockingInitialNavigation()
        ),
        importProvidersFrom(TranslocoRootModule, ...components),
        ...MATERIAL_CONFIGURATIONS,
        ...DEFAULT_TOKENS,
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi(), withFetch()),
        provideAnimations(),
    ],
};
