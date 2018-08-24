import { Component } from '@angular/core';
import { LoginModel } from '../../../core/models/auth/login.model';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel: LoginModel;

  constructor(private authService: AuthService) {
    this.loginModel = new LoginModel("", "");
  }

  signIn() {
    this.authService.login(this.loginModel)
      .subscribe();
  }
}
