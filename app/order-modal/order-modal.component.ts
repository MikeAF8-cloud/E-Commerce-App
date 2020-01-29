import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {
  @Input() order;

  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.toggleModal.emit(false);
  }

  getTotalPrice() {
    return this.order.products.reduce((total, currentValue) => total + currentValue.price * currentValue.quantity, 0);
  }
}
