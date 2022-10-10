import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() name: string = 'default-dropdown';
  @Input() options: any = [{
    "id": "1",
    "label": "1"
  }]; 
  show = 'none';
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.show = this.show === 'none' ? 'block' : 'none';
    console.log(this.show, 'this.show >>>');
  }

}
