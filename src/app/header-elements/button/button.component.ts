import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  wrapperClass: string = ''; // This should be populated based on your logic

  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }
}
