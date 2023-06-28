import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private _menuState = new Subject<void>();
    public menuState$ = this._menuState.asObservable();

    toggleMenu(): void {
        this._menuState.next();
    }
}
