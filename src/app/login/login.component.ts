import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  login() {
    this.userService.login(this.credentials)
      .subscribe(
        response => {
          // Check the response for success or failure
          if (response.status) {
            // Login successful, navigate to the desired page
            // You can store user data or authentication token in local storage or a service for future use
            this.router.navigate(['/dashboard']);
          } else {
            // Login failed, handle the error (display a message, show/hide elements, etc.)
            console.log('Login failed:', response.message);
          }
        },
        error => {
          // Handle any errors that occur during the API request
          console.log('Error during login:', error);
        }
      );
  }

  goToRegistration() {
    this.router.navigate(['/register']);
  }
}
