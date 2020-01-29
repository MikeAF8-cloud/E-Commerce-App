import { AuthUserService } from './auth-user.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private headers: HttpHeaders;
  private cart: number;


  constructor(private http: HttpClient, private user: AuthUserService) {
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    );

    this.clearCartCount();
  }

  getCartQuantity() {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    );
    const params = new HttpParams().set('user', this.user.getId());

    console.log(this.user.getAuth());
    return this.http.get<any>('http://localhost:8080/api/user/products/shopping_cart/amount', {
      headers: this.headers,
      params
    })
    .pipe(map(res => {
      this.cart = res.amount;
      return res;
    }));
  }

  addToCart(item: any) {
    return this.http.post<any>('http://localhost:8080/api/user/product/shopping_cart/add', item, {
      headers: this.headers
    })
    .pipe(map(res => res));
  }

  incrementCart(quantity: number) {
    this.cart = this.cart + quantity;
  }

  clearCartCount() {
    this.cart = 0;
  }

  getCartValue() {
    return this.cart;
  }

  getCart() {
    const params = new HttpParams().set('user', this.user.getId());
    return this.http.get<any>('http://localhost:8080/api/user/products/shopping_cart/user_products', {
      headers: this.headers,
      params
    }).pipe(map(res => res));
  }

  changeProductQuantity(productId: number, num: number) {
    const data = {
      user: this.user.getId(),
      product: productId,
      quantity: num
    };
    return this.http.put<any>('http://localhost:8080/api/user/product/shopping_cart/quantity_change', data,
      { headers: this.headers }).pipe(map(res => res));
  }

  getProductQuantity(productId: string) {
    const params = new HttpParams()
      .set('user', this.user.getId())
      .set('productId', productId);

    return this.http.get<any>('http://localhost:8080/api/user/product/shopping_cart/quantity', {
        headers: this.headers,
        params
      });
  }

  deleteFromCart(productId: string) {
    const params = new HttpParams()
      .set('user', this.user.getId())
      .set('productId', productId);

    return this.http.delete<any>('http://localhost:8080/api/user/product/shopping_cart/delete', {
      headers: this.headers,
      params
    }).pipe(map(res => res));
  }

  deleteCart() {
    const params = new HttpParams().set('user', this.user.getId());

    return this.http.delete<any>('http://localhost:8080/api/user/products/shopping_cart/delete', {
        headers: this.headers,
        params
    }).pipe(map(res => res));
  }

  placeOrder(orderData, productData) {
    return this.http.post<any>('http://localhost:8080/api/user/checkout/order/place',
          Object.assign({}, orderData, {products: productData}, {user: this.user.getId()}),
          {headers: this.headers}).pipe(map(res => res));
  }

  getAllOrders() {
    return this.http.get<any>('http://localhost:8080/api/admin/orders/all',
      {headers: this.headers}).pipe(map(res => res));
  }

  getAllUserOrders() {
    const params = new HttpParams().set('user', this.user.getId());

    return this.http.get<any>('http://localhost:8080/api/user/orders/all', {
      headers: this.headers,
      params
    }).pipe(map(res => res));
  }

  getUserOrder(orderId) {
    const params = new HttpParams().set('orderId', orderId).set('user', this.user.getId());

    return this.http.get<any>('http://localhost:8080/api/user/order/confirmed', {
      headers: this.headers,
      params
    }).pipe(map(res => res));
  }
}
