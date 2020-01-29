import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private products: Array<any>;

  constructor(private cart: ShoppingCartService, private route: Router) {
    this.products = [];
   }

  ngOnInit() {
    this.cart.getCart()
    .subscribe(res => {
      this.products = res.products;
    });
  }

  totalPrice() {
    return this.products.reduce((total, prod) => {
      return total + prod.price * prod.quantity;
    }, 0);
  }

  changeQuantity(title, num, index) {
    this.cart.changeProductQuantity(title, num).subscribe();

    this.cart.incrementCart(num);
    this.products[index].quantity += num;
  }

  deleteFromCart(id: string, title: string, quantity: number) {
    if (confirm(`Are you sure you want to delete ${title} from your cart`)) {
      this.cart.deleteFromCart(id).subscribe(res => {
        this.products = this.products.filter(prod => prod.id !== id);
        this.cart.incrementCart(-quantity);
      });
    }
  }

  deleteCart() {
    if (confirm('Are you sure you want to delete your shopping cart')) {
      this.cart.deleteCart().subscribe(() => {
        this.cart.clearCartCount();
        this.products = [];
      });
    }
  }
}
