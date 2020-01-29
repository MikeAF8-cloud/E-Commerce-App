import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Input() showButton: boolean;
  private showModal: boolean;

  constructor(private cart: ShoppingCartService) {
    this.showModal = false;
  }

  ngOnInit() {
  }

  closeModal(off: boolean) {
    this.showModal = off;
  }

  increaseQuantity(value: number) {
    if (this.product.quantity) {
      this.product.quantity += value;
    } else {
      this.product.quantity = value;
    }
  }
}
