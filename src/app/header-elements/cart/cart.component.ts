import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItemCount: number = 0; // This should be fetched from a cart service
  cartTotalPrice: number = 0; // This should be fetched from a cart service

  constructor() { }

  ngOnInit(): void {
    // Fetch cart details from a service or state management
  }
}
