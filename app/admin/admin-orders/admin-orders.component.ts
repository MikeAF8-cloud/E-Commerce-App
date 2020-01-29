import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  private orders: Array<any>;
  private showModal: boolean;
  private orderIndex: number;

  constructor(private cart: ShoppingCartService) {
    this.orders = [];
    this.showModal = false;
  }

  ngOnInit() {
    this.cart.getAllOrders().subscribe(res => {
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
