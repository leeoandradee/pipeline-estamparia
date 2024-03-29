import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductInformationComponent } from "./product-information/product-information.component";
import { HomeComponent } from "./home/home.component";
import { CamisetasComponent } from "./camisetas/camisetas.component";
import { CoposComponent } from "./copos/copos.component";
import { ErrorComponent } from "./error/error.component";
import { ServicePageComponent } from "./service-page/service-page.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "produto-info", component: ProductInformationComponent },
  { path: "camisetas", component: CamisetasComponent },
  { path: "copos", component: CoposComponent },
  { path: "servicos", component: ServicePageComponent },
  { path: "sobre", component: AboutComponent },
  { path: "erro", component: ErrorComponent },
  { path: "*", component: ErrorComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
})
export class AppRoutingModule {}
