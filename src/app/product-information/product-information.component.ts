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



  
   

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
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

  onValidatedForm(formIsValid : {formIsValid: boolean}) {
    console.log(formIsValid)
    if (formIsValid.formIsValid) {
      this.formIsValid = true;
    } else {
      this.formIsValid = false;
    }
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
    var checkout = {
      "client": {
        "name" : this.name.value,
        "lastName" : this.lastName.value,
        "email" : this.email.value,
        "celphone" : this.phone.value,
        "cep" : this.cep.value,
        "notes" : this.notes.value,
      },
      "product": {
        "id" : this.product.id,
        "name" : this.product.nome,
        "style" : this.product.modelo,
        //"size" : this.tamanho.value,
        //"color" : this.cor.value,
        "quantity" : this.amount.toString()
      }
    }

    console.log(checkout);
    var response =  this.checkoutService.checkout(checkout);
    console.log(response);
    this.isLoadingModal = false;
    setTimeout(() => {
      (document.querySelector('.close') as HTMLElement).click();
      (document.querySelector('#button-confirm') as HTMLElement).click();
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
