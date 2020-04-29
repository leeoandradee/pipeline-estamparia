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
    console.log('Getting Home Products:');
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
    console.log(copos);
    camisetas.camiseta.forEach(camiseta => {
      if (camiseta.id === productId) {
        console.log(camiseta);
        camisetaAux = camiseta;
        return;
      }
    });
    return camisetaAux;
  }

  getCopoById(productId): ICopo {
    let copoAux: ICopo;
    copos.copo.forEach(copoI => {
      console.log("COPO é:  " + copoI)
      if (copoI.id === productId) {
        console.log(copoI);
        copoAux = copoI;
        return;
      }
    });
    return copoAux;
  }
}
