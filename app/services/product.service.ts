import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';

import { AuthUserService } from './auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router, private user: AuthUserService) {
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    );
  }

  saveProduct(productData) {
    return this.http.post<any>('http://localhost:8080/api/admin/product/new', productData, { headers: this.headers })
    .pipe(map(res => res.products));
  }

  getProducts(imageFlag: string, getUserCart: string) {
    const params = new HttpParams()
      .set('imageFlag', imageFlag)
      .set('user', getUserCart ? this.user.getId() : null);

    return this.http.get<any>('http://localhost:8080/api/user/products', {
      headers: this.headers,
      params
   })
    .pipe(map(res => res));
  }

  updateProduct(productData, productID) {
    const params = new HttpParams().set('productID', productID);

    return this.http.post<any>(`http://localhost:8080/api/admin/product`,
    productData, {
      headers: this.headers,
      params
    })
    .pipe(map(res => res));
  }

  productInfo(productID) {
    const params = new HttpParams().set('productID', productID);

    return this.http.get<any>('http://localhost:8080/api/admin/product/productInfo', {
      headers: this.headers,
      params
    })
    .pipe(map(res => res));
  }

  deleteProduct(productID) {
    const params = new HttpParams().set('productID', productID);

    return this.http.delete<any>('http://localhost:8080/api/admin/product/delete', {
      headers: this.headers,
      params
    })
    .pipe(map(res => res));
  }
}
