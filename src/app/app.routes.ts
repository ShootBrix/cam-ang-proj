import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Product } from './product/product';
import { ProductList } from './product-list/product-list';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'product-list', component: ProductList },
  { path: 'product', component: Product },
];
@NgModule({
  imports: [RouterModule.forRoot(routes), Product, ProductList],
  // exports: [RouterModule] //For giveing the app to other applications.
})

export class AppRoutingModule { }

// export const routes: Routes = [];
