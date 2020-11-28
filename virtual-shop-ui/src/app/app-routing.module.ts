import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainDisplayProductsComponent } from './main-display-products/main-display-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component'; 

const routes: Routes = [
  { path: 'productDetails', component: ProductDetailsComponent }, 
  { path: 'displayProducts', component: MainDisplayProductsComponent }, 
  { path: '',   redirectTo: '/displayProducts', pathMatch: 'full' }, // redirect to `first-component` 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  /**
   *
   */
  constructor() {
  
  } 
}
