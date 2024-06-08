import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  addToFavorites(movie: any): void {

    console.log('Film aggiunto ai preferiti:', movie);
  }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }
}


