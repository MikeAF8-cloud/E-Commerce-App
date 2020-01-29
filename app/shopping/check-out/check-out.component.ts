import { AuthUserService } from '../../services/auth-user.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { FormDataService } from '../../services/form-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  checkoutForm: FormGroup;
  states: Array<string>;
  userShippingAddress: any;
  userBillingInfo: Array<any>;
  products: Array<any>;

  regexStreet: any = /^\d+\s[A-z]+\s[A-z]+\.?/;

  regexCardNumber: any = /\d{16}/;
  // tslint:disable-next-line:max-line-length
    // Actual Card Regex: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

    regexExpDate = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  regexSecurityCode = /^[0-9]{3,4}$/;

  constructor(private fb: FormBuilder, private cart: ShoppingCartService, private user: AuthUserService, private router: Router) {
    this.states = FormDataService.getStates();
    this.products = [];
    this.userBillingInfo = [];
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get streetAddress() {
    return this.checkoutForm.get('address.streetAddress');
  }

  get city() {
    return this.checkoutForm.get('address.city');
  }

  get state() {
    return this.checkoutForm.get('address.state');
  }

  get zipcode() {
    return this.checkoutForm.get('address.zipcode');
  }

  get card() {
    return this.checkoutForm.get('card');
  }

  get saveCard() {
    return this.checkoutForm.get('card.saveCard');
  }

  get cardNumber() {
    return this.checkoutForm.get('card.cardNumber');
  }

  get cardHolder() {
    return this.checkoutForm.get('card.cardHolder');
  }

  get expDate() {
    return this.checkoutForm.get('card.expDate');
  }

  get securityCode() {
    return this.checkoutForm.get('card.securityCode');
  }

  ngOnInit() {
    this.user.getUserShippingInfo().subscribe(res => this.userShippingAddress = res);
    this.user.getUserBillingInfo().subscribe(res => {
      this.userBillingInfo = res.cards;
      console.log(this.userBillingInfo);
    });
    this.cart.getCart().subscribe(res => this.products = res.products);

    this.checkoutForm = this.fb.group({
      address: this.fb.group({
        streetAddress: ['', [Validators.required, Validators.pattern(this.regexStreet)]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
      }),
      card: this.fb.group({
        saveCard: [false, []],
        cardNumber: ['' , [Validators.required, Validators.pattern(this.regexCardNumber)]],
        cardHolder: ['', [Validators.required]],
        expDate: ['', [Validators.required, Validators.pattern(this.regexExpDate)]],
        securityCode: ['', [Validators.required, Validators.pattern(this.regexSecurityCode)]]
      })
    });
  }

  onSubmit() {
    this.cart.placeOrder(this.checkoutForm.value, this.products)
    .subscribe(res => {
      this.router.navigate(['/order-success', res.orderID]);
      this.cart.clearCartCount();
    }, err => console.log(err));
  }

  getUserAddress(value: boolean) {
    if (value) {
      this.streetAddress.setValue(this.userShippingAddress.address.streetAddress);
      this.city.setValue(this.userShippingAddress.address.city);
      this.state.setValue(this.userShippingAddress.address.state);
      this.zipcode.setValue(this.userShippingAddress.address.zipcode);
    } else {
      this.address.reset();
    }
  }

  getCardInfo(index) {

    if (!this.saveCard.value) {
      this.cardNumber.setValue(this.userBillingInfo[index - 1].cardNumber);
      this.cardHolder.setValue(this.userBillingInfo[index - 1].cardHolder);
      this.expDate.setValue(this.userBillingInfo[index - 1].expDate);
      this.securityCode.setValue(this.userBillingInfo[index - 1].securityCode);
    } else {
      this.card.reset();
    }
  }

  getTotalPrice() {
    return this.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
  }
}
