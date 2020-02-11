import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../shared/model/product.model';
//import { products } from '../../assets/database/home-products.json';


@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  product: IProduct;

  ngOnInit() {
    window.scrollTo(0,0);
    this.product = this.productsService.getData();
  }

}
