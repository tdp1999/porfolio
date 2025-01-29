import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // path: 'home',
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
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
        loadChildren: () => import('./modules/sandbox/sandbox.module').then((m) => m.SandboxModule),
    },
    {
        path: 'not-found',
        loadChildren: () => import('./modules/p404/p404.module').then((m) => m.P404Module),
        data: {
            noAnchor: true,
        },
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
