import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ContactFormData } from '../interfaces/contact-form.interface';
import { Observable, catchError, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class NetlifyService {
    private _http = inject(HttpClient);

    // Original Netlify form submission method (kept for reference)
    // submitForm(payload: ContactFormData): Observable<string> {
    //     const entry = new HttpParams({
    //         fromObject: {
    //             'form-name': 'contactForm',
    //             ...payload,
    //         },
    //     });

    //     return this._http
    //         .post<string>('/', entry.toString(), {
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             responseType: 'text' as 'json',
    //         })
    //         .pipe(
    //             catchError((err) => {
    //                 throw err;
    //             }),
    //         );
    // }

    // New Cloudflare function submission method
    submitForm(payload: ContactFormData): Observable<{ success: boolean; message: string }> {
        const formData = new FormData();
        formData.append('name', payload.name);
        formData.append('email', payload.email);
        formData.append('company', payload.company || '');
        formData.append('message', payload.message);

        // Use environment variable for Cloudflare function URL
        const cloudflareFunctionUrl = environment.cloudflareFunctionUrl;

        return this._http.post<{ success: boolean; message: string }>(cloudflareFunctionUrl, formData).pipe(
            catchError((err) => {
                console.error('Error submitting form to Cloudflare function:', err);
                throw err;
            }),
        );
    }
}
