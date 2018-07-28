import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel
  loginFailed: boolean;
  errMessage: string;

  constructor(private loginService: AuthService, private router: Router) {
    this.loginModel = new LoginModel("", "")
  }

  login() {
    this.loginService.login(this.loginModel)
      .subscribe(
        data => {
          this.loginService.authtoken = data['_kmd']['authtoken'];
          localStorage.setItem('authtoken', data['_kmd']['authtoken']);
          localStorage.setItem('username', data['username']);
          this.router.navigate(['/home']);
        },
        err => {
          this.loginFailed = true;
          this.errMessage = err['error']['description'];
        });
  }

  ngOnInit() {
  }

}
