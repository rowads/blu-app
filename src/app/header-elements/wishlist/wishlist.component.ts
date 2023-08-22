import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlistItemCount: number = 0; // This should be fetched from a wishlist service

  constructor() { }

  ngOnInit(): void {
    // Fetch wishlist details from a service or state management
  }
}
