import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductInformationComponent },
  { path: 'produto', component: ProductInformationComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
