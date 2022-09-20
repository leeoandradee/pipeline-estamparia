import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductInformationComponent } from "./product-information/product-information.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProductsService } from "./services/product-service/products.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CamisetasComponent } from "./camisetas/camisetas.component";
import { CoposComponent } from "./copos/copos.component";
import { ErrorComponent } from "./error/error.component";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskModule } from "ngx-mask";
import { IConfig } from "ngx-mask";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { OwlModule } from "ngx-owl-carousel";
import { CopoDetailComponent } from "./copos/copo-detail/copo-detail.component";
import { CamisetaDetailComponent } from "./camisetas/camiseta-detail/camiseta-detail.component";
import { ProductOfferComponent } from "./product-offer/product-offer.component";
import { CamisetaOfferComponent } from "./product-offer/camiseta-offer/camiseta-offer.component";
import { CopoOfferComponent } from "./product-offer/copo-offer/copo-offer.component";
import { AmountComponent } from "./amount/amount.component";
import { SidebarModule } from "ng-sidebar";
import { CheckoutService } from "./services/checkout-service/checkout-service.service";
import { CamisetaHomeComponent } from "./camisetas/camiseta-home/camiseta-home.component";
import { CoposHomeComponent } from "./copos/copos-home/copos-home.component";
import { ServicePageComponent } from "./service-page/service-page.component";
import { AboutComponent } from "./about/about.component";

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ProductInformationComponent,
    HomeComponent,
    CamisetasComponent,
    CoposComponent,
    ErrorComponent,
    CopoDetailComponent,
    CamisetaDetailComponent,
    ProductOfferComponent,
    CamisetaOfferComponent,
    CopoOfferComponent,
    AmountComponent,
    CamisetaHomeComponent,
    CoposHomeComponent,
    ServicePageComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule,
    OwlModule,
    SidebarModule.forRoot(),
  ],
  providers: [ProductsService, CheckoutService, NgxSpinnerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements OnInit {
  ngOnInit() {}
}
