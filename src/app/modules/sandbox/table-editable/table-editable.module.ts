import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableEditableRoutingModule } from './table-editable-routing.module';
import { TableEditableComponent } from './table-editable.component';
import { TableEditableService } from './table-editable.service';

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
    providers: [TableEditableService],
})
export class TableEditableModule {}
