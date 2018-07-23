import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

const apiKey = '5d7c0cf8e250a95e35b469f24a1e86f0';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private path: string = 'https://api.themoviedb.org/3/';
  private popular: string = 'discover/movie?sort_by=popularity.desc';
  private theaters: string = 'discover/movie?primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-09-30';
  private popularKids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  private bestDramas: string = 'discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10';
  private search: string = 'search/movie'
  private query: string = '?query='
  private authentication: string = '&api_key=';
  private movieAuth: string = '?api_key=';
  private movie: string = 'movie/';

  constructor(private httpClient: HttpClient) { }

  findMovie(myQuery) {
    return this.httpClient.get<Movies>(`${this.path}${this.search}${this.query}${myQuery}${this.authentication}${apiKey}`);
  }

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

  getMovie(id) {
    return this.httpClient.get<Movie>(`${this.path}${this.movie}${id}${this.movieAuth}${apiKey}`);
  }
}
