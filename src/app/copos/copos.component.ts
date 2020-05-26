import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as coposData from '../../assets/database/copos.json';
import { IProduct } from '../model/product.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-copos',
  templateUrl: './copos.component.html',
  styleUrls: ['./copos.component.css']
})
export class CoposComponent implements OnInit {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  copos : any;

  ngOnInit() {
    this.spinner.show();
    this.copos = coposData.copo;
  }

  ngAfterViewInit() {
    this.spinner.hide();
  }

  showProductInformation(productId: string, productType: string) {
    this.router.navigate(['produto-info'], { queryParams: { 'productType': productType, 'productId': productId }});
  }

}
