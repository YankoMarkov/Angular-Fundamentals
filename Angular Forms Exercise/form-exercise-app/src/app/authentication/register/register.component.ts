import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerModel: RegisterModel
  registerFailed: boolean;
  errMessage: string;

  constructor(private registerService: AuthService, private router: Router) {
    this.registerModel = new RegisterModel('', '', '', '', '')
  }

  register() {
    delete this.registerModel['confirmPassword'];
    this.registerService.register(this.registerModel)
      .subscribe(
        data => {
          this.router.navigate(['/login'])
        },
        err => {
          this.registerFailed = true;
          this.errMessage = err['error']['description'];
        }
      );
  }

  ngOnInit() {
  }

}
