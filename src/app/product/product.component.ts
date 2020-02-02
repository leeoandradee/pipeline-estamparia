import { Component, OnInit } from '@angular/core';
import * as products from '../../assets/database/home-products.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsHome;

  constructor(
    private router: Router,
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
          console.log(product.name);
      });
    }
    
    //this.router.navigate(['produtos']);
    //console.log(productName);
  }

}
