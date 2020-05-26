import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  isOpen = false;
  isMobileMenu = false;
  navbarOpen = false;

  ngOnInit() {

    var x = window.matchMedia("(max-width: 767px)")

    if (x.matches) {
      this.isMobileMenu = true;
    }

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
