import { AuthUserService } from './auth-user.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private user: AuthUserService, private router: Router) { }

  canActivate(): boolean {

    const token = localStorage.token;

    if (this.user.getAuth() === 'ADMIN') {
        return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
