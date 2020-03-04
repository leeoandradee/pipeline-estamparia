import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { HomeComponent } from './home/home.component';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CoposComponent } from './copos/copos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produto', component: ProductInformationComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'copos', component: CoposComponent },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
