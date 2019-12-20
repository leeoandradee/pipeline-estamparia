import { Component, OnInit } from '@angular/core';
import { products } from '../../assets/database/home-products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsHome;

  constructor() { }

  

  ngOnInit() {
    this.productsHome = products;
  }

}
