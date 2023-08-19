import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableEditableRoutingModule } from './table-editable-routing.module';
import { TableEditableComponent } from './table-editable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

const components = [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
];

@NgModule({
    declarations: [TableEditableComponent],
    imports: [CommonModule, TableEditableRoutingModule, ...components],
})
export class TableEditableModule {}
