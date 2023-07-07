import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8801/api/users';
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all-users`);
  }

  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${userId}`, updatedData);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${userId}`);
  }
  
  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    // Perform the logout logic here
    this.loggedIn = false;
  }
}
