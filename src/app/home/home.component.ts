import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

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
