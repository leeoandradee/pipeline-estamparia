import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  bannerImages = ["https://cdn.camisapersonalizadas.com.br/images/banner-camiseta.jpg", "https://cdn.camisapersonalizadas.com.br/images/banner-canecas.jpg"];

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.spinner.show();
  }

  ngAfterViewInit() {
    this.spinner.hide();
  }

}
