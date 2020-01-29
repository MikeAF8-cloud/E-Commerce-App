import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  private order: any;

  constructor(private cart: ShoppingCartService, private route: ActivatedRoute) {
    this.order = null;
  }

  ngOnInit() {
    console.log();
    this.cart.getUserOrder(this.route.snapshot.params.orderId)
    .subscribe(
      res => {
        this.order = res;
        console.log(this.order);
      },
      err => {
        console.log(err);
      }
    );
  }

  getTotalPrice() {
    return this.order.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
  }
}
