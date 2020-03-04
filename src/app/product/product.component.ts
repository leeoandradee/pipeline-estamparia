import { Component, OnInit } from '@angular/core';
import * as products from '../../assets/database/home-products.json';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service.js';
import { IProduct } from '../shared/model/product.model.js';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  camisetaProduct;
  canecaProduct;

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  product : IProduct;

  ngOnInit() {
    this.camisetaProduct = products.camiseta;
    this.canecaProduct = products.copo;
  }

  showProduct(productId: string, productType: string) {

    switch(productType) {
      case 'camiseta' :
        this.selectProduct(this.camisetaProduct, productId);
        break;
      case 'caneca' :
          this.selectProduct(this.camisetaProduct, productId);
          break;
    }
    this.productsService.setData(this.product);
    console.log(this.productsService.getData());
    this.router.navigate(['produto']);
  }

  selectProduct (list: Array<IProduct>, productId: string) {
    list.forEach(product => {
      if (productId == product.id) {
        this.product  = {
          id : product.id,
          name : product.name,
          image : product.image,
          description : product.description,
        }
      }
    });
  }

}
