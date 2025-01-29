import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P404Component } from './p404.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const route: Routes = [
    {
        path: '',
        component: P404Component,
    },
];

const components = [TranslocoModule];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(route), ...components, P404Component],
})
export class P404Module {}
