import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';

const apiKey = '5d7c0cf8e250a95e35b469f24a1e86f0';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private theaters: string = 'discover/movie?primary_release_date.gte=2017-09-15&primary_release_date.lte=2018-07-22';
  private popularKids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  private bestDramas: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  private authentication: string = '&api_key=';
  constructor(private httpClient: HttpClient) { }

  getPopular() {
    return this.httpClient.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheaters() {
    return this.httpClient.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
  }

  getPopularKids() {
    return this.httpClient.get<Movies>(`${this.path}${this.popularKids}${this.authentication}${apiKey}`);
  }

  getBestDramas() {
    return this.httpClient.get<Movies>(`${this.path}${this.bestDramas}${this.authentication}${apiKey}`);
  }
}
