import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthUserService } from './auth-user.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private user: AuthUserService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot): boolean {
      const token = localStorage.token;

      if (token) {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.exp * 1000 + ', ' + Date.now());
        if (decodedToken.exp * 1000 > Date.now()) {
          return true;
        }
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
