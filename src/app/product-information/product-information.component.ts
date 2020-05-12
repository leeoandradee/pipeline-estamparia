import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/product-service/products.service';
import { IProduct } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CheckoutService } from '../services/checkout-service/checkout-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { ICopo } from '../model/copo.model';
import { IOrder } from './product-information-model/product-information-order.model';
import { IClient } from '../model/client.model';
import { ICopoOrder } from './product-information-model/copo.order.model';

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
  amount : number;
  isLoadingModal = false;
  formIsValid : boolean;
  
/*  VARIAVEIS NOVAS  */

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
  };

  budgetForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$')]),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    phone: new FormControl('',[
      Validators.required]),
    cep: new FormControl('',[
      Validators.required]),
    notes: new FormControl('',[]),
    });

    @ViewChild("checkoutModal", {static: false}) checkoutModal: any;
    @ViewChild("confirmModal", {static: false}) confirmModal: any;

    order: IOrder;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.order = new IOrder();
    this.formIsValid = false;
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

  onCopoCheckout(copoDetail:{amount: number, color: string, typeColor: string}) {
    this.order.copo = {
      id : this.product.id,
      name : this.product.name,
      styleColor : copoDetail.typeColor,
      color : copoDetail.color, 
      quantity : copoDetail.amount.toString()
    }
    this.openCheckoutModal(this.checkoutModal);
  }

  onCamisetaCheckout(camisetaDetail:{color: string, amount: number, size: number}) {
    this.order.camiseta = {
      id : this.product.id,
      name : this.product.nome,
      style : this.product.modelo,
      size: camisetaDetail.size.toString(),
      color : camisetaDetail.color, 
      quantity : camisetaDetail.amount.toString()
    }
    this.openCheckoutModal(this.checkoutModal);
  }

  /* MODAL */
  openCheckoutModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'orçamento do pedido'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  openConfirmCheckoutModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

  checkout() {
    this.isLoadingModal = true;
    (document.querySelector('#confirm-span') as HTMLElement).style.display = 'none';
    (document.querySelector('#spinner-span') as HTMLElement).style.display = 'block';
    var client : IClient = {
      name : this.name.value,
      lastName : this.lastName.value,
      email : this.email.value,
      celphone : this.phone.value,
      cep : this.cep.value,
      notes : this.notes.value
    }
    this.order.cliente = client;

    console.log(this.order);

    var response =  this.checkoutService.checkout(this.order);
    console.log(response);
    this.isLoadingModal = false;
    setTimeout(() => {
      (document.querySelector('.close') as HTMLElement).click();
      this.openConfirmCheckoutModal(this.confirmModal);
    }, 3000);
  }

  get name() {
    return this.budgetForm.get('name')
  }

  get lastName() {
    return this.budgetForm.get('lastName')
  }

  get email() {
    return this.budgetForm.get('email')
  }

  get phone() {
    return this.budgetForm.get('phone')
  }

  get cep() {
    return this.budgetForm.get('cep')
  }
  
  get notes() {
    return this.budgetForm.get('notes')
  }
}
