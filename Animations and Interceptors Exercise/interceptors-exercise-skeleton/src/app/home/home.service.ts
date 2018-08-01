import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeModel } from './models/home.model';

const statusUrl = 'http://localhost:5000/stats'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getStatus() {
    return this.http.get<HomeModel>(statusUrl);
  }
}
