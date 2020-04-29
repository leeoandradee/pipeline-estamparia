import { Component, OnInit, Input } from '@angular/core';
import { ICopo } from 'src/app/model/copo.model';

@Component({
  selector: 'app-copo-offer',
  templateUrl: './copo-offer.component.html',
  styleUrls: ['./copo-offer.component.css']
})
export class CopoOfferComponent implements OnInit {

  constructor() { }

  @Input("copos") copos : ICopo[];

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
    console.log(this.copos);
  }

}
