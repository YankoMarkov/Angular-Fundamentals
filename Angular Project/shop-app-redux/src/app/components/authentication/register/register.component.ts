import { Component } from '@angular/core';
import { RegisterModel } from '../../../core/models/auth/register.model';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel: RegisterModel;

  constructor(private authService: AuthService) {
    this.registerModel = new RegisterModel("", "", "");
  }

  signUp() {
    this.authService.register(this.registerModel)
      .subscribe();
  }
}
