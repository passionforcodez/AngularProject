import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/interface/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-thumb-nails',
  templateUrl: './thumb-nails.component.html',
  styleUrls: ['./thumb-nails.component.scss']
})
export class ThumbNailsComponent implements OnInit {
  modalRef: BsModalRef | undefined;
  @Input() detail: Product = {
    "itemId": "",
    "name": "",
    "description": "",
    "price": "",
    "img": ""
  }; 
  constructor(private shoppingCart: ShoppingCartService, private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal(event: Event) {
    this.modalService.hide();
  }

  addToCart(quantity: string) {
    this.shoppingCart.addToCart({
      ...this.detail,
      quantity: parseInt(quantity)
    });

    this.router.navigate(['/cart']);
  }

  navToDetail() {
    this.router.navigate([`/detail/${this.detail.itemId}`]);
  }
}
