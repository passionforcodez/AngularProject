import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
// import { ModalDirective } from 'ngx-bootstrap/modal';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interface/product';
import { quantityList } from 'src/app/app.constant';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('childModal') public childModal:any = "";
  quantity = 1;
  quantityList = quantityList;
  
  @Input() modalName: string = '';

  @Input() detail: Product = {
    itemId: "",
    name: "",
    description: "",
    price: "",
    img: ""
  };

  @Output() onSuccess = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  setQuantity(e: any) {
    this.quantity = e?.target?.value || '1';
  }

  closePopup() {
    this.close.emit();
  }

  onOk() {
    this.onSuccess.emit(this.quantity);
    this.close.emit();
  }

}
