import { Component, OnInit, Input } from '@angular/core';
import { quantityList } from 'src/app/app.constant';
import { CartItem } from 'src/app/interface/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem = {
    itemId: '',
    name: '',
    description: '',
    price: '',
    quantity: 0
  };
  quantityList = quantityList;
  currentQuantity: any = this.cartItem.quantity || 1;
  totalPrice: any = 0;

  constructor(private shoppingCart: ShoppingCartService) { }

  ngOnInit(): void {
    this.calculateTotalPrice((this.cartItem.quantity || 1));
  }

  quantityListener(e: any) {
    this.currentQuantity = parseInt(e?.target?.value);
    this.calculateTotalPrice(this.currentQuantity);
  }

  calculateTotalPrice(quantity: any) {
    this.totalPrice = parseFloat(quantity) * parseFloat(this.cartItem.price);
  }

  getSelectedState(qty: any) {
    return qty.id == this.currentQuantity;
  }

  removeProd() {
    this.shoppingCart.removeCart(this.cartItem)
  }
}
