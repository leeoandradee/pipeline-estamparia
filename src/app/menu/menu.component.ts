import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  isOpen = false;

  ngOnInit() {
  }

  openMobileMenu() {
    const menuList = document.getElementById('menu-list');
    if (this.isOpen) {
      menuList.style.display = 'none';
      this.isOpen = false;
    } else {
      menuList.style.display = 'flex';
      menuList.style.transitionDelay = '2s';
      this.isOpen = true;
    }
    
    
  }

}
