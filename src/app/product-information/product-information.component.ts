import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  orderObj: any;
  productType: string;
  productId: string;
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    window.scrollTo(0,0);
    this.getParams();
    if(this.paramsIsOk()) {
      this.product = this.productsService.getProductByTypeAndId(this.productType, this.productId);
      console.log(this.product)
      if(this.product === null) {
        console.log('erro')
      }
    } else {
      console.log('erro')
    }
  }

  getParams() {
    this.route.queryParamMap.subscribe(params => {
      this.orderObj = {...params.keys, ...params};
    });
    this.productType = this.orderObj.params.productType;
    this.productId = this.orderObj.params.productId;
  }

  paramsIsOk() {
    if(this.productType !== undefined && this.productId !== undefined && this.productType !== null && this.productId !== null) {
      return true;
    }
    return false;
  }
}
