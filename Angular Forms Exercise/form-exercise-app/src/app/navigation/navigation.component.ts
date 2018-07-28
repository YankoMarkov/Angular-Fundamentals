import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private logoutService: AuthService, private router: Router) { }

  logout() {
    this.logoutService.logout()
      .subscribe(data => {
        localStorage.clear();
        this.logoutService.authtoken = "";
        this.router.navigate([""])
      });
  }

  ngOnInit() {
  }

}
