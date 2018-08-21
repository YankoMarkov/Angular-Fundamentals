import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../core/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  users: number;
  products: number;
  categories: number;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.username = JSON.parse(localStorage.getItem('currentUser')).username;
      this.homeService.getStatus()
        .subscribe(data => {
          this.users = data.users;
          this.products = data.products;
          this.categories = data.categories;
        })
    }
  }
}
