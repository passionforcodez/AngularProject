import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './pages/item-list/item-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { ThumbNailsComponent } from './components/thumb-nails/thumb-nails.component';
import { ModalComponent } from './components/modal/modal.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemDetailComponent,
    CartComponent,
    ThumbNailsComponent,
    ModalComponent,
    DropdownComponent,
    LoaderComponent,
    CartItemComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    BsDropdownModule
  ],
  providers: [BsDropdownConfig,BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
