import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import { ExpandableTextModule } from '../../shared/directives/expandable-text/expandable-text.module';

@NgModule({
    declarations: [SandboxComponent],
    imports: [CommonModule, SandboxRoutingModule, ExpandableTextModule],
})
export class SandboxModule {}
