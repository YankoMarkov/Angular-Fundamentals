import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private popular: Movies;
  private theaters: Movies;
  private popularKids: Movies;
  private bestDramas: Movies;
  constructor(private moviesServices: MoviesService) { }

  ngOnInit() {
    this.moviesServices.getPopular()
      .subscribe(data => {
        this.popular = data;
        console.log(data.results);
      });
    this.moviesServices.getTheaters()
      .subscribe(data => {
        this.theaters = data;
      });
    this.moviesServices.getPopularKids()
      .subscribe(data => {
        this.popularKids = data;
      });
    this.moviesServices.getBestDramas()
      .subscribe(data => {
        this.bestDramas = data;
      });
  }

}
