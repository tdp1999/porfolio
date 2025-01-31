import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const ACTIVE_SECTION = new InjectionToken<Observable<string>>('ACTIVE_SECTION');
