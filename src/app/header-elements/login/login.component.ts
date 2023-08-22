import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLoggedIn = false; // This should be fetched from an authentication service

  logout(): void {
    // Implement logout logic here
  }
}
