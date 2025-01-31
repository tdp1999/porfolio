import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';

@NgModule({
    imports: [CommonModule, SandboxRoutingModule, SandboxComponent],
})
export class SandboxModule {}
