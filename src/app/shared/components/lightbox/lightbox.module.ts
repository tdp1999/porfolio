import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightboxComponent } from './lightbox.component';
import { MatDialogModule } from '@angular/material/dialog';

const components = [MatDialogModule];

@NgModule({
    declarations: [LightboxComponent],
    imports: [CommonModule, ...components],
    exports: [LightboxComponent],
})
export class LightboxModule {}
