import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/product-service/products.service';
import { IProduct } from '../model/product.model';
import { ICopo } from '../model/copo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.css']
})
export class ProductOfferComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) { }

  @Input("context") context : string;
  
  products: any;
  camisetas: IProduct[];
  copos: ICopo[];

  ngOnInit() {
    console.log(this.context);
    this.products = this.productsService.getHomeProducts();
    this.products = this.products.default;
    switch (this.context) {
      case "camisetas":
        this.camisetas = this.products.camisetas;
        break;
      case "copos":
        this.copos = this.products.copos;
        break;
      default:
        this.camisetas = this.products.camisetas;
        this.copos = this.products.copos;
        break;
    }
  }

  showProductInformation(productInformation: {productId: string, productType: string}) {
    console.log('Tipo produto: ' + productInformation.productType);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/produto-info'], { queryParams: { 'productType': productInformation.productType, 'productId': productInformation.productId }}));
  }

}
