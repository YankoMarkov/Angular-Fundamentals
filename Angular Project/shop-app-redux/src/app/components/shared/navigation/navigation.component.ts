import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  logout() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
}
