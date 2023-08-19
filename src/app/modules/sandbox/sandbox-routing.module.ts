import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'table-editable',
        loadChildren: () =>
            import('./table-editable/table-editable.module').then(
                (m) => m.TableEditableModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SandboxRoutingModule {}
