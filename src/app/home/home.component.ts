import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  bannerImages = ["assets/images/banner-camiseta.jpg", "assets/images/banner-canecas.jpg"];

  SlideOptions = { 
    items: 1, 
    dots: true, 
    autoplay:true,
    loop:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
  } 


  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
  }

  ngAfterViewInit() {
    this.spinner.hide();
  }

}
