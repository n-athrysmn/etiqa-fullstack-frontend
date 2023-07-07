import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private loggedIn = false;
  
    constructor() { }
  
    // Method to check if the user is logged in
    isLoggedIn(): boolean {
      return this.loggedIn;
    }
  
    // Method to simulate user login
    login(): void {
      // Perform the login logic here, such as calling an authentication API
      this.loggedIn = true;
    }
  
    // Method to simulate user logout
    logout(): void {
      // Perform the logout logic here
      this.loggedIn = false;
    }
  }

