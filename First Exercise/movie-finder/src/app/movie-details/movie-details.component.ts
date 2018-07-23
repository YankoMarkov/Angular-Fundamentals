import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private movie: Movie
  private id: number

  constructor(
    private route: ActivatedRoute,
    private moviesServices: MoviesService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = +params['id'];
        this.moviesServices.getMovie(this.id)
          .subscribe(movie => {
            this.movie = movie;
          });
      });
  }
}
