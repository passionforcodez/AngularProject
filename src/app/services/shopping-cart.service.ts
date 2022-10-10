import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PRODUCT_LIST } from '../fixtures/product-list';
import { CartItem } from 'src/app/interface/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  ​cartItems$ = new BehaviorSubject<CartItem[]>([]);

  constructor() {}

  getProductLists(): Observable<any> {
    const prodLists = of(PRODUCT_LIST);
    return prodLists;
  }

  getProductById(id: string | null): Observable<any> {
    const fetchedProd = PRODUCT_LIST.results.find(prod => (prod.itemId === id)) || {};
    return of(fetchedProd);
  }

  addToCart(prodDetail: CartItem) {
    if (prodDetail) {
      const cartItems = this.​cartItems$.getValue();
      this.​cartItems$.next([...cartItems, prodDetail]);
    }
  }

  removeCart(prodDetail: CartItem) {
    const cartItems = this.​cartItems$.getValue();
    const cartIndex = cartItems.findIndex((item: CartItem) => {
      return item.itemId === prodDetail.itemId;
    });
    if (cartIndex > -1) {
      cartItems.splice(cartIndex, 1);
      this.​cartItems$.next(cartItems);
    }
  }

  clearCart() {
    this.​cartItems$.next([]);
  }
}
