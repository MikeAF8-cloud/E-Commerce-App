import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/fontawesome-free-brands';
import { AuthUserService } from '../../services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faGoogle = faGoogle;
  loginForm: FormGroup;
  errors: any;

  // tslint:disable-next-line:max-line-length
  regexEmail: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private user: AuthUserService,
              private fb: FormBuilder,
              private router: Router,
              private cart: ShoppingCartService) {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    return this.user.signIn(this.loginForm.value)
    .subscribe(
    data => {
      this.router.navigate(['/']);
      this.errors = null;
      return this.cart.getCartQuantity().subscribe();
    },
    err => {
      this.loginForm.get('password').reset();
      console.log(err.error);
      this.errors = err.error;
    });
  }
}
