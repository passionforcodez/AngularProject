import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  lists: Product[] = [];
  constructor(private shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCart.getProductLists().subscribe((res) => {
      this.lists = res.results || [];
    });
  }
}
