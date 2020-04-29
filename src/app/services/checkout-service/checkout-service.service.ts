import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../../model/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/sendmail';


  checkout (checkoutData) {
    this.http.post(this.url, checkoutData).subscribe(
      (data) => {
        console.log(data);
        return data;
      },
      (error) => {
        console.log(error);
        return error;
      })
  }
}