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

  @Output() camisetaFormValidated = new EventEmitter<{formIsValid: boolean}>();

  @Input("camiseta") camiseta: IProduct;

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
  });

  ngOnInit() {
    console.log(this.camiseta)
    this.camisetaForm.touched
  }

  get cor() {
    return this.camisetaForm.get('cor')
  }

  get tamanho() {
    return this.camisetaForm.get('tamanho')
  }

  verifyCamisetaForm() {
    console.log("validando form");
    if (this.tamanho.invalid || this.cor.invalid) {
      this.camisetaFormValidated.emit({formIsValid: false});
      return false;
    } else {
      this.camisetaFormValidated.emit({formIsValid: true});
      return true;
    }
  }


}
