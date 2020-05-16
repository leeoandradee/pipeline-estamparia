import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../model/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/sendmail';

  checkout (checkoutData) {
    return this.http.post(this.url, checkoutData)
    .pipe(
      map(data => JSON.stringify(data)),
      catchError((error) => {
        return Observable.throw(error);
      })
    );
  }
}