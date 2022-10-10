import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  loaded = false;
  productId: string | null = null;
  quantity = 1;
  detail = {
    "itemId": "",
    "name": "",
    "description": "",
    "price": "",
    "img": ""
  };
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private cart: ShoppingCartService, private loader: LoaderService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.loader.showLoader();
    this.cart.getProductById(this.productId).subscribe(res => {
      setTimeout(()=>{ 
        this.loader.hideLoader();
        this.detail = res;
        this.loaded = true;
      }, 2000)
    })
  }

  setQuantity(e: any) {
    this.quantity = e?.target?.value || '1';
  }

  addToCart() {
    this.cart.addToCart({
      ...this.detail,
      quantity: this.quantity
    });
    
    this.router.navigate(['/cart']);
  }
}
