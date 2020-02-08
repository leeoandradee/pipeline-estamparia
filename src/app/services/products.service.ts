import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { 
  }

  private data: any;

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }
}
