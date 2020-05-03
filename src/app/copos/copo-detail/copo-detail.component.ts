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
  @Output() copoFormValidated = new EventEmitter<{formIsValid: boolean}>();

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
  amount : number = 10;
  isMinimun : boolean = true;

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
    this.verifyCopoForm();
  }

  get cor() {
    return this.copoForm.get('cor')
  }

  get tipoCor() {
    return this.copoForm.get('tipoCor')
  }

  verifyCopoForm() {
    console.log("TIPO COR: " + this.tipoCor.value);
    console.log("COR: " + this.cor.invalid);
    if (this.cor.invalid && this.tipoCor.invalid) {
      this.copoFormValidated.emit({formIsValid: false});
      return false;
    } else {
      this.copoFormValidated.emit({formIsValid: true});
      return true;
    }
  }

  addUnity() {
    this.amount++;
  }

  removeUnity() {
    if(this.amount !== 10) {
      this.amount--;
      this.isMinimun = false;
    } else {
      this.isMinimun = true;
    }
  }

}
