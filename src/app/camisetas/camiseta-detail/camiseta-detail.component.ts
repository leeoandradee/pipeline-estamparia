import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../model/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-camiseta-detail',
  templateUrl: './camiseta-detail.component.html',
  styleUrls: ['./camiseta-detail.component.css']
})
export class CamisetaDetailComponent implements OnInit {

  constructor() { }

  @Input("camiseta") camiseta: IProduct;
  @Output() camisetaDetail = new EventEmitter<{color: string, amount: number, size: number, colorQuantity: number}>();

  corIsValid : boolean;
  tamanhoIsValid : boolean;

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
    responsiveClass:true,  
  };

  camisetaForm = new FormGroup({
    cor: new FormControl('',[
      Validators.required]),
    tamanho: new FormControl('',[
      Validators.required]),
    coresGravacao: new FormControl('',[
      Validators.required]),
  });

  amount : number;

  ngOnInit() {
    this.camisetaForm.touched
  }

  get cor() {
    return this.camisetaForm.get('cor')
  }

  get tamanho() {
    return this.camisetaForm.get('tamanho')
  }

  get coresGravacao() {
    return this.camisetaForm.get('coresGravacao')
  }

  onSelectedAmount(selectedAmount : {selectedAmount: number}) {
    this.amount = selectedAmount.selectedAmount;
  }

  checkout() {
    this.camisetaDetail.emit({color: this.cor.value, amount: this.amount, size: this.tamanho.value, colorQuantity: this.coresGravacao.value})
  }

}
