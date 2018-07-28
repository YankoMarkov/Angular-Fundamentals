import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = "kid_SkawqYuEm"
const appSecret = "c445f0a29fe64685ba1eb84837a7093e"
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentAuthtoken;

  constructor(private httpClient: HttpClient) { }

  register(registerModel: RegisterModel) {
    return this.httpClient.post(
      registerUrl,
      JSON.stringify(registerModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    );
  }

  login(loginModel: LoginModel) {
    return this.httpClient.post(
      loginUrl,
      JSON.stringify(loginModel),
      {
        headers: this.createAuthHeaders('Basic')
      }
    );
  }

  logout() {
    return this.httpClient.post(
      logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      }
    );
  }

  private createAuthHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      });
    } else {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      });
    }
  }

  isLoggedIn() {
    return this.currentAuthtoken === localStorage.getItem('authtoken');
  }

  get authtoken() {
    return this.currentAuthtoken;
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value;
  }
}
