import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product-service/products.service';
import { IProduct } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CheckoutService } from '../services/checkout-service/checkout-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';




@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  closeResult = '';
  orderObj: any;
  productType: string;
  productId: string;
  product: any;
  amount : number = 10;
  isMinimun : boolean = true;
  isLoadingModal = false;

  max_size = 20971520;
  allowed_types = ['image/png', 'image/jpeg'];
  max_height = 15200;
  max_width = 25600;
  imgBase64Path : any;

  imageError : string;

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
  };


  
   

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.getParams();
    if(this.paramsIsOk()) {
      this.product = this.getProductByTypeAndId(this.productType, this.productId);
      console.log(this.product);
      if(this.product === null) {
        console.log('erro')
        this.router.navigate(['erro']);
      }
    } else {
      console.log('erro')
      this.router.navigate(['erro']);
    }
      this.spinner.hide();
  }

  getProductByTypeAndId(productType, productId): any {
    switch(productType) {
      case 'camisetas':
        return this.productsService.getCamisetaById(productId);
      case 'copos':
        return this.productsService.getCopoById(productId);
      default:
        return null;
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

  

  addUnity() {
    this.amount++;
  }

  removeUnity() {
    if(this.amount !== 10) {
      this.amount--;
      this.isMinimun = false;
    } else {
      this.isMinimun = true;
    }
  }

  

}
