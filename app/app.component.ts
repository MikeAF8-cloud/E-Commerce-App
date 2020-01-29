import { ShoppingCartService } from './services/shopping-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthUserService } from './services/auth-user.service';
import { Component } from '@angular/core';

import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-frontend';

  constructor(private user: AuthUserService,
              private router: Router,
              private route: ActivatedRoute,
              private cart: ShoppingCartService) {

      if (!localStorage.token) {
        this.user.user = this.user.auth = null;
        this.router.navigate(['/login']);
      } else {
        const decodedToken = jwtDecode(localStorage.token);

        if (decodedToken.exp * 1000 < Date.now()) {
            console.log(decodedToken.exp * 1000 + ', ' + Date.now());

            localStorage.removeItem('token');
            this.user.user = this.user.auth = this.user.id = null;
            this.router.navigate(['/login']);
          } else {
            console.log(decodedToken.exp * 1000 + ', ' + Date.now());
            this.user.user = decodedToken.name;
            this.user.auth = decodedToken.auth;
            this.user.id = decodedToken.sub;

            this.cart.getCartQuantity().subscribe();
          }
      }
}

}
