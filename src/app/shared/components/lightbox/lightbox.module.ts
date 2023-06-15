import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LightboxComponent } from './lightbox.component';

@NgModule({
    declarations: [LightboxComponent],
    imports: [CommonModule],
    exports: [LightboxComponent],
})
export class LightboxModule {}
