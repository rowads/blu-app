import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  extraClass: string = ''; // This should be populated based on your logic
  class: string = ''; // This should be populated based on your logic
  iconType: string = ''; // This should be populated based on your logic
  categoriesTitle: string = ''; // This should be populated based on your logic

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
