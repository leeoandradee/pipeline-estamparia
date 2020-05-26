import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-camiseta-offer',
  templateUrl: './camiseta-offer.component.html',
  styleUrls: ['./camiseta-offer.component.css']
})
export class CamisetaOfferComponent implements OnInit {

  constructor() { }

  @Input("camisetas") camisetas : IProduct[];
  @Output() camisetaInformation = new EventEmitter<{productId: string, productType: string}>();

  SlideOptions = { 
    items: 1, 
    dots: true, 
    nav: true, 
    responsiveClass:true,
    responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
    }
  };

  ngOnInit() {
  }

  getProductInformation(productId: string, productType: string) {
    this.camisetaInformation.emit({productId: productId, productType: productType})
  }

}
