import { Component, OnInit } from '@angular/core';
import * as camisetasData from '../../assets/database/camisetas.json';
import { IProduct } from '../model/product.model';

@Component({
  selector: 'app-camisetas',
  templateUrl: './camisetas.component.html',
  styleUrls: ['./camisetas.component.css']
})
export class CamisetasComponent implements OnInit {

  constructor() { }

  camisetas : any;

  ngOnInit() {
    this.camisetas = camisetasData.camiseta;
  }

}
