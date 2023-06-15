import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    ViewContainerRef,
    inject,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
    selector: 'app-lightbox',
    templateUrl: './lightbox.component.html',
    styleUrls: ['./lightbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent {}
