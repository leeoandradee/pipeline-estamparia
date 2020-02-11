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

  productsHome;

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  product : IProduct;

  ngOnInit() {
    this.productsHome = products.home;
  }

  showProduct(productId: string, productType: string) {
    var productListFile = JSON.stringify(products);
    var productList = JSON.parse(productListFile);
    if (productList.default[productType] !== undefined) {
      productList.default[productType].forEach(product => {
        if (productId == product.id) {
          this.product  = {
            id : product.id,
            name : product.name,
            image : product.image,
            description : product.description,
            type : product.type
          }
          this.productsService.setData(this.product);
          console.log(this.productsService.getData());
          this.router.navigate(['produto']);
        }
      });
    }
  }

}
