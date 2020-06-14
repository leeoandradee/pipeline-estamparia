import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product-service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copos-home',
  templateUrl: './copos-home.component.html',
  styleUrls: ['./copos-home.component.css']
})
export class CoposHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  copos : any;

  ngOnInit() {
    this.copos = this.productsService.getHomeProducts();
    this.copos = this.copos.default.copos ;
  }

  showProductInformation(productId: string, productType: string) {
    this.router.navigate(['produto-info'], { queryParams: { 'productType': productType, 'productId': productId }});
  }

  redirectCopos() {
    this.router.navigate(['copos']);
  }

}
