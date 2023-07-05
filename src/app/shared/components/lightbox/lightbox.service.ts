import {
    Injectable,
    OnDestroy,
    TemplateRef,
    ViewContainerRef,
    inject,
} from '@angular/core';
import { LightboxModule } from './lightbox.module';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { takeUntil, Subject } from 'rxjs';

@Injectable({
    providedIn: LightboxModule,
})
export class LightboxService implements OnDestroy {
    private _overlay = inject(Overlay);
    private _viewContainerRef = inject(ViewContainerRef);

    private _overlayRef: OverlayRef | null = null;
    private _unsubscribeAll = new Subject<void>();

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    get overlayRef(): OverlayRef | null {
        return this._overlayRef;
    }

    open(templateRef: TemplateRef<any>) {
        const overlayConfig: OverlayConfig = {
            hasBackdrop: true,
            backdropClass: 'lightbox__bg--black',
            // panelClass: 'pointer-events-none',
            disposeOnNavigation: true,
            positionStrategy: this._overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this._overlay.scrollStrategies.close(),
        };

        // Create overlay ref, which is a Portal with configs
        this._overlayRef = this._overlay.create(overlayConfig);

        const templatePortal = new TemplatePortal(
            templateRef,
            this._viewContainerRef
        );
        this._overlayRef.attach(templatePortal);

        this._overlayRef
            .backdropClick()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._overlayRef?.dispose();
            });
    }

    close() {
        this._overlayRef?.dispose();
    }
}
