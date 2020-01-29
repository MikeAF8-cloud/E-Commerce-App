import { ShoppingCartService } from './shopping-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  user$: Observable<firebase.User>;
  user: string;
  auth: string;
  id: string;

  constructor(private http: HttpClient,
              private router: Router) {
     if (localStorage.token) {
      const userData = jwtDecode(localStorage.token);

      this.user = userData.name;
      this.auth = userData.auth;
      this.id = userData.sub;
     } else {
        this.user = this.auth = this.id = null;
     }
  }

  signIn(userData) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    return this.http.post<any>('http://localhost:8080/api/signin', userData, {headers})
    .pipe(
      map(data => {
        localStorage.setItem('token', data.token);
        const decodedToken = jwtDecode(data.token);

        this.user = decodedToken.name;
        this.auth = decodedToken.auth;
        this.id = decodedToken.sub;
        return data;
      })
    );
  }

  signUp(userData) {
    const objCopy = Object.assign({}, userData);

    const dateString = objCopy.dob.split('/');
    objCopy.dob = {
      month: dateString[0],
      day: dateString[1],
      year: dateString[2]
    };

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    const obs = this.http.post<any>('http://localhost:8080/api/signup', objCopy, {headers});

    return obs.pipe(
      map(res => {
        return res;
      })
    );
  }

  getUserShippingInfo() {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    );

    const params = new HttpParams().set('user', this.id);

    return this.http.get<any>('http://localhost:8080/api/user/checkout/address/get', {
      headers,
      params
    }).pipe(map(res => res));
  }

  getUserBillingInfo() {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    );

    const params = new HttpParams().set('user', this.id);

    return this.http.get<any>('http://localhost:8080/api/user/checkout/card/get', {
      headers,
      params
    }).pipe(map(res => res));
  }

  logout() {
    localStorage.removeItem('token');
    this.user = this.auth = this.id = null;
  }

  getAuth() {
    return this.auth;
  }

  getUser() {
    return this.user;
  }

  getId() {
    return this.id;
  }
}
