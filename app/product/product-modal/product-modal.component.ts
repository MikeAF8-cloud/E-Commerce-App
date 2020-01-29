import { AuthUserService } from '../../services/auth-user.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() product;

  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() prodAmount: EventEmitter<number> = new EventEmitter<number>();
  private quantity: number;

  constructor(private http: HttpClient, private cart: ShoppingCartService, private user: AuthUserService) {
    this.quantity = 1;
   }

  ngOnInit() {
    console.log(this.product.imageUrl);
  }

  closeModal() {
    this.toggleModal.emit(false);
  }

  changeQuantity(num: number) {
    this.quantity = this.quantity + num;
  }

  changeProductAmount() {
    this.prodAmount.emit(this.quantity);
  }

  addProdToCart() {
    this.cart.addToCart({
      productId: this.product.id,
      user: this.user.getId(),
      quantity: this.quantity
    })
    .subscribe(res => {
      this.cart.incrementCart(this.quantity);
      this.changeProductAmount();
      this.closeModal();
    });
  }

}
