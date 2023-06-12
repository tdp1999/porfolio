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
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
            enableTracing: true,
            scrollPositionRestoration: 'enabled',
            scrollOffset: [0, 64],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
