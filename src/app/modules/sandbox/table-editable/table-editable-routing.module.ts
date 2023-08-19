import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableEditableComponent } from './table-editable.component';

const routes: Routes = [
    {
        path: '',
        component: TableEditableComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TableEditableRoutingModule {}
