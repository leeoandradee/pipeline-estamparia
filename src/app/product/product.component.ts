import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service.js';
import { IProduct } from '../model/product.model.js';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  products: any;

  ngOnInit() {
    this.products = this.productsService.getHomeProducts();
    this.products = this.products.default;
    console.log(this.products);
  }

  showProductInformation(productId: string, productType: string) {
    console.log('entrou');
    this.router.navigate(['produto-info'], { queryParams: { 'productType': productType, 'productId': productId }});
  }

}
