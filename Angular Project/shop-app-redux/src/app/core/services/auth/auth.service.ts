import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from '../../models/auth/register.model';
import { LoginModel } from '../../models/auth/login.model';

const loginUrl = 'http://localhost:5000/auth/signin';
const registerUrl = 'http://localhost:5000/auth/signup';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  register(body: RegisterModel) {
    return this.http.post(registerUrl, body);
  }

  login(body: LoginModel) {
    return this.http.post(loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  isAdmin() {
    if (this.user) {
      return this.user.isAdmin;
    }
    return false;
  }

  get user() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser;
  }
}