import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../core/models/auth/login.model';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: LoginModel;

  constructor(private authService: AuthService) {
    this.loginModel = new LoginModel("", "");
  }

  ngOnInit() {
  }

  signIn() {
    this.authService
      .login(this.loginModel)
      .subscribe();
  }
}
