import { Component, OnInit, Input } from '@angular/core';
import { ICopo } from 'src/app/model/copo.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-copo-detail',
  templateUrl: './copo-detail.component.html',
  styleUrls: ['./copo-detail.component.css']
})
export class CopoDetailComponent implements OnInit {

  constructor() { }

  @Input("copo") copo : ICopo;

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
  };

  copoForm = new FormGroup({
    cor: new FormControl('',[
      Validators.required])
  });

  ngOnInit() {
    console.log(this.copo);
  }

}
