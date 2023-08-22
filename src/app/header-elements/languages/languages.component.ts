import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: any[] = []; // This should be fetched from a service
  currentLanguage: any; // This should be fetched from a service

  constructor() { }

  ngOnInit(): void {
    // Fetch languages and set the current language
  }
}
