import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
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

  ngOnInit() {
    console.log(this.productsService.getData());
  }

}
