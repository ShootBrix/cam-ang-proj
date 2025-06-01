import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './product/product';
import { Details } from './details/details';

export const routes: Routes = [
  { path: '', component: Product },
  { path: 'Product Details', component: Details },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), Product, Details],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routes: Routes = [];
