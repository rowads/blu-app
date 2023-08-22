import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-navigation',
  templateUrl: './sticky-navigation.component.html',
  styleUrls: ['./sticky-navigation.component.scss']
})
export class StickyNavigationComponent implements OnInit {
  title: string = 'Menu'; // Default title
  extraClasses: string[] = [];
  isInnerIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Logic to determine the extra classes and other properties based on input parameters or services
  }
}
