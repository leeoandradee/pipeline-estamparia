import { Injectable } from '@angular/core';
import { IProduct } from '../../model/product.model';
import * as productsHome from '../../../assets/database/home-products.json';
import * as camisetas from '../../../assets/database/camisetas.json';
import * as copos from '../../../assets/database/copos.json';
import { ICopo } from 'src/app/model/copo.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data = {
    id : "",
    nome : "",
    modelo : "",
    tamanhos : [""],
    tecido : "",
    sexo : "",
    cores : [""],
    imagens : [""],
  };

  constructor(){

  };

  getHomeProducts() {
    return productsHome;
  }

  getProductByTypeAndId(productType, productId): any {
    switch(productType) {
      case 'camisetas':
        return this.getCamisetaById(productId);
      case 'copos':
        return this.getCopoById(productId);
      default:
        return null;
    }
  }

  getCamisetaById(productId): IProduct {
    let camisetaAux: IProduct;
    camisetas.camiseta.forEach(camiseta => {
      if (camiseta.id === productId) {
        camisetaAux = camiseta;
        return;
      }
    });
    return camisetaAux;
  }

  getCopoById(productId): ICopo {
    let copoAux: ICopo;
    copos.copo.forEach(copoI => {
      if (copoI.id === productId) {
        copoAux = copoI;
        return;
      }
    });
    return copoAux;
  }
}
