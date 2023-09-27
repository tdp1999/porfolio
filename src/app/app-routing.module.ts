import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        // path: 'home',
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
        data: {
            lang: 'en',
        },
    },
    // {
    //     path: 'vn',
    //     loadChildren: () =>
    //         import('./modules/home/home.module').then((m) => m.HomeModule),
    //     data: {
    //         lang: 'vn',
    //     },
    // },
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'home',
    // },
    {
        path: 'sandbox',
        loadChildren: () =>
            import('./modules/sandbox/sandbox.module').then(
                (m) => m.SandboxModule
            ),
    },
    {
        path: 'not-found',
        loadChildren: () =>
            import('./modules/p404/p404.module').then((m) => m.P404Module),
        data: {
            noAnchor: true,
        },
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 64],
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
