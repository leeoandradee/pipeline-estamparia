import { Component, OnInit } from '@angular/core';
import * as products from '../../assets/database/home-products.json';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service.js';


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

  ngOnInit() {
    this.productsHome = products.home;
  }

  showProduct(productId: string, productType: string) {
    console.log(productId);
    var productListFile = JSON.stringify(products);
    var productList = JSON.parse(productListFile);
    if (productList.default[productType] !== undefined) {
      productList.default[productType].forEach(product => {
        if (productId == product.id)
        console.log(product);
        this.productsService.setData(product);
      });
    }
    
    this.router.navigate(['produto']);
    //console.log(productName);
  }

}
