import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product-service/products.service';

@Component({
  selector: 'app-camiseta-home',
  templateUrl: './camiseta-home.component.html',
  styleUrls: ['./camiseta-home.component.css']
})
export class CamisetaHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private productsService: ProductsService,
  ) { }

  camisetas : any;

  ngOnInit() {
    this.camisetas = this.productsService.getHomeProducts();
    this.camisetas = this.camisetas.default.camisetas ;
  }

  showProductInformation(productId: string, productType: string) {
    this.router.navigate(['produto-info'], { queryParams: { 'productType': productType, 'productId': productId }});
  }

  redirectCamisetas() {
    this.router.navigate(['camisetas']);
  }

}
