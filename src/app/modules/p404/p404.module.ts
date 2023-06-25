import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P404Component } from './p404.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    {
        path: '',
        component: P404Component,
    },
];

@NgModule({
    declarations: [P404Component],
    imports: [CommonModule, RouterModule.forChild(route)],
})
export class P404Module {}
