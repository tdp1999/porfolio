import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContactFormData } from '../interfaces/contact-form.interface';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NetlifyService {
    private _http = inject(HttpClient);

    submitForm(payload: ContactFormData): Observable<string> {
        const entry = new HttpParams({
            fromObject: {
                'form-name': 'contactForm',
                ...payload,
            },
        });

        return this._http
            .post<string>('/', entry.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                responseType: 'text' as 'json',
            })
            .pipe(
                catchError((err) => {
                    throw err;
                })
            );
    }
}
