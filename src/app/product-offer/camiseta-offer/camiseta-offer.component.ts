import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-camiseta-offer',
  templateUrl: './camiseta-offer.component.html',
  styleUrls: ['./camiseta-offer.component.css']
})
export class CamisetaOfferComponent implements OnInit {

  constructor() { }

  @Input("camisetas") camisetas : IProduct[];

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
          items:4,
          nav:true,
          loop:false
      }
    }
  };

  ngOnInit() {
    console.log(this.camisetas);
  }

}
