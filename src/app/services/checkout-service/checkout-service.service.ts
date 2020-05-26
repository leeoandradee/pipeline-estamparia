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

  url = 'https://pipeline-estamparia-api.herokuapp.com';

  copoCheckout (checkoutData) {
    return this.http.post(this.url + '/orcamento/copo', checkoutData)
    .pipe(
      map(data => JSON.stringify(data)),
      catchError((error) => {
        return Observable.throw(error);
      })
    );
  }

  camisetaCheckout (checkoutData) {
    return this.http.post(this.url + '/orcamento/camiseta', checkoutData)
    .pipe(
      map(data => JSON.stringify(data)),
      catchError((error) => {
        return Observable.throw(error);
      })
    );
  }
}