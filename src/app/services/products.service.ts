import { Injectable } from '@angular/core';
import { IProduct } from '../shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data = {
    id : "",
    name : "",
    image : "",
    description : "",
    type : "",
  };

  constructor(){

  };

  getData() {
    console.log(this.data)
    return this.data;
  }

  setData(data: IProduct) {
    this.data = data;
  }
}
