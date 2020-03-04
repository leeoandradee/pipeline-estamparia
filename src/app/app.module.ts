import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { ProductsService } from './services/products.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CoposComponent } from './copos/copos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductComponent,
    FooterComponent,
    ProductInformationComponent,
    HomeComponent,
    PaymentOptionComponent,
    CamisetasComponent,
    CoposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit { 

  ngOnInit() {
  }

}


