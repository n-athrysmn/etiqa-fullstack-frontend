import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    phone: '',
    hobby: [],
    skills: [],
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {}

  register() {
    this.userService.register(this.user)
      .subscribe(
        response => {
          // Check the response for success or failure
          if (response.status) {
            // Registration successful, navigate to the login page or any other desired page
            this.router.navigate(['/']);
          } else {
            // Registration failed, handle the error (display a message, show/hide elements, etc.)
            console.log('Registration failed:', response.message);
          }
        },
        error => {
          // Handle any errors that occur during the API request
          console.log('Error during registration:', error);
        }
      );
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}
