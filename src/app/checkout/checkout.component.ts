import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
  ) { }

  

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

    closeResult = '';
    isLoadingModal = false;

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'orçamento do pedido'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  checkout() {
    this.isLoadingModal = true;
    (document.querySelector('#confirm-span') as HTMLElement).style.display = 'none';
    (document.querySelector('#spinner-span') as HTMLElement).style.display = 'block';
    /* var checkout = {
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
    } */

    /* console.log(checkout);
    var response =  this.checkoutService.checkout(checkout);
    console.log(response);
    this.isLoadingModal = false;
    setTimeout(() => {
      (document.querySelector('.close') as HTMLElement).click();
      (document.querySelector('#button-confirm') as HTMLElement).click();
    }, 3000); */
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

  openConfirmCheckoutModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
