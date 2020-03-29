import { Injectable } from '@angular/core';
import { IProduct } from '../../model/product.model';
import * as productsHome from '../../../assets/database/home-products.json';
import * as camisetas from '../../../assets/database/camisetas.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data = {
    id : "",
    nome : "",
    modelo : "",
    tamanhos : "",
    tecido : "",
    sexo : "",
    cores : "",
    imagens : [""],
  };

  constructor(){

  };

  getHomeProducts() {
    console.log('Getting Home Products:');
    return productsHome;
  }

  getProductByTypeAndId(productType, productId): IProduct {
    switch(productType) {
      case 'camisetas':
        return this.getCamisetaById(productId);
      default:
        return null;
    }
  }

  getCamisetaById(productId): IProduct {
    let camisetaAux: IProduct;
    console.log(camisetas.camiseta);
    camisetas.camiseta.forEach(camiseta => {
      if (camiseta.id === productId) {
        console.log(camiseta);
        camisetaAux = camiseta;
        return;
      }
    });
    return camisetaAux;
  }
}
