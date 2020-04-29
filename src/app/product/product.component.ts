import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/product-service/products.service.js';
import { IProduct } from '../model/product.model.js';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  SlideOptions = { 
    items: 1, 
    dots: true, 
    nav: true, 
    responsiveClass:true,  
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
    }
  };

  @Input("context") context : string;

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  products: any;

  ngOnInit() {
    this.products = this.productsService.getHomeProducts();
    this.products = this.products.default;
    switch (this.context) {
      case "camisetas":
        this.products = this.products.camisetas;
        break;
      case "copos":
        this.products = this.products.copos;
        break;
      default:
        break;
    }
  
  }

  showProductInformation(productId: string, productType: string) {
    console.log('Tipo produto: ' + productType);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/produto-info'], { queryParams: { 'productType': productType, 'productId': productId }}));
  }



}
