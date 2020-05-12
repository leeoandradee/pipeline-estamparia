import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() copoDetail = new EventEmitter<{typeColor: string, color: string, amount: number}>();

  SlideOptionsShirt = { 
    items: 1, 
    dots: true, 
    nav: false,
  };

  copoForm = new FormGroup({
    cor: new FormControl([null,'',
      Validators.required]),
    tipoCor: new FormControl('',[
      Validators.required])
  });

  typeColorSelected : "";
  colors : string[];
  amount : number;

  ngOnInit() {
    console.log(this.copo);
    this.colors = this.copo.cores.degrade;
  }

  getColorTypeSelected(typeColorSelected) {
    console.log("Cor selecionada: " + typeColorSelected);
    this.typeColorSelected = typeColorSelected;

    switch (this.typeColorSelected.toUpperCase()) {
      case "DEGRADE":
        this.colors = this.copo.cores.degrade;
      break;
      case "LEITOSAS":
        this.colors = this.copo.cores.leitosas;
        break;
      case "METALICA":
        this.colors = this.copo.cores.metalica;
        break;
      case "NEON":
        this.colors = this.copo.cores.neon;
       break;
      case "TRANSLUCIDA":
        this.colors = this.copo.cores.translucida;
        break;
      default:
        this.colors = this.copo.cores.degrade;
        break;
    }
  }

  get cor() {
    return this.copoForm.get('cor')
  }

  get tipoCor() {
    return this.copoForm.get('tipoCor')
  }

  onSelectedAmount(selectedAmount : {selectedAmount: number}) {
    this.amount = selectedAmount.selectedAmount;
  }

  checkout() {
    console.log('foi')
    this.copoDetail.emit({amount: this.amount, color: this.cor.value, typeColor: this.tipoCor.value});
  }

}
