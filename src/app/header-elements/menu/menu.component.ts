import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = []; // Replace with appropriate type

  constructor() { }

  ngOnInit(): void {
    // Fetch menu items from a service or API
  }
}
