import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthUserService } from '../services/auth-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  faUser = faUser;
  faCart = faShoppingCart;

  private quantity: number;

  constructor(private user: AuthUserService, private cart: ShoppingCartService) {
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

  changeQuantity(amount: number): void {
    this.quantity = this.quantity + amount;
  }
}
