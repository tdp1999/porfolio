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
        loadComponent: () => import('./modules/sandbox/sandbox.component').then((m) => m.SandboxComponent),
    },
    {
        path: 'not-found',
        loadComponent: () => import('./modules/p404/p404.component').then((m) => m.P404Component),
        data: {
            noAnchor: true,
        },
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];
