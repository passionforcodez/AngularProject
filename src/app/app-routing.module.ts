import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path: 'list',
    title: 'Product Listing',
    component: ItemListComponent
  },
  {
    path: 'detail/:id',
    title: 'Product Detail',
    component: ItemDetailComponent
  },
  {
    path: 'detail',
    title: 'Product Detail',
    component: ItemDetailComponent
  },
  {
    path: 'cart',
    title: 'Shopping Cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
