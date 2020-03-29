import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as camisetasData from '../../assets/database/camisetas.json';
import { IProduct } from '../model/product.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  camisetas : any;

  ngOnInit() {
    this.spinner.show();
    this.camisetas = camisetasData.camiseta;
  }

  ngAfterViewInit() {
    this.spinner.hide();
  }

  showProductInformation(productId: string, productType: string) {
    console.log('entrou');
    this.router.navigate(['produto-info'], { queryParams: { 'productType': productType, 'productId': productId }});
  }

}
