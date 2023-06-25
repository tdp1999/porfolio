import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        data: {
            lang: 'en',
        },
    },
    {
        path: 'vn',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        data: {
            lang: 'vn',
        },
    },
    {
        path: '**',
        loadChildren: () =>
            import('./modules/p404/p404.module').then((m) => m.P404Module),
        data: {
            noAnchor: true,
        },
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 64],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
