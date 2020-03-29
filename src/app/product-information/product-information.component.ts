import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product-service/products.service';
import { IProduct } from '../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit {

  states = ['Acre (AC)', 'Alagoas (AL)','Amapá (AP)','Amazonas (AM)','Bahia (BA)','Ceará (CE)',
  'Distrito Federal (DF)','Espírito Santo (ES)','Goiás (GO)','Maranhão (MA)','Mato Grosso (MT)','Mato Grosso do Sul (MS)'
  ,'Minas Gerais (MG)','Pará (PA)','Paraíba (PB)','Paraná (PR)','Pernambuco (PE)','Piauí (PI)','Rio de Janeiro (RJ)'
  ,'Rio Grande do Norte (RN)','Rio Grande do Sul (RS)','Rondônia (RO)','Roraima (RR)'
  ,'Santa Catarina (SC)','São Paulo (SP)','Sergipe (SE)','Tocantins (TO)' ]
  closeResult = '';
  orderObj: any;
  productType: string;
  productId: string;
  product: IProduct;
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
    cellphone: new FormControl('',[
      Validators.required]),
    cep: new FormControl('',[
      Validators.required]),
    notes: new FormControl('',[
      Validators.required]),
    });  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.spinner.show();
    window.scrollTo(0,0);
    this.getParams();
    if(this.paramsIsOk()) {
      this.product = this.productsService.getProductByTypeAndId(this.productType, this.productId);
      console.log(this.product)
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


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

  get cellphone() {
    return this.budgetForm.get('cellphone')
  }

  get cep() {
    return this.budgetForm.get('cep')
  }
  
  get notes() {
    return this.budgetForm.get('notes')
  }

}
