import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  @Input("minimunAmount") minimunAmount : number;
  @Output("selectedAmount") selectedAmount = new EventEmitter<{selectedAmount: number}>();

  constructor() { }

  amount : number;
  isMinimun : boolean = true;

  ngOnInit() {
    this.amount = this.minimunAmount;
    this.selectedAmount.emit({selectedAmount: this.amount});
  }

  addUnity() {
    this.amount++;
    this.selectedAmount.emit({selectedAmount: this.amount});
  }

  removeUnity() {
    if(this.amount !== this.minimunAmount) {
      this.amount--;
      this.isMinimun = false;
    } else {
      this.isMinimun = true;
    }
    this.selectedAmount.emit({selectedAmount: this.amount});
  }

}
