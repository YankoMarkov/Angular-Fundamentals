import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular: Array<Movie>;
  private theaters: Array<Movie>;
  private popularKids: Array<Movie>;
  private bestDramas: Array<Movie>;
  private searchingMovies: Array<Movie>;
  isSearch: boolean

  constructor(private moviesServices: MoviesService) { }

  search(myQuery) {
    this.moviesServices.findMovie(myQuery.search)
      .subscribe(movies => {
        this.searchingMovies = movies.results;
        if (this.searchingMovies.length > 0) {
          this.isSearch = true;
        } else {
          this.isSearch = false;
        }
      });
  }

  ngOnInit() {
    this.moviesServices.getPopular()
      .subscribe(movies => {
        this.popular = movies.results;
      });
    this.moviesServices.getTheaters()
      .subscribe(movies => {
        this.theaters = movies.results;
      });
    this.moviesServices.getPopularKids()
      .subscribe(movies => {
        this.popularKids = movies.results;
      });
    this.moviesServices.getBestDramas()
      .subscribe(movies => {
        this.bestDramas = movies.results;
      });
  }
}
