import { Component, OnInit, Input } from '@angular/core';
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

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
  };

  productForm = new FormGroup({
    cor: new FormControl('',[
      Validators.required]),
    tamanho: new FormControl('',[
      Validators.required]),
  });

  ngOnInit() {
    console.log(this.camiseta)
  }

  get cor() {
    return this.productForm.get('cor')
  }

  get tamanho() {
    return this.productForm.get('tamanho')
  }

}
