import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PaymentOptionComponent } from './payment-option/payment-option.component';
import { ProductsService } from './services/product-service/products.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CoposComponent } from './copos/copos.component';
import { ErrorComponent } from './error/error.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}

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
    CoposComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements OnInit { 

  ngOnInit() {
  }

}


