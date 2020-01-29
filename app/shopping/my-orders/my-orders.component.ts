import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  private orders: Array<any>;
  private showModal: boolean;
  private orderIndex: number;

  constructor(private cart: ShoppingCartService) {
    this.orders = [];
    this.showModal = false;
   }

  ngOnInit() {
    this.cart.getAllUserOrders().subscribe(res => {
      this.orders = res.orders;
    });
  }

  toggleModal(index: number) {
    this.showModal = true;
    this.orderIndex = index;
  }

  closeModal(value: boolean) {
    this.showModal = value;
  }

}
