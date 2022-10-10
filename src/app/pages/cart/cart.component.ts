import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { CartItem } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
    })
  }
}
