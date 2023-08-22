import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  extraClass: string = ''; // This should be populated based on your logic
  iconDesignCondition: boolean = false; // This should be populated based on your logic
  iconType: string = ''; // This should be populated based on your logic

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
